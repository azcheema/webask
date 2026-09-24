# 06 — Verticals shortlist

> Purpose: which local verticals, on what evidence, in what order. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1):
> every section below is a **hypothesis** until the session named there confirms, amends or
> rejects it with evidence.

## 1. Method and staging hypothesis (planning § 5.4 and § 4.6)

Rubric as in § 3 (06). Regulator leads to verify from primary sources: Gas Safe/NICEIC/TrustMark and the
Consumer Contracts Regulations (trades); DVSA MOT rules and approved codes (garages); RCVS Code and the
CMA veterinary Order with its dates (vets — fetch gov.uk); CMA gym-contract enforcement and the DMCC
subscription regime timing (gyms — fetch the DBT response); Estate Agents Act, redress, material
information under DMCC Part 4 (agents); SRA Transparency Rules and rule 8.9 (solicitors — App. A); FSA
FHRS display by nation, allergens, drip pricing (hospitality); local-authority special-treatment
licensing (salons); tutor DBS position. Founder-affinity column stays blank until the brainstorm.

Wave 1: trades/home services, garages/MOT centres, **veterinary practices** — the **Veterinary
Services Market Investigation Order 2026 was made on 22 September 2026** and its website obligations
are quoted in Appendix L: a price list one click from the homepage on a "prices"/"fees" page with the
36 Schedule 1 items, the group name in the homepage banner and page metadata, practice information,
the parasiticide list with the VMD link, pet-care-plan standard information, the RCVS prescription
literature within two clicks, a complaints process, and a booking confirmation carrying the
consultation price. The dates split by item (Art. 3 table, confirmed on the PDF on 24 September
2026): for a practice with fewer than 15 sites the Part 2 items (ownership and practice information,
the price list, the parasiticide list, pet care plans), the end-of-life options page (Art. 20) and the
complaints process (Art. 21) are due **22 March 2027**; the RCVS prescription literature and the
"Written prescriptions are available" message in booking communications (Art. 14) are due **22
September 2027**. For groups with 15 or more sites: 22 December 2026 for practice information, the
price list, the parasiticide list, pet care plans and end-of-life options; 22 March 2027 for ownership
information and the complaints process; 22 June 2027 for Art. 14. Compliance runs "from the next
Working Day after the dates stipulated" (Art. 3(1)). The CMA's own release says "Less than 40% of practices have prices
on their websites" (24 March 2026). Trades carry registration-display and claims-of-approval rules
(L.3); garages carry almost nothing online (L.4) and stay wave 1 on fit, not regulation. Wave 2: gyms/fitness studios,
timed to the DMCC subscription-contract regime (DBT government response published 2 April 2026, PDF on
gov.uk — App. AP: the response's Conclusion reads "we anticipate that the regime will commence in spring 2027"). Wave 3 at most: estate/letting agents (portal-feed work, not the monthly plans;
`check-keywords.ts` dropped real-estate deliberately; see § 10.8), solicitors/accountants (SRA 8.9
limits outbound marketing but price-transparency website work is a real wedge; § 10.7). Deferred:
hospitality. No page: salons/barbers (already inside `beauty-wellness-clinics`), tutors. Rule: no
industry page without its own doc 03 Part B section and a three-competitor deep dive first.

## 2. Scored table — hypothesis (App. AG.1; founder column blank; re-scored with `03`'s SERPs)

Weights: GHL fit 20 · UK demand evidence 20 · ownable regulatory angle 20 · competition 10 · ticket
size 10 · remote serviceability 5 · clinic overlap 5 · founder affinity 10. Scores 1–5; the weighted
total is out of 100 before the founder's column. Every score cites its evidence or says "assumption".

| Vertical                 | GHL fit | Demand evidence | Regulatory angle | Competition | Ticket | Remote | Overlap | Founder | Weighted (of 90) | Evidence in brief                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------ | ------- | --------------- | ---------------- | ----------- | ------ | ------ | ------- | ------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Veterinary practices     | 4       | 3               | 5                | 4           | 4      | 5      | 4       | —       | 73               | Order made 22 Sep 2026 with website Articles and dates (App. L); "vet clinic marketing agency" surfaced (App. G) and captured on Bing (`bing-0028`, 5/10 UK) and Google (`serp-0065`: 4/10 UK with a local pack, connectedvet.co.uk first, Medium; `vet practice marketing uk` Medium, `serp-0100`; `cma vet price list website` 9/9 UK with a practice's price page second and vetcomply.co.uk fourth, `serp-0101`); deep dive L.2.2: one of three agencies names the CMA, none publishes a price; CMA "less than 40%" statistic; a practice's client data is owners' contact data (assumption on hosting, Q10)                           |
| Trades / home services   | 5       | 4               | 3                | 3           | 3      | 5      | 3       | —       | 68               | Text-back and reviews built for them (App. Q: three UK text-back products target trades); registration display and claims-of-approval rules (App. L.3); "seo for plumbers" family (App. G) — on Bing a guide SERP (`bing-0031`) and 10/10 UK agencies on "plumber marketing agency uk" (`bing-0032`); `missed call text back for plumbers` Medium on Google (`serp-0009`), `local seo services for plumbers` **High** (`serp-0092`) and `seo for plumbers uk` an agency SERP, Low (`serp-0089`); deep dive L.3.1: two of three publish retainers from "£1,000 +VAT", none mentions the CCRs or text-back; CCRs sourced in L.1 and `08` § 2 |
| Garages / MOT centres    | 5       | 2               | 2                | 3           | 3      | 5      | 3       | —       | 56               | Missed-call and MOT-reminder fit (service messages, R08); DVSA rules are physical signage only (App. L.4); no UK autocomplete signal beyond "ai receptionist for garages" itself (App. G), whose Bing SERP is 8/10 UK products (`bing-0029`) and whose Google SERP is 7/8 UK and **High** (`serp-0066`, E1 + E3 + E4 + E5); gov.uk's free reminder is first on "mot reminder text service" on both engines (`bing-0030`, `serp-0067`); deep dive L.4.1: three products at £97–£697 a month, one states the AI disclosure                                                                                                                   |
| Gyms / fitness studios   | 4       | 2               | 3                | 3           | 3      | 5      | 3       | —       | 56               | DMCC subscription regime — the DBT response (2 Apr 2026) says "we anticipate that the regime will commence in spring 2027"; "gym membership marketing" thin (App. G); CMA gym-contract enforcement 2011–2016 now sourced and the DBT response read in full (App. AP: "we anticipate that the regime will commence in spring 2027")                                                                                                                                                                                                                                                                                                         |
| Solicitors / accountants | 3       | 3               | 4                | 3           | 4      | 5      | 2       | —       | 61               | SRA 8.9 limits outbound marketing; Transparency Rules put prices on the website (§ 10 row 7); Leeds hub already argues the price-publication point; email/SMS plan constrained (R41)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Estate / letting agents  | 3       | 3               | 4                | 2           | 3      | 5      | 2       | —       | 57               | Material-information rules on DMCC footing (§ 10 row 8; NTS withdrawal secondary); portal-feed work not the monthly plans; `check-keywords.ts` dropped real-estate deliberately                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Hospitality              | 3       | 2               | 3                | 2           | 2      | 4      | 2       | —       | 46               | FHRS display by nation, allergens, drip pricing to source; entrenched booking platforms (App. Q: "online booking system for restaurant uk" is product intent)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Salons / barbers         | 4       | 3               | 2                | 3           | 2      | 5      | 5       | —       | —                | Already inside `beauty-wellness-clinics` (`audienceType` names beauty salons) — no new page; add "barbers" to that line if wanted                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Tutors                   | 3       | 1               | 2                | 3           | 1      | 5      | 1       | —       | 38               | Low budget, seasonal; DBS position to source; no autocomplete signal captured                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

Recommendation carried from § 4.6: wave 1 vets, trades, garages (garages on fit, not regulation);
wave 2 gyms; wave 3 solicitors, agents; deferred hospitality; no page for salons and tutors.

> **Totals recomputed 24 September 2026 (S4).** The pasted table carried totals that did not follow
> its own formula (Σ weight × score ÷ 5, of 90): vets printed 75, recomputed 73; trades 70 → 68;
> garages 61 → 56; gyms 60 → 56; solicitors 64 → 61; agents 59 → 57; hospitality 48 → 46; tutors
> 42 → 38. The order is unchanged except that garages and gyms now tie, and garages sit below
> solicitors and agents on the rubric — which is why § 5 keeps garages in wave 1 on fit and the
> reminder's service-message status, not on the score. The founder's column (10) can move any of
> them; the brainstorm re-derives the table with that column filled.

## 3. Evidence: the obligations that touch a business website (App. L, read 2026-09-24)

The copy rules derived from this evidence (R43–R53) are in `08-compliance-addendum.md` § 3.

Primary sources unless marked. The Order text below was extracted with `pdftotext` from the gov.uk
PDF (the fetch tool cannot decompress gov.uk PDFs; `C:\Program Files\Git\mingw64\bin\pdftotext.exe`
can — pipe to stdout, do not write files). Article numbers are as printed in the Order; S4 re-reads
the compliance table on the PDF page itself, because `pdftotext -layout` jumbles multi-line rows.

### L.1 Universal — every limited company's website, and every trading website

- **Company, LLP and Business Names (Trading Disclosures) Regulations 2015, Part 6** (App. A):
  reg 24(2) "Every company shall disclose its registered name on its websites"; reg 25(1)–(2): on
  business letters, order forms **and websites**, the part of the UK in which the company is
  registered, its registered number, its registered office address, and (where applicable) that it is a
  limited company; reg 22: the registered name displayed at any location where it carries on business
  (residential premises excepted). Statute; applies to companies and LLPs, not sole traders.
- **Electronic Commerce (EC Directive) Regulations 2002, reg 6**: any information society service
  must make available "the name of the service provider", "the geographic address at which the
  service provider is established", contact details "including his electronic mail address", trade
  register details, supervisory authority where applicable, professional body, title and rules for
  regulated professions, and the VAT number where the activity is subject to VAT; reg 6(2): prices
  must be "clearly and unambiguously" indicated, including "whether they are inclusive of tax and
  delivery costs". Statute; applies to sole traders too.
- **Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013** (read
  2026-09-24; App. AH S110–S115): reg 5 — a "distance contract" is one "concluded between a trader
  and a consumer under an organised distance sales or service-provision scheme without the
  simultaneous physical presence of the trader and the consumer"; an "off-premises contract" includes
  one "concluded in the simultaneous physical presence of the trader and the consumer, in a place
  which is not the business premises of the trader" and one "for which an offer was made by the
  consumer" in such a place. Reg 7(4): Part 2 (the information duties) "does not apply to
  off-premises contracts under which the payment to be made by the consumer is not more than £42".
  Reg 10(1): before an off-premises consumer is bound the trader must "give the consumer the
  information listed in Schedule 2 in a clear and comprehensible manner" plus the cancellation form;
  reg 13(1) the same for distance contracts "in a way appropriate to the means of distance
  communication used"; confirmation on a durable medium before performance begins (regs 12, 16 —
  summarised by the fetch tool; quote on re-read in S4). Reg 29(1): "The consumer may cancel a
  distance or off-premises contract at any time in the cancellation period without giving any
  reason"; reg 30: for a service contract "the cancellation period ends at the end of 14 days after
  the day on which the contract is entered into"; reg 31: if the cancellation information is not
  given the period runs to "12 months after the day on which it would have ended". Reg 28(1)(e): no
  right to cancel for "contracts where the consumer has specifically requested a visit from the
  trader for the purpose of carrying out urgent repairs or maintenance" — but 28(2)(a) keeps it for
  "services in addition to the urgent repairs or maintenance requested". Reg 36(1): "The trader must
  not begin the supply of a service before the end of the cancellation period provided for in
  regulation 30(1) unless the consumer—(a) has made an express request, and (b) in the case of an
  off-premises contract, has made the request on a durable medium"; 36(4) the consumer then pays an
  amount "in proportion to what has been supplied, in comparison with the full coverage of the
  contract"; 36(6) "The consumer bears no cost for supply of the service, in full or in part, in the
  cancellation period, if—(a) the trader has failed to provide the consumer with the information on
  the right to cancel required by paragraph (l) of Schedule 2 … or (b) the service is not supplied in
  response to a request in accordance with paragraph (1)". Reg 6(1)(e) excludes contracts "for the
  construction of new buildings, or the construction of substantially new buildings by the conversion
  of existing buildings" (quoted in L.3.2). **Confirmed 24 September 2026 (S4):** Part 3 carries its
  own floor — reg 27(3) "This Part does not apply to off-premises contracts under which the payment to
  be made by the consumer is not more than £42" — so for an off-premises job of £42 or less neither the
  information duties (reg 7(4)) nor the right to cancel applies; a distance contract has no floor.
  Statute; it bites on every trade quote accepted at the door, by phone, by text or through a website.
