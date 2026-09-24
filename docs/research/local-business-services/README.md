# Local-business services on GoHighLevel — research bundle

> **Status: RESEARCH IN PROGRESS. Nothing in this folder is implemented.** Started 24 September 2026
> from the founder's decisions of 23 September 2026 (see `00-decisions-and-open-questions.md`).
> Figures are proposals pending D4 unless marked **finding**. This repository is public: everything
> here is written for a competitor, HighLevel and a prospective client to read. WebAsk's hourly rate,
> USD cost model and margin bands live only in `private/`, which is git-ignored and never pushed.

## 1. What this is

The founder asked on 23 September 2026 for the services GoHighLevel offers to local businesses to be
added as WebAsk services alongside the nine already sold, with deep research first and nothing
implemented until that research has been brainstormed. Four decisions frame the work: the sales model
is mixed and is decided per service in the research; the new services sit under `/services/*` as
peers of the existing nine, grouped by category, with one bundle page; the verticals are the three
clinic industries plus a researched shortlist of three to five more; and prices appear only as
indicative, sourced GBP ladders with every figure pending D4. This folder is that research. It is
brainstormed with the founder before any build work, and the brainstorm's decisions are recorded in
`00` § 6 before a line of code changes.

## 2. Status

Work is checkpointed in nine sessions, S1–S9, from the planning file's run sheet. Every session ends
by updating this table and the **Next** line below it; together they are the handoff.

| File                                                                     | What it answers                                                                                  | Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Last touched |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `README.md`                                                              | Where to start; which numbers are real; decided vs proposed; public repo and `private/`          | 🟡 status table, pre-draft inventory, Next line                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 2026-09-24   |
| `00-decisions-and-open-questions.md`                                     | What was decided, what is assumed, what this re-opens, what must still be decided                | 🟡 Q-list seeded, owners pending; decision log 9 rows (founder, 24 September 2026: the public rate file is the source; the eject commission is disclosed in the contract only)                                                                                                                                                                                                                                                                                                                  | 2026-09-24   |
| `01-gohighlevel-product-study.md`                                        | What the platform sells, what it costs a UK reseller, where the data sits, how sub-accounts move | 🟢 written in S2 from the vendor pages: plan matrix, feature verdicts, UK rates from the public LC Phone country files, the AI plans and the $497 rebilling rule, DPA/DPF/UK representative, transfer and eject (incl. the eject commission), KYC and sender types, affiliate and certification terms, 12 unknowns, a conflicts register                                                                                                                                                        | 2026-09-24   |
| `02-service-line-definition.md`                                          | Which services, delivered how, bounded against the existing nine; taxonomy; the bundle           | 🟡 §§ 1–2 confirmed against `01` in S2 (exit clause, eject commission → D11) and § 2.1 provisional selection added; playbooks, boundaries, taxonomy pasted; evidence pending 03–08                                                                                                                                                                                                                                                                                                              | 2026-09-24   |
| `03-uk-demand-and-keywords.md` + `keywords-draft.json` + `serp-log.json` | Does UK demand exist per service, at what evidence tier, which terms each page owns              | 🟡 S3 part done: 74 `google.co.uk` + 32 Bing + 154 suggest captures in `serp-log.json`; §§ 6–9 written on Google evidence for every page head, every fold test, the three vertical heads and the profile, landing-page and bundle tails; the remaining long tails on Bing only; `keywords-draft.json` 90 rows, 0 duplicates; 33 Google captures still queued (`03` § 6.11, five to a window) — Google blocked three times on 24 September (429, 403, 403), then a five-capture window held; Q30 | 2026-09-24   |
| `04-competitor-analysis.md`                                              | What the UK supply side sells, at what price, with what proof and compliance                     | 🟢 S4 (24 September 2026): Set C chosen by rank on the 03 SERPs and read (eight agencies, § 4; a ninth returned HTTP 500), with the doc 08 § 3 table, delivery and proof, steal-this, gaps and bounded sentences; the four Set A/B pages that blocked the fetch tool re-fetched (Feefo published + VAT; Timely from its bundle; Fresha geo-locked; Smart Web Agency from the archive); the profile, bundle and local-SEO leaders (Virens, Wrise, SEO Works) added the same day — eleven read    | 2026-09-24   |
| `05-site-structure.md`                                                   | URLs, nav, link mesh, schema, staging                                                            | 🟡 taxonomy, sitemap delta and re-points as hypotheses                                                                                                                                                                                                                                                                                                                                                                                                                                          | 2026-09-24   |
| `06-verticals-shortlist.md`                                              | Which local verticals, on what evidence, in what order                                           | 🟢 S4 (24 September 2026): the Order, Schedule 1 and the DBT response re-read from the PDFs (four corrections, L.2.1 obligations added); three-competitor deep dives for vets, trades and garages (L.2.2, L.3.1, L.4.1); the scheme rules sourced (L.3.2 — no number-display rule; CCRs Part 3 has its own £42 floor); § 2 evidence cells cite the records and the totals are recomputed; § 5 recommendation written; founder-affinity column blank until the brainstorm                        | 2026-09-24   |
| `07-pricing-ladders.md` (+ `private/07-cost-model.md`)                   | Indicative GBP ladders [D4] and their public rationale; cost and margin in private               | 🟡 ladders as shapes, every figure blank [D4]; private inputs register rebuilt in S2 from `01` (UK rates, AI plans, Stripe UK, platform share at N)                                                                                                                                                                                                                                                                                                                                             | 2026-09-24   |
| `08-compliance-addendum.md`                                              | Each doc 03 gap: source, question, copy rule, insertion point                                    | 🟡 gap register seeded, rules R01–R56, three doc 03 sections drafted; S2 pointer to `01` § 11 on the platform rows                                                                                                                                                                                                                                                                                                                                                                              | 2026-09-24   |
| `09-content-drafts/`                                                     | Ship-shaped drafts, verified twice                                                               | 🟡 6 service pairs, bundle pair, 3 industry pairs, 12 blog drafts, index/deltas, self-checks; unverified (S8)                                                                                                                                                                                                                                                                                                                                                                                   | 2026-09-24   |
| `10-sources.md`                                                          | Every source with retrieval date and confidence                                                  | 🟡 register S01–S156; S2 note on the vendor re-reads                                                                                                                                                                                                                                                                                                                                                                                                                                            | 2026-09-24   |
| `11-implementation-outline.md`                                           | The build plan for after the brainstorm                                                          | 🟡 shipping order and snippets AE.1–AE.9 pasted                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 2026-09-24   |
| `12-seo-ranking-plan.md`                                                 | How each new page ranks                                                                          | 🟡 method, page arguments and per-page skeletons pasted                                                                                                                                                                                                                                                                                                                                                                                                                                         | 2026-09-24   |

