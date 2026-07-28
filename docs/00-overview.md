# 00 — WebAsk UK: Overview

> **The north star.** Read this first; everything else elaborates on the sections below.
> **Created:** 2026-07-27 · **Status:** Planning (pre-build) · **Owner:** azcheema@gmail.com

This doc is written to stand alone. If you read only one file in this bundle, read this one.

---

## What we're building

`webask.co.uk` becomes a fast, SEO-engineered, conversion-focused site for **Naxdor's UK
operation, trading as WebAsk**. Same business, same services, same founder — a UK brand,
a UK domain, UK pricing, UK English, and UK-specific expertise.

**Positioning.** WebAsk sells **digital services to UK SMBs**. Home, services index and
individual service pages are **service-led, not industry-led** — they speak to any UK
business owner. The vertical specialisation (aesthetic clinics / dental / beauty &
wellness) surfaces through `/industries/*` pages and industry-aware programmatic city
pages. It shapes _where we win deals_, not _what the brand stands for_. This is the same
rule Naxdor operates under and it carries over unchanged.

**Services (9, inherited from Naxdor, UK-localised)**

1. Website Development
2. E-commerce Development
3. Web App / Custom Software Development
4. UI/UX Design
5. SEO & Performance
6. Mobile Application Development
7. CRM Automation & Migrations (UK emphasis pending decision **D6** — see below)
8. AI Integration & Development (Voice Agents · Chatbots · Workflow Automation)
9. Maintenance & Care Plans

**CRM emphasis matches Naxdor rather than inverting it: GoHighLevel-first** (D6, resolved
2026-07-27), with **HubSpot** as a named second section — implementation, onboarding, and
commercially the sharpest angle, **HubSpot-to-GHL migration**.

This is a founder call on where UK adoption is heading, not a reading of current install
data — the research pointed in no clear direction (see
[`02-uk-market-research.md`](02-uk-market-research.md) § 3 for why the widely-quoted UK
GoHighLevel figure can't bear weight, and for the counter-arguments, which are recorded
rather than buried).

**Useful side effect:** Naxdor's GHL positioning, service copy, process content and keyword
cluster now port across rather than needing replacement — a real saving in Phase 2.

---

## The entity reframing (this is the important bit)

**WebAsk is a trading name of Naxdor, a Swedish enskild firma. There is no UK company.**

That single fact drives more of this plan than anything else:

- **No Companies House number exists.** The site must never display one. The Companies
  (Trading Disclosures) Regulations 2008 don't apply — but the Electronic Commerce
  (EC Directive) Regulations 2002 and the Provision of Services Regulations 2009 still
  require the **real service provider's name, geographic address and email** to be
  findable on the site.
- **A non-UK-established business has a £0 UK VAT registration threshold**, not £90,000
  — although pure B2B services may be outside the scope under the reverse-charge rule.
  Unresolved: decision gate **D2**.
- **UK GDPR Article 27** requires a named **UK representative** in the privacy notice,
  because the entity has no UK establishment but offers services to UK residents. With D1
  resolved to _fully remote_, this is **near-certain**, not merely likely. Conversely the
  **ICO data protection fee probably does not apply** — it turns on UK establishment.
  Confirmation pending: decision gate **D3**.
- **Local SEO is constrained by honesty — and D1 has now settled it.** WebAsk is **fully
  remote with no UK location**, so there is **no Google Business Profile**, `areaServed`-only
  schema, and no `address`/`geo` in the graph. Identical to `naxdor.com`'s locked 2026-06
  honesty override. The Oxford address currently on the live site **comes off**.

All of this is worked through in [`03-uk-compliance.md`](03-uk-compliance.md).

---

## The three-site map

| Site               | Locale    | Market                            | Entity                             |
| ------------------ | --------- | --------------------------------- | ---------------------------------- |
| `naxdor.com`       | en-US     | US-primary, international English | Naxdor (SE)                        |
| `naxdor.se`        | sv-SE     | Sweden (Halland-anchored)         | Naxdor (SE)                        |
| **`webask.co.uk`** | **en-GB** | **United Kingdom**                | **Naxdor (SE), trading as WebAsk** |

Three separate repos, three separate Vercel projects, three separate Search Console
properties. They share a founder, a codebase lineage and a design system — not a domain.

