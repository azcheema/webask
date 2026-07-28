/*
 * 410 Gone responses for retired WordPress URLs.
 *
 * Why a route handler and not a redirect or a 404:
 *   - `redirects()` CANNOT emit 410. Next's `allowedStatusCodes` is
 *     {301, 302, 303, 307, 308} and rejects anything else at config validation.
 *   - `notFound()` emits 404, which tells Google "try again later" — these URLs
 *     linger in the index for months. 410 is the honest status for content that
 *     was deleted on purpose, and gets them deindexed fastest.
 *   - Middleware/`proxy` would install a request-interception layer in front of
 *     matched traffic to service a handful of dead URLs. Route handlers cost
 *     nothing on requests that don't hit them, are colocated with the paths they
 *     replace, and are individually testable.
 *
 * 🚩 Do NOT add `Disallow: /wp-*` to app/robots.ts. If crawling is blocked,
 * Googlebot never sees the 410 and the URLs stay indexed indefinitely — the
 * opposite of the intent.
 *
 * ⚠️ A `route.ts` and a `page.tsx` cannot coexist in the same segment. None of
 * these paths has a page today. If one ever needs a real page, delete its
 * handler first.
 */

const GONE_HTML = `<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>Page removed — WebAsk</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"></head>
<body style="font-family:system-ui,sans-serif;max-width:34rem;margin:4rem auto;padding:0 1.5rem;line-height:1.6">
<h1 style="font-size:1.5rem">This page has been removed</h1>
<p>It was part of the previous webask.co.uk and no longer exists.</p>
<p><a href="/">Home</a> · <a href="/blog">Blog</a> · <a href="/contact">Contact</a></p>
</body></html>`;

/**
 * A 410 Gone response with a small human-readable body — a blank page reads as
 * a broken server to anyone who follows an old link.
 */
export function gone(): Response {
  return new Response(GONE_HTML, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Belt and braces: the body carries a robots meta too, but a header works
      // for non-HTML crawlers and is what Google documents for this case.
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
