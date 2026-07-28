# WebAsk UK — Planning Bundle

> **Status: PLANNING ONLY. Nothing implemented.** Authored 2026-07-27.
> These docs capture the researched approach for turning `webask.co.uk` (a 2020-era
> WordPress site) into **Naxdor's UK operation, trading under the WebAsk brand**.
> They carry forward everything already researched for `naxdor.com` so none of that
> work has to be repeated, plus new UK-market research.

---

## What this is

You own `webask.co.uk` and want it to become Naxdor's UK presence — **keeping the WebAsk
brand name in the UK**. This bundle is the plan for that.

**The single most important context:** WebAsk is not a new business. It is the UK-facing
brand of an existing operation with an existing, well-researched playbook (`d:\naxdor`).
So ~70% of the strategy is already written and transfers directly. The genuine work is
(a) the UK regulatory and market deltas, and (b) migrating off WordPress without losing
the twelve URLs that already exist. See [`00-overview.md`](00-overview.md).

**Second most important context:** the current site is not a neutral starting point. It
carries fabricated staff and fake testimonials that became **illegal in the UK on
6 April 2025**. See [`03-uk-compliance.md`](03-uk-compliance.md) § DMCC.

## How to use this bundle

Read in order. Each doc is self-contained but they build on each other.

| #   | Doc                                                                | What it answers                                                                |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| —   | [`00-overview.md`](00-overview.md)                                 | What WebAsk is, why, and what's still undecided. **Read first.**               |
| 01  | [`01-inherited-from-naxdor.md`](01-inherited-from-naxdor.md)       | What transfers from `d:\naxdor` verbatim, what needs editing, what gets binned |
| 02  | [`02-uk-market-research.md`](02-uk-market-research.md)             | UK market size, competitors, keywords, verticals, GBP pricing                  |
| 03  | [`03-uk-compliance.md`](03-uk-compliance.md)                       | UK legal/regulatory — the biggest delta. Blocks several pages                  |
| 04  | [`04-information-architecture.md`](04-information-architecture.md) | Current sitemap → target sitemap, and the full 301 map                         |
| 05  | [`05-seo-strategy-uk.md`](05-seo-strategy-uk.md)                   | How the three sites relate, GBP, citations, indexation                         |
| 06  | [`06-build-plan.md`](06-build-plan.md)                             | Phased build plan, acceptance gates, sizing                                    |
| 07  | [`07-naxdor-change-requests.md`](07-naxdor-change-requests.md)     | Changes wanted in `d:\naxdor` — **logged, not applied**                        |

When the repo is scaffolded (Phase 0), `docs/strategy/*` and `docs/phases/*` get copied
across from `d:\naxdor` per doc 01, and this bundle sits alongside them as the UK layer.

## Stack snapshot (inherited from naxdor.com)

| Layer      | Choice                                                           |
| ---------- | ---------------------------------------------------------------- |
| Framework  | Next.js 16.2.x (App Router, Turbopack)                           |
| React      | 19.2.x                                                           |
| TS         | strict, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` |
| Styling    | Tailwind v4 + `@theme` tokens                                    |
| Components | shadcn/ui on **Base UI** (not Radix)                             |
| Content    | MDX in repo → Payload CMS later                                  |
| Hosting    | Vercel (new, separate project)                                   |
| Email      | Resend                                                           |
| Locale     | **en-GB only** — no i18n routing library needed                  |
| Currency   | **GBP**, "+ VAT where applicable" (see 03 § VAT)                 |

## Locked decisions (2026-07-27 — do not re-litigate)

| Decision           | Value                                                                           |
| ------------------ | ------------------------------------------------------------------------------- |
| Stack              | **Fork the Naxdor repo.** Not a WordPress rebuild, not headless WP              |
| Services           | **Naxdor's 9 services**, UK-localised (British English, GBP)                    |
| Brand relationship | **Openly "part of Naxdor"** — footer, `/about`, and `parentOrganization` schema |
| Legal entity       | **Trading name of Naxdor (Sweden)** — no separate UK company                    |
| Verticals          | Same three: aesthetic clinics, dental practices, beauty & wellness clinics      |

## Open decision gates

Seven gates. **Four resolved 2026-07-27; three still open.**

| #      | Gate                                              | Status                                                                                                                            |
| ------ | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **D1** | UK presence                                       | ✅ **Fully remote, no UK location.** No Google Business Profile; `areaServed`-only schema; Oxford address removed from `/contact` |
| **D6** | CRM emphasis                                      | ✅ **GoHighLevel-first**, HubSpot as second section (founder call on future adoption)                                             |
| **D7** | Anchor city                                       | ✅ **Manchester.** Hubs: Manchester → Cheshire → Leeds; North-West-first expansion                                                |
| **D8** | Site framing                                      | ✅ **National, service-led** — city focus surfaces via `/locations/*`, not the home page                                          |
| **D5** | Brand identity                                    | ✅ **Deep Teal `#0F766E` primary + Geist typographic wordmark.** Token block in [`01`](01-inherited-from-naxdor.md) § D5          |
| **D2** | UK VAT (NETP £0 threshold vs. B2B reverse charge) | 🔴 Open — blocks `/pricing` final copy. **Accountant**                                                                            |
| **D3** | UK GDPR Art. 27 representative (+ ICO fee)        | 🔴 Open — blocks `/legal/privacy`. Art. 27 now **near-certain**; ICO fee likely N/A. **Legal**                                    |
| **D4** | Final GBP price list                              | 🔴 Open — blocks `/pricing` and all service pages. **Founder**                                                                    |

D1/D6/D7/D8 detailed in [`00-overview.md`](00-overview.md) § Decision gates; D2–D4 likewise;
D5 in [`01-inherited-from-naxdor.md`](01-inherited-from-naxdor.md) § D5. Full status table
in [`06-build-plan.md`](06-build-plan.md) § Decision gates.

> **Phase 0 is fully unblocked.** The three open gates are all external — an accountant, a
> solicitor and a founder pricing call — and none of them land before Phase 1.

## Key principle (non-negotiable)

**Nothing fabricated ships.** No invented Companies House number, no claimed UK office
that isn't real, no placeholder team members, no testimonials from clients who don't
exist. This is not only an E-E-A-T rule inherited from Naxdor — in the UK, under the
DMCC Act 2024, parts of it are now directly enforceable by the CMA. The existing site
violates this today, which makes it the first thing Phase 1 fixes.

## Sources

Every statistic in this bundle carries its source and the date it was retrieved, per
Naxdor's own content rule ("date every statistical claim"). All web research was
conducted 2026-07-27.
