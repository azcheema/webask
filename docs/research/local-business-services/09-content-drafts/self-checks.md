# 09 — Planning notes and pass-1 self-checks, per draft

> Carried verbatim from the planning file with each draft. The self-checks are the **author's**, not a
> second reader's: S8 reads every sentence they name, trusts the scripted counts over any count written
> here, and does not re-open an item unless the sentence is still in the draft. Where a self-check says
> "S8 softens" or "S8 confirms", that is the S8 work list.

## Catalogue FAQ answers (App. Z — applies to every `*.catalogue.md`)

Constraints applied: plain text only (these strings feed `FAQPage` JSON-LD and can surface in a SERP
without the page around them), pricing question first, 80–150 words per answer, British English, no
prescription-only medicine named or euphemised, no client or team implied, no watch-list words, the
J rules cited per set. Prices are not printed; each pricing answer says the starting figures are
"shown on this page and on the pricing page" — when D4 lands, the executor may prepend "Starting at
£X," to that sentence. Answers that depend on Q4/Q5 (payment terms, the twelve-month fixed fee) are
marked with a trailing comment. `counts.mjs` (H.7) verifies the word counts in S7.

## `services/missed-call-text-back.mdx`

Written to Appendix M.1 and the J rules; the catalogue half is Appendix I.1. Two sentences depend on
brainstorm decisions and are marked in the comment (Q5 fixed-for-twelve-months plan fee; Q4/Q5 the
published usage schedule). The meta description gains the "Starting at £X + VAT where applicable"
tail the other pages carry only when D4 lands. Pass 1 self-check is recorded after the draft; pass 2
and the similarity runs happen in S8 with tooling.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Fabricated-proof: no client,
result, team or track-record form; watch-list words (`usually`, `most`, `typically`, `the pattern we
see`, `our clients`) absent. Modality: every quoted ICO and PECR phrase is verbatim from App. A
sources; "since August 2025" rests on SI 2025/904; the number-registration facts are scoped to "the
platform we use" (vendor article, 18 Jul 2024) rather than stated as UK law; the two plan-terms
sentences are flagged as pending Q4/Q5 in the comment. UK-correctness: "whichever is higher" kept;
sole traders and partnerships as individuals per doc 03 § A5. Template: no restatement of the CRM
page's legal-form table (linked instead); "Two limits" and the remote sentence follow the house
pattern without copying its wording. POM/euphemism grep: 0. Performance-claim grep: 0. US-spelling
grep: 0 (`enrol`, `modelled`, `recognise`). GSM-7: the printed template uses straight apostrophes
and no em dashes. Length ≈ 1,250 words. Links out: email-sms-marketing, crm-automation,
ai-receptionist, pricing, process, contact (all resolve once the two new pages exist; on a draft
build they render as text until `status: "live"`).

## `services/review-management.mdx`

Written to Appendix M.2 and rules R13–R22; the catalogue half is Appendix I.2. Quotations are the
ones recorded in § 10 row 3 (CMA208 read via `pdftotext`, 23 September 2026; Google Maps
user-contributed content policy, 24 September 2026). Sentences that depend on decisions are marked in
the comment: R21 (no widget on aesthetics pages until CAP Copy Advice answers), Q17 (whether "Reviews

- Posting" is a tier), D4 (every figure).

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** R13 the fixed phrase opens the
page; R14 no two-step flow, with the CMA and Google wording quoted; R15 incentives described as
"allowed only if … labelled" and "we do not offer it", never "illegal"; R16 the penalty with
"whichever is higher" and the 6 April 2025 date, identical to the CRM page's figure; R17 § 3.3 quoted
and owned; R18 the widget "as Google shows it"; R19 replies approved before posting; R20 GDC on the
dental paragraph only; R21 aesthetics widget off, stated as the interim rule; R22 Google's policy
quoted as Google's. R09 review-request framing ("asks for a review and nothing else"; a promoting
request "joins that list"). Modality: "described as cherry-picking" and "not prohibited under the
banned practice" mirror the guidance's own strength; the March 2026 investigations sentence is the
existing site wording; the market sentence is bounded to "six review platforms whose pricing pages
we could read in September 2026". Fabricated-proof: no client, result or team; watch-list words
absent ("Most review tools can ask…" is a statement about product features, not a track record —
S8 to confirm it stands; if not, "Many review tools offer…" with the Set B evidence). UK-correctness:
Act, CMA, GDC, Google policy named correctly. Template: distinct from `crm-automation.mdx:74` (which
states the rule in one paragraph; this page runs the programme) and from Appendices O, P and R.
POM/euphemism, performance-claim and US-spelling greps: 0 (`programme`, `modelled`, `apologise` not
used). Length ≈ 1,350 words. Links out: crm-automation, dental-practices, pricing, contact, process;
the catalogue links to google-business-profile and email-sms-marketing as related services.

