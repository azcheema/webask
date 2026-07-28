import { site, whatsappUrl } from "@/data/site";
import type { CtaLink, FaqItem, Meta } from "@/data/types";

// WhatsApp click-to-chat link with a prefilled opener. The number itself is
// sourced from site.ts (single source of truth); this only appends the starter
// message copy. Opens a WhatsApp chat — visitor can message or call from there.
const WHATSAPP_HREF = `${whatsappUrl}?text=${encodeURIComponent(
  "Hi Naxdor — I'd like to talk about a project.",
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
    title: "Contact Naxdor — Book a free 30-minute discovery call",
    description:
      "Reach Naxdor for web, CRM, AI, and SEO work. Free 30-minute discovery call, written scope in three business days, response to every inbound within one business day.",
  },
  hero: {
    h1: "Tell us what you're working on.",
    subhead:
      "Free 30-minute discovery call. Written scope within three business days. Honest pricing throughout — no “contact us for a quote” walls.",
  },
  form: {
    eyebrow: "Discovery call",
    h2: "A short brief is all we need to schedule.",
    intro:
      "Six fields and you're done. We use the budget and timeline to schedule you with the right engineer for your project — not to filter you out before the call.",
    responsePromise:
      "We reply to every inbound within one business day. If your message lands on a weekend, you'll hear from us Monday morning your time.",
    submitLabel: "Send message",
    successHeading: "Got it — we'll be in touch within one business day.",
    successBody:
      "An autoresponder with next steps just hit your inbox. If you'd rather skip the wait, you can book a call directly — the link is in that email.",
  },
  sidebar: {
    eyebrow: "Other ways to reach us",
    heading: "Email, social, or schedule yourself in.",
    responseTime: "One business day for every inbound — including weekends, replied Monday.",
    hours: "Mon–Fri · 9:00 AM – 6:00 PM (we schedule to your time zone, not ours).",
    altChannels: [
      // Email/WhatsApp/LinkedIn/GitHub mirror the Naxdor company channels in
      // site.ts (company socials + phone, NOT the founder's personal profiles).
      // WhatsApp number + href derive from site.phone/phoneE164 (single source).
      { label: "Email", value: "contact@naxdor.com", href: "mailto:contact@naxdor.com" },
      // Phone dials directly (tel:, E.164); WhatsApp opens a chat on the SAME
      // number — visitor can message or call from there. Both source site.ts.
      { label: "Phone", value: site.phone, href: `tel:${site.phoneE164}` },
      { label: "WhatsApp", value: site.phone, href: WHATSAPP_HREF },
      {
        label: "LinkedIn",
        value: "linkedin.com/company/naxdor",
        href: "https://www.linkedin.com/company/naxdor",
      },
      { label: "GitHub", value: "github.com/naxdor", href: "https://github.com/naxdor" },
    ],
  },
  trust: {
    heading: "What you can count on after you hit send.",
    bullets: [
      "A real reply from a senior engineer — never a generic “thanks for your interest” template.",
      "A scoping conversation, not a sales pitch. If we're not the right fit, we'll say so.",
      "Written scope within three business days of the discovery call, including a fixed-fee number.",
      "Your data stays with you. We never share inbound enquiries, and we don't sell or syndicate contact details.",
    ],
  },
  faqs: [
    {
      question: "What happens after I submit?",
      answer:
        "Your message lands in the founder's inbox and an autoresponder confirms receipt. A senior engineer replies within one business day with two or three suggested call times. The discovery call itself is free, 30 minutes, and ends with a clear next step — either a written scope coming your way or a referral to a better-fit partner.",
    },
    {
      question: "Do you have a phone number I can call directly?",
      answer:
        "Yes — the number's in the sidebar of this page: tap it to dial us directly, or reach us on WhatsApp (same number) to message or call from there. We still recommend the form for first contact, since the budget and timeline questions let us route you to the right engineer before we talk.",
    },
    {
      question: "What if I'm not sure what service I need?",
      answer:
        "Choose “Not sure / multiple” in the service interest field and tell us what you're trying to solve in the message. We'll spend the discovery call mapping the problem to the right service — and if the problem doesn't map to one we offer, we'll point you somewhere better.",
    },
    {
      question: "I want to keep this confidential. How do you handle that?",
      answer:
        "We sign a mutual NDA on request before any scoping conversation. Your enquiry stays in our inbox and CRM only — nothing flows to third parties, partners, or any kind of lead-resale list. Naxdor has never sold or syndicated contact data and never will.",
    },
    {
      question: "Can I just book a call directly without filling the form?",
      answer:
        "Soon — we're wiring a direct booking flow later this year. For now, the form takes about ninety seconds, and the budget and timeline fields let us match you to the right engineer for the first call. The brief context you give in the message also makes the call itself far more productive.",
    },
  ],
  ctaBand: {
    h2: "Prefer a written audit before a call?",
    subhead:
      "Request a free 30-minute audit of your existing site — Loom walkthrough plus a one-page PDF.",
    primaryCta: { label: "Get a free site audit", href: "/free-audit" },
  },
} as const;
