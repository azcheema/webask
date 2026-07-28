/**
 * Sitewide constants — name, entity disclosure, phone, email, socials.
 *
 * Consumed by the footer, the contact page, the Organization JSON-LD in
 * `lib/jsonld.ts`, and the response-time promise above the contact form.
 *
 * ── THE ENTITY, AND WHY IT MATTERS HERE ──────────────────────────────────
 * WebAsk is a TRADING NAME of Naxdor, an enskild firma (Swedish sole
 * proprietorship) operated by Ansar Cheema. **There is no UK company and no
 * Companies House number exists** — never display one, and never invent one
 * (docs/03-uk-compliance.md § A1).
 *
 * ── D1: FULLY REMOTE, NO UK LOCATION (resolved 2026-07-27) ───────────────
 * `address` below is the Swedish REGISTERED address. It is a statutory
 * disclosure required by the Electronic Commerce (EC Directive) Regulations
 * 2002 and the Provision of Services Regulations 2009, which oblige us to make
 * the real service provider's name, geographic address and email findable.
 *
 * It is **NOT a local-SEO signal and must never be used as one**:
 *   - it renders ONLY on /legal/company-information and the footer legal row;
 *   - it must NEVER appear on /contact — the previous Oxford address came off
 *     at cutover and does not carry forward (docs/04 § 3);
 *   - it must NEVER be emitted in JSON-LD. `lib/jsonld.ts` omits `address` and
 *     `geo` entirely and expresses reach via `areaServed` only. Adding either
 *     would claim a UK presence we do not have.
 * These are two different things — a legal disclosure and a geographic claim.
 * Do not conflate them.
 */

export type SocialLink = {
  readonly platform: "linkedin" | "github" | "x" | "instagram" | "youtube" | "facebook";
  readonly url: string;
  readonly handle?: string;
};

export type BusinessAddress = {
  /** Street + suite line. Empty string if remote-only. */
  readonly street: string;
  readonly city: string;
  /** Region/county/province name. */
  readonly region: string;
  readonly postalCode: string;
  /** ISO 3166-1 alpha-2 country code. */
  readonly countryCode: string;
  /** Display-friendly country name. */
  readonly country: string;
};

export type Site = {
  /** Trading name — what the brand is called everywhere on the site. */
  readonly name: string;
  /** Registered name of the operating entity. NOT a UK company. */
  readonly legalName: string;
  /**
   * The group-disclosure sentence. Required in the footer legal row and on
   * /about per the "openly part of the Naxdor group" positioning (docs/00).
   */
  readonly entityDisclosure: string;
  /** Parent brand's canonical origin — drives `parentOrganization` in JSON-LD. */
  readonly parentSiteUrl: string;
  /**
   * ⚠️ ALWAYS EMPTY HERE, BY INSTRUCTION (founder, 2026-07-28).
   *
   * The Swedish organisationsnummer and VAT number exist, but must **NOT be
   * visible on the website**. They are therefore deliberately kept OUT of this
   * file — `data/site.ts` exists to feed rendering, so a value that must never
   * render does not belong in it. For an enskild firma the org.nr is derived
   * from the proprietor's personnummer, which is a further reason not to commit
   * it.
   *
   * The real values are held in `.env.local` (gitignored) as
   * `COMPANY_ORG_NUMBER` / `COMPANY_VAT_NUMBER` — server-only, never exposed
   * with a `NEXT_PUBLIC_` prefix — so the plumbing exists if decision gate D3
   * ever concludes a disclosure is legally required.
   *
   * Consumers must render nothing at all when these are empty — never a
   * placeholder, never a label with a blank value.
   */
  readonly organisationNumber: string;
  /** ⚠️ Always empty here — see `organisationNumber` above. */
  readonly vatNumber: string;
  readonly tagline: string;
  readonly email: string;
  readonly phone: string;
  /** E.164 format for `tel:` links and JSON-LD `telephone`. */
  readonly phoneE164: string;
  /** Swedish REGISTERED address — statutory disclosure only. See file header. */
  readonly address: BusinessAddress;
  readonly foundingYear: number;
  /** Display-friendly founding date for the footer / About page. */
  readonly foundingDate: string;
  /** Response-time promise shown above the contact form. */
  readonly responsePromise: string;
  /** Hours line shown on the contact page and footer. */
  readonly hours: string;
  readonly socials: ReadonlyArray<SocialLink>;
};

export const site: Site = {
  name: "WebAsk",
  legalName: "Naxdor",
  entityDisclosure: "WebAsk is a trading name of Naxdor, an enskild firma registered in Sweden.",
  parentSiteUrl: "https://naxdor.com",
  // ⚠️ Deliberately empty — the real values must never render. See the type docs.
  organisationNumber: "",
  vatNumber: "",
  tagline: "Digital services for UK small businesses that want to ship, not stall.",
  // Confirmed by the founder 2026-07-28. The domain still needs verifying in
  // Resend (SPF/DKIM/DMARC) before the contact form can deliver.
  email: "info@webask.co.uk",
  // The UK number published on the existing webask.co.uk (audited 2026-07-27).
  // Confirmed 2026-07-28 as the interim number — a replacement is planned, and
  // one change here propagates to the footer, tel: links, WhatsApp and JSON-LD.
  phone: "+44 7818 920132",
  phoneE164: "+447818920132",
  address: {
    // Swedish registered address of the operating entity. Statutory disclosure
    // ONLY — never on /contact, never in JSON-LD. See the file header.
    street: "Linjegatan 3D",
    city: "Halmstad",
    region: "Halland",
    postalCode: "302 50",
    countryCode: "SE",
    country: "Sweden",
  },
  foundingYear: 2026,
  foundingDate: "May 2026",
  responsePromise: "We reply to every enquiry within one business day.",
  hours: "Mon–Fri · 9:00 am – 5:30 pm (UK time)",
  // Company/brand profiles — feed Organization `sameAs` (lib/jsonld.ts).
  // EMPTY BY DESIGN: WebAsk has no live profiles yet, and the inherited rule is
  // "leave empty rather than point at 404s". `organizationNode()` omits the
  // `sameAs` key entirely while this is empty. Naxdor's profiles are NOT ours —
  // do not borrow them. Add entries only as real WebAsk profiles go live.
  socials: [],
} as const;

/**
 * WhatsApp click-to-chat base URL, derived from `phoneE164` — digits only, no
 * `+` or separators, per the wa.me spec (+447818920132 → wa.me/447818920132).
 * Opens a chat with us (from which the visitor can message or call via WhatsApp);
 * WhatsApp exposes no public deep link to directly place a call. Append
 * `?text=<encoded message>` to prefill the chat. Sourced from `phoneE164` so one
 * change to the number propagates here alongside the footer/tel:/JSON-LD.
 */
export const whatsappUrl = `https://wa.me/${site.phoneE164.replace(/\D/g, "")}`;
