# Content Guidelines

> Voice, structure, and writing rules for every word on the site. Read before you write a single sentence.

---

## Voice = Expert & Confident

The Naxdor voice reads like a **senior consultant** — someone who has built the thing, knows the trade-offs, and respects your time.

| Do                                                                                        | Don't                                        |
| ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| Use active verbs ("we ship", "we integrate")                                              | "We are passionate about delivering…"        |
| Specifics over adjectives ("3.4× lead volume in 90 days")                                 | "Amazing results"                            |
| Numbers over claims ("websites that load in under 1.5s")                                  | "Lightning fast websites"                    |
| Honest trade-offs ("WordPress is faster to start but slower long-term")                   | One-sided pitch                              |
| Address the reader ("your business", "your practice")                                     | "Our clients" / "businesses"                 |
| Concrete proof ("see the Cheshire clinic case study")                                     | "Trusted by hundreds"                        |
| Plain English first, jargon when it earns its place                                       | Buzzwords as a substitute for thinking       |
| **British English spelling** (colour, optimisation, organise, centre, programme, enquiry) | US spelling (color, optimization, organize)  |
| UK framing ("for UK small businesses")                                                    | US phrasing ("for American SMBs"), US idioms |

> **The spelling rule INVERTS from Naxdor, and it is not cosmetic.** Google uses
> spelling as a language-identification and relevance signal, and the two variants
> carry genuinely different search volumes — `optimisation` holds the UK volume,
> `optimization` the US. Consistency matters across body copy, `<title>`, meta
> descriptions, alt text and any outbound channel. Full glossary in
> [`../02-uk-market-research.md`](../02-uk-market-research.md) § Language.
>
> Two related edits: **currency** is "GBP £3,500" on first reference and "£3,500"
> thereafter (replacing the USD rule below), and **dates** are unambiguous —
> "27 July 2026", never "7/27/26".

**Reading-level target:** Flesch-Kincaid Grade 8 or below. Test every page.

---

## Title patterns (`<title>` tag)

≤ 60 characters visible (Google truncates at ~580px). Primary keyword first; brand at end.

| Page type           | Pattern                                              | Example                                                    |
| ------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| Home                | `[Brand] — [Value Prop]`                             | `WebAsk — Digital Services for UK Small Businesses`        |
| Service             | `{Service} Services for Small Business \| WebAsk`    | `Web Development Services for Small Business \| WebAsk`    |
| Service × Location  | `{Service} in {Area} \| WebAsk`                      | `GoHighLevel Agency in Manchester \| WebAsk`               |
| Industry            | `{Service Bundle} for {Industry} \| WebAsk`          | `Web Design for Aesthetic Clinics \| WebAsk`               |
| Industry × Location | `{Service} for {Industry} in {Area} \| WebAsk`       | `Dental SEO in Leeds \| WebAsk`                            |
| Location hub        | `Digital Services for {Area} Businesses \| WebAsk`   | `Digital Services for Manchester Businesses \| WebAsk`     |
| Pricing             | `{Service} Pricing — Starting at £X \| WebAsk`       | `Web Development Pricing — Starting at £4,500 \| WebAsk`   |
| Blog                | `{Article Title} \| WebAsk Blog`                     | `GoHighLevel vs HubSpot for UK SMEs (2026) \| WebAsk Blog` |
| Case study          | `{Outcome Metric} — {Service} for {Industry/Client}` | `3.4× Enquiries — GoHighLevel Setup for a Cheshire Clinic` |

> **No `{State}` segment.** UK location titles use the bare area name — the US
> `{City}, {ST}` form has no British equivalent and reads as an unlocalised
> import (docs/04 § 4). Prices are GBP pending decision gate **D4**.
>
> ⚠️ Clinic-facing titles and copy must never name a prescription-only medicine
> ("Botox"). ASA/CAP bans advertising POMs to the public — see
> [`../03-uk-compliance.md`](../03-uk-compliance.md) § B.

Avoid:

- All-caps anywhere except logos
- Multiple separators (use `\|` once)
- Year in title unless content is genuinely time-sensitive (then update `dateModified`)

---

## Meta description patterns

140–160 characters. Structure:

1. **Lead with the user's problem** (≤ 50 chars)
2. **Our solution** (≤ 60 chars)
3. **Verb-driven CTA** (≤ 30 chars)

