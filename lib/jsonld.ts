import type {
  Article,
  BreadcrumbList,
  CollectionPage,
  CreativeWork,
  FAQPage,
  Organization,
  Person,
  ProfessionalService,
  Service,
  Thing,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

import { site } from "@/data/site";
import { team } from "@/data/team";
import { env } from "@/lib/env";

/*
 * Typed JSON-LD node builders backed by `schema-dts`. Every page emits
 * a single @graph that references shared nodes by @id (Organization,
 * WebSite, Logo) — never inline-duplicates them.
 *
 * Stable @id values are derived from NEXT_PUBLIC_SITE_URL. Prod must
 * set that to the canonical origin (https://webask.co.uk); the @id values
 * Google indexes are tied to the prod domain.
 *
 * Schema blueprints + rationale → docs/strategy/schema-strategy.md.
 */

const SITE_ORIGIN = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

/** Stable @id values referenced across page templates. */
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const SITE_ID = `${SITE_ORIGIN}/#website`;
export const LOGO_ID = `${SITE_ORIGIN}/#logo`;

/**
 * The parent brand's Organization node, on ANOTHER origin. WebAsk is openly
 * part of the Naxdor group (docs/00 § three-site map), so the graph says so —
 * Google then sees two related entities rather than two thin clones.
 *
 * This is the ONLY cross-domain @id we emit. `e2e/jsonld.spec.ts` unions nodes
 * across crawled routes on THIS host to prove every @id reference resolves, so
 * this one is explicitly whitelisted there (EXTERNAL_IDS) — without that, the
 * dangling-reference check fails. Keep the two values in sync.
 *
 * NOT a canonical or hreflang relationship: we never cross-canonical to
 * naxdor.com and never hreflang-pair the two English sites (docs/05).
 */
export const PARENT_ORG_ID = `${site.parentSiteUrl.replace(/\/$/, "")}/#organization`;

/**
 * Country served. WebAsk is a UK operation on a .co.uk ccTLD; `areaServed` is
 * the ONLY way reach is expressed. There is deliberately no `address` and no
 * `geo` anywhere in this file — D1 resolved 2026-07-27 to fully remote with no
 * UK location, so claiming either would be a fabricated local presence.
 */
const UK = { "@type": "Country", name: "United Kingdom" } as const;

/** Locale for every node that carries one. British English is a ranking signal. */
const IN_LANGUAGE = "en-GB";

const SITE_DESCRIPTION =
  "UK digital services firm for small businesses — websites, CRM automation (GoHighLevel, HubSpot), AI integration, and SEO.";

/** Resolve a path against the site origin. Accepts absolute or relative inputs. */
function abs(pathOrUrl: string): string {
  return new URL(pathOrUrl, `${SITE_ORIGIN}/`).toString();
}

/**
 * Canonical `@id` for a page's WebPage/CollectionPage frame. `webpageNode`,
 * `collectionPageNode`, and `articleNode.mainEntityOfPage` all route through
 * this so an Article's back-reference can't drift from the frame it points at
 * (the trailing-slash mismatch this guards against is exactly what surfaced
 * when the blog post became the first page to emit both nodes together).
 */
function webpageId(url: string): string {
  return `${url.replace(/\/$/, "")}/#webpage`;
}

/**
 * Stable @id for a `Person` node on the About page. The Organization's `founder`
 * reference, `personNode()`, and `articleNode({ authorId })` all route through
 * this so the cross-node link can't drift. Exported so article pages can pass
 * the exact same id to `articleNode.author` that `personNode` stamps as its @id.
 */
export function personId(slug: string): string {
  return `${SITE_ORIGIN}/about#${slug}`;
}

/**
 * Stable @id for a `/services/<slug>` Service node. `serviceNode()` stamps this
 * as its @id and `caseStudyNode({ serviceSlug })` references the exact same value
 * via `about` → Service, so a case study's "this is about X service" link can't
 * drift from the Service node it points at (same rationale as `personId`).
 */
export function serviceId(slug: string): string {
  return `${abs(`/services/${slug}`)}#service`;
}

// ──────────────────────────────────────────────────────────────────
// Node builders
// ──────────────────────────────────────────────────────────────────

/** Sitewide Organization node (dual-typed as ProfessionalService per schema-strategy.md). */
export function organizationNode(): Organization {
  // Identity facts are sourced from data/site.ts (single source of truth) so the
  // graph can't drift from the footer/contact page. `sameAs` is the *company*
  // profiles only — currently empty by design (data/site.ts: "leave empty rather
  // than point at 404s"), so we omit the key entirely until real profiles exist.
  // The founder's *personal* LinkedIn/GitHub belong on the Person node, never here.
  const sameAs = site.socials.map((social) => social.url);
  const founder = team[0];

  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: `${SITE_ORIGIN}/`,
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: abs("/brand/logo-512.png"),
      contentUrl: abs("/brand/logo-512.png"),
      width: "512",
      height: "512",
      caption: site.name,
    },
    image: { "@id": LOGO_ID },
    description: SITE_DESCRIPTION,
    // Two groups, deliberately. The technology terms are inherited and describe
    // what we build. The REGULATORY terms are WebAsk's own and are the semantic
    // core of the positioning: no UK clinic-web competitor associates itself
    // with these entities at all (verified 2026-07-28, docs/08 § 3), so being
    // the entity that reliably co-occurs with them in this context is close to
    // unclaimed ground. Compliance articles reinforce it via `about`/`mentions`.
    knowsAbout: [
      "Web Development",
      "E-commerce",
      "UI/UX Design",
      "Search Engine Optimisation",
      "Mobile Application Development",
      "GoHighLevel",
      "HubSpot",
      "CRM Automation",
      "AI Integration",
      "Voice Agents",
      "Chatbots",
      "Workflow Automation",
      "Next.js",
      "React",
      "Core Web Vitals",
      // UK regulatory literacy — the flagship differentiator (docs/00 § job 6).
      "Advertising Standards Authority",
      "CAP Code",
      "Medicines and Healthcare products Regulatory Agency",
      "General Dental Council",
      "Care Quality Commission",
      "Competition and Markets Authority",
      "UK GDPR",
      "Privacy and Electronic Communications Regulations",
      "Digital Markets, Competition and Consumers Act 2024",
      "Non-surgical cosmetic procedures licensing",
    ],
    areaServed: UK,
    // The group link. See PARENT_ORG_ID — cross-domain, and whitelisted in
    // e2e/jsonld.spec.ts.
    parentOrganization: { "@id": PARENT_ORG_ID },
    ...(founder ? { founder: { "@id": personId(founder.slug) } } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      availableLanguage: ["English"],
    },
    // Cast through unknown — schema-dts models @type as a single literal
    // string per node, but JSON-LD allows arrays. Dual-typing as
    // Organization + ProfessionalService is intentional per
    // docs/strategy/schema-strategy.md § Sitewide @graph nodes.
  } as unknown as Organization;
}

