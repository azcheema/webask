import { expect, test, type APIRequestContext } from "@playwright/test";

import { GONE_EXACT, GONE_PREFIXES, LEGACY_REDIRECTS } from "@/lib/redirects";

/*
 * Legacy WordPress → WebAsk redirect proof, over real HTTP against a real
 * `next start`. `scripts/check-redirects.ts` proves the GRAPH is sane; this
 * proves the SERVER actually behaves that way — including Next's built-in
 * trailing-slash 308, which is invisible to static analysis and which every
 * legacy URL's first hop depends on.
 *
 * Driven off LEGACY_REDIRECTS so the spec cannot drift from the shipped config.
 *
 * 🚩 PASSING HERE IS NECESSARY BUT NOT SUFFICIENT FOR CUTOVER.
 * Vercel runs the Next server in `minimalMode`, where it does NOT execute
 * redirects at all — Vercel's edge proxy does, from the routes manifest
 * (`...opts.minimalMode ? [] : fsChecker.redirects` in
 * next/dist/server/lib/router-utils/resolve-routes.js). Local `next start` and
 * production are two different execution engines reading the same build output.
 * Re-run these assertions against a PREVIEW DEPLOYMENT before pointing DNS.
 */

/** Permanent statuses. 302/307 would leak equity and must never appear. */
const PERMANENT = [301, 308];

type Hop = { readonly url: string; readonly status: number; readonly location: string | null };

/**
 * Follow a redirect chain manually, recording every hop. Uses the `request`
 * fixture rather than `page` so 4xx/5xx don't throw and the assertions can read
 * real status codes.
 */
async function followChain(
  request: APIRequestContext,
  startPath: string,
  baseURL: string,
): Promise<Hop[]> {
  const hops: Hop[] = [];
  const seen = new Set<string>();
  let url = new URL(startPath, baseURL).toString();

  for (let i = 0; i < 10; i++) {
    expect(seen.has(url), `redirect loop revisiting ${url}`).toBe(false);
    seen.add(url);

    const response = await request.get(url, { maxRedirects: 0 });
    const status = response.status();
    const rawLocation = response.headers()["location"] ?? null;
    // Next builds Location from a parsed destination; normalise rather than
    // assuming it is relative or absolute.
    const location = rawLocation ? new URL(rawLocation, baseURL).toString() : null;
    hops.push({ url, status, location });

    if (status < 300 || status >= 400 || !location) return hops;
    url = location;
  }
  throw new Error(`redirect chain from ${startPath} exceeded 10 hops`);
}

function finalHop(hops: Hop[]): Hop {
  const last = hops[hops.length - 1];
  if (!last) throw new Error("empty redirect chain");
  return last;
}

/** Every intermediate hop must be a permanent redirect. */
function expectAllPermanent(hops: Hop[], label: string): void {
  for (const hop of hops.slice(0, -1)) {
    expect(PERMANENT, `${label}: hop ${hop.url} used a non-permanent status`).toContain(hop.status);
  }
}

test.describe("legacy redirects", () => {
  // The Rule 0 regression test. docs/04 § 5 prescribed a catch-all whose source
  // matched the root; it would have emitted an empty Location here and looped
  // the homepage forever. If this ever fails, someone reinstated it.
  test("/ resolves 200 with no redirect", async ({ request, baseURL }) => {
    const hops = await followChain(request, "/", baseURL!);
    expect(hops).toHaveLength(1);
    expect(finalHop(hops).status).toBe(200);
  });

  // WordPress served everything with a trailing slash. These three legacy URLs
  // differ from their targets ONLY by that slash and have NO rule in
  // lib/redirects.ts — Next's built-in 308 handles them in a single hop. This
  // asserts that inherited behaviour, which the whole map depends on.
  for (const path of ["/about", "/contact", "/blog"]) {
    test(`${path}/ resolves in one built-in hop`, async ({ request, baseURL }) => {
      const hops = await followChain(request, `${path}/`, baseURL!);
      expect(hops).toHaveLength(2);
      expect(hops[0]!.status).toBe(308);
      expect(new URL(hops[0]!.location!).pathname).toBe(path);
      expect(finalHop(hops).status).toBe(200);
    });
  }

  // Every mapped rule, entered both ways a real inbound link might arrive.
  for (const rule of LEGACY_REDIRECTS) {
    const sample = rule.source
      .replace(/:[a-zA-Z]+\([^)]*\)/g, "2020")
      .replace(/\/:[a-zA-Z]+[*+]/g, "/sample")
      .replace(/:[a-zA-Z]+/g, "sample");

    for (const entry of [sample, `${sample}/`]) {
      test(`${entry} → ${rule.destination}`, async ({ request, baseURL }) => {
        const hops = await followChain(request, entry, baseURL!);
        expectAllPermanent(hops, entry);
        // At most: trailing-slash strip, then the rule itself.
        expect(hops.length, `${entry} took more than 2 hops`).toBeLessThanOrEqual(3);
        const last = finalHop(hops);
        expect(last.status, `${entry} did not land on a live page`).toBe(200);
        expect(new URL(last.url).pathname).toBe(rule.destination);
      });
    }
  }

  // Query strings must survive the hop — resolve-routes carries parsedUrl.query
  // into the destination, and losing UTM parameters on a migration loses
  // attribution for every legacy inbound campaign link.
  test("query strings survive the redirect", async ({ request, baseURL }) => {
    const hops = await followChain(request, "/portfolio/?utm_source=legacy", baseURL!);
    expect(finalHop(hops).url).toContain("utm_source=legacy");
    expect(new URL(finalHop(hops).url).pathname).toBe("/case-studies");
  });
});

test.describe("410 Gone", () => {
  for (const path of GONE_EXACT) {
    for (const entry of [path, `${path}/`]) {
      test(`${entry} is 410`, async ({ request, baseURL }) => {
        const hops = await followChain(request, entry, baseURL!);
        expectAllPermanent(hops, entry);
        expect(finalHop(hops).status).toBe(410);
      });
    }
  }

  for (const prefix of GONE_PREFIXES) {
    for (const entry of [prefix, `${prefix}/uploads/2020/10/x.jpg`]) {
      test(`${entry} is 410`, async ({ request, baseURL }) => {
        const hops = await followChain(request, entry, baseURL!);
        expect(finalHop(hops).status).toBe(410);
      });
    }
  }
});
