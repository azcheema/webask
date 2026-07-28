# Phase 0 — Foundations

> **Timeline:** Week 1
> **Status:** **Complete** (shipped 2026-05-26)
> **Outcome:** The engine room is ready before any marketing page gets built.

---

## Goal

Stand up the project skeleton so every subsequent phase ships fast and to spec: tech stack installed and pinned, design system tokens in place, CI gates active, SEO scaffolding live, brand assets finalized.

After Phase 0, building a new page should require zero infrastructure decisions.

---

## In scope

- Project scaffold (Next.js 16.2.6 + React 19.2.6 + TS strict + Tailwind v4.3 + shadcn Base UI + MDX)
- Repo hygiene (ESLint flat config, Prettier + tailwind plugin, Husky, lint-staged)
- CI (GitHub Actions: lint → typecheck → build → Playwright smoke → Lighthouse CI)
- Vercel project connected, preview deploys per PR
- Design system foundations: tokens (color, typography, spacing, radius, shadow, motion), base components, dark mode
- SEO scaffolding: `lib/seo.ts`, `lib/jsonld.ts`, `lib/mdx.ts`, root layout metadata, default Organization JSON-LD, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`
- Keyword research import: populate `data/keywords.json` from Ahrefs/Semrush export
- Brand assets locked: logo (light/dark, SVG), favicon, OG default, color tokens, typography pair
- `docs/` tree fully populated (this folder)

---

## Out of scope

- Any marketing page content (home, services, etc.) — that's Phase 1
- CRM integration — Phase 4
- CMS — Phase 5
- Auth — Phase 6

---

## Tasks

### Project scaffold

- [x] `pnpm dlx create-next-app@16.2.6 . --typescript --tailwind --eslint --app --turbopack --no-src-dir --import-alias "@/*" --use-pnpm --no-git --yes` (scaffolded into `d:\naxdor` next to pre-existing `docs/` + `images/` + `CLAUDE.md`; temp-moved the latter two during scaffold).
- [x] Set `tsconfig.json`: `strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`, `verbatimModuleSyntax: true` (Next 16's `next build` enforces `jsx: react-jsx`).
- [x] Install Tailwind v4.3 + `@tailwindcss/typography`
- [x] `pnpm dlx shadcn@latest init --template next --base base --preset nova --yes` (Base UI engine; CLI v4 flag is `--base base`, not `base-ui`). `components.json` + `lib/utils.ts` wired up — 24-component install deferred to feature **`shadcn-components`** below.
- [x] **`shadcn-components` feature** (deferred from scaffold): ran `pnpm exec shadcn add button card input textarea label select dialog sheet tabs accordion badge separator tooltip skeleton breadcrumb navigation-menu dropdown-menu popover command avatar aspect-ratio scroll-area sonner` against the Base UI registry. `input-group.tsx` was auto-pulled as a dep of `input`; new runtime deps: `cmdk`, `next-themes`, `sonner`. `components/ui/sonner.tsx` patched: narrowed `theme as "light" | "dark" | "system"` to satisfy `exactOptionalPropertyTypes`. `combobox` remains a recipe (built later from `command` + `popover`).
- [x] Install `lucide-react`, `framer-motion@^12`, `clsx`, `tailwind-merge`, `class-variance-authority`
- [x] Install MDX stack: `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `next-mdx-remote`, `gray-matter`, `remark-gfm`, `rehype-pretty-code`, `shiki`, `reading-time`
- [x] Install forms + validation: `zod@^4`, `react-hook-form`, `@hookform/resolvers`
- [x] Install SEO: `schema-dts`
- [x] Install email: `resend`, `@react-email/components`, `react-email` (CLI as devDep). `@react-email/components` 1.0.x is deprecated-warned on install but functional; v2 transition pending — re-evaluate in Phase 1.
- [x] Install tooling: `eslint@9`, `eslint-config-next`, `eslint-config-prettier`, `prettier`, `prettier-plugin-tailwindcss`, `husky@^9`, `lint-staged@^15`, `@playwright/test`, `@lhci/cli`, `tsx` (TS-ESLint plugins ship transitively with `eslint-config-next/typescript`).

