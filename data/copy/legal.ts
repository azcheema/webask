/**
 * Legal page copy — Company Information, Privacy Policy, Terms, Cookie Policy.
 *
 * ⚠️ STATUS: privacy / terms / cookies are **`draft: true`** — rewritten for
 * the UK on 2026-09-25 (Phase 1, docs/06), awaiting the founder's review and
 * the outcome of decision gate **D3**.
 *
 * The fork's versions were approved on 2026-06-01 for **Naxdor, on naxdor.com,
 * framed around EU GDPR and Swedish jurisdiction**. This rewrite frames the
 * three documents around **UK GDPR, the Data Protection Act 2018 and PECR**
 * for a UK-facing site trading as WebAsk. Two things in them are deliberate
 * interim positions, not final answers, and are worded as such in the copy:
 *
 *   - **Article 27 UK representative (D3).** With no UK establishment the
 *     obligation is near-certain (docs/03 § A3). The privacy notice says the
 *     position is being confirmed and names the email address as the contact
 *     point until a representative is appointed and named there.
 *   - **Governing law (terms).** Kept with the Swedish entity, with the
 *     UK-consumer mandatory-law carve-out. Legal advice (D3) may move it.
 *
 * Draft means `noindex` + a visible "working draft" notice, so nothing is
 * indexed as final while those two are open.
 *
 * `company-information` is NOT a draft: it is a factual entity disclosure, and
 * every fact in it is verifiable from `data/site.ts`.
 *
 * Promotion gate: when a document is approved, set `draft: false` and bump
 * `lastUpdated`. That single flip both indexes the page and drops the notice.
 *
 * GROUNDING (what this copy is written against — keep it accurate):
 *   - Entity: **WebAsk is a trading name of Naxdor**, an enskild firma (Swedish
 *     sole proprietorship) operated by Ansar Cheema. There is no UK company,
 *     no Companies House number and no UK office (D1). Registered address +
 *     contact in `data/site.ts`.
 *   - Regime: **UK GDPR + DPA 2018 + PECR** for UK visitors. The ICO is the
 *     supervisory authority named for complaints; IMY (Sweden) is the entity's
 *     home authority and is named as the alternative.
 *   - Data collected: the contact form (name, email, company, service,
 *     budget, timeline, country, message — `lib/contact-schema.ts`) + a
 *     honeypot (`company_url`, discarded, never stored) + hosting logs.
 *   - Processors / launch stack: Resend (transactional email), Vercel (hosting
 *     + cookieless Vercel Analytics / Speed Insights), Google Analytics 4 and
 *     Microsoft Clarity (cookie-based analytics, loaded only after consent —
 *     `components/analytics/analytics-scripts.tsx`).
 *   - Storage in the browser: the theme in local storage (`next-themes`, key
 *     `theme`) and the consent decision in local storage
 *     (`ANALYTICS_CONSENT_KEY` in `lib/analytics.ts`). Neither is a cookie.
 *   - Cookies, all analytics, all after consent: `_ga` and `_ga_<container-id>`
 *     (Google, 2 years each — Google's "Cookie usage" page, read 2026-09-25);
 *     Clarity's `_clck`, `_clsk`, `CLID`, `ANONCHK`, `MR`, `MUID`, `SM`
 *     (Microsoft's "Clarity cookies" page, read 2026-09-25 — it lists names
 *     and purposes but no lifetimes, so the policy points to Microsoft's list
 *     rather than printing durations we could not verify).
 *   - Known limitation, stated in the cookie policy: withdrawing consent stops
 *     the tools loading but does not delete cookies they already set
 *     (`analytics-scripts.tsx` header; full deletion is a Phase 4 follow-up).
 *   - Retention figures in the privacy notice (12 months for an enquiry that
 *     goes nowhere; seven years for accounting records under Swedish
 *     bookkeeping law) are the founder's to confirm before `draft: false`.
 *
 * If any of the above changes (a UK entity, an analytics tool dropped, a
 * representative appointed), update the affected sections here before
 * flipping `draft: false`.
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
/** Date of the UK rewrite of privacy, terms and cookies. */
const LAST_UPDATED = "2026-09-25";
/** Date the WebAsk entity disclosure was written against `data/site.ts`. */
const DISCLOSURE_UPDATED = "2026-07-28";