Examples:

- _Web Development service_: "Custom websites that load in under 1.5s and rank in local search. Built for UK small businesses by senior engineers. See packages from £4,500 or request a quote."
- _CRM service_: "GoHighLevel setup, automation and HubSpot migration for UK small businesses. We've built funnels that 3× enquiry volume for clinics and dental practices. Book a call."
- _Service × Location (Manchester CRM)_: "GoHighLevel implementation for Manchester businesses. Funnels, automation and migrations — built by senior engineers. Get a custom quote."
- _Industry page (aesthetic clinic web design)_: "Fast, compliant aesthetic clinic websites that book consultations. Built for UK clinics against the CAP Code. See our work."

Anti-patterns:

- _"We are a leading digital agency offering best-in-class services to clients worldwide."_
- _"Click here to learn more about our amazing services."_

---

## Heading hierarchy

- One **`<h1>`** per page — usually inside the hero. Contains the primary keyword once, naturally.
- **`<h2>`** opens each major section. Supports the keyword cluster.
- **`<h3>`** for sub-sections.
- **`<h4>`** for card titles within a grid.
- Never skip levels (no `<h2>` → `<h4>`).
- Headings are descriptive, not cute. "Med spa SEO services" > "What we do for med spas".

---

## Body copy structure

### Service page sections (in order)

1. **Hero** — value prop + outcome + primary CTA
2. **Who it's for** — explicit audience qualifiers (helps prospects self-identify or self-disqualify)
3. **What you get** — deliverables checklist (concrete, not vague)
4. **Process** — 4 steps with timeline
5. **Tech / tools we use** — credibility through specifics
6. **Case studies** — 1–2 cards, filtered to this service
7. **Pricing anchor** — "starting at" + "what changes the price"
8. **FAQs** — 6–8 service-specific questions
9. **Related services** — cross-link
10. **CTA band**

### Industry page sections (in order)

1. **Hero** — "[Service or service bundle] for [industry]" — lead with their pain
2. **The problem we solve for [industry]** — concrete pain points (med spa with weak booking flow loses $X/year)
3. **What we deliver** — bundled service offering for this vertical
4. **Industry-specific examples** — workflow screenshots, before/after, real numbers
5. **Process tailored to the industry** — vertical-specific steps (HIPAA-aware, booking integration, etc.)
6. **Case studies** — filtered to this industry
7. **Pricing anchor**
8. **Industry-specific FAQs**
9. **Locations where we serve [industry]** _(when Phase 4+ industry × location exists)_
10. **CTA band**

### Case study structure

1. **Client + outcome metric** (hero)
2. **Problem** — 1 paragraph
3. **Approach** — what we built and why
4. **Result** — numbers, screenshots, timeline
5. **Testimonial** — with name, role, photo, company
6. **Services used** (badges, linked)
7. **Industry + location** (linked)
8. **Next-step CTA**

### Blog post structure

1. **Title** + reading time + author + date
2. **TL;DR** — 2-sentence answer up front (AEO move)
3. **Table of contents** for posts > 1,000 words
4. **Body** with H2 sections, code blocks, tables, screenshots
5. **Information Gain block** — the original data point, framework, or insight
6. **Conclusion / next steps**
7. **Related services + related posts**

---

## Image alt text patterns

Alt text is part of accessibility AND SEO. Rules:

| Pattern                                                 | Example                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Describe the image's content + context, not the keyword | `alt="Dashboard view of a GoHighLevel funnel report for a real estate agency"` ✅                        |
| Decorative images use `alt=""` (empty, not missing)     | `<img alt="" />` ✅                                                                                      |
| Charts describe the data                                | `alt="Bar chart showing organic traffic growing from 1,200 to 18,000 monthly visits over six months"` ✅ |
| People photos name them when relevant for E-E-A-T       | `alt="Naxdor co-founder Az Cheema"` ✅                                                                   |
| Never start with "image of" / "picture of"              | `alt="Med spa booking interface on mobile"` not `alt="Image of med spa booking interface"`               |
| Don't stuff keywords                                    | NOT `alt="aesthetic clinic website design agency Manchester SEO booking"`                                |

Every image MUST have explicit `width` and `height` to prevent CLS.

---

## Link text patterns