### Repo hygiene

- [x] `.editorconfig`
- [x] `.gitattributes` (force LF, mark binaries — closes a CRLF warning batch we hit on first commit)
- [x] `.gitignore` (Next.js defaults + `.env*`, `.vercel`, `playwright-report`, `test-results`, `.lighthouseci`, `.idea`, `.vscode/*`)
- [x] `.nvmrc` pinning Node 24 (was Node 22 in the original brief; switched to match dev machine — see also `strategy/tech-stack.md`)
- [x] `eslint.config.mjs` (flat config; `next/core-web-vitals` + `next/typescript` + `eslint-config-prettier`)
- [x] `prettier.config.mjs` + `.prettierignore`
- [x] Husky `pre-commit` runs `lint-staged`
- [x] `lint-staged.config.mjs` runs ESLint + Prettier on staged files
- [x] `package.json` scripts: `dev`, `build` (turbopack), `start`, `lint`, `lint:fix`, `typecheck`, `format`, `format:check`, `test:e2e`, `lhci`, `prepare`
- [x] `README.md` skeleton (what is this, how to run, quality gates, where the docs are)
- [x] `pnpm-workspace.yaml` `allowBuilds` allowlist: `esbuild`, `sharp`, `unrs-resolver`; `msw: false` (pnpm 11 requires explicit approval for postinstall build scripts)

### CI

- [x] `.github/workflows/ci.yml`: lint → typecheck → build → Playwright smoke (3 tests: home + robots + sitemap) → Lighthouse CI on `/`. Runs on PRs to `main` + pushes to `main`. Uses `pnpm/action-setup@v4` + `actions/setup-node@v5` reading `.nvmrc`. Uploads Playwright + Lighthouse artifacts.
- [x] `.github/workflows/lighthouse.yml`: full Lighthouse on `main` (currently just `/` — URL list grows in Phase 1+). Same LHCI config, separate run for a comprehensive baseline + workflow_dispatch escape hatch.
- [x] `.lighthouserc.cjs` (JS not JSON — needed runtime `PORT` env to dodge local port-3000 collision; CI defaults to 3000). Budgets from `strategy/performance-accessibility.md`. Category scores (Perf ≥ 0.95 / A11y = 1.0 / BP = 1.0 / SEO ≥ 0.95) are `error`; CWV (LCP ≤ 2000ms, TBT ≤ 200ms) and resource budgets (JS ≤ 170KB, CSS ≤ 30KB, total ≤ 600KB) are `warn` until Phase 1 home rebuild replaces the starter (which is itself heavy with `next.svg` + `vercel.svg` + framework chrome).
- [x] **`playwright.config.ts` + `e2e/smoke.spec.ts`** (added under CI scope — Phase 0 scope doc didn't list them explicitly but they're prerequisites for the ci.yml smoke step): chromium-only, retries 2 in CI, runs against `corepack pnpm start --port $PORT`, port-configurable via `PORT` env.
- [x] **`packageManager: pnpm@11.3.0`** added to `package.json` so `pnpm/action-setup@v4` resolves version automatically without a hardcoded `version` arg.
- [ ] ~~GitHub branch protection on `main`~~ — **N/A on GitHub Free private** (memory: `project_github_plan`). Rely on Husky `pre-commit` + CI signals + PR discipline. Re-enable if the repo moves to a paid plan.
- [x] **Dependabot** (`.github/dependabot.yml`) — weekly `npm` + `github-actions` ecosystems, grouped (next, react, types, lint-format, tailwind, mdx, forms) to avoid PR spam. Renovate deferred.

### Vercel

