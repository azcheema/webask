/**
 * Service catalogue — the canonical source of truth for the 9 services WebAsk
 * sells. Consumed by:
 *  - `app/(marketing)/pricing/page.tsx` (pricing table)
 *  - `app/(marketing)/services/*` (per-service detail pages — Web Dev in
 *    Phase 1, the other 8 in Phase 2)
 *  - `components/marketing/ServiceCard.tsx` (home page + cross-links)
 *  - `_nav-data.ts` (will re-export a `SERVICE_NAV` derivation in the next
 *    feature; see the comment at the top of that file)
 *
 * ⚠️ Starting prices below are the **research-derived proposals** from
 * `docs/02-uk-market-research.md` § 7 — they are NOT yet signed off. **Decision
 * gate D4 (founder) is open**: a published price is a commitment, so these must
 * be confirmed before `/pricing` or any service page goes live. Do not restate
 * them as confirmed anywhere. (The USD figures they were converted from were
 * founder-confirmed for Naxdor on 2026-06-02; that confirmation does not carry
 * over to the UK market.)
 *
 * Every downstream page derives its figures from this module. Display is
 * **starting-price only** ("Starting at £X"): no upper limit / typical range is
 * shown, per the founder's pricing-display decision. A custom-quote CTA carries
 * the rest. VAT wording is hedged pending gate D2 — see `lib/pricing.ts`.
 */

import type { CtaLink, FaqItem } from "@/data/types";

export type Currency = "GBP";

export type PriceCadence = "project" | "monthly";

/**
 * The three groups the services index, nav and footer are organised by
 * (research 02 § 6, D13): project work you own, the monthly work that brings
 * customers in, and the system that keeps it running.
 */
export type ServiceCategory = "build" | "grow" | "automate";

/**
 * `draft`: the page prerenders when its MDX exists but renders `noindex`, and
 * is excluded from the nav, the sitemap, the services grid, the pricing table
 * and the contact form. Flip to `live` in the same commit as the boundary
 * edits and the `BUILT_ROUTES` entry (research 11 § 7).
 */
export type ServiceStatus = "draft" | "live";

export type ServicePricing = {
  /** Starting price as a whole number in the smallest practical unit (pounds). */
  readonly startingAmount: number;
  readonly currency: Currency;
  readonly cadence: PriceCadence;
  /**
   * Per-unit qualifier appended to the cadence ("per location") where the
   * work is per profile or per site. Rendered as "per month per location".
   */
  readonly unit?: string;
  /** One-off set-up component of a monthly plan. Rendered as "· £X set-up". [D4] */
  readonly setupAmount?: number;
  /**
   * Shown under the price where metered usage (messages, minutes) is passed
   * through at cost. Its presence adds "· usage at cost" to the price line.
   */
  readonly usageNote?: string;
  /** Optional one-liner clarifying what bends the price (shown in place of an upper limit). */
  readonly priceNote?: string;
};

/**
 * A tier of a bundled monthly plan. Rendered on the bundle page and in the
 * /pricing Plans block; emitted as an `OfferCatalog` by `bundleCatalogNode`
 * (research 09 bundle catalogue § 3, App. AB.1).
 */
export type BundleTier = {
  readonly slug: string;
  readonly name: string;
  /** 12–20 words; the card's one line. */
  readonly summary: string;
  /** Monthly starting figure and the set-up component for this tier. Both [D4]. */
  readonly pricing: {
    readonly startingAmount: number;
    /** Set-up is charged per module added, not per tier. */
    readonly setupAmount: number;
    readonly currency: Currency;
    readonly cadence: "monthly";
    readonly usageNote: string;
  };
  /** 4–6 bullets, each naming the component service page it draws on. */
  readonly includes: ReadonlyArray<string>;
  readonly notIncluded?: ReadonlyArray<string>;
  /** Component service slugs this tier bundles — drives the "each part is a service of its own" links. */
  readonly componentSlugs: ReadonlyArray<string>;
};

export type Service = {
  readonly slug: string;
  readonly name: string;
  readonly category: ServiceCategory;
  /** See `ServiceStatus`. Every public surface reads `liveServices`, never `services`. */
  readonly status: ServiceStatus;
  /** Sprite symbol id suffix in `service-marquee.tsx` (`svc-<icon>`). */
  readonly icon?: string;
  /** One-line value prop used in nav, cards, and meta descriptions. */
  readonly summary: string;
  /** Hero subhead on the detail page — 12–20 words. */
  readonly heroSubhead: string;
  /** "Who it's for" qualifier — helps prospects self-select. */
  readonly whoItsFor: string;
  readonly pricing: ServicePricing;
  /** What's included at the starting price — 3–5 concrete bullets. */
  readonly includes: ReadonlyArray<string>;
  /** What's NOT included — 1–2 honest bullets per uiux-guidelines § Pricing anchor. */
  readonly notIncluded: ReadonlyArray<string>;
  readonly primaryCta: CtaLink;
  /**
   * The two sibling services most naturally engaged alongside this one, in
   * display order. Resolved by `getRelatedServices` and rendered in the service
   * page's "Keep exploring" cross-link grid (internal-linking discipline). Slugs
   * must exist in this catalogue; an unknown slug is silently dropped.
   */
  readonly relatedServiceSlugs: ReadonlyArray<string>;
  /**
   * Service-specific FAQs. Rendered via `FaqAccordion` on the detail page and
   * emitted as `FAQPage` JSON-LD. Optional: Web Dev fills these in Phase 1; the
   * other 8 services fill them as their detail pages ship in Phase 2. The
   * template omits the FAQ block + JSON-LD when this is absent or empty.
   */
  readonly faqs?: ReadonlyArray<FaqItem>;
  /** Bundle only — the plan's tiers (App. AB.1). */
  readonly tiers?: ReadonlyArray<BundleTier>;
};

export type ServiceCategoryDefinition = {
  readonly id: ServiceCategory;
  readonly label: string;
  /** Intro under the category heading on the grouped services index. */
  readonly blurb: string;
};

/**
 * Display order of the three groups. Strings from research
 * `09-content-drafts/index-and-nav.md`; the label "Automate & run" is D13.
 */