/** Sitewide WebSite node with SearchAction (search route lands in Phase 3+). */
export function websiteNode(): WebSite {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: `${SITE_ORIGIN}/`,
    name: site.name,
    publisher: { "@id": ORG_ID },
    inLanguage: IN_LANGUAGE,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/search?q={search_term_string}`,
      },
      // `query-input` is a valid JSON-LD property on SearchAction but
      // schema-dts doesn't model the hyphenated key — cast through
      // unknown to keep TS happy without losing runtime correctness.
      "query-input": "required name=search_term_string",
    } as unknown as WebSite["potentialAction"],
  } as WebSite;
}

export type WebPageOptions = {
  /** Path relative to origin, e.g. "/services/web-development". */
  path: string;
  /** Page name (typically matches the meta title). */
  name: string;
  description: string;
};

export function webpageNode({ path, name, description }: WebPageOptions): WebPage {
  const url = abs(path);
  return {
    "@type": "WebPage",
    "@id": webpageId(url),
    url,
    name,
    description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: IN_LANGUAGE,
  };
}

export type CollectionPageOptions = {
  /** Path relative to origin, e.g. "/blog" or "/blog/topic/seo". */
  path: string;
  name: string;
  description: string;
};

/**
 * `CollectionPage` frame for a listing page (the blog index and topic archives).
 * Like `webpageNode` it slots into the sitewide `@graph` via `isPartOf` → WebSite
 * and `about` → Organization; the difference is the `@type` signals to search
 * engines that the page is a curated list rather than a single content page.
 */
export function collectionPageNode({
  path,
  name,
  description,
}: CollectionPageOptions): CollectionPage {
  const url = abs(path);
  return {
    "@type": "CollectionPage",
    "@id": webpageId(url),
    url,
    name,
    description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: IN_LANGUAGE,
  };
}

export type ServiceOptions = {
  slug: string;
  name: string;
  description: string;
  /**
   * "Starting at £X" — emitted as price + UnitPriceSpecification, in GBP.
   *
   * The figures are the **research-derived UK anchors** from
   * docs/02-uk-market-research.md § 7, benchmarked against 2026 UK agency and
   * freelancer pricing — not converted from the inherited USD list.
   *
   * ⚠️ Decision gate **D4** asks the founder to confirm them before publish,
   * on the same principle naxdor.se used: a published price is a commitment.
   * Change them in `data/services.ts` (the single source) if D4 moves them.
   */
  startingPrice: number;
};

export function serviceNode({ slug, name, description, startingPrice }: ServiceOptions): Service {
  const url = abs(`/services/${slug}`);
  return {
    "@type": "Service",
    "@id": serviceId(slug),
    name,
    serviceType: name,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: UK,
    offers: {
      "@type": "Offer",
      price: String(startingPrice),
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(startingPrice),
        priceCurrency: "GBP",
        unitText: "starting price per project",
      },
      availability: "https://schema.org/InStock",
    },
  };
}

export type IndustryServiceOptions = {
  /** Industry slug, e.g. "dental-practices". */
  slug: string;
  /** Service name, e.g. "Digital Services for Dental Practices". */
  name: string;
  description: string;
  /**
   * The vertical(s) this serves — emitted as `audience.audienceType`, e.g.
   * "Dental practices, cosmetic dentistry clinics, orthodontists".
   */
  audienceType: string;
};

/**
 * `Service` node for an industry landing page. Unlike `serviceNode`, this carries
 * an `audience` → `BusinessAudience` (per schema-strategy.md § Industry page) and
 * no `Offer` — an industry page sells a vertical bundle, not a single priced
 * service, so price lives on the individual `/services/*` pages it links to.
 */
export function industryServiceNode({
  slug,
  name,
  description,
  audienceType,
}: IndustryServiceOptions): Service {
  const url = abs(`/industries/${slug}`);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType: name,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: UK,
    audience: {
      "@type": "BusinessAudience",
      audienceType,
    },
  };
}

