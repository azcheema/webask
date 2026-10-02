# 03 — UK Compliance

> The biggest single delta from Naxdor. Two audiences: **(a)** what WebAsk itself must do
> to trade legally in the UK, and **(b)** what WebAsk must know to build compliant sites
> for regulated clients — which is also the commercial wedge (doc 02 § 2).
>
> **Research date: 2026-07-27.** Sources cited inline. **Re-checked against primary sources
> on 28 September 2026** for parts of § A4 and § A6, and for § B1, § B2 and § B4; those passages
> carry dated corrections, and § Sources lists every page read that day. **Re-checked again on
> 29 September 2026** for § A6, § B1, § B2 and § B4, from the raw page copies read for the
> aesthetics post (A3) and the dental post (D1) on 28-29 September 2026; those passages say
> "added 29 September 2026" or "corrected 29 September 2026", and § Sources lists the pages.
> **Extended again on 29 September 2026** for § A4, § A5, § A6, § A7, § B1, § B2a and § B4, from
> the raw page copies read for the clinic checklist post (C1) on 28-29 September 2026; those
> passages say "added 29 September 2026, from pages read 28-29 September 2026" (or "corrected",
> "relabelled", "extended" or "clarified"), and § Sources lists the pages.
>
> ⚠️ **This is researched guidance, not legal advice.** Three items (D2, D3, and the
> vertical copy rules) should be confirmed with an accountant / solicitor before launch.

---

> **1 October 2026 — the regulator's legal name.** On 30 September 2026 S.I. 2026/1015 brought into
> force s.118 ("abolition of the office of Information Commissioner") and s.119 ("transfer of
> functions to the Information Commission") of the Data (Use and Access) Act 2025
> (https://www.legislation.gov.uk/uksi/2026/1015/made). The ICO says: "As the Information
> Commission's Office, we will continue to be known as the ICO" (ico.org.uk news, 15 September
> 2026). "ICO" in this file and on the site stays correct; where the full legal name is printed,
> use "the Information Commission".

## Part A — What WebAsk itself must comply with

### A1. Trading disclosures — with no UK company

**Locked context:** WebAsk is a **trading name of Naxdor, a Swedish enskild firma**. There
is no UK limited company.

| Regime                                                                                          | Applies?                | Requirement                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Company, LLP and Business (Names and Trading Disclosures) Regulations 2015 (SI 2015/17), Part 6 | ❌ No UK company exists | Would require registered name, registered number, part of the UK registered in, registered office (regs 24–25)                                                                                                                                                                                                                                                                  |
| Electronic Commerce (EC Directive) Regulations 2002                                             | ✅ Yes                  | Service provider's **name**, **geographic address** and **email** must be easily, directly and permanently accessible (reg 6(1)(a)–(c)); also, where they apply, trade register and number, supervisory authority, professional body and rules, and the **VAT number** (reg 6(1)(d)–(g)); prices clear and unambiguous, saying whether tax and delivery are included (reg 6(2)) |
| Provision of Services Regulations 2009                                                          | ✅ Yes                  | Same core details, plus trade-register details where the provider is registered in one                                                                                                                                                                                                                                                                                          |

> **3 October 2026 — corrected against legislation.gov.uk** (read 2 October 2026 for the post
> `content/blog/uk-website-legal-requirements.mdx`). The first row named the Companies (Trading
> Disclosures) Regulations 2008, which SI 2015/17 Sch. 6 para 1(d) revoked; the company and LLP website
> rules are SI 2015/17 Part 6 (reg 24(2): "Every company shall disclose its registered name on its
> websites"; reg 25; reg 20 "can be read with the naked eye"; reg 28 the offence), applied to LLPs by
> SI 2009/1804 reg 14. Sole traders and partnerships trading under a business name have their own
> disclosure duties in the Companies Act 2006 ss.1200–1204, which do not mention websites. The E-Commerce
> row now carries reg 6(1)(d)–(g) and 6(2). Whether WebAsk's own footer needs a VAT number under
> reg 6(1)(g) is with the legal reviewer (`docs/legal/review-brief.md`).

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
plus GA4 analytics on UK visitors, is squarely within scope. _(This line said "GA4/Clarity"
until Microsoft Clarity was dropped before launch — founder, 1 October 2026.)_

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

> **3 October 2026 — the controller-complaints duty** (read 2 October 2026 for `content/blog/uk-website-legal-requirements.mdx`; raw copies in the git-ignored `.playwright-mcp/web/d1/raw/`). UK GDPR Art. 13(2)(ca), inserted 19 June
> 2026, adds "the right to make a complaint to the controller under section 164A" to the privacy
> information. DPA 2018 s.164A: "A controller must facilitate the making of complaints under this
> section by taking steps such as providing a complaint form which can be completed electronically and
> by other means", and must acknowledge a complaint "within the period of 30 days". The ICO: "How you do
> this is up to you"; "You must tell people they can complain to you, as well as to us". Its Right to be
> informed page is under review, its checklist does not yet carry the controller-complaint line, and its
> update is due "Spring 2027".

---

### A4. PECR — cookies and consent

Consent under PECR must meet the **UK GDPR Article 4(11)** standard: freely given,
specific, informed and unambiguous.

**Banner requirements**

- ✅ **Refusing is as easy as accepting.** The ICO's checklist line (_How do we manage consent
  in practice?_; relabelled 29 September 2026, from pages read 28-29 September 2026: this called
  it "the ICO's rule sentence"; the rule sentence is the one quoted from _What are the PECR
  rules?_ below):
  "Our consent mechanism
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
  controller". WebAsk's own site keeps GA4 behind consent regardless — our choice; it has not
  been assessed against the exception. _(Microsoft Clarity, also held behind consent, was
  dropped before launch — founder, 1 October 2026.)_

**The ICO's own words for the lines above** (added 29 September 2026, from pages read 28-29
September 2026). The guidance index,
https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/,
reads "Latest updates - last updated 29 April 2026"; its chapter pages carry no date of their own,
so cite that date for them.

- _What are the PECR rules?_,
  https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-pecr-rules/,
  under "For storage and access technologies in PECR, this means that you must:": "ensure consent
  involves a clear and positive action from a subscriber or user. For example, continuing to use
  your website does not constitute valid consent, nor does the use of a pre-ticked box or
  equivalent;" (the source for the two ❌ lines on pre-ticked boxes and continuing to browse); "not
  use any storage or access technologies for non-exempt purposes before the subscriber or user has
  given consent;"; and "enable subscribers or users to refuse the use of storage and access
  technologies for non-exempt purposes as easily as they can accept; and". The test is "as easily";
  "equally prominent" stays the illustration.
- _How do we manage consent in practice?_,
  https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/,
  is the page of the checklist line and the "equally prominent" illustration above.
- _What are the exceptions?_,
  https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/:
  - "When assessing whether any of the exceptions apply, you must consider their specific
    requirements. This is because exceptions are narrow in scope and won’t apply in all cases."
  - **Embedded content** (a clinic's treatment video, for example). The passage is a row in the
    table of "non-exhaustive examples of activities that are likely to meet the exception, and
    those that won’t" under "Likely to meet the strictly necessary exception?", marked "✔" "(in
    some circumstances)." Under "Hosting embedded content:": "If your service includes content
    hosted on these platforms (eg if you have posted a video on your organisation’s YouTube
    channel), you should:", then "configure the embedded content not to set storage and access
    technologies the instant someone visits the page with it on, including for analytics purposes;
    and" and "tell the user underneath the embed that if they choose to press ‘play’, storage and
    access technologies will be used (you should use a ‘privacy mode’ where available). This will
    not require consent, as the user has been informed and wants to access the content." Then the
    alternatives: "When considering how to manage your use of embedded videos, you could:", "add a
    consent request into your existing mechanism; or", "use a ‘just-in-time’ approach to seek
    consent on particular pages where the videos are included."; and "Alternatively, you could
    consider using external links instead of embedded videos." The word is "should", not "must".
    Never write that the ICO requires consent for an embedded video, nor that the first step alone
    is enough. _(Corrected 29 September 2026, from pages read 28-29 September 2026: the quotation
    stopped at "; and", dropping the table it sits in, the second step and the alternatives.)_
  - **The statistical-purposes exception in the ICO's words.** "This exception applies when:", "you
    are an ISS provider; and", "the sole purpose of the storage and access technology is collecting
    information for statistical purposes about the use of your service."; "You can share this
    information with a third party, provided they are only using it to improve your website or
    service."; "As part of relying on this exception, you must provide the user or subscriber with
    clear and comprehensive information about the purpose, and a ‘simple and free’ means to
    object." On objection: "This means that if someone does object, you must stop storing or
    accessing information on their device." The clinic checklist post (C1) quotes these lines
    rather than the statute, with Sch. A1 linked as the source.
- **Sch. A1 para 5(1)(b) has two limbs.** The one quoted above is (i). The other, (ii), covers the
  website: "to collect information for statistical purposes about how a website by means of which
  the service is provided is used with a view to making improvements to the website,"
  (https://www.legislation.gov.uk/uksi/2003/2426/schedule/A1). Either limb applies only if
  conditions (a) and (c) to (e) are also met.

**Enforcement.** _(Corrected 28 September 2026.)_ The ICO, April 2026: "992 (99%) of the top
1,000 websites met our compliance checks at the time of their most recent test" — a statement
about its own checks, not a rule. It measures cookie banners on the UK's top 1,000 websites, not
any sector: the same update (_Online tracking strategy update – April 2026_, "Latest updates - 29
April 2026",
https://ico.org.uk/about-the-ico/our-information/our-strategies-and-plans/online-tracking-strategy/online-tracking-strategy-update-april-2026/)
says "We committed to reviewing cookie banners on the top 1,000 websites in the UK.", and the
ICO's news release of 29 April 2026
(https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/04/final-storage-and-access-technologies-guidance-published/)
quotes William Malcolm: "99% of the UK's top 1,000 websites now meet compliance standards for
cookie banners owing to focused ICO work with industry." Never use the figure for clinic, dental
or beauty sites. _(Added 29 September 2026, from pages read 28-29 September 2026.)_ The line that
stood here ("The ICO wrote to **53 of the UK's
top 100 websites** requiring cookie-banner compliance") carries no date or URL and was not
re-verified on 28 September 2026: **unsourced**. PECR fines: since **5 February 2026** (Data
(Use and Access) Act 2025 s.115(8) and Sch. 13, substituting PECR Sch. 1; SI 2026/82;
legislation.gov.uk's annotation reads "Sch. 1 substituted (5.2.2026) by Data (Use and Access) Act
2025 (c. 18), s. 142(1), Sch. 13; S.I. 2026/82, reg. 2(z14) (with regs. 8-11)") the higher
maximum is, "in the case of an undertaking, £17,500,000 or 4% of the undertaking's total annual
worldwide turnover in the preceding financial year, whichever is higher", and "in any other
case, £17,500,000" (Data Protection Act 2018 s.157(5)). _(Clarified 29 September 2026, from pages
read 28-29 September 2026: the citation said "Data (Use and Access) Act 2025 s.115 and Sch. 13".
The annotation on PECR Sch. 1, https://www.legislation.gov.uk/uksi/2003/2426/schedule/1 ("up to
date with all changes known to be in force on or before 28 September 2026"), names "s. 142(1),
Sch. 13". Of the eight DUAA annotations read, the four that name an amending section give
s.142(1) after it: "ss. 116(4), 142(1)" (PECR Sch. 1 para 18(b)(ii)), "ss. 100(5), 142(1)" (DPA
2018 s.157(4), https://www.legislation.gov.uk/ukpga/2018/12/section/157), "ss. 112(2), 142(1)"
(PECR reg 6) and "ss. 112(3), 142(1)(2)(h)" (PECR reg 6A,
https://www.legislation.gov.uk/uksi/2003/2426/regulation/6A, "inserted (19.6.2025 for specified
purposes, 5.2.2026 in so far as not already in force)"); the four that name a Schedule give
s.142(1) and the Schedule, with no other section named: "s. 142(1), Sch. 13" (PECR Sch. 1), "s.
142(1), Sch. 12" (PECR Sch. A1, https://www.legislation.gov.uk/uksi/2003/2426/schedule/A1), "s.
142(1), Sch. 6 para. 16" (DPA 2018 s.157(2)(a)) and "s. 142(1), Sch. 10 para. 18" (DPA 2018
s.157(4A)). (Corrected 29 September 2026, from pages read 28-29 September 2026: this said s.142(1)
"sits after the operative provision on every DUAA annotation read", which the four
Schedule-based annotations contradict.) And GOV.UK, *Data Use and Access Act 2025: plans for commencement*
("Last updated: 5 February 2026"),
https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement, says "Some of the
provisions in the Act will come into force automatically by virtue of section 142 of the Act."
That points to s.142(1) being the commencement provision, not the substituting one; s.142's own
text was not read. The substituting words are s.115(8), which the 28 September 2026 notes
(`verified-dental-data.md` § 7.6, git-ignored, no raw copy) quote from
https://www.legislation.gov.uk/ukpga/2025/18/section/115: "For Schedule 1 substitute the Schedule
set out in Schedule 13 to this Act.", with "S. 115 in force at 5.2.2026 in so far as not already in
force by S.I. 2026/82, reg. 2(y) (with regs. 8-11)". Cite s.115(8) and Sch. 13, or the
annotation's words; never cite s.142 as the provision that substitutes Sch. 1.)_ **What applies that
maximum to the cookie rule** (added 29 September 2026, from pages read 28-29 September 2026): PECR
Sch. 1 para 18, "Section 157 has effect as if—", then para 18(b), "(b)in subsection (2)—", with
"(i)for “Part 3 of this Act” there were substituted “the PEC Regulations”;" and "(ii)in paragraph
(a), for the words from “section 35” to “or 78” there were substituted “regulation 5, 6, 7, 8, 14,
19, 20, 21, 21A, 21B, 22, 23 [F2, 24 or 32B(4) or (5)]”;" ("[F2 …]" is legislation.gov.uk's
amendment marker; its note reads "Words in Sch. 1 para. 18(b)(ii) substituted"). With those
substitutions, s.157(2)(a) sets "the higher maximum amount" for a failure to comply with
regulation 6 (storage and access) and regulation 22 (email marketing), among others. The ICO's
summary (DUAA summary of the changes, _Privacy and electronic communications_, "Latest updates -
19 June 2025",
https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-duaa-summary-of-the-changes/privacy-and-electronic-communications/),
under "Commissioner’s enforcement powers": "It brings the enforcement powers under PECR into
line with UK GDPR, so that enforcement mechanisms and penalties are the same in most cases."
Keep "in most cases". _(Extended 29 September 2026, from pages read 28-29 September 2026: this
quoted only the last clause, undated.)_ On **23 June 2026** the ICO wrote (_One year on: marking
the 12-month commencement of the Data (Use and Access) Act_,
https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/06/one-year-on-marking-the-12-month-commencement-of-the-data-use-and-access-act/):
"The DUAA also gives us the power to issue fines of up to £17.5 million or 4% of global turnover
under the Privacy and Electronic Communications Regulations (PECR). We are currently developing
separate guidance to cover these higher fines." Its figure drops "whichever is higher" and "in the
case of an undertaking", so take the figure from s.157(5), never from this line. The C1 research
found no such guidance by 29 September 2026 (a search, not an exhaustive check). _(Added 29
September 2026, from pages read 28-29 September 2026.)_ On online advertising
the ICO says "nothing has changed at this stage" (18 May 2026).

**Inherited implementation.** Naxdor already ships a consent gate with GA4 and Clarity held
behind it, and Vercel Analytics is cookieless so it runs without consent. **WebAsk dropped
the Clarity loader before launch (founder, 1 October 2026)**, so on our site GA4 is the only
tool behind the gate. That architecture satisfies this shape — but **verify the reject button has genuinely equal prominence** during
the fork, since the US-oriented original may not have been built to the ICO's standard.

**Action items**

- [x] Audit the inherited consent component against equal-prominence — **failed and fixed
      2026-09-25**: "Accept analytics" rendered as the filled primary button and "Decline" as
      an outline; both are now the same outline variant, size and weight, labelled "Reject
      analytics" / "Accept analytics" (`components/analytics/consent-banner.tsx`)
- [ ] Confirm no non-exempt cookie fires pre-consent (network tab, not code review) —
      the loader mounts only on `consent === "granted"` by code, but the browser check needs
      a real `NEXT_PUBLIC_GA_ID` value set; do it on the first preview deployment that has
      it (`NEXT_PUBLIC_CLARITY_ID` was removed with Clarity, 1 October 2026)
- [x] Cookie policy page enumerates each cookie, purpose, duration and provider — drafted
      2026-09-25 (`data/copy/legal.ts`): `_ga` and `_ga_<container-id>` at 2 years from
      Google's cookie-usage page; the two local-storage entries (theme, consent) named.
      Clarity's seven cookies were listed by name and purpose from Microsoft's list, which
      prints no lifetimes, until **Clarity was dropped before launch (founder, 1 October 2026)** and its section removed
- [x] Consent is re-obtainable — a persistent "cookie settings" link in the footer
      (`CookieSettingsButton`, inherited; verified 2026-09-25)

> **3 October 2026 — more of Schedule A1** (read 2 October 2026 for `content/blog/uk-website-legal-requirements.mdx`; raw copies in the git-ignored `.playwright-mcp/web/d1/raw/`). Para 4: no consent for storage "strictly necessary
> for the provision of an information society service requested by the subscriber or user" (its examples
> include "maintaining a record of selections made on a website"). Para 6, which the ICO calls the
> "appearance" exception, adapts how the site looks or works to the user's preferences on the same
> conditions as para 5: "clear and comprehensive information" and "a simple means of objecting, free of
> charge". The ICO: toggles for those two exceptions may be "on by default, with the ability for users to
> change them to off at any time"; external font libraries "may collect information about your users,
> such as their IP address. Where this occurs, you must explain this", and "You could consider
> self-hosting fonts"; banners "might seem to be the easiest option" but "you should consider their
> implementation carefully"; after a refusal, six months is its "general guideline" before asking again.

---

### A5. PECR — email and outreach

This governs how WebAsk can prospect. It differs meaningfully from US CAN-SPAM.

| Recipient                                                                                                       | Prior consent needed?                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Corporate subscriber** — limited company, LLP, Scottish partnership, corporation sole, some government bodies | ❌ **No.** PECR's email consent rules don't apply to corporate subscribers (each message must still name you and give a valid opt-out address, reg 23) |
| **Sole trader**                                                                                                 | ✅ **Yes** (or the soft opt-in). Treated as an individual                                                                                              |
| **Partnership in England, Wales or Northern Ireland that is not an LLP**                                        | ✅ **Yes.** Treated as an individual                                                                                                                   |
| **Anyone using a personal address** (e.g. a delegate who gives their own rather than their work address)        | ✅ **Yes.** An individual subscriber                                                                                                                   |
| **Legal form unknown**                                                                                          | ✅ **Treat as individual** — the ICO: "you should treat the details as belonging to an individual subscriber"                                          |
| **Any freemail address** (`gmail.com` etc.)                                                                     | ✅ **WebAsk's rule of thumb**, not the ICO's: treated as individual whoever uses it                                                                    |

**Soft opt-in** applies only where: details were obtained during a sale or negotiations for
a sale · you're marketing your own similar products/services · a clear opt-out was given at
collection **and in every message**. Bought lists and scraped emails never qualify.

**The ICO's wording** (added 29 September 2026, from pages read 28-29 September 2026; the line
above came from secondary sources). _Electronic mail marketing_ (Guide to PECR),
https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/,
which carries the banner "Due to changes made by the Data (Use and Access) Act, this guidance is
under review and may be subject to change.": "You must not send marketing emails or texts to
individuals without specific consent. There is a limited exception for your own previous
customers, often called the ‘soft opt-in’." Its rule text: "The rules on electronic mail marketing
are in regulation 22. In short, you must not send electronic mail marketing to individuals,
unless:", "they have specifically consented to electronic mail from you; or", "they are an
existing customer who bought (or negotiated to buy) a similar product or service from you in the
past, and you gave them a simple way to opt out both when you first collected their details and in
every message you have sent." Quote it with "under review". § B4's _Forms on clinic sites_ points
here for the marketing box on a clinic's enquiry form.

**Practical rule for WebAsk:** sole proprietorships are the most common legal form of UK business —
3.2 million, 57% of 5.7 million private-sector businesses at the start of 2025 (DBT, Business
population estimates 2025, published 2 October 2025, official statistics in development). A
"we can email any business" assumption is wrong here. Segment the list by legal form before
any outreach, and treat freemail addresses as individuals no matter what the domain suggests.

> **2 October 2026 — corrected and extended from primary sources read that day** (for the post
> `content/blog/pecr-b2b-outreach-rules-uk.mdx`; raw copies in the git-ignored
> `.playwright-mcp/crm/c1/raw/`). The table above said "public body" and "unincorporated partnership"
> and gave the freemail row as a rule; the ICO's business-to-business guidance (marked "under review
> and may be subject to change") lists corporate subscribers as companies, LLPs, Scottish partnerships,
> corporation soles, "some government bodies" and any other "legal person distinct from its members"
> (PECR reg 2(1) makes "a partnership in Scotland" corporate), and individual subscribers as sole
> traders, "other unincorporated bodies of individuals" and "certain types of partnerships (eg
> non-limited liability partnerships or other types of English, Welsh and Northern Irish
> partnerships)". A named work address at a corporate body "would constitute a corporate subscriber";
> a delegate who "chose to use their personal email address instead of their work one" is an
> individual subscriber. The same wording was corrected on the CRM page, the email-and-SMS FAQ, the
> GoHighLevel guide and the Cheshire hub. Other facts the post relies on, each verbatim from the ICO
> or legislation.gov.uk:
>
> - "You can send unsolicited electronic mail marketing to corporate subscribers without consent or a
>   soft opt-in." The soft opt-in "does not apply to prospective customers or new contacts (eg from
>   bought-in lists)"; "There is no such thing as a third-party marketing list that is compliant with
>   the soft opt-in." Asking for consent is itself direct marketing ("contacting people to ask them
>   for consent to direct marketing"). "There is no equivalent email or text preference service."
> - Companies' opt-outs: "PECR does not say that you must comply with a corporate subscriber’s opt-out
>   in the context of electronic mail", but "you should comply with a corporate subscriber’s opt-out
>   request".
> - Calls: you can make live calls to a business number "that is not registered on the TPS or the
>   CTPS, but only if they haven’t objected to your calls in the past"; B2B callers "will therefore
>   need to screen against both"; reg 21(3) gives 28 days' grace on a new registration; automated
>   calls need consent that "must specifically cover automated calls" (reg 19, companies included).
> - UK GDPR for named contacts: legitimate interests is "in many cases ... likely" the basis where
>   PECR needs no consent, and applies to direct marketing "only where" PECR does not require consent;
>   the right to object must be flagged "at the latest" at the first communication (Art. 21(4)).
> - From 5 February 2026 (Data (Use and Access) Act 2025; SI 2026/82): attempted calls count as
>   calls; charities have their own soft opt-in (reg 22(3A)); for breaches on or after that date the
>   maximum PECR penalty for an undertaking is "£17,500,000 or 4% of the undertaking's total annual
>   worldwide turnover in the preceding financial year, whichever is higher" (DPA 2018 s.157(5), via
>   PECR Schedule 1 para 18).

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

