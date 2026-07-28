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
    title: "Pricing — Starting prices for all nine services",
    description:
      "Published GBP starting prices for every WebAsk service, what changes the number, and how a fixed-fee quote is built. No “request a quote” wall.",
  },
  hero: {
    h1: "Prices on the website. No “request a quote” wall.",
    subhead:
      "Every service carries a published starting price in pounds, so you can rule us in or out before you speak to anyone. Here is the table — and what actually moves the number.",
    primaryCta: { label: "Get a custom quote", href: "/contact" },
    secondaryCta: { label: "Get a free site audit", href: "/free-audit" },
  },
  tableIntro: {
    eyebrow: "The catalogue",
    h2: "Nine services. Nine published starting prices.",
    body: "These are real starting points, not teaser figures. Each covers the scope described in the “What's included” section of that service page — not a stripped-back preview engineered to trigger an upsell. All prices are in GBP and exclude VAT where it applies; the final number depends on scope, and we tell you which parts move it on the call rather than after it.",
  },
  whatChangesPrice: {
    eyebrow: "What changes the price",
    h2: "Scope drives price. Nothing else does.",
    intro:
      "We don't price-discriminate based on how desperate you sound, what industry you're in, or how big your logo looks. The number we quote is a function of scope. Here's the list of things that bend it.",
    factors: [
      {
        title: "Pages, screens, or flows",
        body: "A 5-page marketing site is a different project from a 30-page services site with city pages and a blog. A 3-flow MVP is a different project from a 12-flow internal tool. The headcount of pages or screens is the single biggest lever.",
      },
      {
        title: "Integrations",
        body: "Connecting your site to one CRM and a calendar is cheap. Connecting it to a CRM, an ERP, a fulfilment provider, a subscription billing system, and a custom data warehouse is not.",
      },
      {
        title: "Design depth",
        body: "Working from a strong existing brand is faster than building one from scratch. Custom illustrations, motion design, and a full design system add scope.",
      },
      {
        title: "Content volume",
        body: "We can build a blog framework cheaply. Producing the first 20 long-form posts at quality is a different line item entirely.",
      },
      {
        title: "Migration complexity",
        body: "Moving from a clean Webflow site is cheap. Migrating from a 200-page WordPress install with custom plugins and legacy redirects is not.",
      },
      {
        title: "SLA and retainer expectations",
        body: "Standard 30-day post-launch support is included. 24/7 monitoring, same-day SLAs, or a permanent on-call rotation lives in a retainer with a different number on it.",
      },
    ],
  },
  howWeQuote: {
    eyebrow: "How we quote",
    h2: "From the published price to a fixed-fee proposal — in four steps.",
    steps: [
      {
        title: "1. Discovery call (free, 30 minutes)",
        body: "We learn what you're solving, who it's for, and what success looks like. By the end of the call you know whether we're a fit. If we're not, we'll tell you who is.",
      },
      {
        title: "2. Written scope (within 3 business days)",
        body: "We send a one-to-two page scope document — what's in, what's out, assumptions, and dependencies. You read it, ask questions, and tell us what to change.",
      },
      {
        title: "3. Fixed-fee proposal (or T&M cap)",
        body: "We attach a number and a payment schedule. Most projects are fixed fee. Ambiguous scopes (R&D, AI prototyping) go T&M with a not-to-exceed cap.",
      },
      {
        title: "4. Kickoff",
        body: "You sign, we send a kickoff brief and a working-session schedule, and Discover formally begins. The clock starts the day the deposit lands.",
      },
    ],
  },
  faqs: [
    {
      question: "Why publish prices when most agencies don't?",
      answer:
        "Because hiding them wastes everyone's time. Prospects whose budget is half our minimum self-select out before a sales call. Prospects whose budget is in range arrive ready to discuss scope — not extract a number. We close more business with the prices visible, and the calls we have are better.",
    },
    {
      question: "Are these prices negotiable?",
      answer:
        "The published numbers are real starting points for the scope we describe. We don't run discounts, but we will scope down if your budget is firm — a smaller project at the same quality is almost always possible. We will also scope up if the work genuinely needs it; you'll see that in the proposal, not as a surprise mid-build.",
    },
    {
      question: "Do you bill hourly or fixed fee?",
      answer:
        "Fixed fee by default. We give a number, you give an approval, we both hold to scope. Ambiguous engagements (research-led design, AI prototyping, mid-migration archaeology) go T&M with a not-to-exceed cap so you never get an open-ended invoice.",
    },
    {
      question: "What's the payment schedule?",
      answer:
        "Project work: 40% on signature, 30% at design sign-off, 30% on launch. Retainers (SEO, Maintenance, ongoing CRM): monthly in advance. Larger engagements split into milestone-based invoices we agree at scope.",
    },
    {
      question: "Do you accept equity in lieu of fees?",
      answer:
        "Not for the standard engagement. We're a services firm, not an investor. Once or twice a year we make exceptions for early-stage founders we believe in — those conversations go differently and start with “let's talk equity,” not “we can't afford the price.”",
    },
    {
      question: "What if my project is below the published starting price?",
      answer:
        "We'll either scope down to fit (it's often possible — a 3-page landing site, a single automation, a one-week prototype) or we'll recommend a freelancer better suited to the budget. The published starting price is the floor for the standard scope; smaller engagements are common but require us to scope them as their own thing.",
    },
  ],
  ctaBand: {
    h2: "Saw your service on the table?",
    subhead:
      "Book a free 30-minute discovery call — we'll send the written scope within three business days.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
  },
} as const;
