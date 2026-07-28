# 08 — SEO Architecture: Silos, Entities and the Content Gap

> The structural SEO layer: how URLs are grouped into silos, which entities the site claims,
> what the competition actually does, and where the unclaimed ground is.
>
> Builds on [`02-uk-market-research.md`](02-uk-market-research.md) § 5 (keyword seeds) and
> [`05-seo-strategy-uk.md`](05-seo-strategy-uk.md) (pillars, migration, citations) — it does
> not repeat them. Where it **corrects** them, that is called out explicitly.
>
> Researched and authored 2026-07-28. Live SERP + competitor evidence, not desk assumption.

---

## 0. The three findings that shape everything below

**1. The compliance gap is real, and it is wider than assumed.** Every specialist UK
aesthetic web agency checked competes on _beauty_ — "award-winning", "premium",
"trusted by 100+ clinics". **None of them mentions the ASA, the CAP Code, the MHRA, the GDC
or compliance anywhere on their service pages.** Not as a service, not as a differentiator,
not as a footnote. Verified 2026-07-28 on [Underline](https://underline.agency/aesthetic-clinic-web-design/)
and [Aesthetic Web](https://aestheticweb.co.uk/aesthetic-clinic-website-design/).

**2. But the wedge is not "we know you can't say Botox".** That framing is weak — it is a
fact any practitioner already half-knows, and it is negative. The real wedge is one layer
deeper and is _shaped like our product_:

> **CAP permits a POM price list — but only if the site's information architecture puts it
> at least two clicks from the homepage, reached through a consultation-first path, kept
> purely informational, and out of the primary navigation.**

That is not a copywriting rule. **That is a site-architecture requirement**, and it is the
single most defensible thing WebAsk can say: _we are the agency that builds the structure
that makes a compliant clinic site possible without gutting its rankings._ Nobody in the
vertical is making that argument.

**3. Doc 02 § 5's recommended terminology is unsafe and is corrected below** (§ 6). It
advises targeting **"anti-wrinkle injections"** as the safe alternative to the brand name.
The ASA treats wrinkle-relaxing euphemisms as _implied_ promotion of the POM and has upheld
complaints on exactly that basis. Shipping that advice would have made us wrong about the
one thing our authority rests on.

---

## 1. Silo architecture

A silo is a topically coherent cluster with one pillar, supporting pages that link **up** to
it, and deliberate, sparse cross-silo linking. The purpose is to concentrate relevance rather
than spray it, and to make cannibalisation structurally impossible.

```
/                                   ← brand + national value prop (D8: service-led)
│
├── SILO 1 · SERVICES  (transactional · national)
│   /services                       pillar
│   ├── /services/[service]         9 service pages
│   └── /services/[service]/[area]  programmatic (noindex until promoted)
│
├── SILO 2 · INDUSTRIES  (commercial investigation · vertical)
│   /industries                     pillar
│   ├── /industries/aesthetic-clinics
│   ├── /industries/dental-practices
│   ├── /industries/beauty-wellness-clinics
│   └── /industries/[industry]/[area]   later phase
│
├── SILO 3 · LOCATIONS  (local · no GBP available)
│   /locations                      pillar
│   └── /locations/{manchester,cheshire,leeds}
│
├── SILO 4 · COMPLIANCE  ★ the wedge  (informational · E-E-A-T)
│   /blog/topic/clinic-compliance   hub (Phase 3)
│   └── cluster posts
│
├── SILO 5 · PROOF & TRUST  (conversion · E-E-A-T)
│   /about · /process · /pricing · /case-studies · /contact
│
└── LEGAL  (noindex-adjacent, but required)
    /legal/{privacy,terms,cookies,company-information}
```

### Linking rules (hard-coded into templates, per doc 04 § 8)

| Direction                | Rule                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Up**                   | Every child links to its pillar. Always.                                                                                                                                                |
| **Down**                 | Pillar links to every child.                                                                                                                                                            |
| **Lateral, in-silo**     | Free — siblings link to each other.                                                                                                                                                     |
| **Cross-silo**           | **Deliberate and sparse.** Service ↔ Industry only where the service is genuinely core to that vertical; Location → Service always; Compliance → Industry (never Compliance → Service). |
| **Anti-cannibalisation** | `data/keywords.json` maps each term to exactly ONE `primaryUrl`. CI lints it.                                                                                                           |

### Why compliance is a _blog topic archive_, not a `/guides/` silo — for now

Doc 04 § 3 recommends starting as `/blog/topic/clinic-compliance` (reuses an existing route,
zero new engineering) and promoting only if it earns traffic. **That discipline is correct
and is kept.** What was missing is the promotion trigger, so it is defined here:

> **Promote to a standalone `/guides/uk-clinic-compliance/` hub when the cluster has ≥ 6
> published posts AND the topic archive earns ≥ 200 organic sessions/month for two
> consecutive months.** Below that, a dedicated hub is a thin page competing with its own
> children.

---

## 2. ⚠️ Slug alignment must be resolved BEFORE the keyword file is seeded

The code and doc 04 § 3 currently disagree on 5 of the 9 service slugs. The inherited
(Naxdor) slugs are shorter; doc 04's are keyword-aligned.

| Code today (`content/services/*.mdx`) | Doc 04 § 3 target        | Verdict       |
| ------------------------------------- | ------------------------ | ------------- |
| `web-development`                     | `web-development`        | ✅ agree      |
| `ui-ux-design`                        | `ui-ux-design`           | ✅ agree      |
| `seo`                                 | `seo`                    | ✅ agree      |
| `ai-integration`                      | `ai-integration`         | ✅ agree      |
| `e-commerce`                          | `ecommerce-development`  | ❌ **rename** |
| `web-applications`                    | `web-app-development`    | ❌ **rename** |
| `mobile-apps`                         | `mobile-app-development` | ❌ **rename** |
| `crm`                                 | `crm-automation`         | ❌ **rename** |
| `maintenance`                         | `maintenance-support`    | ❌ **rename** |

**Recommendation: adopt doc 04's slugs, and do it now.** Reasons:

1. The slug is a genuine (if minor) relevance signal, and more importantly it sets the
   canonical URL every internal link, keyword mapping and future backlink points at.
2. `/services/crm` and `/services/maintenance` are ambiguous out of context;
   `/services/crm-automation` and `/services/maintenance-support` carry the intent.
3. **Cost of doing it now: near zero.** Nothing is published, no external link exists, no
   keyword file references them yet.
   **Cost of doing it after launch: 5 more permanent redirects, forever.**

> 🚩 **This is why `data/keywords.json` has NOT been reseeded in this pass.** Every entry
> carries a `primaryUrl`, and 300+ of them would have to be rewritten the moment the slugs
> change. Seeding first would be building on sand. The rename is the first implementation
> step; the keyword seed follows immediately after.

Files affected by the rename: `data/services.ts`, `content/services/*.mdx` (5 filenames +
frontmatter slugs), `components/layout/_nav-data.ts`, `scripts/check-keywords.ts`
(`SERVICE_SLUGS`), `e2e/a11y.spec.ts`, `app/sitemap.ts`, `.lighthouserc.cjs`, and
`lib/redirects.ts` `KNOWN_ROUTES` (only `/services/seo` is currently referenced, so no
redirect target breaks).

---

## 3. Competitor analysis — the specialist vertical

Researched 2026-07-28. Bucket 3 of doc 02 § 3 ("clinic & dental specialists — the ones to
beat") is the only bucket that matters for the wedge; the generalists are already covered.

| Agency                                                                       | Positioning                                                                       | Pricing                    | Stack             | Compliance? |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------- | ----------------- | ----------- |
| [Underline](https://underline.agency/aesthetic-clinic-web-design/)           | "Branding & Web Design for Aesthetic Clinics" · award-winning · 100+ clinic sites | **Hidden**                 | WordPress         | **None**    |
| [Aesthetic Web](https://aestheticweb.co.uk/aesthetic-clinic-website-design/) | "turns visitors into patients" · 10+ yrs · 100+ clinics · 5/5 Google              | **£950–£4,950+ published** | Bespoke WordPress | **None**    |
| [Ashrose](https://www.ashroseagency.com/aesthetics-website-design-uk)        | "bespoke, high-converting"                                                        | Hidden                     | —                 | **None**    |
| [Aesthetics Desk](https://aestheticsdesk.co.uk/aesthetics-website-design/)   | "elegant, refined" · hands-off, done-for-you                                      | Hidden                     | —                 | **None**    |
| [Aesthetic Launch Lab](https://aestheticlaunchlab.com/)                      | "build, rank, grow" · UK aesthetics specialist                                    | — (blocked our fetch)      | —                 | Unverified  |
| [Websites for Clinics](https://www.websitesforclinics.com/)                  | UK + Ireland clinic specialist                                                    | Hidden                     | —                 | **None**    |

### What they do well — steal this

- **Vertical specificity in the H1.** "Aesthetic clinic website design", not "web design for
  healthcare". They out-rank generalists on exact-match intent alone.
- **Volume proof.** "100+ clinic websites live" is concrete and checkable. Our equivalent
  must be honest — we do not have 100 clinics, and inventing them is a DMCC Act offence.
- **Aesthetic Web publishes a price range.** This is the vertical norm being set, and it
  validates doc 02 § 7's transparent-pricing posture. Hiding price is now the outlier.

### What they do badly — the gaps

| Gap                             | Evidence                                                                                                    | How WebAsk fills it                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Zero regulatory literacy**    | No ASA / CAP / MHRA / GDC / CQC mention on any page checked                                                 | The entire Silo 4 + a compliance section on every industry page |
| **Compliance-hostile IA**       | Clinic sites are built with treatment pages in the primary nav — the exact structure CAP restricts for POMs | Consultation-first architecture (§ 4) as a _named deliverable_  |
| **WordPress performance floor** | Self-declared "bespoke WordPress"                                                                           | Next.js; the site is the portfolio (doc 00, job 1)              |
| **Anti-pattern saturation**     | "multi award-winning", "trusted by 100+", hidden pricing                                                    | Inherited anti-pattern table, doc 01                            |
| **No Information Gain**         | Every page says "beautiful, converting, bespoke"                                                            | Cluster A ships something the SERP genuinely lacks              |

---

## 4. ★ The compliance-architecture wedge, stated precisely

This is the thing to build the brand on. It must be stated _accurately_ — being the
compliance agency and getting the compliance wrong is the worst possible outcome.

### What the rules actually say

- **CAP Code rule 12.12** — prescription-only medicines may not be advertised to the public.
  Botulinum toxin (Botox, Vistabel, Dysport, Azzalure, Bocouture) is a POM in the UK.
- **Indirect references count.** The ASA treats "wrinkle-relaxing treatments", "#brotox" and
  "#beautox" as implied promotion of the POM. Named upheld rulings include **Venus Beauty
  Lounge (5 Aug 2015)**, **HB Health of Knightsbridge (15 Jan 2014)**, **Dermaskin Clinics
  (15 Jan 2014)**, **Beauty Boutique Aesthetics (25 Sep 2019)** and **Glowery Ltd
  (12 Apr 2023)**.
- **CAP rule 12.18** — no celebrity or health-professional endorsement of a POM.
- **What IS permitted:** advertising a **consultation** — e.g. _"a consultation for the
  treatment of lines and wrinkles"_. The POM must not be named in the initial ad.
- **The architecture rule:** a POM may appear in a price list **only** where it sits at least
  two clicks from the homepage, is reached via consultation pages, stays purely informational
  with no promotional content, and appears in neither the homepage nor the primary navigation.

> **⚠️ Verify before publishing.** These are our summaries of ASA/CAP guidance as at
> 2026-07-28, not legal advice. Doc 03 § Copy review already mandates **CAP Copy Advice**
> (free, non-binding) for uncertain clinic copy. Every claim in Silo 4 goes through it before
> it publishes. Our authority is only worth anything while it is right.

### The deliverable this becomes

**"Consultation-first architecture"** — a named, sellable structural pattern:

```
Homepage  →  /treatments/lines-and-wrinkles   (consultation, no POM named)
                     ↓  (click 2)
             /treatments/lines-and-wrinkles/pricing   (informational price list)
```

with the POM absent from the primary nav, absent from the homepage, and absent from every
meta title and description. Sitemap and internal linking are built to match.

### The 2026 licensing scheme — state it accurately, and date it

As at **July 2026** the England licensing scheme for non-surgical cosmetic procedures is
**not yet in force**. The Government published its consultation response in **August 2025**
(11,848 responses), proposing a **red / amber / green** risk categorisation, and stated an
intention to consult on the highest-risk procedures (fillers for breast, buttock and genital
augmentation) in **spring 2026**. Since **1 October 2021** it has been a criminal offence in
England to administer botulinum toxin or filler for a cosmetic purpose to under-18s.

> Doc 06 Phase 3 already diaries a regulatory watch. **Stale regulatory content is worse than
> none** — it inverts the entire E-E-A-T position.

---

## 5. Entity model — what this site claims to be

Google's post-2026 direction rewards resolvable entities over keyword strings. The graph is
already implemented in `lib/jsonld.ts`; this is what it should _mean_.

| Entity           | Node                                                           | Notes                                                                                                          |
| ---------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **WebAsk**       | `Organization` + `ProfessionalService`, `@id` `/#organization` | `parentOrganization` → naxdor.com. `areaServed` United Kingdom. **No `address`, no `geo`**                     |
| **Ansar Cheema** | `Person`, `@id` `/about#ansar-cheema`                          | `founder` + every author byline. **The single biggest E-E-A-T lever we own** — real credentials, real `sameAs` |
| **9 services**   | `Service`, `@id` `/services/<slug>#service`                    | `provider` → Organization, `Offer.priceCurrency` GBP                                                           |
| **3 industries** | `Service` + `audience` → `BusinessAudience`                    | No `Offer` — a vertical bundle isn't a priced service                                                          |
| **3 areas**      | `ProfessionalService`, `areaServed` only                       | `City` → `AdministrativeArea` → `Country`; Cheshire is `AdministrativeArea` directly                           |

### The semantic play: co-occur with the regulatory entities

`knowsAbout` on the Organization is currently technology-only (Next.js, React, GoHighLevel…).
**That is the biggest missed opportunity in the graph.** No UK clinic-web competitor
associates itself with the regulators. Being the entity that reliably co-occurs with them —
in `knowsAbout`, in body copy, in `mentions` on compliance articles — is close to unclaimed.

Add to `knowsAbout`:

> ASA (Advertising Standards Authority) · CAP Code · MHRA · General Dental Council ·
> Care Quality Commission · Competition and Markets Authority · UK GDPR · PECR ·
> DMCC Act 2024 · Non-surgical cosmetic procedures licensing · Core Web Vitals

Every compliance article should carry `about` / `mentions` pointing at the relevant regulator,
and cite the primary source (asa.org.uk, gov.uk, gdc-uk.org) with the date. Citation of
primary regulatory sources is both an E-E-A-T signal and simply correct practice.

---

## 6. ⚠️ Correction to doc 02 § 5 — the terminology guidance was unsafe

Doc 02 § 5 says:

> _"Note the vocabulary constraint: target **'anti-wrinkle injections'**, never the POM brand
> name — both because the ASA prohibits it and because our own pages would breach the rule by
> carrying it."_

**The second half is right. The first half is not.** The ASA treats wrinkle-relaxing
euphemisms as _implied_ promotion of the POM and has upheld complaints on that basis, so
recommending "anti-wrinkle injections" as the safe target term would have handed clinics
advice that gets them ruled against.

| Context                         | Guidance                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A clinic's own public pages** | Advertise the **consultation**, not the treatment: _"consultations for lines and wrinkles"_. Do not name the POM. Do not use "anti-wrinkle injections", "wrinkle-relaxing", "beautox", "brotox".                                                                                                                                  |
| **WebAsk's editorial content**  | We may name POMs **when discussing the regulation of their advertising**. Writing "clinics may not advertise Botox" is commentary on the rule, not an ad for the medicine. This distinction is what lets Silo 4 exist at all — but keep it in editorial context, never in a service page's sales copy, title or meta description. |
| **Keyword targeting**           | Target the _practitioner's_ question — "can I advertise botox on my website", "asa rules aesthetic clinic advertising" — which is informational and ours to answer. Do **not** target patient-facing treatment terms.                                                                                                             |

Doc 02 § 5 should be amended accordingly; this section is the authority until it is.

---

## 7. Question research — what the pages must actually answer

Answer-first, in the page's own words, with a number wherever one exists. The first FAQ on any
service / industry / location page is **always the pricing question** (inherited rule).

### Money questions (Silo 1 + `/pricing`)

| Question                                              | Evidence to answer with                                                                                                                                                                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How much does a website cost for a UK small business? | Market data 2026: DIY builder **£240–£360/yr**; freelancer **£800–£3,000** (typical 4–5 page build **£1,200–£2,000**); agency **£2,500–£10,000**. Most UK SMBs spend **£1,500–£5,000**. Ongoing: **15–20% of build cost per year** |
| What's the ongoing cost after launch?                 | £100–£300/yr for domain + hosting on a freelance build; care plans monthly                                                                                                                                                         |
| How long does a website take?                         | Answer from the delivery playbook, in weeks, with the gating factor named (content)                                                                                                                                                |
| How much does SEO cost in the UK?                     | Monthly retainer bands + what changes at each                                                                                                                                                                                      |
| Why are you more expensive than a £950 template?      | Core Web Vitals, ownership, compliance architecture — with numbers                                                                                                                                                                 |

> Aesthetic Web publishes **£950–£4,950+**. Any WebAsk clinic pricing must be able to answer
> "why more than £950" in one sentence. That answer is the compliance architecture and the
> performance floor — not "we're premium".

### Practitioner questions (Silo 4 — the wedge; near-zero competition)

- Can I advertise Botox on my clinic website? _(No — CAP 12.12. This is the flagship post.)_
- What can I legally say about injectables on my website?
- Can I put Botox on my price list? _(Yes — conditionally. The two-click rule. Nobody explains this.)_
- Are "anti-wrinkle injections" and "wrinkle-relaxing" safe alternatives? _(No.)_
- Do I need a licence to offer aesthetic treatments in 2026? _(Scheme not yet in force — status as at July 2026.)_
- What are the GDC rules for advertising dental treatments?
- Does my clinic website need a cookie banner, and what makes it compliant? _(PECR equal prominence.)_
- Are before-and-after photos allowed? _(Implied POM advertising where the procedure is evident.)_

### Local questions (Silo 3)

- Do you work with businesses in Manchester if you have no office here? _(Yes — remote-first, honestly stated. D1.)_
- Can you help me rank locally without a Google Business Profile? _(We have none ourselves — doc 05 § 4 is the honest answer, and it is unusually credible coming from someone who lives with the constraint.)_

---

## 8. Priority order — what earns first on a zero-authority `.co.uk`

Difficulty filter stays **KD ≤ 35**. Chasing "web design agency uk" at launch is wasted effort.

| Priority | Target                                                                             | Why                                                                              |
| -------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **1**    | Silo 4 compliance long-tail                                                        | Near-zero competition, genuine Information Gain, and it feeds the industry pages |
| **2**    | Industry × service (`aesthetic clinic website design`, `dental website design uk`) | Exact-match commercial intent, beatable specialists                              |
| **3**    | Cost / pricing questions                                                           | High commercial intent, and transparency is already our posture                  |
| **4**    | Service × area (Manchester, Cheshire, Leeds)                                       | Local intent without a GBP; programmatic, gated by the uniqueness contract       |
| **5**    | Service head terms (`seo agency uk`)                                               | Only once authority exists. Not a launch target                                  |

---

## 9. Implementation order

1. **Lock the service slugs** (§ 2) — before anything references them.
2. **Seed `data/keywords.json`** against the locked slugs; swap `check-keywords.ts`'s
   `CITY_STATE_RE` for a membership check against `LOCATION_SLUGS`. _(Both in one commit —
   the regex rejects `manchester` today, and the file's 30 stale US rows point at pages that
   no longer exist.)_
3. **Amend doc 02 § 5** with § 6 above.
4. **Add the regulatory entities** to `knowsAbout` (§ 5).
5. Phase 1 content, then Silo 4 first in Phase 3 (doc 06 already orders this correctly).

---

## Sources

- [ASA — Beauty and Cosmetics: Botulinum toxin (Botox) products](https://www.asa.org.uk/advice-online/beauty-and-cosmetics-botulinum-toxin-products.html)
- [ASA/CAP Bitesize — Rules for advertising Botox](https://www.asa.org.uk/advice-and-resources/cap-bitesize/rules-for-advertising-botox.html)
- [ASA/CAP — Prescription-Only Medicines: key advice resources](https://www.asa.org.uk/advice-and-resources/resource-library/prescription-only-medicines-key-advice-resources.html)
- [House of Commons Library — The regulation of non-surgical cosmetic procedures in England](https://commonslibrary.parliament.uk/research-briefings/cbp-10331/)
- [CMS Law-Now — Regulating beauty: what the Government's consultation means](https://cms-lawnow.com/en/ealerts/2025/08/regulating-beauty-what-the-government-s-consultation-means-for-non-surgical-procedures)
- [Underline — Aesthetic clinic web design](https://underline.agency/aesthetic-clinic-web-design/)
- [Aesthetic Web — Aesthetic clinic website design](https://aestheticweb.co.uk/aesthetic-clinic-website-design/)
- [Ashrose Agency](https://www.ashroseagency.com/aesthetics-website-design-uk) · [Aesthetics Desk](https://aestheticsdesk.co.uk/aesthetics-website-design/) · [Websites for Clinics](https://www.websitesforclinics.com/)
- UK web design cost benchmarks 2026: [Duport](https://www.duport.co.uk/blog/small-business-website-cost-uk/) · [Havis](https://havis.dev/blog/how-much-does-a-small-business-website-cost-uk-2026/) · [EdTheDev](https://edthedev.co.uk/blog/website-cost-uk/)
