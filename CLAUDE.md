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
  **Three things the 2026-07-29 § B4 run added, all learned the hard way.**
  **(a) `data/*.ts` is sales copy, all of it.** The ban was being read as applying to MDX
  bodies. `data/industries.ts` named the medicine in a FAQ that ships as `FAQPage` JSON-LD —
  where it can surface in a SERP stripped of the page — and `data/copy/home.ts` still named it
  after the three industry pages had been cleaned. **Grep the whole repo, not the page you are
  on.** **(b) A passage about _administering_ a POM is not the editorial carve-out**, which
  covers discussing the regulation of its **advertising**. The under-18s offence is the
  trap here. **(c) De-naming can over-broaden the law.** The first fix said "the injectable
  prescription-only treatments" — a category that does not exist in the statute, which told
  clinics that any injectable POM to a minor is a criminal offence. The 2021 Act covers
  fillers plus **one** named medicine; keep it singular and Act-bounded (trap 16, in a costume).
- ❌ Use Radix directly, or `llms.txt`, or AI-specific schema.
- ❌ Auto-commit. **Always ask first.** Conventional messages, no AI attribution.

---

## Quality gates (CI-enforced, inherited)

`pnpm typecheck` (0 errors) · `pnpm lint` (0 warnings) · `pnpm build` · Playwright smoke ·
Lighthouse CI (Mobile Perf ≥ 95, A11y = 100, BP = 100, SEO ≥ 95) · programmatic uniqueness
(warn 70%, fail 85%) · **MDX uniqueness** (`check:content-uniqueness` — every content
collection: blog, services, industries, locations. Cross-site fail 5% / warn 2%, cross-page
85/70. It scores each file against its **same-slug** fork twin _and_ against **every** fork
file in the collection, because the location hubs have no same-slug twin — the fork's are US
metros — and a same-slug-only check would pass a straight translation of `austin-tx` into
`manchester`. The fork source is absent on CI, so the **cross-site half is a local check**
and soft-skips there).

**`pnpm check:copy-uniqueness` — LOCAL ONLY, deliberately not in CI.** It measures the
`data/*.ts` copy modules against the fork and **cannot run without `d:\naxdor`**, so on a
runner it would be a step that is always green while checking nothing — the exact
`upload-artifact` failure mode below. Run it when you touch copy, and before cutover.
It also carries the **verdict** for each module: `data/copy/process.ts` (61%) is duplicate
**by decision** (docs/01 "copy verbatim"); `data/copy/free-audit.ts` (39%) has its
verdict: **needs a UK rewrite** (founder, 2026-07-30) — queued, not yet done; and
`data/copy/legal.ts` (69%) have **no verdict recorded** and are open questions. That
distinction — "identical on purpose" vs. "nobody looked" — is the whole point of the file.
`data/locations.ts` joined the gate on 2026-07-29 when its hub copy landed (0%).

Budgets: LCP ≤ 2.0s · INP ≤ 200ms · CLS ≤ 0.05 · JS ≤ 170KB gz on home.

> Inherit Naxdor's calibration: perf-score/LCP are set to `warn` (framework floor).
> **Local `lhci` is unreliable on Windows** — trust CI only, never claim "lhci local green".
>
> 🔴 **This has a copy consequence, and it has been got wrong four times.** Hard `error`
> gates: a11y = 100, BP = 100, SEO ≥ 95, CLS, TBT, and the stylesheet/script/total size
> budgets. `warn` only: `categories:performance` and `largest-contentful-paint`. **INP is
> not audited at all** — no lab test can measure it. So "WCAG 2.2 AA checked in CI" is
> true; **"sub-2-second LCP enforced in CI" is false**, and so are "Core Web Vitals are
> enforced in CI", "the budget every page is held to", and "the Core Web Vitals gates,
> which either pass or do not". Before writing any performance claim, open
> `.lighthouserc.cjs` and check which side of `error`/`warn` it sits on.
>
> ⚠️ **`e157e89` called this "swept repo-wide" and it was not.** That pass fixed
> `data/services.ts`, `data/copy/process.ts`, `data/copy/home.ts` and
> `content/services/maintenance-support.mdx` — it never looked at `content/industries/`
> at all, and **seven more live instances** were found on 2026-07-29: all three industry
> MDX bodies, two `data/industries.ts` FAQ answers (which also feed `FAQPage` JSON-LD),
> `content/services/ecommerce-development.mdx` (which claimed LCP **and INP** were
> "checked in continuous integration on every commit"), and two `data/copy/process.ts`
> strings that contradicted the corrected sentence 40 lines below them in the same file.
> The grep that finds them is not "LCP" — it is `enforced|checked in CI|continuous
integration|under two seconds|sub-two-second|verified in our build`.

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