- **Consumer Rights Act 2015 ss 49–51** (S116–S118): s 49(1) "Every contract to supply a service is to
  be treated as including a term that the trader must perform the service with reasonable care and
  skill"; s 50(1) every such contract includes "anything that is said or written to the consumer, by
  or on behalf of the trader, about the trader or the service, if—(a) it is taken into account by the
  consumer when deciding to enter into the contract"; s 50(3) the CCRs information "is to be treated
  as included as a term of the contract"; s 51(2) where no price is fixed "the consumer must pay a
  reasonable price for the service, and no more", and 51(3) "What is a reasonable price is a question
  of fact". Statute; s 50 is the reason a website's claims are contract terms (R48).
- **Use:** a "website disclosures" check becomes a fixed item of the free audit and of every build
  and landing page, and a line on every vertical page ("the details the law says your site must
  carry"). Never claim a client's site "is compliant" — say which disclosures are present.

### L.2 Veterinary practices — the Veterinary Services Market Investigation Order 2026

> **Corrected 24 September 2026 (S4).** The Order PDF, the Schedule 1 PDF, the Notice of making and
> the gov.uk page were re-read with `pdftotext` (80 claims checked: 49 verbatim, 27 accurate
> paraphrases, 4 wrong). The four corrections are applied below and marked; the earlier text had put
> the Art. 14 prescription items on the 22 March 2027 date (they are 22 September 2027 for small
> practices), cited cremation as "Part 7" (Part 6, Art. 20) and complaint logs as Art. 21 (Art. 22).
> The Notice of making, not the Order body, carries the 22 September 2026 date. § L.2.1 lists the
> website and CRM obligations the first read had left out.

**Status.** Made 22 September 2026 (gov.uk publication page, "Published 22 September 2026", thirteen
documents); Art. 1(2) "This Order shall come into force on the day after the Order is made"; extends
to the whole UK (Art. 1(3)). The CMA says an "updated explainer on what veterinary businesses need
to do to comply" is coming. The BVA's CMA resource page [S36] links a "Get ready, get compliant" guide
and five "Breaking down the CMA's measures" remedy guides (ownership, prices and services; treatments;
prescribing; complaints; cremation), all fetched on 24 September 2026 and all **member-only** — the
public page says only that "The remedies will be introduced in phases, with full implementation
complete by September 2027" and that "Smaller businesses have longer to comply with the remedies than
larger businesses" [S158]. Nothing in this section rests on them; the Order is the source.

**Definitions (Art. 2).** "'Large Veterinary Business' means a Veterinary Business with 15 or more
FOPs and/or OOH Centres"; "'Small Veterinary Business' means a Veterinary Business with fewer than
15 FOPs and/or OOH Centres". Nearly every independent practice is "Small".

**Compliance dates (Art. 3 table; confirmed row by row on PDF pages 18 and 20 with `pdftotext -table`, 24 September 2026):**

| Obligation                                                                       | Large (≥ 15 sites)                                                                                                                  | Small (< 15 sites) |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Ownership Information (Part 2)                                                   | 22 March 2027                                                                                                                       | 22 March 2027      |
| Practice Information · Price List · Parasiticide Price List · Pet Care Plans     | 22 December 2026                                                                                                                    | 22 March 2027      |
| Written estimates for higher-cost treatments · Itemised bills                    | 22 June 2027                                                                                                                        | 22 September 2027  |
| Pet-owner awareness of written prescriptions; provision; standard flyer (Part 4) | 22 June 2027                                                                                                                        | 22 September 2027  |
| Prescription fees (Art. 18)                                                      | 22 March 2027                                                                                                                       | 22 September 2027  |
| Cremation options and prices (Part 6, Art. 20)                                   | 22 December 2026                                                                                                                    | 22 March 2027      |
| In-house complaint process (Art. 21) · complaint logs (Art. 22)                  | 22 March 2027                                                                                                                       | 22 March 2027      |
| Submission of information to the RCVS Find a Vet platform                        | 3 months from the date the RCVS has fully complied with paragraph 4.1 of its Undertakings, or 22 September 2027, whichever is later | same               |

**The website obligations, quoted:**

- **Art. 4(2)** — information a Part 2 Article puts on a website "must be: (a) easily accessible on
  or via the homepage, with any links to the relevant page labelled in a Clear and Prominent way and,
  unless stated otherwise in the Article, requiring no more than two clicks from the homepage; and
  (b) displayed in such a way that its content is Clear and Prominent." **Art. 4(3)** — for a group
  or network, on "the individual website for the FOP … or, if there is no such website, on the
  dedicated webpage for that FOP … on the Group's or Network's website".
- **Art. 5(3)–(4), Ownership Information** — displayed "in a Clear and Prominent manner on the
  website of or relating to the Group or Network or the Main Entity and of each FOP"; and the Main
  Entity's name or the group's Trading Name must "(a) appear on the homepages … in a Clear and
  Prominent manner, including the top website banner where available; (b) be included within the
  metadata of all webpages on each website …, including metadata used by general search services
  and others; (c) appear in both paid-for and organic search engine results in a Clear and Prominent
  manner; and (d) appear in online map results". **Art. 5(5)** excuses (c) and (d) where the business
  cannot directly control the results, "provided that they have made all reasonable representations
  to, and requests of, the person who does control those matters". **Art. 5(6)** — premises and
  storefront signage.
- **Art. 6(1), Practice Information** — "publish the Practice Information on the website relating to
  each FOP, OOH Centre or Referral Centre", display it at the premises, and update it "as soon as
  reasonably practicable and in any event within one week of any change" (6(1)(c)).
- **Art. 7(3)–(5), Price List** — "(a) publish a Price List on the website relating to each FOP, OOH
  Centre, Referral Centre and Crematorium that it operates"; "(c) when sending the first of any digital
  communications to a Pet Owner to confirm a consultation booking, include in that communication: (i)
  the price the Veterinary Business will charge for the consultation; and (ii) a link to the webpage
  where the Price List is published"; **7(4)** the online Price List "must be: (a) accessible in a
  maximum of one click away from the homepage of the website; and (b) hosted on a webpage which uses
  the terms 'price', 'prices', 'pricing' or 'fees' in page navigation information and page metadata";
  **7(5)** update the list "before any revised price is charged"; **7(7)** say on the website where a
  scheduled service is referred to a third party. **Schedule 1** lists the **36** items in five
  categories (consultation and preventative care 12; prescription, dispensing and administration 6;
  surgeries and treatments 6; diagnostics and laboratory tests 9; end-of-life care 3), several with
  required extra information — "Standard appointment duration in minutes", "Hyperlink to further
  information on the practice website about plan inclusions", pricing-basis notes for asterisked
  items, and third-party details for double-asterisked items (Arts 7(2)(e), (i), (j)).
- **Art. 8(1), Parasiticide Price List** — "publish on the website relating to the FOP: (i) the
  Parasiticide Price List; (ii) a link to the VMD Register of Online Retailers".
- **Art. 9, Pet Care Plans** — the "Quantified Savings Claim" and "General Savings Claim" definitions
  cover statements "on any website it operates"; 9(3)(a) "publish the Pet Care Plan Standard
  Information on the website relating to the FOP, by publishing that information on the main page that
  provides visitors to the website with information about Pet Care Plan(s)".
- **Art. 14(3)–(4), written prescriptions** — "display the digital version of the RCVS Written
  Prescription Literature in a Clear and Prominent manner on the website relating to each of its FOPs
  … and the website of the Veterinary Business", "accessible within a maximum of two (2) clicks from
  the homepage"; 14(5) updates within one month of RCVS notice; 14(11) the Standard Electronic Message
  "Written prescriptions are available. See the RCVS website for further information."; 14(12)–(14)
  the Invoice and Receipt Notification text in the footer of every invoice or receipt for medication.
- **Art. 21, in-house complaint process** — a written process that tells owners "that Pet Owners have
  a right to complain and how they can complain", the ten-working-day informal stage, written
  acknowledgement, and the eight-week resolution window; complaint logs are Art. 22 (Schedule 4 is
  the submission format under Art. 22(3)(a)).

**Also in force for vets:** RCVS supporting guidance ch. 23 (page updated 8 Oct 2025) — 23.15 "All
advertising should be accurate, truthful, and not of a character likely to bring the profession into
disrepute"; 23.45 comparative claims "should have regard to section 3 of the CAP Code"; 23.28
"specialist"/"advanced practitioner" in a practice name only with "genuine and meaningful
involvement, and oversight, in case management by at least one RCVS specialist"; 23.18 "Veterinary
Hospital" only if PSS-accredited at that level; 23.35–23.36 endorsements "underpinned by sound
scientific principles or … a recognised evidence base".

**Sourced statistic usable in copy (attributed, dated):** the CMA's news release of 24 March 2026
states "Less than 40% of practices have prices on their websites".

**What WebAsk can sell to a practice (all deliverable remotely, all dated):** a price page one click
from the homepage, with "price", "prices", "pricing" or "fees" in the page navigation and page
metadata (Art. 7(4)(b) — the URL itself is not prescribed), carrying the 36 Schedule 1 items with
appointment durations and VAT-inclusive prices (Art. 7(2)(f); reg 6(2) above also applies); for a group
or network business only (Art. 5(1)(a)) the group or trading name in the homepage banner and in every
page's metadata; a Practice Information page; the
parasiticide list with the VMD link; the pet-care-plan page carrying the Standard Information with
savings claims written to Art. 9; the RCVS prescription literature within two clicks; a complaints
page written to Art. 21; and — **a CRM item that belongs in the bundle** — the first booking
confirmation email or text carrying the consultation price and the price-list link (Art. 7(3)(c)).
Wave-1 confirmed; the compliance clock for small practices runs to 22 March 2027 on the Part 2
website items, the end-of-life options page and the complaints page, and to 22 September 2027 on the
RCVS prescription literature and the Standard Electronic Message.

#### L.2.1 Further website and CRM obligations in the Order (S4 re-read, 24 September 2026)

Quoted from the Order PDF; none of these was in the first read, and each changes what a compliant
practice website or booking flow must contain. Articles as printed.

- **The price page's content is prescribed, not just its position.** Art. 7(2)(a): items "are
  described using the names for each that are specified in the Price List Schedule, and the list does
  not use free text to describe those treatments and services"; 7(2)(c) where price varies by animal,
  the bands "(i) cat; (ii) small dog (<10kg); (iii) medium dog (10 to <25kg); (iv) large dog (25 to
  <40kg); (v) extra-large dog (40 to <60kg); and (vi) giant dog (60kg and over)"; 7(2)(e)(ii)
  checkboxes on the dental, castration and spay rows that "clearly indicate which of the components
  … are included in the price for the treatment and which are not"; 7(2)(f)–(g) "prices displayed on
  the Price List include VAT" and "are up to date"; 7(2)(h)–(k) out-of-hours prices alongside, or a
  link to the OOH provider's price list, and cremation "provided communally and individually" with a
  link where a third party supplies it; 7(2)(l) a "clear statement informing Pet Owners that the prices
  displayed … relate to the typical case and that prices may increase in more complex or complicated
  cases".
