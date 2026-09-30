/**
 * Legal page copy — Privacy Notice, Website Terms, Cookie Policy and Company
 * Information.
 *
 * ⚠️ STATUS (1 October 2026): privacy / terms / cookies are **`draft: true`**.
 * They were redrafted on 1 October 2026 to a professional standard, ready for
 * review by a UK solicitor. The brief for that review is
 * `docs/legal/review-brief.md`, and its open items carry the same numbers as the
 * list at the end of this comment. Draft means `noindex` + a visible "working
 * draft" notice. Do not flip a draft flag until the founder has closed the open
 * items that document depends on and the reviewer has read it. Every bracketed
 * placeholder (the `TBC_*` constants below) must be gone first.
 *
 * `company-information` is NOT a draft: it is a factual entity disclosure, and
 * every fact in it is verifiable from `data/site.ts`.
 *
 * Promotion gate: when a document is approved, set `draft: false` and bump
 * `lastUpdated`. That single flip both indexes the page and drops the notice.
 * Then move its path into the sitemap list in `e2e/smoke.spec.ts`.
 *
 * GROUNDING (what this copy is written against — keep it accurate). Pages were
 * read on 1 October 2026 unless another date is given.
 *   - Entity: **WebAsk is a trading name of Naxdor**, an enskild firma (Swedish
 *     sole proprietorship) operated by Ansar Cheema. No UK company, no Companies
 *     House number, no UK office (D1). Registered address + contact in
 *     `data/site.ts`.
 *   - Controller: verksamt.se, "Set up and register as a sole trader" (page dated
 *     29 September 2026): the owner runs the business "as a private individual
 *     and sole owner" and has "unlimited personal liability". The notice
 *     therefore names Ansar Cheema, trading as Naxdor and as WebAsk.
 *   - Regimes: EU GDPR Art. 3(1) applies because the business is established in
 *     Sweden, supervised by IMY (imy.se "About us", updated 29 May 2026). UK GDPR
 *     Art. 3(2)(a) + DPA 2018 for people in the UK; PECR is described as
 *     followed, not asserted to apply (open item 3).
 *   - The UK regulator: S.I. 2026/1015 (made 10 September 2026) brought DUAA
 *     2025 s.118 ("abolition of the office of Information Commissioner") and
 *     s.119 ("transfer of functions to the Information Commission") into force
 *     on 30 September 2026. ICO news item "ICO governance changes confirmed for
 *     30 September 2026" (15 September 2026, updated 17 September 2026): "As the
 *     Information Commission's Office, we will continue to be known as the ICO."
 *     The notice names "the Information Commission, known as the ICO".
 *   - Article 27 UK GDPR, paras 1 and 2 (legislation.gov.uk, up to date to 30
 *     September 2026). The notice paraphrases para 2(a) and states D3 as open.
 *   - Complaints to the controller: DPA 2018 s.164A, inserted by DUAA 2025
 *     s.103(2), in force "19.6.2026 in so far as not already in force" (S.I.
 *     2026/82, reg. 3(a)). ICO, "How to make a data protection complaint to an
 *     organisation" (29 June 2026) for the "complain to us first" line.
 *   - Rights timing: UK GDPR Art. 12 and the ICO's right-of-access page
 *     "What should we consider when responding to a request?" (8 December 2025):
 *     one month, extendable by two months, clock starts once identity is
 *     confirmed.
 *   - Lawful bases: UK GDPR Art. 6(1) and 6(3) — a legal obligation under
 *     Swedish law is not "domestic law" for the UK GDPR, so bookkeeping relies on
 *     legitimate interests there and Art. 6(1)(c) under the EU GDPR. Art. 6(1)(b)
 *     needs the data subject to be party to the contract, so enquiries from
 *     people acting for a business rest on legitimate interests.
 *   - Right to object shown separately: UK GDPR Art. 21(4).
 *   - Transfers: DPA 2018 Sch. 21 paras 4–5 (EEA states treated as approved
 *     under UK GDPR Art. 45A); S.I. 2023/1028 reg. 3 (UK–US data bridge); the
 *     European Commission's adequacy page (US decision of 10 July 2023). The
 *     Data Privacy Framework List, searched 1 October 2026: Vercel Inc.,
 *     Google LLC and Atlassian, Inc. (whose privacy policy, effective 17 August
 *     2026, names Loom, Inc. among its participating subsidiaries) "Active" for
 *     the EU–US DPF and the UK Extension; Resend "Active - Re-certification
 *     under Review" for both.
 *   - Processors and their terms: Resend DPA (2025-12-31; processor; UK SCCs
 *     with the UK Addendum; DPF + UK Extension); Vercel DPA (last updated 17
 *     March 2026; processor for Pro and Enterprise plans only; SCCs + UK IDTA);
 *     Google Ads Data Processing Terms (effective 30 May 2024; "Google is a
 *     processor"; Google Analytics listed at business.safety.google/adsservices,
 *     page dated 23 October 2025); Atlassian DPA (effective 17 August 2026;
 *     processor; SCCs, DPF, UK Addendum).
 *   - Others who receive data: WhatsApp, under its own terms (Business App
 *     terms effective 23 September 2026, open item 7).
 *   - Google disclosures: Google Analytics Terms of Service § 7 (last modified 11
 *     January 2024) asks for the "How Google uses information from sites or apps
 *     that use our services" link; "[GA4] Cookie usage on websites" (`_ga`,
 *     `_ga_<container-id>`, 2 years each); "EU, Switzerland, or UK-focused data
 *     and privacy" (IP addresses not logged or stored); "Data retention" (2 or
 *     14 months for standard properties).
 *   - Microsoft Clarity: dropped before launch (founder, 1 October 2026; open
 *     item 10). No Clarity fact grounds this copy any longer.
 *   - Vercel facts: "Privacy and Compliance" for Web Analytics (updated 26 June
 *     2026: anonymous data points, a hash of the request, visitor session
 *     discarded after 24 hours); Speed Insights privacy page (18 March 2026);
 *     "Runtime Logs" (28 August 2026: Pro keeps one day); "Vercel Hobby Plan"
 *     (14 September 2026: non-commercial, personal use only).
 *   - PECR: the statistical-purposes exception since 5 February 2026 (docs/03
 *     § A4). ICO, "What are the exceptions?" (guidance last updated 29 April
 *     2026): "not a broad exception that covers all types of analytics
 *     technologies or ways you can use them"; "your third party provider must be
 *     a processor, not a joint controller". The cookie policy states only that
 *     we do not rely on the exception.
 *   - Retention: 12 months for an enquiry that does not lead to work (founder,
 *     1 October 2026). Accounting records: Bokföringslagen (1999:1078) 7 kap.
 *     2 § (riksdagen.se, t.o.m. SFS 2024:342): kept "fram till och med det
 *     sjunde året efter utgången av det kalenderår då räkenskapsåret avslutades".
 *   - Data collected: the contact form (`lib/contact-schema.ts`: name, email,
 *     service, budget, timeline and message required; company and country
 *     optional) + a honeypot (`company_url`, discarded) + hosting logs. Email,
 *     phone and WhatsApp on `site.phone` (`data/copy/contact.ts`). The free audit
 *     needs only a web address, done by Ansar Cheema, one follow-up at most, no
 *     mailing list (`data/copy/free-audit.ts`); walkthroughs recorded and shared
 *     with Loom (founder, 1 October 2026). There is no CRM (founder, 1 October
 *     2026).
 *   - Browser storage: `theme` (next-themes, written only by `setTheme`, i.e.
 *     the theme switch) and `webask:analytics-consent` (`ANALYTICS_CONSENT_KEY`
 *     in `lib/analytics.ts`, written only on Accept/Reject). Neither is a
 *     cookie. GA4 loads only after consent
 *     (`components/analytics/analytics-scripts.tsx`); withdrawing stops it
 *     loading but does not delete its cookies (that file's header).
 *   - Terms: prices "excl. VAT" and the reverse-charge sentence follow
 *     `VAT_EXPLAINER` in `lib/pricing.ts` (D2). Usage billed on top at cost
 *     (founder, 28 September 2026). The not-advice wording follows the
 *     disclaimer line in the `content/blog/` compliance guides.
 *
 * OPEN ITEMS (1 October 2026). Founder facts first, then reviewer questions.
 *   1. Article 27 UK representative (D3): privacy "Our UK representative" is an
 *      interim position. Decide; if one is designated, name them with contact
 *      details. The ICO data protection fee is assessed in the same check.
 *   2. Controller wording: confirm "Ansar Cheema, trading as Naxdor and as
 *      WebAsk" is the right way to name the controller of an enskild firma.
 *   3. "Which laws apply": confirm the EU GDPR / IMY wording, whether PECR
 *      applies (the notice says "we follow" it), and whether Swedish law on
 *      cookies or the Swedish supplementary data protection act should be named.
 *      Also confirm "the Information Commission, known as the ICO" (the
 *      regulator's name since 30 September 2026).
 *   4. Business mailbox provider: not set up. Placeholder `TBC_EMAIL_PROVIDER`
 *      in privacy (recipients and transfers). Name it, where it stores data and
 *      its transfer mechanism.
 *   5. Discovery-call video service: placeholder `TBC_VIDEO_SERVICE`. Name it,
 *      or remove video from the notice.
 *   6. Call recording: the notice says nothing about recording calls. Confirm
 *      calls are not recorded; if any are, the notice must say so.
 *   7. WhatsApp: personal WhatsApp or the WhatsApp Business app? Under the
 *      Business App terms WhatsApp acts as the business's processor, and a
 *      business in the EEA contracts with WhatsApp Ireland Limited. The
 *      privacy entry currently describes WhatsApp as applying its own terms.
 *   8. Retention: (a) the 12-month rule must actually run across the mailbox,
 *      WhatsApp, phone and Loom; (b) client records other than accounting
 *      records — placeholder `TBC_CLIENT_RECORDS`; (c) the GA4 retention
 *      setting — placeholder `TBC_GA_RETENTION`; (d) Bokföringslagen 7 kap. 2 §
 *      also says accounting records are kept in Sweden, and 3 a § allows
 *      another EU country on notice to Skatteverket, which bears on tool choice.
 *   9. Vercel plan: RESOLVED — Pro plan, founder 1 October 2026. (Its DPA
 *      covers Pro and Enterprise only, Hobby is for non-commercial use, and the
 *      one-day log figure is Pro's.)
 *  10. Microsoft Clarity: RESOLVED — Clarity dropped, founder 1 October 2026,
 *      before launch. Its loader, its env variable and every Clarity passage in
 *      the privacy notice and cookie policy were removed, so the four points
 *      raised here (Microsoft as an independent controller that may use the
 *      data for advertising, the required link to the Microsoft Privacy
 *      Statement, records of consent, and the missing consent signal) no longer
 *      arise. GA4 is the only tool that loads after consent.
 *  11. Vercel Web Analytics and Speed Insights run without consent. Confirm the
 *      PECR position; if an exception is needed, it requires a simple, free way
 *      to object, which the site does not offer.
 *  12. Free-audit follow-up (once at most): whether PECR reg. 22 applies where
 *      the requester is a sole trader or uses a freemail address.
 *  13. Governing law of the website terms (Swedish law and courts, with the
 *      UK-consumer carve-out). See the comment on that section.
 *  14. VAT wording (D2): "excl. VAT" and the reverse charge, adopted without
 *      HMRC or Skatteverket confirmation.
 *  15. Company information and the E-Commerce Regulations 2002 reg. 6(1)(d)
 *      and (g): the organisation and VAT numbers are withheld by founder
 *      instruction (28 July 2026). Whether they must be shown.
 *  16. Client terms of business, and a data processing agreement for hosted
 *      plans (WebAsk would be the client's processor). Needed before the first
 *      engagement; not part of these pages.
 *  17. Outside this file, not changed here: `site.responsePromise` in
 *      `data/site.ts` says "business day" (it appears not to be rendered). The
 *      in-person meeting promise in the contact FAQ (`data/copy/contact.ts`) is
 *      RESOLVED — removed, founder 1 October 2026: the business does not offer
 *      in-person meetings (D1).
 */