export const SERVICE_CATEGORIES: ReadonlyArray<ServiceCategoryDefinition> = [
  {
    id: "build",
    label: "Build",
    blurb: "Websites and software you own — priced as projects, handed over, kept in your name.",
  },
  {
    id: "grow",
    label: "Grow",
    blurb:
      "Being found, chosen and booked: search, your profile, your reviews, the calls you miss and the follow-up you never send. All monthly.",
  },
  {
    id: "automate",
    label: "Automate & run",
    blurb: "The system behind it, kept running — hosted plans, CRM builds, AI, maintenance.",
  },
];

/**
 * Every service, drafts included — for authoring, `getServiceBySlug` and the
 * `[service]` route's 404 check. Public surfaces read `liveServices`.
 */
export const services: ReadonlyArray<Service> = [
  {
    slug: "web-development",
    name: "Web Development",
    category: "build",
    status: "live",
    summary: "Custom website design and build for UK small businesses that need to be found.",
    heroSubhead:
      "Fixed-fee website design and build — fast on mobile, accessible to WCAG 2.2 AA, and hosted in accounts you own.",
    whoItsFor:
      "small businesses replacing a slow templated site, agencies that need an engineering-grade build partner, or founders shipping a marketing site for a new venture.",
    pricing: {
      startingAmount: 3500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves it: page count, how much of the design is bespoke, whether you need a CMS, and how many systems it must talk to.",
    },
    includes: [
      "Five to ten pages, custom-designed and built on Next.js and Tailwind",
      "A two-second mobile LCP budget, with page weight and layout shift gated on every deploy",
      "Search foundations — structured data, sitemap, canonicals, social preview cards",
      "WCAG 2.2 AA accessibility, plus a cookie banner where Reject is as easy as Accept",
      "Thirty days after launch for fixes, small changes and training your team",
    ],
    notIncluded: [
      "Brand identity — a logo and full visual system belong with a brand studio",
      "Ongoing SEO content or link-building, and upkeep past day 30 — separate plans",
    ],
    primaryCta: { label: "Get a web development quote", href: "/contact" },
    relatedServiceSlugs: ["ui-ux-design", "seo"],
    faqs: [
      {
        question: "What's the difference between your £3,500 site and a £1,500 freelancer build?",
        answer:
          "Scope and floor. At £1,500 you are in the UK freelance band, where market data puts a typical build at four or five pages. A WebAsk site is 5–10 pages of custom design and build, with a sub-2-second mobile LCP budget measured on every build, full schema.org structured data, WCAG 2.2 AA accessibility gated in CI, and a real component system underneath. The freelancer build is fine if your site is going to be a static brochure; the WebAsk floor exists because we treat the site as a long-term sales asset, not a one-off deliverable.",
      },
      {
        question: "How long does a website take to build, and what sets the date?",
        answer:
          "Four to eight weeks for a five-to-ten-page site, with the target date written into the scope rather than left open. Roughly a week or two to agree scope and structure, one or two on design, two to six on the build with the tail of design still running, then launch. Location pages, industry pages or a blog framework add two to four weeks. Each stage assumes the copy, photographs and approvals it needs are ready — where they are not, the schedule waits on those rather than on engineering.",
      },
      {
        question: "Can my current site be redesigned rather than rebuilt?",
        answer:
          "It depends what is underneath. Where the stack is modern, the codebase is clean and there is no plugin sprawl, redesigning the visual layer costs less than starting again. Where the site is WordPress, we do not work in it, so a redesign in place is not something we can offer — a rebuild elsewhere or a WordPress specialist are the honest options. Start with the free audit either way — it reads the codebase before anyone argues about the design.",
      },
      {
        question: "Does the site live on your hosting account or ours?",
        answer:
          "You host it. The Vercel project lives in an account you own from day one. The same goes for your domain, your analytics, your Search Console property, and your CRM. WebAsk is a collaborator, not a hostage-taker — if you ever fire us, you keep the asset intact.",
      },
      {
        question: "Can we edit our own copy after the site is live?",
        answer:
          "At launch the copy sits in MDX files in the repository, so edits come through us. That suits a site whose pages change a few times a year, and it stops suiting you the moment someone in-house wants to publish without asking — a blog, a news page, seasonal offers. At that point we move you to Payload CMS: self-hosted, no licence fee, with an editor set up around how your team actually writes. It is a one-to-two-week piece of work, quoted on its own rather than folded into the build price.",
      },
      {
        question: "We already rank for things. How do you move the site without losing that?",
        answer:
          "By treating the redirect map as a deliverable rather than a launch-day chore. Every URL that ranks, every inbound link worth keeping and every page carrying equity is inventoried, mapped to its replacement with a 301, and verified against a preview deployment before the switch rather than after it. Rankings are then watched closely through the first month, so a drop is caught in days. We are doing exactly this to ourselves: webask.co.uk is a 2020-era WordPress site, and all twelve of its legacy URLs were mapped to replacements before any of the new site went live.",
      },
      {
        question: "We have no logo and no brand guidelines. Can we still start?",
        answer:
          "We can build a temporary brand kit — logo wordmark, two colours, one typeface — quoted as a small add-on to the engagement. It's enough to ship a site that looks intentional while a proper rebrand happens elsewhere. We're upfront that this is interim: the moment a full brand identity lands, we update the site in a small follow-up engagement.",
      },
      {
        question: "Is there cover once the 30 days of post-launch support run out?",
        answer:
          "Yes — a separate Maintenance care plan covers security patching, dependency updates, performance monitoring, and a monthly bucket of improvement hours. Starting at £250/month. We strongly recommend it for any site we build; an unmaintained site accumulates unpatched dependencies fast.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce",
    category: "build",
    status: "live",
    summary: "Shopify, headless and custom shops built to UK consumer rules.",
    heroSubhead:
      "Design, build and launch on Shopify, headless or custom — checkout, price display, reviews and consent wired to UK rules from day one.",
    whoItsFor:
      "small businesses selling direct-to-consumer, brands outgrowing a templated theme, or operators moving off Wix, Etsy or an ageing WooCommerce install.",
    pricing: {
      startingAmount: 6500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Catalogue size, custom theming depth, third-party integrations (ERP, fulfilment, subscriptions), and headless vs Shopify-native are the levers.",
    },
    includes: [
      "Shopify or custom build with theme work, checkout customisation, and product templates",
      "Payments, delivery rules and VAT-inclusive consumer price display, tested on real orders",
      "LCP, layout stability and WCAG 2.2 AA checked on listing, product and checkout templates",
      "Basket, checkout and post-purchase flows, with review provenance and consent recorded",
      "30 days of post-launch cover, through the first weeks of live trading",
    ],
    notIncluded: [
      "Product photography and product-description writing — we point you to a specialist",
      "Ad accounts and paid-media management — the shop, not the campaigns",
    ],
    primaryCta: { label: "Get an e-commerce quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "seo"],
    faqs: [
      {
        question: "How much does an e-commerce build cost?",
        answer:
          "Starting at £6,500, + VAT where applicable. The comparison worth making is against the £2,500–£10,000 UK agencies quote for a standard small-business website, with regional agencies averaging £3,000–£6,000 (Duport / GetYouOnline, 2026, and UK regional-agency benchmarks from the same year). £6,500 sits above the regional-agency average and mid-way up the wider band, and the reason is not page count: it has an order path, a tax and delivery display, a review system and a consent layer that all have to be right at once, and three of those four have a regulator attached. What moves the price is catalogue size, how deep the custom theming goes, third-party integrations such as ERP, fulfilment and subscriptions, and whether you go headless or stay Shopify-native. Running costs afterwards are not only hosting: a shop carries a platform subscription, the apps you run and payment fees, all in your own accounts, plus a care plan if you want one.",
      },
      {
        question: "Is Shopify enough, or do we need something custom?",
        answer:
          "For most small businesses, Shopify. Its checkout converts, its payment and fraud tooling is mature, and it stays patched without you thinking about it — we just do serious theme and template work on top. We reach for a headless front end on Shopify, or a fully custom stack, only when the brand experience or the integration requirements (unusual catalogues, complex pricing, deep ERP sync) genuinely outgrow what a themed store can do. We make the recommendation on the first call, and we will steer you to Shopify even though a custom build bills more — billing more by putting you on the wrong platform is not a trade we are willing to make.",
      },
      {
        question: "How long before the shop is taking orders?",
        answer:
          "Plan for 6–12 weeks from kickoff, with a focused Shopify storefront at the near end of that: Discover 1–2 weeks, Design 2–3 weeks, Build 3–6 weeks overlapping the tail of Design, then a full QA pass and launch. Headless or fully custom builds, large catalogues, subscriptions, or multi-system integrations sit at the far end of the band or past it. We commit to a target launch date in the written scope.",
      },
      {
        question: "Moving off WooCommerce, Wix or Etsy — what happens to our rankings?",
        answer:
          "It starts with a crawl of the shop you have, before anything is designed. Every product, category and content URL that carries traffic or links is mapped to a destination, redirected with a 301, and checked against the new sitemap in Search Console before cutover. A shop makes that harder than a brochure site does: discontinued lines and sold-out variants still hold links, and category URLs multiply once filters are involved — so the map decides what each of those becomes, rather than letting them all land on the home page. Marketplaces are the exception: you never owned the Etsy or eBay URL, so there is nothing to redirect, and what moves across is the brand and the catalogue rather than the ranking.",
      },
      {
        question: "Who wires up payments, delivery and VAT?",
        answer:
          "We do. Payment gateway, delivery rules and carrier rates, and tax calculation are all in the starting scope, and each is tested against real orders before launch rather than left half-wired. The specifically UK part is the display rather than the maths: prices shown to consumers must be VAT-inclusive, or the exclusion made very clear, so the tax setting and the template that renders the price have to agree. Platform transaction fees and third-party app subscriptions stay in your name and are passed through at cost, named in the proposal rather than turning up later.",
      },
      {
        question: "Do you handle subscriptions, multi-currency and selling abroad?",
        answer:
          "Each is real engineering rather than a switch, so all three sit above the starting price and get scoped explicitly. Subscriptions bring their own billing states — pause, skip, failed payment, cancellation — and each of those is a screen and an email, not a setting. Selling into other markets carries a second question: every market has its own tax treatment and its own consumer-protection expectations, so adding a currency is rarely where the work ends. None of it is exotic. What is worth settling at scoping is which of them the shop needs at launch, and which are better added once it has traction.",
      },
      {
        question: "Do we own the shop, the customer data and the accounts outright?",
        answer:
          "You do, from day one. The Shopify (or hosting) account, the domain, the analytics, the Search Console property, and the customer data all live in accounts you own. WebAsk is a collaborator, not a hostage-taker — if you ever fire us, you keep the store and everything in it, intact and exportable.",
      },
      {
        question: "Who looks after the shop once it is live?",
        answer:
          "Thirty days of post-launch support is included by default — bug fixes, small tweaks, and team training. After that, a Maintenance care plan covers platform and dependency updates, performance monitoring, and a monthly bucket of improvement hours, starting at £250/month. For a revenue-generating store we strongly recommend it; an unmaintained storefront accumulates broken apps and slow pages faster than you would expect.",
      },
    ],
  },
  {
    slug: "web-app-development",
    name: "Web Applications",
    category: "build",
    status: "live",
    summary: "Bespoke staff tools, booking systems, and customer portals.",
    heroSubhead:
      "Staff tools, customer portals, and booking systems where access control, retention, and the audit trail are code you can inspect — not promises in a policy.",
    whoItsFor:
      "Operators outgrowing a shared spreadsheet, practices that need clients to log in and book, or teams holding personal data their privacy notice already makes promises about.",
    pricing: {
      startingAmount: 9500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Roles and sign-in complexity, what it reads from and writes to, whether it holds health or other sensitive data, and any real-time or multi-tenant requirement.",
    },
    includes: [
      "Discovery and screen mapping that record roles, your lawful basis, and retention",
      "A typed TypeScript and Next.js build, checked against WCAG 2.2 AA in CI",
      "Sign-in, roles enforced server-side, and an append-only audit trail",
      "Deployment pipeline, staging, and error alerting — handed over at launch",
      "Export and erasure paths, plus a runbook and a walkthrough for your team",
    ],
    notIncluded: [
      "Legal or DPO advice — you set the lawful basis and retention periods",
      "Feature work past the agreed first version, and day-to-day user support",
    ],
    primaryCta: { label: "Get a web app quote", href: "/contact" },
    relatedServiceSlugs: ["ui-ux-design", "maintenance-support"],
    faqs: [
      {
        question: "What does the £9,500 starting price actually get me?",
        answer:
          "A production-deployed MVP — the core workflow built properly, not a clickable prototype. That includes discovery and design before any code, a typed Next.js implementation, authentication with role-based access, hosting and CI and monitoring stood up on accounts you own, and a documented handover. It is a real first version you can put in front of real users. What it is not is every feature you can imagine in version one — we build the core, ship it, and grow it from there.",
      },
      {
        question: "How do I know we need an application rather than a better website?",
        answer:
          "The test is whether anybody signs in. A site presents information and takes an enquiry; an application holds state — accounts, permissions, records that change, and a history of who changed them. Once people sign in, obligations a brochure site could meet by hand stop scaling: being able to say who saw a record, hand a copy to the person it describes, and delete it where erasure applies. Asked the other way round — if your process runs on a shared spreadsheet, a shared login, or an inbox nobody can audit, you already have an application, and nobody has written it down. If nothing changes and nobody signs in, a marketing site with a form is cheaper and will serve you better.",
      },
      {
        question: "How long from first call to people actually using it?",
        answer:
          "Roughly 8–20 weeks for a first version: one to two weeks of Discover, two to four of Design, three to eight or more of Build overlapping the tail of Design, then QA run against real accounts and real records rather than fixtures. What stretches the timeline is not the interface: it is the number of roles, the integrations, multi-tenancy, real-time behaviour, and the data decisions that have to be settled before the schema is right. Those get scoped in writing at the start, with a target launch date, rather than surfacing halfway through Build.",
      },
      {
        question: "Do you need access to our live customer data to build it?",
        answer:
          "Not by default, and it is worth agreeing that explicitly rather than assuming it. Most of the build can run against seeded records that match the shape of yours, which keeps real personal data out of development environments, out of screenshots and out of anything shared for review. Where live records genuinely have to be touched — a migration, or a defect that only reproduces against real data — it should happen under a written agreement setting out what may be accessed, on named accounts, with access logged and then removed. If the system will hold health records or anything else sensitive, that boundary belongs in the scope, not in an email at the point somebody needs a password.",
      },
      {
        question: "If we bring development in-house later, what do we take with us?",
        answer:
          "All of it. The repository, the database, and the deployment, CI and monitoring accounts either sit in accounts you control throughout or transfer cleanly at handover, with a runbook written for somebody who did not build the thing. The part worth asking about specifically is the data-protection layer: the audit trail, the retention job, and the export and erasure paths come with it, because they are code in your repository rather than a setting in somebody else's dashboard. Nothing needs unpicking from us first.",
      },
      {
        question: "What can it plug into — our CRM, our diary, our accounts software?",
        answer:
          "Anything with a documented API, which covers the common UK small-business stack: GoHighLevel or HubSpot, calendars and booking, payment and billing, email and SMS, and internal APIs of your own. The caveat worth raising early is that sector-specific software — practice management systems among them — may publish a thin API or none at all. Where that happens the options are a supported export, a manual step kept deliberately visible, or a different plan. Which systems it must read from and write to is established in Discover and named in the written scope, because integrations are one of the larger price levers.",
      },
      {
        question: "Once it is live, who patches it and who pays for new features?",
        answer:
          "Thirty days of post-launch support is included. After that, a Maintenance retainer (starting at £250/month) is the sensible next step, covering security patching, dependency upgrades, monitoring, and a monthly budget of improvement hours — because once people use an app daily, feature requests follow. Larger new capabilities are quoted as their own projects. An unmaintained application accumulates security and dependency debt quickly, so we recommend a plan for anything business-critical.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI / UX Design",
    category: "build",
    status: "live",
    summary:
      "Conversion-focused interface design and information architecture, built to WCAG 2.2 AA.",
    heroSubhead:
      "Research, wireframes and a tokenised interface system — designed to WCAG 2.2 AA and documented well enough for any team to build it.",
    whoItsFor:
      "Founders with a working product that looks dated, teams introducing a design system, or small businesses preparing for a rebuild who want the design done right first.",
    pricing: {
      startingAmount: 3000,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "How many flows are designed, how much of your current structure survives, and whether usability testing is added.",
    },
    includes: [
      "Discovery interviews, an information architecture, and a sitemap",
      "Wireframes signed off first, then finished design across 3–10 screens or flows",
      "Component library in Figma, tokenised so engineering can ship it",
      "Two revision rounds, then exported assets and written documentation",
      "Design carried into the build by the same person, if we build it too",
    ],
    notIncluded: [
      "Logo design, naming, or a brand identity from scratch",
      "Continuing design work after handover — quoted as a retainer",
    ],
    primaryCta: { label: "Get a design quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "web-app-development"],
    faqs: [
      {
        question: "What does the £3,000 starting price cover?",
        answer:
          "Research and an information architecture, wireframes and then visual design across your core screens or flows, a tokenised Figma component library, two rounds of revisions with final assets exported and documented, and the same person carrying the design into the code if you build with us. It designs the core of the product properly and sets the system. A sprawling product with dozens of unique screens, or one that needs usability testing, is a larger engagement that we scope explicitly.",
      },
      {
        question: "Do we need UX design as well as UI design?",
        answer:
          "UX is how the product is structured and how people move through it — the information architecture, the flows, the decisions that determine whether it actually works. UI is the visual layer on top — typography, colour, spacing, and components — the part that determines whether it feels considered and trustworthy. They are different disciplines that have to agree with each other, and we do both: we fix the structure and then design the surface, rather than treating one without the other.",
      },
      {
        question: "Does this cover a logo and a full brand identity?",
        answer:
          "No — we design UX and UI within an existing brand, not brand identities from scratch. Logo design and a full visual identity system belong with a dedicated brand studio, and we can point you at a name to try. If your brand assets are not ready, we can work to a minimal interim kit — a wordmark, a couple of colours, a typeface — so design is not blocked, then update once a proper identity lands.",
      },
      {
        question: "Will our developers actually be able to build what you hand over?",
        answer:
          "Buildable, by design. We deliver a tokenised component library in Figma — every colour, type size, and spacing step is a named token that maps directly onto the design tokens engineering uses — and components are defined once and composed, exactly as they are in code. That closes the usual gap where an engineer rebuilds mockups by eye and the result drifts. If we build the product with you, the design ships into the same system that consumes it; if your team builds it, the system is structured and documented so they can.",
      },
      {
        question: "Do we have to commission the build from you as well?",
        answer:
          "No. The design is a standalone deliverable — a documented, tokenised system and the designed flows — that any competent team can build. We structure and document it precisely so it does not depend on us. That said, when we also build it, the person who designed it is the person who writes the code, which removes the handover step where a build quietly drifts from the design it was meant to match.",
      },
      {
        question: "How long before we have something to build from?",
        answer:
          "A focused engagement is scoped at roughly 4–6 weeks: research and information architecture first, then wireframes, then the interface, then handover. The written scope carries target dates for each stage rather than only the end. More flows, a larger design system, or usability testing added on will extend it, and we would rather say so at the quote than at the handover. The order is deliberate — a step is easy to move while it is still a box on a wireframe, and expensive to move once it is a finished screen.",
      },
      {
        question: "Can we keep what works and only redesign what doesn't?",
        answer:
          "If the underlying structure holds up, yes — and it is the cheaper route when it does. The visual layer and the specific flows that are actually costing you can be reworked without touching screens that already do their job. The free audit sorts one from the other first, with a cost put against each fix. Where a restyle cannot reach the problem — because what is wrong is the order of the pages, not their appearance — we say so before you pay to make the wrong thing prettier.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "grow",
    status: "live",
    summary: "Organic search for UK businesses — technical fixes, keyword work, and writing.",
    heroSubhead:
      "Organic search run for the UK market — crawl and Core Web Vitals, keywords researched on UK volumes, and writing published every month.",
    whoItsFor:
      "small businesses invisible on Google despite a working site, multi-location practices that need local SEO, or operators ready to invest in a real organic channel.",
    pricing: {
      startingAmount: 750,
      currency: "GBP",
      cadence: "monthly",
      priceNote:
        "Competition on your terms, how many places must rank, how often you publish, and how much link work is needed are what move it.",
    },
    includes: [
      "Crawl, Core Web Vitals, schema and indexation audited in Bing as well as Google",
      "Keyword research pulled on a UK locale filter, one target per page",
      "On-page optimisation across existing high-intent pages",
      "Two to four long-form pieces a month, briefed and published",
      "Monthly reporting from Search Console as well as analytics, tied to enquiries",
    ],
    notIncluded: [
      "Google Ads, Meta or LinkedIn ads — this retainer is organic only",
      "Review generation, incentivised reviews, or reputation management",
    ],
    primaryCta: { label: "Get an SEO quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "crm-automation"],
    faqs: [
      {
        question: "How much does SEO cost in the UK?",
        answer:
          "SEO starts at £750 a month, + VAT where applicable. The UK bands that figure sits inside, and the sources behind them, are set out on this page above; what no band can tell you is which one your site needs, so the number that matters is the one quoted against your own terms. Two questions make any retainer comparable, ours included. First, what does a month actually contain: how many hours, how much gets published, and whether links are placed or earned. Second, who keeps the accounts, the content and the reporting if the engagement ends. A quote that answers both can be judged; a headline figure on its own cannot. If you want a number for your own site rather than a band, start with the free audit — five prioritised findings on search, speed and conversion, recorded, with no retainer attached. It is the least committing way to find out whether a monthly engagement is the right purchase at all.",
      },
      {
        question: "When should I expect rankings and enquiries to move?",
        answer:
          "Realistically, months — not weeks. Month one is technical fixes, keyword strategy, and on-page work, with little visible ranking movement. Months two to four bring early gains on longer-tail terms as new content indexes. Months five to twelve are where authority compounds and competitive terms can start to move — the horizon at which organic enquiries become realistic. Anyone promising page-one rankings next month is either misleading you or about to get your site penalised. If you need customers this week, paid search is the honest answer — SEO is the channel that pays off for years once it does.",
      },
      {
        question: "Could I just buy a one-off audit instead of a retainer?",
        answer:
          "You can, and sometimes that is the right purchase. A fixed-scope technical audit tells you what is wrong with crawl, schema, Core Web Vitals and indexation, and on a recently built site that may be the whole job. What an audit cannot do is hold a position. Search results are contested continuously — competitors publish, pages age, and the ranking systems change underneath a site nobody is touching — so the technical floor is a project, and keeping a position is a monthly one: writing, on-page work, links, and reacting to what Search Console shows.",
      },
      {
        question: "Will you promise us a number-one position on Google?",
        answer:
          "No. Nobody owns the ranking systems, so nobody can commit to a position inside them. A guarantee is only safe to offer on terms that are already easy to win — your own brand name, or a phrase with no real UK search volume behind it — so ask which terms any guarantee actually covers and what happens if it is missed. What can be committed to is the work and the evidence for it: the fixes made, the terms targeted, the writing published, and reporting honest enough to show when it is not working.",
      },
      {
        question: "You build websites — why are you also selling SEO?",
        answer:
          "Most of SEO's hardest wins are technical — Core Web Vitals, structured data, crawlability, indexation, site architecture — and a marketing agency without access to the code can only pass those on as recommendations and hope your developer acts on them. We are an engineering firm, so when the site is one we built or maintain, we fix them directly in the code. Content and strategy still matter and we do them too, but the technical floor is the part that cannot be fixed without access to the code, and that is where we start.",
      },
      {
        question: "Do I have to rebuild the site with you first?",
        answer:
          "No. We do technical, on-page, and content SEO on sites we did not build — the audit maps what is fixable on your current stack. The one caveat is honesty about the platform: if your site sits on something that fundamentally can't hit Core Web Vitals or support proper structured data, we will tell you that the highest-leverage SEO move is fixing or replacing the site, rather than charging you a retainer to optimise around a ceiling.",
      },
      {
        question: "What will I actually see at the end of each month?",
        answer:
          "What we did, what moved, and why — tied to leads rather than vanity metrics. You see rankings and organic traffic for the keywords that matter, the content and technical work completed that month, and the connection to enquiries and conversions. You will not get a wall of impressions and 'domain authority' that always trends up and never explains whether the channel is making you money.",
      },
      {
        question: "Will you manage our ad accounts as well?",
        answer:
          "No — this is an organic retainer, and nothing in it touches Google Ads, Meta or LinkedIn. There is a reason beyond focus: once one supplier reports on both channels, brand search and retargeting can quietly land on the organic side of the report, and you lose the ability to tell which channel is paying for itself. Keeping them apart keeps the reporting answerable. If paid is the right move for where you are, we will say so plainly rather than stretch this retainer to cover it.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile Apps",
    category: "build",
    status: "live",
    summary: "iOS and Android apps for what people open weekly, not once a year.",
    heroSubhead:
      "Native and cross-platform mobile apps — designed, built, and shipped to the App Store and Play Store with the same rigour as a website build.",
    whoItsFor:
      "small businesses whose customers would open an app weekly, operators bundling an app with services, or founders validating a mobile-first product.",
    pricing: {
      startingAmount: 12000,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Screen count, offline and notification behaviour, how many systems it integrates with, and whether one codebase can serve both stores.",
    },
    includes: [
      "Discover, agreed user flows, and a design system sized for one-handed use",
      "One codebase in React Native or Flutter, or native Swift/Kotlin where it earns it",
      "A typed API layer onto your existing systems, or a new backend built for it",
      "Store listings, privacy declarations, review rounds, and both launches",
      "30 days of post-launch fixes, then a care plan quote if you want one",
    ],
    notIncluded: [
      "App Store Optimisation (ASO) or paid-install campaigns",
      "Version-two features after launch — quoted as their own project",
    ],
    primaryCta: { label: "Get a mobile app quote", href: "/contact" },
    relatedServiceSlugs: ["web-app-development", "ui-ux-design"],
    faqs: [
      {
        question: "What does the £12,000 starting price cover?",
        answer:
          "A production first version live on both app stores — not a prototype. That includes discovery, a mobile design system, implementation in React Native, Flutter, or native code, integration with your backend (existing or one we build), App Store and Play Store submission and launch, and 30 days of post-launch support. It covers a focused MVP — the core experience built properly — not every feature you can imagine in version one. Mobile is our most variable service, so scope and store requirements move the number a lot.",
      },
      {
        question: "Do we need fully native Swift/Kotlin, or will React Native or Flutter do?",
        answer:
          "For most small businesses, cross-platform. One React Native or Flutter codebase ships to both iOS and Android, which takes real cost out of the build and keeps the two versions in step. We reach for fully native (Swift/Kotlin) only when the app does something performance-critical or deeply platform-specific that cross-platform cannot do well — and we will tell you honestly which camp yours is in rather than push native to inflate the invoice.",
      },
      {
        question: "How long does an app take to build and get through store review?",
        answer:
          "Plan for 12–24 weeks from signed scope to both listings live — the longest band on our service list, because offline behaviour, notifications and two separate store reviews all sit inside it. Two of the things that push it out are not engineering time: your content and assets, since screens cannot be finished against placeholder copy, and store review itself, which runs on Apple's and Google's clock and can add days per round. The written scope carries a target launch date, and resubmissions are ours to chase.",
      },
      {
        question: "Who deals with store approval, and whose developer accounts is the app in?",
        answer:
          "We submit it; you own it. Writing the listings, completing the privacy declarations both stores require, answering review feedback and resubmitting until the app is live all sit inside the project rather than landing on you at handover. The Apple and Google developer accounts are registered in your name from the start, the same rule we apply to your domain, hosting and analytics — and it matters more here than anywhere else, because an app published under someone else's account cannot be updated or moved without them.",
      },
      {
        question: "Can it connect to the booking system and CRM we already use?",
        answer:
          "An app is a front end onto something — a booking diary, a practice-management system, a CRM such as GoHighLevel or HubSpot, or an API you already run — so integration is scoped as engineering work, not as a finishing touch. Two questions get answered before we price it: whether the system exposes an API, and on which plan; and where the data is allowed to sit once it moves between systems. Where there is no API, we say so and scope a different route rather than promise a connection that does not exist.",
      },
      {
        question: "Does covering both iOS and Android mean paying for two builds?",
        answer:
          "Not two builds — but two store relationships. One codebase produces a real app for each store, so the engineering is not paid for twice. What genuinely doubles sits after the code: two sets of listings and privacy declarations, two review queues that can each send the app back, and two OS release calendars to keep current with. So the saving is in the build, not in the running of it.",
      },
      {
        question: "What does keeping the app maintained cost after the first 30 days?",
        answer:
          "Thirty days of post-launch support is included, then the app moves onto a Maintenance care plan (starting at £250/month). Mobile especially needs ongoing care — Apple and Google ship OS updates and policy changes regularly, and an unmaintained app eventually breaks or gets pulled from the store. The plan covers updates, monitoring, and a budget of improvement hours; larger new features are quoted as their own projects.",
      },
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM",
    category: "automate",
    status: "live",
    summary:
      "GoHighLevel-first CRM builds, HubSpot migrations, and automations wired to UK consent rules.",
    heroSubhead:
      "One system for pipeline, booking and messaging — GoHighLevel first, HubSpot where it fits, in accounts you own, with every sequence filtered by who you may lawfully email.",
    whoItsFor:
      "small businesses running their CRM on email and hope, agencies moving clients onto GoHighLevel, or operators migrating between HubSpot, Pipedrive, Salesforce and GoHighLevel.",
    pricing: {
      startingAmount: 2500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: the state of the contact data you already hold, pipeline and sequence count, booking and messaging integrations, and white-label sub-accounts.",
    },
    includes: [
      "GoHighLevel, HubSpot or another platform, set up in an account you own",
      "Capture forms, pipelines and intake sequences, consent recorded at entry",
      "Booking calendar, SMS, email and inbound calling, tested end to end",
      "Dashboards reporting pipeline stages and lead source, not open rates",
      "30 days of tuning after launch, and training for whoever runs it",
    ],
    notIncluded: [
      "Paid GoHighLevel or HubSpot licence fees (passed through at cost)",
      "Week-to-week campaign writing, sending and list upkeep — you or your marketing team",
    ],
    primaryCta: { label: "Get a CRM quote", href: "/contact" },
    relatedServiceSlugs: ["ai-integration", "seo"],
    faqs: [
      {
        question: "What does the £2,500 starting price include?",
        answer:
          "A working system, not just a logged-in account: CRM platform setup (GoHighLevel, HubSpot, or a chosen alternative), lead-capture forms and intake automations, pipelines built around your funnel, calendar/SMS/email/voice integrations, reporting dashboards, and 30 days of post-launch tuning plus team training. What moves the price hardest is not the feature list but the state of the contacts you already hold — whether a source and a lawful basis can still be established for each one.",
      },
      {
        question: "Is GoHighLevel or HubSpot the better fit for a UK service business?",
        answer:
          "It depends on your business, not on which we prefer to configure. GoHighLevel suits service businesses and agencies that want SMS, calls, booking, and pipelines in one place — and agencies that want to resell it white-labelled. HubSpot suits teams that want a polished, widely-integrated platform with room to grow into fuller marketing and sales hubs. Other tools fit specific needs. We make the call based on your funnel and your budget on the first call — and the same consent fields go in either way, so the platform choice never decides what you may lawfully send.",
      },
      {
        question: "What happens to our data if we move off HubSpot or another CRM?",
        answer:
          "It is inventoried before anything moves — contacts, custom fields, tags, pipelines, automations, templates, and the lawful basis behind each record — then rebuilt in the new platform rather than dropped in as a flat export, because an export moves rows and not what makes each one lawful to email. The same shape of work applies whether you are leaving HubSpot, ActiveCampaign, Pipedrive, Salesforce, Mailchimp or Keap. The cutover is staged, with the old system live until the new one has been checked against real records, so there is no day on which nobody can find a customer.",
      },
      {
        question: "Is the platform licence included in what you charge?",
        answer:
          "No — the platform's licence or seat fees are separate and passed through at cost. You own the subscription in your own account; we configure and automate the platform on top of it. Keeping the subscription in your name is deliberate: you own the system and the data, and you are never locked into us to keep access to your own CRM.",
      },
      {
        question: "Can you configure white-label GoHighLevel across our agency's sub-accounts?",
        answer:
          "Yes — your branding on the platform, a sub-account per client, and a snapshot holding the pipelines and automations you clone into each one, so onboarding a client starts from a configured template rather than a blank account. It is one of the larger price levers, because the work scales with how many packages you resell and how far apart they are. We scope it against the way you actually sell rather than a generic build.",
      },
      {
        question: "How long before the new system is actually running?",
        answer:
          "A focused build is scoped at two to four weeks, a migration at three to six, and the difference is almost entirely the data — how many automations have to be rebuilt, and how much of what the old system holds stands up on inspection. The date goes into the written scope rather than being estimated on a call, and the staged cutover above sits inside that window rather than after it.",
      },
      {
        question: "Do you write and send the campaigns once the CRM is live?",
        answer:
          "No — this service builds the system and wires the integrations, and that is where it stops. Writing campaigns, sending them and keeping the list in order week after week is ongoing marketing work: it belongs with your marketing team, or an agency retained to do exactly that. Drawing the line there keeps the build a fixed piece of work with an end, and leaves you free to hand the running of it to anyone without unpicking what was built.",
      },
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    category: "automate",
    status: "live",
    summary:
      "Inbound voice agents, chatbots that answer from your own material, and workflow automation.",
    heroSubhead:
      "Voice agents for the calls that ring out, chatbots grounded in copy you have approved, and n8n workflows for the repetitive admin — built to the stricter reading of UK rules.",
    whoItsFor:
      "small businesses losing leads to unanswered phones, operators drowning in repetitive admin, or teams that want AI woven into existing tools — not a separate experiment.",
    pricing: {
      startingAmount: 4500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Voice is the expensive part; after that, how much material a chatbot has to answer from and how many systems the workflows write into.",
    },
    includes: [
      "Discovery that fixes the job in scope and what gets handed to a person",
      "Build of one or more: inbound voice agent, grounded chatbot, n8n/Make workflow",
      "Wiring into your CRM, calendar and phone line — and the material it answers from",
      "Evaluation set built from your own enquiries, re-runnable after changes",
      "30 days of tuning after go-live — prompts, handover rules, retrieval gaps",
    ],
    notIncluded: [
      "Model and telephony usage — passed through at cost, on accounts you own",
      "Outbound calling campaigns — scoped separately, on an evidenced consent record",
    ],
    primaryCta: { label: "Get an AI integration quote", href: "/contact" },
    relatedServiceSlugs: ["crm-automation", "web-app-development"],
    faqs: [
      {
        question: "What does the £4,500 starting price cover?",
        answer:
          "A working, integrated capability — not a chatbot bolted onto your homepage and forgotten. It is a fixed fee against a written scope — one of voice, chat or workflow built and integrated end to end, rather than three things half-finished — agreed before anything starts rather than estimated hourly. £4,500 + VAT where applicable is a floor, not an average: the scope names which one, on which systems, and by when.",
      },
      {
        question: "Can we hear it before it takes a real call?",
        answer:
          "Yes — nothing speaks to a customer until you have listened to it. The agent runs on a test number you can ring as often as you like, and against the evaluation set built from your own enquiries, so you hear the awkward questions handled as well as the easy ones. Anything it gets wrong at that stage is a change to the material it answers from or to the rules it works under, not an argument about whether the model is clever enough. Go-live is your call, not a milestone in our plan.",
      },
      {
        question: "What happens when it does not know the answer?",
        answer:
          "It says so and hands over. Out-of-scope questions route to a person — a transfer during opening hours, a callback request outside them — with the conversation so far attached, so nobody has to start again. The subjects it must never attempt are agreed in discovery and written into the build rather than left to the model's judgement, which matters most in regulated work, where a helpful improvised answer is the expensive kind of wrong.",
      },
      {
        question: "Do we need a model trained on our own data?",
        answer:
          "No, and almost no small business actually needs one. We build on frontier models with retrieval (so they use your data) and tools (so they can take actions in your systems) — which covers the vast majority of real use cases far more cheaply and reliably than training a bespoke model. If your situation genuinely calls for custom training, we will tell you, but we will not sell it to you to pad the project.",
      },
      {
        question: "What does it cost to run once it is live?",
        answer:
          "Two things, and only one of them is optional. The usage the providers meter moves with call volume, so no fixed figure can cover it — what it comes to for you is modelled from your own numbers during scoping rather than estimated on a web page. The optional part is a Maintenance care plan from £250/month, which picks up monitoring and tuning once the 30 days of post-launch tuning run out.",
      },
      {
        question: "Do we have to change our phone number or our booking system?",
        answer:
          "No. The agent sits behind a divert from the line you already publish — out-of-hours only, overflow when every line is busy, or every call, whichever you choose — so the number on your signage and your listings does not move. It books into your existing calendar rather than a second one, and the chat widget is a component on the site you have now. Removing the divert or switching that component off puts everything back where it was: none of this should be hard to reverse.",
      },
      {
        question: "Which of our systems can it actually write into?",
        answer:
          "Anything with a documented interface. GoHighLevel and HubSpot are both first-class, as are Google and Microsoft calendars; past those, the test is whether a tool exposes an API rather than how well known it is. What matters is that an enquiry lands in the record your team already works from — the booking on the calendar, the qualified lead on the pipeline — not in a second inbox nobody opens. Each system is confirmed in discovery: a tool with no API is the one thing that changes the shape of the build.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    name: "Maintenance",
    category: "automate",
    status: "live",
    summary: "Monthly care plans — patching, monitoring, and a quarterly re-read of your pages.",
    heroSubhead:
      "Monthly cover for a live site, app or CRM — patching, monitoring and improvement hours on a fixed cadence, plus a quarterly re-read of the claims your pages still make.",
    whoItsFor:
      "Operators keeping a live site, app or CRM current without an in-house engineer, teams who have inherited a stack nobody has patched in a year, or practices that need the claims on their pages re-read as the rules move.",
    pricing: {
      startingAmount: 250,
      currency: "GBP",
      cadence: "monthly",
      priceNote:
        "How many properties are covered, how fast a response is guaranteed, and how much improvement time the month carries.",
    },
    includes: [
      "Scheduled dependency, framework and security updates — applied, not flagged",
      "Uptime, error and Core Web Vitals alerts routed to us, not to your inbox",
      "A set number of improvement hours each month — copy, fixes, small changes",
      "Quarterly review that re-reads claims, consent and prices, not just code",
      "Priority handling on anything you report, at your tier's response time",
    ],
    notIncluded: [
      "Redesigns, rebuilds and substantial new features — scoped as separate projects",
      "Paid platform licence fees (e.g. CRM seats, Vercel team plans)",
    ],
    primaryCta: { label: "Discuss a care plan", href: "/contact" },
    relatedServiceSlugs: ["web-development", "seo"],
    faqs: [
      {
        question: "What do the care plan tiers cost, and what separates them?",
        answer:
          "Three tiers, each a starting point: Essential from £250/month (a single property — patching, monitoring with alerts, a small monthly improvement bucket, and a quarterly review), Growth from £500/month (a revenue-generating site or app — a faster response SLA and a larger improvement bucket), and Priority from £1,000/month (business-critical software or multiple properties — the fastest SLA, more improvement hours, and proactive performance work). The exact hours and SLA within a tier are scoped to your properties and the level of cover you want; additional properties or a custom SLA are quoted on top of the closest tier.",
      },
      {
        question: "What does a plan actually do month to month?",
        answer:
          "Most of it is routine and runs on a schedule rather than on request — the panel on this page lists it, and the point of listing it is that it happens whether or not anything has gone wrong. What that list cannot show is who starts the work: patching is diarised, the alerts route to us, and the improvement hours exist so the small jobs get done in the month they come up instead of accumulating. Once a quarter the review steps back and re-reads the site itself: the claims, the consent behaviour, the published prices, and whether it still clears the accessibility gate and the layout-shift and main-thread budgets it launched on. Anything you raise in between is handled at your tier's response time.",
      },
      {
        question: "Can you take over a site somebody else built?",
        answer:
          "Yes. Inherited stacks are in scope, and they begin with a short audit rather than a start date — agreeing to look after code you did not write means first finding out what is in it. On WordPress that means upkeep and review rather than development inside the platform: which plugins are still maintained, what the theme is doing, and which third-party embeds are setting cookies nobody signed off. The audit reads the content as well as the code: a price list, a policy page or a testimonial can sit wrong for years without producing a single error. If what we find means a plan would only prop up a cracked foundation, we say so and quote the fix or the rebuild instead.",
      },
      {
        question: "My site works — why pay for upkeep at all?",
        answer:
          "Because the failures that cost money do not always announce themselves. A contact form can go on submitting while nothing arrives at the other end. A plugin update can change what fires before the consent banner. An image can go up without alternative text and quietly undo a page that met WCAG 2.2 AA the week before. A price or a policy can carry on describing something you stopped doing last year. None of that raises an error, and none of it shows on a page you have no reason to open. What a plan buys is somebody whose job is to look, on a schedule. If what you run is a handful of static pages with nothing to book, buy or claim, tell us — the honest answer may be that you do not need one.",
      },
      {
        question: "Where do the monthly hours stop and a project start?",
        answer:
          "The hours cover changes that fit inside a month without needing a plan of their own: copy edits, a new page, a form field, a fix, a small feature. The line is scope rather than goodwill — a redesign, a second version, a new integration, or anything that needs its own discovery is quoted as a project on its own scope. Keeping that line visible is what makes the monthly fee predictable, and it is why nothing large can hide inside a maintenance invoice. Where a request is genuinely borderline, we tell you which side it falls on before starting it rather than afterwards.",
      },
      {
        question: "What happens when something goes down?",
        answer:
          "Alerts for uptime, errors and performance are routed to us rather than to you, so the first move on an outage does not wait on somebody noticing and sending an email. Response time is a property of the tier rather than a slogan: Essential carries a guaranteed response window on what you raise, and the two tiers above it shorten it, Priority the shortest — that one exists for software a business genuinely runs on. Whichever tier you are on, the number is written into the plan rather than left to be argued about at the worst possible moment.",
      },
      {
        question: "Am I tied into a contract?",
        answer:
          "No — plans run month to month, and ending one costs a notice period and nothing else. Move up a tier when the asset becomes more business-critical, move down if it does not, or stop. That is only meaningful because of where the work lives: hosting, domain, analytics, Search Console and CRM stay in accounts in your name, and the code and content changes land in a repository you own. Nothing done on a plan creates a dependency on us to keep using it. A plan that would be painful to leave is a lock-in with a monthly invoice attached, not a service.",
      },
    ],
  },
] as const;

/** Lookup by canonical slug. Returns undefined if the slug isn't a known service. */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Resolve a service's `relatedServiceSlugs` to full `Service` objects, in
 * declared order, dropping any slug that doesn't resolve **or is not live** —
 * a live page never links to a draft (research 11 § 7). Returns an empty
 * array for an unknown service slug.
 */
export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedServiceSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((related): related is Service => related !== undefined && related.status === "live");
}

/** Slugs in canonical display order, drafts included — see `LIVE_SERVICE_SLUGS` for the public set. */
export const SERVICE_SLUGS: ReadonlyArray<string> = services.map((service) => service.slug);

/** The catalogue as the site presents it: nav, grid, sitemap, pricing table, contact form. */
export const liveServices: ReadonlyArray<Service> = services.filter(
  (service) => service.status === "live",
);

/** Live slugs — the set every public surface should gate on. */
export const LIVE_SERVICE_SLUGS: ReadonlySet<string> = new Set(
  liveServices.map((service) => service.slug),
);

/** Services in one category, in catalogue order. Defaults to the live set. */
export function getServicesByCategory(
  category: ServiceCategory,
  source: ReadonlyArray<Service> = liveServices,
): ReadonlyArray<Service> {
  return source.filter((service) => service.category === category);
}
