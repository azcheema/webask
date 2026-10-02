# 09 — `local-business-plans` catalogue draft (the bundle)

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

> **1 October 2026.** Brought into line with the decisions of 28 September 2026 (`00` § 6): the
> figures were adopted as launch prices (the tiers unchanged; the AI module, £149 a month, sits £50
> below the standalone receptionist's £199, `07` § 4; on 1 October 2026 the founder lowered its set-up from
> £499, the standalone figure, to £399), so the
> `[D4]` tags below now read "adopted"; usage is not included in any plan, so every allowance string is
> replaced by the live usage wording; every figure shows "excl. VAT".

## 1. Service object (App. I.7)

### I.7 `local-business-plans` (the bundle)

> **2 October 2026 — reshaped to the problem-first shape** (founder, 1 October 2026; `00` § 6; `13` § 3;
> `docs/strategy/content-guidelines.md`), then checked by four second readers and corrected the same
> day. The starting figure buys the Answer plan only, listed in `includes`; as in `07` § 4 and the
> tiers array, Answer carries a UK number or a divert and WhatsApp in the inbox at cost, so neither is
> an add-on here. The plans above Answer and the AI module are named in `notIncluded`. Six FAQs,
> pricing first, at 60–100 words: the pricing, number and leaving questions answer `03` § 9's bundle
> PAA list; the hosted-or-own, data and clinic questions carry R30–R32 and Q10. The usage-mechanics
> FAQ goes to `/pricing` (`deltas.md` § 4); the start-with-Answer and minimum-term answers move into
> the body and the pricing answer. The earlier version is in git history (`1c499e5`).

```ts
{
  slug: "local-business-plans",
  name: "Local Business Plans",
  category: "automate",
  status: "draft",
  summary:
    "The phone, the reviews and the follow-up, run for you each month in a hosted account — three plans, no minimum term, with the exit written down.",
  heroSubhead:
    "Missed calls get no reply, reviews go unasked, past customers hear nothing. Three monthly plans handle all three for you, starting with the phone, with no platform to learn.",
  whoItsFor:
    "trades, garages, salons and other local businesses whose customer records are names, numbers and jobs.",
  pricing: {
    startingAmount: 199 /* the Answer tier; adopted as the launch price, 28 September 2026 (research 00 § 6) */,
    currency: "GBP",
    cadence: "monthly",
    setupAmount: 249 /* adopted 28 September 2026 — the Answer module; Reputation and Follow-Up carry £647 across their modules */,
    usageNote:
      "Usage is not included: whatever the platform charges for, such as texts and replies, calls, the number, AI minutes and WhatsApp, is billed on top at cost, based on what you use, on a published GBP schedule reviewed quarterly.",
    priceNote: "What moves the price: the plan, and the AI Receptionist module.",
  },
  includes: [
    "A hosted account, with a UK number registered to your business or a divert from the one you already publish",
    "A text within seconds of every missed call, written with you, with no offer in it",
    "One inbox and a phone app for replies and website chat, with WhatsApp at cost for customers who opt in",
    "A booking calendar with confirmations and reminders of each booking",
    "A monthly report: calls missed, texts sent, replies, bookings",
  ],
  notIncluded: [
    "The review programme and your Google profile (Reputation) and campaigns to the people you may lawfully message (Follow-Up) — the plans above Answer; the AI Receptionist, added to any plan; platform usage, billed at cost on what you use",
    "A website, paid ads or social posting — not in any plan",
  ],
  primaryCta: { label: "Choose a plan", href: "/contact" },
  relatedServiceSlugs: ["crm-automation", "web-development"],
  // tiers: § 3 below
  faqs: [
    "How much does a monthly marketing package cost?",
    "Hosted or my own account — which should I choose?",
    "Where is my data, and who is responsible for it?",
    "What happens if I leave — what do I keep?",
    "Can I keep my number, and whose is it?",
    "We are a clinic — is a hosted plan right for us?", // answer: patient data stays in your own account (M1)
  ],
}
```

## 2. FAQ answers (App. Z.7)

