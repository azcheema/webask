import type { CtaLink, FaqItem, HeroHeadlineSegment, Meta, Stat } from "@/data/types";

export type HomeProblemSolution = {
  readonly eyebrow: string;
  readonly h2: string;
  readonly problem: string;
  readonly solution: string;
  readonly cta: CtaLink;
};

export type HomeContent = {
  readonly meta: Meta;
  readonly hero: {
    /** Short phrases the typewriter eyebrow cycles through, above the H1. */
    readonly eyebrowPhrases: ReadonlyArray<string>;
    /** Two-tone H1; `accent` segments render in brand color. */
    readonly headline: ReadonlyArray<HeroHeadlineSegment>;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
    readonly secondaryCta: CtaLink;
    readonly trustStrip: string;
  };
  readonly sections: ReadonlyArray<HomeProblemSolution>;
  readonly proof: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly stats: ReadonlyArray<Stat>;
  };
  readonly process: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
    readonly cta: CtaLink;
  };
  readonly pricing: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
    readonly cta: CtaLink;
  };
  readonly portfolio: {
    readonly eyebrow: string;
    readonly h2: string;
    /** Honesty label — these are founder projects, not Naxdor case studies. */
    readonly note: string;
  };
  readonly faq: {
    readonly eyebrow: string;
    readonly h2: string;
  };
  readonly faqs: ReadonlyArray<FaqItem>;
  readonly ctaBand: {
    readonly h2: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
};

