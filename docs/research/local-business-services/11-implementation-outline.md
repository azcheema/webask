# 11 — Implementation outline

> Purpose: the phased build plan for AFTER the brainstorm — preconditions, the commit order, the
> code touches with snippets, the touch list, the docs to amend, batching, sequencing against
> cutover, gates per step and effort. Research window: 24 September 2026 → 25 September 2026
> (closed in S9). Nothing in this folder is implemented. Figures are proposals pending D4 unless
> marked **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1);
> confirmed, amended and completed in S9 on 25 September 2026 against the decision log (`00` § 6)
> and the working tree.

## 1. Preconditions

Nothing in `app/`, `components/`, `data/`, `content/`, `lib/` or `scripts/` changes until the rows
below are met. The list after the table is what is already settled, so nobody re-asks it.

| Precondition                                                                                                                                                    | Owner                      | State on 25 September 2026                    | Blocks                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| This branch merged                                                                                                                                              | Founder                    | PR offered at S9 close, not merged            | every commit below                                                                                                                                                                                                        |
| D4's three conditions: the wallet-line spot-check (`01` § 10.1); the `[founder]` rate in `private/07` § 6; the accountant's answers to `07` § 6.2 (Q3, D2 ext.) | Founder; accountant        | open                                          | any figure leaving `[D4]`: `/pricing`, every pricing-first FAQ, the bundle tiers. A page may ship carrying the working-set figures only if the founder adopts them as launch prices — a decision to log in `00` § 6 first |
| Phase 1 cutover (`docs/06-build-plan.md`)                                                                                                                       | Founder                    | Phase 1 not started (CLAUDE.md project state) | commits 2 onwards (Q27); commit 1 and the draft-status authoring in step 4(a) may land first (§ 8)                                                                                                                        |
| D3's UK representative and the solicitor's DPA (D10)                                                                                                            | Founder; solicitor         | open                                          | the first hosted client — not the bundle page, which describes the DPA and does not need it signed                                                                                                                        |
| The doc 03 Part B section for each industry page (research `08` §§ 2.1–2.3, reviewed and pasted)                                                                | Founder (review)           | drafted, unreviewed                           | commit 6, per page                                                                                                                                                                                                        |
| The pre-publication re-reads (§ 11; `10` § 2)                                                                                                                   | Whoever publishes the page | per row                                       | each page or post                                                                                                                                                                                                         |

Settled on 25 September 2026 (`00` § 6), not re-asked: D9 sales models; D10 posture; D11 no
affiliate links; D12 waves; D13 taxonomy, labels and the name **Local Business Plans**; D4 as the
working set with its terms; Q2 narrowed; Q6 white-label from the fourth hosted client; Q12–Q15;
Q20–Q28.

## 2. Shipping order, as commits (planning § 4.7; App. AE.9; confirmed S9)

A model → B surfaces → C docs → D per service → E bundle → F industries, one commit each, every
gate in § 9 green per commit:

1. `feat(catalogue): add category, status and set-up pricing to the service model` — AE.1–AE.5; the
   nine existing services gain `category` and `status: "live"`; `unitText` by cadence; the two
   `toLowerCase()` drops; `PricingTable` on `liveServices`. **No visible change** beyond two
   corrections: the grid's "See seo" becomes the service's name as written, and the JSON-LD of `seo`
   and `maintenance-support` stops saying "per project".
2. `feat(services): group the services index and nav by category` — AE.6, AE.7; the
   `index-and-nav.md` strings; the "nine" deltas (`deltas.md` §§ 2–3); the pricing-copy deltas
   (`deltas.md` § 4); Lighthouse unchanged on `/services`.
3. `docs: amend the locked service and vertical decisions` — the dated notes of § 6.1 and the doc 03
   sub-sections that depend on no page (A5a–A5c, A8, A9, B5, B6), after the founder's review.