/** Whether a served place is a city/town or a county. Mirrors `Location.kind`. */
export type ServedPlaceKind = "city" | "county";

export type AreaServedOptions = {
  /** "city" → schema `City`; "county" → schema `AdministrativeArea`. */
  readonly kind: ServedPlaceKind;
  /** Served place, e.g. "Manchester" or "Cheshire". */
  readonly name: string;
  /**
   * Ceremonial/metropolitan county a city sits in, e.g. "Greater Manchester".
   * Omitted for a county hub — the hub IS the administrative area.
   */
  readonly county?: string | undefined;
};

/**
 * `areaServed` for a UK place.
 *
 * schema.org's `State` means "a state or province of a country" and has no
 * English equivalent — a ceremonial or metropolitan county is an
 * `AdministrativeArea` (State's parent type). Naxdor emits `State` because its
 * metros are US ones, where it is correct; carrying that over unchanged would
 * have been wrong here. A county-level hub is itself that administrative area,
 * not a `City`.
 *
 * Emits **no `address` and no `geo`** — D1: fully remote, no UK location.
 * Fabricating a local storefront is the exact anti-pattern programmatic-seo.md
 * and schema-strategy.md forbid, and it is what the `/locations/*` pages would
 * otherwise be tempted into.
 */
function areaServedNode({ kind, name, county }: AreaServedOptions) {
  if (kind === "county") {
    return { "@type": "AdministrativeArea", name, containedInPlace: UK } as const;
  }
  return {
    "@type": "City",
    name,
    containedInPlace: county
      ? ({ "@type": "AdministrativeArea", name: county, containedInPlace: UK } as const)
      : UK,
  } as const;
}

