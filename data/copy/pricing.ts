import type { CtaLink, FaqItem, Meta } from "@/data/types";

export type PricingContent = {
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
    readonly secondaryCta: CtaLink;
  };
  /**
   * The 9-service price table is rendered from `data/services.ts` — this
   * page-copy module only owns the surrounding narrative.
   */
  readonly tableIntro: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly body: string;
  };
  readonly whatChangesPrice: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
    readonly factors: ReadonlyArray<{
      readonly title: string;
      readonly body: string;
    }>;
  };
  readonly howWeQuote: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly steps: ReadonlyArray<{
      readonly title: string;
      readonly body: string;
    }>;
  };
  readonly faqs: ReadonlyArray<FaqItem>;
  readonly ctaBand: {
    readonly h2: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
};

export const pricing: PricingContent = {
  meta: {
    title: "Pricing — nine published starting prices in GBP",
    description:
      "Every WebAsk service carries a published GBP starting price — the UK bands they sit inside, what moves the number, and how a fixed-fee quote is built.",
  },
  hero: {
    h1: "The prices are on the page, not behind a form.",
    subhead:
      "There is no standard UK price for a website, a retainer or an app — the published bands are wide, and the products inside them are not the same product. Every service here starts at a number you can read before you speak to anyone, with the band it sits in and the things that move it.",
    primaryCta: { label: "Get a written quote", href: "/contact" },
    secondaryCta: { label: "Start with a free audit", href: "/free-audit" },
  },
  tableIntro: {
    eyebrow: "Starting prices",
    h2: "Nine services, and the number each one starts at.",
    body: "Project work starts between GBP £2,500 and £12,000 depending on the service; the two ongoing engagements start at £250 and £750 a month. Each figure covers the scope set out in the “What's included” list on that service's page, not a stripped-back version that makes an upsell inevitable. Every row links straight through to it, and to the levers that move that particular number.",
  },
  whatChangesPrice: {
    eyebrow: "What moves the number",
    h2: "Scope moves the price. Your postcode doesn't.",
    intro:
      "The UK agency band runs dearer in London than elsewhere in the country for the same specification — a location premium rather than a scope premium. WebAsk has no office anywhere to price into a quote, so where you are in the UK never enters the number. Six things do.",
    factors: [
      {
        title: "How much of it there is",
        body: "The clearest lever, and the first thing worth pinning down in any quote you are comparing. Regional UK agencies average £3,000–£6,000 for 5–15 pages with design, a responsive build, basic SEO and a CMS. A thirty-page site carrying location pages, an industry section and a blog framework is a different brief — as is a twelve-screen internal tool beside a three-screen prototype.",
      },
      {
        title: "What it has to connect to",
        body: "One CRM and a calendar is a different job from a CRM, a booking system, a payment provider, an accounting package and a fulfilment feed. GoHighLevel is the platform we lead with and HubSpot the second, and another CRM entirely is scoped on its merits rather than ruled out. Anything with documented, stable APIs can be scoped honestly; anything without them can only be guessed at, which is why that part gets named in the scope rather than assumed.",
      },
      {
        title: "Whether the words and pictures exist",
        body: "A build can only run as far as the material it has: the page of text only you can write, the photography nobody has taken. Where that exists, the fee holds and so does the date. Where it has to be commissioned, that is a line of its own. Where it is still to come, the date moves before the price does — which is why this is the part worth beginning first.",
      },
      {
        title: "What has to survive from the old site",
        body: "A site with nothing to lose is cheaper to build than a replacement that already ranks. Crawling the live site, mapping every legacy URL to an explicit destination, and holding those redirects for at least twelve months is scope, not a formality — a WordPress sitemap commonly under-reports what the site actually exposes. WebAsk is doing this to itself: webask.co.uk is a 2020-era WordPress site, and every one of its legacy URLs has an explicit destination.",
      },
      {
        title: "Rules that dictate the structure",
        body: "In regulated sectors the regulator shapes the information architecture and not merely the wording — a UK clinic's consultation-first structure is the clearest case, and it is a specification with a cost attached rather than a styling choice that can be retrofitted after launch. Where none of that applies it costs nothing. Where it does, it belongs in the scope and not in month two.",
      },
      {
        title: "What happens after launch",
        body: "Thirty days of post-launch support sits inside the build price. Beyond that, the UK market puts the annual cost of running a site at 15–20% of what it cost to build, and domain, hosting and upkeep alone run £100–£300 a year at the basic end. A care plan is priced on what it covers rather than as a fraction of the build — properties, response time, improvement hours — and starts at £250 a month, cancelling on 30 days' notice. Monitoring and a guaranteed response are a retainer question, not a build one.",
      },
    ],
  },
  howWeQuote: {
    eyebrow: "How a quote is built",
    h2: "From a published starting price to a number you can sign.",
    steps: [
      {
        title: "1. A call, free, thirty minutes",
        body: "You describe the problem, who it is for, and what a good outcome would look like. You leave the call knowing whether this is a fit — and where it isn't, with the name of someone better placed to do it.",
      },
      {
        title: "2. A written scope, within three working days",
        body: "One to two pages: what is in, what is out, the assumptions it rests on, and what it needs from your side. You mark it up and send it back. Nothing is priced until that document is agreed.",
      },
      {
        title: "3. A fixed fee, or a capped day rate",
        body: "A number and a payment schedule against the agreed scope. Fixed fee is the default. Where the shape of the work is genuinely unknown at the point of quoting — research-led design, an AI prototype, a migration into an undocumented system — it runs on a day rate with a not-to-exceed cap, so there is no open-ended invoice.",
      },
      {
        title: "4. Kickoff",
        body: "You sign, the deposit clears, and Discover begins with a kickoff brief and a schedule of working sessions. The target launch date in the scope is measured from the day the deposit lands, not from the day you first got in touch.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does a website cost for a UK small business?",
      answer:
        "There is no single answer, which is exactly why the bands are worth holding in your head before anyone quotes you. A DIY site builder runs £240–£360 a year, all in. A freelance build is put at £800–£3,000 in one 2026 market summary and £1,500–£3,000 in another, with a typical four- or five-page site landing at £1,200–£2,000. UK agencies quote £2,500–£10,000 for a standard small-business site, London dearer than the rest of the country for the same specification, and regional agencies average £3,000–£6,000. Most UK small businesses spend £1,500–£5,000 on a build. The lowest website build here starts at £3,500 — above both freelance bands and at the low end of the regional agency band, which is a positioning decision and is stated as one.",
    },
    {
      question: "Why more than a £950 template site?",
      answer:
        "It is a fair question: one UK clinic specialist publishes a £950–£4,950+ range. The answer is not “we are premium”. Below the floor the product changes rather than the margin: custom design and build instead of a theme, a performance budget that is measured rather than asserted in a proposal, accessibility audited to WCAG 2.2 AA, structured data, and the hosting account, the domain and the Search Console property in your name from day one. In regulated sectors it also buys an information architecture the rules dictate, which is not a thing that can be added afterwards. If a £950 quote genuinely includes all of that, take it.",
    },
    {
      question: "Is VAT included in these prices?",
      answer:
        "No. Every figure on this site is shown + VAT where applicable. WebAsk is the UK brand of Naxdor, a Swedish sole proprietorship, so how VAT applies depends on the supply and on your own VAT position; the proposal states the treatment for your engagement in writing and the invoice matches it. Every price here is an indicative starting point for guidance, not a binding offer — the written proposal is the document that commits either of us to a number.",
    },
    {
      question: "Do you bill by the day or by the project?",
      answer:
        "Fixed fee by default: one number against a written scope, agreed before anything starts and held on both sides. A day rate is the exception rather than an alternative on offer: it applies only where the shape of the work genuinely cannot be known at the point of quoting, and it never appears without a not-to-exceed cap written into the scope beside it. The cap is the whole point. An uncapped hourly arrangement moves all of the estimating risk onto the side that has no way of estimating it, which is the wrong way round.",
    },
    {
      question: "What is the payment schedule?",
      answer:
        "Project work: 40% on signature, 30% at design sign-off, 30% at launch. Ongoing engagements — SEO, care plans, continuing CRM work — are billed monthly in advance and cancel on 30 days' notice, with no minimum term to sign away. Larger builds split into milestone invoices agreed in the scope, so what you pay tracks what has been delivered rather than the calendar.",
    },
    {
      question: "What if my budget is under the starting price?",
      answer:
        "Say so on the call and one of two things happens. Either the scope comes down to fit — a three-page launch site, a single automation, a one-week prototype are all real projects — or you get pointed somewhere better matched. Published UK freelance bands start at £800 in one 2026 market summary and £1,500 in another, and a four- or five-page build inside them lands at £1,200–£2,000; if you are still testing whether the idea works at all, a subscription builder at £240–£360 a year answers the cheaper question first. A starting price is a floor for a standard scope. It is not a filter on who gets a straight answer.",
    },
  ],
  ctaBand: {
    h2: "Know which row is yours?",
    subhead:
      "Thirty minutes on what you are trying to build, then a written scope within three working days — with a fixed fee against it, or an honest reason it should be built elsewhere.",
    primaryCta: { label: "Book a 30-minute call", href: "/contact" },
  },
} as const;
