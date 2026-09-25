# 12 — SEO ranking plan

> Purpose: how each new page ranks: term set, information gain, on-page template, cluster, links, E-E-A-T, off-page, measurement. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1) and
> **finalised in S6 on 25 September 2026** on the captured SERPs in `03` (107 `google.co.uk`
> records, 24–25 September 2026): each page in § 3 now carries its term set with tiers and records,
> the SERP shape it must beat, an information-gain sentence bounded to what was captured, its H2s
> mapped to the captured questions, and a measurement row. Every expectation is written for a
> zero-authority `.co.uk` and is an expectation, not a promise.

## 1. Method (planning § 5.8)

- **Priority and realism first.** Apply doc 08 § 8's order page by page and doc 02 § 5's KD ≤ 35
  posture: the new pages win on compliance long-tail, cost questions and industry × service before any
  head term. Every expectation is written as an expectation for a zero-authority `.co.uk`, never a
  promise. `msv` and `kd` are null; a tier is a reading of surfaces (`03` § 7's caveat).
- **Information gain is a test, not a slogan.** For each page, read the top UK results captured in 03
  and name the one dimension the page is measurably better in (doc 06's rule); if none can be named,
  the page is not ready to draft. The sentence is bounded: it names what the captured pages did not
  contain, on the date, never "no UK agency" or "the only".
- **On-page.** Title patterns per page type (monthly plan, project, bundle) within the 51-char budget;
  H1 in the buyer's words from 03; answer-first opening (an AI Overview sat on 96 of the 107 captures,
  `03` § 6); H2s from the captured PAA; FAQ pricing-first; schema per 05 with `unitText` by cadence;
  dated figures in the sentence; British English; no implied proof.
- **Cluster.** Each service page is a pillar: at least two posts from the calendar (compliance angle
  first), industry inserts, and a location variant only where 05 finds a genuine local angle
  (`05` § 6: the profile page, at most).
- **Links.** Internal mesh per doc 08 § 1 (`05` § 4): up to the pillar, down to children, sparse
  cross-silo; the bundle links to every member and back; the topic archive anchors to the bundle.
- **E-E-A-T without clients.** Founder byline and `Person` node, primary-source citations with dates,
  regulator vocabulary in `knowsAbout`, the process and pricing pages, transparent exit terms; reviews
  and case studies are absent by design and are never simulated.
- **Off-page.** Doc 05 § 4 citation tiers applied (§ 5.2), the HighLevel Certified Directory as
  `01` § 9 verified it, UK trade press only where a capture surfaced one, and digital-PR assets from
  bounded original data — proposals with effort, no bought links, no cross-canonical to naxdor.com.
- **SERP features.** PAA capture through FAQ blocks; AI Overview readiness through answer-first
  paragraphs and dated tables; no AI-specific schema or `llms.txt` (locked).
- **Technical and measurement.** Draft `noindex` → live → sitemap → GSC request; the doc 05 quality
  gate for programmatic variants; monthly head-term checks via Playwright on `google.co.uk` with the
  S3 capture tooling (five terms per window, `03` § 6.11); GSC query reports per page; the six-month
  zero-impression sweep (doc 05 § 6); a measurement row per page in § 5.5.

## 2. The argument each page carries, and what it deliberately omits (App. E.1)

| Page                      | The one argument (its L8 provenance comment starts here)                                                                                                                       | Deliberately absent                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `missed-call-text-back`   | A text-back is lawful only as a service message — here is exactly what it may say, why it goes on a divert from your own number, and whose details the number is registered to | any "recover X% of lost jobs" figure; any implied client; "not marketing" as a label |
| `review-management`       | Ask everyone, incentivise nobody, gate nothing — CMA208 and Google's policy turned into an automation design, with the operator's own exposure stated                          | star-rating promises; before/after counts; "get 5-star reviews"                      |
| `ai-receptionist`         | Inbound only, on a divert, disclosures in the first sentence, minutes at a published rate — a receptionist plan, not a bespoke build                                           | answer-rate claims; "human-like"; answers on regulated subjects                      |
| `email-sms-marketing`     | The campaigns your CRM build stopped at — written and sent only to the people you may lawfully message, with the opt-out in every one                                          | open-rate benchmarks; ROI figures; anything restating the PECR argument              |
| `landing-pages`           | One page, one job, wired to the CRM — priced as a page, with the builder-vs-code performance trade-off stated                                                                  | conversion-rate claims; "high-converting"                                            |
| `google-business-profile` | Your profile, in your account, managed by a firm that has none of its own and says why — eligibility, suspensions and honest listings                                          | map-pack ranking promises; "rank #1"                                                 |
| `local-business-plans`    | Hosted or owned — your choice, with the exit written down: what the sub-account is, where the data sits, what usage costs, what leaves with you                                | "all-in-one" hype; savings claims; component keywords                                |

## 3. Per-page plans (App. M, completed on the `03` captures)

Conventions: **Term set** lists the page's rows in `keywords-draft.json` (primary · primary plus
supporting, `shape.mjs` 25 September 2026) with the head term's tier and record from `03` § 7.
**SERP shape** is what the captured top ten looked like on 24–25 September 2026: UK share, ads,
features, the proxy, who ranks. **Information gain** names the dimension against the captured pages,
bounded. Titles are counted without the ` · WebAsk` suffix (budget 51); metas in full (140–160). H2s
carry the question they answer; **PAA mapping** names the captured question each H2 or FAQ takes, so
every H2 traces to a record or a rule in `08` § 3. The FAQ set is the catalogue draft's, pricing
first, reconciled with `03` § 9. Schema on every page is `WebPage` + `Service` (+ the monthly or
project `Offer`, and a second set-up `Offer` where a set-up fee exists) + `FAQPage` +
`BreadcrumbList`, `areaServed` United Kingdom only (`05` § 5). **Priority** is doc 08 § 8's tier for
the page's entry terms. "Deliberately absent" is § 2's and is repeated in each page's L8 comment.

### M.1 `/services/missed-call-text-back`

