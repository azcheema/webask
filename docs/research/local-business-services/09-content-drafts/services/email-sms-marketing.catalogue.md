# 09 — `email-sms-marketing` catalogue draft

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

## 1. Service object (App. I)

### I.4 `email-sms-marketing`

```ts
{
  slug: "email-sms-marketing",
  name: "Email & SMS Marketing",
  category: "grow",
  status: "draft",
  summary:
    "Campaigns written, sent and reported every month — to the people you may lawfully message, with the opt-out in every one.",
  heroSubhead:
    "Campaigns written, sent and reported monthly — only to people you may lawfully message, with an opt-out in every one.",
  whoItsFor:
    "businesses with a list and no time — a CRM that is live and quiet, customers who never hear from them, lapsed customers nobody has asked back.",
  pricing: {
    startingAmount: 395 /* [D4] — working set, 25 September 2026 */,
    currency: "GBP",
    cadence: "monthly",
    usageNote: "SMS segments beyond the plan's allowance are passed through at cost, on a published GBP schedule reviewed quarterly.",
    priceNote:
      "What moves the price: campaigns a month, automations built or reviewed, the state of the consent records you hold, and SMS volume.",
  },
  includes: [
    "Two campaigns a month — email, SMS or both — written to your brief and sent from your platform",
    "One automation built or reviewed each month — welcome, follow-up, rebooking, win-back — with the lawful-basis filter checked before it runs",
    "A reactivation campaign in the first quarter, on the records that can carry it",
    "List hygiene — bounces, opt-outs honoured across every tool, sole-trader and freemail records segmented as individuals",
    "A monthly report tied to replies and bookings, not open rates",
    "Up to 10,000 emails and 200 SMS segments a month in the plan, or 25,000 and 500 on the larger one, with segments beyond that at cost",
  ],
  notIncluded: [
    "Bought, rented or scraped lists — never imported, never sent to",
    "The CRM build itself — that is CRM Automation, priced as a project",
  ],
  primaryCta: { label: "Get a campaign plan", href: "/contact" },
  relatedServiceSlugs: ["crm-automation", "review-management"],
  faqs: [
    "What does the monthly plan cost, and what is in the first month?",
    "Who can we legally email or text in the UK?",
    "Our list is old — can you reactivate it?",
    "Do we own the platform and the list?",
    "Can you send on WhatsApp too?",
    "We are a clinic — what can a follow-up message say?",
    "How many campaigns a month, and who writes them?",
    "What does an SMS cost us?",
  ],
}
```

## 2. FAQ answers (App. Z)

### Z.4 `email-sms-marketing` (R04–R12, R39, R41)

```ts
faqs: [
  {
    question: "What does the monthly plan cost, and what is in the first month?",
    answer:
      "A monthly fee starting at £395 for two campaigns a month, or £695 for four with a landing page each quarter, + VAT where applicable, and no set-up fee. The first month is the consent audit: every record on your list is tagged by legal form and by the basis on which it may be messaged, records without a basis are parked, and nothing is sent until that is done. From month two, two campaigns a month and one automation built or reviewed. What moves the price: campaigns a month, automations, the state of the consent records you hold, and SMS volume, which is metered by the platform and passed through at cost on a published schedule. The size of the list does not move it.",
  },
  {
    question: "Who can we legally email or text in the UK?",
    answer:
      "It turns on the legal form of the recipient, not on what the address looks like. Limited companies, LLPs and public bodies are corporate subscribers and PECR's consent rule does not apply to them. Sole traders, partnerships and anyone on a personal email or number are individuals, and they may only receive unsolicited marketing if they have consented, or if the narrow soft opt-in applies: their details came from a sale or negotiations for a sale, the marketing is for your similar products or services, and they were given a simple way to refuse at collection and in every message since. A text counts as electronic mail under the same rules. The CRM page sets it out in full; this plan applies it to every send.",
  },
  {
    question: "Our list is old — can you reactivate it?",
    answer:
      "Some of it, lawfully. The consent audit in month one sorts the records into those that carry a basis to be messaged and those that do not. The first group gets a reactivation campaign written to bring them back. The second group is not emailed or texted at all, not even to ask: the ICO counts contacting people to ask for consent to marketing as direct marketing, so the request would be the very message you may not send. Those people can be reached by post, by a live call after a Telephone Preference Service check, or at their next visit, and limited companies can simply be emailed. What we will not do is send an offer to everyone who ever gave you a number. The number that survives the audit, not your contact count, is the first honest figure about your list.",
  },
  {
    question: "Do we own the platform and the list?",
    answer:
      "Yes to the list, always. The platform depends on the plan you choose. If your CRM lives in an account you own, we send from it and the subscription stays in your name. If you are on a hosted plan, the sending runs from a sub-account under our licence, you remain the controller of the data, we process it under a written contract, and your contacts, consent records and campaign history are exported to you on request. Either way the consent records are built into the contact records, not held in a spreadsheet of ours, so the lawful basis for every send leaves with you if you leave.",
  },
  {
    question: "Can you send on WhatsApp too?",
    answer:
      "Yes, for the people who asked for it. WhatsApp's own business policy allows messages only to customers who gave you the number and opted in to hearing from you on WhatsApp, so it is never a first-contact channel, and PECR's consent rules sit on top for anything promotional. The consent audit records which channel each contact agreed to, and a campaign goes out by email, text or WhatsApp accordingly. WhatsApp messages are metered by the platform per message and passed through at cost on the published schedule as their own line. For the customers who chose it, WhatsApp can be the channel they answer fastest; for everyone else it is the one that gets you blocked.",
  },
  {
    question: "We are a clinic — what can a follow-up message say?",
    answer:
      "It promotes the consultation, not the treatment. For a clinic every automated email or text is an advert, because the advertising code applies to organic content and not only to paid ads, and a prescription-only medicine may not be advertised to the public; the regulator treats the familiar euphemisms as promotion of the medicine too. So a follow-up says what a consultation covers, who it is with and how to book, and it never names a product. Every clinic campaign is written to that rule before it is written to convert, and where a message is genuinely borderline the advertising regulator's free copy-advice service exists to be used before it goes out.",
  },
  {
    question: "How many campaigns a month, and who writes them?",
    answer:
      "Two on the standard plan, more on a larger one, and we write them. You give a brief, a few lines on what the month is about, and we write each campaign in your voice, check it against the rules for your sector, send it from your platform to the segment that may receive it, and report on it two weeks later. A campaign is a message with a purpose: a seasonal reminder, a new service, a price change, a piece of advice worth sending. One automation a month is built or reviewed alongside, with the lawful-basis filter in front of it. If you would rather write the copy yourself, we edit and send it instead.",
  }, // Q17
  {
    question: "What does an SMS cost us?",
    answer:
      "A text is metered by the platform per 160-character segment and billed in US dollars; we charge it at the rate on our published pound schedule, which we reset each quarter against the exchange rate, so the figure on the schedule is the figure you pay. Each plan carries an allowance of 200 segments a month, or 500 on the larger plan, and the schedule applies beyond it. The plan fee itself stays fixed in pounds for twelve months, so the only line that moves with the exchange rate is the one that moves with what you send. Campaign texts are written to fit one segment in the basic character set wherever the message allows, and each names the sender and carries a way to stop — which the rules require, and which keeps your sending number in good standing.",
  }, // Q4/Q5
],
```
