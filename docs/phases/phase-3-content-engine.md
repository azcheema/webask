# Phase 3 — Content Engine + Proof

> **Timeline:** Week 6–7
> **Status:** **Up next** · **Depends on:** Phase 2 live ✓ (closed 2026-06-19)
> **Outcome:** Case studies + blog + FAQs + topic clusters live. The proof and authority machine is running.
>
> **Carried in from Phase 2 close-out (2026-06-19):** portfolio-strip content and the optional `data/faqs.ts` centralization, folded into the sections below and tagged **[from P2]**. (HubSpot + GoHighLevel partner apps/badges were routed to **Phase 4** instead — they pair with the CRM integration.)

---

## Goal

Stand up the two engines that compound over time: **case studies** (proof) and **blog** (authority). Add the FAQ system across existing pages. Submit to third-party directories to start the E-E-A-T flywheel.

After Phase 3, Naxdor has a content strategy that grows organic traffic month over month.

---

## In scope

- Case studies system: index + detail template
- 2–3 case studies published (start with founder/portfolio work if no client work yet)
- Blog system: index + post + topic-archive templates
- 5 launch blog posts — one pillar per service cluster (per `strategy/keyword-research.md` § topical clusters)
- FAQ blocks added to all service, industry, and location pages
- Topic cluster pages (`/blog/topic/[topic]`)
- Newsletter signup form (placeholder provider; full provider chosen in this phase)
- Submit to Clutch, DesignRush, G2, GoodFirms for third-party verification

---

## Out of scope

- CMS migration → Phase 5
- Lead-capture wiring beyond contact form → Phase 4
- Programmatic scale-up → Phase 4

---

## Tasks

### Resolve open decisions

- [ ] Newsletter provider chosen (recommend Resend Audiences for stack consistency; alternatives: Beehiiv, ConvertKit)
- [x] First case study scope decided — **founder portfolio** (user confirmed 2026-06-22 no real client work yet; case-study engine ships content-agnostic + self-hiding in a later feature)
- [x] Blog launch authors confirmed; bios written — founder **Ansar Cheema** is the sole launch author; bio already real in `data/team.ts` (bylines link `/about#ansar-cheema`, which is also the `Person` `@id`)

### Content

- [ ] Write 2–3 case studies per `strategy/content-guidelines.md` § case study structure. Each needs: client name (or anonymized industry+city), problem, approach, outcome, real numbers, screenshots, testimonial (real name + photo + role + company logo where permitted).
- [ ] **[from P2] Portfolio strip content** — fill `data/portfolio.ts` with 3–6 real founder prior-work entries (title + 1-line outcome + role + link) + 16:10 ≥1280px screenshots at `public/portfolio/*.png`. Pure content — the `PortfolioStrip` component + TODO-gating already shipped in Phase 1 and self-hides until ≥1 entry lands, so it lights up the home + About strip automatically. Gather alongside the case studies above (same founder prior-work source).
- [x] Write 5 launch blog posts — one per cluster: **all 5 published** (founder-reviewed, `draft: false`, `index,follow`, in the sitemap) — the 4 non-SEO pillars via PR #107 (`2127b3c`) and the SEO pillar (`local-seo-checklist-2026`) via PR #108 (`f0acc3a`):
  - GoHighLevel pillar (e.g. "What is GoHighLevel? The 2026 SMB buyer's guide")
  - AI for SMBs pillar (e.g. "AI voice agents: ROI analysis for service businesses")
  - SEO pillar (e.g. "Local SEO checklist for 2026")
  - Web development pillar (e.g. "Custom website vs WordPress in 2026: real numbers")
  - Industry pillar (e.g. "Med spa marketing: the 2026 playbook")
