# 09 — `ai-receptionist` catalogue draft

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

## 1. Service object (App. I)

### I.3 `ai-receptionist`

```ts
{
  slug: "ai-receptionist",
  name: "AI Receptionist",
  category: "grow",
  status: "draft",
  summary:
    "A voice agent on a monthly plan that answers the calls you miss, books into your diary and hands over when it should — inbound only.",
  heroSubhead:
    "Missed calls answered, booked and handed over when they should be — inbound only, disclosed in its first sentence.",
  whoItsFor:
    "businesses that miss calls they would have won, cannot justify a receptionist, and do not need an agent built to a regulated answer set.",
  pricing: {
    startingAmount: 179 /* [D4] — working set, 25 September 2026 */,
    currency: "GBP",
    cadence: "monthly",
    setupAmount: 599 /* [D4] */,
    usageNote: "Minutes beyond the plan's 300 a month are charged at a published GBP rate, reviewed quarterly.",
    priceNote:
      "What moves the price: minutes a month, calendar and CRM wiring, and how many distinct jobs the agent is scripted to do.",
  },
  includes: [
    "A GoHighLevel Voice AI agent scripted to a narrow job — answer, qualify, book, take a message, transfer",
    "Your published number stays; the agent sits behind a divert — out of hours, on overflow, or on every call",
    "Calendar booking, call summaries to your inbox and CRM record, and a test number to ring before go-live",
    "The AI-identification disclosure in the opening line, the recording disclosure whenever you switch recording on, and an automatic fallback to voicemail or a person if the agent fails",
    "Monthly tuning and a report: answered, booked, transferred, dropped, minutes used",
    "300 minutes a month in the plan, with minutes beyond that at the published pound rate",
  ],
  notIncluded: [
    "Outbound calls of any kind — under PECR and Ofcom's rules that is a scoped project with a consent record, under AI Integration",
    "Answers on regulated subjects — a clinic's treatment questions need the grounded, evaluated build on AI Integration",
  ],
  primaryCta: { label: "Try the receptionist", href: "/contact" },
  relatedServiceSlugs: ["missed-call-text-back", "ai-integration"],
  faqs: [
    "What does the AI receptionist cost per month, and what do the minutes cost?",
    "Is an AI answering my business phone legal in the UK?",
    "Will callers know they are talking to an AI?",
    "What happens when it cannot answer a question?",
    "Does it work with my existing number?",
    "Can it book straight into my diary?",
    "What does it do outside opening hours?",
    "Can it call customers back or chase quotes?",
  ],
}
```

## 2. FAQ answers (App. Z)

### Z.3 `ai-receptionist` (R23–R29, R36, R39)

```ts
faqs: [
  {
    question: "What does the AI receptionist cost per month, and what do the minutes cost?",
    answer:
      "A one-off set-up fee of £599 and a monthly fee starting at £179, + VAT where applicable. Set-up covers scripting the narrow job, the divert or number, the calendar and CRM wiring, the disclosure line, the fallback path and a test number for you to ring. The monthly fee covers 300 minutes a month, tuning and the report. Minutes beyond the allowance are charged at a rate published in pounds and reset each quarter against the exchange rate; the platform bills the underlying minutes in US dollars and we pass them through at the rate on that schedule. What moves the price: minutes a month, how much calendar and CRM wiring you need, and how many distinct jobs the agent is scripted to do.",
  }, // Q8, Q4/Q5
  {
    question: "Is an AI answering my business phone legal in the UK?",
    answer:
      "For inbound calls, the rules that restrict automated telephony do not reach it. PECR's regulation 19 restricts recorded marketing messages sent by automated calling systems, and regulation 21 governs making marketing calls; both are about calls an organisation makes. The receptionist makes no calls: the customer rang you and nothing is being marketed at them. What is unsettled is how an AI voice would be classified if it made marketing calls, which is why the plan never dials out. The recording and the transcript are personal data, so the call is disclosed as recorded at the start, your privacy notice covers it, and a retention period is chosen deliberately. None of this is legal advice, but it is the position we build to.",
  },
  {
    question: "Will callers know they are talking to an AI?",
    answer:
      "Yes, in its first sentence: it names your business, says it is an automated assistant, and offers to book, take a message or put the caller through to a person. We could not find a UK statute that requires an assistant to say it is automated; we do it because a caller who believes they are speaking to a person has been misled, and because an assistant that lets people assume it is human is one you will eventually have to apologise for. Call recording is off unless you switch it on; when it is on, the same sentence says the call is recorded, because the ICO's view is that telling callers up front supports fairness even where consent is not strictly required. You hear the opening line yourself on the test number before the plan goes live.",
  },
  {
    question: "What happens when it cannot answer a question?",
    answer:
      "It says so and hands over. The assistant is scripted to a narrow job: book, take a message, answer the short list of questions you approved, or transfer to a person. Anything outside that list, and anything it is unsure about, ends the same way: it tells the caller it will pass them on, takes their details, and either transfers the call or sends you a message to ring them back. Questions about treatments, legal matters or clinical issues are handed over every time by design. If the assistant itself fails, calls fall back to voicemail or a person automatically. The monthly report counts the handovers and the dropped calls, and a rising dropped line is the signal that the script or the divert needs changing.",
  },
  {
    question: "Does it work with my existing number?",
    answer:
      "Yes. Your published number does not change. The assistant sits behind a divert, which you set to out of hours only, to overflow when the line is engaged, or to every call. Changing the divert is a setting rather than a project, so a sensible start is out of hours, widening it once the call summaries have earned your trust. If you would rather the assistant had its own line, a UK number is registered to your business on the platform's regulatory record, not to us. There is no new number to print on anything unless you choose one, and the divert can be switched off in a minute if you ever want to stop.",
  },
  {
    question: "Can it book straight into my diary?",
    answer:
      "Yes, into the calendar you already run, using the availability rules you set: which services can be booked, which slots, how much notice, and what to say when the diary is full. The booking is confirmed to the caller on the call and, if you want, by a confirmation text that carries the appointment details and nothing promotional. Each call also produces a summary of who called, what they wanted and what happened, into your inbox and onto the contact's record, so a call taken at nine at night is a booking or a message waiting for you at nine the next morning with nothing to retype.",
  },
  {
    question: "What does it do outside opening hours?",
    answer:
      "Exactly what it does inside them, which is the point of the divert. Out of hours is the most sensible way to start: the assistant takes every call after closing, books what can be booked into the next available slots, takes messages for the rest, and sends you the summaries so the morning starts with a list rather than a voicemail queue. It states your opening hours when asked and never pretends someone is in. If you want it to cover overflow during the day as well, that is a change to the divert setting rather than a new plan.",
  },
  {
    question: "Can it call customers back or chase quotes?",
    answer:
      "No, and it never will on this plan. The moment an assistant dials out to market anything, PECR requires the person's specific prior consent if the call counts as automated, a Telephone Preference Service screen if it counts as live — and the unsettled question of which an AI voice is becomes the whole case. The plan has no callback or outbound feature you could switch on by mistake. If outbound calling is genuinely the job, it is a separately scoped project on an evidenced consent record under our AI Integration service, and we will tell you when it is not worth doing. The receptionist's job is the calls you miss, not the calls you want to make.",
  },
],
```
