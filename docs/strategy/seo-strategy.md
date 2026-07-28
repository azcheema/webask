# SEO Strategy

> The five-pillar bet for the post-AI-search era. Grounded in Google's May 15, 2026 official AI Search optimization guide.

---

## What Google said in 2026 (the source of truth)

Google's [AI Search optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) published May 15, 2026 is the most important SEO document of the year. Headline takeaways:

1. **AEO and GEO are still SEO.** The same ranking and quality systems power AI Overviews and AI Mode.
2. **E-E-A-T still core.** Experience, Expertise, Authoritativeness, Trustworthiness — now amplified for AI surfaces.
3. **Generative features use retrieval-augmented generation against the Search index.** Get into the index well and you're already optimizing for AI.
4. **No `llms.txt` needed.** Google does not use it.
5. **No special chunking, no AI-specific schema, no AI-Q&A rewrites.** Google's systems understand whole pages.
6. **Information Gain matters more than ever** — content that adds something the SERP doesn't already have.

The March 2026 Google Core Update sharpened the same direction: prioritize "verified entities". Schema becomes our digital ID card.

---

## Five-pillar strategy

### Pillar 1 — E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

How we earn it:

- **Founder bios with credentials.** Real LinkedIn, real GitHub, real years of experience, real client outcomes. `Person` schema with `knowsAbout`.
- **Author bylines on every blog post + case study.** With link to author profile page.
- **Partner badges.** HubSpot Solutions Partner (apply Phase 2). GoHighLevel Affiliate (apply Phase 2). Display in hero/footer.
- **Third-party verification.** Listings on Clutch, DesignRush, G2, GoodFirms (apply Phase 3). Reviews flow into `aggregateRating` schema.
- **Consistent NAP.** Naxdor's Name + Address + Phone identical across site, Google Business Profile, and every directory.
- **Citations.** Every claim with a number is sourced — date it, link it, name the study.
- **Case studies with real names + outcomes.** Anonymous case studies don't count for E-E-A-T.

What we don't do:

- Claim "world's best" — Google's quality systems penalize unverifiable superlatives.
- Use AI-generated author photos.
- Buy reviews.

### Pillar 2 — Information Gain

Every page contributes something the SERP doesn't already have. Heuristics:

- **Blog**: at least one original data point, framework, or example. "I built this in production and here's the unredacted code" beats "10 tips for GoHighLevel" by 10x.
- **Service pages**: our specific process, our specific tech stack, our specific pricing anchors — not generic platitudes.
- **Case studies**: real numbers, real screenshots, real timelines.
- **Industry pages**: vertical-specific pain points and code/workflow snippets that don't appear in template-built competitor sites.

Use the **"Skyscraper test"**: open the top 5 results for your target keyword. Your page must be measurably better in one specific dimension (depth, recency, structure, unique data, embedded interactive element).

### Pillar 3 — Entity SEO

We make Naxdor machine-recognizable as a real, verified business entity. Schema is the connective tissue.

- **One canonical `Organization` `@id`** used across the whole site (`https://webask.co.uk/#organization`).
- **Every page emits a `@graph`** referencing that Organization by `@id`.
- **`sameAs` array** points to: LinkedIn, GitHub org, Crunchbase, Clutch, DesignRush, G2, X, Facebook, Google Business Profile.
- **Founder `Person` schema** with `worksFor` → Organization, `knowsAbout` → array of our service areas.
- **Consistent brand mentions** across the web (PR mentions, podcast guest spots, conference talks) — entity reinforcement.

Full schema blueprints → `schema-strategy.md`.

### Pillar 4 — Core Web Vitals

Performance is a ranking signal AND a conversion lever (−20% conversions per 1s mobile delay). We treat LCP/INP/CLS like brand colors.

Budgets (CI-enforced):

| Metric                 | Budget  | Why                                                  |
| ---------------------- | ------- | ---------------------------------------------------- |
| LCP (mobile, 4G)       | ≤ 2.0s  | Google's "good" threshold is 2.5s; we beat it by 20% |
| INP                    | ≤ 200ms | New Core Web Vital (replaced FID); 200ms is "good"   |
| CLS                    | ≤ 0.05  | Half of Google's 0.1 "good" threshold                |
| Total JS (gz) on home  | ≤ 170KB | RSC + minimal client islands                         |
| Total CSS (gz)         | ≤ 30KB  | Tailwind v4 + critical inline                        |
| Lighthouse Mobile Perf | ≥ 95    | Field data correlates loosely; lab is our gate       |

How we hit them: Next.js RSC, `next/image` with AVIF, `next/font` self-hosted, Turbopack production builds, route-level `force-static` where possible, client islands only where interaction is required.

### Pillar 5 — Topical authority via clusters

A pillar page (service) + supporting articles (blog) + supporting variants (industry, location) all interlinked.

Cluster shape:

```
                    [Service: CRM Automation]    ← pillar
                   /         |          \
   [Industry: dental]  [Industry: med spa]  [Industry: real estate]
        |                    |                     |
   [Blog: GHL for dental]  [Blog: GHL for med spa]  [Blog: GHL for realtors]
        |                    |                     |
   [Loc: GHL Austin TX]  [Loc: GHL Dallas TX]  ...
```

All variants link to the pillar; pillar links back to relevant variants. Internal anchors use the variant's primary keyword.

---

## On-page SEO checklist (every page)

- [ ] One H1 matching the primary keyword cluster
- [ ] H2/H3 hierarchy logical and keyword-supportive (not stuffed)
- [ ] First 150 words contain the primary keyword naturally
- [ ] Meta title ≤ 60 chars, primary keyword first, brand at end
- [ ] Meta description 140–160 chars, lead with user problem, include keyword, end with verb CTA
- [ ] Canonical URL set explicitly
- [ ] OG image generated via `next/og` or static fallback
- [ ] All images: explicit `width`/`height`, descriptive `alt`
- [ ] Internal links: at least 3 contextual links to related pages
- [ ] External links: `rel="noopener noreferrer"` where appropriate; high-quality sources only
- [ ] JSON-LD validates (Rich Results Test in CI)
- [ ] Breadcrumb component + JSON-LD `BreadcrumbList`
- [ ] Page meets Core Web Vitals budgets
- [ ] Mobile usability passes
- [ ] Reading level ≤ Grade 8 (Flesch-Kincaid)

---

## AEO / GEO tactics (per Google's 2026 guide)

Marginal moves that earn AI Overview citations without violating "still SEO" principle:

- **Answer-first paragraph structure.** Open each section with the answer, then elaborate.
- **Tables for comparable data.** Pricing tiers, feature comparisons — AI summaries cite tables more than prose.
- **Bulleted lists with concrete items**, not vague concepts.
- **Source citations inline.** Link the primary source; date the claim. AI surfaces favor verifiable content.
- **Author attribution on every Article + CaseStudy** with credentials linked.
- **FAQ blocks** on service/location/industry pages — these feed "People also ask" + AI summaries.
- **Statistics with the date in the sentence.** "As of May 2026, 67% of SMBs report …"

What we do **not** do (per Google's explicit guidance):

- Create `llms.txt`
- Artificially chunk content into Q&A-only format
- Add proprietary "AI-friendly" schema types
- Rewrite content into ChatGPT-style prose
- Stuff content with synonyms hoping LLM tokenization helps

---

## Sitemap strategy

`app/sitemap.ts` returns the **index** at `/sitemap.xml`. Sub-sitemaps for scale:

- `/sitemap-pages.xml` — static marketing pages
- `/sitemap-services.xml` — 6 services + index
- `/sitemap-locations.xml` — all location hubs + service × location pages
- `/sitemap-industries.xml` — industries + industry × location pages
- `/sitemap-blog.xml` — blog posts + topic archives
- `/sitemap-case-studies.xml` — case studies + index

Each URL carries a real `lastmod` (frontmatter `updatedAt` or file mtime). Google mostly ignores `priority`/`changefreq` — accurate `lastmod` is what drives recrawl.

---

## Robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /(app)/
Disallow: /*?*  ← block URL params from indexation (canonical handles them)

Sitemap: https://webask.co.uk/sitemap.xml
```

We do NOT add bot-specific blocks (`GPTBot`, `CCBot`, etc.) at launch — visibility in AI search surfaces is part of the strategy.

---

## Indexation discipline

- **Programmatic city pages ship `noindex, follow`.** Promoted to `index` after manual review confirms unique content ≥ 600 words + valid JSON-LD + working internal links.
- **Stale page sweep** quarterly: pages with zero impressions for 6 months → `noindex` + content review + decide refresh or retire.
- **404s for deleted content** — never soft-404 (200 status with "not found" message). Real 404 status, custom 404 page.
- **301 (permanent) redirects** for any URL change. Track in `next.config.ts`.
- **No internal cannibalization.** `data/keywords.json` maps each primary keyword → one canonical URL; CI lints duplicates.

---

## Search Console / Bing setup (Phase 1)

- Verify domain in Google Search Console + Bing Webmaster Tools (DNS verification).
- Submit `/sitemap.xml` (the index).
- Configure email alerts for: manual actions, coverage errors, Core Web Vitals issues.
- Weekly review during Phase 1–3; monthly thereafter.
- Use GSC's URL Inspection tool on every new programmatic page batch before promoting to index.

---

## Reporting cadence

| Cadence                         | What we review                                                                           |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| Daily (during phase ship weeks) | GSC coverage errors, build status, Lighthouse CI                                         |
| Weekly                          | New impressions/clicks per page bucket; top queries; CTR by page                         |
| Monthly                         | Position changes for tracked keywords; competitor positions; backlink growth             |
| Quarterly                       | Full content audit; refresh top-traffic posts; demote zero-impression programmatic pages |

Details → `measurement.md`.