### Z.7 `local-business-plans` (R30–R35, R39; Q4/Q5/Q10 decided 25 September 2026)

```ts
faqs: [
  {
    question: "How much does a monthly marketing package cost?",
    answer:
      "From £199 a month on Answer, £399 on Reputation and £749 on Follow-Up. Set-up is paid on signature, per module: £249 for Answer, and £647 in all for Reputation or Follow-Up. The AI Receptionist adds £149 a month and £399 set-up to any plan. Every figure here excludes VAT. Usage is not included: whatever the platform charges for, such as texts, calls, AI minutes and WhatsApp, is billed on top at cost, based on what you use. The plan fee is fixed in pounds for twelve months, with no minimum term.",
  }, // figures adopted 28 September 2026; AI module set-up £399 from 1 October 2026 (00 § 6); Q4/Q5
  {
    question: "Hosted or my own account — which should I choose?",
    answer:
      "Choose a hosted plan when you want the phone, the reviews and the follow-up run for you, with no platform to learn, and you accept the trade: your data sits in a sub-account under our licence, processed for you under a written contract, with the exit written down. Choose your own account when your team will live in it daily, or when your records are patients' records. Everything else we build lives in an account you own, and CRM automation is the service that sets one up.",
  },
  {
    question: "Where is my data, and who is responsible for it?",
    answer:
      "The platform runs in the United States, so the data does not stay in the UK. You are the controller of your customers' data; we are your processor under a written contract, as UK GDPR Article 28 requires, and HighLevel, Inc. is our sub-processor. The transfer relies on HighLevel's certification, as at 24 September 2026, under the UK Extension to the EU-US Data Privacy Framework, with the UK Addendum to the standard contractual clauses behind it. Our contract passes on HighLevel's thirty days' notice of any new sub-processor, and a right to object.",
  },
  {
    question: "What happens if I leave — what do I keep?",
    answer:
      "An export of your contacts, their conversations and the forms they filled, and the option to move the sub-account to an agency account of your own or to another agency. Contacts and their history, calendars, users, websites and funnels come across; automations arrive as drafts; connected accounts such as Google, Facebook and payments are reconnected on your side; add-on subscriptions end with the plan; a number moves where both sides use the platform's own phone service. A domain we assigned does not move. The checklist is written at set-up.",
  }, // Q6 decided 25 September 2026: the assigned-domain sentence
  {
    question: "Can I keep my number, and whose is it?",
    answer:
      "Yes. The recommended set-up is a divert from the number you already publish, so nothing on your van, website or Google profile changes, and switching the divert off puts everything back. If you would rather have a new line, a UK local number is registered to your business on the platform's record, or a UK mobile or freephone number for a business with no UK registration; its rental is billed at cost as usage. Either way the number is registered to your business, not to us.",
  },
  {
    question: "We are a clinic — is a hosted plan right for us?",
    answer:
      "For the phone, the reviews and the profile, possibly; for patient data, no. If your customers are patients, the records you hold are health data, and a hosted account on a US-hosted platform is the wrong place for them. Clinics and dental practices get the same automations built in an account they own, with the advertising rules set out on our industry pages. The plans on this page are for businesses whose contact records are names, numbers and jobs. Talk to us about which parts can run without touching patient records.",
  }, // Q10 decided 25 September 2026 (00 § 6, D9 and D10)
],
```

