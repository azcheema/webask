# Current Feature

> The active-work tracker. Update on every feature start; mark Completed and add
> a one-line summary to History when the branch is merged.
>
> Per-feature loop: \*\*Document → Branch (`feature/[name]`) → Plan → Implement →
> Test → Iterate → Commit (ask first) → Merge → Delete branch → Update this file
>
> - the phase doc.\*\* See [`ai-interaction.md`](ai-interaction.md).

## Feature Name

**`feature/uk-service-catalogue`** — `data/services.ts` and `data/copy/pricing.ts`
rewritten for the UK. This is the **other half** of the service-page rewrite: that
feature did the MDX bodies and reported the pages done, while the catalogue
rendering around them stayed forked.

## Status

✅ **Merged to `main` at `ad32565` and pushed. CI and Lighthouse (full) both green
on that commit** — every step, including the new `check:blog-uniqueness` audit.
All nine local gates green; e2e **156 passed, 3 skipped**.

```
ad32565  docs: record the catalogue rewrite, and correct the figures in 911af1d
e157e89  fix(copy): stop claiming LCP is enforced in CI, because it is not
15ffcba  feat(content): rewrite the /pricing narrative for the UK
4987087  feat(content): rewrite the service catalogue prose for the UK
```

`d:\naxdor` untouched at `e0e5885`.

### What this feature did

**1. `data/services.ts` — 57% → 0%.** 0 of 8,128 rendering words now match the fork
(was 3,875 of 6,802). 174 rewrites across nine services, then **59 more from an
adversarial verify pass**.

**2. `data/copy/pricing.ts` — 82% → 0%**, and 906 → 1,591 words, because the page
was barely using the doc 02 § 7 market evidence that is its strongest material.

**3. The LCP overclaim, swept repo-wide.** `.lighthouserc.cjs` sets
`largest-contentful-paint` to **`warn`**, yet four separate files claimed it was
enforced. The blog pass caught one instance; it was never generalised. Now fixed in
`data/services.ts`, `data/copy/process.ts`, `data/copy/home.ts` and
`content/services/maintenance-support.mdx`, and CLAUDE.md carries the
`error`-vs-`warn` list so the next writer does not have to rediscover it.

### The two findings worth remembering

🔴 **A price that does not exist was published.** `web-development` FAQ 6 offered an
interim brand kit "for **£1,500**" — a bare currency-symbol swap of the fork's
`$1,500`. **D4 is open**, docs/02 § 7 is the only sanctioned price list, and
`data/services.ts`'s own header says the USD founder confirmation "does not carry
over to the UK market". It was also internally inconsistent: `ui-ux-design` offers
the same kit with no price. Now "quoted as a small add-on".
**A currency-symbol swap is not a price decision, and nothing was checking.**

🔴 **Stage timings that could not sum to their own total.** `web-development` FAQ 1
promised "four to six weeks", then broke it down as 1–2 + 2–3 + 3–6 — which is 6–9
weeks even allowing the stated overlap, and is in fact the _e-commerce_ answer's
arithmetic. The delivery playbook gives Web Dev **4–8 weeks**, Design 1–2, Build
2–6. The copy had silently promised a faster build than the playbook supports.

### Method note — where the defects actually were

69 findings from the verify pass: 8 blockers, 32 major, 29 minor. By lens:
**consistency 31 · modality 22 · fabricated-proof 12 · uk-correctness 4.**

The two biggest categories are both _relational_: consistency defects are only
visible if you read the catalogue **against the MDX rendered on the same page**, and
modality defects only if you read a claim **against its source**. Neither is
detectable in the string itself. The fabricated-proof forms this time were
"most applications move to a Maintenance retainer" and "most apps move to" — the
impersonal register, again — plus `designer-engineer pairing`, which asserts two
staffed disciplines in the FAQ that feeds `FAQPage` JSON-LD. There is one person.

---

# Previous feature — `feature/uk-blog-and-faq-order` (merged, pushed, CI green)

Merged to `main` at `911af1d`; CI and Lighthouse both green on the push.

