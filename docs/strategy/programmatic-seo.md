# Programmatic SEO

> How we scale to thousands of pages without earning a Google quality penalty. The discipline that makes city × service pages safe.

---

## The contract

> **Every programmatic page must clear the same quality bar as a hand-written page, or it doesn't ship.**

Programmatic SEO done badly = thin content = de-indexation + domain quality hit. Programmatic SEO done right = the strongest scalable SEO play available.

We enforce the bar in three layers:

1. **Data richness** — the input data must support unique output.
2. **Template discipline** — the template injects real per-permutation specifics, not just the keyword.
3. **Indexation gate** — pages ship `noindex` and earn the index slot.

---

## Where we use programmatic SEO

- `/services/[service]/[location]` — service × city (Phase 2 onward)
- `/industries/[industry]/[location]` — industry × city (Phase 4+ when domain authority supports it)

We do **not** use programmatic SEO for the blog or case studies — those are hand-authored.

---

## Minimum uniqueness contract

Per 2026 best practices: **at least 30% of each page's body text should be genuinely unique to that URL.** This is a recommendation backed by a soft gate, not a brittle build-time hard fail.

We enforce it as a **warn-then-review** workflow:

`scripts/check-programmatic-uniqueness.ts` runs at build time:

1. Gathers all programmatic pages' rendered body text.
2. Computes pairwise Jaccard similarity on token shingles (5-grams).
3. **Warns (yellow CI status)** if any two pages exceed 70% similarity.
4. **Fails the build** only if similarity > 85% (almost-identical content — true thin-content failure).
5. Reports the offending URL pairs and the duplicated tokens.

Pairs in the 70–85% band are flagged for **manual review** before indexation promotion — they may legitimately share template prose if the unique sections (opening, FAQ, local data) are strong enough. The build doesn't break; the reviewer decides.

This catches the worst failure mode ("we forgot to inject the city-specific paragraph") without preventing legitimate same-template pages from shipping.

---

## What goes in every programmatic page

Each `/services/[service]/[location]` page must include all of:

### 1. Unique opening paragraph (3–5 sentences)

Templated using rich `data/locations.ts` fields:

```
{City} is a {population-tier} {metroArea} metro of approximately {metroPopulation}
people in {state}, with a dense SMB economy across {top 3 industries}. {City} SMBs
in {service-relevant context} face {specific local pain point}. Naxdor builds
{service} solutions for {City} businesses ranging from {smallest segment} to
{largest segment}, with on-call response across {timeZone}.
```

Example for Manchester × Web Development:

> Greater Manchester is a region of roughly 2.9 million people (ONS Census 2021), with a dense small-business economy across professional services, digital, healthcare and aesthetics, and the creative sector. Manchester businesses face one of the most competitive local-search markets outside London — a templated WordPress site won't rank against a well-built competitor. WebAsk builds custom Next.js sites for Manchester businesses from single-site clinics in Didsbury to multi-location practices across the city centre, working remotely on UK time.

### 2. Local relevance section

Names districts, business areas, regional sector mix, and regional considerations (time zone, regulation, local competition).

For Manchester × Web Development:

> Most of our Manchester clients trade in Deansgate, Spinningfields, the Northern Quarter, Ancoats or Didsbury. Their visitors expect fast mobile experiences, and we design first for 4G mobile at 360px, then enhance for desktop.

