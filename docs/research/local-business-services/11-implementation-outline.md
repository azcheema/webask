# 11 — Implementation outline

> Purpose: the phased build plan for AFTER the brainstorm: code touches, gates, docs to amend, order. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1):
> every section below is a **hypothesis** until the session named there confirms, amends or
> rejects it with evidence.

## 1. Preconditions

No code before D9–D13 and D4 are decided (`00` § 4); the brainstorm's decisions are logged in `00`
§ 6 first. The model change ships first with no visible change, then the grouped navigation, then
one service per commit as a draft and flipped live with its boundary edits, then the bundle, then
industry pages after their doc 03 sections.

## 2. Shipping order (planning § 4.7; restated as commits in App. AE.9)

A — model, existing nine unchanged in output: drop `name.toLowerCase()` in `services/page.tsx:98` and
`[service]/page.tsx:162` (already renders "See seo"; would render "Local local business plans pages");
`Service` gains `category`, `status: "draft" | "live"`, `pricing.setupAmount?`, `pricing.usageNote?`,
`tiers?` (bundle), `icon?`; `lib/pricing.ts` gains a `formatPricing` helper; `lib/jsonld.ts` `serviceNode`
sets `unitText` by cadence (today hardcoded "per project", wrong for seo/maintenance) and a second
set-up `Offer`; pricing components consume the helper and `PricingTable` links on `status === "live"`
(fixes the `builtSlugs` bug); `generateMetadata` sets `noindex` on draft; `lib/services.ts` gains
`listLiveServiceSlugs()`.
B — surfaces, still nine live: category-derived `SERVICE_NAV_GROUPS`; header/mobile/footer grouping;
`app/sitemap.ts` from `liveServices`; `lib/contact-schema.ts` options grouped; marquee icons from the
catalogue (five of nine already lack one); every "nine" literal replaced by `liveServices.length` or
count-free prose; `DEFAULT_DESCRIPTION`/`SITE_DESCRIPTION`/`knowsAbout` additions;
`data/service-locations.ts` header replaced by the GBP ruling.
C — docs: one dated "AMENDED 2026-09-23" note at every locked-decision site (App. D) and doc 03's new
sub-sections after review.
D — per service, repeatable: catalogue entry `status: "draft"` + MDX; `SERVICE_SLUGS` + `CLUSTER_ENUM`

- keyword rows in the same commit; e2e/Lighthouse routes; boundary edits land in the same commit that
  flips `status: "live"` plus `BUILT_ROUTES`.
  E — bundle `tiers` + `/pricing` "Plans" block + home `PRICING_ANCHOR_SLUGS` decision.
  F — industries, each only after its doc 03 Part B section.

### AE.9 The shipping order, restated as commits

1. `feat(catalogue): add category, status and set-up pricing to the service model` — AE.1–AE.4, all
   nine services `status: "live"`; no visible change.
2. `feat(services): group the services index and nav by category` — AE.6, AE.7, AD.1 strings, the
   "nine" deltas (AD.2), pricing-table fix; gates green; Lighthouse unchanged.
3. `docs: amend the locked service and vertical decisions` — dated notes at every site in § 3 "00"
   and doc 03 § B10 (Appendix AC).
4. Per service, one commit each: catalogue entry as `draft` + MDX + keyword rows + enums + e2e route
   (page prerenders `noindex`); then `feat(services): publish <slug>` flipping `live`, adding
   `BUILT_ROUTES`, the boundary edits (I.8) and the sitemap derivation picks it up.
5. `feat(services): add the Local Business Plans bundle` — tiers (AB.1), the Plans block (AB.2),
   pricing deltas (AB.3), `OfferCatalog`.
6. Industry pages after their doc 03 Part B sections, one commit each.

## 3. Code touches with snippets (App. AE.1–AE.8; written against the code read 2026-09-24)

Snippets are written against the current files; line references are today's. Order follows § 4.7
(A model → B surfaces → C docs → D per service). Nothing here is applied in this plan.

