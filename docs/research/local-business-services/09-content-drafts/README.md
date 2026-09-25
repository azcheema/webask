# 09 — Content drafts: verification log

> Purpose: the log of every verification pass run over the drafts in this folder — findings by lens
> and severity, and the share of pass-2 findings that pass-1 introduced. Drafts were pasted here on
> 24 September 2026 from the planning file and are verified in S8. Nothing in this folder is
> published: every MDX draft carries `draft: true` or is unreachable until a catalogue entry with
> `status: "live"` exists, and every catalogue entry lives in a fenced `ts` block until the
> brainstorm decides D9–D13 and D4.

## 1. Files

- `services/<slug>.mdx` + `services/<slug>.catalogue.md` — six service pages (body + catalogue).
- `bundle/local-business-plans.mdx` + `.catalogue.md` — the bundle page, its FAQs and the `tiers` data.
- `industries/<slug>.mdx` + `.catalogue.md` — three wave-1 industry pages, each gated on its doc 03 section.
- `blog/calendar.md`, `blog/outlines.md`, `blog/<slug>.mdx` — sixteen posts, all `draft: true` (#13–#16 drafted in S7, 25 September 2026; #17 is an outline only).
- `index-and-nav.md`, `deltas.md` — exact current strings and their proposed replacements.
- `self-checks.md` — the planning notes and pass-1 self-check carried with every draft; S8's work list.

## 2. Verification log

| Pass | Date       | Files read                                                                                                                                                                                                                                   | Lens                                                                                                                                           | Findings: blocker / major / minor | Introduced by the previous pass                                    | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 2026-09-25 | All 38 drafts, by five second readers, one per group: the six service bodies; the seven catalogues + bundle body + `index-and-nav.md` + `deltas.md`; the three industry pages and catalogues; blog posts 1–8 (alphabetical); blog posts 9–16 | All eight (fabricated-proof, modality/provenance, UK-correctness, template/consistency, POM, British English, performance claims, doc 03 § B4) | **7 / 88 / 122** (217)            | n/a                                                                | By group: service bodies 1/9/26 · catalogues, bundle, nav, deltas 2/10/25 · industries 2/28/20 · blog A–G 0/27/21 · blog G–W 2/14/30. Every finding and every proposed fix reviewed against the register before it was applied; 4 rejected, 1 deferred, 12 carried (§ 3.3). **295 edits** applied in six anchored batches (each batch checked every anchor was unique before writing anything) plus the 12-edit trim batch; commit `e00d212`. Blockers: the review page and the DMCC post said no review platform's pricing page mentioned the Act — Feefo's does (`04` Q.3, S177), and `04` Q.6 was corrected the same day; the receptionist catalogue's FAQ 2 presupposed recording on (D4 says off by default); the text-back catalogue's `includes` gave the £129 tier's web chat at the £99 price; the landing-page post placed the page's price "below all of those" (the working set sits above the builder band); the vets page said the Order was silent on VAT (Art. 7(2)(f) requires VAT-inclusive prices) and its Art. 3 table dropped two dated website rows (Arts 20 and 18).                                                                                                                                                                                                                                                    |
| 2    | 2026-09-25 | The pass-1 diff (`aa9ed7d` → `e00d212`, 39 files), by two second readers: the services, catalogues, bundle, industries, `deltas.md` and `04`; the sixteen posts                                                                              | fabricated-proof, modality/provenance, template/consistency                                                                                    | **1 / 14 / 39** (54)              | **46 of 54 (85%)** — above the 69% of the prior run, so pass 3 ran | Blocker: the receptionist page's "none said on its page that the assistant tells callers what it is" — pass 1 had widened a Set B bound to every product checked, and the Set C garage product (S173; `06` § L.4.1) does say it is an AI if asked. The other families: a decision applied to some pages and not their twins (the text-back "from your own number" on the hero, the description, the reminder post and the trades bullet; the clinic FAQ on the email catalogue); a fix that imported a stronger claim than its source (Art. 10 URL registration moved to the practice's own compliance date; "a record of having asked Google" for Art. 5(5); "identical everywhere" for the listings add-on; an Art. 18 table row with no supporting extraction; "in writing" for reg 36(1) on a distance contract; "one status" where S191 records three); and provenance comments or headings left behind after the body changed (seven). 52 applied, 2 resolved by extending the S38 register note instead (a re-read on 25 September 2026 through the fetch tool recorded the policy's headings and the full merchant sentences, which also confirmed the incentives quotation's tail), 0 rejected; the R11 bought-list sentence, which pass 1 had rewritten as a lift, went back verbatim because R11 says to keep it. Commit `9b62f72`. |

