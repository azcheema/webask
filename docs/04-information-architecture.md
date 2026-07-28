# 04 — Information Architecture

> Current sitemap → target sitemap, the full 301 map, and the navigation/linking rules.
> Conventions inherited from `d:\naxdor\docs\strategy\information-architecture.md`.
> Authored 2026-07-27.

---

## 1. Where we're starting from

Audited 2026-07-27 via `https://webask.co.uk/sitemap.xml` (a Yoast-style sitemap index).

### `page-sitemap.xml`

| URL                                      | lastmod    |
| ---------------------------------------- | ---------- |
| `https://webask.co.uk/`                  | 2026-01-27 |
| `https://webask.co.uk/contact/`          | 2026-07-03 |
| `https://webask.co.uk/about/`            | 2023-09-07 |
| `https://webask.co.uk/privacy-policy-2/` | 2022-08-11 |
| `https://webask.co.uk/sample-page/`      | 2020-08-14 |
| `https://webask.co.uk/portfolio/`        | 2020-03-17 |

### `post-sitemap.xml`

| URL                                                                                | lastmod    |
| ---------------------------------------------------------------------------------- | ---------- |
| `https://webask.co.uk/blog/`                                                       | 2020-10-27 |
| `https://webask.co.uk/the-importance-of-seo-why-its-essential-for-online-success/` | 2025-05-26 |
| `https://webask.co.uk/top-10-freelance-blogs/`                                     | 2024-06-25 |
| `https://webask.co.uk/about-my-agency/`                                            | 2024-06-25 |
| `https://webask.co.uk/time-management-tips/`                                       | 2020-10-27 |
| `https://webask.co.uk/pricing-freelance-projects/`                                 | 2020-10-27 |

### `category-sitemap.xml`

| URL                                   |
| ------------------------------------- |
| `https://webask.co.uk/uncategorized/` |

**13 URLs total** (12 content + 1 category). Everything uses **trailing slashes**.
Navigation is four items: Home, About, Contact, Blog. Footer links: About Organization,
Our Clients, Our Partners, Privacy Policy, Cookies Policy, Terms & Conditions — several
of which appear not to resolve to real pages in the sitemap.

**Assessment:** near-zero content assets. `/the-importance-of-seo…/` is the only post
touched recently and it's generic. Nothing here is worth preserving on content merit —
only on URL-equity merit, which is why everything still gets a redirect target rather
than a 404.

---

## 2. Conventions (inherited, unchanged)

- All paths **lowercase, hyphenated**, **no trailing slash** (`trailingSlash: false`).
- Routes stay **i18n-ready** structurally — no locale segment at launch.
- **One canonical URL per primary keyword.** No two pages compete for the same intent.
- Canonical is set explicitly via `generateMetadata` on every page.
- `/services/[service]/[location]` canonicals to **self**, not to the parent service —
  different intent, must rank independently.
- Filtered archive views canonical to the unfiltered index; paginated archives are
  page-specific.

---

## 3. Target URL map