| Penalty                                                          | Amount                                                                                                                                                                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Business (a monetary penalty in a CMA final infringement notice) | "a fixed amount not exceeding £300,000 or, if higher, 10% of the total value of the turnover (if any) of the respondent" (s.182(6)); "turnover" includes "turnover both in and outside the United Kingdom" (s.204(1)(a)) |
| Individual                                                       | ~~Up to **£150,000**~~ **Unsupported: do not use** (see the correction below)                                                                                                                                            |

_(Corrected 29 September 2026, from the Act read 29 September 2026: s.182,
https://www.legislation.gov.uk/ukpga/2024/13/section/182; s.204,
https://www.legislation.gov.uk/ukpga/2024/13/section/204; s.190,
https://www.legislation.gov.uk/ukpga/2024/13/section/190; legislation.gov.uk: "up to date with
all changes known to be in force on or before 28 September 2026" for s.182 and s.204. The business
row said "Up to **10% of global annual turnover** or **£300,000**, whichever is higher". s.182(6)
reads, in full: "The amount of a monetary penalty imposed under subsection (4)(b) must be a fixed
amount not exceeding £300,000 or, if higher, 10% of the total value of the turnover (if any) of
the respondent." "Global" is consistent with s.204(1)(a). "Annual" is in neither section:
s.204(2) lets the Secretary of State "make provision for determining the turnover of a person",
including "the date or dates by reference to which a person’s turnover or daily turnover is to be
determined" (s.204(3)(b)), and no such regulations were read. "Whichever is higher" stays a fair
paraphrase of the Act's "if higher"; keep one of the two in every use. The individual row said
"Up to **£150,000**" and was marked unconfirmed on 28 September 2026. No source read supports
it. The only £150,000 found in the Act is s.190(3)(a), the ceiling for a penalty under "a final
breach of undertakings enforcement notice" (s.190(1)): "in the case of a fixed amount, £150,000
or, if higher, 5% of the total value of the turnover (if any) of the respondent;". That is not a
fine on individuals. Queued, outside this doc-03 edit: addendum R16 and § B5 (each now carries a
pointer here), and the live copy that prints "10% of global annual turnover". On 29 September
2026 `grep -rn "global annual turnover" content data` found it in
`content/industries/beauty-wellness-clinics.mdx`, `content/locations/leeds.mdx`,
`content/locations/manchester.mdx`, `content/services/seo.mdx`,
`content/blog/local-seo-checklist-2026.mdx`, `content/blog/what-is-gohighlevel-2026-buyers-guide.mdx`
and two `data/industries.ts` FAQ answers. (Added 29 September 2026:) that grep reads one line at a
time, so it misses the phrase where it wraps across two lines, as it does in
`content/industries/dental-practices.mdx` and `docs/00-overview.md`; search across line breaks
instead, for example `grep -rlzP "global\s+annual\s+turnover" content data docs`. Corrected the
same day to "10% of global turnover": `content/industries/dental-practices.mdx`,
`content/industries/beauty-wellness-clinics.mdx`, `content/locations/leeds.mdx` and the two
`data/industries.ts` FAQ answers. Still queued: `content/locations/manchester.mdx`,
`content/services/seo.mdx` (body and provenance comment), the two blog posts above,
`docs/00-overview.md` and the drafts in `research/local-business-services/09-content-drafts/`.
Other copy passes were editing those files the same day, so re-run the search before fixing.)_

The CMA can determine a breach and impose fines **without recourse to the courts**. Its
opening enforcement posture was supportive, but in **March 2026 it opened investigations
into five named businesses** over review handling. _(Unsourced as at 28 September 2026: no
source is recorded for this sentence and it was not re-verified. Do not reuse it until it is.)_

**Asking for reviews: the lines the clinic posts quote** (added 29 September 2026, from pages read
29 September 2026).

- **CMA208 § 3.6** (_Fake reviews_, 4 April 2025,
  https://assets.publishing.service.gov.uk/media/67eeb64fe9c76fa33048c790/CMA208_-_Fake_reviews_guidance.pdf,
  re-read from a fresh download): "Doing so without predetermining the contents or sentiment
  expressed in the review, for example by merely emailing customers generally to ask if they wish
  to provide a review, is not prohibited under the banned practice." Keep the condition ("without
  predetermining …"); never "asking is allowed" on its own. Addendum R13 quotes the same words.
- **CMA208 §§ 4.3 and 4.5** (same PDF; added 29 September 2026, from pages read 28-29 September
  2026), under "Suppressing and cherry-picking reviews". § 4.3: "A trader may infringe the law if
  they suppress genuine negative or positive reviews, selectively promote positive or negative
  reviews or omit information around how reviews have been written." (its footnote 17 left out).
  § 4.5: "Cherry picking positive reviews for publication over negative ones might be done either
  through suppressing negative reviews that have been submitted or by encouraging just those who
  are satisfied to leave reviews." Keep "may infringe" and "might be done". These are the words
  behind the § B4 review-flow and review-widget items.
- **Sch. 20 para 13(5)(i)**, https://www.legislation.gov.uk/ukpga/2024/13/schedule/20/paragraph/13:
  "publishing in a “misleading way” includes (for example)—", then "failing to publish, or removing
  from publication, negative consumer reviews whilst publishing positive ones (or vice versa);" and
  "giving greater prominence to positive consumer reviews over negative ones (or vice versa);".
- **CAP Code rules 3.44–3.46** (section 3, https://www.asa.org.uk/type/non_broadcast/code_section/03.html),
  under the note "The below rules relate to marketing materials under the remit of the CAP Code (see
  the Scope of the Code). Marketers are advised to seek legal advice on other obligations in relation
  to the prohibition on fake consumer reviews.": 3.44 "Marketing communications must not contain
  fake consumer reviews."; 3.45 "Marketing communications must make clear where consumer reviews
  have been incentivised.*"; 3.46 "Marketers must not publish consumer reviews, or consumer review
  information, in a misleading way in marketing communications." The asterisk: "Where a rule does
  reflect a prohibited practice, either in part or in its entirety, it is marked with an asterisk."
- **Google's Maps user-contributed content policy**,
  https://support.google.com/contributionpolicy/answer/7400114?hl=en-GB (a platform policy, not law).
  Under "Rating manipulation": "We do not allow merchants to:", then "Offer incentives – such as
  payment, discounts, free of cost goods and/or services – in exchange for posting any review or
  revision or removal of a negative review." and "Discourage or prohibit negative reviews, or
  selectively solicit positive reviews from customers". The on-premises line keeps "should not":
  "When soliciting reviews, merchants should not require or pressure users to leave ratings or write
  reviews while on the premises, nor should they request that specific content be included." Then
  "We do allow merchants to:" and "Solicit or encourage the posting of content that does represent a
  genuine experience, without offering incentives to do so or attempting to influence the rating or
  the contents of the review." The en copy prints "free goods and/or services -" where en-GB prints
  "free of cost goods and/or services –". Write "Google's policy says it does not allow merchants
  to …" for the incentive and selective-solicitation lines and "should not" for the on-premises
  line, each dated "read 29 September 2026", and never present the policy as law.
  **Wording note (added 29 September 2026):** the wording recorded for the merchant list changed
  from "should not" to "We do not allow merchants to:" between 25 and 29 September 2026.
  `research/local-business-services/10-sources.md` S38 carries the 24-25 September readings
  ("Merchants should not:"), the second taken with a fetch tool on the URL without `hl=en-GB`; on
  29 September 2026 the raw en-GB and en copies both read "We do not allow merchants to:". The
  addendum's gap-register row 3, § B5 and R22 were corrected to that wording on 29 September 2026
  and keep the old reading only in their correction notes; S38 now carries a dated re-read note.
  Whether Google edited the page in that window or the 25 September fetch-tool reading was a
  paraphrase is not established. Quote the 29 September text with its date.

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

> **3 October 2026 — reviews and testimonials, more detail** (read 2 October 2026 for `content/blog/uk-website-legal-requirements.mdx`; raw copies in the git-ignored `.playwright-mcp/web/d1/raw/`). DMCC Act s.237(8)(b) keeps the
> Schedule 20 para 13 review practices out of the criminal offence; enforcement is the CMA's direct penalty
> (s.182; the figure stays "10% of global turnover or £300,000, whichever is higher"). CMA208 calls the
> duty to take reasonable and proportionate steps "non-delegable", and the CMA's short guide says "You
> should have a published policy that clearly prohibits fake reviews". The CAP Code's testimonial rules
> (3.47, 3.50) reach business-to-business marketing too: it covers marketing "on their own websites", and
> its consumer is anyone likely to see it, "whether in the course of business or not".

---

### A7. Accessibility

