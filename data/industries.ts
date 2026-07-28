/**
 * Industry catalog — the canonical source of truth for Naxdor's three launch
 * verticals (aesthetic clinics, dental practices, beauty/wellness clinics).
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
      "Dental practices, cosmetic dentistry clinics, orthodontists, and multi-location dental groups",
    meta: {
      title: "Dental Website Design & Marketing for Practices",
      description:
        "New-patient websites, local SEO, and CRM automation for dental and orthodontic practices — built to fill the schedule, cut no-shows, and keep recall patients coming back.",
    },
    hero: {
      h1: "Digital growth for dental practices — more new patients, fewer no-shows.",
      subhead:
        "Your next patient is searching on a phone right now. We build the site, the local-search presence, and the automated recall and reminders that turn that search into a booked, kept appointment.",
      primaryCta: { label: "Book a practice strategy call", href: "/contact" },
    },
    cardSummary:
      "New-patient websites, local SEO, and recall/reminder automation for general, cosmetic, and orthodontic practices.",
    relatedServiceSlugs: ["web-development", "seo", "crm-automation", "ai-integration"],
    faqs: [
      {
        question: "How much does a dental practice website cost?",
        answer:
          "A custom dental website starts at £3,500. Most practices add local SEO (from £750/month) because new patients come from search, and CRM automation (from £2,500) to handle recall, reminders, and reactivation. We scope the right combination to your goals on a call — a single-location general practice and a three-location ortho group need very different things, and we won't sell you the larger one to pad the invoice. Starting prices are published; the quote is built around your scope.",
      },
      {
        question: "How do you help us get more new patients?",
        answer:
          'New-patient growth in dentistry is mostly a local-search problem. We make sure your site is technically sound and fast, build service and location pages mapped to what patients actually search ("emergency dentist near me," "invisalign cost," "dentist accepting new patients"), optimize your Google Business Profile, and run a steady review-generation flow through your CRM. Combined with a site that makes booking effortless, that\'s what turns local searches into booked first visits.',
      },
      {
        question: "Can you reduce our no-shows and reactivate lapsed patients?",
        answer:
          "Yes — this is where CRM automation earns its keep in a practice. Automated appointment reminders by text and email cut no-shows materially, and recall and reactivation campaigns bring back patients overdue for a cleaning or who fell off the schedule. We set up the sequences in your CRM (we work heavily in GoHighLevel and HubSpot) so they run quietly in the background instead of depending on someone at the desk remembering to call.",
      },
      {
        question: "Is patient data handled safely? What about HIPAA?",
        answer:
          "We build with patient privacy front of mind: secure forms, sensible data handling, and care around what gets stored where. To be precise about scope — we're a web and software firm, not a HIPAA compliance certifier, and the platforms that store protected health information (your practice-management system, your CRM) are where a Business Associate Agreement and formal compliance live. We configure those tools to keep PHI out of places it shouldn't be, and we'll tell you plainly where a compliance specialist or a signed BAA is the right call.",
      },
      {
        question: "We have a phone that rings constantly. Can AI help with it?",
        answer:
          "Yes. A front desk juggling checkouts, insurance questions, and a ringing phone drops calls — and a missed call from a patient in pain is a patient who calls the next practice. An AI voice agent can answer every call, book new-patient and routine appointments straight into your system, handle common questions about hours, insurance, and procedures, and route genuine emergencies to a human. It captures the after-hours and overflow calls you're losing today.",
      },
      {
        question: "How long until we see results from SEO?",
        answer:
          "Realistically, months, not weeks. The first month is technical fixes, keyword strategy, and on-page work; months two to four bring early gains on longer-tail terms; months five to twelve are where competitive local terms move and organic becomes a steady new-patient channel. We report against booked patients, not vanity metrics. If you need to fill chairs faster while SEO compounds, paid search is the honest short-term answer and we'll point you to it.",
      },
      {
        question: "Can you work with our existing practice-management software?",
        answer:
          "Usually, yes. We integrate the website and CRM layer with the practice-management and scheduling systems common in dentistry over their official interfaces, so booking and patient data flow between them rather than living in silos. The exact integration depends on which system you run and what it exposes — we map that during scoping so it's a planned part of the project, not a surprise mid-build.",
      },
    ],
  },
  {
    slug: "beauty-wellness-clinics",
    name: "Beauty & Wellness Clinics",
    audienceType:
      "Day spas, beauty studios, IV therapy bars, and wellness, recovery, and self-care clinics",
    meta: {
      title: "Beauty & Wellness Clinic Websites & Marketing",
      description:
        "Appointment-driven websites, CRM automation, and local SEO for spas, IV bars, beauty studios, and wellness clinics — built around bookings, memberships, and repeat visits.",
    },
    hero: {
      h1: "Appointment-driven websites for beauty and wellness clinics.",
      subhead:
        "Spas, IV bars, and wellness studios live and die by the calendar. We build the booking-first site, the membership and package flows, and the automation that turns first visits into regulars.",
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
        question: "Do you only work with beauty and wellness clinics?",
        answer:
          "No — Naxdor serves SMBs across many industries. Beauty and wellness is a focus vertical because the model is so consistent (booking-led, membership-driven, retention-sensitive), so we arrive with proven patterns instead of guesses. The core craft, though — fast custom sites, CRM and booking automation, AI integration, and SEO — is the same work we deliver everywhere, tuned to how your clinic actually makes money.",
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
