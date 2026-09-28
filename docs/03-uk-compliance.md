# 03 — UK Compliance

> The biggest single delta from Naxdor. Two audiences: **(a)** what WebAsk itself must do
> to trade legally in the UK, and **(b)** what WebAsk must know to build compliant sites
> for regulated clients — which is also the commercial wedge (doc 02 § 2).
>
> **Research date: 2026-07-27.** Sources cited inline. **Re-checked against primary sources
> on 28 September 2026** for parts of § A4 and § A6, and for § B1, § B2 and § B4; those passages
> carry dated corrections, and § Sources lists every page read that day.
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

> **28 September 2026 — B2B-only positioning settled; interim VAT position adopted.** The
> founder has no accountant and adopted the position researched on 26 September (HMRC VAT
> Notice 741A general rule; GOV.UK and the VAT Registration Manual on NETPs; Skatteverket on
> services to UK businesses): WebAsk **supplies businesses only**, UK business customers
> account for VAT under the reverse charge, and every figure shows **"excl. VAT"**. The terms
> state the businesses-only line and the reverse charge (`data/copy/legal.ts`, "Services,
> prices and proposals"); `/pricing` carries the explanation. The status row above stays
> ⛔ in substance until the two free checks in `00-overview.md` § D2 are done; if either
> answer differs, change `VAT_NOTE` and `VAT_EXPLAINER` in `lib/pricing.ts` and the FAQ
> strings that repeat "excl. VAT". **Later the same day:** the position was adopted by the founder on 28 September 2026 on an AI assistant's answer that matches the research (no Swedish VAT on a B2B service to a UK business; the customer accounts for UK VAT under the reverse charge); no HMRC or Skatteverket confirmation was obtained.

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

- ✅ **Refusing is as easy as accepting.** The ICO's rule sentence: "Our consent mechanism
  makes it as easy to refuse consent as it is to accept." "Equally prominent options to
  “accept all” or “reject all” non-exempt storage and access technologies" is its
  illustration of good practice. _(Corrected
  28 September 2026: this line also said "this is the single most common failure and the
  ICO's main enforcement focus". No ICO page read supports that, so it is removed.)_
- ❌ Pre-ticked boxes are not consent.
- ❌ "By continuing to browse you agree" is not consent.
- ❌ Cookie walls that withhold the service pending acceptance fail the freely-given test.
- ✅ **Nothing non-exempt is set before consent** — not after, not "on page load, we'll
  ask in a moment". "Non-exempt" is the ICO's term; it replaces our older "non-essential".
  _(Resolved 28 September 2026 against the addendum's § A9 row.)_ Since **5 February 2026**
  (PECR reg. 6 substituted and Sch. A1 inserted by the Data (Use and Access) Act 2025;
  SI 2026/82) there are five exceptions. The **statistical-purposes exception** (Sch. A1
  para 5) covers storage or access whose "sole purpose" is "to collect information for
  statistical purposes about how the service is used with a view to making improvements to
  the service", where the information "is not shared with any other person except for the
  purpose of enabling that other person to assist with making improvements", the user "is
  provided with clear and comprehensive information about the purpose", and "is given a
  simple means of objecting, free of charge, to the storage or access and does not object".
  The ICO (guidance finalised 29 April 2026): "it is not a broad exception that covers all
  types of analytics technologies or ways you can use them"; it "does not allow you to monitor
  or track individual visitors to your service"; it "does not apply to purposes related to
  online advertising"; and "your third party provider must be a processor, not a joint
  controller". WebAsk's own site keeps GA4 and Clarity behind consent regardless — our
  choice; neither has been assessed against the exception.

**Enforcement.** _(Corrected 28 September 2026.)_ The ICO, April 2026: "992 (99%) of the top
1,000 websites met our compliance checks at the time of their most recent test" — a statement
about its own checks, not a rule. The line that stood here ("The ICO wrote to **53 of the UK's
top 100 websites** requiring cookie-banner compliance") carries no date or URL and was not
re-verified on 28 September 2026: **unsourced**. PECR fines: since **5 February 2026** (Data
(Use and Access) Act 2025 s.115 and Sch. 13, substituting PECR Sch. 1; SI 2026/82) the higher
maximum is, "in the case of an undertaking, £17,500,000 or 4% of the undertaking's total annual
worldwide turnover in the preceding financial year, whichever is higher", and "in any other
case, £17,500,000" (Data Protection Act 2018 s.157(5)). The ICO's summary: PECR "enforcement
mechanisms and penalties are the same in most cases" as under UK GDPR. On online advertising
the ICO says "nothing has changed at this stage" (18 May 2026).

**Inherited implementation.** Naxdor already ships a consent gate with GA4 and Clarity held
behind it, and Vercel Analytics is cookieless so it runs without consent. That architecture
satisfies this shape — but **verify the reject button has genuinely equal prominence** during
the fork, since the US-oriented original may not have been built to the ICO's standard.

**Action items**

- [x] Audit the inherited consent component against equal-prominence — **failed and fixed
      2026-09-25**: "Accept analytics" rendered as the filled primary button and "Decline" as
      an outline; both are now the same outline variant, size and weight, labelled "Reject
      analytics" / "Accept analytics" (`components/analytics/consent-banner.tsx`)
- [ ] Confirm no non-exempt cookie fires pre-consent (network tab, not code review) —
      the loaders mount only on `consent === "granted"` by code, but the browser check needs
      real `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` values set; do it on the first
      preview deployment that has them
- [x] Cookie policy page enumerates each cookie, purpose, duration and provider — drafted
      2026-09-25 (`data/copy/legal.ts`): `_ga` and `_ga_<container-id>` at 2 years from
      Google's cookie-usage page; Clarity's seven cookies by name and purpose from
      Microsoft's list, which prints no lifetimes, so the policy points to that list rather
      than inventing durations; the two local-storage entries (theme, consent) named
- [x] Consent is re-obtainable — a persistent "cookie settings" link in the footer
      (`CookieSettingsButton`, inherited; verified 2026-09-25)

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

Since **6 April 2025** the Digital Markets, Competition and Consumers Act 2024 lists among the
"commercial practices which are in all circumstances considered unfair" (s.225(4)(c);
Sch. 20 para 13; SI 2025/272) submitting or commissioning "a fake consumer review" or "a
consumer review that conceals the fact it has been incentivised" (an incentive includes cash,
discount, freebie, event invite, or a financial interest), and publishing reviews "in a
misleading way" — aggregate scores are in scope. CMA208 calls these a "banned practice".
_(Corrected 28 September 2026: this sentence said "illegal", which is not the Act's word —
it says unfair commercial practices "are prohibited" (s.225(1)) — and para 13 bans
**concealing** an incentive, not incentives as such.)_

| Penalty    | Amount                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------- |
| Business   | Up to **10% of global annual turnover** or **£300,000**, whichever is higher             |
| Individual | Up to **£150,000** — _not re-read on 28 September 2026; confirm before any copy uses it_ |

The CMA can determine a breach and impose fines **without recourse to the courts**. Its
opening enforcement posture was supportive, but in **March 2026 it opened investigations
into five named businesses** over review handling. _(Unsourced as at 28 September 2026: no
source is recorded for this sentence and it was not re-verified. Do not reuse it until it is.)_

**Current exposure on `webask.co.uk` (audited 2026-07-27):**

| Page          | Problem                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/about/`     | A fabricated staff roster for a solo operation, including a "Marketing Director **Alicia Keys**"                                                          |
| `/portfolio/` | Three "projects" with identical lorem-ipsum descriptions, plus testimonials attributed to "Mark Riley" and "Willie Walters" with identical generic praise |

The fake testimonials are the DMCC problem. The fabricated staff are a misleading-action
problem and an E-E-A-T disaster besides. _(Corrected 28 September 2026: this named the
Consumer Protection from Unfair Trading Regulations 2008, which "are revoked" from 6 April 2025
(DMCC Act 2024 s.251(1); SI 2025/272), with a saving for Part 4A. The unfair-trading law
since that date is the DMCC Act 2024 Part 4 Chapter 1.)_

**Action items — Phase 1, non-negotiable, at cutover**

- [x] Remove every fabricated team member; publish only the real founder — **true of the new
      site** (`data/team.ts` holds one real person; audited 2026-09-25). The fabricated roster
      lives only on the WordPress site and disappears when DNS moves at cutover
- [x] Remove every placeholder project and testimonial — **true of the new site**:
      `data/portfolio.ts` entries are `TODO(content-copy)` scaffolds that `PortfolioStrip`
      filters out, the case-study template ships `draft: true` behind the same guard, and no
      testimonial component exists (audited 2026-09-25). The live `/portfolio/` page goes at
      cutover
- [x] `/portfolio/` 301s to `/case-studies`, which **self-hides while empty** (the inherited
      case-studies engine already does this — see doc 01) — in `lib/redirects.ts` since the
      Phase 0 301 map; `/sample-page/` answers 410
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

_(Sourced 28 September 2026.)_ CAP Code rule 12.12, complete: "Prescription-only medicines or
prescription-only medical treatments may not be advertised to the public." Medicines law: "A
person may not publish an advertisement that is likely to lead to the use of a prescription
only medicine" (Human Medicines Regulations 2012 reg. 284(1), Part 14 Chapter 2, under
"Advertising to the public"); a breach of that Chapter is an offence (reg. 303). Organic
content: "Posts on your own social media channels or website also count as ads" (CAP
Bitesize); the FAQ (23 January 2020) applies rule 12.12 to "even your own website (though there
are some small exceptions here …)". **The professional-audience exception is in CAP's
advice, not in the text of rule 12.12:** a POM "may be advertised directly to the medical,
dental, veterinary and allied professions (rule 12.12)" (AdviceOnline, 29 October 2025), a page
whose own note says the advice "is given by the CAP Executive" and "does not bind CAP, CAP
advisory panels or the Advertising Standards Authority". The Code's Scope (II d: "media
addressed only to medical, dental, veterinary or allied practitioners") and HMR reg. 282
("advertisements wholly or mainly directed at members of the public") reflect it. Write "CAP's
advice (AdviceOnline, given by the CAP Executive) says …", never "rule 12.12 says …" and never
"the ASA's advice", for the exception. _(Corrected 29 September 2026, from the page read 28
September 2026: this twice called it "the ASA's advice", and called Scope II d and reg. 282 its
"basis", which no primary page read says. The research notes use both words, "reflect"
(`verified-asa.md` § 0.6) and "basis" (`verified-asa.md` § 9 and `a1/research.md`); "reflect" is
the weaker word and is kept.)_

**What that means concretely for a clinic website:**

| ❌ Not allowed                                                                                                                                                                                                                                                                                                                  | ✅ Compliant alternative                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| The brand name of a botulinum toxin product anywhere the public can see it — website, Instagram, Google Ads, flyers. _(28 September 2026: the narrow website routes, a gated treatment-options page and a gated price list, are in § B1-P)_                                                                                     | Advertise the **consultation**: _"consultations for lines and wrinkles"_                                              |
| Implied references — for a clinic that offers the POM, alone or alongside other treatments, "the word “relaxing” is likely to be understood as an implied reference to Botox" (FAQ, CAP News, 23 January 2020; the non-POM case is in the box below)                                                                            | Describe the **concern the patient wants addressed**, not the product and not its effect                              |
| **Indirect references** — "wrinkle-relaxing", "#brotox", "#beautox" (CAP Bitesize, which states no treatment-list condition; the FAQ's non-POM case for "wrinkle relaxing injections" is in the box below); "Beautytox", "Beautox" (classed as **direct** references by the Enforcement Notice on social media, 9 January 2020) | Not alternatives. **"Anti-wrinkle injections" is conditional**, not in this row — see the 28 September 2026 box below |
| Before/after imagery used to promote the POM ("very likely to be seen as an implied ad", AdviceOnline, 5 June 2025)                                                                                                                                                                                                             | Educational content about consultations, qualifications, safety standards, duty of care, patient experience           |

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
> _(Superseded in part on 28 September 2026. "Implied promotion … with upheld complaints" is not
> the whole position on "anti-wrinkle injections": the FAQ's words (CAP News) are conditional — see
> the next box. The price-list paragraph that stood here, which said "**only** where it sits at least
> two clicks from the homepage … and appears in neither the homepage nor the primary
> navigation", is replaced by § B1-P: no ASA page says "at least two clicks" or "primary
> navigation".)_

> ### ⚠️ CORRECTED 28 September 2026 — "anti-wrinkle injections" in CAP's and the ASA's own words
>
> _(Relabelled 29 September 2026: this box, its heading, the build-standard note below it, the
> 2026-07-29 box above and the § B4 checklist line gave the FAQ to the ASA. The FAQ is labelled
> "CAP News" (see B1-P). The Enforcement Notice is CAP's, issued with the MHRA: "Today, the
> Committees of Advertising Practice (CAP), together with the Medicines and Healthcare products
> Regulatory Agency (MHRA), has issued an Enforcement Notice …" (CAP News, 9 January 2020,
> https://www.asa.org.uk/news/we-re-using-new-technology-to-enforce-botox-ad-ban.html, read 28
> September 2026). The rulings are the ASA's.)_
>
> The FAQ (CAP News, 23 January 2020), "CAN I SAY “ANTI-WRINKLE INJECTIONS”?", all four
> paragraphs, verbatim:
>
> - "If you offer both ‘prescription-only’ treatments like Botox and also ‘non-prescription-only’
>   treatments like fillers, this might be acceptable – but, you must ensure that nothing else in
>   the ad implies that the term “injections” refers exclusively to Botox."
> - "As an example, if you say you offer “anti-wrinkle injections and fillers”, this suggests that
>   the “injections” is referring to Botox. We’d therefore recommend referring to “anti-wrinkle
>   injections” or “anti-wrinkle treatments” as a collective term for both the ‘prescription-only’
>   and ‘non-prescription-only’ treatments."
> - "If you only offer ‘prescription-only’ treatments, we’d advise against “Anti-wrinkle
>   injections”, as it’s likely to be seen as an implied ad for a ‘prescription-only medicine’."
> - "If you only offer ‘non-prescription-only’ treatments like fillers, and don’t administer Botox
>   at all, then the claim “anti-wrinkle injections” is likely to be acceptable."
>
> The Enforcement Notice (9 January 2020, its landing-page date; scoped to social media): "Be
> aware the ASA considers that a reference to "anti-wrinkle injections" alongside a price that
> relates to a POM will be seen as an ad for that POM", and "avoid juxtapositions such as
> "anti-wrinkle injections and dermal fillers" which would imply that the "injections" in
> question are POMs". For a website, pair it with the FAQ.
>
> Rulings where "anti-wrinkle" wording was held, **in context**, to be an indirect reference:
> **LIFT Aesthetics (17 May 2023)**, influencer posts that also named "Allergan", showed a
> syringe and mentioned results in two weeks: "references to “doing anti-wrinkle” and
> “anti-wrinkle injections” were indirect references to Botox and had the same effect as
> promoting a POM"; **Dr Bunny Aesthetics (24 April 2024)**, a listing on the Fresha booking
> platform that also named the toxin and could be booked without a consultation: "references to
> “anti-wrinkle” treatment within the ad were indirect references to Botox". **Valterous Ltd
> (18 December 2024) is not an "anti-wrinkle injections" ruling:** its ad said "COSMETIC
> INJECTIONS 3 AREAS FROM £179", which the ASA linked to the clinic's "Anti-Wrinkle" treatments
> through the clinic's own website FAQ.
>
> **"Wrinkle relaxing injections": the FAQ advises against it for a clinic that offers the POM,
> alone or alongside other treatments** _(corrected 29 September 2026, from the FAQ read 28
> September 2026: this line said "not conditional", which dropped the FAQ's second paragraph)_. The
> FAQ, "CAN I SAY “WRINKLE RELAXING INJECTIONS”?", both paragraphs, verbatim:
>
> - "No, we’d advise against it. Even if you sell both ‘prescription-only’ treatments like Botox
>   and also ‘non-prescription-only’ treatments like fillers, the word “relaxing” is likely to be
>   understood as an implied reference to Botox."
> - "If you only offer ‘non-prescription-only’ treatments, as long as those treatments do actually
>   “relax” wrinkles and not just fill the lines or improve the appearance of the skin (and you
>   have actual evidence to prove this) it might be acceptable to use this claim in those
>   circumstances."
>
> So the FAQ's answer turns on the treatment list here too: advised against "Even if you sell both";
> "might be acceptable" for a clinic that offers only non-POM treatments which do "relax" wrinkles,
> with "actual evidence to prove this".
>
> Three other CAP pages list the wording with no such exception _(added 29 September 2026, from
> pages read 28 September 2026)_. The Enforcement Notice on social media (9 January 2020, its
> landing-page date): "Do not substitute direct references to POMs with indirect phrases that can
> only refer to a POM such as "wrinkle relaxing injections". This is indirect promotion of a POM,
> and just as much of a problem." The Enforcement Update (CAP News, 9 January 2020), also about
> social media: "Make sure not to substitute direct references to POMs with indirect phrases that
> can only refer to a POM such as “wrinkle relaxing injections”. This is indirect promotion of a
> POM, and just as much of a problem." CAP Bitesize: "Don’t mention Botox or use indirect references
> to it in your ads", then "This includes phrases like “wrinkle-relaxing treatments”, or even things
> like “#brotox” or “#beautox”. This applies to posts on social media, leaflets and posters, and
> almost all website content." None of the three states the FAQ's non-POM exception, and the Notice
> and the Update give the phrase as an example of "indirect phrases that can only refer to a POM".
> Quote each page for what it says, keep "can only refer to a POM" and "almost all website content",
> and never write that the phrase is banned outright.
>
> **WebAsk's build standard — our choice, not CAP's or the ASA's rule (founder, 28 September
> 2026):** client sales copy leaves "anti-wrinkle injections" out altogether, because the FAQ's
> and the Enforcement Notice's conditions turn on the clinic's full treatment list and on what
> sits next to the phrase. Copy must never present this standard as CAP's or the ASA's position.
> _(Wording relabelled 29 September 2026; F2's substance is unchanged; flagged for the founder,
> who confirms the new wording or re-words it.)_

**B1-P. The price-list route, in CAP's words.** _(Added 28 September 2026. Replaces
"only … at least two clicks … primary navigation" in the 2026-07-29 box above and in doc 08
§§ 0.2 and 4. Heading corrected 29 September 2026 from "in the ASA's words": all three sources
below are CAP's. The FAQ is labelled "CAP News", the Bitesize page is "CAP Bitesize", and
AdviceOnline "is given by the CAP Executive". See the F3 note at the end of this section.)_

- **FAQ (23 January 2020):** "If it’s on your website, it depends. If you mention the price on
  the homepage or include a direct link to “Prices” which mentions Botox, this is unlikely to be
  acceptable. However, if clients can only get to the price list after going through a page
  promoting a consultation (as above), then this might be acceptable." The same FAQ on a website
  generally: "Yes, in very narrow circumstances."
- **CAP Bitesize (undated; read 28 September 2026):** "Advertise the consultation (not the
  treatment) on your homepage. From there, link to a separate page with more information about
  the consultation. That page can then link to a further page (ideally two clicks from the
  homepage) which includes factual, balanced information about treatment options – including
  Botox." Also: "You can mention Botox in a price list as part of a broader range of treatments
  – but only after the user has clicked through the consultation pages. They shouldn’t be able to
  view pricing for Botox directly from the homepage." And: "Making sure users can’t access
  information about Botox without going through the consultation journey is essential for
  compliance." And: "You can mention Botox on your website in two specific circumstances. As a
  potential outcome of the consultation In your price list But the reference must be: Purely
  informational with no promotional content – like the kind of thing you'd read in a patient
  information leaflet. Not on your homepage."
- **AdviceOnline (29 October 2025) — CAP's advice, not the ASA's** (corrected 29 September
  2026; see the top of § B1): the price list "should not include product claims or
  encourage viewers to choose a product based on the price"; "No reference to a POM should be
  made in a sponsored ad, on the homepage of a website, in logos, testimonials or hover text."

Bitesize is firm that access must be gated ("only after the user has clicked through",
"essential for compliance"); the FAQ is tentative that the gated route is acceptable ("might be
acceptable"). Quote both, each from its own page. **Never** "at least two clicks", "only where",
or "the structure CAP requires".

**Two exclusions that do not make a website price list permissible.** HMR reg. 7(3)(b)(iv)
takes "price lists, provided that no product claim is made" out of "advertisement"; CAP Code
Scope II m excludes "price lists unless they advertise another product or a promotion or are
visible in a marketing communication". The FAQ treats the website case separately ("If it’s on
your website, it depends"), so neither exclusion should be summarised as making a website price
list permissible.

**WebAsk's reading and design choices — labelled as ours, never as ASA wording:** the POM stays out
of the primary navigation and out of every meta title and description. The nearest primary line on
navigation is the MHRA's, about the home page: "Links and navigation aids may be given for
particular conditions and diseases but not to specific POMs" (Blue Guide Appendix 6, November 2020).
The sentence before it in the same paragraph (added 29 September 2026, from the Appendix 6 extract
in `.playwright-mcp/compliance/verified-asa.md` § 10, read 28 September 2026; not in the `a1/raw/`
copies): "The Home page should focus on medical conditions and the service the website provides and
should not include any reference to named POMs, including price information (see below)." Appendix 6
is "Guidance for providers offering medicinal treatment services" and names "online clinics,
cosmetic treatment providers or pharmacies" as services that "may promote the service they provide".
On meta tags the MHRA says "Our main focus is the content of the website, rather than the
competitive tools used to increase awareness of the website which are not usually prominent in
customer views", so our meta rule is stricter than its stated focus. This is the "consultation-first
architecture" deliverable: describe it as "a structure built to the route CAP's guidance describes
for gated price lists", never as "the structure CAP requires". The rule that the route is stated
only in CAP's own words is the founder's F3 (28 September 2026). _(F3 attribution corrected 29
September 2026 and flagged for the founder: F3 worded the deliverable "a structure built to the
route the ASA describes for gated price lists" and the rule "the ASA's words", but the route's three
sources in this section are CAP's: the CAP News FAQ, CAP Bitesize, and AdviceOnline, which "is given
by the CAP Executive" and "does not bind … the Advertising Standards Authority". F3's substance is
unchanged. The founder confirms the new wording or re-words it. Queued follow-ups, outside this
doc-03-only edit (line numbers as at 29 September 2026): **(a) F3's wording, pending the
founder:** doc 08 lines 12, 30, 44-45, 237, 268, 271; doc 02 line 488;
`docs/strategy/content-guidelines.md` line 91. **(b) The FAQ as CAP News, not pending:** doc 08
lines 54, 57-58, 61, 345, 352, 353, 358, 392, 403; doc 02 lines 131, 141, 145, 483, 487.)_

**Fillers are outside the POM rule** (added 28 September 2026). The FAQ: "This rule does not
apply to other injectable cosmetic treatments that are not ‘prescription-only medicines’, such
as dermal fillers (Restylane etc.)." The Enforcement Notice: "Non-POMs, such as dermal fillers,
may be advertised provided there is no implication that a POM is also available."

**Before-and-after images** (added 28 September 2026). CAP and the ASA regard them "in the same
way as testimonials", so rules 3.47–3.50 apply, and marketers "should hold signed and dated
proof that the photos are genuine and have not been manipulated" (AdviceOnline, _Before and
after photos_, 5 June 2025), and "The photos should not exaggerate the efficacy of the product and marketers
need to ensure that they have relevant evidence to substantiate the impression created by the
images." Rule 3.47: "Marketers must hold documentary evidence that a testimonial or
endorsement used in a marketing communication is genuine … and hold contact details for the
person who, or organisation that, gives it"; rule 3.50: not "without permission". For a POM,
the same page: "‘Before and after’ imagery of a prescription-only product, even in isolation
without any accompanying claims, is very likely to be seen as an implied ad for a
prescription-only product". Bitesize: "Don’t share before-and-after photos of Botox".
AdviceOnline on botulinum toxin products (29 October 2025): marketers "should, therefore, avoid
featuring any before and after images in their marketing communications". Patient consent for
images: the GDC for dentists (§ B2); for aesthetic practitioners, **GAP** — GMC and NMC guidance
not yet read.

**Rulings map** (added 28 September 2026). Each point is what the ruling itself, or the AdviceOnline
page that cites it, cites it for (CAP's page of 29 October 2025 or, for the last row, _Before and
after photos_, 5 June 2025) — nothing from a secondary source. _(Corrected 29 September 2026: this
said "the ASA's AdviceOnline page"; the 29 October 2025 page says its advice "is given by the CAP
Executive" and does not bind the ASA. The 5 June 2025 page's own status note was not captured on 28
September 2026, so it is cited as "AdviceOnline", not as the ASA's or CAP's; the two AdviceOnline
pages whose note was captured, 29 October 2025 and 17 February 2022, both say their advice "is given
by the CAP Executive".)_

| Ruling                                              | Date                               | Cited for                                                                                                                                                            |
| --------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Skinboost                                           | 22 February 2012                   | "Line Relaxing" in a price list, "in conjunction with other references to Botox and its effects", read as a reference to Botox                                       |
| Anesis Spa                                          | 11 July 2012                       | Claims that "went beyond balanced and factual references" (the AdviceOnline page prints "rule 12.2", a typo for 12.12 — do not copy it)                              |
| HB Health of Knightsbridge                          | 15 January 2014                    | Botox information that "could be navigated to directly, without consumers also viewing information about the consultation process"                                   |
| Venus Beauty Lounge                                 | 5 August 2015                      | A POM "cannot be advertised to the public (rule 12.12)"                                                                                                              |
| Beauty Boutique Aesthetics; Faces by AKJ Aesthetics | 25 September 2019                  | "any reference to Botox on their social media pages, including hashtags, is likely to be seen as an implied ad for a POM"                                            |
| LIFT Aesthetics                                     | 17 May 2023                        | "doing anti-wrinkle" and "anti-wrinkle injections" as indirect references, in influencer ads that also named "Allergan" (rules 12.12 and 12.18 among those breached) |
| Menar Jimmy Georgiou                                | 21 June 2023                       | A POM "cannot be advertised to the public (rule 12.12)"                                                                                                              |
| Dr Bunny Aesthetics                                 | 24 April 2024                      | "anti-wrinkle" treatment as an indirect reference, on a Fresha listing that also named the toxin and could be booked without a consultation                          |
| Valterous Ltd t/a Therapie Clinic                   | 18 December 2024                   | "COSMETIC INJECTIONS 3 AREAS FROM £179", set apart from fillers and applying only to anti-wrinkle treatments, as an indirect ad for a POM                            |
| The Dental Suite; EF Medispa                        | 13 December 2017; 20 February 2013 | Before-and-after photos: signed and dated proof they are genuine (AdviceOnline, 5 June 2025)                                                                         |

Not re-read on 28 September 2026, so no point is recorded for them: **Dermaskin Clinics (15
January 2014)** and **Glowery Ltd (12 April 2023)**, listed in doc 08 § 4 since 28 July 2026.
The ASA's rulings search ranks by relevance, so "no ruling after 18 December 2024" is not
established. "A fine line" (CAP News, 17 October 2019) also prints "(Rule 12.2)" for 12.12.

**Further lines the flagship post quotes** (added 29 September 2026, from the raw page copies read
28 September 2026). Each is verbatim; keep the qualifiers.

- **Skinboost (22 February 2012), in the ruling's own words** (the table row quotes AdviceOnline's
  paraphrase, which drops "the"): "In conjunction with the other references to Botox and its
  effects, we considered that consumers would understand reference to 'Line Relaxing' treatment in
  the price list was a reference to Botox."
- **LIFT Aesthetics (17 May 2023):** the ruling covers "Six Instagram Stories for LIFT Aesthetics, a
  facial aesthetic clinic". On whether the Stories were ads (issue 1), the ASA "considered that the
  provision of free Botox treatment constituted a payment" to the reality TV star who reposted the
  clinic's Stories. On the wording: "We also understood that LIFT Aesthetics referred to the
  treatment as “anti-wrinkle injections” to avoid using the term Botox which they understood was a
  breach of the CAP Code". Keep "understood", the ASA's verb, and keep the payment finding with
  issue 1, not with the rule 12.18 breach.
- **"A fine line" (CAP News, 17 October 2019)** on the professional audience: "It IS permissible to
  advertise directly to healthcare professionals in media addressed only to them." Then: "The
  permission does not extend to beauty practitioners, unless they also have those qualifications,
  and ads must not appear in media targeted more broadly and likely to be seen by the general
  public." Keep "unless they also have those qualifications".
- **AdviceOnline (29 October 2025; CAP's advice)** on websites: "There are some exceptions for
  websites, principally those for clinics and pharmacies offering consultations for the treatment of
  lines and wrinkles, in that those websites may provide information about a POM, but only in the
  context of the product being a possible treatment option following a consultation." Keep
  "principally"; it does not say "only clinics".
- **Valterous Ltd (18 December 2024):** "whilst “Cosmetic Injections” referred to both POM and
  non-POM treatments, we understood that the promotion only applied to “Anti-Wrinkle” treatments",
  and "consumers would understand from the ad that cosmetic injections were distinct from dermal
  fillers and lip fillers". Keep the concession ("whilst").
- **Enforcement Update (CAP News, 9 January 2020; about social media):** its "wrinkle relaxing
  injections" line is in the box above. Its "anti-wrinkle injections" line carries a comma that the
  Notice's does not: "Be aware the ASA considers that a reference to “anti-wrinkle injections”
  alongside a price that relates to a POM, will be seen as an ad for that POM." Quote the page you
  cite.

**Who raised the issues** (added 29 September 2026, from the rulings read 28 September 2026).
Dr Bunny Aesthetics: "The Joint Council for Cosmetic Practitioners (JCCP) challenged whether: …".
Valterous: "The ASA received complaints from the Joint Council for Cosmetic Practitioners (JCP)
and Laser Clinics UK." (the ruling prints "JCP"; do not copy it). So the JCCP complained in both,
and Valterous had a second complainant. In LIFT Aesthetics the one outside complaint was about ad
labelling ("The complainant challenged whether: 1. ads (a)-(e) were obviously identifiable as
marketing communications."); the POM and celebrity issues were raised by the ASA ("The ASA
challenged whether the ads:" … "3. used a celebrity to endorse a medicine.").

**LIFT Aesthetics and rule 12.18** (added 29 September 2026, from the ruling and CAP Code section
12 read 28 September 2026). Rule 12.18, complete: "Marketers must not use health professionals or
celebrities to endorse medicines." It says "medicines"; CAP's AdviceOnline page paraphrases it as
prohibiting celebrities "to endorse a POM", so quote the rule text for the rule. In LIFT (17 May
2023; "Three issues were investigated, all of which were Upheld"), the ASA noted that the person
"described himself as reality TV star and had approximately 230,000 followers on Instagram",
found that "he had the attention of a large audience" and so was "a celebrity for the purposes of
the CAP Code", and, because "he had endorsed a medicine, we concluded that the ads had breached
the CAP Code". Keep "approximately". CAP's own summary names nobody ("a reality TV star’s
Instagram Stories", AdviceOnline, 29 October 2025); copy should do the same, and should not name
the manufacturer the ruling quotes.

**Enforcement.** ~~The **MHRA issued 47 enforcement notices to aesthetic businesses in 2024**,
mostly for exactly this.~~ _(Removed 28 September 2026: no primary source. None of the MHRA's
twelve monthly advertising-investigation publications for 2024, nor its 2023–24 or 2024–25
annual report, gives the figure; it appears only on a vendor page that cites no source. Do not
reuse it.)_ The primary line in its place, with no number: "We also consider complaints about
the advertisement of medicines and act against those who illegally promote prescription
medicines to the public. A particular focus continues to be advertisements by treatment service
providers for prescription medicines for weight loss, aesthetics treatments, and hay fever"
(MHRA Annual Report and Accounts 2024 to 2025; the PDF text runs "treatmentservice"). CAP
offers a free **Copy Advice** service for pre-publication
questions. _(Re-verified 28 September 2026: the standard 3–5 working day service is free and
faster turnarounds are paid; it covers "prospective non-broadcast ads" against the CAP Code, and
"We do not provide legal advice". The Code excludes editorial content, Scope II k and II q.
Added 29 September 2026, from the same 28 September read: "We give all advice in good faith, but
it is not binding on you, CAP or the ASA.")_

**How ads get found — ASA and CAP monitoring** (corrected 29 September 2026, from pages read 28
September 2026). This replaces "The ASA now runs **AI-powered proactive monitoring** — it finds
non-compliant ads without waiting for a complaint", which was marked unsourced and was stronger
than any source. The primary line is in the Background of the ASA's **Glow Up LLC t/a Maxxing**
ruling (2 September 2026): "The ads were identified for investigation following intelligence
gathered by our Active Ad Monitoring system, which uses AI to proactively search for online ads
that might break the rules." Its scope: the ruling was about "Two paid-for Meta ads for Maxxing,
an AI-powered app to maximise physical attractiveness (looksmaxxing)" — an app, not a clinic — and
"forms part of a wider piece of ongoing work on the advertising of AI products across a number of
sectors". The weight-loss news page below calls the same system "AI-driven". No page read says
the system is run on botulinum-toxin ads or on clinic websites. Keep "online ads" and "might break
the rules"; never write "it finds non-compliant ads" or "your ads will be found". _(Not yet
carried over: doc 02 § 2 (Aesthetics) still says "The ASA now runs AI-powered proactive
monitoring that finds non-compliant ads without waiting for a complaint". Its correction is a
queued follow-up, outside this doc-03-only edit of 29 September 2026.)_

The one page read that describes monitoring of this POM's ads is older and does not say AI: CAP
News, _We're using new technology to enforce Botox ad ban_ (9 January 2020): "From 31 January,
CAP will be using new monitoring technology to discover problem ads on social media and flagging
these posts for removal as part of ongoing work with Facebook." The same page: "Advertisers not
following the rules run the risk of being referred to the MHRA or their professional regulatory
body." Keep "risk".

**The weight-loss report (2 April 2026)** (added 29 September 2026, from pages read 28 September
2026). It covers **paid online ads for weight-loss POMs**, not botulinum toxin, and nothing in it
says aesthetic clinics were among the advertisers monitored. Three documents (the news page and
the resource page, each dated 2 April 2026, and the PDF, dated "April 2026") word the figures
differently: quote one per sentence and name it.

- **ASA and CAP News**, _Protecting people from harmful ads for weight-loss medicines: new
  research and Enforcement Report_: "We identified around 900 ads likely to breach the rules, from
  38 of the 44 advertisers monitored." Among "The most common problems" (the page's frequency
  claim; quote it attributed, never in WebAsk's voice): "Using descriptors clearly understood as
  references to prescription-only medicine such as “weight-loss injection”, “pen”, “jab” or
  “GLP1”". "Jab" is on this page only. Also: "Using our AI-driven Active Ad Monitoring system,
  we’ve captured and assessed tens of thousands of weight-loss ads from high priority
  advertisers."
- **Enforcement Report resource page**, _Enforcement Report: Weight-loss prescription-only
  medicines_: "This report examines the impact of enforcement against paid online ads for
  prescription-only medicines used for weight management between February 2025 and January
  2026." It words the count "Around 900 ads from 38 advertisers were assessed as likely to break
  the rules", with the 44 in a separate sentence, so "38 of the 44" is the news page's wording.
- **The report PDF** (CAP Enforcement Report, April 2026): "In February 2025 CAP began targeted
  monitoring of ads from 30 pharmacies and online clinics responsible for the majority of ads in
  the sector." and "We later added 14 more advertisers to the programme." — their type is not
  stated, so write "starting with pharmacies and online clinics". Its examples are introduced with
  "e.g.", so they are not a complete list: "Wording that implied those medicines (e.g.
  'weight-loss injection', 'pen' and 'GLP-1')" (the PDF text prints each opening quote mark as a
  backtick). "Jab" is not among these examples.

**The proposed licensing scheme (England).**

> ### ⚠️ CORRECTED 2026-07-28 — "operational in 2026" overstated the position
>
> This paragraph originally opened _"Operational in 2026 under the Health and Care Act 2022"_ and
> then described the scheme in the present tense. **The scheme is NOT yet in force.**
>
> _(Rewritten from primary sources on 28 September 2026; this section is now the authority and
> doc 08 § 4 summarises it. The July text here said the August 2025 response proposed "the
> two-tier licensing and the red/amber/green categorisation" and that the under-18s offence
> covers "botulinum toxin or filler for a cosmetic purpose". The tiers were proposed in the 2023
> consultation, and "for a cosmetic purpose" attaches to fillers only. Write the scheme as
> proposed, with the date attached — stale regulatory content is worse than none.)_

**Status as at 28 September 2026: not in force, and we found no regulations made** (legislation.gov.uk title searches). Every line below is
dated; read on 28 September 2026 unless stated.

- **The power.** Health and Care Act 2022 s.180: the Secretary of State "may … make
  regulations— (a) prohibiting an individual in England from carrying out specified cosmetic
  procedures in the course of business, unless the person has a personal licence; (b)
  prohibiting a person from using or permitting the use of premises in England for the carrying
  out of specified cosmetic procedures in the course of business, unless the person has a
  premises licence." In force 1 July 2022 (S.I. 2022/734) — as a **power** only. Schedule 19 says
  what regulations "may" do and names no licence condition.
- **The 2023 proposals** (DHSC consultation, 2 September to 28 October 2023): "a practitioner
  licence and a premises licence", administered by local authorities, with three tiers (green,
  amber, red). The procedures listed "are indicative of the types of procedures that will be
  included … they are not a final or complete list and may change based on the outcome of this
  consultation". The **proposed** amber list included "botulinum toxin injections" and
  "semi-permanent dermal fillers injected into the face only" — narrower than "dermal fillers".
  The **proposed** red list included procedures "aimed at augmenting any part of the body, in
  particular the breast, buttocks and genitals, typically using autologous fat or dermal
  fillers". It proposed that "any procedure that uses a POM directly, for example, injectable
  toxins" be overseen, "at the very least", by "a qualified and regulated healthcare
  professional". Proposed requirements: "be suitably trained and qualified; hold appropriate
  indemnity cover; operate from premises which meet the scheme’s standards".
- **The response** (7 August 2025): "We received 11,848 responses to the online consultation."
  It uses the colours only when describing what was proposed ("The categories proposed were:
  green … amber … red"); in its own voice it says "tiered classification system" and "proposed
  tiering system", and "further work is required to determine where specific procedures will sit
  in the proposed tiering system and to determine which practitioners should be permitted to
  carry out certain procedures". Oversight "was not defined in this consultation". It
  prioritises the highest-risk procedures "(including procedures aimed at augmenting the breast,
  buttocks and genitals with dermal fillers)" — "including", not a closed list.
- **Since then.** 8 December 2025 (HL12386): "We are taking forward work to determine which
  procedures will be included within the local authority licensing scheme and what requirements
  will have to be met in order to be granted a licence." 12 January 2026 (103132, 103133): the
  proposals "will be subject to the parliamentary process before the legal restrictions, or
  licensing regulations, can be introduced", and the Government "intend[s] to consult on
  proposals for restrictions around the performance of the highest risk procedures in the
  spring"; the same "in the spring" wording on 5 February (109351) and 13 February 2026 (111514). 3 June 2026 (the minister's letter to the Women and
  Equalities Committee): "we plan to consult on draft regulations in June" and "we are committed
  to implementing licensing in the current parliament". 23 June 2026 (10828, the latest answer
  found): "We are preparing a consultation on the draft legislation which would bring these
  proposals into effect."
- **What we found on 28 September 2026.** No DHSC cosmetic-procedures consultation on GOV.UK
  after the 7 August 2025 outcome; no licensing SI or draft SI on legislation.gov.uk (title
  searches, which can miss an unexpected title); no later written answer on licensing. The
  Women and Equalities Committee's follow-up report (HC 307, 11 September 2026) says "we have
  yet to receive the government’s response", which the Government had tied to "the publication
  of its consultation" — implying the consultation was unpublished, though the report does not
  say so in terms. Write "we found no published consultation on the draft legislation", never
  "the Government missed its June deadline".
- **Removed as unsourced (28 September 2026).** The July text said "a general business licence
  would no longer be sufficient" and gave "DBS check" as a licence condition. Neither is in any
  official source read: the 2025 response mentions "Disclosure and Barring Service checks" once,
  as a respondents' concern, and commits to nothing specific. The July text also said
  "botulinum toxin and dermal fillers are amber" as if decided; see the 2023 bullet above.

**What IS in force: the under-18s offence (England).** The 2021 Act (2021 c. 19),
https://www.legislation.gov.uk/ukpga/2021/19/section/1, s.1(1): "It is an offence for a person to
administer, in England, to another person ("A")—(a) botulinum toxin, or (b) a subcutaneous,
submucous or intradermal injection of a filler for a cosmetic purpose, where A is under the age
of 18." **"For a cosmetic purpose" attaches to limb (b), fillers, only**: s.1(3) applies "For the
purposes of subsection (1)(b)". In force 1 October 2021 (S.I. 2021/1004). The s.1(4) defences:
"the defendant was a registered medical practitioner"; a "regulated health professional" acting
"in accordance with the directions of a registered medical practitioner"; or the defendant "had
taken reasonable steps to establish A's age, and … reasonably believed that A was aged 18 or
over" — so an absolute "under-18 ban" overstates it. s.1(6): "liable on summary conviction to a
fine". s.2 adds a business-owner offence that also covers "arrangements … made, in England, by or
on behalf of the business owner", with a due-diligence defence (s.2(4)); no source read says
whether a website booking flow is an "arrangement", so copy must not assert it.

**Citation rule (F6, founder, 28 September 2026).** In any passage about **administering**, cite
it as "the 2021 Act (2021 c. 19)", with the legislation.gov.uk link where links are possible;
describe it as covering "filler injections for a cosmetic purpose and one named prescription-only
medicine"; keep its short title out of body, meta and JSON-LD. (That the toxin is a POM is
sourced from the 2023 consultation's "any procedure that uses a POM directly, for example,
injectable toxins", not from the Act.)

**Other nations** (added 28 September 2026). **Scotland:** the Non-surgical Procedures and
Functions of Medical Reviewers (Scotland) Act 2026 (asp 13) "received Royal Assent on 12th May
2026" and was partly commenced on 22 July 2026 (SSI 2026/206: definitions, Schedule 1 and the
regulation-making powers). Its under-18s offence (s.2(1)) and premises offence (s.3) are **not in
force**, and s.3 cannot be commenced before 6 September 2027 (s.24(4)). Separately, the Scottish
licensing order (SSI 2026/87): "a licence is not required in respect of the carrying on of that
activity before 6 September 2027". **Wales and Northern Ireland: GAP** — not researched.

**Site-design implications we can actually sell:**

- Treatment pages must be written to describe the concern the patient wants addressed, not
  the product and not its effect — this constrains the entire IA and keyword strategy of a
  clinic site. _(Corrected 28 September 2026: this said "describe effect, not product", which
  contradicted the § B1 table's 29 July 2026 correction; the table wins.)_
- Practitioner pages should surface qualifications and indemnity — which is also excellent
  E-E-A-T. _("Licence status" removed 28 September 2026: no licensing scheme is in force.)_
- Age-gating and eligibility copy on booking flows
- Review/testimonial handling that satisfies both the CAP Code and the DMCC Act
- Third-party register links (JCCP, Save Face) as trust signals

### B2. Dental

Four regulators at once:

| Body    | What it governs                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GDC** | Professional conduct. No unsubstantiated clinical claims. A website list, prices, "specialist" and image consent — see _The GDC, in detail_ below. ~~**Genuine reviews only, no incentives.**~~ **Suspended, unsourced (28 September 2026):** no GDC text read contains it. Registration transparency. Patient consent for before/after images (_Standards_ 4.2.7, not the advertising guidance). "Specialist" only for dentists on a GDC specialist list (see _The GDC, in detail_) |
| **CQC** | Registration is a legal requirement in England (HSCA 2008 s.10(1)). ~~Displaying registration and inspection results builds trust~~ The CQC does not rate primary dental providers, so a primary care dental practice has no rating to display — see _The CQC, in detail_ below (corrected 28 September 2026)                                                                                                                                                                        |
| **ASA** | All promotional material legal, decent, honest, truthful                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **CMA** | Consumer protection and pricing transparency. **Opened a market study into private dentistry on 5 March 2026**; the CMA gives the market as "valued at £8.4 billion in 2023 to 2024", citing LaingBuisson (attribution added 28 September 2026)                                                                                                                                                                                                                                      |

Plus UK GDPR (patient data), PECR (recall/marketing communications), and the unfair-trading
rules of the DMCC Act 2024 Part 4 Chapter 1. _(Corrected 28 September 2026: this named the
Consumer Protection from Unfair Trading Regulations, which "are revoked" from 6 April 2025,
DMCC Act s.251(1), with a saving for Part 4A.)_

**The GDC, in detail** (added 28 September 2026; every line read that day).

- **The website list** (_Guidance on advertising_,
  https://www.gdc-uk.org/standards-guidance/standards-and-guidance/gdc-guidance-for-dental-professionals/guidance-on-advertising;
  "Effective from 30 September 2013", no revision date, though it names TikTok and X). For
  each dental professional named on a website: "your professional qualification and the country
  from which that qualification is derived; and your GDC registration number". For a practice
  website: "the name and geographic address at which the dental service is provided"; "contact
  details of the dental service, including e-mail address and telephone number"; "the GDC’s
  address and other contact details, or a link to the GDC website"; "details of the practice’s
  complaints procedure and information about who patients may contact if they are not satisfied
  with the response"; and "the date the website was last updated". Also: "You must update the
  information showing on your website regularly, so that it accurately reflects the personnel at
  the practice and the service offered", and "you do not display information comparing the
  skills or qualifications of any dental professional providing any service with the skills and
  qualifications of other dental professionals". The page says nothing on reviews,
  testimonials, patient images, the CQC or the ASA.
- **"Specialist".** "If you are a dentist and are on a GDC specialist list, you can use the title
  ‘Specialist’ or describe yourself as a ‘specialist in….’"; "If you are not on a specialist
  list, you must not describe yourself as ‘specialising in…’ a particular form of treatment, but
  may use the terms ‘special interest in..’, ‘experienced in..’ or ‘practice limited to...'". The
  specialist-lists page: "Dentists do not have to join a specialist list to practise any
  particular specialty, but they can only use the title 'specialist' if they are on that list." The
  GDC's _Advertising checklist_: avoid "specialist" for "dentists who work in an area where there
  is no specialist list (e.g. implantology)". Public access, in the GDC's words: "Patients can
  check whether you are registered and whether you are on a specialist list"; "Members of the
  public can find a specialist by searching the GDC register."
- **Prices** (_Standards for the Dental Team_, effective 30 September 2013): 2.4.2 "You must give
  clear information on prices in your practice literature and on your websites - patients should
  not have to ask for this information"; 2.4.1 allows, for items that vary in cost, "a ‘from –- to’
  price range".
- **Patient images** — in the _Standards_, not the advertising guidance: 4.2.7 (for photographs,
  "obtain and record the patients' consent to their use") and 4.2.9 ("You must not make any
  recordings or images without the patient's permission"). The _Focus on Standards_ FAQ on
  before-and-after images: "Yes, you would need the patient’s consent both to the taking of the
  photographs and to their use in promoting your practice." The social-media guidance (effective
  27 June 2016) requires "explicit consent".
- **Reviews and incentives: no GDC source found** in the advertising guidance, the _Standards_,
  the social-media guidance, the checklist or _Focus on Standards_ (other GDC guidance titles not
  opened). The review rules come from the DMCC Act 2024 (§ A6). No GDC text read uses
  "representative" for results either; the nearest is "avoid statements or claims intended or
  likely to create an unjustified expectation about the results you can achieve".
- **Stale risk.** The GDC consulted from 2 June to 31 August 2026 on replacing the _Standards_
  with a "Framework for Professionalism", and is "recommending the outcome to Council later this
  year". Cite _Standards_ paragraph numbers "as at" the check date.

**The CQC, in detail** (added 28 September 2026). "Any person who carries on a regulated
activity without being registered under this Chapter in respect of the carrying on of that
activity is guilty of an offence" (HSCA 2008 s.10(1)). Regulation 20A's website duty "applies
where, and to the extent that, a service provider has received a rating". Primary care dental
services are excluded from rating (SI 2018/54 reg. 2, unless the provider is an independent
hospital or an NHS trust), and the CQC says "we don't give ratings to primary dental providers"
(page updated 22 December 2025). Registered providers "may use 'Regulated by' graphics".
**Our reading, labelled as ours:** a primary care dental practice has no rating, so Reg 20A
gives its website nothing to display; showing registration is a trust signal, not a Reg 20A
duty. No other CQC regulation was checked for website duties, so never write "no CQC website
duty at all".

**The CMA market study, in detail** (added 2026-07-29 — `/industries/dental-practices` was
already publishing all three of these figures, in body copy, in an H2 and in `FAQPage`
JSON-LD, and **none of them traced to any line in this bundle**):

- Opened **5 March 2026**; statutory reporting deadline **4 March 2027** — a 12-month
  ceiling, so "reports **by** March 2027", never "runs **until** March 2027"
- Sector size **£8.4bn** — in the CMA's words, "the UK private dentistry market valued at £8.4
  billion in 2023 to 2024", sourced by the CMA to LaingBuisson (attribution added 28 September
  2026; keep it)
- The price movements the CMA cited on opening: an initial consultation rose **more than 23%**
  between 2022 and 2024 (to ~£80), a routine check-up for an existing patient **more than 14%**
  (to ~£55). These are **CMA-cited figures drawn from independent sources**, not CMA findings —
  the study has not reported, and copy must not present them as its conclusions. _(28 September
  2026: the press release gives the source as MyTribeInsurance, and its words are "rose by over
  23% to £80" and "by over 14% to £55".)_
- **Update of 17 July 2026** (added 28 September 2026): "This document does not set out any
  findings or conclusions from our work to date." The CMA expects to publish its "emerging
  thinking" "Between October and November" 2026, and its final report "by the statutory deadline
  of 4 March 2027". Its summary of the call for views reports respondents' views, not findings
  ("We have not sought to quantify the views and experiences described by respondents"),
  including "the importance of visibility of pricing information within the dental practice, or
  on the practice website". Re-check the case page before any dental copy publishes after
  1 October 2026
- Scope: whether patients can make informed choices, and whether providers engage in
  misleading or unfair conduct. **Pricing transparency is explicitly in scope**

⚠️ The study is **sector-level**. It does not follow that any individual practice's website
"is evidence in" it — that overclaim shipped in the dental page's H1 and was corrected in the
same pass. What is defensible: the website is where a patient encounters the practice's
pricing, and pricing transparency is what is being examined.

**Sources.** Retrieved 2026-07-29. GOV.UK, _CMA launches review of private dentistry_;
CMS Law-Now and Pinsent Masons (Out-Law) briefings, March 2026; CMA calls for views
(consumers / dental professionals).

**Site-design implications:** transparent price lists (GDC _Standards_ 2.4.2; the CMA study),
the GDC website list above, GDC numbers and CQC registration visible, careful claim language, a
consent workflow for imagery, and a reviews mechanism that survives DMCC scrutiny. _(Corrected
28 September 2026: this also named GDC "no incentives", which has no GDC source; see above.)_

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
editorial workflow. _(Extended 28 September 2026: the ten original items missed cookies,
price-list gating, health claims, the review flow and the GDC website list.)_

- [ ] No prescription-only medicine brand name appears anywhere public-facing — in particular
      never on the homepage, in navigation, hover text, logos or testimonials, in `<title>` or
      meta, in `FAQPage` JSON-LD or in any `data/*.ts` string. The one route on a client site is
      the gated price list or treatment-options page in § B1-P. (Our own editorial posts: the
      carve-out and the A1/A2 title exception in doc 08 § 6.)
- [ ] No implied POM reference (check adjectives, not just nouns): "wrinkle-relaxing",
      "#brotox", "#beautox". "Anti-wrinkle injections" stays out of client sales copy —
      WebAsk's standard, stricter than the FAQ's conditional position (CAP News; § B1)
- [ ] Price-list gating in CAP's words (§ B1-P): consultation first; no POM price on the
      homepage and no direct "Prices" link that shows it; the further page "ideally two clicks
      from the homepage"; no product claims and no price promotion
- [ ] Claims are substantiated and attributable; no unverifiable superlatives
- [ ] No medicinal claim for an unlicensed injected or infused product; food and supplement
      claims only if authorised on the GB NHC Register, or with the same meaning to the
      consumer (§ B2a)
- [ ] Before/after imagery has documented patient consent, and signed and dated proof that the
      photos are genuine (AdviceOnline, 5 June 2025); none of a POM treatment
- [ ] Reviews/testimonials are real, named, consented, and non-incentivised (or the
      incentive is disclosed)
- [ ] Review flow asks every customer, with no screening step and no incentive (CMA208 §§ 3.6,
      4.5; Google's policy)
- [ ] Review widget shows the published rating and reviews unfiltered (CMA208 § 4.3)
- [ ] "Specialist" used only where the GDC specialist list supports it — there is no list for
      implantology
- [ ] Dental: the GDC website list (§ B2) — each named professional's qualification, its
      country and GDC number; the practice's name and geographic address, email and telephone;
      the GDC's contact details or a link; the complaints procedure; the date last updated
- [ ] Registrations displayed accurately (GDC number, CQC registration). _("Licence status"
      removed 28 September 2026: no licensing scheme is in force.)_
- [ ] Pricing presented transparently (dental: GDC _Standards_ 2.4.2; the CMA study)
- [ ] Age eligibility stated where the treatment is age-restricted
- [ ] Cookies: nothing non-exempt before consent; refusing as easy as accepting; the
      statistical-purposes exception used only on its conditions (§ A4)
- [ ] Where a question is about an actual advert and is genuinely uncertain → **CAP Copy
      Advice** (standard 3–5 working days, free; faster turnarounds paid). It advises on
      "prospective non-broadcast ads" against the CAP Code and gives no legal advice; the Code
      excludes editorial content, and whether Copy Advice would review an editorial summary of
      the rules is not recorded

**Pre-publication review route (F4, founder, 28 September 2026).** Every rule sentence carries a
dated primary quote or link, plus a second-reader verify pass. CAP Copy Advice gets only the
questions that are about an actual advert. No copy may claim anything was "checked by CAP" or
"reviewed by a lawyer".

> Inherited rule, with extra force here: **no AI-generated copy without human review.** In
> this vertical a hallucinated claim isn't just an E-E-A-T penalty, it's a regulatory breach
> with the client's name on it.

---

## Compliance action register

| #   | Item                                                                                                                                               | Owner      | Blocks                 | Status                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------- | ---------------------------------------- |
| 1   | Remove fabricated team + testimonials                                                                                                              | Build      | Cutover                | 🔴 **Urgent — legal exposure**           |
| 2   | ~~Resolve D1 (UK presence)~~                                                                                                                       | Founder    | —                      | ✅ **Resolved 2026-07-27: fully remote** |
| 2a  | **Remove the Oxford address from `/contact`** — currently published, no longer accurate                                                            | Build      | Cutover                | 🔴 **Open — follows from D1**            |
| 3   | Confirm VAT treatment (D2)                                                                                                                         | Accountant | `/pricing` final       | 🔴 Open                                  |
| 4   | Art. 27 UK representative + ICO fee (D3)                                                                                                           | Legal      | `/legal/privacy` final | 🔴 Open                                  |
| 5   | Publish entity disclosure (name, org.nr, address, email)                                                                                           | Build      | Cutover                | 🟡 Ready once #3/#4 wording settles      |
| 6   | Audit consent banner for equal prominence                                                                                                          | Build      | Cutover                | 🟡 Ready                                 |
| 7   | Segment outreach lists by legal form                                                                                                               | Ops        | Phase 4 CRM            | 🟢 Documented                            |
| 8   | Adopt the copy-review checklist in the editorial workflow                                                                                          | Content    | Phase 3 clinic pages   | 🟢 Documented                            |
| 9   | Set a regulatory watch (the proposed licensing scheme, CMA dentistry study; stale-by rows in `research/local-business-services/10-sources.md` § 2) | Founder    | Content freshness      | 🟢 Documented                            |

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

### Primary sources read on 28 September 2026

Each was read from the raw page on 28 September 2026; the date in brackets is the page's own.
The verbatim extracts are in the planning notes at `.playwright-mcp/compliance/verified-*.md`
(git-ignored). The entries added on 29 September 2026 were read on 28 September 2026 from the raw
page copies in `.playwright-mcp/compliance/a1/raw/`, mapped in
`.playwright-mcp/compliance/a1/research.md`, except the Enforcement Notice, Blue Guide Appendix 6
and Copy Advice lines, which come from the 28 September 2026 extracts in
`.playwright-mcp/compliance/verified-asa.md` §§ 4, 10 and 11 (all git-ignored).

- **ASA/CAP** — FAQ, _Botox - Frequently Asked Questions (FAQs)_ (23 January 2020), https://www.asa.org.uk/news/botox-frequently-asked-questions-faqs.html · CAP Bitesize, _Botox and non-surgical cosmetic interventions_ (undated), https://www.asa.org.uk/advice-and-resources/cap-bitesize/rules-for-advertising-botox.html · AdviceOnline, _Beauty and Cosmetics: Botulinum toxin (Botox) products_ (29 October 2025; "given by the CAP Executive", does not bind the ASA), https://www.asa.org.uk/advice-online/beauty-and-cosmetics-botulinum-toxin-products.html · AdviceOnline, _Healthcare: Prescription-only Medicines (websites)_ (17 February 2022), https://www.asa.org.uk/advice-online/health-prescription-only-medicines-websites.html · Enforcement Notice, _Advertising Botox and other botulinum toxin injections on social media_ (9 January 2020), https://www.asa.org.uk/resource/enforcement-notice-botox-social-media.html · Enforcement Notice, _Botox and other botulinum toxin products_ (1 March 2019), https://www.asa.org.uk/resource/enforcement-notice-botox.html · _A fine line - the dos and don’ts of advertising Botox_ (17 October 2019), https://www.asa.org.uk/news/a-fine-line-the-dos-and-don-ts-of-advertising-botox.html · AdviceOnline, _Before and after photos_ (5 June 2025), https://www.asa.org.uk/advice-online/before-and-after-photos.html · CAP Code section 12, https://www.asa.org.uk/type/non_broadcast/code_section/12.html, section 3, https://www.asa.org.uk/type/non_broadcast/code_section/03.html, and Scope, https://www.asa.org.uk/type/non_broadcast/code_folder/scope-of-the-code.html · Copy Advice (undated), https://www.asa.org.uk/advice-and-resources/copy-advice.html · CAP News, _Enforcement Update – Ads for Botox on social media_ (9 January 2020), https://www.asa.org.uk/news/enforcement-update-ads-for-botox-on-social-media.html · CAP News, _We're using new technology to enforce Botox ad ban_ (9 January 2020), https://www.asa.org.uk/news/we-re-using-new-technology-to-enforce-botox-ad-ban.html · ASA and CAP News, _Protecting people from harmful ads for weight-loss medicines: new research and Enforcement Report_ (2 April 2026), https://www.asa.org.uk/news/protecting-people-from-harmful-ads-for-weight-loss-medicines-new-research-and-enforcement-report.html · _Enforcement Report: Weight-loss prescription-only medicines_ (2 April 2026), https://www.asa.org.uk/resource/enforcement-report-weight-loss-prescription-only-medicines.html, and its PDF (April 2026), https://www.asa.org.uk/static/882edc0a-0f95-44bf-be56959750d1a606/CAP-Enforcement-Report-Weight-loss-POMs.pdf
- **ASA rulings** — Skinboost (22 February 2012), https://www.asa.org.uk/rulings/Skinboost-A11-175201.html · Dr Bunny Aesthetics (24 April 2024), https://www.asa.org.uk/rulings/dr-bunny-aesthetics-a23-1218983-dr-bunny-aesthetics.html · Valterous Ltd (18 December 2024), https://www.asa.org.uk/rulings/valterous-ltd-g24-1253503-valterous-ltd.html · LIFT Aesthetics (17 May 2023), https://www.asa.org.uk/rulings/lift-aesthetics-a22-1158433-lift-aesthetics.html · Glow Up LLC t/a Maxxing (2 September 2026), https://www.asa.org.uk/rulings/glow-up-llc.html
- **Medicines law and the MHRA** — Human Medicines Regulations 2012 reg. 284, https://www.legislation.gov.uk/uksi/2012/1916/regulation/284, and reg. 7, https://www.legislation.gov.uk/uksi/2012/1916/regulation/7 · MHRA Blue Guide Appendix 6 (November 2020), https://assets.publishing.service.gov.uk/media/6012d8c9d3bf7f05c2040b4e/Appendix_6.pdf · MHRA Annual Report and Accounts 2024 to 2025, https://assets.publishing.service.gov.uk/media/687fae8177a3acd9f4d0e24e/MHRA_Annual_Report_2024_25.pdf · MHRA advertising investigations (2024), https://www.gov.uk/government/collections/advertising-investigations-by-mhra
- **Licensing (England)** — Health and Care Act 2022 s.180, https://www.legislation.gov.uk/ukpga/2022/31/section/180, and Sch. 19, https://www.legislation.gov.uk/ukpga/2022/31/schedule/19 · DHSC consultation (2 September 2023) and response (7 August 2025), https://www.gov.uk/government/consultations/licensing-of-non-surgical-cosmetic-procedures · DHSC press release (6 August 2025), https://www.gov.uk/government/news/crackdown-on-unsafe-cosmetic-procedures-to-protect-the-public · written answers HL12386 (8 December 2025), 103132 and 103133 (12 January 2026), 109351 (5 February 2026), 111514 (13 February 2026), 10828 (23 June 2026), via https://questions-statements-api.parliament.uk/api/writtenquestions/questions/ · the minister's letter to the Women and Equalities Committee (3 June 2026) and the Committee's report HC 307 (11 September 2026), via https://committees-api.parliament.uk/
- **Under-18s** — the 2021 Act (2021 c. 19) s.1, https://www.legislation.gov.uk/ukpga/2021/19/section/1, and s.2, https://www.legislation.gov.uk/ukpga/2021/19/section/2 · S.I. 2021/1004, https://www.legislation.gov.uk/uksi/2021/1004/made
- **Scotland** — asp 13, https://www.legislation.gov.uk/asp/2026/13 · SSI 2026/206, https://www.legislation.gov.uk/ssi/2026/206/made · SSI 2026/87, https://www.legislation.gov.uk/ssi/2026/87/made
- **GDC** — _Guidance on advertising_, https://www.gdc-uk.org/standards-guidance/standards-and-guidance/gdc-guidance-for-dental-professionals/guidance-on-advertising · _Advertising checklist_, https://standards.gdc-uk.org/pdf/Advertising%20Checklist.pdf · specialist lists, https://www.gdc-uk.org/registration/your-registration/specialist-lists · _Standards for the Dental Team_ Principle 2, https://standards.gdc-uk.org/pages/principle2/principle2 · _Focus on Standards_ Principle 4 FAQ, https://standards.gdc-uk.org/pages/principle4/faq · _Guidance on using social media_, https://www.gdc-uk.org/docs/default-source/guidance-documents/guidance-on-using-social-media.pdf · consultation news (2 June 2026), https://www.gdc-uk.org/news-blogs/news/detail/2026/06/02/gdc-consults-on-replacing-the-'silver-book'-with-new-professionalism-framework
- **CQC** — HSCA 2008 s.10, https://www.legislation.gov.uk/ukpga/2008/14/section/10 · Regulation 20A, https://www.legislation.gov.uk/uksi/2014/2936/regulation/20A · SI 2018/54 reg. 2, https://www.legislation.gov.uk/uksi/2018/54/regulation/2 · _What should you expect from your dental practice?_ (22 December 2025), https://www.cqc.org.uk/care-services/what-expect-good-care-service/what-should-you-expect-your-dental-practice · _How providers must display ratings_ (26 November 2025), https://www.cqc.org.uk/cqc-ratings-and-promotional-graphics/how-providers-must-display-ratings
- **CMA dental study** — case page (last updated 17 July 2026), https://www.gov.uk/cma-cases/private-dental-services-market-study · press release (5 March 2026), https://www.gov.uk/government/news/cma-launches-review-of-private-dentistry
- **DMCC Act 2024** — Sch. 20 para 13, https://www.legislation.gov.uk/ukpga/2024/13/schedule/20/paragraph/13 · s.225, https://www.legislation.gov.uk/ukpga/2024/13/section/225 · s.251, https://www.legislation.gov.uk/ukpga/2024/13/section/251
- **PECR and the ICO** — PECR reg. 6, https://www.legislation.gov.uk/uksi/2003/2426/regulation/6, Sch. A1, https://www.legislation.gov.uk/uksi/2003/2426/schedule/A1, and Sch. 1, https://www.legislation.gov.uk/uksi/2003/2426/schedule/1 · DUAA 2025 s.115, https://www.legislation.gov.uk/ukpga/2025/18/section/115 · DPA 2018 s.157, https://www.legislation.gov.uk/ukpga/2018/12/section/157 · ICO storage and access guidance (last updated 29 April 2026), https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/ · ICO online tracking strategy update (April 2026), https://ico.org.uk/about-the-ico/our-information/our-strategies-and-plans/online-tracking-strategy/online-tracking-strategy-update-april-2026/ · ICO blog (18 May 2026), https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/05/our-advice-to-government-on-potential-changes-to-online-advertising-rules/ · ICO DUAA summary (PECR), https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-duaa-summary-of-the-changes/privacy-and-electronic-communications/

**Not verified on 28 September 2026** (so nothing above rests on them): the House of Commons
Library briefing CBP-10331 (HTTP 403); the RCS England open letter of 6 August 2026; the
Committee's original report HC 869; the Welsh and Northern Irish positions; the MHRA page of 15
July 2026; the ASA news pages on AI monitoring seen in search results (§ B1's monitoring line
now rests on the Glow Up LLC ruling and the weight-loss pages instead); CMA208 and the £150,000
individual fine (not re-read); SI 2026/82 regs 8–11; GMC and NMC guidance on patient images.