4. Per service, two commits, in the order text-back → reviews → receptionist → profile → landing
   pages → email & SMS (proposed from the `12` § 4 post order; the founder may reorder):
   (a) `feat(services): draft <slug>` — the catalogue entry with `status: "draft"`, the MDX, the
   keyword rows and their enum values (Q22), the e2e route; the page prerenders `noindex` and is on
   no surface. (b) `feat(services): publish <slug>` — `status: "live"`, `BUILT_ROUTES`, the boundary
   edits in `deltas.md` § 1 that name this slug, the Lighthouse URL where § 5 lists one; the sitemap,
   nav, grid, pricing table and contact form pick it up by derivation.
5. `feat(services): add the Local Business Plans bundle` — `tiers` (bundle catalogue § 3),
   `bundleCatalogNode`, the `/pricing` Plans block (`07` § 5), the remaining pricing deltas — only
   once every member service is live (§ 7).
6. Industry pages, one commit each, after the doc 03 Part B section is pasted: vets → trades →
   garages (D12); each only once every slug in its `serviceSlugs` is live (§ 7).
7. Posts in the `12` § 4 order, each after its trigger; the `local-marketing` and
   `clinic-compliance` topics in `data/blog.ts` land with the first post that needs them.

## 3. Code touches with snippets (App. AE.1–AE.8; written against the code read 2026-09-24; re-checked 25 September 2026 — no file under `app/`, `components/`, `lib/`, `data/`, `scripts/` or `e2e/` has changed since 23 September 2026 by `git log`, so every line reference stands)

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

## 5. Touch list — `File · Change · Why · Gate` (S9)

Order as § 2. "Gate" is what proves the row beyond the three checks that run on every commit
(`typecheck`, `lint`, `build`). Line numbers are the working tree's on 25 September 2026.

