import { site, whatsappUrl } from "@/data/site";
import type { CtaLink, FaqItem, Meta } from "@/data/types";

/*
 * Contact page copy.
 *
 * ── D1: NO POSTAL ADDRESS ON THIS PAGE ────────────────────────────────────
 * WebAsk is fully remote with no UK location, so `/contact` carries no address
 * at all — the Oxford address on the old WordPress site does not carry forward
 * (docs/04 § 3). The Swedish registered address is a STATUTORY disclosure and
 * lives on /legal/company-information and in the footer legal row. Those are two
 * different things and must not be conflated here: putting a postal address on a
 * contact page is a geographic claim, and ours would be false.
 *
 * ── NO BORROWED SOCIAL PROFILES ───────────────────────────────────────────
 * The inherited version listed Naxdor's LinkedIn and GitHub in the "other ways
 * to reach us" panel. Those are the PARENT brand's accounts, not ours —
 * `site.socials` is deliberately empty and `organizationNode()` omits `sameAs`
 * for the same reason. Email, phone and WhatsApp are the real channels; add a
 * social row here only when a real WebAsk profile exists.
 *
 * ── NO IMPLIED TEAM ───────────────────────────────────────────────────────
 * "A senior engineer will reply" implies a bench. There is one person. The copy
 * says so, which is also a better promise than the generic version.
 */

// WhatsApp click-to-chat with a prefilled opener. The number is sourced from
// site.ts (single source of truth); this only appends the starter message.
const WHATSAPP_HREF = `${whatsappUrl}?text=${encodeURIComponent(
  "Hi WebAsk — I'd like to talk about a project.",
)}`;

export type ContactContent = {
  readonly meta: Meta;
  readonly hero: {
    readonly h1: string;
    readonly subhead: string;
  };
  readonly form: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
    readonly responsePromise: string;
    readonly submitLabel: string;
    readonly successHeading: string;
    readonly successBody: string;
  };
  readonly sidebar: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly responseTime: string;
    readonly hours: string;
    readonly altChannels: ReadonlyArray<{
      readonly label: string;
      readonly value: string;
      readonly href: string;
    }>;
  };
  readonly trust: {
    readonly heading: string;
    readonly bullets: ReadonlyArray<string>;
  };
  readonly faqs: ReadonlyArray<FaqItem>;
  readonly ctaBand: {
    readonly h2: string;
    readonly subhead: string;
    readonly primaryCta: CtaLink;
  };
};

export const contact: ContactContent = {
  meta: {
    title: "Contact WebAsk — Book a free 30-minute discovery call",
    description:
      "Talk to WebAsk about websites, SEO, CRM and automation for your UK business. Free 30-minute discovery call, written scope in three working days, a reply within one.",
  },
  hero: {
    h1: "Tell us what you're working on.",
    subhead:
      "A free 30-minute discovery call, a written scope within three working days, and honest pricing throughout — no “request a quote” wall.",
  },
  form: {
    eyebrow: "Discovery call",
    h2: "A short brief is all we need to get started.",
    intro:
      "Six fields and you're done. The budget and timeline questions are there so the first call is useful — not to filter you out before it happens.",
    responsePromise:
      "We reply to every enquiry within one working day. If your message arrives at the weekend, you'll hear from us on Monday morning.",
    submitLabel: "Send message",
    successHeading: "Got it — we'll be in touch within one working day.",
    successBody:
      "A confirmation with next steps has just landed in your inbox. If anything is time-sensitive, reply to it directly and it comes straight back to us.",
  },
  sidebar: {
    eyebrow: "Other ways to reach us",
    heading: "Email, phone, or WhatsApp.",
    responseTime: "One working day for every enquiry — weekend messages answered Monday.",
    hours: site.hours,
    // Email, phone and WhatsApp only. No social links: site.socials is empty by
    // design and Naxdor's profiles are not ours to list. See the file header.
    altChannels: [
      { label: "Email", value: site.email, href: `mailto:${site.email}` },
      // Phone dials directly (tel:, E.164); WhatsApp opens a chat on the SAME
      // number, so a visitor can message or call from there. Both from site.ts.
      { label: "Phone", value: site.phone, href: `tel:${site.phoneE164}` },
      { label: "WhatsApp", value: site.phone, href: WHATSAPP_HREF },
    ],
  },
  trust: {
    heading: "What happens after you hit send.",
    bullets: [
      "A real reply from the person who would do the work — never a “thanks for your interest” template.",
      "A scoping conversation, not a sales call. If we are not the right fit, we say so on that call.",
      "A written scope within three working days of the call, with a fixed-fee number in it.",
      "Your details stay with us. We do not share, sell or syndicate enquiries, and there is no lead-resale list.",
    ],
  },
  faqs: [
    {
      question: "What happens after I submit the form",
      answer:
        "Your message goes straight to the founder's inbox and a confirmation lands in yours. You will get a real reply within one working day with two or three suggested times. The discovery call is free, runs about thirty minutes, and ends with a clear next step — either a written scope on its way to you, or an honest pointer to someone better suited if that is the right answer.",
    },
    {
      question: "Where are you based, and does it matter",
      answer:
        "WebAsk works entirely remotely across the UK, on UK time. There is no office to visit, and we would rather tell you that than imply a local presence we do not have. In practice it changes nothing about the work: calls happen on video, the code lives in your repository, and you are not paying for city-centre floor space in your invoice. If meeting in person genuinely matters for your project, say so and we will arrange it.",
    },
    {
      question: "Can I phone instead of using the form",
      answer:
        "Yes — the number is in the panel on this page. Tap it to dial, or use WhatsApp on the same number to message or call from there. The form is still the better first move: the budget and timeline fields mean the first conversation starts with the actual problem rather than twenty minutes of context-gathering.",
    },
    {
      question: "What if I'm not sure which service I need",
      answer:
        "Choose “Not sure / multiple” and describe what you are trying to fix rather than what you think you need to buy. Most engagements combine two or three services anyway, and working out the right mix is what the discovery call is for. If the problem does not map to anything we offer, we will tell you that too.",
    },
    {
      question: "I need this kept confidential",
      answer:
        "We will sign a mutual NDA on request before any scoping conversation — just say so in your message. Your enquiry stays in our inbox and CRM and goes nowhere else: no partners, no referral networks, no lead-resale lists. If you would rather not put details in a web form at all, email us and we will take it from there.",
    },
  ],
  ctaBand: {
    h2: "Prefer a written audit before a call?",
    subhead:
      "Request a free 30-minute audit of your existing site — a recorded walkthrough plus a one-page summary of what we would change first.",
    primaryCta: { label: "Get a free site audit", href: "/free-audit" },
  },
} as const;