import { site } from "@/data/site";
import type { Meta } from "@/data/types";

export type LegalSection = {
  readonly heading: string;
  /** One or more paragraphs of body copy. */
  readonly body: ReadonlyArray<string>;
  /** Optional bulleted list rendered after the body paragraphs. */
  readonly list?: ReadonlyArray<string>;
};

export type LegalDocument = {
  readonly slug: "privacy" | "terms" | "cookies" | "company-information";
  readonly meta: Meta;
  /** The page h1. */
  readonly title: string;
  readonly subhead: string;
  /** ISO date (YYYY-MM-DD) of the last substantive revision. */
  readonly lastUpdated: string;
  /**
   * Review gate. While true the page is `noindex` and renders a "working
   * draft" notice. Flip to false (per document) once the copy is approved.
   */
  readonly draft: boolean;
  /** Lead paragraph(s) above the sections. */
  readonly intro: ReadonlyArray<string>;
  readonly sections: ReadonlyArray<LegalSection>;
};

// Derived, not hardcoded — one change in data/site.ts propagates to every
// legal page, the footer and the JSON-LD together.
const CONTACT_EMAIL = site.email;
/** Date of the professional redraft of privacy, terms and cookies. */
const LAST_UPDATED = "2026-10-01";
/** Date the WebAsk entity disclosure was last revised against `data/site.ts`. */
const DISCLOSURE_UPDATED = "2026-10-01";

