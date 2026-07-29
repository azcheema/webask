/*
 * Copy-module duplicate-content gate.
 *
 * WebAsk is a fork of `d:\naxdor`. Three times now, copy has been reported
 * "rewritten for the UK" while a large share of it was still byte-identical to
 * the fork — because "rewritten" kept being measured against a FILE rather than
 * against a RENDERED PAGE:
 *
 *   - the nine `content/services/*.mdx` bodies were rewritten to 0.0–0.1% while
 *     `data/services.ts` — the hero subhead, who-it's-for line, includes lists
 *     and FAQ accordion that render on the SAME URL, and feed `FAQPage` JSON-LD
 *     — stayed 57% identical;
 *   - the four blog posts shipped `draft: false` at 8–44 diff lines from their
 *     live same-slug twins (now covered by `check:blog-uniqueness`);
 *   - `data/copy/pricing.ts` sat at 82%, the highest in the repo.
 *
 * `check:blog-uniqueness` closes this for `content/blog`. This script closes it
 * for the `data/*.ts` modules, which had nothing watching them at all.
 *
 * ── MEASUREMENT METHOD — this part matters ────────────────────────────────
 * It imports both modules and walks the PARSED OBJECTS. Do not "simplify" this
 * to a regex over the source. Three successive regex extractors over the same
 * file gave three different answers: one matched across string boundaries and
 * returned fragments of code as "prose", one silently under-counted `includes`,
 * one double-counted `answer` strings as bare array items. The parsed walk is
 * the only one that reconciles, and a wrong denominator was published in a
 * commit message before it was caught (see 911af1d → ad32565).
 *
 * `data/services.ts` is compared PER SERVICE, not as one string pool: matching
 * every string against every fork string lets a coincidence between two
 * different services count as duplication, which is exactly the bug that
 * inflated 57% to a reported 62%. The five slugs renamed in `673d2fe` are
 * mapped back.
 */

import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";

/**
 * Dynamic ESM import of an absolute path. On Windows `import("d:/...")` throws
 * ERR_UNSUPPORTED_ESM_URL_SCHEME — the loader reads `d:` as a URL scheme — so the
 * path has to become a `file://` URL first.
 */
const importAbs = (abs: string): Promise<Record<string, unknown>> =>
  import(pathToFileURL(abs).href) as Promise<Record<string, unknown>>;

/** The fork source. Read-only. Absent on CI, where this check soft-skips loudly. */
const NAXDOR = "d:\\naxdor";
const WEBASK = process.cwd();

/**
 * Per-module budgets, as a fraction of prose words identical to the fork.
 *
 * A module is listed here because a decision was made about it. `verdict`
 * records WHY, so the next person does not re-litigate a deliberate carry or
 * assume an oversight is intentional — that distinction is the whole point.
 */
type ModuleSpec = {
  /** Path relative to the repo root, without extension. */
  readonly path: string;
  /** Max share of prose words allowed to match the fork. */
  readonly budget: number;
  readonly verdict: string;
};

const MODULES: ReadonlyArray<ModuleSpec> = [
  {
    path: "data/services",
    budget: 0.05,
    verdict: "Rewritten 2026-07-28 (4987087). Renders as visible page copy + FAQPage JSON-LD.",
  },
  {
    path: "data/copy/pricing",
    budget: 0.05,
    verdict: "Rewritten 2026-07-28 (15ffcba).",
  },
  {
    path: "data/copy/home",
    budget: 0.1,
    verdict: "Rewritten early; measured 3%.",
  },
  {
    path: "data/copy/about",
    budget: 0.2,
    verdict: "Rewritten around the real founder (97b94ce).",
  },
  {
    path: "data/copy/contact",
    budget: 0.2,
    verdict: "Rewritten for the UK (74430cf); D1 removed the postal address.",
  },
  {
    path: "data/copy/free-audit",
    budget: 0.5,
    verdict:
      "⚠️ 43% and NO VERDICT RECORDED. Partly rewritten by 6306fc1. Budget is a holding line, not an endorsement — decide whether the remainder is deliberate.",
  },
  {
    path: "data/copy/process",
    budget: 0.75,
    verdict:
      "DUPLICATE BY DECISION. docs/01 marks the service-delivery playbook 'copy verbatim' and 6306fc1 says so explicitly. The methodology genuinely is the same. Only its false LCP-enforcement claim was changed (e157e89).",
  },
  {
    path: "data/copy/legal",
    budget: 0.9,
    verdict:
      "⚠️ 69% AND STILL NAMES THE WRONG ENTITY ('Naxdor … enskild firma'). Gated behind D3 (privacy/terms/cookies are draft: true), so it is not live — but D3 landing is what unblocks publishing, so the rewrite belongs in that same pass, not after it.",
  },
  {
    path: "data/industries",
    budget: 0.3,
    verdict: "Written fresh for the UK (d4475fd, 74430cf) — the CAP Code forbids a translation.",
  },
];

/**
 * Deliberately NOT checked, so nobody re-investigates them. Each was measured
 * and cleared once; the reason is what stops it being measured again.
 */
const EXEMPT: ReadonlyArray<readonly [string, string]> = [
  ["data/types.ts", "100% — type definitions. Correct to be identical."],
  [
    "data/portfolio.ts",
    "94% — every entry is TODO(content-copy); PortfolioStrip filters on isReady, so nothing renders.",
  ],
  [
    "data/blog.ts",
    "Topic taxonomy. Renders only as archive-page descriptions; small and low-value to diverge.",
  ],
  ["emails/*", "Transactional. Never indexed."],
  [
    "content/case-studies/example-case-study-template.mdx",
    "draft: true; the index noindexes while empty.",
  ],
];