- **Pet-care-plan pages carry substantiation.** Art. 9(4): a plan containing parasiticides must "(a)
  provide a link to the Parasiticide Price List", "(b) identify which Parasiticides are included",
  "(c) include a statement advising Pet Owners to speak to their Veterinary Professional or a Suitably
  Qualified Person" and "(d) provide an indicative standalone price for 12 months of Parasiticides"
  that "does not name any specific medicinal product" and "includes any dispensing fees". 9(5)–(8): a
  Quantified Savings Claim carries the Art. 9(7) information "in the same place as it makes such
  claim"; a General Savings Claim needs "a link to a webpage … that displays the information specified
  in Article 9(7)". 9(12): "Where a Pet Owner has an annual Pet Care Plan which automatically renews,
  the Veterinary Business must send a reminder to the Pet Owner before the renewal takes effect" — a
  CRM item.
- **The page URLs are registered with the RCVS.** Art. 10(1)(f): each practice supplies "the public
  URL for each of the webpages on which the Veterinary Business has published the information referred
  to in Article 10(1)(b) to (e)" through "the Find a Vet Web Form"; 10(5)–(6) price changes are
  notified "before the revised price is charged to Pet Owners". A rebuild that moves the price,
  parasiticide, practice-information or pet-care-plan pages must keep or re-register those URLs.
- **The Standard Electronic Message has a trigger.** Art. 14(10): it is "included in any email, text
  message or other electronic communication sent by or on behalf of the Veterinary Business to a Pet
  Owner in respect of an upcoming consultation at a FOP" — every confirmation and reminder the CRM
  sends, from 22 September 2027 for small practices.
- **An end-of-life options page.** Art. 20(3)(a): "publish the End-of-Life Care Options, which must
  include a Basic Communal Cremation Service offered by the Veterinary Business, on the Veterinary
  Business's website for that FOP or OOH Centre"; 20(4): each option "must be set out with equal
  prominence on the Veterinary Business's website(s)". The options (20(1)) are communal or individual
  cremation from the practice, to "make separate arrangements with a Crematorium", and to "take their
  deceased Pet away for burial at home". Small practices: 22 March 2027.
- **Complaints reach beyond the page.** Art. 21(3): reception signage "stating that the Complaint
  Process is available on the relevant website and in hard copy on request"; at registration "a link
  to an online version of the process"; "(e) include on invoices to the Pet Owner information on where
  the Complaint Process can be found"; "(i) display the Decision Tree in prominently placed signage in
  the FOP's or OOH Centre's reception and on the website relating to that FOP or OOH Centre"; the
  process names "the approved ADR provider" (21(2)(i)).
- **Group name, everywhere and at equal prominence (groups and networks only).** Art. 4(6)–(8): "Pet
  Owner Communications" include "advertising and marketing materials", social media, "appointment
  confirmations" and "newsletters", with "a physical paper copy available upon request"; Art. 5(7):
  "The Ownership Information must be displayed in a Clear and Prominent manner in Pet Owner
  Communications"; Art. 5(8): the name must be "at least equal in prominence to any other names
  published or displayed with it", judged on "the size and legibility of the respective names, their
  proximity to one another, the hierarchy of the text used to denote them, their positioning, the
  colour schemes, the typography and any other stylistic elements", and "unambiguously clear … that
  the name … is the name of that Main Entity … and not a mere description of a business". Art. 2,
  "Clear and Prominent": "not obscured by … pop-up text and images; or … trademarks, Branding or
  marketing straplines".