| #            | File                                                                                                                                                                                                    | Change                                                                                                                                                                                                                                                                                                           | Why                                                                                              | Gate                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| A1           | `data/services.ts`                                                                                                                                                                                      | AE.1: `ServiceCategory`, `ServiceStatus`, `setupAmount?`, `usageNote?`, `unit?` ("per location" — the S8 carry for the reviews and profile entries), `tiers?`, `icon?`; `SERVICE_CATEGORIES`; `liveServices`, `getServicesByCategory`, `LIVE_SERVICE_SLUGS`; the nine entries gain `category` + `status: "live"` | the draft mechanism every later commit relies on (`05` § 7 finding: the grid is not built-aware) | `typecheck`; `check:copy-uniqueness` (local) unchanged for the nine                                   |
| A2           | `lib/pricing.ts`                                                                                                                                                                                        | AE.2 `formatPricing`, with the unit ("Starting at £99 per month per location · £299 set-up · usage at cost")                                                                                                                                                                                                     | D4: two-part display by the type, not `priceNote`                                                | the hero and the card render the same string; a unit test where the file has one                      |
| A3           | `lib/jsonld.ts`                                                                                                                                                                                         | AE.3 `unitText` by cadence; the set-up `Offer`; `bundleCatalogNode`                                                                                                                                                                                                                                              | **finding** (`05` § 5): "per project" is printed on the monthly pages today                      | Rich Results Test on `/services/seo` and `/services/maintenance-support`                              |
| A4           | `lib/services.ts`                                                                                                                                                                                       | AE.4 `listLiveServiceSlugs()`                                                                                                                                                                                                                                                                                    | one set for every surface                                                                        | `typecheck`                                                                                           |
| A5           | `app/(marketing)/services/[service]/page.tsx` L104–109, L162                                                                                                                                            | AE.5: cadence and set-up into `serviceNode`; `noindex` unless live; the `toLowerCase()` drop; the related-services grid filtered through `liveServices` (a live page never links to a draft)                                                                                                                     | drafts must neither index nor be linked                                                          | e2e: a draft route returns 200 with `noindex`; live routes unchanged                                  |
| A6           | `app/(marketing)/services/page.tsx` L98, L116                                                                                                                                                           | the `toLowerCase()` drop; `PricingTable services={liveServices}` with bare slugs (the `builtSlugs` bug)                                                                                                                                                                                                          | "See seo" today; the table must link on `status`                                                 | a look at `/services`; Lighthouse CI unchanged                                                        |
| A7           | `components/marketing/service-hero.tsx` L66–75; `pricing-card.tsx` L21–78; `pricing-table.tsx`                                                                                                          | consume `formatPricing`; keep `VAT_NOTE`                                                                                                                                                                                                                                                                         | one price string everywhere                                                                      | `check:contrast`; e2e a11y                                                                            |
| B1           | `components/layout/_nav-data.ts`                                                                                                                                                                        | AE.7 `SERVICE_NAV_GROUPS` from the catalogue; `SERVICE_NAV.items` flattened; `BUILT_ROUTES` stays hand-maintained                                                                                                                                                                                                | D13 grouping                                                                                     | header, mobile and footer render the groups; e2e a11y at 412×823                                      |
| B2           | the header, mobile-nav and footer components                                                                                                                                                            | render the groups                                                                                                                                                                                                                                                                                                | D13                                                                                              | as B1                                                                                                 |
| B3           | `app/sitemap.ts` L33–41                                                                                                                                                                                 | `SERVICE_ROUTES` from `liveServices`                                                                                                                                                                                                                                                                             | a draft never reaches the sitemap                                                                | `build`; `sitemap.xml` diffed against `05` § 2                                                        |
| B4           | `lib/contact-schema.ts` L17–21                                                                                                                                                                          | `SERVICE_OPTIONS` from `liveServices`; the comment count-free                                                                                                                                                                                                                                                    | drafts never in the form                                                                         | the contact-form e2e                                                                                  |
| B5           | `components/marketing/service-marquee.tsx` L19–29                                                                                                                                                       | icon keys from the catalogue; seven new sprite symbols                                                                                                                                                                                                                                                           | five of nine lack an icon today                                                                  | a11y (decorative, `aria-hidden`)                                                                      |
| B6           | `data/copy/home.ts` L152, L154, L180–181, L238, L248                                                                                                                                                    | the `deltas.md` § 3 rows; the stat from `liveServices.length` (Q21)                                                                                                                                                                                                                                              | count-free copy; two pre-existing watch-list hits                                                | `check:copy-uniqueness` (local); the implied-proof grep                                               |
| B7           | `data/industries.ts` L128, L190, L257                                                                                                                                                                   | the three "nine" FAQ answers                                                                                                                                                                                                                                                                                     | count-free; they ship as `FAQPage` JSON-LD                                                       | the JSON-LD re-validated                                                                              |
| B8           | `data/copy/pricing.ts` L47, L60–61, the factors, L131, L141, plus two FAQs                                                                                                                              | `deltas.md` § 4                                                                                                                                                                                                                                                                                                  | D4 terms (bank transfer by default, no online checkout)                                          | `check:copy-uniqueness` (local)                                                                       |
| B9           | `data/copy/contact.ts` L137                                                                                                                                                                             | the `deltas.md` § 3 row                                                                                                                                                                                                                                                                                          | "Most engagements" is a track-record form                                                        | the implied-proof grep                                                                                |
| B10          | `app/(marketing)/services/page.tsx` L31–43, L124                                                                                                                                                        | `index-and-nav.md` META, HERO and the intro                                                                                                                                                                                                                                                                      | D13                                                                                              | title and meta counts (`05` § 8)                                                                      |
| B11          | `lib/services.ts` L39–41; `[service]/page.tsx` L32–34; `pricing-table.tsx` L8, L25–27, L41                                                                                                              | comments and labels count-free                                                                                                                                                                                                                                                                                   | "9" and "nine" literals                                                                          | a grep for `\bnine\b` and `\b9\b` over the touched files                                              |
| B12          | `data/service-locations.ts` L19–23                                                                                                                                                                      | the D1 ruling per R58 (Q20)                                                                                                                                                                                                                                                                                      | the header contradicts the profile page                                                          | `check:content-uniqueness`; the location pages still render                                           |
| B13          | `lib/seo.ts` L7 (`DEFAULT_DESCRIPTION`); `lib/jsonld.ts` L66, L142 (`SITE_DESCRIPTION`, `knowsAbout`)                                                                                                   | additions for the new line                                                                                                                                                                                                                                                                                       | the site-wide schema should name the services                                                    | JSON-LD validates                                                                                     |
| B14          | `data/blog.ts`                                                                                                                                                                                          | topics `local-marketing` (anchor `local-business-plans`) and `clinic-compliance` (22 keyword rows already target it — `03` § 8)                                                                                                                                                                                  | archives exist before their posts                                                                | `check:keywords`                                                                                      |
| C            | the docs in § 6.1                                                                                                                                                                                       | dated blockquotes                                                                                                                                                                                                                                                                                                | the locked decisions are re-opened on the record                                                 | prettier; a reader confirms every note is dated                                                       |
| D1           | `data/services.ts`                                                                                                                                                                                      | the entry from `09-content-drafts/services/<slug>.catalogue.md`, `status: "draft"`, the working-set figures                                                                                                                                                                                                      | one service per pair of commits                                                                  | `check:copy-uniqueness` (local, 70/85 against the fork and the nine)                                  |
| D2           | `content/services/<slug>.mdx`                                                                                                                                                                           | the draft body; the provenance comment kept (MDX comments do not render, and its `[Sxx]` keys keep the page traceable)                                                                                                                                                                                           | ship-shaped drafts                                                                               | `check:content-uniqueness`; the four gate greps (POM, performance claims, implied proof, US spelling) |
| D3           | `scripts/check-keywords.ts` L24–34, L56–75                                                                                                                                                              | the `SERVICE_SLUGS` and `CLUSTER_ENUM` values (AE.8), in the commit that adds the first row using them (Q22)                                                                                                                                                                                                     | `keywords-draft.json` is unmergeable until then                                                  | `check:keywords`                                                                                      |
| D4           | `data/keywords.json`                                                                                                                                                                                    | the rows for this slug from `keywords-draft.json`; the re-points in `05` § 3                                                                                                                                                                                                                                     | one `primaryUrl` per term                                                                        | `check:keywords`; `urlset.mjs`                                                                        |
| D5           | `e2e/a11y.spec.ts` ROUTES                                                                                                                                                                               | the route, in the draft commit                                                                                                                                                                                                                                                                                   | audited while still `noindex`                                                                    | e2e green                                                                                             |
| D6 (publish) | `data/services.ts` `status: "live"`; `_nav-data.ts` `BUILT_ROUTES`; `.lighthouserc.cjs` (text-back and the bundle only)                                                                                 | the flip                                                                                                                                                                                                                                                                                                         | § 7 rule 2                                                                                       | Lighthouse CI on the added URL; the sitemap diff                                                      |
| D7 (publish) | the boundary sites in `deltas.md` § 1 naming this slug (`data/services.ts:371,490,501,509,545-547,559`; `content/services/crm-automation.mdx:84`; `ai-integration.mdx:24-30`; the maintenance entry)    | the I.8 rewrites, in the flip commit                                                                                                                                                                                                                                                                             | a live page is pointed at, never a draft                                                         | `check:content-uniqueness`; the implied-proof grep                                                    |
| E1           | `data/services.ts` — the bundle entry and `tiers`                                                                                                                                                       | bundle catalogue § 3                                                                                                                                                                                                                                                                                             | D13                                                                                              | the Rich Results Test (`OfferCatalog`)                                                                |
| E2           | `data/copy/pricing.ts` Plans block; `[service]/page.tsx` `hasOfferCatalog`                                                                                                                              | `07` § 5; AE.3                                                                                                                                                                                                                                                                                                   | the tiers on `/pricing`                                                                          | `check:copy-uniqueness`; `/pricing` Lighthouse unchanged                                              |
| E3           | the home `PRICING_ANCHOR_SLUGS`                                                                                                                                                                         | unchanged (Q21) unless the founder adds the bundle                                                                                                                                                                                                                                                               | D8                                                                                               | —                                                                                                     |
| F1           | `data/industries.ts` (from `09-content-drafts/industries/<slug>.catalogue.md`); `content/industries/<slug>.mdx`; `INDUSTRY_SLUGS`; `VERTICAL_ENUM`, with the L77–80 comment rewritten when trades ships | one page each, after its doc 03 section                                                                                                                                                                                                                                                                          | D12                                                                                              | the `FAQPage` POM grep across the repo (CLAUDE.md § B4); `check:content-uniqueness`; the e2e route    |
| F2           | every template that consumes `industries` (`CrossLinkGrid` and its intros)                                                                                                                              | read after the collection grows                                                                                                                                                                                                                                                                                  | dormant template strings go live when data fills in (CLAUDE.md)                                  | a read of each rendered page                                                                          |
| P            | `content/blog/<slug>.mdx`, one per post                                                                                                                                                                 | from `09-content-drafts/blog/`, `draft: true` until its `12` § 4 trigger                                                                                                                                                                                                                                         | the blog is self-hiding                                                                          | `check:content-uniqueness`; the gate greps; the pre-publication row in § 11                           |