- [x] Every post passes Information Gain test (something the SERP top-10 doesn't have) — each post carries an explicit information-gain block (an original framework); founder-reviewed on publish
- [x] Every post has author byline with credentials + `Person` schema — auto-emitted by the blog engine (`AuthorByline` + `Person` node; byline links `/about#ansar-cheema`)
- [ ] FAQ blocks (6–8) for every service, industry, location page that doesn't yet have them. **[from P2]** As of Phase 2 close-out **all** service / industry / location / service×location pages already ship colocated FAQs → `FAQPage` schema, so this is satisfied for existing pages. Remaining work: (a) **optional** `data/faqs.ts` centralization (a tagged reusable pool — only worth it once blog/case-study pages want to reuse FAQs); (b) FAQ blocks on the _new_ Phase 3 page types (case studies / blog) as appropriate.
- [ ] About/team page — founder bios with verifiable credentials, LinkedIn + GitHub links, photos

### Templates

- [x] `app/(marketing)/case-studies/page.tsx` — filterable index (filters: service, industry; **client-side** `CaseStudyFilter`, no URL params for the indexed view to avoid duplicate URLs). Self-hiding: `noindex` + out of sitemap until ≥1 published study.
- [x] `app/(marketing)/case-studies/[slug]/page.tsx` — detail; `dynamicParams = false`, `type: "article"`, hero leads with the `headlineMetric`.
- [x] `app/(marketing)/blog/page.tsx`
- [x] `app/(marketing)/blog/[slug]/page.tsx`
- [x] `app/(marketing)/blog/topic/[topic]/page.tsx`
- [ ] `app/(marketing)/about/team/page.tsx` (team grid + per-person anchor) — _later feature; bylines link `/about#slug` for now_
- [x] `BlogCard`, `CaseStudyCard`, `TableOfContents`, `AuthorByline` components — **all shipped**. `BlogCard` + `TableOfContents` + `AuthorByline` (blog-engine); **`CaseStudyCard` + `CaseStudyFilter` shipped (case-studies-engine)** — the card reads pre-resolved service/industry labels off `CaseStudySummary` so it stays light inside the `'use client'` filter (no `data/services`/`data/industries` catalog imports client-side). **`TableOfContents` carry-forward from Phase 0 `nav-shell`** (2026-05-25) is resolved — server-rendered anchor list against the real MDX integration (heading ids via the shared `slugifyHeading`), reused by both blog + case-study bodies.

### Content tooling

- [x] MDX components for blog: `<Callout>`, `<Stat>` (+`<StatGrid>`), `<Comparison>` (+`<ComparisonColumn>`) in `components/mdx/blog-mdx-components.tsx`; code highlighting via `rehype-pretty-code`/shiki (single dark theme, `keepBackground` — reads in both modes). `<TweetEmbed>` not needed. **Note:** `next-mdx-remote/rsc` drops object-literal expression props, so component APIs use scalar attrs + markdown children (why `<Comparison>` is compound).
- [x] Reading-time calculation surfaced (`reading-time` dep, shown in byline + card)
- [x] Related-content suggestion logic — shipped as `lib/related-content.ts` (kebab per coding-standards), anchor service + 2 sibling posts
- [x] Topic auto-population on `/blog/topic/[topic]`
- [ ] Search across blog (Phase 3 stretch; can be lightweight client-side fuzzy match initially)

### SEO + Schema

- [x] Case study JSON-LD: dual-typed `["CreativeWork", "Article"]` `caseStudyNode()` in `lib/jsonld.ts` with `author` → Person, `about` → Service (via a shared `serviceId()` helper so it can't drift from `serviceNode`'s @id), `publisher` → Org, `dateModified`. CI-enforced in `e2e/jsonld.spec.ts` (cross-route @id resolution holds against the crawled `/services/web-development`).
- [x] Blog post JSON-LD: `Article` with full author + dates + word count (+ `Person` author node; `mainEntityOfPage` now routes through a shared `webpageId` helper after a cross-route `@id`-drift bug was fixed)
- [x] Topic-archive pages: `CollectionPage` (new `collectionPageNode()` in `lib/jsonld.ts`; the JSON-LD e2e frame check generalized to accept `WebPage`|`CollectionPage`)
- [ ] Author profile page (`/about/team#[author-slug]` or full team page): `Person` schema with `knowsAbout`, `sameAs`, `worksFor` — _post pages already emit the author `Person`; dedicated team page is a later feature_
- [x] Sitemap updated to include blog + case studies + topic archives — **blog index + topic archives + published posts live**; **case-studies `caseStudyRoutes()` live** (published-only; the `/case-studies` index enters the sitemap only once ≥1 study publishes). Drafts excluded throughout, mirroring the programmatic `indexable` staging.
- [x] Internal linking pass: every new post links to its anchor service + 2 sibling posts (`lib/related-content.ts` → `CrossLinkGrid`)

### Newsletter signup

- [ ] Newsletter component installed in blog post template + footer
- [ ] Server Action posts to chosen provider's API
- [ ] Confirmation email + double opt-in
- [ ] Privacy policy updated to reflect newsletter data handling
- [ ] Privacy: clear unsubscribe, no purchased lists, no third-party tracking pixels

### E-E-A-T third-party signals

- [ ] Clutch profile created + populated
- [ ] DesignRush profile created
- [ ] G2 profile created
- [ ] GoodFirms profile created
- [ ] Google Business Profile created (if real or virtual office address available)
- [ ] LinkedIn company page populated with services + locations
- [ ] All `sameAs` URLs added to Organization JSON-LD

---

## Deliverables

1. **2–3 published case studies** with real metrics and testimonials.
2. **5 published blog posts** spanning all major clusters.
3. **Author / team page** with full E-E-A-T-grade bios.
4. **FAQ blocks on every service / industry / location page**.
5. **Newsletter signup live** with double opt-in.
6. **Third-party directory profiles live** (Clutch, DesignRush, G2, GoodFirms).
7. **Updated `Organization.sameAs`** array reflecting all new external profiles.
8. **Internal-linking audit** confirming every blog post links to its anchor service + 2 siblings.

---

## Acceptance criteria

- [ ] Case studies and blog posts meet all Lighthouse budgets
- [ ] Every case study has a real metric in the headline (no "we improved their site")
- [ ] Every blog post has at least one piece of original data, research, or insight
- [ ] Every author has a `Person` JSON-LD node with `knowsAbout` + `sameAs`
- [ ] Every post is in a topic cluster (frontmatter `topic` field set)
- [ ] Newsletter double opt-in flow works end-to-end (test from external email)
- [ ] All third-party directory profiles publish; `sameAs` updated within 24h
- [ ] GSC shows blog + case study URLs indexed within 2 weeks

---

## Risks

| Risk                                             | Mitigation                                                                       |
| ------------------------------------------------ | -------------------------------------------------------------------------------- |
| No real client work yet → case studies feel weak | Lead with founder portfolio + clearly label; honesty > pretending                |
| Blog writing pace stalls launch                  | Outline all 5 before writing any; write one per week thereafter, not all at once |
| Newsletter provider mismatch with future CRM     | Resend Audiences keeps the stack consistent; easy export later                   |
| Directory listings get rejected                  | Most require a real website + at least one verified review; we'll have both      |
| FAQ blocks ship inconsistent across pages        | Centralize FAQ data in `data/faqs.ts`, tag by page, reuse                        |

---

## Dependencies

- Phase 2 live (case studies link to services/industries/locations)
- `data/services.ts`, `data/industries.ts`, `data/locations.ts` complete (Phase 2)
- Author bios + photos available
- At least one client testimonial OR founder-portfolio outcome to anchor the first case study
- Resend account (from Phase 1) — newsletter likely on same provider

---

## Definition of done

Phase 3 ships when **2–3 case studies, 5 blog posts, an authoritative team page, FAQs across every service/industry/location page, and live third-party directory profiles are all published; newsletter signup works end-to-end; and Naxdor's `Organization.sameAs` array points at every external verification source**.