> ⚠️ **Every figure needs a named source.** An unsourced statistic falls under the same rule
> as a fabricated testimonial (CLAUDE.md § Don't) — which is why `data/locations.ts` carries
> `populationBasis` and `populationSource` alongside the number. And a UK "city population"
> is ambiguous by millions: Leeds is ~0.82m as a local-authority district and ~2.3m as West
> Yorkshire. Never let copy quietly promote the larger figure.

### 3. Service overview (templated body)

The shared MDX partial. Same prose across all locations — that's fine; this is the templated 70%.

### 4. Local FAQs (3–5)

Templated questions, location-specific answers using `data/locations.ts` enrichment:

- "Do you work with [City] [industry] businesses?"
- "What's the typical timeline for a [service] project in [City]?"
- "How do you handle [timeZone]/remote collaboration with [City] clients?"
- "Can you do on-site [planning sessions / discovery / training] in [City]?"

### 5. Relevant case studies

Filtered to: (a) same service, (b) same vertical or same metro. Render 1–3 case study cards.

### 6. Local testimonials _(when available; Phase 4+)_

If we have a real testimonial from a client in this city, surface it here.

### 7. Internal links

Required outbound links from every page:

- Parent service page
- Location hub (if hand-crafted exists)
- Same service in 2–3 nearest cities (from `nearbyCities` field)
- 2 related services in this city (with `/services/[other-service]/[same-location]` if it exists, else parent service)

### 8. `Service` + `ProfessionalService` JSON-LD

A city-scoped `Service` (with the priced `Offer`) **plus** a `ProfessionalService` provider node, both with `areaServed` → City → `containedInPlace` → State, `parentOrganization` → Organization.

> **Honesty override (locked 2026-06):** emit **`areaServed` only — NO `address`, NO `geo`.** Naxdor is a remote firm (`data/site.ts`) with no office in these cities. The earlier "address — PO box / virtual office acceptable" guidance is **retired**: it predates the locked remote-Swedish-entity reality and contradicts this doc's own anti-pattern table ("geo-fenced fake addresses → Google detects; manual action risk"). The honest, penalty-safe expression of reach is `areaServed`. Built by `lib/jsonld.ts` `serviceLocationNodes()`, mirroring `locationHubNode()`.

---

## `data/locations.ts` enrichment

Each location entry must be rich enough to drive templates without filler:

```ts
// UK shape — see data/locations.ts for the authoritative version.
export type Location = {
  slug: string; // "manchester" | "cheshire" | "leeds"
  kind: "city" | "county"; // Cheshire is a COUNTY — not a City-shaped record
  name: string; // "Manchester" — used verbatim, never suffixed with a county
  county: string; // "Greater Manchester"; equals `name` when kind === "county"
  region: string; // ITL 1: "North West England"
  serviceArea: string; // "Greater Manchester" — replaces the US Census metroArea
  population: number; // 2_867_800
  populationBasis: "built-up-area" | "local-authority" | "ceremonial-county";
  populationSource: string; // "ONS Census 2021 (…)" — no unsourced figures ship
  timeZone: "Europe/London";
  timeZoneLabel: string; // "UK time" — not "GMT"; half the year it's BST
  notableIndustries: string[];
  notableAreas: string[]; // districts for a city, principal towns for a county
  nearbyPlaces: { name: string; slug: string }[];
  searchVolumeTier: "high" | "med" | "low";
  // Authored hub copy. ABSENT until Phase 2 writes it — an area without `copy`
  // is unrenderable, unlinkable and unindexable, so the no-fabrication rule is
  // enforced by the compiler rather than by review.
  copy?: LocationCopy;
  // industry-specific context to inject when this area × industry page renders
  industryNotes?: Partial<Record<IndustrySlug, string>>;
  // service-specific context
  serviceNotes?: Partial<Record<ServiceSlug, string>>;
};
```

The richer this object, the less templated the output feels.

---

## Indexation gate

New programmatic pages **ship with `<meta name="robots" content="noindex, follow">`**. They're crawlable but not indexed.

Promotion to `index, follow` requires manual review (or an automated reviewer script) confirming:

- [ ] Body text ≥ 600 words
- [ ] Uniqueness check passes (≥ 30% unique vs all other programmatic pages)
- [ ] All internal links resolve (no 404s)
- [ ] JSON-LD validates in Rich Results Test
- [ ] No broken images
- [ ] FAQ block has ≥ 3 location-specific questions
- [ ] Opening paragraph names the city, state, and at least one specific local detail

Once approved, frontmatter flag `indexable: true` flips, the next build emits `index, follow`, and the page enters the relevant sub-sitemap.

---

## Scale plan

| Phase                          | Target        | Notes                                                                                                                |
| ------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| Phase 2                        | 6–10 pages    | One service (web dev or CRM) × top 6–10 metros. Manual review, full content audit.                                   |
| Phase 4 (early)                | 30–60 pages   | All 6 services × 5–10 metros. Batch review (5 at a time).                                                            |
| Phase 4 (mid)                  | 100–200 pages | All 6 services × top 20–30 metros. Process matures.                                                                  |
| Phase 4+ (industry × location) | 200–500 pages | 3 launch industries × 6 services × 10–30 metros. Only added once we have impressions on existing programmatic pages. |

We do **not** ship hundreds of pages on day one. The scale-up is intentionally slow because:

- Domain authority needs to grow.
- We refine the template based on what ranks.
- Each batch's metrics (impressions, CTR, position) informs the next.

---

## Stale page sweep (quarterly)

For each programmatic page:

- **Impressions = 0 after 6 months** → demote to `noindex`, flag for review.
- **Impressions > 0 but CTR < 0.5%** → review meta description and `<title>`, refresh.
- **Position 20–50** → light refresh: add a new FAQ, update the unique opening with current stats, refresh `updatedAt`.
- **Position 5–20** → leave alone unless competitor moves; consider expanding internal links.
- **Position 1–4** → leave alone; monitor for content decay.

---

## Anti-patterns we will not ship

| Anti-pattern                                                   | Why we reject                                              |
| -------------------------------------------------------------- | ---------------------------------------------------------- |
| City name swap only                                            | Thin content; Google de-indexes                            |
| AI-generated unique opening paragraphs without human review    | Hallucinated facts about real cities damage trust          |
| Same FAQ block on every city page                              | Misses AEO opportunity per location                        |
| Geo-fenced fake addresses (a P.O. box claimed as a storefront) | Google detects; manual action risk                         |
| 1000+ pages in one batch                                       | Quality discipline can't scale that fast at our domain age |
| `index, follow` on draft pages                                 | Index slot squandered on incomplete content                |
| Pages with no `nearbyCities` cross-links                       | Internal-linking signal lost                               |

---

## How we measure programmatic SEO success

- **Impressions per page** (GSC) — leading indicator
- **Position by query** (GSC) — improvement over time
- **CTR** — meta description quality
- **Conversion rate** (form submits / clicks-to-call) — the only thing that pays the bills
- **Index coverage** (GSC) — should match the count we promoted

If we ship 50 pages and 10 are indexed with zero impressions after 6 months, something is wrong with content quality, not crawling.
