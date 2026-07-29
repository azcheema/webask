/*
 * MDX duplicate-content gate.
 *
 * WebAsk is a fork of `d:\naxdor`, and every `content/**` collection was forked
 * verbatim. Ported pages get REWRITTEN, not find-and-replaced (docs/05 § 2) —
 * duplicate content is solved with content, never with markup.
 *
 * This script replaces `check-blog-uniqueness.ts`, which covered `content/blog`
 * only. That was the wrong denominator twice over:
 *
 *   - `content/industries/*.mdx` and `content/services/*.mdx` had NOTHING
 *     watching them, and the industry slugs are same-slug twins of live
 *     naxdor.com pages (`aesthetic-clinics`, `dental-practices`,
 *     `beauty-wellness-clinics` exist on both sites). They measure clean today
 *     (0.0–0.4%) — but nothing was holding them there.
 *   - `content/locations/*.mdx` has NO same-slug twin, because the fork's hubs
 *     are US metros (`austin-tx`, `dallas-tx`, `miami-fl`). A same-slug-only
 *     check would have reported "no twin" and passed a straight translation of
 *     `austin-tx` into `manchester` — exactly the trap docs/06 § Phase 2 warns
 *     against. So every file is ALSO scored against **every** fork file in the
 *     same collection, and the worst match is what the gate reads.
 *
 * Method: 5-gram Jaccard over the prose body (frontmatter, code fences, MDX
 * comments, JSX props and markdown link targets stripped). Same tokeniser as
 * `check-programmatic-uniqueness.ts` so the numbers are comparable.
 *
 * Thresholds mirror the inherited programmatic contract — cross-page warn 70%,
 * fail 85% — while the cross-site budget is far tighter (warn 2%, fail 5%),
 * because a near-duplicate of a page that is live on another domain is a
 * launch-blocking SEO defect rather than a thin-content risk.
 *
 * ⚠️ Cross-page is deliberately NOT tightened below the inherited 70/85. The
 * hand-authored collections measure 0.0–1.9% against each other in practice, so
 * a "tighter" number would be one this repo invented rather than one any doc
 * supports. The worst pair is therefore always PRINTED, gate or no gate:
 * anything above a few per cent on hand-written pages deserves a human look
 * long before it trips a threshold.
 *
 * ⚠️ The fork source is absent on CI, so the cross-site half is effectively a
 * LOCAL check and soft-skips loudly there. Read this header before assuming CI
 * covers it. Cross-page runs everywhere.
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

/** The fork source. Read-only — never written to. Absent on CI. */
const NAXDOR = "d:\\naxdor\\content";
const WEBASK = join(process.cwd(), "content");

/** Cross-site: a near-duplicate of a live page. Anything here is a real SEO defect. */
const CROSS_SITE_FAIL = 0.05;
const CROSS_SITE_WARN = 0.02;

/** Cross-page within WebAsk: inherited programmatic thresholds. */
const CROSS_PAGE_FAIL = 0.85;
const CROSS_PAGE_WARN = 0.7;

const GRAM = 5;

type Collection = {
  /** Directory under `content/`, on both sides. */
  readonly dir: string;
  /**
   * Fork slug → WebAsk slug, for the same-slug twin line. Only `services` needs
   * one: five slugs were renamed in `673d2fe` before anything referenced them.
   * The max-against-any scan does not depend on it.
   */
  readonly slugMap?: Readonly<Record<string, string>>;
  /** Why this collection is checked — printed nowhere, read by the next person. */
  readonly note: string;
};

const COLLECTIONS: ReadonlyArray<Collection> = [
  { dir: "blog", note: "Shipped draft: false at 8–44 diff lines from live twins (fd25824)." },
  {
    dir: "services",
    slugMap: {
      "e-commerce": "ecommerce-development",
      "web-applications": "web-app-development",
      "mobile-apps": "mobile-app-development",
      crm: "crm-automation",
      maintenance: "maintenance-support",
    },
    note: "Rewritten in 13c97f5; were within 1–4 words of the US originals before that.",
  },
  {
    dir: "industries",
    note: "Written fresh — the CAP Code forbids a translation of the US pages.",
  },
  {
    dir: "locations",
    note: "No same-slug twin exists (fork hubs are US metros), so max-against-any is the real check.",
  },
];

/**
 * Skipped, with the reason, so nobody re-investigates:
 * `content/case-studies` holds one `draft: true` template that is ~97%
 * identical to the fork by design; the index `noindex`s itself while empty, so
 * nothing renders. Drafts are skipped everywhere for the same reason — a draft
 * ships `noindex`. The commit that flips a draft flag is where it enters this
 * gate, and the gate will say so on that commit.
 */
const isDraft = (raw: string): boolean => /^---[\s\S]*?^draft:\s*true\s*$/m.test(raw);

