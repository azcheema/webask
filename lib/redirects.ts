import type { NextConfig } from "next";

/**
 * Legacy WordPress → WebAsk permalink map. THE single source of truth, consumed
 * by three places that must never disagree:
 *   - `next.config.ts` `redirects()`   — what actually ships
 *   - `scripts/check-redirects.ts`     — static graph gate, CI, pre-build
 *   - `e2e/redirects.spec.ts`          — real HTTP proof, CI, post-build
 *
 * The old site is a 2020-era WordPress install with 13 indexed URLs. Its content
 * is worth nothing on merit; the URLs are worth redirecting for equity. Full
 * rationale and the per-URL reasoning table live in
 * docs/04-information-architecture.md § 5.
 *
 * ── WHY EVERY `source` IS WRITTEN WITHOUT A TRAILING SLASH ────────────────
 * WordPress served all of these WITH a trailing slash, but the slash must NOT
 * appear here. With `trailingSlash` unset (default false), Next prepends its own
 * redirect at index 0 of this very array:
 *
 *     { source: "/:path+/", destination: "/:path+", permanent: true }
 *     — next/dist/lib/load-custom-routes.js, ~line 565 (verified, next@16.2.7)
 *
 * So `/foo/` is 308'd to `/foo` BEFORE any rule below is consulted. A rule whose
 * source ends in `/` is dead code.
 *
 * ── WHY THERE IS NO GLOBAL "STRIP TRAILING SLASH" RULE HERE ───────────────
 * docs/04 § 5 prescribed a global "Rule 0" whose source was `:path*` followed by
 * a trailing slash, redirecting to a bare `:path*`.
 * **DO NOT ADD IT.** `:path*` is zero-or-more, so it matches the ROOT `/`, and
 * Next renders the destination as the empty string — it emits `Location: ` on
 * `/`, which per RFC 3986 resolves to `/`, which loops forever. The homepage
 * dies with ERR_TOO_MANY_REDIRECTS. Next's built-in rule uses `:path+`
 * (one-or-more) precisely so it cannot match `/`.
 * `scripts/check-redirects.ts` asserts no source matches `/`, so this cannot be
 * reintroduced by accident. The doc has been corrected.
 *
 * ── WHY `/about/`, `/contact/` AND `/blog/` ARE ABSENT ────────────────────
 * Those three legacy URLs differ from their targets ONLY by the trailing slash,
 * so Next's built-in rule already resolves them in one 308 hop. Written here
 * (slash-less, per the rule above) they would be `from === to` — infinite
 * self-redirects that would take three live pages down. The checker enforces it.
 *
 * ── WHY 308 AND NOT 301 ───────────────────────────────────────────────────
 * `permanent: true` emits 308. Google treats 301 and 308 identically for
 * canonicalisation and PageRank consolidation. Hop 1 (the built-in slash strip)
 * is hard-coded to 308 and cannot be changed without `skipTrailingSlashRedirect`,
 * so forcing `statusCode: 301` here would only produce an incoherent 308→301
 * chain. docs/04's "301, never 302" is really "permanent, never temporary" —
 * never 302/307. Enforced by the checker and by `e2e/redirects.spec.ts`.
 *
 * Every inbound legacy URL resolves in at most 2 hops.
 */

/**
 * Next's own redirect entry type, derived from the public `NextConfig` surface
 * so we never deep-import `next/dist/**` (unversioned private API).
 */
type NextRedirect = Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>[number];

/** A single legacy-URL rule, with the provenance needed to audit it later. */
export type LegacyRedirect = {
  /** Incoming path pattern. NEVER ends in "/" — see the module header. */
  readonly source: string;
  /** Target path on the new site. Must be a member of `KNOWN_ROUTES`. */
  readonly destination: string;
  /** `"exact"` = one dead permalink; `"family"` = a WordPress archive pattern. */
  readonly kind: "exact" | "family";
  /** Why this mapping was chosen — for whoever revisits this in two years. */
  readonly why: string;
};

/**
 * Live WebAsk routes a redirect is allowed to target. Keep in sync with `app/`.
 * `scripts/check-redirects.ts` fails the build if a destination isn't here, so a
 * future route rename can't silently orphan a legacy URL into a 404.
 */
export const KNOWN_ROUTES = [
  "/",
  "/about",
  "/blog",
  "/case-studies",
  "/contact",
  "/legal/privacy",
  "/pricing",
  "/services/seo",
  "/sitemap.xml",
] as const satisfies ReadonlyArray<string>;

