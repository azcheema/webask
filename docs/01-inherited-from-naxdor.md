# 01 — Inherited from Naxdor

> The transfer document. What comes across from `d:\naxdor` verbatim, what needs targeted
> edits, and what gets replaced. Authored 2026-07-27.
>
> **Purpose:** so the UK build never re-researches something already settled for
> `naxdor.com`. If a topic has a "copy verbatim" verdict below, read the Naxdor doc and
> stop — there is no UK-specific thinking left to do on it.

---

## The headline

Roughly **70% of the strategy transfers unchanged.** Performance budgets, design system,
component inventory, schema architecture, programmatic-SEO discipline, delivery playbook,
measurement stack and coding standards are all market-agnostic. They were researched once
and are correct for the UK.

The genuine UK work is concentrated in three places: **keywords, competitors, and
compliance**. Those are the three docs replaced or rewritten.

---

## Verdicts — `d:\naxdor\docs\strategy\*.md` (13 files)

| #   | Doc                            | Verdict              | Notes                                                                                                                                       |
| --- | ------------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `tech-stack.md`                | ✅ **Copy verbatim** | Version pins, rejected-alternatives table, upgrade discipline. All market-agnostic                                                          |
| 2   | `design-system.md`             | ✅ **Copy verbatim** | Tokens, typography, spacing, motion, breakpoints, component inventory, Reference UIs. **Except brand identity** — see below                 |
| 3   | `uiux-guidelines.md`           | ✅ **Copy verbatim** | Interaction and layout rules                                                                                                                |
| 4   | `performance-accessibility.md` | ✅ **Copy verbatim** | Budgets + verification. WCAG 2.2 AA reads onto the Equality Act 2010 in the UK                                                              |
| 5   | `service-delivery-playbook.md` | ✅ **Copy verbatim** | Discover → Design → Build → Grow. Only the Care Plan prices change (USD → GBP)                                                              |
| 6   | `programmatic-seo.md`          | ✅ **Copy verbatim** | Uniqueness contract, indexation gate, anti-patterns, scale plan. **The most valuable transfer**                                             |
| 7   | `measurement.md`               | ✅ **Copy verbatim** | KPI tree, analytics stack, events, cadence, anti-metrics. Consent handling per doc 03                                                       |
| 8   | `seo-strategy.md`              | ✏️ **Copy + edits**  | Five pillars intact. Robots/sitemap/indexation intact. Edits below                                                                          |
| 9   | `schema-strategy.md`           | ✏️ **Copy + edits**  | Whole `lib/jsonld.ts` builder design transfers. IDs/currency/locale change. Edits below                                                     |
| 10  | `content-guidelines.md`        | ✏️ **Copy + edits**  | Structure, title/meta patterns, FAQ rules, alt-text rules all transfer. **One rule inverts**                                                |
| 11  | `information-architecture.md`  | ✏️ **Copy + edits**  | URL map, canonicalisation, breadcrumbs, internal-linking, slug rules transfer. See doc 04                                                   |
| 12  | `keyword-research.md`          | ♻️ **Replaced**      | US-centric. Replaced by [`02-uk-market-research.md`](02-uk-market-research.md) § Keywords                                                   |
| 13  | `competitor-analysis.md`       | ♻️ **Replaced**      | US competitors. Replaced by [`02-uk-market-research.md`](02-uk-market-research.md) § Competitors. **Anti-pattern table transfers verbatim** |

Also copy across: `docs/context/ai-interaction.md`, `docs/context/coding-standards.md`,
`docs/context/current-feature.md` (reset to empty), and `docs/phases/phase-*.md` (retargeted
per [`06-build-plan.md`](06-build-plan.md)).

---

## Copy verbatim — the numbers worth restating

These are the inherited hard gates. They are CI-enforced in Naxdor and stay CI-enforced here.

### Performance budget

| Metric                           | Budget  |
| -------------------------------- | ------- |
| LCP (mobile, 4G)                 | ≤ 2.0s  |
| INP                              | ≤ 200ms |
| CLS                              | ≤ 0.05  |
| Total JS (gz) on home            | ≤ 170KB |
| Total CSS (gz)                   | ≤ 30KB  |
| Lighthouse Mobile Perf           | ≥ 95    |
| Lighthouse SEO                   | ≥ 95    |
| Lighthouse A11y / Best Practices | 100     |

> **Carry the Naxdor calibration too.** Perf-score and LCP were recalibrated to `warn`
> (framework floor) during Naxdor Phase 1 close-out, field-verified via Speed Insights.
> Don't rediscover this — inherit the same posture.

