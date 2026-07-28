/**
 * Legal page copy — Company Information, Privacy Policy, Terms, Cookie Policy.
 *
 * ⚠️ STATUS: privacy / terms / cookies are back to **`draft: true`** for WebAsk.
 *
 * They arrived from the fork marked approved — but they were approved on
 * 2026-06-01 for **Naxdor, on naxdor.com, framed around EU GDPR and Swedish
 * jurisdiction**. None of that is true for a UK-facing site trading as WebAsk:
 * the controlling regime is **UK GDPR + PECR**, and decision gate **D3** (is an
 * Article 27 UK representative required?) is still open and must be named in
 * the privacy notice if it is. Presenting them as approved would be asserting a
 * legal review that has not happened for this entity.
 *
 * Draft means `noindex` + a visible "working draft" notice, so nothing
 * misleading is indexed while the UK rewrite is pending (Phase 1, docs/06).
 *
 * `company-information` is NOT a draft: it is a factual entity disclosure, and
 * every fact in it is verifiable from `data/site.ts`.
 *
 * Promotion gate: when a document is approved, set `draft: false` and bump
 * `lastUpdated`. That single flip both indexes the page and drops the notice.
 *
 * GROUNDING (what this copy is written against — keep it accurate):
 *   - Entity: **WebAsk is a trading name of Naxdor**, an enskild firma (Swedish
 *     sole proprietorship) operated by Ansar Cheema. There is no UK company and
 *     no Companies House number. Registered address + contact in `data/site.ts`.
 *   - Regime: **UK GDPR + PECR** for UK visitors. Governing law for the
 *     contract sits with the Swedish entity — confirm with D3 before publishing.
 *   - Data collected: the contact form (name, email, company, service,
 *     budget, timeline, country, message) + a honeypot (`company_url`, not
 *     stored) + standard server logs.
 *   - Processors / launch stack: Resend (transactional email), Vercel (hosting
 *     + cookieless Vercel Analytics / Speed Insights), Google Analytics 4 and
 *     Microsoft Clarity (cookie-based analytics — wired in Phase 1's analytics
 *     tasks; this copy is written ahead of that so it's ready when they land).
 *   - Theme preference is stored in the browser's local storage via
 *     `next-themes` (not a cookie).
 *
 * If any of the above changes (US entity lands, an analytics tool is dropped,
 * etc.), update the affected sections here before flipping `draft: false`.
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
const LAST_UPDATED = "2026-06-01";
/** Date the WebAsk entity disclosure was written against `data/site.ts`. */
const DISCLOSURE_UPDATED = "2026-07-28";

