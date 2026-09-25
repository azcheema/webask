# 07 — Pricing ladders (public)

> Purpose: indicative GBP ladders [D4] and their public rationale. Cost and margin live only in the git-ignored `private/07-cost-model.md`. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1);
> **rebuilt in S5 (25 September 2026)**: the ladders below carry indicative figures for the first
> time, every one `[D4]`, derived from the private cost model and placed against the UK comparables
> in § 3. No pound figure here is derived from a dollar figure; no cost, margin or hourly-rate figure
> appears in this file.

## 1. Method (planning § 5.5)

USD cost model → FX exposure as a band → UK comparables → GBP ladders `[D4]` → display rules → D2
question for the accountant. No point-rate conversions anywhere. The design's starting ladders
(text-back £199 + £59/mo incl. 100 conversations; reviews £350 + £79/mo/location; receptionist £750 +
£199/mo incl. 300 min; email/SMS £350 or £650/mo; landing pages from £750 builder / £1,200 code / £1,800
three-step; GBP £250 + £149/mo/location) were hypotheses to rebuild, not inputs to keep, and S5
rebuilt them: the monthly figures moved where the private model showed a hosted sub-account costs
more to run than a self-serve tool's list price implies, and the set-up figures moved to where the
build is paid for on its own. Cost and margin work is in `private/07-cost-model.md` only.

## 2. The FX-and-usage rule for hosted plans

> 💡 Proposal (founder; Q5 and D4 ext.) — the GBP plan fee is fixed for twelve months; usage is
> passed through at cost at the rates on a published GBP schedule, reset against the exchange rate
> when it is reviewed quarterly. No pound figure is ever derived from a dollar figure at a point
> rate; FX exposure is shown in `private/07-cost-model.md` as a band across a dated Bank of England
> range.

Rules that govern both halves of the pricing work (planning App. K): every GBP figure in the public
file carries `[D4]`; no USD figure appears in the public file except a vendor list price attributed
inline with its date; no pound figure is ever derived from a dollar figure at a point rate; the
founder's hourly rate exists only in `private/` as `[founder]`; the starting hypotheses in § 1 were
inputs to react to, not prices to keep.

### 2.1 The range, and how the schedule works

**Finding —** the Bank of England's daily spot series for US dollars into sterling (XUDLUSS), read
on 25 September 2026 for the twelve months from 1 September 2025 [S80]: the pound's low in the window
was **1.3042 on 5 November 2025** and its high **1.3790 on 28 January 2026**; the last observation was
1.3220 on 24 September 2026. The spread between the ends is 5.4% of the high — the amount a fee fixed
in pounds can gain or lose in dollar terms inside a year, which is the exposure the twelve-month rule
accepts and the quarterly schedule limits.

How the schedule works, as proposed (Q5):

