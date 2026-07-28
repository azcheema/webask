#!/usr/bin/env tsx
/*
 * Programmatic-page uniqueness gate. Enforces the contract in
 * docs/strategy/programmatic-seo.md § Minimum uniqueness contract on the EXACT
 * body text that ships: `data/service-locations.ts` `buildProgrammaticBodyText`
 * is the single source consumed by both the route template and this script, so
 * the score can't drift from the rendered page.
 *
 * For every `/services/[service]/[location]` combo it:
 *   1. builds the body text (opening + local relevance + overview + FAQs),
 *   2. tokenizes to 5-gram word shingles,
 *   3. computes pairwise Jaccard similarity,
 *   4. WARNS (yellow) on any pair > 70% similar — flag for manual review,
 *   5. FAILS the build only on a pair > 85% similar — true thin-content dupes,
 *   6. WARNS on any page whose unique-shingle share vs all others is < 30%.
 *
 * Warn-then-review by design: legitimate same-template pages share the ~70%
 * service overview and still ship; the reviewer decides on promotion. The hard
 * fail catches only the "we forgot the city-specific paragraph" failure mode.
 */

import { getLocationBySlug } from "@/data/locations";
import { buildProgrammaticBodyText, PROGRAMMATIC_COMBOS } from "@/data/service-locations";

// ── thresholds (mirror programmatic-seo.md § Minimum uniqueness contract) ──────
const SHINGLE_SIZE = 5;
const WARN_SIMILARITY = 0.7;
const FAIL_SIMILARITY = 0.85;
const MIN_UNIQUE_SHARE = 0.3;

type Page = {
  readonly label: string;
  readonly wordCount: number;
  readonly shingles: ReadonlySet<string>;
};

type Failure = { kind: "error" | "warn"; message: string };

/** Lowercase, strip punctuation, collapse whitespace → word list. */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/** Set of `SHINGLE_SIZE`-word shingles. */
function shingleSet(words: string[]): Set<string> {
  const set = new Set<string>();
  for (let i = 0; i + SHINGLE_SIZE <= words.length; i++) {
    set.add(words.slice(i, i + SHINGLE_SIZE).join(" "));
  }
  return set;
}

function jaccard(a: ReadonlySet<string>, b: ReadonlySet<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  let intersection = 0;
  for (const shingle of a) if (b.has(shingle)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/** Share of a page's shingles that appear on NO other page. */
function uniqueShare(page: Page, others: readonly Page[]): number {
  if (page.shingles.size === 0) return 0;
  let unique = 0;
  for (const shingle of page.shingles) {
    if (!others.some((other) => other.shingles.has(shingle))) unique++;
  }
  return unique / page.shingles.size;
}

function build(): Failure[] {
  const pages: Page[] = [];
  for (const combo of PROGRAMMATIC_COMBOS) {
    const location = getLocationBySlug(combo.locationSlug);
    if (!location) {
      return [
        {
          kind: "error",
          message: `combo ${combo.serviceSlug}/${combo.locationSlug}: unknown location slug`,
        },
      ];
    }
    const text = buildProgrammaticBodyText(combo.serviceSlug, location);
    const words = tokenize(text);
    pages.push({
      label: `${combo.serviceSlug}/${combo.locationSlug}`,
      wordCount: words.length,
      shingles: shingleSet(words),
    });
  }

  const failures: Failure[] = [];

  // Pairwise similarity.
  let maxPair = { a: "", b: "", sim: 0 };
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i];
      const b = pages[j];
      if (!a || !b) continue;
      const sim = jaccard(a.shingles, b.shingles);
      if (sim > maxPair.sim) maxPair = { a: a.label, b: b.label, sim };
      if (sim > FAIL_SIMILARITY) {
        failures.push({
          kind: "error",
          message: `near-duplicate: ${a.label} ↔ ${b.label} at ${(sim * 100).toFixed(1)}% (> ${FAIL_SIMILARITY * 100}% hard limit)`,
        });
      } else if (sim > WARN_SIMILARITY) {
        failures.push({
          kind: "warn",
          message: `high similarity: ${a.label} ↔ ${b.label} at ${(sim * 100).toFixed(1)}% (> ${WARN_SIMILARITY * 100}%) — review unique sections before promotion`,
        });
      }
    }
  }

  // Per-page unique share + min word count.
  console.log(`\n── ${pages.length} programmatic pages ──`);
  console.log("\n  page                         words   unique%");
  for (const page of pages) {
    const others = pages.filter((other) => other !== page);
    const share = uniqueShare(page, others);
    console.log(
      `  ${page.label.padEnd(28)} ${String(page.wordCount).padStart(5)}   ${(share * 100).toFixed(0).padStart(5)}%`,
    );
    if (share < MIN_UNIQUE_SHARE) {
      failures.push({
        kind: "warn",
        message: `${page.label}: only ${(share * 100).toFixed(0)}% unique vs other pages (< ${MIN_UNIQUE_SHARE * 100}%) — needs richer city-specific copy before indexing`,
      });
    }
  }
  console.log(
    `\n  most-similar pair: ${maxPair.a} ↔ ${maxPair.b} = ${(maxPair.sim * 100).toFixed(1)}%`,
  );

  return failures;
}

const failures = build();
const errors = failures.filter((f) => f.kind === "error");
const warns = failures.filter((f) => f.kind === "warn");

if (warns.length > 0) {
  console.log(`\n── ${warns.length} warning(s) ──`);
  for (const w of warns) console.warn(`  ⚠ ${w.message}`);
}

if (errors.length > 0) {
  console.error(`\n── ${errors.length} error(s) ──`);
  for (const e of errors) console.error(`  ✗ ${e.message}`);
  console.error(`\n✗ programmatic uniqueness check failed`);
  process.exit(1);
}

console.log(
  `\n✓ programmatic uniqueness check passed${warns.length ? ` (${warns.length} warning(s))` : ""}`,
);
process.exit(0);