export const privacy: LegalDocument = {
  slug: "privacy",
  meta: {
    title: "Privacy Policy",
    description:
      "How Naxdor collects, uses, and protects your personal data when you visit webask.co.uk or get in touch — written for GDPR.",
  },
  title: "Privacy Policy",
  subhead:
    "How we collect, use, and protect your personal data when you visit webask.co.uk or get in touch.",
  lastUpdated: LAST_UPDATED,
  // Reverted to draft for WebAsk — approved for Naxdor/EU-GDPR, not UK. See header.
  draft: true,
  intro: [
    "This Privacy Policy explains what personal data Naxdor collects, why we collect it, how we protect it, and the rights you have over it. It applies to the website webask.co.uk and to any enquiry you send us through it.",
    `We keep this short and concrete. If anything here is unclear, email us at ${CONTACT_EMAIL} and we will explain.`,
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        "Naxdor is a digital services firm, registered as an enskild firma (a Swedish sole proprietorship) operated by Ansar Cheema. For the purposes of the EU General Data Protection Regulation (GDPR), Naxdor is the controller of the personal data described in this policy.",
        `You can reach us about anything in this policy — including to exercise your rights — by email at ${CONTACT_EMAIL}. Our registered contact details are published on our Contact page.`,
      ],
    },
    {
      heading: "What data we collect",
      body: [
        "We collect only what we need. That falls into two groups: information you give us directly, and a limited amount of technical data collected automatically when you use the site.",
        "Information you give us — when you submit our contact form or email us:",
      ],
      list: [
        "Your name and email address",
        "Your company name (optional)",
        "Project context you choose to share: the service you are interested in, your budget range, your timeline, and your country",
        "The content of your message and any later correspondence with us",
      ],
    },
    {
      heading: "Data collected automatically",
      body: [
        "When you browse the site, our hosting and analytics providers collect standard technical data — for example your device and browser type, approximate location derived from your IP address, the pages you view, and how you arrived. We use this in aggregate to keep the site secure and to understand and improve how it is used. The cookies and similar technologies involved are described in our Cookie Policy.",
        "Our contact form also includes a hidden anti-spam field. If it is filled in (which only automated bots do), the submission is discarded and no data is stored.",
      ],
    },
    {
      heading: "How we use your data",
      body: ["We use the data above for the following purposes, and no others:"],
      list: [
        "To respond to your enquiry and discuss a potential engagement",
        "To provide, operate, and improve our services and this website",
        "To keep the site and our systems secure and prevent abuse",
        "To meet our legal and accounting obligations",
      ],
    },
    {
      heading: "Legal bases for processing",
      body: ["Under the GDPR we must have a lawful basis for each use of your data. We rely on:"],
      list: [
        "Your consent — for non-essential analytics cookies, which we set only after you agree",
        "Steps taken at your request before entering a contract — to respond to and follow up on your enquiry",
        "Our legitimate interests — to run, secure, and improve the site, balanced against your rights",
        "Legal obligation — where we must keep records to comply with the law",
      ],
    },
    {
      heading: "Who we share it with",
      body: [
        "We do not sell your personal data, and we do not share it for anyone else's marketing. We use a small number of trusted providers (processors) that handle data on our behalf, under agreements that require them to protect it:",
      ],
      list: [
        "Resend — delivers our transactional emails (the notification we receive and the autoresponder you receive)",
        "Vercel — hosts the website and provides privacy-friendly, cookieless analytics and performance monitoring",
        "Google Analytics 4 — helps us understand aggregate site usage (set only with your consent)",
        "Microsoft Clarity — helps us understand how pages are used (set only with your consent)",
      ],
    },
    {
      heading: "International transfers",
      body: [
        "Some of our providers are based outside the European Economic Area, including in the United States. Where your data is transferred outside the EEA, we rely on appropriate safeguards — such as the European Commission's Standard Contractual Clauses or the EU–US Data Privacy Framework — so that it keeps an equivalent level of protection.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "We keep your enquiry and correspondence only as long as needed to respond and to maintain a reasonable record of our dealings, after which we delete or anonymise it. Data we are required to retain for legal or accounting reasons is kept for the period the law requires. Aggregate analytics data is retained according to each provider's settings.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under the GDPR you have the right to access your personal data, to have it corrected or deleted, to restrict or object to how we use it, to data portability, and — where we rely on consent — to withdraw that consent at any time. Withdrawing consent does not affect processing carried out before you withdrew it.",
        `To exercise any of these rights, email us at ${CONTACT_EMAIL}. We will respond within one month. If you believe we have mishandled your data, you also have the right to complain to your local supervisory authority; in Sweden that is the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY).`,
      ],
    },
    {
      heading: "How we protect your data",
      body: [
        "We serve the site over HTTPS, limit access to your data to the people who need it, and work only with providers that maintain recognised security standards. No method of transmission or storage is completely secure, but we take reasonable measures to protect your data against loss, misuse, and unauthorised access.",
      ],
    },
    {
      heading: "Children",
      body: [
        "This site and our services are intended for businesses and adults. We do not knowingly collect personal data from children. If you believe a child has provided us data, contact us and we will delete it.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy as our practices or the law change. We will revise the “last updated” date above, and where the change is significant we will take reasonable steps to tell you.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about this policy or your personal data? Email us at ${CONTACT_EMAIL} and we will respond within one business day.`,
      ],
    },
  ],
} as const;

