/**
 * Lighthouse CI config.
 *
 * Budgets sourced from docs/strategy/performance-accessibility.md.
 *
 * Form factor: MOBILE (the strategy doc § "Lighthouse mobile scores" is the
 * authoritative target). Lighthouse defaults to mobile emulation + throttling,
 * so we simply don't set `preset: "desktop"`.
 *
 * Enforcement (Phase 1, post `perf-budget`): the structure/CPU/DOM budgets that
 * every page passes are hard `error` — a11y = 100, BP = 100, SEO ≥ 95, CLS,
 * TBT, CSS, total. `resource-summary:script:size` and `total-blocking-time` are
 * hard `error` at realistic per-URL values (see below): the lean marketing
 * pages hold the strict bar, while `/contact` (which ships the form's JS) gets
 * a higher ceiling so the gate catches regressions without flapping on noise.
 *
 * Two budgets stay `warn`, by design — and for two DIFFERENT reasons, which must
 * not be merged when either is described in copy:
 *   - `categories:performance` (≥ 0.95): some audited pages sit just under,
 *     within run-to-run score variance, so a hard gate would flake. Revisit
 *     if/when a further JS cut adds margin.
 *
 *     Measured on run 30460082299 (`5b26d1c`, 2026-07-29), 8 URLs × 3 runs:
 *     **4 of 8 warn**, at median 0.91 / 0.93 / 0.93 / 0.94. The other four
 *     cleared 0.95. One warning page returned `0.61, 0.92, 0.93` — a lone
 *     outlier in an otherwise tight set, almost certainly runner noise rather
 *     than a page defect, but the reason the gate reads the median and the
 *     reason it is `warn`. **If a single run ever decides something, look at
 *     all three values before believing it.**
 *
 *     ⚠️ This block replaces a note reading "4 of 6 pages pass; `/services`
 *     (0.94) and `/contact` (0.90) sit just under" — stale on both counts (the
 *     list is EIGHT URLs, and bare `/services` was never in it;
 *     `/services/web-development` is), and it had been quoted as current fact
 *     in page copy. **Re-measure before printing a count anywhere**, and date
 *     the measurement here when you do, as above.
 *   - `largest-contentful-paint` (≤ 2000ms): localhost `next start` under mobile
 *     throttling (no CDN, no HTTP/2, no edge cache) reports ~2.5–3.3s, which is
 *     pessimistic versus the Vercel edge. Production LCP is verified via Vercel
 *     Speed Insights field data, not this lab number.
 *
 * Script budget reality: the strategy doc's original 170KB (gzipped) figure was
 * unreachable for this React 19 + Next 16 App Router stack — the framework floor
 * alone is ~190KB gzip. After fixing a barrel-file leak (zod + react-hook-form
 * were shipping site-wide; PR #37), non-form pages are ~254KB and `/contact`
 * (which legitimately ships the form's zod + RHF) is ~358KB. The error budgets
 * below sit just above those with headroom, per the doc's "Budget exception
 * process". The doc's numbers were corrected to match.
 *
 * URL list: the indexable critical templates. Deliberately excludes `noindex`
 * pages (`/legal/*`, `/dev/components`) — Lighthouse's SEO category fails any
 * page blocked from indexing, so scanning them would be a false negative.
 * The industry template is covered by one representative URL. The location hub
 * and programmatic service×location templates are NOT scanned in Phase 0 — no
 * area has authored copy yet, so those routes prerender nothing and a 404 would
 * fail the SEO and best-practices assertions. Phase 2 adds
 * `/locations/manchester` and `/services/<svc>/manchester` back; blog (Phase 3)
 * joins as it ships.
 */
const PORT = Number(process.env.PORT ?? 3000);
const BASE_URL = `http://localhost:${PORT}`;

/** Budgets shared by every URL group. */
const SHARED = {
  "categories:accessibility": ["error", { minScore: 1.0 }],
  "categories:best-practices": ["error", { minScore: 1.0 }],
  "categories:seo": ["error", { minScore: 0.95 }],
  "cumulative-layout-shift": ["error", { maxNumericValue: 0.05 }],
  "total-blocking-time": ["error", { maxNumericValue: 200 }],
  "resource-summary:stylesheet:size": ["error", { maxNumericValue: 30000 }],
  "resource-summary:total:size": ["error", { maxNumericValue: 600000 }],
  // Warn-only — see header (lab-vs-CDN gap + sub-0.95 margin on 2 pages).
  "categories:performance": ["warn", { minScore: 0.95 }],
  "largest-contentful-paint": ["warn", { maxNumericValue: 2000 }],
};

module.exports = {
  ci: {
    collect: {
      startServerCommand: `corepack pnpm start --port ${PORT}`,
      startServerReadyPattern: "Ready in",
      url: [
        `${BASE_URL}/`,
        `${BASE_URL}/services/web-development`,
        `${BASE_URL}/pricing`,
        `${BASE_URL}/about`,
        `${BASE_URL}/process`,
        `${BASE_URL}/contact`,
        // Phase 2 templates — one representative per new render path. Both are
        // lean prose/MDX pages (PageHero + prose + CrossLinkGrid + FAQ + CTA)
        // and fall under the catch-all lean-interior budget below.
        `${BASE_URL}/industries/aesthetic-clinics`,
        `${BASE_URL}/locations/manchester`,
      ],
      numberOfRuns: 3,
      settings: {
        skipAudits: ["uses-http2", "is-on-https", "redirects-http", "uses-long-cache-ttl"],
      },
    },
    assert: {
      // Per-URL budgets for the form page: /contact ships the contact form's
      // zod + react-hook-form, so it legitimately runs heavier than the lean
      // marketing pages on both script weight AND main-thread blocking. Patterns
      // are mutually exclusive (the catch-all excludes /contact via lookahead).
      assertMatrix: [
        {
          matchingUrlPattern: "/contact$",
          assertions: {
            ...SHARED,
            "resource-summary:script:size": ["error", { maxNumericValue: 390000 }],
            // /contact TBT rides the 200ms gate's edge in the CI lab (the form
            // bundle's parse/eval); it landed 195–238ms across recent runs and
            // flaps the hard gate on otherwise-unrelated PRs. Give it a realistic
            // ceiling here; the 5 lean pages keep the strict 200ms from SHARED.
            "total-blocking-time": ["error", { maxNumericValue: 300 }],
          },
        },
        {
          // Home (`/`) is the richest page — hero (typewriter + decoration) plus
          // 4 problem/solution sections, stats, process strip, pricing anchor,
          // FAQ and two CTA bands. Its first-load JS (~378KB in the CI lab) runs
          // heavier than the lean interior pages, and the 285K catch-all below
          // would only be met by gutting content the page is meant to carry.
          // Real perf stays in tolerance (TBT passes; perf-score/LCP are warn,
          // and LCP localhost is pessimistic vs. the Vercel edge). Pattern matches
          // only the site root (`:<port>/`), not the interior `/path` URLs.
          matchingUrlPattern: ":\\d+/$",
          assertions: {
            ...SHARED,
            "resource-summary:script:size": ["error", { maxNumericValue: 410000 }],
          },
        },
        {
          // Lean interior pages keep the strict bar. Excludes /contact (form JS)
          // and the home root (both handled above).
          matchingUrlPattern: "^(?!.*/contact$)(?!.*:\\d+/$).*$",
          assertions: {
            ...SHARED,
            "resource-summary:script:size": ["error", { maxNumericValue: 285000 }],
          },
        },
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
