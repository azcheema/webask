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

| #   | term                                            | intent                   | primaryUrl                                   | supportingUrls                               | cluster           | vertical               | App. G evidence (position is ordinal)                                                  |
| --- | ----------------------------------------------- | ------------------------ | -------------------------------------------- | -------------------------------------------- | ----------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| 1   | missed call text back uk                        | transactional            | /services/missed-call-text-back              | /blog/missed-call-text-back-uk-rules         | lead-recovery ◆   | —                      | head "missed call text back uk" → itself, 1st                                          |
| 2   | missed call text back service uk                | transactional            | /services/missed-call-text-back              | —                                            | lead-recovery ◆   | —                      | same list, 2nd                                                                         |
| 3   | missed call text back service                   | transactional            | /services/missed-call-text-back              | —                                            | lead-recovery ◆   | —                      | head "missed call text back" → "… service", 6th                                        |
| 4   | text back missed calls                          | commercial-investigation | /services/missed-call-text-back              | /blog/missed-call-text-back-uk-rules         | lead-recovery ◆   | —                      | head → itself, 1st; "auto text back missed call", 2nd                                  |
| 5   | missed call text back software                  | commercial-investigation | /blog/missed-call-text-back-uk-rules         | /services/missed-call-text-back              | lead-recovery ◆   | —                      | "software" 2nd, "software free" 8th — product intent → post                            |
| 6   | is missed call text back legal uk               | informational-bottom     | /blog/missed-call-text-back-uk-rules         | /services/missed-call-text-back              | uk-compliance     | —                      | constructed (calendar #1 target); no list returned                                     |
| 7   | why do i get a text message after a missed call | informational-top        | /blog/missed-call-text-back-uk-rules         | —                                            | lead-recovery ◆   | —                      | two heads returned it (5th and 5th)                                                    |
| 8   | auto reply text missed call                     | informational-bottom     | /blog/missed-call-text-back-uk-rules         | —                                            | lead-recovery ◆   | —                      | head → android/iphone variants (consumer intent — weak)                                |
| 9   | missed call text back for plumbers              | transactional            | /industries/trades-home-services             | /services/missed-call-text-back              | lead-recovery ◆   | trades-home-services ◇ | head → itself, 1st                                                                     |
| 10  | google review management services uk            | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | "google review management" → "… services", 5th (no uk list)                            |
| 11  | google review management company                | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | same list, 4th                                                                         |
| 12  | google review management agency                 | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | same list, 6th                                                                         |
| 13  | review management service uk                    | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | "review management uk" → itself, 1st (drifts to jobs after)                            |
| 14  | google review request automation                | commercial-investigation | /services/review-management                  | /blog/google-reviews-dmcc-act-uk             | reviews ◆         | —                      | "review request automation" → "google …", 3rd                                          |
| 15  | service to get more google reviews              | transactional            | /services/review-management                  | —                                            | reviews ◆         | —                      | "get more google reviews service" → 1st                                                |
| 16  | how to get more google reviews from customers   | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | /services/review-management                  | reviews ◆         | —                      | same list, 2nd                                                                         |
| 17  | how to ask for google reviews legally uk        | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | —                                            | uk-compliance     | —                      | constructed (calendar #2 target)                                                       |
| 18  | review gating uk                                | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | —                                            | uk-compliance     | —                      | constructed                                                                            |
| 19  | incentivised reviews uk                         | informational-bottom     | /blog/google-reviews-dmcc-act-uk             | —                                            | uk-compliance     | —                      | constructed                                                                            |
| 20  | reputation management for dentists              | transactional            | /industries/dental-practices                 | /services/review-management                  | reviews ◆         | dental-practices       | "review management for dentists" → 1st                                                 |
| 21  | ai phone receptionist uk                        | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | "ai receptionist uk" list, 5th                                                         |
| 22  | ai voice receptionist uk                        | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | same list, 7th                                                                         |
| 23  | ai receptionist for small business uk           | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | same list, 8th                                                                         |
| 24  | ai call answering service uk                    | transactional            | /services/ai-receptionist                    | —                                            | ai-receptionist ◆ | —                      | "ai call answering service" → "… uk", 2nd                                              |
| 25  | ai receptionist cost uk                         | commercial-investigation | /blog/ai-receptionist-uk-rules-costs         | /services/ai-receptionist                    | ai-receptionist ◆ | —                      | "ai receptionist" → "… cost", 4th; uk constructed                                      |
| 26  | free ai receptionist uk                         | commercial-investigation | /blog/ai-receptionist-uk-rules-costs         | —                                            | ai-receptionist ◆ | —                      | "ai receptionist uk" list, 6th — software intent → post                                |
| 27  | ai dental receptionist uk                       | transactional            | /industries/dental-practices                 | /services/ai-integration                     | ai-voice-agents   | dental-practices       | same list, 3rd — clinics stay on the bespoke build                                     |
| 28  | is an ai receptionist legal uk                  | informational-bottom     | /blog/ai-receptionist-uk-rules-costs         | —                                            | uk-compliance     | —                      | constructed (existing row "are ai receptionists legal uk" — check dupes)               |
| 29  | email marketing agency uk                       | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | head → itself, 1st                                                                     |
| 30  | email marketing services uk                     | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | same list, 5th                                                                         |
| 31  | email marketing companies uk                    | commercial-investigation | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | same list, 4th                                                                         |
| 32  | email marketing agency for small business       | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | "email marketing agency small business" list, 3rd                                      |
| 33  | sms marketing services uk                       | transactional            | /services/email-sms-marketing                | —                                            | email-sms ◆       | —                      | "sms marketing uk" list (platform-heavy) — service form constructed                    |
| 34  | sms marketing cost                              | informational-bottom     | /services/email-sms-marketing                | /blog/gohighlevel-uk-local-business-gbp-cost | email-sms ◆       | —                      | same list, 7th — answered by the page's SMS-cost FAQ                                   |
| 35  | database reactivation campaign                  | informational-bottom     | /blog/database-reactivation-uk-lawfully      | /services/email-sms-marketing                | email-sms ◆       | —                      | "database reactivation" → "… campaign", 2nd                                            |
| 36  | database reactivation uk                        | informational-bottom     | /blog/database-reactivation-uk-lawfully      | —                                            | email-sms ◆       | —                      | constructed (no list)                                                                  |
| 37  | customer follow up automation                   | commercial-investigation | /services/email-sms-marketing                | /services/crm-automation                     | email-sms ◆       | —                      | constructed (no list)                                                                  |
| 38  | landing page design uk                          | transactional            | /services/landing-pages                      | —                                            | landing-pages ◆   | —                      | head → "… agency uk", 1st                                                              |
| 39  | landing page design agency uk                   | transactional            | /services/landing-pages                      | —                                            | landing-pages ◆   | —                      | same, 1st                                                                              |
| 40  | landing page design cost                        | informational-bottom     | /blog/landing-page-or-website-small-business | /services/landing-pages                      | landing-pages ◆   | —                      | same list, 2nd                                                                         |
| 41  | landing page or website small business          | informational-bottom     | /blog/landing-page-or-website-small-business | —                                            | landing-pages ◆   | —                      | constructed (calendar #7 target)                                                       |
| 42  | landing page building service                   | transactional            | /services/landing-pages                      | —                                            | landing-pages ◆   | —                      | "landing page builder service" → 1st                                                   |
| 43  | sales funnel design uk                          | transactional            | /services/landing-pages                      | —                                            | landing-pages ◆   | —                      | "sales funnel design" list — uk constructed                                            |
| 44  | google business profile management uk           | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | constructed (empty list) — the page's head term                                        |
| 45  | google business profile management services     | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | head → "… services", 2nd                                                               |
| 46  | google business profile optimisation service    | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | "… optimisation" → "… optimisation service", 2nd (British spelling surfaced)           |
| 47  | google business profile management agency       | transactional            | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | head list, 7th                                                                         |
| 48  | google business profile management cost         | informational-bottom     | /services/google-business-profile            | —                                            | local-listings ◆  | —                      | head list, 9th — answered by the page's pricing FAQ                                    |
| 49  | google business profile suspended help          | informational-bottom     | /blog/google-business-profile-suspended-uk   | /services/google-business-profile            | local-listings ◆  | —                      | head → itself, 1st                                                                     |
| 50  | how to reinstate google business account        | informational-bottom     | /blog/google-business-profile-suspended-uk   | —                                            | local-listings ◆  | —                      | same list, 9th                                                                         |
| 51  | marketing packages for small business uk        | transactional            | /services/local-business-plans               | —                                            | local-plans ◆     | —                      | constructed (empty list); "marketing packages for small business" 2nd on the bare head |
| 52  | small business marketing packages               | transactional            | /services/local-business-plans               | —                                            | local-plans ◆     | —                      | "local business marketing packages" → 1st                                              |
| 53  | local business marketing services               | transactional            | /services/local-business-plans               | —                                            | local-plans ◆     | —                      | same list, 2nd                                                                         |
| 54  | gohighlevel sms pricing uk                      | informational-bottom     | /blog/gohighlevel-uk-local-business-gbp-cost | /services/local-business-plans               | gohighlevel       | —                      | "gohighlevel uk" list, 8th; "gohighlevel pricing uk" list, 2nd                         |
| 55  | gohighlevel uk number                           | informational-bottom     | /blog/gohighlevel-uk-local-business-gbp-cost | —                                            | gohighlevel       | —                      | "gohighlevel uk" list, 2nd                                                             |
| 56  | gohighlevel consultant uk                       | transactional            | /services/crm-automation                     | —                                            | gohighlevel       | —                      | same list, 3rd (check dupes against the agency/expert rows)                            |
| 57  | gohighlevel sub account transfer                | informational-bottom     | /blog/hosted-crm-vs-own-account-leaving      | /services/local-business-plans               | gohighlevel       | —                      | constructed (calendar #10 target)                                                      |
| 58  | whatsapp business uk cost                       | informational-bottom     | /blog/whatsapp-uk-small-business-rules-2026  | /services/missed-call-text-back              | email-sms ◆       | —                      | "whatsapp business uk" list, 3rd; "… api pricing uk", 10th                             |

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

## 6. UK SERP summaries per service

_S3._

## 7. Demand tiers

_S3 — rubric in § 1 step 5; the reusable caveat paragraph is written with the first tier._

## 8. Anti-cannibalisation against the 332 rows

_S3 — the re-points hypothesised in `05` § 3 are confirmed or amended here._

## 9. PAA → FAQ candidates

_S3 — pricing question first._

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
