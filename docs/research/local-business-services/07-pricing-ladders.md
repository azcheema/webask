# 07 — Pricing ladders (public)

> Purpose: indicative GBP ladders [D4] and their public rationale. Cost and margin live only in the git-ignored `private/07-cost-model.md`. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1):
> every section below is a **hypothesis** until the session named there confirms, amends or
> rejects it with evidence.

## 1. Method (planning § 5.5)

USD cost model → FX exposure as a band → UK comparables → GBP ladders `[D4]` → display rules → D2
question for the accountant. No point-rate conversions anywhere. The design's starting ladders
(text-back £199 + £59/mo incl. 100 conversations; reviews £350 + £79/mo/location; receptionist £750 +
£199/mo incl. 300 min; email/SMS £350 or £650/mo; landing pages from £750 builder / £1,200 code / £1,800
three-step; GBP £250 + £149/mo/location) are hypotheses to rebuild, not inputs to keep. Cost and margin
work goes to `private/07-cost-model.md` only.

## 2. The FX-and-usage rule for hosted plans

> 💡 Proposal (founder; Q5 and D4 ext.) — the GBP plan fee is fixed for twelve months; usage is
> passed through at cost at the rates on a published GBP schedule, reset against the exchange rate
> when it is reviewed quarterly. No pound figure is ever derived from a dollar figure at a point
> rate; FX exposure is shown in `private/07-cost-model.md` as a band across a dated Bank of England
> range.

Rules that govern both halves of the pricing work (planning App. K):

Rules that govern both halves: every GBP figure in the public file carries `[D4]`; no USD figure
appears in the public file except a vendor list price attributed inline with its date; no pound
figure is ever derived from a dollar figure at a point rate; the founder's hourly rate exists only in
`private/` as `[founder]`; the starting hypotheses in § 5.5 are inputs to react to, not prices to keep.

## 3. UK comparables (App. K.5; every row re-fetched and dated in S4/S5)

| Service       | Comparable (as found in planning)                                                                                                                           | Type                     | Confidence |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| Text-back     | Call2SMS £37 / £67 / £97 per month for 36 / 135 / 225 conversations, no contract; TextTheCaller ~£6.49/mo incl. 50 texts (unverified); Hand On Web from £49 | UK point-solution SaaS   | 🟡         |
| Reviews       | NiceJob $75–$125; Podium ~$399; Birdeye $299–$449 per location; a UK review tool at £32–£49 (vendor unnamed in the comparison)                              | SaaS, mostly USD         | 🟡 / 🔴    |
| Receptionist  | UK managed set-ups £149–£399/mo; entry tiers £39–£80; Hand On Web from £149/mo; hybrids £500–£2,000 (secondary guides)                                      | UK SaaS/managed          | 🟡 / 🔴    |
| Email/SMS     | UK email agencies £800–£3,000/mo for small businesses (secondary); GHL support retainers £99/£199 (a competitor's blog)                                     | secondary                | 🔴         |
| Landing pages | UK bands £99–£299 templated / £299–£1,500 custom / £1,500–£5,000 bespoke (secondary); freelancers £600–£2,500                                               | secondary                | 🔴         |
| GBP           | doc 02 § 7: local SEO £300–£4,000+/mo, most single-location SMBs £500–£1,500; junk tier ~£99; Yell packages ~£120/mo reported                               | doc 02 (sourced) + trade | 🟢 / 🟡    |
| Bundle        | Softomate's "setup £3,500–£5,000, recurring £147–£497/mo" (a competitor's blog claim, not a price list)                                                     | competitor blog          | 🔴         |

Rationale sentences in the public file follow the pattern already used on `/pricing`: where the tier
sits relative to the self-serve tool a client could buy alone, and relative to the agency band above
it — never "we are cheaper than X".

Display precedents from Set B (VAT statements, per-location pricing, from-prices) are in
`04-competitor-analysis.md` § 3 (App. Q.6).

## 4. Ladders (App. K.1; every GBP figure is `£— [D4]` until the private model runs)

Display rule for a two-part price (recommend the `setupAmount?` + `usageNote?` extension in § 4.7):
`Starting at £— per month · £— set-up · usage at cost` — and where a service has no set-up line, the
existing `Starting at £— per month`. `+ VAT where applicable` follows every figure (`VAT_NOTE`).

