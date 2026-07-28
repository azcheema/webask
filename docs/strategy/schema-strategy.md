# Schema / Structured Data Strategy

> JSON-LD blueprints for every page type. Authored with typed `schema-dts` in `lib/jsonld.ts`. Structurally validated in CI on every PR (`e2e/jsonld.spec.ts`); confirmed in Google's Rich Results Test at launch.

---

## Why schema matters more in 2026

After the March 2026 Google Core Update, Google prioritizes "verified entities." Schema is our digital ID card — it proves to Google, Bing, ChatGPT, Perplexity, and every AI surface that Naxdor is a real, verifiable business with a known identity.

Schema does not improve rankings directly, but:

- Earns rich results (FAQ, review stars, breadcrumbs, sitelinks).
- Powers AI Overview citations (entity recognition).
- Enables Google Business Profile + Knowledge Graph linkages.
- Future-proofs against verified-entity-only ranking shifts.

---

## Core principles

1. **One canonical `Organization` `@id`** across the entire site: `https://webask.co.uk/#organization`. Same value on every page.
2. **Every page emits a `@graph`** that references the Organization by `@id`. Nodes link to each other via `@id`, never inline-duplicate the Organization.
3. **Never mix `Person` and `Organization`** on the same node. Founders are `Person` nodes; the company is the `Organization` node.
4. **Use `ProfessionalService` not `LocalBusiness`** for the company. We're a service provider without a retail storefront.
5. **Authored in TypeScript** via `schema-dts` — compiler catches invalid keys.
6. **Validated in CI** via `e2e/jsonld.spec.ts` (structural rules on the rendered output, in the Playwright job) + Google's Rich Results Test on critical templates at launch. See § Validation.

---

## Sitewide `@graph` nodes (emitted in root layout)

Every page renders these in the root `<head>`:

```jsonc
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://webask.co.uk/#organization",
      "name": "WebAsk",
      // The Swedish operating entity. NOT an invented UK company — no
      // Companies House number exists and none may ever be displayed.
      "legalName": "Naxdor",
      "url": "https://webask.co.uk/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://webask.co.uk/#logo",
        "url": "https://webask.co.uk/brand/logo-512.png",
        "contentUrl": "https://webask.co.uk/brand/logo-512.png",
        "width": 512,
        "height": 512,
        "caption": "WebAsk",
      },
      "image": { "@id": "https://webask.co.uk/#logo" },
      "description": "UK digital services firm for small businesses — websites, CRM automation (GoHighLevel, HubSpot), AI integration, and SEO.",
      "founder": { "@id": "https://webask.co.uk/about#ansar-cheema" },
      // The group link — WebAsk is openly part of the Naxdor group. This is the
      // ONLY cross-domain @id we emit, and it must be whitelisted in
      // e2e/jsonld.spec.ts (EXTERNAL_IDS) or the resolution check fails.
      // NOT a canonical or hreflang relationship — see 05-seo-strategy-uk.md.
      "parentOrganization": { "@id": "https://naxdor.com/#organization" },
      "knowsAbout": [
        "Web Development",
        "UI/UX Design",
        "Search Engine Optimization",
        "Mobile Application Development",
        "GoHighLevel",
        "HubSpot",
        "CRM Automation",
        "AI Integration",
        "Next.js",
        "React",
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom",
      },
      // OMITTED ENTIRELY until real WebAsk profiles exist — "leave empty rather
      // than point at 404s". Naxdor's profiles are NOT ours; do not borrow them.
      // "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hello@webask.co.uk",
        "availableLanguage": ["English"],
      },
      // NO "address" and NO "geo" anywhere in this node — D1, fully remote.
      // The Swedish registered address is a statutory disclosure that lives on
      // /legal/company-information, not a geographic claim in the graph.
    },
    {
      "@type": "WebSite",
      "@id": "https://webask.co.uk/#website",
      "url": "https://webask.co.uk/",
      "name": "Naxdor",
      "publisher": { "@id": "https://webask.co.uk/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://webask.co.uk/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      "inLanguage": "en-GB",
    },
  ],
}
```

