import type { CtaLink, Meta } from "@/data/types";

export type AboutContent = {
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
    readonly secondaryCta: CtaLink;
  };
  readonly story: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly paragraphs: ReadonlyArray<string>;
  };
  readonly values: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly items: ReadonlyArray<{
      readonly title: string;
      readonly body: string;
    }>;
  };
  /**
   * The group disclosure. Required on /about by docs/00 § three-site map —
   * WebAsk is openly part of the Naxdor group rather than presenting itself as
   * an unrelated agency.
   */
  readonly group: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly paragraphs: ReadonlyArray<string>;
    readonly cta: CtaLink;
  };
  readonly team: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
  };
  readonly ctaBand: {
    readonly h2: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
};

export const about: AboutContent = {
  meta: {
    title: "About WebAsk — Websites, SEO and automation for UK businesses",
    description:
      "WebAsk is founder-led and works remotely across the UK. Published pricing, one accountable owner, and a trading name of Naxdor — stated plainly, not buried.",
  },
  hero: {
    h1: "One person accountable. Nothing hidden.",
    subhead:
      "WebAsk builds websites, search visibility and automation for UK businesses that have outgrown templated sites, half-finished CRM setups and AI demos that never reached production.",
    primaryCta: { label: "See our process", href: "/process" },
    secondaryCta: { label: "Book a discovery call", href: "/contact" },
  },
  story: {
    eyebrow: "Why WebAsk exists",
    h2: "Most UK small businesses are sold the same disappointing thing.",
    paragraphs: [
      "A templated site on a platform you do not own. A half-configured CRM nobody finished. An AI demo that never made it past the sales call. Then a handoff to a project manager, and six months of waiting for a result that does not move the number you actually care about.",
      "WebAsk does the opposite. Pricing is published on this website, so you can rule us in or out before you speak to anyone. Every project has a written scope, a target date and a budget we hold ourselves to. And when we do not think we are the right fit — which happens — we say so on the first call rather than taking the work.",
      "There is one person behind WebAsk, and that is deliberate rather than a stage we are trying to grow out of. The person who scopes your project is the person who builds it and the person who answers when something breaks. Nothing is subcontracted to an agency you never meet.",
      "We build for any UK business, and the regulated corners are where the work is most specific — aesthetic clinics, dental practices and beauty and wellness clinics operate under advertising rules that decide what a site may say, and getting those wrong is a ruling rather than a design critique.",
    ],
  },
  values: {
    eyebrow: "What we hold ourselves to",
    h2: "Three commitments, applied to every engagement.",
    items: [
      {
        title: "Pricing on the website.",
        body: "Every service carries a published starting price. No “contact us for a quote” wall. The first call is about whether we are a fit — not about reading your budget before we will give you a number.",
      },
      {
        title: "The person who sells it, builds it.",
        body: "There is no account manager layer and no offshore handoff, because there is no one to hand off to. Whoever you speak to in scoping is who commits the code, configures your CRM and picks up the phone when something breaks.",
      },
      {
        title: "We tell you the inconvenient things.",
        body: "That we have no UK office. That your sector has advertising rules your current site probably breaches. That a template would serve you better than we would. Saying those out loud costs us some work and earns the rest of it.",
      },
    ],
  },
  group: {
    eyebrow: "The corporate bit, stated plainly",
    h2: "WebAsk is a trading name of Naxdor.",
    paragraphs: [
      "Naxdor is an enskild firma — a Swedish sole proprietorship — and WebAsk is the brand it trades under in the United Kingdom. Same founder, same standards, a UK brand with UK pricing. Naxdor also operates naxdor.com for international clients and naxdor.se in Sweden.",
      "That means there is no UK company and no Companies House number to look up, which is exactly why we publish the full entity details rather than leaving you to wonder. Plenty of agencies would let you assume a UK limited company sat behind the brand. We would rather you knew.",
      "It also means we work remotely across the UK with no office to visit. Our full registered name, address and contact details are on the company information page.",
    ],
    cta: { label: "See full company information", href: "/legal/company-information" },
  },
  team: {
    eyebrow: "Who you're working with",
    h2: "The person who will write your code, configure your CRM and answer your phone.",
    intro:
      "WebAsk is founder-led, and the bio below names real production experience with a verifiable LinkedIn and GitHub profile attached. No adjectives, no stock headshots, no invented colleagues — only specifics you can check for yourself.",
  },
  ctaBand: {
    h2: "Want to find out if we're the right fit?",
    subhead:
      "Thirty minutes is enough to know. No pitch deck and no follow-up sequence — just an honest conversation about whether this is work we should be doing.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
  },
} as const;
