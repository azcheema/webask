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
    title: "About Naxdor — The digital services firm for SMBs",
    description:
      "Senior engineers building websites, CRM systems, and AI workflows for SMBs. Honest pricing, end-to-end accountability, and a four-stage delivery process that doesn't skip the boring parts.",
  },
  hero: {
    h1: "A small firm doing serious work for small businesses.",
    subhead:
      "Naxdor is the digital partner for SMBs that have outgrown templated sites, half-finished CRM setups, and AI experiments that never reach production.",
    primaryCta: { label: "See our process", href: "/process" },
    secondaryCta: { label: "Book a discovery call", href: "/contact" },
  },
  story: {
    eyebrow: "Why Naxdor exists",
    h2: "We built Naxdor because most SMBs deserve better than what the market offers.",
    paragraphs: [
      "Small businesses are sold the same thing over and over: a templated Wix site, a half-configured GoHighLevel account, an AI demo that never makes it past the sales call. Then they're handed off to a project manager and told to wait six months for a result that doesn't move the metric they actually care about.",
      "We started Naxdor to do the opposite. Senior engineers who scope the work also build it. Pricing is published on the website. Every project has a written scope, a target date, and a budget we hold ourselves to. When we don't think we're the right fit, we say so on the first call.",
      "We are a small firm by choice — small enough that the people who promise the outcome are the same people who deliver it, and large enough to ship across web, CRM, and AI in the same engagement without sub-contracting.",
    ],
  },
  values: {
    eyebrow: "What we hold ourselves to",
    h2: "Three values, applied in every engagement.",
    items: [
      {
        title: "Pricing on the website.",
        body: "Every service has a published starting price. No “contact us for a quote” walls. The first call is about whether we're a fit, not about extracting a budget signal before we give you a number.",
      },
      {
        title: "Senior engineers doing the work.",
        body: "Ten-plus years of production experience per person. The names you meet in scoping are the same names that commit code, configure your CRM, and tune your AI workflows. No offshore handoff, no junior backfill.",
      },
      {
        title: "End-to-end accountability.",
        body: "One team owns the engagement from Discover through Grow. If something breaks post-launch, you don't get routed through a support queue — you call the people who built it.",
      },
    ],
  },
  team: {
    eyebrow: "Who you're working with",
    h2: "The people who'll write your code, configure your CRM, and answer your phone.",
    intro:
      "Naxdor is founder-led. The bios below name real production experience, verifiable LinkedIn and GitHub profiles, and the stacks each of us has shipped at scale. We don't list adjectives — only specifics you can check.",
  },
  ctaBand: {
    h2: "Want to see if we're the right fit?",
    subhead:
      "A 30-minute call is enough to know. No pitch deck, no follow-up automation — just an honest conversation about whether this is the work for us.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
  },
} as const;