```
911af1d  docs: record the blog rewrite, the FAQ rule, and the catalogue gap it exposed
06164fd  fix(docs): restore the statutory qualifier on the PECR penalty ceiling
3b70d5f  ci: gate the blog against duplication with the fork source
37e125a  feat(seo): lead every service FAQ with the pricing question
fd25824  feat(content): rewrite the four inherited blog posts for the UK
```

### What that feature did

**1. The four published posts were the service-page defect again — and worse,
because they were `draft: false`.** `ai-voice-agents-roi-service-businesses`,
`custom-website-vs-wordpress-2026`, `local-seo-checklist-2026` and
`what-is-gohighlevel-2026-buyers-guide` each sat **8–44 diff lines** from its live
`naxdor.com` twin across 800–1,300 words — a currency symbol, a city name, a
`/services/crm` → `/services/crm-automation` link. At cutover they would have
published as **same-slug near-duplicates of a live site**.

Now **0.0–0.1%** 5-gram against those twins, 0.2% cross-page. Each carries a UK
argument that cannot exist on the US original:

| Post           | UK wedge                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------- |
| `local-seo`    | DMCC review law (6 Apr 2025) as a **legal** checklist step; UK citations; GBP disclosure  |
| `wordpress`    | The **real crawl of our own** 2020-era `webask.co.uk`; UK cost bands; migration mechanics |
| `voice-agents` | Compliance as a **cost line in the ROI**, not a footnote; inbound-first follows from it   |
| `gohighlevel`  | USD billing → FX exposure for a UK buyer; PECR; the refusal to print an adoption figure   |

**2. `med-spa-marketing-playbook-2026` deleted** (founder decision, 2026-07-28).
`draft: true`, but still a same-slug twin of a live post, and "med spa" is not what
UK clinics call themselves — no UK rewrite could keep the slug, so it was a
replacement, not an edit. Phase 3 Cluster A owns the UK version; doc 08 § 7 has the
question list. `/blog/topic/industry` self-hides while empty (`noindex`).

**3. FAQ ordering — the handoff said 1 of 9 led with pricing. It was 0 of 9.**
Seven were reordered (transform round-tripped; zero-byte delta). `seo` and
`ecommerce-development` had **no pricing FAQ at all** and needed one written from
doc 02 § 7. All three industry pages already complied — the rule was applied when
they were written and never back-fitted to the inherited service catalogue.

**4. New gate: `pnpm check:blog-uniqueness`** (`scripts/check-blog-uniqueness.ts`),
wired into `ci.yml`. Cross-site fail ≥ 5% / warn ≥ 2%; cross-page mirrors the
inherited 85/70. **The fork source is absent on CI**, so the cross-site half is a
local check and the script soft-skips rather than failing — read the script header
before assuming CI covers it.

### Method — and why the cheap check would have shipped four defective posts

Same as the service pages: write → two adversarial lenses per post
(fabricated-proof, UK-correctness) → fix. **51 findings across four posts, one
blocker.** Every one survived a Jaccard score of ~0.1% and a clean British-English
grep. The instructive ones:

- 🔴 **blocker** — "The areas WebAsk covers sit on the [locations page](/locations)"
  advertised an inventory that does not exist: `authoredLocations` is empty until
  the Phase 2 hubs are written.
- **"enforced in CI"** on LCP ≤ 2.0s / INP ≤ 200ms / CLS ≤ 0.05 was **false**.
  `.lighthouserc.cjs` sets LCP to `warn` (the inherited framework-floor calibration
  in CLAUDE.md) and INP cannot be measured in a lab at all. The replacement sentence
  states exactly which of the three fail a build and why the others cannot.
- **A hedge in the source silently hardened into a fact.** doc 04 § 1 says the dead
  footer links "**appear** not to resolve"; the draft asserted "Neither resolved to a
  page." A first-pass human check (mine) verified the URL against doc 04 and
  **passed it** — the overclaim is in the modality, not the fact. Now: "Neither
  target appears anywhere in the sitemap."
- **`lastmod` ≠ publication date.** "published August 2020" was drawn from a sitemap
  `lastmod` of `2020-08-14`; WordPress rewrites that value on any touch.