export type LocationHubOptions = {
  /** Location slug, e.g. "manchester". Bare kebab — never the US "[city]-[st]" form. */
  slug: string;
  /** Display name, e.g. "Manchester". No county suffix — UK copy doesn't use one. */
  name: string;
  kind: ServedPlaceKind;
  /** Omitted when `kind` is "county". */
  county?: string | undefined;
  description: string;
  /** Service names offered in this area — emitted as the `serviceType` array. */
  serviceTypes: ReadonlyArray<string>;
};

/**
 * `ProfessionalService` node for a hand-crafted location hub. References the
 * sitewide Organization via `parentOrganization` (per schema-strategy.md
 * § Location hub page) and expresses reach through `areaServed` only.
 */
export function locationHubNode({
  slug,
  name,
  kind,
  county,
  description,
  serviceTypes,
}: LocationHubOptions): ProfessionalService {
  const url = abs(`/locations/${slug}`);
  return {
    "@type": "ProfessionalService",
    "@id": `${url}#provider`,
    name: `${site.name} — Digital Services in ${name}`,
    description,
    url,
    parentOrganization: { "@id": ORG_ID },
    areaServed: areaServedNode({ kind, name, county }),
    // serviceType is domain Service in schema-dts but valid+useful here per
    // schema-strategy.md § Location hub ("serviceType array of all services").
    serviceType: [...serviceTypes],
  } as unknown as ProfessionalService;
}

export type ServiceLocationOptions = {
  /** Service slug, e.g. "crm". */
  serviceSlug: string;
  /** Location slug, e.g. "manchester". */
  locationSlug: string;
  /** Service display name, e.g. "CRM". */
  serviceName: string;
  /** Display name of the served place, e.g. "Manchester". */
  name: string;
  kind: ServedPlaceKind;
  /** Omitted when `kind` is "county". */
  county?: string | undefined;
  description: string;
  /** "Starting at £X" — see `ServiceOptions.startingPrice` on the D4 caveat. */
  startingPrice: number;
  /** Drives the offer's unit text ("per project" vs "per month"). */
  cadence: "project" | "monthly";
};

/**
 * The two nodes for a programmatic `/services/[service]/[location]` page:
 *  1. a city-scoped `Service` (with the priced `Offer`, `areaServed` → City), and
 *  2. a `ProfessionalService` provider presence for this service in this city.
 *
 * Honesty / E-E-A-T: like `locationHubNode`, the `ProfessionalService` carries
 * **`areaServed` (City → containedInPlace State) only — NO `address`, NO `geo`.**
 * Naxdor has no office in these cities; a fabricated local storefront is the
 * exact anti-pattern programmatic-seo.md + schema-strategy.md forbid. This is a
 * deliberate deviation from programmatic-seo.md § 8 ("address — virtual office
 * acceptable" + `geo`), which predates the locked remote-firm reality and
 * conflicts with that doc's own anti-pattern table (fake addresses → manual
 * action). Spread the result into `buildGraph`.
 */
export function serviceLocationNodes({
  serviceSlug,
  locationSlug,
  serviceName,
  name,
  kind,
  county,
  description,
  startingPrice,
  cadence,
}: ServiceLocationOptions): [Service, ProfessionalService] {
  const url = abs(`/services/${serviceSlug}/${locationSlug}`);
  const areaServed = areaServedNode({ kind, name, county });

  const service: Service = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${serviceName} in ${name}`,
    serviceType: serviceName,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed,
    offers: {
      "@type": "Offer",
      price: String(startingPrice),
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(startingPrice),
        priceCurrency: "GBP",
        unitText: cadence === "monthly" ? "starting price per month" : "starting price per project",
      },
      availability: "https://schema.org/InStock",
    },
  };

  const provider = {
    "@type": "ProfessionalService",
    "@id": `${url}#provider`,
    name: `${site.name} — ${serviceName} in ${name}`,
    description,
    url,
    parentOrganization: { "@id": ORG_ID },
    areaServed,
    // serviceType is domain Service in schema-dts but valid+useful here (one entry
    // — the single service this page is about), same cast as locationHubNode.
    serviceType: [serviceName],
  } as unknown as ProfessionalService;

  return [service, provider];
}