**Pass 1 self-check (planning session; pass 2 and `counts.mjs` in S7/S8).** _(Written before the reshape of 2 October 2026: the bundle now carries six FAQs at 60–100 words, pricing first, checked by `counts.mjs`; the rest of this paragraph is the record of pass 1.)_ Every answer is plain
text with no markdown, no links and no double quotes inside the string (apostrophes only). Pricing
first in all seven sets; each figure typed once in the entry and once in the pricing answer (all [D4]); each pricing answer names what the fee covers and what
moves it. Word counts by eye sit between about 95 and 135 — S7 verifies 80–150 by script. No
prescription-only medicine named or euphemised (Z.4 Q6 and Z.7 Q8 say "product" and "treatment"
only). No client, result, rating or team implied; watch-list words absent after two removals ("most
customers read" and "most owners never learn" were rewritten). Modality: legal statements match the J
sources (DMCC penalty with "whichever is higher"; CMA208 "not prohibited"; Google's policy as
Google's; PECR regs 19/21 scoped to calls the organisation makes; the UK Extension and Addendum as in
HighLevel's DPA; transfer conditions as in the vendor articles). Items marked `// Q4/Q5`, `// Q8`,
`// Q10`, `// Q17` record decisions taken on 25 September 2026 (00 § 6); the Z.5 distance-sale answer was sourced in S8 (S110, S112, S113, S114) and no longer waits for
statute sourcing in S8. `FAQPage` constraint: every answer stands alone without the page around it.

## 3. `BundleTier` type and the `tiers` array (App. AB.1)

> **28 September 2026 — usage is not included (founder).** Everything the platform meters — texts, calls, AI minutes, WhatsApp messages, email sends, number rental and add-ons — is billed on top at cost, based on what the client uses; on a plan WebAsk hosts, that is the published pound schedule. The included allowances in this file (100 conversations, 300 minutes, 10,000 emails and 200 or 500 segments) are withdrawn; the service pages no longer promise any. Recorded in `00` § 6. Each tier's `usageNote` below needs the same change when the bundle is built. (1 October 2026: done — each `usageNote` below now says usage is not included.)

Everything here waits for the § 4.7 type extension (`tiers`, `setupAmount`, `usageNote`, `status`)
and for D4; every figure is a `[D4]` placeholder. (1 October 2026: the type extension is in
`data/services.ts` — `BundleTier`, `tiers`, `setupAmount`, `usageNote`, `status` — and D4 was adopted
on 28 September 2026, so the figures are launch prices; the entry itself is not yet added. The bundle's own FAQ strings in § 2 feed `FAQPage` JSON-LD on the
service page, from `service.faqs` in `app/(marketing)/services/[service]/page.tsx`; the `/pricing`
markup reads `data/copy/pricing.ts`, which is where the `deltas.md` § 4 FAQs go.) The FAQ strings feed `FAQPage` JSON-LD on `/pricing`
(`app/(marketing)/pricing/page.tsx` L40-44), so they are plain text with no links. Terms that depend
on Q4/Q5 are marked. The pricing page's `PricingTable` (L69) will show the bundle as one row at the
Answer tier's starting figure once the entry exists; tier detail lives on the bundle page and in the
Plans block, never in the table.

### AB.1 Type extension and the `tiers` array (`data/services.ts`, on the `local-business-plans` entry)

```ts
/** A tier of a bundled monthly plan. Rendered on the bundle page and in the /pricing Plans block. */
export type BundleTier = {
  readonly slug: "answer" | "reputation" | "follow-up";
  readonly name: string;
  /** 12–20 words; the card's one line. */
  readonly summary: string;
  /** Monthly starting figure and the set-up component for this tier. Both adopted 28 September 2026. */
  readonly pricing: {
    readonly startingAmount: number;
    readonly setupAmount: number; // set-up is charged per module added, not per tier
    readonly currency: "GBP";
    readonly cadence: "monthly";
    readonly usageNote: string;
  };
  readonly includes: ReadonlyArray<string>; // 4–6, each naming the component service page it draws on
  readonly notIncluded?: ReadonlyArray<string>;
  /** Component service slugs this tier bundles — drives the "each part is a service of its own" links. */
  readonly componentSlugs: ReadonlyArray<string>;
};

// On the local-business-plans entry:
tiers: [
  {
    slug: "answer",
    name: "Answer",
    summary: "The phone handled: every missed call texted back, one inbox, a booking calendar, run for you.",
    pricing: {
      startingAmount: 199, // adopted as the launch price, 28 September 2026 (research 00 § 6)
      setupAmount: 249, // adopted 28 September 2026 — set-up for the hosted sub-account, number or divert, and templates
      currency: "GBP",
      cadence: "monthly",
      usageNote:
        "Usage is not included: whatever the platform charges for, such as texts and replies, the calls on the divert, the number and WhatsApp, is billed on top at cost, based on what you use, on a published GBP schedule reset each quarter against the exchange rate.",
    },
    includes: [
      "A hosted sub-account with a UK number registered to your business, or a divert from the number you publish",
      "Missed-call text-back on every unanswered call, written as a service message with no offer in it",
      "One inbox for text replies and website chat, with WhatsApp added at cost for customers who opt in",
      "A booking calendar with confirmations and reminders that carry appointment details and nothing promotional",
      "The mobile app for whoever holds the phone, and a monthly report of calls missed, texts sent, replies and bookings",
    ],
    notIncluded: [
      "Answering the call itself — the AI Receptionist module",
      "Promotional follow-up to callers — the Follow-Up tier, on a lawful basis first",
    ],
    componentSlugs: ["missed-call-text-back"],
  },
  {
    slug: "reputation",
    name: "Reputation",
    summary: "Everything in Answer, plus the review programme and your Google profile kept up, month to month.",
    pricing: {
      startingAmount: 399, // adopted 28 September 2026
      setupAmount: 647, // adopted 28 September 2026 — Answer's £249 plus the review-programme and profile modules at £199 each
      currency: "GBP",
      cadence: "monthly",
      usageNote:
        "Usage is not included: the texts and emails the review requests are sent by are billed on top at cost, based on what you use, on the same published GBP schedule as the plan's other usage.",
    },
    includes: [
      "Everything in Answer",
      "Review requests to every customer after the job or visit, nobody incentivised, nothing hidden — replies drafted for your approval",
      "Google Business Profile kept up in your own account: categories, services, hours, weekly posts, questions answered",
      "Listings kept consistent on Bing Places, Apple Business Connect and the UK directories that matter, with a sync tool added at cost where it helps",
      "The monthly report adds requests sent, reviews received, rating movement and your profile's own insights",
    ],
    notIncluded: [
      "Removing or suppressing genuine reviews, or creating a profile for an address nobody works from",
    ],
    componentSlugs: ["missed-call-text-back", "review-management", "google-business-profile"],
  },
  {
    slug: "follow-up",
    name: "Follow-Up",
    summary: "Everything in Reputation, plus campaigns written and sent monthly to the people you may lawfully message.",
    pricing: {
      startingAmount: 749, // adopted 28 September 2026
      setupAmount: 647, // adopted 28 September 2026 — adds no set-up module of its own (the consent audit is the first month's work, as on the email-sms-marketing entry), so the tier's set-up figure is Reputation's
      currency: "GBP",
      cadence: "monthly",
      usageNote:
        "Usage is not included: whatever the platform charges for, such as emails, texts and replies, WhatsApp and the sending number, is metered by the platform in US dollars and billed on top at cost, based on what you use, at the rates on the published GBP schedule, reset each quarter against the exchange rate.",
    },
    includes: [
      "Everything in Reputation",
      "A consent audit in the first month: every record tagged by legal form and by the basis on which it may be messaged",
      "Two campaigns a month, written to your brief and sent only to the segment that may receive them, with an opt-out in every one",
      "One automation built or reviewed each month, and a reactivation campaign each quarter on the records that can carry it",
      "A landing page a quarter for whatever you are promoting, wired to the same account",
    ],
    notIncluded: ["Bought, rented or scraped lists — never imported, never sent to"],
    componentSlugs: [
      "missed-call-text-back",
      "review-management",
      "google-business-profile",
      "email-sms-marketing",
      "landing-pages",
    ],
  },
],
// The AI Receptionist is a module on any tier, not a tier: £149 a month plus a £399 set-up inside a plan (07 § 4 —
// £50 a month below the standalone receptionist's £199 because the divert, the number and the inbox are already in
// the plan; the set-up lowered from £499 to £399 by the founder on 1 October 2026, 00 § 6); usage not included, minutes billed at the
// schedule rate. Where the module figure lives in the type is a build
// question (11 AE.1: a `modules?` field on this entry, or a tier-less line in the Plans block); the bundle page and
// the Plans block say "add the AI Receptionist to any plan".
```
