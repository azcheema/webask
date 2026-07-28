# 05 — SEO Strategy (UK)

> The five-pillar bet is inherited intact from
> `d:\naxdor\docs\strategy\seo-strategy.md`. This doc covers only what's **UK-specific or
> new**: how three sites coexist without cannibalising each other, local SEO and Google
> Business Profile, UK citations, and the migration-specific SEO work.
> Authored 2026-07-27.

---

## 1. What's inherited (don't re-derive)

Grounded in Google's **15 May 2026 AI Search optimisation guide**:

1. **AEO and GEO are still SEO** — the same ranking systems power AI Overviews and AI Mode.
2. **E-E-A-T remains core**, amplified for AI surfaces.
3. **Generative features use RAG against the Search index** — index well and you're
   optimising for AI.
4. **No `llms.txt`.** Google does not use it.
5. **No AI-specific schema, no Q&A chunking, no ChatGPT-style rewrites.**
6. **Information Gain matters more than ever.**

The five pillars — E-E-A-T, Information Gain, Entity SEO, Core Web Vitals, topical clusters
— transfer unchanged, as do the on-page checklist, the AEO tactics list, indexation
discipline, the quarterly stale-page sweep and the reporting cadence.

**One UK reinforcement.** Google holds **~92.7% UK search share** (Searchlab/DigitalApplied, 2026) — even more dominant than in the US. AI Overviews appear on ~15–25% of queries, up to
~48% on some April 2026 measures (SQ Magazine). Google AI Overviews is the highest-reach AI
surface in the UK; ChatGPT and Copilot follow, both running on the **Bing index**. So the
Google-first strategy is right, and Bing is not an afterthought.

---

## 2. Three sites, one founder — the relationship

| Site               | Locale    | Market                            |
| ------------------ | --------- | --------------------------------- |
| `naxdor.com`       | en-US     | US-primary, international English |
| `naxdor.se`        | sv-SE     | Sweden                            |
| **`webask.co.uk`** | **en-GB** | **United Kingdom**                |

`naxdor.se` poses no risk — different language, different keyword universe. The real
question is `naxdor.com` (en-US) versus `webask.co.uk` (en-GB): same language, same
services, same founder.

### The ccTLD is the biggest structural asset

`.co.uk` is the **strongest possible UK geo-targeting signal**. Google auto-associates it
with the UK with **zero configuration**, and you cannot override it in Search Console — the
International Targeting country setting was removed in 2022. Bing behaves the same.

The cost is operational: **link equity does not flow from `naxdor.com` to `webask.co.uk`.**
Authority, citations and E-E-A-T are built independently. The domain's age (~2020) is worth
a little; its content history is worth nothing.

### Canonical — the one destructive mistake to avoid

> **Self-canonical every page to its own URL. NEVER cross-canonical
> `webask.co.uk → naxdor.com` (or the reverse).**

Cross-canonicalising tells Google the WebAsk page is a duplicate of the Naxdor page and
drops it from the UK index entirely — defeating the whole project. This is the same rule
already locked for `naxdor.se`, for the same reason.

Keep `canonical == self URL == that page's own hreflang entry` byte-for-byte where hreflang
exists at all: same casing, same trailing-slash policy, same scheme. If canonical and
hreflang disagree, **Google follows the canonical**.

### hreflang — deliberately NOT used

**Recommendation: no hreflang pairing between `naxdor.com` and `webask.co.uk`.**

Three reasons:

1. **Different brand names break the contract.** hreflang declares "the same page, localised
   for a different region". A page branded WebAsk is not the same page as one branded
   Naxdor. It's a different entity offering comparable services.
2. **Google ignores weak hreflang on near-duplicate English content.** Research is explicit:
   creating `en-US`/`en-GB` alternates over essentially identical English is an abuse of the
   annotation — Google discards the weak duplicates and picks one to show everywhere,
   which is the opposite of what we want.
3. **hreflang doesn't solve duplicate content anyway.** It signals relationships; it does
   not make near-identical pages acceptable.

This matches the **Option B** conclusion already reached for `naxdor.se`: treat the sites
as **independent properties, each self-canonical**. Revisit only if a set of pages ever
becomes genuinely 1:1 equivalent — and even then, the brand-name difference argues against.

### Duplicate content is solved with content, not markup

This is the real work, and it is not optional. Ported pages get **rewritten**, not
find-and-replaced. Five sources of genuine difference:

| Source              | Why it's genuinely different                                                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UK regulation**   | ASA/CAP POM ban, the 2026 licensing scheme, GDC/CQC/CMA, UK GDPR/PECR. This content _cannot_ exist on a US site. The single strongest differentiator |
| **UK pricing**      | GBP anchors, VAT treatment, UK market bands                                                                                                          |
| **UK cities**       | Manchester, Cheshire, Leeds (later: Liverpool, Birmingham, London boroughs) — no overlap with Austin/Dallas/Miami                                    |
| **UK CRM reality**  | GHL-led like `naxdor.com`, but UK-specific content: GBP pricing, PECR-compliant automation, UK HubSpot-to-GHL migration (doc 02 § 3)                 |
| **British English** | Not cosmetic — a language-identification and relevance signal, with genuinely different keyword volumes                                              |

The uniqueness discipline already exists in the codebase: the inherited
`scripts/check-programmatic-uniqueness.ts` (warn 70%, fail 85%). **Extend the same thinking
to the cross-site case** as a manual review step — when a WebAsk service page is drafted,
diff it against its `naxdor.com` counterpart and confirm the differences are substantive,
not lexical. Consider adding this as a Phase 1 checklist item rather than a script, since
the two repos aren't co-located.

### Cross-linking and the group relationship

Locked: **openly part of the Naxdor group.**

- **Footer + `/about`** state the relationship in plain English.
- **Schema**: `webask.co.uk/#organization` carries
  `parentOrganization: { "@id": "https://naxdor.com/#organization" }`.
- **Cross-links are normal followed links** — not `nofollow`, not hidden. There is nothing
  to hide, and a disclosed corporate relationship is exactly what Google's "verified
  entities" direction rewards.
- **Reciprocal `subOrganization`** on the Naxdor side is desirable but is a change to
  `d:\naxdor` — logged in
  [`07-naxdor-change-requests.md`](07-naxdor-change-requests.md), not applied.
- The **same founder `Person` node** appears on both sites with the same real `sameAs`
  profiles (LinkedIn, GitHub). This is how the founder's existing credibility legitimately
  transfers.

**Cannibalisation watch.** Low by construction — the ccTLD plus UK-specific content means
the two sites rarely compete on the same query. Monitor: (a) don't publish generic,
location-free English content on WebAsk that competes head-on with a `naxdor.com` page;
(b) keep entity naming consistent across both domains' markup.

---

## 3. Entity SEO — the UK graph

Sitewide `@graph`, emitted in the root layout, referencing one canonical Organization `@id`.

```jsonc
{
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://webask.co.uk/#organization",
  "name": "WebAsk",
  "legalName": "<Swedish registered name>", // NOT an invented UK company
  "parentOrganization": { "@id": "https://naxdor.com/#organization" },
  "url": "https://webask.co.uk/",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "founder": { "@id": "https://webask.co.uk/about#<founder>" },
  "knowsAbout": [
    /* the 9 service areas + UK regulatory expertise */
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["English"],
  },
  // "sameAs": omitted entirely until real profiles exist
  // "address"/"geo": OMITTED — D1 resolved, fully remote, no UK location (§ 4)
}
```

Plus a `WebSite` node with `inLanguage: "en-GB"`.

**Rules carried from Naxdor:**

- Identity is **data-sourced from `data/site.ts`**, never hardcoded — so the graph can't
  drift from the footer.
- `sameAs` holds **company** profiles only; the founder's personal LinkedIn/GitHub live on
  the `Person` node.
- **Leave `sameAs` out entirely rather than point at 404s.**
- Never mix `Person` and `Organization` on one node.

**One new CI consideration.** The inherited `e2e/jsonld.spec.ts` asserts every `{@id}`
reference resolves to a node defined on some crawled route. `parentOrganization` points at
a node on **another host**, so it must be whitelisted or the check will fail. Flagged in
[`01-inherited-from-naxdor.md`](01-inherited-from-naxdor.md) too.

**Per-page nodes** are unchanged from Naxdor's blueprints (`Service` + `Offer` with
`priceCurrency: "GBP"`, `ProfessionalService` on location pages with **`areaServed` only**,
`FAQPage`, `BreadcrumbList`, `Article` with author + `dateModified`).

---

## 4. Local SEO **without** a Google Business Profile

> ✅ **D1 RESOLVED 2026-07-27 — no UK location. WebAsk is fully remote.**
> **There will be no Google Business Profile.** Consequences below. This section replaces
> the GBP runbook that a physical-presence answer would have triggered.

### Why there's no profile, and why that's the correct call

Google requires a **real location with staff present during stated business hours**.
Virtual offices, mailbox services, coworking without permanent staffing, a friend's address
or a PO Box are policy violations — risking suspension and permanent loss of the listing.
There is no UK location, so **there is no eligible profile to create.**