- **Definitions that fix page content (Art. 2).** Practice Information includes the qualifications of
  long-term Veterinary Professionals, PSS accreditations "including a web link to supporting
  information for Pet Owners about the PSS on the RCVS website" and, for outsourced out-of-hours, the
  provider's "Trading Name … telephone number(s) … website address … address(es) … opening times … and
  … details of the OOH Services"; the Parasiticide Price List gives per product "the full authorised
  product name; the brand name; whether or not the Parasiticide is an Own Brand Medicine; the active
  ingredient(s); the amount …; the strength and dosage size", additional charges and "the amount payable
  in VAT".
- **Dated duties that are not website items but sit on every practice.** Art. 26(1): supply the RCVS
  "by 30 November 2026" the registered or company name, Trading Name, head-office address, a named
  compliance contact and "the name, and postal and email addresses, of each FOP, OOH Centre,
  Crematorium and Referral Centre it operates"; Art. 3(2): 30 days to bring an acquired practice into
  compliance; Art. 24: multi-site businesses file Initial Attestations "within 30 days of the applicable
  Compliance Date" and Annual Attestations "no later than 30 September 2027"; Art. 25(4): self-report
  non-compliance "within 14 days of becoming so aware".

> 💡 Proposal (executor) — three things this changes for the drafts: the vets industry page and the
> calendar's item 8 add the end-of-life page, the invoice complaints line and the 30 November 2026
> RCVS return; the bundle's CRM playbook for vets gains two dated templates (the renewal reminder,
> Art. 9(12); the Standard Electronic Message on every confirmation and reminder, Art. 14(10)); and the
> price-page brief becomes the Schedule 1 names with bands and checkboxes, not a designed table. S7
> applies them; `08` § B10 records the rules.

#### L.2.2 Three-competitor deep dive — veterinary practices (read 24 September 2026)

Chosen by rank on `vet clinic marketing agency` (`bing-0028`, 5/10 UK; on Google, `serp-0065`, connectedvet.co.uk is first and a local pack sits on the term): vetgrowth.co.uk (#1), vetboost.co.uk (#4) and connectedvet.co.uk (#10 — the
only one that names the CMA on its pages). Three pages each by `curl`, token counts from the stripped
HTML; every cell is what the page says.

| Agency (representative URL)                                                                 | Positioning (verbatim)                                                                                                                                                        | Pricing                                                                                                                                                                              | Delivery model (words on the page)                                                                                                                                                                                                                        | CMA / Order on the page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vet Growth (Lodestone Marketing Ltd) — `https://www.vetgrowth.co.uk/`                       | "Vet marketing \| Veterinary marketing" (H1); strap "Unlock up to x20 Return on Investment on your veterinary marketing"                                                      | **Hidden** — no service price; "up to £20 return for each £1 spend" is a claim, not a price; VAT not stated                                                                          | Done-for-you: "We're not consultants. We don't just say what you should be doing, we do it all for you"; "our initial veterinarian marketing discussions are always FREE"; "our strictly limited number of practice owners"                               | **Nothing** — CMA, "Competition and Markets Authority", Order, "price list", RCVS, prescription, transparency all 0 on four pages; nearest framing: "as 'veterinary' private equity increases its geographical footprints by buying more veterinary practices"                                                                                                                                                                                                                                                                                                |
| VetBoost — `https://www.vetboost.co.uk/`                                                    | "Marketing that fills the diary" (H1); hero "Google Ads, new practice launches, and websites for UK and Ireland vets — from a marketer who's run practices, not just slides." | **Hidden** — no £ figure; "all at very reasonable prices"; "a FREE no-strings-attached marketing audit"; VAT not stated                                                              | Retainer and managed: "Growth retainers / planning — Ongoing marketing support and annual planning."; "We manage the account. You keep clinical focus."                                                                                                   | **Nothing** — every vet-specific token 0 (the three "Order" hits are "in order to")                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Connected Vet — `https://www.connectedvet.co.uk/products-and-services/cma-gdpr-compliance/` | "Helping independent vet practices thrive through smarter digital marketing" (H1); compliance page H1 "CMA & GDPR Compliance Made Practical"                                  | **Hidden** — no £ figure on any page; "competitive pricing"; the "complete Compliance Pack" is sold on contact ("Purchasers will receive updates"), price not stated; VAT not stated | Managed and hosted: "we handle your hosting, domain management, and technical maintenance"; "a bespoke design or our user-friendly VetWeb platform"; "Our ready-to-use compliance products, proven implementation frameworks and experienced consultants" | **Yes — a named product.** "Implement the CMA remedies with confidence using Connected Vet's practical Compliance Pack"; nav "CMA and GDPR Compliance"; CMA ×7 and GDPR ×5 on the compliance page. Its free PDF ("Connected Vet's CMA Compliance Pack 2026") is built on "the CMA's final remedies, published in March 2026, and will continue to evolve as the Orders are finalised" — i.e. on the report, not on the Order made 22 September; its dates ("2b. Price lists … Dec 2026–Mar 2027"; "4a. Written estimates … Sep 2027") match the Order's table |

**Counted across the pages reached (24 September 2026):** PECR, ICO, DMCC, TPS, Ofcom, consent,
opt-in and opt-out are 0 on every page of all three; GDPR appears only on Connected Vet (2–5 per
page); "price list", RCVS and "prescription" appear on none of the HTML pages (Connected Vet's PDF
carries "price list" ×9 and "prescription" ×7). VAT is stated by none; a company number by one (vet
Growth, on its testimonials page: "registered in England and Wales under company number 07629264");
an ICO registration by none. **Proof:** vet Growth — seven testimonials, every one "Independent
Veterinarian Partner \*" with "Names and practice details will be shared at your 1st meeting"; VetBoost
— one named press quote ("Nicky Paull / Kernow Vet Group") and "Ask us for recent Google Ads examples";
Connected Vet — 14 practice logos, one named testimonial and one named case study ("Partridge
Practices"), "helped over 100 veterinary businesses" unsourced.

**What this changes for the vets page (App. AA), the calendar's item 8 and `08` § B10.** (1) The
compliance angle is **not unclaimed** in this vertical: Connected Vet sells a Compliance Pack and an
Academy, and ranks on the head term. WebAsk's page cannot claim to be first; it competes on being
**Order-accurate and dated** — Article numbers, the Art. 3 dates by business size, the L.2.1 items
(Schedule 1 names, the "typical case" statement, the end-of-life page, the Standard Electronic
Message trigger, the RCVS URL registration) — where the Pack's public PDF cites the March report and
promises to "evolve as the Orders are finalised". (2) Two of three vet-marketing agencies say nothing
about the Order at all, five weeks after it was made; the CMA's "Less than 40% of practices have
prices on their websites" (24 March 2026) stands as the demand statistic. (3) No agency publishes a
price; the vets ladder in `07` is the only published one on this SERP if it ships. (4) The bounded
sentence for copy: "We read three UK vet-marketing agencies that rank for 'vet clinic marketing
agency' on 24 September 2026. One named the CMA's remedies on its pages; none published a price or
stated how VAT applies." Never name the Pack in copy, and never say "first" or "only".

### L.3 Trades and home services

- **Gas Safe Register — Brand Enforcement Policy, P001_BEP001 v5.0, November 2017** (the same PDF,
  read in full with `pdftotext` on 2026-09-24; S119). § 3.1: "Businesses who are registered with Gas
  Safe Register have, through the act of registering and being accepted onto the Register, been
  granted a non-exclusive licence to use the appropriate brand in accordance with the published Brand
  Guidelines. Only registered gas businesses are permitted to display the appropriate Gas Safe
  Register brand and/or a Gas Safe registration number and these can only be used in association
  with the registered trading name." § 3.4: a business that does not carry out gas work needs "a
  written and signed non-exclusive brand licence agreement". § 4: "Failure to comply with the Brand
  Guidelines, by a registered business, will be considered as a breach of the Rules of Registration
  and appropriate action will be taken by CGRAS in accordance with GSR's Sanctions Policy";
  "enforcement action will be taken by CGRAS against any third parties using or suspected of using
  the trademarks in any advertising material without an appropriate licence"; and the note:
  "Marketing/advertising material is a form of communication used to promote or sell a business'
  services or product e.g. websites, adverts, vehicle signage, business stationery, social media,
  online website directories, flyers, advertising hoards etc." **Modality correction:** the line
  carried since planning day one — "the registration number must accompany the logo" — is not in
  the policy; it was the fetch summariser's paraphrase, twice. The policy's own rule is the § 3.1
  sentence (brand and number only with the registered trading name, per the Brand Guidelines, which
  were not fetched). R50 replaces R45's wording. The Rules of Registration (October 2024, v9.0,
  found by search) returned 404 on 2026-09-24 (S120) — locate from the register's policies page in S4.
- **Superseded planning note (summariser paraphrase, 2026-09-23 — kept for the record):** the Brand
  Enforcement Policy PDF (gassaferegister.co.uk; version and date
  not captured — quote it in S4): the registration number must accompany the logo in advertising
  including websites; website use should carry the logo, the registration number and a working link
  to the register; misuse includes use without current registration or without the number, and is
  enforced in stages up to removal. The Rules of Registration PDF link found by search returned 404 —
  find the current one from the register's site. Consumers verify on the register's "check an engineer".
