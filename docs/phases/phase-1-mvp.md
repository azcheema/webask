# Phase 1 — Credible MVP

> **Timeline:** Week 2–3
> **Status:** **Complete — closed 2026-06-03** · **Depends on:** Phase 0 complete · See § Phase close-out at the end.
> **Outcome:** A site we can send a prospect to today.

---

## Goal

Ship the smallest set of pages that, taken together, would convince a real SMB prospect to book a call. No service is left out of pricing visibility, but only one service gets a full detail page in this phase.

**Cold-start reality check.** Naxdor launches without partner badges, Clutch reviews, or live case studies. Phase 1 explicitly designs around that gap — see § Cold-start trust strategy below.

After Phase 1, the brand exists publicly at naxdor.com.

---

## In scope

- Home page (full anatomy per `strategy/uiux-guidelines.md`)
- 1 flagship service page — **Web Development** (highest-volume head term; also our biggest portfolio piece)
- About page with founder bios + E-E-A-T-worthy credentials + LinkedIn/GitHub links
- **Process page** — replaces missing case studies with concrete methodology
- **Portfolio strip** — prior founder work (even if not under Naxdor brand) on home + about page
- **Free audit landing page** — `/free-audit` for the SEO + Core Web Vitals offer (cold-start trust lever)
- Contact page with Resend-backed static form (with budget + timeline qualifier fields per `strategy/uiux-guidelines.md`)
- Pricing page (all 9 services, "starting at" anchors)
- Legal: Privacy, Terms, Cookies
- Dynamic OG images via `next/og`
- Google Search Console + Bing Webmaster Tools verification + sitemap submitted
- Analytics + tracking events live

---

## Cold-start trust strategy

The launch site has no partner badges, no third-party reviews, and no published case studies. We bridge that gap with **four explicit trust mechanisms**:

### 1. Founder credentials front and center

- Founder name(s), photo(s), and verifiable LinkedIn + GitHub links **above the fold on `/about`**.
- Sentence-level credentials in the home trust strip: "Built by senior engineers with X years across Y, Z, W stacks."
- `Person` JSON-LD with `knowsAbout`, `sameAs` pointing to LinkedIn + GitHub.

### 2. Public free audit offer

- `/free-audit` landing page offers a **free 30-minute SEO + Core Web Vitals audit** for any SMB site.
- Audit deliverable: a short Loom video + 1-page PDF with 5 prioritized findings.
- Reasons it works as a trust lever: low-cost, demonstrates expertise live, fills the calendar with discovery calls, generates conversation, no commitment required.
- **Capacity gate**: limit to 10 audits per month at launch. "Currently accepting 10 audits per month" — scarcity is honest, not manipulative.
- CTA on home + service page + every blog post: "Get a free SEO + Core Web Vitals audit."

### 3. Detailed process page

- `/process` (or section within `/about`) walks through Discover → Design → Build → Grow in concrete steps.
- Each step names artifacts produced, typical timeline, and what we expect from the client.
- Reads as a replacement for case-study proof: "you can see exactly how we work."

### 4. Portfolio strip — founder prior work

- Home + about page show 3–6 cards of prior founder work (under any prior brand or independently).
- Clearly labeled: "Founder portfolio — selected prior work."
- Each card: screenshot + 1-line outcome + role (e.g. "Lead engineer, [Project]").
- Honest: no claim that this was Naxdor work.

---

## Out of scope

- Other 5 service detail pages → Phase 2
- Location pages → Phase 2
- Industry pages → Phase 2
- Case studies → Phase 3
- Blog → Phase 3
- CRM wiring → Phase 4

---

## Tasks

### Content (write before coding)

