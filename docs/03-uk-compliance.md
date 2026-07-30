# 03 — UK Compliance

> The biggest single delta from Naxdor. Two audiences: **(a)** what WebAsk itself must do
> to trade legally in the UK, and **(b)** what WebAsk must know to build compliant sites
> for regulated clients — which is also the commercial wedge (doc 02 § 2).
>
> **Research date: 2026-07-27.** Sources cited inline.
>
> ⚠️ **This is researched guidance, not legal advice.** Three items (D2, D3, and the
> vertical copy rules) should be confirmed with an accountant / solicitor before launch.

---

## Part A — What WebAsk itself must comply with

### A1. Trading disclosures — with no UK company

**Locked context:** WebAsk is a **trading name of Naxdor, a Swedish enskild firma**. There
is no UK limited company.

| Regime                                              | Applies?                | Requirement                                                                                                            |
| --------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Companies (Trading Disclosures) Regulations 2008    | ❌ No UK company exists | Would require registered name, company number, place of registration, registered office                                |
| Electronic Commerce (EC Directive) Regulations 2002 | ✅ Yes                  | Service provider's **name**, **geographic address**, and **email** must be easily, directly and permanently accessible |
| Provision of Services Regulations 2009              | ✅ Yes                  | Same core details, plus trade-register details where the provider is registered in one                                 |

**What this means in practice:**

> **Never display a Companies House number.** One does not exist. Inventing or borrowing
> one is a criminal offence, not a grey area.

The footer (or a `/legal` page linked from every footer) must carry, approximately:

```
WebAsk is a trading name of Naxdor, an enskild firma registered in Sweden.
Org.nr: <Swedish organisationsnummer>
Registered address: <Swedish registered address>
Email: <contact email>   ·   Phone: +44 …
```

Placement convention in the UK is the footer or a dedicated legal/contact page. It does not
need visual prominence, but it must be present and straightforward to find.

**Action items**

- [ ] Confirm the exact Swedish registered name and org.nr to publish
- [ ] Decide footer vs `/legal/company-information` (recommend: condensed footer row +
      full detail on `/legal`)
- [ ] Remove any implication of a UK company from all copy

---

### A2. VAT — decision gate D2

**The rule that surprises people:** a business **not established in the UK** (a
"non-established taxable person", NETP) has a **VAT registration threshold of zero**. The
£90,000 UK threshold does not apply. Registration is required from the first taxable
supply, not after a turnover figure.

**The rule that may rescue it:** services supplied B2B generally follow the place-of-supply
general rule — the place of supply is where the _customer_ belongs, so a supply to a UK
business is outside the scope of UK VAT and the customer accounts for it under the **reverse
charge**. On that reading, a purely B2B UK practice may not need to register at all.

**Where it gets sharp:** any supply to a UK **consumer** (B2C) is a different place-of-supply
rule, and with a zero threshold that could trigger immediate registration.

| Status            | Action                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| ⛔ **Unresolved** | **Confirm with an accountant before `/pricing` ships.** This doc deliberately does not assert an answer |

**Interim site rule:** display **"Starting at £X"** with **"+ VAT where applicable"**. Do
not print "inc. VAT" or "ex. VAT" definitively until resolved. If you sell online with
prices to consumers, you must show VAT-inclusive prices or make the exclusion very clear —
another reason to settle B2B-only positioning explicitly.

**Action items**

- [ ] Accountant confirms: B2B reverse charge vs UK VAT registration
- [ ] If registered: publish the VAT number on the site (HMRC expects it visible where
      business is transacted)
- [ ] Lock the price-display convention in `data/services.ts` and `/pricing`

---

### A3. UK GDPR — Article 27 representative — decision gate D3

**Article 27 UK GDPR** requires an organisation with **no UK office, branch or other
establishment** that processes UK residents' personal data in connection with offering
goods/services to them, or monitoring their behaviour in the UK, to **appoint a UK
representative**.

- The representative is a **contact point** for UK data subjects and the ICO, maintains
  records of processing, and relays communications. The ICO treats the role as a conduit,
  not an operational one.
