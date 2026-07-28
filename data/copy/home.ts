import type { CtaLink, FaqItem, HeroHeadlineSegment, Meta, Stat } from "@/data/types";

/*
 * Home page copy — UK, service-led, national.
 *
 * ── WHAT THIS PAGE IS AND IS NOT (decision D8) ────────────────────────────
 * The home page speaks to ANY UK small business. It is not a Manchester
 * agency page and it is not a clinic page. The vertical specialisation
 * surfaces through /industries/*, the city focus through /locations/* — and
 * neither shapes this page. Resist the pull to lead with clinics here: it is
 * where the revenue is, but it narrows the brand to the wrong thing.
 *
 * ── CLAIMS DISCIPLINE ─────────────────────────────────────────────────────
 * Nothing here asserts something we cannot evidence. Specifically absent, and
 * deliberately so:
 *   - No client counts, logos, testimonials or results. There are none yet,
 *     and inventing them is CMA-enforceable under the DMCC Act 2024.
 *   - No headcount or seniority claims ("a team of senior engineers",
 *     "no junior handoffs"). The inherited Naxdor copy made them; we don't
 *     know them to be true of this operation, so they are gone.
 *   - No award or ranking claims. The whole vertical says "award-winning";
 *     it is noise, and unverifiable superlatives are a documented anti-pattern.
 *
 * What IS claimed is verifiable: the performance and accessibility numbers are
 * the budgets this very site is held to in CI (see .lighthouserc.cjs), the
 * response promise is data/site.ts, and the service count is data/services.ts.
 * A prospect can check every one of them against the page they are reading.
 *
 * ── PRICING ───────────────────────────────────────────────────────────────
 * The pricing SECTION states the posture (published starting prices, no
 * "contact for quote") and names no figure itself — the numbers live in
 * data/services.ts and render through `PricingAnchor`, so there is one source
 * of truth and the copy cannot drift from it.
 *
 * Those figures are now the research-derived GBP anchors from docs/02 § 7.
 * ⚠️ D4 still asks the founder to confirm them before publish.
 */

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
    /** Honesty label — these are founder projects, not WebAsk case studies. */
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
    title: "WebAsk — Websites, SEO & Automation for UK Businesses",
    description:
      "Fast, well-built websites, SEO and automation for UK small businesses. Published starting prices, no quote wall, and a free site audit. Book a call.",
  },
  hero: {
    eyebrowPhrases: [
      "Websites that earn their keep.",
      "SEO that gets you found.",
      "CRM that catches every enquiry.",
      "Automation that buys back your week.",
    ],
    headline: [
      { text: "The digital partner for UK businesses that " },
      { text: "mean business.", accent: true },
    ],
    subhead:
      "We design, build and run the websites, search visibility and automation that grow small businesses across the UK — without the agency overhead or the six-month rebuild.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
    secondaryCta: { label: "Get a free site audit", href: "/free-audit" },
    trustStrip:
      "Remote-first across the UK · Published pricing · One accountable owner, end to end",
  },
  sections: [
    {
      eyebrow: "Web development",
      h2: "Your website is your hardest-working salesperson. Most sit silent.",
      problem:
        "Templated sites on ageing platforms take five seconds or more to load, rank for nothing, and look a few years behind the business they represent. On a phone, on mobile data, most visitors have gone before the first sentence renders.",
      solution:
        "We build sites engineered for sub-two-second loads, structured for search from the first commit, and designed mobile-first because that is where your customers are. Next.js and Vercel, owned end to end — and you own the code.",
      cta: { label: "See web development", href: "/services/web-development" },
    },
    {
      eyebrow: "SEO & performance",
      h2: "A beautiful site nobody finds is an expensive brochure.",
      problem:
        "Most agencies launch and move on. Six months later you are invisible in Google, your Core Web Vitals are red, and the only people visiting are the ones you sent yourself.",
      solution:
        "We engineer for search from day one — technical foundations, structured data on every page, and content mapped to what UK buyers actually type. Then we report on enquiries, not on impressions you cannot bank.",
      cta: { label: "See SEO", href: "/services/seo" },
    },
    {
      eyebrow: "CRM automation",
      h2: "Enquiries die in inboxes. Yours should be answered before you see them.",
      problem:
        "Every minute an enquiry waits costs you conversion. Most small businesses run a website that captures leads and a CRM that ignores them, held together by a Zapier subscription and optimism.",
      solution:
        "We implement and automate GoHighLevel end to end, and HubSpot where it is the better fit — including migrations between them. Capture, instant reply, SMS follow-up, calendar booking and reporting, wired so prospects book themselves while you work.",
      cta: { label: "See CRM automation", href: "/services/crm-automation" },
    },
    {
      eyebrow: "AI integration",
      h2: "Your week should not be forty percent admin.",
      problem:
        "Returning missed calls. Answering the same five questions. Re-typing details between systems that will not talk to each other. Routine work eats the days you should spend growing the business.",
      solution:
        "We build voice agents that answer your phone, assistants that book consultations around the clock, and workflows that move data between your tools without you. Built and handed over — with the UK rules on automated calling and consent taken seriously, not glossed over.",
      cta: { label: "See AI integration", href: "/services/ai-integration" },
    },
  ],
  proof: {
    eyebrow: "What good actually looks like",
    h2: "Numbers you can check on this page, right now.",
    stats: [
      {
        value: "< 2.0s",
        label: "Largest Contentful Paint — the budget every page we ship is held to",
      },
      {
        value: "100",
        label: "Lighthouse accessibility score, enforced on every build",
      },
      {
        value: "9",
        label: "Services, one accountable owner — no handing you between agencies",
      },
      {
        value: "1 working day",
        label: "Our reply time on every enquiry, without exception",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    h2: "Discover. Design. Build. Grow.",
    intro:
      "Every engagement runs the same four stages, whatever the service. You always know what is being delivered, when, and why it matters.",
    cta: { label: "See our process", href: "/process" },
  },
  pricing: {
    eyebrow: "Honest pricing",
    h2: "Prices on the website. No “request a quote” wall.",
    intro:
      "Every service carries a published starting price, because making you book a call to learn whether you can afford us wastes your time and ours. What moves the number is scope — pages, integrations, complexity — and nothing else.",
    cta: { label: "See full pricing", href: "/pricing" },
  },
  portfolio: {
    eyebrow: "Founder prior work",
    h2: "The work behind the confidence to start WebAsk.",
    note: "Honest about provenance: these are projects our founder led under other brands and independently — not WebAsk client work. WebAsk's own results replace them here as they ship.",
  },
  faq: {
    eyebrow: "FAQ",
    h2: "Questions, answered straight.",
  },
  faqs: [
    {
      // Inherited editorial rule: the pricing question always comes first. It is
      // the most-searched intent and the one AI Overviews quote.
      question: "What should a UK small business budget for a website",
      answer:
        "Most UK small businesses spend between £1,500 and £5,000 on a website. A DIY builder runs roughly £240–£360 a year once you add a domain and business email; a freelancer typically charges £800–£3,000; and UK agencies generally sit between £2,500 and £10,000, with London often higher for the same specification. Budget another 15–20% of the build cost each year for hosting, updates and security. We publish our own starting prices rather than hiding them behind a call, so you can rule us in or out in about a minute. (Market figures: UK web design cost surveys, 2026.)",
    },
    {
      question: "Why would I pay more than a £950 template",
      answer:
        "Two reasons, and if neither applies to you then a template is genuinely the right call. The first is performance and ownership: templated builds on shared platforms are slow on mobile, which costs you both rankings and conversions, and you rarely own what you have paid for. The second is that regulated sectors — clinics, dental practices — have structural requirements a template cannot satisfy, and getting those wrong is an advertising ruling rather than a design critique. If you are a straightforward local business with simple needs, we will tell you that on the call.",
    },
    {
      question: "How quickly can you deliver",
      answer:
        "A standard six-to-ten page marketing site launches in four to six weeks from kickoff. CRM implementations land in two to four weeks. AI integrations vary with scope, but a voice agent is typically live in three to five weeks. The single biggest cause of delay is content — copy, photography and sign-off — so we agree who is producing what during the Discover stage and commit to dates in writing.",
    },
    {
      question: "Do you have a UK office",
      answer:
        "No, and we would rather say so plainly than imply otherwise. WebAsk works entirely remotely across the UK, on UK time. That is why our pricing does not carry the cost of city-centre office space, and it is why we do not run a Google Business Profile — Google requires a genuine staffed location, and we do not have one. If you want to meet, we will arrange a call or travel to you. Full entity and contact details are on our company information page.",
    },
    {
      question: "Do you only work with clinics",
      answer:
        "No. We sell websites, SEO, CRM and automation to any UK small business, and most of what we build is not clinic work. We do have unusually deep knowledge of aesthetic clinics, dental practices and beauty and wellness clinics, because those sectors carry advertising rules most agencies have never read. That expertise is available if you need it and invisible if you do not — the engineering standards are the same either way.",
    },
    {
      question: "Do you understand the advertising rules for clinics",
      answer:
        "Yes, and it is the main reason clinics come to us. Botulinum toxin is a prescription-only medicine in the UK, so it cannot be advertised to the public at all — and the ASA treats euphemisms such as “wrinkle-relaxing treatments” as implied promotion of the same medicine. What the rules do permit is advertising a consultation, and a price list positioned correctly within the site's structure. That is an information-architecture problem as much as a copy problem, which is precisely what we build. We are not solicitors, and genuinely borderline copy goes to CAP's free Copy Advice service.",
    },
    {
      question: "Can you work with our existing website and CRM",
      answer:
        "Usually, yes. We migrate and automate GoHighLevel and HubSpot, connect WordPress, Shopify and Wix sites to the tools around them, and rebuild from scratch only where keeping the current setup costs more than replacing it. Plenty of engagements start as a fix rather than a rebuild. The first call establishes what stays, what goes, and what is simply not worth touching yet.",
    },
    {
      question: "Where in the UK do you work",
      answer:
        "Anywhere in the UK. We publish dedicated guides for Greater Manchester, Cheshire and West Yorkshire because those are the areas we know best, but remote-first delivery means your postcode does not change what we can build or what it costs. Clients elsewhere in the country get exactly the same service on the same timeline.",
    },
  ],
  ctaBand: {
    h2: "Ready to get started",
    subhead:
      "Book a 30-minute call — no pitch, just a straight answer on what you need and what it costs.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
  },
} as const;