- **The schedule is a page** (a section of the bundle page, anchored from every plan's `usageNote`)
  listing a pound rate per unit — per conversation for text-back, per segment for SMS, per minute for
  the receptionist, per message for WhatsApp — with the date it was set and the date it is next
  reviewed.
- **At each quarterly review** every rate is re-set from the platform's dollar rate on that day,
  at the Bank of England spot rate on that day, rounded to the penny. That is what "at cost" means on
  the page; the rounding is stated as rounding.
- **Allowances are numbers, not adjectives**: 100 conversations, 300 minutes, 200 or 500 segments.
  Nothing on the line is "unlimited"; nothing is "free".
- **Plans carry the allowance; the schedule carries the rest.** A client whose usage stays inside
  the allowance never sees the schedule; a client above it sees the units and the pound rate on the
  monthly invoice, in arrears.
- **The schedule's launch rates are set at D4** from the method above on the launch day; this file
  deliberately prints none, because a rate printed today would be a point conversion at a rate that
  will have moved by launch (R29, R39).

## 3. UK comparables (re-read and dated in S4; `04` §§ 2–4; every row as the page printed it)

Every figure is what the page said on the date in the row; none is a judgement of the product, and
none is a figure WebAsk repeats in copy without the same date and attribution. VAT column: what the
page states about VAT, because the display rule in § 6 rests on it.

| Service       | Comparable (read 24 September 2026 unless stated)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Type                                                                         | VAT stated                                                                                               | Source                                                  | Confidence |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------- |
| Text-back     | Call2SMS £37 / £67 / £97 per month for 36 / 135 / 225 conversations, "No contracts"; TextBack Pro £47 / £97 / £247 per month; TextTheCaller £6.49 per month for 50 texts; Marketing 4 Results (managed) "We Charge £198/month"; Hand On Web AI chatbot £199 / £399 / £699 per month; SMB Booster's hub £25 / £49 / £97 per month with text-back "Contact us for current pricing"; Digital Toolbag's text-back "Coming soon"                                                                                                                                                                                                                                                                 | UK self-serve SaaS; two UK agencies                                          | none of the three SaaS pages; Marketing 4 Results not stated; Digital Toolbag "+VAT" on every figure     | `04` Q.1, § 4.2 [S90–S108] [S159] [S161]; N.1 [S81–S89] | 🟡         |
| Reviews       | Feefo Essentials "from £149 /month + VAT" (200 email, 50 WhatsApp, 50 SMS requests) and Enhanced "from £299 /month + VAT"; Trustpilot free (50 invitations) then $99 / $319 / $799 per month billed annually, "12-month commitment… prepaid" (vendor list prices in USD, read 24 September 2026); NiceJob $75 / $125 per month (USD, same date); Podium and Birdeye no prices; Igniyte reputation management "One off set up fee of £1,735 +VAT", "From £1,735+VAT" per month, review management "POA"; Review Management (org.uk) no price, sells removal                                                                                                                                  | UK and US SaaS; two UK agencies                                              | Feefo "+ VAT" on every plan; Igniyte "+VAT"; the rest silent                                             | `04` Q.3, § 4.2 [S177] [S164] [S165]                    | 🟡 / 🔴    |
| Receptionist  | HeyJodie £49 / £99 / £199 per month, "Unlimited" minutes, no set-up fee; BookedSolid £99 per month per four practitioners, "ex VAT"; The VoIP Shop £10 / £30 / £120 per month plus £0.85 per call beyond 0 / 50 / 200; Flamingo Digital "From £40.00/month"; Hand On Web "from £149"; garage-specific: Garage Receptionist £159 / £279 / £449 per month with £249 / £499 / £899 set-up, Electronic Receptionist "Start from £97/month", BayAssist "£697 a month" and "£797 one-time setup"; the site's own bespoke floor, `/services/ai-integration`, from £4,500                                                                                                                           | UK SaaS; UK garage products; one managed agency                              | BookedSolid "ex VAT"; HeyJodie "Prices exclude applicable taxes"; the garage three and the rest silent   | `04` Q.2, § 4.2; `06` L.4.1 [S160] [S171–S173]          | 🟡         |
| Email/SMS     | Zesty Digital "Contact us today for a bespoke quote"; Email-Postman "a clear, fixed price", "No retainers"; UK email agencies £800–£3,000 per month for small businesses (secondary guide, 2026); a per-message retail rate exists in the UK: Phorest 9.5p / 8.2p / 7p per SMS by tier, Timely "9p per SMS" for excess messages; the site's own CRM build, `/services/crm-automation`, from £2,500 as a project                                                                                                                                                                                                                                                                             | two UK agencies (hidden); secondary band; two UK booking products' SMS rates | Zesty and Email-Postman not stated on prices; Phorest and Timely not stated                              | `04` § 4.2, Q.4, Q.6 [S162] [S163] [S179]               | 🟡 / 🔴    |
| Landing pages | Converted no price ("30 MINUTE CALL"); mylandingpage.co.uk "from £750" in its search title (site returned HTTP 500 — unverified); Digital Toolbag website migration "£ 480 + vat", rebuild "£ 3000 + vat"; UK bands £99–£299 templated / £299–£1,500 custom / £1,500–£5,000 bespoke (secondary); the site's own `/services/web-development` from £3,500                                                                                                                                                                                                                                                                                                                                     | one UK agency (hidden); one unverified; secondary band                       | Digital Toolbag "+vat"; Converted not stated                                                             | `04` § 4.2 [S159] [S166] [S167]                         | 🔴 / 🟡    |
| GBP           | Virens "£50 /month\*", "£90 /month\*", "£230 /month\*" per profile, "\*… do not include VAT", one-off optimisation "£195+VAT", new profile "£ 225+VAT", suspension appeal "£295+VAT", minimum term "3 months (GROW & PRO) or 6 months (FOUNDATION)"; XCONS GBP management £295 per month; Wrise local SEO "Seed £395 + VAT pm", "Sprout £795 + VAT pm"; Yell Local SEO "From £300 per month"; SEO Works quote only; the site's own `/services/seo` from £750 per month; doc 02 § 7: local SEO £300–£4,000+ per month, most single-location SMBs £500–£1,500                                                                                                                                 | UK agencies; doc 02 (sourced)                                                | Virens and Wrise stated; XCONS, Yell, SEO Works not stated                                               | `04` § 4.2, N.1, Q.5 [S185] [S186] [S187] [S81–S89]     | 🟡 / 🟢    |
| Bundle        | Yell Amplify "From £299 per month", Accelerate "From £699 per month" (an AI receptionist, listings and reviews management among the products); Wrise "£995 / month + VAT · No setup fee · 3-month minimum"; XCONS Launch £2,950 + £245 per month, Grow £2,950 + £1,495 per month; SMB Booster £25 / £49 / £97 per month (self-serve hub, the £97 tier with an AI phone receptionist); Softomate GHL QuickStart £2,000 + £99 per month, fuller implementation £3,500 + £199 per month; Hand On Web bundles £699–£1,899 per month; trades retainers: The Plumbers Marketing Company "£1,000 +VAT Per month" to "£2,500 +VAT per month" (ads management), SEO Dons "£2,000-3,000/month" upward | UK managed packages; UK GoHighLevel agencies; trades agencies                | Wrise "+ VAT"; Plumbers Marketing Co "+VAT"; Yell, XCONS, SMB Booster, Softomate, Hand On Web not stated | `04` Q.5, N.1, § 4.2; `06` L.3.1 [S174] [S176] [S186]   | 🟡         |

Rationale sentences in the public file follow the pattern already used on `/pricing`: where the tier
sits relative to the self-serve tool a client could buy alone, and relative to the agency band above
it — never "we are cheaper than X", never a competitor named in copy as a comparison.

Two things the table settles for the ladder shape: **a set-up fee beside a monthly fee is the
market's own shape** for managed products (two of three garage products, XCONS, Softomate, Virens'
one-offs), so the two-part display in § 6 is not a novelty; and **the self-serve band is a SaaS
price** — a tool the client runs — while every managed comparable with a published price sits above
£149 a month. WebAsk's monthly plans are managed, and the ladder places them accordingly.

