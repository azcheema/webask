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

| Pass | Date | Files read | Lens | Findings: blocker / major / minor | Introduced by the previous pass | Notes |
| ---- | ---- | ---------- | ---- | --------------------------------- | ------------------------------- | ----- |
| —    | —    | —          | —    | —                                 | —                               | —     |

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
- Titles ≤ 51 chars; metas 140–160; FAQs pricing-first, 80–150 words; MDX comments on one line.
- Paid media / social management / client portal stay out of scope unless the brainstorm rules otherwise.
- **The repo is public.** Write every sentence as if the named competitor, HighLevel and a prospective
  client will read it: bounded claims, no blunt remarks, and nothing about WebAsk's rate, costs or
  margins outside `private/`.