| Path                                  | Purpose                                                                 | Primary intent                                    |
| ------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| `/`                                   | Home                                                                    | Brand + "web design agency for small business uk" |
| `/services`                           | Services index                                                          | "digital services for small business uk"          |
| `/services/web-development`           | Service                                                                 | "web design agency uk"                            |
| `/services/ecommerce-development`     | Service                                                                 | "ecommerce website design uk"                     |
| `/services/web-app-development`       | Service                                                                 | "custom software development uk"                  |
| `/services/ui-ux-design`              | Service                                                                 | "ux design agency uk"                             |
| `/services/seo`                       | Service                                                                 | "seo agency uk"                                   |
| `/services/mobile-app-development`    | Service                                                                 | "app development company uk"                      |
| `/services/crm-automation`            | Service — **GoHighLevel-led**, HubSpot second section (D6 resolved)     | "gohighlevel agency uk", "crm migration uk"       |
| `/services/ai-integration`            | Service — 3 H2 sub-sections                                             | "ai automation agency uk", "ai receptionist uk"   |
| `/services/maintenance-support`       | Service                                                                 | "website maintenance uk"                          |
| `/services/[service]/[location]`      | **Programmatic** service × city                                         | "[service] in [city]"                             |
| `/locations`                          | Locations index                                                         | "web design agency near me"                       |
| `/locations/[location]`               | Hand-crafted city hub                                                   | "web design agency [city]"                        |
| `/industries`                         | Industries index                                                        | "agency for [industry] uk"                        |
| `/industries/aesthetic-clinics`       | Industry landing                                                        | "aesthetic clinic website design uk"              |
| `/industries/dental-practices`        | Industry landing                                                        | "dental website design uk"                        |
| `/industries/beauty-wellness-clinics` | Industry landing                                                        | "beauty clinic website design uk"                 |
| `/industries/[industry]/[location]`   | Industry × city _(later phase)_                                         | "[industry] [service] in [city]"                  |
| `/case-studies`                       | Filterable index — **self-hides while empty**                           | brand + "case studies"                            |
| `/case-studies/[slug]`                | Individual case study                                                   | Problem-specific long-tail                        |
| `/blog`                               | Blog index                                                              | Brand discovery                                   |
| `/blog/[slug]`                        | Article                                                                 | Informational long-tail                           |
| `/blog/topic/[topic]`                 | Topic cluster archive                                                   | Topic keywords                                    |
| `/about`                              | Company, founder, values, **group disclosure**                          | Brand + E-E-A-T                                   |
| `/pricing`                            | "Starting at £X" + how we quote                                         | "[service] cost uk"                               |
| `/contact`                            | Form + `+44` phone + WhatsApp + email. **No postal address** — see note | Brand                                             |
| `/legal/privacy`                      | Privacy notice (incl. Art. 27 rep if required)                          | —                                                 |
| `/legal/terms`                        | Terms of service                                                        | —                                                 |
| `/legal/cookies`                      | Cookie policy                                                           | —                                                 |
| `/legal/company-information`          | **New for UK** — entity disclosure                                      | —                                                 |
| `/sitemap.xml`                        | Sitemap index                                                           | —                                                 |
| `/robots.txt`                         | Robots policy                                                           | —                                                 |

> ⚠️ **`/contact` carries no UK postal address.** D1 resolved 2026-07-27: WebAsk is fully
> remote with no UK location, so `45 Ridgefield Rd, Oxford OX4 3BU` — currently published on
> the live WordPress site — **is removed and not carried forward**. The legally-required
> geographic address is the **Swedish** registered address of the operating entity, and it
> lives on `/legal/company-information`, not `/contact`. These are two different things:
> one is a statutory disclosure, the other is a local-SEO signal we are not entitled to make.
> See [`03-uk-compliance.md`](03-uk-compliance.md) § A1 and
> [`05-seo-strategy-uk.md`](05-seo-strategy-uk.md) § 4.

**Two UK-specific additions** versus Naxdor's map:

1. **`/legal/company-information`** — carries the full entity disclosure (Naxdor trading as
   WebAsk, Swedish org.nr, registered address, email). Required by the E-Commerce Regs and
   Provision of Services Regs; see [`03-uk-compliance.md`](03-uk-compliance.md) § A1. A
   condensed version also sits in the footer.
2. **A compliance content hub** in Phase 3 — either `/blog/topic/clinic-compliance` or a
   dedicated `/guides/*` section. Recommend starting as a **blog topic archive** (reuses the
   inherited `/blog/topic/[topic]` route, zero new engineering) and promoting it to a
   standalone resource hub only if it earns the traffic.

**Dropped from the old site:** `/portfolio` as a distinct concept (replaced by
`/case-studies`), and the digital-marketing service lines (SEM, social, CRO) that the
current site sells but the fork deliberately does not — see
[`00-overview.md`](00-overview.md) § Out of scope.