/** How the operating entity is described in every document, in one place. */
const ENTITY = `${site.name} is a trading name of ${site.legalName}, an enskild firma (a Swedish sole proprietorship) operated by Ansar Cheema`;

// Founder facts still missing (open items 4, 5 and 8). Each renders visibly, in
// brackets, so that a draft page can never pass for a finished one. Remove the
// constant when the fact is supplied.
const TBC_EMAIL_PROVIDER = "[Email provider — to be confirmed before this notice is published]";
const TBC_VIDEO_SERVICE = "[Video-call service — to be confirmed before this notice is published]";
const TBC_CLIENT_RECORDS = "[period to be confirmed before this notice is published]";
const TBC_GA_RETENTION =
  "[2 months or 14 months — setting to be confirmed before this notice is published]";

export const privacy: LegalDocument = {
  slug: "privacy",
  meta: {
    title: "Privacy Notice",
    description:
      "How WebAsk uses personal data when you visit webask.co.uk, contact us or work with us: lawful bases, who else handles it, how long it is kept and your rights.",
  },
  title: "Privacy Notice",
  subhead:
    "How we collect, use and protect personal data when you visit webask.co.uk, get in touch or work with us.",
  lastUpdated: LAST_UPDATED,
  // Redrafted 1 October 2026 for the solicitor's review; draft until the open
  // items in the file header are closed. See docs/legal/review-brief.md.
  draft: true,
  intro: [
    "This notice explains what personal data WebAsk collects, why, the lawful basis for each use, who else handles it, how long it is kept and the rights you have. It covers this website, enquiries by the contact form, email, phone or WhatsApp, the free audit, discovery calls and the records kept if your business becomes a client.",
    "You have the right to object to some of the ways we use your data. That right is set out in its own section below, headed “Your right to object”.",
    `If anything here is unclear, email ${CONTACT_EMAIL} and we will explain.`,
  ],
  sections: [
    {
      heading: "Who is responsible for your data",
      body: [
        `${ENTITY}.`,
        "An enskild firma is not a company. Its owner runs it as a private individual and is personally responsible for it. The controller of your personal data, meaning the person who decides why and how it is used, is therefore Ansar Cheema, trading as Naxdor and as WebAsk. In this notice, “we” and “us” mean that business.",
        "The business is established in Sweden. It has no office, branch or other establishment in the United Kingdom. Its registered address is on our Company Information page.",
        `You can reach us at ${CONTACT_EMAIL} or on ${site.phone}. Both reach Ansar Cheema, who runs the business. We have not appointed a data protection officer.`,
      ],
    },
    {
      heading: "Which laws apply",
      body: [
        "Because the business is established in Sweden, the EU General Data Protection Regulation (EU GDPR) applies to the personal data it handles. Sweden's data protection authority, the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY), supervises compliance with it.",
        "Because we offer our services to people in the United Kingdom, the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 also apply when we handle the personal data of people in the UK. The UK regulator is the Information Commission, which is known as the ICO.",
        "For people in the UK we also follow the Privacy and Electronic Communications Regulations (PECR), which cover cookies and similar technologies, and electronic marketing.",
      ],
    },
    {
      heading: "Our UK representative",
      body: [
        "Article 27 of the UK GDPR requires a controller based outside the UK, whose handling of personal data the UK GDPR covers, to designate a representative in the UK in writing. There is an exemption for processing that is occasional, does not include special category or criminal offence data on a large scale, and is unlikely to result in a risk to people's rights and freedoms.",
        "We have not designated a UK representative. Whether we need one is under review. If we do, we will designate one and name them here with their contact details, and the date at the top of this notice will change.",
        `Until then, contact us directly about anything in this notice at ${CONTACT_EMAIL}. The ICO can reach us at the same address.`,
      ],
    },
    {
      heading: "The data you give us",
      body: ["We collect only what we need for the reason you contact us:"],
      list: [
        "The contact form: your name, email address and message, and the service you are interested in, your budget range and your timeline, which are all required; your company name and your country, which are optional",
        "Email: your email address, what you write and any details in your email signature",
        "Phone and WhatsApp: your phone number, the name on your account, your messages and the times of your calls",
        "The free audit: the web address of your website, with the contact-form details above",
        "Discovery calls: the details needed to arrange the call, and any notes we make during it",
        "If your business becomes a client: the names and contact details of the people we work with, billing details, the correspondence and files for the work, and anything else you choose to share for it",
      ],
    },
    {
      heading: "The data collected when you use the site",
      body: [
        "Our hosting provider, Vercel, records technical details of requests to the site, such as the page requested, the time and the browser used, and processes the IP address each request comes from. These records keep the site running and secure.",
        "Vercel also gives us measurements of traffic and page speed. Vercel says its Web Analytics does not use cookies, that its data points are anonymous and not tied to an individual or an IP address, and that it identifies visitors by a hash created from the request and discards the visitor session after 24 hours. Vercel says Speed Insights data points are anonymous too.",
        "If you accept analytics cookies, Google Analytics 4 also collects how you use the site: the pages you view, how you arrived, your device and browser, your approximate location, how far you scroll, and some of the links and buttons you click. Google says Google Analytics does not log or store IP addresses from UK users. Google Analytics does not load until you accept. The Cookie Policy lists the cookies involved.",
        "The contact form has a hidden anti-spam field. If it is filled in, which only automated software does, the submission is discarded and nothing is stored or sent.",
      ],
    },
    {
      heading: "Data we receive from other sources",
      body: [
        "For a free audit, we review the public pages of the website you name. Those pages may show personal data, such as a practitioner's name or professional registration details. We use it only for the audit you asked for. The source is the website itself, which anyone can see.",
        "If your business becomes a client, it may give us the names and contact details of colleagues or suppliers we need to work with.",
      ],
    },
    {
      heading: "Why we use your data, and the lawful basis for each use",
      body: [
        "Data protection law requires a lawful basis for each use of personal data. Where we rely on legitimate interests, we say what the interest is. We may rely on it only where your rights and interests do not override it.",
      ],
      list: [
        "Answering your enquiry, by form, email, phone or WhatsApp. Basis: legitimate interests, in answering people who contact us about work for their business. Where the contract would be with you personally, for example as a sole trader, the basis is taking steps at your request before a contract.",
        "Carrying out a free audit, recording the walkthrough on Loom and sending you the findings. Basis: legitimate interests, in providing the audit you asked for and showing you our work in the hope that you hire us.",
        "Following up once after a free audit, to ask whether you have questions. Basis: legitimate interests, in answering questions about the audit.",
        "Arranging discovery calls and preparing proposals. Basis: legitimate interests, in discussing work for your business, or steps at your request before a contract where the contract would be with you.",
        "Doing the work and managing the relationship with a client. Basis: performance of a contract, where the contract is with you; otherwise legitimate interests, in working with the people a client business asks us to deal with.",
        "Invoicing and keeping accounting records. Basis: a legal obligation under Swedish bookkeeping law, for the EU GDPR. The UK GDPR recognises only obligations under UK law for that basis, so for the UK GDPR we rely on legitimate interests, in complying with the law that governs the business.",
        "Running, securing and improving the website, including request logs and Vercel's traffic and speed measurement. Basis: legitimate interests, in keeping the site working and secure and understanding which pages are used.",
        "Google Analytics 4. Basis: consent, which you give through the cookie banner and can withdraw at any time. PECR also requires consent for its cookies.",
        "Dealing with your requests to use your rights, and with complaints. Basis: legal obligation, because data protection law requires it.",
        "Establishing, exercising or defending legal claims. Basis: legitimate interests, in protecting the business if a dispute arises.",
      ],
    },
    {
      heading: "Your right to object",
      body: [
        "Where we rely on legitimate interests, you have the right to object at any time, on grounds relating to your particular situation. We must then stop, unless we can show compelling legitimate grounds that override your interests, rights and freedoms, or we need the data to establish, exercise or defend legal claims.",
        "You can object to direct marketing at any time, for any reason, and we will stop. If you would rather not receive the single follow-up after a free audit, tell us and there will be none.",
        `To object, email ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: "We do not send marketing",
      body: [
        "Sending us an enquiry or asking for a free audit does not put you on a mailing list. We do not send marketing emails or texts, and we do not pass your details to anyone else for their marketing. After a free audit, we follow up once at most.",
        "If that ever changes, we will ask for your consent first, and every message will carry a way to stop.",
      ],
    },
    {
      heading: "Providers that handle data for us",
      body: [
        "We do not sell personal data. The providers below handle it on our behalf, as processors, under contracts that require them to protect it and to use it only on our instructions:",
      ],
      list: [
        "Resend (United States): sends the email we receive when you submit the contact form, and the confirmation you receive",
        "Vercel (United States): hosts the website, holds its request logs and provides the traffic and speed measurement",
        `${TBC_EMAIL_PROVIDER}: hosts our business mailbox, where enquiries and correspondence are received and kept`,
        "Loom, part of Atlassian (United States): hosts the recorded walkthrough of a free audit, which we share with you by a link",
        `${TBC_VIDEO_SERVICE}: used if a discovery call is held by video`,
        "Google (United States): runs Google Analytics 4, only if you accept analytics cookies. Google acts as our processor under its Ads Data Processing Terms, which cover Google Analytics. Google explains how it uses information from sites that use its services at www.google.com/policies/privacy/partners",
      ],
    },
    {
      heading: "Others who receive data",
      body: [
        "If you message or call us on WhatsApp, WhatsApp handles your number and messages as well. Its own terms and privacy policy apply to your use of WhatsApp.",
        "When you open a Loom link, Atlassian's privacy policy, which covers Loom, applies to your visit to Loom's website.",
        "We may also share personal data with a professional adviser, such as a lawyer or accountant, if we need advice, and with authorities, such as the Swedish Tax Agency (Skatteverket), where the law requires us to.",
      ],
    },
    {
      heading: "International transfers",
      body: [
        "The business is in Sweden. UK law treats transfers of personal data to countries in the European Economic Area, including Sweden, as approved (Data Protection Act 2018, Schedule 21), so no further safeguard is needed for your data to reach us.",
        "Resend, Vercel, Google and Loom are based in the United States.",
        "On 1 October 2026, Resend, Vercel, Google and Atlassian, which owns Loom, were each listed on the US Data Privacy Framework List as taking part in the EU–US Data Privacy Framework and its UK Extension. UK law treats transfers to US organisations on that list as adequate, under the Data Protection (Adequacy) (United States of America) Regulations 2023, and the European Commission has recognised the same framework as adequate for the EU GDPR.",
        "The data processing terms of Resend, Vercel and Atlassian also include standard contractual clauses with the UK's addendum to them, and Google's include standard contractual clauses as a fallback. You can ask us for a copy of the safeguard that applies to a provider.",
        `${TBC_EMAIL_PROVIDER} and ${TBC_VIDEO_SERVICE}: where each stores data, and the safeguard for any transfer, will be added here.`,
      ],
    },
    {
      heading: "How long we keep it",
      body: ["We keep personal data only as long as we need it:"],
      list: [
        "An enquiry that does not lead to work, by any route, with any free-audit recording and summary and any call notes: 12 months after our last exchange, so that we can pick up the conversation if you come back. It is then deleted.",
        "Accounting records, such as invoices: until the end of the seventh year after the end of the calendar year in which the financial year ended, as Swedish bookkeeping law requires (Bokföringslagen, chapter 7, section 2).",
        `Other records of work for a client, such as correspondence, proposals and project files: for as long as the work lasts, then for ${TBC_CLIENT_RECORDS}, so that we can answer questions or claims about the work.`,
        "Request logs: Vercel stores the site's runtime logs for one day on its Pro plan.",
        "Vercel's traffic and speed measurement: Vercel says the Web Analytics visitor session is discarded after 24 hours, and the data is used for aggregated statistics only.",
        `Google Analytics: user-level and event-level data for ${TBC_GA_RETENTION}, the retention period set in our account. That setting does not affect aggregated reports.`,
        "The theme and consent entries in your browser: until you clear your browser's data for this site.",
      ],
    },
    {
      heading: "Your rights",
      body: ["You have the right to:"],
      list: [
        "Ask for a copy of your personal data",
        "Have inaccurate data corrected",
        "Have your data deleted, in some circumstances",
        "Ask us to restrict how we use it, in some circumstances",
        "Receive data you gave us in a portable format, where we rely on consent or a contract",
        "Object, as set out in “Your right to object” above",
        "Withdraw your consent at any time where we rely on it, for example through the “Cookie settings” link in the footer. Withdrawing consent does not affect our use of your data before you withdrew it.",
      ],
    },
    {
      heading: "How to use your rights",
      body: [
        `Email ${CONTACT_EMAIL}. In most cases there is no charge. We will reply without undue delay and within one month. If a request is complex, the law lets us extend that by up to two further months; if we need to, we will tell you within the first month.`,
        "We may ask for information to confirm who you are. The time limit starts once we have it.",
      ],
    },
    {
      heading: "Complaints",
      body: [
        `If you are unhappy with how we have handled your personal data, please complain to us first, at ${CONTACT_EMAIL}. We will acknowledge your complaint within 30 days of receiving it, look into it, keep you informed of progress and tell you the outcome without undue delay.`,
        "You also have the right to complain to the Information Commission, known as the ICO, at ico.org.uk/make-a-complaint. The ICO recommends giving the organisation a chance to complete its own complaint process first, but you can complain to the ICO at any time.",
        "Because the business is established in Sweden, you can also complain to the Swedish Authority for Privacy Protection (IMY) at imy.se.",
      ],
    },
    {
      heading: "Do you have to give us your data?",
      body: [
        "No law requires you to give us personal data. The contact form asks for your name, email address, the service, a budget range, a timeline and a message so that we can reply usefully; your company name and country are optional. If you would rather not use the form, email or phone us instead.",
        "If your business becomes a client, we need billing details to invoice, because Swedish bookkeeping law requires accounting records, and contact details to do the work.",
      ],
    },
    {
      heading: "No automated decisions",
      body: [
        "We do not make decisions about you based solely on automated processing, and we do not profile you.",
      ],
    },
    {
      heading: "When we handle data for a client",
      body: [
        "If a client business asks us to build or run a system that holds its own customers' personal data, we handle that data on the client's behalf and only on its instructions. The client is the controller of that data, and its privacy notice applies to it. This notice does not cover it.",
      ],
    },
    {
      heading: "How we protect your data",
      body: [
        "The site is served over HTTPS. Within the business, only Ansar Cheema has access to the data described here. The providers named above hold some of it too, and the terms of those that act for us require them to protect it. No website or email system is completely secure, but we take reasonable steps to protect your data against loss, misuse and unauthorised access.",
      ],
    },
    {
      heading: "Children",
      body: [
        "The site and our services are for businesses. We do not knowingly collect personal data from children. If you believe a child has given us personal data, contact us and we will delete it.",
      ],
    },
    {
      heading: "Changes to this notice",
      body: [
        "We will update this notice when what we do or the law changes, and change the date at the top when we do. If a change affects how we use data you have already given us, we will take reasonable steps to tell you.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about this notice or your personal data? Email ${CONTACT_EMAIL} and we will reply within one working day.`,
      ],
    },
  ],
} as const;