/**
 * Reduce an MDX file to comparable prose.
 *
 * Frontmatter, code fences, MDX comments and JSX attributes are stripped: two
 * pages sharing a `<Stat value="< 2s" />` or a `json` block are not sharing
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

type Doc = { readonly slug: string; readonly grams: Set<string>; readonly words: number };

/** Every non-draft `.mdx` in `dir`, as slug → shingles. */
function load(dir: string): Doc[] {
  if (!existsSync(dir)) return [];
  const out: Doc[] = [];
  for (const file of readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort()) {
    const raw = readFileSync(join(dir, file), "utf8");
    if (isDraft(raw)) continue;
    const prose = toProse(raw);
    out.push({
      slug: basename(file, ".mdx"),
      grams: shingles(prose),
      words: prose.split(" ").filter(Boolean).length,
    });
  }
  return out;
}

type Outcome = { failed: boolean; warned: boolean };

function checkCollection(collection: Collection, forkPresent: boolean): Outcome {
  const mine = load(join(WEBASK, collection.dir));
  const result: Outcome = { failed: false, warned: false };

  console.log(
    `\n── content/${collection.dir} ${"─".repeat(Math.max(0, 52 - collection.dir.length))}`,
  );
  if (mine.length === 0) {
    console.log("  no published files — nothing to check.");
    return result;
  }

  // ---- Cross-site: WebAsk vs the fork ------------------------------------
  if (!forkPresent) {
    console.log("  cross-site skipped (fork source absent).");
  } else {
    const theirs = load(join(NAXDOR, collection.dir));
    if (theirs.length === 0) {
      console.log("  cross-site: no fork files in this collection.");
    } else {
      // Fork slug → WebAsk slug, so the twin line survives the 673d2fe renames.
      const twinOf = new Map(
        theirs.map((doc) => [collection.slugMap?.[doc.slug] ?? doc.slug, doc] as const),
      );
      for (const doc of mine) {
        let worst = { slug: "—", score: 0 };
        for (const other of theirs) {
          const score = jaccard(doc.grams, other.grams);
          if (score > worst.score) worst = { slug: other.slug, score };
        }
        const twin = twinOf.get(doc.slug);
        const twinScore = twin ? jaccard(doc.grams, twin.grams) : null;

        let flag = "ok";
        if (worst.score >= CROSS_SITE_FAIL) {
          flag = "FAIL";
          result.failed = true;
        } else if (worst.score >= CROSS_SITE_WARN) {
          flag = "warn";
          result.warned = true;
        }
        const twinCol = twinScore === null ? "no twin" : `twin ${pct(twinScore)}`;
        console.log(
          `  ${doc.slug.padEnd(34)} ${String(doc.words).padStart(5)}w  ` +
            `${twinCol.padEnd(12)} max ${pct(worst.score).padStart(6)} vs ${worst.slug.padEnd(24)} ${flag}`,
        );
      }
    }
  }

  // ---- Cross-page: WebAsk files against each other ------------------------
  if (mine.length > 1) {
    let worstPair = { a: "", b: "", score: 0 };
    for (let i = 0; i < mine.length; i += 1) {
      for (let j = i + 1; j < mine.length; j += 1) {
        const score = jaccard(mine[i]!.grams, mine[j]!.grams);
        if (score > worstPair.score) worstPair = { a: mine[i]!.slug, b: mine[j]!.slug, score };
        if (score >= CROSS_PAGE_FAIL) {
          console.log(`  FAIL cross-page ${mine[i]!.slug} ↔ ${mine[j]!.slug}  ${pct(score)}`);
          result.failed = true;
        } else if (score >= CROSS_PAGE_WARN) {
          console.log(`  warn cross-page ${mine[i]!.slug} ↔ ${mine[j]!.slug}  ${pct(score)}`);
          result.warned = true;
        }
      }
    }
    console.log(
      `  cross-page worst: ${worstPair.a} ↔ ${worstPair.b} at ${pct(worstPair.score)} ` +
        `(fail ≥ ${pct(CROSS_PAGE_FAIL)}, warn ≥ ${pct(CROSS_PAGE_WARN)})`,
    );
  }

  return result;
}

function main(): void {
  const forkPresent = existsSync(NAXDOR);
  console.log("check:content-uniqueness — 5-gram Jaccard over MDX prose bodies");
  if (!forkPresent) {
    console.log(`\nFork source not present at ${NAXDOR}; the cross-site half is SKIPPED.`);
    console.log("This is expected on CI and means the cross-site check is a LOCAL gate only.");
    console.log("Run it before every content merge and before cutover. Cross-page still runs.");
  }
  console.log(
    `\nBudgets — cross-site: fail ≥ ${pct(CROSS_SITE_FAIL)}, warn ≥ ${pct(CROSS_SITE_WARN)}` +
      ` · cross-page: fail ≥ ${pct(CROSS_PAGE_FAIL)}, warn ≥ ${pct(CROSS_PAGE_WARN)}`,
  );

  let failed = false;
  let warned = false;
  for (const collection of COLLECTIONS) {
    const outcome = checkCollection(collection, forkPresent);
    failed ||= outcome.failed;
    warned ||= outcome.warned;
  }

  if (failed) {
    console.error(
      "\ncheck:content-uniqueness FAILED — rewrite, don't find-and-replace (docs/05 § 2).",
    );
    process.exit(1);
  }
  console.log(`\ncheck:content-uniqueness passed${warned ? " with warnings" : ""}.`);
}

main();
