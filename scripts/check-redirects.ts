#!/usr/bin/env tsx
/*
 * Redirect-map graph audit. Mirrors lib/redirects.ts.
 *
 * The 301 map off the legacy WordPress site is the highest-risk single item in
 * the migration: a bad rule doesn't degrade the site, it takes pages down. Two
 * such bugs were already present in the source doc (docs/04 § 5) —
 *
 *   1. a global "Rule 0" whose source matched the ROOT, redirecting `/` to an
 *      empty Location and looping the homepage forever;
 *   2. three rows (`/about/`, `/contact/`, `/blog/`) that become `from === to`
 *      once written slash-less, self-redirecting three live pages.
 *
 * Both are caught below. This runs pre-build in CI so it fails in milliseconds
 * rather than after a full build + e2e cycle.
 *
 * WHY IT COMPILES SOURCES WITH NEXT'S OWN MATCHER: a hand-rolled regex would
 * test our mental model of path-to-regexp, not Next's actual behaviour — which
 * is exactly the gap that produced both bugs. `next` is pinned EXACTLY
 * ("next": "16.2.7", no caret) in package.json, so these deep imports are stable;
 * a version bump failing this script loudly is the intended behaviour.
 *
 * Runtime proof over real HTTP lives in e2e/redirects.spec.ts. This script only
 * proves the graph is sane.
 */

import { getPathMatch } from "next/dist/shared/lib/router/utils/path-match";
import { prepareDestination } from "next/dist/shared/lib/router/utils/prepare-destination";

import {
  GONE_EXACT,
  GONE_PREFIXES,
  KNOWN_ROUTES,
  LEGACY_REDIRECTS,
  toNextRedirects,
  type LegacyRedirect,
} from "@/lib/redirects";

/**
 * Paths that must never be swallowed by a rule. `KNOWN_ROUTES` plus a
 * representative asset set: Next's own `(?!\/_next)` guard protects `/_next` but
 * NOT `/public`, so an over-broad catch-all could eat the sitemap or the favicon.
 */
const MUST_NOT_MATCH: readonly string[] = [
  ...KNOWN_ROUTES,
  "/services/web-development",
  "/industries/aesthetic-clinics",
  "/locations",
  "/blog/local-seo-checklist-2026",
  "/blog/topic/seo",
  "/robots.txt",
  "/favicon.ico",
  "/icon.svg",
  "/opengraph-image",
  "/manifest.json",
  "/brand/logo-512.png",
  "/_next/static/chunks/main.js",
];

const failures: string[] = [];

function fail(message: string): void {
  failures.push(message);
}

/** Compile one source the way Next does, and report what it matches + emits. */
function matcherFor(source: string) {
  const match = getPathMatch(source, { removeUnnamedParams: true, strict: true });
  return (pathname: string): string | null => {
    const params = match(pathname);
    if (params === false) return null;
    try {
      const { newUrl } = prepareDestination({
        appendParamsToQuery: false,
        destination: "/",
        params: params as Record<string, string | string[]>,
        query: {},
      });
      return newUrl;
    } catch {
      return "";
    }
  };
}

/** Render a rule's destination for a given matched pathname. */
function resolve(rule: LegacyRedirect, pathname: string): string | null {
  const match = getPathMatch(rule.source, { removeUnnamedParams: true, strict: true });
  const params = match(pathname);
  if (params === false) return null;
  const { newUrl } = prepareDestination({
    appendParamsToQuery: false,
    destination: rule.destination,
    params: params as Record<string, string | string[]>,
    query: {},
  });
  return newUrl;
}

function matches(rule: LegacyRedirect, pathname: string): boolean {
  const match = getPathMatch(rule.source, { removeUnnamedParams: true, strict: true });
  return match(pathname) !== false;
}

// ── 1. Sources are well-formed ──────────────────────────────────────────────
const seenSources = new Set<string>();
for (const rule of LEGACY_REDIRECTS) {
  if (!rule.source.startsWith("/")) fail(`source must start with "/": ${rule.source}`);
  if (rule.source.length > 1 && rule.source.endsWith("/")) {
    fail(
      `source ends with "/" (dead code — Next strips the slash at index 0 first): ${rule.source}`,
    );
  }
  if (seenSources.has(rule.source)) fail(`duplicate source: ${rule.source}`);
  seenSources.add(rule.source);

  try {
    matcherFor(rule.source);
  } catch (error) {
    fail(`source does not compile: ${rule.source} (${(error as Error).message})`);
  }
}