/** How the operating entity is described in every document, in one place. */
const ENTITY = `${site.name} is a trading name of ${site.legalName}, an enskild firma (a Swedish sole proprietorship) operated by Ansar Cheema`;

export const privacy: LegalDocument = {
  slug: "privacy",
  meta: {
    title: "Privacy Notice",
    description:
      "How WebAsk collects, uses and protects your personal data when you visit webask.co.uk or get in touch — written for UK GDPR, with your rights and how to use them.",
  },
  title: "Privacy Notice",
  subhead:
    "How we collect, use and protect your personal data when you visit webask.co.uk or get in touch.",
  lastUpdated: LAST_UPDATED,
  // UK rewrite 2026-09-25; draft until the founder's review and D3. See header.
  draft: true,
  intro: [
    "This notice explains what personal data WebAsk collects, why, how long we keep it, who we share it with and the rights you have over it. It applies to the website webask.co.uk and to any enquiry you send us through it or by email.",
    `We keep it short and concrete. If anything is unclear, email ${CONTACT_EMAIL} and we will explain.`,
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        `${ENTITY}. For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, Naxdor is the controller of the personal data described in this notice.`,
        "We serve clients across the United Kingdom and work entirely remotely. We have no office, branch or other establishment in the UK. The registered address of the operating entity, which is in Sweden, is on our Company Information page.",
        `You can reach us about anything in this notice, including to exercise your rights, at ${CONTACT_EMAIL}. That inbox is read by the person who runs the business.`,
      ],
    },
    {
      heading: "Our UK representative",
      body: [
        "Because we are based outside the UK and offer services to people in the UK, Article 27 of the UK GDPR requires organisations in our position to appoint a representative in the UK in most cases. We are confirming with our advisers whether that obligation applies to us and, if it does, we will appoint a representative and name them here, with their contact details.",
        `Until then, ${CONTACT_EMAIL} is the contact point for you and for the Information Commissioner's Office on anything to do with your personal data. This section will be updated when the position is settled, and the date at the top of this notice will change when it is.`,
      ],
    },
    {
      heading: "The data we collect from you",
      body: [
        "We collect only what we need to answer you. When you use the contact form or email us, we receive:",
      ],
      list: [
        "Your name and email address",
        "Your company name, if you give it",
        "The context you choose to share: the service you are interested in, your budget range, your timeline and your country",
        "Your message, and any later correspondence between us",
      ],
    },
    {
      heading: "The data collected automatically",
      body: [
        "When you browse the site, our hosting provider records standard technical data about each request — the IP address it came from, the page requested, the browser and device type and the time — in server logs used to keep the site running and secure.",
        "Our hosting provider also gives us cookieless, aggregate performance and traffic measurements that do not identify you and do not track you across sites.",
        "If you accept analytics cookies, Google Analytics 4 and Microsoft Clarity additionally collect how you use the site — the pages you view, how you arrived, approximate location derived from your IP address and how you interact with pages. Neither tool loads, and neither sets a cookie, until you accept. The Cookie Policy lists every cookie involved.",
        "The contact form includes a hidden anti-spam field. If it is filled in, which only automated software does, the submission is discarded and nothing is stored or sent.",
      ],
    },
    {
      heading: "What we use it for",
      body: ["We use the data above for these purposes and no others:"],
      list: [
        "To reply to your enquiry and discuss whether we can help",
        "To scope, quote for and deliver work you ask us to do",
        "To run, secure and improve the website",
        "To keep the records the law requires us to keep",
      ],
    },
    {
      heading: "We do not send marketing",
      body: [
        "Sending us an enquiry does not put you on a mailing list. We do not send marketing emails or texts, and we do not pass your details to anyone else for theirs. If that ever changes, we will ask for your consent first, in line with the Privacy and Electronic Communications Regulations, and every message will carry a way to stop.",
      ],
    },
    {
      heading: "Our lawful bases",
      body: ["UK GDPR requires a lawful basis for each use of personal data. Ours are:"],
      list: [
        "Steps taken at your request before entering into a contract, and performance of that contract — to reply to your enquiry, quote and deliver the work (Article 6(1)(b))",
        "Our legitimate interests — to run, secure and improve the site, and to keep a record of our dealings with you, weighed against your rights and interests (Article 6(1)(f))",
        "Consent — for analytics cookies, which are set only after you accept them and which you can withdraw at any time (Article 6(1)(a), and regulation 6 of the Privacy and Electronic Communications Regulations)",
        "Legal obligation — where we must keep records, such as accounting records, for the period the law requires (Article 6(1)(c))",
      ],
    },
    {
      heading: "Who we share it with",
      body: [
        "We do not sell personal data. We use a small number of providers that process data on our behalf, under contracts that require them to protect it and to use it only on our instructions:",
      ],
      list: [
        "Resend — delivers the email we receive when you submit the form and the confirmation you receive",
        "Vercel — hosts the website, holds its server logs, and provides the cookieless performance and traffic measurements",
        "Google — Google Analytics 4, loaded only if you accept analytics cookies",
        "Microsoft — Microsoft Clarity, loaded only if you accept analytics cookies",
      ],
    },
    {
      heading: "International transfers",
      body: [
        "Our own records are held in Sweden, which is covered by the UK's adequacy regulations for the European Economic Area, so data can move there without further safeguards.",
        "The providers above are based in, or store data in, the United States. Where personal data leaves the UK for a country without an adequacy decision, we rely on a safeguard UK law recognises: the UK Extension to the EU–US Data Privacy Framework where the provider is certified under it, or the International Data Transfer Agreement or the UK Addendum to the EU standard contractual clauses in the provider's data-processing terms. You can ask us which applies to a particular provider.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "An enquiry that does not lead to work is kept for 12 months after our last exchange, so that we can pick the conversation up if you come back, and is then deleted.",
        "Where you become a client, we keep the correspondence and records for the engagement for as long as it lasts and for the period Swedish accounting law requires business records to be retained, which is currently seven years after the end of the financial year.",
        "Server logs and analytics data are kept for the periods set by the providers named above, which are shorter than either of these, and are aggregated or deleted after that.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under UK GDPR you have the right to ask for a copy of your personal data, to have it corrected or deleted, to restrict or object to how we use it, to receive it in a portable form and, where we rely on consent, to withdraw that consent at any time. Withdrawing consent does not affect processing that happened before you withdrew it.",
        `To use any of these rights, email ${CONTACT_EMAIL}. We will reply within one month, and there is no charge.`,
        "If you think we have handled your data wrongly, please tell us first so that we can put it right. You also have the right to complain to the Information Commissioner's Office at ico.org.uk. Because the operating entity is Swedish, you may alternatively complain to the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY).",
      ],
    },
    {
      heading: "No automated decisions",
      body: ["We do not make decisions about you by automated means, and we do not profile you."],
    },
    {
      heading: "How we protect it",
      body: [
        "The site is served over HTTPS. Access to your data is limited to the person who needs it to reply to you, and we work only with providers that publish recognised security standards. No method of transmission or storage is completely secure, but we take reasonable steps to protect your data against loss, misuse and unauthorised access.",
      ],
    },
    {
      heading: "Children",
      body: [
        "The site and our services are for businesses and adults. We do not knowingly collect personal data from children. If you believe a child has given us data, contact us and we will delete it.",
      ],
    },
    {
      heading: "Changes to this notice",
      body: [
        "We will update this notice when our practices or the law change, and revise the date at the top when we do. Where a change matters to you, we will take reasonable steps to tell you.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about this notice or your personal data? Email ${CONTACT_EMAIL} and we will respond within one working day.`,
      ],
    },
  ],
} as const;

