# 08 — SEO Architecture: Silos, Entities and the Content Gap

> The structural SEO layer: how URLs are grouped into silos, which entities the site claims,
> what the competition actually does, and where the unclaimed ground is.
>
> Builds on [`02-uk-market-research.md`](02-uk-market-research.md) § 5 (keyword seeds) and
> [`05-seo-strategy-uk.md`](05-seo-strategy-uk.md) (pillars, migration, citations) — it does
> not repeat them. Where it **corrects** them, that is called out explicitly.
>
> Researched and authored 2026-07-28. Live SERP + competitor evidence, not desk assumption.
> **Corrected 28 September 2026** against primary sources (§§ 0.2, 0.3, 4, 6 and 7): the
> price-list route in the ASA's words, "anti-wrinkle injections" as conditional, the A1/A2
> title exception, the rulings remapped, licensing re-dated, and the review route.

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

> **The ASA describes a route for a price list that names a POM: advertise the consultation
> on the homepage; from there, a page about the consultation; from that, a further page
> "ideally two clicks from the homepage" (CAP Bitesize, undated). If clients "can only get to
> the price list after going through a page promoting a consultation", then "this might be
> acceptable"; a price on the homepage, or "a direct link to “Prices” which mentions Botox", is
> "unlikely to be acceptable" (ASA FAQ, 23 January 2020).**
>
> _(Corrected 28 September 2026. This quote box said "CAP permits a POM price list — but only
> if … at least two clicks from the homepage … and out of the primary navigation". No ASA page
> says "at least two clicks" or "primary navigation", and "permits" hardened the FAQ's "might
> be acceptable". Keeping the POM out of the primary navigation is **WebAsk's design choice**;
> doc 03 § B1-P has the full wording and the MHRA line that is nearest to it.)_

That is not only a copywriting rule. **It is a route through the site's structure**, and it
is the single most defensible thing WebAsk can say: _we offer "a structure built to the route
the ASA describes for gated price lists", designed not to gut the site's rankings._ Never "the
structure CAP requires". _(28 September 2026: "Nobody in the vertical is making that
argument" is removed; § 3 checked six named agencies, not the vertical.)_