// ── 2. Root safety — the guard that makes "Rule 0" unreintroducible ─────────
for (const rule of LEGACY_REDIRECTS) {
  if (matches(rule, "/")) {
    fail(
      `source matches the ROOT "/": ${rule.source} — this is the docs/04 "Rule 0" bug; ` +
        `it redirects the homepage to an empty Location and loops forever`,
    );
  }
}

// ── 3. Destinations are valid, non-empty, and real routes ───────────────────
const knownRoutes = new Set<string>(KNOWN_ROUTES);
for (const rule of LEGACY_REDIRECTS) {
  const { destination } = rule;
  if (!destination.startsWith("/")) fail(`destination must start with "/": ${destination}`);
  if (destination.length > 1 && destination.endsWith("/")) {
    fail(`destination must not end with "/": ${destination}`);
  }
  if (destination.includes("?") || destination.includes("#")) {
    fail(`destination must be a bare path: ${destination}`);
  }
  if (!knownRoutes.has(destination)) {
    fail(`destination is not in KNOWN_ROUTES (would 404): ${rule.source} -> ${destination}`);
  }
}

// ── 4. No self-reference (regex-level, not string equality) ─────────────────
for (const rule of LEGACY_REDIRECTS) {
  if (matches(rule, rule.destination)) {
    fail(
      `INFINITE LOOP — source "${rule.source}" matches its own destination ` +
        `"${rule.destination}"`,
    );
  }
}

// ── 5. No shadowing of live routes or public assets ─────────────────────────
for (const rule of LEGACY_REDIRECTS) {
  for (const path of MUST_NOT_MATCH) {
    if (matches(rule, path)) {
      fail(`rule "${rule.source}" swallows the live path "${path}"`);
    }
  }
}

// ── 6. No chains — one rule's destination matched by another's source ───────
for (const rule of LEGACY_REDIRECTS) {
  for (const other of LEGACY_REDIRECTS) {
    if (other === rule) continue;
    if (matches(other, rule.destination)) {
      fail(
        `CHAIN — "${rule.source}" -> "${rule.destination}", which is then matched by ` +
          `"${other.source}". Point the first rule at the final destination instead.`,
      );
    }
  }
}

// ── 7. Redirects and 410s must not contradict each other ────────────────────
const gonePaths: readonly string[] = [...GONE_EXACT, ...GONE_PREFIXES];
for (const rule of LEGACY_REDIRECTS) {
  for (const path of gonePaths) {
    if (matches(rule, path)) {
      fail(`rule "${rule.source}" redirects "${path}", which is also declared 410 Gone`);
    }
  }
}

// ── 8. Every emitted rule is permanent, never temporary ─────────────────────
for (const emitted of toNextRedirects()) {
  if (emitted.permanent !== true) {
    fail(`rule "${emitted.source}" is not permanent (302/307 loses equity)`);
  }
  if ("statusCode" in emitted && emitted.statusCode !== undefined) {
    fail(`rule "${emitted.source}" sets statusCode; use permanent: true (308)`);
  }
}

// ── 9. Destinations render non-empty for a representative match ─────────────
for (const rule of LEGACY_REDIRECTS) {
  const sample = rule.source.includes(":")
    ? rule.source.replace(/:[a-zA-Z]+\([^)]*\)/g, "2020").replace(/:[a-zA-Z]+\*?\+?/g, "sample")
    : rule.source;
  const rendered = resolve(rule, sample);
  if (rendered === "") {
    fail(`rule "${rule.source}" renders an EMPTY destination for "${sample}" — would loop`);
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
console.log(
  `\nRedirect map: ${LEGACY_REDIRECTS.length} rules · ${GONE_EXACT.length} exact 410 · ` +
    `${GONE_PREFIXES.length} 410 prefixes`,
);
for (const rule of LEGACY_REDIRECTS) {
  console.log(`  ${rule.kind === "family" ? "◆" : "·"} ${rule.source}  →  ${rule.destination}`);
}

if (failures.length === 0) {
  console.log("\n✓ redirect graph is sound (no loops, chains, shadows, or dead sources)");
  process.exit(0);
}
console.error(`\n✗ ${failures.length} failure(s):`);
for (const message of failures) console.error(`  ✗ ${message}`);
process.exit(1);
