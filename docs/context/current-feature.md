# Current Feature

> The active-work tracker. Update on every feature start; mark Completed and add
> a one-line summary to History when the branch is merged.
>
> Per-feature loop: \*\*Document → Branch (`feature/[name]`) → Plan → Implement →
> Test → Iterate → Commit (ask first) → Merge → Delete branch → Update this file
>
> - the phase doc.\*\* See [`ai-interaction.md`](ai-interaction.md).

## Feature Name

`feature/uk-service-pages` — the nine service-page bodies rewritten for the UK
(Phase 2 scope, pulled forward). Phase 0 remains code-side complete behind it.

## Status

**Content complete, all gates green, committed — not merged and not pushed.**

Committed as `13c97f5` on `feature/uk-service-pages` (25 files, +1103/−590), which
sits one commit ahead of `main` at `e15147c`. **Not pushed** — `origin` is
`github.com/azcheema/webask.git` and pushing was not authorised. `d:\naxdor`
untouched at `e0e5885`.

### What this feature did

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

## Gate status — all green

```
typecheck · lint · build · format:check · check:contrast · check:keywords
check:uniqueness · check:redirects        149 e2e passing (0 failed, 3 skipped)
```

Run them with `corepack pnpm <script>`. Never claim local Lighthouse green —
unreliable on Windows, trust CI only.

⚠️ **`e2e/smoke.spec.ts` was decoupled from marketing copy.** It asserted the H2
"Why most small business websites are quietly bleeding leads" as its proof the MDX
body rendered — so the rewrite broke it. It now asserts `article.prose h2` count
structurally. Don't re-couple a smoke test to a sentence that is expected to change.

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
  `/legal/company-information` · all three `/industries/*` · **all nine
  `/services/*` bodies** (this feature).
- **GBP pricing** from the docs/02 § 7 research anchors, with a hedged VAT note.

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

## Next

Two candidates, and the first is the same class of problem this feature just fixed:

**1. The four inherited blog posts are same-slug near-duplicates of `naxdor.com`,
and they are `draft: false`.** `ai-voice-agents-roi-service-businesses`,
`custom-website-vs-wordpress-2026`, `local-seo-checklist-2026` and
`what-is-gohighlevel-2026-buyers-guide` each have a twin in
`d:\naxdor\content\blog\`. They will publish as duplicates at cutover. Cheaper to
fix now than once the URLs are indexed. `med-spa-marketing-playbook-2026.mdx` is
`draft: true` so it cannot publish, but it carries 12 POM/"med spa" hits — rewrite
it for the UK or delete it rather than leave it sitting there.

**2. FAQ ordering.** Doc 08 § 7 states the first FAQ on a service/industry/location
page is **always** the pricing question. In `data/services.ts` only 1 of 9 leads
with pricing. Catalogue change, not MDX.

Then Phase 1 cutover, which is gated on D2/D3/D4 and the external setup above.

🚩 **When D4 lands, grep the MDX for hard-coded prices.** Bodies quote figures as
prose (`£3,500`, `£750 a month`) and in H2 headings; they do **not** derive from
`data/services.ts`. Changing a price means changing the catalogue **and** the prose.

🚩 **Before DNS:** re-run the redirect assertions against a **Vercel preview**.
Vercel runs the Next server in `minimalMode` where it does not execute redirects
at all — the edge proxy does. Local `next start` and production are different
engines. See `e2e/redirects.spec.ts`.

## History

_(Phase 0 is the first WebAsk feature; nothing merged and closed yet.)_