### AE.1 `data/services.ts` — type extension, categories, live-status helpers

```ts
export type Currency = "GBP";
export type PriceCadence = "project" | "monthly";
export type ServiceCategory = "build" | "grow" | "automate";
export type ServiceStatus = "draft" | "live";

export type ServicePricing = {
  readonly startingAmount: number;
  readonly currency: Currency;
  readonly cadence: PriceCadence;
  /** One-off set-up component for monthly plans. Rendered as "· £X set-up". [D4] */
  readonly setupAmount?: number;
  /** Shown under the price where usage is metered and passed through. */
  readonly usageNote?: string;
  readonly priceNote?: string;
};

export type Service = {
  readonly slug: string;
  readonly name: string;
  readonly category: ServiceCategory;
  /**
   * `draft`: the page prerenders when its MDX exists but renders `noindex`, and is
   * excluded from the nav, the sitemap, the services grid, the pricing table and
   * the contact form. Flip to `live` in the same commit as the boundary edits and
   * the BUILT_ROUTES entry (research 11 § 4).
   */
  readonly status: ServiceStatus;
  /** Sprite symbol id suffix in service-marquee.tsx (`svc-<icon>`). */
  readonly icon?: string;
  readonly summary: string;
  readonly heroSubhead: string;
  readonly whoItsFor: string;
  readonly pricing: ServicePricing;
  readonly includes: ReadonlyArray<string>;
  readonly notIncluded: ReadonlyArray<string>;
  readonly primaryCta: CtaLink;
  readonly relatedServiceSlugs: ReadonlyArray<string>;
  readonly faqs?: ReadonlyArray<FaqItem>;
  /** Bundle only (Appendix AB.1). */
  readonly tiers?: ReadonlyArray<BundleTier>;
};

export const SERVICE_CATEGORIES = [
  /* Appendix AD.1 */
] as const;

/** Every service, drafts included — for authoring and for the [service] route's 404 check. */
export const services: ReadonlyArray<Service> = [
  /* existing nine gain category + status: "live" */
];

/** The catalogue as the site presents it: nav, grid, sitemap, pricing table, contact form. */
export const liveServices: ReadonlyArray<Service> = services.filter((s) => s.status === "live");

export function getServicesByCategory(
  category: ServiceCategory,
  source: ReadonlyArray<Service> = liveServices,
): ReadonlyArray<Service> {
  return source.filter((s) => s.category === category);
}

export const LIVE_SERVICE_SLUGS: ReadonlySet<string> = new Set(liveServices.map((s) => s.slug));
```

### AE.2 `lib/pricing.ts` — set-up and usage in one label

```ts
import type { ServicePricing } from "@/data/services";

export const setupLabel = "set-up";

/** "Starting at £59 per month · £199 set-up · usage at cost" (each part only when present). */
export function formatPricing(pricing: ServicePricing): string {
  const parts = [
    `Starting at ${formatGBP(pricing.startingAmount)} ${cadenceLabel[pricing.cadence]}`,
  ];
  if (pricing.setupAmount !== undefined)
    parts.push(`${formatGBP(pricing.setupAmount)} ${setupLabel}`);
  if (pricing.usageNote) parts.push("usage at cost");
  return parts.join(" · ");
}
```

`ServiceHero` (`service-hero.tsx` L66-75) and `PricingCard` (`pricing-card.tsx` L21-78) switch their
hand-built price line to `formatPricing(service.pricing)` and keep `VAT_NOTE` after it.

### AE.3 `lib/jsonld.ts` — `unitText` by cadence, a set-up Offer, the bundle catalogue

