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
      "A free 30-minute audit of your SMB website — SEO foundations, Core Web Vitals, and five prioritized fixes. Loom walkthrough plus a one-page PDF. No sales pitch.",
  },
  hero: {
    h1: "A free 30-minute audit of your SMB website.",
    subhead:
      "Five prioritized findings on SEO, Core Web Vitals, and conversion — delivered as a Loom walkthrough plus a one-page PDF. No sales deck attached.",
    primaryCta: { label: "Request your free audit", href: "/contact?topic=free-audit" },
    capacityNote: "Currently accepting 10 audits per month.",
  },
  whatYouGet: {
    eyebrow: "What you get",
    h2: "Concrete findings, not a demo of our tooling.",
    items: [
      {
        title: "A Loom walkthrough of your site",
        body: "10–15 minutes, screen-recorded, narrated. We walk through the audit findings on your actual pages so you see exactly what's wrong and what to do about it.",
      },
      {
        title: "A one-page PDF with five prioritized fixes",
        body: "Ranked by effort vs impact. Three you can do today, two that need an engineer. Each fix names the file, the page, or the configuration that needs to change.",
      },
      {
        title: "A 30-minute follow-up call (optional)",
        body: "If you want to talk through the audit live, we'll book a half-hour. No sales pitch — just questions answered. Plenty of audit recipients never book this call. That's fine.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    h2: "Four steps. About three business days end to end.",
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
        body: "Loom walkthrough plus the one-page PDF lands in your inbox within three business days. Watch in your own time — or schedule the optional follow-up call.",
      },
      {
        number: 4,
        name: "Decide",
        body: "Most people fix two or three things and never come back. Some hire us to implement the rest. Either outcome is the right one for the audit.",
      },
    ],
  },
  whoItsFor: {
    eyebrow: "Who this is for",
    h2: "An honest sense of fit, before you fill the form.",
    fit: [
      "SMBs whose existing site has been live for at least six months",
      "Local businesses competing in search — clinics, agencies, retailers, service providers",
      "Operators ready to invest in SEO if the audit makes the case",
      "Founders who want a second set of eyes before commissioning a rebuild",
    ],
    notFit: [
      "Sites that aren't live yet — there's nothing to audit",
      "Personal blogs or hobby projects — we limit free audits to SMB sites",
      "Anyone hoping for a free deliverable they can resell — we'll know, and we'll politely decline",
    ],
  },
  faqs: [
    {
      question: "Is the audit really free, or is this a trojan horse for a sales pitch?",
      answer:
        "Really free. We accept ten audits per month because that's the number our senior engineers can deliver well alongside billable work. The audit itself is the deliverable — the follow-up call is optional and we never bolt a sales pitch onto the Loom walkthrough.",
    },
    {
      question: "What does the audit cover, technically?",
      answer:
        "Technical SEO (crawl, indexation, sitemap, robots, structured data), Core Web Vitals on a sample of top pages, mobile usability, schema validation in Google's Rich Results Test, basic on-page review of your highest-intent pages, and conversion-readiness on the home page and one service or product page.",
    },
    {
      question: "How long does the audit take to come back?",
      answer:
        "Three business days from the time you submit the form. We hold the slot the moment your request lands; you'll get a confirmation email naming the engineer running the audit and the expected delivery window.",
    },
    {
      question: "Can I get a written report instead of the Loom video?",
      answer:
        "The Loom video is the deliverable — narrated on your actual site, with annotations on what to fix. The one-page PDF accompanies it as a written summary. We don't produce 30-page reports; they sit in inboxes unread.",
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
    h2: "Ten slots per month. First come, first audited.",
    subhead:
      "Request your free 30-minute audit. We'll confirm within one business day and name the engineer running it.",
    primaryCta: { label: "Request your free audit", href: "/contact?topic=free-audit" },
  },
} as const;
