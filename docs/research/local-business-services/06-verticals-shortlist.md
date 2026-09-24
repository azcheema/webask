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
consultation price — due **22 March 2027** for practices with fewer than 15 sites (22 December 2026
for large groups on the price list and practice information). The CMA's own release says "Less than 40% of practices have prices
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

| Vertical                 | GHL fit | Demand evidence | Regulatory angle | Competition | Ticket | Remote | Overlap | Founder | Weighted (of 90) | Evidence in brief                                                                                                                                                                                                                                                                       |
| ------------------------ | ------- | --------------- | ---------------- | ----------- | ------ | ------ | ------- | ------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Veterinary practices     | 4       | 3               | 5                | 4           | 4      | 5      | 4       | —       | 75               | Order made 22 Sep 2026 with website Articles and dates (App. L); "vet clinic marketing agency" surfaced (App. G); CMA "less than 40%" statistic; a practice's client data is owners' contact data (assumption on hosting, Q10)                                                          |
| Trades / home services   | 5       | 4               | 3                | 3           | 3      | 5      | 3       | —       | 70               | Text-back and reviews built for them (App. Q: three UK text-back products target trades); registration display and claims-of-approval rules (App. L.3); "seo for plumbers" family (App. G); busy SERPs (Set A agencies name tradesmen); CCRs to source                                  |
| Garages / MOT centres    | 5       | 2               | 2                | 3           | 3      | 5      | 3       | —       | 61               | Missed-call and MOT-reminder fit (service messages, R08); DVSA rules are physical signage only (App. L.4); no UK autocomplete signal beyond "ai receptionist for garages" itself (App. G)                                                                                               |
| Gyms / fitness studios   | 4       | 2               | 3                | 3           | 3      | 5      | 3       | —       | 60               | DMCC subscription regime expected spring 2027 (App. A, DBT response 2 Apr 2026); "gym membership marketing" thin (App. G); CMA gym-contract enforcement 2011–2016 now sourced and the DBT response read in full (App. AP: "we anticipate that the regime will commence in spring 2027") |
| Solicitors / accountants | 3       | 3               | 4                | 3           | 4      | 5      | 2       | —       | 64               | SRA 8.9 limits outbound marketing; Transparency Rules put prices on the website (§ 10 row 7); Leeds hub already argues the price-publication point; email/SMS plan constrained (R41)                                                                                                    |
| Estate / letting agents  | 3       | 3               | 4                | 2           | 3      | 5      | 2       | —       | 59               | Material-information rules on DMCC footing (§ 10 row 8; NTS withdrawal secondary); portal-feed work not the monthly plans; `check-keywords.ts` dropped real-estate deliberately                                                                                                         |
| Hospitality              | 3       | 2               | 3                | 2           | 2      | 4      | 2       | —       | 48               | FHRS display by nation, allergens, drip pricing to source; entrenched booking platforms (App. Q: "online booking system for restaurant uk" is product intent)                                                                                                                           |
| Salons / barbers         | 4       | 3               | 2                | 3           | 2      | 5      | 5       | —       | —                | Already inside `beauty-wellness-clinics` (`audienceType` names beauty salons) — no new page; add "barbers" to that line if wanted                                                                                                                                                       |
| Tutors                   | 3       | 1               | 2                | 3           | 1      | 5      | 1       | —       | 42               | Low budget, seasonal; DBS position to source; no autocomplete signal captured                                                                                                                                                                                                           |

Recommendation carried from § 4.6: wave 1 vets, trades, garages (garages on fit, not regulation);
wave 2 gyms; wave 3 solicitors, agents; deferred hospitality; no page for salons and tutors.

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
  response to a request in accordance with paragraph (1)". Reg 6 excludes contracts for the
  construction of new buildings and substantial conversions (quote in S4). Whether Part 3 carries its
  own £42 floor (reg 27) is to confirm in S4. Statute; it bites on every trade quote accepted at the
  door, by phone, by text or through a website.
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

**Status.** Made 22 September 2026 (gov.uk publication page, "Published 22 September 2026", thirteen
documents); Art. 1(2) "This Order shall come into force on the day after the Order is made"; extends
to the whole UK (Art. 1(3)). The CMA says an "updated explainer on what veterinary businesses need
to do to comply" is coming. The BVA (page updated 24 Sep 2026) offers a "Get ready, get compliant"
guide and five remedy guides — fetch in S4.

**Definitions (Art. 2).** "'Large Veterinary Business' means a Veterinary Business with 15 or more
FOPs and/or OOH Centres"; "'Small Veterinary Business' means a Veterinary Business with fewer than
15 FOPs and/or OOH Centres". Nearly every independent practice is "Small".

**Compliance dates (Art. 3 table, as read from the extracted text — confirm on the PDF):**

| Obligation                                                                       | Large (≥ 15 sites)                                                                               | Small (< 15 sites) |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------ |
| Ownership Information (Part 2)                                                   | 22 March 2027                                                                                    | 22 March 2027      |
| Practice Information · Price List · Parasiticide Price List · Pet Care Plans     | 22 December 2026                                                                                 | 22 March 2027      |
| Written estimates for higher-cost treatments · Itemised bills                    | 22 June 2027                                                                                     | 22 September 2027  |
| Pet-owner awareness of written prescriptions; provision; standard flyer (Part 4) | 22 June 2027                                                                                     | 22 September 2027  |
| Prescription fees (Art. 18)                                                      | 22 March 2027                                                                                    | 22 September 2027  |
| Cremation options and prices (Part 7)                                            | 22 December 2026                                                                                 | 22 March 2027      |
| In-house complaint process · complaint logs (Art. 21)                            | 22 March 2027                                                                                    | 22 March 2027      |
| Submission of information to the RCVS Find a Vet platform                        | 3 months after the RCVS complies with its Undertakings, or 22 September 2027, whichever is later | same               |

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
  reasonably" practicable when it changes.
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
  acknowledgement, and the eight-week resolution window; complaint logs (Schedule 4).

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
from the homepage, on a URL and in navigation and metadata that use "prices" or "fees", carrying the
36 Schedule 1 items with appointment durations and VAT stated (reg 6(2) above); the group or trading
name in the homepage banner and in every page's metadata; a Practice Information page; the
parasiticide list with the VMD link; the pet-care-plan page carrying the Standard Information with
savings claims written to Art. 9; the RCVS prescription literature within two clicks; a complaints
page written to Art. 21; and — **a CRM item that belongs in the bundle** — the first booking
confirmation email or text carrying the consultation price and the price-list link (Art. 7(3)(c)).
Wave-1 confirmed; the compliance clock for small practices runs to 22 March 2027 on the website items.

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
- **To source in S4:** Consumer Contracts (Information, Cancellation and Additional Charges)
  Regulations 2013 — off-premises and distance contracts (quotes accepted at home or online carry a
  14-day cancellation right and pre-contract information duties); NICEIC/NAPIT Part P registration
  display; the Building Regulations competent-person scheme rules.
- **Verdict for 06:** medium regulatory angle (registration display, claims of approval, cancellation
  rights) on top of the strongest missed-call fit; wave 1 stands.

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

## 5. Recommendation

_S4 — waves with the first service each buys and the proposed slug / `VERTICAL_ENUM` value; why the
others lost; the drift guard (`scripts/check-keywords.ts` L77–80 dropped `home-services`
deliberately); no industry page ships without its own doc 03 Part B section first._

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