export const LEGACY_REDIRECTS: ReadonlyArray<LegacyRedirect> = [
  // ── Exact dead permalinks ────────────────────────────────────────────────
  {
    source: "/about-my-agency",
    destination: "/about",
    kind: "exact",
    why: "Duplicate-intent post covering the same ground as the About page; consolidate.",
  },
  {
    source: "/portfolio",
    destination: "/case-studies",
    kind: "exact",
    why: "The portfolio concept is replaced by /case-studies, which self-hides while empty.",
  },
  {
    source: "/privacy-policy-2",
    destination: "/legal/privacy",
    kind: "exact",
    why: "The '-2' suffix is a WordPress duplicate-slug artefact of the privacy policy.",
  },
  {
    source: "/uncategorized",
    destination: "/blog",
    kind: "exact",
    why: "Default WordPress category archive; there is no real taxonomy to preserve.",
  },
  {
    source: "/the-importance-of-seo-why-its-essential-for-online-success",
    destination: "/services/seo",
    kind: "exact",
    why: "Thin generic post, retired. The SEO service page serves the same intent commercially.",
  },
  {
    source: "/pricing-freelance-projects",
    destination: "/pricing",
    kind: "exact",
    why: "Closest intent match; the pricing page supersedes it.",
  },
  {
    source: "/top-10-freelance-blogs",
    destination: "/blog",
    kind: "exact",
    why: "Off-topic for the new positioning; retired to the blog index.",
  },
  {
    source: "/time-management-tips",
    destination: "/blog",
    kind: "exact",
    why: "Off-topic for the new positioning; retired to the blog index.",
  },

  // ── Yoast sitemaps ───────────────────────────────────────────────────────
  // Found by crawling the live site on 2026-07-28 — none of these are IN the
  // sitemap, they ARE the sitemaps, and all four return 200 today. Google has
  // requested them for years and will keep doing so after cutover; a 301 to the
  // real sitemap is far better than letting them 404.
  {
    source: "/sitemap_index.xml",
    destination: "/sitemap.xml",
    kind: "exact",
    why: "Yoast's sitemap index. The live /sitemap.xml already 301s here, so this is the URL Google actually holds.",
  },
  {
    source: "/page-sitemap.xml",
    destination: "/sitemap.xml",
    kind: "exact",
    why: "Yoast per-post-type sitemap; superseded by app/sitemap.ts.",
  },
  {
    source: "/post-sitemap.xml",
    destination: "/sitemap.xml",
    kind: "exact",
    why: "Yoast per-post-type sitemap; superseded by app/sitemap.ts.",
  },
  {
    source: "/category-sitemap.xml",
    destination: "/sitemap.xml",
    kind: "exact",
    why: "Yoast taxonomy sitemap; superseded by app/sitemap.ts.",
  },

  // ── WordPress archive families ───────────────────────────────────────────
  // Verified against the live site 2026-07-28: /author/admin/ 301s, /2020/10/
  // 301s, /category/uncategorized/ 301s, /blog/page/2/ returns 200. Tag
  // archives 404 today, but the rule is harmless and guards against a tag being
  // added before cutover.
  {
    source: "/blog/page/:page*",
    destination: "/blog",
    kind: "family",
    why:
      "Paginated blog archive — /blog/page/2/ is live and returns 200. Our /blog is a " +
      "single index with no pagination, so every page N collapses to it. Cannot collide " +
      "with /blog/[slug] (2 segments) or /blog/topic/[topic] (3, different literal).",
  },
  {
    source: "/author/:slug*",
    destination: "/about",
    kind: "family",
    why: "Single-author site — every author archive maps to the About page.",
  },
  {
    source: "/tag/:slug*",
    destination: "/blog",
    kind: "family",
    why:
      "WordPress tag archives. NOT mapped to /blog/topic/:slug — WP tag slugs are not " +
      "guaranteed to exist as topics, which would trade a 308 for a 404.",
  },
  {
    source: "/category/:slug*",
    destination: "/blog",
    kind: "family",
    why: "WordPress category archives beyond /uncategorized; same reasoning as tags.",
  },
  {
    source: "/:year(\\d{4})/:path*",
    destination: "/blog",
    kind: "family",
    why:
      "WordPress date permalinks (/2020, /2020/10, /2020/10/slug). The exact-4-digit " +
      "guard means /2020-report.pdf and /202 do NOT match, and no WebAsk route begins " +
      "with a 4-digit segment.",
  },
  {
    source: "/:path*/feed",
    destination: "/blog",
    kind: "family",
    why:
      "RSS endpoints. `:path*` is zero-or-more so this also covers a bare /feed — a " +
      "separate rule would be a duplicate source. Safe here (unlike the rejected " +
      "Rule 0) because the trailing literal '/feed' stops it matching '/'.",
  },
] as const;

/**
 * Paths that must answer **410 Gone**, served by route handlers under `app/`.
 *
 * `redirects()` cannot do this — Next's `allowedStatusCodes` is
 * {301, 302, 303, 307, 308} and rejects 410 at config validation. `notFound()`
 * emits 404, which makes Google retry these for months; 410 is the honest status
 * and gets them deindexed fastest.
 */
export const GONE_EXACT = [
  "/sample-page",
  // Both live on the current site (verified 2026-07-28: /wp-login.php returns
  // 200, /xmlrpc.php returns 520) and both are relentless bot targets. Without
  // a handler they would render the full not-found RSC tree on every probe.
  "/wp-login.php",
  "/xmlrpc.php",
] as const;

/** WordPress carcass prefixes that must never resolve post-migration. */
export const GONE_PREFIXES = ["/wp-admin", "/wp-content", "/wp-includes", "/wp-json"] as const;

/**
 * Adapt to Next's shape. Returns a mutable array because `redirects()` requires
 * one. Only the three keys Next needs are emitted — under
 * `exactOptionalPropertyTypes` a `statusCode: undefined` would not type-check
 * against the `{ permanent: boolean; statusCode?: never }` union member.
 */
export function toNextRedirects(): NextRedirect[] {
  return LEGACY_REDIRECTS.map(({ source, destination }) => ({
    source,
    destination,
    permanent: true,
  }));
}