export const home: HomeContent = {
  meta: {
    title: "Naxdor — Digital Services for SMBs: Web, CRM, AI",
    description:
      "Senior engineers building fast websites, automated CRM, and AI workflows for SMBs. Published pricing. Free site audit available. Book a discovery call.",
  },
  hero: {
    eyebrowPhrases: [
      "Websites that convert.",
      "CRM that catches every lead.",
      "AI that does the busywork.",
      "SEO that gets you found.",
    ],
    headline: [
      { text: "The digital partner for SMBs that " },
      { text: "mean business.", accent: true },
    ],
    subhead:
      "We design, build, and run the websites, CRM systems, and AI workflows that grow small businesses — without the agency overhead or the six-month rebuild.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
    secondaryCta: { label: "Get a free site audit", href: "/free-audit" },
    trustStrip: "Senior engineers. Honest pricing. One team accountable end-to-end.",
  },
  sections: [
    {
      eyebrow: "Web Development & SEO",
      h2: "Your site is your strongest sales rep. Most SMB sites are silent.",
      problem:
        "Templated sites built on dated stacks load in 5+ seconds, rank for nothing, and feel five years behind your brand. Visitors bounce before they read your first sentence.",
      solution:
        "We design and deliver websites engineered for sub-2-second loads, structured for local search from the first commit, and built to convert on mobile first. Every site we own end-to-end — Next.js 16, Tailwind, deployed on Vercel.",
      cta: { label: "See web development", href: "/services/web-development" },
    },
    {
      eyebrow: "CRM Automation",
      h2: "Leads die in your inbox. Your CRM should catch them before you do.",
      problem:
        "Every minute a lead waits is a percentage of conversion. Most SMBs run two tools — a website that captures leads and a CRM that ignores them — held together by Zapier and hope.",
      solution:
        "We implement and automate GoHighLevel and HubSpot end-to-end. Lead capture, auto-replies, SMS nurture, calendar booking, and reporting — wired so prospects book themselves while you sleep.",
      // Until /services/crm-automation ships (Phase 2), this points at /pricing where CRM
      // is listed with its starting price. Repoint to /services/crm-automation then.
      cta: { label: "See CRM automation", href: "/pricing" },
    },
    {
      eyebrow: "AI Integration",
      h2: "Your week shouldn't be 40% admin.",
      problem:
        "Calling back missed leads. Answering the same five questions. Updating spreadsheets nobody reads. Routine work eats the days you should spend growing — and AI is finally ready to take it.",
      solution:
        "We build voice agents that answer your phone in your voice, chatbots that book consultations 24/7, and n8n workflows that move data between your tools without you. Delivered, not pitched.",
      // Until /services/ai-integration ships (Phase 2), this points at /pricing
      // where AI Integration is listed. Repoint to /services/ai-integration then.
      cta: { label: "See AI integration", href: "/pricing" },
    },
    {
      eyebrow: "SEO & Performance",
      h2: "A beautiful site that doesn't rank is a brochure.",
      problem:
        "Most agencies launch and walk away. Six months in you're invisible on Google, your Core Web Vitals are red, and the only traffic you have is your own LinkedIn.",
      solution:
        "We engineer for search from day one — sub-2-second LCP, schema.org structured data on every page, local SEO tuned per city. Plus a free 30-minute audit of any existing site so you can see exactly what we'd change.",
      cta: { label: "Get a free audit", href: "/free-audit" },
    },
  ],
  proof: {
    eyebrow: "What “built well” looks like",
    h2: "We hold ourselves to numbers you can measure.",
    stats: [
      {
        value: "< 2.0s",
        label: "Largest Contentful Paint on every page we ship",
      },
      {
        value: "100",
        label: "Lighthouse Accessibility score on every launch",
      },
      {
        value: "9 services",
        label: "From websites to AI — one team, one accountable owner",
      },
      {
        value: "1 business day",
        label: "Response time on every inbound lead",
      },
    ],
  },
  process: {
    eyebrow: "Our process",
    h2: "Discover. Design. Build. Grow.",
    intro:
      "Every engagement runs the same four stages — different services, same accountability. You see what we're delivering, when, and why.",
    cta: { label: "See our process", href: "/process" },
  },
  pricing: {
    eyebrow: "Honest pricing",
    h2: "Pricing on the website. No “contact for quote” games.",
    intro:
      "Every service has a published starting price. No “contact for quote” walls. What changes the price? Scope — pages, integrations, complexity. Not how desperate you sound on the call. See the full table on the pricing page.",
    cta: { label: "See full pricing", href: "/pricing" },
  },
  portfolio: {
    eyebrow: "Founder prior work",
    h2: "The work that earned the confidence to start Naxdor.",
    note: "Honest about provenance: these are projects our founder led under other brands and independently — not Naxdor case studies. Naxdor's own results take their place here as they ship.",
  },
  faq: {
    eyebrow: "FAQ",
    h2: "Questions, answered straight.",
  },
  faqs: [
    {
      question: "What's a fair budget for an SMB website?",
      answer:
        "For a custom 5–10 page marketing site, starting prices begin at USD $3,500. Templated platforms cost less upfront but lock you into monthly fees of $300–600 plus a generic design. We publish starting prices on every service page and stay transparent through the scoping call.",
    },
    {
      question: "How fast can you deliver?",
      answer:
        "A standard 6–10 page marketing site launches in 4–6 weeks from kickoff. CRM implementations land in 2–4 weeks. AI integrations vary by scope but voice agents typically go live in 3–5 weeks. We commit to dates in writing during the Discover phase.",
    },
    {
      question: "Do you only work with med spas and dental practices?",
      answer:
        "No. We sell digital services to any SMB and have deep specialization in aesthetic, dental, and beauty/wellness clinics. The site you're reading was built by the same team that builds for those industries — the practices know us; the skills travel.",
    },
    {
      question: "Can you work with our existing CRM and website?",
      answer:
        "Usually yes. We migrate and automate GoHighLevel and HubSpot, build connectors for WordPress, Shopify, and Wix sites, and rebuild from scratch when the existing stack costs more to keep than replace. The first call covers what stays and what goes.",
    },
    {
      question: "What do you mean by “senior engineers”?",
      answer:
        "The people who write your code and configure your CRM have ten-plus years of production experience each — they've launched to real traffic, taken pages on call, and worked across SaaS, e-commerce, and agency contexts. No junior offshore handoffs, no “we'll get you a project manager.”",
    },
    {
      question: "Do you offer a free audit?",
      answer:
        "Yes. Any SMB can request a 30-minute SEO + Core Web Vitals audit of their existing site. You get a Loom walk-through plus a one-page PDF with five prioritized findings. We accept ten of these per month — no commitment beyond the call.",
    },
    {
      question: "What countries do you serve?",
      answer:
        "We're US-primary at launch — most clients are in North America — but we work with English-speaking SMBs worldwide. Time zones are arranged around your hours, not ours. Localized pricing in GBP, CAD, and AUD launches later in 2026.",
    },
    {
      question: "What's the catch with the pricing?",
      answer:
        "No catch. Published prices are real starting points for scoped work. Custom quotes go up — sometimes well up — when the work requires complex integrations, white-label SaaS, or multi-vendor coordination. We tell you on the call. Nothing is bait.",
    },
  ],
  ctaBand: {
    h2: "Ready to grow?",
    subhead: "Book a 30-minute call — no pitch, just a clear plan.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
  },
} as const;
