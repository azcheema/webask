/**
 * Industry catalogue — the canonical source of truth for WebAsk's three launch
 * verticals (aesthetic clinics, dental practices, beauty/wellness clinics).
 *
 * ⚠️ THE THREE PAGES MUST NOT READ AS CLONES. Each vertical is regulated
 * differently, and that difference IS the content:
 *   - aesthetic clinics — POM advertising, solved by site ARCHITECTURE
 *   - dental practices  — prices and patient choice (live CMA study), reviews, "specialist"
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
 * loader never leaks into client bundles importing this catalogue). This mirrors
 * the `data/services.ts` + `lib/services.ts` split.
 *
 * Voice + E-E-A-T: copy is AI-drafted for founder review. No fabricated
 * statistics, case studies, or client names — vertical claims stay qualitative.
 * Titles follow `content-guidelines.md` § Industry ("{bundle} for {industry}")
 * and stay distinct from the service-page titles to avoid cannibalisation.
 *
 * ⚠️ EVERY STRING BELOW RENDERS, and the `faqs` arrays are emitted as `FAQPage`
 * JSON-LD by both industry routes — so a claim here can surface in a search
 * result stripped of the page that qualified it. Two rules follow, and doc 03
 * § B4 (the copy-review checklist, first run over these pages 2026-07-29) is
 * the gate: no claim may imply a client, an audit or a track record — there are
 * none — and no prescription-only medicine may be named in this file at all,
 * because every string in it is sales copy, never editorial (docs/08 § 6).
 *
 * Corrected 28 September 2026 against primary sources read that day (PLAN C0):
 * the price-list route quoted from the ASA/CAP FAQ of 23 January 2020 and CAP
 * Bitesize (undated); before-and-after lines from the ASA's guidance of 5 June
 * 2025; licensing as the proposed scheme, not in force (s.180 Health and Care
 * Act 2022; HL12386, 8 December 2025); the under-18s offence per the 2021 Act
 * (2021 c. 19) s.1(1) and (4), never by its short title; "specialist" quoted
 * from the GDC's advertising guidance, checklist and specialist-lists page; the
 * GDC reviews claim and "representative" removed (no GDC source found); reviews
 * as a DMCC banned practice, plus Google's Maps content policy (research 08
 * § B5); the CMA figures with their own qualifiers; and every frequency or
 * track-record clause removed.
 *
 * Corrected 29 September 2026 against primary sources read that day: the
 * before-and-after lines relabelled CAP's advice of 5 June 2025 (the page is
 * "given by the CAP Executive" and "does not bind … the Advertising Standards
 * Authority"); Google's Maps content policy quoted as it now reads ("We do not
 * allow merchants to: Offer incentives … in exchange for posting any review"),
 * replacing the older "should not"; the dental hero, card summary and CMA FAQ
 * held to the scope the CMA press release of 5 March 2026 proposed on opening
 * (how people "compare providers, and understand the information they receive
 * from dental professionals") and its update of 17 July 2026 (no findings;
 * final report by 4 March 2027), in place of
 * "pricing transparency is explicitly in scope", which no CMA text read
 * contains; "we check … during a build", "we build review flows" and "we
 * build galleries" restated as WebAsk's build standard; and "annual" removed
 * from the DMCC penalty line in both FAQ answers, since neither s.182(6) nor
 * s.204(1)(a) contains it (docs/03 § A6).
 *
 * Also 29 September 2026, on the founder's decisions of that day: the FAQ
 * credited to CAP ("CAP's FAQ", not "the ASA/CAP FAQ") in the two aesthetic
 * price-list answers, since the FAQ is CAP News and CAP's guidance, not the
 * ASA's; and the aesthetic before-and-after answer's closing line, "Our
 * build standard is a fast, credible gallery with each image flagged for
 * where it may appear", replaced by WebAsk's build standard (docs/03 § B1,
 * Before-and-after images): no before-and-after gallery for a clinic that
 * offers a prescription-only medicine, labelled our choice, not CAP's rule.
 * The "Are you lawyers?" answer's "we use CAP's Copy Advice service" is
 * restated as WebAsk's standard, for advertising copy only (F4, docs/03 § B4).
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
        "Websites and automation for UK aesthetic clinics, built around the CAP Code rules that govern what a clinic site may say. Fast, booking-led, and structured to stay inside them.",
    },
    hero: {
      h1: "A clinic website that fills the diary without breaking the rules.",
      subhead:
        "A prescription-only medicine may not be advertised to the public, so a clinic website advertises the consultation instead — and getting that right is a matter of site structure as much as wording.",
      primaryCta: { label: "Book a clinic strategy call", href: "/contact" },
    },
    cardSummary:
      "Booking-led sites, CRM automation and missed-call recovery for UK aesthetic clinics — architected around the advertising rules that govern what you can say.",
    relatedServiceSlugs: ["web-development", "ui-ux-design", "crm-automation", "ai-integration"],
    faqs: [
      {
        question: "How much does an aesthetic clinic website cost?",
        answer:
          "A custom clinic website starts at £3,500 for the build. Add CRM and booking automation (from £3,500) where enquiries are getting lost between the form and the diary, and a monthly SEO retainer (from £750 a month) where local search is where your patients start — each excl. VAT. We scope the mix on a call: there is no sense selling you a £12,000 site when a focused build plus automation is what fills the diary. Every figure here is an indicative starting point published up front, not a binding offer and not a prompt to request a quote.",
      },
      {
        question: "Where can a clinic website break the advertising rules?",
        answer:
          "Anywhere it advertises a prescription-only medicine to the public, which UK rules do not allow: on the homepage, on a treatment page, in an FAQ or in a before-and-after caption. CAP's guidance counts indirect references to the medicine, not only its name, so a softer phrase does not by itself fix it. What the rules do permit is advertising a consultation. A price list is a narrow case: CAP's FAQ of 23 January 2020 says one “might be acceptable” if clients “can only get to the price list after going through a page promoting a consultation”. That is an information-architecture change as well as a copy edit.",
      },
      {
        question: "Can I still list prices for injectable treatments?",
        answer:
          "Conditionally. For a prescription-only treatment, CAP's FAQ of 23 January 2020 says a price on the homepage, or a direct link to “Prices” that mentions the medicine, “is unlikely to be acceptable”, while a price list “might be acceptable” if clients “can only get to the price list after going through a page promoting a consultation”. CAP's Bitesize guidance puts the page with treatment information “ideally two clicks from the homepage”, and says the reference to the medicine must be “purely informational with no promotional content”. We build that consultation-first route without burying the page so deep that nobody finds it.",
      },
      {
        question: "Are before-and-after photos allowed?",
        answer:
          "It depends on what the image shows. CAP's advice of 5 June 2025 says before-and-after imagery of a prescription-only product, “even in isolation without any accompanying claims, is very likely to be seen as an implied ad” for it. For any before-and-after photo, it asks marketers to hold signed and dated proof that the photos are genuine and have not been manipulated, and says they should not exaggerate the efficacy of the treatment. For a clinic that offers a prescription-only medicine, our build standard leaves before-and-after galleries off the site. That is our choice, not CAP's rule.",
      },
      {
        question: "Do I need a licence under the proposed cosmetic procedures scheme?",
        answer:
          "As at 28 September 2026 the proposed licensing scheme for non-surgical cosmetic procedures in England is not in force, and we found no licensing regulations made under the power in the Health and Care Act 2022. On 8 December 2025 the Government said it was “taking forward work to determine which procedures will be included” and “what requirements will have to be met in order to be granted a licence”. What is in force is the 2021 Act (2021 c. 19), which covers filler injections for a cosmetic purpose and one named prescription-only medicine: since 1 October 2021 it has been an offence to administer either to a person under 18 in England, subject to defences, including one for registered medical practitioners. We date this because a clinic site written to the wrong rules ages badly.",
      },
      {
        question: "Are you lawyers?",
        answer:
          "No, and we will not pretend otherwise. We are a web and automation studio that has read the rules properly and builds sites that respect them — which is not professional advice and is no substitute for it. Where advertising copy sits genuinely close to the line, our standard is to put it to CAP's Copy Advice service, which is free and non-binding, rather than guessing on your behalf. Anything with real legal consequence should go past a solicitor.",
      },
      {
        question: "Will the site be fast on a phone?",
        answer:
          "Yes, and it matters more here than in most sectors, because this is a sector people browse on a phone and the pages are image-led — which is an awkward combination, since images are what make pages slow. Total page weight, layout shift and main-thread blocking are hard budgets in continuous integration — a build that regresses one of them fails and does not ship. Load time itself is written against a two-second target and settled on field data after launch, because a throttled build server reports a slower number than the phone in your patient's hand. A slow gallery does not merely irritate people — it ranks worse, and it quietly hands the booking to whichever clinic loaded first.",
      },
      {
        question: "Are these services only for aesthetic clinics?",
        answer:
          "No. The nine services are built for UK small businesses generally. Aesthetics is a focus vertical because the regulatory layer here shapes the architecture and not merely the wording, which is unusual and worth specialising in. The underlying craft is the same in every sector.",
      },
    ],
  },
  {
    slug: "dental-practices",
    name: "Dental Practices",
    audienceType:
      "Dental practices, private and cosmetic dentistry clinics, orthodontists, and multi-site dental groups in the United Kingdom",
    meta: {
      title: "Websites for UK Dental Practices — the CMA Market Study",
      description:
        "Websites, SEO and recall automation for UK dental practices — built around the GDC standards, CQC registration and the CMA's live private-dentistry market study.",
    },
    hero: {
      h1: "The CMA is studying private dentistry, prices included. Your website is where patients meet yours.",
      subhead:
        "The CMA's market study of private dentistry is due to report by 4 March 2027. The scope it proposed on opening included how people “compare providers, and understand the information they receive from dental professionals”. The study is sector-level; its 17 July 2026 update set out no findings. Our build standard puts your prices where patients can find them.",
      primaryCta: { label: "Book a practice strategy call", href: "/contact" },
    },
    cardSummary:
      "New-patient websites, local SEO and recall automation for UK practices — built around GDC standards, CQC registration and the CMA's review of private dentistry.",
    relatedServiceSlugs: ["web-development", "seo", "crm-automation", "ai-integration"],
    faqs: [
      {
        question: "How much does a dental practice website cost?",
        answer:
          "A custom practice website starts at £3,500 for the build. Two additions are worth scoping alongside it: local SEO (from £750 a month) where new-patient search is the channel you compete in, and CRM automation (from £3,500) to run recall, reminders and reactivation without the front desk chasing — each excl. VAT. We scope the combination on a call: a single-site general practice and a three-site orthodontic group need very different things, and we will not sell you the larger one to pad the invoice.",
      },
      {
        question: "Why does the CMA market study matter for my website?",
        answer:
          "Because your website is where a patient meets your prices, and the scope the study proposed on opening included how people “compare providers, and understand the information they receive from dental professionals”. The CMA opened it in March 2026, and its final report is due by 4 March 2027. On opening it cited figures from independent sources rather than findings of its own: a UK private dentistry market valued at £8.4 billion in 2023 to 2024, and an initial consultation up more than 23% between 2022 and 2024. The study is sector-level, and its update of 17 July 2026 set out no findings; the part a practice controls is whether its own prices are easy to find.",
      },
      {
        question: "Can I use the word specialist on my website?",
        answer:
          "Only if the dentist is on a GDC specialist list for that field. The GDC says dentists “can only use the title ‘specialist’ if they are on that list”, and one who is not must not describe themselves as “specialising in” a treatment, though “special interest in”, “experienced in” or “practice limited to” are allowed. Its advertising checklist gives implantology as an area with no specialist list at all. Anyone can check: “Members of the public can find a specialist by searching the GDC register.” Our build standard checks every instance of the word and rewords any that cannot be supported.",
      },
      {
        question: "What are the rules on patient reviews now?",
        answer:
          "Since April 2025 the DMCC Act 2024 has made commissioning or publishing fake reviews a banned practice, along with concealing that a review was incentivised, and the CMA can determine a breach and fine directly — up to 10% of global turnover or £300,000, whichever is higher. Google's Maps content policy goes further: it does not allow businesses to offer incentives in exchange for posting any review. Our build standard is a review flow that asks every patient, at the right moment, with no incentive attached — which satisfies both.",
      },
      {
        question: "Should we display our GDC numbers and CQC registration?",
        answer:
          "Yes, and it is worth doing properly rather than tucking it in a footer. CQC registration is a legal requirement for providers in England, and the GDC expects registration transparency of its registrants; displaying registration details alongside named clinicians with their GDC numbers is what turns both into something a patient can actually see. It is also excellent E-E-A-T: verifiable credentials attached to named people are exactly what quality evaluation looks for.",
      },
      {
        question: "Can we show before-and-after photographs?",
        answer:
          "Yes, with documented consent for marketing use specifically — consent to treatment is not consent to publish. CAP's advice of 5 June 2025 says CAP and the ASA treat before-and-after photos like testimonials: marketers should hold signed and dated proof that they are genuine and have not been manipulated, the photos should not exaggerate the efficacy of the treatment, and there should be evidence for the impression they create. Cosmetic dentistry results are legitimate to show on those terms.",
      },
      {
        question: "Will the site handle recall and reminders?",
        answer:
          "Yes. We wire the site into your practice management and CRM so recall, appointment reminders, reactivation of lapsed patients and post-treatment follow-up run automatically. The argument for scoping it early is arithmetic rather than opinion: a failed appointment and a lapsed recall are both revenue you have already paid to acquire and not collected, which is not true of a new-patient enquiry you have yet to win.",
      },
      {
        question: "Are these services only for dental practices?",
        answer:
          "No — the same nine services are built for any UK small business. Dentistry is a focus vertical because it is unusually heavily regulated — four bodies reach the same pages at once — and that is a layer worth knowing properly rather than working around. The craft is the same in every sector; what changes here is what the site is allowed to say.",
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
      primaryCta: { label: "Book a strategy call", href: "/contact" },
    },
    cardSummary:
      "Booking-first sites, membership and package flows, and retention automation for UK salons, spas, IV bars and wellness studios.",
    relatedServiceSlugs: ["web-development", "crm-automation", "seo", "ai-integration"],
    faqs: [
      {
        question: "How much does a website for a spa or wellness clinic cost?",
        answer:
          "A custom site starts at £3,500. CRM and booking automation is scoped from £3,500 where bookings, memberships, packages and follow-up need to run without someone at the desk, and local SEO from £750 a month where nearby search is how people find you — each excl. VAT. The right mix depends on whether you are a single studio or a multi-service clinic with memberships, so we scope it on a call rather than quote blind. Every starting price is published up front.",
      },
      {
        question: "Can you handle memberships, packages, and gift cards?",
        answer:
          "Yes — recurring revenue is what makes a wellness business stable, so these are central to the build rather than an afterthought. We set up online booking, memberships and recurring billing, prepaid packages and series, and gift cards, wired into your CRM and payment provider. The goal is that a first-time visitor can book, buy a package, or start a membership online without calling, and that renewals and balances are tracked automatically.",
      },
      {
        question: "How do you help us turn first-time visitors into regulars?",
        answer:
          "Retention is mostly automation done well. We build sequences in your CRM that follow up after a first visit, prompt the next booking before a client drifts, reward loyalty, win back lapsed clients, and ask every client for a review at the right moment. The point of building it this way is that the follow-up, the rebooking prompt and the win-back all fire on their own, at the point in the visit cycle where they are useful — rather than depending on someone at the desk remembering.",
      },
      {
        question: "Will the site be fast and look good on a phone?",
        answer:
          "Yes — and it matters here, because this is a sector people browse on a phone while the brand itself is image-led, which is an awkward combination: images are what make pages slow. We build image-rich pages against a two-second load target, with page weight, layout shift and blocking time enforced as build-failing budgets so a gallery cannot get heavier release by release. Your space and services should look as good on a small screen as they do in person, and still load before someone gives up. We don't trade speed for polish; both are engineering.",
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
          "Narrower than it looks, and which rule applies turns on what the thing is rather than on what you call your business. Any objective claim needs evidence behind it. For a food or supplement, only claims authorised on the GB nutrition and health claims register — in force since January 2021 — or claims that mean the same thing to a consumer, may be used; that is CAP Code section 15. Anything injected or infused is different again and stricter: a medicinal claim is not permitted unless that specific product is licensed as a medicine for that purpose, and the ASA has upheld complaints against IV clinics on exactly that point. Describing what a treatment is and how it feels is safe ground; asserting what it cures, prevents or boosts usually is not. Our build standard is service pages that sell the experience without making claims you would struggle to defend.",
      },
      {
        question: "Are the review rules different for us?",
        answer:
          "The DMCC Act 2024 applies to you exactly as it does to any other business: since April 2025 commissioning or publishing fake reviews has been a banned practice, and the CMA can determine a breach and fine directly — up to 10% of global turnover or £300,000, whichever is higher. On incentives, what the Act prohibits is concealing one rather than offering it, but that is the Act alone: Google's Maps content policy does not allow businesses to offer incentives in exchange for posting any review. Our build standard is a review flow that asks every client at the right moment with nothing attached, which sidesteps the question and samples everyone rather than only the people a discount motivated.",
      },
      {
        question: "Are these services only for beauty and wellness clinics?",
        answer:
          "No. All nine services are built for UK small businesses of any kind. Beauty and wellness is a focus vertical because the model is so consistent — booking-led, membership-driven, retention-sensitive — that the build has a clear shape before we start rather than being invented per client. The underlying craft is the same in every sector; what changes here is that the money is in retention rather than acquisition, and the site has to be built for that.",
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
 * the catalogue above stays the single source of truth (no parallel list to drift
 * out of sync). A service that no launch vertical claims (e.g. e-commerce) maps
 * to an empty array, and its consumer renders services-only.
 */
export function getIndustriesForService(serviceSlug: string): Industry[] {
  return industries.filter((industry) => industry.relatedServiceSlugs.includes(serviceSlug));
}

/** Slugs in canonical display order — handy when consumers want the order without the full object. */
export const INDUSTRY_SLUGS: ReadonlyArray<string> = industries.map((industry) => industry.slug);
