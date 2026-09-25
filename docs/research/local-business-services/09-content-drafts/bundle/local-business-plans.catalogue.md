# 09 — `local-business-plans` catalogue draft (the bundle)

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

## 1. Service object (App. I.7)

### I.7 `local-business-plans` (the bundle)

```ts
{
  slug: "local-business-plans",
  name: "Local Business Plans",
  category: "automate",
  status: "draft",
  summary:
    "The front desk, the follow-up and the reviews, run for you in a hosted GoHighLevel sub-account — three plans, month to month, with a written exit.",
  heroSubhead:
    "Missed calls, follow-up and reviews run for you in a hosted sub-account — month to month, with the exit written down.",
  whoItsFor:
    "UK local businesses that want the phone, the follow-up and the reviews handled without running a platform themselves — and who want to know exactly what leaves with them if they go.",
  pricing: {
    startingAmount: 199 /* [D4] — the Answer tier; working set, 25 September 2026 */,
    currency: "GBP",
    cadence: "monthly",
    setupAmount: 249 /* [D4] — the Answer module; Reputation and Follow-Up carry £647 across their modules */,
    usageNote: "Messages and minutes beyond each plan's allowance are passed through at cost on a published GBP schedule.",
    priceNote:
      "What moves the price: the tier, a new UK number versus a divert, the AI Receptionist module, and usage.",
  },
  includes: [
    "Answer — hosted sub-account, UK number or divert, missed-call text-back, one inbox (web chat; WhatsApp at cost), booking calendar and reminders, the app, a monthly report",
    "Reputation — everything in Answer, plus the review programme and Google Business Profile upkeep",
    "Follow-Up — everything in Reputation, plus two campaigns a month, one automation, a quarterly reactivation and a landing page a quarter",
    "AI Receptionist as an optional module on any plan, plus minutes",
  ],
  notIncluded: [
    "A website — bring yours, or see Web Development",
    "Paid ads and social posting — the tools sit in the account; we run no ad campaigns and write no social posts",
  ],
  primaryCta: { label: "Choose a plan", href: "/contact" },
  relatedServiceSlugs: ["crm-automation", "web-development"],
  // tiers: [{ name, summary, includes[] } × 3] — § 4.7 type extension
  faqs: [
    "What do the plans cost, and what is the set-up fee?",
    "Hosted or my own account — which should I choose?",
    "Where is my data, and who is responsible for it?",
    "What happens if I leave — what do I keep?",
    "What do messages and minutes cost beyond the allowance?",
    "Can I start with Answer and add modules later?",
    "Is there a minimum term?",
    "We are a clinic — is a hosted plan right for us?", // answer: patient data stays in your own account (M1)
  ],
}
```

## 2. FAQ answers (App. Z.7)

### Z.7 `local-business-plans` (R30–R35, R39; Q4/Q5/Q10 flagged)

