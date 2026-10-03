# Performance & Accessibility

> Core Web Vitals budget and WCAG 2.2 AA — what CI enforces, and what it only warns on (LCP and the
> performance score warn; INP is not audited). _(Tagline corrected 3 October 2026; it said "enforced in CI,
> not aspirational", which its own Lighthouse note below contradicts.)_

---

## Performance budget

Verified on 4 representative URLs every PR via Lighthouse CI:

- `/` (home)
- `/services/web-development` (service template)
- `/services/crm-automation/manchester` (programmatic template)
- `/blog/[a-sample-post]` (blog template)

### Core Web Vitals targets

| Metric        | "Good" (Google) | Naxdor budget | Why the budget sits under Google's bar     |
| ------------- | --------------- | ------------- | ------------------------------------------ |
| **LCP**       | ≤ 2.5s          | **≤ 2.0s**    | Headroom under Google's line ²             |
| **INP**       | ≤ 200ms         | **≤ 200ms**   | New CWV replacing FID; match Google's good |
| **CLS**       | ≤ 0.1           | **≤ 0.05**    | Half of Google's bar — strong margin       |
| **TBT** (lab) | < 200ms         | **≤ 200ms** ¹ | Correlates loosely with INP                |

¹ Per-URL in CI: lean pages hold **≤ 200ms**; `/contact` (ships the form's JS) is **≤ 300ms** — see the TBT note below.

² _Corrected 1 October 2026._ This cell read "1s mobile delay ≈ −20% conversion", inherited from the
fork with no source in `docs/`. Do not quote any conversion, bounce or revenue figure for speed in
copy unless a primary source is read and dated. Note also that LCP ≤ 2.0s is a **target** that CI
only warns on; INP is not audited in CI at all (`.lighthouserc.cjs`).

### Google's definitions, read 1 October 2026 (post B3)

Read for `content/blog/core-web-vitals-guide-uk.mdx`; raw copies in the git-ignored
`.playwright-mcp/seo/b3/raw/`. Re-read before quoting any of these in new copy.

- **Bands** (PageSpeed Insights "About", developers.google.com/speed/docs/insights/v5/about, last
  updated 2024-10-21; Search Console's report help draws the same lines): LCP good to 2,500 ms,
  poor over 4,000 ms; INP good to 200 ms, poor over 500 ms; CLS good to 0.1, poor over 0.25.
  Judged at the 75th percentile, mobile and desktop separately (web.dev/articles/vitals).
- **INP replaced FID** "on March 12, 2024" (Search Central blog, "Introducing INP to Core Web
  Vitals"). "Stable Core Web Vitals metrics won't change more than once per year." (web.dev/articles/vitals)
- **Search** (developers.google.com/search/docs/appearance/page-experience, last updated
  2026-09-22): "Core Web Vitals are used by our ranking systems." Good results "doesn't guarantee
  that your pages will rank at the top of Google Search results"; "There is no single signal."
  Never write "ranking factor", "boost" or "tie-breaker" in Google's name.
- **Field versus lab**: field data "is what Google uses to determine whether a site meets the
  recommended Core Web Vitals thresholds" (web.dev, Getting started with measuring Web Vitals);
  INP "can't be measured in lab environments"; Total Blocking Time is "not a substitute for INP in
  and of itself" (web.dev/articles/tbt). PageSpeed Insights' field data covers the previous 28 days
  and its lab run "will report running in one of: North America, Europe, or Asia".
- **No data and no country**: CrUX needs a public, indexable page and a minimum number of visitors —
  "An exact number is not disclosed", and "you cannot manually submit pages or origins for
  inclusion" (developer.chrome.com/docs/crux/methodology). PageSpeed Insights has "No country
  dimensions" (CrUX tools page); a UK-only view exists only in the monthly CrUX BigQuery country
  tables, origin-level, "with the standard eligibility requirements applied at a country level".
  CrUX counts Chrome on desktop and Android only; "Chrome on iOS" is a named exception.

### UK field data by platform, read 3 October 2026 (post D2)

Source: the HTTP Archive Core Web Vitals technology report API (`https://cdn.httparchive.org/v1/cwv`,
geo "United Kingdom of Great Britain and Northern Ireland", rank ALL), CrUX August 2026 — the latest
month on 3 October 2026 (published 8 September 2026; September due 13 October 2026). Raw responses and
the compute script: `.playwright-mcp/web/d2/` (git-ignored). Published in
`/blog/nextjs-vs-wordpress-performance`.

| Phones, UK, Aug 2026 | Sites   | Good CWV | Good LCP | Good INP | Good CLS |
| -------------------- | ------- | -------- | -------- | -------- | -------- |
| Wix                  | 13,241  | 91.0%    | 94.3%    | 97.0%    | 98.2%    |
| Squarespace          | 8,486   | 85.1%    | 90.6%    | 98.5%    | 93.4%    |
| Shopify              | 39,341  | 84.3%    | 93.1%    | 91.9%    | 94.7%    |
| Webflow              | 4,078   | 78.9%    | 85.9%    | 91.8%    | 94.1%    |
| All sites            | 426,634 | 67.4%    | 78.8%    | 86.7%    | 87.5%    |
| WordPress            | 121,260 | 65.8%    | 74.0%    | 93.1%    | 90.8%    |
| Next.js              | 25,299  | 49.0%    | 72.4%    | 66.8%    | 79.1%    |

- **The stack this site is built on had the lowest pass rate of the six.** The gap to WordPress is
  mostly INP (26 points on phones), then CLS; LCP is within 2 points. Desktop: Next.js 64.2%,
  WordPress 66.9%. Worldwide phones: Next.js 35.1%, WordPress 48.7%, all 53.0%. Top 10k UK: Next.js
  42.3% (781), WordPress 70.6% (670). Twelve months: Next.js 40.0% → 49.0%, WordPress 62.1% → 65.8%,
  on changing sets of sites.
- **How the report counts.** A site is good on a metric when at least 75% of its visits are good
  (pipeline: `SAFE_DIVIDE(good, good + needs_improvement + poor) >= 0.75`); "if an origin is missing
  INP data, it's assessed based on the performance of the remaining metrics". Country is "inferred
  from users' IP addresses"; "mobile" is phones only. Technologies are detected by Wappalyzer "on the
  home page and one interior page". HTTP Archive: "correlation does not equal causation".
- **Google on platforms:** "Google does not have any preference as to what architecture or technology
  is used to build a site." (web.dev SPA FAQ, updated 11 August 2026.) Hydration "can have a
  significant negative impact on TBT and INP, even if it improves FCP" (Rendering on the Web, updated
  5 January 2026). Next.js: "add 'use client' to specific interactive components instead of marking
  large parts of your UI as Client Components" (docs, updated 25 August 2026) — the dated source for
  § JavaScript discipline below.
- **Copy consequence.** Never pair "fast" with Next.js or set it against templates or WordPress as a
  platform property; the two-second budget concerns loading (LCP), the metric where the platforms are
  closest, and does not cover INP. Corrected the same day: the home FAQ ("templated builds on shared
  platforms are slow on mobile"), the aesthetic and beauty FAQs, the aesthetic and dental "Fast, …
  on Next.js" lines, the local SEO checklist § 7, the Cheshire and Leeds hubs, and docs/05's
  "usually higher, on improved Core Web Vitals".

### Lighthouse mobile scores

| Category       | Budget                    |
| -------------- | ------------------------- |
| Performance    | ≥ 95                      |
| Accessibility  | **100** (zero compromise) |
| Best Practices | **100**                   |
| SEO            | ≥ 95                      |

### Resource budgets

| Resource                                         | Budget       |
| ------------------------------------------------ | ------------ |
| Total JS (gzipped) — non-form pages              | ≤ 285KB      |
| Total JS (gzipped) — `/contact` (ships the form) | ≤ 390KB      |
| Total CSS (gzipped)                              | ≤ 30KB       |
| Hero image (AVIF)                                | ≤ 80KB       |
| Webfont files (subset, woff2)                    | ≤ 40KB total |
| Total page weight (gzipped)                      | ≤ 600KB      |

CI fails (hard `error`) if any of the above is breached.

> **JS budget recalibration (Phase 1 · `perf-budget`).** The original targets —
> 170KB home / 200KB service — were aspirational and unreachable for this stack:
> React 19 + Next 16 (App Router, Turbopack) ship a ~190KB-gzip framework floor
> before any app code. The first real measurement (PR #36/#37) put every page at
> ~365KB gzip; a barrel-file leak (`ContactForm`'s zod + react-hook-form were
> re-exported from `components/marketing/index.ts`, which every page imports) was
> dragging ~110KB site-wide. Fixing that (import the form directly on `/contact`)
> dropped non-form pages to ~254KB and confined the form deps to `/contact`
> (~358KB). The budgets above sit just above those with headroom. `/contact` gets
> a per-URL allowance (the form genuinely needs the validation libs) per the
> budget-exception process below.

> **TBT budget recalibration (Phase 1 · `chore/lighthouse-tbt-contact-budget`).**
> `total-blocking-time` stays a hard `error`, but per-URL: the 5 lean pages keep
> **≤ 200ms**, while `/contact` gets **≤ 300ms**. The form bundle's parse/eval
> puts `/contact` TBT right on the 200ms edge in the CI lab (195–238ms across
> runs), so a single 200ms gate flapped on unrelated PRs (e.g. a CSS-only change
> that can't touch TBT). The higher `/contact` ceiling still catches real
> regressions; production INP/TBT is verified via Vercel Speed Insights field
> data, not this lab number.

### A note on the Lighthouse mobile-score & LCP budgets

`categories:performance` (≥ 95) and `largest-contentful-paint` (≤ 2.0s) run as
**`warn`**, not `error`, in CI. Two reasons: (1) LHCI runs against `next start`
on a CI VM — no CDN, no HTTP/2, no edge cache — so its throttled-mobile LCP
(~2.5–3.3s) is systematically pessimistic versus the Vercel edge (where these
assets are brotli-compressed and edge-cached); production CWV is the source of
truth and is tracked via **Vercel Speed Insights field data**. (2) Post-leak-fix,
4 of 6 critical pages already score ≥ 0.95; `/services` (0.94) and `/contact`
(0.90) sit within score variance of the bar, so a hard gate would flake. Flip
these to `error` once a further JS cut adds reliable margin.

---

## How we hit the budget

### Server-first rendering

- **React Server Components** by default. Client components only where interaction is required (forms, accordion, mobile-nav toggle).
- **Server Actions** for form submission. No client-side data fetching for marketing pages.
- **Static generation** (`force-static` or `revalidate: false`) for all marketing pages. Programmatic pages also static.
- **ISR** (revalidate on push) for blog/case studies.

### Image strategy

- `next/image` everywhere, never raw `<img>`.
- **AVIF first**, WebP fallback, no JPG/PNG in production.
- Explicit `width` and `height` on every image (prevents CLS).
- `priority` only on the LCP element (typically hero).
- `loading="lazy"` everywhere else (default for `next/image` below the fold).
- Responsive `sizes` attribute on every image.
- Image CDN: Vercel's built-in image optimization.

### Font strategy

- `next/font/google` self-hosted (no third-party connection).
- Subset to Latin character set only at launch.
- `font-display: swap` (or `optional` for non-critical fonts).
- Preload only the display family used above the fold.
- Variable fonts where the family supports them (one file vs many).

### JavaScript discipline

- **Default to RSC.** Reach for `'use client'` only when the component touches state, browser APIs, or event handlers that can't be Server Actions.
- **Code-split aggressively.** Route-level splits via App Router; dynamic `import()` for anything below-the-fold-or-interactive (e.g. dialogs, command palette).
- **No analytics/SDK on first paint.** Defer GA4, and anything else, until idle.
- **No client-side polyfills** — target evergreen browsers (last 2 Chrome/Edge/Safari/Firefox + iOS Safari ≥ 16).

### CSS discipline

- Tailwind v4 with `@theme` tokens — single CSS file, ~25KB gzipped.
- Critical CSS automatic via Next.js.
- No CSS-in-JS runtime (`styled-components`, `emotion`). Tailwind covers everything.

### Third-party scripts

Audit + score every third-party tag:

| Tool                             | When to load                                | Method                                                                                                                     |
| -------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Vercel Analytics                 | Always                                      | Built-in, ~0KB                                                                                                             |
| GA4                              | After consent, once the page is interactive | `next/script` strategy="afterInteractive" (corrected 1 October 2026 to match `components/analytics/analytics-scripts.tsx`) |
| ~~Microsoft Clarity~~            | Not loaded — dropped before launch          | Founder, 1 October 2026                                                                                                    |
| Cal.com embed _(Phase 4)_        | On user interaction only                    | Defer until "Book a call" clicked                                                                                          |
| HubSpot/GHL tracking _(Phase 4)_ | Server-side via webhook where possible      | Avoid client tracking pixels                                                                                               |

No script gets shipped without an explicit budget impact estimate.

---

## Accessibility — WCAG 2.2 AA compliance

### Why 2.2 specifically

WCAG 2.2 (October 2023) added 9 new criteria. The most impactful for us:

- **2.4.11 Focus Not Obscured (Minimum)** — focused element must be at least partially visible (a sticky header can't fully cover it).
- **2.5.7 Dragging Movements** — any drag interaction needs a single-pointer alternative.
- **2.5.8 Target Size (Minimum)** — ≥ 24×24 CSS px for pointer targets.
- **3.3.7 Redundant Entry** — don't ask users to re-enter info they already provided.

### Component-level checklist

Every component PR ticks:

- [ ] Color contrast verified (body ≥ 4.5:1, large ≥ 3:1, UI ≥ 3:1)
- [ ] Keyboard reachable; visible focus ring; logical tab order
- [ ] Skip-to-content link first focusable on every page
- [ ] ARIA labels on icon-only buttons; `aria-current="page"` on active nav
- [ ] Form labels associated; errors announced via `aria-live="polite"`
- [ ] Heading hierarchy: one `h1`, sequential `h2`/`h3`
- [ ] `prefers-reduced-motion` respected (animations drop to 0ms)
- [ ] Target sizes ≥ 24×24 CSS px
- [ ] No content/functionality requires pointer hover
- [ ] No information conveyed by color alone (icons + text + color)
- [ ] Modal: focus trapped, ESC closes, focus restored to trigger on close
- [ ] Lighthouse a11y = 100
- [ ] axe-core no violations (run in CI on the 4 representative URLs)

### Common accessibility patterns

- **Icon-only button**: `<button aria-label="Close dialog"><X aria-hidden="true" /></button>`
- **Decorative image**: `<img alt="" />` (empty alt, not missing)
- **External link**: `<a href="..." rel="noopener noreferrer">{text} <span class="sr-only">(opens in new tab)</span></a>` (only when target=\_blank)
- **Loading state**: `<div aria-busy="true">...skeleton...</div>`
- **Error announcement**: `<div role="status" aria-live="polite">{errorMessage}</div>`

### Testing

- **axe-core** runs in Playwright tests against the 4 representative URLs.
- **Manual keyboard pass** for each new page (Tab, Enter, Esc, arrow keys).
- **Screen reader pass** quarterly: VoiceOver (macOS), NVDA (Windows).
- **Zoom test** at 200% and 400%: no horizontal scroll, no clipping.
- **prefers-reduced-motion** test: enable in DevTools, verify all animation stops.
- **High contrast mode** test (Windows): check that bordered elements remain visible.

---

## Performance monitoring (post-launch)

### Lab data (CI on every PR)

- Lighthouse CI against representative URLs (mobile lab run on a local server).
- Hard `error` gates fail the job: accessibility, best practices, SEO, CLS, TBT and the size
  budgets. LCP and the performance score only `warn`; INP is not audited (`.lighthouserc.cjs`).
  _(Corrected 1 October 2026; this line read "Budget enforcement; build fails if exceeded.")_

### Field data (real users)

- **Vercel Analytics** — Web Vitals from real users, segmented by device + connection.
- **Google Search Console Core Web Vitals report** — Google's view of CrUX data.
- **Weekly review** during Phase 1–2; monthly after.

### Triggers for investigation

- CWV regression > 10% week-over-week on any vital
- Lighthouse score drop > 3 points
- New page exceeding budget on first ship
- User-reported slow load

---

## Accessibility monitoring (post-launch)

- Quarterly full audit using axe DevTools across all major page templates.
- Annual third-party audit (budget permitting) once we're producing custom client work that must demonstrate compliance.
- New page templates require an accessibility sign-off in PR review.

---

## Budget exception process

Sometimes a budget must be exceeded (e.g. a video case study). Required:

1. Justification in PR description.
2. Documented mitigation (e.g. video loaded only on user click).
3. Updated budget for that specific URL in `.lighthouserc.json` (per-URL overrides).
4. Re-evaluation timer set for 30 days.

No silent budget bumps.