## 3. Gate greps over this folder (zero hits, or each hit justified in the log)

- POM and euphemism: `Botox|Vistabel|Dysport|Azzalure|Bocouture|anti-wrinkle|wrinkle-relax|beautox|brotox`
- Performance claims: `enforced|checked in CI|continuous integration|under two seconds|sub-two-second|verified in our build`
- Implied proof: `usually|most businesses|the pattern we see|we typically|our clients|clients we|a large share of`
- US spelling: `optimiz|organiz|color\b|center\b|analyz|catalog\b|program\b|inquiry|ZIP`

### 3.1 Run of 24 September 2026 (the paste-in)

- POM and euphemism: 0 hits.
- Performance claims: 5 hits, all justified. Three are the "The website" sentence on the three industry
  drafts, identical to the live dental page (`content/industries/dental-practices.mdx` L77–78): layout
  shift, blocking time and page weight are `error` gates in `.lighthouserc.cjs`, and load time is
  described as settled in the field, not enforced. Two are in `blog/outlines.md`, where the rule itself
  is stated.
- Implied proof: 5 hits, all justified. Three in `deltas.md` quote the current site text slated for
  replacement (`web-development.mdx:52` "usually"; the note on `ai-integration.mdx:78` "usually
  obvious"; `home.ts:248` "Usually, yes"). One in `blog/outlines.md` states the rule. One in the
  landing-page post's provenance comment lists a "most businesses" row under "deliberately absent".
- US spelling: 2 hits, both in `deltas.md` quoting current code comments that say "catalog"; every
  replacement says "catalogue".
- Structure: every `.mdx` opens with frontmatter; all twelve blog drafts carry `draft: true`; every
  fenced block closes; all 37 `[Sxx]` keys cited in the bundle resolve in `10-sources.md`; no `.ts` or
  `.tsx` file in the folder; `pnpm typecheck` and `pnpm lint` green.

### 3.2 Run of 25 September 2026 (S7)

What changed before this run: the seven catalogue drafts carry the working `[D4]` figures and
allowances (typed once in the entry and once in the pricing-first FAQ answer, with "+ VAT where
applicable"), with `category`, `status`, `setupAmount` and `usageNote` uncommented per D13 and D4;
the seven page MDX L8 comments list each page's figures; the receptionist drafts, post #3, `08` J.7
and R25 and `02` § 3.3 follow the recording-off decision; the bundle's exit section carries the Q6
sentence; posts #13–#16 drafted and #17 outlined (`blog/outlines.md` AJ.13–AJ.17); post #12's
segment sentence rewritten (S49 gives no GSM-7 per-part figure).

- `counts.mjs`: **0 problems.** Two changes to the tool during the run: it now reads the industry
  catalogues' `hero.subhead` (it had read `heroSubhead` only, so the three industry drafts reported
  0 words), and it counts those against 30–50 words — the live industry subheads are 43–48 words
  (`data/industries.ts`) and the drafts 38–45 — while the 12–20 service budget is unchanged. One
  draft fix: post #13's description was 161 characters and is 153.
- POM and euphemism: 1 hit — the pattern line in § 3 of this file (a case-insensitive run). Justified.
- Performance claims: 9 hits, all justified and the same in kind as § 3.1 — the three industry "The
  website" sentences (the dental page's wording), two in `blog/outlines.md` and four in this file and
  `self-checks.md` stating the rule.
- Implied proof: 15 hits, all justified and none in a draft body — the landing-page post's provenance
  comment ("most businesses" under "deliberately absent"), `blog/outlines.md`, this file and
  `self-checks.md` stating the rule, and `deltas.md` quoting the current site text. One hit that
  appeared during the run, "usually" in post #13, was removed before this log was written.
- US spelling: 4 hits, all justified — `deltas.md` quoting code comments that say "catalog", and this
  file's pattern line.
- Structure: sixteen blog drafts, every one `draft: true`; no `.ts` or `.tsx` in the folder;
  `cites.mjs` 0 unresolved after S191 and S192 were registered (164 defined); prettier exit 0.
- Re-checks the self-checks had assigned to S7: (a) S49 states 160, 70 and "up to 67" and gives no
  GSM-7 per-part figure — #12 rewritten; (b) the ICO's electronic-mail page lists direct messages via
  social media under the definition and its wording is technology-neutral — #11's hedge stands and
  nothing more is asserted; (c) Ofcom's drama-number page blocks the fetch tool; read in a browser on 25 September 2026, its table lists Manchester 0161, 496 0000 to 496 0999, as recommended for drama (last updated 11 May 2023; S193) — the example in post #4 stands; (d) #6's "handful
  of bookings" and #11's "growing share" sentences had already been rewritten (neither phrase
  remains); (e) #5's description phrase "the rule to check first" names its H2 "the guideline
  sections to read first" and stands.

