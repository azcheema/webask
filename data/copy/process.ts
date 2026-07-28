import type { CtaLink, Meta } from "@/data/types";

export type ProcessStep = {
  readonly number: 1 | 2 | 3 | 4;
  readonly name: string;
  /** Short subtitle that appears under the step name. */
  readonly tagline: string;
  /** Plain-English description for the home strip — 30–50 words. */
  readonly shortDescription: string;
  /** Long-form description for the /process page — 120–200 words. */
  readonly longDescription: string;
  /** Concrete artefacts the client receives during this stage. */
  readonly artefacts: ReadonlyArray<string>;
  /** What we ask the client to bring or do during this stage. */
  readonly clientInputs: ReadonlyArray<string>;
  /** Typical duration as a range — varies by service. */
  readonly typicalDuration: string;
};

export type ProcessContent = {
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
  readonly intro: string;
  readonly steps: ReadonlyArray<ProcessStep>;
  readonly principles: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly items: ReadonlyArray<{
      readonly title: string;
      readonly body: string;
    }>;
  };
  readonly ctaBand: {
    readonly h2: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
};

export const process: ProcessContent = {
  meta: {
    title: "Our Process — Discover, Design, Build, Grow",
    description:
      "How WebAsk delivers digital services for small businesses. Four stages, concrete artefacts, named timelines, and what we expect from you at each step.",
  },
  hero: {
    h1: "How we work — four stages, no surprises.",
    subhead:
      "Every engagement runs Discover, Design, Build, Grow. Different services, same rhythm — you always know what we're delivering, when, and why.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
  },
  intro:
    "The fastest way to lose months on a project is to skip the boring parts. We don't. Every WebAsk engagement runs the same four stages so you see the trade-offs early, the work as it happens, and the results in numbers — not just at the end.",
  steps: [
    {
      number: 1,
      name: "Discover",
      tagline: "Decide what we're actually solving.",
      shortDescription:
        "We sit with you, your team, and your data to understand the real problem — not just the brief. You leave with a scoped plan, a budget, and a date.",
      longDescription:
        "Discovery is one to two working sessions plus a short async loop. We map your current stack, the user journeys that matter, and the metrics that decide success. We pressure-test the brief — sometimes the right project is smaller than the original ask; sometimes it's bigger. By the end you have a written scope, a phased delivery plan, a fixed-fee proposal (or T&M cap), and a target launch date. If we don't think we're the right partner, we say so on this call.",
      artefacts: [
        "Discovery write-up — problems, users, success metrics",
        "Scope document with in/out of scope, assumptions, and dependencies",
        "Fixed-fee proposal (or T&M cap) with milestones and payment schedule",
        "Target dates for Design, Build, and Grow phases",
      ],
      clientInputs: [
        "Decision-maker in the room for the kickoff session",
        "Access to current analytics, CRM exports, and brand assets",
        "Three to five examples of work you admire (and why)",
      ],
      typicalDuration: "1–2 weeks",
    },
    {
      number: 2,
      name: "Design",
      tagline: "Make the right thing — before we build the wrong one.",
      shortDescription:
        "Sitemap, wireframes, then visual design — reviewed in working sessions, not delivered over email. Engineering pairs in from day one so the design ships.",
      longDescription:
        "Design starts with sitemap and wireframes — the parts that matter for SEO, conversion, and information hierarchy. Then we layer on visual design in real working sessions where you see options and trade-offs side by side. Engineering pairs in throughout so the design lands as components, not as Figma frames that need re-interpretation. Two rounds of revisions are built in. By the end of Design you've signed off on every screen and flow, the component system is half-built, and engineering already has the green light to ship.",
      artefacts: [
        "Sitemap and IA",
        "Wireframes for every key screen and flow",
        "Visual design in Figma — every screen, mobile and desktop",
        "Tokenized component system handed off to engineering",
      ],
      clientInputs: [
        "Working-session attendance (no email-only reviews)",
        "Clear feedback within 3 business days of each delivery",
        "Final copy approvals — voice and substance",
      ],
      typicalDuration: "2–4 weeks",
    },
    {
      number: 3,
      name: "Build",
      tagline: "Ship the thing, performance-budgeted from line one.",
      shortDescription:
        "Engineering in weekly sprints with a live preview link from day one. CI enforces performance, accessibility, and SEO budgets on every commit.",
      longDescription:
        "Build runs in weekly sprints with a preview URL you can open from your phone the moment commits land. Every page is performance-budgeted in CI — Lighthouse runs on every pull request, accessibility is audited end-to-end, and SEO foundations (schema, sitemap, robots, OG) are wired before the design layer. You see the work as it's built; we don't surprise you with a Big Reveal at the end. Pre-launch, we run a complete QA pass on mobile and desktop, validate JSON-LD in Rich Results Test, and submit the sitemap to Google Search Console.",
      artefacts: [
        "Preview URL updated on every commit",
        "Lighthouse, accessibility, and SEO budgets enforced in CI",
        "Pre-launch QA report and a launch checklist",
        "Production launch with smoke-test verification",
      ],
      clientInputs: [
        "Weekly sprint review attendance",
        "Final copy, photography, and legal-page sign-off",
        "DNS and domain access when you're ready to go live",
      ],
      typicalDuration: "3–8 weeks",
    },
    {
      number: 4,
      name: "Grow",
      tagline: "Measure, tune, and keep the asset earning.",
      shortDescription:
        "Post-launch is when most agencies disappear. We monitor performance, SEO rankings, and lead flow — then iterate on what the data shows.",
      longDescription:
        "Launch is a milestone, not a finish line. For 30 days post-launch we're on hand for tweaks, training, and the small things that surface only in real traffic. Beyond that, optional retainers — Maintenance for the asset, SEO for the rankings, CRM for the funnel — keep the work compounding. Quarterly we run a health review: Core Web Vitals, search rankings, lead-flow metrics, conversion rate. We bring the numbers, you bring the questions. The point is to keep the thing we built earning — not to bill you for re-doing it in a year.",
      artefacts: [
        "30-day post-launch support — bug fixes, copy edits, training",
        "Quarterly health review — CWV, rankings, leads, conversion",
        "Maintenance, SEO, or CRM retainer if it earns its place",
        "Year-one growth plan with named experiments",
      ],
      clientInputs: [
        "Access to analytics, Search Console, and CRM data",
        "A point of contact who can act on findings",
        "Honest feedback when something isn't working",
      ],
      typicalDuration: "Ongoing",
    },
  ],
  principles: {
    eyebrow: "How we work",
    h2: "Six principles we don't compromise on.",
    items: [
      {
        title: "Written scope before any code.",
        body: "If it isn't in the scope document, it isn't in the build. We re-scope rather than scope-creep — change requests get an honest delta, not a quiet expansion.",
      },
      {
        title: "Performance is a budget, not a goal.",
        body: "Core Web Vitals are enforced in CI. A pull request that breaks LCP or CLS budgets doesn't merge until it's fixed.",
      },
      {
        title: "Designs reviewed in real time.",
        body: "Email feedback loses 80% of the nuance. Every design review is a working session — screen-shared, decisions made on the call, captured in writing afterward.",
      },
      {
        title: "Honest trade-offs over silent assumptions.",
        body: "Every meaningful choice (Shopify vs custom, GHL vs HubSpot, native vs React Native) gets named, weighed, and recorded — so future-you knows why this thing is the way it is.",
      },
      {
        title: "Your data, your accounts.",
        body: "Domains, hosting, analytics, CRM, repos — all live in accounts you own from day one. WebAsk is a collaborator, not a hostage-taker.",
      },
      {
        title: "Senior engineers do the work.",
        body: "The people who scope the project are the same people who build it. No offshore handoff, no junior backfill, no project manager between you and the work.",
      },
    ],
  },
  ctaBand: {
    h2: "Read the process? Now see if we're the fit.",
    subhead:
      "Book a 30-minute discovery call. We'll either be the right partner or we'll tell you who is.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
  },
} as const;