(The `SearchAction` is published even before we ship search UI, since the route resolves; we'll build the search page in Phase 3+.)

**Identity is data-sourced, not hardcoded.** `organizationNode()` pulls `name`, `legalName`, `contactPoint.email`, and `sameAs` from `data/site.ts`, and `founder` from the first `data/team.ts` member (`@id` → that Person node) — so the graph can't drift from the footer / contact page. `sameAs` is the **company** profiles only; `data/site.ts` keeps `socials: []` until those profiles exist ("leave empty rather than point at 404s"), so the `sameAs` key is **omitted entirely** rather than pointing at not-yet-live URLs. The founder's _personal_ LinkedIn/GitHub live on the `Person` node, never the Organization. (The `clutch.co` entry above is aspirational — it lands in `sameAs` automatically once added to `site.socials`.)

---

## Per-page additions

In addition to the sitewide nodes, each page type appends to the `@graph`.

### Home page

```jsonc
{
  "@type": "WebPage",
  "@id": "https://webask.co.uk/#webpage",
  "url": "https://webask.co.uk/",
  "name": "Naxdor — Digital Services for SMBs: Web, CRM, AI",
  "isPartOf": { "@id": "https://webask.co.uk/#website" },
  "about": { "@id": "https://webask.co.uk/#organization" },
  "primaryImageOfPage": { "@id": "https://webask.co.uk/#hero-image" },
  "inLanguage": "en-GB",
}
```

> `primaryImageOfPage` is **omitted in shipped code** — there is no `#hero-image` `ImageObject` node to reference, and a dangling `@id` fails the resolution check. Add it here only once a hero `ImageObject` node is emitted.

### Service page

```jsonc
{
  "@type": "Service",
  "@id": "https://webask.co.uk/services/web-development#service",
  "name": "Web Development",
  "serviceType": "Web Development",
  "provider": { "@id": "https://webask.co.uk/#organization" },
  "areaServed": {
    "@type": "Country",
    "name": "United States",
  },
  "offers": {
    "@type": "Offer",
    "price": "4500",
    "priceCurrency": "GBP",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "4500",
      "priceCurrency": "GBP",
      "unitText": "starting price per project",
    },
    "availability": "https://schema.org/InStock",
  },
  "description": "...",
}
```

Plus a `WebPage` node (as above) and a `BreadcrumbList`.

### Service × Location page

The `Service` node above + a `ProfessionalService` node with location-specific data:

```jsonc
{
  "@type": "ProfessionalService",
  "@id": "https://webask.co.uk/services/web-development/manchester#provider",
  "name": "WebAsk — Web Development in Manchester",
  "parentOrganization": { "@id": "https://webask.co.uk/#organization" },
  "areaServed": {
    "@type": "City",
    "name": "Manchester",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Greater Manchester",
      "containedInPlace": { "@type": "Country", "name": "United Kingdom" },
    },
  },
  "url": "https://webask.co.uk/services/web-development/manchester",
}
```

**No `address`. No `geo`. Ever.** D1 resolved 2026-07-27: WebAsk is fully remote with no UK
location, so a local postal address or coordinates would be a fabricated presence — the exact
anti-pattern `programmatic-seo.md` forbids, and a manual-action risk. Reach is expressed
through `areaServed` alone. Re-open only if a genuine UK working location is ever established.

> **`AdministrativeArea`, not `State`.** schema.org's `State` means "a state or province of a
> country" — correct for Texas, wrong for England, which has no such tier. A ceremonial or
> metropolitan county is an `AdministrativeArea` (State's parent type). Naxdor's builder emits
> `State` and is correct for its US metros; WebAsk generalised it. Logged as CR-7 in
> [`../07-naxdor-change-requests.md`](../07-naxdor-change-requests.md) so nobody "fixes"
> Naxdor to match and regresses it.

### Location hub page

`ProfessionalService` as above (`parentOrganization` → Organization, `serviceType` array of
all services, `areaServed` only). Built as `locationHubNode()` in `lib/jsonld.ts` via the
shared `areaServedNode({ kind, name, county })` helper.

**A county-level hub is not a `City`.** Cheshire is a county, so it emits
`AdministrativeArea` directly under `Country`, with no containing county:

```jsonc
"areaServed": {
  "@type": "AdministrativeArea",
  "name": "Cheshire",
  "containedInPlace": { "@type": "Country", "name": "United Kingdom" },
}
```

### Industry page

```jsonc
{
  "@type": "Service",
  "@id": "https://webask.co.uk/industries/dental-practices#service",
  "name": "Digital Services for Dental Practices",
  "provider": { "@id": "https://webask.co.uk/#organization" },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Dental practices, cosmetic dentistry clinics, orthodontists",
  },
  "areaServed": { "@type": "Country", "name": "United States" },
}
```

### Blog post

```jsonc
{
  "@type": "Article",
  "@id": "https://webask.co.uk/blog/gohighlevel-vs-hubspot#article",
  "headline": "GoHighLevel vs HubSpot for SMBs (2026)",
  "datePublished": "2026-06-01T10:00:00-06:00",
  "dateModified": "2026-06-15T14:00:00-06:00",
  "author": { "@id": "https://webask.co.uk/about#ansar-cheema" },
  "publisher": { "@id": "https://webask.co.uk/#organization" },
  "image": "https://webask.co.uk/blog/gohighlevel-vs-hubspot/hero.png",
  "mainEntityOfPage": { "@id": "https://webask.co.uk/blog/gohighlevel-vs-hubspot#webpage" },
  "wordCount": 2400,
  "keywords": ["gohighlevel", "hubspot", "crm comparison", "small business crm"],
}
```

`author` references a `Person` node:

```jsonc
{
  "@type": "Person",
  "@id": "https://webask.co.uk/about#ansar-cheema",
  "name": "Ansar Cheema",
  "url": "https://webask.co.uk/about/team#ansar-cheema",
  "image": "https://webask.co.uk/team/ansar-cheema.jpg",
  "jobTitle": "Co-founder & Engineering Lead",
  "worksFor": { "@id": "https://webask.co.uk/#organization" },
  "knowsAbout": ["Web Development", "GoHighLevel", "AI Integration"],
  "sameAs": ["https://www.linkedin.com/in/azcheema/", "https://github.com/azcheema"],
}
```

### Case study

```jsonc
{
  "@type": ["Article", "CreativeWork"],
  "@id": "https://webask.co.uk/case-studies/3x-leads-dallas-med-spa#article",
  "headline": "3.4× Lead Volume in 90 Days for a Dallas Med Spa",
  "datePublished": "2026-08-15T10:00:00-05:00",
  "author": { "@id": "https://webask.co.uk/about#ansar-cheema" },
  "publisher": { "@id": "https://webask.co.uk/#organization" },
  "about": {
    "@type": "Service",
    "serviceType": "CRM Automation",
  },
}
```

### Pricing page

A `Service` + `Offer` for each of the 6 services, all referencing the Organization.

### FAQ blocks (on service / industry / location pages)

```jsonc
{
  "@type": "FAQPage",
  "@id": "https://webask.co.uk/services/crm-automation#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does GoHighLevel setup cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoHighLevel setup at Naxdor starts at $2,500 and typically lands between $3,500 and $8,000 depending on automation complexity...",
      },
    },
    // ... 5–7 more questions
  ],
}
```

### Breadcrumbs (every non-home page)

```jsonc
{
  "@type": "BreadcrumbList",
  "@id": "https://webask.co.uk/services/web-development#breadcrumbs",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webask.co.uk/" },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://webask.co.uk/services",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Development",
      "item": "https://webask.co.uk/services/web-development",
    },
  ],
}
```

---

## `lib/jsonld.ts` API design

Type-safe builders, one per node type:

```ts
// lib/jsonld.ts
import type { WithContext, Organization, WebSite, Service /* ... */ } from "schema-dts";

export const ORG_ID = "https://webask.co.uk/#organization";
export const SITE_ID = "https://webask.co.uk/#website";

export function organizationNode(): Organization {
  return {
    /* full Organization node */
  };
}

export function websiteNode(): WebSite {
  /* ... */
}

export function serviceNode(opts: {
  slug: string;
  name: string;
  startingPrice: number;
  description: string;
}): Service {
  /* ... */
}

export function breadcrumbsNode(items: Array<{ name: string; url: string }>): BreadcrumbList {
  /* ... */
}

export function faqNode(faqs: Array<{ q: string; a: string }>): FAQPage {
  /* ... */
}

export function buildGraph(...nodes: Thing[]): WithContext<Graph> {
  return { "@context": "https://schema.org", "@graph": nodes };
}
```

Page templates compose nodes:

```tsx
// app/(marketing)/services/[service]/page.tsx
import {
  buildGraph,
  organizationNode,
  websiteNode,
  serviceNode,
  breadcrumbsNode,
  faqNode,
} from "@/lib/jsonld";

export default function ServicePage({ params }) {
  const service = getService(params.service);
  const graph = buildGraph(
    organizationNode(),
    websiteNode(),
    serviceNode({
      slug: service.slug,
      name: service.title,
      startingPrice: service.startingPrice,
      description: service.description,
    }),
    breadcrumbsNode([
      { name: "Home", url: "https://webask.co.uk/" },
      { name: "Services", url: "https://webask.co.uk/services" },
      { name: service.title, url: `https://webask.co.uk/services/${service.slug}` },
    ]),
    faqNode(service.faqs),
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      {/* page content */}
    </>
  );
}
```

---

## Validation

`e2e/jsonld.spec.ts` (Playwright) runs in CI on every PR, in the existing e2e job. It extracts the **rendered** `<script type="application/ld+json">` from each critical route on the running production build and asserts:

1. **One canonical Organization `@id`** sitewide — the same value on every page (and dual-typed `Organization` + `ProfessionalService`).
2. **Every page references the Organization by `@id`** somewhere in its `@graph`.
3. **No node mixes `Person` and `Organization`** on its `@type`.
4. **Every `{@id}` reference resolves** to a node defined on some crawled route (cross-route union — e.g. `Organization.founder` resolves to the Person node that only renders on `/about`).
5. **Breadcrumb positions** are sequential from 1, each with a non-empty `name` + absolute `item` URL.
6. **FAQ** `Question`/`Answer` text is non-empty.

It also light-checks each route's metadata (a canonical link whose path matches the route + a non-empty meta description), covering the "`generateMetadata` on every page" audit.

Why an e2e spec, not a `scripts/check-*.ts` like the others: per-page `@graph`s are composed in RSC page modules that a standalone `tsx` script can't import, so validating the **rendered** output is the only way to catch composition (not just builder) regressions — and it can't drift from what ships.

> **Article rules (rule for Phase 3):** when blog/case-study `Article` nodes land, extend the spec to assert every `Article` has an `author` and `dateModified`.

> **Rich Results Test API** (Google's hosted validator) stays a **manual launch step** per route — it needs network access and isn't free, so it isn't wired into CI. Run it on the 6 critical templates before flipping any page to `index`.

Failure blocks the merge.

---

## Out of scope (explicitly)

- `llms.txt` — Google said no.
- Proprietary "AI-friendly" schema — not used by any search engine.
- `Review` schema where we self-author the review — penalty risk.
- Article schema on non-article pages.
- Multiple `Organization` nodes with different `@id`s.