## 4. Ladders (every GBP figure is `[D4]` — a proposal for the brainstorm, not a price)

Display rule for a two-part price (§ 6; the `setupAmount?` + `usageNote?` extension in `11` AE.2):
`Starting at £X per month · £Y set-up · usage at cost` — and where a service has no set-up line, the
existing `Starting at £X per month`. `+ VAT where applicable` follows every figure (`VAT_NOTE`).
"Where it sits" is the public rationale, written to the § 3 rule.

**Missed-Call Text-Back**

| Tier             | In                                                                                                                | Not in                                                  | Indicative GBP [D4]                            | Cadence    | Set-up [D4] |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------- | ---------- | ----------- |
| Text-Back        | divert or UK number; text-back on every missed call; templates; one inbox; app; report; 100 conversations a month | WhatsApp channel; promotional follow-up; call answering | £99 per month [D4]                             | monthly    | £249 [D4]   |
| Text-Back + Chat | Text-Back plus web chat and WhatsApp in the inbox (WhatsApp messages at cost)                                     | as above                                                | £129 per month [D4]                            | monthly    | £249 [D4]   |
| Usage            | conversations beyond 100 (a conversation: one text-back and the replies to it)                                    | —                                                       | on the schedule (§ 2.1), per conversation [D4] | in arrears | —           |

