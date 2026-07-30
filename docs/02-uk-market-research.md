# 02 — UK Market Research

> New research, not inherited. Replaces Naxdor's `keyword-research.md` and
> `competitor-analysis.md` for the UK market.
> **All web research conducted 2026-07-27.** Every figure carries its source.

---

## 1. Market sizing

### UK business population

| Figure                          | Value                                                             | Source                                             |
| ------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------- |
| UK private-sector businesses    | ~5.47m (2026), forecast to fall to ~5.37m by 2028                 | money.co.uk / Whito, _UK Business Statistics 2026_ |
| SMEs as share of all businesses | **99.85%**                                                        | ibid.                                              |
| SME employment                  | 16.9m people (~60% of private-sector employment)                  | ibid.                                              |
| SME turnover                    | £2.8tn (~51%)                                                     | ibid.                                              |
| London business count           | ~1.04m — the most, and highest density at 1,436 per 10,000 adults | ibid.                                              |

**Read:** the addressable market is enormous and overwhelmingly small. This validates the
inherited SMB positioning without modification.

### The agency market we're entering

| Figure                        | Value              | Source                            |
| ----------------------------- | ------------------ | --------------------------------- |
| UK web design services market | **£658.2m (2026)** | IBISWorld, via industry reporting |
| Businesses in the industry    | ~2,206 (2025)      | ibid.                             |

~£300k average revenue per operator — a **fragmented market with no dominant player**.
There is no UK WebFX. Nobody owns the category, which means category-level SEO is winnable
by a well-built site rather than only by an incumbent.

### Search landscape

| Figure                                                | Value                                                              | Source                                      |
| ----------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| Google UK search share                                | **~92.7%** (Q1 2025)                                               | Searchlab / DigitalApplied, 2026            |
| AI Overviews query presence                           | ~15–25% of searches in 2026; ~48% by April 2026 on some measures   | SQ Magazine, _AI Overviews Statistics 2026_ |
| Highest-reach AI surface in UK                        | Google AI Overviews / AI Mode, then ChatGPT & Copilot (Bing index) | Rank4AI, _UK AI Search Visibility Q2 2026_  |
| ChatGPT local recommendations sourced from Foursquare | reported 60–70%                                                    | Byte-wise, _Local Citations UK 2026_        |

**Read:** Google dominance is even more pronounced than in the US, so the inherited
Google-first strategy is right. But because ChatGPT and Copilot run on the Bing index —
and ChatGPT's local layer leans on Foursquare — **Bing Places and Apple Business Connect
are not optional afterthoughts in 2026**. They're in the citation priority list (doc 05).

---

## 2. The verticals — where the real wedge is

Same three launch verticals as Naxdor: **aesthetic clinics, dental practices, beauty &
wellness clinics**. The UK regulatory picture makes them _more_ differentiated than in the
US, not less.

### Aesthetics

| Figure                          | Value                                                                                                | Source                           |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------- |
| UK aesthetics market            | **£3.6bn (2026)**, forecast **£5.1bn by 2028** — ~10.2% CAGR                                         | PolicyBee / SkinSage, 2026       |
| Non-invasive segment growth     | 8–9% in 2026                                                                                         | ibid.                            |
| Clinics                         | **5,589**                                                                                            | UCL mapping study, February 2026 |
| Practitioners                   | **19,701**                                                                                           | ibid.                            |
| Broader provider count          | ~34,000 non-surgical providers; ~24,000 after commercial filters; ~21,000 qualified available market | RARE Consulting, April 2026      |
| Injectables as share of revenue | **65%**                                                                                              | PolicyBee, 2026                  |
| Botulinum toxin treatments/year | ~900,000                                                                                             | ibid.                            |
| Practitioner growth             | **+437% in two years** — ~3,600 (2023) → 19,701 (2026)                                               | UCL / ASJ Open Forum, Feb 2026   |

#### Where the clinics actually are — and why the obvious read is wrong

The UCL study (_Mapping the UK Aesthetic Medicine Industry_, Aesthetic Surgery Journal Open
Forum, Feb 2026) gives the only peer-reviewed geographic picture. It publishes
**country-level splits only** — no city-level breakdown exists in any published source:

| Nation           | Share | Clinics |
| ---------------- | ----- | ------- |
| England          | 79.5% | 4,443   |
| Scotland         | 8.3%  | 462     |
| Wales            | 7.2%  | 405     |
| Northern Ireland | 5.0%  | 279     |

**The important finding is not the map — it's the deprivation gradient, and it inverts the
obvious assumption:**

| Measure                                               | Least deprived (Q1) | Most deprived (Q5)                   |
| ----------------------------------------------------- | ------------------- | ------------------------------------ |
| Practitioner density per 100,000                      | **9.4**             | **63.2** (6.7× higher)               |
| Doctor representation                                 | 34.4%               | 27.0%                                |
| Specialist access (dermatologists / plastic surgeons) | Baseline            | Significantly reduced (Q3–Q5)        |
| Pricing                                               | —                   | Higher-income areas only 1–5% dearer |

