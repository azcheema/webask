import type { CtaLink, FaqItem, Meta } from "@/data/types";

export type FreeAuditContent = {
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
    readonly capacityNote: string;
  };
  readonly whatYouGet: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly items: ReadonlyArray<{
      readonly title: string;
      readonly body: string;
    }>;
  };
  readonly process: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly steps: ReadonlyArray<{
      readonly number: 1 | 2 | 3 | 4;
      readonly name: string;
      readonly body: string;
    }>;
  };
  readonly whoItsFor: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly fit: ReadonlyArray<string>;
    readonly notFit: ReadonlyArray<string>;
  };
  readonly faqs: ReadonlyArray<FaqItem>;
  readonly ctaBand: {
    readonly h2: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
};

export const freeAudit: FreeAuditContent = {
  meta: {
    title: "Free SEO + Core Web Vitals Audit",
    description:
      "A free audit of your UK business website — SEO foundations, Core Web Vitals, and five prioritised fixes. A recorded walkthrough plus a one-page summary. No sales pitch.",
  },
  hero: {
    h1: "A free audit of your business website.",
    subhead:
      "Five prioritised findings on search, speed and conversion — delivered as a recorded walkthrough plus a one-page summary. No sales deck attached.",
    primaryCta: { label: "Request your free audit", href: "/contact?topic=free-audit" },
    // Honest scarcity, without a number we cannot stand behind. The constraint
    // is real (audits are done personally, alongside billable work); inventing a
    // specific monthly quota to manufacture urgency would be the same class of
    // unverifiable claim we strip everywhere else.
    capacityNote: "Audits are done personally, so capacity is limited.",
  },
  whatYouGet: {
    eyebrow: "What you get",
    h2: "Concrete findings, not a demonstration of our tooling.",
    items: [
      {
        title: "A recorded walkthrough of your site",
        body: "Ten to fifteen minutes, screen-recorded and narrated. We go through the findings on your actual pages, so you see precisely what is wrong and what to do about it — not a generic report with your logo on the cover.",
      },
      {
        title: "A one-page summary with five prioritised fixes",
        body: "Ranked by effort against impact. Three you could do this week, two that need an engineer. Each one names the page, the file or the setting that has to change, so it is actionable whether or not we ever speak again.",
      },
      {
        title: "A compliance flag if your sector needs one",
        body: "If you run a clinic or practice, we also flag anything on the site that sits awkwardly with the advertising rules for your sector — the ASA and CAP Code, GDC standards, or claim substantiation. It is not a normal part of a website audit, and on a regulated site it is the part with legal consequences attached.",
      },
      {
        title: "A 30-minute follow-up call (optional)",
        body: "If you would rather talk it through, we will book half an hour. No pitch — just your questions answered. Never booking it is a perfectly good outcome; the audit stands on its own either way.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    h2: "Four steps. About three working days end to end.",
    steps: [
      {
        number: 1,
        name: "Request",
        body: "Send us your URL through the contact form. Choose the “Free audit” topic. Add a sentence about what you'd like the audit to focus on if you have a preference.",
      },
      {
        number: 2,
        name: "Audit",
        body: "We run technical SEO, Core Web Vitals, schema validation, mobile usability, and conversion-readiness checks. Manual review of the top five pages by search potential.",
      },
      {
        number: 3,
        name: "Deliver",
        body: "The recorded walkthrough plus the one-page summary lands in your inbox within three working days. Watch in your own time — or schedule the optional follow-up call.",
      },
      {
        number: 4,
        name: "Decide",
        body: "Fix two or three things yourself and never come back, or bring us in to implement the rest. Either outcome is the right one for the audit.",
      },
    ],
  },
  whoItsFor: {
    eyebrow: "Who this is for",
    h2: "An honest sense of fit, before you fill the form.",
    fit: [
      "UK small businesses whose site has been live for at least six months",
      "Local businesses competing in UK search — clinics, practices, retailers, service providers",
      "Operators ready to invest in SEO if the audit makes the case",
      "Founders who want a second set of eyes before commissioning a rebuild",
    ],
    notFit: [
      "Sites that aren't live yet — there's nothing to audit",
      "Personal blogs or hobby projects — we limit free audits to small business sites",
      "Anyone hoping for a free deliverable they can resell — we'll know, and we'll politely decline",
    ],
  },
  faqs: [
    {
      question: "Is the audit really free, or is this a trojan horse for a sales pitch?",
      answer:
        "Really free. Capacity is limited because each audit is done personally, one at a time, rather than generated by a tool and rebadged. The audit itself is the deliverable — the follow-up call is optional and we never bolt a sales pitch onto the recorded walkthrough.",
    },
    {
      question: "What does the audit cover, technically?",
      answer:
        "Technical SEO (crawl, indexation, sitemap, robots, structured data), Core Web Vitals on a sample of top pages, mobile usability, schema validation in Google's Rich Results Test, basic on-page review of your highest-intent pages, and conversion-readiness on the home page and one service or product page.",
    },
    {
      question: "How long does the audit take to come back?",
      answer:
        "Three working days from the time you submit the form. We hold the slot the moment your request lands; you'll get a confirmation email with the expected delivery window.",
    },
    {
      question: "Can I get a written report instead of the video?",
      answer:
        "The video is the deliverable — narrated on your actual site, with annotations on what to fix. The one-page summary accompanies it as a written summary. We don't produce 30-page reports; they sit in inboxes unread.",
    },
    {
      question: "What if I'm a fit for ongoing work after the audit?",
      answer:
        "Great. We'll either continue the conversation in the optional follow-up call or you can book a normal discovery call. The audit findings flow into the engagement scope — you don't pay us to re-discover what we already found.",
    },
    {
      question: "What if the audit shows my site is in good shape?",
      answer:
        "We'll tell you. Plenty of audits end with “you're 90% of the way there — here are two things to tune, and don't hire anyone until you see what those do.” That's a successful audit for everyone.",
    },
  ],
  ctaBand: {
    h2: "Limited capacity. First come, first audited.",
    subhead:
      "Request your free audit. We'll confirm within one working day and tell you when it will land.",
    primaryCta: { label: "Request your free audit", href: "/contact?topic=free-audit" },
  },
} as const;