- **A statistic band collapsed to its unstated midpoint.** A three-year cost was
  computed at 17.5% while the source (doc 08 § 7) gives **15–20%**, with the band
  printed in the StatGrid directly above.
- **Docs 02 and 08 disagree** on the UK freelance band (£800–£3,000 vs £1,500–£3,000)
  and the draft silently took the lower. It now cites both.
- **PECR "£17.5m or 4% of global turnover"** had lost "whichever is higher" — the
  same qualifier-drop the service-page pass caught on DMCC.

⚠️ **The lesson is narrower than "verify".** Every one of these is a _modality_ or
_provenance_ error, not a factual one: a hedge dropped, a band collapsed to a point,
a `lastmod` read as a publication date, a warn-level budget described as enforced.
Grep cannot see any of them, and neither can a reviewer who checks only whether the
underlying fact exists in `docs/`. The question that catches them is **"does the
source say it this strongly?"**

### Files touched

```
content/blog/*.mdx                  4 rewritten, 1 deleted (med-spa)
data/services.ts                    FAQ reorder ×7 + 2 pricing FAQs written
scripts/check-blog-uniqueness.ts    new gate
package.json / .github/workflows/ci.yml   gate registered + wired
CLAUDE.md · docs/06-build-plan.md · docs/context/current-feature.md
```

`d:\naxdor` untouched — read-only, and only ever read for comparison.

---

# Two features back — `feature/uk-service-pages` (merged)

> Kept because its traps and its CI post-mortem are still live knowledge.
> **Merged to `main` and pushed; CI + Lighthouse green on `adaf5ce`.**

```
adaf5ce  fix(a11y): give the footer company-information link a WCAG 2.2 tap target
faf6655  fix(a11y): make the Lighthouse gate diagnosable, and fix what that exposed
c1d7fec  docs: record the commit state of the UK service-page rewrite
13c97f5  feat(content): rewrite the nine service pages for the UK market
```

### The CI failure that turned out to predate that work

`main` was **already red** before the rewrite (verified on `e15147c`): Lighthouse
asserts `accessibility >= 1.0` and every audited URL scored **0.96**. Nobody could
see why, and the reason is worth keeping:

> **`.lighthouseci` is a dot-prefixed directory, and `actions/upload-artifact`
> defaults `include-hidden-files: false`.** The path matched nothing, the step
> logged "No files were found", and `if-no-files-found: ignore` swallowed it. The
> Lighthouse report had **never once uploaded**. Fixed in both workflows, with the
> flag now `warn`.

With the report available the audit was named immediately: **`target-size`**
(score 0, weight 7) on a single footer link — `/legal/company-information`, 138×16
px against a 24×24 minimum — which is why all seven URLs scored identically. The
neighbouring `mailto:` is exempt under WCAG 2.2's "in a sentence or block of text"
carve-out; that one sits alone in a paragraph, so it is not.

Also fixed while there: `lighthouse.yml` was missing `NEXT_PUBLIC_GA_ID`, which
`ci.yml` sets so the consent banner renders. `NEXT_PUBLIC_*` is inlined at build
time, so the two Lighthouse workflows were auditing **different pages** against the
same commit.

### What that feature did

The nine `content/services/*.mdx` bodies were forked verbatim from Naxdor and had
only had a British-spelling pass. Measured, every one sat within **1–4 words** of
its US original — roughly **99% duplicate** across nine transactional pages, which
is exactly what [`../05-seo-strategy-uk.md`](../05-seo-strategy-uk.md) § 2 forbids
("ported pages get rewritten, not find-and-replaced"; duplicate content is solved
with content, never markup).

All nine are now genuinely rewritten. 5-gram Jaccard against the Naxdor originals:

```
web-development 0.0%  ecommerce 0.1%  web-app 0.1%  ui-ux 0.0%  seo 0.0%
mobile 0.1%  crm 0.0%  ai-integration 0.0%  maintenance 0.1%
worst 0.1% · cross-page max 1.9% (the nine did not converge on the same UK material)
```

