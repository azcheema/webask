# 09 — `garages-mot-centres` industry entry draft

> Pasteable for `data/industries.ts` after the brainstorm and after its doc 03 Part B section exists.
> Every `£` figure is `[D4]`. Planning notes and the pass-1 self-check are in `../self-checks.md`.

## 1. `data/industries.ts` entry

### AN.1 `data/industries.ts` entry

```ts
{
  slug: "garages-mot-centres",
  name: "Garages & MOT Centres",
  audienceType:
    "Independent garages, MOT test centres, tyre and exhaust centres, mobile mechanics and small servicing chains in the United Kingdom",
  meta: {
    title: "Websites and Reminders for UK Garages & MOT Centres", // 51 characters
    description:
      "Missed-call text-back, MOT and service reminders, reviews and websites for UK garages — reminders that stay service messages, prices shown as the Code says.", // 156 characters
  },
  hero: {
    h1: "The car is on the ramp. The phone is ringing. Neither can wait.",
    subhead:
      "Missed-call text-back from a number registered to your business, MOT and service reminders that stay service messages, reviews asked of everyone, and a website that shows prices the way the Motor Ombudsman's Code expects — remotely, for garages anywhere in the UK.",
    primaryCta: { label: "Book a call about your phone", href: "/contact" },
  },
  cardSummary:
    "Missed-call text-back, MOT and service reminders, reviews and websites for UK garages and MOT centres, built to the Code and consumer law.",
  relatedServiceSlugs: [
    // pending — the slugs below that are not yet in data/services.ts ship in the same commit as this page (11 AE.9); the template drops unknown slugs silently, so the grid would render short until then
    "missed-call-text-back",
    "ai-receptionist",
    "review-management",
    "google-business-profile",
    "web-development",
    "local-business-plans",
  ],
  faqs: [
    {
      question: "How much does a garage website cost?",
      answer:
        "A custom site starts at £3,500 for the build, and for a garage the build shows prices the way the Motor Ombudsman's Code expects of accredited garages — inclusive of VAT and any disposal charge, estimates and quotations labelled as which — and the way consumer law expects of everyone: stated clearly, with the VAT position beside each figure. Missed-call text-back, MOT and service reminders, the review programme and profile management are monthly plans with their own starting figures on the pricing page, and the AI receptionist is its own plan, for the hours nobody can pick up. Every figure is + VAT where applicable. If the site you have is fine and the problem is the phone or the reminders, the plans work without a new site, and we will say so on the first call.",
    },
    {
      question: "Is an automatic MOT reminder text allowed?",
      answer:
        "Yes, while it stays a service message. The ICO lists reminding people about appointments among service messages, and its test is about content: a reminder that says the MOT is due on a date and how to book is a service message; add a discount and it becomes marketing to a number you may hold no consent for. Two things follow. Any driver can sign up on GOV.UK for a free reminder by text or email a month before the MOT is due, so yours has to offer what GOV.UK's does not, a way to book with you and the price. And the reminder goes only to your own customers, from your own number, with a way to stop, and never as the first message a number receives from you.",
    },
    {
      question: "Can the text-back and reminders come from our existing number?",
      answer:
        "The forecourt number stays, and the texts come from a line tied to your business: calls that ring out are diverted to a number the platform watches, and the text-back and the MOT and service reminders come from that same number, so nobody wonders who is texting. If you want a separate line, the platform registers a UK number to your business — a Companies House number means no further paperwork — and it stays your business's number, not ours. One limit: a branded sender name that shows a word instead of a number works one way only, so anything expecting a reply must come from a real number.",
    },
    {
      question: "Should we join The Motor Ombudsman's Service and Repair Code?",
      answer:
        "Your decision, and not one we sell. The Code, issued in June 2025 and approved by the Chartered Trading Standards Institute, commits accredited garages to advertising that will not mislead, prices inclusive of VAT and disposal charges, written estimates and quotations labelled as which, no deposits unless parts are bespoke, no high-pressure selling, a complaints process everyone can use, a final response within eight weeks, and a route to the Ombudsman if that fails. We build every garage site to those commitments whether or not it is accredited; the Code binds only accredited garages, but is good practice for all. Where a garage is accredited, the sponsor's own guidance is to place the logo and a link to its site on the website, with the Smart Badge so a customer can check it is live; where it is not, neither the Code nor the CTSI logo appears.",
    },
    {
      question: "Are there rules about advertising MOT tests online?",
      answer:
        "Fewer than you might expect, in the two places DVSA publishes them. DVSA's MOT testing guide sets out what a test station must display at the premises: the three-triangles sign in a prominent position, and the current fees and appeals poster with DVSA's contact details on a notice board. Neither that appendix nor the guide's section on requirements for authorisation says anything about websites, social media or the logo online, on the version updated in September 2026. What does apply online is the general law: what your site says about a test or a repair becomes a term of the contract if the customer took it into account, a claim that misleads is a consumer-law problem, and any price shown must say whether it includes VAT. So the site states the test fee plainly and never promises what a test cannot.",
    },
    {
      question: "How should we show prices on the site?",
      answer:
        "Inclusive, labelled, and honest about what is fixed. The Motor Ombudsman's Code puts it in one line for accredited garages — any price quoted inclusive of VAT where applicable and of additional charges such as environmental disposal costs — and it separates an estimate, a written breakdown that could go up or down, from a quotation, a firm agreed price, with each labelled as which before work starts. The E-Commerce Regulations require any price on a website to say clearly whether it includes tax, and the Consumer Rights Act says that where no price was fixed the customer pays a reasonable price and no more. The site therefore shows fixed prices as fixed, labels everything else an estimate, and puts the VAT position beside every figure.",
    },
    {
      question: "How do we get more reviews without breaking the rules?",
      answer:
        "Ask after the customer has driven away, ask everyone, and offer nothing. Google's policy is explicit that businesses should not pressure people to review while on the premises, and a request at the counter is hard to keep on the right side of that line; the CMA's guidance treats asking only the happy customers as cherry-picking, with direct fines available since 6 April 2025. So the request goes out by text once the invoice is paid, to every customer, with no discount and no rate-us-first step; a reply to each review is drafted for your approval; and the rating on the site is the one Google shows. The review management page carries the rules with their sources; the garage-specific point is the counter.",
    },
    {
      question: "Are you automotive compliance consultants?",
      answer:
        "No. We build garage websites, reminders and phone systems, and we have read the Code, the testing guide, the Consumer Rights Act and the marketing rules closely enough to build to them — which is a specialisation, not a qualification, and not advice. The Motor Ombudsman, Trading Standards and a solicitor are where anything with real regulatory consequence belongs. Everything here is built for UK small businesses in general; garages are where the reminder is the textbook service message, the phone problem is constant, and a price shown badly online costs the same trust as one shown badly on the invoice.",
    },
  ],
},
```