Creating one anyway against a borrowed or nominal address is the single fastest way to lose
local visibility permanently. This is the same honesty override already locked on
`naxdor.com` (2026-06): express reach through `areaServed`, never through a fabricated
address.

### What this costs us — stated plainly

| Lost                     | Impact                                                                                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Map Pack eligibility** | The three-result map block above the blue links is unreachable. For "web design agency Manchester" we can rank organically but never in the map |
| **Google Maps listing**  | No pin, no Maps presence                                                                                                                        |
| **Google reviews**       | The single strongest local trust signal for an SMB choosing an agency, and a top local ranking factor — unavailable on Google                   |
| **Knowledge panel**      | No branded panel from a verified profile                                                                                                        |

This is a real cost and should not be minimised. It means **local search is an organic-only
game**, which raises the bar on the location pages and makes the vertical wedge more
important, not less.

### Consequences that must be implemented

- [ ] **Remove `45 Ridgefield Rd, Oxford OX4 3BU` from `/contact`.** It is currently
      published on the live site. Contact becomes: form + `+44` phone + WhatsApp + email
- [ ] **Organization schema emits `areaServed` only** — no `address`, no `geo`. Identical
      to `naxdor.com`'s locked posture
- [ ] **`ProfessionalService` nodes on location pages: `areaServed` (City → containedInPlace
      → County) only.** Never a fabricated local address
- [ ] The E-Commerce Regs still require a **real geographic address** for the operating
      entity — that is the **Swedish** registered address, published in
      `/legal/company-information`. This is a legal disclosure, not a local-SEO signal, and
      the two must not be confused (doc 03 § A1)

### How we compete locally anyway

Everything below is available without a profile:

1. **Hand-crafted location hubs** (Manchester, Cheshire, Leeds) with genuine local
   substance — named districts, real local industry mix, local FAQs. The inherited
   programmatic quality gate already demands this.
2. **The vertical wedge does the heavy lifting.** `aesthetic clinic website design
manchester` is a blue-link query with a weak map presence anyway — clinics searching for
   an _agency_ are not map-pack-driven buyers the way someone searching "plumber near me"
   is. **Our buyer researches; they don't tap a pin.** This substantially blunts the loss.
3. **Non-Google local signals still work** — Bing Places, Apple Business Connect and
   Foursquare have different eligibility regimes and feed the AI surfaces (§ below). Check
   each one's rules honestly before listing; do not repeat the GBP problem elsewhere.
4. **Reviews move to platforms we _are_ eligible for** — Clutch, DesignRush, Google reviews
   being unavailable makes third-party agency directories more valuable, not less.
5. **Content and links.** With no map lever, topical authority and E-E-A-T carry the local
   ranking weight. This is the argument for shipping the compliance cluster early.

> **Revisit trigger.** If a genuine UK working location is ever established — an office, a
> UK-based hire, a permanent desk — this decision should be reopened immediately. A verified
> profile in the Manchester/Cheshire corridor would be the single highest-value local-SEO
> asset available, and the runbook in
> `d:\naxdor-se\docs\se\09-google-business-profile.md` is a proven template to follow.

> **Reviews rule that still applies:** never buy or incentivise reviews on _any_ platform.
> Beyond platform suspension, in the UK this now runs into the DMCC Act (doc 03 § A6) with
> CMA fines attached.

### UK citations — priority order

Consistent citations correlate with materially higher local visibility (BrightLocal
research cites up to 32%). UK users recognise UK directories; a random international
directory does nothing.

**Priority is reordered from the usual advice, because Google Business Profile — normally
#1 — is unavailable to us (§ 4).** That makes the agency-directory tier disproportionately
important: it is where third-party verification and reviews can actually accrue.

| #     | Citation                                                   | Eligible? | Why                                                                                                                                       |
| ----- | ---------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ~~—~~ | ~~Google Business Profile~~                                | ❌ **No** | No UK location. See § 4                                                                                                                   |
| 1     | **Clutch**, **DesignRush**, **GoodFirms**, **G2**          | ✅        | **Now the top tier.** Agency-category verification, real reviews, feeds `sameAs` and E-E-A-T. These have no physical-presence requirement |
| 2     | **Bing Places**                                            | ⚠️ Check  | Feeds Copilot and, indirectly, ChatGPT Search. **Verify its presence rules first** — do not repeat the GBP problem                        |
| 3     | **Apple Business Connect**                                 | ⚠️ Check  | Feeds Siri and Apple Maps. Same caveat                                                                                                    |
| 4     | **Foursquare**                                             | ⚠️ Check  | Reportedly feeds 60–70% of ChatGPT local recommendations. Same caveat                                                                     |
| 5     | **Yell.com**                                               | ✅        | The most recognised UK directory; accepts service-area listings                                                                           |
| 6     | **FreeIndex**                                              | ✅        | Strong UK SMB recognition                                                                                                                 |
| 7     | **Thomson Local**, **192.com**, **Scoot**, **Cylex**       | ✅        | UK long tail                                                                                                                              |
| 8     | **LinkedIn company page**, **Companies-adjacent profiles** | ✅        | Entity reinforcement; feeds `sameAs`                                                                                                      |

