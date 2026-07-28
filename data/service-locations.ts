/**
 * Programmatic `/services/[service]/[location]` content module — the single
 * source of truth for the service × area pages.
 *
 * Unlike the hand-crafted hubs/industries (data catalogue + long-form MDX body),
 * these pages are *genuinely programmatic*: no per-combo MDX. Each page is
 * assembled from
 *   1. a hand-authored, genuinely-unique opening (one per combo — names the
 *      area + a specific local detail + the service angle), plus
 *   2. per-service template config (overview, local-relevance builder, FAQ
 *      builder) that interpolates the rich `data/locations.ts` enrichment.
 *
 * ── THE BATCH IS EMPTY IN PHASE 0 ────────────────────────────────────────
 * The ENGINE transfers from Naxdor intact; the US CONTENT does not, and was
 * deliberately not translated. Two reasons:
 *
 *   1. Translating US pages into British spelling produces near-duplicate
 *      content, which is exactly the trap docs/06 § Phase 2 warns against.
 *   2. Naxdor's SEO and CRM configs promise the client "your Google Business
 *      Profile". **WebAsk cannot deliver that** — D1 resolved to fully remote
 *      with no UK location, so there is no eligible profile to create. Porting
 *      that copy would have shipped a claim contradicting a locked decision.
 *
 * Phase 2 owns the first UK batch (6–9 pages, docs/06 § Phase 2). To add one:
 * populate `PROGRAMMATIC_SERVICE_SLUGS`, `PROGRAMMATIC_LOCATION_SLUGS`,
 * `CONFIGS` and `PROGRAMMATIC_OPENINGS` together.
 *
 * ⚠️ Add a combo to the slug arrays only once its hand-authored opening exists.
 * `buildProgrammaticBodyText` returns "" for a missing opening, and the
 * uniqueness gate scores two empty shingle sets as 100% similar — surfacing as
 * a hard CI failure reading "near-duplicate at 100.0%", which is a confusing
 * symptom for a trivial cause.
 *
 * Indexation gate (per strategy/programmatic-seo.md § Indexation gate): every
 * combo ships `indexable: false` → the route emits `noindex, follow` and the
 * page stays out of the sitemap. Promotion to `index, follow` is a one-line flip
 * in `PROMOTED` below, done only AFTER a human clears the page against the
 * § Indexation-gate checklist (≥600 words, uniqueness, links resolve, JSON-LD,
 * area-named opening, ≥3 local FAQs).
 *
 * Honesty / E-E-A-T: WebAsk is fully remote (see `data/site.ts`) with NO office
 * in these areas. Copy must be honest about remote-first delivery on UK time —
 * no claimed local office, no invented clients/stats/results, only
 * well-known/approximate area facts (drawn from `data/locations.ts`). The
 * JSON-LD expresses reach via `areaServed` only (see `lib/jsonld.ts`
 * `serviceLocationNodes`).
 *
 * `buildProgrammaticBodyText` is the body-text contract shared by BOTH the route
 * template and `scripts/check-programmatic-uniqueness.ts`, so the uniqueness gate
 * scores exactly what ships and the two can't drift.
 */

import { getLocationBySlug, type Location } from "@/data/locations";
import { getServiceBySlug, type Service } from "@/data/services";
import type { FaqItem } from "@/data/types";

/**
 * The services in the programmatic batch. EMPTY until Phase 2.
 * Annotated `ReadonlyArray<string>` rather than `as const` so the empty literal
 * doesn't infer `never` through the `flatMap` below.
 */
export const PROGRAMMATIC_SERVICE_SLUGS: ReadonlyArray<string> = [];

/** The areas in the programmatic batch. EMPTY until Phase 2. */
export const PROGRAMMATIC_LOCATION_SLUGS: ReadonlyArray<string> = [];

// ──────────────────────────────────────────────────────────────────
// Per-service template config
// ──────────────────────────────────────────────────────────────────

export type ProgrammaticServiceConfig = {
  readonly slug: string;
  /** Display name, mirrors data/services.ts (e.g. "Web Development"). */
  readonly serviceName: string;
  readonly metaTitle: (loc: Location) => string;
  readonly metaDescription: (loc: Location) => string;
  /** The page's single h1. */
  readonly h1: (loc: Location) => string;
  readonly heroSubhead: (loc: Location) => string;
  readonly localRelevanceHeading: (loc: Location) => string;
  /** Area-specific paragraph(s) built from enrichment — the unique middle. */
  readonly localRelevance: (loc: Location) => readonly string[];
  readonly overviewHeading: string;
  /** Templated service overview — identical across areas (the legitimate shared ~"70%"). */
  readonly overview: readonly string[];
  /** Area-specific FAQs (3–4). */
  readonly faqs: (loc: Location) => FaqItem[];
};

/** One config per entry in `PROGRAMMATIC_SERVICE_SLUGS`. EMPTY until Phase 2. */
const CONFIGS: ReadonlyArray<ProgrammaticServiceConfig> = [];

/**
 * Hand-authored opening paragraph per `[serviceSlug][locationSlug]`. This is the
 * genuinely-unique part of each page and the reason the uniqueness gate passes.
 * EMPTY until Phase 2 — see the ⚠️ note in the file header before adding.
 */
const PROGRAMMATIC_OPENINGS: Record<string, Record<string, string>> = {};

// ──────────────────────────────────────────────────────────────────
// Combos + indexation gate
// ──────────────────────────────────────────────────────────────────

export type ProgrammaticCombo = {
  readonly serviceSlug: string;
  readonly locationSlug: string;
  /** True => route emits `index, follow` and the page enters the sitemap. */
  readonly indexable: boolean;
};