| Phase                                    | Status          | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0 — Fork & Foundations                   | **In progress** | Fork done. Brand tokens, wordmark, schema, `data/site.ts`, UK locations, keywords and the **full 301 map** all landed; every gate green. Remaining is **external only**: Vercel + Resend + GSC, real MSV/KD, Cheshire verification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1 — Credible MVP + Cutover               | Not started     | Contains the urgent fake-content removal. The 301 map moved into Phase 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2 — Services / Locations / Industries    | **Part done**   | 9 service pages + 3 industry pages + the service catalogue (`data/services.ts` 57% → 0%, `data/copy/pricing.ts` 82% → 0%); FAQ ordering pricing-first on all 9. **All 3 location hubs written 2026-07-29** — 0.0% against the US fork hubs, 1.1% cross-page. **Doc 03 § B4 run over the three industry pages 2026-07-29** (`data/industries.ts` 16% → 11%): 13 blockers, incl. a POM in `FAQPage` JSON-LD and two US template strings live on 12 pages; a re-check found 42 defects the corrections had introduced. ⚠️ Still forked: `data/copy/free-audit.ts` 39% (**still no verdict**) and `data/copy/legal.ts` 69% (still says "Naxdor … enskild firma"; gated behind D3). `data/copy/process.ts` 61% is duplicate **by decision** (docs/01). Remaining: programmatic batch, link mesh beyond the hubs, citations |
| 3 — Content Engine + Proof               | **Started**     | The 4 inherited blog posts rewritten for the UK (0.0–0.1% vs. their `naxdor.com` twins) and the `med-spa` draft deleted — pulled forward because they shipped `draft: false`. Compliance cluster still ships first                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4 — Lead Capture + Scale                 | Not started     | Depends on 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5 — CMS migration · 6 — Client dashboard | Deferred        | Inherited triggers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

---

## Environment gotchas (inherited — don't rediscover)

- `pnpm`/`gh` not on PATH → use `corepack pnpm <script>` and `C:\Program Files\GitHub CLI\gh.exe`.
- Multiline commits: `git commit -F <file>`, PR bodies `--body-file`. Here-strings mangle.
- Turbopack Windows IPC flake (`os error 10054`) → clear `.next`.
- Vercel Analytics fails Lighthouse BP off-platform → keep the `process.env.VERCEL` gate.
- Base UI Select highlights via `data-highlighted`, not `:focus`.
- `next-mdx-remote/rsc` silently drops object/array props on custom MDX components.
- 🆕 **A template string can be dormant, then go live when data fills in.**
  `CrossLinkGrid` returns `null` on an empty list, so its `intro` renders nothing while the
  list is empty. `authoredLocations` was empty until the location hubs landed on 2026-07-29 —
  which silently published **"We work with … remotely across the US. These metros are where we
  run a dedicated local hub"** on all 3 industry pages and **"the metros we focus on"** on all
  9 service pages. Neither string was touched by the commit that exposed them, so no diff
  review would have caught it. **When you populate a previously-empty collection, read every
  template that consumes it.**
- 🆕 **The compliance docs can carry the defect they warn about.** doc 03 § B1's table
  offered **"anti-wrinkle injections"** as the ✅ _compliant alternative_ — contradicting the
  row directly beneath it, CLAUDE.md, and doc 08 § 6, which had corrected exactly this on
  2026-07-28 and reached doc 02 § 5 but neither doc 03 § B1 nor doc 02 § 2. On the flagship
  differentiator, the bundle was advising the euphemism the ASA upholds complaints over.
  **Docs are not the ground truth by default — the most recent dated correction is.**
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
- **A red Lighthouse job is not always a red score.** `lhci autorun` has a server-startup
  race: it logs `Started a web server with "corepack pnpm start --port 3000"` and
  `Running Lighthouse 3 time(s)` in the **same second**, and if Next has not finished
  booting Chrome navigates to nothing and the run dies with
  **`CHROME_INTERSTITIAL_ERROR`** — "Chrome prevented page load with an interstitial",
  with the target URL redirected to `chrome-error://chromewebdata/`.
  **Tells: it dies at ~3.5m instead of ~6m, and it fails on the FIRST URL.** No assertion
  is reported because no audit ran. Seen on `3785020`, whose diff was two docs, CLAUDE.md,
  one `package.json` script entry and a script not wired into CI — nothing that ships —
  and which re-ran green with zero changes.
  **Before investigating a red Lighthouse: check whether the diff touches `app/`,
  `components/`, `lib/`, `styles/`, `public/`, `next.config.ts` or `.lighthouserc.cjs`.
  If it does not, re-run the job first.** This is the opposite of the `upload-artifact`
  trap below it — that one was green while broken; this one is red while fine. Both cost
  time by being believed too quickly.
- 🆕 **A job with `steps: 0` never ran — read the job annotation, not the diff.** Third
  instance of the same shape as the two entries above. On 2026-08-22 a push to `main` and
  8 Dependabot PRs all went red in **2–4 seconds**, carrying only a job-level annotation:
  "The job was not started because recent account payments have failed or your spending
  limit needs to be increased." GitHub had parsed the workflow and queued the job, then the
  billing gate refused to allocate a runner. **Tell:** the run's `jobs` API returns
  `.jobs[0].steps` as an empty array, with a sub-5s duration. No step failed because no
  step existed. An unparseable workflow, by contrast, produces **no job record at
  all** — so a queued-but-stepless job rules out YAML syntax as the cause.
  Actions minutes are billed **account-wide**, so this blocks every private repo at once
  and is invisible from inside any one of them. **Never report a stepless red as a code
  failure, and never call a change "CI-verified" on the back of one — nothing executed.**