_Where it sits:_ above the self-serve text-back tools (£6.49–£97 a month on the pages read), because
the plan is run for the client — the template written as a service message, the number registered to
the client's business, the inbox watched, the report — and below the one managed UK text-back with a
published price (£198 a month). The set-up covers the divert or number, the KYC bundle, the template
and the test from a real phone; it is the same figure for both tiers because the build is the same.

**Review Management**

| Tier              | In                                                                                                | Not in                                   | Indicative GBP [D4]              | Cadence | Set-up [D4] |
| ----------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------- | ------- | ----------- |
| Reviews           | SMS/email request flows; Google + Facebook in one place; replies drafted; widget; policy; report  | posting replies for you; other platforms | £99 per month per location [D4]  | monthly | £299 [D4]   |
| Reviews + Posting | Reviews plus replies posted for you after approval, and Trustpilot/Checkatrade/Reviews.io watched | —                                        | £149 per month per location [D4] | monthly | £299 [D4]   |

_Where it sits:_ below the UK self-serve review platform's entry price (from £149 a month + VAT, which
buys request volume and seats, not replies), and far below reputation-management retainers (from
£1,735 a month + VAT), which are a different service. The monthly fee buys the human work — the
replies, the policy, the flow that asks everyone and incentivises nobody (R13–R22); the requests
themselves ride on SMS and email at cost. The same price applies in the client's own account (M1) or
hosted (M2), as `02` § 2 proposes; the set-up covers connecting the profiles, the request flows, the
approval workflow and the widget.

**AI Receptionist**

| Tier         | In                                                                                                        | Not in                                | Indicative GBP [D4]                      | Cadence    | Set-up [D4] |
| ------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------- | ---------- | ----------- |
| Receptionist | inbound agent on a divert; booking; summaries; disclosures; fallback; tuning; report; 300 minutes a month | outbound calls; regulated answer sets | £179 per month [D4]                      | monthly    | £599 [D4]   |
| Minutes      | beyond 300                                                                                                | —                                     | on the schedule (§ 2.1), per minute [D4] | in arrears | —           |

_Where it sits:_ inside the band of managed and sector-specific UK products (from about £149 to £449
a month on the pages read, with set-ups from £249 to £899), above the self-serve tools (£10–£199 a
month, some with unlimited minutes), and a long way below the bespoke floor on
`/services/ai-integration` (£4,500). The reasons a managed plan costs more than a self-serve tool are
printed on the page: the disclosure in the first sentence, the fallback to a person, the answer set
approved by the client, tuning, and the report (R23–R29). Minutes are an allowance and a schedule
rate rather than "unlimited", because the platform bills them per minute and a plan that says
unlimited is a plan that hides them. **Q8 for the brainstorm:** a lower entry tier (fewer minutes,
no tuning) or one tier with the reasons printed.

**Email & SMS Marketing**