## 6. Docs to amend, with dated corrections

Two groups. The first is outside this folder and lands in commit 3, or with the page that makes it
true; each site gets a dated `> **AMENDED 25 September 2026 —**` blockquote under the sentence,
never a silent rewrite. The second is inside this folder and was applied in S9, dated at the site.

### 6.1 Repo docs (pending; build phase)

| Where                                                                                                                                                                                                                           | Current                                               | Correction                                                                                                                                                               | Source             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `CLAUDE.md:50-55` "Services: Naxdor's 9"                                                                                                                                                                                        | the nine                                              | the nine plus six monthly services and one bundle, grouped Build / Grow / Automate & run; `liveServices` is the count                                                    | D13; `02` § 6      |
| `CLAUDE.md:65` "Industries"                                                                                                                                                                                                     | the three clinic verticals                            | plus wave 1 — veterinary practices, trades and home services, garages and MOT centres — each added when its page ships                                                   | D12                |
| `docs/README.md:60-68`; `docs/00-overview.md:23`; `docs/02-uk-market-research.md:407`; `docs/06-build-plan.md:33-35`; `docs/08-seo-architecture.md:248`; `docs/03-uk-compliance.md:430`; `docs/strategy/uiux-guidelines.md:105` | "nine services"                                       | the same note as CLAUDE.md, one per site                                                                                                                                 | D13                |
| `docs/04-information-architecture.md:79,306,320,361,382`                                                                                                                                                                        | the sitemap and nav rows                              | the `05` § 2 delta (29 new URLs, 15 changed) and the grouped nav                                                                                                         | `05` §§ 1–2        |
| `docs/00-overview.md:288-296`                                                                                                                                                                                                   | "subscription billing for WebAsk itself" out of scope | narrowed to "self-serve online subscription checkout"; monthly invoicing of a hosted plan is ordinary invoicing; paid media, social management and the portal stay out   | Q2, D13 (`00` § 6) |
| `docs/03-uk-compliance.md:23` § A1                                                                                                                                                                                              | "Companies (Trading Disclosures) Regulations 2008"    | the Companies (Trading Disclosures) Regulations 2015 (SI 2015/17), which the drafts cite; the row's conclusion — no UK company, so no company disclosures — is unchanged | [S24]              |
| `docs/03-uk-compliance.md` § A2                                                                                                                                                                                                 | VAT unresolved for the nine                           | append the four hosted-plan questions as open items under D2                                                                                                             | `07` § 6.2         |
| `docs/03-uk-compliance.md`, new sub-sections                                                                                                                                                                                    | —                                                     | A5a–A5c, A8, A9, B5, B6 from research `08` § 2.4 (commit 3, after review); B10, B11, B12 from `08` §§ 2.1–2.3, each with its industry page (commit 6)                    | `08` § 2           |
| `docs/06-build-plan.md`, the decision-gates table                                                                                                                                                                               | D1–D8                                                 | D9–D13 decided 25 September 2026; D2 ext. and D4 ext. open                                                                                                               | `00` §§ 4, 6       |
| `scripts/check-keywords.ts:77-80` comment                                                                                                                                                                                       | "home-services … deliberately NOT carried over"       | rewritten when the trades page ships, recording the `06` decision                                                                                                        | D12                |
| `docs/strategy/content-guidelines.md:45`                                                                                                                                                                                        | the title pattern `… \| WebAsk`                       | `… · WebAsk`, the layout's template                                                                                                                                      | `deltas.md` § 3    |

