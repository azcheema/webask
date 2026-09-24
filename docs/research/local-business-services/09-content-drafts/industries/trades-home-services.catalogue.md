# 09 — `trades-home-services` industry entry draft

> Pasteable for `data/industries.ts` after the brainstorm and after its doc 03 Part B section exists.
> Every `£` figure is `[D4]`. Planning notes and the pass-1 self-check are in `../self-checks.md`.

## 1. `data/industries.ts` entry

### AM.1 `data/industries.ts` entry

```ts
{
  slug: "trades-home-services",
  name: "Trades & Home Services",
  audienceType:
    "Plumbers, heating engineers, electricians, builders, roofers, landscapers, cleaners and other trade and home-service businesses in the United Kingdom, from a sole trader with a van to a firm with a fleet",
  meta: {
    title: "Websites and Missed-Call Recovery for UK Trades", // 47 characters
    description:
      "Websites, missed-call text-back, reviews and Google profiles for UK trades — built to the consumer-contract rules, the register rules and PECR.", // 143 characters
  },
  hero: {
    h1: "You cannot answer the phone from under a boiler. Something should.",
    subhead:
      "Missed-call text-back from your own number, a review programme that asks everyone, a Google profile kept up, and a website built to the Consumer Contracts Regulations and your register's brand rules — remotely, for trades anywhere in the UK.",
    primaryCta: { label: "Book a call about your phone", href: "/contact" },
  },
  cardSummary:
    "Missed-call text-back, reviews, Google profiles and websites for UK trades, built to the consumer-contract and register rules.",
  relatedServiceSlugs: [
    "missed-call-text-back",
    "review-management",
    "google-business-profile",
    "web-development",
    "ai-receptionist",
    "local-business-plans",
  ],
  faqs: [
    {
      question: "How much does a website for a trade business cost?",
      answer:
        "A custom site starts at £3,500 for the build, and for a trade that build includes the pages and lines the law expects: the company or trading details every site must carry, the register and scheme numbers shown in the form each scheme allows, a quote flow that gives the cancellation information the Consumer Contracts Regulations require, and prices stated with VAT. If the site you have is fine and the problem is the phone, you do not need a site: missed-call text-back, the review programme and profile management are monthly plans with their own starting figures on the pricing page, and a landing page for one campaign is priced as a page. Every figure is + VAT where applicable, and we scope the smallest combination that fixes the problem you rang about.",
    },
    {
      question: "Do we need a new phone number for the missed-call text-back?",
      answer:
        "No. Keep the number on the van. Unanswered calls are diverted to a line the platform watches, the text goes out from a number tied to your business, and nothing printed anywhere has to change — or change back if you stop. A second line is possible: a UK number registered to your business on the platform's regulatory record, or a UK mobile or freephone number for a business with no UK registration. Either way it is yours, not ours. The missed-call text-back page sets out the registration record in full; for a trade the short version is that the divert wins, because the van already carries the number customers trust.",
    },
    {
      question: "Is texting people back after a missed call legal?",
      answer:
        "Yes, as long as the text stays what it claims to be. The rule that matters is about content, not technology: a message that tells someone you missed their call and how to reach you is customer service, and the moment it carries a discount, a book-today line or a review link it becomes marketing to a number you hold no consent for. So the one we send for a trade says who missed the call, how to reply, how to book and how to stop, and nothing else, and the caller's number is used to reply to that call and for nothing more. The missed-call text-back page prints the message and the regulator's test in full.",
    },
    {
      question: "A customer accepted my quote by text or at the door — can they cancel?",
      answer:
        "Yes, unless an exception applies. A quote accepted at the customer's home is an off-premises contract and one accepted by phone, text, email or website is a distance contract. Under the Consumer Contracts Regulations 2013 the customer may cancel within fourteen days without giving a reason. They must be told so before they are bound and given it in writing; if that information is missing the period can run for up to twelve months, and a customer who cancels in that time cannot be charged for work already done. Work may start inside the fourteen days only at the customer's express request, on paper or by email for a doorstep quote. A visit the customer asked for to carry out urgent repairs or maintenance is the exception; extra work sold on that visit is not. We put the cancellation notice and the request-to-start line into the quote template.",
    },
    {
      question: "Can we put the Gas Safe or TrustMark logo on the site?",
      answer:
        "Only while you are registered, and only in the form the scheme allows. Gas Safe Register's brand policy says only registered gas businesses may display the brand or a registration number, and only in association with the registered trading name; its definition of marketing material includes websites, social media and online directories, and misuse by a registered business is treated as a breach of the Rules of Registration. TrustMark permits its logo only while a business is registered and refers persistent misuse to Trading Standards. So the site shows the brand and your registration number only alongside your registered trading name, laid out as the scheme's guidelines require; we check the register on the day the page goes live, and we never write approved or accredited unless the scheme's own register says so. A claim of approval that is not true is a misleading action under consumer law.",
    },
    {
      question: "How do we get more Google reviews without breaking the rules?",
      answer:
        "By asking every customer after every job, and offering nothing for it. The tempting shortcut for a trade — sending the review link only to the jobs that went well — is the one the regulator's guidance describes as cherry-picking and Google's policy forbids, and since 6 April 2025 the CMA has been able to fine directly for the practices the Act bans. So the request goes out by text or email once the job is done, to everyone, with no discount attached; a reply to each review is drafted for your approval; and your rating appears on the site as Google shows it, low scores included. The review management page carries the rules with their sources; the trade-specific point is timing — an hour after a callout, a day after a bigger job.",
    },
    {
      question: "Do we need a directory listing, a website, or both?",
      answer:
        "Both can earn their keep, and they do different jobs. A directory listing rents you a place in someone else's shop window on their terms; your website is the one asset you own outright, and it is where a customer checks who you are before they ring. Under the Consumer Rights Act 2015, anything said or written to a customer about you or the work, which they take into account, becomes a term of the contract — so a claim on a listing binds you as much as a claim on your site, and a site you control is easier to keep true. We do not sell listings or manage them beyond keeping your details consistent; we build the site, keep the Google profile up and answer the missed calls, and the listing can point at all three.",
    },
    {
      question: "Are you trades compliance consultants?",
      answer:
        "No. We build websites, quote flows and phone systems, and we have read the rules they have to sit inside — the Consumer Contracts Regulations, the Consumer Rights Act, the register and scheme policies and the marketing rules — closely enough to build to them, which is a specialisation and not a qualification. Trading Standards, your scheme and a solicitor are the places to take anything with real regulatory consequence, and the Business Companion guidance from Trading Standards is free and readable. The same services are built for any UK small business; trades are a focus because the phone problem is sharpest there, and because a quote accepted on a doorstep or by text carries paperwork that a website can do for you.",
    },
  ],
},
```