| Tier    | In                                                                                                                                                       | Not in                      | Indicative GBP [D4]                       | Cadence    | Set-up [D4]                 |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------- | ---------- | --------------------------- |
| Monthly | two campaigns; one automation; list hygiene; report; first-month consent audit; quarterly reactivation; up to 10,000 emails and 200 SMS segments a month | bought lists; the CRM build | £395 per month [D4]                       | monthly    | none (the audit is month 1) |
| Plus    | four campaigns; reactivation each quarter; one landing page a quarter; up to 25,000 emails and 500 SMS segments a month                                  | —                           | £695 per month [D4]                       | monthly    | none                        |
| SMS     | segments beyond the plan's allowance                                                                                                                     | —                           | on the schedule (§ 2.1), per segment [D4] | in arrears | —                           |

_Where it sits:_ below the UK email-agency band reported for small businesses (£800–£3,000 a month, a
secondary source), because the scope is two or four campaigns and one automation rather than a
programme, and above the CRM build's monthly upkeep because the campaigns are written, sent and
reported every month. The two UK email agencies read publish no price at all. There is no set-up fee
because the first month is the consent audit and that is the set-up; the tier is labour-linear, which
is why it carries a client cap (Q26) rather than a lower price. The same price in the client's own
account or hosted.

**Landing Pages**

| Tier              | In                                                                           | Not in             | Indicative GBP [D4] | Cadence | Set-up [D4] |
| ----------------- | ---------------------------------------------------------------------------- | ------------------ | ------------------- | ------- | ----------- |
| Builder page      | one page in GoHighLevel's builder; form/calendar wired; tracking; two rounds | paid media; a site | from £750 [D4]      | project | —           |
| Coded page        | one page in code alongside a site we built                                   | as above           | from £1,250 [D4]    | project | —           |
| Three-step funnel | landing → booking/offer → thank-you, wired and measured                      | as above           | from £1,950 [D4]    | project | —           |

_Where it sits:_ a page is priced as a page — below the custom-site floor on `/services/web-development`
(£3,500) at every tier, inside the "custom" band the secondary guides report (£299–£1,500) for the
builder page and at the foot of their "bespoke" band for the funnel. The one UK landing-page agency
reached publishes no price; the one that advertises "from £750" could not be read. The coded page
costs more than the builder page because it is held to the same budgets as a site (`09` W).

**Google Business Profile**

| Tier            | In                                                                                                     | Not in                                                           | Indicative GBP [D4]                      | Cadence | Set-up [D4] |
| --------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------- | ------- | ----------- |
| Profile         | audit + set-up in your account; categories/services/attributes/hours/photos; weekly posts; Q&A; report | content, links, technical SEO; profiles for ineligible addresses | £129 per month per location [D4]         | monthly | £249 [D4]   |
| Listings add-on | sync to Bing Places, Apple Business Connect, Yell, FreeIndex                                           | —                                                                | at cost (vendor add-on, on the schedule) | monthly | —           |