Each page carries a **distinct** UK argument that cannot exist on a US site:

| Page          | UK wedge                                                                     |
| ------------- | ---------------------------------------------------------------------------- |
| `seo`         | Ranking locally with **no Google Business Profile — including ours**         |
| `crm`         | **PECR by recipient legal form** — sole traders/freemail need consent        |
| `ai`          | Voice classification "unsettled, with a lean"; inbound-first; Ofcom GC6/CLI  |
| `ui-ux`       | Consent-banner equal prominence as a **design** decision; consultation-first |
| `ecommerce`   | DMCC on product reviews; PECR soft opt-in on abandoned-cart mail             |
| `web-dev`     | Real UK cost bands; regulation that prices the _architecture_                |
| `web-app`     | UK GDPR as schema and code; Art. 27; regulated-sector portals                |
| `maintenance` | **Compliance decays** — stale regulatory content inverts the trust position  |
| `mobile`      | Honest "you probably don't need an app" — UK angle **not** forced            |

Titles/descriptions were rewritten to lead with the UK head term
([`../02-uk-market-research.md`](../02-uk-market-research.md) § 4 — UK volume sits on
"web design", not "web development").

### Also fixed in passing

- **`data/services.ts` British English** the sweep missed: `Catalog`, `tokenized` ×3,
  `color(s)` ×4, `rigor`, `Optimization`, `penalized`, `inquiries`, `white-labeled`,
  and `licence fee` ×4 (noun takes `-ce`; `data/industries.ts` already had it right).
- **A dangerous stale comment in `data/services.ts`** claimed the GBP prices were
  "confirmed launch anchors (founder-confirmed 2026-06-02)". That was Naxdor's
  confirmation of USD figures — **D4 is open**. The header now says so.
- **"three business days" → "three working days"** across 9 template/copy files.
  `data/copy/{contact,free-audit}.ts` already used the British form; the rest didn't.
- Six raw-URL anchor texts (`[/industries/x](/industries/x)`) given descriptive text.
- **Docs 02 § 2 and 03 § B1 corrected**: both said the aesthetics licensing scheme is
  "operational in 2026". Doc 08 § 4 says it is **not yet in force as at July 2026**,
  and doc 08 is right. Both now carry a dated correction pointing at it.

### Method, and what it caught

Two adversarial verification passes over all nine pages (write → verify → fix →
re-verify). Worth knowing the failure it caught, because a cheaper check would not
have: the first draft read well and scored 0.1% lexical similarity to Naxdor, yet
carried **29 fabricated-proof claims** — "the clearest inbound case we see", "our own
results", "most businesses that ask us", "our work for clinics". **WebAsk has no
clients, no case studies, no rankings and no audit history**, so those are precisely
the DMCC-category claims Phase 1 exists to strip off the legacy site.

Jaccard similarity cannot see them. Neither can a spell-check. Anything written for
this site needs a pass that asks _"does this sentence imply a customer we don't have?"_

Two factual errors were also caught, both on the compliance claim itself: `seo` placed
£750 in the "active campaign" band two lines after quoting bands that put it in the
"full campaign" one; `mobile` quoted the DMCC penalty without "whichever is higher"
(which inverts it) and added "prize draw" to a statutory list while dropping "cash".

---

# Project-wide — applies to all of the above and everything after

## Gate status — all green

```
typecheck · lint · build · format:check · check:contrast · check:keywords
check:uniqueness · check:redirects · check:blog-uniqueness
                                          156 e2e passing (0 failed, 3 skipped)
```

Run them with `corepack pnpm <script>`. Never claim local Lighthouse green —
unreliable on Windows, trust CI only.

⚠️ **Order matters after a content change: `format` _then_ `build`.** Prettier can
escape a character inside an MDX expression and break a build that passed before it
ran — that is trap 5 below, and it surfaces one commit later if you build first.

⚠️ **`e2e/smoke.spec.ts` was decoupled from marketing copy.** It asserted the H2
"Why most small business websites are quietly bleeding leads" as its proof the MDX
body rendered — so the rewrite broke it. It now asserts `article.prose h2` count
structurally. Don't re-couple a smoke test to a sentence that is expected to change.

