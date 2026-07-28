/**
 * Industry catalogue — the canonical source of truth for WebAsk's three launch
 * verticals (aesthetic clinics, dental practices, beauty/wellness clinics).
 *
 * ⚠️ THE THREE PAGES MUST NOT READ AS CLONES. Each vertical is regulated
 * differently, and that difference IS the content:
 *   - aesthetic clinics — POM advertising, solved by site ARCHITECTURE
 *   - dental practices  — pricing transparency (live CMA study), reviews, "specialist"
 *   - beauty & wellness — health-CLAIM substantiation, and retention economics
 * Writing one and find-replacing the vertical name would produce near-duplicate
 * content and, worse, advice that is wrong for two of the three.
 * Consumed by:
 *  - `app/(marketing)/industries/page.tsx` (index — cards)
 *  - `app/(marketing)/industries/[industry]/page.tsx` (per-vertical detail page)
 *
 * Structured fields (meta, hero, FAQs, related services, schema `audienceType`)
 * live here; the long-form vertical body lives in `content/industries/<slug>.mdx`
 * and is loaded by the server-only `lib/industries.ts` (so the `node:fs` MDX
 * loader never leaks into client bundles importing this catalog). This mirrors
 * the `data/services.ts` + `lib/services.ts` split.
 *
 * Voice + E-E-A-T: copy is AI-drafted for founder review. No fabricated
 * statistics, case studies, or client names — vertical claims stay qualitative.
 * Titles follow `content-guidelines.md` § Industry ("{bundle} for {industry}")
 * and stay distinct from the service-page titles to avoid cannibalization.
 */

import type { CtaLink, FaqItem, Meta } from "@/data/types";

export type Industry = {
  readonly slug: string;
  /** Display name, e.g. "Aesthetic Clinics". Used in breadcrumbs + headings. */
  readonly name: string;
  /**
   * The vertical(s) this serves — emitted verbatim as the JSON-LD
   * `audience.audienceType` (Service → BusinessAudience). Plain, comma-listed.
   */
  readonly audienceType: string;
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
  /** One/two-line value prop for the `/industries` index card. */
  readonly cardSummary: string;
  /**
   * Service slugs (from `data/services.ts`) most relevant to this vertical, in
   * display order. Rendered as the "Services we bring to [industry]" cross-link
   * grid on the detail page (internal-linking discipline).
   */
  readonly relatedServiceSlugs: ReadonlyArray<string>;
  /**
   * Vertical-specific FAQs — rendered via `FaqAccordion` and emitted as
   * `FAQPage` JSON-LD. The first entry is always the cost/pricing question
   * (content-guidelines § FAQ: most-searched intent first).
   */
  readonly faqs: ReadonlyArray<FaqItem>;
};