export const terms: LegalDocument = {
  slug: "terms",
  meta: {
    title: "Website Terms",
    description:
      "The terms for using webask.co.uk: prices, guides that are not legal advice, the free audit, liability, and how they relate to the written agreement for any work.",
  },
  title: "Website Terms",
  subhead:
    "The terms that govern your use of webask.co.uk. Any work we do for you is governed by a separate written agreement.",
  lastUpdated: LAST_UPDATED,
  // Redrafted 1 October 2026 for the solicitor's review; draft until the open
  // items in the file header are closed. See docs/legal/review-brief.md.
  draft: true,
  intro: [
    "These terms govern your use of the website webask.co.uk. By using the site you agree to them. If you do not agree, please do not use the site.",
    "They cover the website only. Any work we do for you is governed by a separate written proposal or contract, which takes precedence wherever the two differ.",
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        `${ENTITY}. In these terms, “WebAsk”, “we”, “us” and “our” mean that business. Our full details are on our Company Information page, and you can contact us at ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: "Using the site",
      body: [
        "You may use the site for lawful purposes, including to learn about our services, to decide whether to work with us and to get in touch. You agree to use it in line with these terms and the law that applies to you.",
      ],
    },
    {
      heading: "Services, prices and proposals",
      body: [
        "We supply our services to businesses only, not to consumers.",
        "Prices on the site are starting prices in pounds sterling and exclude VAT. A UK business customer accounts for any VAT under the reverse charge, so none is added to our invoices.",
        "Our prices never include platform usage. Where a service runs on a third-party platform, whatever that platform charges for usage, such as texts, calls or AI, is billed on top at cost, based on what you use.",
        "Descriptions and prices on the site are information, not an offer. Work begins only when we and you agree a written proposal or contract. It sets out the scope, price and terms, and it takes precedence over anything on the site.",
      ],
    },
    {
      heading: "Guides and articles are not advice",
      body: [
        "The guides and articles on the site, including those on the rules for clinic, dental and beauty websites, summarise published law and regulators' guidance as at the date each one gives. They are general information only. They are not legal advice or any other professional advice, and they are not a substitute for it.",
        "WebAsk is a web agency, not a law firm. Law and guidance change. Before you rely on a guide for a decision, check the current source or take advice from a qualified professional.",
      ],
    },
    {
      heading: "The free audit",
      body: [
        "The free audit costs nothing and puts you under no obligation. It reviews only what the public pages of your website show, so it does not look at the code behind your site, or its plugins or theme.",
        "For clinics and practices, the audit includes a rules check. It reports what the site shows or leaves out on a fixed list of points. It gives no legal verdict on whether the site complies with the law, and it is not legal advice.",
        "The findings are for your information. You decide whether and how to act on them.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The site and its content, including the WebAsk name and branding, the text, design, graphics and code, are owned by Naxdor or its licensors and are protected by intellectual property law. You may read and share the content for your own information. You may not copy, republish, sell or make derivative works from it without our prior written permission.",
      ],
    },
    {
      heading: "Acceptable use",
      body: ["When using the site, you agree not to:"],
      list: [
        "Use it in a way that breaks the law or infringes anyone's rights",
        "Try to gain unauthorised access to the site, its servers or any connected system",
        "Interfere with or disrupt the site, including by introducing malware or overloading it",
        "Scrape, harvest or collect data from the site by automated means without our permission",
        "Submit false information, or use the contact form to send spam or abusive content",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "The site links to websites and services we do not control. We are not responsible for their content, products or practices, and your use of them is subject to their own terms.",
      ],
    },
    {
      heading: "The site is provided as it is",
      body: [
        "We provide the site and its content as they are and as available. We may change, suspend or withdraw any part of the site at any time. To the extent the law allows, we do not promise that the site will be uninterrupted or free of errors, or that its content is complete or up to date.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the extent the law allows, we are not liable for any indirect or consequential loss, or for any loss of profit, revenue, data or goodwill, arising from your use of the site or your inability to use it.",
        "Nothing in these terms limits or excludes our liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited or excluded by law. If you are a consumer, nothing in these terms affects your rights under the Consumer Rights Act 2015 or any other law that cannot be excluded.",
      ],
    },
    {
      heading: "Indemnity",
      body: [
        "If you use the site in the course of a business, you agree to compensate us for reasonable losses, damages and costs we incur because you breached these terms or misused the site.",
      ],
    },
    {
      heading: "Your personal data",
      body: [
        "Our Privacy Notice explains how we handle personal data. Our Cookie Policy explains the cookies and similar technologies the site uses.",
      ],
    },
    {
      heading: "If part of these terms cannot be enforced",
      body: [
        "If a court decides that any part of these terms cannot be enforced, the rest of the terms still apply.",
      ],
    },
    // ⚠️ QUESTION FOR THE REVIEWER (open item 13): Swedish governing law and
    // Swedish courts are kept as they stood on 25 September 2026, because the
    // operating entity is established in Sweden. The reviewer should advise
    // whether Swedish law, English law or no choice of law suits UK-facing
    // website terms, and whether the UK-consumer carve-out below is correctly
    // framed. Do not change this section without that advice.
    {
      heading: "Governing law and disputes",
      body: [
        "These terms, and any dispute arising from them or from the site, are governed by the law of Sweden, and the courts of Sweden have jurisdiction, because that is where the operating entity is established. If you are a consumer resident in the United Kingdom, this does not deprive you of the protection of any mandatory law of the UK, and you may bring proceedings in the courts of the part of the UK in which you live.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time and will change the date at the top when we do. If you use the site after a change, the updated terms apply to that use.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about these terms? Email ${CONTACT_EMAIL} and we will reply within one working day.`,
      ],
    },
  ],
} as const;