⚠️ **`e2e/a11y.spec.ts` was widened, and it must stay in step with Lighthouse.**
It had two structural blind spots that let a Lighthouse-failing defect pass:

1. It asserted **WCAG tags only**. Lighthouse's accessibility category also scores
   axe `best-practice` rules. `best-practice` is now in `TAGS`.
2. It scanned at the **desktop** default while Lighthouse audits mobile. There is
   now a mobile sweep over the same URL set `.lighthouserc.cjs` audits.

**The viewport must match Lighthouse exactly — 412×823.** A first attempt guessed
360×823 and passed while CI failed on the very rule it was added to catch: at 360px
the footer's legal links wrap onto separate lines and gain the spacing `target-size`
wants. Read it from `lhr.configSettings.screenEmulation`, don't guess.

Widening it immediately caught four real defects that had been invisible:
`landmark-complementary-is-top-level` on four templates (an `<aside>` inside
`<main>`; `TableOfContents` already renders its own `<nav>`), `empty-table-header`
on a service page, and `heading-order` twice (`BlogCard` h3 under h1;
`ComparisonColumn` h4 under h2).

## What exists now

- **Fork + brand.** Deep Teal `#0f766e`, three token collisions resolved,
  typographic wordmark as live Geist text, icon set regenerated.
- **Entity + schema.** `parentOrganization` → naxdor.com, `areaServed` United
  Kingdom, `inLanguage` en-GB, `priceCurrency` GBP, `AdministrativeArea` not
  `State`. Regulatory bodies in `knowsAbout`.
- **301 map.** `lib/redirects.ts`, 410 route handlers, `check:redirects`,
  `e2e/redirects.spec.ts`. 18 rules, max 2 hops, 55 assertions.
- **UK locations.** Manchester · Cheshire · Leeds, facts only; hub copy is an
  optional `copy` block so an unauthored hub is unrenderable by construction.
- **Keywords.** 332 UK terms, incl. two clusters no competitor contests
  (`clinic-compliance` 22, `uk-compliance` 15). **`msv`/`kd` are null** — see below.
- **Pages written for the UK.** Home · `/services` (was missing entirely) ·
  `/about` · `/contact` · `/pricing` · `/process` · `/free-audit` ·
  `/legal/company-information` · all three `/industries/*` · all nine
  `/services/*` **MDX bodies** (⚠️ **not** the `data/services.ts` copy around them —
  see Next § 1) · **all four blog posts**.
- **GBP pricing** from the docs/02 § 7 research anchors, with a hedged VAT note.
- **Blog.** 4 posts, all `draft: false`, all UK-rewritten. `med-spa` deleted, so the
  `industry` topic cluster is empty and its archive `noindex`s itself until Phase 3
  Cluster A fills it.
- **FAQ ordering.** Pricing-first on all 9 services and all 3 industries (doc 08 § 7).

## Open questions / blockers

| What                                                         | Who        | Blocks                                                                                                                                                                                                        |
| ------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **D2** — UK VAT (NETP £0 vs. B2B reverse charge)             | Accountant | `/pricing` VAT wording. `VAT_NOTE` in `lib/pricing.ts` is the single place to change                                                                                                                          |
| **D3** — UK GDPR Art. 27 representative                      | Solicitor  | Un-drafting `/legal/{privacy,terms,cookies}` — they are `draft: true` because they were approved for Naxdor under **EU** GDPR, not UK                                                                         |
| **D4** — sign off the GBP price list                         | Founder    | Nothing technically, but a published price is a commitment                                                                                                                                                    |
| Vercel project · Resend domain + SPF/DKIM/DMARC · GSC + Bing | Founder    | Cutover                                                                                                                                                                                                       |
| Real MSV/KD from Ahrefs/Semrush                              | Founder    | Using `data/keywords.json` to **sequence** work. It is a validated targeting map, not a prioritised backlog — volumes are `null` because inventing them would fabricate the numbers that drive prioritisation |

