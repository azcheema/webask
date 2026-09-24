# 03 — UK demand and keywords

> Purpose: does UK demand exist per service, at what evidence tier, and which terms each page owns. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1):
> every section below is a **hypothesis** until the session named there confirms, amends or
> rejects it with evidence.

## 1. Protocol (planning § 5.2)

1. **Seeds:** per service 2–4 buyer-language head nouns (from Set B product names and PAA wording, not
   GHL feature names — start from App. E.2) × modifiers (`uk`, `for small business`, `cost`, `price`,
   `how much`, `for <vertical>`, `service`, `agency`, `provider`, `done for you`, `managed`, `software`,
   `app`, `tool`, `best`, `vs`, `near me`) + question and compliance stems. Cap 40–60 per service, 15–25
   for the bundle, 10–15 per vertical. Booking/reminders and unified inbox get their own seed sets so
   the "fold into a feature" verdict is evidence-based. Local-SEO seeds ("local seo packages uk", "seo
   for <vertical> uk", "google maps ranking service uk") run too, mapped to the existing `seo` page or
   the industry heads under the one-URL rule unless 02 makes a local SEO plan its own page.
2. **Autocomplete first:** `suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=uk&q=`
   for every seed; alphabet-soup on 2–3 heads per service. Record position as an ordinal, never volume.
3. **SERP capture (Playwright, `google.co.uk`, `gl=uk&hl=en-GB&pws=0&num=10`, desktop 1280×900,
   consent rejected once per session):** per SERP record ads top/bottom, AI Overview, local pack,
   featured snippet, PAA (initial + revealed), related searches, top 10 organic as `rank | domain | URL |
title | type ∈ {saas-vendor, agency, listicle, directory, forum/ugc, regulator/gov, news, vendor-ghl,
other}` + UK-specific flag. Pace 4–8 s; stop on "unusual traffic"; never solve a CAPTCHA; ~150
   captures per session cap. Bing `cc=GB` for 20–30 head terms only. Volume ≈ 120–160 captures.
4. **Intent:** repo enum only. `software|app|tool|platform|vs|best` → comparison/blog URL, never a service
   page (unless 00 records that the service is resold SaaS). `agency|service|provider|done for
you|managed|setup` → service page. Questions → blog/FAQ. **Near-me** terms are evidence of local
   intent only — no `primaryUrl` (WebAsk has no GBP, D1).
5. **Demand tier from evidence types:** E1 autocomplete position ≤ 5; E2 in PAA/related; E3 SERP
   UK-specific (≥ 5/10); E4 ads present; E5 a UK point-solution product sells exactly this. High =
   E1 + E4 + E3; Medium = any two; Low = one; Constructed = no surface (kept only if it is the literal
   service name). `msv` null everywhere.
6. **Difficulty proxy:** count national SaaS brands + high-authority listicles + regulator pages in the
   top 10 (A) vs forums/UGC/thin agency pages (B): Hard A ≥ 6, Medium A 3–5, Soft A ≤ 2 or B ≥ 2.
   Labelled "SERP-shape proxy"; `kd` null; the file says why it cannot sequence work alone.
7. **Anti-cannibalisation:** load the 332 terms; drop exact duplicates; for each new row list existing
   rows sharing a head noun with the same intent and a different `primaryUrl`; decide keep / re-map with
   dated note / re-head; check the `> 5 transactional terms on a non-head URL` warning cannot fire once
   the new slugs are heads.
8. **PAA → FAQs:** normalise, assign to a page, 6–8 per page, pricing question first, cite the SERP term.

> **How the capture was actually run (S3, 24 September 2026) — the departures from the protocol
> above, all recorded in `serp-log.json` `meta.note`.** (a) Google's result anchors are redirect stubs
> (`/goto?url=…`) that do not carry the destination, so each organic result's URL and domain are read
> from its visible `cite` line; a result with no cite (Reddit, YouTube, LinkedIn cards) is typed from
> its label. (b) Ads are counted as distinct display-URL lines inside the top and bottom ad containers;
> the advertisers rotate between captures of the same term, so the count is "as served". (c) PAA
> questions are read from the `data-q` attributes; "revealed" questions were not expanded. (d) The
> related-searches block was empty on the first 44 Google captures and populated ("People also search
> for") from `serp-0046` on. (e) A result is `uk: true`
> when its domain ends in `.uk` or its title or snippet names the UK, the pound or the NHS — a rule, so
> a reader can recompute it. (f) The 1280×900 viewport was set once; consent was rejected once. (g) The
> suggest endpoint was queried by `curl` for 154 heads (the App. G heads plus every capture term) and
> entered as `sug-*` records; 39 returned empty lists. (h) Google served an HTTP 429 "unusual traffic"
> interstitial on the 45th capture; a probe forty minutes later was clear, five more terms were captured
> at 12–18 s, and the 51st request returned HTTP 403 (a plain error page, which the block check did not
> recognise, so six further empty responses were discarded rather than recorded); the session stopped
> there. The afternoon re-run of the same day, from a fresh browser context at 16–22 s of pacing plus
> a 5–10 s dwell on each page (25–30 s between requests), captured five landing-page terms and was
> refused with HTTP 403 on its sixth request (`serp-0057`); the remaining 53 terms are listed in
> § 6.11. (i) Bing `cc=GB&setlang=en-GB` was captured for 30
> heads with the same cite-based method; Bing's ads and "People also ask" selectors returned little,
> so Bing records carry organic, related and answer-box fields only. (j) Type classification is a
> domain map plus a title rule (a "best / top N / compared / guide" title is `listicle` whoever
> publishes it); the map lives with the scratch tools and every result's type is stored in the log so
> the labels can be disputed row by row. (k) On the afternoon captures Google rendered its generated
> answer as an "AI Mode reply" block under a "Thinking" progress heading that resolved to an "AI
> Overview" heading after a few seconds; the extractor waits for it and sets `aiOverview` from the
> heading, so the flag is comparable with the morning's records, and the pseudo-result the block injects
> into the result list is dropped. Reddit and YouTube cards that carry no `cite` are typed from their
> label, as in the morning. A local pack's "Map" and "More businesses" tiles were captured as results on
> `serp-0065` and are dropped by rule; the booking, reminder and garage-receptionist products seen on
> the afternoon SERPs were added to the domain map, which relabelled the SERP-shape proxy (not the
> evidence) on three Bing records (`bing-0026`, `bing-0029`, `bing-0030`: Soft → Hard).

## 2. Seeds per service (App. E.2 — starting points, not findings)

- text-back: missed call text back · missed call text message service · auto reply text missed call ·
  text back missed calls · missed call sms
- reviews: google review management · review management service · review request automation · get more
  google reviews service · online reputation management small business
- receptionist: ai receptionist · ai phone answering · virtual receptionist ai · ai call answering
  service · automated phone answering small business
- email/SMS: email marketing agency small business · sms marketing service · email marketing management ·
  customer follow up automation · database reactivation
- landing pages: landing page design · landing page agency · landing page builder service · sales funnel
  design · lead generation page
- GBP: google business profile management · google business profile optimisation · gbp management
  service · google maps listing management · google business profile suspended help
- bundle: marketing packages small business · all in one marketing platform local business · local
  business marketing packages · gohighlevel agency plans · crm and marketing package small business
- local SEO candidate: local seo packages · local seo service small business · seo for plumbers ·
  seo for dentists · google maps ranking service
- booking/inbox (fold-or-page tests): online booking system small business · appointment reminder
  service · sms appointment reminders · whatsapp business for small business · web chat for small business
- verticals × service (examples): missed call text back for plumbers · review management for dentists ·
  ai receptionist for garages · vet practice marketing · gym membership marketing

## 3. Autocomplete harvest (App. G — Google suggest endpoint, retrieved 2026-09-24)

**Method and caveat.** `suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=uk&q=<head>`
fetched through WebFetch — no browser session, no personalisation, no UK IP. The `gl`/`hl` parameters
weight but do not restrict: India, Miami, Dubai and Sydney variants appear. **Treat this as query
expansion (which modifiers people type after a head), not as UK evidence.** The Playwright capture on
`google.co.uk` in 03 remains the primary evidence; only there does a suggestion earn E1. Position is an
ordinal in the returned list, never a volume. Seven heads returned empty lists (noted). Each list is
recorded in `serp-log.json` in 03 with `source: "suggest-endpoint"` before any other use.

### G.1 Raw lists (head → suggestions in returned order; "—" = empty)

**Text-back** · missed call text back → missed call text back; … software; … calculator; … automation;
… ghl; … service; … system; … software free; … gohighlevel; … roi calculator · missed call text message
service → — · auto reply text missed call → auto reply sms missed call android; … iphone; is there an
auto reply for text messages; auto reply text message example; automatic reply for text messages ·
text back missed calls → text back missed calls; auto text back missed call; text back after missed
call; what to text someone when you missed their call; why do i get a text message after a missed
call; how to respond to a missed call by text · missed call sms → missed call sms; … notification touch;
… alert jio; … notification; … alert airtel; … banking; … service; … alert vodafone; … sbi; … alert ·
**missed call text back uk → missed call text back uk; missed call text back service uk; missed calls
from uk numbers; should you return missed calls; why do i get a text message after a missed call; what
to reply if you missed a call** · missed call text back for plumbers → (itself); what to text someone
when you missed their call; should you return missed calls.

**Reviews** · google review management → … tool; google review management; … software; … company;
… services; … agency; … system; … job; reputation management google reviews; how to do google review
for a business · review management service → review management services; reputation management
services orm buddy; reputation management services pricing; google review management services; online
review management services; amazon review management services; what is review management · review
request automation → review request automation; amazon review request automation; google review
request automation; automated google reviews · get more google reviews service → service to get more
google reviews; how to get more google reviews from customers; … reddit; how to get more google
reviews; do more google reviews help seo · online reputation management small business → — · google
review management uk → — · review management uk → review management uk; … jobs; reputation
management uk; administration review uk; (two unrelated) · review management for dentists →
reputation management for dentists; how to give a good review for a dentist; how to review a dentist;
find a good dentist reviews; dentist best review.

**AI receptionist** · ai receptionist → … for small business; … australia; **… uk**; … cost; … for
medical office; … for dentist; … jobs; … reddit; … app · ai phone answering → ai phone answering
service; ai phone answering; … system; … service for small business; … service australia; … system
for restaurants; … app; … service free; … for restaurants; … system free · virtual receptionist ai →
virtual receptionist ai; virtual reception ai; virtual ai receptionist 24 7; virtual ai receptionist
reseller; (virtual assistant variants) · ai call answering service → ai call answering service; **… uk**;
… free; ai telephone answering service; ai call answering machine; best ai call answering service;
(two unrelated) · automated phone answering small business → automated phone answering system for
small business; what is an automated phone system; what do you call an automated answering service ·
**ai receptionist uk → ai receptionist uk; ai secretary uk; ai dental receptionist uk; ai gp receptionist
uk; ai phone receptionist uk; free ai receptionist uk; ai voice receptionist uk; ai receptionist for
small business uk; (two job queries)** · **ai phone answering uk → ai phone answering uk; ai call
answering uk; ai phone answering service uk; (two unrelated)** · ai receptionist for garages →
(itself); auto repair receptionist job description; (two unrelated).

**Email & SMS** · email marketing agency small business → digital marketing agency small business; …
recurpost; email marketing agency for small business; email marketing services for small business;
(India/Miami/near me variants); digital marketing services for small business · sms marketing service
→ sms marketing services; sms marketing service provider; (Karnataka/India/Delhi/Tanzania/Pakistan/
Bangalore/Mohan Garden/USA variants) · email marketing management → … management; … services; …
tools; … jobs; … platforms; … software; email campaign management; … services; … tools; … software ·
customer follow up automation → — · database reactivation → database reactivation; … campaign;
… agency; … ai; … reddit; … service; … go high level; … meaning; … ghl; … course · **email marketing
agency uk → email marketing agency uk; digital marketing agency uk; digital marketing agency ukraine;
email marketing companies uk; email marketing services uk; digital marketing agency uk based; digital
marketing services uk; digital marketing company uk; digital marketing firms uk; best email marketing
agency uk** · **sms marketing uk → sms marketing uk; sms marketing platforms uk; best sms marketing
platform uk; sms marketing statistics; sms marketing companies; sms marketing examples; sms marketing
cost** · database reactivation uk → —.

**Landing pages** · landing page design → … design; … templates; … ideas; … inspiration; … figma; … ai;
… skill; … examples; … templates free; … prompt · landing page agency → landing page agency; …
template; … malaysia; … website; … reddit; (unrelated); home page agency; landing page agent; … skill;
landing page design agency · landing page builder service → landing page building service; what is
the best free landing page builder; benefits of a landing page · sales funnel design → … design; …
template; … ideas; … sample; sales funnel designer jobs; … course; conversion funnel design; sales
pipeline design; sales funnel website design; sales funnel page design · lead generation page → …
page; … examples; … template; … design; lead gen page; lead gen page builder; lead generation website;
… examples; lead generation site; … template · **landing page design uk → landing page design agency
uk; landing page design cost; landing page design examples; landing page design ideas**.

**Google Business Profile** · google business profile management → … management; … services; … tool;
… page; … software; … panel; … agency; … api; … cost; … login · google business profile optimisation →
… optimisation; **… optimisation service**; … optimisation course; … optimization checklist; … guide;
… 2026; … cost; … 360; … tutorial; … reddit · gbp management service → (itself only) · google maps
listing management → google map listing manager; how to get a google maps listing; how to list your
house on google maps; how to create a google maps listing; how to edit google maps listing · google
business profile suspended help → … suspended help; … suspension help; google business account
suspended help; … suspended support; fix suspended or disabled profiles google business profile help;
fix suspended business profiles; how to fix suspended google my business; how to reinstate google
business account · google business profile management uk → — · google maps ranking service → google
maps ranking service; google map ranking services in islamabad; seo google maps ranking.

**Bundle / plans** · marketing packages small business → marketing services small business; marketing
packages for small business; … south africa; marketing services for small business near me; digital
marketing packages for small business; online marketing packages for small business; marketing
packages examples · all in one marketing platform local business → all in one marketing platform for
small business; list of online marketing platforms; what is a marketing platform · local business
marketing packages → small business marketing packages; local business marketing services; small
business marketing services near me; small business digital marketing packages; local marketing
ideas for small business; local marketing ideas · gohighlevel agency plans → (itself); (two
unrelated) · crm and marketing package small business → — · marketing packages small business uk → —
· **gohighlevel uk → gohighlevel uk; gohighlevel uk number; gohighlevel consultant uk; gohighlevel
agency uk; gohighlevel jobs uk; gohighlevel pricing uk; gohighlevel expert in uk; gohighlevel sms
pricing uk; (unrelated)** · gohighlevel agency uk → (itself) · **gohighlevel pricing uk → gohighlevel
pricing uk; gohighlevel sms pricing uk; (unrelated)**.

**Local SEO** · local seo packages → … packages; … india; … in dubai; … sydney; … in delhi; … in
orlando; **… uk**; local seo pack; local seo services; local seo services for small business · local seo
service small business → local seo services for small business; … strategies …; … tips …; …
checklist …; … dubai; … guide …; local seo agency for small business; … near me; … vijayawada;
benefits of local seo for small business · seo for plumbers → seo for plumbers; … in houston; …
sydney; seo agency for plumbers; affordable seo for plumbers; ai seo for plumbers; seo keywords for
plumbers; local seo services for plumbers; best seo agency for plumbers; local seo company for
plumbers · seo for dentists → seo for dentists; … sydney; … los angeles; … utah; … near me; local seo
for dentists; seo services for dentists; ai seo for dentists; best seo for dentists; seo strategy for
dentists · seo for plumbers uk → — · seo for dentists uk → —.

**Booking / inbox (fold-or-page tests)** · online booking system small business → … small business;
… for small business free; best online booking system for small business; booking system small
business; what is the best online booking system; (bookkeeping noise); how to do booking for a small
business; **how much does an online booking system cost**; (noise) · appointment reminder service →
appointment reminder service; appointment alert service; appointment reminder system; … system free;
appointment reminder text service; nhs appointment reminder service; automated appointment reminder
service; sms appointment reminder service; service appointment reminder template; appointment
reminder message examples · sms appointment reminders → sms appointment reminders; text message
appointment reminders; sms calendar reminders; … examples; … template; … apps; … software; … service;
free sms appointment reminders; nhs sms appointment reminders · appointment reminder service uk → — ·
**online booking system uk → online booking system uk; … uk free; online ticketing system uk; (bus/
flight noise); best online booking system uk; cheapest online booking system uk; online booking and
payment system uk; online booking system for restaurant uk; best free online booking system uk** ·
whatsapp business for small business → … for small business; whatsapp business api for small
businesses; … app for small businesses; how to set up …; how to verify …; how to use whatsapp business
for business; (noise) · **whatsapp business uk → whatsapp business uk; … uk number; … uk cost; whatsapp
business premium uk; whatsapp business api uk; … account uk; … number uk free; … support uk; whatsapp
business platform uk; whatsapp business api pricing uk** · web chat for small business → live chat for
small business; live chat software for small business; microsoft teams live chat for small businesses;
web chat examples.

**Verticals** · vet practice marketing → vet practice marketing; vet clinic marketing; … ideas; …
jobs; **vet clinic marketing agency**; veterinary practice partners marketing business partner;
veterinary marketing ideas · gym membership marketing → gym membership marketing; gym box membership
prices.

### G.2 First read (hypotheses for 03 to confirm on google.co.uk)

- **Software intent dominates the bare heads** (software, tool, system, app, free, platform, template):
  under the § 5.2 intent rule those map to comparison posts, not service pages. The service-side
  modifiers that did surface — _service, services, company, agency, cost_ — are the ones the pages own.
- **Strongest UK service signals:** `ai receptionist uk` (with `ai phone receptionist uk`, `ai voice
receptionist uk`, `ai receptionist for small business uk`, `ai dental receptionist uk`, `ai gp
receptionist uk`), `ai call answering service uk`, `ai phone answering service uk`; `missed call text
back service uk`; `email marketing agency uk` / `email marketing companies uk` / `email marketing
services uk` / `best email marketing agency uk`; `landing page design agency uk` and `landing page
design cost`; `sms marketing uk` (mostly platform intent → comparison post; `sms marketing cost` →
  blog). GBP, reviews, bundle and local-SEO heads returned **no UK-suffixed lists** except `local seo
packages uk` — weak or no UK autocomplete signal; the Playwright capture decides.
- **Existing keyword rows that just gained autocomplete support:** `gohighlevel agency uk`,
  `gohighlevel pricing uk`, `ai receptionist uk`, `ai phone answering service uk`, plus near-matches
  for `ai call answering for small business uk`. New terms worth rows: `gohighlevel sms pricing uk`,
  `gohighlevel uk number`, `gohighlevel consultant uk`, `gohighlevel expert in uk` (crm-automation or
  the bundle/01 — one URL each).
- **Reviews:** the service vocabulary is "google review management services/company/agency",
  "service to get more google reviews", "google review request automation", "automated google
  reviews"; dental phrasing is "reputation management for dentists". `review management uk` drifts to
  jobs and unrelated brands — the page's H1 should carry "Google review" wording, not bare "review
  management".
- **Google Business Profile:** the British spelling `optimisation service` surfaced; `suspended help`
  and `how to reinstate google business account` are strong problem intents → a blog post and an FAQ,
  with the service page owning `google business profile management services / agency / cost`.
- **Booking and reminders:** almost entirely product intent (`system`, `free`, `best`, `cheapest`,
  `software`, `apps`) plus one cost question — supports **folding booking into the bundle** with a
  comparison post ("how much does an online booking system cost") rather than a service page, unless
  the SERP capture shows agencies ranking. `sms appointment reminder service` and `automated
appointment reminder service` are the two service-shaped terms to test.
- **WhatsApp:** `whatsapp business uk cost`, `whatsapp business api pricing uk`, `whatsapp business
platform uk` — informational/cost intent → the WhatsApp post in App. E.3, with the text-back page
  owning nothing WhatsApp-specific.
- **Database reactivation** is agency-side jargon (`agency`, `ghl`, `go high level`, `course`) with
  no UK list — a section of the email/SMS page and one post, not a head term.
- **Verticals:** `vet clinic marketing agency` exists; `gym membership marketing` is thin; the
  plumbers/dentists SEO heads are US/AU-weighted with `local seo services for plumbers` and `local seo
for dentists` as the reusable shapes — industry × service rows go to the industry heads.
- **Empties (no list returned):** missed call text message service · online reputation management
  small business · customer follow up automation · crm and marketing package small business · google
  review management uk · google business profile management uk · marketing packages small business
  uk · database reactivation uk · appointment reminder service uk · seo for plumbers uk · seo for
  dentists uk. An empty list is evidence of nothing either way from this endpoint.

## 4. Candidate rows (App. AL.1 — hypotheses; no row is kept without a `serp-log.json` record)

Row shape is `data/keywords.json`'s (App. D; `scripts/check-keywords.ts` L110–123): `term` (lowercase,
regex `^[a-z0-9][a-z0-9 ,'+/&.\-]*$`), `intent` from the five-value enum, `msv: null`, `kd: null`,
`primaryUrl`, `supportingUrls`, `cluster`, `vertical`. Clusters marked ◆ and verticals marked ◇ are
**proposed** values (§ 4.5) that `check-keywords.ts` rejects until AE.8 lands — which is why
`keywords-draft.json` is not mergeable. Intent follows § 5.2 step 4 (`software|app|tool|best` → a
post, never a service page; questions → a post or a service-page FAQ; near-me → no URL). Rows that
are **re-points of existing rows** (§ 4.5's six `ai receptionist` rows, `gohighlevel pricing uk`) are
edits to `data/keywords.json`, not draft rows, and are not repeated here. `dupes.mjs` (AF.2) runs
against every row before S3 ends.

One row, as JSON:

```json
{
  "term": "missed call text back uk",
  "intent": "transactional",
  "msv": null,
  "kd": null,
  "primaryUrl": "/services/missed-call-text-back",
  "supportingUrls": ["/blog/missed-call-text-back-uk-rules"],
  "cluster": "lead-recovery",
  "vertical": null
}
```

| #   | term                                                           | intent                   | primaryUrl                                   | supportingUrls                               | cluster           | vertical               | App. G evidence (position is ordinal)                                                  |
| --- | -------------------------------------------------------------- | ------------------------ | -------------------------------------------- | -------------------------------------------- | ----------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| 1   | missed call text back uk                                       | transactional            | /services/missed-call-text-back              | /blog/missed-call-text-back-uk-rules         | lead-recovery ◆   | —                      | head "missed call text back uk" → itself, 1st                                          |
| 2   | missed call text back service uk                               | transactional            | /services/missed-call-text-back              | —                                            | lead-recovery ◆   | —                      | same list, 2nd                                                                         |
| 3   | missed call text back service                                  | transactional            | /services/missed-call-text-back              | —                                            | lead-recovery ◆   | —                      | head "missed call text back" → "… service", 6th                                        |
| 4   | text back missed calls                                         | commercial-investigation | /services/missed-call-text-back              | /blog/missed-call-text-back-uk-rules         | lead-recovery ◆   | —                      | head → itself, 1st; "auto text back missed call", 2nd                                  |
| 5   | missed call text back software                                 | commercial-investigation | /blog/missed-call-text-back-uk-rules         | /services/missed-call-text-back              | lead-recovery ◆   | —                      | "software" 2nd, "software free" 8th — product intent → post                            |
| 6   | is missed call text back legal uk                              | informational-bottom     | /blog/missed-call-text-back-uk-rules         | /services/missed-call-text-back              | uk-compliance     | —                      | constructed (calendar #1 target); no list returned                                     |
| 7   | why do i get a text message after a missed call                | informational-top        | /blog/missed-call-text-back-uk-rules         | —                                            | lead-recovery ◆   | —                      | two heads returned it (5th and 5th)                                                    |
| 8   | auto reply text missed call                                    | informational-bottom     | /blog/missed-call-text-back-uk-rules         | —                                            | lead-recovery ◆   | —                      | head → android/iphone variants (consumer intent — weak)                                |
| 9   | missed call text back for plumbers                             | transactional            | /industries/trades-home-services             | /services/missed-call-text-back              | lead-recovery ◆   | trades-home-services ◇ | head → itself, 1st                                                                     |
| 10  | google review management services uk                           | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | "google review management" → "… services", 5th (no uk list)                            |
| 11  | google review management company                               | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | same list, 4th                                                                         |
| 12  | google review management agency                                | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | same list, 6th                                                                         |
| 13  | review management service uk                                   | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | "review management uk" → itself, 1st (drifts to jobs after)                            |
| 14  | google review request automation                               | commercial-investigation | /services/review-management                  | /blog/google-reviews-dmcc-act-uk             | reviews ◆         | —                      | "review request automation" → "google …", 3rd                                          |
| 15  | service to get more google reviews                             | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | "get more google reviews service" → 1st                                                |
| 16  | how to get more google reviews from customers                  | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | /services/review-management                  | reviews ◆         | —                      | same list, 2nd                                                                         |
| 17  | how to ask for google reviews legally uk                       | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | —                                            | uk-compliance     | —                      | constructed (calendar #2 target)                                                       |
| 18  | review gating uk                                               | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | —                                            | uk-compliance     | —                      | constructed                                                                            |
| 19  | incentivised reviews uk                                        | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | —                                            | uk-compliance     | —                      | constructed                                                                            |
| 20  | reputation management for dentists                             | transactional            | /industries/dental-practices                 | /services/review-management                  | reviews ◆         | dental-practices       | "review management for dentists" → 1st                                                 |
| 21  | ai phone receptionist uk                                       | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | "ai receptionist uk" list, 5th                                                         |
| 22  | ai voice receptionist uk                                       | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | same list, 7th                                                                         |
| 23  | ai receptionist for small business uk                          | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | same list, 8th                                                                         |
| 24  | ai call answering service uk                                   | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | "ai call answering service" → "… uk", 2nd                                              |
| 25  | ai receptionist cost uk                                        | commercial-investigation | /blog/ai-receptionist-uk-rules-costs         | /services/ai-receptionist                    | ai-receptionist ◆ | —                      | "ai receptionist" → "… cost", 4th; uk constructed                                      |
| 26  | free ai receptionist uk                                        | commercial-investigation | /blog/ai-receptionist-uk-rules-costs         | —                                            | ai-receptionist ◆ | —                      | "ai receptionist uk" list, 6th — software intent → post                                |
| 27  | ai dental receptionist uk                                      | transactional            | /industries/dental-practices                 | /services/ai-integration                     | ai-voice-agents   | dental-practices       | same list, 3rd — clinics stay on the bespoke build                                     |
| 28  | is an ai receptionist legal uk                                 | informational-bottom     | /blog/ai-receptionist-uk-rules-costs         | —                                            | uk-compliance     | —                      | constructed (existing row "are ai receptionists legal uk" — check dupes)               |
| 29  | email marketing agency uk                                      | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | head → itself, 1st                                                                     |
| 30  | email marketing services uk                                    | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | same list, 5th                                                                         |
| 31  | email marketing companies uk                                   | commercial-investigation | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | same list, 4th                                                                         |
| 32  | email marketing agency for small business                      | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | "email marketing agency small business" list, 3rd                                      |
| 33  | sms marketing services uk                                      | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | "sms marketing uk" list (platform-heavy) — service form constructed                    |
| 34  | sms marketing cost                                             | informational-bottom     | /services/email-sms-marketing                | /blog/gohighlevel-uk-local-business-gbp-cost | email-sms ◆       | —                      | same list, 7th — answered by the page's SMS-cost FAQ                                   |
| 35  | database reactivation campaign                                 | informational-bottom     | /blog/database-reactivation-uk-lawfully      | /services/email-sms-marketing                | email-sms ◆       | —                      | "database reactivation" → "… campaign", 2nd                                            |
| 36  | database reactivation uk                                       | informational-bottom     | /blog/database-reactivation-uk-lawfully      | —                                            | email-sms ◆       | —                      | constructed (no list)                                                                  |
| 37  | customer follow up automation                                  | commercial-investigation | /services/email-sms-marketing                | /services/crm-automation                     | email-sms ◆       | —                      | constructed (no list)                                                                  |
| 38  | landing page design uk                                         | transactional            | /services/landing-pages                      | —                                            | landing-pages ◆   | —                      | head → "… agency uk", 1st                                                              |
| 39  | landing page design agency uk                                  | transactional            | /services/landing-pages                      | —                                            | landing-pages ◆   | —                      | same, 1st                                                                              |
| 40  | landing page design cost                                       | informational-bottom     | /blog/landing-page-or-website-small-business | /services/landing-pages                      | landing-pages ◆   | —                      | same list, 2nd                                                                         |
| 41  | landing page or website small business                         | informational-bottom     | /blog/landing-page-or-website-small-business | —                                            | landing-pages ◆   | —                      | constructed (calendar #7 target)                                                       |
| 42  | landing page building service                                  | commercial-investigation | /blog/landing-page-or-website-small-business | /services/landing-pages                      | landing-pages ◆   | —                      | re-pointed 2026-09-24: builder SERP (serp-0055)                                        |
| 43  | sales funnel design uk                                         | transactional            | /services/landing-pages                      | —                                            | landing-pages ◆   | —                      | "sales funnel design" list — uk constructed                                            |
| 44  | google business profile management uk                          | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | constructed (empty list) — the page's head term                                        |
| 45  | google business profile management services                    | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | head → "… services", 2nd                                                               |
| 46  | google business profile optimisation service                   | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | "… optimisation" → "… optimisation service", 2nd (British spelling surfaced)           |
| 47  | google business profile management agency                      | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | head list, 7th                                                                         |
| 48  | google business profile management cost                        | informational-bottom     | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | head list, 9th — answered by the page's pricing FAQ                                    |
| 49  | google business profile suspended help                         | informational-bottom     | /blog/google-business-profile-suspended-uk   | /services/google-business-profile            | local-listings ◆  | —                      | head → itself, 1st                                                                     |
| 50  | how to reinstate google business account                       | informational-bottom     | /blog/google-business-profile-suspended-uk   | —                                            | local-listings ◆  | —                      | same list, 9th                                                                         |
| 51  | marketing packages for small business uk                       | transactional            | /services/local-business-plans               | —                                            | local-plans ◆     | —                      | constructed (empty list); "marketing packages for small business" 2nd on the bare head |
| 52  | small business marketing packages                              | transactional            | /services/local-business-plans               | —                                            | local-plans ◆     | —                      | "local business marketing packages" → 1st                                              |
| 53  | local business marketing services                              | transactional            | /services/local-business-plans               | —                                            | local-plans ◆     | —                      | same list, 2nd                                                                         |
| 54  | gohighlevel sms pricing uk                                     | informational-bottom     | /blog/gohighlevel-uk-local-business-gbp-cost | /services/local-business-plans               | gohighlevel       | —                      | "gohighlevel uk" list, 8th; "gohighlevel pricing uk" list, 2nd                         |
| 55  | gohighlevel uk number                                          | informational-bottom     | /blog/gohighlevel-uk-local-business-gbp-cost | —                                            | gohighlevel       | —                      | "gohighlevel uk" list, 2nd                                                             |
| 56  | gohighlevel consultant uk                                      | transactional            | /services/crm-automation                     | —                                            | gohighlevel       | —                      | same list, 3rd (check dupes against the agency/expert rows)                            |
| 57  | gohighlevel sub account transfer                               | informational-bottom     | /blog/hosted-crm-vs-own-account-leaving      | /services/local-business-plans               | gohighlevel       | —                      | constructed (calendar #10 target)                                                      |
| 58  | whatsapp business uk cost                                      | informational-bottom     | /blog/whatsapp-uk-small-business-rules-2026  | /services/missed-call-text-back              | email-sms ◆       | —                      | "whatsapp business uk" list, 3rd; "… api pricing uk", 10th                             |
| 59  | how much does it cost to design a landing page                 | informational-bottom     | /blog/landing-page-or-website-small-business | /services/landing-pages                      | landing-pages ◆   | —                      | PAA on serp-0052 and serp-0053 (added 2026-09-24)                                      |
| 60  | is google business profile manager free                        | informational-bottom     | /services/google-business-profile            | /blog/google-business-profile-suspended-uk   | local-listings ◆  | —                      | PAA on serp-0058 and serp-0059 (added 2026-09-24)                                      |
| 61  | how much does a marketing package cost                         | informational-bottom     | /services/local-business-plans               | /pricing                                     | local-plans ◆     | —                      | PAA on serp-0060 (added 2026-09-24)                                                    |
| 62  | how much does gohighlevel cost a month                         | informational-bottom     | /blog/gohighlevel-uk-local-business-gbp-cost | /services/local-business-plans               | gohighlevel       | —                      | PAA on serp-0061 (added 2026-09-24)                                                    |
| 63  | how much should i pay for local seo                            | informational-bottom     | /services/seo                                | /blog/topic/seo                              | seo               | —                      | PAA on serp-0062 (added 2026-09-24)                                                    |
| 64  | where can i get free text reminders for appointments           | informational-bottom     | /blog/appointment-reminder-texts-pecr        | /services/missed-call-text-back              | email-sms ◆       | —                      | PAA on serp-0064 (added 2026-09-24)                                                    |
| 65  | how do i unsuspend my google business profile                  | informational-bottom     | /blog/google-business-profile-suspended-uk   | /services/google-business-profile            | local-listings ◆  | —                      | PAA on serp-0069 (added 2026-09-24)                                                    |
| 66  | what is the 24 hour rule for whatsapp business                 | informational-bottom     | /blog/whatsapp-uk-small-business-rules-2026  | /services/missed-call-text-back              | email-sms ◆       | —                      | PAA on serp-0072 (added 2026-09-24)                                                    |
| 67  | how much should a small business pay for marketing             | informational-bottom     | /services/local-business-plans               | /pricing                                     | local-plans ◆     | —                      | PAA on serp-0073 (added 2026-09-24)                                                    |
| 68  | how much does gohighlevel charge for sms                       | informational-bottom     | /blog/gohighlevel-uk-local-business-gbp-cost | /services/local-business-plans               | gohighlevel       | —                      | PAA on serp-0075 (added 2026-09-24)                                                    |
| 69  | how much does seo cost in the uk                               | informational-bottom     | /services/seo                                | /blog/topic/seo                              | seo               | —                      | PAA on serp-0077 (added 2026-09-24)                                                    |
| 70  | how much does it cost to optimise a google business profile    | informational-bottom     | /services/google-business-profile            | /pricing                                     | local-listings ◆  | —                      | PAA on serp-0078 (added 2026-09-24)                                                    |
| 71  | how much does digital marketing cost for a small business      | informational-bottom     | /services/local-business-plans               | /pricing                                     | local-plans ◆     | —                      | PAA on serp-0083 (added 2026-09-24)                                                    |
| 72  | how much does an online booking system cost                    | informational-bottom     | /services/local-business-plans               | /services/missed-call-text-back              | local-plans ◆     | —                      | fold-test head, High on serp-0093 (added 2026-09-24; a post if S6 opens one)           |
| 73  | can i send an automated text message to confirm an appointment | informational-bottom     | /blog/appointment-reminder-texts-pecr        | /services/missed-call-text-back              | email-sms ◆       | —                      | PAA on serp-0095 (added 2026-09-24)                                                    |

Vertical rows for the wave-1 industry pages (added in S6 after 06): `vet clinic marketing agency`,
`vet practice marketing`, `cma vet price list website` (→ calendar #8; `uk-compliance`;
`veterinary-practices` ◇), `veterinary services market investigation order 2026` (informational-top →
#8), `seo for plumbers uk` and `local seo services for plumbers` (→ trades page; `seo`;
`trades-home-services` ◇), `ai receptionist for garages` (→ garages page; `ai-receptionist` ◆;
`garages-mot-centres` ◇), `mot reminder text service` (constructed; → garages page). Near-me variants
captured in S3 are logged as evidence with no `primaryUrl` (D1).

## 5. `serp-log.json` record schema (App. AL.2)

```json
{
  "meta": {
    "version": "0.1.0",
    "note": "One record per capture. Positions and ranks are ordinals; volumes are never recorded. google.co.uk captures: Playwright, 1280x900, gl=uk&hl=en-GB&pws=0&num=10, consent rejected once per session. suggest-endpoint captures: WebFetch, hl=en-GB&gl=uk, weakly localised (treat as query expansion).",
    "typeEnum": [
      "saas-vendor",
      "agency",
      "listicle",
      "directory",
      "forum-ugc",
      "regulator-gov",
      "news",
      "vendor-ghl",
      "other"
    ],
    "evidenceEnum": ["E1", "E2", "E3", "E4", "E5"]
  },
  "captures": [
    {
      "id": "serp-0001",
      "term": "missed call text back uk",
      "source": "google.co.uk",
      "retrieved": "2026-10-02T10:14:00Z",
      "adsTop": 2,
      "adsBottom": 0,
      "aiOverview": false,
      "localPack": false,
      "featuredSnippet": null,
      "paa": ["Is it legal to text back a missed call?"],
      "paaRevealed": [],
      "related": ["missed call text back service uk"],
      "organic": [
        {
          "rank": 1,
          "domain": "call2sms.co.uk",
          "url": "https://call2sms.co.uk/",
          "title": "Never lose another missed call",
          "type": "saas-vendor",
          "uk": true
        }
      ],
      "ukSpecific": 7,
      "difficultyProxy": { "a": 3, "b": 1, "label": "Medium" },
      "evidence": ["E3", "E4"],
      "notes": ""
    },
    {
      "id": "sug-0001",
      "term": "missed call text back uk",
      "source": "suggest-endpoint",
      "retrieved": "2026-09-24",
      "suggestions": [
        "missed call text back uk",
        "missed call text back service uk",
        "missed calls from uk numbers",
        "should you return missed calls",
        "why do i get a text message after a missed call",
        "what to reply if you missed a call"
      ],
      "evidence": [],
      "notes": "App. G; query expansion only — E1 is earned on google.co.uk"
    }
  ]
}
```

Rules the file obeys: `id` is stable and sequential per source; every `keywords-draft.json` row names
at least one `serp-*` record in the 03 tables (the JSON itself carries no back-reference, so the
pairing lives in `03` § 4); `ukSpecific` counts the organic top ten with `uk: true`; the difficulty
proxy is § 5.2 step 6 (A = national SaaS + high-authority listicles + regulator pages; B = forums,
UGC, thin agency pages); the "unusual traffic" stop is recorded as a capture with `"notes": "blocked"`
and no `organic` array, never retried with a solved CAPTCHA.

## 6. UK SERP summaries per service (S3, 24 September 2026 — first capture set)

**Coverage.** 102 `google.co.uk` records (`serp-0001`–`serp-0102`: 99 captures and three block records), 32 Bing
`cc=GB` captures (`bing-0001`–`bing-0032`; the last two are the trades heads, added in S4) and 154 suggest-endpoint lists (`sug-0001`–`sug-0154`), all
in `serp-log.json`. Google returned an HTTP 429 "unusual traffic" interstitial on the 45th capture at
the protocol's 4–8 s pacing; a probe forty minutes later was clear, five more terms were captured at
12–18 s, and the 51st request returned HTTP 403. An afternoon re-run from a fresh browser context at
25–30 s between requests captured five more landing-page terms and was refused with HTTP 403 on its
sixth (`serp-0057`): the block sits on the address's reputation, not on the pace. Per § 1 step 3 each
run stopped where it was refused, nothing was retried through a CAPTCHA, and all three blocks are
records in the log (`serp-0045`, `serp-0051`, `serp-0057`). A fourth window, forty minutes after the
third block, captured the five page heads without refusal and stopped at five by design; a fifth
window an hour later did the same for the two fold tests and the three vertical heads, and a sixth for
the profile long-tail, the two remaining landing-page terms and WhatsApp, and a seventh for the
bundle and GoHighLevel tail and the local-SEO agency wording, and an eighth for the rest of the profile
tail, and a ninth for the rest of the bundle and GoHighLevel tail, and a tenth for the local-SEO services
and vertical SEO terms, and an eleventh for the booking, reminder, WhatsApp API and web-chat tail, and a twelfth for live
chat, the inbox and the vet tail. The pages
captured on Google are text-back, reviews, the receptionist, email/SMS, landing pages, the heads of
the profile service, the bundle and local SEO, the booking and reminder fold tests and the three
vertical heads; the gym term, the lead-generation page term, the near-me and comparison shapes are
**Bing-only** in this set and are queued for Google in § 6.11. Every verdict below names its record; a Bing-only verdict is marked as such and is
provisional until the Google capture lands.

**Three facts about the SERPs themselves, before the pages.** (1) An **AI Overview sat on 89 of the 99
successful Google captures** — on every text-back, receptionist and email-agency term — so the
answer-first opening paragraph in `12` is not optional on this line. (2) **A local pack appeared on four
terms in 99**: `email marketing services uk` (`serp-0040`), `vet clinic marketing agency`
(`serp-0065`), `local business marketing services` (`serp-0074`) and `local seo agency uk`
(`serp-0077`) — always on a "services" or "agency" wording, never on a product or question — so local
intent exists on the agency-shaped heads and nowhere else in the set; D1's no-profile ruling costs this
line those four terms, not a category, and the four pages concerned enter on their long tail. (3) **Ads sat on 72 of 99** captures, four
at the top on most service-shaped terms, and the advertisers were mostly generic call-answering, CX
and CRM brands (Moneypenny, Cloudtalk, Talkdesk, Zendesk, HubSpot, JustCall) rather than sellers of
the exact service: the E4 signal is real but says "a category buyers pay for", not "a bidding war on
this term".

### 6.1 Missed-call text-back (`serp-0001`–`serp-0012`; `bing-0001`–`bing-0002`)

- **The UK service SERP exists and is small-agency-shaped.** `missed call text back uk` is 9/9 UK and
  `missed call text back service uk` 8/9; both are **High** (E1 + E3 + E4, plus E5). The top ten are
  UK GoHighLevel resellers and micro-products — call2sms.co.uk, digitaltoolbag.co.uk, mctb.1nexus.co.uk,
  downtoearthai.co.uk, contactfusion.co.uk, smbbooster.co.uk, notluck.co.uk, marketing-4-results.co.uk,
  callcatchers.co.uk — with `help.gohighlevel.com` ranking first on the bare head (`serp-0010`,
  `serp-0004`, `serp-0005`). Difficulty proxy **Soft** (A2/B7, A3/B6). Bing (`bing-0001`) adds a second
  tier of UK point solutions with prices on the title: MissedCallFix "From £49/mo", Call2SMS "From
  £37/mo", CallBack (tradespeople), dAIsy, AlwaysOn Booking, Call Catchers, textthecaller — the
  incumbent price point for `04` Set B sits in the tens of pounds a month and is printed in the SERP.
- **Software wording is Hard and belongs to a post.** `missed call text back software` (`serp-0005`)
  is A7/B0 with upfirst.ai, helpgenie.ai, enzak.com and leadsorbit.ai — the § 1 step 4 rule holds;
  row 5 stays on the rules post.
- **The consumer question dominates the question head.** `why do i get a text message after a missed
call` (`serp-0007`) is r/AskUK, the EE, iD Mobile and Three community forums and a scam-warning
  page (`choice.community`), with "Turn off missed call text message iPhone" in the related list. The
  post's H2 "Why do I get a text message after a missed call?" must answer the consumer first — the
  network's own missed-call alert, then the business text-back — or it will not hold the query.
- **The legal question has no UK explainer ranking.** `is missed call text back legal uk` (`serp-0006`)
  is A0/B9: two reseller pages, a JustAnswer thread, a r/gohighlevel thread and a US TCPA thread. The
  PAA on the head terms asks "Can I automatically text back a missed call?" and "Can GoHighLevel text
  back missed calls?" — the calendar's item 1 is the only PECR-first answer in the set (information
  gain confirmed for `12` § M.1).
- **`for plumbers`** (`serp-0009`) is US-weighted (tagmktg, leadtruffle, autogrowpro, peppersend) with
  praxum.co.uk the one UK page: E1 + E4, Medium, and the trades page owns it as planned.
- **Ads:** Moneypenny, Outreach, Aircall, Ringover, Telness, Telavox, Cloudtalk — call-answering and
  telephony brands, none selling text-back itself.

### 6.2 Review management (`serp-0013`–`serp-0026`; `bing-0003`–`bing-0004`)

- **"Google review" wording is right; bare "review management" is not.** `google review management
services uk` (`serp-0013`) is 7/8 UK, Soft (A2/B5), with UK agencies (artemis.marketing,
  localexposure.co.uk, reviewmanagement.org.uk, gleavemedia.co.uk, smartreplay.uk) and — at rank 7 —
  londonlovesbusiness.com's "Where to buy Google reviews in the UK: Best sites listed". `review
management service uk` (`serp-0016`) is 9/9 UK. Both are **Medium** (E3 + E4; E5 on the second): no
  E1, because the suggest endpoint returns no UK list for the reviews heads (`sug-0019`,
  `sug-0022`). The head-noun drift the autocomplete predicted (jobs, "London Weight Management
  review") did not reach the top ten, but capterra.co.uk and a "7 Best Reputation Management Agencies
  UK" listicle did.
- **The non-UK heads are SaaS SERPs.** `google review management company` / `agency` / `google review
request automation` (`serp-0014`, `-0015`, `-0017`) are 0–1/8 UK and **Hard** (A6–A7): wiremo,
  localo, shapo, famewall, gmbapi, sproutsocial, reviewflowz, n8n. They are software intents wearing
  agency words; the page owns the two UK-suffixed heads and treats these as comparison-post
  vocabulary at most.
- **The compliance long-tail is where the information gain is largest.** `incentivised reviews uk`
  (`serp-0022`) is **High** (E1 + E3 + E4) and ranks gov.uk, the CMA208 PDF, asa.org.uk, Trustpilot's
  help page and three law firms — no agency page at all; `review gating uk` (`serp-0021`) ranks
  BrightLocal, HelpHound, Partoo, a Reddit thread and gov.uk's short guide at rank 8; `how to ask for
google reviews legally uk` (`serp-0020`) ranks gov.uk second and a "legal way (UK and US)" agency
  post. The PAA set across these — "Is review gating illegal?", "Are you allowed to solicit Google
  reviews?", "Can I pay for 5-star reviews on Google?", "Does Google have a review gating policy?" — is
  the calendar's item 2 almost verbatim (§ 9).
- **Pricing questions surface on the service heads:** "How much does online reputation management
  cost?" (`serp-0016`, `serp-0025`), "How much does Trustpilot cost per month?" (`serp-0016`) —
  the page's pricing-first FAQ has a captured query behind it.
- **Dental** (`serp-0023`) is US-dominated (inmoment, doctible, practicemojo, hellopearl,
  convertlens) with two UK agencies at ranks 3 and 6: Hard, Low tier — it belongs to the dental
  industry page as an insert, never to the service page's head.
- **Bing** (`bing-0003`, `bing-0004`) surfaces UK point products absent from Google's top ten —
  reevoos.co.uk, googlereviewmanagement.uk, revupal.co.uk, everyreply.co.uk, sanmo.uk,
  reviewspro.co.uk, reputationdetect.co.uk — which `04` Set B fetches.
- **Ads:** tapandrate.co.uk (on four of the fourteen), removify, pinmeto, mediawatcher.ai,
  thereviewoffice.co.uk, mention-me — a UK review-tool advertiser exists on the service terms.

### 6.3 AI receptionist (`serp-0027`–`serp-0038`; `bing-0005`–`bing-0007`)

- **The strongest demand signal in the set, and the hardest SERP.** Eight of the twelve terms are
  **High** (E1 + E3 + E4 + E5): `ai receptionist uk`, `ai phone receptionist uk`, `ai voice receptionist
uk`, `ai receptionist for small business uk`, `ai call answering service uk`, `ai phone answering
service uk`, `free ai receptionist uk`, `ai dental receptionist uk`. UK-specific runs 6–9 of 9 on
  every term, three or four ads sit above the fold on all twelve, and eleven carry an AI Overview.
- **Who ranks:** hosting brands (fasthosts.co.uk first on eight terms, ionos.co.uk second on six),
  BT Business, RingCentral, Moneypenny and answer.co.uk, plus a layer of UK point products with
  prices on their titles — team-connect.co.uk "From £19.99/mo", callagents-ai.co.uk "from £149/month"
  (Bing), aiphonecalls.co.uk (ARROW), thevoipshop.co.uk, norango.ai, aianswerphone.co.uk,
  perfectreception.co.uk, sophiie.ai, rednea.ai — and a listicle layer (aiworkforce.co.uk,
  bookedsolid.health, marketerm8.com, heyjodie.com, lotusbrainsstudio.com, cxassist.io). Difficulty
  proxy **Hard** on eleven of twelve (A7–A9). The re-point of the six existing `ai receptionist` rows
  from `/services/ai-integration` to `/services/ai-receptionist` (§ 8) is confirmed by the shape: this
  is a product-and-service SERP, not a bespoke-build one.
- **Cost is the recurring PAA:** "How much does an AI receptionist cost?" / "How much should an AI
  receptionist cost?" appears on eight captures; "Is there a free AI receptionist?" on four; "Are AI
  receptionists worth it?" on five. `ai receptionist cost uk` (`serp-0031`) already has five UK cost
  guides in its top ten (aiphonecalls, aiworkforce, handonweb, fasthosts, dansonmarketing on Bing):
  the calendar's item 3 competes on the **rules** half, where nothing ranks — `is an ai receptionist
legal uk` (`serp-0034`) returns pages about AI receptionists _for law firms_ and one Reddit thread,
  and its PAA asks "What are the legal restrictions on AI chatbots in the UK?" with no page answering
  it.
- **Dental is a served UK niche:** roboreception.co.uk, viveoai.com, dentaai.com, meetlinda.ai,
  intavia.ai, a CQC-ready page and two news items (dentistry.co.uk, nature.com) — the dental industry
  page competes against products, which is why clinics stay on the bespoke `ai-integration` build and
  the industry page's insert links there (`02` § 2.1).
- **Ads:** moneypenny.com on ten of twelve, cloudtalk.io, talkdesk.com, zendesk.co.uk, emea.newo.ai,
  callpenelope.ai, justcall.io — the category is bought; nobody bids on "legal".

### 6.4 Email and SMS marketing (`serp-0039`–`serp-0044`, `serp-0046`–`serp-0049`; `bing-0008`–`bing-0014`)

- **The agency heads are High and Soft.** `email marketing agency uk` (`serp-0039`), `email marketing
services uk` (`-0040`), `email marketing companies uk` (`-0041`) and `email marketing agency for
small business` (`-0042`) are 7–9/9 UK, **High** (E1 + E3 + E4), A3–A5. The organic mix is UK
  agencies (email-postman.co.uk, zestydigital.co.uk, bluefrontier.co.uk, kwmarketinguk.co.uk, ceek,
  enchant, multiwebmarketing "From £99.50pw", thegoodmarketer, growth-by-design) and agency
  directories (Semrush Agencies, Clutch, DAN, f6s). On Bing the same heads are **directory-shaped** —
  GoodFirms, DesignRush, Sortlist, Clutch, DAN, Agency Index, ITProfiles, SuperbCompanies fill eight
  of ten (`bing-0008`, `bing-0014`) — which `04` reads as the citation tier for this page.
- **The one local pack in the set** is on `email marketing services uk` (`serp-0040`).
- **SMS wording is platform territory.** `sms marketing services uk` (`serp-0043`) is 9/9 UK but
  **Hard** (A9/B0): VoodooSMS, ClickSend, TextAnywhere, Text Marketer, FireText, PureSMS, Klaviyo —
  bulk-SMS platforms, not agencies; `sms marketing cost` (`-0044`) is Text Marketer's price list,
  Shopify, Mailchimp and cost guides. The page owns no SMS head; its SMS-cost FAQ answers the PAA
  ("How much does it cost to do SMS marketing?", "Is SMS marketing legal?") and the GBP-cost post
  carries the figures.
- **Database reactivation is UK agency jargon with UK supply.** `database reactivation uk`
  (`serp-0047`) is 8/9 UK with three ads above and four below — databasereactivation.co.uk,
  vantagegrowthptnrs.com, invinciblemedia.co.uk, bigfootdigital.co.uk, ampliflow.ai, oncueai.net,
  asnactivate.uk — A0/B9 Soft, **Medium** (E3 + E4): a UK GHL-agency vocabulary with a UK supply side
  and no product or listicle in the top ten; Bing (`bing-0011`) adds pbaventures.co.uk, fixerhq.co.uk,
  aiwills.co.uk and elwynnai.com. The bare `database reactivation campaign` (`serp-0046`) is US how-to
  content (yaystarter, revsquared, refreshagent, flexxable, leadsnow) with a related search
  "Gohighlevel database reactivation campaign" — Low, and the post owns it as drafted.
- **`sms marketing uk`** (`serp-0048`) is **High** on paper (E1 + E2 + E3 + E4 + E5) and **Hard** in
  shape (A9/B0: VoodooSMS, FireText, Salesforce, Klaviyo, Capterra, Text Marketer, TextAnywhere) — a
  platform head the page does not own. **`email marketing management uk`** (`serp-0049`) is 7/9 UK and
  mixed — an agency first (zestydigital), then platform listicles, Capterra, a Reddit thread and a CIM
  course — Medium (E3 + E4); its PAA "What is the typical cost of email marketing per month in the
  UK?" is the page's pricing FAQ in the searcher's words.
- **`customer follow up automation` is software intent** (`bing-0012`: Zapier ×2, monday.com,
  HubSpot, Zendesk, Sobot) — row 37 is dropped (§ 8).
- **PAA worth a FAQ:** "How much does an email marketing agency cost?" (`serp-0039`, `-0042`), "How
  much does it cost to send 1000 emails?" (`-0042`), "Is email marketing still worth it in 2026?"
  (`-0039`).

### 6.5 Landing pages (`serp-0050`, `serp-0052`–`serp-0056`; Bing `bing-0015`–`bing-0017`; two terms still queued)

- **The agency head is High on a Soft, all-UK SERP.** `landing page design agency uk` (`serp-0052`) is
  **9/9 UK**, A3/B6 Soft, four ads above and two in the feed, an AI Overview, and **High** (E1 + E3 +
  E4): landingpage-designs.co.uk (also the top advertiser), converted.co.uk ("UK's #1 Conversion
  Agency"), Sortlist and Digital Agency Network as the directories, kingkong.co's UK page,
  thewebsitedesignagency.co.uk, paramountdigital.co.uk, popi.co.uk and a "Top 9 Web Design Agencies"
  listicle. `landing page design uk` (`serp-0050`) is 7/9 UK, A3/B6 Soft and **Medium** (E3 + E4; its
  suggest list starts at "… agency uk", so no E1): mylandingpage.co.uk "from £750", converted.co.uk,
  Sortlist, an Adobe examples page, an IONOS guide, ellicode.co.uk, a UK cost guide
  (bennettsdesign.co.uk), a Dribbble gallery and webpro-it.co.uk, with landingpage-designs.co.uk and
  Fiverr advertising. Two agencies rank on both heads (converted.co.uk, landingpage-designs.co.uk);
  both are `04` Set C candidates. On Bing (`bing-0015`–`bing-0016`) the same two heads are UK agency
  SERPs with prices in the titles — converted.co.uk, astrofy.uk "from £900", luxbranding.co.uk "From
  £199", iines.co.uk "from £149", landingpage-designs.co.uk, launchdigital.agency,
  pricemediagroup.co.uk, berkstechnologies.co.uk — 6/7 and 6/10 UK. **Page confirmed**, head term
  `landing page design agency uk`, with `landing page design uk` as the second H1 candidate.
- **The cost and either-or questions belong to the post, and the SERPs are global.** `landing page
design cost` (`serp-0053`) is 2/9 UK, no ads, A5/B4 Soft, **Low** (E1 only): a Reddit thread first,
  then Convertri, Landingi, Twine, bennettsdesign.co.uk, Unbounce, involve.me, a YouTube result and
  cheapwebsitedesigner.co.uk; Bing (`bing-0017`) adds luxbranding, matmad.co.uk and a dollar range in
  its answer box. `landing page or website small business` (`serp-0054`) is 1/9 UK, two feed ads
  (lovable.dev, Squarespace), A7/B2 Hard, **Low** (E4 only): sandstonecastles.co.uk's small-business
  guide first, then Unbounce, Google Sites, Reddit, Canva, Dribbble and three either-or explainers.
  The calendar's item 7 competes on the UK figure in pounds and the builder-versus-code trade-off; its
  PAA set is the post's H2 list (§ 9).
- **"Building service" is a builder SERP, not a service SERP — row re-pointed.** `landing page
building service` (`serp-0055`) is **0/8 UK**, A8/B0 Hard, **Medium** on paper (E1 + E4) and
  entirely software and listicles: Zapier's "7 best landing page builders", Wix, MailerLite,
  EmailToolTester, Canva, EmailVendorSelection, Unbounce, Leadpages, with landingpage-designs.co.uk,
  Optimizely, sculpt.digital and Fiverr advertising. By § 1 step 4 the term cannot be a service-page
  head; draft row 42 moves to the post with the service page as support (§ 8).
- **Funnels are a Low, mixed head with a Set A agency at the top.** `sales funnel design uk`
  (`serp-0056`) is 3/8 UK, four ads above and two in the feed (HubSpot, Fiverr, Upwork, ProductDock),
  A4/B4 Soft, **Low** (E4): wearemarketable.co.uk first — a Set A GoHighLevel agency — then Adobe
  Express, Xero's explainer, marketinggeeks.co.uk, milesmarketing.co.uk, bubblegummarketing.com,
  Shopify and Crazy Egg. The row stays as a secondary term on the service page; "funnel" is not the
  page's H1.
- **The bare agency head and the UK cost term, captured in the sixth window.** `landing page agency
uk` (`serp-0070`) is **9/9 UK**, A1/B8 Soft, four ads above and two in the feed (Webflow,
  muhlertdigital.com, elementarydigital.co.uk, theyardcreative.com, NinjaPromo), an AI Overview and
  **Medium** (E3 + E4; no PAA): converted.co.uk first, kingkong.co, Sortlist, paramountdigital.co.uk,
  then a Michael Page listing and a StudySmarter jobs page — the wording without "design" has a
  jobs reading — with nuttersons.co.uk, lnetdigital.co.uk and primeliondigital.co.uk. The page keeps
  `landing page design agency uk` as its H1 term (High, § 7) and takes this one as a secondary.
  `landing page cost uk` (`serp-0071`) is **9/9 UK**, A1/B8 Soft, four ads above and two in the feed
  (Fiverr, Bark, Wix, lovable.dev, Squarespace) and **Medium** (E3 + E4): a UK Reddit thread first,
  GoDaddy's UK guide, then UK cost guides — luxbranding.co.uk, bennettsdesign.co.uk, duport.co.uk,
  redeagle.tech, tiblo.co.uk, awmedia.marketing, devtrios.com. PAA: "What is the average cost of a
  landing page?", "How much should I charge for a website in the UK?", "Are Google landing pages
  free?", "How much does a website domain cost in the UK?" — the calendar's item 7 owns the UK
  figure in pounds and the "free page" question. Still queued: `lead generation page design uk`
  (§ 6.11 batch 8).

### 6.6 Google Business Profile (`serp-0058`–`serp-0059`, `serp-0068`–`serp-0069`, `serp-0078`–`serp-0082`; Bing `bing-0018`–`bing-0020`; only the near-me term queued)

**Google confirms the Bing reading: the bare heads are Google's own.** `google business profile
management uk` (`serp-0058`) is **4/9 UK**, A3/B6 Soft, no ads above and two in the feed (Fiverr,
PinMeTo), an AI Overview, and **Low** (E4 only): business.google.com twice and support.google.com twice
in the top five, then virens.co.uk, Shopify's guide, digivisi.co.uk, netmediasolutions.co.uk and a
startups.co.uk explainer. `google business profile management services` (`serp-0059`) is 2/9 UK,
A1/B8 Soft, one feed ad (calmamedia.co.uk) and **Medium** (E1 + E4): Google's two properties first,
then virens.co.uk, EmbedSocial, GMB Gorilla, concise.digital, Chatmeter, masterplandigital.co.uk and
Merchynt — a US-heavy agency tail behind Google. Both PAA sets are account questions ("How do I access
Google Business Profile Manager?", "Is Google Business Profile Manager free?", "How do I request to
manage a Google Business Profile?") with one pricing question, "How much is a Google business account
in the UK?", and the related searches are "login", "dashboard", "My Business" — navigational intent
around the product. On Bing (`bing-0018`–`bing-0020`) the same shape held, with profiletree.com's
guide and brightsprout.co.uk in the tail, and `google business profile suspended help` returned
Google's help pages first and second, then reinstatement explainers (ilocalhero, reviewtactic,
truehost, aaptly). **Reading:** the service page cannot expect the bare "management uk" head against
Google's own properties; it owns the "services / agency / cost" long-tail (`serp-0059` shows an
agency SERP behind Google, with virens.co.uk the one UK agency on both heads — a `04` Set C
candidate), the "is it free / how much" FAQ pair, and the industry × profile inserts; the calendar's
item 5 sits below Google's help pages by design.

**The cost and suspension terms confirm the split (sixth window).** `google business profile
management cost` (`serp-0068`) is 1/9 UK, A1/B8 Soft, no ads, an AI Overview and **Low** (E1):
business.google.com, a Reddit thread, Google Workspace, ignitingbusiness.com, **virens.co.uk fifth**
(the one UK agency, with its published ladder — `04` § 4 row 9), support.google.com, a Facebook
result and two North American agencies. PAA: "Is there a fee for a Google Business Profile?", "Is a
Google Business Profile worth it?" and two Google Ads cost questions — the profile is free and the
searcher knows it; the page prices the work, not the listing. `google business profile suspended
help` (`serp-0069`) is **0/7 UK**, A4/B3 Soft, no ads and **Low** (E1): support.google.com first,
fourth and sixth, a Reddit thread, BrightLocal's guide, ollyolly.com and Search Engine Journal. PAA:
"How do I unsuspend my Google Business Profile?", "Why is my Google Business Profile suspended?",
"How do I contact Google about a suspended account?"; related: "Google Business Profile appeals
tool", "suspended suspicious activity", "suspended for no reason". The calendar's item 5 is confirmed
as a post that sits under Google's help pages and answers the appeals-tool question in UK terms; the
service page carries the suspension-support line only (Virens sells it at "£295+VAT", `04` § 4).

**The rest of the tail (eighth window) settles the page's term set.** `google business profile
optimisation service` (`serp-0078`) is 1/9 UK, A4/B5 Soft, one feed ad, an AI Overview and
**Medium** (E1 + E4) — **virens.co.uk first**, then business.google.com, Uberall, Semrush, Localo,
Fiverr, support.google.com, Thryv and YouTube; PAA "How much does it cost to optimize a Google My
Business profile?", "What are Google Business Profile Optimization services?". `google business
profile management agency` (`serp-0079`) is 1/9 UK, A2/B7 Soft, two ads above and two in the feed,
and **Medium** (E1 + E4): GMB Gorilla, Google's two properties, virens.co.uk fourth, two Canadian
agencies, YouTube and EmbedSocial; PAA "How much does it cost to get a Google Business Profile?",
"How much does it cost to hire a Google partner?". `google maps listing management uk`
(`serp-0080`) is 4/9 UK, A5/B4 Soft, no ads and **Low** (E5): Google's properties in the top four,
virens.co.uk fifth, Shopify, Yell, IONOS and visilocali.com, with a PAA set that wanders ("How to make
money with Google Maps 100-200 per day?"). `how to reinstate google business account` (`serp-0082`)
is 0/7 UK, A2/B5 Soft, no ads and **Low** (E1): support.google.com first and second, Reddit,
Facebook, GMB Gorilla, reinstatelabs.com and Search Engine Journal; related "Google Business Profile
reinstatement request form", "appeals tool", "Google my business reinstatement service" — the
calendar's item 5 again, with the service line as its exit. **`gbp management service uk`
(`serp-0081`) is unusable as a head:** 6/9 UK and A1/B8 Soft, but the abbreviation collides with a
parking-management company — gbparking.uk first and seventh, "GBP Management Ltd Leicester" in the
related searches, and a PAA reading "How can I contact Parking Control Management (UK) Ltd. about my
PCN?" — beside gbpmanagementservice.com, localise.co.uk, gbpmanager.co.uk and localhq.io. **Reading
for the page and Q19:** every wording of this tail has Virens as the one UK agency in the top ten,
Google's own properties above it, and a Medium ceiling; the page writes "Google Business Profile" in
full in its title, H1 and slug (never "GBP"), takes `… management services`, `… optimisation
service` and `… management agency` as its term set with the cost and "is it free" FAQs first, and
leaves the maps wording and reinstatement to the post. Only `google business profile management
near me` remains queued (§ 6.11 batch 6; evidence only, D1).

### 6.7 The bundle and the GBP-cost cluster (`serp-0060`–`serp-0061`, `serp-0073`–`serp-0076`, `serp-0083`–`serp-0087`; Bing `bing-0021`–`bing-0023`; complete)

- **The bundle head is an all-UK agency SERP with the vendor advertising on it.** `marketing packages
for small business uk` (`serp-0060`) is **9/9 UK**, A2/B7 Soft, four ads above and two in the feed,
  an AI Overview, and **Medium** (E3 + E4; the suggest list starts elsewhere, so no E1):
  smashmarketing.co.uk, wrise.co.uk, republicmarketing.co.uk, iconicdigital.co.uk, SuperHub's
  directory, petitedigital.co.uk, a milesmarketing.co.uk listicle, vizcomdesign.co.uk and
  angel-investors-group.com — every agency result a packages page with tiers. The advertisers are
  Bark, **gohighlevel.com**, Fiverr, impactdraft.com and virtualemployee.com: the platform bids on the
  bundle's own head term, which the hosted-plan page must expect to sit under. Bing (`bing-0021`) was
  10/10 UK with a different nine agencies (dandymarketing.co.uk, thegoodmarketer.co.uk,
  punchgraft.co.uk …) — the term has more UK packages pages than either engine shows at once. PAA:
  "How much does a marketing package cost?" (the bundle's pricing FAQ in the searcher's words), "Which
  marketing is best for small businesses?", "What are some good social media packages for small
  businesses?"; related: "Digital marketing packages for small business uk", "Monthly marketing
  packages", "Social media packages pricing UK". The bundle page's shape (three named tiers,
  inclusions, a price) is what ranks; the hosted-or-owned section and the exit clause are the
  information gain.
- **`gohighlevel pricing uk` is the vendor plus explainers — the re-point to the post is confirmed.**
  `serp-0061` is 3/9 UK, A0/B6 Soft, three ads above (gohighlevel.com, HubSpot, folk.app) and two in
  the feed, and **Medium** (E1 + E4): gohighlevel.com first and fifth, help.gohighlevel.com third,
  softomatesolutions.com second (a Set A agency), a Reddit thread, automationclarityhub.com,
  julianmills.co.uk, ruzuku.com and a YouTube result. The PAA is the post's H2 list — "How much does
  GoHighLevel cost a month?", "Is there a cheaper alternative to GoHighLevel?", "Is GoHighLevel worth
  the money?", "Is GHL better than HubSpot?" — and the related searches ("GoHighLevel SMS pricing",
  "GoHighLevel white label pricing", "GoHighLevel phone number pricing") are the cost cluster the
  calendar's item 12 already covers. On Bing (`bing-0022`) the same term returned gohighlevel.com
  first, then five UK-pound explainers (crmreviews.co.uk, automationclarityhub.com "Real Costs in GBP
  and USD", softomatesolutions.com, automatetogrow.com, blogrator.com "Setup from £185, Sub-Account
  from…", bestgohighlevelagency.com "Subscription, Usage, VAT") — those pages convert at a point rate,
  which is exactly the practice the post refuses, and that refusal has to be the post's argument, not a
  footnote. `gohighlevel sms pricing uk` (Bing `bing-0023`) ranks two vendor help articles, three
  cost explainers and a "SMS Cost Calculator", with a converted per-segment figure in pence in Bing's
  answer box; its Google capture is § 6.11 batch 4. Both re-points in `05` § 3 (the row to the post,
  the bundle as support) are consistent with the shape; § 8 records them.
- **The two other bundle wordings are High, and one carries a local pack (seventh window).** `small
business marketing packages` (`serp-0073`) is 5/9 UK, A2/B7 Soft, two feed ads (TikTok for
  Business, newgenmedia.co.uk), an AI Overview and **High** (E1 + E3 + E4): munro.agency,
  iconicdigital.co.uk, smashmarketing.co.uk, Capsule CRM's guide, webvillage.marketing,
  petitedigital.co.uk, a milesmarketing.co.uk listicle, mixdigital.agency and an Enterprise Nation
  listicle. PAA: "How much should a small business pay for marketing?" — the bundle's second pricing
  FAQ — and "Which marketing is best for small businesses?". `local business marketing services`
  (`serp-0074`) is 5/9 UK, A3/B6 Soft, four ads above and two in the feed, an AI Overview, a **local
  pack** and **High** (E1 + E3 + E4): a Companies House record first (a company registered under the
  phrase), footprint.co.uk, firstdigitalmedia.co.uk, a Hiscox guide, loudlocal.co.uk, a clicksgeek
  listicle, warwickshirewebsites.com, a Salesforce listicle and Reddit; PAA "How can I promote my
  business locally?", "How do I advertise my business in my local area?"; related "near me". The
  bundle page takes both as secondary terms under `marketing packages for small business uk`; the
  local pack on the "services" wording is the D1 cost again (§ 6, fact 2).
- **The GoHighLevel tail is the vendor's, and the "agency" head is Set A's.** `gohighlevel sms
pricing uk` (`serp-0075`) is 3/9 UK, A0/B5 Soft, one ad above and one in the feed (both
  gohighlevel.com), an AI Overview and **Medium** (E1 + E4): help.gohighlevel.com first, fourth and
  sixth, a Skool community post, gohighlevel.com, softomatesolutions.com, a Reddit thread,
  automationclarityhub.com and leadsflex.com; PAA "How much does GoHighLevel charge for SMS?", "How
  much does a text message cost in the UK?", "How much does it cost to send bulk SMS messages?" — the
  calendar's item 12 answers all three in the vendor's units, dated. `gohighlevel agency uk`
  (`serp-0076`) is 6/9 UK, A1/B6 Soft, no ads, an AI Overview and **Medium** (E1 + E3):
  gohighlevel.com first and ninth (its own agency pages), then **four Set A agencies in a row** —
  notluck.co.uk, softomatesolutions.com, wearemarketable.co.uk, smartwebagency.co.uk — julianmills.co.uk,
  a Facebook page and Trustpilot UK; PAA "What is a GoHighLevel agency?", "What company owns
  GoHighLevel?", "Where is GoHighLevel located?". The head is claimed by the agencies `04` § 2 read;
  WebAsk's bundle enters as "local business plans" with the platform named inside, not as a
  "GoHighLevel agency" page — consistent with D6 and `05` § 3's re-points (S6 confirms).
- **The ninth window closes the cluster.** `digital marketing packages for small business`
  (`serp-0083`) is 7/9 UK, A2/B7 Soft, one feed ad, an AI Overview and **High** (E1 + E3 + E4) —
  the bundle's third High wording, with the same agencies as the other two (iconicdigital.co.uk,
  smashmarketing.co.uk, dandymarketing.co.uk, vizcomdesign.co.uk, petitedigital.co.uk) and PAA "How
  much does digital marketing cost for a small business?"; related "… near me", "… london". The
  bundle page carries all three package wordings, the "packages … uk" head first. `gohighlevel
consultant uk` (`serp-0085`) is 7/9 UK, A0/B8 Soft, one feed ad (Fiverr), an AI Overview and
  **High** (E1 + E3 + E4): julianmills.co.uk, gohighlevel.com, then the Set A agencies again
  (softomatesolutions.com, automationclarityhub.com, automatetogrow.com), businessfirstonline.co.uk,
  nexus360.digital, LinkedIn and Reddit — the existing `/services/crm-automation` row keeps it (§ 8).
  `gohighlevel uk number` (`serp-0084`) is vendor-owned — a Facebook group first, then eight
  HighLevel help, ideas and marketplace pages — **Medium** (E1 + E4) with no PAA; related "Gohighlevel
  transfer phone number", "Ghl phone number Verification", "Gohighlevel caller id": the number and
  KYC questions (Q14) belong to the bundle's FAQ and the calendar's item 12, answered in the vendor's
  terms. `gohighlevel sub account transfer` (`serp-0086`) is 0/7 UK, A0/B3 Soft, no ads and **Low**
  (E1): three help-centre pages, Reddit, the ideas board, Facebook and oneexpand.com; related "GHL sub
  account for sale", "Domain transfer in ghl" — the calendar's item 10 (hosted CRM versus your own
  account, and leaving) owns it as drafted. `all in one marketing platform small business uk`
  (`serp-0087`) is 6/9 UK, **A7/B2 Hard**, four ads above and two in the feed (HubSpot, Apollo,
  Sintra, Mailchimp, monday.com), an AI Overview and **Medium** (E3 + E4): aiom.co.uk, Capterra UK,
  YouTube, GetApp UK, two listicles, Salesforce, EmailToolTester and Trustpilot — a software SERP;
  by § 1 step 4 the "platform" wording never heads the bundle page and carries no row.

### 6.8 Local SEO (`serp-0062`, `serp-0077`, `serp-0088`–`serp-0092`; Bing `bing-0024`, `bing-0031`; complete)

`local seo packages uk` (`serp-0062`) is **9/9 UK**, A2/B7 Soft, one feed ad, an AI Overview and
**High** (E1 + E3 + E4): seoworks.co.uk, rapidseo.london, localseoservicesuk.co.uk, wrise.co.uk (also
#4 on the bundle head), a get-found.co.uk listicle, nettl.com, primeliondigital.co.uk, an
appearonline.co.uk listicle and creativeideaz.co.uk — seven of nine are agencies with a packages page,
and Bing (`bing-0024`, 7/10 UK) had shown the listicle-heavier version of the same SERP with
creativeideaz.co.uk as its packages page. PAA: "How much does SEO typically cost in the UK?", "How
much should I pay for local SEO?", "What are some good local SEO services in the UK?", "Is SEO still
worth it in 2026?"; related: "SEO packages pricing UK", "Affordable SEO packages", "Cheap local seo
packages uk". **Reading for Q17:** the Google capture shows packages pages, not GoHighLevel-style
productised tiers, ranking on a High head — which supports a **priced "packages" section on the
existing `/services/seo` page**, with the two pricing PAAs as its FAQ pair, rather than a new page.
The decision stays with the brainstorm (D13). `local seo agency uk` (`serp-0077`, seventh window) is
**9/9 UK**, A3/B6 Soft, no ads, **no AI Overview**, a **local pack** and **Medium** (E1 + E3):
localseoservicesuk.co.uk, phoenixwebservices.co.uk, localseouk.co.uk, Semrush's agency directory,
primeliondigital.co.uk, an appearonline.co.uk listicle, firstplaceseo.co.uk, Sortlist and
direwolfseo.co.uk; PAA "How much does SEO cost in the UK?", "Which SEO agency is the best in the
UK?"; related "Local SEO agency London", "SEO agency Manchester" — the city pages on `/services/seo`
already own that tail, and the local pack on the "agency" wording is the D1 cost. **The tenth window settles the rest.** `local seo services for small business uk` (`serp-0088`) is
8/9 UK, A2/B7 Soft, two feed ads (Fiverr, Proxify), an AI Overview and **Medium** (E3 + E4):
phoenixwebservices.co.uk, digitalnext.co.uk, redeagle.tech, studiohawk.co.uk, localseouk.co.uk,
wrise.co.uk sixth, Semrush's directory, a listicle and primeliondigital.co.uk; PAA "How much does SEO
cost for small business in the UK?", "How much does local SEO cost for a small business?" — the
packages section's FAQ pair in two more wordings. `google maps ranking service uk` (`serp-0091`)
is 7/9 UK, A4/B5 Soft, no ads and **Low** (E3): support.google.com first, two listicles, three
agencies, an Instagram result and jcadworks.com; PAA "How to check Google Maps ranking?" — the profile
page answers it with the no-guarantee line and a checker, not a service. **The two vertical SEO
terms are agency SERPs, one of them High.** `seo for plumbers uk` (`serp-0089`) is 8/9 UK, A2/B7
Soft, no ads and **Low** (E3) — on Google an agency SERP (outrank.co.uk, webdesignandseocompany.co.uk,
plumberseo.co.uk, consultico.co.uk, Checkatrade, klarai.uk, seodons.co.uk seventh, a listicle,
tradepixels.co.uk) where Bing (`bing-0031`) had shown guides; PAA "What is the best advertising for
plumbers?", "Are plumbers in demand in the UK?". `local seo services for plumbers` (`serp-0092`)
is 8/9 UK, A1/B8 Soft, one feed ad, an AI Overview and **High** (E1 + E3 + E4):
webdesignandseocompany.co.uk, outrank.co.uk, tradepixels.co.uk, outsourceyourmarketing.co.uk,
ctodigital.co.uk, a listicle, infoserve.com, digital-scientists.co.uk and kiaora.digital; PAA "How
much do local SEO services cost?", "How much does a plumbing website cost?". `seo for dentists uk`
(`serp-0090`) is **9/9 UK**, A0/B9 Soft, two feed ads (dentalsem.co.uk, signifydigital.com), an AI
Overview and **Medium** (E3 + E4): amstraddigital.co.uk, nexushealthcare.co.uk, seoworks.co.uk,
whitehat-seo.co.uk, kaizen.co.uk, gomungoseo.co.uk, two exact-match domains
(seoservicesfordentists.co.uk, theseofordentists.co.uk) and leapfrogim.co.uk — a named niche with
its own specialists. **Reading:** the vertical SEO terms belong to the industry pages' SEO sections
(trades in S6, dental on the existing `dental-practices` head), never to `/services/seo` as heads;
`local seo services for plumbers` is the first High vertical × service term in the set and goes into
the S6 vertical rows with `serp-0092` as its record.

### 6.9 The fold-or-page tests (`serp-0063`–`serp-0064`, `serp-0072`, `serp-0093`–`serp-0099`; Bing `bing-0025`–`bing-0027`; complete)

- **Booking: fold confirmed on Google.** `online booking system small business uk` (`serp-0063`) is
  2/9 UK, A7/B2 Hard, four ads above and two in the feed (HubSpot, Booking.com, Wix, bookinbeautiful,
  Planday), an AI Overview and **Low** (E4 only): Square, SimplyBook.me, a smallbusiness.co.uk guide, a
  Reservio listicle, BookingLive, SumUp, a detailbook.co.uk listicle, Appointy and a Reddit thread —
  products and comparisons, no service surface. The PAA is product-comparison intent ("Which is
  better, Booksy or Fresha?", "What is the cheapest online booking system?", "Can I make my own booking
  system?"). Bing (`bing-0025`) had shown the same with an answer box naming Booksy Biz, Setmore and
  Square. **Fold** (Answer tier and text-back); the cost question stays a post candidate only.
- **Reminders: fold confirmed, with the NHS on the page.** `appointment reminder service uk`
  (`serp-0064`) is 7/9 UK, A8/B1 Hard, four ads above and two in the feed (HubSpot, Moneypenny,
  Agenda, Sinch), an AI Overview and **Medium** (E3 + E4 + E5): Square, appointmentreminder.com, a
  UCLH NHS page on text reminders, Capterra, ClickSend, GReminders, remindlo.co.uk, The SMS Works and
  Tradify — service-shaped only as SaaS, with the NHS as the one non-vendor result. PAA: "Where can I
  get free text reminders for appointments?", "What is the best free appointment reminder app?" — the
  calendar's item 4 owns the free-and-lawful answer (PECR, the service-message test). **Fold**; Bing
  (`bing-0026`) agreed.
- **WhatsApp: post confirmed on Google.** `whatsapp business uk cost` (`serp-0072`) is 2/9 UK,
  A1/B8 Soft, one ad above and two in the feed (bird.com, Hostinger, yourbusinessnumber.com), an AI
  Overview and **Medium** (E1 + E4): whatsappbusiness.com first and second, SleekFlow's UK guide,
  Meta's developer pricing page, Superchat, a LinkedIn post, yourbusinessnumber.com, a flowcart.ai
  listicle and respond.io — vendors and guides, no service surface. PAA: "Does it cost money to use
  WhatsApp Business?", "What is the 24 hour rule for WhatsApp Business?", "Is it worth getting WhatsApp
  Business?", "Is there an UK alternative to WhatsApp?" — the calendar's item 11 takes the 24-hour
  rule as an H2 and answers the cost in the vendor's own units, dated (the per-message rates change on
  1 October 2026, `10` § 2). Bing (`bing-0027`) agreed. The text-back page owns nothing
  WhatsApp-specific. `whatsapp business api pricing uk` (`serp-0096`, eleventh window) is 3/9 UK,
  A0/B9 Soft, four ads above and two in the feed (Hostinger, Twilio, whatchimp.com, rinkel.com) and
  **Medium** (E1 + E4): Meta's two pricing pages, SleekFlow, Superchat, LinkedIn, YouTube,
  blueticks.co and ominiflow.com; PAA "How much does a WhatsApp Business API cost?", "How much does
  WhatsApp Business cost in the UK?", "Which WhatsApp API providers are available in the UK?" — item
  11's H2s, with the providers question answered as a list of what each charges, dated.
- **The booking and reminder tails confirm the folds, with one High question on them (eleventh
  window).** `how much does an online booking system cost` (`serp-0093`) is 5/9 UK, A6/B3 Hard,
  one feed ad, an AI Overview and **High** (E1 + E3 + E4 + E5) — SimplyBook.me, BookingLive, Square,
  a WordPress plugin vendor, The Access Group, SumUp, Capterra UK, a smallbusiness.co.uk guide and
  Reservio; PAA "Is there a free online booking system available?", "What is the typical cost of
  scheduling software?", "Which online booking system is best?". A High cost question on a product
  SERP: the fold stands, and the question becomes the bundle page's booking FAQ (answered with what
  the plan includes and what a standalone product charges, in the vendors' own units), with a post
  only if S6 opens one (§ 8). `sms appointment reminder service` (`serp-0094`) is 1/9 UK, A7/B2
  Hard, no ads and **Medium** (E1 + E5): ClickSend, appointmentreminder.com, Square, Google
  Workspace, Twilio, Mailchimp, two listicles and easypractice.net — global products; PAA "How do I
  send an appointment reminder text?", "Where can I get free text reminders for appointments?".
  `automated appointment reminder service uk` (`serp-0095`) is 5/9 UK, A7/B2 Hard, two ads above and
  two in the feed (ClickSend, Agenda, HubSpot, Fiverr) and **Medium** (E3 + E4 + E5): Square,
  appointmentreminder.com, Capterra UK, ClickSend, GReminders, remindlo.co.uk, SimplyBook.me,
  sendmode.co.uk and savience.com; PAA "Can I send an automated text message to confirm an
  appointment?" — item 4's PECR answer (a confirmation is a service message; the marketing line after
  it is not). **Fold** on all three.
- **Web chat is a UK product SERP; fold.** `web chat for small business uk` (`serp-0097`) is
  **9/9 UK**, A5/B4 Soft, three ads above and two in the feed (Tidio, HubSpot, Talkdesk), an AI
  Overview and **Medium** (E3 + E4): Click4Assistance, mtechcomms.co.uk, Capterra UK, a gov.uk page,
  Moneypenny, whito.co.uk, saasinfinity.co.uk, Three Business and yourbot.uk; the PAA set is off-topic
  ("How can I get paid to chat online in the UK?"). Web chat stays a feature line inside the bundle's
  Answer tier and the CRM page's widget; no page. `live chat for small business uk` and `unified
inbox small business` are § 6.11 batch 1.

### 6.10 Vertical terms (`serp-0065`–`serp-0067`; Bing `bing-0028`–`bing-0032`; the remaining vertical terms queued; rows in S6)

- **Vets: a Soft agency SERP with a local pack, led by the one agency that sells compliance.**
  `vet clinic marketing agency` (`serp-0065`) is 4/10 UK, A1/B9 Soft, one feed ad (heedly.co), **no AI
  Overview** (the only afternoon capture without one) and a **local pack** whose map listed
  VetsDigital "4.4(16)"; **Medium** (E1 + E4): connectedvet.co.uk first (the Compliance Pack seller,
  `06` L.2.2), VetsDigital "now part of Digital Practice", R&Co Communications, a LinkedIn page,
  vetsuccess.co.uk, an ezyVet guide, DVM Elite and Zoetis (US), the Veterinary Marketing Association
  and The Vet Marketing Firm. No PAA. Bing (`bing-0028`, 5/10 UK) had shown a different UK five
  (vetgrowth, vetboost, wiredmedia, impact-digital, connectedvet) — the UK vet-marketing supply is
  wider than either engine's top ten, and none of the pages read is about the Order except Connected
  Vet's. The local pack on an "agency" term is the D1 cost on this vertical (§ 6, fact 2). **The vet
  tail (twelfth window):** `vet practice marketing uk` (`serp-0100`) is 8/9 UK, A0/B9 Soft, two ads
  above and two in the feed (provet.com, heedly.co) and **Medium** (E3 + E4): vetsuccess.co.uk,
  connectedvet.co.uk second, nvsweb.co.uk, practicemadepurrfect.com, the Veterinary Marketing
  Association, whitehat-seo.co.uk, whito.co.uk, an Indeed listing and morethanwordsuk.co.uk — no PAA;
  the vets page's second term after the agency head (S6 rows). `cma vet price list website`
  (`serp-0101`) is **9/9 UK**, A3/B4 Soft, one ad above and one in the feed (heedly.co) and **Medium**
  (E3 + E4): gov.uk first and third, **a practice's own price page second** (chalklandvets.co.uk),
  **vetcomply.co.uk fourth** — a second compliance product beside Connected Vet's Pack — the BBC, the
  BVA, the Order PDF on assets.publishing.service.gov.uk, vetcostindex.co.uk and the Guardian; PAA
  "What is CMA in vets?", "How much do vet fees cost?", "What are the latest updates on the CMA's
  veterinary market investigation?"; related "Vet prescription fee cap", "CMA vet remedies". The
  calendar's item 8 owns the term and sits under gov.uk by design; the vets page links it.
  `veterinary services market investigation order 2026` (`serp-0102`) is 7/10 UK, A4/B5 Soft, no
  ads, **no AI Overview** and **Medium** (E1 + E3): gov.uk, the CMA's case page, the RCVS, gov.uk
  again, Practical Law, Bird & Bird, two Facebook posts, Westlaw and Vet Times — a regulator-and-law
  SERP; PAA "Who are the big 6 vet groups?", "What are the changes to the animal health and welfare
  pathway in 2026?". The post names the Order and quotes it; it does not try to outrank the CMA.
- **Garages: the receptionist micro-niche is High on Google too.** `ai receptionist for garages`
  (`serp-0066`) is 7/8 UK, A5/B3 Soft, one feed ad (receptionmate.co.uk), an AI Overview and
  **High** (E1 + E3 + E4 + E5): electronicreceptionist.co.uk first and fifth, sesar.co.uk, lineshift.ai,
  receptionmate.co.uk, smartwidget.co.uk, automodu.com and drivebrand.co.uk — products, with the
  three read in `06` L.4.1 all present on Bing (`bing-0029`, 8/10 UK). PAA: "How much should an AI
  receptionist cost?", "Is there a free AI receptionist?", "What does an AI receptionist do?" — the
  garages page's FAQ pair, answered without a converted figure. The page must not lead on the
  receptionist; its wedge is the reminder, the Code and the forecourt rules (App. AN as drafted), with
  the receptionist a plan inside the bundle (`06` § 5).
- **MOT reminders: gov.uk first on Google as on Bing.** `mot reminder text service` (`serp-0067`) is
  7/9 UK, A6/B3 Hard, no ads, an AI Overview and **Low** (E3): gov.uk's "Get MOT reminders" first and
  seventh, reminders.mot-testing.service.gov.uk second and fifth, mottext.co.uk third, a Facebook
  result, Kwik Fit, pitsync.com and F1 Autocentres. PAA: "Will I be reminded when my MOT is due?",
  "How can I get MOT and road tax reminders?", "Can I book MOT without a reminder letter?" — the
  garages draft's "the government offers a free one" line is the right first sentence, and a paid
  reminder is sold as service-plus-MOT, never as the MOT reminder alone.
- **Trades (Bing, added in S4 to pick the deep-dive three):** `seo for plumbers uk` (`bing-0031`) is 7/7 UK
  and guide-shaped — six "SEO for Plumbers UK" guides (seodons.co.uk, klarai.uk, igrowix.com,
  seobridge.co.uk, localadder.co.uk, awresults.co.uk) and one local-SEO services page — so the term
  belongs to a post or the trades industry page's SEO section, not to `/services/seo` as a head.
  `plumber marketing agency uk` (`bing-0032`) is **10/10 UK agencies**: bird.co.uk,
  plumbersmarketingco.co.uk, vistoplex.com, primename.co.uk, bubyli.co.uk, m4plumbersnearme.com,
  dandymarketing.co.uk, ad-tivity.co.uk, peacomarketing.com, puremarketing.uk — a crowded, named
  vertical the industry page enters on the compliance angle (registration display, the CCRs) rather
  than on "marketing agency". The three read in `06` L.3.1 are plumbersmarketingco.co.uk, bird.co.uk and
  seodons.co.uk. On Google (tenth window) `seo for plumbers uk` is an agency SERP, Low (`serp-0089`),
  and `local seo services for plumbers` is **High** (`serp-0092`) — § 6.8; the trades page's SEO
  section takes both (S6 rows).

### 6.11 Queued — the 8 Google captures still pending

**Block history, all on 24 September 2026, all from the same address.** HTTP 429 after 45 captures at
4–8 s; HTTP 403 after five more at 12–18 s forty minutes later; HTTP 403 after five more at 25–30 s
from a fresh browser context two and a half hours after that (`serp-0045`, `serp-0051`,
`serp-0057`); then, forty minutes after the third block, **five captures with no refusal**, stopped
at five by design (`serp-0058`–`serp-0062`), and an hour after that five more (`serp-0063`–`serp-0067`), and an hour after that another five
(`serp-0068`–`serp-0072`), then five more (`serp-0073`–`serp-0077`) and five more (`serp-0078`–`serp-0082`), then five more (`serp-0083`–`serp-0087`) and five more (`serp-0088`–`serp-0092`), then five more (`serp-0093`–`serp-0097`) and five more (`serp-0098`–`serp-0102`). The pattern is a reputation-based allowance of about
five requests per window from this address, so the queue runs five to a batch, page-head terms first,
one window an hour or more apart; the tail groups stay Bing-only until captured:

1. gym membership marketing uk · lead generation page design uk · missed call text back near me · ai
   receptionist near me · google business profile management near me (near-me terms are evidence
   only, D1)
2. email marketing agency near me · best missed call text back software uk · best email marketing
   agency uk

> ❓ **Q30 — how far to take the Google captures.** 💡 Proposal (executor): every page head and every fold test
> is now on Google; the two remaining batches are long-tail and evidence rows. Take them one
> window an hour while a session is open, and accept Bing-only, provisional tiers for whatever is
> left when it closes; never through a CAPTCHA. The
> founder decides whether the tail groups are worth further windows.

## 7. Demand tiers

**The caveat that travels with every tier.** A tier here is a reading of surfaces — an autocomplete
ordinal, a question box, the share of UK domains in ten results, the presence of an advertiser and of
a UK product — captured on one day from one machine with personalisation off. It is not a volume, it
cannot be compared with a volume, and it cannot sequence work by itself: `msv` and `kd` stay null until
a UK-locale export exists, and the difficulty label is a SERP-shape proxy (§ 1 step 6) whose A/B
counts are printed so a reader can disagree with the label. Two terms with the same tier can differ by
an order of magnitude in searches. The tiers are used for one decision only — which candidate rows
survive into `keywords-draft.json` and which pages carry a head term — and that decision is re-run on
the day real volumes arrive.

| Term                                                | Record    | UK/10 | Ads top/bottom · features | Proxy        | Evidence       | Tier                              | Ranks 1–3                                                                                    |
| --------------------------------------------------- | --------- | ----- | ------------------------- | ------------ | -------------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| missed call text back uk                            | serp-0001 | 9/9   | 0/2 · AIO                 | A2/B7 Soft   | E1 E3 E4 E5    | **High**                          | call2sms.co.uk, digitaltoolbag.co.uk, mctb.1nexus.co.uk                                      |
| missed call text back service uk                    | serp-0002 | 8/9   | 4/2 · AIO                 | A3/B6 Soft   | E1 E3 E4 E5    | **High**                          | marketing-4-results.co.uk, digitaltoolbag.co.uk, 1nexus                                      |
| missed call text back service                       | serp-0003 | 3/8   | 0/1 · AIO                 | A4/B3 Soft   | E1 E4 E5       | Medium                            | call2sms.co.uk, digitaltoolbag.co.uk, everycatch.com                                         |
| text back missed calls                              | serp-0004 | 4/8   | 4/2 · AIO                 | A4/B3 Soft   | E1 E4 E5       | Medium                            | help.gohighlevel.com, call2sms.co.uk, everycatch.com                                         |
| missed call text back software                      | serp-0005 | 2/8   | 0/0 · AIO                 | A7/B0 Hard   | E1 E5          | Medium                            | help.gohighlevel.com, upfirst.ai, call2sms.co.uk                                             |
| is missed call text back legal uk                   | serp-0006 | 7/9   | 0/0 · AIO                 | A0/B9 Soft   | E3             | Low                               | digitaltoolbag.co.uk, smbbooster.co.uk, justanswer.co.uk                                     |
| why do i get a text message after a missed call     | serp-0007 | 4/9   | 0/0 · AIO                 | A2/B7 Soft   | E1 E2          | Medium                            | reddit.com, community.ee.co.uk, community.idmobile.co.uk                                     |
| auto reply text missed call                         | serp-0008 | 1/7   | 0/0 · AIO                 | A5/B2 Soft   | E5             | Low                               | reddit.com, contactfusion.co.uk, support.callrail.com                                        |
| missed call text back for plumbers                  | serp-0009 | 1/8   | 4/2 · AIO                 | A1/B6 Soft   | E1 E4          | Medium                            | reddit.com, tagmktg.com, leadtruffle.co                                                      |
| missed call text back                               | serp-0010 | 4/8   | 0/0 · AIO                 | A4/B3 Soft   | E1 E2 E5       | Medium                            | help.gohighlevel.com, call2sms.co.uk, everycatch.com                                         |
| missed call sms service uk                          | serp-0011 | 9/9   | 4/0 · AIO                 | A6/B3 Hard   | E3 E4 E5       | Medium                            | call2sms.co.uk, digitaltoolbag.co.uk, callcatchers.co.uk                                     |
| missed call text message service                    | serp-0012 | 4/8   | 0/0 · AIO                 | A3/B5 Soft   | E5             | Low                               | community.ee.co.uk, reddit.com, digitaltoolbag.co.uk                                         |
| google review management services uk                | serp-0013 | 7/8   | 4/0 · AIO                 | A2/B5 Soft   | E3 E4          | Medium                            | artemis.marketing, localexposure.co.uk, reviewmanagement.org.uk                              |
| google review management company                    | serp-0014 | 0/8   | 4/0 · AIO                 | A6/B1 Hard   | E1 E4          | Medium                            | artemis.marketing, wiremo.co, thecmo.com                                                     |
| google review management agency                     | serp-0015 | 1/8   | 0/0 · AIO                 | A6/B2 Hard   | E1             | Low                               | artemis.marketing, gmbapi.com, sproutsocial.com                                              |
| review management service uk                        | serp-0016 | 9/9   | 4/0 · AIO                 | A4/B5 Soft   | E3 E4 E5       | Medium                            | reviewmanagement.org.uk, purereputation.co.uk, localexposure                                 |
| google review request automation                    | serp-0017 | 0/8   | 1/1                       | A7/B1 Hard   | E1 E4          | Medium                            | reddit.com, roapp.io, repairdesk.co                                                          |
| service to get more google reviews                  | serp-0018 | 0/4   | 0/0 · AIO                 | A2/B2 Soft   | E1             | Low                               | reddit.com, asknicely.com, goqdos.com                                                        |
| how to get more google reviews from customers       | serp-0019 | 1/6   | 0/1 · AIO                 | A4/B2 Soft   | E1 E4          | Medium                            | reddit.com, asknicely.com, reputation.com                                                    |
| how to ask for google reviews legally uk            | serp-0020 | 6/7   | 0/0 · AIO                 | A3/B2 Soft   | E3 E5          | Medium                            | (untitled result), gov.uk, axiomai.uk                                                        |
| review gating uk                                    | serp-0021 | 6/9   | 0/0 · AIO                 | A4/B4 Soft   | E3             | Low                               | reddit.com, brightlocal.com, helphound.info                                                  |
| incentivised reviews uk                             | serp-0022 | 6/9   | 0/1                       | A5/B0 Medium | E1 E3 E4       | **High**                          | lcf.co.uk, gov.uk, assets.publishing.service.gov.uk                                          |
| reputation management for dentists                  | serp-0023 | 2/9   | 0/0 · AIO                 | A6/B3 Hard   | E1             | Low                               | inmoment.com, doctible.com, dentalmarketingexpert.co.uk                                      |
| google review management                            | serp-0024 | 0/8   | 0/1 · AIO                 | A5/B3 Soft   | E1 E4          | Medium                            | wiremo.co, youtube.com, sproutsocial.com                                                     |
| online reputation management small business uk      | serp-0025 | 6/9   | 4/0 · AIO                 | A3/B6 Soft   | E3 E4          | Medium                            | xero.com, igniyte.co.uk, birdeye.com                                                         |
| review management software uk                       | serp-0026 | 8/9   | 4/2 · AIO                 | A8/B1 Hard   | E3 E4 E5       | Medium                            | capterra.co.uk, birdeye.com, ehubt.io                                                        |
| ai phone receptionist uk                            | serp-0027 | 8/9   | 4/0 · AIO                 | A9/B0 Hard   | E1 E3 E4 E5    | **High**                          | fasthosts.co.uk, ionos.co.uk, thevoipshop.co.uk                                              |
| ai voice receptionist uk                            | serp-0028 | 7/9   | 3/0 · AIO                 | A8/B1 Hard   | E1 E3 E4 E5    | **High**                          | fasthosts.co.uk, ionos.co.uk, moneypenny.com                                                 |
| ai receptionist for small business uk               | serp-0029 | 6/9   | 4/2 · AIO                 | A7/B2 Hard   | E1 E2 E3 E4 E5 | **High**                          | fasthosts.co.uk, ionos.co.uk, bookedsolid.health                                             |
| ai call answering service uk                        | serp-0030 | 8/9   | 4/2 · AIO                 | A7/B2 Hard   | E1 E3 E4 E5    | **High**                          | perfectreception.co.uk, answer.co.uk, norango.ai                                             |
| ai receptionist cost uk                             | serp-0031 | 8/9   | 3/0 · AIO                 | A7/B2 Hard   | E3 E4 E5       | Medium                            | aiphonecalls.co.uk, fasthosts.co.uk, bookedsolid.health                                      |
| free ai receptionist uk                             | serp-0032 | 8/9   | 4/0                       | A8/B1 Hard   | E1 E3 E4 E5    | **High**                          | fasthosts.co.uk, ionos.co.uk, sophiie.ai                                                     |
| ai dental receptionist uk                           | serp-0033 | 8/9   | 3/0 · AIO                 | A5/B2 Soft   | E1 E3 E4 E5    | **High**                          | roboreception.co.uk, dentistry.co.uk, viveoai.com                                            |
| is an ai receptionist legal uk                      | serp-0034 | 9/9   | 4/2                       | A6/B3 Hard   | E3 E4 E5       | Medium                            | softomatesolutions.com, reddit.com, fortayconnect.com                                        |
| ai receptionist uk                                  | serp-0035 | 8/9   | 4/0 · AIO                 | A7/B2 Hard   | E1 E2 E3 E4 E5 | **High**                          | fasthosts.co.uk, ionos.co.uk, moneypenny.com                                                 |
| ai phone answering service uk                       | serp-0036 | 7/9   | 4/0 · AIO                 | A7/B2 Hard   | E1 E3 E4 E5    | **High**                          | perfectreception.co.uk, answer.co.uk, aiphonecalls.co.uk                                     |
| virtual receptionist ai uk                          | serp-0037 | 8/9   | 3/0 · AIO                 | A8/B1 Hard   | E3 E4 E5       | Medium                            | fasthosts.co.uk, answer.co.uk, thevoipshop.co.uk                                             |
| best ai receptionist uk                             | serp-0038 | 8/9   | 4/0 · AIO                 | A7/B1 Hard   | E3 E4 E5       | Medium                            | fasthosts.co.uk, sophiie.ai, bookedsolid.health                                              |
| email marketing agency uk                           | serp-0039 | 9/9   | 4/0 · AIO                 | A3/B6 Soft   | E1 E3 E4       | **High**                          | email-postman.co.uk, zestydigital.co.uk, agencies.semrush.com                                |
| email marketing services uk                         | serp-0040 | 9/10  | 4/0 · local pack          | A3/B5 Soft   | E1 E3 E4       | **High**                          | bluefrontier.co.uk, email-postman.co.uk, agencies.semrush.com                                |
| email marketing companies uk                        | serp-0041 | 8/9   | 4/0 · AIO                 | A5/B4 Soft   | E1 E2 E3 E4    | **High**                          | email-postman.co.uk, emailoctopus.com, clutch.co                                             |
| email marketing agency for small business           | serp-0042 | 7/9   | 4/0                       | A5/B4 Soft   | E1 E3 E4       | **High**                          | thegoodmarketer.co.uk, growth-by-design.co.uk, salesforce.com                                |
| sms marketing services uk                           | serp-0043 | 9/9   | 4/0 · AIO                 | A9/B0 Hard   | E3 E4 E5       | Medium                            | voodoosms.com, clicksend.com, klaviyo.com                                                    |
| sms marketing cost                                  | serp-0044 | 2/9   | 4/2                       | A8/B1 Hard   | E1 E4 E5       | Medium                            | textmarketer.co.uk, help.shopify.com, thesmsworks.co.uk                                      |
| database reactivation campaign                      | serp-0045 | —     | —                         | —            | —              | block record                      | HTTP 429 after 45 captures                                                                   |
| database reactivation campaign                      | serp-0046 | 0/8   | 0/0 · AIO                 | A0/B8 Soft   | E1             | Low                               | yaystarter.com, revsquared.ai, refreshagent.com                                              |
| database reactivation uk                            | serp-0047 | 8/9   | 3/2 · AIO                 | A0/B9 Soft   | E3 E4          | Medium                            | databasereactivation.co.uk, vantagegrowthptnrs.com, yaystarter.com                           |
| sms marketing uk                                    | serp-0048 | 8/9   | 3/0 · AIO                 | A9/B0 Hard   | E1 E2 E3 E4 E5 | **High**                          | voodoosms.com, firetext.co.uk, salesforce.com                                                |
| email marketing management uk                       | serp-0049 | 7/9   | 4/0 · AIO                 | A5/B4 Soft   | E3 E4          | Medium                            | zestydigital.co.uk, constantcontact.com, salesforce.com                                      |
| landing page design uk                              | serp-0050 | 7/9   | 3/0 · AIO                 | A3/B6 Soft   | E3 E4          | Medium                            | mylandingpage.co.uk, converted.co.uk, sortlist.co.uk                                         |
| landing page design agency uk                       | serp-0051 | —     | —                         | —            | —              | block record                      | HTTP 403 after 5 more captures                                                               |
| landing page design agency uk                       | serp-0052 | 9/9   | 4/2 · AIO                 | A3/B6 Soft   | E1 E3 E4       | **High**                          | landingpage-designs.co.uk, converted.co.uk, sortlist.co.uk                                   |
| landing page design cost                            | serp-0053 | 2/9   | 0/0 · AIO                 | A5/B4 Soft   | E1             | Low                               | reddit.com, convertri.com, landingi.com                                                      |
| landing page or website small business              | serp-0054 | 1/9   | 0/2 · AIO                 | A7/B2 Hard   | E4             | Low                               | sandstonecastles.co.uk, unbounce.com, sites.google.com                                       |
| landing page building service                       | serp-0055 | 0/8   | 4/2 · AIO                 | A8/B0 Hard   | E1 E4          | Medium                            | zapier.com, wix.com, mailerlite.com                                                          |
| sales funnel design uk                              | serp-0056 | 3/8   | 4/2 · AIO                 | A4/B4 Soft   | E4             | Low                               | wearemarketable.co.uk, adobe.com, xero.com                                                   |
| landing page agency uk                              | serp-0057 | —     | —                         | —            | —              | block record                      | HTTP 403 after 5 more captures (afternoon, fresh context)                                    |
| google business profile management uk               | serp-0058 | 4/9   | 0/2 · AIO                 | A3/B6 Soft   | E4             | Low                               | business.google.com, support.google.com, business.google.com                                 |
| google business profile management services         | serp-0059 | 2/9   | 0/1 · AIO                 | A1/B8 Soft   | E1 E4          | Medium                            | business.google.com, support.google.com, virens.co.uk                                        |
| marketing packages for small business uk            | serp-0060 | 9/9   | 4/2 · AIO                 | A2/B7 Soft   | E3 E4          | Medium                            | smashmarketing.co.uk, wrise.co.uk, republicmarketing.co.uk                                   |
| gohighlevel pricing uk                              | serp-0061 | 3/9   | 3/2 · AIO                 | A0/B6 Soft   | E1 E4          | Medium                            | gohighlevel.com, softomatesolutions.com, help.gohighlevel.com                                |
| local seo packages uk                               | serp-0062 | 9/9   | 0/1 · AIO                 | A2/B7 Soft   | E1 E3 E4       | **High**                          | seoworks.co.uk, rapidseo.london, localseoservicesuk.co.uk                                    |
| online booking system small business uk             | serp-0063 | 2/9   | 4/2 · AIO                 | A7/B2 Hard   | E4             | Low                               | squareup.com, simplybook.me, smallbusiness.co.uk                                             |
| appointment reminder service uk                     | serp-0064 | 7/9   | 4/2 · AIO                 | A8/B1 Hard   | E3 E4 E5       | Medium                            | squareup.com, appointmentreminder.com, uclh.nhs.uk                                           |
| vet clinic marketing agency                         | serp-0065 | 4/10  | 0/1 · local pack          | A1/B9 Soft   | E1 E4          | Medium                            | connectedvet.co.uk, vetsdigital.com, rcomms.co.uk                                            |
| ai receptionist for garages                         | serp-0066 | 7/8   | 0/1 · AIO                 | A5/B3 Soft   | E1 E3 E4 E5    | **High**                          | electronicreceptionist.co.uk, sesar.co.uk, lineshift.ai                                      |
| mot reminder text service                           | serp-0067 | 7/9   | 0/0 · AIO                 | A6/B3 Hard   | E3             | Low                               | gov.uk, reminders.mot-testing.service.gov.uk, mottext.co.uk                                  |
| google business profile management cost             | serp-0068 | 1/9   | 0/0 · AIO                 | A1/B8 Soft   | E1             | Low                               | business.google.com, reddit.com, workspace.google.com                                        |
| google business profile suspended help              | serp-0069 | 0/7   | 0/0 · AIO                 | A4/B3 Soft   | E1             | Low                               | support.google.com, reddit.com, brightlocal.com                                              |
| landing page agency uk                              | serp-0070 | 9/9   | 4/2 · AIO                 | A1/B8 Soft   | E3 E4          | Medium                            | converted.co.uk, kingkong.co, sortlist.co.uk                                                 |
| landing page cost uk                                | serp-0071 | 9/9   | 4/2 · AIO                 | A1/B8 Soft   | E3 E4          | Medium                            | reddit.com, godaddy.com, luxbranding.co.uk                                                   |
| whatsapp business uk cost                           | serp-0072 | 2/9   | 1/2 · AIO                 | A1/B8 Soft   | E1 E4          | Medium                            | whatsappbusiness.com, whatsappbusiness.com, sleekflow.io                                     |
| small business marketing packages                   | serp-0073 | 5/9   | 0/2 · AIO                 | A2/B7 Soft   | E1 E3 E4       | **High**                          | munro.agency, iconicdigital.co.uk, smashmarketing.co.uk                                      |
| local business marketing services                   | serp-0074 | 5/9   | 4/2 · AIO · local pack    | A3/B6 Soft   | E1 E3 E4       | **High**                          | find-and-update.company-information.service.gov.uk, footprint.co.uk, firstdigitalmedia.co.uk |
| gohighlevel sms pricing uk                          | serp-0075 | 3/9   | 1/1 · AIO                 | A0/B5 Soft   | E1 E4          | Medium                            | help.gohighlevel.com, skool.com, gohighlevel.com                                             |
| gohighlevel agency uk                               | serp-0076 | 6/9   | 0/0 · AIO                 | A1/B6 Soft   | E1 E3          | Medium                            | gohighlevel.com, notluck.co.uk, softomatesolutions.com                                       |
| local seo agency uk                                 | serp-0077 | 9/9   | 0/0 · local pack          | A3/B6 Soft   | E1 E3          | Medium                            | localseoservicesuk.co.uk, phoenixwebservices.co.uk, localseouk.co.uk                         |
| google business profile optimisation service        | serp-0078 | 1/9   | 0/1 · AIO                 | A4/B5 Soft   | E1 E4          | Medium                            | virens.co.uk, business.google.com, uberall.com                                               |
| google business profile management agency           | serp-0079 | 1/9   | 2/2 · AIO                 | A2/B7 Soft   | E1 E4          | Medium                            | gmbgorilla.com, support.google.com, business.google.com                                      |
| google maps listing management uk                   | serp-0080 | 4/9   | 0/0 · AIO                 | A5/B4 Soft   | E5             | Low                               | business.google.com, support.google.com, business.google.com                                 |
| gbp management service uk                           | serp-0081 | 6/9   | 0/0 · AIO                 | A1/B8 Soft   | E3             | Low — ambiguous (parking company) | gbparking.uk, gbpmanagementservice.com, web-aviso.com                                        |
| how to reinstate google business account            | serp-0082 | 0/7   | 0/0 · AIO                 | A2/B5 Soft   | E1             | Low                               | support.google.com, support.google.com, reddit.com                                           |
| digital marketing packages for small business       | serp-0083 | 7/9   | 0/1 · AIO                 | A2/B7 Soft   | E1 E3 E4       | **High**                          | iconicdigital.co.uk, smashmarketing.co.uk, dandymarketing.co.uk                              |
| gohighlevel uk number                               | serp-0084 | 3/9   | 0/1 · AIO                 | A0/B1 Soft   | E1 E4          | Medium                            | facebook.com, help.gohighlevel.com, ideas.gohighlevel.com                                    |
| gohighlevel consultant uk                           | serp-0085 | 7/9   | 0/1 · AIO                 | A0/B8 Soft   | E1 E3 E4       | **High**                          | julianmills.co.uk, gohighlevel.com, softomatesolutions.com                                   |
| gohighlevel sub account transfer                    | serp-0086 | 0/7   | 0/0 · AIO                 | A0/B3 Soft   | E1             | Low                               | help.gohighlevel.com, help.gohighlevel.com, reddit.com                                       |
| all in one marketing platform small business uk     | serp-0087 | 6/9   | 4/2 · AIO                 | A7/B2 Hard   | E3 E4          | Medium                            | aiom.co.uk, capterra.co.uk, youtube.com                                                      |
| local seo services for small business uk            | serp-0088 | 8/9   | 0/2 · AIO                 | A2/B7 Soft   | E3 E4          | Medium                            | phoenixwebservices.co.uk, digitalnext.co.uk, redeagle.tech                                   |
| seo for plumbers uk                                 | serp-0089 | 8/9   | 0/0 · AIO                 | A2/B7 Soft   | E3             | Low                               | outrank.co.uk, webdesignandseocompany.co.uk, plumberseo.co.uk                                |
| seo for dentists uk                                 | serp-0090 | 9/9   | 0/2 · AIO                 | A0/B9 Soft   | E3 E4          | Medium                            | amstraddigital.co.uk, nexushealthcare.co.uk, seoworks.co.uk                                  |
| google maps ranking service uk                      | serp-0091 | 7/9   | 0/0 · AIO                 | A4/B5 Soft   | E3             | Low                               | support.google.com, levelupleads.co.uk, gbpmanager.co.uk                                     |
| local seo services for plumbers                     | serp-0092 | 8/9   | 0/1 · AIO                 | A1/B8 Soft   | E1 E3 E4       | **High**                          | webdesignandseocompany.co.uk, outrank.co.uk, tradepixels.co.uk                               |
| how much does an online booking system cost         | serp-0093 | 5/9   | 0/1 · AIO                 | A6/B3 Hard   | E1 E3 E4 E5    | **High**                          | simplybook.me, bookinglive.com, squareup.com                                                 |
| sms appointment reminder service                    | serp-0094 | 1/9   | 0/0 · AIO                 | A7/B2 Hard   | E1 E5          | Medium                            | clicksend.com, appointmentreminder.com, squareup.com                                         |
| automated appointment reminder service uk           | serp-0095 | 5/9   | 2/2 · AIO                 | A7/B2 Hard   | E3 E4 E5       | Medium                            | squareup.com, appointmentreminder.com, capterra.co.uk                                        |
| whatsapp business api pricing uk                    | serp-0096 | 3/9   | 4/2 · AIO                 | A0/B9 Soft   | E1 E4          | Medium                            | whatsappbusiness.com, developers.facebook.com, sleekflow.io                                  |
| web chat for small business uk                      | serp-0097 | 9/9   | 3/2 · AIO                 | A5/B4 Soft   | E3 E4          | Medium                            | click4assistance.co.uk, mtechcomms.co.uk, capterra.co.uk                                     |
| live chat for small business uk                     | serp-0098 | 8/9   | 4/2 · AIO                 | A5/B4 Soft   | E3 E4          | Medium                            | three.co.uk, click4assistance.co.uk, moneypenny.com                                          |
| unified inbox small business                        | serp-0099 | 2/9   | 0/0 · AIO                 | A2/B7 Soft   | —              | Constructed (no row)              | reddit.com, ineedleads.co.uk, liveagent.com                                                  |
| vet practice marketing uk                           | serp-0100 | 8/9   | 2/2 · AIO                 | A0/B9 Soft   | E3 E4          | Medium                            | vetsuccess.co.uk, connectedvet.co.uk, nvsweb.co.uk                                           |
| cma vet price list website                          | serp-0101 | 9/9   | 1/1 · AIO                 | A3/B4 Soft   | E3 E4          | Medium                            | gov.uk, chalklandvets.co.uk, gov.uk                                                          |
| veterinary services market investigation order 2026 | serp-0102 | 7/10  | 0/0                       | A4/B5 Soft   | E1 E3          | Medium                            | gov.uk, connect.cma.gov.uk, rcvs.org.uk                                                      |

**Reading across the pages.** 25 terms are High, 51 Medium, 22 Low and one Constructed (`unified
inbox small business`, a record with no row) among the 99 captured. The receptionist carries the most High terms on the hardest SERPs; text-back and
the email-agency heads are High on Soft SERPs, which is the combination a zero-authority `.co.uk` can
act on first; the reviews page has no High service head and earns its High only on the compliance
long-tail, which sets its cluster order. Terms not yet captured on Google carry no tier. E5 is set by
rule where a UK point product ranked in the top ten of the term's own SERP (§ 1 step 5 read
strictly); E2 counts a term that appeared verbatim in any capture's PAA or related list.

## 8. Anti-cannibalisation against the 332 rows

`node private/tools/dupes.mjs keywords-draft.json data/keywords.json` on 24 September 2026: **57 draft
rows · 0 exact duplicates · 21 head overlaps · 0 schema problems** after one exact duplicate
(`gohighlevel consultant uk`, already `/services/crm-automation`) was removed from the draft. The
head function is the first two words, so most overlaps are false: `how to …` and `small business …`
match unrelated rows. Re-run after the 23 additions below: **79 rows · 0 exact duplicates · 36 head overlaps · 0 schema problems**; the fifteen new overlaps are the same stems (`can i …`, `how much …`), the `ai receptionist …` family against the rows being re-pointed, `ai receptionist for garages` against the four existing receptionist rows (industry × service on the industry head — the doc 08 matrix rule), and `local seo packages uk` against the three city rows on `/services/seo/<city>` (the programmatic pattern). Decisions:

| Overlap (draft ~ existing)                                                                                                                                                                                                                                                                                                                                                                                                              | Decision                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `how to …` ×6 (reviews and reinstatement questions ~ `how to advertise injectables legally uk`, `how to rank in the map pack uk`)                                                                                                                                                                                                                                                                                                       | false positive on the stem; **keep**                                                                                                                                                                                                                                                                                                                                                                                                  |
| `small business marketing packages` ~ four `small business web design …` rows                                                                                                                                                                                                                                                                                                                                                           | false positive on the stem; **keep**                                                                                                                                                                                                                                                                                                                                                                                                  |
| `google business profile management cost` / `… suspended help` ~ `google business profile alternatives uk` (`/blog/topic/seo`)                                                                                                                                                                                                                                                                                                          | different intent objects (cost, reinstatement, alternatives); **keep**                                                                                                                                                                                                                                                                                                                                                                |
| **the `ai receptionist` family** — `ai phone receptionist uk`, `ai voice receptionist uk`, `ai receptionist for small business uk`, `ai call answering service uk` ~ six existing rows on `/services/ai-integration` (`ai receptionist uk`, `ai receptionist for uk business`, `ai phone answering service uk`, `ai call answering for small business uk`, `ai voice agent uk`, `ai voice agent for uk business`) and two industry rows | **re-point confirmed** (`05` § 3): the six existing `ai receptionist` / `ai … answering` rows move to `/services/ai-receptionist` on the day the page goes live — the SERP is product-and-service, not bespoke-build (§ 6.3). The two `ai voice agent` rows **stay** on `ai-integration` (bespoke wording). The clinic and dental industry rows **stay** on their industry heads (clinics are M1 on the bespoke build).               |
| `ai receptionist cost uk` ~ `ai receptionist vs answering service uk` (`/services/ai-integration`)                                                                                                                                                                                                                                                                                                                                      | the existing comparison row **moves with the family** to `/services/ai-receptionist`; the cost row stays on the post                                                                                                                                                                                                                                                                                                                  |
| `gohighlevel pricing uk` (existing, `/services/crm-automation`)                                                                                                                                                                                                                                                                                                                                                                         | **re-point amended**: `05` § 3 proposed the bundle; the Bing SERP (`bing-0022`) is gohighlevel.com plus five GBP explainers, so the row moves to `/blog/gohighlevel-uk-local-business-gbp-cost` with `/services/local-business-plans` as the supporting URL — dated 2026-09-24 and **confirmed on Google the same day** (`serp-0061`: the vendor first, third and fifth, a Set A agency second, a Reddit thread and three explainers) |
| `customer follow up automation` (draft row 37)                                                                                                                                                                                                                                                                                                                                                                                          | **dropped** — software SERP (`bing-0012`), no post planned                                                                                                                                                                                                                                                                                                                                                                            |
| `landing page building service` (draft row 42)                                                                                                                                                                                                                                                                                                                                                                                          | **re-pointed** 2026-09-24 — the Google SERP (`serp-0055`, A8/B0, 0/8 UK) is builders and listicles, not agencies, so by § 1 step 4 the row moves to `/blog/landing-page-or-website-small-business` as commercial-investigation with `/services/landing-pages` as support                                                                                                                                                              |

The `> 5 transactional terms on a non-head URL` warning in `scripts/check-keywords.ts` cannot fire on
the draft rows once the seven new slugs are service heads (`AE.1`, `AE.8`); until then the file is not
mergeable, by design.

**Rows added from the captures (23, § 4 pairing):** the questions and phrasings that surfaced in PAA,
related lists and titles — `ai answering service uk`, `ai telephone answering service uk`, `24/7 ai
receptionist uk`, `best ai receptionist for small business uk`, `how much does an ai receptionist
cost`, `telephone answering service uk cost`, `can i automatically text back a missed call`, `can
gohighlevel text back missed calls`, `how much does online reputation management cost`, `can i pay
for 5 star reviews on google`, `are you allowed to solicit google reviews`, `how much does an email
marketing agency cost`, `is sms marketing legal uk`, `how much does it cost to send 1000 emails`,
`database reactivation service`, `digital marketing packages for small business`, `landing page cost
uk`, `local seo packages uk`, `whatsapp business api pricing uk`, `vet clinic marketing agency`, `ai
receptionist for garages`, `mot reminder text service`, `ai receptionist cost` (bare; post) and `ai
receptionist for gp surgery uk` (evidence only, out of scope — **not** added). The file now holds 94
rows after the afternoon captures added `how much does it cost to design a landing page` (PAA on
`serp-0052` and `serp-0053`; to the post), `is google business profile manager free` (PAA on
`serp-0058` and `serp-0059`; to the profile page's FAQ), `how much does a marketing package cost`
(PAA on `serp-0060`; the bundle's pricing FAQ), `how much does gohighlevel cost a month` (PAA on
`serp-0061`; to the post) `how much should i pay for local seo` (PAA on `serp-0062`; to the `/services/seo` packages FAQ)
`where can i get free text reminders for appointments` (PAA on `serp-0064`; to the calendar's
item 4), `how do i unsuspend my google business profile` (PAA on `serp-0069`; to the calendar's
item 5) `what is the 24 hour rule for whatsapp business` (PAA on `serp-0072`; to the calendar's
item 11), `how much should a small business pay for marketing` (PAA on `serp-0073`; the bundle's
second pricing FAQ), `how much does gohighlevel charge for sms` (PAA on `serp-0075`; to the
calendar's item 12) `how much does seo cost in the uk` (PAA on `serp-0077`; to `/services/seo`) `how much does
it cost to optimise a google business profile` (PAA on `serp-0078`; the profile page's cost FAQ, with
the British spelling the page uses) `how much does digital marketing cost for a small business`
(PAA on `serp-0083`; the bundle's FAQ), `how much does an online booking system cost` (the fold
test's own head, **High** on `serp-0093`; the bundle's booking FAQ, or a post if S6 opens one) and
`can i send an automated text message to confirm an appointment` (PAA on `serp-0095`; to the
calendar's item 4); the vertical PAAs (`serp-0066`, `serp-0067`) wait for the S6 vertical rows; the 150–250
target is reached with the remaining captures.

## 9. PAA → FAQ candidates (pricing first; the SERP term in brackets)

- **`missed-call-text-back`:** What does missed-call text-back cost, and what does a text cost?
  (constructed — no pricing PAA surfaced; keep first by rule) · Can I automatically text back a missed
  call? (`serp-0002`, `-0003`, `-0005`) · Is an automatic text back allowed in the UK? (calendar item 1;
  `serp-0006` has no answering page) · Why do I get a text message after a missed call? (`serp-0001`,
  `-0007` — answer the network alert first) · Can GoHighLevel text back missed calls? (`serp-0005`,
  `-0006`) · How do I text back after a missed call? (`serp-0001`, `-0002`) · Whose number does the
  text come from? (constructed; § 6.1 divert design).
- **`review-management`:** How much does online reputation management cost? (`serp-0016`, `-0025`) ·
  Are you allowed to solicit Google reviews? (`serp-0020`) · Is review gating illegal? (`serp-0021`) ·
  Can I pay for 5-star reviews on Google? (`serp-0018` — no; CMA208 and Google's policy) · How do I
  manage Google reviews for my business? (`serp-0014`) · How do I politely ask for a Google review?
  (`serp-0020`) · How do I contact Google to take down a review? (`serp-0013` — what we do and do not
  do) · What is the best company for managing Google reviews? (`serp-0013` — answered without a claim).
- **`ai-receptionist`:** How much does an AI receptionist cost? (`serp-0035`, `-0027`, `-0031`) · Is
  there a free AI receptionist? (`serp-0027`, `-0032`) · Is an AI receptionist legal in the UK?
  (`serp-0034` PAA "What are the legal restrictions on AI chatbots in the UK?") · What does an AI
  receptionist do? (`serp-0035`) · Can I get AI to answer my phone calls? (`serp-0030`) · Are AI
  receptionists worth it? (`serp-0027`) · Is AI replacing receptionists? (`serp-0033` — inbound only,
  hand-over rule) · Will callers know they are talking to an AI? (R23; constructed).
- **`email-sms-marketing`:** How much does an email marketing agency cost? (`serp-0039`, `-0042`) ·
  How much does it cost to send 1,000 emails? (`serp-0042`) · How much does SMS marketing cost?
  (`serp-0043`, `-0044`) · Is SMS marketing legal? (`serp-0043` — PECR, link to the CRM page) · Who
  can we legally email or text in the UK? (draft H2; constructed) · Is email marketing still worth it?
  (`serp-0039` — replies and bookings, not open rates) · What is database reactivation? (`sug-0058`
  list; `bing-0011`).
- **`landing-pages`:** How much does it cost to design a landing page? (`serp-0052`, `-0053`) · How much
  should I pay for a landing page? (`serp-0054`) · Do I need a website or just a landing page?
  (`serp-0054`) · Can I have a landing page without a website? (`serp-0054`) · How much does a sales
  funnel cost? (`serp-0056`) · What is included, and who owns the page and the files? (constructed;
  `04` Set C shows what the market states) · Can ChatGPT build a landing page? (`serp-0054`, `-0055` —
  answered without disparaging the tools).
- **`google-business-profile`:** How much is a Google business account in the UK? (`serp-0058` — the
  profile is free; what costs is the work) · Is Google Business Profile Manager free? (`serp-0058`,
  `-0059`) · What is Google Business Profile management? (`serp-0059`) · How do I request to manage a
  Google Business Profile? (`serp-0059` — the manager-access route, and why WebAsk never owns the
  listing) · How do I check who owns a Google Business Profile? (`serp-0058`) · Is there a fee for a
  Google Business Profile? (`serp-0068` — no; the work is what costs) · How much does it cost to
  optimise a Google Business Profile? (`serp-0078`) · How much does it cost to hire an agency for it?
  (`serp-0079`) · What happens if the profile
  is suspended? (`serp-0069`; calendar item 5 answers "How do I unsuspend…", "Why is my … suspended?"
  and "How do I contact Google about a suspended account?") · Does WebAsk need a UK office to manage
  my profile? (constructed; D1).
- **`local-business-plans`:** How much does a marketing package cost? (`serp-0060`) · How much should
  a small business pay for marketing? (`serp-0073`) · How much does digital marketing cost for a small
  business? (`serp-0083`) · Can I have a UK number, and whose is it? (`serp-0084` related searches; Q14) · How much does GoHighLevel charge for SMS?
  (`serp-0075` — the post carries the dated figure) · How can I promote my business locally?
  (`serp-0074`) · What is a GoHighLevel agency? (`serp-0076` — and why this page is not one) · How much does
  GoHighLevel cost a month? (`serp-0061` — answered without a converted figure; the post carries the
  detail) · Which marketing is best for small businesses? (`serp-0060`) · Is there a cheaper
  alternative to GoHighLevel? (`serp-0061` — the "own account" route, honestly) · Is GoHighLevel worth
  the money? (`serp-0061`) · What happens to my data if I leave? (constructed; the exit clause, D11) ·
  What is included in each tier? (constructed).
- **`/services/seo` packages section (if D13 opens it):** How much should I pay for local SEO?
  (`serp-0062`) · How much does SEO cost in the UK? (`serp-0077`; `serp-0062` "typically"; `serp-0088` "for small
  business") · How much does local SEO cost for a small business? (`serp-0088`) · Which SEO agency is
  the best in the UK? (`serp-0077` — answered without a claim) · How do I check my Google Maps ranking?
  (`serp-0091` — a checker and the no-guarantee line) · Is SEO still worth it
  in 2026? (`serp-0062`).
- **Calendar item 11 (WhatsApp):** Does it cost money to use WhatsApp Business? (`serp-0072`) · What
  is the 24 hour rule for WhatsApp Business? (`serp-0072`) · Is it worth getting WhatsApp Business?
  (`serp-0072`) · Is there a UK alternative to WhatsApp? (`serp-0072` — answered without a product
  pick).
- **Calendar item 7 (landing page or website), additions:** What is the average cost of a landing
  page? (`serp-0071`) · How much should I charge for a website in the UK? (`serp-0071` — the buyer's
  mirror question) · Are Google landing pages free? (`serp-0071`).
- **Calendar item 4 (reminders) and the booking fold:** Where can I get free text reminders for
  appointments? (`serp-0064`, `-0094`, `-0095`) · Can I send an automated text message to confirm an
  appointment? (`serp-0095` — yes; the PECR line sits after it) · How do I send an appointment
  reminder text? (`serp-0094`) · What is the best free appointment reminder app? (`serp-0064`,
  `-0095`) · How much does an online booking system cost? (`serp-0093` — the bundle's booking FAQ) ·
  Is there a free online booking system available? (`serp-0093`) · What is the cheapest online
  booking system? (`serp-0063`) · Can I make my own booking system? (`serp-0063`) — all answered
  without a product recommendation.
- **Calendar item 11 (WhatsApp), additions:** How much does a WhatsApp Business API cost?
  (`serp-0096`) · Which WhatsApp API providers are available in the UK? (`serp-0096` — a dated list
  of what each charges) · How can I send 10,000 messages on WhatsApp? (`serp-0096` — the template and
  opt-in rules first).
- **Trades industry page (S6 rows):** How much do local SEO services cost? (`serp-0092`) · How much
  does a plumbing website cost? (`serp-0092`) · What is the best advertising for plumbers? (`serp-0089`,
  `-0092`) · Are plumbers in demand in the UK? (`serp-0089` — answered with a sourced figure or not at
  all). **Dental practices (existing head):** What are some effective SEO keywords for dentists?
  (`serp-0090`) · How much does SEO cost in the UK? (`serp-0090`).
- **Veterinary practices (S6 rows) and calendar item 8:** What is CMA in vets? (`serp-0101`) · What
  are the latest updates on the CMA's veterinary market investigation? (`serp-0101`, `-0102` — the
  Order, dated) · How much do vet fees cost? (`serp-0101` — the price-list duty, not a figure) · Who
  are the big 6 vet groups? (`serp-0102` — named from the CMA's report only) · What must a practice
  publish, and by when? (constructed; `06` L.2).
- **Garages industry page (S6 rows):** How much should an AI receptionist cost? (`serp-0066`) · Is
  there a free AI receptionist? (`serp-0066`) · Will I be reminded when my MOT is due? (`serp-0067` —
  gov.uk's free service first) · How can I get MOT and road tax reminders? (`serp-0067`) · Can I book
  an MOT without a reminder letter? (`serp-0067`). **Vets:** no PAA on the head (a local pack sat
  there instead).

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
