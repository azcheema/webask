# WebAsk — Claude Code Project Context

> **Auto-loaded.** Every Claude Code session in this project starts with this file.
> Keep it concise; deep detail lives in `docs/`.

---

## What this project is

The **WebAsk** marketing website — Naxdor's UK operation, trading under the WebAsk brand.
A fast, SEO-engineered Next.js site for UK SMBs, with a vertical specialisation in
**aesthetic clinics, dental practices, and beauty/wellness clinics**.

It replaces a 2020-era WordPress site at `webask.co.uk` (12 legacy URLs, mostly theme demo
content). It is a **fork of `d:\naxdor`** — roughly 70% of the strategy transfers unchanged.

**The website is service-led, not industry-led, and national — not a Manchester agency.**
Home and service pages speak to any UK SMB. The vertical focus surfaces through
`/industries/*`; the city focus surfaces through `/locations/*` and the programmatic
expansion order. Neither shapes the home page.

**The flagship differentiator is UK regulatory literacy.** ASA/CAP bans advertising
prescription-only medicines to the public — "Botox" cannot legally appear on a UK clinic
website — and the GDC, CQC, CMA and the 2026 licensing scheme all bite. Nearly every UK
clinic site is quietly non-compliant. Being the agency that knows this is verifiable
E-E-A-T, genuine Information Gain, and almost unclaimed in the SERP.

---

## Where everything is

| Need                                          | Look here                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------- |
| **Start here**                                | [`docs/00-overview.md`](docs/00-overview.md) — stands alone                  |
| **Bundle index**                              | [`docs/README.md`](docs/README.md)                                           |
| **What transfers from Naxdor**                | [`docs/01-inherited-from-naxdor.md`](docs/01-inherited-from-naxdor.md)       |
| **UK market, competitors, keywords, pricing** | [`docs/02-uk-market-research.md`](docs/02-uk-market-research.md)             |
| **UK legal & regulatory**                     | [`docs/03-uk-compliance.md`](docs/03-uk-compliance.md)                       |
| **Sitemap + the 301 map**                     | [`docs/04-information-architecture.md`](docs/04-information-architecture.md) |
| **SEO, multi-site, citations**                | [`docs/05-seo-strategy-uk.md`](docs/05-seo-strategy-uk.md)                   |
| **Phased build plan**                         | [`docs/06-build-plan.md`](docs/06-build-plan.md)                             |
| **Changes wanted in `d:\naxdor`**             | [`docs/07-naxdor-change-requests.md`](docs/07-naxdor-change-requests.md)     |
| **Silos, entities, competitor gap**           | [`docs/08-seo-architecture.md`](docs/08-seo-architecture.md)                 |
| **Fork source**                               | `d:\naxdor` — **read-only. Do not modify it.**                               |

The docs are the source of truth. If a doc is wrong, fix the doc.

---

## Locked decisions (do not re-litigate)

| Decision              | Value                                                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Stack                 | Fork of Naxdor — Next.js 16.2.x, React 19.2.x, TS strict, Tailwind v4 + `@theme`, shadcn/ui on **Base UI** (not Radix), MDX, Vercel, Resend                                                                                                            |
| Services              | Naxdor's **9**, UK-localised (GBP, British English)                                                                                                                                                                                                    |
| Brand relationship    | **Openly part of the Naxdor group** — footer, `/about`, `parentOrganization` schema                                                                                                                                                                    |
| Legal entity          | **Trading name of Naxdor (Sweden)** — no UK company, **no Companies House number exists**                                                                                                                                                              |
| Locale                | **en-GB only**. British English is a ranking signal, not cosmetic                                                                                                                                                                                      |
| Currency              | **GBP**, "+ VAT where applicable" pending D2                                                                                                                                                                                                           |
| **D1 — UK presence**  | ✅ **Fully remote, no UK location.** No Google Business Profile. `areaServed`-only schema. Oxford address removed from `/contact`                                                                                                                      |
| **D6 — CRM emphasis** | ✅ **GoHighLevel-first**, HubSpot second section (incl. HubSpot→GHL migration)                                                                                                                                                                         |
| **D7 — Anchor city**  | ✅ **Manchester** → Cheshire → Leeds. North-West-first expansion                                                                                                                                                                                       |
| **D8 — Site framing** | ✅ **National, service-led.** City surfaces via `/locations/*` only                                                                                                                                                                                    |
| **D5 — Brand**        | ✅ **Deep Teal `#0F766E`** primary (`brand-500`; dark-mode lift `#2DD4BF`) + **typographic wordmark in Geist**. Neutrals/type/scales copied from Naxdor. Token block + the two semantic collisions to resolve: `docs/01-inherited-from-naxdor.md` § D5 |
| Industries            | Aesthetic clinics, dental practices, beauty & wellness clinics                                                                                                                                                                                         |