- **Competent person schemes (GOV.UK, S125–S126, S129):** "You do not need to get approval yourself
  if you use someone registered with a competent person scheme"; registered installers "self-certify
  that their work complies with building standards" and "tell your local authority about work on your
  behalf"; the customer receives "a certificate within 8 weeks of completion which can be used as
  evidence of compliance"; "Without approval you will not have the certificates of compliance you may
  need when you want to sell your home". Examples on the page: "windows or boilers", and an Electrical
  Competent Person Register for electricians. Use: a trades site names the scheme the business is
  registered with and says the customer will receive the certificate; never "building regulations
  approved" as a bare claim.
- **TrustMark** — logo-misuse page: "an increasing number of tradespeople and their firms
  advertising themselves as being TrustMark registered when they are NOT"; misuse "on their websites,
  vans and marketing materials"; verification through "Find a Business"; on misuse TrustMark notifies
  the business twice, then "the local Trading Standards office who can ultimately prosecute". Logo use
  is permitted only while registered, in the forms TrustMark supplies (business documents page).
- **Claims of approval generally** — a false or unverifiable "registered/approved/accredited" claim is
  a misleading action under DMCC Part 4 Chapter 1 (CMA207 § on misleading actions — cite in S4;
  Business Companion's "Membership logos and claims of approval" guide is the Trading Standards
  summary).
- **Sourced in S4 (24 September 2026):** the Consumer Contracts (Information, Cancellation and
  Additional Charges) Regulations 2013 are quoted in L.1 and in `08` § 2 ("The Consumer Contracts
  Regulations, in detail"); the competent-person conditions and the NICEIC/NAPIT/TrustMark display
  rules were fetched the same day and are recorded in L.3.2 below.
- **Verdict for 06:** medium regulatory angle (registration display, claims of approval, cancellation
  rights) on top of the strongest missed-call fit; wave 1 stands.

#### L.3.1 Three-competitor deep dive — trades and home services (read 24 September 2026)

Chosen by rank on the two trades heads captured on Bing in S4 (`bing-0032` `plumber marketing agency
uk`, 10/10 UK agencies; `bing-0031` `seo for plumbers uk`, 7/7 UK, guide-shaped; both queued on Google
in `03` § 6.11 batches 7–8): plumbersmarketingco.co.uk (#2), bird.co.uk (#1) and seodons.co.uk (#1 on
the SEO head). Three pages each by `curl`; every cell is what the page says. Two method notes: Bird's
live site answered HTTP 403 (a Cloudflare challenge) on ten URLs and two fetch-tool attempts, so its
row is read from two dated Wayback captures (12 April 2026 home; 12 November 2025 plumbing page) and
its pricing pages are blocked even there; SEO Dons is a single-page application whose three routes
return the same 9 KB shell, so its copy and counts are read from the route bundles, not raw HTML.

| Agency (representative URL)                                                                      | Positioning (verbatim)                                                                                                                                                                       | Pricing                                                                                                                                                                                                                                                                                                        | Delivery model (words on the page)                                                                                                             | Trades-specific (verbatim)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The Plumbers Marketing Company — `https://plumbersmarketingco.co.uk/packages/`                   | "Helping Ambitious Plumbers Generate More Leads, Book More Jobs & Grow Their Business." (first H2); hero "We ran Pimlico Plumbers' digital marketing for 8 years before they sold for £144M" | **Published**: "£1,000 +VAT Per month", "£1,500 +VAT Per month", "£1,750 +VAT per month", "£2,500 +VAT per month"; "Minimum Google budget is £1,000 per month"; "google spend over £10k per month is charged at 10%"; "+VAT" on the packages page, not on the home page; contract term not stated              | Monthly packages of Google Ads and Local Service Ads management; "working with just 10 clients and no more than one plumbing company per city" | Gas Safe, NICEIC, TrustMark, Checkatrade, "missed call", "text back", "reviews", PECR, consent, opt-in and opt-out all **0** on home, packages and the case-study page; no address, phone or company number on any page; the home page's testimonial block renders a heading reading "Test content"                                                                                                                                                                                                    |
| Bird Marketing Limited — `https://bird.co.uk/plumbing/` (live site HTTP 403; Wayback captures)   | "Plumbing Digital Marketing Agency UK" (H1); "Top Rated and Award Winning … That Delivers Results"                                                                                           | **Blocked** — the plumbing page prints no £ figure ("Costs vary based on the strategies adopted … PPC costs depend on your ad spend"; "We aim to have pricing available to review within 24 hours"); the pricing routes are challenge pages in the archive too; VAT not stated (VAT number in the footer only) | Quote-based: "GET MY FREE PROPOSAL"; "recurring fees"; nav "Pay Monthly Websites"                                                              | "reviews" ×9 on the plumbing page ("Reputation Building: Encourage positive online testimonials through follow-up feedback emails."); Gas Safe, NICEIC, CCRs, text-back, PECR all 0; "Using a combination of these approaches guarantees consistent lead generation"; the industries list runs to 56 entries, from "Electrician Digital Marketing" to Adult, Casino, Crypto and Cannabis & CBD; four review badges ("4.9 /5 (98 Reviews)" Trustpilot, "4.9 /5 (64 Reviews)" Google, and two more)      |
| SEO Dons Ltd — `https://seodons.co.uk/seo-for-plumbers` (single-page app; copy from the bundles) | "Be the First Plumber Customers Find in an Emergency." (H1); pricing H1 "Transparent Pricing. Real Results."                                                                                 | **Published ranges**: "£2,000-3,000/month", "£3,500-5,000/month", "£5,000-15,000/month", each "Price locked for 12 months"; home "Monthly investment from £1,500." and "£0 Setup Fees"; "No. We work on rolling monthly agreements … If you're not happy, you can leave."; VAT not stated                      | Monthly retainer: "Your retainer covers everything."; "The first month IS the setup"; "One Plumber Per Region"; "All leads exclusive"          | Gas Safe ×12 on the plumber page — "Your Gas Safe registration number should appear prominently on your homepage, contact page, and Google Business Profile. It is both a direct keyword opportunity and a major E-E-A-T trust signal"; TrustMark ×1; review requests: "a text message sent 24-48 hours after job completion with a direct review link"; "Can you guarantee specific rankings? No -- and any agency that does is lying."; CCRs, text-back, PECR, consent all 0; "Company No. 16766013" |

**Counted across the pages reached (24 September 2026):** PECR, ICO, GDPR, DMCC, TPS, Ofcom,
consent, opt-in and opt-out are 0 on every page of all three (the cookie-banner templates excluded);
"missed call" and "text back" appear on none; the Consumer Contracts Regulations and cancellation
rights appear on none; Gas Safe appears on one (SEO Dons, as an SEO signal, with the registration
number "prominently on your homepage" — the same display rule L.3 sources from the register); VAT is
stated on one packages page ("+VAT"); a company number by two (Bird, SEO Dons); an ICO registration
by none. **Proof:** Plumbers Marketing Co — two named testimonials (Pimlico Group; Quantum
Electricians & Plumbers), one named case study ("44% increase in lead volume year-over-year", no
source) and a client cap stated four ways ("ONLY 10", "10-15", "15 - 20", "once we have 10 clients");
Bird — three initials-only testimonials, six named case studies none of them plumbing, "100+ Projects
Delivered"; SEO Dons — six named testimonials and nine named case studies "in Adjacent Trades" (solar,
electrical), figures from its own case studies ("537 calls generated"), and "31 Active Clients" on
the home page against "We have 7 active clients right now" in the pricing FAQ.

