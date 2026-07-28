/*
 * Blog duplicate-content gate.
 *
 * WebAsk is a fork of `d:\naxdor`, and `content/blog/*.mdx` was forked verbatim.
 * Ported pages get REWRITTEN, not find-and-replaced (docs/05 § 2) — duplicate
 * content is solved with content, never with markup. The nine service pages had
 * exactly this defect and were measured at 1–4 words from their US originals;
 * this script exists so the blog cannot regress the same way silently.
 *
 * Measures 5-gram Jaccard similarity of the prose body (frontmatter, code
 * fences, JSX props and markdown link targets stripped) between each WebAsk post
 * and its same-slug Naxdor twin, and between WebAsk posts pairwise.
 *
 * Mirrors the thresholds in `scripts/check-programmatic-uniqueness.ts`:
 * warn at 70%, fail at 85% — but the cross-site budget is far tighter, because a
 * same-slug near-duplicate of a live site is a launch-blocking SEO defect rather
 * than a thin-content risk.
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

/** The fork source. Read-only — never written to. Absent on CI, where the check soft-skips. */
const NAXDOR_BLOG = "d:\\naxdor\\content\\blog";
const WEBASK_BLOG = join(process.cwd(), "content", "blog");

/** Cross-site: a same-slug twin of a live site. Anything above this is a real SEO defect. */
const CROSS_SITE_FAIL = 0.05;
const CROSS_SITE_WARN = 0.02;

/** Cross-page within WebAsk: inherited programmatic thresholds. */
const CROSS_PAGE_FAIL = 0.85;
const CROSS_PAGE_WARN = 0.7;

const GRAM = 5;

/**
 * Reduce an MDX file to comparable prose.
 *
 * Frontmatter, code fences, MDX comments and JSX attributes are stripped: two
 * posts sharing a `<Stat value="< 2s" />` or a `json` block are not sharing
 * *prose*, and leaving them in flatters the score in the wrong direction.
 */
function toProse(raw: string): string {
  return raw
    .replace(/^---\r?\n[\s\S]*?\r?\n---/, "") // frontmatter
    .replace(/```[\s\S]*?```/g, "") // fenced code
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "") // MDX comments
    .replace(/<[A-Z][A-Za-z]*\b[^>]*>/g, " ") // JSX open tags (props included)
    .replace(/<\/[A-Z][A-Za-z]*>/g, " ") // JSX close tags
    .replace(/\]\([^)]*\)/g, "] ") // link targets, keep anchor text
    .replace(/[^a-z0-9£$%\s]/gi, " ") // punctuation
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .join(" ");
}

function shingles(prose: string): Set<string> {
  const words = prose.split(" ").filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + GRAM <= words.length; i += 1) {
    out.add(words.slice(i, i + GRAM).join(" "));
  }
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const gram of a) if (b.has(gram)) shared += 1;
  return shared / (a.size + b.size - shared);
}

const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

function main(): void {
  const slugs = readdirSync(WEBASK_BLOG)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => basename(f, ".mdx"))
    .sort();

  if (slugs.length === 0) {
    console.log("check:blog-uniqueness — no posts found, nothing to check.");
    return;
  }

  const grams = new Map<string, Set<string>>();
  for (const slug of slugs) {
    grams.set(slug, shingles(toProse(readFileSync(join(WEBASK_BLOG, `${slug}.mdx`), "utf8"))));
  }

  let failed = false;
  let warned = false;

  // ---- Cross-site: WebAsk vs its Naxdor twin -------------------------------
  if (!existsSync(NAXDOR_BLOG)) {
    console.log(`check:blog-uniqueness — fork source not present at ${NAXDOR_BLOG}; skipping`);
    console.log("  the cross-site comparison. Cross-page checks still run.\n");
  } else {
    console.log("Cross-site — WebAsk vs. the same-slug Naxdor post (5-gram Jaccard):\n");
    for (const slug of slugs) {
      const twin = join(NAXDOR_BLOG, `${slug}.mdx`);
      if (!existsSync(twin)) {
        console.log(`  ${slug.padEnd(44)} —      no Naxdor twin (WebAsk-original post)`);
        continue;
      }
      const score = jaccard(grams.get(slug)!, shingles(toProse(readFileSync(twin, "utf8"))));
      let flag = "ok";
      if (score >= CROSS_SITE_FAIL) {
        flag = "FAIL";
        failed = true;
      } else if (score >= CROSS_SITE_WARN) {
        flag = "warn";
        warned = true;
      }
      console.log(`  ${slug.padEnd(44)} ${pct(score).padStart(6)}  ${flag}`);
    }
  }

  // ---- Cross-page: WebAsk posts against each other -------------------------
  console.log("\nCross-page — WebAsk posts against each other:\n");
  let worstPair = { a: "", b: "", score: 0 };
  for (let i = 0; i < slugs.length; i += 1) {
    for (let j = i + 1; j < slugs.length; j += 1) {
      const score = jaccard(grams.get(slugs[i]!)!, grams.get(slugs[j]!)!);
      if (score > worstPair.score) worstPair = { a: slugs[i]!, b: slugs[j]!, score };
      if (score >= CROSS_PAGE_FAIL) {
        console.log(`  FAIL ${slugs[i]} ↔ ${slugs[j]}  ${pct(score)}`);
        failed = true;
      } else if (score >= CROSS_PAGE_WARN) {
        console.log(`  warn ${slugs[i]} ↔ ${slugs[j]}  ${pct(score)}`);
        warned = true;
      }
    }
  }
  console.log(
    `  worst pair: ${worstPair.a} ↔ ${worstPair.b} at ${pct(worstPair.score)} ` +
      `(fail ≥ ${pct(CROSS_PAGE_FAIL)}, warn ≥ ${pct(CROSS_PAGE_WARN)})`,
  );

  if (failed) {
    console.error(
      "\ncheck:blog-uniqueness FAILED — rewrite, don't find-and-replace (docs/05 § 2).",
    );
    process.exit(1);
  }
  console.log(`\ncheck:blog-uniqueness passed${warned ? " with warnings" : ""}.`);
}

main();