### 6.2 Research folder (applied in S9, 25 September 2026)

| Where                                                                               | Was                                                                                               | Now                                                                                                                                                                                                                                | Source read on the day |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `08` § 10 row 3; § B5                                                               | "commit the offence"                                                                              | "will be in breach of the banned practice" — Schedule 20 is civilly enforced                                                                                                                                                       | CMA208 § 3.3 [S26]     |
| `08` § 10 row 3; § B5 (Google)                                                      | "businesses must not"                                                                             | merchants "should not" — the page's modality                                                                                                                                                                                       | [S38]                  |
| `08` § B5; R15                                                                      | "must be labelled prominently as incentivised"                                                    | "must be clearly identifiable as incentivised", the advert label being what is "usually" necessary                                                                                                                                 | CMA208 § 3.5 [S26]     |
| `08` R17                                                                            | "can commit the offence"                                                                          | "would be in breach of the banned practice"                                                                                                                                                                                        | CMA208 § 3.3 [S26]     |
| `08` R52; the garages page L24; the garages catalogue FAQ 2                         | "Any driver"                                                                                      | "Drivers of cars, vans and motorcycles" (lorries, buses and large trailers get two months)                                                                                                                                         | GOV.UK [S122]          |
| `08` R47; `06` § L.1; post #9 L53 and L55; the trades catalogue FAQ on cancellation | limbs (a) and (b) of "off-premises contract" only; "by text … is a distance contract" unqualified | limb (c) added: a quote accepted by text or phone immediately after a home visit is off-premises, so the £42 floor applies to it and "distance" does not; the drafts now say "without a visit first" (the trades page already did) | CCRs reg 5 [S110]      |
| `09` reviews catalogue FAQ                                                          | as R15 was                                                                                        | as R15 is                                                                                                                                                                                                                          | [S26]                  |
| `10` S38, S44, S52, S139                                                            | dates behind the re-reads; the "owner-only" note                                                  | dates level with the latest read; the two transfer notes reconciled                                                                                                                                                                | [S44], [S52]           |

