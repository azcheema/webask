# 05 — Site structure

> Purpose: URLs, navigation, link mesh, schema and staging. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1) and
> **finalised in S6 on 25 September 2026** against the code as read that day and the URL set in
> `keywords-draft.json`. Every sitemap row, nav change and schema node here is a proposal for the
> brainstorm (D13) and the build (`11`); the three items marked **finding** are what the code does
> today.

## 1. Taxonomy and navigation (planning § 4.3; confirmed `02` § 6)

**Build / Grow / Automate & run** — reuses the process vocabulary already on the home page, splits
6/6/4 into the existing three-column mega-menu, and separates project cadence from monthly cadence.
Build: Web Development · E-Commerce · Web Applications · Mobile Apps · UI/UX Design · Landing Pages.
Grow: SEO · Google Business Profile · Review Management · Missed-Call Text-Back · AI Receptionist ·
Email & SMS Marketing. Automate & run: Local Business Plans (highlighted) · CRM Automation · AI
Integration · Maintenance. Rejected: Capture/Convert/Retain (orphans Web Apps, Mobile, UI/UX,
Maintenance). Footer becomes six columns at `lg` (three service groups + Industries + Locations +
Company). **Vocabulary rule:** "local" only ever describes the customer ("UK local businesses",
"delivered remotely, anywhere in the UK"); never "your local agency", "near you", "based in".

**D13 confirmed 25 September 2026** (`00` § 6): the grouping, the label "Automate & run", the bundle's
highlight and the name Local Business Plans, as above.

**The grouped `SERVICE_NAV` proposal** — labels, hrefs and the ≤ 12-word descriptions, the
`SERVICE_CATEGORIES` constant with its three blurbs, the `/services` index constants and the CTA-band
rewrite — is drafted string by string in `09-content-drafts/index-and-nav.md`; the derivation from
the catalogue (`SERVICE_NAV_GROUPS` from `liveServices` and `getServicesByCategory`) is `11` AE.7.
Its consequences, read from the components on 25 September 2026:

| Surface                | Today (verified)                                                                                                                                                       | Change                                                                                                                                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop mega-menu      | `<MegaMenu section={SERVICE_NAV} cols={3} />` (`components/layout/site-header.tsx` L70) lays a flat nine-item list across three columns                                | The three columns become the three groups, each with its label as a column heading; the menu takes `SERVICE_NAV_GROUPS` rather than slicing a flat list. 6/6/4 fits the existing `md:grid-cols-3`                                     |
| Footer                 | `grid-cols-2 sm:grid-cols-4` with Services, Industries, Locations, Company as the four columns (`site-footer.tsx` L23–26, L45)                                         | Six columns at `lg` (Build · Grow · Automate & run · Industries · Locations · Company); two on mobile, three at `sm`; the brand block on its own row above. A sixteen-item single Services column would be the alternative — rejected |
| Mobile drawer          | `Accordion` with one Services section (`mobile-nav-panel.tsx` L65–66)                                                                                                  | The Services accordion gains the three group sub-headings in the same order; no new component                                                                                                                                         |
| Unbuilt-route handling | `isBuiltRoute` renders any nav entry not in `BUILT_ROUTES` as a non-interactive label (`_nav-data.ts` L173–217)                                                        | Unchanged, and irrelevant to drafts: a `status: "draft"` service is excluded from the nav at the data layer (§ 7), so the label mechanism only ever sees live routes                                                                  |
| `/services` index      | H1 "Nine services…", a flat grid, `See {service.name.toLowerCase()}` on every card, `PricingTable` gated by `builtSlugs` (`app/(marketing)/services/page.tsx` L88–116) | Grouped grid with the three category intros (`12` M.8), the count-free H1 and meta from `02` I.9, no lowercasing (`11` AE.6)                                                                                                          |
| Service marquee        | icon keys hand-listed (`components/marketing/service-marquee.tsx` L19–29)                                                                                              | Seven new sprite symbols; icon key read from the catalogue (`11` AE.7)                                                                                                                                                                |

## 2. Sitemap delta (S6, 25 September 2026)

Silos are doc 08 § 1's. "Indexable at launch?" is the state on the day the route first exists;
"03 URL set" is whether the URL appears in `keywords-draft.json` as a `primaryUrl` (with the
primary · primary-plus-supporting row counts from `private/tools/shape.mjs`, 25 September 2026), as a
`supportingUrls` entry only, or not at all — in which case the row says why the URL is still right
(a support page, an existing head, or a route that exists only in code). Every row below satisfies
that acceptance test; § 10 records the script's diff.