### Quality gates (per PR)

`pnpm typecheck` (zero errors) · `pnpm lint` (zero warnings) · `pnpm build` · Playwright
smoke · Lighthouse CI · programmatic uniqueness check.

### Programmatic uniqueness contract

≥ 30% of each page's body text unique to that URL. Pairwise Jaccard on 5-gram shingles:
**warn at 70% similarity, fail the build at 85%.** Pairs in the 70–85% band go to manual
review, not a broken build.

### Indexation gate

Programmatic pages ship `noindex, follow`. Promotion to `index, follow` requires: body
text ≥ 600 words · uniqueness passes · all internal links resolve · JSON-LD validates ·
no broken images · FAQ block has ≥ 3 location-specific questions · opening paragraph names
the city and at least one specific local detail.

### Editorial rules that carry unchanged

- **First FAQ on any service/industry/location page is always the pricing question.** It's
  the most-searched intent and it's what AI Overviews quote.
- **Lead every FAQ answer with the answer.** 80–150 words, concrete, with numbers.
- **No unverifiable superlatives** ("world's best", "#1 agency") — Google's quality systems
  penalise them and SMB readers discount them.
- **Date every statistical claim in the sentence.** "As of July 2026, …"
- **Answer-first paragraph structure**, tables for comparable data, inline source citations.
- **Alt text describes content + context**, never starts with "image of", never keyword-stuffed.
- Every image carries explicit `width`/`height` (CLS).

### The anti-pattern table (from `competitor-analysis.md`) — transfers verbatim

Autoplay video heroes · "we're the #1 agency" · stock-image carousels · hidden pricing with
no anchor · city pages with only the name swapped · templated FAQs that don't match real
prospect questions · WordPress + Elementor stack · modal newsletter pop-ups on entry ·
"trusted by industry leaders" with no logos.

Every one of these is present or implied on the current `webask.co.uk`. The list doubles as
the teardown checklist.

---

## Copy + targeted edits

### `design-system.md` — brand identity is the open question

Tokens, scales, motion, breakpoints, component inventory and the **Reference UIs** section
(Vercel / Linear / Resend / Stripe / Cursor — the "tech-credibility lean") all transfer.
The design _register_ is correct for a UK agency selling to SMBs.

### ✅ D5 RESOLVED 2026-07-27 — Deep Teal primary + Geist typographic wordmark

The _system_ transfers whole; the _identity_ is WebAsk's own.

| Item                                                 | Decision                                                                                                                                                                                                                            |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary**                                          | **Deep teal `#0F766E`** — promotes Naxdor's accent hue to WebAsk's primary. Reads as a deliberate sibling brand (which _is_ the "openly part of the Naxdor group" positioning) while being instantly distinguishable from `#5B4CDB` |
| **Wordmark**                                         | **Typographic, set in Geist.** No designer, ships in Phase 0. Matches the locked tech-credibility register (Vercel / Linear / Resend all do this). Naxdor's geometric `NX/DR` mark does not transfer                                |
| Typography                                           | **Reuse** Geist + Geist Mono unchanged                                                                                                                                                                                              |
| Neutrals                                             | **Reuse** the cool-gray scale unchanged                                                                                                                                                                                             |
| Light + Dark + System (`next-themes` + `data-theme`) | **Reuse** unchanged                                                                                                                                                                                                                 |

#### Token values for Phase 0

The convention carries: **`--color-brand-500` is the PRIMARY** (CTAs, links, focus rings),
so component code referencing `brand-500` works unmodified. Note that teal is a
light-appearing hue — to clear the ≥ 4.5:1 button requirement the anchor sits darker on the
scale than indigo did. That's expected, not a mistake.

```css
@theme {
  /* ─── Brand: Deep Teal ─────────────────────────────── */
  --color-brand-50: #edfbf8;
  --color-brand-100: #d2f4ed;
  --color-brand-200: #a6e9dc;
  --color-brand-300: #71d6c5;
  --color-brand-400: #3ab9a7;
  --color-brand-500: #0f766e; /* PRIMARY — MEASURED 5.47:1 on white ✓ AA (not ~5.9) */
  --color-brand-600: #0d6259;
  --color-brand-700: #0b4f48;
  --color-brand-800: #093e39;
  --color-brand-900: #07302c;
  --color-brand-950: #041c1a;
}

[data-theme="dark"] {
  /* ⚠️ CORRECTED 2026-07-27 — see the box below. brand-500 is NOT overridden. */
  --color-ring: #2dd4bf; /* lifted teal — 10.53:1 on dark bg */
  --color-link: var(--color-brand-300); /* #71d6c5 — 11.32:1 bg / 9.72:1 surface */
}
```