**What this changes for the trades page (App. AM) and `08` § B11.** (1) The vertical's SERP is the
most crowded of the three — ten UK agencies in ten on the Bing head, retainers from "£1,000 +VAT" to
"£5,000-15,000/month" — so the page does not enter on "plumber marketing agency"; it enters on the
two things none of the three sells: the sub-£200 missed-call and reviews plan for a one-van business
(Set B's text-back products already price that band, `04` § 3 Q.1) and the compliance items — Gas
Safe and Part P registration display, claims of approval, and the CCRs on a quote accepted at the
customer's door or by text. (2) "Gas Safe number on the homepage" is already sold as an SEO signal by
one agency; WebAsk states it as the register's rule first and the ranking effect second, with the
"approved/accredited" boundary (`08` R44–R46 as drafted). (3) Exclusivity ("one per region", "no more
than one plumbing company per city") is the vertical's selling convention; the bundle's support caps
(Q26) can be stated in the same shape without a territorial promise. (4) Published, VAT-stated retainers
exist here (Plumbers Marketing Co), so the two-part display with "+ VAT where applicable" is the
market's shape, not a novelty. Bounded sentence for copy: "We read three UK agencies that rank for
plumber marketing on 24 September 2026. Two published a monthly price; none mentioned missed-call
text-back, the cancellation rules that apply to quotes accepted at the customer's home, or PECR."

#### L.3.2 Registration display and the competent-person conditions — what the primary documents say (S4, 24 September 2026)

Fetched with `curl` on 24 September 2026 (legislation.gov.uk "made" text; the DCLG conditions PDF;
the NAPIT scheme rules PDF; TrustMark's brand guidelines PDF; NICEIC's public pages). The honest
result narrows the draft: **no scheme publishes a rule that a registration number must be displayed
on a website.** The enforceable duties are claims-of-approval limits, Gas Safe's own rules as quoted
above, and the CCRs.

- **CCRs — the provisions L.1 did not yet quote.** Reg 10(2): the off-premises information "and any
  cancellation form must be given on paper or, if the consumer agrees, on another durable medium and
  must be legible"; reg 10(5) and 13(6): information the trader gives "is to be treated as included as
  a term of the contract"; reg 12(1), (3), (4)(b): for an off-premises contract "a copy of the signed
  contract, or … confirmation of the contract", "on paper or, if the consumer agrees, on another
  durable medium", and "before performance begins of any service supplied under the contract" (reg
  16(1), (4)(b) the same for distance contracts, "on a durable medium"); reg 29(2): "The cancellation
  period begins when the contract is entered into"; reg 31(2): where the cancellation information is
  given late but within 12 months, "the cancellation period ends at the end of 14 days after the
  consumer receives the information"; reg 36(2): the right is lost once "the service has been fully
  performed, and performance of the service began — (a) after a request by the consumer in accordance
  with paragraph (1), and (b) with the acknowledgement that the consumer would lose that right once the
  contract had been fully performed by the trader"; reg 32(3): the consumer may cancel with "a form
  following the model cancellation form in part B of Schedule 3, or (b) … any other clear statement"
  (Schedule 3 is served as three images on legislation.gov.uk; reg 37 is digital content, not the
  form); reg 27(3): "This Part does not apply to off-premises contracts under which the payment to be
  made by the consumer is not more than £42" — Part 3 carries its own £42 floor, which closes the
  question left open in L.1 and `08` R47; reg 6(1)(e) excludes contracts "for the construction of new
  buildings"; enforcement is **Part 6** (not Part 5, which is "Delivery and risk"): reg 44(1) "It is
  the duty of an enforcement authority to consider any complaint made to it about a contravention of
  these Regulations", 44(3) "every local weights and measures authority in Great Britain", 45(1) "An
  enforcement authority may apply for an injunction … against any person who appears to the authority
  to be responsible for a contravention". The only pending amendment (DMCC Act 2024 s. 279(5)–(6), not
  in force) excludes subscription contracts and does not touch the floor.
- **Competent-person conditions of authorisation (DCLG, April 2016, 8 pp.).** Every condition binds
  the scheme operator, none the installer's marketing. Nearest: condition 15, the operator publishes
  registration lists "so as to allow consumers … to check if an installer is registered with a
  scheme"; condition 18, registrants "remain responsible for ensuring that all work within the scope
  of the scheme … is compliant with the Building Regulations"; footnote 5, registrants' work "refers to
  work that falls within the scope of the scheme". (The gov.uk URL in the planning file, singular
  "scheme", returns 404; the live page is `…/competent-person-schemes-conditions-of-authorisation`.)
- **NICEIC.** Logo rules are member-only: "our branding is safely kept under lock and key and can only
  be accessed by those who have earned the right to use it. If you are certified by NICEIC, you can
  download our full asset pack via your customer portal" (blog, 5 May 2023); the logo is a Certsure LLP
  trade mark, "You are not permitted to use it without our approval" (terms of use). No public rule on
  displaying a registration number.
- **NAPIT (Scheme Rules NAP/REQ/010 v2.0, April 2026).** 8.1: a "non-exclusive license to use the
  NAPIT logo and NAPIT trademarks in relation to certification and/or registration … provided that
  such use is limited to the Company's scope of certification"; 8.4: the right "is conditional upon
  maintaining certification"; 8.5: "must comply with the published Brand Identity Guidelines"; 10.2:
  "must not make any false or misleading claims regarding its certification scope or status". No
  registration-number display rule.