```ts
faqs: [
  {
    question: "What do the plans cost, and what is the set-up fee?",
    answer:
      "Each plan has a monthly fee and a set-up fee per module: Answer from £199 a month with a £249 set-up, Reputation from £399 with £647 across its modules, Follow-Up from £749 with the same £647, and the AI module £149 a month with a £499 set-up, + VAT where applicable. Answer covers the hosted sub-account, the number or divert, missed-call text-back, the inbox, the booking calendar and the report; Reputation adds the review programme and Google Business Profile upkeep; Follow-Up adds campaigns, an automation a month and a landing page a quarter. The AI Receptionist module can be added to any plan. Usage beyond each plan's allowance is passed through at cost on a published schedule. What moves the price: the tier, a new number instead of a divert, the AI module, and what you use.",
  },
  {
    question: "Hosted or my own account — which should I choose?",
    answer:
      "Own it if you can. Everything else we build lives in an account you own, and the CRM page is where that is done. Choose a hosted plan when you want the phone, the follow-up and the reviews run for you with no platform to learn and no subscription to manage, and when you are comfortable with the trade that involves: your data sits in a sub-account under our licence, processed for you under a written contract, with the exit written down. Choose your own account when the system is core to how you sell, when your team will live in it daily, or when your records are patients' records, which never go into a hosted plan.",
  },
  {
    question: "Where is my data, and who is responsible for it?",
    answer:
      "You are the controller of your customers' data; we are your processor under a written contract, as UK GDPR Article 28 requires, and HighLevel, Inc. processes it for us as our sub-processor. The platform runs in the United States: the transfer relies on HighLevel's certification, as at 24 September 2026, under the UK Extension to the EU-US Data Privacy Framework, with the UK Addendum to the standard contractual clauses behind it — terms in HighLevel's own data processing agreement that our contract with you passes on, including thirty days' notice of any new sub-processor and a right to object. We will not tell you the data stays in the UK, because it does not.",
  },
  {
    question: "What happens if I leave — what do I keep?",
    answer:
      "Two things: an export, and the option to take the sub-account with you. The export gives you your contacts, their conversations and the forms they filled, in files that open without the platform. The transfer moves the sub-account to an agency account of your own or to another agency: contacts with their history, calendars, users, websites, funnels and API keys come across; every automation arrives set to draft for you to switch on; connected accounts such as Google, Facebook and payments are reconnected on your side; any add-on subscription is cancelled first and set up again by you; and a phone number moves where both sides use the platform's own telephony. The checklist for all of that is written at set-up, not at the exit.",
  },
  {
    question: "What do messages and minutes cost beyond the allowance?",
    answer:
      "At cost, on a schedule you can read before you send anything. The platform bills texts, calls, AI minutes and WhatsApp messages in US dollars; we publish a schedule in pounds, reset it each quarter against the exchange rate, and charge usage beyond your plan's allowance at the rates on it, with nothing added. Inside the allowance there is nothing to pay. The plan fee is fixed in pounds for twelve months, so the exchange rate reaches you only through the usage line, and the monthly report shows the allowance being used up before the schedule applies — no surprise on the invoice.",
  }, // Q4/Q5 decided 25 September 2026 (00 § 6); figures still [D4]
  {
    question: "Can I start with Answer and add modules later?",
    answer:
      "Yes, and that is the order we recommend. Answer is the cheapest plan to run and the easiest to leave, and its report tells you whether the others are worth adding: if the text-back is producing replies and bookings, the review programme and the profile upkeep in Reputation are the next step; if the list is growing, the campaigns in Follow-Up are. The AI Receptionist module can be added to any plan when the missed-call count in the report says the phone needs answering rather than texting. Moving up is a change to the plan and a set-up fee for the new module, not a new contract.",
  },
  {
    question: "Is there a minimum term?",
    answer:
      "No. Set-up is paid on signature, the plan monthly in advance and usage in arrears, and thirty days' notice ends it. The plan fee is fixed in pounds for twelve months, which protects you from the exchange rate rather than binding you to the term. We ask for the first month to be a proper set-up, with the divert tested from a real phone and the templates approved, because a plan cancelled before it has run has taught nobody anything, but nothing in the terms requires you to stay. If you leave, the exit works as described on this page, with the export and the transfer checklist.",
  }, // Q4/Q5 decided 25 September 2026 (00 § 6); figures still [D4]
  {
    question: "We are a clinic — is a hosted plan right for us?",
    answer:
      "For the phone, the reviews and the profile, possibly; for patient data, no. If your customers are patients, the records you hold are health data, and a hosted sub-account on a US-hosted platform is the wrong place for them. Clinics and dental practices get the same automations built in an account they own, with the consent design and the advertising rules those pages set out, including the rule that no message names, or hints at, a prescription-only medicine. The plans on this page are for businesses whose contact records are names, numbers and jobs. Talk to us about which parts of a plan can run for a practice without touching patient records, and which cannot.",
  }, // Q10 decided 25 September 2026 (00 § 6, D9 and D10)
],
```

**Pass 1 self-check (planning session; pass 2 and `counts.mjs` in S7/S8).** Every answer is plain
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

Everything here waits for the § 4.7 type extension (`tiers`, `setupAmount`, `usageNote`, `status`)
and for D4; every figure is a `[D4]` placeholder. The FAQ strings feed `FAQPage` JSON-LD on `/pricing`
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
  /** Monthly starting figure and the set-up component for this tier. Both [D4]. */
  readonly pricing: {
    readonly startingAmount: number; // [D4]
    readonly setupAmount: number; // [D4] — set-up is charged per module added, not per tier
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
      startingAmount: 199, // [D4] — working set, 25 September 2026
      setupAmount: 249, // [D4] — set-up for the hosted sub-account, number or divert, and templates
      currency: "GBP",
      cadence: "monthly",
      usageNote:
        "Includes 100 conversations a month; messages beyond it are passed through at cost on a published GBP schedule, reset each quarter against the exchange rate.",
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
      startingAmount: 399, // [D4]
      setupAmount: 647, // [D4] — Answer's £249 plus the review-programme and profile modules at £199 each
      currency: "GBP",
      cadence: "monthly",
      usageNote:
        "Review requests by text and email are passed through at cost on the same published GBP schedule as the plan's other usage.",
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
      startingAmount: 749, // [D4]
      setupAmount: 647, // [D4] — adds no set-up module of its own (the consent audit is the first month's work, as on the email-sms-marketing entry), so the tier's set-up figure is Reputation's
      currency: "GBP",
      cadence: "monthly",
      usageNote:
        "Includes up to 10,000 emails and 200 text segments a month; campaign texts beyond that and WhatsApp messages are metered by the platform in US dollars and passed through at cost at the rates on the published GBP schedule, reset each quarter against the exchange rate.",
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
// The AI Receptionist is a module on any tier, not a tier: £149 a month plus a £499 set-up inside a plan [D4]
// (07 § 4 — below the standalone £179 / £599 because the divert, the number and the inbox are already in the plan),
// 300 minutes a month, minutes beyond at the schedule rate. Where the module figure lives in the type is a build
// question (11 AE.1: a `modules?` field on this entry, or a tier-less line in the Plans block); the bundle page and
// the Plans block say "add the AI Receptionist to any plan".
```