export const cookies: LegalDocument = {
  slug: "cookies",
  meta: {
    title: "Cookie Policy",
    description:
      "Every cookie and similar technology webask.co.uk uses: what each is for, who sets it, how long it lasts, and how to change your choice.",
  },
  title: "Cookie Policy",
  subhead:
    "Every cookie and similar technology we use on webask.co.uk, what it is for, and how to change your choice.",
  lastUpdated: LAST_UPDATED,
  // Redrafted 1 October 2026 for the solicitor's review; draft until the open
  // items in the file header are closed. See docs/legal/review-brief.md.
  draft: true,
  intro: [
    "This policy lists what webask.co.uk stores on your device, and why. Read it with our Privacy Notice, which explains how we handle personal data.",
    "In short: the site sets no cookies of its own. It keeps two entries in your browser's local storage, and only after you act. Google Analytics loads only if you accept analytics cookies, and only then can it set cookies.",
  ],
  sections: [
    {
      heading: "Cookies and similar technologies",
      body: [
        "Cookies are small text files a website stores on your device to remember something about your visit. Your browser's local storage does a similar job without being a cookie. The Privacy and Electronic Communications Regulations (PECR) cover both, and so does this policy.",
      ],
    },
    {
      heading: "What the site stores in your browser",
      body: [
        "The site stores two entries in your browser's local storage. Neither is a cookie, neither is sent to us or to anyone else, and each is written only when you act. Both stay until you clear this site's data in your browser:",
      ],
      list: [
        "theme: the light or dark mode you chose. Written only when you use the theme switch.",
        "webask:analytics-consent: whether you accepted or rejected analytics cookies, so that the banner does not ask again on every page. Written when you answer the banner.",
      ],
    },
    {
      heading: "Google Analytics 4 — only after you accept",
      body: [
        "If you accept analytics cookies, Google Analytics 4 loads and Google sets the cookies below on this site's domain. If you reject them, or have not yet chosen, it does not load and neither cookie is set. Google gives these purposes and lifetimes:",
      ],
      list: [
        "_ga: used to distinguish users. Lasts 2 years.",
        "_ga_<container-id>: used to keep the state of your session. Lasts 2 years.",
      ],
    },
    {
      heading: "Why we ask for consent",
      body: [
        "Since 5 February 2026, PECR has included an exception that allows some analytics without consent, for statistical purposes. The ICO, the UK regulator, says it is “not a broad exception that covers all types of analytics technologies or ways you can use them”. It also says that a third-party analytics provider must be a processor, not a joint controller, for the exception to apply.",
        "We do not rely on that exception for Google Analytics. We ask for your consent before it loads.",
      ],
    },
    {
      heading: "Vercel's traffic and speed measurement",
      body: [
        "Vercel, our hosting provider, measures traffic and page speed for every visitor, whether or not you accept analytics cookies. Vercel says its Web Analytics does not use cookies: it identifies visitors by a hash created from the request and discards the visitor session after 24 hours. Vercel says the data points of both Web Analytics and Speed Insights are anonymous.",
      ],
    },
    {
      heading: "Changing your choice",
      body: [
        "You can change your answer at any time with the “Cookie settings” link in the footer of every page. If you reject analytics cookies after accepting them, Google Analytics does not load from then on.",
        "One limitation: rejecting does not delete cookies that Google has already set. They expire on their own schedule, or you can delete them now in your browser's settings, which also let you block cookies altogether. Clearing this site's data in your browser also removes the theme and consent entries, so the banner will ask again.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We will update this policy whenever the cookies or similar technologies the site uses change, and change the date at the top when we do.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about cookies on this site? Email ${CONTACT_EMAIL} and we will reply within one working day.`,
      ],
    },
  ],
} as const;

