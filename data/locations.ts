/**
 * Location catalogue — the canonical source of truth for the UK areas WebAsk
 * serves. Launch set (D7, docs/02 § 6): Manchester → Cheshire → Leeds, with a
 * North-West-first programmatic expansion ring.
 *
 * Consumed by:
 *  - `app/(marketing)/locations/page.tsx` (index — cards)
 *  - `app/(marketing)/locations/[location]/page.tsx` (per-area hub page)
 *  - `data/service-locations.ts` (the programmatic `/services/[service]/[location]`
 *    template, which builds prose from the enrichment fields below)
 *
 * ── PHASE 0 SHIPS THE FACTUAL HALF ONLY ──────────────────────────────────
 * The authored half — `copy` here, plus the long-form body in
 * `content/locations/<slug>.mdx` — is a Phase 2 deliverable (docs/06 § Phase 2:
 * "3 hubs: Manchester, Cheshire, Leeds. Cheshire is the aesthetics-money hub").
 *
 * That split is enforced by the TYPE, not by reviewer discipline. `copy` is
 * optional, so an unauthored area cannot be rendered, cannot enter `/locations`,
 * and cannot enter the sitemap. The no-fabrication rule (CLAUDE.md § Don't)
 * therefore cannot be violated by omission — there is no half-filled state, and
 * no placeholder copy to accidentally ship.
 *
 * ── HONESTY / D1 ─────────────────────────────────────────────────────────
 * WebAsk is fully remote with NO UK office. Copy here and in the MDX bodies
 * never claims a local presence, and the JSON-LD expresses reach via
 * `areaServed` only — no `address`, no `geo` (see `lib/jsonld.ts`
 * `locationHubNode`). Every figure below carries a named source; nothing is
 * estimated. An unsourced statistic falls under the same rule as a fabricated
 * testimonial.
 */

import type { CtaLink, FaqItem, Meta } from "@/data/types";

/**
 * City/town hub vs county-level hub.
 *
 * Cheshire is a **county, not a city**, and does not fit a City-shaped record.
 * This drives three real behaviours: the schema.org `areaServed` type (`City`
 * vs `AdministrativeArea` — see `lib/jsonld.ts`), whether `notableAreas` holds
 * districts or principal towns, and the Phase 2 copy template.
 *
 * Kept as a flat discriminant rather than a discriminated union: the field sets
 * are ~90% identical, so a union would break `getLocationBySlug`'s single return
 * type and force narrowing at every consumer for no safety gain.
 */
export type LocationKind = "city" | "county";

/**
 * What `population` counts. Recorded because a UK "city population" is ambiguous
 * by millions — Leeds is ~0.82m as a local-authority district and ~2.3m as West
 * Yorkshire — and copy must never quietly promote the larger figure.
 */
export type PopulationBasis = "built-up-area" | "local-authority" | "ceremonial-county";

/** Relative organic-search opportunity. Drives expansion order — never rendered. */
export type SearchVolumeTier = "high" | "med" | "low";

/** A nearby place we also serve. `slug` is the future `/locations/<slug>` target. */
export type NearbyPlace = {
  /** Display name, e.g. "Altrincham". No county suffix — UK copy doesn't use one. */
  readonly name: string;
  /** Kebab-case slug, e.g. "altrincham". No page yet — display-only today. */
  readonly slug: string;
};

/**
 * Hand-written hub copy. **Absent until Phase 2 authors it** — omitted entirely
 * rather than stubbed. `exactOptionalPropertyTypes` forbids assigning
 * `undefined`, which is the point: the object is all-or-nothing, so Phase 2
 * cannot forget a piece and Phase 0 cannot invent one.
 */
export type LocationCopy = {
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
  /** One/two-line value prop for the `/locations` index card. */
  readonly cardSummary: string;
  /**
   * Area-specific FAQs — rendered via `FaqAccordion` and emitted as `FAQPage`
   * JSON-LD. Lead with the most-relevant local intent (per content-guidelines
   * § FAQ); the first is always the pricing question. 3–5 per hub.
   */
  readonly faqs: ReadonlyArray<FaqItem>;
};

export type Location = {
  /**
   * Bare kebab slug — `manchester`, `cheshire`, `leeds`. Deliberately NOT the
   * US `[city]-[state-abbrev]` form (`austin-tx`): the UK has no equivalent and
   * it reads as an unlocalised American import to exactly the buyers we are
   * targeting (docs/04 § 4).
   */
  readonly slug: string;
  readonly kind: LocationKind;
  /** Display name, e.g. "Manchester". Used verbatim — never suffixed with a county. */
  readonly name: string;
  /**
   * Ceremonial or metropolitan county — emitted as schema `containedInPlace`.
   * For `kind: "county"` this equals `name`: the hub *is* the county.
   */
  readonly county: string;
  /** ITL 1 statistical region, e.g. "North West England". */
  readonly region: string;
  /**
   * The wider area this hub genuinely covers, worded as UK copy would word it.
   * Replaces the US Census `metroArea`: the UK has no MSA, and the nearest ONS
   * analogue ("Built-up Area") is jargon no marketing page would print — and
   * does not exist for a county at all.
   */
  readonly serviceArea: string;
  /** Approximate resident population of `serviceArea`. */
  readonly population: number;
  readonly populationBasis: PopulationBasis;
  /** Source + vintage, e.g. "ONS Census 2021". No unsourced figures ship. */
  readonly populationSource: string;
  /** Always Europe/London — literal-typed so the catalogue is provably UK. */
  readonly timeZone: "Europe/London";
  /** Display label. "UK time", not "GMT" — half the year it's BST. */
  readonly timeZoneLabel: string;
  /** Local sector mix, most prominent first. British English. */
  readonly notableIndustries: ReadonlyArray<string>;
  /**
   * Districts for a city, principal towns for a county. One field named
   * honestly for both — a county has towns, not neighbourhoods. (The inherited
   * `notableNeighborhoods` was also US spelling.)
   */
  readonly notableAreas: ReadonlyArray<string>;
  /** Nearby places we also serve (display-only until their pages exist). */
  readonly nearbyPlaces: ReadonlyArray<NearbyPlace>;
  readonly searchVolumeTier: SearchVolumeTier;
  /** Authored hub copy — omitted until Phase 2. Absent ⇒ no hub page exists. */
  readonly copy?: LocationCopy;
};

