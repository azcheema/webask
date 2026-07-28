# Information Architecture

> URL map, canonicalization rules, and internal-linking discipline. Optimized for ranking, scannability, and i18n-readiness.

---

## Conventions

- All paths **lowercase, hyphens** (not underscores), **no trailing slash**.
- Routes are **i18n-ready**: no locale segment at launch, but the route tree could later be wrapped in `[locale]` without restructuring.
- One canonical URL per primary keyword — no two pages compete for the same intent.

---

## Full URL map

### Public marketing site (`app/(marketing)/`)

| Path                                  | Purpose                                         | Primary intent                                                                |
| ------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| `/`                                   | Home — value prop, services bento, social proof | Brand + "digital agency for small business"                                   |
| `/services`                           | Services index                                  | "digital services for small business"                                         |
| `/services/web-development`           | Service detail                                  | "web development agency"                                                      |
| `/services/ecommerce-development`     | Service detail                                  | "shopify agency", "ecommerce development company"                             |
| `/services/web-app-development`       | Service detail                                  | "custom web app development", "saas development agency"                       |
| `/services/ui-ux-design`              | Service detail                                  | "ui ux design agency"                                                         |
| `/services/seo`                       | Service detail                                  | "seo agency for small business"                                               |
| `/services/mobile-app-development`    | Service detail                                  | "mobile app development company"                                              |
| `/services/crm-automation`            | Service detail (incl. migrations)               | "gohighlevel agency", "hubspot consultant", "crm migration services"          |
| `/services/ai-integration`            | Service detail — 3 sub-sections on one page     | "ai voice agent", "ai chatbot agency", "ai automation services"               |
| `/services/maintenance-support`       | Service detail                                  | "website maintenance services", "managed wordpress alternative", "care plans" |
| `/services/[service]/[location]`      | **Programmatic** — service × city               | "[service] in [city] [state]"                                                 |
| `/locations`                          | Locations index                                 | "digital agency near me"                                                      |
| `/locations/[location]`               | **Hand-crafted** flagship city hub              | "digital agency [city]"                                                       |
| `/industries`                         | Industries index                                | "agency for [industry]"                                                       |
| `/industries/aesthetic-clinics`       | Industry landing (launch)                       | "med spa marketing", "aesthetic clinic website"                               |
| `/industries/dental-practices`        | Industry landing (launch)                       | "dental website design", "dental marketing agency"                            |
| `/industries/beauty-wellness-clinics` | Industry landing (launch)                       | "beauty clinic website", "wellness clinic marketing"                          |
| `/industries/[industry]/[location]`   | Industry × city _(Phase 4+)_                    | "[industry] [service] in [city]"                                              |
| `/case-studies`                       | Filterable index (service × industry)           | brand + "case studies"                                                        |
| `/case-studies/[slug]`                | Individual case study                           | Problem-specific long-tail                                                    |
| `/blog`                               | Blog index                                      | Brand discovery                                                               |
| `/blog/[slug]`                        | Article                                         | Informational long-tail                                                       |
| `/blog/topic/[topic]`                 | Topic cluster archive                           | Topic keywords                                                                |
| `/about`                              | Company, founders, values                       | Brand                                                                         |
| `/about/team` _(when team grows)_     | Team grid + bios with credentials               | E-E-A-T                                                                       |
| `/pricing`                            | "Starting at" table + how-we-quote              | "[service] pricing"                                                           |
| `/contact`                            | Form + booking placeholder                      | Brand                                                                         |
| `/legal/privacy`                      | Privacy policy                                  | —                                                                             |
| `/legal/terms`                        | Terms of service                                | —                                                                             |
| `/legal/cookies`                      | Cookie policy                                   | —                                                                             |
| `/sitemap.xml`                        | Sitemap index                                   | —                                                                             |
| `/robots.txt`                         | Robots policy                                   | —                                                                             |

### Reserved for Phase 6 (`app/(app)/`)

Empty route group reserved. When auth ships:

- `/(app)/login`, `/(app)/dashboard`, `/(app)/projects/[id]`, `/(app)/invoices`, `/(app)/support`.
- All `noindex` and disallowed in `robots.txt`.

---

## Canonicalization rules

Set absolute canonical via `generateMetadata` on every page using `lib/seo.ts`'s `buildMetadata({ path })`.

| Page type                                                     | Canonical                                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Home, service, location hub, industry, blog post, case study  | Self (absolute URL of the page)                                                 |
| `/services/[service]/[location]`                              | **Self** — different intent than `/services/[service]`; must rank independently |
| `/industries/[industry]/[location]`                           | **Self**                                                                        |
| Paginated archives (blog, case studies)                       | Page-specific (use `rel=next/prev` headers, not canonical-to-page-1)            |
| Filtered archive views (e.g. `/case-studies?industry=dental`) | Canonical to unfiltered index — filter is a UI affordance, not a separate URL   |