✅ **The old WordPress site is being deleted entirely** (founder decision,
2026-07-28). That closes the DMCC Act 2024 exposure from the fabricated team and
the two identical fake testimonials — no code action needed, and do not raise it
again as an outstanding task.

🚩 **But the ORDER matters.** Deploy to Vercel and switch DNS **before** the
WordPress install comes down. All 13 legacy URLs are indexed today, and the 301
map only starts working once `webask.co.uk` resolves to this app. WordPress first
means the domain serves nothing in between and every indexed URL dies into a 404
until launch. Also: cancelling hosting must not take the domain registration or
nameserver control with it.

**The redirect map is NOT made redundant by the deletion.** It is what captures
those indexed URLs when the new site goes live. `lib/redirects.ts` stays.
The pre-deletion crawl (2026-07-28) is recorded in
[`../04-information-architecture.md`](../04-information-architecture.md) § 5 —
that is now the only surviving record of what the old site served.

## Traps — do not reintroduce

1. **No global trailing-slash redirect.** Next 16 ships `/:path+/` → `/:path+`
   already. The `:path*` version in doc 04's original "Rule 0" matches the root
   and loops the homepage. `check:redirects` blocks it.
2. **`--color-brand-500` is not lifted in dark mode.** White on `#2dd4bf` is
   1.86:1. The lift lives on `--color-ring`.
3. **`--accent` (shadcn neutral hover) ≠ `--color-accent-*` (the warm scale).**
4. **No POM naming in clinic-facing copy** — including euphemisms like
   "anti-wrinkle" or "wrinkle-relaxing", which the ASA treats as implied
   promotion. Editorial discussion of the _rule_ is fine; sales copy is not.
5. **A blank line inside an MDX `{/* */}` comment** terminates the expression
   and breaks the build one commit later, after prettier escapes it.
6. **No claims implying a team.** There is one person. `data/team.ts` says so.
7. **Deep teal has less contrast headroom than the old indigo.** Any
   translucent-on-brand treatment must be checked with `e2e/a11y.spec.ts` —
   `check:contrast` cannot see composited alpha.
8. 🆕 **No claims implying a _client_ either.** No customers, no case studies, no
   rankings, no audit history. This is the single most frequent defect in generated
   marketing copy for this site — the first draft of the nine service pages carried
   **29** instances. Watch for the impersonal forms, which slip through easily:
   "the pattern we see", "most businesses that ask us", "usually", "a large share of".
9. 🆕 **Don't couple a test to marketing copy.** See the `smoke.spec.ts` note above.
10. 🆕 **The aesthetics licensing scheme is NOT in force** (as at July 2026). Docs 02
    and 03 said "operational in 2026" and were wrong; both now carry a dated
    correction pointing at doc 08 § 4. Only the under-18s ban (1 Oct 2021) is law.
11. 🆕 **`upload-artifact` hides dot-prefixed paths.** Any artifact path starting
    with `.` needs `include-hidden-files: true`, and `if-no-files-found` should be
    `warn`, not `ignore` — otherwise the step passes green while uploading nothing.
12. 🆕 **Brand leaks survived the sweep in non-obvious places.** Found on the `/blog`
    H1 ("The Naxdor blog"), the `/industries` meta description, the contact
    autoresponder subject line, and the dev gallery. Grep `Naxdor` across
    `app/`, `components/`, `data/` before cutover and check each hit is either the
    deliberate group disclosure or a code comment.
13. 🆕 **Measure the whole _rendered page_, not the MDX file.** A page is its MDX body
    **plus** whatever `data/*.ts` renders around it. The service-page rewrite scored
    0.0–0.1% and was reported as done while 57% of the catalogue prose on the very
    same URLs stayed byte-identical to the fork source. A per-file similarity number
    is only as honest as its denominator.
    **And measure by importing the module, not by regex over the source.** Three
    successive regex extractors over `data/services.ts` gave three different answers:
    one matched across string boundaries and returned fragments of code as "prose";
    one silently under-counted `includes`; one double-counted `answer` strings as
    bare array items. The parsed-object walk in `scratchpad/field-exact.ts` is the
    only one that reconciles. If two measurements of the same thing disagree, stop
    and find out why before reporting either.