> 🎯 **The strategic consequence.** Raw clinic _count_ is highest in deprived urban areas —
> but those are disproportionately **non-medical practitioners competing on price**, with no
> budget for a £3,500 website. The **doctor-led and specialist clinics that can actually
> afford WebAsk skew toward less deprived areas**, where density is 6.7× _lower_.
>
> So **targeting maximum clinic density aims at exactly the wrong end of the market.** The
> question is not "where are the most clinics" but **"where are the most clinics with
> budget"** — which points at affluent metro-adjacent corridors, not high-street volume.
>
> Note the pricing finding reinforces this: treatment prices barely move with affluence
> (1–5%), so the affluent-area premium shows up in _practitioner type and clinic quality_,
> not in headline price. Doctor-led clinics are the buyer profile.

**Two live regulatory events, right now:**

1. **The licensing scheme for non-surgical cosmetic procedures is _not yet in force_.**
   ⚠️ **Corrected 2026-07-28** — this originally read "is operational in 2026", which overstates
   it. As at July 2026 the scheme has **not commenced**; the August 2025 consultation response
   _proposed_ the shape below. See [`08-seo-architecture.md`](08-seo-architecture.md) § 4, which is
   the authority, and [`03-uk-compliance.md`](03-uk-compliance.md) § B1. What **is** in force:
   administering botulinum toxin or filler for a cosmetic purpose to under-18s in England has been
   a criminal offence since 1 October 2021.
   Initiated by the Health and Care Act 2022. Under the proposal local authorities enforce a **two-tier**
   system: every individual performing listed procedures needs a **personal licence** —
   practitioners can no longer operate under a general business licence. Procedures are
   categorised **red / amber / green** by risk (Government consultation response, August
   2025); **botulinum toxin and dermal fillers sit in amber**, meaning a non-medical
   practitioner may perform them only under the supervision of a named regulated
   healthcare professional. Licence conditions include accredited qualifications, valid
   indemnity insurance, and a DBS check. Administering to under-18s for cosmetic purposes
   is illegal in England.

2. **ASA/CAP: prescription-only medicines cannot be advertised to the public.**
   Botulinum toxin is a POM. **The word "Botox" cannot appear on a clinic website, in
   organic social posts, in Google Ads, or on a flyer** — this covers organic content, not
   just paid. The ASA also treats _implied_ references as breaches (it has ruled the word
   "relaxing" an implied reference to Botox). Compliant phrasing advertises the
   **consultation**, not the treatment: _"consultations for lines and wrinkles"_.
   ⚠️ **CORRECTED 2026-07-29.** This sentence used to recommend _"anti-wrinkle injections",
   "anti-wrinkle treatment"_ — contradicting the sentence before it, since the ASA treats
   those as **implied** promotion of the POM. The same correction was made at § 5 and in
   [`08-seo-architecture.md`](08-seo-architecture.md) § 6 on 2026-07-28 but never reached
   here or doc 03 § B1. **The MHRA issued 47
   enforcement notices to aesthetic businesses in 2024 alone**, mostly for exactly this.
   The ASA now runs AI-powered proactive monitoring that finds non-compliant ads without
   waiting for a complaint. CAP offers a free **Copy Advice** service for pre-publication
   questions.

### Dental

Regulated simultaneously by **four** bodies:

- **GDC** — professional conduct. No unsubstantiated clinical claims. Genuine reviews only
  (no incentives). Registration transparency. Patient consent required for before/after
  images. Using "specialist" when not on the GDC specialist list is a standards breach.
- **CQC** — registration is a legal requirement for practices in England. Displaying CQC
  registration and inspection results is a trust asset.
- **ASA** — advertising claims must be legal, decent, honest, truthful.
- **CMA** — consumer protection and pricing transparency. **The CMA opened a market study
  into the £8.4bn private dentistry sector in March 2026.**

Plus UK GDPR, PECR, and the Consumer Protection from Unfair Trading Regulations.

### Why this is the wedge

Almost every UK clinic website is quietly non-compliant — most obviously on the POM rule,
because "Botox" is the term patients search for and clinics feel commercial pressure to
use it. The result:

- **Verifiable expertise.** Knowing this is real E-E-A-T, not claimed E-E-A-T.
- **Genuine Information Gain.** Content on "how to market aesthetics legally in the UK"
  answers a question the SERP handles badly, and it's a question with real stakes.
- **A near-unclaimed position.** A handful of specialists touch it (see § 3); nobody owns it.
- **It also solves the duplicate-content problem** with `naxdor.com` — this content simply
  cannot exist on a US site. See [`05-seo-strategy-uk.md`](05-seo-strategy-uk.md).