**Trailing slash:** off. Set `trailingSlash: false` in `next.config.ts`.

---

## Breadcrumbs (visible + JSON-LD)

Every non-home page renders a `<Breadcrumbs>` component AND emits a `BreadcrumbList` JSON-LD node.

Pattern:

- `/services/web-development` → Home › Services › Web Development
- `/services/web-development/manchester` → Home › Services › Web Development › Manchester
- `/industries/dental-practices` → Home › Industries › Dental Practices
- `/blog/post-slug` → Home › Blog › _(topic)_ › Post Title

---

## Internal-linking discipline

Hard-coded into templates, not left to chance:

| From                              | Links to (required)                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Home                              | All 6 services (bento), 3 industries, 2–3 location hubs, 2 case studies, 2 blog posts                     |
| Service detail                    | All locations where we offer it, 1–2 related services, 2 most relevant case studies, 1 relevant blog post |
| Service × Location (programmatic) | Parent service, location hub, same service in 2–3 nearby cities, related services in this city            |
| Location hub                      | All services, all nearby locations, local case studies, local testimonials                                |
| Industry page                     | Relevant services, relevant case studies, locations where we serve this vertical, 2–3 industry blog posts |
| Industry × Location               | Parent industry, parent location, same industry in nearby cities                                          |
| Case study                        | Services used, industry served, location served, 2 related case studies                                   |
| Blog post                         | 1–3 relevant services + 1 related case study + 2 related blog posts                                       |
| Footer (sitewide)                 | Compact sitemap: services, top metros, industries, company                                                |

**Anti-cannibalization:** the `<title>` and `<h1>` of any two URLs must target distinct primary keywords. Phase 0 keyword-research output (`data/keywords.json`) maps each keyword → one canonical URL; CI lints this map.

---

## Navigation

### Header (desktop)

```
[Logo]   Services ▾   Industries ▾   Locations ▾   Case Studies   Pricing   Blog   [Contact CTA]
```

- "Services" mega-menu: 6 services as columns, each listing 2–3 sub-bullets (deliverables) + an industries cross-link.
- "Industries" dropdown: aesthetic, dental, beauty/wellness + "See all".
- "Locations" dropdown: top hand-crafted hubs + "See all locations".

### Header (mobile)

Hamburger → full-screen sheet. Same sections, accordion expansion. CTA pinned to bottom safe-area.

### Footer

5 columns:

1. **Services** — 6 service links + "All services"
2. **Industries** — 3 launch industries + "All industries"
3. **Locations** — top 5–8 metros + "All locations"
4. **Company** — About, Case Studies, Blog, Pricing, Contact
5. **Legal & Social** — Privacy, Terms, Cookies; LinkedIn, GitHub, X icons

Bottom row: copyright, year, jurisdiction.

---

## Slug rules

| Entity     | Slug pattern                                                                                                                                                                                                                                                |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service    | kebab-case keyword: `web-development`, `ecommerce-development`, `web-app-development`, `ui-ux-design`, `seo`, `mobile-app-development`, `crm-automation`, `ai-integration`, `maintenance-support`                                                           |
| Location   | Bare kebab name where unambiguous, `[place]-[county]` where not: `manchester`, `cheshire`, `leeds`, `newcastle-tyne-and-wear`. **Never** the US `[city]-[state-abbrev]` form — the UK has no equivalent and it reads as an unlocalised import (docs/04 § 4) |
| Industry   | kebab-case plural: `aesthetic-clinics`, `dental-practices`, `beauty-wellness-clinics`                                                                                                                                                                       |
| Case study | `[outcome]-for-[client-or-industry]`: `3x-lead-volume-for-dallas-med-spa`                                                                                                                                                                                   |
| Blog post  | kebab-case title, ≤ 60 chars: `gohighlevel-vs-hubspot-for-smb`                                                                                                                                                                                              |
| Blog topic | kebab-case noun: `gohighlevel`, `ai-for-smb`, `local-seo`                                                                                                                                                                                                   |

---

## Redirects & 404s

- 301 (permanent) for any URL change. Track in `next.config.ts` `redirects()` array.
- Never use 302 for permanent moves.
- 404 page is custom-designed (helpful — links to home, services, contact); not just "page not found".
- `lib/redirects.ts` keeps a typed map; tests assert no `redirect.from === redirect.to` cycles.