- **Descriptive, not generic.** "See web development packages" not "Click here".
- **External links open in same tab by default.** Only open in new tab when leaving an active flow (e.g. legal disclaimer in a form).
- **External links carry `rel="noopener noreferrer"`.**
- **Affiliate / sponsored links carry `rel="sponsored"`.** If we partner with GoHighLevel as an affiliate, the affiliate link is `sponsored`.

---

## FAQ writing rules

- Each question is a real question a prospect would search or ask.
- Phrase questions as they'd be typed: "How much does a med spa website cost?" not "What is the typical pricing of a custom website for an aesthetic clinic?"
- Lead the answer with the answer. AI Overviews quote the first sentence of an answer.
- 80–150 words per answer typically. Concrete, not hedged.
- Include numbers, timeframes, ranges where possible.
- The FIRST FAQ on a service/industry page is always the pricing or cost question — it's the most-searched intent.

**Example pattern**:

> **Q: How much does a custom med spa website cost?**
> **A:** Custom med spa websites at Naxdor start at $6,500 and typically land between $8,000 and $18,000 depending on scope. The price covers design, development, mobile optimization, booking integration (with your existing CRM or GoHighLevel), and 30 days of post-launch support. Templated platforms like PBHS cost less upfront but lock you into recurring fees of $300–600/month and a non-distinct design.

---

## Numbers, dates, citations

- **Date every statistical claim** in the sentence: "As of May 2026, 67% of SMBs report …"
- **Source primary research** — Google's docs, official platform docs, named industry reports.
- **Round numbers responsibly**: "around 65,000 SMBs" not "exactly 64,847".
- **Use unambiguous date formats**: "May 23, 2026" or "2026-05-23" — never "5/23/26".
- **Currency always with code on first appearance**: "GBP £4,500" then "£4,500" thereafter.

---

## Author attribution

Every blog post and case study has:

```yaml
---
author: az-cheema # references data/team.ts
publishedAt: 2026-06-01
updatedAt: 2026-06-15 # null if never updated
reviewedBy: az-cheema # optional second person who reviewed for accuracy
---
```

Renders an author byline with photo, name, role, link to `/about/team#az-cheema` (when team page exists), and a "last updated" stamp.

`Person` schema emits with the post. `knowsAbout` array on the Person attests to expertise.

---

## Localization-ready writing

Even though we launch English-only, write so any English-speaking SMB owner (US, UK, Canada, Australia, Ireland, NZ) reads it as written for them, and so future translation is mechanical:

- **Avoid US-specific idioms** when alternatives exist ("home run" → "big win", "Main Street" → "local high street / town centre", "Mom & Pop" → "family-run").
- **Currency**: include code on first reference ("GBP £4,500"). Single locale (en-GB), so no multi-currency pricing schema — `Offer.priceCurrency` is always `GBP`. Figures pending decision gate **D4**; show "+ VAT where applicable" pending **D2**.
- **Dates**: full month name, four-digit year. Never "5/23/26" (ambiguous globally).
- **Distances/measurements**: include both imperial and metric in stats ("a 500-square-foot clinic (46 m²)").
- **Don't say "across America" / "throughout the US"** in service hero copy. Say "across the markets we serve" or name the country in service-page metadata rather than body copy.
- **Phone numbers**: format with `+1` country code on US contact page; same pattern for future regions.
- **Avoid embedding text in images** — translation needs editable copy.
- **Don't use "ZIP code"** ("postal code" works internationally; US-specific copy can use "ZIP" only on location-targeted programmatic pages).

---

## Editorial workflow

1. **Outline** the post against the Information Gain principle — what does this add that the SERP doesn't have?
2. **Draft** in MDX with the structure above.
3. **Self-review** for voice, reading level, link health.
4. **Cross-link** to relevant services, industries, case studies.
5. **Add JSON-LD** via `<JsonLd>` (`Article` + `BreadcrumbList` + `Person` + `Organization`).
6. **Run accessibility + SEO lint** (CI handles most).
7. **Ship** — open PR, get review, merge.
8. **Promote** — internal links from related posts updated, social posts queued.
9. **Monitor** — Search Console impressions, scroll-depth, CTR on internal service link.
10. **Refresh** at 6-month and 12-month marks (or sooner if stats become stale).