### 3.3 Run of 25 September 2026 (S8, after pass 1)

**What pass 1 found, by kind.** Of the 217 findings, the 7 blockers are in the § 2 row. The 88 majors
fall into five families, in order of count: (1) **template lifts** — sentences copied or lightly
paraphrased from the live pages (`crm-automation.mdx` L78/L90/L94 on the email and text-back pages;
`dental-practices.mdx` L15/L54/L59/L93–L103 and `industries.ts` FAQ 1/FAQ 8 on the vets page; the
same closing formula on four service pages; the bundle's transfer paragraph and the FX paragraph
repeated across three catalogues) — every one rewritten, none deleted; (2) **bounded counts that had
gone stale** after the S4 re-fetch — "three" receptionist products, "twelve" product pages / "two"
VAT statements, "four" pricing pages, "the same ten" results (nine); (3) **decisions of 25 September
not carried into the copy** — "Each plan" on a one-tier receptionist; "first quarter" against a
quarterly reactivation; review requests counted against the bundle's conversation allowance where
`07` § 4 has them at cost; recording presupposed on in three places; bank transfer absent from the
payment terms; every `// Qn` marker and "Pending decisions" comment still reading as open;
(4) **31 literal `[Sxx]` placeholders** in the seven L8 provenance comments and 17 more in two
posts, all resolved to register rows (`cites.mjs` now counts a literal `[Sxx]` as unresolved — it
had passed all 48); (5) **modality** — "must not" for Google's "should not", "requires" for
"should", "treats as" for "may infringe", "offence" for a civilly enforced banned practice,
"nobody has tested" for "we found no ruling", the Order's Art. 4(2) two-click rule applied to
every Article rather than Part 2, reg 31(1)'s 12-month extension applied to any missing Schedule 2
item rather than the cancellation information, a distance contract wherever a quote was accepted
by text (reg 5 limb (c) makes the text-after-the-doorstep-quote off-premises), and Twilio's
"proxy" rates printed where the vendor's own UK file (S140–S142) was already on the register with
different figures. The 122 minors are wording, `unincorporated` partnerships, "coworking",
"call-out", one date form, and the stale planning notes inside the drafts.