14. 🆕 **The residual defect is _modality_, not fact — and grep cannot see it.**
    All 51 blog findings passed a 0.1% similarity score and a clean British-English
    sweep. What they were: a source hedge ("appear not to resolve") hardened into an
    assertion; a 15–20% band silently collapsed to its 17.5% midpoint; a sitemap
    `lastmod` read as a publication date; a `warn`-level Lighthouse budget described
    as "enforced in CI"; two docs disagreeing on a band and the draft quietly taking
    the lower. Verifying that the underlying fact exists in `docs/` **passes all of
    them**. The question that catches them is **"does the source say it this
    strongly?"** — ask it of every hedge, band, date and enforcement claim.

## Next

**1. `/locations` + the three hubs (Manchester, Cheshire, Leeds).** The largest
unblocked Phase 2 item, and two things now point at it: the local-SEO blog post had
to be written to say WebAsk's own area pages "are not published yet", and a verify
agent found catalogue copy advertising a locations inventory that does not exist —
both because `authoredLocations` is empty. Those sentences are honest today and
stale the moment the hubs land. Cheshire gets the strongest clinic-facing content
(doc 02 § 6).

**2. `data/copy/free-audit.ts` (43%) and `data/copy/process.ts` (67%).** Ask the
verdict question of each before treating either as a defect. `process.ts` is
duplicate **by decision** — docs/01 marks the service-delivery playbook "copy
verbatim" and commit `6306fc1` says so explicitly; only its false LCP-enforcement
sentence was changed. `free-audit.ts` was partly rewritten by that same commit and
no verdict is recorded for the remainder.

Current state of every module measured against the fork, same method (import both,
walk the parsed objects — **not** regex over the source, see trap 13):

```
data/services.ts     8128 words,    0 identical ( 0%)   <- rewritten this feature
data/copy/pricing     1591 words,    0 identical ( 0%)   <- rewritten this feature
data/copy/process     1175 words,  790 identical (67%)   <- DELIBERATE (docs/01, 6306fc1)
data/copy/free-audit   841 words,  359 identical (43%)   <- no verdict recorded
data/copy/home        1356 words,   45 identical ( 3%)   <- properly rewritten
```

Not defects, checked — do not re-investigate: `data/types.ts` (100%, type
definitions), `data/portfolio.ts` (94%, all four entries are `TODO(content-copy)`
and `PortfolioStrip` filters on `isReady`, so nothing renders),
`content/case-studies/example-case-study-template.mdx` (97%, `draft: true` and the
index `noindex`s while empty), `emails/*` (transactional, never indexed).

⚠️ **`data/copy/legal.ts` (85%) still calls the entity "Naxdor … enskild firma"**,
which is wrong for WebAsk. It is gated, not live — privacy/terms/cookies are
`draft: true` pending **D3** — but D3 landing is what unblocks publishing it, so the
rewrite has to happen in the same pass, not after.

**2. `/locations` + the three hubs (Manchester, Cheshire, Leeds).** Now the largest
unblocked Phase 2 item, and the blog rewrite added a reason to prioritise it: the
local-SEO post had to be edited to say WebAsk's own area pages "are not published
yet", because `authoredLocations` is empty. That sentence is honest today and stale
the moment the hubs land.

Then Phase 1 cutover, gated on D2/D3/D4 and the external setup above.

🚩 **When D4 lands, grep the MDX for hard-coded prices.** Bodies quote figures as
prose (`£3,500`, `£750 a month`) and in H2 headings; they do **not** derive from
`data/services.ts`. Changing a price means changing the catalogue **and** the prose.

🚩 **Before DNS:** re-run the redirect assertions against a **Vercel preview**.
Vercel runs the Next server in `minimalMode` where it does not execute redirects
at all — the edge proxy does. Local `next start` and production are different
engines. See `e2e/redirects.spec.ts`.

## History

_(Phase 0 is the first WebAsk feature; nothing merged and closed yet.)_
