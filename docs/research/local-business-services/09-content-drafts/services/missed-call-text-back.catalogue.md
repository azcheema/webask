# 09 — `missed-call-text-back` catalogue draft

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

## 1. Service object (App. I)

### I.1 `missed-call-text-back`

```ts
{
  slug: "missed-call-text-back",
  name: "Missed-Call Text-Back",
  // category: "grow", status: "draft",
  summary:
    "Every call you miss gets a text back in seconds — a service message, from your own number, into one inbox.",
  heroSubhead:
    "Every missed call texted back in seconds from your own number — a service message, not an offer — into one inbox.",
  whoItsFor:
    "UK local businesses whose phone rings while they are working — trades, garages, salons, practices — and who lose the enquiry to whoever answers first.",
  pricing: {
    startingAmount: 0 /* [D4] */,
    currency: "GBP",
    cadence: "monthly",
    // setupAmount: 0 /* [D4] */,
    // usageNote: "Messages beyond the plan allowance are passed through at cost, on a published GBP schedule reviewed quarterly.",
    priceNote:
      "What moves the price: a new UK number versus a divert, WhatsApp and web chat in the inbox, and how many conversations a month the plan carries.",
  },
  includes: [
    "A divert from the number you publish, or a UK number registered to your business, with the text-back firing on every missed call, evenings included",
    "Reply templates written as service messages — sender named, no offers, a way to stop — with a booking link where you take bookings",
    "One inbox for replies, web chat and, if you want it, WhatsApp, with the mobile app for whoever holds the phone",
    "Set-up, a test from a real phone, and thirty days of tuning, then month to month",
    "A monthly report: calls missed, texts sent, conversations that replied, bookings that followed",
  ],
  notIncluded: [
    "Promotional follow-up to the numbers that called — that is Email & SMS Marketing, and it needs a lawful basis first",
    "Answering the call itself — that is the AI Receptionist plan",
  ],
  primaryCta: { label: "Set up missed-call text-back", href: "/contact" },
  relatedServiceSlugs: ["ai-receptionist", "crm-automation"],
  faqs: [
    "What does the monthly plan cost, and what is in the set-up fee?",
    "Is an automatic text back to a missed call allowed under UK rules?",
    "Do I need a new phone number, or can you use the one on my van and my website?",
    "Who replies when a caller texts back?",
    "Can it text on WhatsApp as well as SMS?",
    "What happens to the numbers it collects, and who owns them?",
    "What does a message cost once I go past the allowance?",
    "What if I want to leave — what do I keep?",
  ],
}
```

## 2. FAQ answers (App. Z)

### Z.1 `missed-call-text-back` (R01–R07, R10, R12, R33, R36, R37, R39)

```ts
faqs: [
  {
    question: "What does the monthly plan cost, and what is in the set-up fee?",
    answer:
      "The plan is a one-off set-up fee and a monthly fee, with the starting figures shown on this page and on the pricing page, + VAT where applicable. Set-up covers the divert or the number registered to your business, the message templates written as service messages, the inbox and app for whoever holds the phone, a test from a real phone, and thirty days of tuning. The monthly fee covers the running of it and an allowance of conversations; messages beyond the allowance are passed through at cost on a published schedule. What moves the price is small: a new number instead of a divert, WhatsApp and web chat in the inbox, and how many conversations a month the plan carries. Your industry does not move it.",
  },
  {
    question: "Is an automatic text back to a missed call allowed under UK rules?",
    answer:
      "It depends on what the text says. The UK's marketing rules, PECR, treat a text as electronic mail, and the regulator's test for whether a message is marketing is about content: a message for customer-service purposes, such as telling someone you missed their call and how to reach you, is a service message, but if it has elements that are direct marketing, even as a side purpose, it counts as marketing. So the text we send says who missed the call, how to reply and how to book, and carries no offer, no discount and no review link. Written that way it carries nothing the test would count as marketing. Add a promotion and it becomes marketing to a number you hold no consent for, which is the one thing the plan will not do.",
  },
  {
    question: "Do I need a new phone number, or can you use the one on my van and my website?",
    answer:
      "You keep the number you publish. The recommended set-up is a divert: unanswered calls forward to a line the platform watches, and the text goes out from a number tied to your business, so nothing on your van, website or Google profile changes. If you want a second line instead, a UK local number is registered to your business on the platform's regulatory record, which needs your business name, registration and a UK business address; a Companies House number means no further documents, and a business not registered in the UK gets a UK mobile or freephone number instead. Either way the number belongs to your business, not to us. Branded sender names only work one way, so a text that expects a reply always comes from a real number.",
  },
  {
    question: "Who replies when a caller texts back?",
    answer:
      "You do, by default, from the inbox on your phone or a screen, and the plan is set up so that whoever is free can answer. The caller's reply lands in one inbox alongside your website chat, the conversation history stays with the contact, and the second person to pick it up can see what the first one said. Nothing replies automatically beyond the first text, because a second automated message is where a service message starts drifting into a sequence. If nobody in your business can watch the inbox, say so on the first call; the honest answer may be that the AI Receptionist plan, which answers the call itself, fits you better than a text-back.",
  },
  {
    question: "Can it text on WhatsApp as well as SMS?",
    answer:
      "The text-back itself goes by SMS, because it answers a call and SMS reaches every mobile without an app. WhatsApp can be added to the same inbox for customers who have given you their number and opted in to WhatsApp messages from you, which WhatsApp's own policy requires before anything is sent there. WhatsApp messages are metered by the platform and passed through at cost on the published schedule, so they appear as their own line. Web chat from your website lands in the same inbox with neither constraint. If your customers already message you on WhatsApp, we switch it on at set-up; if not, it is a setting you can add later.",
  },
  {
    question: "What happens to the numbers it collects, and who owns them?",
    answer:
      "Each number is used to reply to that call and for nothing else unless the caller asks. It is not added to a campaign, a newsletter or a review request, because a number collected from a missed call carries no consent for marketing. You are the controller of the data; on a plan we host, we process it for you under a written contract, and the contact and conversation records are exported to you on request. Your privacy notice needs to say that you process callers' numbers to return their calls and for how long you keep them, and we set the retention in the account to match. If a caller replies STOP, the number is marked so that nothing further is sent.",
  },
  {
    question: "What does a message cost once I go past the allowance?",
    answer:
      "Messages beyond the plan's monthly allowance are passed through at cost. The platform bills them in US dollars; we charge them at the rates on our published pound schedule, which we reset each quarter against the exchange rate, so the figure on the schedule is the figure you pay. The plan fee itself is fixed in pounds for twelve months. A text is billed per 160-character segment in the basic character set, which is why the template is written to fit one segment and avoids emoji and typographic dashes that would double it. The monthly report shows how many texts went out, so you can see the allowance being used before the schedule applies.",
  }, // Q4/Q5
  {
    question: "What if I want to leave — what do I keep?",
    answer:
      "On a divert, leaving is switching the divert off; your published number was never ours. If a number was registered to your business, it stays registered to your business. Your contacts, conversations and forms are exported to you on request. On a plan we host, the sub-account can be transferred to an agency account of your own: contacts with their history, calendars and users move with it, automations arrive as drafts for you to switch on, channels are reconnected on your side, and add-on subscriptions end with the plan. It is a documented move with a checklist rather than a seamless one, and the checklist is written at set-up so leaving is never the first time anyone reads it.",
  },
],
```