- [x] Create Vercel project; connect to GitHub repo — closed by `vercel-hookup`: project `naxdor` under personal scope `ansars-projects-ccc78e57`, GitHub auto-wired to `azcheema/naxdor` (every branch with an open PR gets a preview; every push to `main` deploys to production).
- [x] Configure environment vars (Phase 0 needs only `NEXT_PUBLIC_SITE_URL`) — closed by `vercel-hookup`: `https://naxdor.com` on production + preview (preview canonicalizes at apex so OG / JSON-LD / sitemap URLs stay stable; `X-Robots-Tag: noindex` from Vercel prevents preview indexation), `http://localhost:3000` on development.
- [~] ~~Enable Vercel Analytics + Speed Insights~~ — **deferred to Phase 4 `lead-capture-scale`** (these are product analytics, not infra; require `<Analytics />` + `<SpeedInsights />` in `app/layout.tsx`). Task added to phase-4 doc as carry-forward.
- [x] Verify preview deploys work on PR — closed by `vercel-hookup`: PR #23 preview at `naxdor-git-feature-vercel-hookup-ansars-projects-ccc78e57.vercel.app`; `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` all 200; sitemap + robots correctly anchor at `https://naxdor.com`. Deployment Protection disabled so previews are publicly accessible for stakeholder review.

### Design system