> ⚠️ **Honesty check before every listing.** Several of these ask for a business address.
> Where a platform requires a _presence_ we don't have, **don't list** — the same rule that
> rules out GBP. Where it accepts a service-area or remote listing, use the **Swedish
> registered address** (the real one, per doc 03 § A1), not an invented UK one.

Every entry must match the site NAP exactly. **NAP here means Name + Phone + Website** —
there is no UK address to be consistent about, and that's fine, provided it's consistently
absent rather than inconsistently invented.

> Tier 2–4 are the 2026 shift: AI surfaces source local recommendations from a different set
> of databases than classic local SEO assumed. But **tier 1 is where our effort goes**,
> because it's where we're both eligible and where reviews can accumulate — and with Google
> reviews unavailable, third-party agency reviews carry more weight than they otherwise would.

---

## 5. Migration SEO

The platform migration work is in [`04-information-architecture.md`](04-information-architecture.md)
§ 5. The SEO-specific items:

**Before cutover**

- [ ] Full crawl of the live WordPress site (Screaming Frog or equivalent) — the redirect
      bible. The sitemap lists 13 URLs; WordPress typically exposes more (author/date/tag
      archives, feeds, attachment pages, paginated variants)
- [ ] Export existing titles, meta descriptions and alt text for reference
- [ ] Baseline GSC data: impressions, clicks, top queries, indexed page count
- [ ] Verify the trailing-slash sweep works without a redirect loop

**At cutover**

- [ ] Full 301 map live, including catch-all families
- [ ] `/sample-page/` returns **410**, not 404, not 200
- [ ] **All fabricated content removed** (doc 03 § A6 — this is the legal gate, not just SEO)
- [ ] `robots.txt` and `sitemap.xml` serving from the new stack
- [ ] Canonicals self-referencing on every page

**After cutover**

- [ ] Resubmit the sitemap index in GSC + Bing Webmaster Tools
- [ ] Watch GSC Coverage **daily for the first week** for unexpected 404s
- [ ] Script a check that all 13 legacy URLs resolve 200 or 410 as intended
- [ ] Expect a **2–4 week** ranking wobble, then stabilisation — usually higher, on improved
      Core Web Vitals
- [ ] Keep the redirects for **≥ 12 months**

---

## 6. Search Console, Bing and indexation

- **Own GSC property** for `webask.co.uk` — domain property via DNS TXT is cleanest.
- **Own Bing Webmaster Tools property.** Both auto-target the UK from the ccTLD; there is
  nothing to configure and nothing you _can_ configure.
- **Own `sitemap.xml` and `robots.txt`** — a sitemap can only list URLs on the host serving it.
- Alerts on: manual actions, coverage errors, Core Web Vitals, security issues.
- **hreflang errors no longer surface in GSC** (the International Targeting report is gone).
  Not an issue here since we're not using hreflang — but noted so nobody goes looking.
- **Indexation discipline inherited**: programmatic pages ship `noindex, follow` and earn
  promotion against the quality gate. Quarterly stale-page sweep: zero impressions after
  6 months → `noindex` + review.

---

## 7. What success looks like

Leading indicators, from the inherited measurement framework (north star: **qualified
discovery calls booked per month**):

| Horizon                | Signal                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Weeks 1–4 post-cutover | Coverage clean, no unexpected 404s, Core Web Vitals in "Good", legacy URLs all resolving                                                    |
| Months 2–3             | Impressions appearing on service + city terms (Manchester, Cheshire, Leeds). **No Map Pack — organic blue links only**                      |
| Months 3–6             | Compliance-cluster posts earning impressions on long-tail regulatory queries — the earliest place a zero-authority domain can genuinely win |
| Months 6–12            | Position movement on `[service] [city]` terms; first reviews accumulating; programmatic batch 1 promoted to index                           |

**Where to expect the first real wins:** not "seo agency uk" (unwinnable at launch), but the
compliance long-tail — "advertising rules for aesthetic clinics uk", "GDC compliant dental
website", "ASA rules anti-wrinkle injections". Low competition, high intent, and content we
can write more credibly than anyone competing for it.