export const terms: LegalDocument = {
  slug: "terms",
  meta: {
    title: "Website Terms",
    description:
      "The terms that govern your use of webask.co.uk, and how they relate to the written agreement that governs any work WebAsk does for you.",
  },
  title: "Website Terms",
  subhead:
    "The terms that govern your use of webask.co.uk. Any work we do for you is governed by a separate written agreement.",
  lastUpdated: LAST_UPDATED,
  // UK rewrite 2026-09-25; draft until the founder's review and D3. See header.
  draft: true,
  intro: [
    "These terms govern your access to and use of the website webask.co.uk. By using the site you agree to them. If you do not agree, please do not use the site.",
    "They cover the website only. Any project we take on for you is governed by a separate written agreement, which always takes precedence where the two differ.",
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        `${ENTITY}. In these terms “WebAsk”, “we”, “us” and “our” refer to that business. Our full entity details are on the Company Information page, and you can contact us at ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: "Using the site",
      body: [
        "You may use the site for lawful purposes: to learn about our services, to decide whether to work with us and to get in touch. You agree to use it in line with these terms and the law that applies to you.",
      ],
    },
    {
      heading: "Services, prices and proposals",
      body: [
        "The site describes our services and shows published starting prices in pounds sterling, exclusive of VAT where applicable. Those figures are indicative and are not an offer. An engagement begins only when we and you agree a written proposal or contract, which sets out the actual scope, price and terms, and that document takes precedence over anything on the site.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The site and its content — including the WebAsk name and branding, the text, design, graphics and code — are owned by Naxdor or its licensors and are protected by intellectual property law. You may read and share the content for your own information. You may not copy, republish, sell or make derivative works from it without our prior written permission.",
      ],
    },
    {
      heading: "Acceptable use",
      body: ["When using the site you agree not to:"],
      list: [
        "Use it in a way that breaks the law or infringes someone else's rights",
        "Attempt to gain unauthorised access to the site, its servers or connected systems",
        "Interfere with or disrupt the site, including by introducing malware or overloading it",
        "Scrape, harvest or collect data from the site by automated means without our permission",
        "Submit false information, or use the contact form to send spam or abusive content",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "The site links to websites and services we do not control. The links are provided for convenience; we are not responsible for the content, products or practices of any other site, and your use of them is subject to their own terms.",
      ],
    },
    {
      heading: "What we do not promise about the site",
      body: [
        "The site and its content are provided as they are and as available. To the extent the law allows, we make no warranty that the site will be uninterrupted or error-free, or that the information on it is complete or current. Nothing in these terms excludes or limits any liability that cannot be excluded or limited by law.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the extent the law allows, we are not liable for any indirect or consequential loss, or for loss of profit, revenue, data or goodwill, arising from your use of, or inability to use, the site. Nothing in these terms limits our liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited by law.",
        "If you are a consumer, nothing in these terms affects the rights you have under the Consumer Rights Act 2015 or other law that cannot be excluded.",
      ],
    },
    {
      heading: "Indemnity",
      body: [
        "If you use the site in the course of a business, you agree to compensate us for reasonable losses, damages and costs we incur as a result of your breach of these terms or your misuse of the site.",
      ],
    },
    {
      heading: "Governing law and disputes",
      body: [
        "These terms, and any dispute arising from them or from the site, are governed by the law of Sweden, and the courts of Sweden have jurisdiction, because that is where the operating entity is established. If you are a consumer resident in the United Kingdom, this does not deprive you of the protection of any mandatory law of the UK, and you may bring proceedings in the courts of the part of the UK in which you live.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time and will revise the date at the top when we do. Your continued use of the site after a change means you accept the updated terms.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about these terms? Email ${CONTACT_EMAIL} and we will respond within one working day.`,
      ],
    },
  ],
} as const;