## 7. Batching — `/services` never links to a 404, and a live page never links to a draft

The mechanism is the data layer, not the route layer (`05` § 7): a `draft` entry is on no surface,
so the only ways to link to a missing route are to flip `status` without the MDX, or to point a live
page at a draft slug. One rule per failure mode:

1. A catalogue entry lands only with its MDX in the same commit — the `[service]` route builds from
   MDX slugs, so an entry without MDX would 404 the moment it went live.
2. `status: "live"` flips only in the commit that adds `BUILT_ROUTES`, the e2e route and the
   boundary edits for that slug — never earlier, never split.
3. `relatedServiceSlugs` and `PricingTable` filter through `liveServices` (A5, A6); an industry
   page's `serviceSlugs` are all live before the page ships — the industry template drops unknown
   slugs silently and renders short, which is what the `// pending` markers in the three industry
   catalogues mark.
4. The bundle ships after all six member services are live, because its page and its `OfferCatalog`
   link to each member.
5. A post publishes after its pillar page is live (the `12` § 4 triggers) and after its § 11 row;
   until then `draft: true` — the blog is self-hiding.
6. The sitemap, nav, grid, contact form and pricing table are derived, never hand-listed, so the
   publish-commit checklist is five things in one commit: `BUILT_ROUTES`, the e2e route, the
   Lighthouse URL where listed, the boundary edits, the keyword rows.