/**
 * Promoted combos, as `${serviceSlug}/${locationSlug}`. EMPTY — every page ships
 * `noindex`. Add an entry here ONLY after a human clears that page against the
 * strategy/programmatic-seo.md § Indexation-gate checklist; the next build then
 * emits `index, follow` and adds it to the sitemap.
 */
const PROMOTED: ReadonlySet<string> = new Set<string>([]);

export const PROGRAMMATIC_COMBOS: ReadonlyArray<ProgrammaticCombo> =
  PROGRAMMATIC_SERVICE_SLUGS.flatMap((serviceSlug) =>
    PROGRAMMATIC_LOCATION_SLUGS.map((locationSlug) => ({
      serviceSlug,
      locationSlug,
      indexable: PROMOTED.has(`${serviceSlug}/${locationSlug}`),
    })),
  );

// ──────────────────────────────────────────────────────────────────
// Accessors
// ──────────────────────────────────────────────────────────────────

export function getProgrammaticServiceConfig(slug: string): ProgrammaticServiceConfig | undefined {
  return CONFIGS.find((config) => config.slug === slug);
}

export function getProgrammaticCombo(
  serviceSlug: string,
  locationSlug: string,
): ProgrammaticCombo | undefined {
  return PROGRAMMATIC_COMBOS.find(
    (combo) => combo.serviceSlug === serviceSlug && combo.locationSlug === locationSlug,
  );
}

/** Combos promoted to `index, follow` — drives the sitemap. */
export const promotedCombos: ReadonlyArray<ProgrammaticCombo> = PROGRAMMATIC_COMBOS.filter(
  (combo) => combo.indexable,
);

/** Areas this service has a programmatic page in (canonical order). */
export function getProgrammaticLocationsForService(serviceSlug: string): Location[] {
  return PROGRAMMATIC_COMBOS.filter((combo) => combo.serviceSlug === serviceSlug)
    .map((combo) => getLocationBySlug(combo.locationSlug))
    .filter((loc): loc is Location => loc !== undefined);
}

/** Other areas (not `currentLocationSlug`) where this same service has a page. */
export function getSiblingLocations(serviceSlug: string, currentLocationSlug: string): Location[] {
  return getProgrammaticLocationsForService(serviceSlug).filter(
    (loc) => loc.slug !== currentLocationSlug,
  );
}

/** Other services (not `currentServiceSlug`) with a page in the same area. */
export function getSiblingServiceConfigs(
  currentServiceSlug: string,
  locationSlug: string,
): ProgrammaticServiceConfig[] {
  return PROGRAMMATIC_COMBOS.filter(
    (combo) => combo.locationSlug === locationSlug && combo.serviceSlug !== currentServiceSlug,
  )
    .map((combo) => getProgrammaticServiceConfig(combo.serviceSlug))
    .filter((config): config is ProgrammaticServiceConfig => config !== undefined);
}

/** Service slugs that have at least one programmatic page — drives the parent-page inbound block. */
export const PROGRAMMATIC_SERVICE_SLUGS_WITH_PAGES: ReadonlyArray<string> = [
  ...new Set(PROGRAMMATIC_COMBOS.map((combo) => combo.serviceSlug)),
];

// ──────────────────────────────────────────────────────────────────
// Body-text contract (shared by the route + the uniqueness script)
// ──────────────────────────────────────────────────────────────────

/**
 * The page's substantive body text — opening + local relevance + service
 * overview + every FAQ question and answer, in render order. This is the exact
 * contract `scripts/check-programmatic-uniqueness.ts` scores, so the gate
 * measures what actually ships. Returns "" for an unknown combo.
 */
export function buildProgrammaticBodyText(serviceSlug: string, location: Location): string {
  const config = getProgrammaticServiceConfig(serviceSlug);
  const opening = PROGRAMMATIC_OPENINGS[serviceSlug]?.[location.slug];
  if (!config || opening === undefined) return "";
  const parts: string[] = [
    opening,
    ...config.localRelevance(location),
    ...config.overview,
    ...config.faqs(location).flatMap((faq) => [faq.question, faq.answer]),
  ];
  return parts.join("\n\n");
}

// ──────────────────────────────────────────────────────────────────
// Assembled page model (one call for the route)
// ──────────────────────────────────────────────────────────────────

export type ProgrammaticPage = {
  readonly service: Service;
  readonly location: Location;
  readonly config: ProgrammaticServiceConfig;
  readonly combo: ProgrammaticCombo;
  readonly opening: string;
  readonly localRelevanceHeading: string;
  readonly localRelevance: readonly string[];
  readonly overviewHeading: string;
  readonly overview: readonly string[];
  readonly faqs: readonly FaqItem[];
  /** Other services in the same area. */
  readonly siblingServices: readonly ProgrammaticServiceConfig[];
  /** Same service in the other built areas. */
  readonly siblingLocations: readonly Location[];
};

/** Everything the route needs for one combo, or undefined if the combo isn't in the batch. */
export function getProgrammaticPage(
  serviceSlug: string,
  locationSlug: string,
): ProgrammaticPage | undefined {
  const combo = getProgrammaticCombo(serviceSlug, locationSlug);
  const config = getProgrammaticServiceConfig(serviceSlug);
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(locationSlug);
  const opening = PROGRAMMATIC_OPENINGS[serviceSlug]?.[locationSlug];
  if (!combo || !config || !service || !location || opening === undefined) return undefined;

  return {
    service,
    location,
    config,
    combo,
    opening,
    localRelevanceHeading: config.localRelevanceHeading(location),
    localRelevance: config.localRelevance(location),
    overviewHeading: config.overviewHeading,
    overview: config.overview,
    faqs: config.faqs(location),
    siblingServices: getSiblingServiceConfigs(serviceSlug, locationSlug),
    siblingLocations: getSiblingLocations(serviceSlug, locationSlug),
  };
}