/** A hub Phase 2 has written — the only shape the hub template can render. */
export type AuthoredLocation = Location & { readonly copy: LocationCopy };

/** Narrowing guard. Presence of `copy` is the single source of "has a page". */
export function isAuthoredLocation(location: Location): location is AuthoredLocation {
  return location.copy !== undefined;
}

export const locations: ReadonlyArray<Location> = [
  {
    slug: "manchester",
    kind: "city",
    name: "Manchester",
    county: "Greater Manchester",
    region: "North West England",
    serviceArea: "Greater Manchester",
    population: 2_867_800,
    populationBasis: "ceremonial-county",
    populationSource: "ONS Census 2021 (Greater Manchester metropolitan county)",
    timeZone: "Europe/London",
    timeZoneLabel: "UK time",
    notableIndustries: [
      "professional and financial services",
      "digital and technology",
      "healthcare and aesthetics",
      "higher education",
      "media and creative",
    ],
    notableAreas: [
      "Deansgate",
      "Spinningfields",
      "Northern Quarter",
      "Ancoats",
      "Didsbury",
      "Chorlton",
    ],
    // Hale, Altrincham and Bramhall are commonly marketed as "Cheshire" by
    // clinics because they were historically in the county, but they sit in
    // Trafford and Stockport — Greater Manchester. They belong here, not on the
    // Cheshire record. Getting this wrong is instantly visible to a local buyer.
    nearbyPlaces: [
      { name: "Altrincham", slug: "altrincham" },
      { name: "Hale", slug: "hale" },
      { name: "Stockport", slug: "stockport" },
      { name: "Bramhall", slug: "bramhall" },
      { name: "Salford", slug: "salford" },
      { name: "Bolton", slug: "bolton" },
    ],
    searchVolumeTier: "high",
    // `copy` omitted — Phase 2.
  },
  {
    slug: "cheshire",
    kind: "county",
    name: "Cheshire",
    // A county hub: `county` equals `name` by definition.
    county: "Cheshire",
    region: "North West England",
    serviceArea: "Cheshire",
    population: 1_075_800,
    populationBasis: "ceremonial-county",
    populationSource: "ONS mid-2021 population estimates (Cheshire ceremonial county)",
    timeZone: "Europe/London",
    timeZoneLabel: "UK time",
    notableIndustries: [
      "aesthetics and private healthcare",
      "professional services",
      "life sciences and chemicals",
      "financial services",
      "hospitality and leisure",
    ],
    // Principal towns, not neighbourhoods. Deliberately excludes Hale,
    // Altrincham and Bramhall — see the note on the Manchester record.
    notableAreas: [
      "Wilmslow",
      "Alderley Edge",
      "Knutsford",
      "Macclesfield",
      "Chester",
      "Warrington",
    ],
    nearbyPlaces: [
      { name: "Manchester", slug: "manchester" },
      { name: "Warrington", slug: "warrington" },
      { name: "Chester", slug: "chester" },
      { name: "Stoke-on-Trent", slug: "stoke-on-trent" },
    ],
    searchVolumeTier: "med",
    // `copy` omitted — Phase 2. This is the aesthetics-money hub and gets the
    // strongest clinic-facing content (docs/06 § Phase 2).
  },
  {
    slug: "leeds",
    kind: "city",
    name: "Leeds",
    county: "West Yorkshire",
    region: "Yorkshire and The Humber",
    serviceArea: "West Yorkshire",
    population: 2_320_200,
    populationBasis: "ceremonial-county",
    populationSource: "ONS Census 2021 (West Yorkshire metropolitan county)",
    timeZone: "Europe/London",
    timeZoneLabel: "UK time",
    notableIndustries: [
      "financial and legal services",
      "healthcare and digital health",
      "retail and e-commerce",
      "higher education",
      "manufacturing",
    ],
    notableAreas: ["City Centre", "Headingley", "Chapel Allerton", "Horsforth", "Roundhay"],
    nearbyPlaces: [
      { name: "Bradford", slug: "bradford" },
      { name: "Wakefield", slug: "wakefield" },
      { name: "Harrogate", slug: "harrogate" },
      { name: "York", slug: "york" },
    ],
    searchVolumeTier: "med",
    // `copy` omitted — Phase 2.
  },
] as const;

/** Slugs in canonical display order. */
export const LOCATION_SLUGS: ReadonlyArray<string> = locations.map((location) => location.slug);

/** Lookup by canonical slug. Returns undefined if the slug isn't a known area. */
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

/**
 * Areas with authored copy — the only ones that have a hub page.
 *
 * **EMPTY IN PHASE 0** by design, so `/locations` renders no cards, the
 * industry/service cross-link grids self-hide, and the sitemap lists no hub.
 * Replaces the inherited `handCrafted: boolean`, which was a hand-maintained
 * flag that could disagree with whether the copy actually existed.
 */
export const authoredLocations: ReadonlyArray<AuthoredLocation> =
  locations.filter(isAuthoredLocation);
