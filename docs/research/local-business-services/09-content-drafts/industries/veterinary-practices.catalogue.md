# 09 — `veterinary-practices` industry entry draft

> Pasteable for `data/industries.ts` after the brainstorm and after its doc 03 Part B section exists.
> Every `£` figure is `[D4]`. Planning notes and the pass-1 self-check are in `../self-checks.md`.

## 1. `data/industries.ts` entry

### AA.1 `data/industries.ts` entry

```ts
{
  slug: "veterinary-practices",
  name: "Veterinary Practices",
  audienceType:
    "Independent veterinary practices, first-opinion practices within groups, out-of-hours providers and referral centres in the United Kingdom",
  meta: {
    title: "Vet Practice Websites for the CMA Order 2026", // 44 characters
    description:
      "Websites, price-list pages and booking automation for UK veterinary practices, built to the CMA's Veterinary Services Market Investigation Order 2026.", // 150 characters
  },
  hero: {
    h1: "Your price list, one click from the homepage, by 22 March 2027.",
    subhead:
      "The CMA's Order of 22 September 2026 puts dated duties on practice websites: a practice with fewer than 15 sites has until 22 March 2027 for its price list, practice information and ownership details. We build sites to the Order's Articles rather than after them.",
    primaryCta: { label: "Book a practice strategy call", href: "/contact" },
  },
  cardSummary:
    "Price-list pages, practice information and booking automation for UK veterinary practices, built to the CMA's Order 2026 and its compliance dates.",
  relatedServiceSlugs: [
    // pending — the slugs below that are not yet in data/services.ts ship in the same commit as this page (11 AE.9); the template drops unknown slugs silently, so the grid would render short until then
    "web-development",
    "crm-automation",
    "missed-call-text-back",
    "review-management",
    "google-business-profile",
    "seo",
  ],
  faqs: [
    {
      question: "How much does a veterinary practice website cost?",
      answer:
        "For a practice the build starts at £3,500 and carries the pages the Order requires: the price list one click from the homepage, practice information, the ownership statement, the end-of-life options page and the prescription literature. Booking confirmations that carry the consultation price and the price-list link from the first message are CRM automation, from £2,500; local SEO is from £750 a month where new-client search is where you compete. Each figure is + VAT where applicable. The monthly plans for the phone, reviews and your Google profile have their own starting figures on the pricing page, and the combination is scoped on a call — a single-site practice and a fifteen-site group sit on different dates and need different things.",
    },
    {
      question: "What does the CMA's Order require on our website, and by when?",
      answer:
        "The Veterinary Services Market Investigation Order 2026 was made on 22 September 2026 and took effect the next day. For a practice with fewer than 15 sites, the price list, practice information, the parasiticide price list and pet care plan information must be published online by 22 March 2027, ownership information and the complaints process by the same date, and the written-prescription literature and notices by 22 September 2027. Groups with 15 or more sites have until 22 December 2026 for the price list and practice information, 22 March 2027 for ownership and complaints, and 22 June 2027 for the prescription items. Anything a Part 2 Article of the Order puts on a website must be easily accessible from the homepage, clearly and prominently, and within two clicks unless the Article says one; the prescription literature has its own two-click rule. The dates are from its Article 3 table.",
    },
    {
      question: "What has to be on the price list?",
      answer:
        "Schedule 1 to the Order lists 36 services, products and procedures in five categories: consultation and preventative care, prescription, dispensing and administration, surgeries and treatments, diagnostics and laboratory tests, and end-of-life care. Several carry extra information, such as the standard appointment duration in minutes, a hyperlink to what a care plan includes, how asterisked items are priced, and third-party details where a service is provided by someone else. The list must be accessible in one click from the homepage, on a page whose navigation label and metadata use the words price, prices, pricing or fees, and it must be updated before any revised price is charged. The prices on it must include VAT and carry a clear statement that they relate to the typical case and may rise in a more complex one; separately, the general law requires any price shown online to say whether it includes tax.",
    },
    {
      question: "We are part of a group — what must the website show?",
      answer:
        "The Order calls it Ownership Information, and it must be displayed clearly and prominently on the group's website and on each practice's website or dedicated page. Beyond that, the group's name or trading name must appear on the homepages, including the top banner where there is one, in the metadata of every page including the metadata search engines read, in paid and organic search results, and in online map results for premises clients visit. Where a practice cannot directly control search or map results, it must have made all reasonable representations to whoever does. Signage at the premises is required too. For a website that means the banner, the metadata and the structured data are part of the build, not a footer line.",
    },
    {
      question: "What about prescriptions and the RCVS notice?",
      answer:
        "Under Article 14 a practice must display the digital version of the RCVS Written Prescription Literature clearly and prominently on each practice website and on the business's own site, within two clicks of the homepage, and update it within a month of the RCVS notifying a change. A standard electronic message, telling clients that written prescriptions are available and pointing to the RCVS website, goes into the digital communications the Order specifies, and every invoice or receipt for medication carries the Order's standard prescription notification in its footer, in the same font and no smaller than the main text. For a small practice these obligations fall due on 22 September 2027; the pages and the templates are built before then.",
    },
    {
      question: "Does the Order change our booking confirmations?",
      answer:
        "Yes, and it is one of the few obligations that lives in your CRM rather than on the website. Article 7 requires that when a practice sends the first of any digital communications to confirm a consultation booking, the message includes the price the practice will charge for that consultation and a link to the page where the price list is published. That is an automation rule: the confirmation template has to pull the right consultation price and the right link, for every booking, every time. We build it into the booking flow so that the front desk never has to remember it, and the same flow keeps recall reminders and marketing messages apart, which keeps a reminder a service message under the marketing rules.",
    },
    {
      question: "Can we still advertise our pet care plan savings?",
      answer:
        "Yes, within the Order's definitions. Article 9 distinguishes a Quantified Savings Claim, which states an amount, a percentage or the size of the saving, from a General Savings Claim, which says a saving exists without saying how much, and it attaches requirements to each. Whatever you claim, the Pet Care Plan Standard Information must be published on the main page that tells visitors about your plans. We build the plan page to carry the standard information and write any savings claim to the definition it falls under, with the arithmetic behind a quantified claim kept where you can show it. The Order's explanatory note is the reference we work from, with the CMA's explainer added when it appears.",
    },
    {
      question: "Are you veterinary compliance consultants?",
      answer:
        "No. We are a web and automation studio that has read the Order, its schedules and its explanatory note, and builds practice websites and booking flows that respect them — a deliberate specialisation, and still short of professional advice. The BVA publishes guidance on getting ready for the remedies, the RCVS has given its own Undertakings alongside the Order, and the CMA has said an updated explainer for practices is coming; anything with real regulatory consequence should go past someone qualified to give it. Everything here is built for UK small businesses in general; what makes a practice different is that the Order puts dated duties on the website itself, so the build comes with a compliance calendar attached.",
    },
  ],
},
```