**Rejected (4), with reasons.** `index-and-nav.md` L12 "// 155 → 157": the string measures 155
characters by `String.length`; the annotation stands. Post #3 L52 "narrow the bound to three
products": the register's Set C rows (S160, S172, S173) record each page's disclosure position, so
the wider bound is what was checked and stands. Post #4 L68 "append a soft-opt-in basis to the MOT
reminder": R52 (`08`) governs that sentence and treats the due-date reminder as a service message;
the post follows R52, and the question is re-opened against R52 in `08` rather than answered in one
post (carried). Vets catalogue h1 "by 22 March 2027": the small-practice date is the audience's, and
the subhead beneath it carries the split; stands.

**Deferred or carried (12).** To `10` in S9: the S03 row's verbatim phrases ("administrative or
customer services purposes", "general branding or logos"); S38's current heading list; the S39
name-field list; CMA208 §§ 3.5 and 4.3 quotations confirmed on the PDF; the S01 listings/SEO
figures. To the build (`11`): a per-unit price field ("per location") for the reviews and profile
entries (AE.2); the pending related-service slugs, now marked in each industry catalogue; the CMA207
invitation-to-purchase paragraph and the Schedule 20 claim-of-approval citation as ship conditions
(the sentences that relied on them now state the rule in plain words). To `08`: R52 (MOT reminders
to customers with no booking) re-checked; R47 and `06` § L.1 gain reg 5 limb (c). To `docs/03`
(build phase, dated correction): § A1 still names the 2008 Trading Disclosures Regulations; the
drafts cite the 2015 instrument (S24), which is current. Pre-publication re-reads already in the
comments: Meta's utility-category definition (#4), the Performance-page field names (#16).

**Self-checks' S8 work list.** Every sentence the self-checks bolded for S8 had already been
rewritten in S7 or in the planning file: none of the 19 phrases is in any draft (grep, 25
September 2026). The bundle's "as at" question is answered by the prose and the FAQ both carrying a
date, moved from 23 to 24 September 2026 (the S44 re-check in `08` § A8). The specific similarity
pairs the self-checks asked for: `google-business-profile.mdx` opener ↔ `seo.mdx:24-26` shares the
argument and the three-item ineligible list and no sentence (best live match for the page 0.2%);
vets ↔ dental 4.8% before pass 1 and 2.6% after (the corpus-only run below), with the seven
paraphrased sentences the reader listed rewritten.

