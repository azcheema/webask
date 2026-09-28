import type { CtaLink, FaqItem, Meta } from "@/data/types";

export type FreeAuditContent = {
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
    readonly capacityNote: string;
  };
  readonly whatYouGet: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly items: ReadonlyArray<{
      readonly title: string;
      readonly body: string;
    }>;
  };
  readonly process: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly steps: ReadonlyArray<{
      readonly number: 1 | 2 | 3 | 4;
      readonly name: string;
      readonly body: string;
    }>;
  };
  readonly whoItsFor: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly fit: ReadonlyArray<string>;
    readonly notFit: ReadonlyArray<string>;
  };
  readonly faqs: ReadonlyArray<FaqItem>;
  readonly ctaBand: {
    readonly h2: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
};

export const freeAudit: FreeAuditContent = {
  // Rewritten for the UK on 28 September 2026, replacing the copy forked from
  // d:/naxdor/data/copy/free-audit.ts (founder verdict of 30 July 2026: needs a
  // UK rewrite). The offer is unchanged: five prioritised findings on search,
  // speed and conversion, a 10–15-minute recorded walkthrough plus a one-page
  // summary, three working days, a reply within one working day, an optional
  // half-hour call and a capacity note with no number (the previous version of
  // this file; the same phrase in data/services.ts, the industry and location
  // pages; the reply time in data/copy/contact.ts). The speed wording keeps to
  // what a lab test can show, with interaction speed measurable only on real
  // visits (docs/strategy/performance-accessibility.md § Core Web Vitals;
  // content/blog/local-seo-checklist-2026.mdx). Google's field data is left out:
  // docs/ names no route to it for a URL-only audit.
  // The sector check follows docs/03 § B4 and research 06 § L.1: findings say what
  // a site shows or leaves out, never that it "is compliant", and no
  // prescription-only medicine or euphemism for one is named (CLAUDE.md — this file
  // is sales copy and its FAQs ship as FAQPage JSON-LD). Step 1 describes the
  // contact form as it is in lib/contact-schema.ts: there is no audit topic, and
  // budget and timeline are required. No sentence claims a past audit or client,
  // because there are none yet.
  meta: {
    title: "Free Website Audit for UK Businesses",
    description:
      "Website not bringing in enquiries? A free SEO and website audit for UK businesses: five prioritised findings on search, speed and conversion. Request yours.",
  },
  hero: {
    h1: "A free website and SEO audit for UK businesses.",
    subhead:
      "Five prioritised findings on search, speed and conversion: a recorded walkthrough of your own pages and a one-page summary. Done personally, and yours to act on whether or not you hire us.",
    primaryCta: { label: "Request a free audit", href: "/contact?topic=free-audit" },
    capacityNote:
      "Delivered within three working days of your request, unless our reply gives you a later date.",
  },
  whatYouGet: {
    eyebrow: "The deliverable",
    h2: "What the free audit gives you.",
    items: [
      {
        title: "A narrated recording of your own pages",
        body: "It runs ten to fifteen minutes. Each finding is shown on your own site. You can also book an optional half-hour call to go through it together.",
      },
      {
        title: "Five prioritised findings in writing",
        body: "A one-page summary sets out the five findings on search, speed and conversion, ranked by the difference each would make against the work it takes. Each names the page or setting concerned and says whether any change is a job for you or for a developer. It reads on its own, so the video is optional.",
      },
      {
        title: "A rules check for clinics and practices",
        body: "For an aesthetic clinic, dental practice or beauty and wellness business, the audit also checks the site against the rules on what your sector may say and must show. That covers whether it promotes the consultation rather than a prescription-only medicine, how prices, reviews and health claims appear, and registration details where they apply. It reports what the site shows or leaves out. It is not legal advice.",
      },
    ],
  },
  process: {
    eyebrow: "Step by step",
    h2: "You get the delivery date within one working day.",
    steps: [
      {
        number: 1,
        name: "Send your web address",
        body: "Use the contact form. Choose “Not sure / multiple” as the service, put your web address in the message and ask for the free audit. The form also asks for a budget and a timeline; “Not sure / depends on scope” and “Just exploring” are fine answers.",
      },
      {
        number: 2,
        name: "One person reviews it",
        body: "Your public pages are reviewed for search, speed and conversion: whether Google can find and read them, how they load in a lab test, and how easy it is to get in touch. Clinics and practices get the rules check as well.",
      },
      {
        number: 3,
        name: "The findings arrive",
        body: "The recording and the one-page summary come by email within three working days of your request, unless our reply gave you a later date.",
      },
      {
        number: 4,
        name: "You choose what happens next",
        body: "Make the changes yourself, hand the summary to whoever looks after your site, or ask us about the rest.",
      },
    ],
  },
  whoItsFor: {
    eyebrow: "Is it for you?",
    h2: "For UK businesses with a website that is already live.",
    fit: [
      "UK businesses with a live website that should be bringing in enquiries or sales",
      "Aesthetic clinics, dental practices and beauty or wellness businesses wanting the rules check",
      "Owners weighing a rebuild against keeping what they have",
      "Anyone planning to make the changes themselves or with the developer they already use",
    ],
    notFit: [
      "Businesses outside the UK — the audit assumes UK customers and UK rules",
      "Anyone who needs a legal opinion — the rules check is not legal advice",
    ],
  },
  faqs: [
    {
      question: "Does the free website audit cost anything? What's the catch?",
      answer:
        "No. There is no fee, no card details and no contract, and you owe nothing afterwards. It is free because it lets you judge how WebAsk works on your own website before you have spent anything, in the hope that you hire us. One person does each audit. Your details are not shared or sold. Whether you then fix things yourself, use another developer or hire us is your decision.",
    },
    {
      question: "What does a free website audit check?",
      answer:
        "Search, speed and conversion. Search: whether Google can crawl and index your site, your sitemap and robots.txt, and the titles, headings and structured data on the pages meant to win enquiries. Speed: a lab test of how fast the main content loads and whether the layout jumps; how quickly a page responds to a tap or click can only be measured on real visits. Conversion: how easy it is to call, book or enquire from your home page and a page that sells what you offer, on phone and desktop.",
    },
    {
      question: "How long does a free website audit take?",
      answer:
        "The recording and one-page summary arrive by email within three working days of your request, unless our reply gives you a later date. A person replies within one working day with the date your audit will arrive. Each audit is done personally, one at a time. The recording runs ten to fifteen minutes, and the call afterwards, if you want one, lasts half an hour.",
    },
    {
      question: "Do you need logins or access to my website?",
      answer:
        "No. The free audit needs only your web address. It reads what any visitor or search engine can see, so there are no logins, passwords or card details to hand over, and no patient or customer records are involved. That also sets its limits: it does not audit your plugins or theme, or read the code behind the site. If a finding seems to lead there, the summary says so. Looking inside is paid work, scoped separately if you want it.",
    },
    {
      question: "Will the audit tell me if my clinic website breaks advertising rules?",
      answer:
        "It flags what it sees on a fixed list of points, but it gives no legal verdict. For an aesthetic clinic, dental practice or beauty and wellness business, the audit checks whether pages, titles and FAQ markup promote a consultation rather than a prescription-only medicine, and how prices, reviews and health claims are shown. For a dental practice, it also checks GDC details and use of the word “specialist”. Each point says what the site shows or leaves out; none declares the site compliant. Before you publish wording you are unsure of, CAP's Copy Advice service is free.",
    },
    {
      question: "What if my website is already working well?",
      answer:
        "Then the audit says so, plainly. You still get five findings, but some may be that something works and should be left alone, which is worth knowing before anyone sells you a rebuild. Keeping the site you have is a legitimate conclusion. If one small change is worth making first, the summary puts it at the top. Either way, the findings are yours to act on, with us, with another developer or on your own.",
    },
  ],
  ctaBand: {
    h2: "See where your website stands before you spend anything.",
    subhead:
      "Use the contact form: choose “Not sure / multiple”, put your web address in the message and ask for the free audit. A person replies within one working day with the date your audit will arrive.",
    primaryCta: { label: "Request a free audit", href: "/contact?topic=free-audit" },
  },
} as const;