export const terms: LegalDocument = {
  slug: "terms",
  meta: {
    title: "Terms of Service",
    description:
      "The terms that govern your use of the Naxdor website and your relationship with Naxdor.",
  },
  title: "Terms of Service",
  subhead: "The terms that govern your use of webask.co.uk and any engagement with Naxdor.",
  lastUpdated: LAST_UPDATED,
  // Reverted to draft for WebAsk — approved for Naxdor/EU-GDPR, not UK. See header.
  draft: true,
  intro: [
    "These Terms of Service govern your access to and use of the website webask.co.uk. By using the site, you agree to these terms. If you do not agree, please do not use the site.",
    "These terms cover your use of the website. They do not replace the separate written agreement that governs any project we take on for you — that agreement always controls where the two differ.",
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        `This site is operated by Naxdor, an enskild firma (a Swedish sole proprietorship) operated by Ansar Cheema. In these terms, “Naxdor”, “we”, “us”, and “our” refer to that business. You can contact us at ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: "Using the site",
      body: [
        "You may access and use the site for lawful purposes — to learn about our services, evaluate working with us, and get in touch. You agree to use it in line with these terms and applicable law.",
      ],
    },
    {
      heading: "Services, pricing, and proposals",
      body: [
        "The site describes our services and shows indicative pricing — for example “starting at” figures. That information is for general guidance only and is not a binding offer. Any engagement begins only when we and you agree a separate written proposal or contract, which sets out the actual scope, price, and terms. Where that agreement and these terms conflict, the agreement controls.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The site and its content — including the Naxdor name and branding, text, design, graphics, and code — are owned by Naxdor or its licensors and are protected by intellectual-property laws. You may view and share the content for your own informational use. You may not copy, republish, sell, or create derivative works from it without our prior written permission.",
      ],
    },
    {
      heading: "Acceptable use",
      body: ["When using the site, you agree not to:"],
      list: [
        "Use it in any way that breaks the law or infringes someone else's rights",
        "Attempt to gain unauthorised access to the site, its servers, or connected systems",
        "Interfere with or disrupt the site, including by introducing malware or overloading it",
        "Scrape, harvest, or collect data from the site by automated means without our permission",
        "Submit false information or use our contact form to send spam or abusive content",
      ],
    },
    {
      heading: "Third-party links",
      body: [
        "The site may link to third-party websites or services we do not control. We provide those links for convenience and are not responsible for the content, products, or practices of any third-party site. Your use of them is at your own risk and subject to their terms.",
      ],
    },
    {
      heading: "Disclaimers",
      body: [
        "The site and its content are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, to the fullest extent permitted by law. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components, or that the information on it is complete or current. Nothing in these terms excludes any liability that cannot be excluded under applicable law.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the fullest extent permitted by law, Naxdor will not be liable for any indirect, incidental, or consequential loss, or for any loss of profits, revenue, data, or goodwill, arising out of or in connection with your use of (or inability to use) the site. This section does not limit liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited under applicable law.",
      ],
    },
    {
      heading: "Indemnity",
      body: [
        "You agree to indemnify Naxdor against reasonable losses, damages, and costs we incur as a result of your breach of these terms or your misuse of the site.",
      ],
    },
    {
      heading: "Governing law and disputes",
      body: [
        "These terms, and any dispute arising out of or in connection with them or the site, are governed by the laws of Sweden, without regard to conflict-of-law rules. The courts of Sweden have jurisdiction over any such dispute, save that this does not deprive you of any protection available to you as a consumer under the mandatory law of your country of residence.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time. We will revise the “last updated” date above, and your continued use of the site after a change means you accept the updated terms.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about these terms? Email us at ${CONTACT_EMAIL} and we will respond within one business day.`,
      ],
    },
  ],
} as const;

export const cookies: LegalDocument = {
  slug: "cookies",
  meta: {
    title: "Cookie Policy",
    description:
      "What cookies and similar technologies Naxdor uses, why, and how you can control them.",
  },
  title: "Cookie Policy",
  subhead:
    "What cookies and similar technologies we use on webask.co.uk, why, and how to control them.",
  lastUpdated: LAST_UPDATED,
  // Reverted to draft for WebAsk — approved for Naxdor/EU-GDPR, not UK. See header.
  draft: true,
  intro: [
    "This Cookie Policy explains how Naxdor uses cookies and similar technologies on webask.co.uk. It should be read alongside our Privacy Policy, which explains how we handle personal data more generally.",
    "We use as few cookies as we can. We set non-essential cookies — such as analytics — only after you have given your consent.",
  ],
  sections: [
    {
      heading: "What cookies are",
      body: [
        "Cookies are small text files a website stores on your device to remember information about your visit. Similar technologies — such as your browser's local storage — work in comparable ways. In this policy we use “cookies” to cover both.",
      ],
    },
    {
      heading: "How we use them",
      body: [
        "We use cookies and similar technologies to keep the site working and secure, to remember your preferences (such as whether you chose light or dark mode), and — with your consent — to understand how the site is used so we can improve it.",
      ],
    },
    {
      heading: "The categories we use",
      body: ["We group what we use into three categories:"],
      list: [
        "Strictly necessary — needed for the site to load and stay secure. These are always active and do not require consent.",
        "Preferences — remember choices you make, such as your light/dark theme. We store your theme choice in your browser's local storage, not in a cookie.",
        "Analytics — help us measure and improve the site. These are set only after you consent, and you can withdraw consent at any time.",
      ],
    },
    {
      heading: "Third-party analytics",
      body: [
        "With your consent, we use the following third-party tools, which set their own cookies or identifiers:",
      ],
      list: [
        "Google Analytics 4 — aggregate usage statistics. See Google's privacy policy for details.",
        "Microsoft Clarity — understands how pages are used. See Microsoft's privacy statement for details.",
      ],
    },
    {
      heading: "Tools that don't use cookies",
      body: [
        "We use Vercel Analytics and Speed Insights to monitor performance. These are designed to be privacy-friendly and do not use cookies or track you across sites.",
      ],
    },
    {
      heading: "Managing your choices",
      body: [
        "You can change or withdraw your consent to non-essential cookies at any time. You can also control and delete cookies through your browser settings, and most browsers let you block them — though doing so may affect how parts of the site work. Clearing your browser's local storage will reset preferences such as your theme.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy as our use of cookies changes. We will revise the “last updated” date above when we do.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about our use of cookies? Email us at ${CONTACT_EMAIL} and we will respond within one business day.`,
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
        `${site.name} is the United Kingdom brand of Naxdor, which also operates naxdor.com for international clients and naxdor.se in Sweden. Same founder, same delivery team, same standards — a UK brand, UK pricing and UK expertise.`,
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