> ⚠️ **Content rule that follows from this:** WebAsk's own marketing copy about clinic
> clients must itself be POM-compliant. Writing "we build Botox clinic websites" would be
> both a bad look and arguably a breach. Copy-review checklist in
> [`03-uk-compliance.md`](03-uk-compliance.md).

---

## 3. Competitors

Same four-bucket structure as Naxdor's analysis. Reviewed quarterly.

### Bucket 1 — UK generalist agencies (head-on)

| Competitor                                                                                | Note                                                                 |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Bird Marketing**                                                                        | Multi-award, broad service set, does dentist-specific web design too |
| **KOTA**                                                                                  | London, strong design register — closest to our visual bar           |
| **Bespoke**                                                                               | Lancashire roots, Manchester + London offices                        |
| **CTI**                                                                                   | Manchester; Drupal/WordPress, larger orgs + growing SMEs             |
| **Reactive**, **Visions Design**, **Mentor Digital**, **ControlF5**, **Blue Whale Media** | Regional mid-market                                                  |

**Where we win:** modern stack, published performance budgets, transparent "starting at £X",
and a compliance specialisation none of them market.

### Bucket 2 — CRM specialists — **GoHighLevel-first (decided)**

> ✅ **D6 RESOLVED 2026-07-27 — founder decision: lead with GoHighLevel, not HubSpot.**
>
> **Rationale (founder's):** a forward-looking bet that UK GHL adoption grows. The research
> below was inconclusive in both directions — it did not support a HubSpot lead any more
> firmly than a GHL one — so this is a judgement call about where the market is heading,
> not a reading of current install data. Recorded as such deliberately.
>
> **What this means:** `/services/crm-automation` headlines **GoHighLevel implementation,
> automation and migrations**, with HubSpot as a named, credible second section (it remains
> the larger installed base, and HubSpot migration work is real revenue). This aligns UK
> emphasis with `naxdor.com` rather than inverting it — one less divergence to maintain.
>
> **This also strengthens the Naxdor transfer.** Naxdor's GHL positioning, service copy,
> process content and keyword cluster now port across rather than needing replacement —
> a meaningful saving in Phase 2.
>
> **Retained as a live risk:** if the Phase 0 keyword pull shows near-zero UK volume for GHL
> terms, the _page_ still leads GHL but the **SEO effort** should follow the volume. Betting
> the positioning on future demand is reasonable; betting the keyword targeting on it is not.
> See the Phase 0 action below — it is still worth running, now as a targeting input rather
> than a decision gate.

The evidence that informed (but did not settle) the call:

| Figure                                        | Value                                                                       | Source                                                  | Confidence                |
| --------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------- |
| UK companies **detected** running GoHighLevel | 848                                                                         | Firmbase, _Companies Using GoHighLevel in the UK_, 2026 | 🔴 **Low — see caveat**   |
| GoHighLevel globally                          | 60,000+ agencies; 1m+ businesses (vendor's own figures)                     | GoHighLevel / partner reporting, 2026                   | 🟡 Vendor-reported        |
| HubSpot share of SMB CRM installations        | 62%                                                                         | SQ Magazine / Resonate, 2026                            | 🟡 Base/geography unclear |
| UK position in HubSpot's European adoption    | **Leads Europe**; strong among London agencies, SaaS, professional services | ibid.                                                   | 🟢 Corroborated           |

> ⚠️ **Do not lean on the 848 figure.** Firmbase **does not disclose its detection
> methodology** — there is no stated method (website scan, DNS, job ads, other). That
> matters disproportionately here, because **white-labelling is GoHighLevel's defining
> feature**: agencies rebrand the whole platform under their own domain and run clients in
> sub-accounts. Any website-scanning detection systematically misses exactly the platform's
> main deployment model, so the undercount is biased, not random. Sanity check: if the UK
> were even 1% of GHL's self-reported 1m+ businesses, you'd expect ~10,000 UK users, not
> 848 — plausibly an order of magnitude out.
>
> Note also that **848 and 62% are not comparable units** — an absolute detected count in
> one country versus a percentage share of installs on a different (probably global) base.
> They belong in the same table only as separate, separately-caveated rows.

**The arguments that pointed the other way** — recorded honestly, because they didn't
disappear when the decision was made:

1. **HubSpot's UK strength is independently attested** — the UK leads European HubSpot
   adoption, concentrated in exactly our buyer profile (London agencies, SaaS,
   professional services). This was the strongest single signal in the research.
2. **GHL's resale model suppresses end-user search demand.** Its UK users are mostly served
   _by_ an agency that already resells it to them — so they may not be searching
   "gohighlevel agency uk" at all. This holds regardless of installed-base size.

Neither is fatal to the GHL lead. (1) is an argument for keeping HubSpot as a strong second
section, which we do. (2) is an argument about _keyword targeting_, not positioning — and
it's exactly what the Phase 0 pull tests.

### Two markets — don't conflate them

The evidence above speaks to **demand**, not **supply**. They point in opposite directions
and only one of them has been looked at:

|            | Question                                        | What we have                                                                                                                                |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Demand** | How many UK businesses run or want GoHighLevel? | Only the 848 figure — unreliable, likely a heavy undercount                                                                                 |
| **Supply** | How many UK agencies sell GHL implementation?   | **Nothing. Not measured.** A handful of "Top N GoHighLevel Agencies UK" listicles exist, which proves a supply side exists and nothing more |

> **The UK GHL market is not "saturated" — that claim has no support here, and it isn't
> what thin demand means.** Saturation is a supply-side condition (too many agencies
> chasing the work). The open question is demand-side (too few users to headline a page
> for). Do not let one be read as the other.
>
> And note the corollary: **thin demand is not by itself a reason to drop GHL.** Thin
> demand usually travels with thin competition, and low volume + low difficulty is a
> winnable position — the identical logic that makes the compliance cluster the flagship
> play (§ 2). The inherited Naxdor observation also transfers: _most GHL agency sites are
> visually weak_, so a well-built one is disproportionately convincing.

> 🔲 **Phase 0 action — still run it, now as a targeting input.** The positioning is
> decided; the _keyword targeting_ is not. An Ahrefs/Semrush pull returns **volume (demand)
> and difficulty (competitive density) together**, and KD on `gohighlevel agency uk` _is_
> the saturation measure. Compare UK-locale volume **and** KD for
> `gohighlevel agency uk` / `ghl expert uk` / `gohighlevel setup` against
> `hubspot agency uk` / `hubspot consultant uk` / `hubspot implementation`.
>
> Read the result like this:
>
> | GHL volume | GHL difficulty | Targeting call (positioning stays GHL-led either way)                                                |
> | ---------- | -------------- | ---------------------------------------------------------------------------------------------------- |
> | Low        | Low            | **Ideal.** Cheap to rank; target GHL terms directly                                                  |
> | Low        | High           | Target HubSpot + generic "crm agency uk" terms for traffic; GHL page still ranks for brand/long-tail |
> | High       | Low            | **Best case.** Lean in hard on GHL terms                                                             |
> | High       | High           | Compete on craft and long-tail (`gohighlevel for [industry] uk`), not head terms                     |
>
> The two "Low volume" rows are the ones to plan for. In both, the GHL page still leads —
> it just earns its traffic from long-tail and from HubSpot-migration intent rather than
> from GHL head terms.

**Page structure:** `/services/crm-automation` headlines **GoHighLevel implementation,
automation and migrations**, with **HubSpot** as a named second section covering
implementation, onboarding and — commercially the sharpest of the two — **HubSpot-to-GHL
migration**, which converts HubSpot's larger installed base into GHL work.

The Naxdor insight transfers intact: _most GHL agency sites are visually ugly_, so a
well-built one is disproportionately convincing. That advantage is real in the UK too.

### Bucket 3 — Clinic & dental specialists (the ones to beat)

Our `/industries/*` pages must outclass these.

| Competitor               | Their move                                                                       | Gap we exploit                                                            |
| ------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Cosmetic Digital**     | 16+ years, cosmetic dental + facial aesthetics, strong SEO focus                 | Strongest incumbent. Beat on performance and on explicit compliance depth |
| **Digital Aesthetics**   | Aesthetics-only since 2007; websites, campaigns, call handling, pricing strategy | Broad ops offering, but not an engineering-led build                      |
| **Websites for Clinics** | Aesthetic + private healthcare clinics, UK & Ireland; conversion-focused         | Closest positioning match — study them properly                           |
| **Dot it Media**         | Leeds; NHS, private and cosmetic dental                                          | Regional, template-leaning                                                |
| **Rosemont Media**       | Premium cosmetic-healthcare design, high-end cosmetic dental                     | Premium tier; different price band                                        |
| **Xcelerator Dental**    | Single outcome positioning: "more patients"                                      | Sharp positioning, weaker craft                                           |

**The gap, concretely:** several of these do compliance _implicitly_ (they know the rules
because they live in the vertical). None of them make **compliance the product**. A page
titled "ASA-compliant aesthetic clinic websites" with the actual rules, the actual
enforcement numbers, and a downloadable copy checklist is Information Gain that ranks.

### Bucket 4 — Adjacent

UK local-SEO shops and lead-gen platforms competing for "local SEO [city]" terms. Relevant
mainly as SERP competition on location pages, not as positioning threats.

### Anti-patterns — inherited verbatim from Naxdor

Autoplay video heroes · unverifiable superlatives · stock-image carousels · hidden pricing
with no anchor · city pages with only the name swapped · templated FAQs · WordPress +
Elementor · modal newsletter pop-ups on entry · "trusted by industry leaders" with no logos
· fabricated team members · placeholder copy.

The last two are on `webask.co.uk` today. The list doubles as the teardown checklist.

### Comparison-content rules (inherited)

Never disparage. Compare on facts. Disclose partnership/affiliate status. Update annually.
Recommend yourself only when the comparison genuinely concludes in your favour.

---

## 4. Language — British English is a ranking signal

Not cosmetic. Google uses spelling as a language-identification signal, and pages written
consistently in UK English signal `en-GB`. The variants also carry **different search
volumes** — `optimisation` carries UK volume, `optimization` US volume. They are not
interchangeable for keyword research.

### Spelling

| US                      | UK                                  |
| ----------------------- | ----------------------------------- |
| optimization / optimize | **optimisation / optimise**         |
| personalization         | **personalisation**                 |
| organize / organization | **organise / organisation**         |
| color                   | **colour**                          |
| center                  | **centre**                          |
| program (non-software)  | **programme**                       |
| license (noun)          | **licence** (noun) / license (verb) |
| analyze                 | **analyse**                         |
| catalog                 | **catalogue**                       |
| enrollment              | **enrolment**                       |

### Vocabulary

| US          | UK                          |
| ----------- | --------------------------- |
| inquiry     | **enquiry**                 |
| ZIP code    | **postcode**                |
| LLC / Inc   | **Ltd / sole trader / LLP** |
| sales tax   | **VAT**                     |
| Main Street | **the high street**         |
| cell phone  | **mobile**                  |
| store       | **shop**                    |
| Mom & Pop   | **family-run**              |
| $ / +1      | **£ / +44**                 |
| 7/27/26     | **27 July 2026**            |

### Keyword-term skew

UK searchers skew toward **"web design"** over "web development" as the head term for the
same intent. Both belong in the cluster; the UK page's `<h1>` and `<title>` should lead
with the term with UK volume, not the US one.

**Consistency requirement:** the chosen variant must be uniform across the site, meta,
JSON-LD, email, social and GBP copy. Mixed variants dilute the language signal.

---

## 5. Keyword strategy

### Intent tiers (inherited structure)

| Tier                          | Pattern                                         | Where it lives                               |
| ----------------------------- | ----------------------------------------------- | -------------------------------------------- |
| Transactional                 | "hire X", "X agency", "X services", "X near me" | Service + Service×Location                   |
| Commercial investigation      | "best X", "X vs Y", "X cost/pricing"            | Industry pages, `/pricing`, comparison posts |
| Informational — bottom funnel | "how to X", "X checklist", "X rules"            | Blog (high conversion)                       |
| Informational — top funnel    | "what is X"                                     | Blog (later, once authority exists)          |
| Navigational                  | "webask X"                                      | Direct brand traffic                         |

Priority for a near-zero-authority domain: **transactional + commercial investigation** on
service/location/industry pages, and **bottom-funnel informational** on the blog. Top-funnel
waits.

### Service clusters — UK seeds

Nine clusters, one per service page. Seeds only — expand in Ahrefs/Semrush with a **UK
locale filter** and store in `data/keywords.json` per the inherited schema.

| Service         | UK head terms                                                              | UK long-tail / question seeds                                                                                                                    |
| --------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Web development | web design agency uk, web design company, website design [city]            | web design for small business uk, custom website design uk, nextjs development agency uk, how much does a website cost uk                        |
| E-commerce      | ecommerce website design uk, shopify agency uk                             | shopify development agency uk, woocommerce to shopify migration, ecommerce web design for small business                                         |
| Web app         | custom software development uk, web application development uk             | custom web app development agency uk, booking system development uk, customer portal development                                                 |
| UI/UX           | ux design agency uk, ui design agency                                      | ux audit services uk, design system agency uk, ui ux for saas uk                                                                                 |
| SEO             | seo agency uk, local seo services uk, seo company [city]                   | seo for small business uk, technical seo audit uk, core web vitals optimisation, how much does seo cost uk                                       |
| Mobile app      | app development company uk, mobile app developers uk                       | react native app development uk, app development cost uk                                                                                         |
| CRM             | gohighlevel agency uk, ghl expert uk, crm consultant uk, hubspot agency uk | gohighlevel setup uk, ghl implementation for smb, **hubspot to gohighlevel migration**, crm migration services uk, gohighlevel for [industry] uk |
| AI integration  | ai automation agency uk, ai chatbot agency uk, ai voice agent uk           | ai receptionist for uk business, ai workflow automation uk, ai voice agent cost uk                                                               |
| Maintenance     | website maintenance uk, website care plan uk                               | monthly website maintenance uk, website support retainer uk                                                                                      |

### Industry × service matrix — the high-leverage long-tail

This is where UK terms diverge most from Naxdor's, because the vocabulary is regulated.

**Aesthetic clinics**

| Service                    | UK target                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Web development            | aesthetic clinic website design uk, medical aesthetics website design                                                          |
| SEO                        | aesthetic clinic seo, seo for aesthetic clinics uk, local seo for clinics                                                      |
| CRM                        | crm for aesthetic clinics uk, clinic booking automation                                                                        |
| AI                         | ai receptionist for clinics uk, ai booking assistant for aesthetic clinic                                                      |
| **Compliance (the wedge)** | **asa compliant clinic website, advertising rules for aesthetic clinics uk, how to advertise anti-wrinkle injections legally** |

> ### ⚠️ CORRECTED 2026-07-28 — the original guidance here was unsafe
>
> This note originally read: _"target **'anti-wrinkle injections'**, never the POM brand name."_
> The second half is right; **the first half is not.** The ASA treats wrinkle-relaxing
> euphemisms — "wrinkle-relaxing treatments", "beautox", "brotox" — as **implied promotion of
> the POM**, and has upheld complaints on exactly that basis. Recommending "anti-wrinkle
> injections" as the safe term would have handed clinics advice that gets them ruled against,
> on the one subject our authority depends on.
>
> **Corrected guidance:**
>
> - **A clinic's public pages** advertise the **consultation**, not the treatment —
>   _"consultations for lines and wrinkles"_. No POM name, no euphemism.
> - **WebAsk's editorial content** may name a POM **when discussing the regulation of its
>   advertising** ("clinics may not advertise Botox" is commentary on a rule, not an ad).
>   Editorial context only — never in a service page's sales copy, `<title>` or meta.
> - **Keyword targeting** goes after the _practitioner's_ question ("can i advertise botox on
>   my website", "asa rules aesthetic clinic advertising"), never patient-facing treatment terms.
>
> Full reasoning, the named ASA rulings, and the two-click price-list rule that becomes our
> flagship deliverable: [`08-seo-architecture.md`](08-seo-architecture.md) §§ 4 and 6.

**Dental practices**

| Service         | UK target                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------ |
| Web development | dental website design uk, private dental practice website                                  |
| SEO             | dental seo uk, dental seo agency, seo for dentists [city]                                  |
| Web app         | patient portal development uk, online booking for dental practice                          |
| AI              | ai receptionist for dental practice uk                                                     |
| **Compliance**  | **gdc compliant dental website, dental marketing compliance uk, cqc website requirements** |

**Beauty & wellness clinics**

| Service         | UK target                                                |
| --------------- | -------------------------------------------------------- |
| Web development | beauty clinic website design uk, wellness clinic website |
| SEO             | beauty salon seo uk, wellness clinic marketing uk        |

### Blog clusters

| Cluster                                 | Anchor                          | Seed posts                                                                                                                                                                                                                                                                       |
| --------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A — UK clinic compliance** (flagship) | `/industries/aesthetic-clinics` | "Advertising rules for UK aesthetic clinics (2026)" · "What the 2026 licensing scheme means for your clinic website" · "GDC-compliant dental marketing: the practical checklist" · "Why your clinic website probably breaches the CAP Code"                                      |
| B — UK SEO                              | `/services/seo`                 | "Local SEO checklist for UK businesses (2026)" · "How to rank in the Map Pack without a shopfront" · "Core Web Vitals: a UK implementation guide"                                                                                                                                |
| C — CRM                                 | `/services/crm-automation`      | "GoHighLevel for UK service businesses: the 2026 buyer's guide" · "GoHighLevel vs HubSpot for UK SMBs" · "Migrating from HubSpot to GoHighLevel: a UK playbook" · "GoHighLevel pricing in GBP: what you actually pay" · "PECR and your CRM: what UK B2B outreach can legally do" |
| D — Web development                     | `/services/web-development`     | "How much should a UK small business website cost in 2026" · "Custom vs WordPress: real UK performance numbers"                                                                                                                                                                  |
| E — AI for UK SMBs                      | `/services/ai-integration`      | "AI receptionists and UK law: PECR, Ofcom and consent" · "AI voice agent ROI for UK service businesses"                                                                                                                                                                          |

Cluster A is the differentiated one and should ship first in Phase 3. Cluster C's PECR post
and Cluster E's Ofcom post are unusual, useful, and cheap for us to write because the
research already exists in [`03-uk-compliance.md`](03-uk-compliance.md).

### `data/keywords.json` — inherited schema and CI lints

Unchanged from Naxdor: each entry maps `term → primaryUrl` with `intent`, `msv`, `kd`,
`supportingUrls`, `cluster`, `vertical`. CI checks no two transactional keywords share a
`primaryUrl`, every `primaryUrl` resolves to a real page, and every keyword has a cluster.
Re-run the research quarterly.

**Difficulty filter for a new domain:** KD ≤ 35 by default, lower where possible. The
`.co.uk` starts with effectively no authority — chasing "seo agency uk" at launch is wasted
effort. Compliance long-tail and city-level terms are where early wins live.

---

## 6. City strategy

### The competitive picture

| City                              | Read                                                                                                                                                                                                                   | Source                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **London**                        | The UK's hardest SEO market. Legal/financial CPCs exceed **£50/click**. Borough-level targeting is the _correct_ strategy, not a compromise. Outer-London suburbs offer London revenue at Nottingham-level competition | SERPTool, _25 UK cities ranked by local SEO opportunity 2026_; xsquareseo |
| **Manchester**                    | #2 most competitive major city. Financial services in Spinningfields approach London density                                                                                                                           | SERPTool, 2026                                                            |
| **Birmingham**                    | 1.1m population producing SERPs **softer than Manchester or Leeds** for comparable queries                                                                                                                             | ibid.                                                                     |
| **Bristol / Edinburgh / Glasgow** | Strong opportunity-to-competition ratios; faster results at lower spend                                                                                                                                                | ibid.                                                                     |
| **Reading**                       | Thames Valley, B2B-heavy — a genuine B2B pocket                                                                                                                                                                        | ibid.                                                                     |

### The vertical overlay — where clinics with budget actually cluster

Competitive difficulty alone would send you to Bristol or Birmingham. But the flagship
wedge is clinic compliance (§ 2), so the city choice has to satisfy a second constraint:
**where are the doctor-led clinics that can afford us?**

Per the UCL deprivation gradient, that is _not_ the highest-density urban areas. It is
affluent metro-adjacent corridors. The best-evidenced one in the UK outside London is the
**Cheshire "golden triangle" on Manchester's southern fringe** — Hale, Altrincham,
Wilmslow, Alderley Edge, Knutsford, Bramhall.

Evidence: a dense cluster of _doctor-led_ clinics operates across exactly these towns —
Bank MediSpa (Hale), Dr Nyla Medispa (Alderley Edge + Manchester), The Aesthetics Suite
(Wilmslow), The Aesthetics Doctor (Cheshire, Manchester, Leeds), Lumiere Clinic
(Manchester & Cheshire), Elegance Aesthetics (Worsley + Hale), Mc Aesthetics (Manchester,
Birmingham, Leeds). Their own marketing copy names catchment across Altrincham, Sale,
Alderley Edge, Wilmslow, Bramhall, Knutsford, plus Liverpool, Chester and Warrington.

> ⚠️ **Confidence: 🟡 medium.** This is a named-clinic pattern, not a published count.
> **No source publishes UK aesthetic clinic counts by city** — the UCL study stops at
> nation level, and directories are coverage-biased. **Verify cheaply in Phase 0:** run
> Google Maps result counts for "aesthetic clinic" across candidate cities, and check how
> many are doctor-led. That's a better proxy than any directory, and it takes an hour.

### Recommendation — Manchester primary

**Decided 2026-07-27.** Manchester replaces Oxford as the anchor city. Oxford and Reading
are **dropped entirely** — they were chosen only because of a presumed Oxford presence,
which no longer exists (D1: fully remote).

| Hub                               | Why                                                                                                                                                                                                                                                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Manchester** _(primary)_        | 3.0m Greater Manchester population, £93.2bn GVA — the UK's second metro economy. Sits directly adjacent to the best-evidenced premium clinic corridor outside London. #2 hardest UK SEO market, but that ranking is for head terms like "web design Manchester", not for `aesthetic clinic website design manchester` |
| **Cheshire** _(the actual prize)_ | Where the doctor-led clinics are. "Cheshire" is a live UK search identifier and the clinics themselves market under it. Lower competition than Manchester, higher buyer quality than anywhere                                                                                                                         |
| **Leeds**                         | Second northern metro. Independently flagged as strong affluence-to-competition ratio, and a real dental market. Note the competition: Dot it Media (dental specialists) is Leeds-based                                                                                                                               |

**Why not London**, despite having the most clinics: it is the UK's hardest SEO market
(£50+ CPCs), _and_ it is where the entrenched clinic specialists already sit (Cosmetic
Digital, Websites for Clinics, Rosemont Media). Worst competitive entry point available for
a zero-authority domain. London enters later at **borough level**
(`/locations/shoreditch-london`), never as a single `/locations/london` page — unwinnable.

**Why not Birmingham first**, despite the softest big-metro SERPs: no comparable evidenced
premium clinic corridor. It stays in the programmatic expansion ring, not the hand-crafted set.

**Expansion ring** (programmatic, after the first batch proves out): Liverpool, Chester,
Warrington, Stockport, Bolton, Preston — then Birmingham, Sheffield, Nottingham. North-West
first, radiating outward. This mirrors `naxdor.se`'s regional-cluster approach (Halmstad +
4 surrounding towns) rather than `naxdor.com`'s national-metro scatter.

> **Note on framing (locked 2026-07-27):** the site is **national with Manchester-first
> locations**, not a Manchester agency. Home and service pages speak to any UK SMB; the
> city focus surfaces through `/locations/*` and the programmatic expansion order. This
> preserves the locked service-led rule and keeps southern leads winnable. See
> [`00-overview.md`](00-overview.md) § Positioning.

**Programmatic `[service] × [city]` expansion** follows the inherited discipline exactly:
staged, `noindex` first, promoted only after the quality gate, 6–10 pages in the first batch.
`data/locations.ts` needs UK-shaped enrichment — county instead of state, real metro
population, notable local industries and districts, `nearbyCities`, and honest
`timeZone: "Europe/London"`.

**Slug pattern:** `[city]` alone where unambiguous (`manchester`, `leeds`, `birmingham`), or
`[city]-[county]` where not (`newcastle-tyne-and-wear`). Cheshire as a county-level hub is
`cheshire`. Do **not** copy the US `[city]-[state-abbrev]` form — the UK has no equivalent
and it reads as a US import to exactly the audience we're targeting.

---

## 7. UK pricing anchors

> ⚠️ **Decision gate D4 — founder confirms before publish.** These are research-derived
> proposals, not decisions. `naxdor.se` used the same gate for the same reason: published
> prices are a commitment.

### Market evidence

| Segment                                               | Range                                                                                        | Source                      |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| UK agency, standard small-business website            | **£2,500–£10,000** (London higher for the same spec)                                         | Duport / GetYouOnline, 2026 |
| Regional agency average                               | **£3,000–£6,000** (design, responsive, basic SEO, CMS, 5–15 pages)                           | dotitmedia, 2026            |
| Freelancer / starter                                  | £1,500–£3,000                                                                                | Valoron, 2026               |
| Small-team build for an established SMB wanting leads | £4,000–£7,000                                                                                | ibid.                       |
| Ongoing (domain, hosting, maintenance)                | £100–£300/year for basics                                                                    | Duport, 2026                |
| SEO retainer, UK small business                       | **£150–£800/mo**; light upkeep from £150, active local £250–£500, full campaign £500–£1,500+ | dotwall / RedEagle, 2026    |
| Local SEO specifically                                | **£300–£4,000+/mo**; most single-location SMBs £500–£1,500                                   | wrise / NetTrackers, 2026   |
| The junk tier                                         | ~£99/mo — thin reporting, automated spam links, no strategy                                  | dotwall, 2026               |

### Proposed anchors

| Service                   | "Starting at" | Rationale                                                                                               |
| ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| Web development           | **£3,500**    | Above the freelancer band, at the low end of regional agency — consistent with "we're not the cheapest" |
| E-commerce                | **£6,500**    | —                                                                                                       |
| Web app / custom software | **£9,500**    | —                                                                                                       |
| UI/UX design              | **£3,000**    | —                                                                                                       |
| SEO                       | **£750/mo**   | Clear of the junk tier, inside the "active local campaign" band                                         |
| Mobile app                | **£12,000**   | —                                                                                                       |
| CRM automation            | **£2,500**    | HubSpot implementation band                                                                             |
| AI integration            | **£4,500**    | —                                                                                                       |
| Maintenance & care plans  | **£250/mo**   | Bronze tier; Silver/Gold scale from Naxdor's playbook                                                   |

Displayed as **"Starting at £X"** + custom-quote CTA — the inherited pattern. Care Plan
tiers convert from Naxdor's USD ladder (Bronze / Silver / Gold) to GBP.

**VAT presentation:** "+ VAT where applicable" until decision gate D2 resolves. Do not print
"inc. VAT" or "ex. VAT" definitively before then — see
[`03-uk-compliance.md`](03-uk-compliance.md) § VAT.

---

## 8. What we deliberately steal

| Practice                                            | Source                                                  | Where it lands                                                                   |
| --------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| "Starting at £X" on every service page              | WebFX pattern, inherited via Naxdor                     | Service pages, `/pricing`                                                        |
| Industry × service URL matrix                       | Thrive pattern, inherited                               | Phase 2–4 IA                                                                     |
| Original research as link-bait                      | First Page Sage pattern, inherited                      | The compliance cluster — our version writes itself                               |
| Case-study-first home                               | Digital Silk pattern, inherited                         | Home design                                                                      |
| Aesthetics-only depth signalling                    | Digital Aesthetics, Websites for Clinics                | `/industries/aesthetic-clinics`                                                  |
| Displaying regulator registrations as trust signals | UK dental practice convention (CQC/GDC numbers on site) | Applied to _clients'_ sites; for us, the analogue is naming the rules we work to |

---

## 9. Review cadence

- **Quarterly** — re-run this doc. New entrants, redesigned competitors, changed regulation.
- **Per blog post** — scan the top 3 UK SERP results for the target keyword; confirm
  Information Gain before writing.
- **Regulatory watch (new, UK-specific)** — the aesthetics licensing scheme is actively
  rolling out and the CMA private-dentistry study reports in due course. Both will move.
  Set a calendar check; stale regulatory content is worse than none.
- **Per new industry** — deep-dive three UK vertical competitors before the page ships.
