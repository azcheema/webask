# Phase 2 — Services, Locations, Industries

> **Timeline:** Week 4–5
> **Status:** **Complete (shipped/closed 2026-06-19)** · **Depends on:** Phase 1 live ✓
> **Outcome:** Complete service catalog + first location and industry pages + first programmatic city pages.

---

## Goal

Build the full service catalog, ship the first hand-crafted location hubs, launch the three primary industry pages (aesthetic clinics, dental practices, beauty/wellness clinics), and stand up the programmatic city × service template with a small batch of indexed pages.

After Phase 2, Naxdor ranks (or is positioned to rank) for service, vertical, and geo combinations.

---

## In scope

- 8 remaining service detail pages (E-commerce Development, Web App / Custom Software, UI/UX Design, SEO, Mobile App, CRM Automation + Migrations, AI Integration with 3 sub-sections, Maintenance & Care Plans)
- 2–3 hand-crafted location hubs (`/locations/[city]-[state]`)
- 3 industry pages: aesthetic clinics, dental practices, beauty/wellness clinics
- `/services/[service]/[location]` programmatic template
- 6–10 programmatic city pages, manually reviewed and promoted to `index, follow`
- Internal-linking pass connecting services ↔ locations ↔ industries
- **Portfolio strip content** (carried from Phase 1, close-out #9) — 3–6 real founder prior-work entries + screenshots
- HubSpot Solutions Partner application submitted
- GoHighLevel Affiliate application submitted

---

## Out of scope

- More than ~10 programmatic pages → Phase 4 scale-up
- Industry × location matrix → Phase 4+
- Case studies → Phase 3
- Blog → Phase 3
- CRM lead-routing → Phase 4

---

## Tasks

### Resolve open decisions (must precede builds)

- [x] **Top metros chosen** (2–3 for hand-crafted hubs). **DONE** (feat: location-hubs) — **Austin TX, Dallas TX, Miami FL** (the default candidates; heavy med-spa + GHL markets), slugs `austin-tx` / `dallas-tx` / `miami-fl`.
- [x] **City list for first programmatic batch** (6–10 city × service combinations). **DONE** (feat: programmatic-service-locations) — locked with the user 2026-06-19: **CRM + SEO + Web Development × Austin TX / Dallas TX / Miami FL = 9 pages**. Chosen so the 3 already-enriched metros need no new city research; uniqueness comes from weaving that enrichment with service-specific copy. The 3 services are the differentiators (CRM) + the two highest-intent local plays (SEO, Web Dev).

### Content (write before coding)

- [x] Copy for each of **8 remaining service pages** — full template per Phase 1's web-dev page. **DONE — all 9 services now live.** Shipped one-at-a-time then a final batch: e-commerce (#78), web-applications (#79), ui-ux-design (#80), seo (#81), and mobile-apps + crm + ai-integration + maintenance (#82). _Canonical slugs are per `data/services.ts` — the stale slugs in the sub-bullets below (`crm-automation`/`ecommerce-development`/`web-app-development`/`maintenance-support`) were **not** used; actual: `crm`/`e-commerce`/`web-applications`/`maintenance`._ Notable scopes (all satisfied):
  - **`/services/ai-integration`** ✓ — three named H2 sub-sections (AI Voice Agents, AI Chatbots & Assistants, AI Workflow Automation); copy kept vendor-neutral (no model/provider names).
  - **`/services/crm`** ✓ — named CRM migrations sub-section (ActiveCampaign→GHL, HubSpot→GHL, Pipedrive/Salesforce/Mailchimp/Keap).
  - **`/services/maintenance`** ✓ — tiered Care Plans published as **From $750 / $1,500 / $3,000** (Essential/Growth/Priority). The doc's earlier Bronze/Silver/Gold $300/$800/$2,000 were illustrative and predated the founder-locked $750/mo floor; replaced after market research (user-approved 2026-06-18).
  - **`/services/e-commerce`** + **`/services/web-applications`** ✓ — full standalone service pages.
- [x] Hand-crafted location-hub copy for each chosen metro (5–8 paragraphs of genuinely local content). **DONE** (feat: location-hubs) — MDX bodies 939 / 923 / 940 words (all > the ≥800 bar); city-specific (local economy, neighborhoods, search dynamics), **honest about remote-first delivery — no claimed local office, no invented clients/stats** (E-E-A-T rule).
- [x] Industry page copy: aesthetic clinics, dental practices, beauty/wellness clinics — each lead with vertical-specific pain. **DONE** (feat: industry-pages) — MDX bodies 1011 / 937 / 898 words, all > the ≥800 acceptance bar; AI-drafted for founder review, no fabricated stats/case-studies.
- [x] Local FAQs for each location (3–5 per page). **DONE** (feat: location-hubs) — 5 local FAQs per hub in `data/locations.ts` → `FaqAccordion` + `FAQPage` JSON-LD (remote-delivery / cost / local SEO / industries / timezone).
- [ ] **Portfolio strip content (carried from Phase 1, close-out #9)** — fill `data/portfolio.ts` with 3–6 real founder prior-work entries (title + 1-line outcome + role + link) and drop 16:10 ≥1280px screenshots at `public/portfolio/*.png`. The `PortfolioStrip` component + TODO-gating already shipped in Phase 1 and self-hides until ≥1 real entry lands — so this is pure content, no component work. Lights up the home + About strip automatically once filled. **→ CARRIED to Phase 3 (Proof)** at close-out 2026-06-19 — founder-blocked (needs real prior-work entries + screenshots); same founder source material seeds Phase 3's first case studies, so the two are gathered together. Component remains shipped & self-hiding, so no regression.
- [x] Industry-specific FAQs for each industry page (6–8 per page). **DONE** — 7 FAQs per industry in `data/industries.ts`, cost question first (content-guidelines § FAQ), → `FaqAccordion` + `FAQPage` JSON-LD.
- [x] Programmatic city-page template prose + the per-city data needed to populate it. **DONE** (feat: programmatic-service-locations) — `data/service-locations.ts`: per-service template config (overview + local-relevance + FAQ builders, parametric on `Location`) + 9 hand-authored, genuinely-unique openings. No per-combo MDX — assembled from the data + the rich `data/locations.ts` enrichment. All 9 pages clear the ≥30% unique bar (31–35%) with max pairwise similarity 47%.

### Data files

- [x] Complete `data/services.ts` — all **9** services now carry full metadata, founder-confirmed pricing, and a 6–8 entry `faqs` set. _(Related-service cross-links are handled in the Internal-linking pass below, not the catalog.)_
- [x] Build `data/locations.ts` with rich enrichment per `strategy/programmatic-seo.md` § enrichment. **DONE** (feat: location-hubs) — `Location` type with the full enrichment set (metro/population/county/timeZone/lat-long/notableIndustries/notableNeighborhoods/nearbyCities/handCrafted/searchVolumeTier) **extended** with presentational fields (meta/hero/cardSummary/FAQs), built to also feed the future programmatic template (no type change needed there). `nearbyCities` stored as `{ name, slug }`. + `lib/locations.ts` MDX loader (mirror of `lib/industries.ts`). _Honesty: `lat/long` is stored but NOT emitted as a business `geo` — see the SEO + Schema note below._
- [x] Build `data/industries.ts` (3 launch industries with related services, vertical-specific copy hooks). **DONE** — typed catalog (slug, name, `audienceType`, meta, hero, card summary, `relatedServiceSlugs`, FAQs) + `lib/industries.ts` MDX loader (mirror of `data/services.ts` / `lib/services.ts`).
- [ ] Build `data/faqs.ts` (reusable FAQ pool, tagged by service/industry/location) **→ CARRIED to Phase 3 (FAQ system)** at close-out 2026-06-19. **Not a gap:** every Phase 2 page already ships FAQs (colocated in `data/services.ts` / `data/industries.ts` / `data/locations.ts` / `data/service-locations.ts` → `FaqAccordion` + `FAQPage`), so the per-page FAQ requirement is fully met. A centralized pool is now an _optional_ refactor that only pays off when blog/case-study pages want to reuse tagged FAQs — exactly Phase 3's scope (it already owns the FAQ system, lines per phase-3 doc).
- [x] Update `data/keywords.json` mapping for all new URLs — **DONE.** Location hubs (feat: location-hubs): 14 geo entries. Programmatic long-tail (feat: programmatic-service-locations): 18 `[service] in [city]` transactional entries (2 per combo) mapping to the 9 `/services/[service]/[location]` URLs (350 total, `check:keywords` green, no cannibalization warnings).

### Routes & templates

- [x] `app/(marketing)/services/[service]/page.tsx` — generic service template (reused from Phase 1's web-dev page; all 9 services now prerender via it through `getServiceContentSlugs`, zero template change). _Note (page-composition-audit): `ServiceHero` renders an inline "Starting at USD $X" tag from `service.pricing`; `serviceNode` emits `Service` + `Offer` + `UnitPriceSpecification`. Programmatic city/service OG cards also get the optional `eyebrow` param (og-images)._
- [x] `app/(marketing)/services/[service]/[location]/page.tsx` — programmatic template. **DONE** (feat: programmatic-service-locations) — `dynamicParams = false`, `generateStaticParams` = the 9 combos. `PageHero` → `prose` body (unique opening → local-relevance h2 → templated service-overview h2) → "More for [City] businesses" internal-link grid (parent service · location hub · 2 sibling services in-city · same service in the other 2 metros) → city-specific `FaqAccordion` → brand `CtaBand`. Metadata `noindex: !combo.indexable` (all ship `noindex`). Verified light+dark axe + JSON-LD e2e on `/services/crm/austin-tx`.
- [x] `app/(marketing)/locations/page.tsx` — locations index. **DONE** (feat: location-hubs) — `PageHero` → 3 hub cards → brand `CtaBand`; `WebPage` + `BreadcrumbList` JSON-LD.
- [x] `app/(marketing)/locations/[location]/page.tsx` — location hub template. **DONE** — `dynamicParams = false`, `generateStaticParams` from MDX slugs; `PageHero` → MDX prose → "What we build for [City] businesses" grid (all 9 services) → "Nearby areas we serve" line → local `FaqAccordion` → brand `CtaBand`.
- [x] `app/(marketing)/industries/page.tsx` — industries index. **DONE** (feat: industry-pages) — `PageHero` → 3 industry cards → brand `CtaBand`; `WebPage` + `BreadcrumbList` JSON-LD.
- [x] `app/(marketing)/industries/[industry]/page.tsx` — industry template. **DONE** — `dynamicParams = false`, `generateStaticParams` from MDX slugs; `PageHero` → MDX prose body → "What we bring to [industry]" related-service grid → `FaqAccordion` → brand `CtaBand`.
- [x] `generateStaticParams` for service, location, industry, service×location routes — **DONE.** service/industry/location prerender from MDX slugs; service×location prerenders the 9 combos from `PROGRAMMATIC_COMBOS`. All `dynamicParams = false`.
- [x] Add `noindex, follow` to programmatic pages by default (flip on promote). **DONE** — each combo carries `indexable` (default `false` → `buildMetadata({ noindex: true })`). Promotion = add `${service}/${city}` to the `PROMOTED` set in `data/service-locations.ts`; the next build flips that page to `index, follow` and adds it to the sitemap.
- _OG images need no per-page work — Phase 1 `og-images` made `buildMetadata()` auto-generate a per-page card at `/og?title=…` for every route, programmatic ones included. Optionally pass `eyebrow` to `buildMetadata` (e.g. the city or service category) for a labelled card._

### Programmatic-SEO discipline

- [x] `scripts/check-programmatic-uniqueness.ts` — **DONE.** Shares `buildProgrammaticBodyText` with the route (no drift); 5-gram-shingle pairwise Jaccard — **warns >70%, fails >85%** (per `programmatic-seo.md` § uniqueness; the doc specifies the warn/fail thresholds, not a hard 70% fail) — plus a per-page ≥30%-unique-vs-all-others advisory. Current batch: max pairwise 47%, every page 31–35% unique → passes clean, zero warnings.
- [x] CI step wired — **DONE.** `pnpm check:uniqueness` runs in `ci.yml` right after the keyword audit, before the build.
- [x] Manual review workflow for promoting pages from `noindex` to `index` — **DONE (documented).** The `PROMOTED` set in `data/service-locations.ts` is the single switch; an entry is added only after a human clears that page against `strategy/programmatic-seo.md` § Indexation-gate checklist (≥600 words ✓ all pages, uniqueness ✓, links resolve ✓, JSON-LD validates ✓, city-named opening ✓, ≥3 local FAQs ✓ = 4 each).
- [x] First 6–10 pages reviewed against `strategy/programmatic-seo.md` checklist, then promoted — **DONE.** Founder reviewed and approved all 9 (2026-06-19); the full `PROMOTED` set in `data/service-locations.ts` is filled, so every combo emits `index, follow` and appears in `app/sitemap.ts`. Verified: robots meta `index, follow` + all 9 URLs in `sitemap.xml`. Remaining manual step: resubmit the sitemap in GSC.

### SEO + Schema

- [x] Update `app/sitemap.ts` to enumerate all services, locations, industries, and indexed service × location pages — **DONE.** Services/industries/locations enumerated; programmatic pages are appended from `promotedCombos` (empty at launch → sitemap unchanged until a page is promoted, then it auto-appears at priority 0.6).
- [x] Service page: `Service` + `Offer` schema — **DONE** (Phase 1 `serviceNode`, reused by all 9 service pages).
- [x] Service × location page: `Service` + `ProfessionalService` — **DONE** (feat: programmatic-service-locations) — new `serviceLocationNodes()` emits a city-scoped `Service` (with `Offer`) + a `ProfessionalService` provider, both **`areaServed` (City → State) only — NO `address`, NO `geo`.** **Deliberate honesty deviation** from this task's original "`address` (virtual office acceptable) + `geo`": Naxdor has no office in these cities, and a fabricated address is the anti-pattern `programmatic-seo.md` forbids — §8 of that doc updated to match. Mirrors `locationHubNode()`. Validated by `e2e/jsonld.spec.ts` on `/services/crm/austin-tx`.
- [x] Location hub: `ProfessionalService` with all services. **DONE** (feat: location-hubs) — new `locationHubNode()` in `lib/jsonld.ts`: `ProfessionalService` with `parentOrganization` → Organization, `serviceType` = all 9 service names, and **`areaServed` (City → containedInPlace State) ONLY — no `address`, no business `geo`.** Naxdor has no office in these cities (remote firm), so a fabricated local address is the anti-pattern both `programmatic-seo.md` + `schema-strategy.md` forbid. **Deliberate deviation** from the `schema-strategy.md` § Service×Location example (which shows address+geo, written before the Swedish-entity reality) — doc updated. Validated by `e2e/jsonld.spec.ts` on `/locations/austin-tx`.
- [x] Industry page: `Service` with `audience` → `BusinessAudience`. **DONE** — new `industryServiceNode()` in `lib/jsonld.ts` (Service + `audience.audienceType`, no Offer/price); validated on `/industries/aesthetic-clinics` by `e2e/jsonld.spec.ts`.
- [x] FAQ blocks on all new pages → `FAQPage` schema — **DONE.** service/industry/location + service×location (4 city-specific FAQs per combo → `FaqAccordion` + `FAQPage`).
- [x] Breadcrumbs on every new page — **DONE.** service/industry/location + service×location (Home → {Service} → {City, ST}).

### Internal-linking pass

- [x] Service detail → all locations (where we serve it) + 2 related services + relevant industries — **DONE** (feat: internal-linking-pass). Locations block (3 programmatic services) retained; added a "Keep exploring" `CrossLinkGrid` rendering the 2 `relatedServiceSlugs` + the relevant industries (the inverse of each industry's `relatedServiceSlugs` — services no vertical claims show services-only).
- [x] Location hub → all services + nearby locations — **DONE** (feat: internal-linking-pass). All-services grid retained; added an "Other metros we serve" `CrossLinkGrid` linking the sibling hand-crafted hubs (completes the hub↔hub mesh). Suburban `nearbyCities` stay a plain-text mention by design — they still have no `/locations/*` page, so linking them would be dead links.
- [x] Industry page → relevant services + relevant locations — **DONE** (feat: internal-linking-pass). "What we bring to [industry]" services grid retained; added a "Where we serve [industry]" `CrossLinkGrid` linking the 3 hand-crafted hubs (the metros where we run a dedicated local page; copy stays honest that delivery is remote-first nationwide).
- [x] Service × location → parent service + location hub + nearby cities (same service). **DONE** (feat: programmatic-service-locations) — the "More for [City] businesses" grid links parent service · location hub · 2 sibling services in-city · same service in the other 2 built metros. (Nearby non-built cities are a plain-text mention in the local-relevance copy — no dead links, matching the hub pattern.)
- [x] Footer updated with industries + top metros. **DONE** — industries via `INDUSTRY_NAV` (gated on `isBuiltRoute`); top metros via the new `LOCATION_NAV` rendered as a 4th footer column (Austin / Dallas–Fort Worth / Miami), plus a header mega-menu + mobile-nav accordion section. All 4 location routes promoted in `BUILT_ROUTES`.

### Trust signals

- [ ] HubSpot Solutions Partner application submitted; awaiting badge **→ CARRIED to Phase 4 (partner programs, pairs with CRM integration)** at close-out 2026-06-19 — founder admin action; routed to Phase 4 (user decision 2026-06-19) because the HubSpot/GHL partner relationship pairs with the Phase 4 CRM wiring.
- [ ] GoHighLevel Affiliate application submitted **→ CARRIED to Phase 4 (partner programs)** at close-out 2026-06-19.
- [ ] Update home + crm page to feature badges once approved (placeholder until then) **→ CARRIED to Phase 4** — badge display added to Phase 4 alongside the partner applications. Pages shipped without badges per the "Partner badges delayed → ship without, add when approved" mitigation, so no blocker.

---

## Deliverables

1. **All 6 service detail pages live and interlinked.**
2. **2–3 hand-crafted location hubs live** with genuinely local content.
3. **3 industry pages live**: aesthetic clinics, dental practices, beauty/wellness clinics.
4. **6–10 programmatic service × location pages indexed**, all passing the uniqueness check.
5. **Updated sitemap index** reflecting new URLs.
6. ~~**HubSpot + GHL partner applications submitted**~~ — **carried to Phase 4** (founder admin action; see Trust signals above).
7. **Internal-linking audit** showing every new page hits the linking targets in `strategy/information-architecture.md` § Internal-linking discipline. ✓ (feat: internal-linking-pass — shared `CrossLinkGrid` mesh across services ↔ locations ↔ industries).

---

## Acceptance criteria

- [x] All 9 service pages meet performance budget — Lighthouse CI green on the representative set (Phase 2 template URLs added to `.lighthouserc.cjs` in #93).
- [x] Hand-crafted location hubs each contain ≥ 800 words of genuinely city-specific content — 939 / 923 / 940 words (Austin / Dallas / Miami).
- [x] Industry pages each contain ≥ 800 words of vertical-specific content + 6+ FAQs — 1011 / 937 / 898 words, 7 FAQs each.
- [x] Programmatic pages each have ≥ 30% unique text (CI check passes) — 31–35% unique, max pairwise similarity 47%.
- [x] Every page's JSON-LD validates — covered by `e2e/jsonld.spec.ts` across service / industry / location / service×location.
- [x] Programmatic pages start `noindex`; promoted pages flip to `index, follow` only after the review checklist — all 9 promoted after founder review 2026-06-19.
- [x] CI uniqueness check, link check, Lighthouse CI all green.
- [ ] GSC shows no coverage errors on submitted URLs — **close-out monitoring item** (see Phase close-out): resubmit `sitemap.xml` in GSC, then verify coverage over ~2 weeks. Rolls into Phase 3's ongoing GSC indexation monitoring.

---

## Risks

| Risk                                         | Mitigation                                                                                               |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Programmatic templates feel thin in practice | Lean on rich `data/locations.ts` fields + manual review gate; reject pages that don't clear the bar      |
| Industry pages cannibalize service pages     | Different intent + different `<title>` / `<h1>`; keyword map in `data/keywords.json` enforces no overlap |
| Partner badges delayed                       | Ship pages without badges; add when approved                                                             |
| Local content writing pace is slow           | Write 1 city per day; don't ship a city until its copy is locked                                         |
| Sitemap bloat starts affecting build time    | Multi-sitemap index already in place from Phase 0; monitor build duration                                |

---

## Dependencies

- Phase 1 live (web-dev service template re-used for the other 5)
- `data/keywords.json` from Phase 0
- Brand assets + design system from Phase 0
- Top metros + first programmatic batch decisions resolved (see § Resolve open decisions)
- HubSpot + GoHighLevel partner program access (applications + criteria)

---

## Definition of done

Phase 2 ships when **all 6 service pages, 2–3 location hubs, 3 industry pages, and 6–10 promoted programmatic service × location pages are live, interlinked, schema-validated, and meeting Core Web Vitals; uniqueness CI is green; and the sitemap submitted to GSC reflects the new state**.

---

## Phase close-out (2026-06-19)

**Phase 2 is CLOSED.** Every build deliverable shipped to `naxdor.com`; remaining items are founder-blocked content or time-delayed verification, carried to where they fit.

### Shipped

- **9-service catalog** live via the shared `[service]` template (#78–#83) — incl. `/services/ai-integration` (3 H2 sub-sections) and `/services/crm` (named migrations).
- **3 hand-crafted location hubs** (Austin / Dallas / Miami, #86/#87) — 900+ words each, honest remote-first delivery, `areaServed`-only schema (no fabricated address/geo).
- **3 industry pages** (aesthetic clinics / dental / beauty-wellness, #84/#85).
- **9 programmatic service × location pages** (CRM + SEO + Web Dev × the 3 metros) — all promoted to `index, follow` after founder review; 31–35% unique; `check:uniqueness` wired into CI; `serviceLocationNodes()` schema.
- **Internal-linking mesh** unified behind one `CrossLinkGrid` (#91) connecting services ↔ locations ↔ industries; footer + header nav updated with industries + metros.
- **Quality gates green** — typecheck / lint / build / Playwright / Lighthouse CI (Phase 2 URLs added to the representative set in #93) / uniqueness / keyword audit.

### Carried forward

| Item                                                                           | → Destination                  | Reason                                                                                                                                                                                |
| ------------------------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Portfolio strip content (`data/portfolio.ts` + screenshots)                    | **Phase 3 — Content/Proof**    | Founder-blocked; same prior-work source seeds Phase 3's first case studies. Component shipped & self-hiding (no regression).                                                          |
| HubSpot Solutions Partner + GoHighLevel Affiliate applications + badge display | **Phase 4 — partner programs** | User decision 2026-06-19: the HubSpot/GHL partner relationship pairs with the Phase 4 CRM integration. Pages shipped badge-less per the "ship without, add when approved" mitigation. |
| `data/faqs.ts` reusable FAQ pool                                               | **Phase 3 — FAQ system**       | Not a gap — every page already has colocated FAQs; centralization only pays off once blog/case-study pages reuse tagged FAQs (Phase 3 scope).                                         |

### Open monitoring item (not phase-blocking)

- **GSC coverage verify** — resubmit `sitemap.xml` (now carrying the 9 promoted programmatic URLs) in Google Search Console, then watch coverage for ~2 weeks. This is the only Phase 2 acceptance criterion not yet checkable (crawl latency); it merges into Phase 3's ongoing GSC indexation monitoring. Mirrors Phase 1's Speed-Insights field-verify pattern.

### Deliberate doc deviations made during Phase 2 (already reconciled)

- Schema honesty: location-hub + service×location nodes emit `areaServed` only, **no `address`/`geo`** — `programmatic-seo.md` §8 and `schema-strategy.md` § Service×Location updated to match the remote-firm reality (their old address+geo examples predated it).
- Maintenance Care Plans published at **$750 / $1,500 / $3,000** (user-approved 2026-06-18), superseding the doc's illustrative Bronze/Silver/Gold figures.