/** naxdor slug → WebAsk slug (renamed in 673d2fe, before anything referenced them). */
const SLUG_MAP: Record<string, string> = {
  "ecommerce-development": "e-commerce",
  "web-app-development": "web-applications",
  "mobile-app-development": "mobile-apps",
  "crm-automation": "crm",
  "maintenance-support": "maintenance",
};

const norm = (s: string): string =>
  s
    .replace(/[^a-z0-9£$%\s]/gi, " ")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .join(" ");

const words = (s: string): number => norm(s).split(" ").filter(Boolean).length;

/** Every prose-looking string reachable in a parsed value. */
function collect(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") {
    if (value.split(/\s+/).filter(Boolean).length >= 3) out.push(value);
  } else if (Array.isArray(value)) {
    for (const v of value) collect(v, out);
  } else if (value && typeof value === "object") {
    for (const v of Object.values(value)) collect(v, out);
  }
  return out;
}

/** Structural shape of a `data/services.ts` entry, for the fields this gate reads. */
type ServiceLike = Record<string, unknown> & { slug: string; pricing?: Record<string, unknown> };

type Score = { words: number; dup: number };
const rate = (s: Score) => (s.words === 0 ? 0 : s.dup / s.words);
const pct = (n: number) => `${(n * 100).toFixed(0)}%`;

/** Whole-module comparison: one string pool against the other. */
function scoreModule(a: unknown, b: unknown): Score {
  const mine = collect(a);
  const theirs = new Set(collect(b).map(norm));
  let w = 0;
  let d = 0;
  for (const s of mine) {
    const n = words(s);
    w += n;
    if (theirs.has(norm(s))) d += n;
  }
  return { words: w, dup: d };
}

/**
 * The `data/services.ts` fields that render as PROSE.
 *
 * `name`, `slug`, `primaryCta.label` and `relatedServiceSlugs` are excluded on
 * purpose. "Get an SEO quote" is identical to the fork and should be — a CTA
 * label is functional UI, and diverging it to score better would make the button
 * worse. Counting them put a floor of ~44 words under a file that is otherwise
 * 0%, which would make the number mean something other than what it says.
 */
function servicesProse(svc: Record<string, unknown>): string[] {
  return collect([
    svc.summary,
    svc.heroSubhead,
    svc.whoItsFor,
    (svc.pricing as Record<string, unknown> | undefined)?.priceNote,
    svc.includes,
    svc.notIncluded,
    svc.faqs,
  ]);
}

/**
 * `data/services.ts` per service, so a coincidence between two DIFFERENT
 * services cannot count as duplication.
 */
function scoreServices(mine: ServiceLike[], theirs: ServiceLike[]): Score {
  const byFork = new Map(theirs.map((s) => [s.slug, s]));
  let w = 0;
  let d = 0;
  for (const svc of mine) {
    const twin = byFork.get(SLUG_MAP[svc.slug] ?? svc.slug);
    const theirStrings = new Set(servicesProse(twin ?? {}).map(norm));
    for (const s of servicesProse(svc)) {
      const n = words(s);
      w += n;
      if (theirStrings.has(norm(s))) d += n;
    }
  }
  return { words: w, dup: d };
}

async function main(): Promise<void> {
  if (!existsSync(NAXDOR)) {
    console.log(`check:copy-uniqueness — fork source not present at ${NAXDOR}.`);
    console.log("  This check compares against the fork, so it cannot run here and is SKIPPING.");
    console.log(
      "  It is a LOCAL gate. CI green does not mean this passed — run it before a cutover.",
    );
    return;
  }

  console.log("Copy modules vs. the fork source (prose words, parsed-object walk):\n");
  console.log(
    `  ${"module".padEnd(24)}${"words".padStart(7)}${"dup".padStart(7)}${"rate".padStart(7)}  budget`,
  );
  console.log(`  ${"-".repeat(60)}`);

  let failed = false;

  for (const spec of MODULES) {
    const minePath = `${WEBASK}/${spec.path}`;
    const forkPath = `${NAXDOR}/${spec.path}`;
    if (!existsSync(`${forkPath}.ts`)) {
      console.log(`  ${spec.path.padEnd(24)}${"—".padStart(7)}  no fork twin (WebAsk-original)`);
      continue;
    }

    const mine = await importAbs(`${minePath}.ts`);
    const fork = await importAbs(`${forkPath}.ts`);

    const score =
      spec.path === "data/services"
        ? scoreServices(mine.services as ServiceLike[], fork.services as ServiceLike[])
        : scoreModule(Object.values(mine), Object.values(fork));

    const r = rate(score);
    const over = r > spec.budget;
    if (over) failed = true;
    console.log(
      `  ${spec.path.padEnd(24)}${String(score.words).padStart(7)}${String(score.dup).padStart(7)}` +
        `${pct(r).padStart(7)}  ${pct(spec.budget)}${over ? "   *** OVER BUDGET ***" : ""}`,
    );
  }

  console.log("\nNot checked, and why (do not re-investigate):");
  for (const [what, why] of EXEMPT) console.log(`  · ${what} — ${why}`);

  if (failed) {
    console.error("\ncheck:copy-uniqueness FAILED.");
    console.error("Rewrite, don't find-and-replace (docs/05 § 2). If a module is SUPPOSED to be");
    console.error("duplicate, raise its budget here AND record the verdict — the distinction");
    console.error("between 'identical on purpose' and 'nobody looked' is the point of this file.");
    process.exit(1);
  }
  console.log("\ncheck:copy-uniqueness passed.");
}

void main();