---

## 4. Slug rules

| Entity                    | Pattern                                                         | Example                                                      |
| ------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------ |
| Service                   | kebab-case keyword                                              | `web-development`, `crm-automation`, `ai-integration`        |
| **Location**              | **`[city]`** where unambiguous; **`[city]-[county]`** where not | `manchester`, `cheshire`, `leeds`, `newcastle-tyne-and-wear` |
| London boroughs _(later)_ | `[borough]-london`                                              | `shoreditch-london`                                          |
| Industry                  | kebab-case plural                                               | `aesthetic-clinics`, `dental-practices`                      |
| Case study                | `[outcome]-for-[client-or-industry]`                            | `3x-enquiries-for-a-cheshire-aesthetic-clinic`               |
| Blog post                 | kebab-case title, ≤ 60 chars                                    | `advertising-rules-for-uk-aesthetic-clinics`                 |
| Blog topic                | kebab-case noun                                                 | `clinic-compliance`, `local-seo`, `hubspot`                  |

> **Do not** carry over Naxdor's `[city]-[state-abbrev]` form (`austin-tx`). The UK has no
> equivalent, and it reads as an unlocalised US import to exactly the audience we're
> targeting.

---

## 5. The 301 map

Every legacy URL gets an explicit destination. Implemented in `next.config.ts`
`redirects()` with a typed map in `lib/redirects.ts` — **net-new code, not an inherited
pattern**: `d:\naxdor` has no `lib/redirects.ts` and no `redirects()` at all. Gated by
`scripts/check-redirects.ts` (static graph audit, CI, pre-build) and proved over real HTTP
by `e2e/redirects.spec.ts`.

### Rule 0 — ✅ CORRECTED 2026-07-27: **do NOT add a trailing-slash rule**

> This section previously prescribed a global catch-all whose source was `:path*` followed
> by a trailing slash. **That rule would have taken the homepage down.** It was never
> implemented; the corrected reasoning is below. Verified against the installed
> `next@16.2.7` source, and both failure modes are now regression-tested.

WordPress serves **trailing slashes** and the Next config leaves `trailingSlash` unset
(default `false`), so the concern was right — but Next already solves it. When
`trailingSlash` is false, Next **prepends its own redirect at index 0 of the `redirects()`
array**:

```js
// next/dist/lib/load-custom-routes.js, ~line 565
redirects.unshift({ source: "/:path+/", destination: "/:path+", permanent: true, internal: true });
```

So `/foo/` is 308'd to `/foo` **before any custom rule is consulted**. Three consequences:

1. **Never add the `:path*` catch-all.** `*` is _zero_-or-more, so it matches the **root**
   `/`, and Next renders the destination as the **empty string** — it emits `Location: ` on
   the homepage, which per RFC 3986 resolves back to `/`, looping forever
   (`ERR_TOO_MANY_REDIRECTS`). Next's built-in rule uses `:path+` (one-or-more) precisely so
   it cannot match the root.
2. **Write every `source` WITHOUT a trailing slash.** By the time custom rules are matched
   the slash is already gone, so a source ending in `/` is dead code.
3. **Therefore `/about/`, `/contact/` and `/blog/` get NO rule at all** — see the per-URL
   table below. Written slash-less they would be `from === to`, i.e. three infinite
   self-redirects on live pages.

`scripts/check-redirects.ts` asserts no source matches `/` and no source matches its own
destination, so neither mistake can be reintroduced. `e2e/redirects.spec.ts` asserts
`/` → 200 with zero redirects as an explicit regression test.

**Status codes.** `permanent: true` emits **308**, not 301, and Next's built-in first hop is
hard-coded to 308 — forcing `statusCode: 301` on our rules would produce an incoherent
308→301 chain for no benefit. Google treats 301 and 308 identically for canonicalisation and
PageRank. Read the discipline below as **"permanent, never temporary"** — never 302/307.