> ### ⚠️ Correction: do **not** set `--color-brand-500: #2dd4bf` in dark
>
> This block originally lifted `brand-500` itself to `#2dd4bf`. **White on `#2dd4bf`
> measures 1.86:1** — a hard WCAG failure that makes every primary button label unreadable
> in dark mode. The doc omitted the paired `--color-fg-on-brand` flip that would be needed
> to make a mint fill work.
>
> Resolved the same way Naxdor resolved it for indigo, and for the same reason: **brand-500
> keeps its light-mode value in dark** (white-on-fill stays 5.47:1) and the lifted teal lives
> on as `--color-ring`. Implemented in `styles/tokens.css`; `scripts/check-contrast.ts`
> asserts the pair in both modes so it cannot regress.

Neutrals, spacing, radius, shadow, motion and breakpoints are copied from Naxdor verbatim.

#### Two collisions to resolve in the Phase 0 token sweep

Making teal the _brand_ puts it adjacent to two inherited semantic colours. Neither is
hard, but both must be deliberate:

✅ **All three resolved in Phase 0.** Recorded here with the corrections, because two of the
descriptions below were wrong in ways that would have caused damage.

| Collision                                                                                    | Resolution (implemented)                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The **accent scale** `--color-accent-50…950` was vivid teal — redundant against a teal brand | Moved **warm**: Tailwind orange, `500 #f97316`, dark lift `400 #fb923c`. `--color-fg-on-accent` stays `neutral-950` — measured **7.00:1** light, **8.66:1** dark |
| `--color-success` `#10B981` emerald sits close to brand teal                                 | Shifted to **`#15803d`** (green-700, dark `#4ade80`): 4.81:1 as text, 5.02:1 as fill, hue ~142° vs teal's ~175°                                                  |
| Warm accent then collides with `--color-warning` `#F59E0B`                                   | **Warning moved** to `#b45309` (amber-700, dark `#fbbf24`)                                                                                                       |

> ### ⚠️ Correction 1: `--color-accent` and `--color-accent-*` are two different tokens
>
> The original wording — "`--color-accent` was `#00D4B4` teal" — conflates them. The teal
> scale is `--color-accent-50…950`. The **unprefixed** `--accent` / `--color-accent` is
> shadcn's **neutral hover surface** (`var(--color-neutral-100)`; `neutral-700` in dark), and
> `styles/tokens.css` carries a comment saying exactly that. Moving _it_ warm would have
> broken every dropdown, menu and nav hover state on the site. **Only the scale moved.**

> ### ⚠️ Correction 2: "bluer" is the wrong direction for `--color-success`
>
> Teal _is_ the blue-green end. Moving success bluer moves it **toward** the brand, worsening
> the collision. The fix is yellower and darker.

> ### The accent was also doing a second job
>
> The teal accent doubled as the "positive" cue (`Callout variant="tip"`, the Comparison
> positive marker, the contact-form success state). An **orange** tick is semantically wrong,
> so those usages moved to `--color-success` — which gave that token real usage for the first
> time. Feature checklists ("included", not "success") moved to `brand-600` instead.

