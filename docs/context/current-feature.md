# Current Feature

> The active-work tracker. Update on every feature start; mark Completed and add
> a one-line summary to History when the branch is merged.
>
> Per-feature loop: \*\*Document → Branch (`feature/[name]`) → Plan → Implement →
> Test → Iterate → Commit (ask first) → Merge → Delete branch → Update this file
>
> - the phase doc.\*\* See [`ai-interaction.md`](ai-interaction.md).
>
> Reset for WebAsk at the fork — Naxdor's working state does not carry over.

## Feature Name

Phase 0 — Fork & Foundations

## Status

In progress

## Goal

A running, rebranded WebAsk skeleton on the inherited Naxdor stack, with the
quality gates green. Nothing public — Phase 1 owns cutover.

## Done so far

- Forked `d:\naxdor` → `d:\WebAsk`, fresh git history. Deliberately excluded:
  `.claude/` (holds a live API key), `images/`, Naxdor's brand assets, and
  Naxdor's own `docs/00-overview.md` (would collide with the WebAsk bundle).
- Deep Teal brand tokens (D5) applied; the three semantic-token collisions
  resolved and re-measured with `check:contrast`.
- Typographic `WebAsk` wordmark as live Geist SemiBold text; icon set regenerated
  from a new `public/brand/favicon.svg`.
- Schema rewired: `parentOrganization` → naxdor.com, `areaServed` United Kingdom,
  `inLanguage` en-GB, `priceCurrency` GBP, `State` → `AdministrativeArea`.
- `data/site.ts` — WebAsk identity, Swedish entity disclosure, `socials: []`.
- `data/locations.ts` reshaped for the UK (Manchester · Cheshire · Leeds), with
  hub copy deferred to Phase 2 by an optional `copy` block.
- Full 301 map: `lib/redirects.ts`, 410 route handlers, `check:redirects`,
  `e2e/redirects.spec.ts`.

## Open questions / blockers

- ⚠️ **Confirm before cutover:** the `+44` phone number and the contact mailbox
  in `data/site.ts` (both flagged inline).
- `organisationNumber` and `vatNumber` are deliberately empty — D2, and the
  enskild-firma org.nr being a personnummer.
- `pnpm check:keywords` is red: `data/keywords.json` still holds US keywords and
  `scripts/check-keywords.ts` hardcodes a `[city]-[st]` slug regex. Needs the
  doc 02 § 5 reseed.

## Next

Finish the remaining Phase 0 tasks in [`../06-build-plan.md`](../06-build-plan.md)
§ Phase 0, then close the phase and update the project-state tables.

## History

_(empty — this is the first WebAsk feature.)_