**Maximum 2 hops** on every inbound legacy URL (slash strip, then the rule).

### Per-URL map

Sources are written **without** the trailing slash (see Rule 0). "Built-in" means the rule
is Next's own slash strip — we write nothing.

| Legacy URL                                                     | → Target         | Type         | Rationale                                                                                                            |
| -------------------------------------------------------------- | ---------------- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `/`                                                            | `/`              | —            | Home to home. Must stay a 200 with zero redirects                                                                    |
| `/about/`                                                      | `/about`         | **built-in** | Differs only by the slash — a custom rule here would be `from === to` and loop                                       |
| `/contact/`                                                    | `/contact`       | **built-in** | As above                                                                                                             |
| `/blog/`                                                       | `/blog`          | **built-in** | As above                                                                                                             |
| `/about-my-agency/`                                            | `/about`         | 308          | Duplicate-intent post; consolidate                                                                                   |
| `/portfolio/`                                                  | `/case-studies`  | 308          | Concept replaced. Target self-hides while empty                                                                      |
| `/privacy-policy-2/`                                           | `/legal/privacy` | 308          | The `-2` suffix is a WP duplicate artefact                                                                           |
| `/uncategorized/`                                              | `/blog`          | 308          | Default WP category; no real taxonomy                                                                                |
| `/the-importance-of-seo-why-its-essential-for-online-success/` | `/services/seo`  | 308          | Thin generic post, retire. Redirect to the commercial page that serves the intent                                    |
| `/pricing-freelance-projects/`                                 | `/pricing`       | 308          | Closest intent match                                                                                                 |
| `/top-10-freelance-blogs/`                                     | `/blog`          | 308          | Off-topic for the new positioning; retire                                                                            |
| `/time-management-tips/`                                       | `/blog`          | 308          | Off-topic; retire                                                                                                    |
| `/sample-page/`                                                | —                | **410 Gone** | WordPress default artefact. Never existed as real content — a 410 is the honest status and gets it deindexed fastest |

**410s are served by route handlers**, not `redirects()`: Next's `allowedStatusCodes` is
`{301, 302, 303, 307, 308}` and rejects 410 at config validation, while `notFound()` emits
404 — which tells Google to retry for months. `app/sample-page/route.ts` and
`app/wp-{admin,content,includes,json}/[[...path]]/route.ts` share `lib/gone.ts`.

> 🚩 **Do NOT add `Disallow: /wp-*` to robots.** If crawling is blocked, Googlebot never
> sees the 410 and the URLs stay indexed indefinitely — the opposite of the intent.

### Discipline (inherited + migration-specific)

- **Permanent, never temporary** (308 or 301 — never 302/307). See Rule 0 on why 308.
- **Hold redirects ≥ 12 months.** Longer costs nothing.
- **Never soft-404.** `/sample-page/` gets a real 410, not a 200 with "not found" text.
- Custom, helpful 404 page linking home / services / contact.
- **GSC "Change of Address" does not apply** — the domain isn't changing, only the platform
  and URL shapes.
- **Crawl before you cut over.** Run Screaming Frog (or equivalent) against the live
  WordPress site and keep the export as the redirect bible. The sitemap lists 13 URLs, but
  WordPress commonly exposes more that never made the sitemap — attachment pages, author
  archives (`/author/…`), date archives (`/2020/10/…`), feed URLs (`/feed/`), tag archives,
  and paginated variants (`/blog/page/2/`). Add a catch-all rule for each family found.

### ✅ Live crawl performed 2026-07-28 — findings

Doc 04 § 5 said "crawl before you cut over". Done. **All 13 sitemap URLs still return 200** —
nothing has been retired on the WordPress side, so every redirect in the map is live-fire, not
theoretical. Four things turned up that the sitemap audit could not have shown:

