# 05 — Site structure

> Purpose: URLs, navigation, link mesh, schema and staging. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1):
> every section below is a **hypothesis** until the session named there confirms, amends or
> rejects it with evidence.

## 1. Taxonomy and navigation (planning § 4.3)

**Build / Grow / Automate & run** — reuses the process vocabulary already on the home page, splits
6/6/4 into the existing three-column mega-menu, and separates project cadence from monthly cadence.
Build: Web Development · E-Commerce · Web Applications · Mobile Apps · UI/UX Design · Landing Pages.
Grow: SEO · Google Business Profile · Review Management · Missed-Call Text-Back · AI Receptionist ·
Email & SMS Marketing. Automate & run: Local Business Plans (highlighted) · CRM Automation · AI
Integration · Maintenance. Rejected: Capture/Convert/Retain (orphans Web Apps, Mobile, UI/UX,
Maintenance). Footer becomes six columns at `lg` (three service groups + Industries + Locations +
Company). **Vocabulary rule:** "local" only ever describes the customer ("UK local businesses",
"delivered remotely, anywhere in the UK"); never "your local agency", "near you", "based in".

## 2. Sitemap delta — hypothesis (planning § 4.4)

The seven `/services/*` URLs above; `/blog/topic/local-marketing` (new closed-list topic, anchor
`local-business-plans` — the same edit should add the missing `clinic-compliance` topic that 22
keyword rows already point at); industry placeholders `trades-home-services`, `garages-mot-centres`,
`veterinary-practices` (wave 1), `gyms-fitness-studios` (wave 2, timed to the DMCC subscription regime,
now expected spring 2027); programmatic candidates later only for `google-business-profile/[location]`
and, low priority, `email-sms-marketing/[location]` — the rest are national product intent and would be
the "city-swap" anti-pattern.

## 3. Keyword re-points and enums — hypothesis (planning § 4.5)

- Move to `/services/ai-receptionist`: `ai receptionist uk`, `ai phone answering service uk`,
  `ai receptionist vs answering service uk`, `are ai receptionists legal uk`, `ai receptionist for uk
business`, `ai call answering for small business uk`. "Voice agent" phrasing and all `ai-chatbots` rows
  stay on `ai-integration`; the clinic/dental receptionist rows stay on the industry heads.
- Move `gohighlevel pricing uk` to the bundle; `gohighlevel pricing in gbp` stays on `/blog/topic/crm`.
  All agency/expert/setup/migration/white-label/snapshot rows stay on `crm-automation`
  (`marketing automation agency uk` is a judgement call — revisit when MSV/KD land).
- New cluster names for `CLUSTER_ENUM`: `lead-recovery`, `reviews`, `ai-receptionist`, `email-sms`,
  `landing-pages`, `local-listings`, `local-plans`. `VERTICAL_ENUM` grows only as an industry page ships.
- Industry `relatedServiceSlugs` (2-up grid, keep even counts, only where core): aesthetic → add
  text-back + review-management + seo, drop ui-ux; dental → add review-management + text-back; beauty →
  add email-sms + review-management + ai-receptionist + GBP. Related pairs per new service and the three
  existing updates (crm-automation → email-sms + ai-integration; seo → GBP + web-development;
  ai-integration → ai-receptionist + crm-automation).

## 4. Per-page links and schema

The per-page link and schema lists (inbound, outbound, `Service` + `Offer` + `FAQPage` +
`BreadcrumbList`, `OfferCatalog` for the bundle) are in `12-seo-ranking-plan.md` § 3, one skeleton
per page. The grouped `SERVICE_NAV` proposal with its mega-menu, footer and mobile consequences is
in `09-content-drafts/index-and-nav.md`. The JSON-LD changes (`unitText` by cadence, the set-up
`Offer`, the bundle catalogue) and the derived surfaces (sitemap, contact schema, marquee) are in
`11-implementation-outline.md` § 3.

## 5. Sitemap delta table

_S6 — `URL | Type | New/Changed | Silo | Indexable at launch?`; every URL in `03`'s `primaryUrl`
set or marked "support page"._

## 6. Staging

Services have no `draft` flag today and the `/services` grid links regardless of `BUILT_ROUTES`.
The proposal is a `status: "draft" | "live"` catalogue field with `noindex` on draft (planning
§ 4.7; snippets in `11` § 3). Slugs are settled once; titles stay ≤ 51 characters because the
layout template appends ` · WebAsk`.

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