/**
 * Statutory entity disclosure.
 *
 * ── WHY THIS PAGE EXISTS ──────────────────────────────────────────────────
 * The Electronic Commerce (EC Directive) Regulations 2002 and the Provision of
 * Services Regulations 2009 require a service provider's real name, geographic
 * address and contact details to be **easily, directly and permanently
 * accessible**. WebAsk is a trading name, not a company, so a visitor cannot
 * look us up at Companies House — which makes an explicit disclosure page the
 * honest way to satisfy that, and it is a UK-specific addition to the inherited
 * Naxdor sitemap (docs/04 § 3).
 *
 * ── WHAT IS DELIBERATELY ABSENT ───────────────────────────────────────────
 *  - **No Companies House number.** None exists. Displaying one would be
 *    fabricated, and it is the first thing a careful UK buyer checks.
 *  - **No organisation or VAT number.** Held server-side only, never rendered
 *    (founder instruction 2026-07-28; see `data/site.ts`). E-Commerce
 *    Regulations 2002 reg. 6(1)(d) and (g) ask for a trade-register number and
 *    a VAT identification number where they exist; whether that applies here
 *    is open item 15 in the file header. If the answer is yes, add a section
 *    here and read the values from `process.env.COMPANY_ORG_NUMBER` /
 *    `COMPANY_VAT_NUMBER` — the plumbing already exists.
 *  - **No UK address.** D1: fully remote, no UK location. The address below is
 *    the Swedish registered address of the operating entity — a statutory
 *    disclosure, NOT a local-SEO signal, and it must never appear on /contact.
 *  - **No unconfirmed promises and no claims about other agencies.** Revised 1
 *    October 2026: the sentence on what "a great many agencies" imply (no
 *    source) and the offer to travel (never confirmed) were removed.
 *
 * `draft: false` because every statement here is a verifiable fact drawn from
 * `data/site.ts`, not copy awaiting legal review.
 */
