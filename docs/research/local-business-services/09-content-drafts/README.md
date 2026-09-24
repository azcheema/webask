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
- `blog/calendar.md`, `blog/outlines.md`, `blog/<slug>.mdx` — twelve posts, all `draft: true`.
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
