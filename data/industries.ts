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
      "Med spas, aesthetic clinics, injectable and laser providers, and cosmetic dermatology practices",
    meta: {
      title: "Web Design & Marketing for Aesthetic Clinics & Med Spas",
      description:
        "Booking-first websites, GoHighLevel automation, missed-call AI, and local SEO for med spas and aesthetic clinics — built to fill consultation calendars, not win design awards.",
    },
    hero: {
      h1: "Websites and automation that keep your aesthetic clinic's calendar full.",
      subhead:
        "Most med-spa sites look good and book nothing. We build the conversion path — fast site, frictionless booking, and follow-up that catches the leads your front desk misses.",
      primaryCta: { label: "Book a clinic strategy call", href: "/contact" },
    },
    cardSummary:
      "Booking-first sites, CRM automation, and missed-call recovery for med spas, injectable and laser providers, and cosmetic dermatology.",
    relatedServiceSlugs: ["web-development", "ui-ux-design", "crm-automation", "ai-integration"],
    faqs: [
      {
        question: "How much does a med spa website cost?",
        answer:
          "A custom aesthetic-clinic website starts at USD $3,500 for the build itself. Most clinics pair it with CRM and booking automation (from USD $4,500) so leads actually convert, and many add a monthly SEO retainer (from USD $1,500/month) to win local search. We scope the exact mix on a call — there's no point selling you a $20,000 site if a focused build plus automation is what fills your calendar. Every price on our site is a real starting figure, not a contact-for-quote game.",
      },
      {
        question: "Can you connect the site to our booking and CRM tools?",
        answer:
          "Yes — that's usually the highest-leverage part of the work. We wire your site into the booking and CRM stack you already run, or set one up (we work extensively in GoHighLevel and HubSpot). Online booking, intake forms, automated appointment reminders, deposit handling, and review requests all flow through one system, so a consultation request becomes a booked, confirmed, reminded appointment without your front desk re-typing anything.",
      },
      {
        question: "We miss a lot of calls when we're with clients. Can AI help?",
        answer:
          "This is the single biggest leak we see in aesthetics. When you're mid-treatment you can't answer the phone, and a prospect who reaches voicemail books somewhere else. An AI voice agent answers every call, books straight into your calendar, answers common questions about treatments and pricing, and texts a booking link to anyone it can't fully handle — then logs it all in your CRM. It pays for itself on the appointments you're currently losing to voicemail.",
      },
      {
        question: "Do you handle before-and-after galleries and treatment pages properly?",
        answer:
          'Yes, and we treat them as the conversion engine they are. Treatment pages are built around how patients actually search ("lip filler near me," "morpheus8 cost") with the structure search engines reward, and galleries are built to load fast and look credible on a phone. We\'ll also flag the compliance edges — consent for patient images, and the advertising rules around before-and-afters and injectable brand names vary by state and platform — so you show results without inviting a problem.',
      },
      {
        question: "Will the site actually be fast on a phone?",
        answer:
          "Yes — and for aesthetics it matters more than most verticals, because your traffic is overwhelmingly mobile and image-heavy. We enforce a sub-2-second mobile load in our build process and verify it in continuous integration, so your gallery-rich pages stay fast. A slow site doesn't just frustrate visitors; it ranks worse and quietly costs you the bookings that go to whoever loads first.",
      },
      {
        question: "Can you help us rank for treatments in our city?",
        answer:
          'Yes — local SEO is core to aesthetics, where almost every search has a "near me" intent. The work spans the technical foundation, treatment and location pages mapped to real search demand, your Google Business Profile, and a review-generation flow through your CRM. It compounds over months rather than weeks; anyone promising you the top spot next month is best avoided. If you need patients faster while SEO matures, we\'ll say so and point you at paid search.',
      },
      {
        question: "Do you only work with aesthetic clinics?",
        answer:
          "No — Naxdor builds for SMBs across many industries. Aesthetics is one of our focus verticals because the pattern is so consistent (mobile, booking-led, follow-up-driven), so we bring playbooks rather than starting from scratch. But the underlying craft — fast custom sites, CRM automation, AI integration, SEO — is the same work we do everywhere, applied to how your clinic actually wins patients.",
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
          "A custom dental website starts at USD $3,500. Most practices add local SEO (from USD $1,500/month) because new patients come from search, and CRM automation (from USD $4,500) to handle recall, reminders, and reactivation. We scope the right combination to your goals on a call — a single-location general practice and a three-location ortho group need very different things, and we won't sell you the larger one to pad the invoice. Starting prices are published; the quote is built around your scope.",
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
          "A custom site starts at USD $3,500. Most clinics add CRM and booking automation (from USD $4,500) to handle bookings, memberships, packages, and follow-up, and many add local SEO (from USD $1,500/month) to win nearby searches. The right mix depends on whether you're a single studio or a multi-service clinic with memberships — we scope it on a call rather than quote blind, and every starting price is published up front.",
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
