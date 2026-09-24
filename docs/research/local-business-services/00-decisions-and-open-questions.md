# 00 — Decisions and open questions

> Purpose: record the founder's decisions verbatim, the assumptions the research rests on, the
> existing commitments this initiative re-opens, the proposed new decision gates, and the numbered
> question list that becomes the brainstorm agenda. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked **finding**.

## 1. Decisions (verbatim)

| Date       | Decision              | Answer                                                                   | What it changes                                                   |
| ---------- | --------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 2026-09-23 | Sales model           | Mixed — decided per service in the research                              | `02` chooses among M1/M2/M3/M4 per service with a rationale table |
| 2026-09-23 | Site placement        | Expand `/services/*` as peers, grouped by category, plus one bundle page | `05` sitemap delta; category field; bundle page                   |
| 2026-09-23 | Verticals             | Clinics plus a researched shortlist; recommend 3–5                       | `06` rubric and waves                                             |
| 2026-09-23 | Pricing               | Indicative GBP ladders, sourced, every figure pending D4                 | `07` public ladders; cost and margin in `private/`                |
| 2026-09-24 | Repository visibility | Public first; cost/margin model kept out of the public tree              | `private/` folder, git-ignored                                    |
| 2026-09-24 | Licence               | All-rights-reserved notice added                                         | `LICENSE` at the repo root                                        |

## 2. Assumptions

- One person delivers; there are no clients, case studies, rankings or audit history.
- The site is not live (Phase 1 not started); new pages can be authored as drafts before or after cutover.
- Naxdor (enskild firma, Sweden) is the contracting entity; D1 (no UK presence), D6 (GoHighLevel-first)
  and D8 (national, service-led) are unchanged; clients' Google Business Profiles may be managed, WebAsk
  still has none.
- GoHighLevel list prices are as fetched on 23 September 2026 [S01] and change without notice.
- Keyword volumes stay null; demand is recorded as evidence tiers (`03` § 6).

## 3. Locked decisions and existing commitments this initiative re-opens or touches

| Commitment                                                                                              | Where it is stated (file:line)                                                                                                                                                                                                                                                                               | How this initiative touches it                      | Proposed handling                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| "Services: Naxdor's 9"                                                                                  | `CLAUDE.md:50-55`; `docs/README.md:60-68`; `docs/00-overview.md:23`; `docs/02-uk-market-research.md:407`; `docs/04-information-architecture.md:79,306,320,361,382`; `docs/06-build-plan.md:33-35`; `docs/08-seo-architecture.md:248`; `docs/03-uk-compliance.md:430`; `docs/strategy/uiux-guidelines.md:105` | Six new services and a bundle                       | Dated "AMENDED" note at each site when the brainstorm approves (`11` § 3)                     |
| "Verticals: same three"                                                                                 | `docs/README.md:68`; `CLAUDE.md:65`                                                                                                                                                                                                                                                                          | Wave-1 verticals                                    | Dated note; `VERTICAL_ENUM` grows per shipped page                                            |
| Out of scope: "subscription billing for WebAsk itself"                                                  | `docs/00-overview.md:288-296`                                                                                                                                                                                                                                                                                | Hosted monthly plans are invoiced monthly           | Proposal: narrow to "self-serve online subscription checkout"                                 |
| Out of scope: paid media / social management; live chat; client portal                                  | `docs/00-overview.md:288-296`                                                                                                                                                                                                                                                                                | GHL ships Ad Manager, a social planner and a portal | Stay out unless the brainstorm rules otherwise                                                |
| `VERTICAL_ENUM` deliberately dropped `home-services`                                                    | `scripts/check-keywords.ts:77-80`                                                                                                                                                                                                                                                                            | Trades/home services is a wave-1 candidate          | Add only when the page ships, with the reason recorded                                        |
| "in accounts you own" / "set up in an account you own" / "You own the subscription in your own account" | `data/services.ts:490,501,~532`; `web-development` FAQ L119, L205                                                                                                                                                                                                                                            | Hosted sub-accounts                                 | Ownership stays the default; hosting is the labelled exception with a written exit (`02` § 6) |
| seo excludes "Review generation, incentivised reviews, or reputation management"                        | `data/services.ts:371`                                                                                                                                                                                                                                                                                       | Review Management page                              | Rewrite to point at the new plans (`09/deltas.md`)                                            |
| crm-automation excludes campaign sending                                                                | `data/services.ts:509,545-547`; `content/services/crm-automation.mdx:84`                                                                                                                                                                                                                                     | Email & SMS Marketing page                          | Rewrite to point at the new plan                                                              |
| ai-integration `whoItsFor` and inbound-first section                                                    | `data/services.ts:559`; `content/services/ai-integration.mdx:24-30`                                                                                                                                                                                                                                          | AI Receptionist page                                | Boundary paragraph both ways                                                                  |
| maintenance excludes "Paid platform licence fees"                                                       | `data/services.ts` (maintenance entry)                                                                                                                                                                                                                                                                       | Hosted plans bundle the platform                    | Clarify that hosted plans are the exception                                                   |
| `data/service-locations.ts` "WebAsk cannot deliver 'your Google Business Profile'"                      | `data/service-locations.ts:19-23`                                                                                                                                                                                                                                                                            | Google Business Profile page                        | Replace with the D1 ruling (Q20)                                                              |