export type ArticleOptions = {
  /** Absolute or relative URL of the article page. */
  path: string;
  headline: string;
  datePublished: string;
  dateModified?: string;
  authorId: string;
  image?: string;
  wordCount?: number;
  keywords?: string[];
};

export function articleNode({
  path,
  headline,
  datePublished,
  dateModified,
  authorId,
  image,
  wordCount,
  keywords,
}: ArticleOptions): Article {
  const url = abs(path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@id": authorId },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": webpageId(url) },
    ...(image ? { image: abs(image) } : {}),
    ...(wordCount !== undefined ? { wordCount } : {}),
    ...(keywords ? { keywords } : {}),
  };
}

export type CaseStudyOptions = {
  /** Absolute or relative URL of the case-study page. */
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorId: string;
  /** Service slug this case study demonstrates — drives `about` → Service @id. */
  serviceSlug: string;
  image?: string;
  wordCount?: number;
  keywords?: string[];
};

/**
 * A case study, dual-typed `["CreativeWork", "Article"]` — an `Article` (headline,
 * dates, author, wordCount) that is ALSO a `CreativeWork` **about** the Service it
 * demonstrates. `about` → the Service @id stamped by `serviceNode` (via the shared
 * `serviceId` helper, so the cross-node link can't drift), `author` → Person,
 * `publisher` → Organization, `mainEntityOfPage` → the page's WebPage frame.
 *
 * Dual-typing matches the repo idiom (`organizationNode` is Organization +
 * ProfessionalService); schema-dts models `@type` as a single literal, so the
 * array goes through the same `as unknown as` cast.
 */
export function caseStudyNode({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  authorId,
  serviceSlug,
  image,
  wordCount,
  keywords,
}: CaseStudyOptions): CreativeWork {
  const url = abs(path);
  return {
    "@type": ["CreativeWork", "Article"],
    "@id": `${url}#case-study`,
    headline,
    name: headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@id": authorId },
    publisher: { "@id": ORG_ID },
    about: { "@id": serviceId(serviceSlug) },
    mainEntityOfPage: { "@id": webpageId(url) },
    ...(image ? { image: abs(image) } : {}),
    ...(wordCount !== undefined ? { wordCount } : {}),
    ...(keywords ? { keywords } : {}),
  } as unknown as CreativeWork;
}

export type PersonOptions = {
  /** Stable fragment id, e.g. "ansar-cheema". Becomes `${SITE_ORIGIN}/about#${id}`. */
  id: string;
  name: string;
  jobTitle: string;
  url?: string;
  image?: string;
  knowsAbout?: string[];
  sameAs?: string[];
};

export function personNode({
  id,
  name,
  jobTitle,
  url,
  image,
  knowsAbout,
  sameAs,
}: PersonOptions): Person {
  return {
    "@type": "Person",
    "@id": personId(id),
    name,
    jobTitle,
    worksFor: { "@id": ORG_ID },
    ...(url ? { url: abs(url) } : {}),
    ...(image ? { image: abs(image) } : {}),
    ...(knowsAbout ? { knowsAbout } : {}),
    ...(sameAs ? { sameAs } : {}),
  };
}

export function faqNode(pageUrl: string, faqs: Array<{ q: string; a: string }>): FAQPage {
  return {
    "@type": "FAQPage",
    "@id": `${abs(pageUrl)}#faq`,
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function breadcrumbsNode(
  pageUrl: string,
  items: Array<{ name: string; path: string }>,
): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(pageUrl)}#breadcrumbs`,
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

// ──────────────────────────────────────────────────────────────────
// Graph wrapper
// ──────────────────────────────────────────────────────────────────

type Graph = { "@graph": Thing[] };

/** Compose nodes into a single @graph block ready to JSON.stringify. */
export function buildGraph(...nodes: Thing[]): WithContext<Thing> {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  } as unknown as WithContext<Thing> & Graph;
}

/** Helper: render the inner HTML for a `<script type="application/ld+json">` tag. */
export function renderJsonLd(graph: ReturnType<typeof buildGraph>): string {
  // Escape `</` inside JSON to prevent script-tag breakouts.
  return JSON.stringify(graph).replace(/<\//g, "<\\/");
}