export const cookies: LegalDocument = {
  slug: "cookies",
  meta: {
    title: "Cookie Policy",
    description:
      "Every cookie and similar technology webask.co.uk uses, what each one is for, how long it lasts, who sets it, and how to change your choice.",
  },
  title: "Cookie Policy",
  subhead:
    "Every cookie and similar technology we use on webask.co.uk, what it is for, how long it lasts, and how to change your choice.",
  lastUpdated: LAST_UPDATED,
  // UK rewrite 2026-09-25; draft until the founder's review. See header.
  draft: true,
  intro: [
    "This policy lists what webask.co.uk stores on your device and why. It should be read with our Privacy Notice, which explains how we handle personal data more generally.",
    "The short version: the site sets no cookies of its own. The only cookies are analytics cookies from Google and Microsoft, and they are set only after you accept them.",
  ],
  sections: [
    {
      heading: "What cookies are",
      body: [
        "Cookies are small text files a website stores on your device to remember something about your visit. Your browser's local storage does a similar job without being a cookie. The Privacy and Electronic Communications Regulations treat both the same way, so this policy covers both.",
      ],
    },
    {
      heading: "What we store without asking, and why we may",
      body: [
        "Two things are stored in your browser's local storage because the site cannot honour your choices without them. Neither is a cookie, neither is sent to us or to anyone else, and both stay until you clear your browser's site data:",
      ],
      list: [
        "theme — whether you chose light or dark mode. Set by the site.",
        "webask:analytics-consent — whether you accepted or rejected analytics cookies, so that we do not ask again on every page. Set by the site.",
      ],
    },
    {
      heading: "Analytics cookies — only after you accept",
      body: [
        "If you accept analytics cookies, two tools load and set the cookies below. If you reject them, or have not yet chosen, neither tool loads and none of these cookies is set.",
        "Google Analytics 4 (set by Google, on this site's domain):",
      ],
      list: [
        "_ga — distinguishes one visitor from another. Lasts 2 years.",
        "_ga_<container-id> — keeps the state of your current session. Lasts 2 years.",
      ],
    },
    {
      heading: "Microsoft Clarity",
      body: [
        "Microsoft Clarity (set by Microsoft). Two cookies are set on this site's domain and the rest on Microsoft's own domains:",
        "Microsoft publishes the current list, with each cookie's lifetime, on its Clarity cookies page, and we follow that page rather than print lifetimes here that could go stale.",
      ],
      list: [
        "_clck — stores a pseudonymous user ID and preferences for this site",
        "_clsk — links the pages you view into one session",
        "CLID — records when Clarity first saw your browser on any site that uses it",
        "ANONCHK — a flag Microsoft uses for its advertising identifier; Clarity does not use it, and it is always set to 0",
        "MR — a flag that tells Microsoft whether to refresh its browser identifier",
        "MUID — Microsoft's identifier for a web browser across Microsoft sites",
        "SM — synchronises that identifier across Microsoft domains",
      ],
    },
    {
      heading: "Measurement that uses no cookies",
      body: [
        "Our hosting provider, Vercel, gives us aggregate traffic and performance measurements that do not use cookies, do not identify you and do not follow you to other sites. They run without consent because there is nothing to consent to.",
      ],
    },
    {
      heading: "Changing your choice",
      body: [
        "You can change your answer at any time from the “Cookie settings” link in the footer of every page. Rejecting analytics cookies after accepting them stops both tools loading from then on.",
        "One limitation, stated plainly: rejecting does not delete cookies Google or Microsoft have already set. They expire on their own schedule, or you can delete them now through your browser's settings, which also let you block cookies altogether. Clearing your browser's site data removes the theme and consent entries too, so the banner will ask again.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We will update this list whenever the cookies the site uses change, and revise the date at the top when we do.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about cookies on this site? Email ${CONTACT_EMAIL} and we will respond within one working day.`,
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
 *    (founder instruction 2026-07-28; see `data/site.ts`). If decision gate D3
 *    concludes the VAT number must be displayed, add a section here and read it
 *    from `process.env.COMPANY_VAT_NUMBER` — the plumbing already exists.
 *  - **No UK address.** D1: fully remote, no UK location. The address below is
 *    the Swedish registered address of the operating entity — a statutory
 *    disclosure, NOT a local-SEO signal, and it must never appear on /contact.
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
        "WebAsk serves clients across the United Kingdom and works entirely remotely. We do not operate a UK office, and the address above is a company registration detail rather than a place you can visit or send post expecting a quick reply.",
        "We are explicit about this for two reasons. It is true; and a great many agencies imply a local presence they do not have. If you want to meet, we will arrange a call or travel to you.",
      ],
    },
    {
      heading: "How to contact us",
      body: [
        "The fastest and most reliable way to reach us is email — it reaches a monitored inbox and we reply to every enquiry within one business day.",
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
        `If something has gone wrong, email ${CONTACT_EMAIL} with "Complaint" in the subject line and we will acknowledge it within one business day and respond substantively within five. If we cannot resolve it between us, you retain any rights you have under UK consumer or contract law.`,
      ],
    },
  ],
} as const;

/** All legal documents, keyed by slug — handy for `generateStaticParams` later. */
export const legalDocuments = { privacy, terms, cookies, companyInformation } as const;