## `services/ai-receptionist.mdx`

Written to Appendix M.3 and rules R23–R29; the catalogue half is Appendix I.3. Market context comes
from Appendix Q (bounded, no competitor named). Sentences that depend on decisions are marked in the
comment: Q8 (pay-per-use versus the AI Employee plan; the bundled allowance), Q5 (fixed plan fee), D4
(every figure), Q10 (clinics stay on the bespoke build).

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** R23 inbound reasoning with the
statute quoted; R24 no callback feature, outbound routed to the bespoke build with "specific prior
consent"; R25 disclosure printed as practice ("No UK statute we could find requires…", never "the
law requires"); R26 recording disclosure with the ICO's hedge kept ("even where consent is not
strictly required"); R27 regulated subjects handed over, clinics to the bespoke build; R28 report
fields only, no answer rate; R29 no per-minute figure, published GBP schedule, USD pass-through.
Modality: "unsettled, with a lean" matches the existing site wording and doc 03 § B3; the ICO fines
are dated and described as the regulator "treating them as automated"; the market sentence is bounded
to "the UK receptionist products we checked in September 2026" and names nobody. Fabricated-proof: no
client, result or team; watch-list words absent. UK-correctness: TPS and Ofcom named correctly under
reg 21; CAP Code applied to clinic answers per doc 03. Template: distinct from `ai-integration.mdx`
(which owns the classification essay and inbound-first case at length — this page links to it and
adds the plan's own facts) and from Appendices O and P. POM/euphemism, performance-claim and
US-spelling greps: 0 (`apologise`, `modelled`, `programme` not used). Length ≈ 1,300 words. Links
out: ai-integration ×4, contact, process; the catalogue links to missed-call-text-back and
ai-integration as related services.

## `services/email-sms-marketing.mdx`

Written to Appendix M.4 and rules R04–R12 and R41; the catalogue half is Appendix I.4. The
legal-form argument belongs to `/services/crm-automation` and is linked, not restated (the rule the
AI page already follows); the soft opt-in is quoted once, in the statute's words. Sentences that
depend on decisions are marked in the comment: Q4/Q5 (usage schedule; fixed fee), D4 (every figure),
Q17 (the "Plus" tier).

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** R04 corporate versus individual
stated once, table linked not restated; R05 soft opt-in quoted verbatim, bought lists and stale
lists excluded, no claim that a missed call or an old enquiry qualifies; R06 identity and a way to
stop in every message; R09 "asks them, once, lawfully" for the opt-in request framed as a plain
request; R10 WhatsApp opt-in policy and per-message billing, no Meta GBP figure; R11 the bought-list
limit in the site's existing words; R12 SMS as electronic mail; R41 the SRA rule quoted and applied;
R39 usage in USD passed through on a published schedule (Q4/Q5 flagged); R38 not triggered (no
figure printed). CAP and POM: no medicine named or euphemised; "the compliant message promotes the
consultation" is the site's existing formulation; dental recall split matches the CRM page.
Modality: "half of inboxes now block" tracking pixels is an **unsourced claim — S8 sources it (Apple
Mail Privacy Protection and Gmail image proxying are documentable) or rewrites as "many inboxes now
block or pre-fetch"**; "it usually means sending an offer to everyone" carries a watch-list word —
**S8 replaces with "the phrase is used to mean"**. Both flagged so pass 2 cannot miss them.
Fabricated-proof: no client, result or team; "the plan's first automation is often the one that asks
them" — **"often" implies a pattern across clients; S8 rewrites as "the plan's first automation can
be the one that asks them"**. UK-correctness: PECR regs 22–23, SRA 8.9, CAP framing per doc 03.
Template: distinct from the CRM page (build versus run; the table lives there) and from Appendices
O–U. POM/euphemism, performance-claim and US-spelling greps: 0 (`programme` not used; `recognise`
not used; `organisation` not used). Length ≈ 1,450 words. Links out: crm-automation ×2,
aesthetic-clinics, dental-practices, pricing, contact, process; the catalogue links to
crm-automation and review-management as related services.

## `services/landing-pages.mdx`

Written to Appendix M.5 and rules R38 and R46; the catalogue half is Appendix I.5. Two legal points
are stated at guidance strength and flagged for S8 sourcing in the comment (the DMCC invitation-to-
purchase price rule via CMA207; the Consumer Contracts Regulations' distance-sale cancellation right).
Sentences that depend on decisions are marked: D4 (every figure), Q17 (the coded-page tier).

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** R38: no figure printed except
the existing web-development floor, which the site already publishes; the VAT-inclusion rule is
stated as a duty on the client's page, and "+ VAT where applicable" governs the catalogue not the
body. R46: price clarity and the distance-sale duties described as what the page must carry, with
no "compliant" verdict. Cookies: the consent standard and equal prominence per doc 03; the DUA
exceptions dated 5 February 2026 and described as "statistical … with a simple way to object" and
"preference", advertising pixels excluded — matches § 10 row 2. Performance: "the mobile speed floor
we measure our own coded builds against" — "measure", never "enforce" (CLAUDE.md). Modality flags
for S8: "the charges the customer cannot avoid included in the figure they see first" rests on the
DMCC invitation-to-purchase rule — **source CMA207's paragraph before publication**; the distance-sale
cancellation sentence — **source the Consumer Contracts Regulations 2013 regulation**; "that is often
an acceptable trade" carries a watch-list word — **S8 rewrites as "that can be an acceptable trade"**;
"A campaign page usually wants to measure itself" — **S8 rewrites as "A campaign page is built to
measure itself"**. Fabricated-proof: no client, result or team; no conversion figures. CAP: clinic
pages promote the consultation, no medicine named. Template: distinct from `web-development.mdx`
(which owns the disqualification list and the cost bands) and from Appendices O–V. POM/euphemism,
performance-claim and US-spelling greps: 0 (`analytics` is fine; `programme`/`organise` not used).
Length ≈ 1,350 words. Links out: web-development ×3, aesthetic-clinics, contact, process; the
catalogue links to web-development and email-sms-marketing as related services.

## `services/google-business-profile.mdx`

Written to Appendix M.6, rule R46 and the D1 ruling in Appendix I.8; the catalogue half is Appendix
I.6. The honesty opener is rewritten from `content/services/seo.mdx:24-26`, not copied (the
similarity gate). Sentences that depend on decisions are marked in the comment: Q20 (the ruling
text), Q17 (listings add-on resold at cost), D4 (every figure).

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** D1 ruling applied: WebAsk holds
no profile and never creates one for a client; management as a manager on the owner's account with
the owner's consent (Google's wording). Google's eligibility test quoted verbatim, service-area and
virtual-office rules quoted, co-working conditions paraphrased from the guideline. R46: the
disclosures section lists what a site must carry and says "we do not tell you a site is compliant".
R13 applied by link; no review request on this page. Reinstatement: no timeline or outcome promised;
"which rule was broken" is the deliverable. Rankings: explicitly not reported or promised. Modality:
"Most profiles were claimed in an afternoon and never opened again" is an unsourced generalisation —
**S8 must either source it (a Google or trade statistic) or soften it to "Many profiles are claimed
and never opened again"**; "the fix is usually a footer and a page" carries a watch-list word —
**S8 replaces "usually" with "in most cases we have seen" (not allowed — implies clients) or, better,
"the fix is a footer and a page"**. Both flagged here so pass 2 cannot miss them. The vets sentence
rests on Art. 5(4)(d) as quoted in Appendix L. Fabricated-proof: no client, result or team.
UK-correctness: Bing/Copilot/ChatGPT relationship is the existing SEO page's claim (`seo.mdx:16`);
Apple Business Connect and the directory list match doc 05 § 5. Template: the opener is a rewrite of
`seo.mdx:24-26` in different words (S8 runs the similarity check on this pair specifically).
POM/euphemism, performance-claim and US-spelling greps: 0 (`programme` in the reviews section is the
British form; `optimisation` not used). Length ≈ 1,300 words. Links out: review-management, seo,
pricing, contact, process; the catalogue links to seo and review-management as related services.

## `bundle/local-business-plans.mdx`

Written to Appendix M.7 and rules R30–R39; the catalogue half is Appendix I.7 and the tiers are
Appendix K.1. Sentences that depend on brainstorm decisions are marked in the comment: Q2 (hosting
versus "no subscription billing"), Q4 (payment terms), Q5 (twelve-month fixed plan fee), Q6
(white-label), Q9/Q10 (DPA template; clinics rule), D3 (no hosted plan is sold before the Article 27
representative exists — the page carries no representative claim, R34).

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** R30 controller/processor
sentence verbatim from J.7; R31 US hosting stated, UK Extension plus Addendum, no "stays in the UK";
R32 clinics section; R33 exit conditions match the vendor articles and say "not a seamless one"; R34
no representative claimed; R35 notice and objection passed on (our contract term — Q9); R36 number
registration scoped to the platform's record; R37 one-way senders; R38 VAT wording exact; R39 USD
pass-through with the published schedule. Fabricated-proof: no client, result or team; watch-list
words absent. Modality: "Active – Re-certification under Review" is in the comment, not asserted as
a permanent state in the prose ("certification" only — S8 decides whether the prose needs the "as at"
date); the transfer sentence lists conditions rather than promising a move. UK-correctness: Article
28, PECR by implication only (linked pages carry it). Template: distinct from the CRM page (ownership
framed as the default it is the exception to) and from Appendix O (no restated text-back argument).
POM/euphemism, performance-claim and US-spelling greps: 0 (`licence`, `programme`, `modelled`).
Length ≈ 1,150 words. Links out: crm-automation, all six component pages, aesthetic-clinics,
dental-practices, web-development, pricing, process, contact.

## `blog/missed-call-text-back-uk-rules.mdx`

Blog frontmatter uses the real keys (`lib/blog.ts`): `slug`, `title`, `description`, `datePublished`,
`dateModified`, `authorSlug`, `topic`, `keywords`, `draft`. `topic` is a closed enum today; the draft
uses `crm` and switches to `local-marketing` when that topic is added (Q22). Components are the ones
the blog MDX map exposes (`Callout`, `StatGrid`, `Comparison`). The post complements the service page
in Appendix O rather than restating it: the page sells the plan; the post explains the rule to anyone
running a text-back on any tool, and ends with a checklist they can apply without us.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Every quoted phrase is verbatim
from the ICO page or the regulations as recorded in Appendix A and § 10; the fine carries "whichever
is higher" and its commencement date; the stale £500,000 page is described as "at the time of
writing" with the notice mentioned. Modality: "Nobody has tested it" for the missed-call/negotiation
question matches § 10 row 1's open point; the number-registration sentence is scoped to "the platform
we use" and "since 2024"; the market sentence is bounded to four products and names none. R01 (no
"not marketing" label — the post says "service message … nothing more"), R02, R03, R04, R05, R06,
R07, R12 all applied; R36/R37 for numbers. Fabricated-proof: no client, result or team; "Most of the
businesses sending them have never asked" is an unsourced generalisation — **S8 softens it to "Many
of the businesses sending them may never have asked"** or drops it. Watch-list words otherwise absent.
UK-correctness: ICO, PECR, regs 22 and 23, SI 2025/904 all named correctly; British spelling
(`recognise`). Template: distinct from Appendix O (the page prints the template as a deliverable and
sells the divert; the post explains the rule and gives a checklist) and from the CRM page (linked for
legal form). POM/euphemism, performance-claim and US-spelling greps: 0. Title 49 characters;
description 153. Length ≈ 1,350 words. `draft: true` until the two linked service pages exist.

