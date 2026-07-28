#!/usr/bin/env tsx
/*
 * Keyword-research data audit. Validates `data/keywords.json` against the
 * schema + URL conventions defined in `docs/strategy/keyword-research.md`.
 *
 * Why static (not "every URL resolves at build time"): the destination pages
 * don't exist until Phase 1+ ships. Pattern-conformance against the known
 * service/industry slug catalog catches typos (e.g. `/services/web-dev`)
 * without requiring real `page.tsx` files. Phase 1+ tightens this to a
 * file-exists check when the home + service pages land.
 *
 * Update the slug allowlists below when nav-data changes.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { z } from "zod";

// ── canonical catalogs (mirror components/layout/_nav-data.ts) ────────────────
// Edit here when service/industry slugs change in nav-data.

const SERVICE_SLUGS = [
  "web-development",
  "e-commerce",
  "web-applications",
  "ui-ux-design",
  "seo",
  "mobile-apps",
  "crm",
  "ai-integration",
  "maintenance",
] as const;

const INDUSTRY_SLUGS = [
  "aesthetic-clinics",
  "dental-practices",
  "beauty-wellness-clinics",
] as const;

const STATIC_PAGES = [
  "/",
  "/about",
  "/contact",
  "/pricing",
  "/services",
  "/industries",
  "/locations",
  "/blog",
] as const;

const CLUSTER_ENUM = [
  "web-development",
  "ecommerce",
  "web-app",
  "ui-ux",
  "seo",
  "mobile",
  "gohighlevel",
  "hubspot",
  "crm-migrations",
  "ai-voice-agents",
  "ai-chatbots",
  "ai-automation",
  "maintenance",
] as const;

const VERTICAL_ENUM = [
  "aesthetic-clinics",
  "dental-practices",
  "beauty-wellness-clinics",
  "real-estate",
  "home-services",
] as const;

const INTENT_ENUM = [
  "transactional",
  "commercial-investigation",
  "informational-bottom",
  "informational-top",
  "navigational",
] as const;

// ── soft thresholds ──────────────────────────────────────────────────────────

// Cannibalization heuristic from strategy/keyword-research.md ("rough …
// manual override allowed"). Service-head and industry-head URLs are excluded
// because the strategy doc's Industry × Service matrix explicitly assigns
// every industry-vertical service variant to the industry head. For everything
// else (blog posts, programmatic city pages):
const NON_HEAD_TRANSACTIONAL_WARN = 5;

function isAggregatorHead(url: string): boolean {
  const parts = url.split("/").filter(Boolean);
  if (parts.length !== 2) return false;
  if (parts[0] === "services") return (SERVICE_SLUGS as readonly string[]).includes(parts[1] ?? "");
  if (parts[0] === "industries")
    return (INDUSTRY_SLUGS as readonly string[]).includes(parts[1] ?? "");
  return false;
}

// ── schema ───────────────────────────────────────────────────────────────────

const KeywordSchema = z.object({
  term: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9][a-z0-9 ,'+/&.\-]*$/, "term must be lowercase, no leading whitespace/punct"),
  intent: z.enum(INTENT_ENUM),
  msv: z.number().int().nonnegative().nullable(),
  kd: z.number().int().min(0).max(100).nullable(),
  primaryUrl: z.string().startsWith("/"),
  supportingUrls: z.array(z.string().startsWith("/")),
  cluster: z.enum(CLUSTER_ENUM),
  vertical: z.enum(VERTICAL_ENUM).nullable(),
});

const FileSchema = z.object({
  $schema: z.string().optional(),
  meta: z.object({
    version: z.string(),
    lastUpdated: z.string(),
    msvKdSource: z.string().nullable(),
    note: z.string(),
    intentEnum: z.array(z.string()),
    clusterEnum: z.array(z.string()),
    verticalEnum: z.array(z.union([z.string(), z.null()])),
  }),
  keywords: z.array(KeywordSchema).min(300, "Phase 0 deliverable requires ≥ 300 keywords"),
});

// ── URL pattern matching ─────────────────────────────────────────────────────

const CITY_STATE_RE = /^[a-z0-9-]+-[a-z]{2}$/;
const KEBAB_SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidUrl(url: string): { ok: true } | { ok: false; reason: string } {
  if ((STATIC_PAGES as readonly string[]).includes(url)) return { ok: true };

  const parts = url.split("/").filter(Boolean);

  if (parts[0] === "services") {
    if (parts.length === 2) {
      return (SERVICE_SLUGS as readonly string[]).includes(parts[1] ?? "")
        ? { ok: true }
        : { ok: false, reason: `unknown service slug "${parts[1]}"` };
    }
    if (parts.length === 3) {
      if (!(SERVICE_SLUGS as readonly string[]).includes(parts[1] ?? ""))
        return { ok: false, reason: `unknown service slug "${parts[1]}"` };
      return CITY_STATE_RE.test(parts[2] ?? "")
        ? { ok: true }
        : { ok: false, reason: `bad city-state slug "${parts[2]}" (expect [city]-[st])` };
    }
  }

  if (parts[0] === "industries") {
    if (parts.length === 2) {
      return (INDUSTRY_SLUGS as readonly string[]).includes(parts[1] ?? "")
        ? { ok: true }
        : { ok: false, reason: `unknown industry slug "${parts[1]}"` };
    }
    if (parts.length === 3) {
      if (!(INDUSTRY_SLUGS as readonly string[]).includes(parts[1] ?? ""))
        return { ok: false, reason: `unknown industry slug "${parts[1]}"` };
      return CITY_STATE_RE.test(parts[2] ?? "")
        ? { ok: true }
        : { ok: false, reason: `bad city-state slug "${parts[2]}"` };
    }
  }

  if (parts[0] === "locations" && parts.length === 2) {
    return CITY_STATE_RE.test(parts[1] ?? "")
      ? { ok: true }
      : { ok: false, reason: `bad city-state slug "${parts[1]}"` };
  }

  if (parts[0] === "blog" && parts.length === 2) {
    return KEBAB_SLUG_RE.test(parts[1] ?? "")
      ? { ok: true }
      : { ok: false, reason: `bad blog slug "${parts[1]}" (expect kebab-case)` };
  }

  return { ok: false, reason: "URL does not match any known pattern" };
}

// ── audit ────────────────────────────────────────────────────────────────────

type Failure = { kind: "error" | "warn"; message: string };

function audit(): Failure[] {
  const path = resolve(process.cwd(), "data/keywords.json");
  const raw = readFileSync(path, "utf8");
  const parsed = JSON.parse(raw) as unknown;

  const result = FileSchema.safeParse(parsed);
  if (!result.success) {
    return result.error.issues.map((issue) => ({
      kind: "error" as const,
      message: `schema: ${issue.path.join(".")} — ${issue.message}`,
    }));
  }

  const { keywords } = result.data;
  const failures: Failure[] = [];

  // URL pattern check on every primary + supporting URL
  for (const [i, kw] of keywords.entries()) {
    const where = `[${i}] "${kw.term}"`;
    const primaryCheck = isValidUrl(kw.primaryUrl);
    if (!primaryCheck.ok) {
      failures.push({
        kind: "error",
        message: `${where}: primaryUrl "${kw.primaryUrl}" — ${primaryCheck.reason}`,
      });
    }
    for (const url of kw.supportingUrls) {
      const sCheck = isValidUrl(url);
      if (!sCheck.ok) {
        failures.push({
          kind: "error",
          message: `${where}: supportingUrl "${url}" — ${sCheck.reason}`,
        });
      }
    }
  }

  // Duplicate term check
  const seen = new Map<string, number>();
  for (const [i, kw] of keywords.entries()) {
    const prev = seen.get(kw.term);
    if (prev !== undefined) {
      failures.push({
        kind: "error",
        message: `duplicate term "${kw.term}" at index ${i} (first seen at ${prev})`,
      });
    } else {
      seen.set(kw.term, i);
    }
  }

  // Cannibalization heuristic — warn only, per strategy doc "manual override allowed"
  const transactionalByUrl = new Map<string, string[]>();
  for (const kw of keywords) {
    if (kw.intent !== "transactional") continue;
    const list = transactionalByUrl.get(kw.primaryUrl) ?? [];
    list.push(kw.term);
    transactionalByUrl.set(kw.primaryUrl, list);
  }
  for (const [url, terms] of transactionalByUrl) {
    if (isAggregatorHead(url)) continue;
    if (terms.length > NON_HEAD_TRANSACTIONAL_WARN) {
      failures.push({
        kind: "warn",
        message: `cannibalization candidate: ${terms.length} transactional keywords on ${url} (> ${NON_HEAD_TRANSACTIONAL_WARN}, non-head URL) — consider relocating to a more specific page`,
      });
    }
  }

  // Summary by cluster + intent
  const byCluster = new Map<string, number>();
  const byIntent = new Map<string, number>();
  for (const kw of keywords) {
    byCluster.set(kw.cluster, (byCluster.get(kw.cluster) ?? 0) + 1);
    byIntent.set(kw.intent, (byIntent.get(kw.intent) ?? 0) + 1);
  }

  console.log(`\n── ${keywords.length} keywords ──`);
  console.log("\nBy cluster:");
  for (const cluster of CLUSTER_ENUM) {
    const n = byCluster.get(cluster) ?? 0;
    console.log(`  ${cluster.padEnd(18)} ${String(n).padStart(4)}`);
  }
  console.log("\nBy intent:");
  for (const intent of INTENT_ENUM) {
    const n = byIntent.get(intent) ?? 0;
    console.log(`  ${intent.padEnd(28)} ${String(n).padStart(4)}`);
  }

  return failures;
}

const failures = audit();
const errors = failures.filter((f) => f.kind === "error");
const warns = failures.filter((f) => f.kind === "warn");

if (warns.length > 0) {
  console.log(`\n── ${warns.length} warning(s) ──`);
  for (const w of warns) console.warn(`  ⚠ ${w.message}`);
}

if (errors.length > 0) {
  console.error(`\n── ${errors.length} error(s) ──`);
  for (const e of errors) console.error(`  ✗ ${e.message}`);
  console.error(`\n✗ keyword audit failed`);
  process.exit(1);
}

console.log(`\n✓ keyword audit passed${warns.length ? ` (${warns.length} warning(s))` : ""}`);
process.exit(0);