**Missed-Call Text-Back**

| Tier             | In                                                                                                                | Not in                                                  | Indicative GBP [D4]                                         | Cadence    | Set-up [D4] |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------- | ---------- | ----------- |
| Text-Back        | divert or UK number; text-back on every missed call; templates; one inbox; app; report; 100 conversations a month | WhatsApp channel; promotional follow-up; call answering | £— per month                                                | monthly    | £—          |
| Text-Back + Chat | Text-Back plus web chat and WhatsApp in the inbox (WhatsApp messages at cost)                                     | as above                                                | £— per month                                                | monthly    | £—          |
| Usage            | conversations beyond 100                                                                                          | —                                                       | £— per conversation, published schedule, reviewed quarterly | in arrears | —           |

**Review Management**

| Tier              | In                                                                                                | Not in                                   | Indicative GBP [D4]       | Cadence | Set-up [D4] |
| ----------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------- | ------- | ----------- |
| Reviews           | SMS/email request flows; Google + Facebook in one place; replies drafted; widget; policy; report  | posting replies for you; other platforms | £— per month per location | monthly | £—          |
| Reviews + Posting | Reviews plus replies posted for you after approval, and Trustpilot/Checkatrade/Reviews.io watched | —                                        | £— per month per location | monthly | £—          |

**AI Receptionist**

| Tier         | In                                                                                                        | Not in                                | Indicative GBP [D4]                 | Cadence    | Set-up [D4] |
| ------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------- | ---------- | ----------- |
| Receptionist | inbound agent on a divert; booking; summaries; disclosures; fallback; tuning; report; 300 minutes a month | outbound calls; regulated answer sets | £— per month                        | monthly    | £—          |
| Minutes      | beyond 300                                                                                                | —                                     | £— per minute, published, quarterly | in arrears | —           |

**Email & SMS Marketing**

| Tier    | In                                                                                                     | Not in                      | Indicative GBP [D4]       | Cadence    | Set-up [D4]                 |
| ------- | ------------------------------------------------------------------------------------------------------ | --------------------------- | ------------------------- | ---------- | --------------------------- |
| Monthly | two campaigns; one automation; list hygiene; report; first-month consent audit; quarterly reactivation | bought lists; the CRM build | £— per month              | monthly    | none (the audit is month 1) |
| Plus    | four campaigns; reactivation each quarter; one landing page a quarter                                  | —                           | £— per month              | monthly    | none                        |
| SMS     | segments beyond the plan's allowance                                                                   | —                           | £— per segment, published | in arrears | —                           |

**Landing Pages**

| Tier              | In                                                                           | Not in             | Indicative GBP [D4] | Cadence | Set-up [D4] |
| ----------------- | ---------------------------------------------------------------------------- | ------------------ | ------------------- | ------- | ----------- |
| Builder page      | one page in GoHighLevel's builder; form/calendar wired; tracking; two rounds | paid media; a site | from £—             | project | —           |
| Coded page        | one page in code alongside a site we built                                   | as above           | from £—             | project | —           |
| Three-step funnel | landing → booking/offer → thank-you, wired and measured                      | as above           | from £—             | project | —           |

**Google Business Profile**

| Tier            | In                                                                                                     | Not in                                                           | Indicative GBP [D4]       | Cadence | Set-up [D4] |
| --------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------- | ------- | ----------- |
| Profile         | audit + set-up in your account; categories/services/attributes/hours/photos; weekly posts; Q&A; report | content, links, technical SEO; profiles for ineligible addresses | £— per month per location | monthly | £—          |
| Listings add-on | sync to Bing Places, Apple Business Connect, Yell, FreeIndex                                           | —                                                                | at cost (vendor add-on)   | monthly | —           |

**Local Business Plans (bundle)**

| Tier       | In                                                                                                                        | Not in                         | Indicative GBP [D4]    | Cadence | Set-up [D4]     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------- | ------- | --------------- |
| Answer     | hosted sub-account; UK number or divert; text-back; inbox (web chat; WhatsApp at cost); calendar + reminders; app; report | a website; ads; social posting | £— per month           | monthly | £— (per module) |
| Reputation | Answer + review programme + Google Business Profile upkeep                                                                | as above                       | £— per month           | monthly | £—              |
| Follow-Up  | Reputation + two campaigns a month + one automation + quarterly reactivation + a landing page a quarter                   | as above                       | £— per month           | monthly | £—              |
| AI module  | AI Receptionist on any tier (300 minutes)                                                                                 | —                              | £— per month + minutes | monthly | £—              |