| Found                                                                                   | Status today | Action taken                                                                                                                 |
| --------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `/sitemap_index.xml`, `/page-sitemap.xml`, `/post-sitemap.xml`, `/category-sitemap.xml` | **200**      | 301 → `/sitemap.xml`. `/sitemap.xml` currently 301s _to_ `/sitemap_index.xml`, so the index is the URL Google actually holds |
| `/blog/page/2/`                                                                         | **200**      | New family `/blog/page/:page*` → `/blog`. Our blog index has no pagination                                                   |
| `/wp-login.php`                                                                         | **200**      | **410** — live today and a constant credential-stuffing target                                                               |
| `/xmlrpc.php`                                                                           | **520**      | **410** — same                                                                                                               |
| `/author/admin/`, `/2020/10/`, `/category/uncategorized/`                               | 301          | Already covered by the family rules ✓                                                                                        |
| `/tag/seo/`, `/?p=1`                                                                    | 404          | Family rule kept anyway — harmless, and guards against a tag being added pre-cutover                                         |
| `/wp-json/`                                                                             | 200          | Covered by the `/wp-json` 410 prefix ✓                                                                                       |

> **`/wp-login.php` and `/xmlrpc.php` need `POST` handlers, not just `GET`.** Bots
> credential-stuff these with POST; a GET-only handler would let those fall through to the
> full not-found RSC tree on every probe.

**Suggested catch-all families to check for and redirect:**

| Pattern                                  | →           | Note                                     |
| ---------------------------------------- | ----------- | ---------------------------------------- |
| `/author/:slug*`                         | `/about`    | WP author archives                       |
| `/:year(\\d{4})/:path*`                  | `/blog`     | Date archives                            |
| `/tag/:slug*`                            | `/blog`     | Tag archives                             |
| `/category/:slug*`                       | `/blog`     | Category archives beyond `uncategorized` |
| `/feed`, `/:path*/feed`                  | `/blog`     | RSS endpoints                            |
| `/wp-content/:path*`, `/wp-admin/:path*` | 410 / block | Should not resolve post-migration        |

### Expected impact

Rankings typically fluctuate for **2–4 weeks** after a platform migration, then stabilise —
usually higher, because Core Web Vitals improve sharply. Some sources describe a 1–3 month
"Google dance". A correctly-implemented 301 passes the large majority of link equity.

Given the current site's authority is close to zero, the migration risk here is unusually
low. **The upside is asymmetric: the risk is small and the ceiling is much higher.**

**Post-cutover monitoring** (first 30 days, from the inherited measurement cadence):

- GSC Coverage — watch for unexpected 404s daily for the first week
- GSC Performance — impressions/clicks by page bucket
- Confirm every one of the 13 legacy URLs resolves 200 or 410 as intended (script it)

> 🚩 **Local `next start` is NOT proof.** Vercel runs the Next server in `minimalMode`,
> where it does **not execute redirects at all** — Vercel's edge proxy does, from the routes
> manifest (`...opts.minimalMode ? [] : fsChecker.redirects` in
> `next/dist/server/lib/router-utils/resolve-routes.js`). Local and production are two
> different engines reading the same build output. Re-run `e2e/redirects.spec.ts`' assertions
> against a **preview deployment** before pointing DNS, and again immediately after cutover.

- Resubmit `sitemap.xml`; request indexing on the key new pages

---

## 6. Navigation

### Header (desktop)

```
[WebAsk]  Services ▾  Industries ▾  Locations ▾  Case Studies  Pricing  Blog  [Get a quote]
```

- **Services** mega-menu: the 9 services in columns, each with 2–3 deliverable sub-bullets,
  plus an industries cross-link.
- **Industries** dropdown: aesthetic clinics · dental practices · beauty & wellness + "See all".
- **Locations** dropdown: the hand-crafted hubs + "See all locations".
- **Case Studies** hides from nav while `data/case-studies` is empty (inherited self-hiding
  behaviour) — a nav item leading to an empty page is worse than no nav item.
- Theme toggle (Light / Dark / System) lives in the header, per the inherited `nav-shell`.