- **TrustMark (Brand Guidelines V1.2, May 2024; member-benefits page).** Artwork rules only ("The
  original artwork must always be used", "The TrustMark logo cannot be used within copy or
  headlines."); the benefits page invites display "on your letterheads, marketing material, website
  and vehicles". No licence-number display rule.

**Consequence for the trades page (App. AM) and `08` § B11.** The "registration display" wedge as
drafted over-promised: the page can require (a) claims of approval only within scope and only while
registered (NAPIT 8.1, 8.4, 10.2; TrustMark's logo-misuse page; the CPRs on false approval claims,
L.3 above), (b) Gas Safe's own rules as quoted in L.3, and (c) the CCRs' information, form,
confirmation and express-request duties on every quote accepted at the door or by text — but it must
not tell a NICEIC or NAPIT contractor that a rule obliges them to print a number on the site. S5
re-reads R44–R46 against this; S7 re-reads App. AM's registration paragraph and the trades FAQ.

### L.4 Garages and MOT centres

- **DVSA MOT testing guide, Appendix 2 (updated 22 September 2026)** — the three-triangles sign
  "must be displayed in a prominent position, no part higher than 4.5m from the ground and no more
  than one sign on each road frontage"; "the current MOT test fees and appeals poster (VT9A) …
  the details of how to contact DVSA" on a notice board with "a protective transparent covering";
  **nothing about websites or online use of the MOT logo.**
- **DVSA MOT testing guide, section D "Requirements for authorisation" (page updated 22 September
  2026; read 2026-09-24; S121):** no paragraph on advertising MOT tests, the logo online, websites or
  social media — the guide's only display rules are the physical ones in Appendix 2 above. The
  garages page says so plainly: DVSA's rules stop at the forecourt.
- **GOV.UK "Get MOT reminders" (S122):** "get free MOT reminders by text message or email", sent
  "one month before your car, van or motorcycle MOT is due" and "2 months before your lorry, bus or
  large trailer MOT is due". A garage's own reminder competes with a free government one; it earns
  its place with the booking link and the price, and it stays a service message only while it
  carries no offer (R52).
- **The Motor Ombudsman — Motor Industry Code of Practice for Service and Repair (issued 1 June
  2025; CTSI-approved; read via `pdftotext` 2026-09-24; S123–S124):** cl. 1.1 advertisements "will
  not contain any content which is likely to mislead you or be misunderstood"; 1.2 they "will comply
  with the requirements of applicable legislation along with the Codes, regulations and rulings of
  relevant organisations or associations"; 1.3 "Any price quoted will be inclusive of VAT where
  applicable, and cover any additional charges such as environmental disposal costs"; 1.4 "Guarantee"
  or "Warranty" only where "the full terms of that Guarantee or Warranty are set out clearly within
  the advertisement or in writing before you commit"; 2.8 an Estimate is "a breakdown of costs to be
  provided in writing, as a general guide to the cost of the Work required (which could go up or
  down) and be inclusive of all parts, labour and VAT where appropriate" and "will clearly state that
  it is an Estimate"; 2.9 a Quotation is "the firm agreed price to complete the Work requested …
  inclusive of all parts, labour and VAT (where appropriate)"; 2.10 no deposits or prepayments
  "unless the parts required for the Work are bespoke"; 2.11 "High-pressure selling techniques will
  not be used"; 4.1 prices "clear and inclusive of parts, labour, VAT, and any other additional
  charges"; 4.2 "the final Invoice should match the Quotation unless the Accredited Business has
  informed you that further Work or time has been required and you have authorised these additional
  costs"; 8.2 a complaints arrangement "suitable for all Consumers, including Vulnerable Consumers
  and those that do not have digital access"; 8.3 accreditation shown "by prominently displaying
  appropriate signage"; 8.6 the final response says "how to refer your complaint to The Motor
  Ombudsman"; 8.9 a final response in "no longer than eight weeks". Binding on accredited garages
  only (the code page, updated 1 June 2025, says "thousands of businesses across the UK"); the CRA
  2015 and the CCRs in L.1 bind every garage. A search summary of the sponsor's garages page says
  accredited garages may use the Motor Ombudsman and CTSI Approved Code logos "on literature and
  websites" — verify on that page in S4 before the copy relies on it.
- **Superseded "to source" note (kept for the record):** DVSA's rules on advertising MOT tests and
  the MOT logo online (the guide's
  section D, "Requirements for authorisation"); The Motor Ombudsman codes; Consumer Rights Act 2015
  on estimates and quotes.
- **Verdict for 06:** the regulatory angle is thin online; garages stay wave 1 on missed-call and
  reminder fit (MOT and service reminders are the textbook service message under R08), not on
  compliance. Say so in 06 rather than inflating it.

#### L.4.1 Three-competitor deep dive — garages and MOT centres (read 24 September 2026)

Chosen by rank on `ai receptionist for garages` (`bing-0029`; on Google, `serp-0066`, the term is 7/8 UK and High, with electronicreceptionist.co.uk first and receptionmate.co.uk advertising): garagereceptionist.co.uk (#2–#3), electronicreceptionist.co.uk (#1) and
bayassist.co.uk (#10, the only one with a published all-in price). Three pages each by `curl`, token
counts from the stripped HTML; every cell is what the page says.

| Provider (representative URL)                                                                       | Positioning (verbatim)                                                             | Pricing                                                                                                                                                                                                                                                                                 | Stack (as stated)                                                                                                           | AI disclosure · recording · hand-over (verbatim)                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Garage Receptionist — `https://garagereceptionist.co.uk/` (plans on the home page; `/pricing/` 404) | "AI Garage Receptionist For UK Garages & Mobile Mechanics" (H1)                    | **Published**: "£159/mo" + "£249 setup"; "£279/mo" + "£499 setup"; "£449/mo" + "£899 setup"; uplifts "+£79/mo", "+£149/mo"; extras "+£39/mo", "+£29/mo", "+£249 one-time"; VAT not stated; "Subscriptions renew monthly unless cancelled"; "Either party may cancel on 30 days' notice" | "Services by Cartcom. Powered by UKGB.ai."; "a live DVLA-grade VRM, MOT and tax check"; no voice platform, CRM or DMS named | Disclosure **not stated**; the usage terms shift it to the garage: "You are responsible for any legally required caller notices about recording, transcription, AI assistance, or data processing." Hand-over: "It politely takes a message with the full job detail and flags it for you to call back."                                                                                                                                          |
| Electronic Receptionist — `https://www.electronicreceptionist.co.uk/plans` (apex host HTTP 525)     | "AI Receptionist for UK Garages, MOT Centres & Workshops" (H1)                     | **From-price**: "Start from £97/month."; "Plans start from £97/month and scale with the level of automation your workshop needs."; no tiers printed; VAT not stated; "start your 14-day free trial"; "No contracts. No complexity. Just more bookings."                                 | "can integrate with your existing workshop software and garage management systems"; none named                              | Disclosure **not stated**; recording: the garage receives "Full call transcript or recording", no caller-notice statement. Hand-over not stated ("You simply review the enquiry and confirm the booking.")                                                                                                                                                                                                                                        |
| BayAssist — `https://bayassist.co.uk/pricing`                                                       | "Nobody here has retyped an invoice in a month." (H1); "Built for UK MOT garages." | **Published, one price**: "£697 a month"; "£797 one-time setup."; "One price, everything included."; VAT not stated; "No contract, 30 days notice."; demo: "Ring the demo garage on 01952 767 010 and book a fake MOT yourself."                                                        | "It checks the DVSA database as the caller speaks"; "we act as your data processor under a written DPA"; own workshop board | **Stated** (FAQ): "It never pretends to be human. Callers hear a recording disclosure at the start of every call, and if anyone asks, it says straight out that it is an AI assistant."; home: "No human will answer." Hand-over: "when someone genuinely needs a person, it transfers to the workshop, or takes the details and logs a callback"; "after two failed attempts at a detail it stops and arranges a callback rather than guessing." |

**Counted across the nine core pages (24 September 2026):** PECR, ICO, GDPR, DMCC, TPS, Ofcom,
opt-in, opt-out, "call recording", "Motor Ombudsman" and "Code of Practice" are **0 on every page of
all three**; "consent" appears once (Garage Receptionist's usage terms); "DVSA" appears only on
BayAssist; VAT is stated by none; a company number and an ICO registration are shown by none.
**Reminders:** Garage Receptionist "MOT reminder campaigns are included on the Pro plan"; Electronic
Receptionist can "send MOT reminders up to a year in advance"; BayAssist sends confirmations and
"Advisories captured at the test and chased before they become failures". None mentions consent for
the reminder or the DVSA's free MOT reminder service. **Proof:** Garage Receptionist — one unnamed
testimonial, "200+ customer reviews" qualified on the page as relating to "Cartcom's technology support
services", "1 in 3 Workshop calls go unanswered" and "£180+ Average value of a missed booking
enquiry" unsourced; Electronic Receptionist — two first-name testimonials ("Dave, Birmingham Garage
Owner"; "Liam, Warwickshire MOT Centre"), no figures; BayAssist — three quotes from a named person
and garage ("Andy, AutoFix Telford, recorded 13 May 2026") with counted figures from "our first
garage" ("103 invoices", "24 bookings … 14 of them" on 21 August) offered as "Checkable at the
counter, any visit".

**What this changes for the garages page (App. AN) and `08` § B12.** (1) The receptionist is not
the wedge — the micro-niche has three UK products at £97–£697 a month, and the SERP (`bing-0029`) is
8/10 UK — so the page leads on the reminder, the Code and the forecourt rules as drafted, and places
the receptionist as a plan inside the bundle. (2) The disclosure sentence is the open ground: one of
three states it, one shifts it to the garage in its terms, one is silent — M.3 § 2 and R23–R29 apply
verbatim to the garage variant. (3) Reminder consent is unaddressed by all three: the "service message
or marketing" test (R08) and the free gov.uk reminder sentence are the page's information gain. (4)
Two of three carry a set-up fee beside the monthly price: the two-part display (`07`) is the market
shape here too. Bounded sentence for copy: "We read three UK AI-receptionist products built for
garages on 24 September 2026. One said on its pages that callers are told they are speaking to an AI;
none stated how VAT applies to its prices."

## 4. Wave 2 — gyms and fitness studios (App. AP, read 2026-09-24)

Rules R54–R56 derived here are in `08` § 3.

### AP.1 The subscription regime, from the primary documents

**DBT, _Government Response: Implementation of the New Subscription Contracts Regime_, published
02/04/2026** (PDF read in full with `pdftotext`; S37):

- Timing, from the Conclusion: **"We will legislate when parliamentary time allows and we anticipate
  that the regime will commence in spring 2027. We will also publish guidance to support business
  implementation."** — the only commencement statement in the document; the consultation page
  itself carries none.
- What the Act does, from the Introduction: the DMCCA "provides new rights for consumers so that
  they have clear information before they sign up to a subscription and receive regular reminders,
  particularly before trials or 12 month+ contracts auto-renew. Traders will also have to ensure it
  is straightforward for people to exit contracts, allow them to exit online if they signed up
  online, and provide a 14day cooling-off period after a trial or 12 month+ contract auto-renews
  (during which the consumer can cancel without penalty)."
- Cooling-off: "consumers should have two 14-day periods where they can cancel their contract
  without penalty: an 'initial cooling-off period' when they enter a contract and a 'renewal'
  cooling-off period after a trial or 12month+ contract auto-renews"; "Under the DMCCA, cooling-off
  rights apply to all subscription contracts" (the CCRs' right applied only to distance and
  off-premises contracts); on cancellation during a renewal period "the consumer will receive a
  proportionate refund"; if the trader fails to inform the consumer of cooling-off rights "the
  cooling-off period extends to 14 days after the trader corrects their breach, up to a maximum of
  12 months".
- The gym sentence, in the businesses' objections the government did not accept: "consumers would be
  able to extensively use a service for a few days (e.g. go to the gym a lot) and then cancel for a
  nearly full refund" — the response's answer is the proportionate refund.
- Easy exit: "consumers must be able to exit their contracts in a straightforward way without
  unnecessary hurdles. In addition, if a consumer can sign up online, they must be able to exit
  online. While these requirements do not prohibit traders from making offers or seeking feedback,
  these must not frustrate or unreasonably elongate the process" — guidance, not more legislation,
  will define "online", "straightforward" and reasonable retention offers.
- Notices: "traders [must] provide pre-contract information and send information notices to
  consumers at certain points (reminders, cooling-off notices and end of contract notices)";
  prescribed information "is to be given in a way that is more prominent than any other information
  given at the same time"; cooling-off notices "in writing on a durable medium".
- Exclusions: charitable memberships (museums, galleries, heritage sites) will be excluded by
  regulation; nothing excludes gyms.
- Government figures usable with attribution ("the government's impact assessment, as quoted in
  DBT's April 2026 response"): "approximately 155 million active subscriptions", "approximately £26
  billion per year", "approximately 5.8% of active subscriptions are unwanted", "an estimated 9.7
  million unwanted subscription contracts", "£1.6 billion a year is spent by consumers on unwanted
  subscriptions".

**DMCC Act 2024, Part 4 Chapter 2 (ss 253–281) — "Prospective", not in force at Royal Assent
(s 339(1))** (S131): s 254 "subscription contract" — supply "in exchange for payment" with
"automatically recurring, or continuing, supply" and "the consumer to automatically incur
liability"; s 256 pre-contract information (Schedule 23 Part 1 given, Part 2 given or made
available); s 258–259 reminder notices, timed "within the period specified by the trader for the
purposes of this section in the key pre-contract information"; s 260 "make arrangements to enable a
consumer to exercise a right to bring a subscription contract to an end in a way which is
straightforward, and without having to take any steps which are not reasonably necessary";
ss 264–266 cooling-off rights and notices; s 268 an offence of failing to provide information about
initial cooling-off rights; s 273 terms of no effect. **Schedule 23 Part 1, "key pre-contract
information"** (S132), eleven items, summarised by the fetch tool and to be quoted on re-read: that
the contract "will continue, or continue for a fixed term, unless the consumer takes steps to bring
the contract to an end"; the ongoing liability and any minimum period; charges triggered by
inaction; payment frequency and amounts; a monthly equivalent; the minimum total liability; changes
to frequency or amount; the steps to end the contract with contact details; the notice period; the
reminder-notice timing; a summary of cooling-off rights. Part 3 prescribes reminder-notice content
(amounts, dates, frequency, total future liability, end date, how to cancel).

**CMA / OFT history on gym contracts** (S133–S135): OFT v Ashbourne Management Services (High
Court order, August 2011) against terms requiring payment for the whole minimum period on
cancellation and against debt-collection practices; the CMA case _Health and fitness clubs: unfair
contract terms_ (opened 1 January 2012, closed 10 September 2013) — undertakings or changes from
Bannatyne's Fitness, David Lloyd Leisure, Fitness First, Dave Whelan Sports, Harlands Group and LA
Leisure, and voluntary improvements from Virgin Active, on "tying consumers into minimum membership
periods with limited rights to cancel"; the CMA release of 29 December 2016: "Around 750,000 gym
members have directly benefited from the intervention, they have saved £37 million"; the OFT's
_Guidance on unfair terms in health and fitness club agreements_ (OFT373) still listed on gov.uk —
read in S4 before any page quotes a term as unfair.

### AP.3 `06` § 4 subsection draft — gyms and fitness studios (wave 2)

- **Size signal:** none sourced for gyms specifically; the government's subscription figures (AP.1)
  describe the market the regime targets, not gyms. Record "no sector size figure" rather than a
  trade-body number of unknown method.
- **Evidenced buyer behaviour:** App. G returned "gym membership marketing" with one unrelated
  suggestion — thin; S3 tests "gym marketing agency uk", "gym membership sign up page", "gym
  website design uk", "fitness studio booking system uk", and the regime terms "subscription
  contracts regime gym", "gym cancellation rules 2027".
- **Regulatory angle (the ownable one):** a dated, website-facing change — the sign-up page must
  carry Schedule 23 Part 1, the exit must be online if the sign-up is online, renewal reminders
  become prescribed notices — anticipated for spring 2027, with a fifteen-year enforcement history on
  gym contracts behind it. The wedge is the same shape as the vets' Order (a date and a page), one
  year later and softer (anticipated, not made).
- **Competition:** gym-marketing agencies and membership-software vendors dominate the software
  intent; none the plan has seen mentions the regime (to check in S4 against three named agencies).
- **Ticket size:** a sign-up flow and a site rebuild are project work; the monthly plans are the
  reminder, the text-back and reviews.
- **Remote serviceability:** full. **Clinic overlap:** the beauty and wellness page already carries
  studios in its audience — the gym page must not restate it.
- **First service they buy:** the sign-up page and reminder flow built for the regime (a project),
  then Answer.
- **Slug and enum:** `gyms-fitness-studios`; `VERTICAL_ENUM` value added only when the page ships.
- **Timing:** draft the page to publish **before** commencement, written as "built for the regime
  the government anticipates in spring 2027", and re-verify the date against the regulations and
  the DBT guidance when they appear; if commencement slips, the page's dated sentences change, not
  its argument.
- **Why it is wave 2, not 1:** the obligation is prospective and the SERP signal is thin; vets have
  an Order made, trades and garages have the strongest missed-call fit today.

### AP.4 Page skeleton (for 09 when wave 2 opens)

- **Slug:** `gyms-fitness-studios` · **Title (50):** Gym Websites Built for the 2027 Subscription
  Rules · **Meta (155):** "Websites, sign-up flows and reminders for UK gyms and studios, built to
  the DMCC Act's subscription rules expected to commence in spring 2027, and to PECR."
- **Hero H1 (draft):** "Your sign-up page has a deadline the government has pencilled in." ·
  **Subhead:** the regime's four duties in one sentence, dated "anticipated spring 2027", plus the
  phone and the reviews.
- **H2 outline:** 1 What changes for a membership sign-up page, and when (R54; the "anticipated"
  wording) · 2 The eleven things the page will have to say before someone joins (Schedule 23 Part 1)
  · 3 Join online, leave online (R55; the CMA's gym cases as the history) · 4 Renewal reminders as
  prescribed notices, and as service messages (R56; R08) · 5 The two cooling-off periods and the
  proportionate refund · 6 The calls you miss between classes (text-back on a divert) · 7 Reviews
  that survive a look (R13–R22) · 8 What we build · 9 What we are not · 10 Where to next
- **FAQs (questions only, pricing first):** How much does a gym website with a compliant sign-up
  flow cost? · When do the new subscription rules start, and do they apply to us? · What must our
  sign-up page show before someone joins? · Can we still offer a retention deal when someone
  cancels? · Do renewal reminders count as marketing? · What happens if we do not tell members about
  cooling-off? · How do we get more reviews without breaking the rules? · Are you consumer-law
  consultants?
- **Deliberately absent:** "compliant with the regime" (it is not in force), any commencement date
  firmer than the government's, any gym by name, member-retention percentages, any client.
- **Precondition:** a doc 03 § B13 in the § B10–B12 pattern, written after the regulations and DBT
  guidance are published; until then this skeleton stays a skeleton.

## 5. Recommendation (S4, 24 September 2026 — founder-affinity column blank)

> 💡 Proposal (executor). Every line below cites § 2, § 3 or a `03` record; the founder's column and
> the queued Google captures (`03` § 6.11 batch 2: the three vertical heads) are the two things that
> can still move the order. Nothing here is decided until `00` § 6 records it (Q16, D12).

**Wave 1 — three pages, in this order.**

1. **Veterinary practices** — slug `/industries/veterinary-practices`, `VERTICAL_ENUM`
   `veterinary-practices`. **First purchase:** the Order-shaped website work (the price page built to
   Schedule 1 with bands and checkboxes, practice information, the end-of-life options page, the
   complaints page, the RCVS literature within two clicks) with the bundle's three CRM items (the
   first booking confirmation carrying the consultation price and the price-list link, Art. 7(3)(c);
   the Standard Electronic Message on every confirmation and reminder, Art. 14(10); the pet-care-plan
   renewal reminder, Art. 9(12)). **Why first:** the only vertical with dated, primary-law website
   duties (L.2; 22 March 2027 and 22 September 2027 for small practices), a sourced demand statistic
   ("Less than 40% of practices have prices on their websites", CMA, 24 March 2026), the highest
   rubric score (73), and a supply side in which one of three ranking agencies names the CMA and none
   publishes a price (L.2.2). **The caveat:** the compliance ground is not empty — Connected Vet sells
   a Compliance Pack built on the March report, and vetcomply.co.uk ranks fourth on `cma vet price
list website` (`03` `serp-0101`) — so the page wins on being Order-accurate and dated,
   never on "first" or "only". On Google the head carries a local pack and connectedvet.co.uk first (`serp-0065`, Medium) — the vertical's demand signal is real but modest, and its calendar comes from the Order, not the SERP.
2. **Trades and home services** — slug `/industries/trades-home-services`, `VERTICAL_ENUM`
   `trades-home-services`. **First purchase:** missed-call text-back with reviews (the Set B products
   already price that band at £6.49–£97 a month, and three of them target trades; `missed call text
back for plumbers` is Medium on Google, `serp-0009`), then the site items — Gas Safe and Part P
   registration display, claims of approval, and the CCRs' information and cancellation duties on a
   quote accepted at the door or by text (L.1, L.3, `08` § 2). **Why second:** the strongest platform
   fit (5) and the second score (68), but the most crowded agency SERP of the three (10/10 UK on
   `bing-0032`, retainers from "£1,000 +VAT" to "£5,000-15,000/month") — so the page enters on the
   sub-£200 plan and the compliance items, not on "plumber marketing agency" (L.3.1). The
   `VERTICAL_ENUM` value re-adds a vertical `scripts/check-keywords.ts` L77–80 dropped as
   `home-services` on purpose; `11` records why it comes back under a different name.
3. **Garages and MOT centres** — slug `/industries/garages-mot-centres`, `VERTICAL_ENUM`
   `garages-mot-centres`. **First purchase:** the reminder-and-text-back plan (MOT and service
   reminders are the textbook service message under R08, and gov.uk's free reminder is the first
   sentence, `bing-0030`), with the receptionist sold only as a plan inside the bundle. **Why third,
   and why at all:** the rubric puts garages at 56, level with gyms and below solicitors and agents,
   because the regulatory angle is thin online (L.4) and the demand signal is one autocomplete term;
   it stays in wave 1 on fit — the micro-niche already has three UK products at "£97/month" to "£697 a
   month" (L.4.1), the disclosure sentence is open ground (one of three states it), and every other
   service on the line is bought by a garage the same way a plumber buys it. If the founder's column
   scores it low, it drops to wave 2 without touching the other two.

**Wave 2 — gyms and fitness studios**, timed to the DMCC subscription-contract regime: the DBT
response says "we anticipate that the regime will commence in spring 2027" (§ 4, S37); the page
skeleton is § 4 AP.4; its trigger is the commencement order, not a date WebAsk picks.

**Wave 3 at most — solicitors and accountants; estate and letting agents.** Both score above garages
on the rubric (61, 57) and both lost on delivery, not demand: SRA rule 8.9 constrains the email/SMS
and text-back plans (R41), and the price-transparency wedge is website work the Leeds hub already
argues; agents' material-information duties are portal-feed work, not the monthly plans, and
`check-keywords.ts` dropped real-estate deliberately (§ 1). **Deferred:** hospitality (entrenched
booking platforms; FHRS and allergen rules to source). **No page:** salons and barbers (inside
`beauty-wellness-clinics` — add "barbers" to that line if wanted), tutors.

**Drift guard.** Two rules travel with this list: no industry page ships without its own doc 03
Part B section (`08` § B10–B12, drafted) and its three-competitor deep dive (L.2.2, L.3.1, L.4.1 —
all dated 24 September 2026, all re-read before the page ships); and the three `VERTICAL_ENUM`
values are added to `scripts/check-keywords.ts` in the same commit as the first row that uses them
(`11`, AE.8), never before.

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