Payment terms line for `/pricing` (Q4 confirms): set-up on signature; plan monthly in advance; usage in
arrears; no minimum term; 30 days' notice; exit as R33.

## 5. The `/pricing` Plans block (App. AB.2)

Everything here waits for the § 4.7 type extension (`tiers`, `setupAmount`, `usageNote`, `status`)
and for D4; every figure is a `[D4]` placeholder. The FAQ strings feed `FAQPage` JSON-LD on `/pricing`
(`app/(marketing)/pricing/page.tsx` L40-44), so they are plain text with no links. Terms that depend
on Q4/Q5 are marked. The pricing page's `PricingTable` (L69) will show the bundle as one row at the
Answer tier's starting figure once the entry exists; tier detail lives on the bundle page and in the
Plans block, never in the table.

**Type addition to `PricingContent` (`data/copy/pricing.ts`):**

```ts
/** The hosted monthly plans, rendered between the price table and "What moves the number". Tier
 * cards are read from the local-business-plans entry's `tiers`; this block owns the narrative. */
readonly plans: {
  readonly eyebrow: string;
  readonly h2: string;
  readonly intro: string;
  /** One line under the tier cards about the AI Receptionist module. */
  readonly moduleNote: string;
  /** The terms line under the cards. Depends on Q4/Q5. */
  readonly termsNote: string;
  /** One line pointing at the bundle page for the hosted-data and exit terms. */
  readonly hostedNote: string;
  readonly cta: CtaLink;
};
```

**Copy:**

```ts
plans: {
  eyebrow: "Monthly plans",
  h2: "Three plans that run the phone, the reviews and the follow-up for you.",
  intro:
    "Everything above is priced as a project or a retainer in an account you own. The plans are the labelled exception: a hosted sub-account we run month to month, with a set-up fee per module, a monthly fee fixed in pounds, and usage passed through at cost. Every component of a plan is priced above as a service in its own right; a plan pays for running them together, from one inbox, for one fee.",
  moduleNote:
    "Add the AI Receptionist to any plan: a narrow inbound agent on the same divert, disclosed as automated in its first sentence, with minutes at a published rate.",
  termsNote:
    "Set-up on signature, the plan monthly in advance, usage in arrears. No minimum term; thirty days' notice ends it. Every figure + VAT where applicable.", // Q4/Q5
  hostedNote:
    "Where your data sits, who is responsible for it, what usage costs in which currency, and exactly what leaves with you if you go are written down on the Local Business Plans page before you choose one.",
  cta: { label: "Compare the plans", href: "/services/local-business-plans" },
},
```

**Render position and shape (`app/(marketing)/pricing/page.tsx`):** a new `<Section padding="lg">`
after the price-table Section (L61-72) and before "What moves the number" (L74). It renders
`SectionHeading` from `pricing.plans`, then a three-column `Grid` of tier cards read from
`getServiceBySlug("local-business-plans")?.tiers`: card = tier name, summary, `Starting at
{formatGBP(startingAmount)} per month · {formatGBP(setupAmount)} set-up`, the first four `includes`,
a "See the plan" link to `/services/local-business-plans#<tier.slug>`; then `moduleNote`,
`termsNote` and `hostedNote` as small text, and the block CTA. The block renders only when the
bundle entry has `status: "live"` (the same gate as the nav and the sitemap), so `/pricing` never
advertises a plan whose page is a draft. JSON-LD stays as it is on `/pricing`; the bundle page emits
the `OfferCatalog` (05 § 5).

## 6. Display rules and the D2 question

_S5 — "Starting at £X" + `VAT_NOTE`; how set-up and monthly are shown given `ServicePricing`
has one figure (`setupAmount?` + `usageNote?` type extension vs a `priceNote` workaround — Q4);
VAT on resold SaaS and metered usage for the accountant (D2 ext.)._

## 7. Risks

_S5 — overage, FX, churn, minimum term, export on exit._

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