## Open gates — none block Phase 0

| #      | Gate                                    | Owner      | Blocks                    |
| ------ | --------------------------------------- | ---------- | ------------------------- |
| **D2** | UK VAT (NETP £0 vs. B2B reverse charge) | Accountant | `/pricing` final          |
| **D3** | Art. 27 UK representative (+ ICO fee)   | Legal      | `/legal/privacy` final    |
| **D4** | Final GBP price list                    | Founder    | `/pricing`, service pages |

---

## Critical do's and don'ts

**Do:**

- Read [`docs/06-build-plan.md`](docs/06-build-plan.md) before writing code.
- Run `pnpm typecheck && pnpm lint && pnpm build` before every commit.
- Use design tokens — never hardcode hex/spacing/font sizes.
- Write **British English** everywhere (optimisation, colour, enquiry, centre, programme).
- Stage programmatic pages `noindex, follow`; promote only against the quality gate.
- Emit **`areaServed` only** — never an `address` or `geo`. We are remote.

**Don't:**

- ❌ **Modify `d:\naxdor`.** It's the fork source and read-only. Wanted changes go in
  [`docs/07-naxdor-change-requests.md`](docs/07-naxdor-change-requests.md).
- ❌ **Publish anything fabricated** — no invented Companies House number, no claimed UK
  office, no placeholder team, no testimonials from clients who don't exist. Under the
  **DMCC Act 2024** fake testimonials are CMA-enforceable (up to 10% turnover / £300k).
  **This extends to _implied_ proof, which is where it actually goes wrong.** There are
  **no clients, no case studies, no rankings and no audit history** yet. So no "the pattern
  we see", "most businesses that ask us", "our work for clinics", "we typically find" — and
  watch the impersonal forms too ("usually", "a large share of", "how X normally ships"),
  which assert a track record without a pronoun. The first draft of the nine UK service
  pages carried **29** such claims and read perfectly well; a spell-check and a similarity
  score both miss them entirely. Ask of every sentence: _does this imply a customer we
  don't have?_ Statistics are subject to the same rule — every figure must trace to `docs/`,
  and legal figures must keep their qualifiers ("whichever is higher").
  **Then ask the second question: _does the source say it this strongly?_** The 51 findings
  on the four blog posts were almost all **modality** errors, not factual ones, and every one
  survived a 0.1% similarity score, a clean British-English sweep, and a check that the fact
  existed in `docs/`: a hedge ("appear not to resolve") hardened into an assertion; a 15–20%
  band collapsed to its unstated 17.5% midpoint; a sitemap `lastmod` reported as a publication
  date; a `warn`-level Lighthouse budget described as "enforced in CI"; two docs disagreeing
  on a price band and the draft quietly taking the lower. Grep cannot see any of these.
- ❌ **Create a Google Business Profile.** No UK location = no eligible profile. Doing it
  anyway risks permanent loss of local visibility.
- ❌ **Cross-canonical to `naxdor.com`**, or hreflang-pair the two sites. Self-canonical
  everything. Duplicate content is solved with _rewritten UK content_, not markup.