### Header (mobile)

Hamburger → full-screen sheet, accordion sections, CTA pinned to the bottom safe-area.

### Footer — 5 columns + a UK legal row

1. **Services** — 9 links + "All services"
2. **Industries** — 3 + "All industries"
3. **Locations** — hubs + "All locations"
4. **Company** — About, Case Studies, Blog, Pricing, Contact
5. **Legal & Social** — Privacy, Terms, Cookies, **Company information**; social icons

**Bottom row (UK-specific, required):**

```
WebAsk is a trading name of Naxdor, an enskild firma registered in Sweden.
Org.nr <…> · Registered address <…> · <email>
[VAT number, if registration is required — see decision gate D2]
© 2026 WebAsk
```

Plus a persistent **"Cookie settings"** link so consent is re-obtainable (PECR).

> The current site's footer advertises "Our Clients" and "Our Partners" links. Do not carry
> those forward until there are real clients and real partners to list — an empty or
> fabricated page there is exactly the E-E-A-T failure documented in
> [`03-uk-compliance.md`](03-uk-compliance.md) § A6.

---

## 7. Breadcrumbs

Every non-home page renders a `<Breadcrumbs>` component **and** emits `BreadcrumbList`
JSON-LD. Positions sequential from 1, each with a non-empty name and an absolute URL —
asserted by the inherited `e2e/jsonld.spec.ts`.

- `/services/web-development` → Home › Services › Web Development
- `/services/web-development/manchester` → Home › Services › Web Development › Manchester
- `/industries/dental-practices` → Home › Industries › Dental Practices
- `/blog/[slug]` → Home › Blog › _(topic)_ › Post Title

---

## 8. Internal-linking discipline (inherited, hard-coded into templates)

| From               | Links to (required)                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| Home               | All 9 services (bento), 3 industries, the location hubs, 2 case studies, 2 blog posts              |
| Service detail     | All locations where offered, 1–2 related services, 2 relevant case studies, 1 relevant blog post   |
| Service × Location | Parent service, location hub, same service in 2–3 nearby cities, related services in this city     |
| Location hub       | All services, nearby locations, local case studies                                                 |
| Industry page      | Relevant services, relevant case studies, locations serving this vertical, 2–3 industry blog posts |
| Case study         | Services used, industry, location, 2 related case studies                                          |
| Blog post          | 1–3 relevant services + 1 related case study + 2 related posts                                     |
| Footer (sitewide)  | Compact sitemap: services, locations, industries, company, legal                                   |

Implemented via the shared `CrossLinkGrid` component inherited from Naxdor Phase 2.

**Anti-cannibalisation:** the `<title>` and `<h1>` of any two URLs must target distinct
primary keywords. `data/keywords.json` maps each keyword → one canonical URL; CI lints it.

---

## 9. Sitemap structure

`app/sitemap.ts` returns the index at `/sitemap.xml`, with sub-sitemaps:

- `/sitemap-pages.xml` — static marketing pages
- `/sitemap-services.xml` — 9 services + index
- `/sitemap-locations.xml` — hubs + service × location
- `/sitemap-industries.xml` — industries + industry × location
- `/sitemap-blog.xml` — posts + topic archives
- `/sitemap-case-studies.xml` — case studies + index

Each URL carries a real `lastmod` (frontmatter `updatedAt` or file mtime). Google largely
ignores `priority`/`changefreq`; accurate `lastmod` is what drives recrawl.

**Only indexable URLs appear.** Programmatic pages staged `noindex` are excluded until
promoted.

---

## 10. Robots

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

Sitemap: https://webask.co.uk/sitemap.xml
```

No bot-specific blocks (`GPTBot`, `CCBot`) — visibility in AI search surfaces is deliberate
strategy, inherited from Naxdor and reinforced by the UK data in doc 02 (ChatGPT and Copilot
run on the Bing index and are the #2 AI surface in the UK).