- [x] Home page copy: H1 value prop, subhead, 4 problem→solution sections, FAQ (8 questions), CTA band — `data/copy/home.ts`
- [x] Web Development service page copy: hero, who-it's-for, deliverables, process, tech list, pricing anchor, 8 FAQs — `content/services/web-development.mdx` body + catalog data in `data/services.ts`
- [x] About page: company story (1 page max), founder bio(s) with verifiable credentials + LinkedIn/GitHub, values (3 max — not 10) — `data/copy/about.ts` + `data/team.ts` (founder facts as `TODO(content-copy):` placeholders for user to fill before merge)
- [x] **Process page copy** — Discover → Design → Build → Grow with timelines, artifacts, expectations — `data/copy/process.ts`
- [x] **Portfolio strip copy** — 3–6 prior-work cards with screenshot + outcome + role — `data/portfolio.ts` (scaffolded with `TODO(content-copy):` placeholders for founder to fill)
- [x] **Free audit landing page copy** — what's included, capacity statement, single CTA — `data/copy/free-audit.ts`
- [x] Pricing page: 9-service table with starting prices + "what changes the price" explainer — `data/services.ts` (catalog/table data) + `data/copy/pricing.ts` (narrative) _(**prices founder-confirmed 2026-06-02, close-out #6**; display reworked to **starting-price only** — the `typicalRange`/upper-limit was dropped from the data model, the pricing-table "Typical range" column, and the `PricingCard` "Most projects land between…" line, leaving "Starting at USD $X" + the `priceNote` lever explanation + custom-quote CTA. Brings the page into line with the CLAUDE.md locked "Starting at $X" pricing-display decision.)_
- [x] Legal pages from a vetted template (Termly, iubenda, or custom) — reviewed for jurisdiction _(legal-pages feature shipped the three page shells; PR #35 replaced the placeholders with full drafted Sweden/GDPR copy in `data/copy/legal.ts`; **launch-go-live (PR #44) flipped all three `draft: false`** after a founder read-through, so they now render `index,follow`, drop the draft notice, bump `lastUpdated` to 2026-06-01, and enter the sitemap. Copy is founder-reviewed; a professional legal skim remains a recommended fast-follow.)_
- [x] Contact form copy + response-time promise + alt channels — `data/copy/contact.ts`
- [~] All copy passes Flesch-Kincaid ≤ Grade 8 _(deferred — optional, no FK lint wired; copy was human-written at a plain register. Low priority; revisit if/when an FK CI check is added. Not a launch gate.)_
- [x] All copy reads internationally (no "across America" / "throughout the US" in body copy)

### Templates & components

- [x] `app/(marketing)/page.tsx` — home _(home-page feature: establishes the `(marketing)` route group; static-prerendered; replaces the Next.js starter)_
- [x] `app/(marketing)/services/[service]/page.tsx` (full template — dynamic, MDX-gated route; only `web-development` prerenders today, reused verbatim for all 8 services in Phase 2)
- [x] `app/(marketing)/about/page.tsx` _(about-page feature: static, composes `PageHero` → story → 3-value grid → inline founder-bio cards → `PortfolioStrip` → brand `CtaBand`; `WebPage` + `BreadcrumbList` + `Person` JSON-LD — first page to emit `Person` nodes, the cold-start trust lever #1)_
- [x] `app/(marketing)/contact/page.tsx` _(contact-page feature: static, composes `PageHero` → two-column form+sidebar → `FaqAccordion` → brand `CtaBand`; `WebPage` + `BreadcrumbList` + `FAQPage` JSON-LD)_
- [x] `app/(marketing)/pricing/page.tsx` _(pricing-page feature: static, composes the 9-service `PricingTable` + factor/quote grids + FAQ + brand CtaBand; `WebPage` + `BreadcrumbList` + `FAQPage` JSON-LD)_
- [x] `app/(marketing)/legal/privacy/page.tsx`, `legal/terms/page.tsx`, `legal/cookies/page.tsx` _(legal-pages feature: static server components composing the shared `LegalDocument` block — `PageHero` (with a "last updated" note) → narrow `prose-naxdor` body of typed sections; each emits `WebPage` + `BreadcrumbList` JSON-LD and gates `noindex` on the document's `draft` flag. Routing resolved to nested `/legal/*`; footer legal nav updated + Cookies added.)_
- [x] **`app/(marketing)/process/page.tsx`** — concrete methodology page (cold-start trust lever) _(process-page feature: static, composes `PageHero` → intro → `ProcessSteps` → 6-principle grid → brand `CtaBand`; `WebPage` + `BreadcrumbList` JSON-LD)_
- [x] **`app/(marketing)/free-audit/page.tsx`** — free audit landing page _(free-audit feature: static, composes `PageHero` (scarcity `note`) → what-you-get 3-card grid → inline 4-step → who-it's-for fit/not-fit → `FaqAccordion` → brand `CtaBand`; `WebPage` + `BreadcrumbList` + `FAQPage` JSON-LD)_
- [~] Marketing block components implemented: `Hero`, `LogoCloud` (or placeholder stat strip), `FeatureGrid`, `BentoGrid`, `Stats`, `Testimonial` (placeholder until proof arrives), `PricingCard`, `FaqAccordion`, `CtaBand`, `ProcessSteps`, `ServiceCard`, **`PortfolioStrip`** (founder prior work) _(home-page feature shipped the blocks home composes: `Hero`, `ProblemSolution` (the home's service-teaser sections, in place of a generic `FeatureGrid`), `Stats`, `CtaBand` (tone variants), `FaqAccordion`, `PortfolioStrip` (TODO-gated), + shared `SectionHeading`. `web-dev-service-page` added `ServiceHero` + `PricingCard`. `pricing-page` added `PageHero` (shared interior-page hero for about/process/free-audit/contact) + `PricingTable` (9-service price catalog, service links gated on built MDX slugs). `process-page` added `ProcessSteps` (the reserved 4-step vertical process visual — numeral badge + name + tagline + duration pill + artifacts/client-inputs sub-lists). Remaining — `ServiceCard`, `LogoCloud`, `BentoGrid`, `Testimonial` — ship with their consuming pages so none land as dead code.)_
- [x] `ContactForm` component (zod + RHF + Server Action + Resend integration) — with budget + timeline + country fields per `strategy/uiux-guidelines.md` _(contact-page feature: client RHF + zodResolver, all 8 fields, Base UI Select via Controller, honeypot, inline-after-blur validation, in-place success state, inline `aria-live` failure alert; shared `lib/contact-schema.ts`)_
- [x] `Header` + `Footer` populated with real navigation (9 services in mega-menu) _(shipped in Phase 0 `nav-shell` — sticky header mega-menu with all 9 services + 3 industries, Linear-style 4-column footer, mobile drawer; `qa-pass` later added `BUILT_ROUTES`/`isBuiltRoute()` gating so unbuilt Phase-2 destinations render as non-interactive labels (breadth shown, zero dead links). Checkbox was stale-but-done.)_
- [x] `data/services.ts` populated with **all 9 services** (web dev, e-commerce, web app, UI/UX, SEO, mobile, CRM, AI, maintenance) _(all 9 present since `content-copy`; **starting prices founder-confirmed 2026-06-02 (close-out #6)**, displayed starting-price-only.)_
- [x] `data/team.ts` with founder bios + photos + LinkedIn/GitHub _(founder bio + verified LinkedIn/GitHub since `content-copy`; **headshot shipped (close-out #8, PR #57)** — 800×800 square at `public/team/ansar-cheema.jpg`; About renders the real `next/image` and the `Person` JSON-LD carries `image`.)_
- [~] `data/portfolio.ts` with 3–6 founder prior-work entries _(**deferred to Phase 2 — founder decision 2026-06-02 (close-out #9)**: needs more time to assemble real prior-work + screenshots. The `PortfolioStrip` component already shipped (home + About) and **TODO-self-hides** until ≥1 real entry lands, so this is not a launch blocker — the strip is simply a dark cold-start trust lever until Phase 2 fills it.)_
- [x] `data/site.ts` populated with NAP, social links _(NAP confirmed as the Swedish enskild-firma launch identity via launch-go-live, PR #44, 2026-06-01; **company socials added 2026-06-02 (close-out #5)** — LinkedIn, X, Instagram, GitHub-org, YouTube, Facebook → flow into Organization JSON-LD `sameAs` via the existing conditional spread. Founder personal profiles stay on the Person node in `data/team.ts`.)_

### Forms / lead capture (static for now)

- [x] Resend account, domain verified (DKIM/SPF/DMARC) _(done — domain verified + `RESEND_API_KEY` set in Vercel Production (close-out #1); SPF/DKIM/DMARC published 2026-05-31 (DMARC `p=none`, ramp later); live notification + autoresponder verified end-to-end. Checkbox was stale-but-done.)_
- [x] React Email template for incoming-lead notification + autoresponder _(contact-page feature: `emails/contact-notification.tsx` + `emails/contact-autoresponder.tsx`, passed to Resend via the `react:` prop)_
- [x] Server Action validates with zod, sends both emails, returns success or typed error _(contact-page feature: `app/(marketing)/contact/actions.ts` `submitContact` — **Server Action, not the `app/api/contact/route.ts` route** the row originally named, per `coding-standards.md`; env-gated on `RESEND_API_KEY`; returns `{success} | {success:false, error}`)_
- [x] Honeypot field included _(contact-page feature: hidden `company_url`, validated server-side — non-empty → silent success, no send)_
- [~] Rate-limit by IP (e.g. Upstash KV or Vercel Edge Config) _(deferred to Phase 4 with the rest of lead-capture scale; honeypot + Vercel bot protection cover launch. Not a Phase-1 gate.)_
- [~] Lead delivered to `contact@naxdor.com` (or chosen address) _(wired via `CONTACT_NOTIFY_EMAIL`, defaults to `contact@naxdor.com`; live once the Resend key + domain land)_
- [x] Autoresponder sets expectation: "We reply within 1 business day" _(contact-page feature: autoresponder copy mirrors `data/copy/contact.ts`)_

### SEO + Schema

- [x] `generateMetadata` on every page using `lib/seo.ts` _(seo-jsonld-sweep audit: all 10 routes flow through `buildMetadata` — centralized canonical/OG/twitter/robots; legal pages gate `noindex` on `draft`; home pins the bespoke OG card; dev gallery is `noindex,nofollow`. Now CI-enforced — `e2e/jsonld.spec.ts` asserts a canonical (path matches route) + non-empty meta description on every critical route.)_
- [x] JSON-LD via `lib/jsonld.ts` per page type (Organization, WebSite, WebPage, Service, FAQPage, BreadcrumbList) _(seo-jsonld-sweep audit: all via the typed builders, one `@graph`/page — layout `Organization`+`WebSite`; home `WebPage`+`FAQPage`; service `WebPage`+`Service`+`BreadcrumbList`+`FAQPage`; about `WebPage`+`BreadcrumbList`+`Person×N`; pricing/contact/free-audit `WebPage`+`BreadcrumbList`+`FAQPage`; process `WebPage`+`BreadcrumbList`; legal `WebPage`+`BreadcrumbList`. Org node refactored to source identity from `data/site.ts` + `data/team.ts` so it can't drift — fixed `contactPoint.email` (`hello@`→`contact@`), dropped the not-yet-live company `sameAs`, added `legalName` + `founder`→Person `@id`.)_
- [x] OG images generated per page via `next/og` _(og-images feature: one shared `OgImageDocument` template (`lib/og.tsx`, `server-only`) renders both the bespoke sitewide/home card (`app/opengraph-image.tsx`) and a parametrized `app/og/route.tsx` that `buildMetadata()` auto-points every page's `og:image`/`twitter:image` at via `/og?title=…` — zero per-page wiring, and ready for Phase 2's programmatic city/service cards (optional `eyebrow` param already supported). Titles > 100 chars truncate with `…`; the route never errors (always returns a valid card). Home pins the bespoke default card explicitly.)_
- [x] Submit sitemap to GSC + Bing Webmaster Tools _(done close-out #2, 2026-06-01 — GSC verified via DNS-TXT + `sitemap.xml` submitted (7 indexable apex URLs, no noindex leakage); Bing done via Import-from-GSC. Checkbox was stale-but-done.)_
- [x] Configure GSC + Bing alerts (manual actions, coverage, CWV) _(done close-out #2 — both tools email manual-action/coverage alerts by default; no extra config needed.)_
- [x] Validate every page's JSON-LD in Rich Results Test _(structural half automated + CI-enforced — `e2e/jsonld.spec.ts` extracts the rendered JSON-LD from the 6 critical routes + `/free-audit` and asserts schema-strategy.md § Validation rules 1–6 (single canonical Org `@id`, every page references it, no Person/Org type-mix, cross-route `@id` resolution incl. the founder→Person link, sequential breadcrumbs, non-empty FAQ). **Manual RRT ping done during close-out (PR #46 follow-up): valid + eligible on all pages.** The 3 LocalBusiness optional notes (telephone/priceRange/address) left as-is by choice.)_

### Analytics

- [~] GA4 property created; gtag installed via `next/script` _(analytics feature: gtag loader wired in `components/analytics/analytics-scripts.tsx`, env-gated on `NEXT_PUBLIC_GA_ID` + **consent-gated** (loads only after opt-in), dormant until the ID lands — same pattern as Resend. **Deviation:** strategy `measurement.md` § GA4 specifies `strategy="afterInteractive"` (not `lazyOnload` as this row read) so the initial `page_view` isn't delayed; followed measurement.md. **Still external/user:** creating the GA4 property + adding `NEXT_PUBLIC_GA_ID` to Vercel.)_
- [~] Microsoft Clarity script (lazyOnload) _(analytics feature: Clarity loader wired (`lazyOnload`), env-gated on `NEXT_PUBLIC_CLARITY_ID` + consent-gated, dormant until the ID lands. External/user: create the Clarity project + add the ID.)_
- [x] Vercel Analytics + Speed Insights enabled _(analytics feature: `@vercel/analytics` + `@vercel/speed-insights` mounted always-on (cookieless, no consent needed) in `AnalyticsProvider` → `app/layout.tsx`. Collects automatically once deployed on Vercel. **Pulled forward from Phase 4** — `vercel-hookup` had deferred the install, but `measurement.md` places Vercel Analytics in Phase 0/1 and the phase-1 task list owns it here.)_
- [x] **Consent banner + gate (measurement.md § Privacy & consent)** _(analytics feature: accessible non-modal `ConsentBanner` (Accept/Decline + Cookie Policy link), decision persisted in `localStorage`, withdrawable via a footer "Cookie settings" control. GA4/Clarity load only on opt-in; Vercel Analytics stays cookieless/always-on. Banner only renders when a cookie tool is configured (`hasAnalytics`). Mirrors the consent model already drafted in `data/copy/legal.ts`.)_
- [~] Custom events wired per `strategy/measurement.md` (cta*click, form_view, form_start, form_submit\_\*, etc.) *(analytics feature: `lib/analytics.ts` `track()`/`trackPageview()` (no-op without consent) + the full contact-form funnel (`form_view`/`form_start`/`form_submit_attempt`/`form_submit_success`/`form_submit_error`), delegated `cta_click` (Hero + sitewide `CtaBand` via `data-analytics="cta:…"`) + `outbound_click`, and SPA `page_view` on client nav. **Deferred (documented):** dedicated `service_view`/`pricing_view`/`industry_page_view` — path-based `page_view` already distinguishes those pages in GA4; revisit if a per-event param is needed.)\_
- [~] GA4 conversions configured (`form_submit_success`) _(GA4 property is live (`G-E5WNXC855D`, Realtime confirmed, close-out #3) and the `form_submit_success` event is already emitted; marking it as a "key event"/conversion in the GA4 UI is a one-click founder step, pending. Not a launch gate.)_
- [~] Looker Studio dashboard built (data may be sparse first month) _(deferred — can trail launch per close-out; build in the Looker Studio UI once GA4 + GSC accrue data.)_

### Domain + DNS

- [x] Domain registered (if not already) _(naxdor.com live on Vercel)_
- [x] DNS pointed at Vercel (apex + www; recommend www → apex 301) _(apex serves 200; **www → apex `308`** — QA-confirmed live; matches the apex `NEXT_PUBLIC_SITE_URL` canonical)_
- [x] HTTPS + HSTS via Vercel _(QA-confirmed live: `Strict-Transport-Security: max-age=63072000` (2yr). Optional hardening absent — X-Content-Type-Options/Referrer-Policy/Permissions-Policy/X-Frame-Options + HSTS includeSubDomains/preload — noted as a fast-follow, not a blocker.)_
- [x] Custom 404 + custom global-error pages confirmed _(qa-pass: `not-found.tsx` renders + returns a true HTTP 404 live (`X-Matched-Path: /404`), `noindex`, links home + contact; `global-error.tsx` self-contained with inline styles + reset/home link.)_
- [x] Email DNS (DKIM/SPF/DMARC for Resend) _(SPF/DKIM/DMARC published 2026-05-31; DMARC `p=none`, ramp to quarantine/reject after monitoring.)_

### QA + launch

- [x] axe-core passes on home, web dev, about, contact, pricing, privacy _(CI-enforced: `e2e/a11y.spec.ts` runs axe on the full route set in light **and** dark; qa-pass confirmed green coverage.)_
- [x] **Page-composition audit against `strategy/uiux-guidelines.md` § Page anatomy** — once all Phase 1 blocks exist, re-walk every shipped page (home first) against the prescribed anatomy (Hero → Trust strip → Problem/Solution → Proof → **Process (4-step visual)** → **Pricing anchor** → FAQ → CTA band). For each section either confirm it uses the intended block or record an explicit deviation reason (per anatomy spec line 35). _(page-composition-audit feature: audit complete — **every page conforms or deviates legitimately** (interior pages — about/contact/process/pricing/free-audit/legal — carry purpose-specific anatomy; `/pricing` and `/process` **are** the canonical pricing-anchor/4-step surfaces; service-page proof is deferred until case studies exist) **except the home page**. **Resolution (user → "match the anatomy"):** retrofitted home, server-only (zero JS-bundle cost — protects the perf-budget win): new **`ProcessStrip`** (compact 4-step reusing `ProcessStep.shortDescription`, which was authored for exactly this) replaced the `CtaBand` process teaser; new **`PricingAnchor`** ("starting at $X" — 4 curated service prices from `data/services.ts`) replaced the `CtaBand` pricing teaser, delivering the home copy's published-pricing promise on the page itself. Also fixed the one minor finding — **`ServiceHero` gained the anatomy's inline "Starting at USD $X" tag** next to the H1 (was only in the in-body `PricingCard`); inherited by all Phase-2 services via the template. Both retrofits keep their "see full…" deep-links + `cta_click` analytics. Verified: no horizontal overflow at 360/1280px; axe green on `/` light+dark; 13/13 smoke.)_
- [x] Keyboard navigation manual pass _(human tab-through of the real marketing pages completed by the founder 2026-06-03; automated `e2e/keyboard.spec.ts` — focus-trap + ESC-restore + focus-ring — is CI-green; skip-to-content link + `<main id="main">` present; focus rings axe-tested on 22 routes. The spec only exercises `/dev/components`, not the real marketing pages — same primitives, low risk; a true human tab-through stays a manual step.)_
- [~] Lighthouse CI green on all 6 critical templates _(lhci-budgets + perf-budget: CI scans the 6 indexable templates on **mobile**; green. After the perf-budget barrel-leak fix the **perf score ≥ 95** is met on 4/6 (`/`, `/pricing`, `/about`, `/process`); `/services` 0.94 and `/contact` 0.90 sit just under — kept as `warn`, not a hard gate, since they're within score variance.)_
- [~] **Flip CWV + resource budgets in `.lighthouserc.cjs` from `warn` → `error`** (carried forward from Phase 0 · `ci-pipeline`) _(lhci-budgets flipped 7/10 to `error`; **perf-budget** then flipped **`script:size` to `error`** at recalibrated per-URL values (285KB non-form / 390KB `/contact`, via `assertMatrix`) after a barrel-leak fix cut non-form pages 389→254KB gzip. `categories:performance` + `largest-contentful-paint` remain `warn` by design — LCP localhost-lab is pessimistic vs the Vercel edge (verified via Speed Insights field data), and perf-score is 4/6 within variance. The strategy doc's unreachable 170KB/200KB JS figures were corrected to 285KB/390KB with rationale.)_
- [x] **Add the 6 critical templates to `.lighthouserc.cjs` `url` list** and to `lighthouse.yml`'s authoritative run _(lhci-budgets feature: URL list lives in `.lighthouserc.cjs`, shared by both `ci.yml` (PR) and `lighthouse.yml` (main); `noindex` pages excluded so the SEO category stays valid.)_
- [x] Mobile manual test on iOS Safari + Android Chrome _(founder completed the real-device pass 2026-06-03; layouts also verified at 360/390/1280px during build, no horizontal overflow.)_
- [x] All internal links resolve _(qa-pass: found + fixed dead links — home CRM/AI in-content CTAs (→`/services/crm`, `/services/ai-integration`), the sitewide nav's ~14 Phase-2 destinations, and a web-dev MDX prose `/services` link, all of which 404'd live. Fix: `BUILT_ROUTES`/`isBuiltRoute()` in `_nav-data.ts` gates the header/footer/mobile nav (unbuilt → non-interactive labels, breadth preserved); home CTAs + MDX prose repointed to `/pricing`. **Verified: full dead-href sweep across all 10 built pages is clean.**)_
- [x] Form submits successfully + emails arrive _(contact-page: live end-to-end verified — notification + autoresponder deliver via Resend; `RESEND_API_KEY` confirmed in Vercel Production per close-out #1.)_
- [~] Site map indexed in GSC (URL inspection on 4 representative pages) _(GSC verified + `sitemap.xml` submitted (close-out #2); indexing/URL-inspection is the ongoing post-submission GSC step.)_

---

## Deliverables

1. **Live, publicly-resolvable naxdor.com** with the 7 pages above.
2. **Working contact form** delivering leads to email.
3. **GSC + Bing verified** with sitemap submitted.
4. **GA4 + Clarity + Vercel Analytics** tracking real events.
5. **All CI-enforced Lighthouse budgets green** on every shipped page (A11y = 100, BP = 100, SEO ≥ 95, CLS ≤ 0.05, TBT ≤ 200ms, script-size, total-byte-weight); mobile Perf-score + LCP tracked as `warn` per the `perf-budget` recalibration (lab-floor-bound; field-verify via Speed Insights).
6. **Phase 1 launch announcement** drafted (`docs/launch/announcement.md` — 4 variants + posting checklist); the _published_ post is the founder's LinkedIn/personal-channel action.

---

## Acceptance criteria

- [x] All 7 pages live and link-tested _(qa-pass: all 10 indexable routes 200 live; dead-href sweep clean after the internal-link fix.)_
- [~] All pages meet performance budget (CLS ≤ 0.05, TBT ≤ 200ms / INP proxy — **CI hard-gated, green**; LCP ≤ 2.0s mobile — **recalibrated**) _(**recalibrated per `perf-budget` (user "Option 1")**: CLS ≤ 0.05 and TBT ≤ 200ms (the lab proxy for the field-only INP) are hard `error` budgets in `.lighthouserc.cjs` and pass on all 6 templates. Mobile-lab **LCP ~2.5–3.9s** can't hit ≤ 2.0s on the React 19 + Next 16 framework floor (~190KB JS) and lab is pessimistic vs the Vercel edge CDN, so LCP stays `warn`. **Carry-forward:** confirm real-world LCP/INP via Vercel Speed Insights field data ~28 days post-launch (≈ early July 2026), then flip to `error` if there's margin.)_
- [~] Lighthouse Mobile Perf ≥ 95, A11y = 100, BP = 100, SEO ≥ 95 on every page _(**A11y = 100, BP = 100, SEO ≥ 95 — hard `error`, met on all 6 templates.** Mobile **Perf ≥ 95** met on 4/6 (`/`, `/pricing`, `/about`, `/process`); `/services` 0.94 and `/contact` 0.90 sit just under and are kept `warn` (within score variance, framework-floor-bound) per the `perf-budget` recalibration — same Speed-Insights field-data carry-forward as above.)_
- [x] JSON-LD validates on every page (Rich Results Test) _(structural validation CI-enforced (`e2e/jsonld.spec.ts`) + confirmed live on all 10 pages; manual RRT ping run during close-out (PR #46 follow-up) — valid + eligible on all pages.)_
- [x] Contact form delivers test lead end-to-end (submission → notification → autoresponder) _(verified live during contact-page work; `RESEND_API_KEY` confirmed in Vercel Production, close-out #1.)_
- [x] Sitemap accessible at `/sitemap.xml` and submitted in GSC _(`/sitemap.xml` 200 live; submitted to GSC + Bing, close-out #2.)_
- [x] Test prospect (a friend) can navigate home → web dev → contact → submit form in < 90 seconds _(founder ran the test-prospect walkthrough 2026-06-03.)_
- [x] No `noindex` tags accidentally left on production pages _(close-out #2 re-verified live: 7 indexable apex URLs, no noindex leakage; qa-pass JSON-LD/status sweep reconfirmed — `noindex` only on the dev gallery + 404, as designed.)_

---

## Risks

| Risk                                  | Mitigation                                                                               |
| ------------------------------------- | ---------------------------------------------------------------------------------------- |
| Copy quality drags the launch         | Write copy first, code second; have a non-engineer read it aloud                         |
| Resend deliverability issues          | Domain DNS verified before launch; test from 3 different inboxes (Gmail, Outlook, Yahoo) |
| GSC verification delay                | Use DNS TXT method (fast, no HTML upload)                                                |
| Form spam                             | Honeypot + Vercel bot protection; rate limit; monitor for unusual volume in week 1       |
| Logo or color tweaks late in phase    | Phase 0 brand lock-in protects against this; if changes happen, they're token-level      |
| Web Vitals regression on real traffic | Vercel Analytics field data reviewed daily for first week                                |

---

## Dependencies

- Phase 0 complete (tech stack, design system, CI, brand assets, keyword research)
- Brand color tokens finalized (Phase 0 deliverable)
- Resend account + domain DNS access
- Vercel account
- GSC + Bing Webmaster Tools accounts

---

## Definition of done

Phase 1 ships when **the home page, web development service page, about, contact, pricing, and legal pages are live at naxdor.com; a real prospect submitting the contact form receives an autoresponder and lands in our inbox; Lighthouse and accessibility budgets are green; and the founders are comfortable sending the URL to a target SMB owner**.

✅ **Met (2026-06-03)** — all 10 indexable routes live; contact form delivers end-to-end; CI-enforced budgets green (perf-score/LCP recalibrated, see below); founder confirmed the site is prospect-ready (real-device + keyboard + test-prospect walkthrough).

---

## Phase close-out — 2026-06-03

**Shipped.** All 10 indexable routes live at naxdor.com (home, web-dev service + the reusable `[service]` template, about, process, free-audit, pricing, contact, 3 legal); Resend-backed contact form delivering notification + autoresponder end-to-end; full per-page metadata + JSON-LD (CI-enforced via `e2e/jsonld.spec.ts`, RRT valid+eligible) + dynamic OG; GA4 + Clarity + Vercel Analytics + Speed Insights + consent gate live; GSC + Bing verified + sitemap submitted; tech-credibility hero redesign; founder headshot + `Person` schema; 9 founder-confirmed starting prices (starting-price-only display); baseline security headers + HSTS; full QA pass (founder real-device + keyboard tab-through + test-prospect; dead-link sweep clean; custom 404/global-error verified).

**Slipped / deferred (by decision — not blockers).** Portfolio entries → **Phase 2** (founder assembling real prior-work; `PortfolioStrip` self-hides until filled); IP rate-limit + consent-withdrawal cleanup → **Phase 4**; Looker Studio dashboard trails launch; Flesch-Kincaid lint optional/unwired; the launch announcement is drafted (`docs/launch/announcement.md`) — founder posts to LinkedIn.

**Recalibrated.** Mobile Perf-score ≥ 95 and LCP ≤ 2.0s are lab-unreachable on the React 19 + Next 16 framework floor (~190KB JS) and pessimistic vs the Vercel edge, so they stay `warn` while CI hard-gates the achievable budgets (A11y = 100, BP = 100, SEO ≥ 95, CLS ≤ 0.05, TBT ≤ 200, script-size, total). `.lighthouserc.cjs` + `strategy/performance-accessibility.md` already reflect this.

**Carry-forwards.** (1) Verify real-world CWV via **Vercel Speed Insights field data ~28 days post-launch (≈ early July 2026)**, then flip perf-score/LCP `warn → error` if there's margin. (2) Promote each Phase-2 route into `BUILT_ROUTES` (`components/layout/_nav-data.ts`) as it ships (and drop its `prefetch={false}`). (3) dependabot **#13 (ESLint 10)** held pending an ESLint-10-ready `eslint-config-next`. (4) Optional polish: hardening headers (`X-Content-Type-Options`/`Referrer-Policy`/`Permissions-Policy`/`X-Frame-Options`, HSTS `includeSubDomains`/`preload`) + fix the `WebSite` `SearchAction` pointing at a non-existent `/search`. (5) Founder to designate `form_submit_success` as a GA4 key-event/conversion.

**Open decisions:** none blocking Phase 2.