export const industries: ReadonlyArray<Industry> = [
  {
    slug: "aesthetic-clinics",
    name: "Aesthetic Clinics",
    audienceType:
      "Aesthetic clinics, medical aesthetics practices, injectable and laser providers, and cosmetic dermatology clinics in the United Kingdom",
    meta: {
      title: "Compliant Websites for UK Aesthetic Clinics",
      description:
        "Websites and automation for UK aesthetic clinics, built around the advertising rules most agencies have never read. Fast, booking-led, and structured so your site does not breach the CAP Code.",
    },
    hero: {
      h1: "A clinic website that fills the diary without breaking the rules.",
      subhead:
        "Nearly every UK aesthetic clinic website is quietly non-compliant — and the fix is structural, not a rewrite of a few sentences. We build sites that convert and stay inside the CAP Code.",
      primaryCta: { label: "Book a clinic strategy call", href: "/contact" },
    },
    cardSummary:
      "Booking-led sites, CRM automation and missed-call recovery for UK aesthetic clinics — architected around the advertising rules that govern what you can say.",
    relatedServiceSlugs: ["web-development", "ui-ux-design", "crm-automation", "ai-integration"],
    faqs: [
      {
        question: "How much does an aesthetic clinic website cost",
        answer:
          "A custom clinic website starts at £3,500 for the build. Most clinics pair it with CRM and booking automation (from £2,500) so enquiries actually convert, and many add a monthly SEO retainer (from £750/month) to win local search. We scope the mix on a call — there is no sense selling you a £12,000 site when a focused build plus automation is what fills the diary. Every figure on this site is a real starting price, not a prompt to request a quote.",
      },
      {
        question: "Why is my current clinic website probably non-compliant",
        answer:
          "Because prescription-only medicines cannot be advertised to the public in the UK at all, and most clinic sites name them — on treatment pages, in price lists, in FAQs and in before-and-after captions. The ASA also treats common euphemisms as implied promotion of the same medicine, so swapping the brand name for a softer phrase does not fix it. What the rules do permit is advertising a consultation. Getting from one to the other is an information-architecture change, not a copy edit, which is why so few sites have made it.",
      },
      {
        question: "Can I still list prices for injectable treatments",
        answer:
          "Conditionally, yes — and this is the part almost nobody explains properly. A price list covering a prescription-only treatment may exist where it sits at least two clicks from the homepage, is reached through consultation-led pages, stays purely informational with no promotional framing, and appears in neither the homepage nor the primary navigation. That is a site-structure requirement, and it is exactly what we build: a consultation-first path that satisfies it without burying the page so deep that nobody finds it.",
      },
      {
        question: "Are before-and-after photos allowed",
        answer:
          "It depends entirely on what the image demonstrates. Where it is evident that a prescription-only treatment was administered, the image can constitute implied advertising of that medicine even with no text alongside it. Photographs of treatments that do not involve a prescription-only medicine are on much safer ground. Separately, patient images need documented consent for marketing use under UK GDPR. We build galleries that are fast and credible, and we flag which images belong where.",
      },
      {
        question: "Do I need a licence to operate in 2026",
        answer:
          "As at July 2026 the England licensing scheme for non-surgical cosmetic procedures is not yet in force. The Government published its consultation response in August 2025, proposing a red, amber and green risk categorisation, and signalled a further consultation on the highest-risk procedures in spring 2026. Since October 2021 it has already been a criminal offence in England to administer botulinum toxin or filler for cosmetic purposes to under-18s. We track this because a clinic site written to the wrong rules ages badly.",
      },
      {
        question: "Are you lawyers",
        answer:
          "No, and we will not pretend otherwise. We are a web and automation studio that has read the rules properly and builds sites that respect them, which puts us well ahead of most agencies in this sector but does not make us a substitute for professional advice. Where copy sits genuinely close to the line we use CAP's Copy Advice service, which is free and non-binding, rather than guessing on your behalf. Anything with real legal consequence should go past a solicitor.",
      },
      {
        question: "Will the site be fast on a phone",
        answer:
          "Yes, and in aesthetics it matters more than in most sectors because the traffic is overwhelmingly mobile and the pages are image-heavy. We hold every build to a sub-two-second largest contentful paint and enforce it in continuous integration rather than checking once at launch. A slow gallery does not merely irritate people — it ranks worse, and it quietly hands the booking to whichever clinic loaded first.",
      },
      {
        question: "Do you only work with aesthetic clinics",
        answer:
          "No — we build for UK small businesses across many sectors, and most of our work is not clinic work. Aesthetics is a focus vertical because the pattern is so consistent (mobile, enquiry-led, follow-up-driven) and because the regulatory layer rewards knowing it properly. The underlying craft is the same everywhere; what changes here is that the rules shape the architecture.",
      },
    ],
  },
  {
    slug: "dental-practices",
    name: "Dental Practices",
    audienceType:
      "Dental practices, private and cosmetic dentistry clinics, orthodontists, and multi-site dental groups in the United Kingdom",
    meta: {
      title: "Websites for UK Dental Practices — Built for the CMA Review",
      description:
        "Websites, SEO and recall automation for UK dental practices — built around the GDC standards, CQC display duties and the CMA's live private-dentistry market study.",
    },
    hero: {
      h1: "Your website is evidence in a live CMA market study.",
      subhead:
        "The CMA is examining private dental pricing transparency until March 2027, and your site is the primary artefact. We build practice websites that answer that scrutiny instead of inviting it.",
      primaryCta: { label: "Book a practice strategy call", href: "/contact" },
    },
    cardSummary:
      "New-patient websites, local SEO and recall automation for UK practices — built around GDC standards, CQC display duties and the CMA pricing review.",
    relatedServiceSlugs: ["web-development", "seo", "crm-automation", "ai-integration"],
    faqs: [
      {
        question: "How much does a dental practice website cost",
        answer:
          "A custom practice website starts at £3,500 for the build. Most practices add local SEO (from £750/month), because new patients overwhelmingly arrive through search, and CRM automation (from £2,500) to run recall, reminders and reactivation without the front desk chasing. We scope the combination on a call — a single-site general practice and a three-site orthodontic group need very different things, and we will not sell you the larger one to pad the invoice.",
      },
      {
        question: "Why does the CMA market study matter for my website",
        answer:
          "Because your website is the main place a patient encounters your pricing, and pricing transparency is explicitly in scope. The CMA opened its study into the £8.4bn private dentistry sector in March 2026 and will report by March 2027, examining whether patients can make informed choices and whether practices engage in misleading or unfair conduct. It has already noted that initial consultation prices rose more than 23% between 2022 and 2024. A site that hides prices behind “from” figures or a contact form is describing exactly the behaviour under examination.",
      },
      {
        question: "Can I use the word specialist on my website",
        answer:
          "Only if you are on the GDC specialist list for that field. Using “specialist” — or implying specialist status through phrasing like “our specialists in implants” — when the registrant is not listed is a breach of GDC standards, and it is one of the most common errors we find on practice sites. It is also trivially checkable by anyone, including a complainant. We audit every instance of the word during a build and reword the ones that cannot be supported.",
      },
      {
        question: "What are the rules on patient reviews now",
        answer:
          "Two regulators bind at once, and most practices are only aware of one. The GDC requires reviews to be genuine and not incentivised, so prize draws and discounts in exchange for reviews are a standards problem. Separately, since April 2025 the DMCC Act 2024 makes commissioning or publishing fake reviews illegal, with the CMA able to fine directly up to 10% of global turnover or £300,000. We build review flows that ask every patient, at the right moment, with no incentive attached — which satisfies both.",
      },
      {
        question: "Should we display our GDC numbers and CQC registration",
        answer:
          "Yes, and it is worth doing properly rather than tucking it in a footer. CQC registration is a legal requirement for providers in England, and displaying registration details alongside named clinicians with their GDC numbers is both a transparency duty and one of the strongest trust signals available to you. It is also a genuine search-engine signal: verifiable credentials attached to named people are precisely what quality evaluation looks for.",
      },
      {
        question: "Can we show before-and-after photographs",
        answer:
          "Yes, with documented consent for marketing use specifically — consent to treatment is not consent to publish. The images must be representative rather than the single best outcome, and any claim attached to them has to be substantiable under GDC standards and the ASA. Cosmetic dentistry results are legitimate to show; implying a typical result from an exceptional case is where practices get into difficulty.",
      },
      {
        question: "Will the site handle recall and reminders",
        answer:
          "That is usually where the fastest return sits. We wire the site into your practice management and CRM so recall, appointment reminders, reactivation of lapsed patients and post-treatment follow-up run automatically. Reducing failed appointments and reactivating dormant patients typically moves the number more than any amount of new-patient advertising, because you have already paid to acquire those people.",
      },
      {
        question: "Do you only work with dental practices",
        answer:
          "No — we build for UK small businesses across many sectors, and most of our work is not dental. Dentistry is a focus vertical because it is unusually heavily regulated and the compliance layer is where agencies routinely fall short. The craft is the same everywhere; what changes here is that four regulators shape what the site can say.",
      },
    ],
  },
  {
    slug: "beauty-wellness-clinics",
    name: "Beauty & Wellness Clinics",
    audienceType:
      "Beauty salons, day spas, IV therapy and vitamin drip clinics, and wellness, recovery and self-care studios in the United Kingdom",
    meta: {
      title: "Websites for UK Beauty & Wellness Clinics",
      description:
        "Booking-led websites, membership flows and automation for UK salons, spas and wellness studios — built around the calendar, and around claims you can actually substantiate.",
    },
    hero: {
      h1: "Booking-led websites for UK salons, spas and wellness studios.",
      subhead:
        "You live and die by the calendar. We build the booking-first site, the membership and package flows, and the automation that turns a first visit into a regular — without the health claims that get sites into trouble.",
      primaryCta: { label: "Book a clinic strategy call", href: "/contact" },
    },
    cardSummary:
      "Booking-first sites, membership and package flows, and retention automation for spas, IV bars, beauty studios, and wellness clinics.",
    relatedServiceSlugs: ["web-development", "crm-automation", "seo", "ai-integration"],
    faqs: [
      {
        question: "How much does a website for a spa or wellness clinic cost?",
        answer:
          "A custom site starts at £3,500. Most clinics add CRM and booking automation (from £2,500) to handle bookings, memberships, packages, and follow-up, and many add local SEO (from £750/month) to win nearby searches. The right mix depends on whether you're a single studio or a multi-service clinic with memberships — we scope it on a call rather than quote blind, and every starting price is published up front.",
      },
      {
        question: "Can you handle memberships, packages, and gift cards?",
        answer:
          "Yes — recurring revenue is what makes a wellness business stable, so these are central to the build rather than an afterthought. We set up online booking, memberships and recurring billing, prepaid packages and series, and gift cards, wired into your CRM and payment provider. The goal is that a first-time visitor can book, buy a package, or start a membership online without calling, and that renewals and balances are tracked automatically.",
      },
      {
        question: "How do you help us turn first-time visitors into regulars?",
        answer:
          "Retention is mostly automation done well. We build sequences in your CRM that follow up after a first visit, prompt the next booking before a client drifts, reward loyalty, win back lapsed clients, and ask happy customers for reviews at the right moment. For a spa or wellness clinic, the difference between a one-time visit and a member is usually a few well-timed, automated touches — not more manual effort from your team.",
      },
      {
        question: "Will the site be fast and look good on a phone?",
        answer:
          "Yes — and it has to be, because nearly all of your traffic is mobile and your brand is visual. We build image-rich pages that still load in under two seconds on a phone (verified in our build process), so your space and services look as good on a small screen as they do in person. A beautiful site that loads slowly loses bookings to whoever opens first; we don't trade speed for polish, we engineer both.",
      },
      {
        question: "Can you help us show up in local searches?",
        answer:
          "Yes — local SEO is how people find a spa or wellness clinic near them. The work covers a fast, well-structured site, service and location pages mapped to real search demand, your Google Business Profile, and a steady review flow through your CRM. It builds over months rather than overnight; we report on bookings rather than vanity metrics, and if you need volume sooner while SEO matures, we'll be honest that paid search is the faster lever.",
      },
      {
        question: "We miss calls and DMs when we're busy. Can automation catch them?",
        answer:
          "Yes — and in this industry the leaks are calls during treatments and messages after hours. An AI voice agent can answer every call and book straight into your calendar, and chat or messaging automation can capture and qualify the after-hours website and social traffic that would otherwise go cold. Everything lands in your CRM with context, so a missed call or a late-night DM becomes a booked appointment instead of a lost lead.",
      },
      {
        question: "What can we actually claim about our treatments?",
        answer:
          "Less than most wellness websites assume, and this is where the sector gets caught rather than on advertising rules about medicines. Any health or wellbeing benefit you state has to be substantiable, and claims about nutrition or health — the kind that cluster around IV and vitamin therapy, immunity, energy and detox — are tightly controlled, with only authorised claims permitted. Describing what a treatment is and how it feels is safe ground; asserting what it cures, prevents or boosts usually is not. We write service pages that sell the experience without making claims you would struggle to defend.",
      },
      {
        question: "Are the review rules different for us?",
        answer:
          "The DMCC Act 2024 applies to you exactly as it does to any other business: since April 2025 commissioning or publishing fake reviews is illegal, and the CMA can determine a breach and fine directly — up to 10% of global turnover or £300,000. Incentivised reviews are the specific risk in this sector, because prize draws and discount-for-review offers are so common in salon marketing. We build a review flow that asks every client at the right moment with nothing attached, which is both compliant and, in practice, more effective.",
      },
      {
        question: "Do you only work with beauty and wellness clinics?",
        answer:
          "No — we build for UK small businesses across many sectors, and most of our work is not in this one. Beauty and wellness is a focus vertical because the model is so consistent — booking-led, membership-driven, retention-sensitive — so we arrive with proven patterns rather than guesses. The underlying craft is the same everywhere; what changes here is that the money is in retention rather than acquisition, and the site has to be built for that.",
      },
    ],
  },
] as const;

/** Lookup by canonical slug. Returns undefined if the slug isn't a known industry. */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

/**
 * Industries relevant to a service — the inverse of `relatedServiceSlugs`, so
 * the catalog above stays the single source of truth (no parallel list to drift
 * out of sync). A service that no launch vertical claims (e.g. e-commerce) maps
 * to an empty array, and its consumer renders services-only.
 */
export function getIndustriesForService(serviceSlug: string): Industry[] {
  return industries.filter((industry) => industry.relatedServiceSlugs.includes(serviceSlug));
}

/** Slugs in canonical display order — handy when consumers want the order without the full object. */
export const INDUSTRY_SLUGS: ReadonlyArray<string> = industries.map((industry) => industry.slug);