- The representative must be **named in the privacy notice**.
- EU and UK regulators are actively scrutinising overseas entities that process UK/EU data
  without one.

A contact form on `webask.co.uk` collecting UK enquirers' names, emails and phone numbers,
plus GA4/Clarity analytics on UK visitors, is squarely within scope.

> ✅ **D1 RESOLVED 2026-07-27 — fully remote, no UK location.** This makes the Article 27
> answer sharper, not softer: with **no UK establishment at all**, WebAsk sits squarely
> inside the Article 27 trigger. Treat a UK representative as **near-certain to be
> required**, not merely likely.
>
> The same fact points the **opposite** way on the ICO fee — the data protection fee turns
> on UK establishment, so with none, it **probably does not apply**. Confirm both in the
> same legal check; they hinge on the same underlying fact and resolve in opposite
> directions.

**ICO data protection fee** — assessed at the same time. Applicability turns on UK
establishment/processing context, so with no UK establishment this likely does **not**
apply. Figures retained for reference in case the position changes.

| Tier      | Criteria                              | Fee     |
| --------- | ------------------------------------- | ------- |
| 1 — Micro | ≤ £632,000 turnover **or** ≤ 10 staff | **£52** |
| 2 — SME   | ≤ £36m turnover **or** ≤ 250 staff    | **£78** |
| 3 — Large | Neither of the above                  | £3,763  |

£5 discount for direct debit. Non-payment penalty up to **£4,350**.

**Action items**

- [x] ~~Resolve D1 (UK presence)~~ — **resolved 2026-07-27: fully remote, no UK location**
- [ ] Legal/DPO check: confirm Art. 27 UK representative required (expected: **yes**)
- [ ] Appoint the representative and name them in `/legal/privacy`
- [ ] Confirm ICO fee does **not** apply absent UK establishment (expected: not required)
- [ ] `/legal/privacy` cannot go final until the above resolve

---

### A4. PECR — cookies and consent

Consent under PECR must meet the **UK GDPR Article 4(11)** standard: freely given,
specific, informed and unambiguous.

**Banner requirements**

- ✅ **"Accept all" and "Reject all" with equal visual prominence.** A banner that makes
  rejection harder than acceptance fails the freely-given test — this is the single most
  common failure and the ICO's main enforcement focus.
- ❌ Pre-ticked boxes are not consent.
- ❌ "By continuing to browse you agree" is not consent.
- ❌ Cookie walls that withhold the service pending acceptance fail the freely-given test.
- ✅ **Nothing non-essential is set before consent** — not after, not "on page load, we'll
  ask in a moment".

**Enforcement.** The ICO wrote to **53 of the UK's top 100 websites** requiring cookie-banner
compliance. PECR exposure runs to **£17.5m or 4% of global turnover, whichever is higher**. Guidance has been
updated under the Data (Use and Access) Act.

**Inherited implementation.** Naxdor already ships a consent gate with GA4 and Clarity held
behind it, and Vercel Analytics is cookieless so it runs without consent. That architecture
satisfies this shape — but **verify the reject button has genuinely equal prominence** during
the fork, since the US-oriented original may not have been built to the ICO's standard.

**Action items**

- [ ] Audit the inherited consent component against equal-prominence
- [ ] Confirm no non-essential cookie fires pre-consent (network tab, not code review)
- [ ] Cookie policy page enumerates each cookie, purpose, duration and provider
- [ ] Consent is re-obtainable — a persistent "cookie settings" link in the footer

---

### A5. PECR — email and outreach

This governs how WebAsk can prospect. It differs meaningfully from US CAN-SPAM.

| Recipient                                                    | Prior consent needed?                                                      |
| ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| **Corporate subscriber** — limited company, LLP, public body | ❌ **No.** PECR's email consent rules don't apply to corporate subscribers |
| **Sole trader**                                              | ✅ **Yes.** Treated as an individual                                       |
| **Unincorporated partnership**                               | ✅ **Yes.** Treated as an individual                                       |
| **Any freemail address** (`gmail.com` etc.)                  | ✅ **Yes**, regardless of who uses it for work                             |