**Industry subheads.** The live `data/industries.ts` subheads are **33, 39 and 38 words** by
whitespace (the S7 log's "43–48" was wrong); the drafts are 45, 39 and 39 (`counts.mjs`). The 30–50
budget brackets both; nothing cut.

**Similarity** (`private/tools/similarity.mjs`, 5-gram Jaccard, functions copied from
`scripts/check-content-uniqueness.ts`; `--corpus-only` added in S8 so the cross-site runs report the
fork match rather than the nearest sibling draft; the notes files excluded from the target set):

- Drafts ↔ drafts and `content/` (70/85): worst 14.9% `trades-home-services.mdx` ↔
  `missed-calls-trades-divert-text-back.mdx` (the shared one-message template and the bounded
  market sentence), 14.0% vets page ↔ vets post, 10.3% garages ↔ trades, 7.5% text-back page ↔
  text-back post; everything else ≤ 4.8%. Before pass 1 the same pairs were 15.8 / 15.0 / 12.2 / 7.7.
- Drafts ↔ live `content/` only (70/85): worst 2.7% garages ↔ `dental-practices.mdx`, 2.6% vets ↔
  dental (4.8% before pass 1), 2.2% trades ↔ dental, 1.6% receptionist ↔ `ai-integration.mdx`.
- Drafts ↔ `d:\naxdor\content` (2/5): worst 0.1%; nine drafts have no shared 5-gram at all.
- Catalogue strings ↔ `d:\naxdor\data\services.ts` literals (2/5): worst 0.1%.
- Catalogue strings ↔ `data/services.ts` literals (70/85): worst 0.1%; ↔ each other: 4.0% trades ↔
  garages, 2.4% bundle ↔ email.

**Gate greps after pass 1** (`.mdx` and `.catalogue.md` only): POM and euphemism 0. Performance
claims 3 — the three industry "The website" sentences, character-identical to the live dental
wording; the two "held to the same … floor/budgets" sentences pass 1 found in post #15 now say
"measured". Implied proof 1 — the landing-page post's provenance comment listing "most businesses"
under "deliberately absent". Wider watch-list (`most|often|typically|generally|in practice`) 11 hits,
all quotations (CMA "asking customers generally", Google "typically takes several days"), the
reader's own situation ("most of the misses out of hours"), or advice ("the most sensible way to
start"); the one "in practice" in a body (post #1 L43) rewritten. US spelling 0. "offence" 0 in the
fake-review sense. `[Sxx]` 0 outside backticks. `counts.mjs` 0 problems after the five trims
(pass 1 had pushed five FAQ answers to 151–156 words). `cites.mjs` 130 cited · 165 defined · 0
unresolved · 0 placeholders. Prettier exit 0.

### 3.4 Run of 25 September 2026 (S8, after pass 2)

`counts.mjs` 0 problems (pass 2 had pushed one FAQ to 152 words and the text-back subhead to 23; both
trimmed). `cites.mjs` 130 cited · 0 unresolved · 0 placeholders. POM 0 · performance 3 (the mandated
industry sentence) · implied proof 0 in bodies · US spelling 0 · "from your own number" 0 (the
platform sends from a number registered to the client, never the dialled number — `07` § 4, R36).
Prettier exit 0. Two register and doc changes rode with the pass: the S38 row's note now carries the
policy headings and merchant sentences (re-read 25 September 2026), and `04` Q.6 now says one page
mentions the Act and none sets out the rules on incentives or gating, with Feefo's per-review
tree-planting add-on named. Carried from pass 2: read S31 Art. 18 before the vets page or post
prints a prescription-fee row (both rows removed); reconcile the two S52 re-read notes in `10`
(owner-only vs Agency Admin permission); `08` § B5 and R17 still say "commit the offence" where the
drafts now say "engage in the banned practice"; the S44 row's retrieval date (23 September) is behind
its 24 September re-check in `08` § A8. § 4's title budget now says ≤ 51 for catalogue meta titles
and ≤ 60 for blog titles, which is what the drafts and the layout have always used.

## 4. Guardrails every draft obeys (planning § 6)

- No client, case study, ranking, audit history or team may be implied — including impersonal forms
  ("usually", "most", "the pattern we see", "a large share of", "our support desk"). One person delivers;
  labour-linear services carry client caps and response windows instead of implied capacity.
- Every figure → `[Sxx]` with date; modality matches the source; bands stay bands; legal qualifiers
  kept ("whichever is higher"); vendor prices attributed inline as USD list prices that change.
- British English; dates "23 September 2026"; £; "+ VAT where applicable" exactly.
- No prescription-only-medicine names or euphemisms anywhere in draft sales copy or catalogue FAQs.
- No UK-presence claims; "local" describes the client, never WebAsk; `areaServed` only in any JSON-LD.
- Ownership stays the default promise; hosting is the labelled exception with a written, verified exit.
- Never describe a text-back as "not marketing" — describe what it contains (no offers, sender named,
  a way to stop). Never promise "5-star reviews"; never a two-step review flow; never an incentive.
- One `primaryUrl` per term; `msv`/`kd` null; near-me terms evidence-only.
- Competitor claims bounded by what was checked; never disparage; affiliate status disclosed.
- Titles ≤ 51 chars for catalogue meta titles and ≤ 60 for blog titles; metas 140–160; FAQs pricing-first, 80–150 words; MDX comments on one line.
- Paid media / social management / client portal stay out of scope unless the brainstorm rules otherwise.
- **The repo is public.** Write every sentence as if the named competitor, HighLevel and a prospective
  client will read it: bounded claims, no blunt remarks, and nothing about WebAsk's rate, costs or
  margins outside `private/`.