Status values: 🔲 not started · 🟡 draft · 🟢 done · 🔴 blocked (name the blocker in the cell).

**Next:** the remaining `google.co.uk` captures in `03` § 6.11 run five to a window, an hour or more apart (seven long-tail batches remain; Q30 decides how far the tail goes); each window ends with `03` §§ 6–9 updated and a checkpoint commit. Then S5: `08` compliance addendum seeded from plan § 10, folding in the S4 corrections (`06` L.2.1 obligations, L.3.2 scheme rules, the reg 27(3) reading in R47), and `07` pricing with cost and margin only in `private/`. S4 closed on 24 September 2026 with `04` 🟢 and `06` 🟢 (founder-affinity column blank); S3 stands at 74 Google captures, 32 Bing, 154 suggest. Resume from this table, then `00` § 6.

### 2.1 What the planning file already holds for each bundle file

The research was planned before it was executed. The planning file lives outside this repository (in
the executor's Claude Code plans folder, `i-want-to-add-flickering-lemon.md`) and holds pre-drafted
material for most of the files below; its section and appendix references are kept here so each
session starts from the draft rather than from memory. The pieces named in the second column were
pasted into this folder on 24 September 2026; the "Status after S1" column is the planning file's own
expectation, kept as the record. The table above is the folder's status. Every
pre-draft is a hypothesis: if the UK SERP evidence gathered in S3 contradicts a boundary or a keyword
mapping, the draft is reworked.

| Bundle file                                       | Seeded from the planning file                                                                                                     | Session that finishes it                             | Status after S1                                    |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `README.md`                                       | F.4; AK.1–AK.2                                                                                                                    | S1 (closed S9)                                       | 🟡 skeleton + this table                           |
| `00-decisions-and-open-questions.md`              | F.5 (decisions, assumptions, re-opened commitments, gates D9–D13, Q1–Q29); AJ.0 correction recorded in § 6                        | S1; owners S9                                        | 🟡 Q-list seeded, owners pending                   |
| `01-gohighlevel-product-study.md`                 | § 10 rows 4–6, 11, 13; App. B; App. A HighLevel URLs; K.2 inputs                                                                  | S2                                                   | 🔲 facts seeded, unwritten                         |
| `02-service-line-definition.md`                   | § 4.1 models; § 4.2 set; App. I definitions; I.8 boundaries; AG.2 playbooks; § 4.3 taxonomy; I.7 + AB bundle                      | S3 (§§ 1–2), S6 (final)                              | 🟡 drafted; evidence pending 03–08                 |
| `03-uk-demand-and-keywords.md`                    | § 5.2 protocol; E.2 seeds; App. G harvest; AL.1 candidate rows; AL.2 record schema                                                | S3; vertical rows S6                                 | 🔲                                                 |
| `keywords-draft.json`                             | AL.1 (58 candidate rows, `msv`/`kd` null, proposed clusters)                                                                      | S3                                                   | 🔲                                                 |
| `serp-log.json`                                   | AL.2 schema; App. G lists as `suggest-endpoint` records                                                                           | S3                                                   | 🔲                                                 |
| `04-competitor-analysis.md`                       | App. N (Set A, 9), App. Q (Set B, 20), App. C (Set C candidates), N.3–N.5, Q.6–Q.7                                                | S4                                                   | 🟡 Sets A and B pre-fetched                        |
| `05-site-structure.md`                            | § 4.3–4.5; App. M links and schema; AD.1 nav; AE.3 JSON-LD; AE.7 sitemap                                                          | S6                                                   | 🟡                                                 |
| `06-verticals-shortlist.md`                       | § 4.6; App. L (vets, trades, garages, universal); AG.1 scored table; App. AP (gyms wave-2 evidence, rules R54–R56, page skeleton) | S4                                                   | 🟡 scored; founder column blank                    |
| `07-pricing-ladders.md`                           | K.1 ladders; K.5 comparables; Q.6 display precedents; AB.2–AB.3                                                                   | S5                                                   | 🟡 structure; every figure blank [D4]              |
| `private/07-cost-model.md`                        | F.6; K.2 inputs; K.3 usage bands; K.4 table shapes                                                                                | S5                                                   | 🔲                                                 |
| `08-compliance-addendum.md`                       | § 10 rows → `C01…`; App. J R01–R53 plus R54–R56 in App. AP.2; App. AC § B10 (vets); App. AO § B11 (trades) and § B12 (garages)    | S5                                                   | 🟡 rules and three doc 03 sections drafted         |
| `09-content-drafts/services/`                     | MDX: App. O, R, S, T, V, W; catalogue: App. I.1–I.6 + Z.1–Z.6                                                                     | S7, verified S8                                      | 🟡 six pairs drafted                               |
| `09-content-drafts/bundle/`                       | App. P + I.7 + Z.7 + AB.1                                                                                                         | S7, verified S8                                      | 🟡                                                 |
| `09-content-drafts/index-and-nav.md`, `deltas.md` | App. AD, I.8, I.9, AB.3                                                                                                           | S7                                                   | 🟡                                                 |
| `09-content-drafts/blog/`                         | calendar App. AI; drafts App. U, X, Y, AQ, AR, AS–AY (all twelve calendar items); outlines App. AJ                                | S7, verified S8                                      | 🟡 twelve drafts; S3's PAA capture may reshape H2s |
| `09-content-drafts/industries/`                   | App. AA (vets), App. AM (trades), App. AN (garages)                                                                               | S7, verified S8                                      | 🟡 three drafted; each gated on doc 03             |
| `10-sources.md`                                   | F.7 header; App. AH S01–S129                                                                                                      | S1; consolidated S9                                  | 🟡 register entered                                |
| `11-implementation-outline.md`                    | § 4.7; App. AE.1–AE.9; AB                                                                                                         | S9                                                   | 🟡 snippets drafted                                |
| `12-seo-ranking-plan.md`                          | § 5.8; App. M.1–M.8; AJ clusters                                                                                                  | S6                                                   | 🟡 per-page skeletons drafted                      |
| `private/tools/*.mjs`                             | App. AF.1–AF.4                                                                                                                    | S3 (dupes), S7 (counts), S8 (similarity), S9 (cites) | 🔲 sources ready to paste                          |

What is **not** pre-drafted, and why — so nobody mistakes the planning file for the bundle:

- Every SERP capture and every demand tier (`03`): the plan holds autocomplete lists and candidate
  rows; evidence tiers exist only after the `google.co.uk` captures in S3.
- Set C competitors (`04`): chosen by rank on the `03` head-term SERPs, so they cannot be picked first.
- Every price (`07`) and the whole private cost model: the ladders are shapes; the inputs need the
  in-account LC Phone UK rate file and a dated Bank of England rate range.
- The three-competitor deep dives that gate each industry page (vets, trades, garages).
- The two verification passes and the similarity runs (S8): the self-checks in the planning file are
  the author's, not a second reader's; every flagged sentence is still in the text.
- The pull request and every commit: the founder is asked first, each time.

## 3. How to read

Read `00` → `02` → `06` → `07` → `09`. `01`, `03`, `04` and `08` are the evidence appendices;
`05`, `11` and `12` are for the implementer. `10` is the register every other file cites.

## 4. Legend

- `**Finding —**` a sourced fact; `[Sxx]` resolves in `10-sources.md`; 🟢 primary law, regulator or two
  independent sources · 🟡 vendor or competitor self-description, or a single trade source · 🔴 listicle
  or undisclosed method.
- `> 💡 Proposal —` a judgement, naming its owner. `> ❓ Qn —` an open question, numbered in `00`.
- `[D4]` on every GBP figure: a proposal, not a price. `[founder]` marks a value only the founder can set.

## 5. What this folder does not do

No price is sanctioned. No copy is shipped. Nothing in `data/`, `content/`, `app/`, `lib/` or
`docs/00–08` is touched. `keywords-draft.json` is not mergeable until the enums in
`scripts/check-keywords.ts` are extended (see `11`). `private/` is never committed.

## 6. Gates that apply to this folder

`corepack pnpm prettier --check "docs/research/local-business-services/**"` must exit 0 before any
commit. No `.ts` or `.tsx` file may live here. The verification log for drafts is in
`09-content-drafts/README.md`.