```ts
export type ServiceOptions = {
  slug: string;
  name: string;
  description: string;
  startingPrice: number;
  cadence: PriceCadence; // NEW
  setupPrice?: number; // NEW
};

const unitTextFor = (cadence: PriceCadence) =>
  cadence === "monthly" ? "starting price per month" : "starting price per project";

export function serviceNode({
  slug,
  name,
  description,
  startingPrice,
  cadence,
  setupPrice,
}: ServiceOptions): Service {
  const url = abs(`/services/${slug}`);
  const offer = (price: number, unitText: string) => ({
    "@type": "Offer",
    price: String(price),
    priceCurrency: "GBP",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(price),
      priceCurrency: "GBP",
      unitText,
    },
    availability: "https://schema.org/InStock",
  });
  return {
    "@type": "Service",
    "@id": serviceId(slug),
    name,
    serviceType: name,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: UK,
    offers:
      setupPrice === undefined
        ? offer(startingPrice, unitTextFor(cadence))
        : [offer(startingPrice, unitTextFor(cadence)), offer(setupPrice, "one-off set-up fee")],
  };
}

/** Bundle page: one Offer per tier inside an OfferCatalog (validate in the Rich Results Test). */
export function bundleCatalogNode(slug: string, tiers: ReadonlyArray<BundleTier>) {
  return {
    "@type": "OfferCatalog",
    "@id": `${serviceId(slug)}-catalog`,
    name: "Plans",
    itemListElement: tiers.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      description: tier.summary,
      price: String(tier.pricing.startingAmount),
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(tier.pricing.startingAmount),
        priceCurrency: "GBP",
        unitText: "starting price per month",
      },
      url: abs(`/services/${slug}#${tier.slug}`),
    })),
  };
}
```

In `[service]/page.tsx` L104-109 pass `cadence: service.pricing.cadence` and
`setupPrice: service.pricing.setupAmount`; when `service.tiers` exists, add `bundleCatalogNode(slug, service.tiers)`
to `buildGraph` and give the `Service` node `hasOfferCatalog: { "@id": … }`.

### AE.4 `lib/services.ts` — live slugs

```ts
import { LIVE_SERVICE_SLUGS } from "@/data/services";

/** MDX present AND status live — the set every public surface should use. */
export async function listLiveServiceSlugs(): Promise<string[]> {
  const authored = await getServiceContentSlugs();
  return authored.filter((slug) => LIVE_SERVICE_SLUGS.has(slug));
}
```

### AE.5 `app/(marketing)/services/[service]/page.tsx` — draft `noindex`, no lowercasing

```ts
export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const { frontmatter } = await getServiceContent(slug);
  const service = getServiceBySlug(slug);
  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/services/${slug}`,
    noindex: service?.status !== "live", // drafts prerender for preview, never index
  });
}
// L162: intro={`${service.name} for the areas we focus on — the same engagement, tuned to each market.`}
```

### AE.6 `app/(marketing)/services/page.tsx` — grouped grid, no lowercasing, fixed table

```tsx
import { liveServices, getServicesByCategory, SERVICE_CATEGORIES } from "@/data/services";
import { listLiveServiceSlugs } from "@/lib/services";

export default async function ServicesPage() {
  const liveSlugs = await listLiveServiceSlugs();
  return (
    <>
      {/* hero as AD.1 */}
      {SERVICE_CATEGORIES.map((category) => {
        const group = getServicesByCategory(category.id);
        if (group.length === 0) return null;
        return (
          <Section key={category.id} padding="lg">
            <Container size="lg">
              <SectionHeading
                eyebrow={category.label}
                title={category.label}
                intro={category.blurb}
              />
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.map((service) => (
                  <li key={service.slug}>{/* existing card; "See {service.name}" */}</li>
                ))}
              </ul>
            </Container>
          </Section>
        );
      })}
      <PricingTable services={liveServices} builtSlugs={liveSlugs} />
      {/* bare slugs — fixes L116 */}
    </>
  );
}
```

### AE.7 Derived surfaces