- ❌ **Name a prescription-only medicine** in clinic-facing _sales_ copy, `<title>` or meta —
  ours or a client's. Nor a euphemism: the ASA treats "anti-wrinkle injections",
  "wrinkle-relaxing" and "beautox" as **implied** POM promotion and has upheld complaints on
  exactly that. Clinics advertise the **consultation** ("consultations for lines and
  wrinkles"). Our _editorial_ content may name a POM when discussing the regulation of its
  advertising — that is commentary, not an ad. See [`docs/08-seo-architecture.md`](docs/08-seo-architecture.md) § 6.
- ❌ Use Radix directly, or `llms.txt`, or AI-specific schema.
- ❌ Auto-commit. **Always ask first.** Conventional messages, no AI attribution.

---

## Quality gates (CI-enforced, inherited)

`pnpm typecheck` (0 errors) · `pnpm lint` (0 warnings) · `pnpm build` · Playwright smoke ·
Lighthouse CI (Mobile Perf ≥ 95, A11y = 100, BP = 100, SEO ≥ 95) · programmatic uniqueness
(warn 70%, fail 85%) · **blog uniqueness** (`check:blog-uniqueness` — cross-site vs. the
same-slug `naxdor.com` post, fail 5% / warn 2%; cross-page 85/70. The fork source is absent
on CI, so the **cross-site half is a local check** and soft-skips there).

Budgets: LCP ≤ 2.0s · INP ≤ 200ms · CLS ≤ 0.05 · JS ≤ 170KB gz on home.

> Inherit Naxdor's calibration: perf-score/LCP are set to `warn` (framework floor).
> **Local `lhci` is unreliable on Windows** — trust CI only, never claim "lhci local green".

---

## Cold-start session checklist

1. This file auto-loads.
2. Read [`docs/00-overview.md`](docs/00-overview.md) — stands alone.
3. Read [`docs/06-build-plan.md`](docs/06-build-plan.md) — current phase + tasks.
4. Check the Project state table below.
5. Ask the user: **"Picking up at Phase N, feature [name]?"** before proceeding.

---

## Phase 0 — the fork (done; see the task list for what remains)

The fork has happened. `git init` is done; **no commits yet — ask before the first one.**
The remaining Phase 0 work is listed in
[`docs/06-build-plan.md`](docs/06-build-plan.md) § Phase 0.

**Three inherited traps, now fixed and regression-tested — do not reintroduce:**

1. **No global trailing-slash redirect.** Next 16 already ships `/:path+/` → `/:path+` at
   index 0 of `redirects()`. Doc 04's original "Rule 0" used `:path*` (zero-or-more), which
   matches the **root** and loops the homepage. `scripts/check-redirects.ts` blocks it.
2. **`--color-brand-500` is NOT lifted in dark mode.** White on `#2dd4bf` is 1.86:1. The
   lift lives on `--color-ring`.
3. **`--accent` (shadcn) ≠ `--color-accent-*` (the scale).** The first is a neutral hover
   surface; only the second is the warm brand accent.

Deep teal has **less contrast headroom than the indigo it replaced** (5.47:1 vs 8.48:1 for
white-on-brand). Any translucent-on-brand treatment must be checked with
`e2e/a11y.spec.ts` — `check:contrast` cannot see composited alpha.

---

## Project state (update on every phase close)

| Phase                                    | Status          | Notes                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0 — Fork & Foundations                   | **In progress** | Fork done. Brand tokens, wordmark, schema, `data/site.ts`, UK locations, keywords and the **full 301 map** all landed; every gate green. Remaining is **external only**: Vercel + Resend + GSC, real MSV/KD, Cheshire verification                                                                                                             |
| 1 — Credible MVP + Cutover               | Not started     | Contains the urgent fake-content removal. The 301 map moved into Phase 0                                                                                                                                                                                                                                                                       |
| 2 — Services / Locations / Industries    | **Part done**   | 9 service pages + 3 industry pages written for the UK; FAQ ordering now pricing-first on all 9 (doc 08 § 7). ⚠️ **`data/services.ts` catalogue prose is still 62% byte-identical to the fork** — the MDX bodies were rewritten, the copy around them was not. Remaining: 3 location hubs, programmatic batch, link mesh, nav/footer, citations |
| 3 — Content Engine + Proof               | **Started**     | The 4 inherited blog posts rewritten for the UK (0.0–0.1% vs. their `naxdor.com` twins) and the `med-spa` draft deleted — pulled forward because they shipped `draft: false`. Compliance cluster still ships first                                                                                                                             |
| 4 — Lead Capture + Scale                 | Not started     | Depends on 3                                                                                                                                                                                                                                                                                                                                   |
| 5 — CMS migration · 6 — Client dashboard | Deferred        | Inherited triggers                                                                                                                                                                                                                                                                                                                             |

---

## Environment gotchas (inherited — don't rediscover)

- `pnpm`/`gh` not on PATH → use `corepack pnpm <script>` and `C:\Program Files\GitHub CLI\gh.exe`.
- Multiline commits: `git commit -F <file>`, PR bodies `--body-file`. Here-strings mangle.
- Turbopack Windows IPC flake (`os error 10054`) → clear `.next`.
- Vercel Analytics fails Lighthouse BP off-platform → keep the `process.env.VERCEL` gate.
- Base UI Select highlights via `data-highlighted`, not `:focus`.
- `next-mdx-remote/rsc` silently drops object/array props on custom MDX components.
- **`actions/upload-artifact` skips dot-prefixed paths.** `.lighthouseci` needs
  `include-hidden-files: true`; with the default it matches nothing, and
  `if-no-files-found: ignore` then passes green while uploading nothing. That combination
  hid the cause of a red Lighthouse gate for an entire day. Use `warn`.
- **`e2e/a11y.spec.ts` must mirror Lighthouse or it gives false comfort.** Lighthouse
  scores axe `best-practice` rules (not just WCAG tags) and audits at **412×823 mobile**.
  A sweep at 360px passed while CI failed on the same rule. Read the viewport from
  `lhr.configSettings.screenEmulation`.
- **PowerShell 5.1: never `2>&1` a native exe to test success.** It wraps stderr in an
  ErrorRecord and forces `$?` to `$false` on exit code 0 — every gate reads FAIL while
  passing. Use `$LASTEXITCODE`.
