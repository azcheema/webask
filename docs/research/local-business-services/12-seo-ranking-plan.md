# 12 — SEO ranking plan

> Purpose: how each new page ranks: term set, information gain, on-page template, cluster, links, E-E-A-T, off-page, measurement. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1):
> every section below is a **hypothesis** until the session named there confirms, amends or
> rejects it with evidence.

## 1. Method (planning § 5.8)

- **Priority and realism first.** Apply doc 08 § 8's order page by page and doc 02 § 5's KD ≤ 35
  posture: the new pages win on compliance long-tail, cost questions and industry × service before any
  head term. Every expectation is written as an expectation for a zero-authority `.co.uk`, never a
  promise.
- **Information gain is a test, not a slogan.** For each page, read the top UK results captured in 03
  and name the one dimension the page is measurably better in (doc 06's rule); if none can be named,
  the page is not ready to draft.
- **On-page.** Title patterns per page type (monthly plan, project, bundle) within the 51-char budget;
  H1 in the buyer's words from 03; answer-first opening; H2s from PAA; FAQ pricing-first; schema per
  05 with `unitText` by cadence; dated figures in the sentence; British English; no implied proof.
- **Cluster.** Each service page is a pillar: 2–4 posts from the calendar (compliance angle first —
  App. E.3), industry inserts, and a location variant only where 05 finds a genuine local angle.
- **Links.** Internal mesh per doc 08 § 1 (up to pillar, down to children, sparse cross-silo); the
  bundle links to every member and back; blog topic anchors to the bundle.
- **E-E-A-T without clients.** Founder byline and `Person` node, primary-source citations with dates,
  regulator vocabulary in `knowsAbout`, the process and pricing pages, transparent exit terms; reviews
  and case studies are absent by design and are never simulated.
- **Off-page.** Doc 05 § 5 citation tiers (Clutch/DesignRush/GoodFirms/G2 first; Bing Places and
  Apple Business Connect only if eligible; Yell, FreeIndex, Thomson Local), the HighLevel Certified
  Directory (verify), UK trade press per wave-1 vertical, and digital-PR assets from bounded original
  data (the competitor/PECR check; the GBP-vs-USD cost analysis) — proposals with effort, no bought
  links, no cross-canonical to naxdor.com.
- **SERP features.** PAA capture through FAQ blocks; AI Overview readiness through answer-first
  paragraphs and tables; no AI-specific schema or `llms.txt` (locked).
- **Technical and measurement.** Draft `noindex` → live → sitemap → GSC request; the doc 05 quality
  gate for programmatic variants; monthly head-term checks via Playwright on `google.co.uk`; GSC query
  reports per page; the six-month zero-impression sweep; a measurement row per page in 12.

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

## 3. Per-page skeletons (App. M — information gain, title/meta, H2 outline, FAQs, schema, links)

Conventions: titles are counted without the ` · WebAsk` suffix the layout adds (budget 51); metas
are counted in full (140–160); H2s carry the question or intent they answer, drawn from Appendix G
wording where a real query surfaced — S3's PAA capture may add or replace H2s, and every H2 must
still map to a captured question or a rule in Appendix J; the FAQ set is Appendix I's, pricing first;
schema on every page is `WebPage` + `Service` (+ `Offer`, and a second set-up `Offer` where a set-up
fee exists) + `FAQPage` + `BreadcrumbList`, `areaServed` United Kingdom only; the information-gain
sentence names the dimension against the pages checked on 2026-09-23 (bounded, R-rule wording).
"Deliberately absent" comes from Appendix E.1 and is repeated in each page's L8 provenance comment.

### M.1 `/services/missed-call-text-back`

- **Information gain:** of the UK missed-call text-back pages checked on 2026-09-23 (Call2SMS,
  TextBack Pro, SMB Booster), none mentioned PECR; this page prints the actual message, explains the
  ICO's content test that keeps it a service message, and states which business details a UK number
  is registered to.
- **Title (47):** Missed-Call Text-Back Service for UK Businesses
- **Meta (146):** Every missed call texted back in seconds from your own number, written as a service
  message under PECR. Set-up plus a monthly plan, usage at cost.
- **H1:** Missed-call text-back for UK businesses
- **H2 outline:** 1 What happens in the first sixty seconds after a missed call (the flow, on a
  divert from your own number) · 2 The text we send, word for word (J.7 template; why it carries no
  offer — R01, R02) · 3 "Why do I get a text message after a missed call?" — the caller's side
  (App. G question; what they can reply, who answers — R03) · 4 Is an automatic text back allowed in
  the UK? (the ICO content test; corporate vs individual — R04, R05, R12) · 5 Your number, or a new
  one registered to your business (KYC facts — R36, R37) · 6 One inbox: replies, web chat, WhatsApp
  at cost (R10) · 7 What the monthly report shows (calls missed, texts sent, replies, bookings — no
  outcome figures) · 8 What it costs, and what usage costs (`[D4]`; R38, R39) · 9 Two limits, stated
  up front (no promotional follow-up from this plan; no call answering — links to the two sibling
  pages) · 10 If you leave (export; R33 for hosted plans)
- **FAQs:** Appendix I.1 (8, pricing first).
- **Schema:** as above; `Offer` monthly + set-up `Offer`.
- **Links out:** `/services/ai-receptionist`, `/services/crm-automation`, `/services/email-sms-marketing`,
  `/services/local-business-plans`, the PECR post (E.3 #1), the WhatsApp post (E.3 #11), `/pricing`,
  `/contact`. **Links in:** aesthetic and beauty industry pages (App. I.8), `ai-integration.mdx:80`,
  the bundle's Answer tier, the trades industry page (wave 1), the PECR post.
- **Cluster:** E.3 #1, #9, #11.
- **Deliberately absent:** any recovery percentage; any implied client; "not marketing" as a label.

### M.2 `/services/review-management`

- **Information gain:** the review-software pages checked (NiceJob, Podium, Birdeye comparisons)
  sell volume; this page prints the CMA's own rules on cherry-picking and incentives, Google's policy
  sentence, and the operator's liability under § 3.3 of CMA208, and designs the flow around them.
- **Title (42):** Google Review Management for UK Businesses
- **Meta (147):** Google reviews asked for the lawful way: every customer asked, nobody incentivised,
  nothing hidden. Built to the CMA's guidance and Google's rules.
- **H1:** Google review management for UK local businesses
- **H2 outline:** 1 Ask everyone, incentivise nobody, hide nothing (R13 — the whole design in one
  sentence) · 2 "How to get more Google reviews from customers" — the honest answer (App. G; timing
  per service, one request, no pressure on the premises — R14, R22) · 3 What changed on 6 April 2025
  (DMCC Act; CMA208 cherry-picking and labelling; the penalty with its qualifier — R15, R16) · 4 Why
  we will not run a "rate us first" flow (R14; Google's policy quoted — R22) · 5 Replies, drafted for
  your approval (R19) · 6 The widget shows what Google shows (R18) · 7 We are inside the rules too
  (R17) · 8 Dentists: the GDC layer (R20; on the page only as a short section linking the dental
  industry page) · 9 What the monthly report shows · 10 What it costs (`[D4]`) · 11 Two limits
  (no suppression, no crisis PR)
- **FAQs:** Appendix I.2.
- **Schema:** monthly `Offer` + set-up `Offer`.
- **Links out:** `/services/google-business-profile`, `/services/email-sms-marketing`,
  `/services/crm-automation` (L74 review paragraph), `/industries/dental-practices`,
  `/industries/beauty-wellness-clinics`, the DMCC reviews post (E.3 #2), `/pricing`. **Links in:**
  `crm-automation.mdx:74`, dental L67, beauty L59-61 and L98, `seo` catalogue exclusion, the bundle's
  Reputation tier, the GBP page.
- **Cluster:** E.3 #2; plus a dental-specific post later.
- **Deliberately absent:** star-rating promises; before/after counts; a review widget on aesthetic
  pages until R21 is resolved.

### M.3 `/services/ai-receptionist`

- **Information gain:** the UK AI-receptionist pages checked (HeyJodie, BookedSolid, Hand On Web,
  VoIP Shop guides) compete on price and features; this page states why it is inbound-only under
  PECR regs 19 and 21, prints the opening line with both disclosures, and explains the unsettled
  live/automated classification honestly.
- **Title (39):** AI Receptionist for UK Small Businesses
- **Meta (149):** A voice agent that answers the calls you miss, books appointments and hands over
  when it should. Inbound only, disclosed up front, on a monthly plan.
- **H1:** An AI receptionist for UK small businesses, inbound only
- **H2 outline:** 1 What it does on a call, and what it hands over (the narrow job; fallback — I.3
  includes) · 2 "Will callers know they are talking to an AI?" (the opening line, J.7; R25, R26) ·
  3 Is an AI answering your phone legal in the UK? (inbound is the clean case; regs 19/21; the
  classification "unsettled, with a lean" — R23, R24) · 4 Why it never calls anyone (R24) · 5 Your
  number stays; the divert options (out of hours, overflow, every call) · 6 Booking, summaries and
  your CRM record · 7 What it will not answer (regulated subjects; clinics → bespoke build — R27) ·
  8 Minutes: what is in the plan and what overage costs (R29, R39) · 9 The monthly report (R28
  fields) · 10 When a bespoke agent is the right answer (link to `/services/ai-integration`)
- **FAQs:** Appendix I.3.
- **Schema:** monthly `Offer` + set-up `Offer`; note minutes as `usageNote`, not a price.
- **Links out:** `/services/missed-call-text-back`, `/services/ai-integration`,
  `/services/local-business-plans`, the AI receptionist cost post (E.3 #3), `/process`. **Links in:**
  `ai-integration.mdx` new paragraph after L30, `data/services.ts:559` boundary, beauty L79-81
  (only if R27 allows — the plan says clinics stay bespoke, so beauty links the bespoke build), the
  bundle's AI module, the garages industry page (wave 1).
- **Cluster:** E.3 #3.
- **Deliberately absent:** answer-rate claims; "human-like"; per-minute prices before D4.

### M.4 `/services/email-sms-marketing`

- **Information gain:** the UK email-agency pages surfaced by App. G sell creative and volume; this
  page starts from who may lawfully be messaged (legal form, soft opt-in in the statute's words) and
  treats list hygiene and the consent audit as month one — with the SRA and CAP carve-outs for
  solicitors and clinics.
- **Title (45):** Email Marketing Agency UK — Email & SMS Plans
- **Meta (151):** Campaigns written, sent and reported every month, only to the people you may
  lawfully message under PECR, with an opt-out in every one. A monthly plan.
- **H1:** Email and SMS marketing for UK small businesses, run monthly
- **H2 outline:** 1 The campaigns your CRM build stopped at (the boundary with `/services/crm-automation`;
  R11) · 2 "Who can we legally email or text in the UK?" (legal form; soft opt-in verbatim — R04,
  R05, R06, R12; link, never restate at length) · 3 Month one is the consent audit (what happens to
  records with no provenance) · 4 Two campaigns a month, one automation — what that means in practice
  (welcome, follow-up, rebooking, win-back) · 5 "Database reactivation" done lawfully (App. G term;
  the records that can carry it) · 6 SMS and WhatsApp: what they cost and who may receive them (R10,
  R39) · 7 Clinics and dental practices: what a message may say (CAP; recall vs marketing — J.6) ·
  8 Solicitors: existing clients only (R41) · 9 The monthly report: replies and bookings, not open
  rates · 10 What it costs (`[D4]`) · 11 Two limits (bought lists; the build itself)
- **FAQs:** Appendix I.4.
- **Schema:** monthly `Offer` (no set-up).
- **Links out:** `/services/crm-automation`, `/services/review-management`,
  `/services/landing-pages`, `/industries/aesthetic-clinics`, `/industries/dental-practices`, the
  reactivation post (E.3 #6), the reminders post (E.3 #4). **Links in:** `data/services.ts:509` and
  FAQ L545-547, `crm-automation.mdx:84`, the bundle's Follow-Up tier, the text-back page's limit
  section.
- **Cluster:** E.3 #4, #6, #11.
- **Deliberately absent:** open-rate benchmarks; ROI figures; a restated PECR essay.

### M.5 `/services/landing-pages`

- **Information gain:** the landing-page pages surfaced by App. G are template galleries and
  builders; this page prices a page as a page, states the builder-versus-code performance trade-off
  honestly, and wires consent capture and tracking into the deliverable.
- **Title (42):** Landing Page Design UK — One Page, One Job
- **Meta (143):** One page for one job: a campaign, an offer or a booking page, designed, built,
  wired to your CRM and measured. Priced as a page, not a website.
- **H1:** Landing page design for one campaign, one offer or one booking
- **H2 outline:** 1 One page, one job (what a landing page is for; when a site is the wrong tool —
  the web-development boundary) · 2 Builder or code — the trade-off stated (performance floor; where
  each is right) · 3 "Landing page design cost" — what moves the price (App. G term; `[D4]`) · 4 Wired
  to your CRM: form, calendar, consent at entry, follow-up message · 5 Cookies on a builder page (the
  DUA Act exceptions and the equal-prominence rule — J.6; § 10 row 2) · 6 Offers and prices on the
  page (DMCC pricing rules; VAT clarity under reg 6(2) — R38, R46) · 7 Measurement: events, tags, the
  30-day report · 8 Copy: yours edited, or written as an add-on · 9 Who owns the page (your account,
  your plan, your domain) · 10 When it is a website you need
- **FAQs:** Appendix I.5.
- **Schema:** project `Offer`.
- **Links out:** `/services/web-development`, `/services/email-sms-marketing`,
  `/services/crm-automation`, `/services/ui-ux-design`, the landing-page-vs-website post (E.3 #7).
  **Links in:** `web-development.mdx:52`, web-development FAQ 1, the bundle's Follow-Up tier, the
  email/SMS page.
- **Cluster:** E.3 #7.
- **Deliberately absent:** conversion-rate claims; "high-converting".

### M.6 `/services/google-business-profile`

- **Information gain:** the GBP-management pages surfaced are tool listings and US agencies; this
  page is written by a firm that has no profile and explains Google's eligibility rules from the
  guideline text, including why a virtual office is ineligible and how suspensions are approached.
- **Title (37):** Google Business Profile Management UK
- **Meta (149):** Your Google Business Profile run properly in your own account: categories,
  services, posts, photos and listings, for a real premises or service area.
- **H1:** Google Business Profile management for UK local businesses
- **H2 outline:** 1 We have no profile of our own, and here is why that matters to yours (rewritten
  from `seo.mdx:24`; R46 disclosures aside) · 2 Are you eligible? (Google's words — § 10 row 13;
  service-area businesses hide the address) · 3 Your account, our management — never the other way
  round · 4 What "run properly" means (categories, services, attributes, hours, photos, description,
  NAP matching the site) · 5 "Google Business Profile suspended" — reinstatement without the myths
  (App. G intent; honest timelines, no promises) · 6 Posts, questions and photos every week · 7
  Listings beyond Google: Bing Places, Apple Business Connect, Yell, FreeIndex (the add-on at cost)
  · 8 Reviews belong to the review programme (link; R13) · 9 What the monthly report shows (Google's
  insights) · 10 What it costs per location (`[D4]`) · 11 Two limits (no profiles for addresses
  nobody works from; no content/link SEO)
- **FAQs:** Appendix I.6.
- **Schema:** monthly `Offer` + set-up `Offer`; `knowsAbout` gains "Google Business Profile".
- **Links out:** `/services/seo`, `/services/review-management`, `/services/local-business-plans`,
  the suspension post (E.3 #5), `/locations` (clients' local markets, not ours). **Links in:**
  `seo.mdx:20`, `seo` catalogue exclusion, beauty L98 and `data/industries.ts:237`, the bundle's
  Reputation tier, wave-1 industry pages.
- **Cluster:** E.3 #5.
- **Deliberately absent:** map-pack ranking promises; "rank #1".

### M.7 `/services/local-business-plans` (bundle)

- **Information gain:** the "marketing packages" pages surfaced by App. G list features and prices;
  this page explains the hosted model itself — where the data sits, who is the processor, what usage
  costs in which currency, and exactly what leaves with you — before it lists the tiers.
- **Title (43):** Local Business Plans: Marketing Run for You
- **Meta (154):** Missed calls texted back, follow-up sent and reviews asked for, run for you in a
  hosted sub-account. Three plans, month to month, with the exit written down.
- **H1:** Local business plans: the phone, the follow-up and the reviews, run for you
- **H2 outline:** 1 Hosted or owned — your choice (ownership stays the default; hosting is the
  labelled exception — I.7, R30) · 2 The three plans (Answer, Reputation, Follow-Up; the AI module) ·
  3 Where your data sits and who is responsible (J.7 hosted-data paragraph — R30, R31, R32) · 4 What
  usage costs, in which currency (R39; the FX-and-usage rule) · 5 Your number, your inbox, your
  calendar (KYC; divert-first — R36) · 6 If you leave (R33, verbatim conditions) · 7 What each plan
  reports every month · 8 Clinics and practices: why patient data stays in your own account (R32) ·
  9 What the plans cost (`[D4]` per tier; set-up per module) · 10 What is not in any plan (a website;
  ads; social posting) · 11 Start with Answer
- **FAQs:** Appendix I.7.
- **Schema:** `Service` with `OfferCatalog` of three `Offer`s (+ the module), set-up `Offer` per
  module — validate in the Rich Results Test at implementation (05 § 5).
- **Links out:** every component page, `/services/crm-automation` (the owned alternative),
  `/services/web-development`, `/pricing`, `/process`, the hosted-CRM post (E.3 #10), the GBP pricing
  post (E.3 #12). **Links in:** crm-automation FAQ ~L532, `data/copy/home.ts:154`, `/pricing` Plans
  block, every component page's limit section, the industry pages' service grids.
- **Cluster:** E.3 #10, #12, #4.
- **Deliberately absent:** "all-in-one" hype; savings claims; any component keyword.

### M.8 `/services` index and the topic archive

- **`/services` category intros (2–3 sentences each, count-free):** Build — "Websites and software
  you own, priced as projects and handed over." Grow — "Being found, chosen and booked: search, your
  profile, your reviews, the calls you miss and the follow-up you never send, all monthly."
  Automate & run — "The system behind it, kept running: hosted plans, CRM builds, AI, maintenance."
  H1 per Appendix I.9. Meta drafted and counted at implementation.
- **`/blog/topic/local-marketing`:** label "Local business marketing"; anchor `local-business-plans`;
  description under 160 characters drafted with the calendar; `noindex` while empty (existing
  behaviour for empty archives).

## 4. Supporting clusters

The calendar is `09-content-drafts/blog/calendar.md`; outlines for items 4–12 are in
`09-content-drafts/blog/outlines.md`. Each pillar takes 2–4 posts, compliance angle first; industry
inserts and a location variant only where `05` finds a genuine local angle.

## 5. Off-page, E-E-A-T and measurement

_S6 — the doc 05 § 5 citation tiers applied to the new line; the HighLevel Certified Directory
(verify what listing requires); UK trade press per wave-1 vertical; one or two digital-PR assets from
bounded original data; a measurement row per page with 90/180-day expectations written as
expectations._

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