```ts
// components/layout/_nav-data.ts — replace the hand-maintained SERVICE_NAV items
import { liveServices, SERVICE_CATEGORIES, getServicesByCategory } from "@/data/services";
export type NavGroup = { readonly label: string; readonly items: readonly NavLink[] };
export const SERVICE_NAV_GROUPS: readonly NavGroup[] = SERVICE_CATEGORIES.map((c) => ({
  label: c.label,
  items: getServicesByCategory(c.id).map((s) => ({
    label: s.name,
    href: `/services/${s.slug}`,
    description: NAV_DESCRIPTIONS[s.slug] ?? s.summary, // AD.1 table; summary as the fallback
  })),
}));
export const SERVICE_NAV: NavSection = {
  label: "Services",
  href: "/services",
  items: SERVICE_NAV_GROUPS.flatMap((g) => g.items),
};
// BUILT_ROUTES stays hand-maintained; a live service's route is added in the same commit.

// app/sitemap.ts — replace L33-41 with:
const SERVICE_ROUTES: ReadonlyArray<Entry> = liveServices.map((s) => ({
  path: `/services/${s.slug}`,
  priority: 0.9,
  changeFrequency: "monthly",
}));
// and spread SERVICE_ROUTES into `entries`.

// lib/contact-schema.ts L18-21 — liveServices, grouped labels optional:
export const SERVICE_OPTIONS: ReadonlyArray<SelectOption> = [
  ...liveServices.map((service) => ({ value: service.slug, label: service.name })),
  { value: "not-sure", label: "Not sure / multiple" },
];

// components/marketing/service-marquee.tsx L19-29 — icon key from the catalogue:
// ICON_SLUGS becomes `new Set(services.map((s) => s.icon).filter(Boolean))` and each existing entry
// gains `icon: "web-development" | "e-commerce" | … ` matching the sprite ids; seven new symbols
// (phone-missed, star, headset, mail, layout-template, map-pin, package) are added to ServiceIconSprite.

// data/copy/home.ts L180 — `value: String(liveServices.length)` (import from "@/data/services").
```

### AE.8 Gates and tests

```ts
// scripts/check-keywords.ts L24-34 — append: "missed-call-text-back", "review-management",
// "ai-receptionist", "email-sms-marketing", "landing-pages", "google-business-profile", "local-business-plans"
// L56-75 CLUSTER_ENUM — append: "lead-recovery", "reviews", "ai-receptionist", "email-sms",
// "landing-pages", "local-listings", "local-plans"
// L80 VERTICAL_ENUM — append per shipped industry page only, e.g. "veterinary-practices",
// with a comment recording the docs/06 decision (the home-services note stays true until that page ships).
// L36-40 INDUSTRY_SLUGS — append "veterinary-practices" when its page ships.

// e2e/a11y.spec.ts ROUTES — add each new route the commit that flips it to live:
// "/services/missed-call-text-back", "/services/review-management", "/services/ai-receptionist",
// "/services/email-sms-marketing", "/services/landing-pages", "/services/google-business-profile",
// "/services/local-business-plans", "/industries/veterinary-practices", "/blog/topic/local-marketing".

// .lighthouserc.cjs URL list — add "/services/missed-call-text-back" (the set-up + monthly card variant)
// and "/services/local-business-plans" (the tiers block).

// data/blog.ts — add the topic:
// { slug: "local-marketing", label: "Local business marketing", description: "…≤160…", anchorServiceSlug: "local-business-plans" }
// and, in the same edit, the missing "clinic-compliance" topic that 22 keyword rows already target (research 03 § 8).

// lib/mdx `a` mapping — if D11 = yes, honour `rel="sponsored"` on affiliate links (today the map only overrides `a`;
// confirm it passes `rel` through, otherwise add it).
```

## 4. Bundle data

The `BundleTier` type and `tiers` array are in `09-content-drafts/bundle/local-business-plans.catalogue.md`
§ 3; the `/pricing` Plans block in `07` § 5; the pricing-copy deltas in `09-content-drafts/deltas.md` § 4.

## 5. Docs to amend

The locked-decision sites, with file and line, are tabled in `00` § 3; each gets a dated "AMENDED"
blockquote when the brainstorm approves. Stale statements the planning explorers noted, which this
work must not fix, are listed in the planning file's Appendix D.

## 6. Gates per step and effort

_S9 — `File | Change | Why | Gate`; batching so `/services` never links to a 404; sequencing
against cutover._

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