**The `.co.uk` ccTLD is the strongest possible UK geo-targeting signal.** Google
auto-associates it with the UK with zero configuration, and you _cannot_ override it in
Search Console (the International Targeting country setting was removed in 2022). The
only cost is operational: **link equity does not flow from `naxdor.com` to
`webask.co.uk`.** Authority, citations and E-E-A-T are built separately. The existing
domain has been live since ~2020, which is worth something in age terms but essentially
nothing in authority terms given the content.

**How the sites relate publicly** — locked: **openly, as a group.** WebAsk's footer and
`/about` state the relationship, and the Organization schema carries
`parentOrganization` → `https://naxdor.com/#organization`. This is the honest option and
also the strategically better one: Google sees two related entities rather than two thin
clones, the founder's real credentials transfer, and cross-links between the properties
are defensible rather than looking like a private blog network.

**What we explicitly do NOT do:** cross-canonical, or hreflang-pair the two English
sites. Reasons and the one destructive mistake to avoid are in
[`05-seo-strategy-uk.md`](05-seo-strategy-uk.md).

---

## What the existing site actually is

Audited 2026-07-27. Twelve URLs across three sitemaps, most of it unmodified theme demo
content.

| Sitemap                | URLs                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page-sitemap.xml`     | `/`, `/about/`, `/contact/`, `/portfolio/`, `/privacy-policy-2/`, `/sample-page/`                                                                                                   |
| `post-sitemap.xml`     | `/blog/`, `/the-importance-of-seo-why-its-essential-for-online-success/`, `/top-10-freelance-blogs/`, `/about-my-agency/`, `/time-management-tips/`, `/pricing-freelance-projects/` |
| `category-sitemap.xml` | `/uncategorized/`                                                                                                                                                                   |

Current positioning is a _digital marketing_ agency (SEO, local SEO, SEM, social, CRO,
web design) — not the build-focused service set WebAsk will sell. Current contact
details: `45 Ridgefield Rd, Oxford OX4 3BU`, `+44 7818 920132`, Mon–Fri 9am–5pm, plus a
WhatsApp link. Navigation is four items: Home, About, Contact, Blog.

### Three findings that change the plan

**1. The site carries fabricated people and fake testimonials.**
`/about/` lists a staff roster including a "Marketing Director **Alicia Keys**" alongside
a CEO, Finance officer, Designer, Developer, PR Manager and two support staff — for what
is a solo operation. `/portfolio/` shows three "projects" (BOLD AND BRAVE, PHP FREELANCE,
JAKE AUSTIN) whose descriptions are all the same lorem-ipsum string ("Kale chips
knausgaard mustache blog fashion axe selfies salvia…"), plus testimonials attributed to
"Mark Riley" and "Willie Walters" with identical generic praise.

Since **6 April 2025**, the Digital Markets, Competition and Consumers Act 2024 makes
writing, commissioning or publishing fake consumer reviews **illegal in the UK**, with
the CMA able to determine a breach and fine directly — up to **10% of global annual
turnover or £300,000**, whichever is higher (CMA guidance CMA208). In March 2026 the CMA
opened investigations into five named businesses over review handling.

This is a live legal exposure, not a tidy-up task. **It gets removed at cutover, in
Phase 1 — not "later".**

**2. A UK address is published that is no longer accurate.** `45 Ridgefield Rd, Oxford
OX4 3BU` appears on `/contact` today. **D1 resolved 2026-07-27: WebAsk is fully remote with
no UK location**, so the address **comes off and is not carried forward**. That also closes
off a Google Business Profile — Google requires a real location with staff present during
stated hours, and creating a profile against an address we don't work from is a
suspension-grade violation. Local search becomes an organic-only game; see
[`05-seo-strategy-uk.md`](05-seo-strategy-uk.md) § 4 for what that costs and how we
compensate.

**3. Naxdor's own docs already claim the UK.**
`d:\naxdor\docs\strategy\keyword-research.md` § "International English markets (Phase 4+
expansion)" lists **London, Manchester, Birmingham, Edinburgh, Bristol** as future
`naxdor.com` programmatic location targets. That now collides head-on with WebAsk.
Logged in [`07-naxdor-change-requests.md`](07-naxdor-change-requests.md) — **not applied**,
per the instruction to leave `d:\naxdor` untouched.

---

## Six jobs the site has

The first five are inherited from Naxdor. The sixth is UK-specific and is the wedge.

1. **Prove competence** — the site IS the portfolio. A sub-2s LCP Next.js site in a
   category of 5–8s WordPress builds is an instant credibility signal.
2. **Rank in UK search** — service × city, service × industry × city, on a ccTLD.
3. **Scale to hundreds of pages** without rebuilds.
4. **Convert UK SMB visitors** — one CTA per viewport, transparent "starting at £X".
5. **Future-proof** for a logged-in client portal.
6. **Be the compliance-literate agency.** UK aesthetics and dentistry are regulated in
   ways US practices are not — ASA/CAP's ban on advertising prescription-only medicines,
   the MHRA, the 2026 licensing scheme, the GDC, the CQC, the CMA. Nearly every UK clinic
   website is quietly non-compliant. Being the agency that _knows this_ is verifiable
   expertise (real E-E-A-T), generates content with genuine Information Gain, and is
   almost unclaimed in the SERP. **This is WebAsk's flagship positioning.**

---

## The five-pillar SEO bet (inherited, intact)

Unchanged from Naxdor, grounded in Google's 15 May 2026 AI Search optimisation guide:

1. **E-E-A-T** — real founder bio and credentials, real author bylines, partner badges,
   third-party verification, consistent NAP, sourced claims.
2. **Information Gain** — every page contributes something the SERP doesn't have. In the
   UK, the regulatory angle supplies this naturally.
3. **Entity SEO** — one canonical `Organization` `@id`, `@graph` on every page, linked by
   `@id`, plus `parentOrganization` → Naxdor.
4. **Core Web Vitals** — LCP ≤ 2.0s, INP ≤ 200ms, CLS ≤ 0.05, CI-enforced.
5. **Topical authority via clusters** — service pillar → location variants → industry
   variants → blog cluster.

Also inherited verbatim: **no `llms.txt`, no AI-specific schema, no Q&A-chunked rewrites**
— Google's own guide says these don't help.

---

## Decision gates

Eight gates. **D1, D6, D7 and D8 resolved 2026-07-27.** D2, D3, D4 and D5 remain open —
all four are external dependencies (accountant, solicitor, founder) and **none block
starting Phase 0**.

### ✅ D1 — UK presence — **RESOLVED 2026-07-27: fully remote, no UK location**

WebAsk is operated remotely from the Swedish entity, with a UK phone number. There is no
UK office, desk or staffed location.

**What follows, all of it non-negotiable:**

| Consequence                                     | Detail                                                                                                                                                                                                                                 |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No Google Business Profile**                  | Google requires a real location with staff present during stated hours. Virtual offices, mailboxes, a friend's address or a PO Box are violations risking permanent loss of the listing. There is simply no eligible profile to create |
| **No Map Pack, no Maps pin, no Google reviews** | A real cost, stated plainly in [`05-seo-strategy-uk.md`](05-seo-strategy-uk.md) § 4 — not minimised                                                                                                                                    |
| **`areaServed`-only schema**                    | No `address`, no `geo`, anywhere in the graph. Identical to `naxdor.com`'s locked 2026-06 honesty override                                                                                                                             |
| **Oxford address removed from `/contact`**      | Currently live; does not carry forward. Phase 1 task                                                                                                                                                                                   |
| **The statutory address is the Swedish one**    | E-Commerce Regs still require a real geographic address for the operating entity → `/legal/company-information`. A legal disclosure, _not_ a local-SEO signal. Don't conflate them                                                     |
| **Article 27 sharpens**                         | No UK establishment puts WebAsk squarely in scope for a UK representative (D3). The ICO fee, conversely, probably does not apply                                                                                                       |

**Revisit trigger:** if a genuine UK working location is ever established — an office, a
UK-based hire, a permanent desk — reopen this immediately. A verified profile in the
Manchester/Cheshire corridor would be the highest-value local-SEO asset available.

### ✅ D7 — Anchor city — **RESOLVED 2026-07-27: Manchester**

Oxford and Reading are dropped (they existed only to serve a presumed Oxford anchor).
Hand-crafted hubs are **Manchester → Cheshire → Leeds**, with a North-West-first
programmatic expansion ring. Framing is **national site with Manchester-first locations** —
home and service pages still speak to any UK SMB, preserving the locked service-led rule.

The reasoning is in [`02-uk-market-research.md`](02-uk-market-research.md) § 6, but the
short version is that the UCL study's **inverted deprivation gradient** (density 9.4 → 63.2
per 100,000 from least to most deprived) means raw clinic count points at the _wrong_ end of
the market. The clinics with budget are doctor-led and skew affluent — and the best-evidenced
premium corridor outside London is the Cheshire golden triangle on Manchester's fringe.

### ✅ D6 — CRM emphasis — **RESOLVED 2026-07-27: GoHighLevel-first**

Founder decision, on a forward-looking view of UK GHL adoption. The research was
inconclusive in both directions, so this is recorded as a judgement call, not an
evidence-led finding. HubSpot remains a named second section — with HubSpot-to-GHL
migration as the commercially sharpest angle. Detail and the retained risk in
[`02-uk-market-research.md`](02-uk-market-research.md) § 3.

### ✅ D8 — Site framing — **RESOLVED 2026-07-27: national, service-led**

Home and service pages speak to **any UK SMB**. Manchester surfaces through
`/locations/manchester` as the flagship hub and through the programmatic expansion order —
**not** through the home page or an "a Manchester agency" identity. This preserves the
locked service-led rule and keeps southern and national leads winnable.

### D2 — UK VAT treatment

NETP (non-established taxable person) rules give a **£0 registration threshold** — no
£90,000 allowance, registration from the first taxable supply. But B2B services to UK
business customers generally fall under the place-of-supply general rule, putting them
outside the scope of UK VAT with the customer accounting via reverse charge.

This is genuinely nuanced and **must be confirmed with an accountant** — this bundle
flags it rather than asserting an answer. **Interim rule for the site:** display prices as
"Starting at £X" with "+ VAT where applicable", and finalise once resolved.
Blocks: `/pricing` final copy.

### D3 — UK GDPR Article 27 representative + ICO fee

An entity with no UK establishment that offers services to UK residents or monitors their
behaviour must appoint a **UK representative**, named in the privacy notice. The ICO views
the role as a communications conduit; regulators are actively closing this gap. The ICO
**data protection fee** (£52 / £78 / £3,763 tiers, −£5 by direct debit, non-payment fine
up to £4,350) turns on UK establishment and should be assessed at the same time.

Blocks: `/legal/privacy` going final. Needs a legal/DPO check.

### D4 — Final GBP price list

Research-derived anchors are proposed in
[`02-uk-market-research.md`](02-uk-market-research.md) § Pricing. **The founder confirms
them before publish** — the same gate `naxdor.se` used, and for the same reason: published
prices are a commitment, and the site's whole pricing posture depends on them being real.

Blocks: `/pricing` and every service page's pricing anchor.

---

## Out of scope for v1

- Multi-language routing (en-GB only; routes stay i18n-ready structurally)
- Paid media / social-media management as service lines (the existing WebAsk site sells
  these; the fork deliberately drops them — no delivery playbook exists to inherit)
- E-commerce / subscription billing for WebAsk itself
- Live chat widget
- Client portal (mirrors Naxdor's Phase 6 deferral)

---

## Where the rest lives

| Need                                      | Doc                                                                |
| ----------------------------------------- | ------------------------------------------------------------------ |
| What transfers from Naxdor                | [`01-inherited-from-naxdor.md`](01-inherited-from-naxdor.md)       |
| UK market, competitors, keywords, pricing | [`02-uk-market-research.md`](02-uk-market-research.md)             |
| UK legal & regulatory                     | [`03-uk-compliance.md`](03-uk-compliance.md)                       |
| Sitemap + the 301 map                     | [`04-information-architecture.md`](04-information-architecture.md) |
| SEO, multi-site, GBP, citations           | [`05-seo-strategy-uk.md`](05-seo-strategy-uk.md)                   |
| Phased build plan                         | [`06-build-plan.md`](06-build-plan.md)                             |
| Changes wanted in `d:\naxdor`             | [`07-naxdor-change-requests.md`](07-naxdor-change-requests.md)     |
