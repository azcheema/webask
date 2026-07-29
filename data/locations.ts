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
 * ── ALL THREE HUBS ARE AUTHORED (Phase 2, 2026-07-29) ────────────────────
 * Phase 0 shipped the factual half only; the authored half — `copy` here, plus
 * the long-form body in `content/locations/<slug>.mdx` — landed together in one
 * commit, which is the only order that works: the route `notFound()`s without
 * `copy`, `generateStaticParams` reads the MDX directory, and the hubs link to
 * each other in body prose, so shipping either half alone yields dead links.
 *
 * The split is still enforced by the TYPE rather than by reviewer discipline.
 * `copy` stays optional, so a FUTURE area added to this list cannot be rendered,
 * cannot enter `/locations` and cannot enter the sitemap until it is written.
 * The no-fabrication rule (CLAUDE.md § Don't) therefore cannot be violated by
 * omission — there is no half-filled state, and no placeholder copy to ship.
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
 * Hand-written hub copy — omitted entirely rather than stubbed for any area
 * that has not been written. `exactOptionalPropertyTypes` forbids assigning
 * `undefined`, which is the point: the object is all-or-nothing, so a new area
 * cannot be half-filled and cannot be invented to make a page render.
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
   * Districts for a city; for a county, the towns the hub is written around.
   * One field named honestly for both — a county has towns, not neighbourhoods.
   * (The inherited `notableNeighborhoods` was also US spelling.)
   *
   * ⚠️ For a county this is a **marketing selection, not the planning term of
   * art**. Cheshire East's Local Plan designates Crewe and Macclesfield as its
   * Principal Towns and puts Knutsford and Wilmslow a tier below; the list here
   * leads with the corridor docs/02 § 6 identifies, and omits Crewe, Northwich,
   * Ellesmere Port, Runcorn and Widnes, several of which are larger. Copy must
   * therefore not assert "the county's principal towns are …" — that is a
   * checkable claim this field cannot support, and getting it wrong on a page
   * whose argument is local literacy costs more than the towns are worth.
   */
  readonly notableAreas: ReadonlyArray<string>;
  /** Nearby places we also serve (display-only until their pages exist). */
  readonly nearbyPlaces: ReadonlyArray<NearbyPlace>;
  readonly searchVolumeTier: SearchVolumeTier;
  /** Authored hub copy. Absent ⇒ no hub page exists, by construction. */
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
    copy: {
      meta: {
        title: "Web Design Agency for Manchester Businesses",
        description:
          "Manchester is the second most competitive major UK city for local search — so we build for the specific queries you can win, not the head term. Remote, UK time.",
      },
      hero: {
        h1: "Web design agency for Manchester businesses, built for the queries you can actually win.",
        subhead:
          "Manchester is the second most competitive major UK city for local search, on SERPTool's 2026 ranking of 25 UK cities. That ranking is about head terms. The queries a growing business can realistically reach are the specific ones — by sector, by district, by what you actually do — and that changes what gets built.",
        primaryCta: { label: "Book a Manchester strategy call", href: "/contact" },
      },
      cardSummary:
        "Second for competitiveness among major UK cities on SERPTool's 2026 ranking of 25 — so this hub is about winning the specific queries instead of the head term: by sector, by district, by what you do.",
      faqs: [
        {
          question: "How much does a website cost for a Manchester business",
          answer:
            "A custom website build starts at £3,500, SEO at £750 a month and CRM automation at £2,500, all + VAT where applicable. Manchester carries no local surcharge: the price follows the scope, not the postcode. Worth knowing about the other end of the market, though — UK SEO sold at around £99 a month buys automated links and thin reporting (dotwall, 2026), which is why the monthly figure above sits well clear of that floor.",
        },
        {
          question: "Should we target web design Manchester as our main keyword",
          answer:
            "Probably not as the main one, and this is the argument the whole page is built on. SERPTool's 2026 ranking of 25 UK cities by local SEO opportunity puts Manchester second for competitiveness among major cities, with financial services in Spinningfields approaching London density — but that ranking describes head terms, not the qualified searches that end in an enquiry. Service-plus-district and service-plus-sector phrases are less contested, sit higher in the priority order for a domain with no authority yet, and are closer to a purchase. New targets will be held to a difficulty ceiling of KD 35 or below, by default and lower where possible. Said plainly, though: the difficulty numbers behind that filter have not been pulled yet. All 332 rows in the keyword map carry null volume and null difficulty, and inventing them would fabricate the numbers that decide where months of work go.",
        },
        {
          question: "Can you take on a Manchester project with no office in the city",
          answer:
            "Yes — and we would rather say plainly that there is no office than imply one. WebAsk is a trading name of Naxdor, operated fully remotely: no Manchester address, no local desk, no UK company. What you get instead is the whole engagement on UK time: calls in your working day, a written scope, and a free audit returned inside three working days. Your Vercel project, domain, analytics, Search Console property and CRM would all sit in accounts you own from day one, wherever we are sitting. Nothing in a Deansgate or Spinningfields postcode changes how a Next.js build is delivered.",
        },
        {
          question: "What does having no Google Business Profile of your own mean for our project",
          answer:
            "It is our constraint rather than yours, and it is worth stating rather than minimising. Google requires a real location staffed during stated hours, so with no UK address there is no eligible profile for us to create and no map presence to go with it — no pin, no Google reviews, no knowledge panel. Our own strategy uses this city as the worked example: for a term like web design agency Manchester the blue links are open to us and the map is not. Your site is a separate property with its own eligibility. If you have premises in Greater Manchester the profile is free, it sits above the blue links, and it is worth sorting before any retainer starts.",
        },
        {
          question: "Which parts of Greater Manchester would get their own page",
          answer:
            "Six districts are plausible first: Deansgate, Spinningfields, the Northern Quarter, Ancoats, Didsbury and Chorlton. They differ enough in who trades there, and in what those businesses need, to carry genuinely different pages — which is the only reason to write more than one. None of them has a page yet. None would get one on the strength of a find-and-replace, and the rest of Greater Manchester is covered by this hub rather than by a page of its own.",
        },
      ],
    },
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
    // Deliberately excludes Warrington and Chester, which `notableAreas` above
    // already claims for this hub. The template renders this list as "Nearby
    // areas we serve", so a town appearing in both says, on one URL, that the
    // same place is inside the county this page covers AND somewhere adjacent
    // we also reach. On the one hub whose argument is that it knows where the
    // county line runs, that is self-refuting. These four are genuinely outside
    // it; Liverpool and Stockport are also in docs/02 § 6's expansion ring.
    nearbyPlaces: [
      { name: "Manchester", slug: "manchester" },
      { name: "Stockport", slug: "stockport" },
      { name: "Liverpool", slug: "liverpool" },
      { name: "Stoke-on-Trent", slug: "stoke-on-trent" },
    ],
    searchVolumeTier: "med",
    // The aesthetics-money hub, so it carries the strongest clinic-facing
    // content (docs/06 § Phase 2) — held at the confidence docs/02 § 6 actually
    // supports: a named-clinic pattern, not a published count.
    copy: {
      meta: {
        title: "Web Design Agency for Cheshire Businesses",
        description:
          "Web design, SEO and CRM for Cheshire businesses — Wilmslow, Knutsford, Macclesfield, Chester and Warrington. Remote, on UK time, clear on the county line.",
      },
      hero: {
        h1: "Cheshire is a county, not a city — and that changes what web design here has to do.",
        subhead:
          "Web design, SEO and CRM for businesses across Wilmslow, Alderley Edge, Knutsford, Macclesfield, Chester and Warrington — including the clinics that market under the Cheshire name and have advertising rules to build the site around. Remote, on UK time, and clear about where the county line actually runs.",
        primaryCta: { label: "Book a Cheshire strategy call", href: "/contact" },
      },
      cardSummary:
        "The county hub rather than a city one: towns that carry their own searches, not a share of the county's — and the clinic corridor that markets under the Cheshire name, stated at the confidence the evidence supports.",
      faqs: [
        {
          question: "How much does a website cost for a Cheshire business",
          answer:
            "A custom website starts at £3,500 and SEO at £750 a month, with CRM and booking automation from £2,500 — all + VAT where applicable, and all published rather than released on request. For context: UK agencies quote £2,500–£10,000 for a standard small-business website (Duport / GetYouOnline, 2026), and UK SEO retainers for small businesses run roughly £150–£800 a month (dotwall / RedEagle, 2026). What moves the number is scope — pages, integrations, complexity — and nothing else. Where a clinic's price list has to be restructured rather than reworded, much of that scope is information architecture, and it is agreed in writing before anything is built.",
        },
        {
          question: "Do you work with Cheshire businesses if you have no office in the county",
          answer:
            "Yes, and to be straight about it there is no UK office anywhere — WebAsk is a trading name of Naxdor, a Swedish business, operated remotely on UK time. Concretely, that means calls, screen shares and a written scope inside three working days rather than a drive to Wilmslow. Cheshire is a reasonable place for that to be uncontroversial: Wilmslow, Alderley Edge, Knutsford, Macclesfield, Chester and Warrington each have their own centre, so in a county this spread out “local” was never going to mean the same high street. Domains, hosting, CRM and analytics stay in accounts registered in your name, so nothing here becomes a dependency.",
        },
        {
          question:
            "Can you help a Cheshire business rank locally without a Google Business Profile",
          answer:
            "Two questions sit inside that one. If you have staffed premises — a clinic in Knutsford, an office in Chester — you almost certainly qualify for a Google Business Profile, it costs nothing, and it belongs ahead of any retainer. We do not qualify, and will not pretend otherwise: Google requires a real location staffed during stated hours, and there is no UK address here to make eligible, so no map pin, no Google reviews and no knowledge panel. That is a real cost and worth naming rather than burying. It also means local search on our side is organic or nothing — county and town pages with genuine substance, topical depth, and only the listings whose eligibility rules we can honestly meet. Our SEO service page sets out how that is built.",
        },
        {
          question:
            "Do you cover Chester and Warrington as well as the Wilmslow and Knutsford side",
          answer:
            "Yes. The hub is the whole ceremonial county — roughly 1,075,800 people on the ONS mid-2021 basis — and not only the corridor on Manchester's southern fringe. Chester and Warrington sit on this page on the same terms as Wilmslow, Alderley Edge, Knutsford and Macclesfield, and the county carries on past all six to Crewe, Northwich, Ellesmere Port, Runcorn and Widnes. Whether any single town later earns a URL of its own is a separate call, made on whether there is search demand for its name and whether the page still says something once the town name is deleted from it. Hale, Altrincham and Bramhall are not on this page: they are commonly marketed as Cheshire but sit in Trafford and Stockport, so they belong to the Manchester hub.",
        },
        {
          question: "Do you only work with aesthetic clinics in Cheshire",
          answer:
            "No. The clinic material runs deepest here because clinic advertising carries a rule most sectors have no equivalent of — a prescription-only medicine may not be advertised to the public at all — not because clinics are the only sector this site is built to serve. The county's mix also runs to professional services, life sciences and chemicals, financial services, and hospitality and leisure. What changes between them is which regulator is most in play rather than how the site gets built: a hospitality business has review authenticity to worry about under the DMCC Act 2024, a professional-services firm has PECR consent for the outreach it sends, and everything any of them publishes sits inside the CAP Code. It is the clinics whose prescription-only-medicine rules reach past the wording and into the structure — click depth, primary navigation, internal linking — which is not true of the others here.",
        },
      ],
    },
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
    copy: {
      meta: {
        title: "Web Design Agency for Leeds — Regulated Sectors",
        description:
          "Web design, SEO and automation for Leeds and West Yorkshire firms in regulated sectors — dentistry, finance, law and healthcare. Remote, on UK time.",
      },
      hero: {
        h1: "Web design in Leeds, for businesses whose website is a regulated document.",
        subhead:
          "Financial and legal services and healthcare lead the sector mix we work from across West Yorkshire, and for a regulated firm the site is read by more than customers. We build to the rulebook first and for search second — remotely, on UK time.",
        primaryCta: { label: "Book a Leeds strategy call", href: "/contact" },
      },
      cardSummary:
        "West Yorkshire's regulated professions — dental practices, financial and legal services, healthcare — where the website is a published statement before it is a brochure.",
      faqs: [
        {
          question: "How much does a website cost for a Leeds business",
          answer:
            "A custom build starts at £3,500, SEO at £750 a month, CRM automation at £2,500 and a care plan at £250 a month, each + VAT where applicable. For context, UK agencies quote £2,500–£10,000 for a standard small-business website (Duport / GetYouOnline, 2026), and regional agencies average £3,000–£6,000 for design, responsive build, basic SEO, a CMS and five to fifteen pages, on UK regional-agency benchmark data from the same year. Regulated work is not automatically dearer. It is scoped differently: the information architecture has to satisfy a rulebook before it satisfies a layout, so that gets settled at the structure stage rather than at sign-off. Every figure is a starting point quoted against a written scope.",
        },
        {
          question: "How does a remote build work with our compliance officer",
          answer:
            "Remotely, and in writing — which for a compliance officer is the better half of the trade. WebAsk is fully remote and trades as part of the Naxdor group: there is no Leeds office, no West Yorkshire desk and no UK premises at all, and we will not invent an address to look local. What replaces the meeting room is a written scope, shared documents and calls inside UK hours. For regulated work that is arguably the better arrangement, because the questions a compliance officer has to sign off — which claims may appear, where a price list may sit, what a testimonial may say — get settled in writing, on a document that can be circulated and dated, rather than agreed in a meeting and remembered differently afterwards.",
        },
        {
          question: "Can you help us rank in Leeds without a Google Business Profile",
          answer:
            "Two different answers sit inside that question. Ours: no profile, and none coming — Google requires a real location staffed during stated hours, and there is no UK address here to make eligible, so local search for us is organic or nothing, with no Map Pack, no Maps pin and no Google reviews. Yours is likely the opposite. A CQC-registered practice or a high-street firm has exactly the staffed address Google asks for, the profile costs nothing, and it is normally the number-one local citation, so claim and complete it before you spend anything on a retainer. One caution bites harder in a regulated sector than elsewhere: the reviews on that profile answer to your own regulator's rules and, since 6 April 2025, to the DMCC Act, which makes an undisclosed incentivised review illegal in its own right.",
        },
        {
          question: "We are a regulated practice — do you give compliance advice",
          answer:
            "No. We are not solicitors and not a compliance consultancy. Two things reach every UK business advertising online and we have read both: the CAP Code, which governs non-broadcast marketing whatever your sector, and the CMA's consumer rules. On top of that, where a sector's own published standards are ones we have researched — GDC standards, CQC registration — we build to them, and a regulatory statement that turns on a current position gets dated on the page so it can be re-read rather than quietly ageing. Where they are not, we ask you or your compliance officer which rules apply and build the structure around the answer; we do not claim to have read your rulebook for you. Where copy sits close to a line, CAP runs a free Copy Advice service for pre-publication questions, and anything with real regulatory consequence should go past someone qualified to give an opinion.",
        },
        {
          question: "Do you only work with regulated businesses in Leeds",
          answer:
            "No. The sector mix we work from for Leeds runs financial and legal services, healthcare and digital health, retail and e-commerce, higher education and manufacturing, and the engineering floor does not change with the sector — the accessibility, best-practices, search, layout-shift and page-weight gates go into the scope whether or not a regulator ever reads the page. Regulated work leads this hub because it is where the build decisions change most. A Leeds retailer would get the same speed and structured-data work, and a shorter compliance conversation: consumer law and PECR, rather than the four regulators a dental practice answers to at once.",
        },
      ],
    },
  },
] as const;

/** Slugs in canonical display order. */
export const LOCATION_SLUGS: ReadonlyArray<string> = locations.map((location) => location.slug);

/** Lookup by canonical slug. Returns undefined if the slug isn't a known area. */
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

/**
 * Areas with authored copy — the only ones that have a hub page. All three as
 * of Phase 2, so `/locations` renders three cards, the industry/service
 * cross-link grids light up, and the sitemap lists three hubs.
 *
 * Replaces the inherited `handCrafted: boolean`, which was a hand-maintained
 * flag that could disagree with whether the copy actually existed. It stays
 * derived: add an area above without `copy` and every one of those surfaces
 * self-hides again, with no flag to forget.
 */
export const authoredLocations: ReadonlyArray<AuthoredLocation> =
  locations.filter(isAuthoredLocation);