### 2.1 New URLs

| URL                                             | Type                    | New/Changed | Silo            | Indexable at launch?                                                                                                                                                                                                                                                                                                         | 03 URL set                                                                                                           |
| ----------------------------------------------- | ----------------------- | ----------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `/services/missed-call-text-back`               | Service page (monthly)  | New         | 1 Services      | No — ships `status: "draft"` → `noindex`; flips live in the commit that carries its boundary edits and `BUILT_ROUTES` entry                                                                                                                                                                                                  | primary (7 · 16)                                                                                                     |
| `/services/review-management`                   | Service page (monthly)  | New         | 1 Services      | No — as above                                                                                                                                                                                                                                                                                                                | primary (7 · 12)                                                                                                     |
| `/services/ai-receptionist`                     | Service page (monthly)  | New         | 1 Services      | No — as above; six live rows re-point to it the same day (§ 3)                                                                                                                                                                                                                                                               | primary (8 · 14)                                                                                                     |
| `/services/email-sms-marketing`                 | Service page (monthly)  | New         | 1 Services      | No — as above                                                                                                                                                                                                                                                                                                                | primary (10 · 12)                                                                                                    |
| `/services/landing-pages`                       | Service page (project)  | New         | 1 Services      | No — as above                                                                                                                                                                                                                                                                                                                | primary (5 · 10)                                                                                                     |
| `/services/google-business-profile`             | Service page (monthly)  | New         | 1 Services      | No — as above                                                                                                                                                                                                                                                                                                                | primary (7 · 11)                                                                                                     |
| `/services/local-business-plans`                | Bundle page             | New         | 1 Services      | No — as above; last of the seven to flip, after every component page is live (`11` § 2)                                                                                                                                                                                                                                      | primary (8 · 12)                                                                                                     |
| `/blog/topic/local-marketing`                   | Topic archive           | New         | Blog (→ Silo 1) | No — the topic route renders `noindex` while it has no published post (`app/(marketing)/blog/topic/[topic]/page.tsx` L41–50)                                                                                                                                                                                                 | support page (the topic anchor for `local-business-plans`)                                                           |
| `/blog/topic/clinic-compliance`                 | Topic archive           | New         | 4 Compliance    | No — as above. **Finding:** `data/blog.ts` defines `seo`, `ai`, `crm`, `web-development` and `industry` only; 37 live rows in `data/keywords.json` name this URL as their `primaryUrl` (count of 25 September 2026), so the route the file points at does not exist. `11` AE.8 adds it in the same edit as `local-marketing` | support page (targeted by live rows, not by the draft)                                                               |
| `/blog/missed-call-text-back-uk-rules`          | Post (calendar #1)      | New         | 4 / Blog        | No — `draft: true` until its anchor page is live                                                                                                                                                                                                                                                                             | primary (4 · 7)                                                                                                      |
| `/blog/google-reviews-dmcc-act-uk`              | Post (#2)               | New         | 4 / Blog        | No — as above                                                                                                                                                                                                                                                                                                                | primary (6 · 7)                                                                                                      |
| `/blog/ai-receptionist-uk-rules-costs`          | Post (#3)               | New         | 4 / Blog        | No                                                                                                                                                                                                                                                                                                                           | primary (9 · 9)                                                                                                      |
| `/blog/appointment-reminder-texts-pecr`         | Post (#4)               | New         | 4 / Blog        | No                                                                                                                                                                                                                                                                                                                           | primary (2 · 2)                                                                                                      |
| `/blog/google-business-profile-suspended-uk`    | Post (#5)               | New         | Blog            | No                                                                                                                                                                                                                                                                                                                           | primary (3 · 4)                                                                                                      |
| `/blog/database-reactivation-uk-lawfully`       | Post (#6)               | New         | 4 / Blog        | No                                                                                                                                                                                                                                                                                                                           | primary (2 · 3)                                                                                                      |
| `/blog/landing-page-or-website-small-business`  | Post (#7)               | New         | Blog            | No                                                                                                                                                                                                                                                                                                                           | primary (5 · 5)                                                                                                      |
| `/blog/cma-vets-order-practice-website`         | Post (#8)               | New         | 4 / Blog        | No — and not before doc 03 § B10 lands                                                                                                                                                                                                                                                                                       | primary (5 · 5)                                                                                                      |
| `/blog/missed-calls-trades-divert-text-back`    | Post (#9)               | New         | 4 / Blog        | No — and not before the trades page                                                                                                                                                                                                                                                                                          | not in the set — the post's terms sit on the trades page and post #1; S7 assigns its own row or merges it (`12` § 4) |
| `/blog/hosted-crm-vs-own-account-leaving`       | Post (#10)              | New         | Blog            | No                                                                                                                                                                                                                                                                                                                           | primary (1 · 1)                                                                                                      |
| `/blog/whatsapp-uk-small-business-rules-2026`   | Post (#11)              | New         | 4 / Blog        | No                                                                                                                                                                                                                                                                                                                           | primary (3 · 3)                                                                                                      |
| `/blog/gohighlevel-uk-local-business-gbp-cost`  | Post (#12)              | New         | Blog            | No — and not before `07`'s FX band is final                                                                                                                                                                                                                                                                                  | primary (5 · 6)                                                                                                      |
| `/blog/google-review-removal-uk-rules`          | Post (#13, proposed S6) | New         | 4 / Blog        | No — a proposal; S7 accepts or drops it with its row                                                                                                                                                                                                                                                                         | primary (1 · 1)                                                                                                      |
| `/blog/ai-receptionist-vs-answering-service-uk` | Post (#14, proposed S6) | New         | Blog            | No — as above; takes the live row `ai receptionist vs answering service uk` (§ 3)                                                                                                                                                                                                                                            | not in the draft — its term is a live row, re-pointed on the day the post exists                                     |
| `/blog/sales-funnel-or-landing-page-uk`         | Post (#15, proposed S6) | New         | Blog            | No — as above                                                                                                                                                                                                                                                                                                                | primary (1 · 1)                                                                                                      |
| `/blog/check-google-maps-ranking-uk`            | Post (#16, proposed S6) | New         | Blog            | No — as above                                                                                                                                                                                                                                                                                                                | primary (2 · 2)                                                                                                      |
| `/blog/missed-call-text-back-tools-uk-compared` | Post (#17, proposed S6) | New         | Blog            | No — as above; second wave                                                                                                                                                                                                                                                                                                   | primary (1 · 1)                                                                                                      |
| `/industries/veterinary-practices`              | Industry page           | New         | 2 Industries    | No — gated on doc 03 § B10 (drafted in `08` § 2.1), the L.2.2 deep dive re-read, and D12                                                                                                                                                                                                                                     | primary (2 · 3)                                                                                                      |
| `/industries/trades-home-services`              | Industry page           | New         | 2 Industries    | No — gated on § B11 and D12; `VERTICAL_ENUM` gains the value in the same commit as its first row                                                                                                                                                                                                                             | primary (5 · 6)                                                                                                      |
| `/industries/garages-mot-centres`               | Industry page           | New         | 2 Industries    | No — gated on § B12 and D12                                                                                                                                                                                                                                                                                                  | primary (2 · 3)                                                                                                      |

### 2.2 Changed URLs

| URL                                   | Type          | New/Changed                                                                                                                           | Silo | Indexable at launch? | 03 URL set                                      |
| ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---- | -------------------- | ----------------------------------------------- |
| `/services`                           | Pillar        | Changed — grouped grid, count-free H1 and meta, CTA band (`02` I.9; `12` M.8)                                                         | 1    | Yes (already)        | support page (the pillar)                       |
| `/pricing`                            | Proof & trust | Changed — the Plans block (`07` § 5), count-free copy, the hosted-plan payment-terms line; the bundle as one row at the Answer figure | 5    | Yes                  | supporting (0 · 4)                              |
| `/`                                   | Home          | Changed — the CRM teaser's appended sentence; the AI teaser per Q21; the "9" stat derived (`02` I.8–I.9)                              | —    | Yes                  | support page                                    |
| `/contact`                            | Proof & trust | Changed — the form's service options derived from `liveServices` (`11` AE.7)                                                          | 5    | Yes                  | support page                                    |
| `/industries`                         | Pillar        | Changed — three cards as the wave-1 pages ship                                                                                        | 2    | Yes                  | support page (the pillar)                       |
| `/services/crm-automation`            | Existing head | Changed — L509, L512, FAQ L530–532 and L545–547; MDX L74 and L84 (`02` I.8)                                                           | 1    | Yes                  | supporting (0 · 1)                              |
| `/services/seo`                       | Existing head | Changed — L371, L374; MDX L20; a priced "packages" section if D13 opens it (`02` § 2.2)                                               | 1    | Yes                  | primary (5 · 5)                                 |
| `/services/ai-integration`            | Existing head | Changed — L559, L579; a new MDX paragraph after L30; L80                                                                              | 1    | Yes                  | supporting (0 · 1)                              |
| `/services/web-development`           | Existing head | Changed — FAQ L102–104; MDX L52                                                                                                       | 1    | Yes                  | supporting (0 · 1)                              |
| `/services/maintenance-support`       | Existing head | Changed in data only — gains `category` and `status: "live"`; L642 kept                                                               | 1    | Yes                  | existing head (no draft row; its rows are live) |
| `/industries/aesthetic-clinics`       | Existing head | Changed — MDX L85–87; `relatedServiceSlugs` gains text-back, review-management, seo (§ 3)                                             | 2    | Yes                  | existing head (its rows are live)               |
| `/industries/dental-practices`        | Existing head | Changed — MDX L67; `relatedServiceSlugs` gains review-management and text-back                                                        | 2    | Yes                  | primary (2 · 2)                                 |
| `/industries/beauty-wellness-clinics` | Existing head | Changed — MDX L59–61, L79–81, L98; `data/industries.ts:237`; `relatedServiceSlugs`                                                    | 2    | Yes                  | existing head (its rows are live)               |
| `/legal/privacy`                      | Legal         | Changed later — the processing list gains the hosted (processor) role and the named AI providers (`08` A8); waits on D3 and D10       | —    | No (`draft` today)   | support page                                    |
| `/legal/company-information`          | Legal         | Unchanged                                                                                                                             | —    | Yes                  | —                                               |

### 2.3 Programmatic candidates (not at launch; the city-swap test applied)

| URL pattern                                                            | Verdict                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/services/google-business-profile/[location]`                         | **Candidate.** The one new service with a genuine local angle: the work is per premises, and `google business profile management near me` drew a local pack (`serp-0107`). Ships `noindex, follow` under the inherited gate (≥ 600 words, uniqueness, links resolve, JSON-LD, an area-named opening, ≥ 3 local FAQs — `data/service-locations.ts` header); competes in the blue links only (D1) |
| `/services/email-sms-marketing/[location]`                             | **Candidate, low priority.** `email marketing agency near me` drew a pack too (`serp-0108`), but the service is delivered identically anywhere; a city variant must argue a local list, a local sector or a local regulator or it is the city-swap anti-pattern                                                                                                                                 |
| text-back, receptionist, reviews, landing pages, the bundle × location | **No.** The near-me SERPs for text-back and the receptionist returned the national SERP with no pack (`serp-0105`, `serp-0106`); the rest are national product intent. A location variant would be the anti-pattern doc 06 § Phase 2 warns against                                                                                                                                              |

**Derived file:** `app/sitemap.ts` hard-codes the nine service routes (L33–41); `11` AE.7 replaces
them with `liveServices`, so a draft service never enters the sitemap and a live one enters in the
commit that flips it. Topic archives already self-hide while empty; posts enter only when
`draft: false` (existing behaviour, `sitemap.ts` L61–66).

## 3. Keyword re-points and enums (planning § 4.5; confirmed and amended by `03` § 8)

- **Move to `/services/ai-receptionist` on the day the page is live:** `ai receptionist uk`,
  `ai receptionist for uk business`, `ai phone answering service uk`, `ai call answering for small
business uk`, and the two `ai … answering` rows — confirmed by the SERP shape (a product-and-service
  SERP, not a bespoke-build one; `03` § 6.3, § 8). The two `ai voice agent` rows stay on
  `ai-integration` (bespoke wording); the clinic and dental receptionist rows stay on their industry
  heads (clinics are M1 on the bespoke build). **Amended in S6:** `ai receptionist vs answering
service uk` does **not** move to the service page — `03` § 1 step 4 sends every `vs` term to a
  comparison or blog URL, so it re-points to the proposed post #14 with the service page as its
  supporting URL; until that post exists the row stays where it is.
- **`gohighlevel pricing uk`** moves to `/blog/gohighlevel-uk-local-business-gbp-cost` with the bundle as
  its supporting URL, not to the bundle itself (`03` § 8, confirmed on Google `serp-0061`);
  `gohighlevel pricing in gbp` stays on `/blog/topic/crm`. All agency/expert/setup/migration/
  white-label/snapshot rows stay on `crm-automation` (`gohighlevel consultant uk` is High on a Set A
  SERP and the existing row keeps it).
- **New cluster values for `CLUSTER_ENUM`:** `lead-recovery`, `reviews`, `ai-receptionist`,
  `email-sms`, `landing-pages`, `local-listings`, `local-plans` — 88 of the 118 draft rows sit on
  one of them (`shape.mjs`, 25 September 2026), which is why the file is not mergeable until `11`
  AE.8 lands. `VERTICAL_ENUM` grows only as an industry page ships: `veterinary-practices`,
  `trades-home-services`, `garages-mot-centres` (14 draft rows), each added in the same commit as
  its first row, with the `home-services` note in `scripts/check-keywords.ts` L77–80 kept true until
  the trades page exists.
- **Industry `relatedServiceSlugs`** (2-up grid, even counts, only where core): aesthetic → add
  text-back + review-management + seo, drop ui-ux; dental → add review-management + text-back; beauty →
  add email-sms + review-management + ai-receptionist + GBP. The new industry entries' lists are in
  their catalogue drafts (six each). Related pairs per new service are in the catalogue drafts; the
  three existing updates are `02` I.8 (crm-automation → email-sms + ai-integration; seo → GBP +
  web-development; ai-integration → ai-receptionist + crm-automation).

## 4. Link mesh per page type (doc 08 § 1 rules applied to the new line)

| Page type                       | Up (always)                       | Down                                                          | Lateral (free, in silo)                                                                                                               | Cross-silo (deliberate, sparse)                                                                                                                                                               | Never                                                                                                                                                                        |
| ------------------------------- | --------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New service page                | `/services` (breadcrumb + footer) | —                                                             | its two `relatedServiceSlugs` (the "Keep exploring" grid); its limit section names the sibling that owns the excluded job; the bundle | the industry pages whose `relatedServiceSlugs` include it (rendered by `getIndustriesForService`, `[service]/page.tsx` L81); its cluster posts; `/pricing`, `/contact`, `/process` as support | a location hub; a competitor; `naxdor.com`                                                                                                                                   |
| Bundle page                     | `/services`                       | every component page (each tier names its `componentSlugs`)   | `crm-automation` as the owned alternative                                                                                             | the industry pages' service grids; posts #4, #10, #12; `/pricing` (the Plans block links back)                                                                                                | component keywords in its own copy (`03` § 8)                                                                                                                                |
| Existing service page (changed) | `/services`                       | —                                                             | the boundary sentence to the new sibling (`02` I.8, one link per rewrite)                                                             | unchanged                                                                                                                                                                                     | a second link to the same sibling in the same section                                                                                                                        |
| Industry page (new)             | `/industries`                     | —                                                             | the two clinic-adjacent industry pages where a rule is shared (GDC ↔ reviews)                                                         | its `relatedServiceSlugs` grid (six); its doc 03 Part B section's post (#8, #9); the bundle                                                                                                   | a location hub except through the existing `CrossLinkGrid` rule                                                                                                              |
| Post under `local-marketing`    | `/blog` and the topic archive     | —                                                             | its sibling posts in the cluster                                                                                                      | its anchor service page (the topic's `anchorServiceSlug`, existing behaviour for `crm`, `seo`, `ai`); an industry page where the post is industry-shaped (#8, #9 → the topic is `industry`)   | a service page it does not argue for; the doc 08 rule "Compliance → Industry, never → Service" is Silo 4's (`clinic-compliance`) and does not govern a service-cluster topic |
| Topic archive                   | `/blog`                           | every published post in the topic                             | —                                                                                                                                     | the anchor service page                                                                                                                                                                       | —                                                                                                                                                                            |
| `/pricing`                      | `/`                               | every live service page; the bundle page from the Plans block | —                                                                                                                                     | —                                                                                                                                                                                             | a tier figure typed by hand (`09/deltas.md`)                                                                                                                                 |

Per-page inbound and outbound lists, with counts, are `12` § 3 (≥ 3 each, checked there).

## 5. JSON-LD

**Finding (code read 25 September 2026).** The service page emits `WebPage` + `Service` (with one
`Offer` and a `UnitPriceSpecification`) + `BreadcrumbList` + `FAQPage` (`app/(marketing)/services/[service]/page.tsx`
L102–121). `serviceNode` (`lib/jsonld.ts` L283–311) takes no cadence and hard-codes
`unitText: "starting price per project"` (L302), while the location variant's helper already
branches on cadence (L499). So the two existing monthly services (`seo` and `maintenance-support`)
describe their monthly figure as "per project" today — a live inaccuracy that the new line would
multiply by six. `11` AE.3's `unitTextFor(cadence)` fixes it for all eight monthly pages at once.

Proposals (all in `11` AE.3; validate in the Rich Results Test at implementation):

1. **`unitText` by cadence** on every `Service` node — "starting price per month" / "starting price
   per project" — with the page passing `service.pricing.cadence`.
2. **A second set-up `Offer`** (`unitText: "one-off set-up fee"`) emitted only when
   `pricing.setupAmount` exists, so the two-part price in the card (`07` § 6.1) and the schema agree;
   this is the reason the typed `setupAmount?` field is preferred to the `priceNote` workaround.
3. **The bundle:** the `Service` node gains `hasOfferCatalog` → an `OfferCatalog` of one `Offer` per
   tier (Answer, Reputation, Follow-Up), each with `url: /services/local-business-plans#<tier>` and
   the monthly `unitText`; the AI module as a fourth `Offer` only if the brainstorm keeps it on the
   page as a priced line. `/pricing` keeps its own graph; the Plans block adds no schema there.
4. **`usageNote` is never a price node** — minutes and messages are an allowance and a schedule,
   stated in prose (R29, R39), not a `UnitPriceSpecification`.
5. **`knowsAbout` additions** to the Organisation node (`lib/jsonld.ts` L142–169), one per shipped
   page and never before it: "Google Business Profile" (profile page); "Ofcom" (receptionist and
   number rules); "Consumer Contracts (Information, Cancellation and Additional Charges) Regulations
   2013", "Consumer Rights Act 2015" and "Gas Safe Register" (trades page); "Veterinary Services
   Market Investigation Order 2026" (vets page); "The Motor Ombudsman" (garages page). PECR, the CMA,
   the DMCC Act and UK GDPR are already there.
6. **`Person` node** for the founder byline exists (`personNode`, L627); every post carries it.
7. **`rel="sponsored"` is a code touch, and nothing handles it today. Finding:** the MDX anchor
   mapping renders external links as `<a href target="_blank" rel="noopener noreferrer" {...props}>`
   (`components/mdx/mdx-components.tsx` L28); markdown link syntax cannot carry a `rel`, so an
   affiliate link needs either an `AffiliateLink` component or a URL rule in the mapping. Only if
   D11 = yes; until then no affiliate link exists on the site (R40).
8. **`FAQPage` strings stay plain text** — the catalogue FAQs and the `/pricing` FAQs surface in a
   SERP without the page around them, which is why `data/*.ts` copy is sales copy under every rule
   (CLAUDE.md).

## 6. Programmatic scope

Only `google-business-profile` has a genuine local angle, and `email-sms-marketing` at most a weak
one (§ 2.3). Both wait for the first UK programmatic batch (Phase 2) and the inherited indexation gate,
and neither is a launch item. The evidence that decides it is the near-me set: two service heads
where WebAsk leads returned no local pack (`serp-0105`, `serp-0106`), so a city variant of those pages
would add nothing a searcher is served locally; the profile and email heads did draw a pack
(`serp-0107`, `serp-0108`), which is the demand D1 forgoes and the only place a city variant could
earn its uniqueness.

## 7. Staging

- **Finding:** services have no `draft` flag today, and the `/services` grid maps every catalogue
  entry to a `<Link>` with no `BUILT_ROUTES` check (`app/(marketing)/services/page.tsx` L88–101);
  only the `PricingTable` receives `builtSlugs` (L116). A catalogue entry therefore links from the
  grid the moment it exists, whether or not its route does.
- **Proposal:** a `status: "draft" | "live"` catalogue field (`11` AE.1). `draft` prerenders the page
  when its MDX exists but renders `noindex`, and is excluded from the nav, the sitemap, the grid, the
  pricing table and the contact form through `liveServices`. The exclusion is at the data layer, not
  the route layer, because the grid is not built-aware. `BUILT_ROUTES`, the `e2e/a11y.spec.ts` route
  list and the `.lighthouserc.cjs` URL list stay hand-maintained and gain each route in the commit
  that flips it (`11` AE.8).
- **Order:** the model change with no visible change → the grouped nav → one service per commit as a
  draft, flipped live with its boundary edits → the bundle → industry pages after their doc 03
  sections (`11` § 2). `/services` never links to a 404 because a draft is never in the grid.
- **Slugs are settled once.** The seven service slugs, three industry slugs and topic slug in § 8;
  the twelve post slugs in `09-content-drafts/blog/calendar.md`; the five proposed post slugs in
  § 2.1. `google-business-profile` keeps Google's product name in full (Q19; the abbreviation is
  ambiguous on `serp-0081`).

## 8. Slugs and titles (settled; counts by script, 25 September 2026)

Titles are counted without the ` · WebAsk` suffix the layout appends; budget 51. Metas are counted
in full; budget 140–160.

| Slug                      | Title                                               | Chars | Meta chars                       |
| ------------------------- | --------------------------------------------------- | ----- | -------------------------------- |
| `missed-call-text-back`   | Missed-Call Text-Back Service for UK Businesses     | 47    | 146                              |
| `review-management`       | Google Review Management for UK Businesses          | 42    | 147                              |
| `ai-receptionist`         | AI Receptionist for UK Small Businesses             | 39    | 149                              |
| `email-sms-marketing`     | Email Marketing Agency UK — Email & SMS Plans       | 45    | 151                              |
| `landing-pages`           | Landing Page Design UK — One Page, One Job          | 42    | 143                              |
| `google-business-profile` | Google Business Profile Management UK               | 37    | 149                              |
| `local-business-plans`    | Local Business Plans: Marketing Run for You         | 43    | 157                              |
| `veterinary-practices`    | Vet Practice Websites for the CMA Order 2026        | 44    | 150                              |
| `trades-home-services`    | Websites and Missed-Call Recovery for UK Trades     | 47    | 143                              |
| `garages-mot-centres`     | Websites and Reminders for UK Garages & MOT Centres | 51    | 156                              |
| `local-marketing` (topic) | label "Local business marketing"                    | —     | ≤ 160, drafted with the calendar |

The bundle meta was recorded as 154 in the pasted skeleton and counts 157 — corrected in `12` M.7.
The garages title sits exactly on the budget. The 12 post titles are counted by `counts.mjs` in S7.

## 9. Derived surfaces (from `11` AE.7)

`components/layout/_nav-data.ts` — `SERVICE_NAV_GROUPS` from the catalogue, `SERVICE_NAV.items`
flattened for consumers that expect a list · `app/sitemap.ts` — `SERVICE_ROUTES` from `liveServices`
· `lib/contact-schema.ts` — `SERVICE_OPTIONS` from `liveServices` plus "Not sure / multiple" ·
`components/marketing/service-marquee.tsx` — icon keys from the catalogue, seven new symbols ·
`data/copy/home.ts` L180 — the stat from `liveServices.length` or replaced (Q21) · `data/blog.ts` —
the `local-marketing` topic and the missing `clinic-compliance` topic in one edit.

## 10. Acceptance (S6)

Run on 25 September 2026: `node private/tools/urlset.mjs` diffs every URL in § 2 against the
`primaryUrl` and `supportingUrls` sets of `keywords-draft.json`. **Result:** 46 URLs in § 2; 27
draft `primaryUrl`s and 20 `supportingUrls` (a union of 32). In the draft but not in § 2: one —
`/blog/topic/seo`, a supporting URL only, an existing topic archive that this line does not change.
In § 2 but not in the draft: fifteen, each explained in its row — the six support pages (`/`,
`/services`, `/industries`, `/contact`, the two legal pages), the two topic archives, the three
existing heads whose rows are live (`maintenance-support`, `aesthetic-clinics`,
`beauty-wellness-clinics`), the two programmatic candidates (route patterns, D1), post #9 (no row
of its own — S7 assigns or merges), and the proposed post #14 (its term is a live row that re-points
when the post exists). The acceptance holds: every URL is in `03`'s set or marked.

## Sources

`[Sxx]` keys resolve in `10-sources.md`. The SERP records are `serp-log.json` [S157]; the code
facts are the working tree as read on 25 September 2026 (file and line named at each).