7. After every commit that grows a collection, read every template that consumes it (the
   `CrossLinkGrid` lesson in CLAUDE.md).

## 8. Sequencing against cutover (Q27, decided 25 September 2026)

Everything ships after Phase 1 cutover, in the § 2 order. What the draft status allows before
cutover: commit 1 (no visible change) and the 4(a) draft commits — a draft prerenders `noindex` and
appears on no surface, so authoring can proceed on the pre-cutover site without exposing anything.
What waits for cutover: commit 2 (the nav changes what visitors see), commit 3 (the docs describe a
shipped line), every 4(b) publish commit, the bundle, the industries and the posts.

1. Phase 1 cutover (`docs/06-build-plan.md`): `webask.co.uk` on the new stack, the 301 map live,
   Search Console verified.
2. Commit 1 if not already landed; commit 2; commit 3.
3. The step-4 pairs in the § 2 order, one service live per cycle, each promoted from `noindex` only
   against the quality gate; the tier-1 posts (#1, #2, #3) follow their pages.
4. The bundle (commit 5) once the six are live; posts #4, #10 and #12 after it (`12` § 4; #12 also
   waits for `07`'s FX band to be final).
5. The industries in the D12 order, each after its doc 03 section; posts #8 and #9 follow.
6. The second-wave posts (#13–#16) after their pillar and first-wave post are indexed; #17 later
   still.

## 9. Gates per step

| Step        | Every commit                                                                                                                                                                                                                                                                             | Added for this step                                                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| all         | `corepack pnpm typecheck && corepack pnpm lint && corepack pnpm build`; `check:redirects`; `check:contrast`; the Playwright smoke; Lighthouse CI (mobile performance and LCP `warn`; a11y 100, BP 100, SEO ≥ 95 `error` — read `.lighthouserc.cjs` before writing any performance claim) | —                                                                                                                                                                                                              |
| A           | as above                                                                                                                                                                                                                                                                                 | the Rich Results Test on one project and one monthly service page; `check:copy-uniqueness` (local) unchanged for the nine                                                                                      |
| B           | as above                                                                                                                                                                                                                                                                                 | e2e a11y at 412×823 on `/`, `/services`, `/contact`, `/pricing`; `sitemap.xml` diffed against `05` § 2; the implied-proof grep (`most\|usually\|typically\|the pattern we see`) over the touched `data/` files |
| C           | prettier on `docs/`                                                                                                                                                                                                                                                                      | a reader checks each blockquote is dated and sits under, not over, the sentence it amends                                                                                                                      |
| D (draft)   | as above                                                                                                                                                                                                                                                                                 | `check:keywords`; `check:content-uniqueness`; `check:copy-uniqueness` (local); the four gate greps over `content/` and `data/services.ts`; the draft route 200 + `noindex` in e2e                              |
| D (publish) | as above                                                                                                                                                                                                                                                                                 | Lighthouse CI on the listed URL; the boundary edits re-run `check:content-uniqueness`; the page's JSON-LD validated                                                                                            |
| E           | as above                                                                                                                                                                                                                                                                                 | `OfferCatalog` in the Rich Results Test; `/pricing` Lighthouse unchanged                                                                                                                                       |
| F           | as above                                                                                                                                                                                                                                                                                 | the `FAQPage` POM grep across the repo (CLAUDE.md § B4); the industry page's `serviceSlugs` all live                                                                                                           |
| Posts       | as above                                                                                                                                                                                                                                                                                 | `check:content-uniqueness`; the § 11 row                                                                                                                                                                       |

## 10. Effort (executor estimates, 25 September 2026 — paste-and-verify against the drafts, not writing)

| Step                | Hours        | Note                                                                                                              |
| ------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| 1 model             | 4            | types, helpers, JSON-LD, the two string corrections, tests                                                        |
| 2 surfaces          | 5            | the nav in three components, the marquee sprites, the deltas                                                      |
| 3 docs              | 3            | notes at eleven sites; the doc 03 sub-sections pasted after review (the review is the founder's time)             |
| 4 per service       | 2.5 × 6 = 15 | 1.5 h for the draft commit (catalogue, MDX, rows, enums, route) and 1 h for the publish (flip, boundaries, gates) |
| 5 bundle            | 4            | tiers, catalogue node, Plans block, pricing deltas                                                                |
| 6 per industry      | 3 × 3 = 9    | catalogue, MDX, enums, the doc 03 paste (review excluded)                                                         |
| 7 posts             | 1 × 16 = 16  | paste, frontmatter, the pre-publication re-read, links                                                            |
| gate runs and fixes | 6            | Lighthouse re-runs, a11y at the mobile viewport, Rich Results                                                     |
| **Total**           | **≈ 62**     | plus the founder's review, the accountant's answers and the solicitor's DPA, which are not executor hours         |

## 11. Ship conditions carried from S8 (`09-content-drafts/README.md` §§ 3.3–3.5)

| Item                                                            | Where it bites                                            | Condition                                                                                                                                      |
| --------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| The CMA207 invitation-to-purchase paragraph                     | the sentences that state the price-display rule (R50)     | cite the paragraph, or leave the sentences as they are — they already state the rule in plain words; the citation strengthens, it does not fix |
| The Schedule 20 claim-of-approval citation                      | the trades catalogue FAQ on scheme logos                  | cite the paragraph before the trades page ships                                                                                                |
| The per-location unit                                           | the reviews and profile catalogue FAQs say "per location" | A1's `unit?` renders it; without it the FAQ and the hero disagree                                                                              |
| The pending `relatedServiceSlugs` in the industry catalogues    | the three industry pages                                  | every slug live first (§ 7 rule 3)                                                                                                             |
| Meta's utility-category definition and the 1 October 2026 rates | post #4; post #11                                         | re-read on the writing day ([S59]–[S61]; `10` § 2)                                                                                             |
| The Performance-page field names                                | post #16                                                  | re-read on the writing day ([S192])                                                                                                            |
| S31 Art. 18                                                     | the vets page and post #8                                 | read before any prescription-fee row is printed (both rows were removed in S8)                                                                 |
| The `07` FX band                                                | post #12                                                  | final before publication                                                                                                                       |
| The Ofcom range                                                 | post #4's example number                                  | still recommended on the writing day ([S193])                                                                                                  |
| The R52 re-check                                                | the garages page and its FAQ                              | closed in S9 (the vehicle list); a reminder to a number that was never a customer's stays under R52's "Never" clause                           |
| `docs/03` § A1, 2008 → 2015                                     | the build phase                                           | § 6.1                                                                                                                                          |

## Sources

`[Sxx]` keys resolve in `10-sources.md`. Cited in this file: [S24], [S26], [S38], [S44], [S52],
[S59]–[S61], [S110], [S122], [S192], [S193]; the pricing-page figures the working set is placed
against are [S01] as `01` § 3 carries them.