**The contrast budget is non-negotiable regardless:** body text ≥ 7:1, large text ≥ 4.5:1,
UI/focus rings ≥ 3:1, primary button text ≥ 4.5:1. Note `scripts/check-contrast.ts` enforces
the WCAG AA **4.5:1** floor for body pairs, not 7:1; real body text clears ~19:1, and link
text lands ~5.2:1 (Naxdor's indigo was ~5.7:1).

**Two gates, and you need both:**

1. `pnpm check:contrast` — token-level, both modes, catches regressions on pairs no page
   happens to render yet.
2. `pnpm exec playwright test e2e/a11y.spec.ts` — axe-core, every route × light/dark.

The second caught something the first structurally cannot: `CtaBand` set its subline at
`text-fg-on-brand/85`, and **composited alpha is invisible to a solid-hex token check**. On
Naxdor's indigo (8.48:1 base) 85% opacity was fine; on deep teal (5.47:1 base) it composited
to **4.41:1 and failed AA on 46 route×theme combinations**. Fixed by deepening the panel to
`brand-600` (subline 5.70:1, heading 7.22:1) rather than nudging the opacity to scrape past
the bar. **Deep teal has materially less contrast headroom than the indigo it replaced —
budget for that when adding any translucent-on-brand treatment.**

#### Wordmark deliverables (Phase 0)

- Wordmark `WebAsk` in Geist SemiBold, ~`-0.02em` tracking — **black and white variants only**, never recoloured
- Favicon: `W` in a rounded square on `brand-500`; 32×32, 16×16, `apple-touch-icon` 180×180
- Default OG image 1200×630: wordmark + one-line value proposition
- Minimum clear space: the height of one letter (inherited rule)

### `seo-strategy.md` — edits

| Change          | From → To                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------- |
| Sitemap host    | `https://naxdor.com/sitemap.xml` → `https://webask.co.uk/sitemap.xml`                          |
| Robots          | Same policy, WebAsk sitemap line. No bot-specific blocks (AI-surface visibility is deliberate) |
| Search Console  | Own DNS-verified property + own Bing Webmaster property                                        |
| Location scope  | US metros → UK cities per [`02`](02-uk-market-research.md) § Cities                            |
| **New section** | Multi-site relationship + canonical discipline → [`05`](05-seo-strategy-uk.md)                 |

Everything else — the five pillars, the on-page checklist, the AEO tactics list, the
"what we do NOT do" list, indexation discipline, the stale-page sweep, reporting cadence —
is unchanged.

### `schema-strategy.md` — edits

The architecture is the valuable part and it transfers whole: one canonical Organization
`@id`, every page emits a `@graph` referencing it, nodes link by `@id` and never
inline-duplicate, `ProfessionalService` not `LocalBusiness`, authored in TypeScript with
`schema-dts`, validated by `e2e/jsonld.spec.ts` in CI.

Value-level changes:

| Field                       | Value                                                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `ORG_ID`                    | `https://webask.co.uk/#organization`                                                                                                 |
| `SITE_ID`                   | `https://webask.co.uk/#website`                                                                                                      |
| `name`                      | `WebAsk`                                                                                                                             |
| `legalName`                 | The Swedish entity's registered name — **not** an invented UK company                                                                |
| **`parentOrganization`**    | `{ "@id": "https://naxdor.com/#organization" }` ← **new node, the group link**                                                       |
| `areaServed`                | `{ "@type": "Country", "name": "United Kingdom" }`                                                                                   |
| `inLanguage`                | `en-GB`                                                                                                                              |
| `Offer.priceCurrency`       | `GBP`                                                                                                                                |
| `founder` / author `Person` | Same real person, `@id` scoped to `webask.co.uk/about#…`, `sameAs` → the same real LinkedIn/GitHub                                   |
| `sameAs` (Organization)     | **Omit the key entirely until real profiles exist** — Naxdor's "leave empty rather than point at 404s" rule                          |
| `address` / `geo`           | **Omit entirely.** D1 resolved 2026-07-27: fully remote, no UK location. Identical posture to `naxdor.com`'s locked honesty override |

The `e2e/jsonld.spec.ts` assertions transfer unchanged (one canonical Org `@id`; every page
references it; no node mixes `Person` and `Organization`; every `@id` reference resolves;
breadcrumb positions sequential from 1; FAQ text non-empty). Extend it, as Naxdor's doc
already flags for its Phase 3, to assert every `Article` has an `author` and `dateModified`.

> Note: the cross-domain `parentOrganization` reference points at a node defined on
> _another site_. The existing "every `@id` reference resolves" check unions nodes across
> crawled routes on _this_ host — so this one reference must be whitelisted in the spec, or
> the check will flag it. Easy to miss; flagging it now.

### `content-guidelines.md` — one rule inverts

Everything transfers — voice ("Expert & confident", senior-consultant register), the Do/Don't
table, title patterns, meta-description structure, heading hierarchy, section orders for
service/industry/case-study/blog pages, alt text, link text, FAQ rules, author attribution,
editorial workflow — **except line 20**:

> ❌ Naxdor: _"US English spelling (color, optimization, organize)"_
> ✅ WebAsk: **British English spelling (colour, optimisation, organise, centre, programme, enquiry)**

This is not cosmetic. Google uses spelling as a language-identification and relevance signal,
and the two variants have genuinely different search volumes — `optimisation` carries the UK
volume, `optimization` the US. Consistency matters across the site, meta, and any outbound
channel. Full glossary in [`02`](02-uk-market-research.md) § Language.

Two more edits:

- **Currency**: "GBP £3,500" on first reference, "£3,500" thereafter — replacing the USD rule.
- **Localisation-ready writing** section: mostly moot (single locale), but keep the
  unambiguous-date rule ("27 July 2026", never "7/27/26") and the "avoid text baked into
  images" rule.

Naxdor's "**don't pre-process copy via AI without human review**" rule carries with extra
force here, because UK clinic copy has legal consequences — see
[`03-uk-compliance.md`](03-uk-compliance.md) § Copy review.

### `information-architecture.md` — edits

Conventions transfer exactly: lowercase, hyphens, **no trailing slash**
(`trailingSlash: false`), one canonical URL per primary keyword, self-canonical on every
page type including `/services/[service]/[location]`.

Changes: location slugs move from `[city]-[state-abbrev]` (`austin-tx`) to UK form; the
location set changes; the nav gains the group disclosure in the footer; and the whole
**301 map off the legacy WordPress URLs** is new. All in
[`04-information-architecture.md`](04-information-architecture.md).

---

## Replaced

### `keyword-research.md` → [`02`](02-uk-market-research.md) § Keywords

What still transfers from it conceptually: the **intent tiers** (transactional / commercial
investigation / bottom-funnel informational / top-funnel / navigational), the cluster
taxonomy, the **industry × service matrix** shape, the location-modifier strategy ("one
canonical URL pattern only"), the `data/keywords.json` schema and its CI lints (no two
transactional keywords sharing a `primaryUrl`; every `primaryUrl` resolves; every keyword
has a cluster), and the quarterly re-run cadence.

What doesn't: the actual terms, the US metros, and the GHL-forward emphasis.

### `competitor-analysis.md` → [`02`](02-uk-market-research.md) § Competitors

The **four-bucket structure** transfers (generalists / CRM specialists / vertical
specialists / adjacent local-SEO players), as does the "what we steal" discipline, the
quarterly review cadence, and the comparison-content rules (never disparage, compare on
facts, disclose partnerships, update annually). The **anti-pattern table transfers verbatim**.

The competitor names are all US and are replaced.

One strategic insight transfers directly and is _more_ true in the UK: the vertical
categories are dominated by templated platforms on dated WordPress with poor Core Web
Vitals. A modern Next.js site is a credibility signal the prospect feels before reading a
word — and UK clinic prospects are, themselves, usually on one of those templated sites.

---

## Fork mechanics (Phase 0)

The `naxdor.se` project is the proven precedent: it was forked from `d:\naxdor` as a
**standalone repo**, not a locale inside the existing one. Do the same.

1. Copy `d:\naxdor` → `d:\WebAsk` (new git history; not a fork in the GitHub sense).
2. Delete `d:\WebAsk\docs\strategy\keyword-research.md` and `competitor-analysis.md`;
   keep the other 11 and apply the edits above.
3. Keep this `docs/` bundle alongside them as the UK layer.
4. Reset `docs/context/current-feature.md`.
5. Rewrite `CLAUDE.md` for WebAsk (locked decisions table, project-state table, the UK
   compliance callouts).
6. Rebrand: `data/site.ts` (name, URL, phone, entity disclosure), tokens, logo, favicon,
   OG default.
7. New Vercel project, new Resend domain, new GSC + Bing properties.
8. Stand up the 301 map from [`04`](04-information-architecture.md) **before** cutover.

### Known environment gotchas (inherited — don't rediscover)

These cost time on Naxdor and will cost it again:

- **Local Lighthouse CI is unreliable on Windows** (chrome-launcher EPERM masks real
  failures). Trust CI only; never claim "lhci local green".
- **Turbopack Windows IPC flake** — `os error 10054` build crashes clear after deleting
  `.next`.
- **Vercel Analytics fails Lighthouse Best Practices off-platform** — `/_vercel/script.js`
  404s under `next start`, dropping BP 1.0 → 0.96. Gate `<Analytics/>` and
  `<SpeedInsights/>` on `process.env.VERCEL`; don't remove the gate.
- **Base UI Select highlights via `data-highlighted`, not `:focus`** — stock shadcn
  `focus:bg-accent` is dead on Base UI Select.
- **`next-mdx-remote/rsc` silently drops object/array props** on custom MDX components —
  design component APIs around scalar string attrs + markdown children.
- **Multiline commit messages**: use `git commit -F <file>` and `--body-file` for PR bodies.
  Here-strings mangle the message across the tool boundary in both Bash and PowerShell.