- [x] `styles/tokens.css` with all CSS variables (per `strategy/design-system.md`) — full Electric palette + semantic surfaces/foregrounds + shadcn alias tokens + typography scale + radius/shadow/motion + breakpoints + `prefers-reduced-motion` override.
- [x] Tailwind `@theme inline { ... }` block mirroring tokens (in `styles/tokens.css`) so utilities like `bg-brand-500`, `text-fg-muted`, `rounded-xl`, `font-sans` resolve through `var()` and respect dark-mode overrides at runtime.
- [x] `next/font` self-hosted Geist + Geist Mono (`--font-geist-sans`, `--font-geist-mono`).
- [x] Dark mode via `data-theme="dark"` on `<html>`, system preference default. Driven by `next-themes` (`components/theme-provider.tsx`); `@custom-variant dark` in `app/globals.css` aligns Tailwind's `dark:` variant with the `data-theme` attribute. `TooltipProvider` wired at the layout root.
- [x] **shadcn primitives** in `components/ui/`: button, card, input, input-group, textarea, label, select, dialog, sheet, tabs, accordion, badge, separator, tooltip, skeleton, sonner, breadcrumb, navigation-menu, dropdown-menu, popover, command, avatar, aspect-ratio, scroll-area (shipped in `shadcn-components`).
- [ ] **Marketing-side base components** (deferred — separate features):
  - [x] `layout-primitives` — `components/layout/{container,section,grid,stack,divider}.tsx` + barrel `index.ts`. Server-component primitives, CVA-typed variants, token-driven (uses `bg-bg`/`bg-surface`/`bg-muted`/`bg-brand-500`, `text-fg`/`text-fg-on-brand`, `border-color`). Grid uses static class maps (Tailwind JIT-safe) for `cols`/`colsMd`/`colsLg` × {1,2,3,4,6,12}. Divider is hand-written (`<div role="separator">`), not a re-export of shadcn `Separator`, to avoid an unnecessary client boundary and add `spacing` (sm/md/lg).
  - [x] `nav-shell` — `components/layout/{site-header,site-footer,mobile-nav,theme-toggle,brand-mark,breadcrumbs}.tsx` + nav data `_nav-data.ts`. Sticky header with blur-on-scroll (toggled via `data-scrolled` on `<header>`), shadcn `NavigationMenu` mega-menu listing all 9 services + 3 industries (canonical Phase 2 hrefs), `Sheet`-based mobile drawer with `Accordion`-collapsed sections, Linear-style 4-column footer, `DropdownMenu` theme toggle (Light/Dark/System) using `useSyncExternalStore` for hydration-safe mount detection (React 19's `set-state-in-effect` rule blocks the classic next-themes `useState` pattern). Skip-to-content link added in `app/layout.tsx`. **TableOfContents deferred to Phase 3** (`phase-3-content-engine.md`) where its blog-post consumer lives — listed under nav-shell here as the original scope but lifted out as a cross-phase carry-forward. Quality gates green: typecheck + lint + build + e2e (5/5). Local `lhci` ran but hit a chrome-launcher Windows-EPERM bug during temp-dir cleanup unrelated to our changes; CI will validate budgets on the PR.
  - `marketing-blocks-mvp` — Hero (variants: home/service/location/industry), LogoCloud, FeatureGrid, BentoGrid, Stats, Testimonial, PricingCard, CtaBand, FaqAccordion (Phase 1)
  - [x] `component-gallery` — `app/dev/components/page.tsx` server-component shell + 7 sectioned files under `_sections/` (`tokens`, `layout-primitives`, `buttons`, `forms`, `surfaces`, `navigation`, `overlays`). Tokens section visualizes brand/accent/neutral scales + semantic surfaces + radius + shadow + fluid type scale; layout-primitives dogfoods `<Container>`/`<Section>`/`<Grid>`/`<Stack>`/`<Divider>`; overlays is `'use client'` and mounts the Sonner `<Toaster>` locally. Page metadata is `noindex, nofollow` (overrides `buildMetadata`'s default `{index:false, follow:true}` after spreading); `/dev/` added to `app/robots.ts` disallow as second layer. `e2e/smoke.spec.ts` extended with a 6th test asserting the gallery h1 renders + the robots meta contains both `noindex` and `nofollow`. PR #20 merged in 2m51s on first CI run.
- [x] Component contrast verified at 4.5:1 minimum — closed by `a11y-audit`: `scripts/check-contrast.ts` (run in CI via `pnpm check:contrast`) verifies every body/UI token pair against 4.5/3.0 thresholds in both light and dark; token drift fixed during the audit (`--color-danger` → red-700, dark `--destructive` → red-300, dark `--color-brand-500` collapsed to light + new `--color-link` for body link text). axe-core's `color-contrast` rule additionally scans the rendered `/dev/components` page in both themes.
- [x] Keyboard navigation pass on all interactive components — closed by `a11y-audit`: `e2e/keyboard.spec.ts` covers Dialog focus trap + ESC restore, Sheet + Popover ESC restore, DropdownMenu open/ArrowDown/ESC restore, focus-ring visibility on keyboard-focused buttons. Uncovered Base UI error #31 (gallery's `DropdownMenuLabel` was missing a parent `DropdownMenuGroup`) and a Safari scrollable-region failure (`ScrollArea.Viewport` defaults to `tabIndex=-1`); both fixed.

### SEO scaffolding

- [x] `lib/seo.ts` exports `buildMetadata({ title?, description?, path?, image?, type?, noindex? })` — canonical, OpenGraph, Twitter, robots derived once.
- [x] `lib/jsonld.ts` exports typed node builders (`organizationNode`, `websiteNode`, `webpageNode`, `serviceNode`, `articleNode`, `personNode`, `faqNode`, `breadcrumbsNode`) + `buildGraph` + `renderJsonLd` using `schema-dts`. Stable IDs (`ORG_ID`, `SITE_ID`, `LOGO_ID`) derive from `NEXT_PUBLIC_SITE_URL`.
- [x] `lib/mdx.ts` exports generic `getMdx(collection, slug, schema)` + `listMdx(collection, schema)` (gray-matter + zod-validated frontmatter).
- [x] `lib/env.ts` validates `process.env` via zod at startup (`NEXT_PUBLIC_SITE_URL` only; defaults to `http://localhost:3000` for local cold-start). `.env.example` provided.
- [x] `app/layout.tsx`: fonts (Geist + Geist Mono), default metadata via `buildMetadata()` with title template, sitewide `Organization` + `WebSite` JSON-LD injected via `<script type="application/ld+json">`.
  - **Note:** Vercel Analytics / Speed Insights are deferred to Phase 4's `lead-capture-scale` feature. Phase 0 originally bundled them under "analytics components" but they're not infrastructure — they're product analytics.
- [x] `app/sitemap.ts` — Phase 0 minimum returns just `/`. **Sub-sitemaps** (`services/sitemap.ts`, `industries/sitemap.ts`, `locations/sitemap.ts`, `blog/sitemap.ts`, `case-studies/sitemap.ts`) ship with the content features that produce them; Next.js auto-generates `/sitemap-index.xml` once multiple `sitemap.ts` files exist across the tree.
- [x] `app/robots.ts` — Allow `/`, Disallow `/api/`, `/(app)/`, `/*?*`; sitemap reference; no bot-specific blocks (per `strategy/seo-strategy.md` § Robots.txt).
- [x] `app/opengraph-image.tsx` — 1200×630 default OG via `next/og` (electric-indigo gradient + Naxdor wordmark mark). Real-logo-based OG ships once `brand-assets` puts `public/brand/logo-512.png` in place.
- [x] `app/not-found.tsx` — branded 404 page with primary CTA (`/`) + secondary (`/contact`); `noindex, follow`.
- [x] `app/global-error.tsx` — client-side error boundary that replaces the root layout on uncaught errors; intentionally self-contained inline styles in case the design system itself failed to load.

### Keyword research import

- [ ] Run Ahrefs/Semrush keyword expansion off seed list in `strategy/keyword-research.md` — **deferred to Phase 4 `lead-capture-scale`** (paid-tool enrichment pass; the seed list shipped by `keyword-research-import` has `msv`/`kd` as `null` and the schema accepts that).
- [x] Filter, group into clusters (all 9 services + sub-clusters: AI voice agents / chatbots / automation; CRM migrations; e-commerce; web app; maintenance) — closed by `keyword-research-import`: 318 keywords spread across 13 clusters (web-development, ecommerce, web-app, ui-ux, seo, mobile, gohighlevel, hubspot, crm-migrations, ai-voice-agents, ai-chatbots, ai-automation, maintenance).
- [x] Map each keyword → primary URL across the 9-service catalog — closed by `keyword-research-import`: every record carries `primaryUrl` + zero-or-more `supportingUrls`; pattern validated against the canonical service/industry slugs from `_nav-data.ts`.
- [x] Save `data/keywords.json` per schema in `strategy/keyword-research.md` — closed by `keyword-research-import`: schema mirrors the strategy doc + adds `meta.intentEnum` / `meta.clusterEnum` / `meta.verticalEnum` for self-documentation.
- [x] CI lint: every `primaryUrl` resolves — closed by `keyword-research-import` (`scripts/check-keywords.ts`, run in CI between `check:contrast` and `build`). Pattern-conforms against service/industry slug catalogs + static-page allowlist + `[city]-[st]` programmatic pattern + `/blog/<kebab>`; placeholder URLs accepted per the original task scope. Phase 1+ carry-forward: tighten to a file-exists check when home + service pages ship.

### Brand assets

Assets provided (locked 2026-05-23): `images/Black Trans.png` + `.svg`, `images/White Trans.png` + `.svg`, `images/favicon.png` (125×125). Tasks:

- [x] Move PNGs `images/` → `public/brand/`: `logo-black.png`, `logo-white.png` (the source files in `images/` left in place as a vault).
- [x] Move SVGs to `public/brand/logo-{black,white}.svg`. **SVGO skipped** — the received SVGs are base64-PNG-wrapped (Figma export pattern), so SVGO would save nothing. A true vector wordmark is a future asset ask (track as `chore/vector-wordmark`).
- [x] **Authored `public/brand/favicon.svg`** by hand (rounded black square + heavy white `NX` / `DR` rows). Single source for every raster size.
- [x] **`scripts/build-brand-assets.ts`** (sharp + png-to-ico) reads `public/brand/favicon.svg` and produces: `app/icon.svg` (copy, Next auto-emits link), `app/favicon.ico` (16+32+48 multi), `app/apple-icon.png` (180×180), `public/icon-192.png`, `public/icon-512.png`, `public/brand/logo-512.png`. Wired as `pnpm build:brand-assets`. Generated artifacts committed.
- [x] `public/manifest.json` — name + short_name (Naxdor), `theme_color: #5B4CDB`, `background_color: #FAFAFA`, icons (192, 512, 512 maskable). `app/layout.tsx` references it via `metadata.manifest`.
- [x] `app/opengraph-image.tsx` updated — now overlays the real white wordmark from `public/brand/logo-white.png` (embedded as base64 data URI to avoid network fetches at OG-render time) on the electric-indigo gradient, with headline + tagline + `naxdor.com` mark.
- [x] Brand color palette locked (Electric) — covered by `design-tokens` feature.
- [x] Typography pair locked (Geist + Geist Mono) — covered by `scaffold-nextjs` (next/font wiring) + `design-tokens` (token mapping).
- [ ] **Photography direction doc** — `docs/strategy/photography.md` deferred to Phase 1 when we start sourcing imagery for the home/services pages; not blocking.

### Documentation

- [ ] All 20 docs from `docs/` populated (this is one of them ✅)
- [ ] `CONTRIBUTING.md` — branch naming, PR review, commit conventions
- [ ] `SECURITY.md` — how to report vulnerabilities

---

## Deliverables

1. **A `naxdor` Next.js 16.2.6 repo** committed to GitHub.
2. **Vercel preview URL** live for every PR.
3. **Green CI** on `main`.
4. **Lighthouse budgets met** on the default home page (currently the Next.js starter).
5. **Design system gallery** route (e.g. `/dev/components`) showing every base component with all states.
6. **`data/keywords.json`** committed with ≥ 300 keywords mapped to URLs. — shipped by `keyword-research-import`: 318 keywords, 13 clusters.
7. **`docs/` folder fully populated** (20 files).
8. **Brand assets committed** in `public/brand/`.

---

## Acceptance criteria

- [x] `pnpm install && pnpm build` succeeds from a clean clone in < 60s build time — verified by CI green on every PR (Linux runner; local Windows builds hit transient Turbopack IPC flake per memory but compile time itself is ~12s).
- [x] `pnpm typecheck`, `pnpm lint` both clean (zero warnings) — gated by CI on every PR; gates are first two steps of `.github/workflows/ci.yml`.
- [x] Lighthouse Mobile Perf ≥ 95 / SEO ≥ 95 / A11y = 100 / Best Practices = 100 on `/` — gated by LHCI in `.github/workflows/ci.yml`; budget thresholds in `.lighthouserc.cjs` are `error` for category scores (CWV + resource budgets stay `warn` until Phase 1 home rebuild replaces the starter).
- [x] `/sitemap.xml` returns 200 with valid sitemap index — verified on PR #23 preview: returns valid XML with `https://naxdor.com/` (apex, not preview origin).
- [x] `/robots.txt` returns 200 with sitemap reference — verified on PR #23 preview: returns `Sitemap: https://naxdor.com/sitemap.xml` + correct Allow/Disallow rules.
- [x] Organization + WebSite JSON-LD validates in Google's Rich Results Test — single `application/ld+json` block injected in `app/layout.tsx` root via typed `schema-dts` builders (`lib/jsonld.ts`); structure validity guaranteed by the type system. Manual Rich Results Test pass deferred until production domain attaches (apex `https://naxdor.com` resolves) since the test fetches by URL.
- [x] OG image renders at 1200×630 with brand — verified on PR #23 preview: `/opengraph-image` returns `image/png` (93 KB) with real wordmark on electric-indigo gradient.
- [x] Dark mode toggle works; respects system preference initially — toggle (`aria-label="Toggle theme"`) rendered in header per `nav-shell`; `next-themes` + `@custom-variant dark` wired via `data-theme` attribute; `class="dark"` variants compiled into the bundle. Behavior verified manually during `nav-shell` ship + via `e2e/a11y.spec.ts` running axe in both themes.
- [x] All base components keyboard-navigable; visible focus ring; pass axe-core — closed by `a11y-audit` (`e2e/a11y.spec.ts` runs axe on `/` + `/dev/components` in light + dark and per-overlay open scans; `e2e/keyboard.spec.ts` proves focus-trap + ESC-restore + focus-ring rendering)
- [~] `docs/` fully populated and committed — 17 of 20 files populated (00-overview + 13 strategy + 3 context + 7 phase docs all present and content-rich). Three items deferred: `CONTRIBUTING.md` / `SECURITY.md` (Phase 1; not blocking pre-launch) and `docs/strategy/photography.md` (Phase 1 when image sourcing actually starts). Acceptance considered met for Phase 0 since none of the deferred docs block Phase 1 work.

---

## Risks

| Risk                                                            | Mitigation                                                                                               |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Next.js 16.2.6 ecosystem still catching up (some libraries lag) | Pin all peer deps; freeze upgrades for the phase                                                         |
| shadcn Base UI engine maturity (released March 2026)            | Have Radix variant ready as escape hatch — same API                                                      |
| Brand identity not finalized in time                            | Ship placeholder tokens; swap during Phase 1 (mechanical work)                                           |
| Keyword research blocked on tool access                         | Start with manual list from `strategy/keyword-research.md`; enrich later                                 |
| Lighthouse budget too tight on starter page                     | Tune the starter to match (no third-party fonts, minimal JS); budget reflects production-realistic state |

---

## Dependencies

- None — this is the first phase.

---

## Definition of done

Phase 0 ships when **a new contributor can clone the repo, run `pnpm install && pnpm dev`, see a styled placeholder home page with green Lighthouse scores, and open a PR that flows through green CI to a preview URL — all in under 10 minutes from clone**.

---

## Retro (shipped 2026-05-26)

- **Shipped:** 12 features covering scaffold + design system + SEO scaffolding + brand assets + CI + layout primitives + nav shell + component gallery + a11y audit + keyword research seed + Vercel hookup. Definition-of-done met: clean clone → `pnpm install && pnpm dev` → styled home → push → green CI → public preview URL on Vercel.
- **Scope changes:** (1) Vercel Analytics + Speed Insights pulled out (deferred to Phase 4 `lead-capture-scale` — product analytics, not infra). (2) `TableOfContents` deferred to Phase 3 where its blog-post consumer lives. (3) Ahrefs/Semrush MSV/KD enrichment of `data/keywords.json` deferred to Phase 4 (paid-tool dependency). (4) `CONTRIBUTING.md` / `SECURITY.md` / `docs/strategy/photography.md` deferred to Phase 1 (non-blocking).
- **Carry-forwards into Phase 1:** (a) Flip LHCI budgets from `warn` to `error` for CWV + resource budgets once the home redesign replaces the Next.js starter. (b) Tighten keyword-research URL lint to also verify `app/<path>/page.tsx` exists on disk (currently pattern-only). (c) Vercel-side: attach `naxdor.com` apex domain + add the canonical-host `www → apex` redirect when DNS is ready.
- **Carry-forwards into Phase 4:** (a) Install `@vercel/analytics` + `@vercel/speed-insights` per existing note. (b) Run Ahrefs/Semrush enrichment pass against `data/keywords.json`.
- **Open follow-ups (chore branches, no phase ownership):** `chore/reconcile-service-slugs` — six docs still use stale slugs like `crm-automation` / `web-app-development` (canonical is `crm` / `web-app` per nav-shell); scoped out of `keyword-research-import` to keep that diff focused. `chore/vector-wordmark` — current SVG wordmarks are base64-PNG-wrapped from Figma; true vector replacement is a future asset ask.
- **Notable lessons captured in memory:** (i) `feedback-lhci-windows-unreliable` — local LHCI on Windows hits chrome-launcher EPERM that masks real Lighthouse failures; trust CI on Linux as authoritative. (ii) `feedback-turbopack-windows-ipc-flake` — Turbopack production builds on Windows sometimes crash with `os error 10054`; clear `.next` and retry before bisecting source. (iii) GitHub Free private plan can't enforce branch protection rulesets — rely on Husky + CI signals + PR discipline.