**Soft opt-in** applies only where: details were obtained during a sale or negotiations for
a sale · you're marketing your own similar products/services · a clear opt-out was given at
collection **and in every message**. Bought lists and scraped emails never qualify.

**Practical rule for WebAsk:** UK SMBs skew heavily to sole traders and micro-companies. A
"we can email any business" assumption is wrong here. Segment the list by legal form before
any outreach, and treat freemail addresses as individuals no matter what the domain suggests.

> This also becomes blog content — "PECR and your CRM: what UK B2B outreach can legally do"
> (doc 02, Cluster C). We have to know it anyway; publishing it is free Information Gain.

**Action items**

- [ ] Newsletter/contact forms carry an opt-out and a purpose statement
- [ ] Any CRM outreach sequence segments by legal form
- [ ] Privacy notice explains the lawful basis for marketing

---

### A6. DMCC Act 2024 — fake reviews and testimonials

**This is the most urgent item in the bundle.**

Since **6 April 2025** the Digital Markets, Competition and Consumers Act 2024 makes it
illegal to write, commission or publish fake consumer reviews, or to conceal incentivised
reviews (an incentive includes cash, discount, freebie, event invite, or a financial
interest). Traders must also not present reviews in a misleading way — aggregate scores are
in scope.

| Penalty    | Amount                                                                       |
| ---------- | ---------------------------------------------------------------------------- |
| Business   | Up to **10% of global annual turnover** or **£300,000**, whichever is higher |
| Individual | Up to **£150,000**                                                           |

The CMA can determine a breach and impose fines **without recourse to the courts**. Its
opening enforcement posture was supportive, but in **March 2026 it opened investigations
into five named businesses** over review handling.

**Current exposure on `webask.co.uk` (audited 2026-07-27):**