**3. Doc 02 § 5's recommended terminology is unsafe and is corrected below** (§ 6). It
advises targeting **"anti-wrinkle injections"** as the safe alternative to the brand name.
The ASA treats wrinkle-relaxing euphemisms as _implied_ promotion of the POM and has upheld
complaints on exactly that basis. Shipping that advice would have made us wrong about the
one thing our authority rests on. _(Corrected 28 September 2026: "wrinkle-relaxing" is right —
the ASA's FAQ says "we’d advise against it" — but "has upheld complaints on exactly that basis"
is unsourced: the nearest ruling, Skinboost (22 February 2012; doc 03 § B1), read "Line
Relaxing" in a price list "in conjunction with other references to Botox and its effects".
"Anti-wrinkle injections" is conditional in the
ASA's own words: it "might be acceptable" as a collective term where non-POM treatments such
as fillers are also offered, and "we’d advise against" it where only the POM is offered (FAQ,
23 January 2020). It is still not a safe **target** term, and WebAsk's build standard leaves it
out of client sales copy — our choice, not the ASA's rule. § 6 has the detail.)_

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

## 2. ✅ Slug alignment — RESOLVED 2026-07-28

**Doc 04 § 3's slugs were adopted. All five renames are done**, along with the keyword seed
that depended on them. This section is kept as the record of why.

The code and doc 04 § 3 disagreed on 5 of the 9 service slugs. The inherited (Naxdor) slugs
were shorter; doc 04's are keyword-aligned.

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

Files touched: `data/services.ts` (`slug` + `relatedServiceSlugs`), `data/industries.ts`
(`relatedServiceSlugs`), `data/blog.ts` (`anchorServiceSlug`), `content/services/*.mdx`
(5 filenames + frontmatter slugs), `components/layout/_nav-data.ts`,
`scripts/check-keywords.ts` (`SERVICE_SLUGS`), `e2e/a11y.spec.ts`, `app/sitemap.ts`, and the
industry/blog MDX bodies that link to service pages.

> **Two traps worth recording, because a blind find-and-replace would have hit both:**
>
> - `data/blog.ts` has a **topic** `slug: "crm"` next to an `anchorServiceSlug: "crm"`. Only
>   the second is a service slug. Renaming the topic would have broken `/blog/topic/crm`.
> - `scripts/check-keywords.ts` has `"maintenance"` in **`CLUSTER_ENUM`** as well as in
>   `SERVICE_SLUGS`. The cluster name is unrelated to the URL and must not move.
>
> Both were renamed by matching on the _field_ (`slug:`, `relatedServiceSlugs:`,
> `anchorServiceSlug:`, `/services/<x>`) rather than on the bare string.

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

| Gap                             | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                      | How WebAsk fills it                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Zero regulatory literacy**    | No ASA / CAP / MHRA / GDC / CQC mention on any page checked                                                                                                                                                                                                                                                                                                                                                                   | The entire Silo 4 + a compliance section on every industry page |
| **Compliance-hostile IA**       | _Unrecorded — no clinic site's navigation was audited (corrected 28 September 2026; this cell said "Clinic sites are built with treatment pages in the primary nav — the exact structure CAP restricts for POMs")._ The nearest primary line is the MHRA's, on the home page: "Links and navigation aids may be given for particular conditions and diseases but not to specific POMs" (Blue Guide Appendix 6, November 2020) | Consultation-first architecture (§ 4) as a _named deliverable_  |
| **WordPress performance floor** | Self-declared "bespoke WordPress"                                                                                                                                                                                                                                                                                                                                                                                             | Next.js; the site is the portfolio (doc 00, job 1)              |
| **Anti-pattern saturation**     | "multi award-winning", "trusted by 100+", hidden pricing                                                                                                                                                                                                                                                                                                                                                                      | Inherited anti-pattern table, doc 01                            |
| **No Information Gain**         | Every page says "beautiful, converting, bespoke"                                                                                                                                                                                                                                                                                                                                                                              | Cluster A ships something the SERP genuinely lacks              |

---

## 4. ★ The compliance-architecture wedge, stated precisely

This is the thing to build the brand on. It must be stated _accurately_ — being the
compliance agency and getting the compliance wrong is the worst possible outcome.

### What the rules actually say

_(Re-checked against primary sources on 28 September 2026; doc 03 § B1 carries the quotes and
the full rulings map.)_

- **CAP Code rule 12.12** — prescription-only medicines may not be advertised to the public.
  Botulinum toxin (Botox, Vistabel, Dysport, Azzalure, Bocouture) is a POM in the UK. The same
  prohibition is in medicines law: "A person may not publish an advertisement that is likely to
  lead to the use of a prescription only medicine" (Human Medicines Regulations 2012 reg. 284(1)).
- **Indirect references count.** The ASA treats "wrinkle-relaxing treatments", "#brotox" and
  "#beautox" as implied promotion of the POM. _(Remapped 28 September 2026: the rulings this
  bullet named are cited by the ASA for different points.)_ Indirect references: **Skinboost
  (22 February 2012)**, "Line Relaxing" in a price list with other references; **LIFT
  Aesthetics (17 May 2023)** and **Dr Bunny Aesthetics (24 April 2024)**, "anti-wrinkle" wording
  in context; **Valterous Ltd (18 December 2024)**, "COSMETIC INJECTIONS 3 AREAS FROM £179".
  Direct advertising to the public: **Venus Beauty Lounge (5 August 2015)**, **Menar Jimmy
  Georgiou (21 June 2023)**. Social media and hashtags: **Beauty Boutique Aesthetics** and
  **Faces by AKJ Aesthetics (both 25 September 2019)**. POM information reachable directly,
  bypassing the consultation: **HB Health of Knightsbridge (15 January 2014)**. **Dermaskin
  Clinics (15 January 2014)** and **Glowery Ltd (12 April 2023)** were not re-read on
  28 September 2026, so no point is recorded for them.
- **"Anti-wrinkle injections" is conditional**, not a flat ban: see § 6 and doc 03 § B1.
- **CAP rule 12.18** — no celebrity or health-professional endorsement of a POM.
- **What IS permitted:** advertising a **consultation** — e.g. _"a consultation for the
  treatment of lines and wrinkles"_. The POM must not be named in the initial ad.
- **The price-list route, in the ASA's words** (corrected 28 September 2026; this bullet said a
  POM may appear in a price list "**only** where it sits at least two clicks from the homepage …
  and appears in neither the homepage nor the primary navigation"). Consultation first; no POM
  price on the homepage and no "direct link to “Prices” which mentions Botox"; the further page
  "ideally two clicks from the homepage" (CAP Bitesize); if clients "can only get to the price
  list after going through a page promoting a consultation", then "this might be acceptable"
  (FAQ, 23 January 2020). "Out of the primary navigation" is **WebAsk's design choice**, not ASA
  wording.

> **⚠️ Verify before publishing.** These are our summaries of ASA/CAP guidance as at
> 28 September 2026, not legal advice. _(Corrected 28 September 2026: this box said "Every claim
> in Silo 4 goes through [CAP Copy Advice] before it publishes". Copy Advice advises on
> "prospective non-broadcast ads" against the CAP Code, and the Code excludes editorial content;
> nothing records that it reviews an agency's editorial summary of the rules.)_ **The review
> route (F4, founder, 28 September 2026):** every rule sentence in Silo 4 carries a dated primary
> quote or link, plus a second-reader verify pass; CAP Copy Advice only for questions that are
> about an actual advert. No copy may claim anything was "checked by CAP" or "reviewed by a
> lawyer". Our authority is only worth anything while it is right.

### The deliverable this becomes

**"Consultation-first architecture"** — a named, sellable structural pattern:

```
Homepage  →  /treatments/lines-and-wrinkles   (consultation, no POM named)
                     ↓  (click 2)
             /treatments/lines-and-wrinkles/pricing   (informational price list)
```

with the POM absent from the primary nav, absent from the homepage, and absent from every
meta title and description. Sitemap and internal linking are built to match. _(28 September
2026: "absent from the homepage" is the ASA's; the primary-nav and meta rules are **WebAsk's
design choices** — the MHRA says its "main focus is the content of the website, rather than the
competitive tools", so our meta rule is stricter than its stated focus. Sell the pattern as "a
structure built to the route the ASA describes for gated price lists".)_

### The proposed licensing scheme — state it accurately, and date it

_(Re-dated 28 September 2026 from primary sources; doc 03 § B1 is the authority and carries the
quotes.)_ As at **28 September 2026** the proposed licensing scheme for non-surgical cosmetic
procedures in England is **not in force**, and we found no regulations made (legislation.gov.uk title searches). The Health and
Care Act 2022 s.180 (in force 1 July 2022) is a **power** to make licensing regulations for
individuals and premises. A **red / amber / green** tiering was **proposed** in the 2023
consultation; the response of **7 August 2025** (11,848 responses) says "further work is
required to determine where specific procedures will sit in the proposed tiering system", and
prioritises the highest-risk procedures "(including procedures aimed at augmenting the breast,
buttocks and genitals with dermal fillers)". Answers from 12 January to 13 February 2026 (103132, 103133, 109351, 111514) said the Government intended to consult "in the spring"; on 3 June 2026 the minister wrote "we plan
to consult on draft regulations in June"; on **23 June 2026** the Government said "We are
preparing a consultation on the draft legislation which would bring these proposals into
effect" (answer 10828, the latest found). We found no published consultation on 28 September 2026. Since **1 October 2021** it has been an offence in
England to administer to a person under 18 one named prescription-only medicine, or a filler
injection for a cosmetic purpose — "for a cosmetic purpose" attaches to the filler limb only
(the 2021 Act, 2021 c. 19, s.1(1)).

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

> **Corrected 28 September 2026 (founder decisions F2 and F1).** The paragraph above is right
> about "wrinkle-relaxing" ("we’d advise against it", FAQ), though "has upheld complaints on that
> basis" is unsourced (the nearest ruling, Skinboost, 22 February 2012, read "Line Relaxing" in a
> price list "in conjunction with other references to Botox and its effects"; doc 03 § B1). It is
> too strong about "anti-wrinkle injections". The ASA's FAQ (23 January 2020) says the phrase "might be acceptable" as a
> collective term where non-POM treatments such as fillers are also offered (and "recommend[s]"
> it as a collective term over "anti-wrinkle injections and fillers"), and "we’d advise against"
> it where only the POM is offered; beside a POM price it "will be seen as an ad for that POM"
> (Enforcement Notice on social media, 9 January 2020); and rulings upheld where it referred to the POM in
> context — **LIFT Aesthetics (17 May 2023)** and **Dr Bunny Aesthetics (24 April 2024)**. It
> is still not a safe _target_ term, because the conditions depend on the clinic. Editorial copy
> reports the conditional position in the ASA's words; answering "No" overstates the source.
> The table below separates the ASA's position from WebAsk's stricter build standard, and adds
> the dated title exception for posts A1 and A2.

| Context                                                                | Guidance                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A clinic's own public pages**                                        | Advertise the **consultation**, not the treatment: _"consultations for lines and wrinkles"_. Do not name the POM (the gated routes in doc 03 § B1-P are the narrow exceptions). Do not use the indirect references "wrinkle-relaxing", "beautox", "brotox". **WebAsk's build standard also leaves out "anti-wrinkle injections"** — our choice, stricter than the ASA's conditional position, and never presented as the ASA's rule (28 September 2026).                      |
| **WebAsk's editorial content**                                         | We may name POMs **when discussing the regulation of their advertising**. Writing "clinics may not advertise Botox" is commentary on the rule, not an ad for the medicine. This distinction is what lets Silo 4 exist at all — but keep it in editorial context, never in a service page's sales copy, title or meta description. A passage about **administering** is not the carve-out (CLAUDE.md (b)).                                                                     |
| **Titles and meta — the A1/A2 exception** (founder, 28 September 2026) | Posts **A1** (flagship) and **A2** (price list) in the clinic-compliance cluster may name the medicine in `title`, slug, `description` and `keywords`, **only** as a question about, or a statement of, the advertising rule. Never on non-compliance posts' related links. The licence keyword string (`do i need a licence for …`) is never printed in any field. Every other post, and **service pages, industry pages and client sites**, keep the ban in title and meta. |
| **Keyword targeting**                                                  | Target the _practitioner's_ question — "can I advertise botox on my website", "asa rules aesthetic clinic advertising" — which is informational and ours to answer. Do **not** target patient-facing treatment terms.                                                                                                                                                                                                                                                         |

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

_(One-line answers rewritten 28 September 2026 from the primary sources in doc 03; the old ones
said "No.", "Nobody explains this" and "as at July 2026".)_

- Can I advertise Botox on my clinic website? _(Not to the public — CAP rule 12.12 and HMR 2012
  reg. 284(1). Asked "Can I refer to Botox on my website?", the ASA's FAQ (23 January 2020)
  answers "Yes, in very narrow circumstances", and: "It will always depend on the execution but
  provided you properly emphasise the consultation, make incidental, balanced and factual
  references to Botox as a possible treatment option and it is clear that the consultation may
  or may not lead to the provision of Botox, the ASA might consider it acceptable." This is the
  flagship post, A1.)_
- What can I legally say about injectables on my website?
- Can I put Botox on my price list? _(Possibly. The FAQ: if clients "can only get to the price
  list after going through a page promoting a consultation", then "this might be acceptable";
  Bitesize puts the further page "ideally two clicks from the homepage". Post A2.)_
- Are "anti-wrinkle injections" and "wrinkle-relaxing" safe alternatives? _("Wrinkle-relaxing":
  the ASA advises against it. "Anti-wrinkle injections": conditional in the ASA's words (FAQ,
  23 January 2020); WebAsk's build standard leaves it out.)_
- Do I need a licence to offer aesthetic treatments in 2026? _(The proposed licensing scheme is
  not in force as at 28 September 2026 and we found no regulations made. Post L1 is held until the
  consultation on draft legislation is published.)_
- What are the GDC rules for advertising dental treatments?
- Does my clinic website need a cookie banner, and what makes it compliant? _(ICO: make it "as
  easy to refuse consent as it is to accept"; nothing non-exempt before consent.)_
- Are before-and-after photos allowed? _(For a POM: "very likely to be seen as an implied ad" —
  ASA, 5 June 2025. Otherwise rules 3.47–3.50 apply, with "signed and dated proof that the photos
  are genuine".)_

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

1. ✅ **Lock the service slugs** (§ 2).
2. ✅ **Seed `data/keywords.json`** — 332 UK keywords against the locked slugs.
3. ✅ **Amend doc 02 § 5** with § 6 above.
4. ✅ **Add the regulatory entities** to `knowsAbout` (§ 5).
5. ⬜ **Pull real MSV/KD** — the gate on using this file to sequence work. See below.
6. ⬜ Phase 1 content, then Silo 4 first in Phase 3 (doc 06 already orders this correctly).

### ⚠️ `msv` and `kd` are `null` throughout — and that is deliberate

All 332 rows carry `msv: null`, `kd: null`, and `meta.msvKdSource` is `null`.

No Ahrefs/Semrush pull has been run. **Inventing plausible-looking search volumes would
fabricate precisely the numbers that drive prioritisation** — a keyword file with made-up MSV
is worse than one with none, because it looks authoritative and silently misallocates months
of content effort. Same rule as "no invented testimonials", applied to data.

The file is a **structurally validated targeting map, not a prioritised backlog.** Before it
sequences any work: export UK-locale volume and difficulty, populate both fields, set
`msvKdSource`, then apply the KD ≤ 35 filter (docs/02 § 5).

### What the file contains

| Cluster           | Count | Intent                   | Count |
| ----------------- | ----- | ------------------------ | ----- |
| web-development   | 115   | transactional            | 193   |
| seo               | 42    | commercial-investigation | 75    |
| gohighlevel       | 32    | informational-bottom     | 54    |
| clinic-compliance | 22    | informational-top        | 5     |
| ecommerce         | 16    | navigational             | 5     |
| web-app           | 15    |                          |       |
| ai-automation     | 15    |                          |       |
| uk-compliance     | 15    |                          |       |
| ui-ux             | 13    |                          |       |
| mobile            | 11    |                          |       |
| maintenance       | 10    |                          |       |
| ai-voice-agents   | 9     |                          |       |
| crm-migrations    | 7     |                          |       |
| hubspot           | 6     |                          |       |
| ai-chatbots       | 4     |                          |       |

Two clusters are WebAsk's own with no Naxdor equivalent: **`clinic-compliance`** (22) and
**`uk-compliance`** (15).

`check-keywords.ts` changed in three ways beyond the slug list:

- Location slugs are validated by **membership** against `LOCATION_SLUGS`, not by the US
  `[city]-[st]` shape. The shape check would have gone on passing `/locations/austin-tx`
  indefinitely after that page ceased to exist — it only ever checked the pattern.
- `VERTICAL_ENUM` drops Naxdor's `real-estate` and `home-services`. They are not WebAsk
  verticals, and leaving them invites drift into markets we don't serve.
- `/blog/topic/<topic>` is now a recognised URL shape, because the compliance hub is one.

---

## Sources

- [ASA — Beauty and Cosmetics: Botulinum toxin (Botox) products](https://www.asa.org.uk/advice-online/beauty-and-cosmetics-botulinum-toxin-products.html)
- [CAP Bitesize — Botox and non-surgical cosmetic interventions](https://www.asa.org.uk/advice-and-resources/cap-bitesize/rules-for-advertising-botox.html) (the page's title; "rules-for-advertising-botox" is only its URL slug — corrected 28 September 2026)
- [ASA/CAP — Botox - Frequently Asked Questions (FAQs)](https://www.asa.org.uk/news/botox-frequently-asked-questions-faqs.html) (23 January 2020; read 28 September 2026)
- [ASA/CAP — Prescription-Only Medicines: key advice resources](https://www.asa.org.uk/advice-and-resources/resource-library/prescription-only-medicines-key-advice-resources.html)
- [House of Commons Library — The regulation of non-surgical cosmetic procedures in England](https://commonslibrary.parliament.uk/research-briefings/cbp-10331/) (not re-opened on 28 September 2026: HTTP 403; nothing in § 4 now rests on it)
- Every primary source re-read on 28 September 2026 is listed, with its URL and page date, in [`03-uk-compliance.md`](03-uk-compliance.md) § Sources
- [CMS Law-Now — Regulating beauty: what the Government's consultation means](https://cms-lawnow.com/en/ealerts/2025/08/regulating-beauty-what-the-government-s-consultation-means-for-non-surgical-procedures)
- [Underline — Aesthetic clinic web design](https://underline.agency/aesthetic-clinic-web-design/)
- [Aesthetic Web — Aesthetic clinic website design](https://aestheticweb.co.uk/aesthetic-clinic-website-design/)
- [Ashrose Agency](https://www.ashroseagency.com/aesthetics-website-design-uk) · [Aesthetics Desk](https://aestheticsdesk.co.uk/aesthetics-website-design/) · [Websites for Clinics](https://www.websitesforclinics.com/)
- UK web design cost benchmarks 2026: [Duport](https://www.duport.co.uk/blog/small-business-website-cost-uk/) · [Havis](https://havis.dev/blog/how-much-does-a-small-business-website-cost-uk-2026/) · [EdTheDev](https://edthedev.co.uk/blog/website-cost-uk/)
