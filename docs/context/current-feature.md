# Current Feature

> The active-work tracker. Update on every feature start; mark Completed and add
> a one-line summary to History when the branch is merged.
>
> Per-feature loop: \*\*Document → Branch (`feature/[name]`) → Plan → Implement →
> Test → Iterate → Commit (ask first) → Merge → Delete branch → Update this file
>
> - the phase doc.\*\* See [`ai-interaction.md`](ai-interaction.md).

## Feature Name

Phase 0 — Fork & Foundations (code-side complete), plus early Phase 1 content

## Status

**Code-side complete. Everything outstanding is external setup or gated on a decision.**

13 commits on `main`. Working tree clean. `d:\naxdor` untouched at `e0e5885`.

## Gate status — all green

```
typecheck · lint · build · check:contrast · check:keywords
check:uniqueness · check:redirects        149 e2e tests passing
```

Run them with `corepack pnpm <script>`. Never claim local Lighthouse green —
unreliable on Windows, trust CI only.

## What exists now

- **Fork + brand.** Deep Teal `#0f766e`, three token collisions resolved,
  typographic wordmark as live Geist text, icon set regenerated.
- **Entity + schema.** `parentOrganization` → naxdor.com, `areaServed` United
  Kingdom, `inLanguage` en-GB, `priceCurrency` GBP, `AdministrativeArea` not
  `State`. Regulatory bodies in `knowsAbout`.
- **301 map.** `lib/redirects.ts`, 410 route handlers, `check:redirects`,
  `e2e/redirects.spec.ts`. 18 rules, max 2 hops, 55 assertions.
- **UK locations.** Manchester · Cheshire · Leeds, facts only; hub copy is an
  optional `copy` block so an unauthored hub is unrenderable by construction.
- **Keywords.** 332 UK terms, incl. two clusters no competitor contests
  (`clinic-compliance` 22, `uk-compliance` 15). **`msv`/`kd` are null** — see below.
- **Pages written for the UK.** Home · `/services` (was missing entirely) ·
  `/about` · `/contact` · `/pricing` · `/process` · `/free-audit` ·
  `/legal/company-information` · all three `/industries/*`.
- **GBP pricing** from the docs/02 § 7 research anchors, with a hedged VAT note.

## Open questions / blockers

| What                                                         | Who        | Blocks                                                                                                                                                                                                        |
| ------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **D2** — UK VAT (NETP £0 vs. B2B reverse charge)             | Accountant | `/pricing` VAT wording. `VAT_NOTE` in `lib/pricing.ts` is the single place to change                                                                                                                          |
| **D3** — UK GDPR Art. 27 representative                      | Solicitor  | Un-drafting `/legal/{privacy,terms,cookies}` — they are `draft: true` because they were approved for Naxdor under **EU** GDPR, not UK                                                                         |
| **D4** — sign off the GBP price list                         | Founder    | Nothing technically, but a published price is a commitment                                                                                                                                                    |
| Vercel project · Resend domain + SPF/DKIM/DMARC · GSC + Bing | Founder    | Cutover                                                                                                                                                                                                       |
| Real MSV/KD from Ahrefs/Semrush                              | Founder    | Using `data/keywords.json` to **sequence** work. It is a validated targeting map, not a prioritised backlog — volumes are `null` because inventing them would fabricate the numbers that drive prioritisation |

⚠️ **Still live on the old WordPress site:** the fabricated team (8 people incl.
"Alicia Keys") on `/about/` and two identical fake testimonials on `/portfolio/`.
DMCC Act 2024 exposure, enforceable by the CMA. Deleting them is a 20-minute
WordPress job and does **not** need the migration.

## Traps — do not reintroduce

1. **No global trailing-slash redirect.** Next 16 ships `/:path+/` → `/:path+`
   already. The `:path*` version in doc 04's original "Rule 0" matches the root
   and loops the homepage. `check:redirects` blocks it.
2. **`--color-brand-500` is not lifted in dark mode.** White on `#2dd4bf` is
   1.86:1. The lift lives on `--color-ring`.
3. **`--accent` (shadcn neutral hover) ≠ `--color-accent-*` (the warm scale).**
4. **No POM naming in clinic-facing copy** — including euphemisms like
   "anti-wrinkle" or "wrinkle-relaxing", which the ASA treats as implied
   promotion. Editorial discussion of the _rule_ is fine; sales copy is not.
5. **A blank line inside an MDX `{/* */}` comment** terminates the expression
   and breaks the build one commit later, after prettier escapes it.
6. **No claims implying a team.** There is one person. `data/team.ts` says so.
7. **Deep teal has less contrast headroom than the old indigo.** Any
   translucent-on-brand treatment must be checked with `e2e/a11y.spec.ts` —
   `check:contrast` cannot see composited alpha.

## Next

Largest remaining unblocked work: **rewrite the nine service-page MDX bodies for
the UK.** The sweep made them correct in spelling and brand, but they are still
structured around Naxdor's US market framing. That is Phase 2 scope in
[`../06-build-plan.md`](../06-build-plan.md) and a real content job, not a
mechanical one.

Then Phase 1 cutover, which is gated on D2/D3/D4 and the external setup above.

🚩 **Before DNS:** re-run the redirect assertions against a **Vercel preview**.
Vercel runs the Next server in `minimalMode` where it does not execute redirects
at all — the edge proxy does. Local `next start` and production are different
engines. See `e2e/redirects.spec.ts`.

## History

_(Phase 0 is the first WebAsk feature; nothing merged and closed yet.)_