export const companyInformation: LegalDocument = {
  slug: "company-information",
  meta: {
    title: "Company Information",
    description:
      "Who operates webask.co.uk: WebAsk is a trading name of Naxdor, an enskild firma registered in Sweden. Registered name, address and contact details.",
  },
  title: "Company Information",
  subhead: "Who you are actually dealing with, and how to reach us.",
  lastUpdated: DISCLOSURE_UPDATED,
  draft: false,
  intro: [
    `${site.entityDisclosure} This page sets out the legal identity behind webask.co.uk in full, because "WebAsk" is a trading name rather than a registered company and you cannot look it up in a public register.`,
    "We would rather state that plainly than let you assume otherwise.",
  ],
  sections: [
    {
      heading: "Trading name and legal entity",
      body: [
        `This website is operated under the trading name ${site.name}. The legal entity behind it is ${site.legalName}, an enskild firma — a Swedish sole proprietorship — operated by Ansar Cheema.`,
        "WebAsk is not a separate company and is not registered at Companies House. There is no UK company number, and you will not find one anywhere on this site, because none exists. Your contract, invoices and any legal correspondence are with the Swedish entity.",
      ],
    },
    {
      heading: "Registered address",
      body: ["The registered geographic address of the operating entity is:"],
      list: [
        site.address.street,
        `${site.address.postalCode} ${site.address.city}`,
        `${site.address.region}, ${site.address.country}`,
      ],
    },
    {
      heading: "We work remotely — there is no UK office",
      body: [
        "WebAsk offers its services across the United Kingdom and works entirely remotely. We do not operate a UK office, and the address above is a company registration detail rather than a place you can visit or send post expecting a quick reply.",
        "We say so because it is true. If you want to talk something through, we will arrange a call.",
      ],
    },
    {
      heading: "How to contact us",
      body: [
        "The fastest and most reliable way to reach us is email. It reaches a monitored inbox, and we reply to every enquiry within one working day.",
      ],
      list: [`Email: ${CONTACT_EMAIL}`, `Telephone: ${site.phone}`, `Hours: ${site.hours}`],
    },
    {
      heading: "Part of the Naxdor group",
      body: [
        `${site.name} is the United Kingdom brand of Naxdor, which also operates naxdor.com for international clients and naxdor.se in Sweden. Same founder, same standards, same way of working — a UK brand, UK pricing and UK expertise.`,
        "We disclose the relationship rather than presenting three unrelated agencies, because that is what it is.",
      ],
    },
    {
      heading: "Complaints",
      body: [
        `If something has gone wrong, email ${CONTACT_EMAIL} with "Complaint" in the subject line. We will acknowledge it within one working day and respond in full within five working days. If we cannot resolve it between us, you keep whatever rights the law gives you.`,
      ],
    },
  ],
} as const;

/** All legal documents, keyed by slug — handy for `generateStaticParams` later. */
export const legalDocuments = { privacy, terms, cookies, companyInformation } as const;