_Where it sits:_ between the per-profile packages one UK specialist publishes (£50 to £230 a month
per profile, plus VAT) and the local-SEO retainers (from £300 to £395 a month + VAT on the pages
read), and well below `/services/seo` at £750 a month — because this is profile management, not SEO,
and the page says so. The set-up is the audit and the full first pass; the one-off optimisation
figures the market publishes (£195 + VAT on one page) are the shape it follows. Per location,
because the work is per profile. The listings add-on exists only where a platform sub-account exists
(a hosted plan, or the client's own account); otherwise directories are done by hand inside the plan.

**Local Business Plans (bundle)**

| Tier       | In                                                                                                                        | Not in                         | Indicative GBP [D4]                           | Cadence | Set-up [D4]                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------- | ------- | ------------------------------------------------------------------------------ |
| Answer     | hosted sub-account; UK number or divert; text-back; inbox (web chat; WhatsApp at cost); calendar + reminders; app; report | a website; ads; social posting | £199 per month [D4]                           | monthly | £249 [D4] (the Answer module)                                                  |
| Reputation | Answer + review programme + Google Business Profile upkeep                                                                | as above                       | £399 per month [D4]                           | monthly | £647 [D4] (Answer £249 + reviews module £199 + profile module £199)            |
| Follow-Up  | Reputation + two campaigns a month + one automation + quarterly reactivation + a landing page a quarter                   | as above                       | £749 per month [D4]                           | monthly | £647 [D4] (no module of its own — the consent audit is the first month's work) |
| AI module  | AI Receptionist on any tier (300 minutes)                                                                                 | —                              | £149 per month + minutes on the schedule [D4] | monthly | £499 [D4]                                                                      |

_Where it sits, and the arithmetic the page can show:_ each tier costs no more than its parts bought
separately — Answer (£199) is Text-Back + Chat (£129) with the booking calendar, reminders and the
app added; Reputation (£399) is Answer plus Reviews (£99) plus Profile (£129), which would be £427;
Follow-Up (£749) is Reputation plus Email & SMS Monthly (£395), which would be £794, with a builder
page each quarter on top. The module set-ups inside a plan are lower than the standalone set-ups
because the sub-account, the number and the inbox are built once. Against the market: Answer sits
between the self-serve business hubs (£25–£97 a month) and the entry tier of the managed local
packages (from £299); Reputation between that entry tier and the next (from £699); Follow-Up between
the managed packages' upper tier and the "complete" digital-marketing package one UK agency
publishes (£995 a month + VAT). The AI module is priced below the standalone receptionist because
the divert, the number and the inbox are already in the plan.

**Payment terms line for `/pricing` (Q4 confirms):** set-up on signature; plan monthly in advance;
usage in arrears; no minimum term; 30 days' notice; exit as R33. Against the market: the UK
specialists read carry minimum terms of three to six months (one) and twelve-month prepaid contracts
(one review platform); the self-serve tools and the garage products say "no contracts" and "30 days'
notice". No minimum term is proposed because the set-up fee prices the build on its own, so a plan
does not need a lock-in to recover it; the month's notice is the churn cover.

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

### 6.1 Display rules (Q4; every rule is a proposal until D4)

1. **"Starting at £X per month"** for every monthly plan and **"from £X"** for every project, as the
   nine already do (`lib/pricing.ts` `formatGBP`, `cadenceLabel`); the bundle row on `/pricing` shows
   the Answer tier's figure.
2. **Two-part prices need a typed field, not prose.** Recommend `setupAmount?: number` and
   `usageNote?: string` on `ServicePricing` (`11` AE.2 drafts the label: `Starting at £X per month ·
£Y set-up · usage at cost`). The `priceNote` workaround — "Plus £Y set-up. Usage at cost." typed
   into the free-text line — is rejected for three reasons: `priceNote` is rendered in place of an
   upper limit and reads as a caveat, not a price; a figure in prose cannot feed the second `Offer`
   node the set-up needs in JSON-LD (`05` § 5; `11` AE.3) or be formatted by `formatGBP`; and a
   hand-typed figure is the thing `09/deltas.md` says the pricing page must never carry (its bands
   are computed from the catalogue at build time). If the extension is refused at the brainstorm,
   the workaround is used with the figure typed once, in the catalogue entry only.
3. **Per location** where the work is per profile or per site ("per month per location"); the UK
   specialist's "per business profile" is the precedent.
4. **Allowances are printed as numbers** on the tier card and in the FAQ ("100 conversations a
   month", "300 minutes"); **usage is one line** — "usage at cost, on the schedule" — with the
   schedule page anchored from `usageNote`. No pound rate per unit appears anywhere but the schedule.
5. **"+ VAT where applicable" after every figure, exactly** (R38; `VAT_NOTE`), on the card, the table,
   the FAQ answer and the meta description. The market's precedents, from § 3: three of thirteen
   self-serve pages state their VAT position ("+ VAT", "ex VAT", "exclude applicable taxes"); four of
   the eleven UK agencies do ("+VAT", "+ VAT", "do not include VAT"); the rest are silent. Silence is
   the thing the E-Commerce Regulations reg 6(2) forbids ("clearly and unambiguously … whether they
   are inclusive of tax"), so the site states it on every figure and never as "inc. VAT" or "ex. VAT"
   until D2.
6. **Never:** a figure converted from dollars; "unlimited"; "free" for anything the platform bills;
   a set-up fee hidden in a first-month figure; a comparison naming a competitor; a price without
   the tier's inclusions beside it (`uiux-guidelines` § Pricing anchor: includes and not-included on
   every card).

### 6.2 The D2 question for the accountant (extends doc 03 § A2; nothing here is an answer)

Doc 03 § A2 leaves VAT unresolved for the nine: a business not established in the UK has a
registration threshold of zero, B2B supplies of services may fall to the customer under the reverse
charge, and any B2C supply changes the rule. The hosted plans add four questions, put to the
accountant as questions:

1. **The plan fee.** A monthly fee for running a hosted sub-account, invoiced in sterling by a
   Swedish sole trader to a UK business: is it a single supply of services under the general
   place-of-supply rule, with the UK customer accounting for it under the reverse charge — and does
   the platform component (a US vendor's software resold inside the fee) change that
   characterisation?
2. **The usage pass-through.** Messages and minutes billed to WebAsk by the platform in dollars and
   re-invoiced to the client "at cost" on a sterling schedule: are they a disbursement outside the
   scope, or part of WebAsk's consideration that follows the main supply? WebAsk contracts with the
   platform in its own name and the client never does, which the accountant needs to know.
3. **Who counts as a consumer.** Sole traders and partnerships are individuals under PECR (doc 03
   § A5) but businesses for most VAT purposes; the accountant confirms whether any customer group the
   plans are sold to would be a consumer for place-of-supply purposes, because with a zero threshold
   a single B2C supply may trigger registration.
4. **The schedule's figures.** Whether a published sterling schedule of usage rates must show
   VAT-inclusive figures to anyone, and what "+ VAT where applicable" must become once 1–3 are
   answered (doc 03 § A2's "lock the price-display convention" item).

The mirror question — whether the Swedish side has an obligation on the same supplies — is the
Swedish accountant's, and is out of this folder's scope.

## 7. Risks

| Risk                                      | Where it bites                                                                                                                                                        | What the design does about it                                                                                                                                                                              | Gate / owner         |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Overage                                   | A client's usage above the allowance is a cost the plan fee does not carry                                                                                            | Allowances printed as numbers; everything above them on the schedule in arrears; nothing "unlimited"; the report shows units used every month                                                              | D4 ext. (allowances) |
| FX                                        | Every platform line is billed in US dollars; the plan fee is fixed in pounds for twelve months                                                                        | The twelve-month fee accepts the range in § 2.1; the schedule resets quarterly at the Bank of England rate; the private model shows the margin band at both ends and is re-run at each review              | Q5; founder          |
| Vendor price changes                      | The platform "may change" prices without notice; the AI rates carry a "may change" line                                                                               | Monthly re-check (`10` § 2); the schedule mechanism absorbs unit-rate changes at the next review; a plan-fee change waits for the twelve-month reset, stated in the contract                               | founder (Q28)        |
| Fair use on the AI plans                  | The vendor's "unlimited … subject to fair use" wording is the only cap on the $97-a-month AI Employee Unlimited plan (vendor list price as read on 22 September 2026) | The receptionist is modelled on pay-per-use, not the plan, so no client is sold against a cap the vendor can move; the allowance is 300 minutes with the rest on the schedule                              | Q8                   |
| Rebilling limits below the $497 plan      | AI usage cannot be rebilled on the Starter or Unlimited agency plans; phone and email only at cost on Unlimited                                                       | Minutes and messages are an allowance plus a schedule inside WebAsk's own invoice — nothing is rebilled through the platform, so the plan tier is irrelevant to the client's bill                          | `01` § 4.2           |
| The fourth hosted client                  | The agency plan steps from three sub-accounts to unlimited at the fourth client                                                                                       | Stated in the private model as the step it is; no client-facing consequence                                                                                                                                | founder              |
| Churn and month-to-month terms            | No minimum term means a client can leave after one month having paid one fee                                                                                          | The set-up fee prices the build on its own; 30 days' notice; the month-one consent audit is the email plan's set-up                                                                                        | Q4                   |
| Export and exit                           | The vendor gives a hosted client nothing on cancellation; add-ons are cancelled before an eject; automations arrive as drafts                                         | The exit clause is contractual with WebAsk (R33): export on request, transfer or eject with the checklist, channels reconnected on the client's side; the eject commission disclosed in the contract (D11) | D10, D11             |
| WhatsApp service messages from 1 Oct 2026 | Service messages become chargeable beyond the first 1,000 per number per month                                                                                        | WhatsApp is an inbox channel "at cost" on every tier, never an allowance; the schedule carries the per-message rate                                                                                        | `10` § 2 stale-by    |
| Number KYC and sender types               | A new UK long code needs the client's Companies House details; a business not registered in the UK gets mobile or freephone                                           | Divert-first as the default (R36); the KYC bundle in the set-up scope; replies need a long code, so no alphanumeric sender on text-back (R37)                                                              | Q14                  |
| VAT                                       | The display convention and the registration question are unresolved                                                                                                   | "+ VAT where applicable" on every figure until D2; § 6.2's four questions to the accountant before `/pricing` ships                                                                                        | D2 ext.              |
| Labour-linear tiers                       | Email & SMS and the receptionist scale with hours, not with the platform                                                                                              | Client caps (Q26: email/SMS ≈ 6, receptionist ≈ 5) stated as caps, not implied capacity; the private model's hours hypotheses are measured against the first clients before the caps move                  | Q26                  |

## 8. What D4 decides (the founder's list)

1. Each `[D4]` monthly figure and set-up figure in § 4, tier by tier, against the private model's
   implied-hours test and the § 3 placements.
2. The allowances (100 conversations, 300 minutes, 200/500 segments) — numbers, printed.
3. The schedule's launch rates, set on the launch day by the § 2.1 method, and the review cadence
   (quarterly proposed).
4. The two-part display: the type extension or the workaround (§ 6.1 item 2).
5. Payment terms: no minimum term, 30 days' notice, card or bank transfer.
6. The receptionist's shape (Q8): one tier with the reasons printed, or an entry tier.
7. Whether the same price for M1 and M2 stands on Reviews and Email & SMS (`02` § 2).

**Decided 25 September 2026 (`00` § 6) — as the working set, every figure still `[D4]`.** Items 1
and 2: the § 4 figures and allowances are adopted for the S7 drafts and printed in them, each typed
once in the catalogue entry and once in the pricing-first FAQ answer. Item 3: the schedule as § 2.1,
quarterly, launch rates set on the launch day. Item 4: the type extension (§ 6.1 rule 2). Item 5: no
minimum term, 30 days' notice; bank transfer by default, card on request through Stripe UK, no online
checkout. Item 6: one receptionist tier with the reasons printed; call recording off by default and on
by the client's choice. Item 7: the same price for M1 and M2 stands. Three conditions before any
figure leaves `[D4]`: the wallet-line spot-check (`01` § 10.1), the `[founder]` rate (`private/07`
§ 6), and the accountant's answers to § 6.2.

## Sources

`[Sxx]` keys resolve in `10-sources.md`: S80 (Bank of England XUDLUSS, retrieved 2026-09-25); the
Set A, B and C pages as re-read in S4 — S81–S89, S90–S108, S159–S167, S171–S174, S176–S177, S179,
S185–S187; doc 02 § 7 for the local-SEO band; `04` §§ 2–4 and `06` L.3.1, L.4.1 for the tables the
comparables are drawn from.
