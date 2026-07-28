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

export type ServicePricing = {
  /** Starting price as a whole number in the smallest practical unit (pounds). */
  readonly startingAmount: number;
  readonly currency: Currency;
  readonly cadence: PriceCadence;
  /** Optional one-liner clarifying what bends the price (shown in place of an upper limit). */
  readonly priceNote?: string;
};

export type Service = {
  readonly slug: string;
  readonly name: string;
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
};

export const services: ReadonlyArray<Service> = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "Custom marketing sites and product surfaces engineered for performance.",
    heroSubhead:
      "Fast, search-ranked websites built on a modern stack — designed to convert on mobile first and grow with your business.",
    whoItsFor:
      "small businesses replacing a slow templated site, agencies that need an engineering-grade build partner, or founders shipping a marketing site for a new venture.",
    pricing: {
      startingAmount: 3500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Page count, custom illustrations, CMS depth, and the number of integrations are the biggest price levers.",
    },
    includes: [
      "5–10 page custom design and build on Next.js + Tailwind",
      "Sub-2-second Largest Contentful Paint on mobile, verified in CI",
      "SEO foundation — title/meta, schema.org JSON-LD, sitemap, robots, OG images",
      "Mobile-first responsive design with accessibility audited to WCAG 2.2 AA",
      "30 days of post-launch support — bugs, tweaks, training",
    ],
    notIncluded: [
      "Logo design or full brand identity (UI/UX Design or a brand studio handles that)",
      "Ongoing SEO content or link-building — see SEO and Maintenance plans",
    ],
    primaryCta: { label: "Get a web development quote", href: "/contact" },
    relatedServiceSlugs: ["ui-ux-design", "seo"],
    faqs: [
      {
        question: "How long does it take to build a custom website?",
        answer:
          "A standard 5-to-10-page marketing site launches in 4–6 weeks from kickoff. Discover takes 1–2 weeks, Design 2–3 weeks, Build 3–6 weeks (overlapping with the tail of Design), and launch happens at the end of Build. Larger sites with city pages, industry pages, or a blog framework extend Build by 2–4 weeks. We commit to a target launch date in the written scope.",
      },
      {
        question: "What's the difference between your £3,500 site and a £1,500 freelancer build?",
        answer:
          "Scope and floor. A £1,500 freelancer site is usually 3–5 pages on a template with light SEO and no performance budget. A WebAsk site is 5–10 pages of custom design and build, with sub-2-second LCP enforced in CI, full schema.org structured data, accessibility audited to WCAG 2.2 AA, and a real component system underneath. The freelancer build is fine if your site is going to be a static brochure; the WebAsk floor exists because we treat the site as a long-term sales asset, not a one-time deliverable.",
      },
      {
        question: "Can you redesign my existing site without rebuilding from scratch?",
        answer:
          "Sometimes. If your existing stack is sound — modern framework, clean codebase, no plugin sprawl — a redesign is faster and cheaper than a full rebuild. We do a short paid audit (3–5 hours) first to map what's salvageable and what isn't. The audit cost folds into the engagement if you proceed.",
      },
      {
        question: "Do you host our site, or do we?",
        answer:
          "You host it. The Vercel project lives in an account you own from day one. The same goes for your domain, your analytics, your Search Console property, and your CRM. WebAsk is a collaborator, not a hostage-taker — if you ever fire us, you keep the asset intact.",
      },
      {
        question: "What if we want to edit copy ourselves after launch?",
        answer:
          "At launch we ship copy in MDX files in the repo, which means engineering handles edits during the early life of the site. The moment your editor velocity outpaces what that allows — typically when you start a blog or want non-engineers publishing weekly — we migrate you to Payload CMS: self-hosted, free, with a custom editor we tune to your team. The migration is usually a 1–2 week project quoted separately.",
      },
      {
        question: "How do you handle a redesign of a search-ranking site without losing traffic?",
        answer:
          "Carefully. The plan: a complete inventory of every URL that ranks, every backlink that matters, and every redirect we need to preserve. We map old URLs to new ones, set up 301s, regenerate the sitemap, and verify in Search Console before launch. Post-launch we monitor rankings daily for two weeks and address any drops within 48 hours. Done well, a redesign maintains or improves search performance; done poorly, it kills six months of ranking work.",
      },
      {
        question: "What if our brand assets aren't ready yet?",
        answer:
          "We can build a temporary brand kit — logo wordmark, two colours, one typeface — for £1,500 as part of the engagement. It's enough to ship a site that looks intentional while a proper rebrand happens elsewhere. We're upfront that this is interim: the moment a full brand identity lands, we update the site in a small follow-up engagement.",
      },
      {
        question: "Do you offer maintenance after launch?",
        answer:
          "Yes — a separate Maintenance care plan covers security patching, dependency updates, performance monitoring, and a monthly bucket of improvement hours. Starting at £250/month. We strongly recommend it for any site we build; an unmaintained site decays in months, not years.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce",
    summary: "Storefronts that convert — Shopify, custom, or headless.",
    heroSubhead:
      "Storefronts engineered to convert — from a focused Shopify build to a fully custom headless commerce stack.",
    whoItsFor:
      "small businesses selling direct-to-consumer, brands outgrowing a templated theme, or operators migrating from WooCommerce/Etsy to a real platform.",
    pricing: {
      startingAmount: 6500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Catalogue size, custom theming depth, third-party integrations (ERP, fulfilment, subscriptions), and headless vs Shopify-native are the levers.",
    },
    includes: [
      "Shopify or custom build with theme work, checkout customisation, and product templates",
      "Payment, shipping, and tax integrations configured and tested",
      "Performance budgets enforced — sub-2-second LCP on PDPs and PLPs",
      "Conversion-grade cart, checkout, and post-purchase flows",
      "30 days of post-launch support",
    ],
    notIncluded: [
      "Product photography or copywriting (we recommend specialists)",
      "Paid-media setup or ongoing ads management",
    ],
    primaryCta: { label: "Get an e-commerce quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "seo"],
    faqs: [
      {
        question: "Should I build on Shopify or go fully custom?",
        answer:
          "For most small businesses, Shopify. Its checkout converts, its payment and fraud tooling is mature, and it stays patched without you thinking about it — we just do serious theme and template work on top. We reach for a headless front end on Shopify, or a fully custom stack, only when the brand experience or the integration requirements (unusual catalogues, complex pricing, deep ERP sync) genuinely outgrow what a themed store can do. We make the recommendation on the first call, and we will steer you to Shopify even though a custom build bills more — putting you on the wrong platform to win a bigger invoice is how stores end up rebuilt in two years.",
      },
      {
        question: "How long does an e-commerce build take?",
        answer:
          "A focused Shopify storefront launches in 6–9 weeks from kickoff: Discover 1–2 weeks, Design 2–3 weeks, Build 3–6 weeks overlapping the tail of Design, then a full QA pass and launch. Headless or fully custom builds, large catalogues, subscriptions, or multi-system integrations extend Build by 3–6 weeks. We commit to a target launch date in the written scope.",
      },
      {
        question: "Can you migrate my WooCommerce, Wix, or Etsy store without losing rankings?",
        answer:
          "Yes, and the migration is the part we treat most carefully. We inventory every product, URL, and review that carries SEO equity, map old URLs to new ones with 301 redirects, regenerate the sitemap, and verify in Search Console before launch. Post-launch we monitor rankings for two weeks and address drops within 48 hours. Done well, a migration keeps your traffic and improves your conversion; done carelessly, it resets the ranking work you have already paid for.",
      },
      {
        question: "Do you set up payment, shipping, and tax?",
        answer:
          "Yes — payment gateways, shipping rules and carrier rates, and tax calculation are configured and tested against real orders before launch as part of the starting scope. We do not hand you a store with checkout half-wired. Platform transaction fees and any third-party app subscriptions are passed through at cost; we are upfront about those line items in the proposal.",
      },
      {
        question: "What about subscriptions, multi-currency, or selling internationally?",
        answer:
          "All of those are real engineering rather than a checkbox, so they sit above the starting price and we scope them explicitly. Subscriptions, multi-currency, multi-region tax, and B2B pricing are well-trodden on Shopify and entirely doable; we tell you on the first call which of them you actually need now versus which are better added once the store has traction.",
      },
      {
        question: "Who owns the store, the data, and the accounts after launch?",
        answer:
          "You do, from day one. The Shopify (or hosting) account, the domain, the analytics, the Search Console property, and the customer data all live in accounts you own. WebAsk is a collaborator, not a hostage-taker — if you ever fire us, you keep the store and everything in it, intact and exportable.",
      },
      {
        question: "Do you offer support after the store launches?",
        answer:
          "Thirty days of post-launch support is included by default — bug fixes, small tweaks, and team training. After that, a Maintenance care plan covers platform and dependency updates, performance monitoring, and a monthly bucket of improvement hours, starting at £250/month. For a revenue-generating store we strongly recommend it; an unmaintained storefront accumulates broken apps and slow pages faster than you would expect.",
      },
    ],
  },
  {
    slug: "web-app-development",
    name: "Web Applications",
    summary: "Internal tools, dashboards, and customer portals.",
    heroSubhead:
      "Internal tools, customer portals, and dashboards built on the same stack we use for production SaaS — typed end-to-end, easy to extend.",
    whoItsFor:
      "Operators replacing a tangle of spreadsheets, B2B founders shipping their first product surface, or teams that need a portal customers actually log into.",
    pricing: {
      startingAmount: 9500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Number of user roles, authentication complexity, third-party integrations, and whether real-time/multi-tenant features are required.",
    },
    includes: [
      "Discovery, IA, and component design before any code is written",
      "TypeScript + Next.js implementation with typed end-to-end data flow",
      "Authentication, role-based access, and audit logging baked in",
      "Hosting, CI, and observability set up on your accounts",
      "Handoff documentation and code walkthrough for your team",
    ],
    notIncluded: [
      "Long-tail feature development beyond the agreed MVP scope (rolls into a retainer)",
      "Ongoing user support — see Maintenance plans",
    ],
    primaryCta: { label: "Get a web app quote", href: "/contact" },
    relatedServiceSlugs: ["ui-ux-design", "maintenance-support"],
    faqs: [
      {
        question: "What's the difference between a website and a web application?",
        answer:
          "A website presents information — pages a visitor reads, with a contact form at the end. A web application is software people log into and do work in: internal tools, customer portals, dashboards, anything with user accounts, roles, and data that changes. The line is interactivity and state. If your users need to sign in, enter or manipulate data, and have different permissions, you are looking at an application, and it is engineered differently from a marketing site.",
      },
      {
        question: "What does the £9,500 starting price actually get me?",
        answer:
          "A production-deployed MVP — the core workflow built properly, not a clickable prototype. That includes discovery and design before any code, a typed Next.js implementation, authentication with role-based access, hosting and CI and monitoring stood up on accounts you own, and a documented handoff. It is a real first version you can put in front of real users. What it is not is every feature you can imagine in version one — we build the core, ship it, and grow it from there.",
      },
      {
        question: "How long does it take to build a web application?",
        answer:
          "A focused MVP launches in roughly 8–12 weeks: Discover 1–2 weeks, Design 2–3 weeks, Build 3–6 weeks overlapping the tail of Design, then a full QA pass against real accounts and data. Applications with many user roles, complex authentication, real-time features, multi-tenancy, or several third-party integrations extend Build meaningfully — we scope that explicitly rather than discover it mid-project, and commit to a target launch date in writing.",
      },
      {
        question: "Should I build custom, or use off-the-shelf SaaS or a no-code tool?",
        answer:
          "Use off-the-shelf SaaS if a tool already does the job — we will tell you so on the call rather than bill you to rebuild something you can rent. No-code platforms like Airtable, Retool, or Bubble are genuinely good for prototypes and small internal tools. A custom build earns its cost when the process is core to how you make money, when no existing tool fits without painful compromise, or when you have outgrown a no-code platform and keep hitting its ceiling. We make that recommendation honestly, even when it means a smaller engagement.",
      },
      {
        question: "Who owns the code, the data, and the accounts?",
        answer:
          "You do, from day one. The source code, the database, and the hosting, CI, and monitoring accounts all live in your ownership — we build inside accounts you control, or hand everything over cleanly at launch. There is no lock-in: if you ever bring development in-house or switch partners, you keep the application, the data, and the ability to keep building on it.",
      },
      {
        question: "Can you integrate with our existing systems and tools?",
        answer:
          "Usually, yes — integrations are a core part of most application work. We connect to CRMs, payment and billing systems, calendars, email, and internal APIs over their official interfaces. The number and complexity of integrations is one of the main price levers, so we map exactly which systems the app must talk to during Discover and scope them into the proposal rather than treating them as surprises.",
      },
      {
        question: "What happens after launch — support and new features?",
        answer:
          "Thirty days of post-launch support is included. After that, most applications move to a Maintenance retainer (starting at £250/month) covering security patching, dependency upgrades, monitoring, and a monthly budget of improvement hours — because once people use an app daily, feature requests follow. Larger new capabilities are quoted as their own projects. An unmaintained application accumulates security and dependency debt quickly, so we recommend a plan for anything business-critical.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI / UX Design",
    summary: "Research-led design systems and conversion-grade interfaces.",
    heroSubhead:
      "Research-led design systems and conversion-grade interfaces — built to ship into the same codebase that consumes them.",
    whoItsFor:
      "Founders with a working product that looks dated, teams introducing a design system, or small businesses preparing for a rebuild and want the design done right first.",
    pricing: {
      startingAmount: 3000,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Scope of the design system, number of key flows designed, and whether usability testing is included.",
    },
    includes: [
      "Stakeholder research, IA, and a sitemap or product map",
      "Wireframes, then visual design across 3–10 core screens or flows",
      "Component library in Figma, tokenised so engineering can ship it",
      "Two rounds of revisions; final assets exported and documented",
      "Designer-engineer pairing during implementation if you build with us",
    ],
    notIncluded: [
      "Brand identity (logo, full visual identity system)",
      "Ongoing design support — folds into a retainer if needed",
    ],
    primaryCta: { label: "Get a design quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "web-app-development"],
    faqs: [
      {
        question: "What's the difference between UX and UI design?",
        answer:
          "UX is how the product is structured and how people move through it — the information architecture, the flows, the decisions that determine whether it actually works. UI is the visual layer on top — typography, colour, spacing, and components — the part that determines whether it feels considered and trustworthy. They are different disciplines that have to agree with each other, and we do both: we fix the structure and then design the surface, rather than treating one without the other.",
      },
      {
        question: "Do you design brand identities and logos too?",
        answer:
          "No — we design UX and UI within an existing brand, not brand identities from scratch. Logo design and a full visual identity system belong with a dedicated brand studio, and we will recommend one we trust. If your brand assets are not ready, we can work to a minimal interim kit — a wordmark, a couple of colours, a typeface — so design is not blocked, then update once a proper identity lands.",
      },
      {
        question: "Will the design actually be buildable, or just pretty mockups?",
        answer:
          "Buildable, by design. We deliver a tokenised component library in Figma — every colour, type size, and spacing step is a named token that maps directly onto the design tokens engineering uses — and components are defined once and composed, exactly as they are in code. That closes the usual gap where an engineer rebuilds mockups by eye and the result drifts. If we build the product with you, the design ships into the same system that consumes it; if your team builds it, the system is structured and documented so they can.",
      },
      {
        question: "What does the £3,000 starting price cover?",
        answer:
          "Research and an information architecture, wireframes and then visual design across your core screens or flows, a tokenised Figma component library, two rounds of revisions with final assets exported and documented, and designer-engineer pairing during implementation if you build with us. It designs the core of the product properly and sets the system. A sprawling product with dozens of unique screens, or one that needs usability testing, is a larger engagement that we scope explicitly.",
      },
      {
        question: "Do I have to build the product with you to get the design?",
        answer:
          "No. The design is a standalone deliverable — a documented, tokenised system and the designed flows — that any competent team can build. We structure and document it precisely so it does not depend on us. That said, when we also build it, design and engineering pair directly through implementation, which is the surest way to get a shipped product that matches the design rather than a near-miss.",
      },
      {
        question: "How long does a design engagement take?",
        answer:
          "A focused engagement runs roughly 4–6 weeks: Research about a week, Wireframes 1–2 weeks, Visual design 2–3 weeks, then handoff. Larger products, bigger design systems, or added usability testing extend that, and we put a target timeline in the written scope. We deliberately spend the early time on structure and wireframes — moving a step in a wireframe is cheap, rebuilding a finished screen is not.",
      },
      {
        question: "Can you redesign our existing product without starting from zero?",
        answer:
          "Usually, and often that is the right call. If your product has a sound underlying structure, we can redesign the visual layer and fix the few flows that are actually hurting you without rebuilding everything — which is faster and cheaper. We start with a short audit to separate what genuinely needs to change from what is fine as-is, so you are not paying to redesign screens that already work.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    summary: "Technical, on-page, and content SEO built for measurable rankings.",
    heroSubhead:
      "Technical, on-page, and content SEO that earns rankings — engineered into the site, not bolted on after launch.",
    whoItsFor:
      "small businesses invisible on Google despite a working site, multi-location practices that need local SEO, or operators ready to invest in a real organic channel.",
    pricing: {
      startingAmount: 750,
      currency: "GBP",
      cadence: "monthly",
      priceNote:
        "Market competitiveness, number of locations, content cadence, and link-building scope are the levers.",
    },
    includes: [
      "Technical audit covering Core Web Vitals, crawl, schema, and indexation",
      "Keyword strategy mapped to your services, locations, and industries",
      "On-page optimisation across existing high-intent pages",
      "Monthly content brief and publication of 2–4 long-form pieces",
      "Reporting that ties rankings and traffic to leads, not vanity metrics",
    ],
    notIncluded: [
      "Paid search or paid social — we focus on organic; ads partners on request",
      "Reputation management or third-party review platforms",
    ],
    primaryCta: { label: "Get an SEO quote", href: "/contact" },
    relatedServiceSlugs: ["web-development", "crm-automation"],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Realistically, months — not weeks. Month one is technical fixes, keyword strategy, and on-page work, with little visible ranking movement. Months two to four bring early gains on longer-tail terms as new content indexes. Months five to twelve are where authority compounds and competitive terms start to move and produce a measurable flow of leads. Anyone promising page-one rankings next month is either misleading you or about to get your site penalised. If you need customers this week, paid search is the honest answer — SEO is the channel that pays off for years once it does.",
      },
      {
        question: "Why is SEO a monthly retainer instead of a one-time project?",
        answer:
          "Because rankings are won and defended over time, not set once. A one-off project can fix the technical floor — Core Web Vitals, schema, crawlability — but rankings then decay as competitors publish, your content ages, and search algorithms change. The monthly engagement is what compounds: ongoing content, on-page work, authority building, and responses to what the data shows. We do offer one-time technical SEO audits if a fixed-scope assessment is what you actually need.",
      },
      {
        question: "Can you guarantee I'll rank #1 on Google?",
        answer:
          "No, and you should be wary of anyone who does. Nobody controls a search result they do not own, so a guaranteed position is a promise no honest firm can keep. What we commit to is the work — fixing the technical foundation, targeting keywords that convert, publishing real content — and to reporting that ties rankings and traffic to leads so you can see whether the channel is paying for itself.",
      },
      {
        question: "What makes an engineering firm's SEO different from a marketing agency's?",
        answer:
          "Most of SEO's hardest wins are technical — Core Web Vitals, structured data, crawlability, indexation, site architecture — and a marketing agency typically emails those as recommendations and hopes your developer implements them. We are an engineering firm, so when the site is one we built or maintain, we fix them directly in the code. Content and strategy still matter and we do them too, but the technical floor is where a lot of small business SEO silently fails, and that is our home turf.",
      },
      {
        question: "Do I need to have my website built by you for SEO to work?",
        answer:
          "No. We do technical, on-page, and content SEO on sites we did not build — the audit maps what is fixable on your current stack. The one caveat is honesty about the platform: if your site sits on something that fundamentally can't hit Core Web Vitals or support proper structured data, we will tell you that the highest-leverage SEO move is fixing or replacing the site, rather than charging you a retainer to optimise around a ceiling.",
      },
      {
        question: "What do you actually report on each month?",
        answer:
          "What we did, what moved, and why — tied to leads rather than vanity metrics. You see rankings and organic traffic for the keywords that matter, the content and technical work completed that month, and the connection to enquiries and conversions. You will not get a wall of impressions and 'domain authority' that always trends up and never explains whether the channel is making you money.",
      },
      {
        question: "Do you run Google Ads or paid social too?",
        answer:
          "Not under this service — we focus on organic. We will happily tell you when paid search or paid social is the right move (early on, or when you need leads faster than SEO can deliver) and can point you to partners, but we do not bill an SEO retainer to manage your ad accounts. Keeping the two separate keeps the reporting honest about what organic is actually contributing.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile Apps",
    summary: "Native and cross-platform apps that ship to the App Store.",
    heroSubhead:
      "Native and cross-platform mobile apps — designed, built, and shipped to the App Store and Play Store with the same rigour as our web work.",
    whoItsFor:
      "small businesses whose customers expect a mobile experience, operators bundling an app with services, or founders validating a mobile-first product.",
    pricing: {
      startingAmount: 12000,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Native vs React Native vs Flutter, number of platforms, offline support, push, and backend complexity move the price.",
    },
    includes: [
      "Discovery, IA, and design system for mobile screens and flows",
      "Implementation in React Native, Flutter, or native Swift/Kotlin",
      "Backend integration with your existing APIs (or a new one we build)",
      "App Store and Play Store submission, review, and launch",
      "30 days of post-launch support and a maintenance plan offer",
    ],
    notIncluded: [
      "App Store Optimisation (ASO) or paid-install campaigns",
      "Long-tail feature work beyond MVP — folds into a retainer",
    ],
    primaryCta: { label: "Get a mobile app quote", href: "/contact" },
    relatedServiceSlugs: ["web-app-development", "ui-ux-design"],
    faqs: [
      {
        question: "Should I build a native app or cross-platform (React Native / Flutter)?",
        answer:
          "For most small businesses, cross-platform. One React Native or Flutter codebase ships to both iOS and Android, which roughly halves the cost and keeps the two versions in step. We reach for fully native (Swift/Kotlin) only when the app does something performance-critical or deeply platform-specific that cross-platform cannot do well — and we will tell you honestly which camp yours is in rather than push native to inflate the invoice.",
      },
      {
        question: "What does the £12,000 starting price cover?",
        answer:
          "A production first version live on both app stores — not a prototype. That includes discovery, a mobile design system, implementation in React Native, Flutter, or native code, integration with your backend (existing or one we build), App Store and Play Store submission and launch, and 30 days of post-launch support. It covers a focused MVP — the core experience built properly — not every feature you can imagine in version one. Mobile is our most variable service, so platform choice and feature complexity move the number a lot.",
      },
      {
        question: "How long does it take to build and launch a mobile app?",
        answer:
          "Roughly 10–16 weeks for a focused MVP: Discover 1–2 weeks, Design 2–3 weeks, Build 6–10 weeks, then 1–2 weeks for store submission and launch. Offline support, push, complex backends, or building fully native for both platforms extend it. Store review itself can add days per round, which is part of why we handle it — we commit to a target launch date in the written scope.",
      },
      {
        question: "Do you handle getting the app approved in the App Store and Play Store?",
        answer:
          "Yes — submission, review, and launch are part of the engagement, not your problem after handoff. We prepare the store listings, handle the privacy disclosures, respond to Apple's and Google's review feedback, and manage resubmissions until the app is live. Store review is a discipline of its own where DIY projects routinely stall for weeks, so we treat launch as a date we own.",
      },
      {
        question: "Can the app work with our existing systems and backend?",
        answer:
          "Usually, yes. The app talks to a properly engineered backend — your existing APIs, or a new one we build — with the same end-to-end typing discipline we bring to web apps. We map exactly which systems it needs to integrate with during Discover, since backend and integration complexity are among the bigger price levers.",
      },
      {
        question: "Do I need separate apps for iOS and Android?",
        answer:
          "You need to be present on both if your customers are on both, but you usually do not need two separate codebases. A cross-platform build produces a real app for each store from one codebase, which is why we recommend it for most small businesses — you get full iOS and Android presence without paying to build and maintain everything twice.",
      },
      {
        question: "What about updates and maintenance after launch?",
        answer:
          "Thirty days of post-launch support is included, then most apps move to a Maintenance care plan (starting at £250/month). Mobile especially needs ongoing care — Apple and Google ship OS updates and policy changes regularly, and an unmaintained app eventually breaks or gets pulled from the store. The plan covers updates, monitoring, and a budget of improvement hours; larger new features are quoted as their own projects.",
      },
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM",
    summary: "GoHighLevel, HubSpot, and custom CRM implementation, automation, and migration.",
    heroSubhead:
      "GoHighLevel, HubSpot, and custom CRM setups — implemented, automated, and integrated with the rest of your stack so leads stop dying in your inbox.",
    whoItsFor:
      "small businesses running their CRM on email and hope, agencies moving clients onto GoHighLevel, or operators migrating between HubSpot, Pipedrive, Salesforce, and GHL.",
    pricing: {
      startingAmount: 2500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Migration depth, number of pipelines and automations, integrations with calendar/SMS/voice/billing, and white-label SaaS configuration move the price.",
    },
    includes: [
      "CRM platform setup (GoHighLevel, HubSpot, or chosen alternative)",
      "Lead capture forms, intake automations, and CRM pipelines wired",
      "Calendar booking, SMS, email, and voice integrations",
      "Reporting dashboards that show real funnel performance",
      "30 days of post-launch tuning and team enablement",
    ],
    notIncluded: [
      "Paid GoHighLevel or HubSpot licence fees (passed through at cost)",
      "Ongoing list management or campaign execution — see SEO and Maintenance",
    ],
    primaryCta: { label: "Get a CRM quote", href: "/contact" },
    relatedServiceSlugs: ["ai-integration", "seo"],
    faqs: [
      {
        question: "GoHighLevel or HubSpot — which should I choose?",
        answer:
          "It depends on your business, not on which we prefer to configure. GoHighLevel suits service businesses and agencies that want SMS, calls, booking, and pipelines in one place — and agencies that want to resell it white-labelled. HubSpot suits teams that want a polished, widely-integrated platform with room to grow into fuller marketing and sales hubs. Other tools fit specific needs. We make the call based on your funnel and budget on the first call, and we are upfront that the platform's licence fee is separate and passed through at cost.",
      },
      {
        question: "Can you migrate us from our current CRM without losing data?",
        answer:
          "Yes — migrations are a core part of what we do, including ActiveCampaign to GoHighLevel, HubSpot to GoHighLevel (or the reverse), and moves off Pipedrive, Salesforce, Mailchimp, or Keap. We inventory everything (contacts, custom fields, tags, pipelines, automations, templates), rebuild the data model and automations properly in the new platform, and run a staged cutover with the old system live until the new one is verified — so you are never without a working CRM and nothing quietly disappears.",
      },
      {
        question: "What does the £2,500 starting price include?",
        answer:
          "A working system, not just a logged-in account: CRM platform setup (GoHighLevel, HubSpot, or a chosen alternative), lead-capture forms and intake automations, pipelines built around your funnel, calendar/SMS/email/voice integrations, reporting dashboards, and 30 days of post-launch tuning plus team training. What moves the price is scope — migration depth, the number of pipelines and automations, the integrations, and any white-label SaaS configuration.",
      },
      {
        question: "Do I pay you for the GoHighLevel or HubSpot subscription too?",
        answer:
          "No — the platform's licence or seat fees are separate and passed through at cost. You own the subscription in your own account; we configure and automate the platform on top of it. Keeping the subscription in your name is deliberate: you own the system and the data, and you are never locked into us to keep access to your own CRM.",
      },
      {
        question: "We're an agency — can you set up white-label GoHighLevel for us?",
        answer:
          "Yes. White-label GoHighLevel configuration — your branding, sub-accounts, snapshots, and the automations you resell to your own clients — is squarely in scope, and it is one of the bigger price levers. We will scope the setup to how you package and sell it, so you get a platform you can hand to clients under your own brand.",
      },
      {
        question: "How long does a CRM setup or migration take?",
        answer:
          "A focused setup typically lands in 2–4 weeks; a migration depends on how much data and how many automations are involved, usually 3–6 weeks including a staged cutover and validation. We scope it on the first call rather than guess, and we keep your existing system running until the new one is verified so there is no gap in coverage.",
      },
      {
        question: "Will you also run our email campaigns and manage our lists?",
        answer:
          "That is a separate engagement. We set up and automate the CRM and wire the integrations; the ongoing work of writing and sending campaigns and managing lists week to week belongs with our SEO or Maintenance services, or your own marketing team. We are clear about that line so the setup price covers the build, not an open-ended marketing retainer.",
      },
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    summary: "Voice agents, chatbots, and workflow automation that actually ship.",
    heroSubhead:
      "AI that earns its keep — voice agents that answer your phone, chatbots that book appointments, and n8n workflows that move data between your tools.",
    whoItsFor:
      "small businesses losing leads to unanswered phones, operators drowning in repetitive admin, or teams that want AI woven into existing tools — not a separate experiment.",
    pricing: {
      startingAmount: 4500,
      currency: "GBP",
      cadence: "project",
      priceNote:
        "Voice agent complexity, chatbot knowledge base depth, and number of workflows or integrations are the levers.",
    },
    includes: [
      "Discovery and a clear inventory of what AI should and shouldn't do",
      "Implementation of one or more — voice agent, RAG chatbot, n8n/Make workflow",
      "Integrations with your existing CRM, calendar, and data sources",
      "Evaluation harness so quality is measured, not assumed",
      "30 days of post-launch tuning and prompt iteration",
    ],
    notIncluded: [
      "Underlying LLM API fees (passed through at cost)",
      "Custom-model training from scratch — we use frontier models with retrieval and tools",
    ],
    primaryCta: { label: "Get an AI integration quote", href: "/contact" },
    relatedServiceSlugs: ["crm-automation", "web-app-development"],
    faqs: [
      {
        question: "Is AI actually reliable enough to answer my phone or talk to my customers?",
        answer:
          "For well-scoped jobs, yes — and the scoping is the point. A voice agent or chatbot handling appointment booking, common questions, and lead qualification is well within what current models do reliably, especially when it answers from your own information and hands off to a human for anything outside its lane. We build an evaluation harness so quality is measured rather than assumed, and we are honest about the tasks where AI is not reliable enough yet and a human (or a plain form) is the better answer.",
      },
      {
        question: "What does the £4,500 starting price cover?",
        answer:
          "A working, integrated capability — not a chatbot bolted onto your homepage and forgotten. It includes discovery and a clear inventory of what AI should and should not do, implementation of one or more of a voice agent, a retrieval-grounded chatbot, or a workflow automation, integrations with your CRM/calendar/data, an evaluation harness, and 30 days of tuning. Voice-agent complexity, chatbot knowledge-base depth, and the number of workflows and integrations move the price.",
      },
      {
        question: "Will the chatbot make things up or give wrong answers?",
        answer:
          "We build retrieval-grounded assistants, which means the bot answers from your documents, services, and policies rather than guessing from general knowledge — that is what keeps it accurate and on-brand instead of confidently wrong. The evaluation harness we build lets us test its answers against real questions before it goes live and tune it on real usage after, so reliability is something we measure and improve, not hope for.",
      },
      {
        question: "Do you train a custom AI model for us?",
        answer:
          "No, and almost no small business actually needs one. We build on frontier models with retrieval (so they use your data) and tools (so they can take actions in your systems) — which covers the vast majority of real use cases far more cheaply and reliably than training a bespoke model. If your situation genuinely calls for custom training, we will tell you, but we will not sell it to you to pad the project.",
      },
      {
        question: "What are the ongoing costs after the build?",
        answer:
          "Two things: the usage fees from the underlying AI providers, which are passed through at cost and billed to a usage account you own, and (optionally) a Maintenance plan to monitor, tune, and improve the integration over time. We are transparent about the expected usage costs during scoping so there are no surprises — for most small business use cases they are modest relative to the time or leads the integration saves.",
      },
      {
        question: "Which should I start with — a voice agent, a chatbot, or workflow automation?",
        answer:
          "Whichever maps to where you are actually leaking time or leads. If you miss calls, the voice agent pays for itself fastest. If your site gets after-hours traffic with questions, a chatbot captures it. If your team burns hours moving data between tools, workflow automation is the quiet winner. We figure that out in discovery rather than assuming — and the three combine well, so many engagements start with one and add the others.",
      },
      {
        question: "Can the AI work with our existing CRM and tools?",
        answer:
          "Yes — integration is the whole point. The voice agent books into your calendar and logs to your CRM, the chatbot passes qualified leads in with context attached, and the workflows move data between the tools you already run. AI that lives in a separate tab nobody opens is a cost; AI wired into your existing stack is leverage, and that wiring is exactly what we build.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    name: "Maintenance",
    summary: "Ongoing site upkeep, monitoring, and incremental improvements.",
    heroSubhead:
      "Recurring care plans for sites, apps, and CRMs we built — security updates, monitoring, performance tuning, and a monthly improvement budget.",
    whoItsFor:
      "Existing clients who want their site, app, or CRM kept current without an in-house engineer, or operators inheriting a WebAsk-built stack.",
    pricing: {
      startingAmount: 250,
      currency: "GBP",
      cadence: "monthly",
      priceNote:
        "Number of properties under care, response-time SLA, and monthly improvement hours included.",
    },
    includes: [
      "Security patching and dependency upgrades on a regular cadence",
      "Uptime, performance, and error monitoring with alerts to us",
      "Monthly bucket of improvement hours — copy edits, small features, fixes",
      "Quarterly health review with recommendations",
      "Priority response on inbound issues",
    ],
    notIncluded: [
      "Major new features or rebuilds — quoted separately as projects",
      "Paid platform licence fees (e.g. CRM seats, Vercel team plans)",
    ],
    primaryCta: { label: "Discuss a care plan", href: "/contact" },
    relatedServiceSlugs: ["web-development", "seo"],
    faqs: [
      {
        question: "What's actually included in a care plan each month?",
        answer:
          "Security patching and dependency upgrades on a regular cadence, uptime/performance/error monitoring with alerts that come to us, a monthly bucket of improvement hours for copy edits and small features and fixes, a quarterly health review with recommendations, and priority response when something breaks. The aim is that the asset stays secure and current and keeps improving — and that we usually catch problems before you or a customer notices them.",
      },
      {
        question: "How much does a care plan cost?",
        answer:
          "Three tiers, each a starting point: Essential from £250/month (a single property — patching, monitoring with alerts, a small monthly improvement bucket, and a quarterly review), Growth from £500/month (a revenue-generating site or app — a faster response SLA and a larger improvement bucket), and Priority from £1,000/month (business-critical software or multiple properties — the fastest SLA, more improvement hours, and proactive performance work). The exact hours and SLA within a tier are scoped to your properties and the level of cover you want; additional properties or a custom SLA are quoted on top of the closest tier.",
      },
      {
        question: "Do you maintain sites, apps, or CRMs you didn't build?",
        answer:
          "Yes — we take on inherited stacks, not just our own builds. For something another team built, we start with a short audit to understand what we are taking responsibility for, then bring it onto a plan. We are honest if a property is in poor enough shape that maintaining it is throwing good money after bad — sometimes a focused fix or a rebuild is the right call rather than a care plan over a cracked foundation.",
      },
      {
        question: "Why do I need maintenance — my site works fine right now?",
        answer:
          "Because software decays quietly when nobody is looking after it. Dependencies fall behind and open security holes, a browser or OS update breaks something that worked yesterday, performance drifts as content piles up, and a form can stop delivering leads without any visible sign. A care plan is the unglamorous insurance that prevents the hacked site, the emergency fix, and the month of leads lost to a silently broken form — usually for far less than any one of those costs.",
      },
      {
        question: "What's the difference between the monthly improvement hours and a new project?",
        answer:
          "The monthly hours are for tweaks, small features, copy edits, and fixes — the steady stream of small improvements every live asset needs. A significant new capability, a redesign, or a second version is a project, quoted separately on its own scope. We keep that line clear so the monthly fee stays predictable and you are not surprised by a big build hiding inside a maintenance invoice.",
      },
      {
        question: "How fast will you respond if something breaks?",
        answer:
          "Every plan includes priority response, and the specific response-time SLA is one of the things that scales with the tier — the entry plan covers prompt attention to issues, while Growth and Priority commit to progressively faster guaranteed response times for business-critical software. Because monitoring alerts come to us, we often start on an outage before you have even noticed it.",
      },
      {
        question: "Can I change or cancel my plan?",
        answer:
          "Yes. Plans are month to month — you can move up a tier as the asset grows or becomes more business-critical, scale down if your needs change, or cancel. The work we do (patching, monitoring, improvements) lives in accounts you own, so changing or ending a plan never costs you access to your own software.",
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
 * declared order, dropping any slug that doesn't resolve. Returns an empty
 * array for an unknown service slug.
 */
export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedServiceSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((related) => related !== undefined);
}

/** Slugs in canonical display order — handy when consumers want the order without the full object. */
export const SERVICE_SLUGS: ReadonlyArray<string> = services.map((service) => service.slug);
