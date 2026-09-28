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
 * Starting prices are the **launch prices the founder adopted on 28 September
 * 2026** (decision gate D4 resolved; research `00` § 6 logs the decision and the
 * four changes from the `docs/02-uk-market-research.md` § 7 proposals). Change a
 * figure here and every surface follows; log the change there first — a
 * published price is a commitment.
 *
 * Every downstream page derives its figures from this module. Display is
 * **starting-price only** ("Starting at £X"), and the starting price buys a
 * **basic** scope: `includes` lists only what that figure buys, and the extras
 * are named as add-ons (the founder's brief, 27 September 2026). A custom-quote
 * CTA carries the rest. Figures show "excl. VAT" — the D2 interim position, see
 * `lib/pricing.ts`.
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
    summary:
      "A custom website that helps customers find your business and get in touch, built to a fixed fee and hosted in accounts you own.",
    heroSubhead:
      "Your website is slow, looks like a template and brings in no enquiries. We design and build an accessible replacement for a fixed fee, in accounts you own.",
    whoItsFor:
      "trades, clinics, dental practices, salons and professional firms replacing a slow or templated site, and founders who need a marketing site for a new business.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 3500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: page count, how much of the design is bespoke, whether your team needs an editor, and how many systems the site must talk to.",
    },
    includes: [
      "Five pages, custom-designed rather than themed, built on Next.js and Tailwind",
      "Set up so Google can read every page — structured data, a sitemap, canonical tags and link previews for social media",
      "WCAG 2.2 AA accessibility, plus a cookie banner where Reject is as easy as Accept",
      "Mobile loading measured against a two-second budget, with page size checked automatically, as the site is built",
      "Hosting, domain, analytics and Search Console set up in accounts you own",
      "Thirty days after launch for fixes, small changes and training your team",
    ],
    notIncluded: [
      "More pages, a blog, online booking, copywriting, an editor your team can publish from, location or industry pages, a temporary brand kit or a redirect plan for a site that ranks — each an add-on, quoted before work starts",
      "Search work after launch, a full brand identity and upkeep past day 30 — those belong to SEO, a brand studio and the Maintenance care plan",
    ],
    primaryCta: { label: "Get a web development quote", href: "/contact" },
    relatedServiceSlugs: ["ui-ux-design", "seo"],
    faqs: [
      {
        question: "How much does a small business website cost in the UK?",
        answer:
          "A WebAsk website starts at £3,500 as a fixed fee, excl. VAT, for five custom-designed pages set up so Google can read them, WCAG 2.2 AA accessibility and thirty days of aftercare. More pages, a blog, booking, copywriting or an editor your team can publish from move the price, and each is quoted before work starts. For comparison, published UK agency prices for a standard small-business site run £2,500–£10,000, with London dearer for the same specification. Across the UK market, running a site costs 15–20% of its build cost a year.",
      },
      {
        question: "Should I use a web design agency or a freelancer?",
        answer:
          "Use a freelancer if the site is a brochure that rarely changes, and an agency if the site is one of the ways you get customers. A typical four- or five-page UK freelance build lands at £1,200–£2,000. The regional UK agency average is £3,000–£6,000 for five to fifteen pages with design, a responsive build, basic SEO and a CMS. The deciding question is what the site has to do for the business, not the day rate.",
      },
      {
        question: "Is a custom website better than WordPress?",
        answer:
          "Not automatically; it depends on who builds it and who owns it. We build custom sites in Next.js, and in WordPress only for WooCommerce shops, which is a limit on us rather than a verdict on the platform. If a WordPress brochure site is a requirement, a specialist who builds in it willingly is a better buy than anyone building it reluctantly. Either way, ask whose name is on the hosting and the domain, and whether a different developer could pick up the site without starting again.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "We plan four to eight weeks for a site of five to ten pages, with the target date written into the scope rather than left open. The plan allows roughly a week or two to agree scope and structure, one or two for design, and two to six for the build, while the last design details are finished, then launch. Location pages, industry pages or a blog add a planned two to four weeks. Each stage assumes its copy, photographs and approvals are ready; where they are not, the schedule waits on those.",
      },
      {
        question: "How do you redesign a website without losing Google rankings?",
        answer:
          "By treating the redirect map as a deliverable rather than a launch-day chore. Every URL that ranks, every inbound link worth keeping and every page Google sends visitors to is listed and mapped to its replacement with a permanent redirect. Each is checked on a preview before the switch. For a site that already ranks, that redirect plan is an add-on, quoted before work starts. We are doing this for our own site: webask.co.uk is a 2020-era WordPress site, and every one of its legacy URLs has an explicit destination ahead of a switch that has not happened yet.",
      },
      {
        question: "Do we own the website, and can we edit it ourselves?",
        answer:
          "You own it from day one, and editing it yourselves means adding an editor later. The Vercel hosting project, the domain, analytics and Search Console sit in accounts you own, so ending work with us never costs you the site. At launch the copy lives in files in the codebase, so edits come through us, which suits pages that change a few times a year. When someone in-house wants to publish without asking, we add an editor, Payload CMS, which is self-hosted, has no licence fee and is quoted on its own as one to two weeks of work.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce",
    category: "build",
    status: "live",
    summary:
      "An online shop built to take orders, with checkout, delivery, VAT display and reviews set up properly and every account in your name.",
    heroSubhead:
      "Shopify or WooCommerce? We say which fits before anything is built, and our starting price is for a themed Shopify shop with checkout, delivery and VAT set up.",
    whoItsFor:
      "small businesses selling direct to consumers, brands outgrowing a templated theme, and sellers moving off Wix, Etsy or an ageing WooCommerce install.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 6500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: catalogue size, the depth of custom theming, integrations such as ERP, fulfilment or subscriptions, and the platform: Shopify, WooCommerce or headless.",
    },
    includes: [
      "A themed Shopify build, with listing, product, basket and checkout templates designed for your catalogue",
      "Payments, delivery rules, carrier rates and VAT-inclusive consumer price display, tested on real orders",
      "A review component that launches empty, stores proof of purchase and shows any incentive on the review",
      "Email sign-ups captured with an opt-out and stored with the basis they were collected on, and a cookie banner that lets nothing non-essential run before a visitor agrees",
      "Speed and WCAG 2.2 AA accessibility checked on the listing, product and checkout templates",
      "30 days of post-launch cover — bug fixes, small tweaks and team training — through the first weeks of live trading, with every account in your name",
    ],
    notIncluded: [
      "A move from WooCommerce, Wix or Etsy, a headless or custom front end, subscriptions, multi-currency, ERP or fulfilment integrations — each an add-on, scoped when you need it",
      "A site that takes enquiries rather than orders (Web Development), or looking after the shop once the 30 days end (Maintenance)",
    ],
    primaryCta: { label: "Get an e-commerce quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "seo"],
    faqs: [
      {
        question: "How much does an ecommerce website cost in the UK?",
        answer:
          "An ecommerce build starts at £6,500, excl. VAT, for a themed Shopify shop with payments, delivery, VAT display, reviews and consent set up. For comparison, UK agencies quote £2,500–£10,000 for a standard small-business website (Duport / GetYouOnline, 2026). A shop has an order path, a tax and delivery display, a review system and a consent layer that all have to be right at once. Catalogue size, custom theming, integrations and headless builds move the price. Running costs afterwards are not only hosting: a shop carries a platform subscription, the apps you run and payment fees, all in your own accounts.",
      },
      {
        question: "Shopify or WooCommerce: which is better for a UK small business?",
        answer:
          "Our starting recommendation is a themed Shopify store with custom template work, because Shopify runs the payments infrastructure, fraud tooling and platform patching, which leaves you less to look after. WooCommerce suits a business already running WordPress, with unusual product logic, or wanting to own everything, but then consent, reviews, VAT display and updates are all yours to look after, so someone has to own it; we build on either. Headless fits when the storefront experience is the product. We recommend on the first call.",
      },
      {
        question: "How long does it take to build an online shop?",
        answer:
          "Plan for 6–12 weeks from kick-off, with a focused Shopify storefront at the near end of that band. The plan allows one to two weeks for discovery, two to three for design and three to six for the build, overlapping the end of design, followed by a full round of testing and launch. We plan headless or fully custom builds, large catalogues, subscriptions or multi-system integrations at the far end of the band or past it. We commit to a target launch date in the written scope.",
      },
      {
        question: "How does a WooCommerce to Shopify migration affect our rankings?",
        answer:
          "Rankings can fluctuate for two to four weeks after a platform migration, and some sources describe one to three months. The move starts with a crawl of your current shop. Every product, category and content URL that carries traffic or links is mapped to its new address and permanently redirected. The redirects are checked against the new sitemap in Search Console before launch, watched there afterwards, and kept for at least twelve months. Reviews that cannot be traced to a real customer are left behind, because putting them on the new shop counts as publishing them again.",
      },
      {
        question: "Who sets up payments, delivery and VAT on the shop?",
        answer:
          "We do, and all three are in the starting scope. Payment gateway, delivery rules and carrier rates, and tax calculation are each tested against real orders before launch. The UK-specific part is the display, not the maths. Prices shown to consumers must include VAT, or say very clearly that they do not, so the tax setting and the price on the page have to match. Platform fees, such as transaction fees and app subscriptions, are not included: they stay in your name and are named in the proposal.",
      },
      {
        question: "Do we own the shop, the customer data and the accounts?",
        answer:
          "Yes, from day one. The Shopify or hosting account, the domain, the analytics, the Search Console property and the customer data all live in accounts you own. If you ever leave, you keep the store and everything in it, intact and exportable. Thirty days of post-launch support is included: bug fixes, small tweaks and team training. After that, a Maintenance care plan covers platform and dependency updates, performance monitoring and a monthly bucket of improvement hours; a shop earns revenue, so it fits the Growth plan, from £500 a month, excl. VAT.",
      },
    ],
  },
  {
    slug: "web-app-development",
    name: "Web Applications",
    category: "build",
    status: "live",
    summary:
      "Custom web apps, booking systems and customer portals that replace the breaking spreadsheet — built around your workflow, on accounts you own.",
    heroSubhead:
      "The spreadsheet is breaking and off-the-shelf software does not fit. One tool built around your workflow, with sign-in and roles, on accounts you own.",
    whoItsFor:
      "clinics and practices that need customers to log in and book, small businesses outgrowing a shared spreadsheet, and teams whose subscription software fits everything except their own process.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 4500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: more workflows, roles and integrations, health or other sensitive data, real-time updates, and several organisations each signing in to their own space — a multi-user platform with several integrations starts from £9,500 excl. VAT.",
    },
    includes: [
      "Discovery and screen mapping that record the one workflow, the roles, your lawful basis and retention",
      "One workflow built end to end in TypeScript and Next.js, installable to a phone's home screen, checked automatically against WCAG 2.2 AA as it is built",
      "Sign-in with roles enforced server-side",
      "One integration with a system you already use, such as a calendar, a CRM or a payment provider",
      "Hosting, deployment and error alerting set up on accounts you own, a runbook, a team walkthrough and thirty days of post-launch support",
    ],
    notIncluded: [
      "More workflows, roles or integrations, an append-only audit trail, export and erasure paths, separate spaces for several organisations, real-time features, sensitive data or feature work past the agreed first version — each an add-on, scoped when you need it",
      "A store app for iPhone and Android (Mobile Apps), or a marketing website with an enquiry form (Web Development)",
    ],
    primaryCta: { label: "Get a web app quote", href: "/contact" },
    relatedServiceSlugs: ["ui-ux-design", "maintenance-support"],
    faqs: [
      {
        question: "How much does custom software or a booking system cost?",
        answer:
          "From £4,500 excl. VAT for a focused tool, such as a booking system or a staff tool built around one workflow, with sign-in and roles and one integration, handed over on accounts you own. Multi-user platforms with several integrations start from £9,500 excl. VAT. The figure moves with the number of roles, what the app reads from and writes to, health or other sensitive data, real-time needs and separate spaces for several organisations. After a thirty-minute call you get either a fixed-fee written scope or the name of somebody better placed to build it, within three working days.",
      },
      {
        question: "Should we build custom software or buy off the shelf?",
        answer:
          "Buy, if a product fits your process and its documentation answers four questions. Can you set the retention period? Can you export the audit trail? Is there a published accessibility conformance statement, and what is its date? Who is named as the contact if the Information Commissioner's Office (ICO) writes about the data it holds? A product that answers all four has saved you the cost of a build. Build when it cannot, and the gap matters for the data you hold. Either way the obligation does not move: whoever decides to collect the data still answers for it.",
      },
      {
        question: "How do I know we need an application rather than a better website?",
        answer:
          "The test is whether anybody signs in. A website presents information and takes an enquiry; an application holds state — accounts, permissions, records that change, and a history of who changed them. If your process runs on a shared spreadsheet, a shared login or an inbox nobody can audit, you already have an application, and nobody has written it down. If nothing changes and nobody signs in, a marketing site with an enquiry form is cheaper and will serve you better.",
      },
      {
        question: "How long does it take to build a web app?",
        answer:
          "Roughly 8–20 weeks for a first version: one to two weeks of Discover, two to four of Design, three to eight or more of Build overlapping the tail of Design, then testing. What stretches the timeline is not the interface. It is the number of roles, the integrations, separate spaces for several organisations, real-time behaviour, and the data decisions that have to be settled before the database design is right. Those are scoped in writing at the start, with a target launch date.",
      },
      {
        question: "What can it plug into — our CRM, our diary, our accounts software?",
        answer:
          "Anything with a documented API, meaning a published way for other software to connect, which covers GoHighLevel or HubSpot, calendars and booking, payment and billing, email and SMS, and internal APIs of your own. The starting price includes one integration; each further one moves the scope. Sector-specific software, practice management systems among them, may publish a thin API or none at all. Then the options are a supported export, a manual step kept deliberately visible, or a different plan. Which systems it connects to is named in the written scope.",
      },
      {
        question: "Who owns the code, and who looks after it after launch?",
        answer:
          "You own all of it. The repository, the database, and the hosting, deployment and monitoring accounts sit in accounts you control or transfer at handover, with a runbook written for somebody who did not build it. Where the build includes an audit trail and export and erasure paths, they are code in your repository, not a setting in somebody else's dashboard. After thirty days of included support, a Maintenance care plan covers security patching, dependency upgrades, monitoring and improvement hours, from £250 a month excl. VAT, with the tier set by how much the business relies on the app.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI / UX Design",
    category: "build",
    status: "live",
    summary:
      "A UX audit of where people leave your site or product, then a redesign of the key flows, to WCAG 2.2 AA.",
    heroSubhead:
      "People land and leave and nobody can say why. A UX audit looks for where they give up; the key flows are then redesigned, documented for any team to build.",
    whoItsFor:
      "clinics, practices and shops whose site gets visits but few enquiries, founders with a working product that looks dated, and businesses about to rebuild who want the structure right first.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 3000,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: how many flows are designed, how much of your current structure survives, and whether usability testing or a design system is added.",
    },
    includes: [
      "A UX audit of your current site or product, with discovery interviews",
      "An information architecture and a sitemap, agreed before any screen is drawn",
      "Wireframes signed off first, then finished design across 3–10 screens or flows, to WCAG 2.2 AA",
      "Two revision rounds, then exported assets and written documentation",
    ],
    notIncluded: [
      "A design system, usability testing, more flows or design work after handover — each an add-on, quoted when you need it",
      "Building the design (that is Web Development or Web Applications); logo design, naming or a brand identity from scratch belongs with a brand studio",
    ],
    primaryCta: { label: "Get a design quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "web-app-development"],
    faqs: [
      {
        question: "How much does a UX audit and redesign cost?",
        answer:
          "From £3,000 a project, excl. VAT. That covers the audit with discovery interviews, a sitemap, wireframes, and finished design across 3–10 screens or flows, with two revision rounds and a documented handover. The full UX audit is the first stage of that work, not a report sold on its own; the free audit is a first pass that costs nothing. More flows, usability testing or a design system move the price, and each is scoped explicitly before you commit.",
      },
      {
        question: "What is the difference between UX and UI design, and do we need both?",
        answer:
          "UX is how a site or product is structured and how people move through it: the information architecture, the flows, the decisions that determine whether it works. UI is the visual layer on top (typography, colour, spacing and components), which decides whether it feels considered and trustworthy. They are different disciplines that have to agree with each other, and we do both, in that order: fix the structure first, then design the surface, rather than treating one without the other.",
      },
      {
        question: "Is a design system worth it for a small team?",
        answer:
          "Not always: for a redesign of a few key flows, the documented screens may be enough, which is why it is an add-on. A design system is a component library in Figma. Every colour, type size and spacing step is a named token that maps onto the tokens your developers use, and each component is defined once, as it is in code. It is meant to spare an engineer from rebuilding mockups by eye, which is where a build can drift from the design.",
      },
      {
        question: "Do we have to commission the build from you as well?",
        answer:
          "No. The design is a standalone deliverable (the designed flows, exported assets and written documentation) that any competent team can build, and it is documented precisely so it does not depend on us. When we also build it, the person who designed it is the person who writes the code, which removes the handover step where a build can drift from the design it was meant to match. The build itself is scoped as its own project.",
      },
      {
        question: "How long does a UX audit and redesign take?",
        answer:
          "A focused engagement is scoped at roughly 4–6 weeks: the audit and information architecture first, then wireframes, then the interface, then handover. The written scope carries a target date for each stage rather than only the end. More flows, a design system or usability testing added on will extend it, and we would rather say so at the quote than at the handover. The order is deliberate: a step is easy to move while it is still a box on a wireframe, and expensive once it is a finished screen.",
      },
      {
        question: "Can we keep what works and only redesign what doesn't?",
        answer:
          "If the underlying structure holds up, yes, and it is the cheaper route when it does. The visual layer and the flows that are costing you can be reworked without touching screens that already do their job. The free audit is a no-cost first look; the paid UX audit then sorts one from the other, and each change is scoped before you commit. Where a restyle cannot reach the problem, because what is wrong is the order of the pages rather than their appearance, we will say so before you pay to make the wrong thing prettier.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "grow",
    status: "live",
    summary:
      "Get found on Google for the searches your customers type — technical fixes, UK keyword research, local pages and monthly writing, reported against enquiries.",
    heroSubhead:
      "Your site works but does not show up when customers search. We audit what stops Google reading it, fix what your platform allows, target UK search terms, and publish monthly.",
    whoItsFor:
      "small businesses with a working site that Google does not show, and dental practices and clinics that need to be found in the area they serve.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 750,
      currency: "GBP",
      cadence: "monthly",
      priceNote:
        "What moves the price: competition on your terms, how many places must rank, how often you publish, and how much link work is needed.",
    },
    includes: [
      "A technical audit and the fixes that follow — crawl, Core Web Vitals, schema and indexation, checked in Bing as well as Google",
      "Keyword research pulled on a UK locale filter, one target per page",
      "On-page optimisation across your existing high-intent pages",
      "Location pages for the area you serve",
      "Writing briefed from the keyword research and published every month",
      "A monthly report from Search Console as well as analytics, tied to enquiries",
    ],
    notIncluded: [
      "More towns or branches that must rank, more writing a month, or link work on contested terms — each is an add-on, priced when you need it",
      "Google Ads, Meta or LinkedIn ads, or rebuilding the site itself — this retainer is organic only, and a rebuild is Web Development",
    ],
    primaryCta: { label: "Get an SEO quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "crm-automation"],
    faqs: [
      {
        question: "How much does SEO cost in the UK?",
        answer:
          "Ours starts at £750 a month, excl. VAT. For context, UK SEO retainers for small businesses run from light upkeep at about £150 a month to a full campaign at £500–£1,500 and upward (dotwall / RedEagle, 2026). £750 sits in the lower half of the full-campaign band and clear of the junk tier at around £99. No band can tell you which one your site needs, so the number that matters is the one quoted against your own terms.",
      },
      {
        question: "How long does SEO take to work?",
        answer:
          "Months, not weeks. Month one is technical fixes, keyword strategy and on-page work, and little visible ranking movement should be expected from it. Months two to four can bring early gains on longer-tail terms as new writing is indexed. In months five to twelve, authority can compound and competitive terms can start to move — the horizon at which organic enquiries can become realistic. Treat any promise of page one next month with suspicion. If you need customers this week, paid search is the honest answer.",
      },
      {
        question: "Is SEO worth it for a small business?",
        answer:
          "It can be, when customers search for what you sell and you can give it months. Google holds roughly 92.7% of UK search (Q1 2025, Searchlab / DigitalApplied). It is the wrong first purchase in two cases. If you need customers this week, paid search fits. If you sell same-day services from a shopfront, a complete Google Business Profile is the whole game. A budget of £150 a month buys upkeep rather than a campaign.",
      },
      {
        question: "Can I buy a one-off SEO audit instead of a retainer?",
        answer:
          "You can, and sometimes that is the right purchase. A fixed-scope technical audit tells you what is wrong with crawl, schema, Core Web Vitals and indexation, and on a recently built site that may be the whole job. What an audit cannot do is hold a position: competitors publish, pages age and the ranking systems change underneath a site nobody is touching. Fixing the technical problems is a project; keeping a position is monthly work. The free audit, five prioritised findings on search, speed and conversion with no retainer attached, is the least committing start.",
      },
      {
        question: "How do I choose an SEO agency, and can anyone guarantee a number-one ranking?",
        answer:
          "Nobody can honestly guarantee a number-one ranking, because nobody owns the ranking systems. Ask what a month contains, who keeps the accounts and content if it ends, and which terms any guarantee covers. A guarantee is only safe to offer on terms that are already easy to win, such as your own brand name or a phrase with no real UK search volume behind it. What can be committed to is the work and the evidence for it: the fixes made, the terms targeted, the writing published, and reporting honest enough to show when it is not working.",
      },
      {
        question: "Do I have to rebuild my website with you first?",
        answer:
          "No. The retainer covers technical, on-page and content SEO on a site we did not build, and the audit maps what is fixable on your current platform. The one caveat is the platform. If it fundamentally cannot meet Core Web Vitals or carry proper structured data, we will say the highest-leverage move is fixing or replacing the site, not charge a retainer to optimise around a ceiling. If you replace it, every old URL with real content should get a permanent redirect held for at least twelve months, and rankings can move for two to four weeks before they settle.",
      },
    ],
  },
  {
    // Live. Reshaped 28 September 2026 to research 13 § 3 (problem first,
    // basic scope at the starting figure, six FAQs at 60–100 words) with the
    // live-page budget of the 28 September brief; facts carried from the page
    // as of 27 September 2026. VAT wording per the D2 interim position.
    slug: "mobile-app-development",
    name: "Mobile Apps",
    category: "build",
    status: "live",
    summary:
      "An iOS and Android app for customers or staff who would open it weekly, built once and launched on both stores in accounts you own.",
    heroSubhead:
      "Customers want to book from their phone. We check whether that needs an app first, then build it once and launch it on both stores.",
    whoItsFor:
      "small businesses whose customers would open an app weekly, firms whose field engineers, drivers or mobile therapists run their working day on one, operators bundling an app with services, or founders validating a mobile-first product.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 12000,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: screen count, offline and notification behaviour, how many systems it connects to, and whether one codebase can serve both stores.",
    },
    includes: [
      "A written scope with a target launch date, the screens and steps agreed, and a design built for one-handed use",
      "One React Native or Flutter codebase for iOS and Android, built around one core flow",
      "A connection to one system you already run",
      "Store listings, privacy declarations, review rounds and both launches, in developer accounts registered in your name",
      "30 days of post-launch fixes",
    ],
    notIncluded: [
      "Offline use, push notifications, more screens, more connected systems, a new back-end built for the app and fully native Swift and Kotlin builds — each is an add-on, priced in the scope; version-two features after launch are quoted as their own project",
      "A portal or booking tool that runs in the browser and installs to the home screen — that is Web Applications",
    ],
    primaryCta: { label: "Get a mobile app quote", href: "/contact" },
    relatedServiceSlugs: ["web-app-development", "ui-ux-design"],
    faqs: [
      {
        question: "How much does it cost to build an app in the UK?",
        answer:
          "From £12,000 excl. VAT for a first version live on both the App Store and the Play Store — a production app, not a prototype. It is built around one core flow, the thing people would do on the app in a normal week, and runs from one React Native or Flutter codebase on both stores. It is not every feature you can imagine in version one: offline use, push notifications, more screens, more connected systems and a new back-end are add-ons, priced in the written scope.",
      },
      {
        question: "Do we actually need an app in the stores?",
        answer:
          "Not always. If customers want to book from their phone, you may need no app at all: a booking page that works well on a phone, with confirmation and reminder texts, does it. For a portal, dashboard or quoting tool people sign in to, a web app that installs to the home screen sits in between. It starts from £4,500 for a focused tool or £9,500 for a multi-user platform with several integrations, excl. VAT, under Web Applications. A store app, from £12,000 excl. VAT, is right when the store listing, offline use or the phone's features are the point.",
      },
      {
        question: "Native or cross-platform: which does our app need?",
        answer:
          "Cross-platform, unless the app has a reason not to be. One React Native or Flutter codebase ships a real app to both iOS and Android, so the engineering is not paid for twice and the two versions stay in step. Fully native Swift and Kotlin earns its cost only when the app does something performance-critical or deeply platform-specific that cross-platform cannot do well. The choice is settled before design starts, the reasoning goes into the written scope, and we will tell you which camp yours is in.",
      },
      {
        question: "How long does it take to build an app?",
        answer:
          "Plan for 12–24 weeks from signed scope to both listings live, with two separate store reviews inside that. Two things push it out that are not engineering time. One is your content and assets, since screens cannot be finished against placeholder copy. The other is store review itself, which runs on Apple's and Google's clock and can add days per round. The written scope carries a target launch date, and resubmissions are ours to chase.",
      },
      {
        question: "Who owns the app, and who deals with store approval?",
        answer:
          "You own it; we submit it. The Apple and Google developer accounts are registered in your name from the start, the same rule we apply to your domain, hosting and analytics. An app published under someone else's account cannot be updated or moved without them. Writing the listings, completing the privacy declarations both stores require, answering review feedback and resubmitting until the app is live all sit inside the project, rather than landing on you at handover.",
      },
      {
        question: "What does an app cost to maintain after launch?",
        answer:
          "Thirty days of post-launch fixes are included, then it moves onto a Maintenance care plan from £250 a month excl. VAT, covering updates, monitoring and improvement hours. An app needs it more than a website does: Apple and Google ship operating-system updates and policy changes regularly, and an unmaintained app eventually breaks or gets pulled from the store. That work follows their release calendar rather than your feature list, so a simple app costs close to what a complicated one does to keep current. If the second-year budget does not exist, the first year should not either.",
      },
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM",
    category: "automate",
    status: "live",
    summary:
      "Enquiries captured, followed up and booked from one system — GoHighLevel first, HubSpot where it fits, in an account you own.",
    heroSubhead:
      "Leads arrive by form, text and phone, and fall through the cracks. One system for pipeline, booking and messaging, in an account you own.",
    whoItsFor:
      "clinics, practices, trades and service businesses whose enquiries land in several places and get followed up by whoever notices, agencies moving clients onto GoHighLevel, and teams migrating between HubSpot, Pipedrive, Salesforce and GoHighLevel.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 3500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: the state of the contact data you already hold, pipeline and sequence count, booking and messaging integrations, a migration, and white-label sub-accounts.",
    },
    includes: [
      "GoHighLevel, HubSpot or another platform, set up in an account you own",
      "Capture forms and a pipeline built around your funnel, with legal form and consent recorded at entry",
      "Intake sequences that check who may be emailed before they send",
      "Booking calendar, SMS, email and inbound calling, tested end to end",
      "A dashboard reporting pipeline stages and lead source, not open rates",
      "30 days of tuning after launch, and training for whoever runs it",
    ],
    notIncluded: [
      "A migration from another CRM, more pipelines and integrations, or white-label sub-accounts — each an add-on, scoped when you need it",
      "A chatbot or voice agent that answers enquiries (AI Integration), or writing and sending campaigns week to week",
    ],
    primaryCta: { label: "Get a CRM quote", href: "/contact" },
    relatedServiceSlugs: ["ai-integration", "seo"],
    faqs: [
      {
        question: "How much does a GoHighLevel or HubSpot setup cost in the UK?",
        answer:
          "From £3,500 excl. VAT, as a project rather than a retainer. That buys a working system for one business: forms that record consent, a pipeline with follow-up sequences, a booking calendar with SMS, email and inbound calling, a dashboard, and thirty days of tuning with training. Platform licence fees and whatever the platform charges on usage are separate and passed through at cost. What moves the price hardest is the state of the contacts you already hold; pipeline and sequence count, booking and messaging integrations and white-label sub-accounts move it too, and a migration is an add-on, scoped in writing.",
      },
      {
        question: "Is GoHighLevel or HubSpot better for a UK small business?",
        answer:
          "It depends on your business: GoHighLevel suits service businesses that want SMS, calls, booking and pipelines in one place, and agencies that want to resell it white-labelled, while HubSpot suits teams that want a polished, widely integrated platform with room to grow into fuller marketing and sales hubs. We make the choice from your funnel and your budget on the first call. The same consent fields go in either way, so the platform never decides what you may lawfully send.",
      },
      {
        question: "Can you migrate us from HubSpot to GoHighLevel, or into HubSpot?",
        answer:
          "Yes, either way, and from ActiveCampaign, Pipedrive, Salesforce, Mailchimp or Keap. Contacts, custom fields, tags, pipelines, automations, templates and the lawful basis behind each record are inventoried, then rebuilt in the new platform. A flat export moves rows, not what makes each one lawful to email, so a record whose basis the old system cannot show arrives unconsented rather than optimistically tagged. The switch-over is staged, with the old system live until the new one is checked against real records. Where a sales team works in HubSpot daily, we will say if moving is not worth it.",
      },
      {
        question: "Is the GoHighLevel or HubSpot subscription included in the price?",
        answer:
          "No. The platform's licence or seat fees are separate and passed through at cost, and so is whatever it charges on usage, such as texts, calls or AI, depending on what you use; the subscription sits in your own account; we configure and automate the platform on top of it. Keeping it in your name is deliberate: you own the system and the data, and you are never locked into us to keep access to your own CRM. GoHighLevel's plans are compared in our buyer's guide on the blog, and the live figures are on the vendor's own plan page.",
      },
      {
        question: "Can you set up white-label GoHighLevel and snapshots for our agency?",
        answer:
          "Yes: your branding on the platform, a sub-account per client, and a snapshot of the pipelines and automations to clone into each one. Onboarding a client then starts from a configured template, not a blank account. The legal-form field and the lawful-basis filter go into the snapshot, so every sub-account inherits them. It is one of the larger price levers, because the work scales with how many packages you resell and how far apart they are.",
      },
      {
        question: "How long does a CRM setup or migration take?",
        answer:
          "A focused build is scoped at two to four weeks and a migration at three to six. The difference is almost entirely the data: how many automations have to be rebuilt, and how much of what the old system holds stands up on inspection. The date goes into the written scope rather than being estimated on a call. The switch-over happens in stages inside that window, so there is no day on which nobody can find a customer.",
      },
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    category: "automate",
    status: "live",
    summary:
      "Chatbots that answer from your own approved material, workflows that end the retyping, and voice agents for the calls that ring out.",
    heroSubhead:
      "Your team answers the same questions all day, and evening enquiries wait until morning. A chatbot, workflow or voice agent takes one job off them, built into your systems.",
    whoItsFor:
      "clinics, dental practices, salons and trades whose team answers the same questions all day, operators retyping the same data between systems, and teams that want AI inside the tools they already use rather than run as a separate experiment.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 4500,
      currency: "GBP",
      cadence: "project",
      usageNote:
        "Usage is not included: whatever the platforms charge for, such as model and call usage or workflow runs, is passed through at cost on accounts you own, based on what you use, and modelled from your own numbers during scoping.",
      priceNote:
        "What moves the price: a voice agent, which is the expensive part; then how much material a chatbot answers from and how many systems it writes into.",
    },
    includes: [
      "Discovery that fixes the one job in scope, what it must never attempt and what gets handed to a person",
      "One chatbot that answers from copy you have approved, or one n8n or Make workflow, built end to end",
      "Wiring into one system you already use, such as GoHighLevel, HubSpot or a Google or Microsoft calendar",
      "A test set built from your own enquiries, run before launch and re-runnable after every change",
      "30 days of tuning after go-live — prompts, handover rules, gaps in what it can answer",
    ],
    notIncluded: [
      "An inbound voice agent built to your own systems and answer sets, more systems, a second job, or outbound calling on an evidenced consent record — each an add-on, scoped when you need it",
      "Building the pipeline the leads land in (CRM), or monitoring once the 30 days of tuning end (Maintenance)",
    ],
    primaryCta: { label: "Get an AI integration quote", href: "/contact" },
    relatedServiceSlugs: ["crm-automation", "web-app-development"],
    faqs: [
      {
        question: "How much does an AI chatbot or voice agent cost in the UK?",
        answer:
          "From £4,500 excl. VAT for one job built end to end: a chatbot answering from your approved material, or one n8n or Make workflow, wired into one system you use. It is a fixed fee against a written scope, agreed before anything starts. A voice agent built to your own systems is an add-on, priced in that written scope. Whatever the platforms charge for, such as model and call usage or workflow runs, is not included: it is passed through at cost on accounts you own and modelled from your own numbers during scoping.",
      },
      {
        question: "Are AI receptionists legal in the UK?",
        answer:
          "An AI receptionist answering inbound calls is the far cleaner UK legal case: the caller rang you and nothing is marketed, while automated outbound marketing calls need the subscriber's prior explicit consent under PECR. Classification is not formally resolved; informal ICO guidance suggests an AI capable of genuine two-way conversation, with a human handoff available, may be treated more like a live call — an indication, not a ruling. It is built for the safer reading: it identifies itself, offers a person or a callback, and discloses any recording up front. None of this is legal advice.",
      },
      {
        question: "Can we test it before customers use it?",
        answer:
          "Yes — nothing speaks to a customer until you have tried it yourself. A voice agent runs on a test number you can ring as often as you like. Your build is run against a test set drawn from your own enquiries, so you see how it handles the awkward questions as well as the easy ones. A wrong answer at that stage is a change to the material it answers from or the rules it works under. Go-live is your call, not a milestone in our plan.",
      },
      {
        question: "What happens when it does not know the answer?",
        answer:
          "It says so and hands over. Out-of-scope questions route to a person with the conversation so far attached, so nobody has to start again; with the voice-agent add-on, that is a transfer during opening hours and a callback request outside them. The subjects it must never attempt are agreed in discovery and written into the build rather than left to the model's judgement. That matters most in regulated work such as clinics and dental practices, where a helpful improvised answer is the expensive kind of wrong.",
      },
      {
        question: "Do we need a custom GPT or a model trained on our own data?",
        answer:
          "A chatbot that answers from your own material, yes; a model trained on your data, not for the jobs this service builds. The build uses frontier models with retrieval, so they use your own material, and with tools, so they can take actions in your systems, such as booking into your calendar. When an answer is wrong or a price changes, the fix is an edit to that material or to the rules, not a retraining. If your situation genuinely calls for custom training, we will tell you, but we will not sell it to you to pad the project.",
      },
      {
        question: "Will it work with GoHighLevel, HubSpot and our calendar?",
        answer:
          "Yes for GoHighLevel, HubSpot and Google and Microsoft calendars, which are all first-class; past those, the test is whether a tool exposes an API rather than how well known it is. What matters is that an enquiry lands in the record your team already works from, the booking on the calendar or the lead on the pipeline, not in a second inbox. The starting price covers one system and each further one moves the scope. Each system is confirmed in discovery: a tool with no API is the one thing that changes the shape of the build.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    name: "Maintenance",
    category: "automate",
    status: "live",
    summary:
      "Your website, app or CRM kept patched, monitored and re-read every quarter for what it claims, not just its code.",
    heroSubhead:
      "Nobody has touched the site since launch and you are not sure it still works. We keep it patched and monitored, and re-read it every quarter.",
    whoItsFor:
      "clinics, dental practices, online shops and service firms keeping a live site, app or CRM current without an in-house developer, including sites inherited from a builder who has moved on.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 250,
      currency: "GBP",
      cadence: "monthly",
      priceNote:
        "What moves the price: how many properties are covered, how fast a response is guaranteed, and how much improvement time the month carries.",
    },
    includes: [
      "One property covered — a website, an app or a CRM, or the monitoring of an AI build we delivered",
      "Scheduled security, framework and dependency updates — applied, not flagged",
      "Uptime, error and performance alerts routed to us, not to your inbox",
      "A small bucket of improvement hours each month — copy edits, fixes, small changes",
      "A quarterly review that re-reads claims, consent and prices and re-checks accessibility, not just code",
      "Priority handling on anything you report, at your tier's response time",
    ],
    notIncluded: [
      "A faster response time, more improvement hours, proactive performance work or extra properties — the Growth and Priority tiers, or quoted on top of the closest one",
      "Redesigns, rebuilds and substantial new features (projects under Web Development, Web Applications or E-Commerce), platform licence fees such as CRM seats or Vercel team plans, and whatever the platforms charge on usage, such as texts, calls or AI, billed on top at cost on what you use",
    ],
    primaryCta: { label: "Discuss a care plan", href: "/contact" },
    relatedServiceSlugs: ["web-development", "seo"],
    faqs: [
      {
        question: "How much does website maintenance cost in the UK?",
        answer:
          "WebAsk care plans start at £250 a month, excl. VAT, for Essential: one property, updates applied, monitoring with alerts, a small monthly bucket of improvement hours and a quarterly review. Growth, from £500 a month excl. VAT, suits a site or app that earns revenue and adds a faster response time and more hours. Priority, from £1,000 a month excl. VAT, covers business-critical software or several properties. Published UK market data puts the ongoing cost of a site at 15–20% of its build cost a year.",
      },
      {
        question: "What does a website maintenance plan include?",
        answer:
          "A plan applies security, framework and dependency updates on a schedule, routes uptime, error and performance alerts to us, and carries a set number of improvement hours each month and a quarterly review. The routine work happens whether or not anything has gone wrong, and the hours exist so small jobs get done in the month they come up instead of accumulating. Once a quarter the review re-reads the site itself: the claims it makes, what loads before the consent banner, the published prices, and whether it still passes an automated accessibility check.",
      },
      {
        question: "Do I need a website maintenance plan if my site works?",
        answer:
          "Not always; it depends on what a bad week would cost you. If your site is a handful of static pages with nothing to book, buy or claim, the honest answer may be that you do not need one. A plan earns its fee where failures stay silent. A contact form can go on submitting while nothing arrives, a plugin update can change what fires before the consent banner, an image can go up without alternative text, or a price can carry on describing something you stopped doing last year. None of those raises an error.",
      },
      {
        question: "Do you maintain WordPress sites that someone else built?",
        answer:
          "Yes. An inherited site starts with a short audit rather than a start date. On WordPress that means upkeep and review rather than development inside the platform: which plugins are still maintained, what the theme is doing, and which embeds set cookies nobody signed off. New features on a WooCommerce shop are an E-Commerce project. If a plan would only prop up a cracked foundation, we say so and quote the fix or the rebuild instead.",
      },
      {
        question: "What happens when my website goes down?",
        answer:
          "Alerts for uptime, errors and performance are routed to us rather than to you, so the first move on an outage does not wait on somebody noticing and sending an email. Essential carries a guaranteed response window on what you raise, and the two tiers above it shorten it, Priority the shortest: that one exists for software a business genuinely runs on. Whichever tier you are on, the number is written into the plan rather than left to be argued about at the worst possible moment.",
      },
      {
        question: "Am I tied into a contract, and what do I keep if I leave?",
        answer:
          "No, plans run month to month, and ending one costs a notice period and nothing else. Move up a tier when the site becomes more business-critical, down if it does not, or stop. Hosting, domain, analytics, Search Console and CRM stay in accounts in your name throughout, and code and content changes land in a repository you own. Nothing done on a plan leaves you depending on us to keep using your site, and a plan that would be painful to leave is not a service.",
      },
    ],
  },
  {
    // Draft: prerenders `noindex`, on no surface (research 11 § 7). Reshaped
    // 27 September 2026 to research 13 § 3 (problem first, basic scope at the
    // starting figure, six FAQs at 60–100 words); facts unchanged from the
    // S8-verified draft. Every £ figure is the catalogue figure adopted as a
    // launch price on 28 September 2026 (research 00 § 6).
    slug: "missed-call-text-back",
    name: "Missed-Call Text-Back",
    category: "grow",
    status: "draft",
    summary:
      "Every call you miss gets a text back in seconds, telling the caller who missed it and how to reply or book.",
    heroSubhead:
      "You're on a job. The phone rings out. Seconds later the caller has a text from your business — sorry we missed you, reply here or book.",
    whoItsFor:
      "trades, garages, salons and practices whose phone rings while they are working and who cannot always answer it.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 99,
      currency: "GBP",
      cadence: "monthly",
      setupAmount: 249, // adopted 28 September 2026
      usageNote:
        "Usage is not included: whatever the platform charges for, such as texts and replies, the calls on the divert, the number and WhatsApp, is billed on top at cost, based on what you use, on a published GBP schedule reviewed quarterly.",
      priceNote:
        "What moves the price: a new UK number instead of a divert, and web chat and WhatsApp in the inbox.",
    },
    includes: [
      "A divert from the number you already publish — nothing on your van or website changes",
      "One text, sent within seconds of every missed call, written with you and tested from a real phone",
      "One inbox and a phone app for the replies, so whoever is free can answer",
      "A one-page monthly report: calls missed, texts sent, replies, bookings",
    ],
    notIncluded: [
      "A new UK number, or web chat and WhatsApp in the same inbox — each an add-on, priced separately; platform usage is billed at cost on what you use",
      "Answering the call itself (the AI Receptionist) or promotional follow-up to callers (Email & SMS Marketing, which needs a lawful basis first)",
    ],
    primaryCta: { label: "Set up missed-call text-back", href: "/contact" },
    relatedServiceSlugs: ["ai-receptionist", "crm-automation"],
    faqs: [
      {
        question: "What does missed-call text-back cost, and what is in the set-up fee?",
        answer:
          "From £99 a month with a one-off £249 set-up, or £129 a month with web chat and WhatsApp in the same inbox, excl. VAT. Set-up covers the divert, the text written with you, the inbox and app, and a test from a real phone. The monthly fee covers the running of it. Usage is not included: whatever the platform charges for, such as texts, replies, calls on the divert, the number and WhatsApp, is billed on top at cost, based on what you use, from a published price list in pounds. Your industry does not move the price.",
      },
      {
        question: "Can I automatically text back a missed call in the UK?",
        answer:
          "Yes, as long as the text is a customer-service message: who missed the call, how to reply, how to book, how to stop. The UK's marketing rules treat a text as electronic mail, and the regulator's test is about content, not intent. A message with an offer in it counts as marketing even if that was not its main purpose. So the text carries no offer and no discount, and the plan will not add one. A review link stays out too, by design.",
      },
      {
        question: "Do I need a new phone number?",
        answer:
          "No. The recommended set-up is a divert. Unanswered calls forward to a line we set up, and the text goes out from a number tied to your business, so nothing on your van, website or Google profile changes. If you would rather have a second line, it is an add-on: a UK local number is registered to your business on the platform's record, with your business name, registration and a UK business address. A business not registered in the UK gets a UK mobile or freephone number instead. Either way the number belongs to your business, not to us.",
      },
      {
        question: "Who replies when a caller texts back?",
        answer:
          "You do, from the inbox on your phone or a screen, and whoever is free can answer because the conversation stays with the contact. Nothing replies automatically after the first text; a second automatic text is where a service message starts to become a run of automated follow-ups. If nobody in your business can watch the inbox, say so on the first call — the AI Receptionist, which answers the call itself, may fit you better.",
      },
      {
        question: "Can it text on WhatsApp as well as SMS?",
        answer:
          "The text-back itself goes by SMS, because it answers a call and reaches every mobile without an app. WhatsApp can be added to the same inbox as an add-on, for customers who have given you their number and opted in to WhatsApp messages from you, which WhatsApp's own policy requires. Those messages are metered by the platform and charged at cost, shown separately on your invoice. Web chat from your website lands in the same inbox with no such constraint.",
      },
      {
        question: "What if I want to leave — what do I keep?",
        answer:
          "On a divert, leaving is switching the divert off; your published number was never ours. A number registered to your business stays registered to your business. Your contacts and conversations are exported to you on request. On a plan we host, the account can be transferred to one of your own, with automations arriving as drafts for you to switch on and channels reconnected on your side; add-on subscriptions end with the plan.",
      },
    ],
  },
  {
    // Draft: prerenders `noindex`, on no surface (research 11 § 7). Reshaped
    // 27 September 2026 to research 13 § 3; facts from the S8-verified
    // draft, with the incentive wording aligned to CMA208 §§ 3.5, 3.7 and
    // the unsourced profile-risk, curated-rating and pressure clauses
    // removed on 28 September 2026. £ figures adopted as launch prices on
    // 28 September 2026 (research 00 § 6): £129 / £179 a month per
    // location (was £99 / £149), set-up £299 unchanged. Widget held off
    // clinic sites (research 00 Q13; R21). Open for the founder: research
    // 07 puts the widget in the starting tier, research 13 § 4.1 lists it
    // as an add-on; this entry follows 13.
    // Legality FAQ restated as the design, with the PECR line (research 08
    // § A5a; R09), on 28 September 2026.
    slug: "review-management",
    name: "Review Management",
    category: "grow",
    status: "draft",
    summary:
      "Every customer asked for a Google review, nobody incentivised, nothing hidden — and a reply to every Google and Facebook review drafted in your voice.",
    heroSubhead:
      "Good work, few reviews, and the bad one shows first. We ask every customer, once, and draft a reply to every Google and Facebook review for you to approve.",
    whoItsFor:
      "trades, garages, salons, clinics and practices chosen on their Google reviews, that ask nobody today or ask only the happy ones.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 129,
      currency: "GBP",
      cadence: "monthly",
      // Per-location pricing (research 07 § 3 rule 3; 11 § 11) — the pricing
      // FAQ below says "per location", so the hero must too.
      unit: "per location",
      setupAmount: 299, // adopted 28 September 2026
      usageNote:
        "Usage is not included: whatever the platform charges for, such as the texts and emails the requests are sent by and any AI reply drafts, is billed on top at cost, based on what you use. On a plan we host, the rates are on a published GBP schedule reviewed quarterly.",
      priceNote:
        "What moves the price: locations, the platforms watched beyond Google and Facebook, and whether replies are also posted for you.",
    },
    includes: [
      "A request by text or email after every job or visit, timed for your service, that asks everyone and filters nobody",
      "Google and Facebook reviews in one place, with a reply drafted in your voice within two working days",
      "Nothing posted in your name until you have approved it",
      "A one-page policy for your team — no incentives, no asking only the happy customers, what to do with a bad review",
      "A monthly report: requests sent, reviews received, rating movement, reviews still unanswered",
    ],
    notIncluded: [
      "Replies posted for you with Trustpilot, Checkatrade and Reviews.io watched (the higher plan), a site widget (not on a clinic site until the advertising position is settled) or extra locations — each is an add-on",
      "Filling in or running the Google Business Profile the reviews land on — that is Google Business Profile management",
    ],
    primaryCta: { label: "Start a review programme", href: "/contact" },
    relatedServiceSlugs: ["google-business-profile", "email-sms-marketing"],
    faqs: [
      {
        question: "What does review management cost per month?",
        answer:
          "From £129 a month per location with a one-off £299 set-up, or £179 a month per location with replies posted for you and the other platforms watched, excl. VAT. Set-up covers connecting your accounts, writing the requests and their timing, the team policy and the approval workflow. Whatever the platform charges for, such as the texts and emails the requests are sent by and any AI reply drafts, is not included: it is billed on top at cost, based on what you use. How many reviews you want does not move the fee.",
      },
      {
        question: "Is it legal to ask customers for Google reviews in the UK?",
        answer:
          "Asking every customer, once, for a review and nothing else is how the programme is built, and the CMA's guidance says asking customers generally, without steering what they write, is not prohibited. Since 6 April 2025 it has been illegal to write or commission fake reviews, to hide that a review was incentivised, or to present reviews misleadingly. Google's policy adds that businesses should not selectively ask the happy ones or offer anything for a review. Where a request promotes the business, it is marketing and the consent rules apply.",
      },
      {
        question: "Can we ask only the customers we know are happy?",
        answer:
          "No, and the programme is built so that you cannot. The CMA's guidance calls encouraging just the satisfied customers to leave reviews a form of cherry-picking, and Google's policy says not to selectively solicit positive reviews. A step that asks people to rate you privately first and sends the public link only to the happy ones is that shortcut built into software, so we do not run it. Every customer gets the same request. The rating you earn that way is the only one you can defend.",
      },
      {
        question: "Can we offer a discount or a prize draw for a review?",
        answer:
          "No, not on either plan. An incentivised review is not banned under the DMCC Act 2024, but concealing the incentive is. The CMA's guidance says the review must be clearly identifiable as incentivised, usually by a prominent label, as an advert. Google's policy goes further and says not to offer payment, discounts or free goods for any review. Dental practices have a third rule from the General Dental Council: no incentives at all. Offering nothing meets the incentive rule in all three, so we offer nothing.",
      },
      {
        question: "What happens when we get a bad review?",
        answer:
          "It stays up, it gets a reply, and it gets read. We do not remove or suppress genuine negative reviews. We draft a reply that acknowledges the complaint, says what you will do and moves the conversation offline, for your approval. If the review breaks Google's own rules — spam, an obvious fake, a competitor — it can be reported through Google's process, and whether it comes down is Google's decision, not ours.",
      },
      {
        question: "Do you also handle Trustpilot, Checkatrade or Facebook?",
        answer:
          "Yes: Google and Facebook are connected on the starting plan. Trustpilot, Checkatrade and Reviews.io are watched on the higher plan, so a review there gets a drafted reply too. We do not send requests to several platforms at once: a customer gets one request, to one place. If a trade platform is where your customers already are, we can point the single request there instead of Google and say so in the scope.",
      },
    ],
  },
  {
    // Draft: prerenders `noindex`, on no surface (research 11 § 7). Reshaped
    // 27 September 2026 to research 13 § 3; facts unchanged from the
    // S8-verified draft. £199 a month and £499 set-up adopted as launch
    // prices, 28 September 2026 (research 00 § 6). Platform usage is billed on
    // top at cost, not included (founder, 28 September 2026). Still open:
    // the wallet-line spot-check (research 01 § 10 item 1).
    slug: "ai-receptionist",
    name: "AI Receptionist",
    category: "grow",
    status: "draft",
    summary:
      "The calls you cannot answer, answered: booked into your diary or passed to you with a message, and the caller told it is automated.",
    heroSubhead:
      "When nobody is free, the phone rings out. An assistant answers in your name, books or takes a message, and hands over anything outside its script.",
    whoItsFor:
      "garages, salons, trades and practices that miss calls while they are working, cannot justify a receptionist, and do not need answers on regulated subjects.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 199,
      currency: "GBP",
      cadence: "monthly",
      setupAmount: 499, // adopted 28 September 2026
      usageNote:
        "Usage is not included: whatever the platform charges for, such as call minutes on both legs, the AI voice and the line the calls divert to, is billed on top at cost, based on what you use, at published GBP rates reviewed quarterly.",
      priceNote:
        "What moves the price: calendar and CRM wiring, and how many distinct jobs the assistant is scripted to do.",
    },
    includes: [
      "An assistant scripted to a narrow job — answer, book, take a message, transfer — behind a divert from the number you publish",
      "Booking into the calendar you already run, and a summary of every call to your inbox",
      "The automated-assistant disclosure in the first sentence, and a fallback to voicemail or a person if it fails",
      "A test number you ring before go-live, and monthly tuning",
      "A monthly report: answered, booked, transferred, dropped, minutes used",
    ],
    notIncluded: [
      "Call recording, a second line, or CRM wiring beyond the calendar — each an add-on, priced when you need it; platform usage is billed at cost on what you use",
      "Outbound calls of any kind, and answers beyond the short list you approved — both are a scoped project under AI Integration",
    ],
    primaryCta: { label: "Set up the receptionist", href: "/contact" },
    relatedServiceSlugs: ["missed-call-text-back", "ai-integration"],
    faqs: [
      {
        question: "How much does an AI receptionist cost in the UK?",
        answer:
          "From £199 a month with a one-off £499 set-up, excl. VAT. Set-up covers scripting the job, the divert, the calendar wiring, the disclosure line, the fallback path and a test number. The monthly fee covers tuning and the report. Usage is not included: whatever the platform charges for, such as call minutes, the AI voice and the line the calls divert to, is billed on top at cost, based on what you use, at rates published in pounds and reset quarterly. What moves the plan price is the wiring and how many distinct jobs it is scripted to do.",
      },
      {
        question: "Is an AI answering my business phone legal in the UK?",
        answer:
          "For inbound calls, the PECR rules that restrict automated telephony do not arise. They cover calls an organisation makes: recorded marketing messages and unsolicited marketing calls. The receptionist only answers: the caller placed the call, and nothing is marketed to them. How an AI voice would be treated if it made marketing calls is unsettled, so the plan never dials out. Transcripts, and recordings if you switch it on, are personal data, so callers are told when a call is recorded, and your privacy notice must say they exist. This is the position we build to, not legal advice.",
      },
      {
        question: "Will callers know they are talking to an AI?",
        answer:
          "They are told in its first sentence: it names your business, says it is an automated assistant, and offers to book, take a message or put the caller through to a person. We found no UK statute that requires this; we do it because a caller who believes they spoke to a person has been misled. When recording is on, the same sentence says the call is recorded.",
      },
      {
        question: "What happens when it cannot answer a question?",
        answer:
          "It is scripted to take the caller's details or put them through to a person rather than guess. The assistant is scripted to book, take a message, answer the short list of questions you approved, or transfer to a person. Anything outside that, and anything it is unsure about, ends with it taking the caller's details or transferring the call. It is scripted to hand over treatment, legal and clinical questions, by design. If the assistant itself fails, calls fall back to voicemail or a person. The monthly report counts transferred and dropped calls.",
      },
      {
        question: "Does it work with my existing number?",
        answer:
          "Yes. Your published number does not change. The assistant sits behind a divert, set to out of hours only, to overflow when the line is engaged, or to every call, and changing it is a setting. A sensible start is out of hours, widening it once the call summaries have earned your trust. If you would rather it had its own line, a UK number is registered to your business, not to us, as an add-on.",
      },
      {
        question: "Can it call customers back or chase quotes?",
        answer:
          "No, and it never will on this plan. An outbound marketing call from an automated calling system needs the subscriber's prior explicit consent. A live one needs a Telephone Preference Service check instead, and whether an AI voice counts as recorded or live has not been settled. The plan has no outbound feature you could switch on by mistake; a caller can leave details for you to ring back. If outbound calling is genuinely the job, it is a separately scoped project under AI Integration, built on a record of each person's consent.",
      },
    ],
  },
  {
    // Draft: prerenders `noindex`, on no surface (research 11 § 7). Reshaped
    // 27 September 2026 to research 13 § 3; facts unchanged from the
    // S8-verified draft. Every £ figure was adopted as the launch price on
    // 28 September 2026 (research 00 § 6); VAT shown as "excl. VAT" (D2 interim).
    slug: "google-business-profile",
    name: "Google Business Profile",
    category: "grow",
    status: "draft",
    summary:
      "Your profile run properly, every week, in your own account — categories, services, posts, photos, questions and listings.",
    heroSubhead:
      "Half-filled, unloved, and below a competitor on the map. We run the profile in your own Google account, for a real premises or service area.",
    whoItsFor:
      "shops, salons, practices, garages and trades whose profile is unclaimed, half-filled or suspended, and who want the map work done without a full SEO retainer.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 129,
      currency: "GBP",
      cadence: "monthly",
      // Per-location pricing (research 07 § 3 rule 3; 11 § 11) — the pricing
      // FAQ below says "per location", so the hero must too.
      unit: "per location",
      setupAmount: 249, // adopted 28 September 2026
      usageNote:
        "The listings sync add-on is passed through at cost on a published pound schedule.",
      priceNote:
        "What moves the price: locations, a suspension to work through, and listings sync across a long directory list.",
    },
    includes: [
      "An eligibility check on the first call, then the audit and full first pass in your Google account — you as owner, us as a manager",
      "Categories, services, attributes, hours, photos and description written to Google's guidelines, matching your website character for character",
      "A post and new photographs every week, every customer question answered, and suspicious competitor listings reported",
      "Bing Places, Apple Business Connect, Yell and FreeIndex kept consistent by hand",
      "A monthly report from Google's own insights",
    ],
    notIncluded: [
      "A suspension appeal, listings synced by tool, or extra locations — each is an add-on, priced when you need it",
      "Content, links or technical SEO — that is the SEO retainer",
    ],
    primaryCta: { label: "Get your profile managed", href: "/contact" },
    relatedServiceSlugs: ["seo", "review-management"],
    faqs: [
      {
        question: "What does Google Business Profile management cost?",
        answer:
          "From £129 a month per location with a one-off £249 set-up, excl. VAT; the profile itself is free from Google, and what you pay for is the work. Set-up covers the eligibility check, the audit of your profile against Google's guidelines, being added as a manager on your account, and the full first pass over categories, services, attributes, hours, photos and description. The monthly fee covers the weekly post and photographs, questions answered, listings kept consistent and the report. Locations, suspension work and directory sync move the price; no ranking is tied to it.",
      },
      {
        question: "Are we eligible for a profile at all?",
        answer:
          "Google's test is short: a business either has a physical location customers can visit, or travels to customers where they are. A shop, salon, practice or garage qualifies on the first half; a plumber, a cleaner or a mobile groomer qualifies on the second as a service-area business, with the address hidden and the area served shown. A rented mailing address you do not work from does not qualify, and nor does a coworking office unless it has signage, receives customers and is staffed by your people in business hours. We check on the first call.",
      },
      {
        question: "Our profile is suspended — can you get it reinstated?",
        answer:
          "We cannot promise it: reinstatement is Google's process on Google's timetable, and neither a date nor an outcome is ours to give. As an add-on, we can read the profile against Google's guidelines, tell you which of them it appears to break, fix what breaks them, gather the evidence Google asks for and file the appeal. An address you do not operate from is not eligible under Google's guidelines whatever an appeal says, so if that is the cause we will tell you so rather than file an appeal on it.",
      },
      {
        question: "Why do you not have a profile yourselves?",
        answer:
          "Because we are not eligible for one, and we would rather say so than pretend. WebAsk works remotely with no UK office, and Google's rules require a location customers can visit or a business that travels to them. A mailbox, a virtual office or an unstaffed desk does not qualify and can be suspended. The guidelines that rule us out are the same ones that apply to your profile, which is why the eligibility check comes first.",
      },
      {
        question: "Who owns the profile and the account?",
        answer:
          "You do, in your own Google account, and that never changes. We are added as a manager with your notice and consent, which Google's guidelines ask of a third party for menu links and we apply throughout. You can remove us in a minute without losing the profile, its reviews or its history. We never hold the owner role, never create a profile in our name for a client, and never verify a location we have not confirmed you operate from. If a previous agency holds the owner role, it must come back to you before anything else is touched.",
      },
      {
        question: "Do we need this if we already pay for SEO?",
        answer:
          "Not if your SEO provider already manages the profile properly; the two are different work. An SEO retainer works on your website's place in the ordinary search results with content, links and technical fixes. This plan runs the profile that appears in the map results and the knowledge panel, inside Google's product on Google's rules. If nobody has opened the profile since it was claimed, this plan fixes that without the retainer. The two are priced separately so you can buy the one you are missing.",
      },
    ],
  },
  {
    // Draft: prerenders `noindex`, on no surface (research 11 § 7). Reshaped
    // 27 September 2026 to research 13 § 3; facts unchanged from the
    // S8-verified draft. Every £ figure was adopted as a launch price on
    // 28 September 2026 (research 00 § 6); shown excl. VAT (D2 interim).
    slug: "landing-pages",
    name: "Landing Pages",
    category: "build",
    status: "draft",
    summary:
      "One page for one job — an offer, an event, an advert — designed, built, wired to your CRM and measured, priced as a page.",
    heroSubhead:
      "You need a campaign page, and your website cannot give you one. One page, one job, wired to your CRM and measured — priced as a page, not a website.",
    whoItsFor:
      "trades, clinics and shops running a seasonal offer, an open day or an ad campaign that needs somewhere to land, and anyone whose site cannot host a new page quickly.",
    pricing: {
      startingAmount: 750, // adopted as the launch price, 28 September 2026 (research 00 § 6)
      currency: "GBP",
      cadence: "project",
      priceNote:
        "What moves the price: a coded page instead of a builder page, copy written from a brief, and a three-step funnel rather than one page.",
    },
    includes: [
      "One page in the platform's builder, inside your account or plan — headline, reasons, one ask",
      "Form or booking calendar wired to your CRM, consent captured at entry, thank-you and follow-up message set",
      "Every button and submission set up as an event, campaign tags handled, and a report at thirty days",
      "Copy edited from your draft, and two revision rounds",
    ],
    notIncluded: [
      "A coded page, a three-step funnel, copy written from a brief, or a payment step — each is an add-on, priced as what it is",
      "A multi-page website, which is Web Development, and paid media — the page receives the traffic you send it",
    ],
    primaryCta: { label: "Get a landing page quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "email-sms-marketing"],
    faqs: [
      {
        question: "What does a landing page cost?",
        answer:
          "From £750 for a page in the builder, £1,250 for a coded page and £1,950 for a three-step funnel, excl. VAT. The starting figure covers design and build, the form or calendar wired to your CRM, tracking, a report at thirty days and two revision rounds on copy you supply. What moves it is builder or code, copy written or edited, and one page or a funnel. Whatever the platform charges, such as texts or emails, is not included and is billed on top at cost, based on what you use. No figure depends on how the page performs.",
      },
      {
        question: "Builder or code — which will you use for mine?",
        answer:
          "The first call decides: the builder for visitors from an advert, an email or a QR code; code for a page that must rank in search or live inside a site you paid for. A page in the builder is fast to make, easy to duplicate for the next campaign, and wired to the CRM without integration because it is the CRM. The trade is speed: it carries the builder's scripts. A coded page sits alongside a website we build for you, to the same accessibility standard and without the builder's scripts; it costs more and takes longer.",
      },
      {
        question: "Will a builder-hosted page be as fast as a coded one?",
        answer:
          "We do not promise it will be. A page in the builder loads the builder's scripts and styles first; a coded page does not carry them. For visitors who arrive from an advert, an email or a QR code, that is a trade a campaign can reasonably accept, because they have already decided to come. For a page that needs to rank in search, the coded option is the right one.",
      },
      {
        question: "Do I need a landing page or a full website?",
        answer:
          "A landing page, if the traffic comes from something you send — an advert, an email, a QR code — and the page has one job. A website, if the page has to rank for search terms rather than receive traffic you send, or if one page has become four with different jobs. The same goes if the offer needs an about page and a way to be found by people who did not click an advert. A landing page is priced as a page; a website is priced as a project, on the Web Development page.",
      },
      {
        question: "Can it take a deposit or a booking?",
        answer:
          "Yes. A booking calendar or a payment step can be wired into the page — the calendar is in the starting scope, and a payment step is an add-on, priced as what it is. Both feed your CRM, so the booking or the deposit appears on the contact's record. A booking or payment taken from a consumer who is not in front of you can be a distance contract. The customer must then be given certain information before they are bound, including the fourteen-day cancellation right where it applies. We put that on the page rather than behind a link.",
      },
      {
        question: "Who owns the page afterwards?",
        answer:
          "You do. A builder page lives in your account or your hosted plan and stays there when the campaign ends, for you to pause, duplicate or delete. A coded page's files are yours, and it runs on the hosting you already own. The domain, form submissions, tags and analytics are yours from day one. In your own account or on your own hosting, the page keeps working if you never work with us again. On a hosted plan, the page moves with the account we run if you transfer it, in the same documented way as everything else in it.",
      },
    ],
  },
  {
    // Draft: prerenders `noindex`, on no surface (research 11 § 7). Reshaped
    // 27 September 2026 to research 13 § 3; facts unchanged from the
    // S8-verified draft. Every £ figure was adopted as the launch price on
    // 28 September 2026 (research 00 § 6).
    slug: "email-sms-marketing",
    name: "Email & SMS Marketing",
    category: "grow",
    status: "draft",
    summary:
      "Campaigns written, sent and reported monthly after a first-month consent audit, to the past customers you may lawfully message, with an opt-out in every one.",
    heroSubhead:
      "Past customers in a system that nobody messages? A consent audit first, then two campaigns and one automation a month, to a list you are allowed to send to.",
    whoItsFor:
      "dentists, salons, trades and any other business whose CRM is live but quiet, with a list and no time to write to it.",
    pricing: {
      // adopted as the launch price, 28 September 2026 (research 00 § 6)
      startingAmount: 395,
      currency: "GBP",
      cadence: "monthly",
      usageNote:
        "Usage is not included: whatever the platform charges for, such as emails, texts and replies, WhatsApp and the sending number, is billed on top at cost, based on what you use. On a plan we host, the rates are on a published GBP schedule reviewed quarterly.",
      priceNote:
        "What moves the price: campaigns a month, automations built or reviewed, and the state of the consent records you hold.",
    },
    includes: [
      "A consent audit in month one — every record tagged by who it belongs to and whether you may message them",
      "Two campaigns a month, email or text, written to your brief, checked against the rules for your sector and sent from your platform",
      "One automation built or reviewed each month — welcome, follow-up, rebooking, win-back — with the lawful-basis check in front of it",
      "List hygiene: bounces removed, opt-outs honoured in every tool, sender named in every message",
      "A monthly report of replies, bookings and opt-outs, not open rates, and each campaign reported on two weeks later",
    ],
    notIncluded: [
      "Four campaigns a month with a quarterly landing page, or a WhatsApp channel — each an add-on; platform usage is billed at cost on what you use",
      "Bought, rented or scraped lists (never imported), and the CRM build itself — that is CRM Automation, priced as a project",
    ],
    primaryCta: { label: "Get a campaign plan", href: "/contact" },
    relatedServiceSlugs: ["crm-automation", "review-management"],
    faqs: [
      {
        question: "How much does email and SMS marketing cost, and what is in the first month?",
        answer:
          "From £395 a month for two campaigns, or £695 for four with a landing page each quarter, excl. VAT, and no set-up fee. The first month is the consent audit: every record tagged by who it belongs to and whether you may message them, with records you may not message parked, and nothing sent until that is done. From month two, two campaigns and one automation a month. Usage is billed on top at cost, based on what you use. The size of your list does not move the plan fee, though every send counts as usage.",
      },
      {
        question: "Is email and SMS marketing legal in the UK, and who can we message?",
        answer:
          "Yes, to those the rules allow, which turns on who the recipient is, not what the address looks like. A limited company, an LLP or a public body can be emailed or texted without prior consent. A sole trader, an unincorporated partnership or anyone on a personal address or number needs consent, unless you meet every condition of the soft opt-in, which our CRM page sets out. A text counts as electronic mail under the same rules, and the month-one audit tags every record before anything is sent.",
      },
      {
        question: "Our list is old — can you reactivate it?",
        answer:
          "Some of it, lawfully. The audit sorts the records into those you may message and those you may not. The first group gets a reactivation campaign written to bring them back. The second group is not emailed or texted at all, not even to ask: the ICO counts contacting people to ask for consent to direct marketing as direct marketing. Those people can be reached by post, by a live call after a Telephone Preference Service check, or at their next visit. We will not send an offer to everyone who ever gave you a number.",
      },
      {
        question: "Do we own the platform and the list?",
        answer:
          "The list, always. The platform depends on the plan. If your CRM lives in an account you own, we send from it and the subscription stays in your name. On a hosted plan the sending runs from a sub-account under our licence, you remain the controller of the data, and your contacts, consent records and campaign history are exported to you on request. The consent records live on the contact records, not in a spreadsheet of ours, so the lawful basis for every send leaves with you if you leave.",
      },
      {
        question: "Can you send on WhatsApp too?",
        answer:
          "Yes, as an add-on, for the people who asked for it. WhatsApp's own policy allows messages only to customers who gave you the number and opted in to hearing from you there, so it is never a first-contact channel. For anything promotional, the consent rules for email and text sit on top. The audit records which channel each contact agreed to, and a campaign goes by email, text or WhatsApp accordingly. WhatsApp messages are metered by the platform per message and passed through at cost as their own line.",
      },
      {
        question: "What does a text cost us?",
        answer:
          "Texts and replies are not included in the plan: each is billed on top at cost, based on what you use; on a plan we host, that is the pound rate on our published schedule, with nothing added. The platform meters texts per 160-character segment and prices them in US dollars, and the pound schedule is reset each quarter against the exchange rate and rounded to the penny. Campaign texts are written to fit one segment in the basic character set wherever the message allows, and each names the sender and carries a way to stop.",
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