> **3 October 2026 — Northern Ireland and the EHRC code** (read 2 October 2026 for `content/blog/uk-website-legal-requirements.mdx`; raw copies in the git-ignored `.playwright-mcp/web/d1/raw/`). The Equality Act's service duties and
> the EHRC code cover Great Britain only. In Northern Ireland the Disability Discrimination Act 1995
> applies (s.19 "now extends to N.I. only"; "it is irrelevant whether a service is provided on payment or
> without payment"; s.21's test is a practice that makes it "impossible or unreasonably difficult for
> disabled persons to make use of a service"); the Equality Commission for Northern Ireland says the
> protections "apply whether you buy products or services online or in person". The EHRC's statutory
> code came into force on 5 August 2026 (SI 2026/788): "The obligation also applies to the provision of
> services on a website"; its website example "will be indirect disability discrimination unless the
> provider can justify it".

WCAG 2.2 AA is inherited from Naxdor (Lighthouse a11y = 100 in CI, axe-core, manual keyboard
pass). ~~In the UK~~ In Great Britain the commercial framing is the **Equality Act 2010** — service
providers must make reasonable adjustments. ~~An inaccessible website is a recognised risk
area.~~ _(Corrected 29 September 2026, from pages read 28-29 September 2026: the Act's service
provisions extend to England, Wales and Scotland, not Northern Ireland (below), and "a recognised
risk area" had no source.)_

No change to the technical standard. Change the _pitch_: accessibility is sold to UK clients
as risk reduction plus reach, not as a nice-to-have.

**The law and the 2026 code, in their words** (added 29 September 2026, from pages read 28-29
September 2026).

- **The duty.** Equality Act 2010 s.29(7), https://www.legislation.gov.uk/ukpga/2010/15/section/29
  (legislation.gov.uk: "up to date with all changes known to be in force on or before 28 September
  2026"): "A duty to make reasonable adjustments applies to—", (a) "a service-provider (and see also
  section 55(7));". s.20(6), https://www.legislation.gov.uk/ukpga/2010/15/section/20 ("… on or
  before 25 September 2026"): "Where the first or third requirement relates to the provision of
  information, the steps which it is reasonable for A to have to take include steps for ensuring
  that in the circumstances concerned the information is provided in an accessible format." Keep
  its condition: the second requirement (physical features) is not about information.
- **Extent.** s.29 carries "E+W+S" in its heading. s.217,
  https://www.legislation.gov.uk/ukpga/2010/15/section/217: "This Act forms part of the law of
  England and Wales."; "This Act, apart from section 190 (improvements to let dwelling houses) and
  Part 15 (family property), forms part of the law of Scotland."; and s.217(3) lists only sections
  82, 105(3) and (4), and 199 as forming "part of the law of Northern Ireland". So write "the Act's
  service duties cover England, Wales and Scotland", not "the whole Act". Northern Ireland's own
  equality law was not researched.
- **The code.** EHRC, _Statutory Code of Practice: Services, public functions and associations_
  (ISBN 978-1-5286-6395-3),
  https://www.equalityhumanrights.com/sites/default/files/2026/EHRC_Code_of_practice_for_services_public_functions_and_associations.pdf
  (read from the PDF; the EHRC's HTML pages returned HTTP 403). In force **5 August 2026**: the
  Equality Act 2010 (Code of Practice on Services, Public Functions and Associations)
  (Commencement) Order 2026 (SI 2026/788), https://www.legislation.gov.uk/uksi/2026/788/made: "The
  2026 Code of Practice comes into force on 5th August 2026 immediately after the coming into force
  of the Equality Act 2010 (Code of Practice on Services, Public Functions and Associations)
  (Revocation) Order 2026", and "This Order extends to England and Wales and Scotland." The code
  itself says of remote services that "the Act will apply to conduct in Great Britain (section 29,
  paragraph 10)" (para 11.74).
  - Para 3.6: "Part 3 of the Act imposes obligations on those concerned with the provision of
    services to the public, or to a section of the public, whether in the private, public or
    voluntary sectors. … The obligation also applies to the provision of services on a website
    (section 29)."
  - Para 7.22: "In relation to all three areas (services, public functions and associations) the
    duty is anticipatory (schedule 2 and schedule 15). This means that service providers, those
    exercising public functions and associations must proactively consider the barriers that
    disabled people could face and take action to address those barriers."
  - Para 1.6: "The Code does not impose legal obligations. Nor is it an authoritative statement of
    the law: only the courts and tribunals can provide such authority. However, the Code can be used
    in evidence in legal proceedings brought under the Act. Courts and tribunals must consider any
    part of the Code that appears relevant to any questions arising in such proceedings." Quote the
    code's "must" (para 7.22) only beside this: the code explains the Act's duty and does not
    impose one.
- **WCAG is in neither the code nor the sections read.** A search of the code's full text and of
  ss.20, 29 and 217 finds no mention of WCAG. WCAG 2.2 AA is WebAsk's build standard, a technical
  standard: never call it the legal test, or what the Equality Act or the code requires.

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
| Before/after imagery used to promote the POM ("very likely to be seen as an implied ad", CAP's advice, 5 June 2025)                                                                                                                                                                                                             | Educational content about consultations, qualifications, safety standards, duty of care, patient experience           |

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
> navigation", is replaced by § B1-P: no CAP or ASA page says "at least two clicks" or "primary
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
> _(Wording relabelled 29 September 2026; F2's substance is unchanged; confirmed by the founder,
> 29 September 2026.)_

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

**WebAsk's reading and design choices — labelled as ours, never as CAP or ASA wording:** the POM stays out
of the primary navigation and out of every meta title and description (six more readings, added 29
September 2026, follow this paragraph). The nearest primary line on
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
September 2026 and confirmed by the founder, 29 September 2026: F3 worded the deliverable "a
structure built to the route the ASA describes for gated price lists" and the rule "the ASA's
words", but the route's three sources in this section are CAP's: the CAP News FAQ, CAP Bitesize,
and AdviceOnline, which "is given by the CAP Executive" and "does not bind … the Advertising
Standards Authority". F3's substance is unchanged. The queued follow-ups were applied on 29
September 2026 (line numbers as queued): **(a) F3's wording:** doc 08 lines 12, 30, 44-45, 237,
268, 271; doc 02 line 488; `docs/strategy/content-guidelines.md` line 91. **(b) The FAQ as CAP
News:** doc 08 lines 54, 57-58, 61, 345, 352, 353, 358, 392, 403; doc 02 lines 131, 141, 145,
483 and 487. A grep of CLAUDE.md and docs/ in the same pass relabelled these: CLAUDE.md (three attributions); in doc
08, "ASA FAQ" and "No ASA page" in § 0.2, the "implied promotion" sentences in §§ 0.3 and 6, the § 4
indirect-references bullet (now "CAP Bitesize counts … as indirect references to the POM"), "not
ASA wording" and "ASA/CAP guidance" in § 4, "ASA, 5 June 2025" in § 7 and two Sources labels; in
doc 02, § 2's "relaxing" sentence and § 5's 2026-07-28 box; doc 06's Phase 2 note; and, in this
doc, "no ASA page" in the 2026-07-29 box and "never as ASA wording" above. In content/ and data/
the same pass relabelled the aesthetic-clinics page body (two lines) and the two aesthetic
price-list answers in `data/industries.ts`. It was not complete: a second grep (fixer round 1, 29
September 2026, over CLAUDE.md, content/, data/ and docs/, searching for "ASA/CAP" only) found four live strings still crediting
the FAQ or the price-list route to "ASA/CAP" and relabelled them: the home-page FAQ answer in
`data/copy/home.ts`, the What keeps you safe lines in `content/services/ui-ux-design.mdx` and
`content/services/web-development.mdx`, and the price-list paragraph in
`content/locations/cheshire.mdx`; plus three Sources labels in this doc (the 2026-07-27 POM-ban
entry and two primary-source groups). That grep could not see a credit to the ASA alone: fixer
round 2 (29 September 2026) relabelled the A1 post's H2 over the FAQ's conditions, "What the ASA
says about 'anti-wrinkle injections'", to "What CAP and the ASA say …", and its meta description
to match. Left as they are: "ASA/CAP" naming the ban or the two
bodies together (the § B1 heading, doc 02 § 2's heading, docs/00, doc 05, the content guidelines,
a `data/team.ts` comment), dated history notes inside MDX comments, the research bundle, § B2a's
Sources line of 29 July 2026 and doc 08's resource-library link.)_

**WebAsk's readings from the price-list post (A2) — labelled as ours, never as CAP's, the ASA's or
the MHRA's** (added 29 September 2026, from pages read 28-29 September 2026). They extend the
navigation and meta readings above. No page read states any of them; each names its nearest primary
lines, quoted in full in § B1-P above or under "Further lines the price-list post (A2) quotes" below.
Copy must label each one "our reading" and state it conditionally ("we would keep"), because there
is no build to describe. As at 29 September 2026 the A2 draft does not do this everywhere: its Ads
and Booking passages state the reading plainly ("Our reading: do not point a paid ad …"; "Our
reading: the booking button books the consultation …"), and route-table rows 5 and 9 carry the "Our
reading" label without a conditional. Queued for the post.

- **Menus.** No menu item names the POM (the navigation reading above), and no "Prices" item goes
  straight to a price list that names it: we read such a link as the kind the FAQ calls "unlikely
  to be acceptable" ("include a direct link to “Prices” which mentions Botox"). No page read
  mentions menus.
- **Where the list sits.** The price list sits no nearer the homepage than the treatment-options
  page. No page read sets a click count for the price list: Bitesize's "ideally two clicks from the
  homepage" is said of the treatment-options page, and its price-list sentence says "only after the
  user has clicked through the consultation pages". The MHRA says a factual price list "may be
  provided on pages other than the home page". Never "at least two clicks".
- **Footers.** A site-wide footer is small print on every page, so the POM, and any direct link to
  the price list, stay out of it. Bitesize's "No mention in hover text, small print or testimonials"
  is not limited to the homepage. CAP's advice that small print "should not refer to POMs or
  directly link consumers to a page where they are referenced" is about "the bottom of a homepage",
  and reaches the footer because the same footer shows on the homepage. The MHRA's line on the same
  point is also about the home page: "Hover text and any small print at the bottom of the home page
  should also not refer to specific POMs" (Blue Guide Appendix 6, November 2020; added 29 September
  2026, from pages read 28-29 September 2026).
- **Paid ads and sponsored results.** No paid ad or sponsored search result points at the price list
  or at a page that names the POM. Nearest lines: CAP's advice, "No reference to a POM should be
  made in a sponsored ad" (29 October 2025); CAP's weight-control advice, which keeps "a proactively
  linked landing page" out of its "small exemption" (29 May 2026); and Juniper, where the ASA
  "understood that landing pages from paid-for ads on social media were akin to a homepage, for the
  purposes of the MHRA’s Blue Guide" (8 April 2026). The last two are about weight-loss medicines.
  Also nearest (added 29 September 2026, from pages read 28-29 September 2026): the MHRA's, under
  "Sponsored links": "The text may promote the service provided but should not mention specific
  prescription only medicines." (Blue Guide Appendix 6, November 2020); and the Enforcement Notice on
  POMs used for weight management (23 September 2025; "published jointly with" the MHRA and the
  GPhC; weight-loss only), under its heading "Do not direct consumers from an ad seemingly for
  non-POM products or services directly to another ad promoting a POM": "For example, paid-for ads
  on social media or sponsored searches should not contain links to a landing page that promotes a
  named POM." Both are quoted under "Further lines" below.
- **Booking buttons.** The booking button books the consultation, and no row of the price list books
  the POM. No guidance page read on botulinum toxin deals with booking buttons. Nearest lines: the
  MHRA's icons lines (Appendix 6) and Lloyds Pharmacy (4 March 2015, other medicines), where a page
  "presented the POMs as a choice for the consumer to select prior to GP consultation". Also nearest
  (added 29 September 2026, from pages read 28-29 September 2026; all three quoted under "Further
  lines" below): two ASA rulings on this medicine that touch booking — Dr Bunny Aesthetics (24 April
  2024), a Fresha booking-platform listing that also named the toxin, where the ASA "understood that
  consumers could book and pay for the treatment from the ad directly, without receiving a
  consultation prior to undergoing the treatment", and Glowery Ltd t/a Glowday (12 April 2023), "an
  aesthetic treatment comparison site", not a clinic — and CAP News, "A basic guide to
  prescription-only medicines" (7 July 2016; about POMs in general): "POMs should not be presented
  as a choice for the consumer to select prior to a consultation, rather than the potential outcome
  of a consultation." A2 leaves both rulings out: A1 covers Dr Bunny, and Glowery was a comparison
  site.
- **Gates.** A gate carries consultation content: a page with nothing about the consultation on it
  may not be what Bitesize means by "the consultation pages". From Juniper (8 April 2026), where the
  ASA called a page that "simply asked consumers to select" "a filtering page", and the page it led
  to "a landing page akin to a homepage". That ruling was about a paid social media ad and
  weight-loss medicines, and does not count clicks.

**Fillers are outside the POM rule** (added 28 September 2026). The FAQ: "This rule does not
apply to other injectable cosmetic treatments that are not ‘prescription-only medicines’, such
as dermal fillers (Restylane etc.)." The Enforcement Notice: "Non-POMs, such as dermal fillers,
may be advertised provided there is no implication that a POM is also available."

**Fillers: CAP's advice, the Notice and Bitesize** (added 29 September 2026, from pages read 28-29
September 2026).

- **CAP's advice, _Beauty and Cosmetics: Treatments using fillers_ (6 August 2025)**,
  https://www.asa.org.uk/advice-online/beauty-and-cosmetics-treatments-using-fillers.html. Its note:
  "Note: This advice is given by the CAP Executive about non-broadcast advertising. It does not
  constitute legal advice. It does not bind CAP, CAP advisory panels or the Advertising Standards
  Authority." On status it hedges where the FAQ does not: "Dermal fillers are unlikely to be
  prescription-only (POMs)." Quote each page's own word; never "fillers are never POMs". Claims:
  "Marketers may refer to fillers as being capable of temporarily reducing the appearance of fine
  lines and wrinkles but should not suggest either that treatment can cure or rejuvenate skin (rule
  12.7) or that lines and wrinkles will be permanently eliminated. Unqualified claims, such as
  “wrinkle reduction”, are unlikely to be acceptable." Naming: "If Botox is the only injectable they
  offer, marketers should not advertise “fillers” because that would be an indirect promotion of a
  prescription-only medicine." The sentence after it names three filler brands: do not copy them.
  **Do not quote the page's age sentence**, which says "there is no legal requirement to be over 18
  years of age to be given them": in England, administering a filler for a cosmetic purpose to
  someone under 18 has been an offence since 1 October 2021, with defences (the 2021 Act (2021
  c. 19) s.1(1)(b); "What IS in force" below). Use only that paragraph's social-responsibility
  point, or leave it out.
- **The Enforcement Notice** (9 January 2020, its landing-page date; social media; PDF
  re-downloaded 29 September 2026,
  https://www.asa.org.uk/static/a8fa05da-b3ee-4528-82095e7bba2a3e5c/Enforcement-Notice-Advertising-Botox-and-other-botulinum-toxin-injecti.pdf),
  under "What if I administer POMs and non-POMs?": "Be specific and use terms such as "dermal
  fillers" or "cosmetic fillers" to be expressly clear that you are only advertising your non-POM
  "filler"."
- **CAP Bitesize** (undated): "Do promote your business", then "You can promote:", "your clinic
  and other non-POM services, such as dermal fillers" and "your experience and qualifications."

**Before-and-after images** (added 28 September 2026). CAP and the ASA regard them "in the same
way as testimonials", and marketers "should therefore ensure that they meet the requirements
of rules 3.47-3.50 of the CAP Code" _(corrected 29 September 2026, from pages read 28-29 September
2026: this said "so rules 3.47–3.50 apply", firmer than CAP's "should")_; marketers "should hold
signed and dated proof that the photos are genuine and have not been manipulated" (CAP's advice, AdviceOnline,
_Before and after photos_, 5 June 2025; relabelled 29 September 2026, see below), and "The photos should not exaggerate the efficacy of the product and marketers
need to ensure that they have relevant evidence to substantiate the impression created by the
images." Rule 3.47: "Marketers must hold documentary evidence that a testimonial or
endorsement used in a marketing communication is genuine … and hold contact details for the
person who, or organisation that, gives it"; rule 3.50: not "without permission". For a POM,
the same page: "‘Before and after’ imagery of a prescription-only product, even in isolation
without any accompanying claims, is very likely to be seen as an implied ad for a
prescription-only product". Bitesize: "Don’t share before-and-after photos of Botox".
AdviceOnline on botulinum toxin products (29 October 2025): marketers "should, therefore, avoid
featuring any before and after images in their marketing communications". Patient consent for
images: see _Consent to use patient images_ below, which replaces (29 September 2026) the line
"for aesthetic practitioners, **GAP** — GMC and NMC guidance not yet read".

_(Relabelled 29 September 2026, from the page re-read 29 September 2026,
https://www.asa.org.uk/advice-online/before-and-after-photos.html: its status note, not captured on
28 September 2026, reads "Note: This advice is given by the CAP Executive about non-broadcast
advertising. It does not constitute legal advice. It does not bind CAP, CAP advisory panels or the
Advertising Standards Authority." So the 5 June 2025 page is CAP's advice, given by the CAP
Executive. Never "the ASA's guidance of 5 June 2025". Its sentence "CAP and the ASA regard the use
of ‘before and after’ photos in the same way as testimonials" can still be quoted as it stands.)_

**More on before-and-after images** (added 29 September 2026, from pages read 28-29 September 2026).

- **The FAQ (CAP News, 23 January 2020), "CAN I USE ‘BEFORE AND AFTER’ IMAGES?"**, all four
  paragraphs: "If you only offer prescription-only treatments or the image shows the ‘before and
  after’ of a client who has received Botox, then it’s unlikely, as it will be seen as an ad for the
  prescription-only treatment." / "If you offer both prescription-only treatments like Botox and
  also non-prescription only treatments like fillers, you are able to include images if they show
  someone who has received a non-prescription only treatment – however, make sure you’re explicit
  the photos relate to the non-prescription only treatment." / "It’s unlikely to be acceptable to
  show a ‘before and after’ image of a client who has received Botox and falsely claim that they
  received a non-prescription only treatment because this is likely to be seen as materially
  misleading." / "You should also make sure you have signed and dated proof that the photos are
  genuine, and representative of what can be achieved as detailed in our guidance."
- **The tension, and WebAsk's build standard.** CAP's advice on botulinum toxin products (29 October 2025),
  under "Don’t use before and after photographs": "The use of before and after photographs is
  likely to be interpreted by the ASA as an efficacy claim, which is not permitted. Marketers should,
  therefore, avoid featuring any before and after images in their marketing communications." It sits
  in advice about the medicine and does not say whether it reaches filler images; the FAQ allows
  labelled filler images for a clinic that offers both. Quote each from its own page and do not
  resolve the tension in CAP's voice.
  _(Added 1 October 2026, from the page read that day: CAP's general AdviceOnline page
  "Healthcare: Prescription-only medicine" (https://www.asa.org.uk/advice-online/healthcare-prescription-only-medicine.html),
  redated 30 September 2026, carries the same "avoid" line and then says: "If the marketer also
  promotes non-POM treatments alongside their POM counterparts, the use of before and after images
  may be acceptable if they are clearly attributed to the non-POM product." CAP's newest-dated page
  therefore takes the FAQ's side. The same page adds, in general terms: "Even if a digital ad does
  not include content which promotes a POM to the public, if that ad links directly to website
  content which does, it still might be considered to breach the Code." WebAsk's stricter gallery
  standard below is unaffected, because it is labelled as our choice; the founder is asked whether
  to keep it.)_ _(**Answered 1 October 2026: the founder replaced it** with the standard that
  follows, which supersedes the 29 September 2026 standard.)_
  **WebAsk's build standard — from 1 October 2026 (founder decision, superseding 29 September
  2026):** WebAsk's build standard follows CAP's general advice on prescription-only medicines
  (redated 30 September 2026, quoted above: before and after images "may be acceptable if they are
  clearly attributed to the non-POM product"). For a clinic that offers the POM: before-and-after
  photos **only of treatments that are not prescription-only**, each **clearly labelled with the
  treatment shown**, with **signed and dated proof that the photos are genuine**; **never of the
  POM**. Copy labels it as **our standard, following CAP's advice** — never as CAP's or the ASA's
  rule, and never as a guarantee of compliance. Keep CAP's "may be acceptable" as it stands; never
  write that CAP allows or permits such images. The FAQ (CAP News, 23 January 2020) and CAP's advice
  on botulinum toxin products (29 October 2025) are still quoted each from its own page. For a
  filler-only clinic (one that does not offer the POM), nothing changes: see the last sentences of
  the superseded standard below.
  **Superseded 1 October 2026 — kept for the record.**
  **WebAsk's build standard — our choice, not CAP's or the ASA's rule (founder decision, 29
  September 2026):** WebAsk follows the stricter advice. For a clinic that offers the POM, WebAsk's build
  standard leaves before-and-after galleries out of client sites. The two lines it weighs, each from
  its own page: CAP's advice of 29 October 2025, "Marketers should, therefore, avoid featuring any
  before and after images in their marketing communications"; and the FAQ (CAP News, 23 January
  2020), "you are able to include images if they show someone who has received a non-prescription
  only treatment – however, make sure you’re explicit the photos relate to the non-prescription only
  treatment". For a clinic that offers both, the standard is stricter than the FAQ, so copy labels
  it as ours and never writes that CAP bars filler images for such a clinic. For a filler-only clinic
  (one that does not offer the POM), before-and-after images follow CAP's rules (3.47-3.50) and the
  evidence lines in CAP's advice of 5 June 2025 quoted at the top of this item: "signed and dated
  proof that the photos are genuine and have not been manipulated" and "relevant evidence to
  substantiate the impression created by the images". _(Replaces, 29 September 2026: "A stricter
  WebAsk build standard for such a clinic's gallery would be a founder decision, labelled as ours;
  none has been taken.")_ _(Open, 29 September 2026: whether "galleries" also covers a single
  before-and-after image on such a clinic's pages is queued for the founder; until it is answered,
  a § B4 run flags one rather than passing it.)_ _(Overtaken 1 October 2026: the new standard is
  written per photo, not per gallery, so a § B4 run checks each image against it, single or not.)_
- **CAP/BCAP guidance** (_Guidance on the marketing of surgical and non-surgical cosmetic
  procedures_; status and URLs under "Further lines the aesthetics post (A3) quotes" below). Para
  31: "Disclaimers used by advertisers do not excuse misleading impressions of advertisements. Text
  which states that a photograph has been enhanced in post-production could be problematic if the
  photograph has been digitally re-touched in an area which relates specifically to the performance
  of the product, or an area in which the treatment has been carried out, irrespective of the
  inclusion of a disclaimer." Keep "could be problematic". Para 32: "Marketers must hold documentary
  evidence that the before and after photographs used in their marketing communications are genuine
  and hold signed and dated proof from the subject shown."
- **CAP Bitesize** (undated): "Adding a caption or disclaimer like “filter used” or “digitally
  enhanced” probably won’t be enough to fix a misleading impression." Keep "probably".
- **Glow Up LLC t/a Maxxing** (ASA ruling, 2 September 2026; an app, not a clinic): "As we had not
  seen any evidence to substantiate that the before-and-after footage and photos were genuine,
  including that they used the same models, or were representative of typical results, we concluded
  that the ads were misleading."

**Consent to use patient images** (added 29 September 2026, from pages read 29 September 2026;
replaces the GAP line above). Still a partial gap: what was found, and what was not.

- **Every advertiser (CAP).** Rule 6.1 (section 6,
  https://www.asa.org.uk/type/non_broadcast/code_section/06.html): "Marketers must not unfairly
  portray or refer to anyone in an adverse or offensive way unless that person has given the
  marketer written permission to allow it. Marketers are urged to obtain written permission
  before:", the first case being "referring to or portraying a member of the public or his or her
  identifiable possessions; the use of a crowd scene or a general public location may be acceptable
  without permission". Keep "urged". Rule 3.50 (no testimonial "without permission") reaches
  before-and-after photos through CAP's advice of 5 June 2025, which treats them "in the same way as
  testimonials". The CAP/BCAP guidance's para 32 asks for "signed and dated proof from the subject
  shown", framed as proof that the photos are genuine.
- **Doctors (GMC).** _Making and using visual and audio recordings of patients_,
  https://www.gmc-uk.org/professional-standards/the-professional-standards/making-and-using-visual-and-audio-recordings-of-patients:
  "This guidance came into effect 9 May 2011." Para 37, in the section "Recordings for use in
  widely accessible public media - television radio internet print": "You must get the patient’s
  consent, which should usually be in writing, to make a recording that will be used in widely
  accessible public media, whether or not you consider the patient will be identifiable from the
  recording, other than for the recordings listed in paragraph 10." Read through Wayback Machine
  snapshots (8 December 2024 to 5 March 2026; para 37 from the 12 January 2025 snapshot), because
  the live site blocked scripted reads. Five pages of the guidance were read and none mentions
  marketing or advertising, so applying para 37 to a clinic's website gallery is **our reading**.
- **Nurses, midwives and nursing associates (NMC).** Social media guidance ("Last updated:
  02/07/2025"),
  https://www.nmc.org.uk/standards/guidance/social-media-guidance/read-social-media-guidance-online/:
  registrants "may put their registration at risk, and students may jeopardise their ability to join
  our register, if they act in any way that is unprofessional or unlawful on social media including
  (but not limited to):", among them "posting pictures of patients and people receiving care without
  their consent". No NMC guidance specific to images in aesthetic marketing was found.
- **Dentists (GDC):** _Standards_ 4.2.7 and the _Focus on Standards_ FAQ (§ B2).
- **Not found or not researched.** The ICO's _What is special category data?_ ("Latest update - 9
  April 2024"), https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/,
  says nothing on before-and-after or aesthetic images: never write that such photos are special
  category data. Nothing read sets a consent duty for a practitioner on no professional register
  beyond the CAP rules. Not researched: the GPhC, CAP Code section 10, and any JCCP or Save Face
  standard.

**Rulings map** (added 28 September 2026). Each point is what the ruling itself, or the AdviceOnline
page that cites it, cites it for (CAP's page of 29 October 2025 or, for the last row, _Before and
after photos_, 5 June 2025) — nothing from a secondary source. _(Corrected 29 September 2026: this
said "the ASA's AdviceOnline page"; the 29 October 2025 page says its advice "is given by the CAP
Executive" and does not bind the ASA. The 5 June 2025 page's own status note was not captured on 28
September 2026, so it is cited as "AdviceOnline", not as the ASA's or CAP's; the two AdviceOnline
pages whose note was captured, 29 October 2025 and 17 February 2022, both say their advice "is given
by the CAP Executive".)_ _(Superseded 29 September 2026: the 5 June 2025 page's note was captured on
29 September 2026 and reads "Note: This advice is given by the CAP Executive about non-broadcast
advertising." Cite it as CAP's advice; see "Before-and-after images" above.)_

| Ruling                                              | Date                               | Cited for                                                                                                                                                                                                                 |
| --------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Skinboost                                           | 22 February 2012                   | "Line Relaxing" in a price list, "in conjunction with other references to Botox and its effects", read as a reference to Botox                                                                                            |
| Anesis Spa                                          | 11 July 2012                       | Claims that "went beyond balanced and factual references" (the AdviceOnline page prints "rule 12.2", a typo for 12.12 — do not copy it)                                                                                   |
| HB Health of Knightsbridge                          | 15 January 2014                    | Botox information that "could be navigated to directly, without consumers also viewing information about the consultation process" (CAP's AdviceOnline summary of 29 October 2025; the ruling itself prints "consumer’s") |
| Dermaskin Clinics                                   | 15 January 2014                    | The ruling's own navigated-to-directly sentence (after "Furthermore,"), printed with "consumers"; HB Health's version prints "consumer’s"                                                                                 |
| Lloyds Pharmacy Ltd                                 | 4 March 2015                       | A page that "presented the POMs as a choice for the consumer to select prior to GP consultation" (other medicines)                                                                                                        |
| Venus Beauty Lounge                                 | 5 August 2015                      | A POM "cannot be advertised to the public (rule 12.12)"                                                                                                                                                                   |
| Beauty Boutique Aesthetics; Faces by AKJ Aesthetics | 25 September 2019                  | "any reference to Botox on their social media pages, including hashtags, is likely to be seen as an implied ad for a POM"                                                                                                 |
| LIFT Aesthetics                                     | 17 May 2023                        | "doing anti-wrinkle" and "anti-wrinkle injections" as indirect references, in influencer ads that also named "Allergan" (rules 12.12 and 12.18 among those breached)                                                      |
| Menar Jimmy Georgiou                                | 21 June 2023                       | A POM "cannot be advertised to the public (rule 12.12)"                                                                                                                                                                   |
| Dr Bunny Aesthetics                                 | 24 April 2024                      | "anti-wrinkle" treatment as an indirect reference, on a Fresha listing that also named the toxin and could be booked without a consultation                                                                               |
| Valterous Ltd t/a Therapie Clinic                   | 18 December 2024                   | "COSMETIC INJECTIONS 3 AREAS FROM £179", set apart from fillers and applying only to anti-wrinkle treatments, as an indirect ad for a POM                                                                                 |
| Juniper Technologies UK Ltd t/a Juniper             | 8 April 2026                       | "a filtering page"; the ASA "understood that landing pages from paid-for ads on social media were akin to a homepage, for the purposes of the MHRA’s Blue Guide" (weight-loss POMs)                                       |
| The Dental Suite; EF Medispa                        | 13 December 2017; 20 February 2013 | Before-and-after photos: signed and dated proof they are genuine (AdviceOnline, 5 June 2025)                                                                                                                              |

Not re-read on 28 September 2026, so no point was recorded for them then: **Dermaskin Clinics (15
January 2014)** and **Glowery Ltd (12 April 2023)**, listed in doc 08 § 4 since 28 July 2026.
_(Added 29 September 2026, from pages read 28-29 September 2026: Dermaskin Clinics, Lloyds Pharmacy
and Juniper were read from the raw rulings on 29 September 2026 and have rows above; their lines
are under "Further lines the price-list post (A2) quotes" below. No point is recorded for
Glowery: it was read 29 September 2026 (a2/raw/glowery.txt) and is not used by A2; its booking
line is under "Further lines" below.)_
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

**Further lines the price-list post (A2) quotes** (added 29 September 2026, from pages read 28-29
September 2026). Each is verbatim from the raw page copies. The FAQ, Bitesize, CAP's advice of 29
October 2025, Skinboost, Dr Bunny Aesthetics and the Code's Scope were read 28 September 2026 (the
first three were re-fetched on 29 September 2026 with the same text); the rest were read 29
September 2026. The
rulings are the ASA's; the FAQ, Bitesize and AdviceOnline are CAP's; Appendix 6 is the MHRA's. Keep
the qualifiers, and keep each line with its own page.

- **HB Health of Knightsbridge (ASA ruling, 15 January 2014, "Upheld"),**
  https://www.asa.org.uk/rulings/HB-Health-of-Knightsbridge-A13-237714.html. The website was
  "promoting a health and beauty clinic"; a treatment list on its home page "included the text"
  naming the POM, "which linked to another page which explained how Botox was commonly used as a
  beauty treatment". Then: "We noted HB Health of Knightsbridge had made changes to the website to
  remove references to “botox”. However, we considered that the removal of the word itself from the
  home page alone did not itself resolve the issue because visitors who clicked on the replacement
  text hyperlink (wrinkle softening treatment) were then connected directly to content about
  Botox." Quote the replacement label only as the ASA's record, never as wording to use. On the
  medicines-law exclusion: "However, we further understood that certain types of content that could
  be characterised as reference material or announcements of factual and informative nature were
  not covered under the scope of HMR’s definition of advertising and, as a result, could not be
  considered advertisements for the purposes of rule 12.12. We therefore assessed the claims on the
  website to establish whether they were of that nature and would be considered as advertising for
  the purposes of rule 12.12." Of some claims it considered: "We considered that these types of
  claim were factual, as opposed to promotional, and that they sufficiently reflected the SPC. We
  therefore considered that they were likely to be acceptable because they did not constitute the
  advertising of a POM under 12.12." Keep the SPC condition wherever this is used. But: "Because
  some of the direct and implied references to Botox within the website constituted a promotion of
  a POM to the general public, we therefore concluded that the Code had been breached." The route
  line: "Because Botox references needed to be presented within the context of a consultation, we
  considered that website ads should not provide separate information on Botox which could be
  navigated to directly, without consumer’s also viewing information about the consultation
  process." (the ruling's apostrophe; do not copy it). It is a 2014 ruling under "CAP Code (Edition
  12)": say 2014.
- **Dermaskin Clinics (ASA ruling, 15 January 2014, "Upheld"),**
  https://www.asa.org.uk/rulings/Dermaskin-Clinics-A13-237709.html: "Furthermore, because Botox
  references needed to be presented within the context of a consultation, we considered that
  website ads should not provide separate information on Botox which could be navigated to
  directly, without consumers also viewing information about the consultation process." The post
  quotes this wording and credits both rulings. Do not quote Dermaskin's ad description: it lists
  five brand names.
- **Skinboost (ASA ruling, 22 February 2012), the price-list condition** — the first sentence of the
  paragraph whose "Line Relaxing" sentence is quoted above: "We considered that a factual list of
  prices was acceptable under the Code, provided the list did not include product claims or
  actively encourage viewers to choose a product based on the price." It says "actively encourage";
  CAP's advice of 29 October 2025 says "encourage". Quote each page's own word.
- **Lloyds Pharmacy Ltd (ASA ruling, 4 March 2015, "Upheld in part"),**
  https://www.asa.org.uk/rulings/lloyds-pharmacy-ltd-a14-271213.html. Issue 2, an online doctor
  service for other medicines, not botulinum toxin; name none of them: "We considered that the web
  page therefore presented the POMs as a choice for the consumer to select prior to GP consultation,
  as opposed to the potential outcome of that consultation and subsequently advertised POMs to the
  public."
- **Juniper Technologies UK Ltd t/a Juniper (ASA ruling, 8 April 2026; issue 2 "Upheld"),**
  https://www.asa.org.uk/rulings/juniper-technologies-uk-ltd-a25-1319597-juniper-technologies-uk-ltd.html.
  "A paid-for Facebook ad" for "an online pharmacy"; weight-loss medicines, not botulinum toxin;
  name none of them. "We understood that landing pages from paid-for ads on social media were akin
  to a homepage, for the purposes of the MHRA’s Blue Guide." And: "We considered that a page which
  simply asked consumers to select whether they were new to weight-loss medication, or already used
  it, was not a landing page. Instead, we considered it was a filtering page that directed consumers
  to a landing page akin to a homepage, based on their current usage of weight-loss medication." The
  ASA "understood that Chapter seven of the MHRA’s The Blue Guide stated" that a home page should
  name no POMs, and: "It said that links and navigation aids may be given for particular conditions
  and diseases, but not be specific to POMs." Chapter seven was not read: write that the ASA cited
  the same point, never the same line, as Appendix 6. Keep "understood" and "for the purposes of the
  MHRA’s Blue Guide".
- **CAP's advice on weight control** (AdviceOnline, _Weight control: Prescription-only medicines_,
  29 May 2026; "given by the CAP Executive" and does not bind the ASA),
  https://www.asa.org.uk/advice-online/weight-control-prescription-only-medicines.html: "There is a
  small exemption to the inner pages of a clinic or pharmacy’s own website (but not the homepage or
  a proactively linked landing page)". It is about weight-loss medicines; "small exemption" is
  CAP's phrase.
- **Enforcement Notice, _Advertising of prescription-only medicines used for weight management_ (23
  September 2025; read 29 September 2026; added 29 September 2026, from pages read 28-29 September
  2026),**
  https://www.asa.org.uk/resource/enforcement-notice-advertising-of-prescription-only-medicines-used-for-weight-management.html.
  The landing page: "This Enforcement Notice is published jointly with the Medicines & Healthcare
  products Regulatory Agency (MHRA) and the General Pharmaceutical Council (GPhC)." In the notice
  itself, under the heading "Do not direct consumers from an ad seemingly for non-POM products or
  services directly to another ad promoting a POM": "Ads that refer to general weight-loss products
  or services should not direct consumers to other ads promoting POMs. For example, paid-for ads on
  social media or sponsored searches should not contain links to a landing page that promotes a
  named POM." It is about weight-loss medicines: its Scope section says it "applies to ads for POMs
  used for weight management". The example sits under the "Do not direct consumers …" heading, in the
  notice’s Guidance section, not under Scope. The notice's "What happens
  next?" section says "In particular, remove the following from your ads:", and item 4 is "Links to
  landing pages that promote POMs", with no "seemingly for non-POM" qualifier. A2 does not quote it.
- **Dr Bunny Aesthetics (ASA ruling, 24 April 2024; read 28 September 2026; added 29 September 2026,
  from pages read 28-29 September 2026),**
  https://www.asa.org.uk/rulings/dr-bunny-aesthetics-a23-1218983-dr-bunny-aesthetics.html. "The ad
  was a listing for an aesthetics clinic “Dr Bunny Aesthetics” on the booking platform Fresha", and
  it named the toxin. On booking: "Furthermore, we understood that consumers could book and pay for
  the treatment from the ad directly, without receiving a consultation prior to undergoing the
  treatment." Keep "understood". A2 does not quote it; A1 covers it.
- **Glowery Ltd t/a Glowday (ASA ruling, 12 April 2023, "Upheld" on both issues; read 29 September
  2026; added 29 September 2026, from pages read 28-29 September 2026),**
  https://www.asa.org.uk/rulings/glowery-ltd-a22-1169867-glowery-ltd.html. "A website for Glowday,
  www.Glowday.com, an aesthetic treatment comparison site", not a clinic; the page that led to the
  booking pages was titled "Best Botox in London". On booking: "We acknowledged that no payment
  was taken at the time of a booking, and the full treatment process included the consultation that
  could result in a change to consumer’s booked treatment, but that was not sufficient to prevent an
  ad from promoting a POM." (the ruling's apostrophe; do not copy it). The booking pages' price lists
  were one element among several: never present it as a price-list ruling. A2 does not quote it.
- **CAP News, "A basic guide to prescription-only medicines" (7 July 2016; read 29 September 2026;
  added 29 September 2026, from pages read 28-29 September 2026),**
  https://www.asa.org.uk/news/a-basic-guide-to-prescription-only-medicines.html. About POMs in
  general, and old (some of its links point to the retired cap.org.uk site): "POMs should not be
  presented as a choice for the consumer to select prior to a consultation, rather than the
  potential outcome of a consultation." It links the Lloyds Pharmacy ruling. A2 does not quote it.
- **MHRA Blue Guide Appendix 6 (November 2020; the MHRA's, not CAP's or the ASA's)**,
  https://assets.publishing.service.gov.uk/media/6012d8c9d3bf7f05c2040b4e/Appendix_6.pdf,
  re-downloaded 29 September 2026 and still the Appendix 6 linked from
  https://www.gov.uk/government/publications/blue-guide-advertising-and-promoting-medicines ("Last
  updated 28 March 2025"). Under "Prices": "A factual list of prices for available treatments and/or
  pack sizes may be provided on pages other than the home page. The price list should not include
  product claims or actively encourage viewers to choose a product based on the price." And: "The
  information associated with price lists should make it clear that the viewer’s preferred option
  will not be prescribed if it is not suitable." Under "Icons": "It is permissible to use icons to
  encourage people to undertake a medical consultation. Icons or other features encouraging the
  purchase of POMs for example, “Buy Now”, “Buy XXX”, “Add to Basket”, etc. should not be used on
  websites offering POM treatments." The home-page, navigation and meta-tag lines quoted in WebAsk's
  reading paragraph above are in the same re-downloaded copy, the meta-tag line under the heading
  "Competitive Tools (Meta-tags/ Meta-descriptions/ Meta-Keywords)". Also in it (added 29 September
  2026, from pages read 28-29 September 2026): the sentence after the navigation line, "Hover text
  and any small print at the bottom of the home page should also not refer to specific POMs. This
  provision is designed to ensure that casual browsers are not presented with advertising for
  specific POMs." It is about the home page. Under "Sponsored links": "The text may promote the
  service provided but should not mention specific prescription only medicines."
- **The FAQ (CAP News, 23 January 2020)**,
  https://www.asa.org.uk/news/botox-frequently-asked-questions-faqs.html. Its answer on websites,
  directly above the price-list answer (the post reads that answer's "(as above)" as pointing back
  to it): "For example, you could include references to a “wrinkle treatment consultation” or
  similar on your homepage and, when clicked, the copy should emphasise that you offer a
  consultation with a variety of treatment options (assuming that’s true, of course)." Then: "It
  will always depend on the execution but provided you properly emphasise the consultation, make
  incidental, balanced and factual references to Botox as a possible treatment option and it is
  clear that the consultation may or may not lead to the provision of Botox, the ASA might consider
  it acceptable." (the FAQ's words about the ASA; the FAQ is still CAP News). Then: "You could also
  go one step further and require a click through to the treatment options, where you make only
  balanced and factual references to Botox, or a price list with an incidental reference to Botox
  alongside its price." And: "Take care not to give the Botox references any prominence and keep all
  information factual rather than promotional". The paragraph before the website price-list answer,
  which we read as covering price lists off the website (the FAQ then turns to "If it’s on your
  website"), says: "Provided it’s genuinely only a ‘price list’ with no other information or
  promotional content (which might make it an advertising leaflet instead) and it isn’t posted on
  your social media, mailed to prospective customers or placed in any paid-for advertising space,
  it’s potentially OK to refer to Botox (and it’s unlikely that the material would fall within the
  scope of the Code that the ASA enforces)." Never apply "potentially OK" to a website. Its close:
  "If you have a query that we haven’t covered, please do feel free to contact the Copy Advice team
  for further guidance."
- **CAP Bitesize (undated)**,
  https://www.asa.org.uk/advice-and-resources/cap-bitesize/rules-for-advertising-botox.html. It
  carries no publication date. Dates in its text include "On 25 May 2022 the rules for advertising
  non-surgical cosmetic interventions changed" and "In 2021, the ASA ruled", about the rules and
  rulings it describes. A disclaimer placed after video 4 and before the Botox video (5) says: "In
  April 2025, CAP and BCAP introduced amendments to the rules to reflect new UK consumer law", and
  "These videos reflect the ASA approach pre-UCPs and there are some areas where formal ASA
  precedent still needs to be established, but the content remains broadly relevant." Whether the
  disclaimer covers the Botox video is not stated; do not use it to date the Botox guidance. On
  websites: "You can mention Botox on your website, but only in very limited, specific
  circumstances. The principle is: a consumer casually browsing your site should not be able to find
  any reference to Botox easily." Then "That means:", followed by three list items: "No mention on
  your homepage", "No mention in hover text, small print or testimonials" and "No mention in your
  price list (unless suitably gated)". No page read defines "suitably gated". It introduces the
  route with "Here’s a safer approach:" — "safer", never "safe". On help: "If you have a question or
  you’re unsure about your ad or website, get in touch. You can contact our Copy Advice service and
  they’ll be happy to help." Its "essential for compliance" sentence and its "patient information
  leaflet" line are already quoted in § B1-P.
- **CAP's advice (AdviceOnline, 29 October 2025)**,
  https://www.asa.org.uk/advice-online/beauty-and-cosmetics-botulinum-toxin-products.html. The
  price-list sentence, complete: "Marketers’ websites may include a price list with a range of
  treatments available, including Botox, but the price list should not include product claims or
  encourage viewers to choose a product based on the price." Homepage small print, the sentence
  after the one in § B1-P: "In addition to this, any small print at the bottom of a homepage should
  not refer to POMs or directly link consumers to a page where they are referenced." It is about the
  homepage. The consultation claim: "The claim “a consultation for the treatment of lines and
  wrinkles”, for example, is likely to be considered acceptable, but it remains that the name of the
  POM should not be referenced in the initial ad." Keep "likely to be".
- **The two exclusions in § B1-P, re-read.** HMR reg. 7(3) opens "But references in these
  Regulations to an “advertisement” do not include any of the following—"; its limb (b) is
  "reference material and announcements of a factual and informative nature, including—", item
  (iv) is "price lists,", and the list ends "provided that no product claim is made; or"
  (legislation.gov.uk, "up to date with all changes known to be in force on or before 26 September
  2026", read 29 September 2026). CAP Code Scope II m is as quoted in § B1-P (read 28 September
  2026).

**Further lines the aesthetics post (A3) quotes** (added 29 September 2026, from pages read 28-29
September 2026). Each is verbatim from the raw page copies; keep the qualifiers, and keep each line
with its own page. Every AdviceOnline page below carries the CAP Executive note quoted under
"Fillers" above, so each is "CAP's advice".

- **CAP/BCAP guidance, _Guidance on the marketing of surgical and non-surgical cosmetic
  procedures_**: landing page dated 12 December 2023,
  https://www.asa.org.uk/resource/cosmetic-interventions.html; the PDF it links,
  https://www.asa.org.uk/static/2d213b66-cbf9-4a08-98a343cfe4cfce6c/Cosmetic-interventions-AG-Final.pdf,
  prints "Revised: November 2021". Its foreword: "Advertising Guidance reflects CAP's and/or BCAP's
  intended effect of the Codes but neither constitutes new rules nor binds the ASA Councils in the
  event of a complaint about an advertisement that follows it." So write "CAP's guidance says",
  never "the rules require". Para 2: "For non-broadcast advertising (including press, print,
  posters, marketers' own websites, online media, social media, influencer marketing), ads cannot be
  placed in media that are aimed under-18s, and in media in which 25% or more of the audience profile
  is under-18s." Keep "audience profile". Para 14: "Marketers should hold proof of practitioners'
  qualifications from a reputable, independent source before making claims that relate to those
  qualifications." Keep the condition. Para 16: "Marketers should not misleadingly claim or imply
  that a practitioner is a medical professional or regulated by a professional body if that is not
  the case. They should take care not to claim or imply that such practitioners have professional
  systems of complaint or redress if they do not." Para 40: "Marketers should avoid irresponsibly
  describing cosmetic interventions as "safe" or "easy", because it is likely that all such
  interventions will carry some level of risk to the patient." Keep "irresponsibly": the paragraph
  does not bar the words. Para 67: "Countdown clocks and claims such as "Hurry, offer must end
  Friday" should not be used." Paras 31 and 32 are under "More on before-and-after images" above.
  The guidance cites the testimonial rules by their numbers before April 2025 (3.45-3.47); cite the
  Code's current 3.47-3.50.
- **CAP Code rules** (section 1, https://www.asa.org.uk/type/non_broadcast/code_section/01.html, and
  section 3 read 29 September 2026; section 12 read 28 September 2026). 1.3: "Marketing
  communications must be prepared with a sense of responsibility to consumers and to society." 3.7:
  "Before distributing or submitting a marketing communication for publication, marketers must hold
  documentary evidence to prove claims that consumers are likely to regard as objective and that are
  capable of objective substantiation. The ASA may regard claims as misleading in the absence of
  adequate substantiation." It covers objective claims, not every claim. 3.48: "Testimonials must
  relate to the advertised product." 3.51: "Marketers must not refer in a marketing communication to
  advice received from CAP or imply endorsement by the ASA or CAP." (so no "approved by the ASA";
  see also F4 in § B4). 3.52, first sentence: "Marketing communications must not display a trust
  mark, quality mark or equivalent without the necessary authorisation." 12.3: "Marketers offering
  individual treatments, especially those that are physically invasive, may be asked by the media
  and the ASA to provide full details together with information about those who supervise and
  administer them. Practitioners must have relevant and recognised qualifications. Marketers should
  encourage consumers to take independent medical advice before committing themselves to significant
  treatments, including those that are physically invasive." 12.9: "Marketers must not encourage
  consumers to use a product to excess and must hold proof before suggesting their product or therapy
  is guaranteed to work, absolutely safe or without side-effects (subject to rule 12.19)." It
  requires proof; it does not bar the words. 12.25: "Marketing communications for cosmetic
  interventions must not be directed at those aged below 18 years through the selection of media or
  context in which they appear." Rule 6.1 is under _Consent to use patient images_ above; rules
  3.44-3.46 are in § A6.
- **Rule 12.25 in force 25 May 2022.** CAP News, _New targeting rules for cosmetic interventions
  advertising come into force today_ (25 May 2022),
  https://www.asa.org.uk/news/new-targeting-rules-for-cosmetic-interventions-advertising-come-into-force-today.html:
  "In November 2021, the Committee of Advertising Practice (CAP) and Broadcast Committee of
  Advertising Practice (BCAP) announced new targeting restrictions that prohibit cosmetic
  interventions advertising from being directed at under-18s." and "Following a 6-month grace
  period, the new rules come into force today:". November 2021 is the announcement; use 25 May 2022
  for "in force". It is an advertising rule, separate from the 2021 Act's administering offence below;
  only the Act passage falls under F6.
- **CAP's advice, _Health: Celebrities and health professionals_ (24 March 2026)**,
  https://www.asa.org.uk/advice-online/health-celebrities-and-health-professionals.html: "It is worth
  noting that an individual health professional does not have to be named in order for the ASA to
  consider that an ad includes the problematic endorsement of a health professional." The page names
  people and a manufacturer; copy names none of them.
- **CAP's advice, _Cosmetic Interventions: Non-surgical procedures_ (1 July 2025)**,
  https://www.asa.org.uk/advice-online/cosmetic-interventions-non-surgical-procedures.html:
  "Marketers are reminded that, whilst promotions on non-surgical procedures are not prohibited, the
  promotion must be responsible and never should pressure those seeing the ad into booking, even if
  the procedure is minimally or non-invasive – all procedures carry an element of risk." Keep "not
  prohibited" with its condition.
- **The FAQ (CAP News, 23 January 2020) on price promotions**, "CAN I ADVERTISE A PRICE PROMOTION FOR
  BOTOX (SUCH AS ‘20% OFF’ OR ‘BUY TWO AREAS GET ONE FREE’)?": "No, this is likely to breach the
  Code. As you can’t advertise ‘prescription-only’ treatments like Botox to the public at all and this
  would be a very direct advertisement for Botox, even if you didn’t mention it specifically – this
  wouldn’t be acceptable." Keep "likely to".
- **Dr Bunny Aesthetics (ASA ruling, 24 April 2024), issue 2 ("Upheld"), the clinic's name:** "We
  considered that, within the context of an ad for an aesthetics clinic, consumers would interpret
  the clinic name “Dr Bunny Aesthetics” to mean that the clinic was owned and operated by someone who
  held a general medical qualification." and "We did not receive any evidence to substantiate that
  the clinic was owned or operated by someone who held a general medical qualification and therefore
  concluded the ad was misleading." The rules breached were 3.1, 3.7 and 3.9; rule 3.9's heading
  "Qualification" means qualifying statements ("Marketing communications must not mislead by
  omitting significant limitations and qualifications."), not professional qualifications.

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
the system is run on botulinum-toxin ads or on clinic websites; the liquid BBL report below
(added 29 September 2026) applies it to paid Meta ads for one filler procedure. Keep "online ads" and "might break
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

**The liquid BBL report (12 March 2026)** (added 29 September 2026, from the page and PDF read 29
September 2026). CAP Enforcement Report, _Non-surgical liquid Brazilian Butt Lifts (BBLs)_,
resource page dated 12 March 2026,
https://www.asa.org.uk/resource/enforcement-report-non-surgical-liquid-bbls.html, and its PDF
("March 2026"),
https://www.asa.org.uk/static/b8f80962-3987-479a-b45c47849214ed44/6a225691-0ed6-49eb-b315c9a749b58337/CAP-Enforcement-Report-Non-surgical-liquid-BBLs.pdf.
It covers **paid ads on Meta** for one filler procedure: not websites, and not the POM.

- **The resource page:** "This Enforcement Report examines irresponsible claims in paid ads for
  non-surgical liquid BBL procedures captured using our AI-based Active Ad Monitoring system."; "We
  captured 928 unique paid ads for non-surgical liquid BBLs on Meta between April and December
  2025."; and "As of December 2025, only 11.5% of ads assessed complied with the CAP Code’s social
  responsibility rules." Keep "unique paid ads", "on Meta", "As of December 2025" and "ads
  assessed". Its "Common issues included" is CAP's frequency word: quote it attributed, never in
  WebAsk's voice.
- **The PDF:** "A non-surgical liquid BBL is a procedure which involves the injection of dermal
  filler into the bottom to enhance volume and shape." Under "Among the ads that broke the rules,
  the main issues involved:" its examples include "0% infection rate", "safe" and "transform your
  body effortlessly". The PDF dates the start differently from the page ("When monitoring began in
  March 2025, the proportion of compliant ads was 5.0%."; the page: "Between April and December
  2025, we monitored"). Quote one document per sentence and name it.
- **Do not repeat** the PDF's forecast that "government measures to be implemented in 2026 will
  allow only suitably qualified, Care Quality Commission-registered healthcare professionals to
  administer high-risk procedures such as non-surgical liquid BBLs". It was CAP's expectation in
  March 2026; as at 29 September 2026 we found no published consultation on the draft legislation
  (next section).

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

**Status as at 28 September 2026: not in force, and we found no regulations made** (legislation.gov.uk title searches; re-checked 29 September 2026, unchanged). Every line below is
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
  proposals into effect." _(Context added 29 September 2026, from `verified-licensing.md` §§ 6.1-6.2,
  the written answers and the Committee's publication as read 28 September 2026: both the 3 June
  "draft regulations" and the 23 June "draft legislation" concern the restrictions on the
  highest-risk procedures, not the licensing scheme. The letter: "This is why we have taken the
  decision to first of all focus on introducing legal safeguards for the cosmetic procedures posing
  the highest risks and I can confirm that we plan to consult on draft regulations in June." Answer
  10828 (and 9782 of 19 June 2026, the same text without the BBL sentence) opens "The Government has
  prioritised work on restrictions on the performance of the highest risk procedures and has been
  working with a group of expert stakeholders in recent months to develop detailed proposals on
  which procedures should be subject to the restrictions, and which regulated healthcare
  professionals should be permitted to perform them.", and 10828 adds "This will include the liquid
  Brazilian butt lift and other high-risk cosmetic procedures which have the potential to cause
  serious harm if improperly performed." So "these proposals" are the high-risk restrictions: never
  cite either line as a timetable for licensing regulations. The licensing line is the letter's
  separate "we are committed to implementing licensing in the current parliament".)_
- **What we found on 28 September 2026.** No DHSC cosmetic-procedures consultation on GOV.UK
  after the 7 August 2025 outcome; no licensing SI or draft SI on legislation.gov.uk (title
  searches, which can miss an unexpected title); no later written answer on licensing. The
  Women and Equalities Committee's follow-up report (HC 307, 11 September 2026) says "we have
  yet to receive the government’s response", which the Government had tied to "the publication
  of its consultation" — implying the consultation was unpublished, though the report does not
  say so in terms. Write "we found no published consultation on the draft legislation", never
  "the Government missed its June deadline".
- **Re-checked 29 September 2026** (added 29 September 2026; `a3/research.md` § 10, with the GOV.UK
  API copies in `a3/raw/govuk_*.json`): nothing new. The GOV.UK consultation page's last public
  change is still "Added the government's response to the consultation." (7 August 2025); the
  newest DHSC consultations are dated 14 September 2026 (school food standards) and 7 September 2026
  (tobacco and vapes), with no cosmetic-procedures consultation; GOV.UK searches for "cosmetic"
  since 1 June 2026 and for "high-risk cosmetic procedures" found nothing on the scheme or the
  high-risk restrictions; the legislation.gov.uk title searches give the same results as on 28
  September; and no written answer on either after 23 June 2026 (10828) was found.
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

**The CQC and non-surgical aesthetics (England)** (added 29 September 2026, from pages read 28-29
September 2026; until now this document covered CQC registration for dental practices only, in
§ B2). The CQC's _Scope of registration_ page for the regulated activity of _Surgical procedures_
("Page last updated: 29 January 2025",
https://www.cqc.org.uk/guidance-regulation/providers/registration/scope-registration/regulated-activities/surgical-procedures),
under "Cosmetic surgery": the procedures within the activity include those "carried out by a
healthcare professional for cosmetic purposes, where the procedure involves the use of instruments
or equipment that are inserted into the body."; then "The regulated activity of Surgical procedures
does not include the following procedures:", which lists "piercing", "tattooing", "subcutaneous
injections to enhance appearance" and "removal of hair or minor skin blemishes by application of
heat using an electric current." The page ends with the CQC's own "Check if you need to register
for Surgical procedures". **Only this one regulated activity was read**; the others (the same page
names "Treatment of disease, disorder or injury", for example) were not. So never write "aesthetic
clinics do not need CQC registration" or "beauty clinics are outside the CQC": write what this page
says, say that whether a clinic must register depends on what it does, and point to the CQC's
check. The offence of carrying on a regulated activity unregistered (HSCA 2008 s.10(1)) and the
CQC's England-only remit are in § B2, _The CQC, in detail_.

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
- For a clinic that offers the POM, before-and-after photos only of treatments that are not
  prescription-only, each clearly labelled with the treatment shown, with signed and dated proof
  that the photos are genuine, never of the POM: WebAsk's build standard, following CAP's advice
  on prescription-only medicines (redated 30 September 2026), and not a guarantee of compliance
  (founder, 1 October 2026, superseding the 29 September 2026 line "No before-and-after gallery on
  the site of a clinic that offers the POM"; _Before-and-after images_ above). A filler-only
  clinic's images follow CAP's rules and its advice of 5 June 2025.

### B2. Dental

Four regulators at once:

| Body    | What it governs                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GDC** | Professional conduct. No unsubstantiated clinical claims. A website list, prices, "specialist" and image consent — see _The GDC, in detail_ below. ~~**Genuine reviews only, no incentives.**~~ **Suspended, unsourced (28 September 2026):** no GDC text read contains it. Registration transparency. Patient consent for before/after images (_Standards_ 4.2.7, not the advertising guidance). "Specialist" only for dentists on a GDC specialist list (see _The GDC, in detail_) |
| **CQC** | Registration is a legal requirement in England (HSCA 2008 s.10(1)). ~~Displaying registration and inspection results builds trust~~ The CQC does not rate primary dental providers, so a primary care dental practice has no rating to display — see _The CQC, in detail_ below (corrected 28 September 2026)                                                                                                                                                                        |
| **ASA** | All promotional material legal, decent, honest, truthful                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **CMA** | Consumer protection and, since April 2025, fake reviews (§ A6). **Opened a market study into private dentistry on 5 March 2026**, which covers prices and choice (see _The CMA market study, in detail_); the CMA gives the market as "valued at £8.4 billion in 2023 to 2024", citing LaingBuisson (attribution added 28 September 2026). _(Corrected 29 September 2026: this began "Consumer protection and pricing transparency", words no CMA text read uses.)_                  |

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
  with the response (namely the relevant NHS (or equivalent) body for NHS treatment and the Dental
  Complaints Service for private treatment)" (the item in full, restored 29 September 2026); and
  "the date the website was last updated". Also: "You must update the
  information showing on your website regularly, so that it accurately reflects the personnel at
  the practice and the service offered", and "you do not display information comparing the
  skills or qualifications of any dental professional providing any service with the skills and
  qualifications of other dental professionals". The page says nothing on reviews,
  testimonials, patient images, the CQC or the ASA.
- **The rest of the advertising guidance** (added 29 September 2026, from the page re-read 29
  September 2026, text unchanged from 28 September). The professional list's lead-in, verbatim: "In
  line with European guidance*, if you are mentioned on a website as a dental professional providing
  dental care you must ensure the following is displayed:". The opening lines: "All information or
  publicity material regarding dental services should be legal, decent, honest and truthful.", and
  "Advertising that is false, misleading, or has the potential to mislead, is unprofessional, may lead
  to a fitness to practise investigation and can be a criminal offence." Keep "can be". Under
  "Advertising services": "Whenever you, your practice, or any place where you work as a registrant,
  produce any information containing your name, you are responsible for checking that it is
  correct.", and "You must make clear in advertisements and other practice publicity whether the
  practice is NHS (or equivalent health service), mixed or wholly private." The _Advertising
  checklist_ puts the same point among its general questions: "Have you made clear whether the
  practice is NHS (or equivalent), mixed or wholly private?" That a practice website is "practice
  publicity" is **our reading**. Under "Marketing websites": "If you promote your services on
  marketing or social networking websites (e.g. Instagram, TikTok, LinkedIn, Groupon, X), you must
  make clear that the treatment advertised may not be appropriate for every patient and that it is
  conditional on a satisfactory assessment being carried out." It names third-party sites; that it
  does not reach the practice's own site is **our reading**. Under "Honorary degrees and
  memberships": "You must not list memberships or fellowships of professional associations,
  societies or honorary degrees in an abbreviated form because it may mislead patients."
- **Edited since 2013 without a new date** (added 29 September 2026). The 2013 PDF,
  https://standards.gdc-uk.org/pdf/Guidance%20on%20advertising%20%28Sept%202013%29.pdf, printed
  "Effective from 30 September 2013", gives the marketing-sites examples as "(e.g. Groupon, Living
  Social and Facebook)"; the page read 29 September 2026 gives "(e.g. Instagram, TikTok, LinkedIn,
  Groupon, X)" and still shows only "Effective from 30 September 2013". Cite the page as "effective
  from 30 September 2013" with the date it was read, never as a 2013 text.
- **No certification scheme found** (added 29 September 2026). A site-restricted search of
  gdc-uk.org on 29 September 2026 found no GDC scheme that approves or certifies websites
  (`d1/research.md` § 1.2; no raw file). "Not found" is not "does not exist": write "we found no
  GDC scheme", dated.
- **The Dental Complaints Service and the register** (added 29 September 2026). The DCS,
  https://dcs.gdc-uk.org/, in its own words: "We provide a free and impartial service across the UK
  about private dental care." and "The DCS operates independently. It is funded by the General
  Dental Council (GDC). The GDC is the UK regulator of dental professionals." The GDC register
  search: https://olr.gdc-uk.org/searchregister (HTTP 200 on 29 September 2026).
- **"Specialist".** "If you are a dentist and are on a GDC specialist list, you can use the title
  ‘Specialist’ or describe yourself as a ‘specialist in….’"; "If you are not on a specialist
  list, you must not describe yourself as ‘specialising in…’ a particular form of treatment, but
  may use the terms ‘special interest in..’, ‘experienced in..’ or ‘practice limited to...'". The
  specialist-lists page: "Dentists do not have to join a specialist list to practise any
  particular specialty, but they can only use the title 'specialist' if they are on that list." The
  GDC's _Advertising checklist_: avoid "specialist" for "dentists who work in an area where there
  is no specialist list (e.g. implantology)". Public access, in the GDC's words: "Patients can
  check whether you are registered and whether you are on a specialist list"; "Members of the
  public can find a specialist by searching the GDC register." _(Added 29 September 2026, same
  advertising page:)_ "If you are a dentist and you are not on a GDC specialist list, you must not use
  titles which may imply specialist status such as Orthodontist, Periodontist, Endodontist etc." And
  for dental care professionals: "There are no specialist lists for dental care professionals. If you
  are a dental care professional, you must ensure that you do not mislead patients by using titles
  which could imply specialist status, such as ‘Smile specialist’ or ‘Denture specialist’."
- **Prices** (_Standards for the Dental Team_, effective 30 September 2013): 2.4.2 "You must give
  clear information on prices in your practice literature and on your websites - patients should
  not have to ask for this information"; 2.4.1 allows, for items that vary in cost, "a ‘from –- to’
  price range". _(Added 29 September 2026, from Principle 2 re-read 29 September 2026:)_ 2.4 is the
  standard, "You must give patients clear information about costs", and 2.4.1 and 2.4.2 sit under its
  "Guidance". 2.4.1 is about the list in the practice: "You must make sure that a simple price list
  is clearly displayed in your reception or waiting area. This should include a list of basic items
  including a consultation, a single-surface filling, an extraction, radiographs (bitewing or
  pan-oral) and treatment provided by the hygienist. For items which may vary in cost, a ‘from –- to’
  price range can be shown." Showing ranges on the website is **our reading** of 2.4.1 and 2.4.2
  together. The CMA's patient guide, _Choosing and paying for dental care_ ("Published 5 March
  2026"), https://www.gov.uk/guidance/choosing-and-paying-for-dental-care: "Dentists should give
  clear information on their prices on their websites, in leaflets you pick up from their practice
  and in their reception area." That it restates 2.4.2 is **our reading**; it is not a CMA rule.
- **Patient images** — in the _Standards_, not the advertising guidance: 4.2.7 (for photographs,
  "obtain and record the patients' consent to their use") and 4.2.9 ("You must not make any
  recordings or images without the patient's permission"). The _Focus on Standards_ FAQ on
  before-and-after images: "Yes, you would need the patient’s consent both to the taking of the
  photographs and to their use in promoting your practice." The social-media guidance (effective
  27 June 2016) requires "explicit consent". _(Added 29 September 2026, from Principle 4 re-read 29
  September 2026, https://standards.gdc-uk.org/pages/principle4/principle4:)_ 4.2 is the standard,
  "You must protect the confidentiality of patients’ information and only use it for the purpose for
  which it was given", with 4.2.1-4.2.9 under "Guidance". 4.2.7 opens "If other people ask you to
  provide information about patients (for example, for teaching or research), or if you want to use
  patient information such as photographs for any reason, you must:", and its list ends "explain to
  the patients that they can withdraw their permission at any time." 4.2.3: "You must not post any
  information or comments about patients on social networking or blogging sites." Applying 4.2.3 to
  replies to online reviews is **our reading**.
- **Reviews and incentives: no GDC source found** in the advertising guidance, the _Standards_,
  the social-media guidance, the checklist or _Focus on Standards_ (other GDC guidance titles not
  opened). The review rules come from the DMCC Act 2024 (§ A6). No GDC text read uses
  "representative" for results either; the nearest is "avoid statements or claims intended or
  likely to create an unjustified expectation about the results you can achieve".
- **The ASA and CAP, for dental** (added 29 September 2026, from pages read 28-29 September 2026).
  CAP Code rule 1.1 (section 1, read 29 September 2026): "Marketing communications should be legal,
  decent, honest and truthful" (the page prints a stray second full stop; quote the phrase). The Code
  covers a practice's own site: Scope I h, "Advertisements and other marketing communications by or
  from companies, organisations or sole traders on their own websites, or in other non-paid-for space
  online under their control, that are directly connected with the supply or transfer of goods,
  services, opportunities and gifts, …" (read 28 September 2026). CAP's advice on before-and-after
  photos (5 June 2025) is CAP's, given by the CAP Executive (§ B1). **The Dental Suite** (ASA ruling,
  13 December 2017, https://www.asa.org.uk/rulings/the-dental-suite-a17-390603.html): "Not Upheld";
  "Regional press"; "Number of complaints: 1". A press ad, not a website. The evidence: "Dental
  Suite provided the patient’s consent form, X-ray images of the patient’s jaw and his signed
  statement alongside the images of his teeth …", and "Dental Suite also provided 12 other before and
  after photos of the same day treatment". The finding: "We considered that those 12, other before
  and after photos indicated that the photo in the ad was generally representative of what could be
  achieved with the treatment." Keep "indicated" and "generally representative". The ruling cites
  Edition 12 rule numbers; do not print them as current. Rules 3.44-3.46 (reviews) are in § A6 and
  rule 3.52 (trust marks) in § B1.
- **Stale risk.** The GDC consulted from 2 June to 31 August 2026 on replacing the _Standards_
  with a "Framework for Professionalism", and is "recommending the outcome to Council later this
  year". Cite _Standards_ paragraph numbers "as at" the check date.

**The CQC, in detail** (added 28 September 2026). "Any person who carries on a regulated
activity without being registered under this Chapter in respect of the carrying on of that
activity is guilty of an offence" (HSCA 2008 s.10(1)). Regulation 20A's website duty "applies
where, and to the extent that, a service provider has received a rating". Primary care dental
services are excluded from rating (SI 2018/54 reg. 2: "except when carried on by a registered
service provider which is an independent hospital, a NHS Trust or a NHS Foundation Trust"; the NHS
Foundation Trust was missing here until 29 September 2026), and the CQC says "we don't give ratings to primary dental providers"
(page updated 22 December 2025). Registered providers "may use 'Regulated by' graphics".
**Our reading, labelled as ours:** a primary care dental practice has no rating, so Reg 20A
gives its website nothing to display; showing registration is a trust signal, not a Reg 20A
duty. Only Reg 20A and, from 29 September 2026, Reg 19 of the 2009 Registration Regulations (below)
were checked for website duties, so never write "no CQC website duty at all".

_Added 29 September 2026, from pages read 29 September 2026._ The CQC's remit is England: "CQC is
the independent regulator of health and adult social care in England."
(https://www.cqc.org.uk/about-us). The CMA's update of 17 July 2026 lists the other nations'
inspectorates: "the Care Quality Commission in England, Healthcare Inspectorate Wales, Healthcare
Improvement Scotland, and the Regulation and Quality Improvement Authority in Northern Ireland"; the
update's appendix table of regulators ends "The above table is not exhaustive.". What Reg 20A(2)
requires, where it applies (https://www.legislation.gov.uk/uksi/2014/2936/regulation/20A): "There must be shown on every
website maintained by or on behalf of any service provider—" (a) "the Commission’s website
address," (b) "the place on the Commission’s website where the most recent assessment of the service
provider’s overall performance and of its performance in relation to particular premises or
activities may be accessed, and" (c) "the most recent rating by the Commission of the service
provider’s overall performance and of its performance in relation to particular premises or
activities, in a way which makes it clear to which activities or premises a particular rating
relates." The 'Regulated by' graphics (_Regulated by CQC graphics_, "Page last updated: 25 November
2025",
https://www.cqc.org.uk/cqc-ratings-and-promotional-graphics/promotional-graphics-providers/regulated-CQC):
"They are an optional additional product and are not mandatory."; "These graphics are particularly
useful for providers that have either not yet been inspected and rated, or providers that do not
receive a rating (for example, primary care dental providers)."; and "Whatever digital platform you
use, people need to be able to click on the ‘Regulated by’ graphic to link to CQC’s homepage
(www.cqc.org.uk)." Regulation 19 of the Care Quality Commission (Registration) Regulations 2009 (SI
2009/3112), https://www.legislation.gov.uk/uksi/2009/3112/regulation/19: "Where a service user will
be responsible for paying the costs of their care or treatment (either in full or partially), the
registered person must provide a statement to the service user, or to a person acting on the service
user’s behalf—", "specifying the terms and conditions in respect of the services to be provided to
the service user, including as to the amount and method of payment of fees;", and the statement
must be "in writing; and" "as far as reasonably practicable, provided prior to the commencement of
the services to which the statement relates." It is a statutory instrument, not a CQC rule; that it
is a statement to each patient and not a website duty is **our reading**.

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
  23% to £80" and "by over 14% to £55".)_ _(Added 29 September 2026: the press release's sentence,
  verbatim: "Independent sources suggest average prices in the UK have increased significantly –
  between 2022 and 2024, initial consultations rose by over 23% to £80, and routine check-ups for
  existing patients by over 14% to £55." Keep "Independent sources suggest" and "for existing
  patients".)_
- **Update of 17 July 2026** (added 28 September 2026): "This document does not set out any
  findings or conclusions from our work to date." The CMA expects to publish its "emerging
  thinking" "Between October and November" 2026, and its final report "by the statutory deadline
  of 4 March 2027". Its summary of the call for views reports respondents' views, not findings
  ("We have not sought to quantify the views and experiences described by respondents"),
  including "the importance of visibility of pricing information within the dental practice, or
  on the practice website". Re-check the case page before any dental copy publishes after
  1 October 2026. _(Added 29 September 2026:)_ the update also says of that summary: "Responses, and
  our summary of the subject matter they contained, may not be representative of consumer or
  professional views generally, or in each of the nations of the UK." The case page shows "Last
  updated" 17 July 2026, with the note "Further stakeholder input requested, responses to statement
  of scope and market study update published."; a GOV.UK search on 29 September 2026 found nothing
  newer
- Scope: whether patients can make informed choices, and whether providers engage in
  misleading or unfair conduct. **Pricing transparency is explicitly in scope** _(Flagged 29
  September 2026: these words are not verbatim in any primary text read, and the text layer of the
  statement of scope PDF cannot be quoted (`d1/research.md` § 8). Do not quote them. Quotable
  instead, from the press release: "from finding a dentist and understanding prices to knowing where
  to go if something goes wrong" and "Business tactics and behaviour: Whether dentists engage in any
  practices that may be unfair, misleading or anti‑competitive that could harm consumers or limit
  their choice."; from the update: "How consumers access, assess and act on information to make
  informed choices".)_ _(Added 29 September 2026, the lines the dental and Leeds pages quote, each
  under the press release's own framing, "The CMA has published the proposed scope of the study and
  is inviting views. Areas under consideration include:" (`d1/raw/cma_press.txt`:140), so write
  them as the scope proposed on opening, never as settled scope: "Consumer choice and experience:
  How people search for dental care, compare providers, and understand the information they receive
  from dental professionals – including how experiences may vary for different consumer groups, such
  as vulnerable individuals." (:144); "Treatment prices: How prices for private dental services have
  changed compared with inflation." (:146); and, outside that list, "this study is not a criticism
  of clinicians or the care they provide, but an examination of how the market is working for
  consumers." (:164). Keep "from dental professionals" whenever the first is quoted. The update of
  17 July 2026 "confirms the scope of the study" (`d1/raw/cma_update.txt`:18) in five themes
  (:21-25), in its own words, not the press release's: under "Consumer journey and choice", "How
  consumers access, assess and act on information to make informed choices" (:368); under "Market
  outcomes", "How prices have changed compared to inflation and the relative profitability of
  service providers and of the different services they provide" (:663). Write "covers" only of the
  update's themes; the press release's lines are what the CMA proposed on opening.)_

⚠️ The study is **sector-level**. It does not follow that any individual practice's website
"is evidence in" it — that overclaim shipped in the dental page's H1 and was corrected in the
same pass. What is defensible: the website is where a patient meets the practice's prices, and how
people "compare providers, and understand the information they receive from dental professionals"
was among the areas the CMA proposed on opening (press release, 5 March 2026); its update of
17 July 2026 confirmed a "Consumer journey and choice" theme and, under "Market outcomes", "How
prices have changed compared to inflation". _(Corrected 29 September 2026: this said "pricing
transparency is what is being examined", words no CMA text read uses.)_

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

| What is sold                                                    | Regime                                                                                                                                                                                   | The test                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Treatments, spaces, experiences**                             | CAP Code general substantiation (rule 3.7)                                                                                                                                               | Hold evidence for any objective claim. Describing what a treatment is and how it feels is safe ground                                                                                                                                                                                                                                                                                                                                                          |
| **Food and food supplements** (oral)                            | **CAP Code section 15** + the **applicable register** (the GB nutrition and health claims (NHC) Register in Great Britain; the EU Register in Northern Ireland)                          | Only nutrition claims "listed in the applicable register" may be used, and only health claims "listed as authorised in the applicable register", or claims "that would have the same meaning to the consumer" (rule 15.1.1): in Great Britain the GB NHC Register (since **1 January 2021**), in Northern Ireland the EU Register (see below the table). The advertiser must hold documentary evidence that the product meets the register's conditions of use |
| **Anything injected or infused** — IV drips, vitamin injections | **CAP Code section 12** (rules 12.1 and 12.11); medicines law (Human Medicines Regulations 2012) where the product is a medicinal product, which was not researched: see below the table | **Medicinal claims are not permitted unless that specific product is licensed as a medicine for that purpose.** Advertising an unauthorised medicinal product in GB is a **criminal offence** under the HMR 2012 (regs 279(1) and 303(1)). Whether any given drip or injection is a medicinal product was not researched: see the caveat below the table                                                                                                       |

**Below the table: corrections and dated sources** (added 29 September 2026, from pages read
28-29 September 2026).

- **The register row (corrected).** It said only claims "authorised on the GB NHC Register".
  Rule 15.1.1 (CAP Code section 15, https://www.asa.org.uk/type/non_broadcast/code_section/15.html)
  has two sentences: "Only nutrition claims listed in the applicable register may be used in
  marketing communications." and "Only health claims listed as authorised in the applicable
  register, or claims that would have the same meaning to the consumer, may be used in marketing
  communications." The same-meaning route is in the health-claims sentence only. The section's
  background: "In these rules, the term “applicable register” is used to refer to the EU Register
  and / or the GB Register"; the GB Register "replaced the EU Register for health and nutrition
  claims made in Great Britain from 1 January 2021"; and "Consequently, the EU Register continues
  to apply to nutrition and health claims made in Northern Ireland." Wherever this section says
  "GB NHC Register", that is the rule for Great Britain.
- **The criminal-offence caveat (corrected).** Human Medicines Regulations 2012 reg 279(1),
  https://www.legislation.gov.uk/uksi/2012/1916/regulation/279 ("up to date with all changes known
  to be in force on or before 29 September 2026"): "A person may not publish an advertisement in
  Great Britain for a medicinal product unless one of the following is in force for the product—",
  then "a UKMA(GB) or UKMA(UK);", "an authorisation by the licensing authority on a temporary basis
  under regulation 174;", "a COR(GB) or COR(UK); or" and "a THR(GB) or THR(UK)." (reg 279(2) is the
  Northern Ireland limb). Reg 303(1), in the same Part 14, Chapter 2,
  https://www.legislation.gov.uk/uksi/2012/1916/regulation/303: "A person is guilty of an offence
  if that person commits a breach of a provision in this Chapter." Those two lines support the
  offence **for a medicinal product** only. Whether any IV drip or vitamin injection is a
  "medicinal product" was not researched: the definition was not read and no MHRA classification
  was checked. The only line read that applies medicines law to drips is the MHRA's advice as
  CAP's advice reports it: "The MHRA had advised the ASA that any mention of coronavirus/COVID-19
  in the promotion of an IV drip product would bring the product under medicines regulations, as
  would any claim that implied treatment of, or protection from, the virus." So never write that
  advertising a drip is a criminal offence; the clinic checklist post (C1) leaves the clause out.
  The row's Regime cell said "**Medicines law.**" with no condition; it was corrected to match
  (29 September 2026, from pages read 28-29 September 2026).
- **CAP's advice, dated.** AdviceOnline, _Healthcare: Intravenous Nutritional Therapy_ (6 February
  2024, https://www.asa.org.uk/advice-online/healthcare-intravenous-nutritional-therapy.html):
  "This advice is given by the CAP Executive about non-broadcast advertising. It does not
  constitute legal advice. It does not bind CAP, CAP advisory panels or the Advertising Standards
  Authority." Then "The ASA has yet to see convincing evidence to support the claimed benefits of
  specific IVNT’s."; "Any claim of a specific benefit from an IVNT is likely to be problematic
  unless the supporting evidence is robust (and in line with the expectations stated above). This
  may include general references to things like “mood”,” energy”, and “immunity”, …" (punctuation
  as printed); and, on medicinal claims, softer than the table: "Such claims are unlikely to be
  acceptable unless the IVNT has been licenced as a medicine and the treatment claims in the ad
  comply with the Summary of Product Characteristics (SPC) that accompany that licence (rules 12.1
  and 12.11)."
- **CAP News, dated.** _Advertising Vitamin Drips – Injecting regulatory knowledge with a quick
  jab_ (22 February 2024,
  https://www.asa.org.uk/news/advertising-vitamin-drips-injecting-regulatory-knowledge-with-a-quick-jab.html):
  "Medicinal claims are not permitted for IVNTs unless that specific product has been licensed as
  a medicine for that purpose." (the table's bold sentence, almost word for word), and "In the same
  vein, marketers are reminded that prescription-only IV’s or vitamin injections cannot be
  advertised to the public." So rule 12.12 can reach a beauty or wellness clinic that offers one.
  Keep each page's own word: "not permitted" (CAP News), "unlikely to be acceptable" and "likely
  to be problematic" (CAP's advice).

**The IV point is the one that matters commercially**, because `audienceType` for this vertical
explicitly names "IV therapy and vitamin drip clinics". The ASA has upheld against IV clinics
on exactly this: rulings against **Cosmetic Medical Advice UK**, **The Private Harley Street
Clinic** and **Reviv UK** (all 22 April 2020), over claims that drips could prevent or treat
COVID-19 when the products were not licensed as medicines for it (CAP rules 12.1 and 12.11).
The ASA consulted the **MHRA**, whose position was that any mention of that condition brought
the product within medicines regulation. There is standing ~~ASA guidance~~ CAP advice,
_Healthcare: Intravenous Nutritional Therapy_ (AdviceOnline, 6 February 2024; relabelled 29
September 2026, from pages read 28-29 September 2026: it is "given by the CAP Executive", see above).

**The substantiation limb bites separately**, and it is worth keeping both examples because
they fail on different grounds: **GMG Pharmacy Ltd t/a The IV Clinic** fell on **evidence**
(rules 3.1, 3.7 and 12.1) rather than on licensing. A claim can therefore ~~be unlawful~~
breach the CAP Code either because the product is not licensed to make it **or** because it is
simply not substantiated. _(Corrected 29 September 2026, from pages read 28-29 September 2026: as
cited above, GMG Pharmacy was decided under CAP rules 3.1, 3.7 and 12.1, and the licensing cases
under CAP rules 12.1 and 12.11, so "unlawful" was stronger than the rulings.)_

So an IV bar is **closer to the aesthetic-clinic problem than to the salon one** — it is
selling something whose advertising is governed by ~~medicines law~~ CAP Code section 12 and,
where the product is a medicinal product, by medicines law. A wellness page that treats
"immunity", "energy" and "detox" as marketing words is making ~~medicinal claims for an
unlicensed product~~ claims of a specific benefit, which CAP's advice says are "likely to be
problematic unless the supporting evidence is robust"; claims to "treat, alleviate, prevent or
cure a medical condition" are, in the same advice, "likely to be considered medical claims" on top
of that. _(Corrected 29 September 2026, from
pages read 28-29 September 2026: CAP's advice lists "mood", "energy" and "immunity" under claims
of a specific benefit, not under medicinal claims, and "detox" is not in its list; "governed by
medicines law" is subject to the caveat above.)_

**Site-design implications:** service pages that sell the experience and the process rather
than the outcome; no "boosts", "cures", "prevents" or named conditions against an infused
product; the supplement side checked against the GB NHC Register wording rather than
paraphrased; and — as with aesthetics — the honest position that this constrains the copy and
is still the commercially better site, because the claim is doing less work than the operator
expects.

**Sources.** Retrieved 2026-07-29. ASA/CAP, _Food: Health claims_ and CAP Code section 15;
ASA/CAP, _Healthcare: Intravenous Nutritional Therapy_; ASA/CAP, _Advertising Vitamin Drips_;
ASA Enforcement Notice, _Advertising Claims for IV Drips (Coronavirus/COVID-19)_; ASA ruling,
_GMG Pharmacy Ltd t/a The IV Clinic_; Human Medicines Regulations 2012. _(Added 29 September
2026, from pages read 28-29 September 2026: the CAP advice, CAP News item, section 15 and HMR regs 279 and 303
were read for C1; dated URLs are in the note below the table and in § Sources.)_

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
- [ ] Practitioner claims: proof of qualifications "from a reputable, independent source"; a "Dr"
      clinic name only with evidence that the clinic is owned or operated by someone who holds a
      general medical qualification; no implied regulation that does not exist (CAP's guidance
      paras 14 and 16; Dr Bunny Aesthetics, issue 2; § B1). _(Added 29 September 2026.)_
- [ ] No medicinal claim for an unlicensed injected or infused product; for food and
      supplements, nutrition claims only if listed in the applicable register, and health claims
      only if listed as authorised there or with the same meaning to the consumer (rule 15.1.1;
      the GB NHC Register in Great Britain, the EU Register in Northern Ireland; § B2a).
      _(Corrected 29 September 2026, from pages read 28-29 September 2026: it said "authorised on
      the GB NHC Register" for all claims; rule 15.1.1 names the applicable register and gives the
      same-meaning route to health claims only.)_
- [ ] Before/after imagery has documented patient consent (sources and limits: § B1 _Consent to
      use patient images_; GDC _Standards_ 4.2.7 for dentists), and signed and dated proof that the
      photos are genuine (CAP's advice, 5 June 2025); none of a POM treatment; for a clinic that
      offers the POM, only photos of treatments that are not prescription-only, each clearly
      labelled with the treatment shown (WebAsk's build standard, following CAP's advice on
      prescription-only medicines, redated 30 September 2026; our standard, not a guarantee of
      compliance; founder, 1 October 2026, superseding the 29 September 2026 "no before-and-after
      gallery" line; § B1 _Before-and-after images_); a filler-only clinic's labelled results
      follow CAP's rules and the 5 June 2025 evidence lines; a filler result is labelled as one (the FAQ); no filter or retouching on the treated area, WebAsk's standard,
      following Bitesize's "rule of thumb: don’t enhance or retouch any areas of the photo related
      to the treatment" (CAP's guidance para 31 says such retouching "could be problematic",
      "irrespective of the inclusion of a disclaimer"). _(Extended 29 September 2026, and again the
      same day for the founder's before-and-after build standard; revised 1 October 2026 for the
      founder's replacement standard.)_
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
- [ ] Registrations displayed accurately (GDC number; CQC registration, where registered; a CQC
      rating only where one has been given). _(Corrected 29 September 2026, from pages read 28-29
      September 2026: "CQC registration" read as if every clinic holds one. Whether a clinic must
      register depends on what it does (§ B1, *The CQC and non-surgical aesthetics*), and the CQC
      does not rate primary dental providers (§ B2).)_ _("Licence status"
      removed 28 September 2026: no licensing scheme is in force.)_ A CQC 'Regulated by' graphic,
      if used, is optional and must click through to the CQC's homepage (§ B2; added 29 September 2026)
- [ ] Pricing presented transparently (dental: GDC _Standards_ 2.4.2; the CMA study)
- [ ] Dental: NHS, mixed or wholly private made clear (GDC advertising guidance, "advertisements
      and other practice publicity"; the website as publicity is our reading); no memberships,
      fellowships or honorary degrees in abbreviated form (§ B2). _(Added 29 September 2026.)_
- [ ] Age eligibility stated where the treatment is age-restricted; cosmetic-intervention ads not
      directed at under-18s, and not placed where "25% or more of the audience profile is
      under-18s" (CAP Code 12.25; CAP's guidance para 2; § B1). _(Extended 29 September 2026.)_
- [ ] Cookies: nothing non-exempt before consent; refusing as easy as accepting; the
      statistical-purposes exception used only on its conditions (§ A4)
- [ ] Forms: where a form collects health details, a lawful basis under Article 6 and a condition
      under Article 9; privacy information at the time of collection; marketing emails and texts
      only with specific consent or within the soft opt-in (_Forms on clinic sites_, below; § A5).
      _(Added 29 September 2026, from pages read 28-29 September 2026.)_
- [ ] Where a question is about an actual advert and is genuinely uncertain → **CAP Copy
      Advice** (standard 3–5 working days, free; faster turnarounds paid). It advises on
      "prospective non-broadcast ads" against the CAP Code and gives no legal advice; the Code
      excludes editorial content, and whether Copy Advice would review an editorial summary of
      the rules is not recorded

**Forms on clinic sites** (added 29 September 2026, from pages read 28-29 September 2026). All
three ICO pages below carry the banner "Due to changes made by the Data (Use and Access) Act, this
guidance is under review and may be subject to change."; quote them with "under review".

- **Health details are special category data.** ICO, _What is special category data?_ ("Latest
  update - 9 April 2024"; URL in § B1, _Consent to use patient images_): "The UK GDPR singles out
  some types of personal data as likely to be more sensitive, and gives them extra protection:",
  a list that includes "data concerning health;". That a booking or enquiry form which asks about
  health collects it is our application, not an ICO line.
- **Article 6 plus Article 9.** ICO, _What are the rules on special category data?_,
  https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-are-the-rules-on-special-category-data/:
  "If you are processing special category data this means you must still identify a lawful basis
  for your processing, in exactly the same way as for any other personal data. In other words, you
  must identify both a lawful basis under Article 6 and a condition for processing special category
  data under Article 9." Which Article 9 condition a clinic should use was not researched: never
  name one.
- **Privacy information at collection.** ICO, _Right to be informed_,
  https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/:
  "You must provide privacy information to individuals at the time you collect their personal data
  from them."
- **Marketing sign-ups.** The ICO's email and text rule and its "limited exception for your own
  previous customers" are quoted in § A5.
- **Not covered by these pages:** whether before-and-after photos are special category data
  (§ B1: never write that they are), and whether a review request counts as marketing (addendum
  R09, not re-read).

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
- **ASA / CAP POM ban** — CAP (AdviceOnline), _Beauty and Cosmetics: Botulinum toxin products_; JCCP, _New ASA Guidance_; Harley Academy
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

- **CAP** — FAQ (CAP News), _Botox - Frequently Asked Questions (FAQs)_ (23 January 2020), https://www.asa.org.uk/news/botox-frequently-asked-questions-faqs.html · CAP Bitesize, _Botox and non-surgical cosmetic interventions_ (undated), https://www.asa.org.uk/advice-and-resources/cap-bitesize/rules-for-advertising-botox.html · AdviceOnline, _Beauty and Cosmetics: Botulinum toxin (Botox) products_ (29 October 2025; "given by the CAP Executive", does not bind the ASA), https://www.asa.org.uk/advice-online/beauty-and-cosmetics-botulinum-toxin-products.html · AdviceOnline, _Healthcare: Prescription-only Medicines (websites)_ (17 February 2022), https://www.asa.org.uk/advice-online/health-prescription-only-medicines-websites.html · Enforcement Notice, _Advertising Botox and other botulinum toxin injections on social media_ (9 January 2020), https://www.asa.org.uk/resource/enforcement-notice-botox-social-media.html · Enforcement Notice, _Botox and other botulinum toxin products_ (1 March 2019), https://www.asa.org.uk/resource/enforcement-notice-botox.html · _A fine line - the dos and don’ts of advertising Botox_ (17 October 2019), https://www.asa.org.uk/news/a-fine-line-the-dos-and-don-ts-of-advertising-botox.html · AdviceOnline, _Before and after photos_ (5 June 2025), https://www.asa.org.uk/advice-online/before-and-after-photos.html · CAP Code section 12, https://www.asa.org.uk/type/non_broadcast/code_section/12.html, section 3, https://www.asa.org.uk/type/non_broadcast/code_section/03.html, and Scope, https://www.asa.org.uk/type/non_broadcast/code_folder/scope-of-the-code.html · Copy Advice (undated), https://www.asa.org.uk/advice-and-resources/copy-advice.html · CAP News, _Enforcement Update – Ads for Botox on social media_ (9 January 2020), https://www.asa.org.uk/news/enforcement-update-ads-for-botox-on-social-media.html · CAP News, _We're using new technology to enforce Botox ad ban_ (9 January 2020), https://www.asa.org.uk/news/we-re-using-new-technology-to-enforce-botox-ad-ban.html · ASA and CAP News, _Protecting people from harmful ads for weight-loss medicines: new research and Enforcement Report_ (2 April 2026), https://www.asa.org.uk/news/protecting-people-from-harmful-ads-for-weight-loss-medicines-new-research-and-enforcement-report.html · _Enforcement Report: Weight-loss prescription-only medicines_ (2 April 2026), https://www.asa.org.uk/resource/enforcement-report-weight-loss-prescription-only-medicines.html, and its PDF (April 2026), https://www.asa.org.uk/static/882edc0a-0f95-44bf-be56959750d1a606/CAP-Enforcement-Report-Weight-loss-POMs.pdf
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

**Read on 29 September 2026, for the price-list post (A2)** (added 29 September 2026, from pages
read 28-29 September 2026). Raw copies in `.playwright-mcp/compliance/a2/raw/`, mapped in
`.playwright-mcp/compliance/a2/research.md` and `a2/PROVENANCE.md` (all git-ignored). The FAQ,
Bitesize and AdviceOnline (29 October 2025) pages above were re-fetched the same day with the same
text.

- **ASA rulings** — HB Health of Knightsbridge (15 January 2014), https://www.asa.org.uk/rulings/HB-Health-of-Knightsbridge-A13-237714.html · Dermaskin Clinics (15 January 2014), https://www.asa.org.uk/rulings/Dermaskin-Clinics-A13-237709.html · Lloyds Pharmacy Ltd (4 March 2015), https://www.asa.org.uk/rulings/lloyds-pharmacy-ltd-a14-271213.html · Juniper Technologies UK Ltd t/a Juniper (8 April 2026), https://www.asa.org.uk/rulings/juniper-technologies-uk-ltd-a25-1319597-juniper-technologies-uk-ltd.html · Glowery Ltd t/a Glowday (12 April 2023; not used by A2), https://www.asa.org.uk/rulings/glowery-ltd-a22-1169867-glowery-ltd.html
- **CAP** — AdviceOnline, _Weight control: Prescription-only medicines_ (29 May 2026; "given by the CAP Executive", does not bind the ASA), https://www.asa.org.uk/advice-online/weight-control-prescription-only-medicines.html · Enforcement Notice, _Advertising of prescription-only medicines used for weight management_ (23 September 2025; "published jointly with" the MHRA and the GPhC; not used by A2), https://www.asa.org.uk/resource/enforcement-notice-advertising-of-prescription-only-medicines-used-for-weight-management.html · CAP News, "A basic guide to prescription-only medicines" (7 July 2016; not used by A2), https://www.asa.org.uk/news/a-basic-guide-to-prescription-only-medicines.html
- **The MHRA and medicines law** — Blue Guide Appendix 6 (November 2020), re-downloaded from the URL above, and the Blue Guide page that links it (last updated 28 March 2025), https://www.gov.uk/government/publications/blue-guide-advertising-and-promoting-medicines · Human Medicines Regulations 2012 reg. 7, re-read (legislation.gov.uk: "up to date with all changes known to be in force on or before 26 September 2026"), https://www.legislation.gov.uk/uksi/2012/1916/regulation/7

**Read on 29 September 2026, for the aesthetics post (A3) and the dental post (D1)** (added 29
September 2026). Raw copies in `.playwright-mcp/compliance/a3/raw/` and `d1/raw/`, mapped in
`a3/research.md`, `d1/research.md`, `a3/PROVENANCE.md` and `d1/PROVENANCE.md` (all git-ignored).
A3 also re-used the `a1/raw/` copies read 28 September 2026 (the FAQ, Bitesize, CAP's advice of 29
October 2025, CAP Code section 12 and Scope, Dr Bunny Aesthetics, Glow Up LLC). The licensing
context comes from `verified-licensing.md` §§ 6.1-6.2 (read 28 September 2026).

- **CAP** — AdviceOnline (each "given by the CAP Executive", does not bind the ASA): _Before and after photos_ (5 June 2025), https://www.asa.org.uk/advice-online/before-and-after-photos.html · _Healthcare: Prescription-only medicine_ (redated 30 September 2026; read 1 October 2026; the basis of the before-and-after build standard of 1 October 2026, § B1), https://www.asa.org.uk/advice-online/healthcare-prescription-only-medicine.html · _Beauty and Cosmetics: Treatments using fillers_ (6 August 2025), https://www.asa.org.uk/advice-online/beauty-and-cosmetics-treatments-using-fillers.html · _Cosmetic Interventions: Non-surgical procedures_ (1 July 2025), https://www.asa.org.uk/advice-online/cosmetic-interventions-non-surgical-procedures.html · _Health: Celebrities and health professionals_ (24 March 2026), https://www.asa.org.uk/advice-online/health-celebrities-and-health-professionals.html · CAP/BCAP Advertising Guidance, _Guidance on the marketing of surgical and non-surgical cosmetic procedures_ (landing page 12 December 2023; PDF "Revised: November 2021"), https://www.asa.org.uk/resource/cosmetic-interventions.html · CAP News, _New targeting rules for cosmetic interventions advertising come into force today_ (25 May 2022), https://www.asa.org.uk/news/new-targeting-rules-for-cosmetic-interventions-advertising-come-into-force-today.html · CAP Enforcement Report, _Non-surgical liquid Brazilian Butt Lifts (BBLs)_ (12 March 2026), https://www.asa.org.uk/resource/enforcement-report-non-surgical-liquid-bbls.html, and its PDF (March 2026) · Enforcement Notice PDF (landing page 9 January 2020), re-downloaded, https://www.asa.org.uk/static/a8fa05da-b3ee-4528-82095e7bba2a3e5c/Enforcement-Notice-Advertising-Botox-and-other-botulinum-toxin-injecti.pdf · CAP Code sections 1, 3 and 6, https://www.asa.org.uk/type/non_broadcast/code_section/01.html, https://www.asa.org.uk/type/non_broadcast/code_section/03.html, https://www.asa.org.uk/type/non_broadcast/code_section/06.html
- **ASA ruling** — The Dental Suite (13 December 2017), https://www.asa.org.uk/rulings/the-dental-suite-a17-390603.html
- **DMCC Act 2024 and CMA208** — s.182, https://www.legislation.gov.uk/ukpga/2024/13/section/182 · s.190, https://www.legislation.gov.uk/ukpga/2024/13/section/190 · s.204, https://www.legislation.gov.uk/ukpga/2024/13/section/204 · Sch. 20 para 13, re-read · CMA208 (4 April 2025), https://assets.publishing.service.gov.uk/media/67eeb64fe9c76fa33048c790/CMA208_-_Fake_reviews_guidance.pdf, re-read from a fresh download
- **Google** — Maps user-contributed content policy, https://support.google.com/contributionpolicy/answer/7400114?hl=en-GB (en-GB and en copies)
- **GMC, NMC and the ICO** — GMC, _Making and using visual and audio recordings of patients_, https://www.gmc-uk.org/professional-standards/the-professional-standards/making-and-using-visual-and-audio-recordings-of-patients (Wayback Machine snapshots, 8 December 2024 to 5 March 2026) · NMC social media guidance (last updated 2 July 2025), https://www.nmc.org.uk/standards/guidance/social-media-guidance/read-social-media-guidance-online/ · ICO, _What is special category data?_ (latest update 9 April 2024), https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/
- **GDC** — _Guidance on advertising_ (re-read) and its 2013 PDF, https://standards.gdc-uk.org/pdf/Guidance%20on%20advertising%20%28Sept%202013%29.pdf · _Standards for the Dental Team_ Principle 4, https://standards.gdc-uk.org/pages/principle4/principle4 · Dental Complaints Service, https://dcs.gdc-uk.org/ · register search, https://olr.gdc-uk.org/searchregister
- **CQC and the law** — _About us_, https://www.cqc.org.uk/about-us · _Regulated by CQC graphics_ (25 November 2025), https://www.cqc.org.uk/cqc-ratings-and-promotional-graphics/promotional-graphics-providers/regulated-CQC · Regulation 20A and SI 2018/54 reg. 2, re-read · CQC (Registration) Regulations 2009 reg. 19, https://www.legislation.gov.uk/uksi/2009/3112/regulation/19
- **CMA** — update PDF (17 July 2026), https://assets.publishing.service.gov.uk/media/6a59e2a924d4d0ad06d9465f/_Private_dental_services_market_study_update__.pdf · _Choosing and paying for dental care_ (5 March 2026), https://www.gov.uk/guidance/choosing-and-paying-for-dental-care · case page and press release, re-read
- **Licensing re-check** — GOV.UK content and search APIs, legislation.gov.uk title searches, and Parliament written questions tabled from 20 June 2026 (`a3/research.md` § 10)

**Read on 29 September 2026, for the clinic checklist post (C1)** (added 29 September 2026, from
pages read 28-29 September 2026). Raw copies in `.playwright-mcp/compliance/c1/raw/`, mapped in
`c1/research.md`, `c1/PROVENANCE.md` and `c1/DOCS-GAPS.md` (all git-ignored); C1 also re-used the
`a1/raw/`, `a3/raw/` and `d1/raw/` copies (CMA208, the ICO's _What is special category data?_,
CAP's advice on before-and-after photos).

- **Equality** — Equality Act 2010 s.20, https://www.legislation.gov.uk/ukpga/2010/15/section/20, s.29, https://www.legislation.gov.uk/ukpga/2010/15/section/29, and s.217, https://www.legislation.gov.uk/ukpga/2010/15/section/217 · SI 2026/788 (made 14 July 2026, in force 5 August 2026), https://www.legislation.gov.uk/uksi/2026/788/made · EHRC, _Statutory Code of Practice: Services, public functions and associations_ (PDF), https://www.equalityhumanrights.com/sites/default/files/2026/EHRC_Code_of_practice_for_services_public_functions_and_associations.pdf
- **PECR and the ICO** — PECR Sch. A1 and Sch. 1, re-read · GOV.UK, _Data Use and Access Act 2025: plans for commencement_ ("Last updated: 5 February 2026"), https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement · DPA 2018 s.157, re-read ("up to date with all changes known to be in force on or before 29 September 2026") · ICO chapters of the storage and access guidance (index last updated 29 April 2026): _What are the PECR rules?_, https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-pecr-rules/ · _What are the exceptions?_, https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/ · _How do we manage consent in practice?_, https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/ · ICO news (29 April 2026), https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/04/final-storage-and-access-technologies-guidance-published/ · online tracking strategy update (29 April 2026) and DUAA summary (PECR) ("Latest updates - 19 June 2025"), re-read · ICO blog (23 June 2026), https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/06/one-year-on-marking-the-12-month-commencement-of-the-data-use-and-access-act/ · ICO, each "under review": _What are the rules on special category data?_, https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-are-the-rules-on-special-category-data/ · _Right to be informed_, https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/ · _Electronic mail marketing_, https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/
- **CAP** — AdviceOnline, _Healthcare: Intravenous Nutritional Therapy_ (6 February 2024; "given by the CAP Executive", does not bind the ASA), https://www.asa.org.uk/advice-online/healthcare-intravenous-nutritional-therapy.html · CAP News, _Advertising Vitamin Drips – Injecting regulatory knowledge with a quick jab_ (22 February 2024), https://www.asa.org.uk/news/advertising-vitamin-drips-injecting-regulatory-knowledge-with-a-quick-jab.html · CAP Code section 15, https://www.asa.org.uk/type/non_broadcast/code_section/15.html
- **Medicines law** — Human Medicines Regulations 2012 reg. 279, https://www.legislation.gov.uk/uksi/2012/1916/regulation/279, and reg. 303, https://www.legislation.gov.uk/uksi/2012/1916/regulation/303
- **CQC** — _Surgical procedures_ scope page (29 January 2025), https://www.cqc.org.uk/guidance-regulation/providers/registration/scope-registration/regulated-activities/surgical-procedures
- **Not researched for C1** (so nothing above rests on them): equality law in Northern Ireland; CQC regulated activities other than surgical procedures; whether any drip or vitamin injection is a medicinal product; the text of DUAA s.142 (read only through GOV.UK's commencement page, below). The ICO's guidance on the higher PECR fines was searched for, not researched in depth: "currently developing" on 23 June 2026, and not found by a non-exhaustive search on 29 September 2026 (§ A4).

**Not verified on 28 September 2026** (so nothing above rests on them): the House of Commons
Library briefing CBP-10331 (HTTP 403); the RCS England open letter of 6 August 2026; the
Committee's original report HC 869; the Welsh and Northern Irish positions; the MHRA page of 15
July 2026; the ASA news pages on AI monitoring seen in search results (§ B1's monitoring line
now rests on the Glow Up LLC ruling and the weight-loss pages instead); CMA208 and the £150,000
individual fine (not re-read); SI 2026/82 regs 8–11; GMC and NMC guidance on patient images.
_(29 September 2026: CMA208 was re-read, and the £150,000 individual figure is now marked
unsupported (§ A6); GMC and NMC guidance on patient images was read in part (§ B1, *Consent to use
patient images*).)_
