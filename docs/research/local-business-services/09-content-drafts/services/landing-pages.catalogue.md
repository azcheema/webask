# 09 — `landing-pages` catalogue draft

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

## 1. Service object (App. I)

### I.5 `landing-pages`

```ts
{
  slug: "landing-pages",
  name: "Landing Pages",
  // category: "build", status: "draft",
  summary:
    "One page, one job — a campaign, an offer or a booking page — designed, built, wired to your CRM and measured.",
  heroSubhead:
    "One page for one job, designed, built, wired to your CRM and measured — priced as a page, not a website.",
  whoItsFor:
    "businesses running a campaign that needs somewhere to land, and anyone whose site cannot host a new page quickly.",
  pricing: {
    startingAmount: 0 /* [D4] */,
    currency: "GBP",
    cadence: "project",
    priceNote:
      "What moves the price: built in GoHighLevel's builder or in code alongside a site we built, copy written for you, and a multi-step funnel rather than one page.",
  },
  includes: [
    "One page, designed and built — in GoHighLevel's builder inside your account or plan, or in code alongside a site we built",
    "Form or booking calendar wired to the CRM, consent captured at entry, thank-you and follow-up message set",
    "Conversion events and campaign tagging, with a report at thirty days",
    "Copy edited from your draft, and two revision rounds",
  ],
  notIncluded: [
    "Paid media — the page receives the traffic you send it",
    "A multi-page website — that is Web Development, priced as a project",
  ],
  primaryCta: { label: "Get a landing page quote", href: "/contact" },
  relatedServiceSlugs: ["web-development", "email-sms-marketing"],
  faqs: [
    "What does a landing page cost?",
    "Builder or code — which will you use for mine, and why does it matter?",
    "Will a builder-hosted page be as fast as the sites you build?",
    "Does the page need a cookie banner?",
    "Can you write the copy?",
    "Can it take a deposit or a booking?",
    "How long does one page take?",
    "Who owns the page afterwards?",
  ],
}
```

## 2. FAQ answers (App. Z)

### Z.5 `landing-pages` (R38, R46; the distance-sale sentence flagged for S8 sourcing)

```ts
faqs: [
  {
    question: "What does a landing page cost?",
    answer:
      "A project price, with the starting figure shown on this page and on the pricing page, + VAT where applicable. It covers one page designed and built, the form or booking calendar wired to your CRM with consent captured at entry, the thank-you and follow-up message, conversion events and campaign tagging, a report at thirty days, and two rounds of revisions on copy you supply. What moves the price: whether the page is built in the platform's builder or in code alongside a site we built, whether the copy is written for you rather than edited, and whether it is one page or a short funnel of landing, offer and thank-you pages. Your industry does not move it, and no figure depends on how the page performs.",
  },
  {
    question: "Builder or code — which will you use for mine, and why does it matter?",
    answer:
      "The first call decides, and the reason goes into the scope. A page in the platform's builder is fast to make, easy for you to duplicate for the next campaign, and wired to the CRM without integration because it is the CRM; the trade is speed, because a builder page carries the builder's own scripts, and we do not hold it to the mobile speed floor we measure our coded builds against. A page in code sits alongside a site we built, with the same speed and accessibility, deployed on your hosting; it costs more per page and takes longer. Traffic from an advert or an email tolerates the builder well; a page that has to rank in search or live inside a site you paid for wants code.",
  },
  {
    question: "Will a builder-hosted page be as fast as the sites you build?",
    answer:
      "We do not promise it will be, and we say so rather than pretend otherwise. Our coded builds are measured against a mobile speed budget on every build; a page in the platform's builder loads the builder's scripts and styles first, and we do not hold it to that floor. For a landing page whose visitors arrive from an advert, an email or a QR code, that is a trade a campaign can reasonably accept, because the visitor has already decided to come. For a page that needs to rank in search, or that sits inside a site whose standards you paid for, the coded option is the right one, and the first call is where we choose. Either way, the page is measured after launch and the report tells you what it did.",
  },
  {
    question: "Does the page need a cookie banner?",
    answer:
      "If it sets anything non-essential, yes, to the UK standard: accept and reject with equal prominence, nothing pre-ticked, and nothing non-essential set before the visitor chooses. Since 5 February 2026 there are exceptions that matter for a campaign page: storage whose sole purpose is statistical, such as counting visits to improve the page, may run without consent provided the visitor is told what it is for and given a simple way to object, and so may remembering a preference. Advertising and cross-site tracking are not in the exceptions, so an ad platform's conversion pixel still waits for a yes. We build the banner to the rules as they stand on the day and check the builder's default settings before launch rather than trusting them.",
  },
  {
    question: "Can you write the copy?",
    answer:
      "Yes, as an add-on scoped on its own. The base price assumes you send a draft and we edit it into a page: shorter, in a sensible order, with one ask and nothing competing with it. Writing from a brief is separate work, priced separately, and it starts with the rules for your sector before it starts with persuasion, because a page that converts and then has to come down has converted nothing. For a clinic that means the page promotes the consultation and names no treatment product; for anyone showing a price it means the price is stated clearly, including whether it includes VAT. Two revision rounds are included either way.",
  },
  {
    question: "Can it take a deposit or a booking?",
    answer:
      "Yes. A booking calendar or a payment step can be wired into the page, and both feed your CRM so the booking or the deposit appears on the contact's record without retyping. Taking money or a booking from a consumer who is not in front of you is a distance contract under the Consumer Contracts Regulations, so the page carries the information the customer must be given before they are bound and the cancellation wording they are entitled to, on the page rather than behind a link. If the deposit is for a regulated service, the sector's own rules apply on top. We set the terms and the wording with you at scope, because they are part of the page, not an afterthought.",
  }, // sourced: CCRs regs 5, 13, 29 (S110, S112, S114)
  {
    question: "How long does one page take?",
    answer:
      "A page in the builder is measured in days once the copy and images are in hand; a coded page alongside an existing site is measured in a week or two, because it goes through the same build and checks as the site did. A three-step funnel adds time for each step and for the wiring between them. What sets the date in practice is the material: your draft copy, your photographs, your offer and your approvals. Where those are ready, the page is quick; where they are not, the schedule waits on them rather than on the build, and the scope says so. The report follows thirty days after launch.",
  },
  {
    question: "Who owns the page afterwards?",
    answer:
      "You do. A builder page lives in your account or your hosted plan and stays there when the campaign ends, to be paused, duplicated or deleted by you. A coded page lives in the repository and on the hosting you already own. The domain, the form submissions, the tags and the analytics are yours from the first day. If you never work with us again, the page keeps working and nothing about it depends on us. On a hosted plan, the page leaves with the sub-account if you ever transfer it, in the same documented way as everything else in the account.",
  },
],
```