- **Term set (7 · 16):** `missed call text back uk` **High** (`serp-0001`), `missed call text back
service uk` **High** (`serp-0002`), `missed call text back service` Medium (`serp-0003`), `text back
missed calls` Medium (`serp-0004`), `missed call sms service uk` Medium (`serp-0011`), the PAA pair
  `can i automatically text back a missed call` and `can gohighlevel text back missed calls`;
  supporting on nine post rows (#1, #4, #11, the booking-cost question, the trades row and the
  proposed #17).
- **SERP shape to beat:** 9/9 and 8/9 UK, Soft (A2/B7, A3/B6), an AI Overview on every text-back
  term, four ads above the fold on the "service uk" wording (Moneypenny, Aircall, Ringover, Cloudtalk
  — telephony, none selling text-back), no local pack even on the near-me wording (`serp-0105`). The
  top ten are UK GoHighLevel resellers and micro-products (call2sms.co.uk, digitaltoolbag.co.uk,
  mctb.1nexus.co.uk, downtoearthai.co.uk, contactfusion.co.uk, smbbooster.co.uk), with
  `help.gohighlevel.com` first on the bare head. PAA: "Can I automatically text back a missed call?",
  "Can GoHighLevel text back missed calls?", "How do I text back a missed call?"; the legal question
  (`serp-0006`) has no UK explainer in its top ten.
- **Information gain:** of the UK text-back pages captured on 24 September 2026 and read in `04`
  (two agency pages reached; four products in Set B), none showed the text a caller receives or said
  whose number it is sent from, and none mentioned PECR (`04` § 4.5, Q.7); this page prints the
  message, explains the ICO's content test that keeps it a service message, and states which
  business details a UK number is registered to.
- **Title (47):** Missed-Call Text-Back Service for UK Businesses
- **Meta (146):** Every missed call texted back in seconds from your own number, written as a service
  message under PECR. Set-up plus a monthly plan, usage at cost.
- **H1:** Missed-call text-back for UK businesses
- **H2 outline:** 1 What happens in the first sixty seconds after a missed call (the flow, on a
  divert from your own number) · 2 The text we send, word for word (J.7 template; why it carries no
  offer — R01, R02) · 3 "Why do I get a text message after a missed call?" — the caller's side
  (the network's own alert first, then the business text-back; who answers — R03) · 4 Is an automatic
  text back allowed in the UK? (the ICO content test; corporate vs individual — R04, R05, R12) · 5 Your
  number, or a new one registered to your business (KYC facts — R36, R37) · 6 One inbox: replies, web
  chat, WhatsApp at cost (R10) · 7 What the monthly report shows (calls missed, texts sent, replies,
  bookings — no outcome figures) · 8 What it costs, and what usage costs (`[D4]`; R38, R39) · 9 Two
  limits, stated up front (no promotional follow-up from this plan; no call answering — links to the
  two sibling pages) · 10 If you leave (export; R33 for hosted plans)
- **PAA mapping:** H2 1 ↔ "How do I text back a missed call?" (`serp-0001`, `-0002`); H2 2 ↔ "What to
  text back after a missed call?" (`serp-0109`); H2 3 ↔ `serp-0007`'s consumer question; H2 4 ↔ "Can I
  automatically text back a missed call?" (`serp-0002`, `-0003`, `-0005`) and R01; H2 5 ↔ R36; FAQ ↔
  "Can GoHighLevel text back missed calls?" (`serp-0005`, `-0006`).
- **FAQs (8, pricing first):** the catalogue's I.1 set, with "Whose number does the text come from?"
  answering the divert design (`03` § 9).
- **Schema:** monthly `Offer` + set-up `Offer`; `usageNote` in prose.
- **Links out (8):** `/services/ai-receptionist`, `/services/crm-automation`,
  `/services/email-sms-marketing`, `/services/local-business-plans`, post #1, post #11, `/pricing`,
  `/contact`. **Links in (6):** the aesthetic and beauty industry pages (`02` I.8), `ai-integration.mdx:80`,
  the bundle's Answer tier, the trades and garages industry pages, post #1.
- **Cluster (3):** #1, #9, #11; second wave #17.
- **Priority:** tier 1 on the legal question and post #1; tier 3 on the cost FAQ; the two Soft
  High heads are the one place a head term is a realistic early target in this line (`03` § 7's
  reading), still last.
- **Deliberately absent:** any recovery percentage; any implied client; "not marketing" as a label.

### M.2 `/services/review-management`

- **Term set (7 · 12):** `google review management services uk` Medium (`serp-0013`), `review
management service uk` Medium (`serp-0016`), `google review management company` Medium
  (`serp-0014`), `google review management agency` Low (`serp-0015`), `service to get more google
reviews` Low (`serp-0018`), `google review request automation` Medium (`serp-0017`), the PAA `how
much does online reputation management cost`; supporting on the dental row and four post #2 rows,
  of which `incentivised reviews uk` is **High** (`serp-0022`).
- **SERP shape to beat:** the UK-suffixed heads are 7/8 and 9/9 UK, Soft (A2/B5, A4/B5), four ads
  above (tapandrate.co.uk on four of fourteen captures, removify, pinmeto) and an AI Overview; UK
  agencies rank (artemis.marketing, localexposure.co.uk, reviewmanagement.org.uk, gleavemedia.co.uk,
  purereputation.co.uk) beside capterra.co.uk, a "7 Best" listicle and, at rank 7, a "where to buy
  Google reviews" page. The non-UK wordings are Hard SaaS SERPs (wiremo, localo, shapo, sproutsocial).
  The compliance long-tail ranks gov.uk, the CMA208 PDF, asa.org.uk and law firms — no agency page.
  PAA: "How much does online reputation management cost?", "Is review gating illegal?", "Are you
  allowed to solicit Google reviews?", "Can I pay for 5-star reviews on Google?".
- **Information gain:** neither of the two UK review-management pages read in `04` mentioned review
  gating or incentives, and one sold guaranteed removal (`04` § 4.5, Q.6: no Set B review page
  mentions the DMCC Act); this page prints the CMA's rules on cherry-picking and incentives, Google's
  policy sentence and the operator's own liability under CMA208, and designs the flow around them,
  with the removal boundary stated as WebAsk's.
- **Title (42):** Google Review Management for UK Businesses
- **Meta (147):** Google reviews asked for the lawful way: every customer asked, nobody incentivised,
  nothing hidden. Built to the CMA's guidance and Google's rules.
- **H1:** Google review management for UK local businesses
- **H2 outline:** 1 Ask everyone, incentivise nobody, hide nothing (R13 — the whole design in one
  sentence) · 2 "How to get more Google reviews from customers" — the honest answer (timing per
  service, one request, no pressure on the premises — R14, R22) · 3 What changed on 6 April 2025
  (DMCC Act; CMA208 cherry-picking and labelling; the penalty with its qualifier — R15, R16) · 4 Why
  we will not run a "rate us first" flow (R14; Google's policy quoted — R22) · 5 Replies, drafted for
  your approval (R19) · 6 The widget shows what Google shows (R18) · 7 We are inside the rules too
  (R17) · 8 Dentists: the GDC layer (R20; a short section linking the dental industry page) · 9 What
  the monthly report shows · 10 What it costs (`[D4]`) · 11 Two limits (no suppression, no crisis PR)
- **PAA mapping:** H2 2 ↔ "How do I politely ask for a Google review?" (`serp-0020`) and "How do I
  manage Google reviews for my business?" (`serp-0014`); H2 3–4 ↔ "Is review gating illegal?"
  (`serp-0021`), "Are you allowed to solicit Google reviews?" (`serp-0020`), "Can I pay for 5-star
  reviews on Google?" (`serp-0018`); H2 11 ↔ "How do I contact Google to take down a review?"
  (`serp-0013`; the proposed #13 carries the full answer); FAQ 1 ↔ "How much does online reputation
  management cost?" (`serp-0016`, `-0025`).
- **FAQs (8):** the catalogue's I.2 set, pricing first; "What is the best company for managing Google
  reviews?" (`serp-0013`) answered without a claim.
- **Schema:** monthly `Offer` + set-up `Offer`.
- **Links out (7):** `/services/google-business-profile`, `/services/email-sms-marketing`,
  `/services/crm-automation`, `/industries/dental-practices`, `/industries/beauty-wellness-clinics`,
  post #2, `/pricing`. **Links in (7):** `crm-automation.mdx:74`, dental L67, beauty L59–61 and L98,
  the `seo` catalogue exclusion, the bundle's Reputation tier, the profile page, the trades and
  garages industry pages.
- **Cluster (2):** #2; proposed #13 (removal and Google's policy — from the `serp-0013` PAA and the
  `04` gap).
- **Priority:** tier 1 — the page enters on the compliance long-tail (`incentivised reviews uk`,
  `review gating uk`, `how to ask for google reviews legally uk` on post #2) because it has no High
  service head (`03` § 7); tier 3 on the cost FAQ.
- **Deliberately absent:** star-rating promises; before/after counts; a review widget on aesthetic
  pages until R21 is resolved.

### M.3 `/services/ai-receptionist`

- **Term set (8 · 14):** `ai phone receptionist uk` **High** (`serp-0027`), `ai voice receptionist
uk` **High** (`serp-0028`), `ai receptionist for small business uk` **High** (`serp-0029`), `ai call
answering service uk` **High** (`serp-0030`), `ai answering service uk`, `ai telephone answering
service uk`, `24/7 ai receptionist uk`, `virtual receptionist ai uk` Medium (`serp-0037`); plus the
  six live rows that move on the day the page is live (`05` § 3), among them `ai receptionist uk`
  **High** (`serp-0035`) and `ai phone answering service uk` **High** (`serp-0036`); supporting on
  five post #3 rows and the garages row.
- **SERP shape to beat:** the hardest in the set — 6–9 of 9 UK, **Hard** (A7–A9) on eleven of
  twelve, three or four ads above the fold on all twelve (moneypenny.com on ten, cloudtalk.io,
  talkdesk.com, zendesk.co.uk), an AI Overview on eleven. Hosting brands lead (fasthosts.co.uk first
  on eight terms, ionos.co.uk second on six), then BT Business, RingCentral, Moneypenny, answer.co.uk,
  perfectreception.co.uk, and a layer of UK point products with prices in their titles. PAA: "How much
  does an AI receptionist cost?" on eight captures, "Is there a free AI receptionist?" on four, "Are AI
  receptionists worth it?" on five; the legal question (`serp-0034`) returns law-firm receptionist
  pages and one Reddit thread, and its own PAA ("What are the legal restrictions on AI chatbots in
  the UK?") has no page answering it.
- **Information gain:** of the three UK AI-receptionist products with published prices read in `04`,
  none said on the page that the assistant tells callers it is an AI, and the one agency page reached
  had no recording-disclosure sentence (`04` Q.7, § 4.5); this page prints the opening line with both
  disclosures, states why it is inbound-only under PECR regs 19 and 21, and explains the unsettled
  live/automated classification honestly.
- **Title (39):** AI Receptionist for UK Small Businesses
- **Meta (149):** A voice agent that answers the calls you miss, books appointments and hands over
  when it should. Inbound only, disclosed up front, on a monthly plan.
- **H1:** An AI receptionist for UK small businesses, inbound only
- **H2 outline:** 1 What it does on a call, and what it hands over (the narrow job; fallback) ·
  2 "Will callers know they are talking to an AI?" (the opening line, J.7; R25, R26) · 3 Is an AI
  answering your phone legal in the UK? (inbound is the clean case; regs 19/21; the classification
  "unsettled, with a lean" — R23, R24) · 4 Why it never calls anyone (R24) · 5 Your number stays; the
  divert options (out of hours, overflow, every call) · 6 Booking, summaries and your CRM record ·
  7 What it will not answer (regulated subjects; clinics → bespoke build — R27) · 8 Minutes: what is
  in the plan and what overage costs (R29, R39) · 9 The monthly report (R28 fields) · 10 When a
  bespoke agent is the right answer (link to `/services/ai-integration`)
- **PAA mapping:** H2 1 ↔ "What does an AI receptionist do?" (`serp-0035`, `-0066`) and "Can I get AI
  to answer my phone calls?" (`serp-0030`); H2 3 ↔ `serp-0034`'s PAA; H2 8 and FAQ 1 ↔ "How much does
  an AI receptionist cost?" (`serp-0035`, `-0027`, `-0031`) and "Is there a free AI receptionist?"
  (`serp-0027`, `-0032`), answered without a converted figure; H2 9 ↔ "Are AI receptionists worth
  it?" (`serp-0027`) — report fields, not a verdict; H2 10 ↔ "Is AI replacing receptionists?"
  (`serp-0033`).
- **FAQs (8):** the catalogue's I.3 set, pricing first.
- **Schema:** monthly `Offer` + set-up `Offer`; minutes as `usageNote`, never a price node.
- **Links out (5):** `/services/missed-call-text-back`, `/services/ai-integration`,
  `/services/local-business-plans`, post #3, `/process`. **Links in (6):** the new `ai-integration.mdx`
  paragraph after L30, the `data/services.ts:559` boundary, the bundle's AI module, the garages and
  trades industry pages, post #3; beauty L79–81 links the bespoke build instead (R27).
- **Cluster (2):** #3; proposed #14 (AI receptionist or a call-answering service — the live `vs` row,
  `03` § 1 step 4, and the answering services that share the SERP).
- **Priority:** tier 1 on the rules half (post #3 and H2 3, where nothing ranks); tier 3 on the cost
  PAA; the High heads are tier 5 and Hard — no early expectation is written for them.
- **Deliberately absent:** answer-rate claims; "human-like"; per-minute prices before D4.

### M.4 `/services/email-sms-marketing`

- **Term set (10 · 12):** `email marketing agency uk` **High** (`serp-0039`), `email marketing
services uk` **High** (`serp-0040`), `email marketing companies uk` **High** (`serp-0041`), `email
marketing agency for small business` **High** (`serp-0042`), `email marketing management uk` Medium
  (`serp-0049`), `sms marketing services uk` Medium but Hard (`serp-0043`), `database reactivation
service`, the PAA rows `how much does an email marketing agency cost`, `sms marketing cost`, `is sms
marketing legal uk`; supporting on the reactivation post and the 1,000-emails question.
- **SERP shape to beat:** the four agency heads are 7–9 of 9 UK, Soft (A3–A5), four ads above on
  each, an AI Overview on three, and a **local pack on `email marketing services uk`** (`serp-0040`)
  and on the near-me wording (`serp-0108`) — the D1 cost on this page. UK agencies rank
  (email-postman.co.uk, zestydigital.co.uk, bluefrontier.co.uk, kwmarketinguk.co.uk, ceek,
  thegoodmarketer) beside Semrush's and Clutch's directories; on Bing the same heads are
  directory-shaped (GoodFirms, DesignRush, Sortlist, Clutch, DAN). SMS wordings are platform SERPs
  (VoodooSMS, ClickSend, Text Marketer, FireText) the page does not own. PAA: "How much does an email
  marketing agency cost?", "How much does it cost to send 1000 emails?", "Is email marketing still
  worth it in 2026?", "Is SMS marketing legal?".
- **Information gain:** of the eleven UK agencies read in `04`, one mentioned PECR on its pages and
  none mentioned the TPS or Ofcom (`04` § 4.6); this page starts from who may lawfully be messaged
  (legal form, the soft opt-in in the statute's words), treats list hygiene and the consent audit as
  month one, and carries the SRA and CAP carve-outs for solicitors and clinics.
- **Title (45):** Email Marketing Agency UK — Email & SMS Plans
- **Meta (151):** Campaigns written, sent and reported every month, only to the people you may
  lawfully message under PECR, with an opt-out in every one. A monthly plan.
- **H1:** Email and SMS marketing for UK small businesses, run monthly
- **H2 outline:** 1 The campaigns your CRM build stopped at (the boundary with
  `/services/crm-automation`; R11) · 2 "Who can we legally email or text in the UK?" (legal form;
  soft opt-in verbatim — R04, R05, R06, R12; link, never restate at length) · 3 Month one is the
  consent audit (what happens to records with no provenance — R53) · 4 Two campaigns a month, one
  automation — what that means in practice (welcome, follow-up, rebooking, win-back) · 5 "Database
  reactivation" done lawfully (the records that can carry it) · 6 SMS and WhatsApp: what they cost and
  who may receive them (R10, R39) · 7 Clinics and dental practices: what a message may say (CAP;
  recall vs marketing — J.6) · 8 Solicitors: existing clients only (R41) · 9 The monthly report:
  replies and bookings, not open rates · 10 What it costs (`[D4]`) · 11 Two limits (bought lists; the
  build itself)
- **PAA mapping:** H2 2 ↔ "Is SMS marketing legal?" (`serp-0043`); H2 5 ↔ "What is database
  reactivation?" (`bing-0011`; `sug-0058`); H2 6 ↔ "How much does it cost to do SMS marketing?"
  (`serp-0043`, `-0044`); H2 9 ↔ "Is email marketing still worth it in 2026?" (`serp-0039`, `-0110`);
  FAQ 1 ↔ "How much does an email marketing agency cost?" (`serp-0039`, `-0042`, `-0108`) and "What is
  the typical cost of email marketing per month in the UK?" (`serp-0049`); FAQ ↔ "How much does it
  cost to send 1000 emails?" (`serp-0042`).
- **FAQs (8):** the catalogue's I.4 set, pricing first.
- **Schema:** monthly `Offer` (no set-up).
- **Links out (7):** `/services/crm-automation`, `/services/review-management`,
  `/services/landing-pages`, `/industries/aesthetic-clinics`, `/industries/dental-practices`, post #6,
  post #4. **Links in (5):** `data/services.ts:509` and FAQ L545–547, `crm-automation.mdx:84`, the
  bundle's Follow-Up tier, the text-back page's limit section, the beauty industry page's grid.
- **Cluster (3):** #4, #6, #11.
- **Priority:** tier 1 on the reactivation and consent posts; tier 3 on the cost FAQs; the four Soft
  High agency heads are tier 5 — realistic later than text-back's because directories and a local
  pack share the SERP.
- **Deliberately absent:** open-rate benchmarks; ROI figures; a restated PECR essay.

### M.5 `/services/landing-pages`

- **Term set (5 · 10):** `landing page design agency uk` **High** (`serp-0052`), `landing page design
uk` Medium (`serp-0050`), `landing page agency uk` Medium (`serp-0070`), `lead generation page design
uk` Medium (`serp-0104`), `sales funnel design uk` Low (`serp-0056`); supporting on the five post #7
  rows (`landing page cost uk` Medium, `landing page design cost`, `landing page building service` —
  re-pointed to the post because its SERP is builders and listicles, `serp-0055`).
- **SERP shape to beat:** 9/9 UK on the agency head, Soft (A3/B6), four ads above and two in the
  feed (landingpage-designs.co.uk is also the top advertiser; Fiverr, Webflow), an AI Overview.
  Agencies rank with prices in titles (mylandingpage.co.uk "from £750"; on Bing astrofy.uk "from
  £900", luxbranding.co.uk "From £199", iines.co.uk "from £149") beside converted.co.uk, kingkong.co,
  Sortlist and Digital Agency Network; the wording without "design" has a jobs reading (Michael Page,
  StudySmarter on `serp-0070`). The cost and either-or questions are global SERPs (Reddit, Unbounce,
  Landingi, Canva). PAA: "How much does it cost to design a landing page?", "What is the average cost
  of a landing page?", "Do I need a website or just a landing page?", "Are Google landing pages free?".
- **Information gain:** the landing-page agencies captured on 24 September 2026 sell templates,
  galleries and "conversion" positioning, and the one Set C landing-page agency reached publishes no
  price (`07` § 4); this page prices a page as a page, states the builder-versus-code performance
  trade-off with the floor named, and wires consent capture and tracking into the deliverable.
- **Title (42):** Landing Page Design UK — One Page, One Job
- **Meta (143):** One page for one job: a campaign, an offer or a booking page, designed, built, wired
  to your CRM and measured. Priced as a page, not a website.
- **H1:** Landing page design for one campaign, one offer or one booking
- **H2 outline:** 1 One page, one job (what a landing page is for; when a site is the wrong tool —
  the web-development boundary) · 2 Builder or code — the trade-off stated (performance floor; where
  each is right) · 3 "Landing page design cost" — what moves the price (`[D4]`) · 4 Wired to your
  CRM: form, calendar, consent at entry, follow-up message · 5 Cookies on a builder page (the DUA Act
  exceptions and the equal-prominence rule — J.6) · 6 Offers and prices on the page (DMCC pricing
  rules; VAT clarity under reg 6(2) — R38, R46) · 7 Measurement: events, tags, the 30-day report ·
  8 Copy: yours edited, or written as an add-on · 9 Who owns the page (your account, your plan, your
  domain) · 10 When it is a website you need
- **PAA mapping:** H2 1 and 10 ↔ "Do I need a website or just a landing page?" and "Can I have a
  landing page without a website?" (`serp-0054`); H2 3 and FAQ 1 ↔ "How much does it cost to design
  a landing page?" (`serp-0052`, `-0053`) and "What is the average cost of a landing page?"
  (`serp-0071`); H2 6 ↔ "Are Google landing pages free?" (`serp-0071` — the free page and what it
  cannot do); FAQ ↔ "How much does a sales funnel cost?" (`serp-0056`; proposed #15) and "Can ChatGPT
  build a landing page?" (`serp-0054`, `-0055` — answered without disparaging the tools).
- **FAQs (7):** the catalogue's I.5 set, pricing first.
- **Schema:** project `Offer`.
- **Links out (5):** `/services/web-development`, `/services/email-sms-marketing`,
  `/services/crm-automation`, `/services/ui-ux-design`, post #7. **Links in (4):**
  `web-development.mdx:52`, the web-development FAQ L102–104, the bundle's Follow-Up tier, the
  email/SMS page.
- **Cluster (2):** #7; proposed #15 (funnel or page — from `serp-0056` and its cost PAA).
- **Priority:** tier 3 on the cost questions (post #7 and the FAQ); the Soft High agency head is
  tier 5.
- **Deliberately absent:** conversion-rate claims; "high-converting".

### M.6 `/services/google-business-profile`

- **Term set (7 · 11):** `google business profile management services` Medium (`serp-0059`),
  `google business profile optimisation service` Medium (`serp-0078`), `google business profile
management agency` Medium (`serp-0079`), `google business profile management uk` Low (`serp-0058`
  — Google's own), the cost and free FAQ rows (`google business profile management cost` Low,
  `serp-0068`; `is google business profile manager free`; `how much does it cost to optimise a google
business profile`); supporting on post #5's rows and the proposed #16.
- **SERP shape to beat:** Google's own properties (business.google.com, support.google.com) in the
  top five on every wording, Soft (A1–A4), no ads above the fold, an AI Overview, a local pack on
  the near-me wording (`serp-0107`); one UK agency — virens.co.uk — in every top ten and first on the
  optimisation wording, beside US and Canadian agencies (GMB Gorilla, Merchynt), Uberall, Semrush and
  Localo. The abbreviation collides with a parking company (`serp-0081`). PAA: account questions ("Is
  Google Business Profile Manager free?", "How do I request to manage a Google Business Profile?"),
  "How much is a Google business account in the UK?", "Is there a fee for a Google Business Profile?",
  "How much does it cost to optimize a Google My Business profile?".
- **Information gain:** the profile pages captured are Google's help, tool listings and one UK
  specialist whose page does not say who holds owner access after the engagement (`04` § 4.5); this
  page is written by a firm that has no profile and explains Google's eligibility rules from the
  guideline text, states that the client is always the owner and WebAsk a manager, and treats
  suspensions without a guarantee.
- **Title (37):** Google Business Profile Management UK
- **Meta (149):** Your Google Business Profile run properly in your own account: categories,
  services, posts, photos and listings, for a real premises or service area.
- **H1:** Google Business Profile management for UK local businesses
- **H2 outline:** 1 We have no profile of our own, and here is why that matters to yours (rewritten
  from `seo.mdx:24`) · 2 Are you eligible? (Google's words — R58; service-area businesses hide the
  address) · 3 Your account, our management — never the other way round (Q20) · 4 What "run properly"
  means (categories, services, attributes, hours, photos, description, NAP matching the site) ·
  5 "Google Business Profile suspended" — reinstatement without the myths (honest timelines, no
  promises) · 6 Posts, questions and photos every week · 7 Listings beyond Google: Bing Places, Apple
  Business Connect, Yell, FreeIndex (the add-on at cost) · 8 Reviews belong to the review programme
  (link; R13) · 9 What the monthly report shows (Google's insights) · 10 What it costs per location
  (`[D4]`) · 11 Two limits (no profiles for addresses nobody works from; no content/link SEO)
- **PAA mapping:** H2 2 ↔ "How do I check who owns a Google Business Profile?" (`serp-0058`); H2 3 ↔
  "How do I request to manage a Google Business Profile?" (`serp-0059`); H2 5 ↔ "What happens if the
  profile is suspended?" (`serp-0069`; post #5 answers "How do I unsuspend…" and "How do I contact
  Google about a suspended account?"); H2 10 and FAQ 1 ↔ "Is there a fee for a Google Business
  Profile?" (`serp-0068`), "Is Google Business Profile Manager free?" (`serp-0058`, `-0059`), "How
  much does it cost to optimise a Google Business Profile?" (`serp-0078`), "How much does it cost to
  hire a Google partner?" (`serp-0079`); FAQ ↔ "Does WebAsk need a UK office to manage my profile?"
  (constructed; D1).
- **FAQs (8):** the catalogue's I.6 set, pricing first.
- **Schema:** monthly `Offer` + set-up `Offer`; `knowsAbout` gains "Google Business Profile".
- **Links out (5):** `/services/seo`, `/services/review-management`,
  `/services/local-business-plans`, post #5, `/locations` (clients' local markets, not ours).
  **Links in (6):** `seo.mdx:20`, the `seo` catalogue exclusion, beauty L98 and
  `data/industries.ts:237`, the bundle's Reputation tier, the three wave-1 industry pages, the
  reviews page.
- **Cluster (2):** #5; proposed #16 (checking a Maps ranking honestly — `serp-0091` and its PAA, with
  the no-guarantee sentence).
- **Priority:** tier 3 on the cost and "is it free" questions; tier 2 on the industry × profile
  inserts; the bare head is never expected (Google's own).
- **Deliberately absent:** map-pack ranking promises; "rank #1".

### M.7 `/services/local-business-plans` (bundle)

- **Term set (8 · 12):** `marketing packages for small business uk` Medium (`serp-0060`), `small
business marketing packages` **High** (`serp-0073`), `local business marketing services` **High**
  (`serp-0074`), `digital marketing packages for small business` **High** (`serp-0083`), the PAA rows
  `how much does a marketing package cost`, `how much should a small business pay for marketing`,
  `how much does digital marketing cost for a small business`, and the booking-cost question **High**
  (`serp-0093`); supporting on the four GoHighLevel-cost rows (post #12) and the transfer row (#10).
- **SERP shape to beat:** 9/9 UK on the head, Soft (A2/B7), four ads above and two in the feed — with
  **gohighlevel.com advertising on the bundle's own head term** — an AI Overview, and a local pack on
  the "services" wording (`serp-0074`). Every agency result is a packages page with tiers
  (smashmarketing.co.uk, wrise.co.uk, republicmarketing.co.uk, iconicdigital.co.uk,
  petitedigital.co.uk, dandymarketing.co.uk, vizcomdesign.co.uk) beside SuperHub's directory and
  listicles. The "gohighlevel agency uk" head is the vendor's own pages plus four Set A agencies
  (`serp-0076`); "all in one platform" is a software SERP (`serp-0087`). PAA: "How much does a
  marketing package cost?", "How much should a small business pay for marketing?", "Which marketing is
  best for small businesses?", "How can I promote my business locally?".
- **Information gain:** the packages pages captured on 24 September 2026 list features and prices and
  say nothing about where the data sits or what leaves with the client (`04` § 4.5: no page states who
  holds access after the engagement; hidden pricing is the norm on the service heads); this page
  explains the hosted model itself — the sub-account, the processor chain, usage in which currency,
  and exactly what leaves with you, in the vendor's own transfer and eject conditions — before it
  lists the tiers.
- **Title (43):** Local Business Plans: Marketing Run for You
- **Meta (157):** Missed calls texted back, follow-up sent and reviews asked for, run for you in a
  hosted sub-account. Three plans, month to month, with the exit written down.
- **H1:** Local business plans: the phone, the follow-up and the reviews, run for you
- **H2 outline:** 1 Hosted or owned — your choice (ownership stays the default; hosting is the
  labelled exception — R30) · 2 The three plans (Answer, Reputation, Follow-Up; the AI module) ·
  3 Where your data sits and who is responsible (J.7 hosted-data paragraph — R30, R31, R32) · 4 What
  usage costs, in which currency (R39; the FX-and-usage rule) · 5 Your number, your inbox, your
  calendar (KYC; divert-first — R36) · 6 If you leave (R33, the `01` § 6 conditions — `02` § 7.4) ·
  7 What each plan reports every month · 8 Clinics and practices: why patient data stays in your own
  account (R32) · 9 What the plans cost (`[D4]` per tier; set-up per module) · 10 What is not in any
  plan (a website; ads; social posting) · 11 Start with Answer
- **PAA mapping:** H2 2 ↔ "Which marketing is best for small businesses?" (`serp-0060`) and "How can
  I promote my business locally?" (`serp-0074`); H2 4 ↔ "How much does GoHighLevel charge for SMS?"
  (`serp-0075`; post #12 carries the dated figure); H2 5 ↔ the number and KYC questions (`serp-0084`
  related; Q14); H2 6 ↔ "What happens to my data if I leave?" (constructed; D11) and `serp-0086`; H2 9
  and FAQ 1–3 ↔ "How much does a marketing package cost?" (`serp-0060`), "How much should a small
  business pay for marketing?" (`serp-0073`), "How much does digital marketing cost for a small
  business?" (`serp-0083`); FAQ ↔ "How much does an online booking system cost?" (`serp-0093` — what
  the plan includes and what a standalone product charges, in the vendors' units); FAQ ↔ "What is a
  GoHighLevel agency?" (`serp-0076` — and why this page is not one), "Is there a cheaper alternative
  to GoHighLevel?" and "Is GoHighLevel worth the money?" (`serp-0061` — the own-account route,
  honestly).
- **FAQs (8):** the catalogue's I.7 set, pricing first; the booking FAQ added from `serp-0093`.
- **Schema:** `Service` with `hasOfferCatalog` → `OfferCatalog` of three tier `Offer`s (+ the module),
  set-up `Offer` per module — validate in the Rich Results Test at implementation (`05` § 5).
- **Links out (10):** every component page (six), `/services/crm-automation` (the owned
  alternative), `/services/web-development`, `/pricing`, `/process`, post #10, post #12. **Links in
  (6+):** the crm-automation FAQ L530–532, `data/copy/home.ts:154`, the `/pricing` Plans block, every
  component page's limit section, the wave-1 industry pages' grids, the topic archive's anchor.
- **Cluster (3):** #10, #12, #4.
- **Priority:** tier 3 on the three cost PAAs and the booking-cost question (all captured, three of
  them High); tier 1 on the hosted-data and transfer questions (post #10, where the vendor's help
  pages are the only competition); the packages heads are tier 5 under the vendor's own ads.
- **Deliberately absent:** "all-in-one" hype; savings claims; any component keyword.

### M.8 `/services` index and the topic archive

- **`/services` category intros (2–3 sentences each, count-free):** Build — "Websites and software
  you own, priced as projects and handed over." Grow — "Being found, chosen and booked: search, your
  profile, your reviews, the calls you miss and the follow-up you never send, all monthly."
  Automate & run — "The system behind it, kept running: hosted plans, CRM builds, AI, maintenance."
  H1 per `02` I.9. Meta drafted and counted in `09-content-drafts/index-and-nav.md` (155).
- **`/blog/topic/local-marketing`:** label "Local business marketing"; anchor `local-business-plans`;
  description under 160 characters drafted with the calendar; `noindex` while empty (existing
  behaviour for empty archives, `05` § 2.1).

## 4. Supporting clusters

The calendar is `09-content-drafts/blog/calendar.md` (items 1–12 drafted; 13–17 proposed in S6);
outlines for items 4–12 are in `09-content-drafts/blog/outlines.md`. Publication follows doc 08 § 8:

| Order | Item                                                                                                                                                   | Pillar                                                       | Tier              | Trigger                                                   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ | ----------------- | --------------------------------------------------------- |
| 1     | #1 missed-call text rules                                                                                                                              | text-back                                                    | 1                 | the text-back page live                                   |
| 2     | #2 Google reviews after the DMCC Act                                                                                                                   | reviews                                                      | 1                 | the reviews page live                                     |
| 3     | #3 AI receptionist rules and costs                                                                                                                     | receptionist                                                 | 1                 | the receptionist page live                                |
| 4     | #8 the CMA's vet Order                                                                                                                                 | vets (industry)                                              | 2                 | doc 03 § B10 and the vets page                            |
| 5     | #9 missed calls in the trades                                                                                                                          | trades (industry)                                            | 2                 | the trades page                                           |
| 6     | #5 profile suspended                                                                                                                                   | profile                                                      | 3                 | the profile page live                                     |
| 7     | #7 landing page or website                                                                                                                             | landing pages                                                | 3                 | the landing-pages page live                               |
| 8     | #11 WhatsApp rules and pricing                                                                                                                         | text-back                                                    | 3                 | the 1 October 2026 rates re-read (`10` § 2)               |
| 9     | #12 GoHighLevel in GBP                                                                                                                                 | bundle                                                       | 3                 | `07`'s FX band final; the bundle live                     |
| 10    | #4 reminder texts                                                                                                                                      | bundle                                                       | 1                 | the bundle live                                           |
| 11    | #6 database reactivation                                                                                                                               | email/SMS                                                    | 1                 | the email/SMS page live                                   |
| 12    | #10 hosted CRM or your own account                                                                                                                     | bundle                                                       | 1                 | the bundle live                                           |
| 13–17 | proposed: #13 review removal · #14 receptionist vs answering service · #15 funnel or page · #16 checking a Maps ranking · #17 text-back tools compared | reviews · receptionist · landing pages · profile · text-back | 3 / 1 / 3 / 3 / 3 | S7 accepts or drops each with its row; #17 is second wave |

Every proposed item cites its evidence in the calendar; none is drafted. Industry inserts (the
three wave-1 pages' service sections) and the one location variant (`05` § 6) complete the clusters.

## 5. Off-page, E-E-A-T, SERP features, indexation and measurement (S6)

### 5.1 E-E-A-T signals available with no clients — and the ones that are not

Available: the founder byline with a `Person` node on every post and the `about` link on every page
(`lib/jsonld.ts` `personNode`); primary-source citations with the date read, in the sentence (the
ICO, CMA208, PECR, the Order — `10`); regulator vocabulary in `knowsAbout`, added per shipped page
(`05` § 5); the process and pricing pages with published `[D4]` ladders and the two-part display; the
exit terms written on the bundle page; bounded original counts from `04` ("we read eleven UK agencies
… on 24 September 2026"). Not available, and never simulated: reviews, testimonials, case studies,
client logos, "results". The proof rule costs nothing in rank on this line — on the text-back SERP a
page with placeholder testimonials ranks first (`04` § 4.5) — so the pages publish none they have
not earned.

### 5.2 Off-page (proposals with effort; no bought links)

| Asset                                                                      | Applied to the new line                                                                                                                                                                                                                                                                                                                                                                                              | Effort (sessions) | Owner / gate |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------ |
| Tier 1 agency directories — Clutch, DesignRush, GoodFirms, G2 (doc 05 § 4) | add the new service categories to the existing listings (email marketing, reputation management, landing pages where the directory has the category); the email-agency SERPs are directory-shaped on Bing and carry Semrush's and Clutch's directories on Google (`serp-0039`–`serp-0042`, `serp-0110`), so the listing is a SERP presence too                                                                       | 1                 | Q23          |
| Bing Places · Apple Business Connect · Foursquare                          | eligibility checked honestly first (doc 05 § 4's caveat); no listing that needs a presence WebAsk has not got                                                                                                                                                                                                                                                                                                        | 0.5               | D1           |
| Yell, FreeIndex, Thomson Local                                             | service-area listings with the Swedish registered address, NAP = name + phone + website                                                                                                                                                                                                                                                                                                                              | 0.5               | —            |
| HighLevel Certified Directory                                              | **verified in `01` § 9 [S58]:** listing needs the paid certification programme ("$97 /month" or "$970 /year", as the vendor prints it), the proctored exam, and a live HighLevel subscription, and lapses with any of them; the badge is valid two years with two further badges a year. A "certified" or "partner" claim is R40's rule — only if it is true on the day. Proposal: a Q23 decision, not a launch item | founder time      | Q23, D11     |
| UK trade press and associations, wave 1                                    | only what the captures surfaced: vettimes.com (`serp-0102`), the Veterinary Marketing Association (vma.org.uk, `serp-0065`, `serp-0100`) and the BVA (`serp-0101`) for vets; for trades the SERPs surfaced Checkatrade (a directory, `serp-0089`) and no trade press; for garages nothing beyond products and gov.uk — those two are researched before any outreach, never assumed                                   | 1 per vertical    | Q23          |
| Digital-PR asset 1 — the PECR check                                        | "eleven UK agencies ranking for these services on 24 September 2026: one mentioned PECR, one the CMA, none the DMCC Act, the TPS or Ofcom" (`04` § 4.6) — a dated, bounded study with method, republished annually; never names an agency as non-compliant                                                                                                                                                           | 2                 | Q23          |
| Digital-PR asset 2 — the VAT-statement count                               | "three of thirteen UK self-serve tools and four of eleven agencies state their VAT position" (`07` § 6.1 rule 5) — the reg 6(2) angle, with the count's date                                                                                                                                                                                                                                                         | 1                 | Q23          |
| Digital-PR asset 3 — GoHighLevel in GBP                                    | post #12 as the asset: the FX exposure stated as a dated band, never a point conversion, against the five explainers that convert at a point rate (`bing-0022`)                                                                                                                                                                                                                                                      | inside #12        | `07` § 2.1   |

Never: bought links, link exchanges, a cross-canonical or hreflang pair with naxdor.com, a
directory that requires a UK premises, or a "best agency" claim on a "best … agency uk" SERP
(`serp-0110`; `04` § 4.6).

### 5.3 SERP-feature readiness

An AI Overview sat on 96 of 107 captures and on every text-back, receptionist and email-agency term
(`03` § 6), so every page opens with a one-paragraph answer in the buyer's words, carries at least one
table with dated figures (the cost FAQ, the allowance, the schedule method), and puts the captured
PAA questions in the FAQ block verbatim where the wording is a real query. Local packs appeared only
on agency-shaped and near-me wordings (six of 107); those six terms are forgone (D1) and the pages
concerned enter on their long tail, which is where the sections above put them. No AI-specific
schema, no `llms.txt` (locked).

### 5.4 Indexation and promotion

`status: "draft"` → `noindex` (`05` § 7) → live in the commit with the boundary edits → the sitemap
entry derives from `liveServices` → a GSC URL-inspection request the same day → the topic archive
flips when its first post is published. Programmatic variants (`05` § 6) ship `noindex, follow` under
the inherited gate and are promoted one at a time. The quarterly sweep: a page with zero impressions
after six months goes `noindex` and back to review (doc 05 § 6).

### 5.5 Measurement (one row per page; expectations, not promises)

The head-term check runs monthly with the S3 capture tooling (`private/tools/serp-capture/`, five
terms per window on `google.co.uk`, `pws=0`, `03` § 1) and records ordinals only. "On track" is the
signal that the page is doing what the plan expects at that horizon for a domain with no authority;
its absence is a review, not a failure.

| Page               | GSC queries to watch (page filter)                                                                                                  | Monthly head-term check (ordinal)                                               | 90 days — on track if                                                                 | 180 days — on track if                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| text-back          | the legal and "automatically text back" questions; "text back missed calls"; the two UK-suffixed heads                              | `missed call text back uk`, `missed call text back service uk`                  | impressions on the questions and on post #1; any impression on a head                 | post #1 in the top 20 on the legal question; a head term inside the top 30 (a Soft SERP)                               |
| reviews            | "incentivised reviews uk", "review gating uk", "how to ask for google reviews legally uk" (post #2); "review management service uk" | `review management service uk`, `google review management services uk`          | impressions on post #2's compliance terms                                             | post #2 in the top 20 on one compliance term; the page receiving impressions on a "services uk" wording                |
| receptionist       | "is an ai receptionist legal uk" (post #3); the cost questions; the four High heads                                                 | `ai receptionist uk`, `ai phone answering service uk`                           | impressions on post #3's rules and cost terms; none expected on a head                | post #3 in the top 20 on the legal question; the page indexed and receiving impressions on any head (Hard SERPs)       |
| email/SMS          | "database reactivation uk" (post #6); "how much does an email marketing agency cost"; the four agency heads                         | `email marketing agency uk`, `email marketing agency for small business`        | impressions on posts #6 and #4; on the cost FAQ                                       | a head term inside the top 30; post #6 in the top 20                                                                   |
| landing pages      | "landing page cost uk", "landing page or website" (post #7); the agency head                                                        | `landing page design agency uk`, `landing page design uk`                       | impressions on post #7's cost questions                                               | post #7 in the top 20 on a cost question; the page inside the top 30 on a head                                         |
| profile            | the "is it free" and cost questions; "google business profile suspended help" (post #5); the services/optimisation wordings         | `google business profile management services`, `… optimisation service`         | impressions on post #5 and the FAQ questions                                          | post #5 in the top 20 on a suspension question; the page inside the top 20 on one tail wording (one UK agency ranks)   |
| bundle             | the three cost PAAs; "marketing packages for small business uk"; post #10's transfer terms; post #12's GBP-cost terms               | `marketing packages for small business uk`, `small business marketing packages` | impressions on the cost PAAs and on posts #10 and #12                                 | post #10 in the top 20 on the transfer term; the page inside the top 30 on a packages wording (under the vendor's ads) |
| vets (industry)    | "cma vet price list website", the Order's name (post #8); "vet practice marketing uk"                                               | `vet practice marketing uk`, `vet clinic marketing agency`                      | impressions on post #8 (a regulator SERP: sitting under gov.uk is the expectation)    | post #8 in the top 10 below gov.uk on the price-list term; the page inside the top 20 on the practice-marketing term   |
| trades (industry)  | "local seo services for plumbers", "seo for plumbers uk", "missed call text back for plumbers"; post #9                             | `local seo services for plumbers`, `missed call text back for plumbers`         | impressions on the text-back and SEO vertical terms                                   | the page inside the top 20 on `local seo services for plumbers` (High, Soft, agency SERP) or the text-back term        |
| garages (industry) | "ai receptionist for garages"; "mot reminder text service" (gov.uk first by design)                                                 | `ai receptionist for garages`                                                   | impressions on the receptionist term; none expected on the reminder term above gov.uk | the page inside the top 20 on `ai receptionist for garages` (High, Soft, products)                                     |

### 5.6 The doc 08 § 8 order, applied page by page

| Tier | Target                     | On this line                                                                                                                                                                                         |
| ---- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | compliance long-tail       | posts #1, #2, #3, #4, #6, #10 and the reviews page's own entry terms (`incentivised reviews uk` High on a SERP with no agency page); the receptionist's rules half                                   |
| 2    | industry × service         | `local seo services for plumbers` (High), `ai receptionist for garages` (High), `missed call text back for plumbers`, the vets Order terms — on the industry heads, the doc 08 matrix rule           |
| 3    | cost and pricing questions | every page's pricing-first FAQ from a captured PAA; posts #5, #7, #11, #12; the bundle's three cost PAAs and the booking-cost question (three of them High)                                          |
| 4    | service × area             | only the profile page's programmatic variant, later, under the gate (`05` § 6)                                                                                                                       |
| 5    | service heads              | last; the text-back and email-agency heads are Soft and High, the profile head is Google's own, the receptionist heads are Hard, the packages heads carry the vendor's ads — none is a launch target |

## 6. Wave-1 industry pages (the SEO half; the pages themselves are S7 drafts gated on doc 03)

| Page                               | Term set (rows) and shape                                                                                                                                                                                                                                                                   | Information gain (bounded)                                                                                                                                                                                                | Links                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/industries/veterinary-practices` | `vet clinic marketing agency` Medium with a local pack (`serp-0065`), `vet practice marketing uk` Medium (`serp-0100`); post #8 takes the Order terms (`serp-0101`, `serp-0102`) — a Soft agency SERP led by the one agency that sells compliance, and a regulator SERP the post sits under | of the three vet-marketing agencies read in `06` L.2.2, one names the CMA and none publishes a price; the page is Order-accurate and dated, never "first" or "only" (a Compliance Pack and vetcomply.co.uk already exist) | up `/industries`; six `relatedServiceSlugs`; post #8; the bundle; `knowsAbout` gains the Order's name                                                       |
| `/industries/trades-home-services` | `local seo services for plumbers` **High** (`serp-0092`), `seo for plumbers uk` Low (`serp-0089`), `missed call text back for plumbers` Medium (`serp-0009`), `plumber marketing agency uk` (Bing-only, provisional); the cost PAAs — a crowded, named vertical (10/10 UK agencies on Bing) | of the three trades agencies read in `06` L.3.1, two publish retainers "from £1,000 +VAT" and none mentions the CCRs or text-back; the page enters on the sub-£200 plan and the register and cancellation rules           | up `/industries`; six `relatedServiceSlugs`; post #9; `/services/seo`'s packages section if D13 opens it; `knowsAbout` gains the CCRs, the CRA and Gas Safe |
| `/industries/garages-mot-centres`  | `ai receptionist for garages` **High** (`serp-0066`), `mot reminder text service` Low with gov.uk first (`serp-0067`); the receptionist cost PAAs on post #3 with this page supporting — a product SERP the page must not lead on                                                           | of the three garage products read in `06` L.4.1, one states the AI disclosure; the page's wedge is the reminder as a service message, the Code and the forecourt rules, with the receptionist a plan inside the bundle    | up `/industries`; six `relatedServiceSlugs`; the bundle's AI module; `knowsAbout` gains The Motor Ombudsman                                                 |

## 7. Acceptance self-check (S6, 25 September 2026)

Rows are counted as primary · primary plus supporting (`shape.mjs`); the acceptance reads "≥ 8
keyword rows" as the second figure, because a post's row that names the page as its supporting URL
is a row the page is written to hold. Landing pages carries 5 as primary and 10 in total.

| Page          | Rows ≥ 8 | Info-gain sentence | H2 ↔ PAA | Links in ≥ 3 | Links out ≥ 3 | Cluster ≥ 2    | Schema list | Measurement row |
| ------------- | -------- | ------------------ | -------- | ------------ | ------------- | -------------- | ----------- | --------------- |
| text-back     | 7 · 16   | ✅                 | ✅       | 6            | 8             | 3              | ✅          | ✅              |
| reviews       | 7 · 12   | ✅                 | ✅       | 7            | 7             | 1 + 1 proposed | ✅          | ✅              |
| receptionist  | 8 · 14   | ✅                 | ✅       | 6            | 5             | 1 + 1 proposed | ✅          | ✅              |
| email/SMS     | 10 · 12  | ✅                 | ✅       | 5            | 7             | 3              | ✅          | ✅              |
| landing pages | 5 · 10   | ✅                 | ✅       | 4            | 5             | 1 + 1 proposed | ✅          | ✅              |
| profile       | 7 · 11   | ✅                 | ✅       | 6            | 5             | 1 + 1 proposed | ✅          | ✅              |
| bundle        | 8 · 12   | ✅                 | ✅       | 6+           | 10            | 3              | ✅          | ✅              |

Four pages meet the two-post cluster only with an S6 proposal (#13–#16); if S7 drops a proposal, the
page's cluster falls to one post and the acceptance is re-recorded, not waved through.

## Sources

`[Sxx]` keys resolve in `10-sources.md`. The SERP records are `serp-log.json` [S157]; the
certification terms are [S58]; the competitor readings are `04` and `06` as they cite them.