| Page          | Problem                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/about/`     | A fabricated staff roster for a solo operation, including a "Marketing Director **Alicia Keys**"                                                          |
| `/portfolio/` | Three "projects" with identical lorem-ipsum descriptions, plus testimonials attributed to "Mark Riley" and "Willie Walters" with identical generic praise |

The fake testimonials are the DMCC problem. The fabricated staff are a Consumer Protection
from Unfair Trading / misleading-action problem and an E-E-A-T disaster besides.

**Action items — Phase 1, non-negotiable, at cutover**

- [ ] Remove every fabricated team member; publish only the real founder
- [ ] Remove every placeholder project and testimonial
- [ ] `/portfolio/` 301s to `/case-studies`, which **self-hides while empty** (the inherited
      case-studies engine already does this — see doc 01)
- [ ] No testimonial ships without a real named person, role and company who has consented
- [ ] Never offer an incentive for a review without disclosing it

**Commercially:** this becomes a client-facing service angle. Many UK SMB sites still carry
inherited theme-demo testimonials. "Your website may be breaking the law" is an uncomfortable
but genuinely useful audit finding.

---

### A7. Accessibility

WCAG 2.2 AA is inherited from Naxdor (Lighthouse a11y = 100 in CI, axe-core, manual keyboard
pass). In the UK the commercial framing is the **Equality Act 2010** — service providers must
make reasonable adjustments, and an inaccessible website is a recognised risk area.

No change to the technical standard. Change the _pitch_: accessibility is sold to UK clients
as risk reduction plus reach, not as a nice-to-have.

---

## Part B — What WebAsk must know to build compliant client sites

This is the wedge (doc 02 § 2). It is also a duty of care: a website we build that breaches
these rules creates liability for the client.

### B1. Aesthetics — the ASA/CAP prescription-only medicine ban

**The rule.** Botulinum toxin is a prescription-only medicine. UK rules prohibit advertising
prescription-only medicines to the public — under both the CAP Code and medicines
legislation. **This applies to organic content, not just paid ads.**

**What that means concretely for a clinic website:**

| ❌ Not allowed                                                                                                      | ✅ Compliant alternative                                                                                    |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| The brand name of a botulinum toxin product anywhere the public can see it — website, Instagram, Google Ads, flyers | Advertise the **consultation**: _"consultations for lines and wrinkles"_                                    |
| Implied references — the ASA has treated "relaxing" as an implied reference to the POM                              | Describe the **concern the patient wants addressed**, not the product and not its effect                    |
| **Euphemisms** — "anti-wrinkle injections", "anti-wrinkle treatment", "wrinkle-relaxing", "beautox", "brotox"       | See the correction immediately below — these are **not** safe alternatives                                  |
| Before/after imagery used to promote the POM                                                                        | Educational content about consultations, qualifications, safety standards, duty of care, patient experience |

> ### ⚠️ CORRECTED 2026-07-29 — this table used to recommend the euphemism it now forbids
>
> The ✅ column originally offered **"anti-wrinkle injections", "anti-wrinkle treatment"** as the
> compliant alternative — which contradicted the row directly beneath it, and would have handed a
> clinic the exact phrasing the ASA treats as **implied promotion of the POM**, with upheld
> complaints on that basis. [`08-seo-architecture.md`](08-seo-architecture.md) § 6 is the
> authority and corrected this on 2026-07-28; the correction reached doc 02 § 5 but **never
> reached this table or doc 02 § 2**. Found on 2026-07-29 during the first run of § B4 over the
> three industry pages. What is permitted is advertising the **consultation**.
>
> **Price lists are the one narrow carve-out**, and it is structural, not lexical: a POM may
> appear in a price list **only** where it sits at least two clicks from the homepage, is reached
> via consultation-led pages, stays purely informational with no promotional framing, and appears
> in neither the homepage nor the primary navigation (doc 08 §§ 0.2 and 4). That is the
> "consultation-first architecture" deliverable. Doc 08's own caveat applies: these are our
> summaries of ASA/CAP guidance as at 2026-07-28, and § B4 requires **CAP Copy Advice** before
> publication where copy sits close to the line.

**Enforcement.** The **MHRA issued 47 enforcement notices to aesthetic businesses in 2024**,
mostly for exactly this. The ASA now runs **AI-powered proactive monitoring** — it finds
non-compliant ads without waiting for a complaint. CAP offers a free **Copy Advice** service
for pre-publication questions.

**The 2026 licensing scheme.**

> ### ⚠️ CORRECTED 2026-07-28 — "operational in 2026" overstated the position
>
> This paragraph originally opened _"Operational in 2026 under the Health and Care Act 2022"_ and
> then described the scheme in the present tense. **The scheme is NOT yet in force.**
> [`08-seo-architecture.md`](08-seo-architecture.md) § 4 states the position accurately and dates
> it: as at **July 2026** the England licensing scheme for non-surgical cosmetic procedures has not
> commenced. The Government published its **consultation response in August 2025** (11,848
> responses) **proposing** the two-tier licensing and the red/amber/green categorisation; it stated
> an intention to consult on the highest-risk procedures in spring 2026.
>
> **What IS in force:** since **1 October 2021** it is a criminal offence in England to administer
> botulinum toxin or filler for a cosmetic purpose to under-18s.
>
> Everything below describes the **proposed** scheme. Write it as proposed, with the date attached —
> doc 02 § 9 is right that stale regulatory content is worse than none, and on this subject it
> inverts the entire E-E-A-T position. Doc 08 § 4 is the authority until this section is rewritten.

Under the Health and Care Act 2022, local
authorities would enforce a **two-tier** system — **every individual** performing listed procedures
needs a **personal licence**; a general business licence would no longer be sufficient. Procedures
are risk-categorised **red / amber / green** (Government consultation response, August 2025);
**botulinum toxin and dermal fillers are amber** — a non-medical practitioner may perform
them only under the supervision of a named regulated healthcare professional. Licence
conditions: accredited qualifications, valid indemnity insurance, DBS check. Administering
to under-18s for cosmetic purposes is illegal in England.

**Site-design implications we can actually sell:**

- Treatment pages must be written to describe effect, not product — this constrains the
  entire IA and keyword strategy of a clinic site
- Practitioner pages should surface licence status, qualifications and indemnity — which is
  also excellent E-E-A-T
- Age-gating and eligibility copy on booking flows
- Review/testimonial handling that satisfies both the CAP Code and the DMCC Act
- Third-party register links (JCCP, Save Face) as trust signals

### B2. Dental

Four regulators at once:

| Body    | What it governs                                                                                                                                                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GDC** | Professional conduct. No unsubstantiated clinical claims. **Genuine reviews only, no incentives.** Registration transparency. Patient consent for before/after images. Using "specialist" when not on the GDC specialist list is a standards breach |
| **CQC** | Registration is a legal requirement in England. Displaying registration and inspection results builds trust                                                                                                                                         |
| **ASA** | All promotional material legal, decent, honest, truthful                                                                                                                                                                                            |
| **CMA** | Consumer protection and pricing transparency. **Opened a market study into the £8.4bn private dentistry sector in March 2026**                                                                                                                      |

Plus UK GDPR (patient data), PECR (recall/marketing communications), and the Consumer
Protection from Unfair Trading Regulations.

**The CMA market study, in detail** (added 2026-07-29 — `/industries/dental-practices` was
already publishing all three of these figures, in body copy, in an H2 and in `FAQPage`
JSON-LD, and **none of them traced to any line in this bundle**):

- Opened **5 March 2026**; statutory reporting deadline **4 March 2027** — a 12-month
  ceiling, so "reports **by** March 2027", never "runs **until** March 2027"
- Sector size **£8.4bn**
- The price movements the CMA cited on opening: an initial consultation rose **more than 23%**
  between 2022 and 2024 (to ~£80), a routine check-up for an existing patient **more than 14%**
  (to ~£55). These are **CMA-cited figures drawn from independent sources**, not CMA findings —
  the study has not reported, and copy must not present them as its conclusions
- Scope: whether patients can make informed choices, and whether providers engage in
  misleading or unfair conduct. **Pricing transparency is explicitly in scope**

⚠️ The study is **sector-level**. It does not follow that any individual practice's website
"is evidence in" it — that overclaim shipped in the dental page's H1 and was corrected in the
same pass. What is defensible: the website is where a patient encounters the practice's
pricing, and pricing transparency is what is being examined.

**Sources.** Retrieved 2026-07-29. GOV.UK, _CMA launches review of private dentistry_;
CMS Law-Now and Pinsent Masons (Out-Law) briefings, March 2026; CMA calls for views
(consumers / dental professionals).

**Site-design implications:** transparent price lists (CMA), GDC numbers and CQC registration
visible, careful claim language, a consent workflow for imagery, and a reviews mechanism that
survives both GDC "no incentives" and DMCC scrutiny.

### B2a. Beauty & wellness — health claims and the medicines line

> Added 2026-07-29, during the first run of § B4 over the three industry pages. Until then
> this vertical — one of the three launch verticals — had **no section in this document at
> all**, while `/industries/beauty-wellness-clinics` was already making regulatory assertions
> on the strength of it. Doc 02 § 5 covers only its keywords.

The page's own framing was that this sector escapes the advertising rules that bind aesthetics
and dentistry. **That is wrong for part of its stated audience**, and the error is worth
recording because it is the opposite of the usual failure: not over-claiming a rule, but
under-claiming one.

There are **three regimes**, and which one applies turns on what the thing _is_, not on how
the clinic describes itself.

| What is sold                                                    | Regime                                                                          | The test                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Treatments, spaces, experiences**                             | CAP Code general substantiation (rule 3.7)                                      | Hold evidence for any objective claim. Describing what a treatment is and how it feels is safe ground                                                                                                                                                         |
| **Food and food supplements** (oral)                            | **CAP Code section 15** + the **GB nutrition and health claims (NHC) Register** | Since **1 January 2021** only claims **authorised on the GB NHC Register**, or claims with the same meaning to the consumer, may be used (rule 15.1.1). The advertiser must hold documentary evidence that the product meets the register's conditions of use |
| **Anything injected or infused** — IV drips, vitamin injections | **Medicines law.** CAP rules 12.1 and 12.11; Human Medicines Regulations 2012   | **Medicinal claims are not permitted unless that specific product is licensed as a medicine for that purpose.** Advertising an unauthorised medicinal product in GB is a **criminal offence** under the HMR 2012                                              |

**The IV point is the one that matters commercially**, because `audienceType` for this vertical
explicitly names "IV therapy and vitamin drip clinics". The ASA has upheld against IV clinics
on exactly this: rulings against **Cosmetic Medical Advice UK**, **The Private Harley Street
Clinic** and **Reviv UK** (all 22 April 2020), over claims that drips could prevent or treat
COVID-19 when the products were not licensed as medicines for it (CAP rules 12.1 and 12.11).
The ASA consulted the **MHRA**, whose position was that any mention of that condition brought
the product within medicines regulation. There is standing ASA guidance,
_Healthcare: Intravenous Nutritional Therapy_.

**The substantiation limb bites separately**, and it is worth keeping both examples because
they fail on different grounds: **GMG Pharmacy Ltd t/a The IV Clinic** fell on **evidence**
(rules 3.1, 3.7 and 12.1) rather than on licensing. A claim can therefore be unlawful either
because the product is not licensed to make it **or** because it is simply not substantiated.

So an IV bar is **closer to the aesthetic-clinic problem than to the salon one** — it is
selling something whose advertising is governed by medicines law. A wellness page that treats
"immunity", "energy" and "detox" as marketing words is making medicinal claims for an
unlicensed product.

**Site-design implications:** service pages that sell the experience and the process rather
than the outcome; no "boosts", "cures", "prevents" or named conditions against an infused
product; the supplement side checked against the GB NHC Register wording rather than
paraphrased; and — as with aesthetics — the honest position that this constrains the copy and
is still the commercially better site, because the claim is doing less work than the operator
expects.

**Sources.** Retrieved 2026-07-29. ASA/CAP, _Food: Health claims_ and CAP Code section 15;
ASA/CAP, _Healthcare: Intravenous Nutritional Therapy_; ASA/CAP, _Advertising Vitamin Drips_;
ASA Enforcement Notice, _Advertising Claims for IV Drips (Coronavirus/COVID-19)_; ASA ruling,
_GMG Pharmacy Ltd t/a The IV Clinic_; Human Medicines Regulations 2012.

### B3. AI voice agents — the UK legal picture

Relevant because AI voice agents are one of the nine services, and because clinics are the
obvious buyer.

UK AI calling sits under **PECR** (ICO), **UK GDPR**, and **Ofcom's** nuisance-call rules.

- **Classification is unsettled.** PECR splits calls into "live" (human or human-equivalent)
  and "automated" (recorded/pre-recorded). AI voice agents sit in a **grey zone the regulator
  has not formally resolved**. Informal ICO guidance suggests an AI capable of genuine
  two-way conversation with human handoff available may be treated more like a live call.
- **Outbound marketing calls using automated calling systems require the subscriber's prior
  explicit consent** under PECR.
- **Call recording**: callers must be informed up front. RIPA permits recording without
  consent in some circumstances, but UK GDPR transparency means the caller should be told;
  the ICO's position is that informing callers supports the fairness principle even where
  consent isn't strictly required. Silence is not consent.
- **Ofcom persistent-misuse rules** apply to outbound calling: abandoned-call rate caps,
  permitted calling hours, abandoned-call message requirements. Ofcom also enforces **CLI
  authenticity** and number allocation; the 2025 revision to **GC6** hardened this, with
  carrier-level filtering for non-compliance.

**How this shapes the service page.** Position AI voice agents primarily as **inbound**
(reception, booking, out-of-hours capture) where the legal picture is far cleaner, and treat
outbound as a scoped, consent-gated engagement. Say so on the page — it's honest, it's
differentiating, and it pre-empts the objection a well-advised UK client will raise.

### B4. The copy-review checklist

Runs before **any** clinic or dental page ships — ours or a client's. Add to the Phase 3
editorial workflow.

- [ ] No prescription-only medicine brand name appears anywhere public-facing
- [ ] No implied POM reference (check adjectives, not just nouns)
- [ ] Claims are substantiated and attributable; no unverifiable superlatives
- [ ] Before/after imagery has documented patient consent
- [ ] Reviews/testimonials are real, named, consented, and non-incentivised (or the
      incentive is disclosed)
- [ ] "Specialist" used only where the GDC specialist list supports it
- [ ] Registrations displayed accurately (GDC number, CQC registration, licence status)
- [ ] Pricing presented transparently (CMA)
- [ ] Age eligibility stated where the treatment is age-restricted
- [ ] Where genuinely uncertain → **submit to CAP Copy Advice (free) before publication**

> Inherited rule, with extra force here: **no AI-generated copy without human review.** In
> this vertical a hallucinated claim isn't just an E-E-A-T penalty, it's a regulatory breach
> with the client's name on it.

---

## Compliance action register

| #   | Item                                                                                    | Owner      | Blocks                 | Status                                   |
| --- | --------------------------------------------------------------------------------------- | ---------- | ---------------------- | ---------------------------------------- |
| 1   | Remove fabricated team + testimonials                                                   | Build      | Cutover                | 🔴 **Urgent — legal exposure**           |
| 2   | ~~Resolve D1 (UK presence)~~                                                            | Founder    | —                      | ✅ **Resolved 2026-07-27: fully remote** |
| 2a  | **Remove the Oxford address from `/contact`** — currently published, no longer accurate | Build      | Cutover                | 🔴 **Open — follows from D1**            |
| 3   | Confirm VAT treatment (D2)                                                              | Accountant | `/pricing` final       | 🔴 Open                                  |
| 4   | Art. 27 UK representative + ICO fee (D3)                                                | Legal      | `/legal/privacy` final | 🔴 Open                                  |
| 5   | Publish entity disclosure (name, org.nr, address, email)                                | Build      | Cutover                | 🟡 Ready once #3/#4 wording settles      |
| 6   | Audit consent banner for equal prominence                                               | Build      | Cutover                | 🟡 Ready                                 |
| 7   | Segment outreach lists by legal form                                                    | Ops        | Phase 4 CRM            | 🟢 Documented                            |
| 8   | Adopt the copy-review checklist in the editorial workflow                               | Content    | Phase 3 clinic pages   | 🟢 Documented                            |
| 9   | Set a regulatory watch (licensing scheme, CMA dentistry study)                          | Founder    | Content freshness      | 🟢 Documented                            |

---

## Sources

Retrieved 2026-07-27.

- **Trading disclosures** — HWB Accountants, _Legal requirements for company websites in the UK (2026 guide)_; SourceCodeCreative, _What Legally Needs to Be on a Website in the UK_
- **VAT / NETP** — Sterling & Wells, _UK VAT Registration for Overseas Companies (2026)_; AVASK, _UK VAT Threshold 2026_
- **Art. 27 / UK representative** — LegalVision UK, _UK GDPR Article 27_; activeMind.uk, _UK Representative Required Under the UK GDPR_; BCLP
- **ICO data protection fee** — ICO, _Guide to the data protection fee_; 1st Formations
- **PECR cookies** — ICO cookie-banner project correspondence; CookieYes; Pandectes, _UK Cookie Compliance_
- **PECR email / corporate subscribers** — Data Protection Network, _UK email marketing rules_; salespeople.co.uk, _Cold email under PECR regulation 22_
- **DMCC fake reviews** — CMA guidance **CMA208**, _Fake reviews_; CMS Law; Lewis Silkin; Ashurst
- **ASA / CAP POM ban** — ASA/CAP, _Beauty and Cosmetics: Botulinum toxin products_; JCCP, _New ASA Guidance_; Harley Academy
- **Aesthetics licensing scheme** — Browne Jacobson, _Understanding the new regulations for non-surgical cosmetic procedures_; Government consultation response, August 2025
- **Dental regulation** — Denmarketing, _Dental Marketing Compliance UK: GDC and ASA Rules (2026)_; Whitehat SEO, _Dental Marketing Compliance UK_
- **AI voice / Ofcom** — VoiceVox, _Ofcom Compliance for AI Voice Agents_; Neural Voice, _AI Cold Calling in the UK_; Callin.io, _AI Voice Agents in the UK: Privacy Compliance_