## `blog/google-reviews-dmcc-act-uk.mdx`

Real frontmatter keys; `topic: crm` until `local-marketing` exists (Q22). Complements the service
page in Appendix S (which sells the programme) and the existing `local-seo-checklist-2026` post
(which carries the review step in one line): this post explains the rule to anyone running review
requests on any tool, and ends with a checklist.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Every quoted passage is from
CMA208, the CMA short guide, Google's policy or the ICO as recorded in § 10 and Appendix A; the
penalty carries "whichever is higher" and the individual ceiling matches doc 03 § A6; the March 2026
investigations sentence is the site's existing wording. R13–R22 applied: the fixed phrase in the
TL;DR; no two-step flow; incentives "not banned … must be disclosed", the GDC exception on the
dental section only; the widget unfiltered; § 3.3 quoted; Google's sentences quoted as Google's.
R09 and R12 for the request-as-marketing question, with the ICO's silence stated. Modality: "Many
review tools can ask a customer to score you privately" is a statement about features — **S8
confirms against the Set B pages (SMB Booster's review funnel; NiceJob; Podium) or softens to "Some
review tools"**; "the most requested feature in the category" is **unsourced — S8 removes it or
rewrites as "a common feature"**; "Most shortcuts break both" is a summary of the two lists, not a
statistic — acceptable, S8 to confirm. Fabricated-proof: no client, result or team. Template:
distinct from Appendix S (the page runs the programme; the post explains the rule and gives a
checklist) and from the local-SEO checklist post (linked). POM/euphemism, performance-claim and
US-spelling greps: 0 (`programme`). Title 55 characters (under the 60 blog budget; the layout adds
` · WebAsk`); description 154. Length ≈ 1,400 words. `draft: true` until the review-management page
exists.

## `blog/ai-receptionist-uk-rules-costs.mdx`

Real frontmatter keys; `topic: ai` (existing enum, anchor `/services/ai-integration`). Complements
the existing `ai-voice-agents-roi-service-businesses` post (which owns the ROI of a bespoke voice
agent with compliance as a cost line) and the receptionist page in Appendix R (which sells the plan):
this post owns the buying decision for an off-the-shelf receptionist — the rule, what the UK market
charges, what the price lists leave out, and when a plan is the wrong purchase.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Statute quoted verbatim for regs
19 and 21; the classification stated as "unsettled, with a lean" (existing site wording, doc 03 § B3);
the ICO fines dated and described as the regulator "treating them as automated"; recording duty with
the ICO's hedge kept; AI self-identification presented as design, with "not, as far as we could
find, required by any UK statute" (R25); "consumer law does not look kindly on being misled" is a
generalisation — **S8 either cites the DMCC misleading-action provision (CMA207) or softens to "and
consumer law is built around not misleading people"**. Market figures are bounded to "what we could
read in September 2026", unnamed, and match Appendix Q; "on the platforms behind many products the
underlying minutes are billed in US dollars" rests on one vendor's guide — **S8 rewrites as "on at
least one of the platforms behind these products"** unless a second vendor is sourced; "most phone
systems and mobile providers will show you" carries a watch-list word — **S8 rewrites as "many phone
systems and mobile providers can show you"**. The £4,500 floor is the site's existing published
anchor. Fabricated-proof: no client, result or team; the "when it pays" method asks the reader to
measure their own calls. Template: distinct from Appendix R (the plan) and from the voice-agents ROI
post (linked). POM/euphemism, performance-claim and US-spelling greps: 0. Title 59 characters;
description 160. Length ≈ 1,450 words. `draft: true` until the receptionist page exists.

## `blog/appointment-reminder-texts-pecr.mdx`

Real frontmatter keys; `topic: crm` until `local-marketing` exists (Q22). Complements
`/services/local-business-plans` (the Answer tier carries the calendar and reminders) and the
missed-call post: this post owns the rule for reminders on any tool.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Every ICO phrase is verbatim
from the page read on 24 September 2026; Article 6(1)(b) is quoted from legislation.gov.uk; the
Meta sentence is quoted from S60; the DVSA sentences from S122. R08 (reminders as service messages),
R01 (no "exempt" label), R06 (identity and a way to stop as design), R53 (no consent request inside
a reminder), R52 (DVSA) all applied. Modality: "a good deal of that" and "many UK small businesses"
replaced "most" in the first draft; the WhatsApp category sentence is hedged ("the category Meta
uses for transaction and appointment updates") and flagged for a verbatim definition before
publication; the 155-character count is of the printed example. Fabricated-proof: no client, no
percentage, no product; the dental example names no treatment; "{Practice}" replaced a placeholder name that turned out to be a real trading name (a second reader found three UK dental businesses using it),
and the number is from Ofcom's reserved drama range (0161 496 0xxx), so the example can never dial a
real line — S7 confirms the range is still reserved. UK-
correctness: PECR reg 23 wording; GSM-7 segment rule. Template: distinct from Appendix U (the
text-back post) and Appendix O. POM/euphemism, performance-claim and US-spelling greps: 0. Title
58; description ≈154 (`counts.mjs` verifies). Length ≈ 1,250 words. `draft: true` until the bundle
page exists.

## `blog/whatsapp-uk-small-business-rules-2026.mdx`

Real frontmatter keys; `topic: crm`; anchor `missed-call-text-back` (the calendar's choice — the
inbox and the WhatsApp channel live on that page). The 1 October 2026 change is the hook; the
`datePublished` below assumes the page can go live before it — if not, publish after with the tense
changed, which the comment flags.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Every Meta and platform sentence
is verbatim from the pages read on 23–24 September 2026 and dated in the text; the pound figures
are attributed to the selector and dated, the dollar figures to the platform's guide and dated; no
conversion anywhere (R10, R39). PECR applied at the legal-form level with the CRM page's distinction
(R04); "whether an over-the-top messaging app is 'electronic mail'" is left for S7 to confirm against
the ICO's current wording rather than asserted. The per-number free allowance is described, not
quantified, until the exact figure is quoted. Modality: "a growing share of UK customers would
rather talk to a business" is an **unsourced generalisation — S7 sources it (Ofcom's Online Nation
or Meta's own UK figures, attributed) or rewrites as "many UK customers"**; "nearly two years" is
arithmetic from November 2024 to October 2026. Fabricated-proof: no client, no product by name (the
platform is "the one we use"), no adoption figure. Template: distinct from Appendix O (the plan) and
V (campaigns). POM/euphemism, performance-claim and US-spelling greps: 0. Title 60 (at the blog
budget); description ≈155. Length ≈ 1,350 words. `draft: true`; tense note in the comment if
published after 1 October.

## `blog/google-business-profile-suspended-uk.mdx`

**Pass 1 self-check.** Every Google sentence verbatim from S128 or S39 as read 24 September 2026;
no frequency claim about causes ("Google does not publish a league table of causes, so nobody
honestly can"); no timeline or success rate; D1 stated plainly. Watch-list words: none. The
description's "the rule to check first" is flagged in the comment for S7. Title 59;
description ≈152. Length ≈ 1,150 words.

## `blog/database-reactivation-uk-lawfully.mdx`

**Pass 1 self-check.** Statute and ICO wording verbatim (S15, S05, S03); R04, R05, R06, R11, R41,
R53 applied; the TPS "28 days" rests on S75; the missed-call number is placed in pile three
consistent with § 10 row 1's open point (a missed call is not "requesting a quote"). Watch-list
words: none; the description's "most old lists" flagged. No figures beyond the illustrative
"ten bookings from four hundred" example, which is framed as hypothetical arithmetic — **S7 may
rewrite as "a handful of bookings from a few hundred lawful records"** to avoid any reading as a
result. Title 59; description ≈157. Length ≈ 1,200 words.

## `blog/landing-page-or-website-small-business.mdx`

**Pass 1 self-check.** Every figure is one the site already publishes (web-development page:
£3,500, £1,200–£2,000, £240–£360 a year); the landing-page price is not printed; the performance
sentence says "measure", never "enforce"; cookies and price rules per docs/03 and S19/S25; no
conversion claims; the decision table has no "most businesses" row; "that can be an acceptable
trade" per the App. W rewrite. Watch-list words: none. Title 59; description ≈151. Length ≈ 1,200
words.

## `blog/cma-vets-order-practice-website.mdx`

**Pass 1 self-check.** Every quotation matches App. L.2's extraction; the compliance table is
flagged for confirmation on the PDF; R42–R44 applied (the size split and the date in every dated
sentence; the "less than 40%" figure attributed and dated; no law-firm summary); the VAT sentence
per R46; the RCVS quotations per S35. Watch-list words: none; no practice named; no "compliant"
verdict. Title 58; description ≈156. Length ≈ 1,350 words. Publish only after doc 03 § B10 lands
(App. AC) and the CMA explainer, if published by then, is read.

## `blog/missed-calls-trades-divert-text-back.mdx`

**Pass 1 self-check.** Statute, ICO, Gas Safe and GOV.UK quotations verbatim as recorded in App.
L and AH; R01–R03, R36–R37, R47–R50 applied; the £42 sentence names the information duties; the
"requesting a quote" gloss is the ICO's and the missed-call caveat keeps § 10 row 1's open point;
the market sentence is bounded to four products. Watch-list words: none. Title 56; description
≈158. Length ≈ 1,350 words. Publish after the trades page (App. AM) and doc 03 § B11 (App. AO.1).

## `blog/hosted-crm-vs-own-account-leaving.mdx`

**Pass 1 self-check.** Every vendor sentence is verbatim from S52 or S53 as re-read on 24
September 2026, with each article's date in the text; the transfer-versus-eject distinction on
workflow state is stated rather than blurred (the § 4.1 precision note); R30, R31, R33, R35 applied;
the DPF status carries its "as at" date; no "seamless"; no client. The "$97/month plan" is the
eject article's own figure and is quoted as such, not converted. Watch-list words: none. Title 58;
description ≈153. Length ≈ 1,300 words. Re-read S52–S53 in S2; the articles change.

## `blog/gohighlevel-uk-local-business-gbp-cost.mdx`

**Pass 1 self-check.** Every dollar figure is a vendor list price attributed and dated in the
text; no pound figure is derived from any of them; the FX method is the band and the post says why
the pound figures are omitted (R39, § 5.5); the rebilling rule is quoted as the vendor's; the
Twilio figures are labelled the proxy; the segment arithmetic (153 and 67 per part) is standard and
matches S49's 67 for concatenated UCS-2 — **S7 confirms the 153 figure against S49 or drops it**;
nothing restates the buyer's guide's sections (tiers, HubSpot, lawfulness). Watch-list words:
none. Title 59; description ≈156. Length ≈ 1,300 words. Publish after the bundle page and after 07's
band exists, so the "our own plans" sentence is true.

## `industries/veterinary-practices.mdx`

Written in the pattern of `content/industries/dental-practices.mdx` and its `data/industries.ts`
entry, deliberately distinct from it: dentistry turns on a market study that has not reported; vets
turn on an Order already made, with dates. **Precondition (docs/06 lesson, Appendix L):** doc 03
gains a Part B section for veterinary practices (§ B10, drafted from Appendix L.2) before this page
ships, and S4 confirms the Article 3 compliance table on the Order PDF itself. Decisions flagged in
the comments: Q10 (whether a practice whose records are owners' names and animals' histories may use a
hosted plan — the page stays neutral), D4 (the existing catalogue anchors are quoted as the site
already prints them). Existing "nine services" wording is avoided (Appendix I.9).

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Every quoted phrase is from the
Order text extracted on 24 September 2026 (Appendix L.2) or RCVS chapter 23; the compliance table is
the Article 3 table as extracted and is flagged for confirmation on the PDF. The "less than 40%"
figure is attributed to the CMA's release and dated. The catalogue anchors (£3,500, £2,500, £750)
match the existing dental entry's wording, which the site already publishes; D4 remains open. R42
and R43 applied (the Order quoted, the size split and dates stated; no law-firm summary relied on);
R44 for the statistic; R46 for the VAT sentence. Fabricated-proof: no client, result or team;
watch-list words absent ("Nearly every independent practice is small" is a statement about the
15-site threshold — S8 may soften to "Most independent practices fall below the threshold" only if a
source is added; otherwise keep the threshold and drop the generalisation). The performance sentence
copies the corrected dental wording exactly ("enforced as build-failing budgets" for layout shift,
blocking time and page weight; load time "settled in the field"). Template: distinct from the dental
page (study versus Order; four regulators versus Articles and dates) — S8 runs the similarity pair
dental ↔ vets. POM/euphemism, performance-claim and US-spelling greps: 0 (`programme`). Meta title
44, description 150. Body ≈ 1,300 words. Links: the template renders the six related services and the
FAQs; the body links nothing directly, per the existing industry pages.

## `industries/trades-home-services.mdx`

Written in the pattern of Appendix AA and deliberately distinct from it and from the three clinic
pages: no regulator licenses a plumber's advertising, so this page's spine is consumer law — the
Consumer Contracts Regulations on a quote accepted at the door or by text, the Consumer Rights Act on
what a website promises, the register policies on logos and numbers — with the missed-call fit on
top. **Preconditions:** doc 03 gains § B11 (App. AO.1) first; `VERTICAL_ENUM` and `INDUSTRY_SLUGS`
gain `trades-home-services` in the commit that ships the page (AE.8); the three-competitor deep dive
(§ 4.6's rule) runs in S4. Existing "nine services" wording is avoided (I.9). The catalogue anchor
£3,500 is the site's published web-development floor; D4 stays open. Q10 is left open: the page
describes the plans without saying where they are hosted.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Every quoted phrase is verbatim
from the regulations, the Act, the Gas Safe policy or GOV.UK as recorded in App. L and AH on
2026-09-24; the £42 sentence names the information duties, not the right to cancel (R47); the Gas
Safe sentence is § 3.1's own wording, not the paraphrase (R50); "misleading action under consumer
law" is stated generally and R50 flags the CMA207 paragraph for S4. Fabricated-proof: "A trade
business has the same two problems" replaced the first draft's "the two problems a trade business
brings to us" (an implied client); the market sentence is bounded to four products checked in
September 2026; no percentages; the performance sentence is the corrected dental wording
("enforced as build-failing budgets" for CLS, TBT and weight; load time "settled in the field").
Watch-list words: none ("In most cases" removed from FAQ 4; "tend to leave out" replaced by the
bounded sentence). UK-correctness: sole traders inside the E-Commerce disclosures, outside the
Trading Disclosures ones; "Trading Standards" as the enforcement route per the Gas Safe and
TrustMark pages. Template: distinct from AA (statute versus Order), from the clinic pages, and from
Appendix O (the text-back page owns the template and the inbox; this page owns the quote that
follows). POM/euphemism, performance-claim and US-spelling greps: 0 (`programme`, `authorised` not
used). Meta title 47, description 143. Body ≈ 1,400 words. FAQ word counts by eye 110–145;
`counts.mjs` verifies.

## `industries/garages-mot-centres.mdx`

Distinct from AM by design: the trades page turns on the quote; the garages page turns on the
reminder and the price display, with the honest finding that DVSA's rules stop at the forecourt.
**Preconditions:** doc 03 § B12 (App. AO.2); enum entries `garages-mot-centres`; the three-competitor
deep dive in S4; verification of the Motor Ombudsman "logos on websites" sentence on the sponsor's
garages page before FAQ 4 relies on it.

**Pass 1 self-check (planning session; pass 2 and tooling in S8).** Every quotation is verbatim
from the Code as extracted, the DVSA pages, GOV.UK, the ICO page or the statutes recorded in App. L
and AH on 2026-09-24; the Code is described as binding accredited garages only (R51); the DVSA
"nothing online" finding is stated with the page's update date; Google's on-premises sentence is
quoted as Google's (R22); the reminder rule follows R52 and the DVSA timing is quoted. Fabricated-
proof: no client, no percentage, no garage named; "everyone's, with a twist" is a description, not a
track record. Watch-list words: none. UK-correctness: CTSI named in full once; "Chartered Trading
Standards Institute" in FAQ 4. Template: distinct from AM (reminder and price display versus quote
and register), from the clinic and vets pages, and from Appendix O. POM/euphemism, performance-claim
and US-spelling greps: 0 (`programme`, `authorised` in a quotation only). Meta title 51 (at the
budget), description 156. Body ≈ 1,300 words. The FAQ 4 "logos on websites" point is left out of the
body until S4 verifies the sponsor's garages page; the body says "only where the garage is accredited".