## 4. Proposed new gates

| Gate    | Question                                                                                                  | Owner                            | Blocks                                           |
| ------- | --------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| D9      | Sales model per service (M1/M2/M3/M4)                                                                     | Founder                          | `02` final; every hosted-plan draft              |
| D10     | Processor posture when hosting sub-accounts: DPA template, transfer mechanism, special-category exclusion | Founder + solicitor (extends D3) | first hosted client; the bundle page             |
| D11     | Affiliate participation and disclosure wording                                                            | Founder                          | any affiliate link; `rel="sponsored"` code touch |
| D12     | Vertical picks and waves                                                                                  | Founder                          | `06` final; industry pages                       |
| D13     | Category taxonomy, bundle name, service-count copy                                                        | Founder                          | `05`; nav; `09/index-and-nav.md`                 |
| D2 ext. | VAT on resold SaaS and metered usage                                                                      | Accountant                       | `07` display rules                               |
| D4 ext. | The ladders; two-part price display; hosted-plan payment terms                                            | Founder                          | every `[D4]` figure                              |

## 5. Open questions (the brainstorm agenda)

Model and money — Q1 sales model per service (D9) · Q2 does hosting conflict with "no subscription
billing for WebAsk itself" · Q3 VAT on resold SaaS/usage (D2 ext.) · Q4 two-part price display
(`setupAmount?` type extension vs `priceNote`) and hosted-plan payment terms (D4 ext.) · Q5 the
FX-and-usage rule (GBP plan fee fixed 12 months; usage at cost on a GBP schedule reset quarterly) · Q6 white-label
the hosted plans at all · Q7 affiliate participation and disclosure (D11) · Q8 AI Receptionist:
pay-per-use vs the $97 AI Employee plan per sub-account, and the bundled minutes allowance.
Law and data — Q9 processor posture and DPA template; WebAsk's Art. 27 representative as the
precondition (D3/D10) · Q10 clinic patient data never hosted (M1 for clinics) · Q11 transfer mechanism
(UK Extension with the Addendum fallback; TRA for special-category data) · Q12 text-back template
sign-off rule (service message only) · Q13 review flow (ask everyone, no incentives, no two-step) and
the clinic widget/POM question for CAP Copy Advice · Q14 UK number: divert-first vs a new local number
per client (KYC) · Q15 the DUA Act statistical-purposes cookie exception (site-wide; separate feature).
Market and site — Q16 vertical picks and waves (D12) · Q17 pages vs features: booking/reminders,
unified inbox, payments, the local SEO plan (D13) · Q18 taxonomy Build / Grow / Automate & run and
the bundle name · Q19 `google-business-profile` trademark in the slug · Q20 the GBP-for-clients ruling
text · Q21 home page teaser/anchor choice (D8) · Q22 keyword enums, re-mapping, blog topic
`local-marketing` · Q23 off-page and digital-PR effort the founder will fund; HighLevel certification
for the directory.
Copy and sequencing — Q24 boundary rewrites and the "nine" copy · Q25 sentence forms allowed for
services with no delivery history · Q26 support caps (email/SMS ≈ 6 clients; receptionist ≈ 5) and the
receptionist fallback · Q27 sequencing against cutover (Phase 1 vs Phase 2b) · Q28 regulatory-watch
owners and dates (DUA commencement, CMA veterinary Order, GHL pricing) · Q29 paid media, social and
portal stay out.

Each Q gets: the file that informs it, the owner, and a one-line proposal where one exists.

## 6. Decision log

| Date       | Q / gate                                             | Decision                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Recorded by      |
| ---------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 2026-09-24 | Q12 · rule R53 (feeds `08` § 3 and every `09` draft) | **Finding —** an electronic message asking a person for consent to marketing is itself direct marketing (ICO direct-marketing guidance, "What are direct marketing purposes?", read 2026-09-24 [S03]). Records with no lawful basis are therefore not emailed or texted to ask for consent. Lawful routes: post; a live call that clears the TPS screen (PECR reg 21); asking at the next visit or purchase; or leaving the record parked. Corporate subscribers may be emailed. Three pre-drafted passages that said otherwise were rewritten in the planning file the same day. | planning session |
| 2026-09-24 | Step 0c — repository visibility                      | Flip `azcheema/webask` to public now and push the research branch. Pre-flight found no secret in the tree or in any commit; `LICENSE` is on `main`; `private/` is git-ignored.                                                                                                                                                                                                                                                                                                                                                                                                    | founder          |
| 2026-09-24 | Session sequence (planning § 0 item 10)              | S1 continues by pasting every pre-drafted piece from the planning file into the bundle before S2 starts; the S3 SERP capture follows as early as possible because it is the only evidence that can change the plan.                                                                                                                                                                                                                                                                                                                                                               | founder          |
| 2026-09-24 | `01` input — LC Phone UK messaging rate file         | The founder exports the UK rate file from inside the GoHighLevel account into `private/`. `01` cites it as an in-account document with its date; no figure from it enters a tracked file until the founder clears it.                                                                                                                                                                                                                                                                                                                                                             | founder          |

## Sources

[S01] GoHighLevel pricing page, retrieved 23 September 2026 — see `10-sources.md`.
[S03] ICO direct-marketing guidance — see `10-sources.md` for the registered URL and retrieval date.
