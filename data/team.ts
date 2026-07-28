/**
 * Team / founder bios — the load-bearing E-E-A-T artifact.
 *
 * Consumed by the About page, the home page trust strip, the contact-page
 * sidebar, and the `Person` JSON-LD that ties named expertise to the
 * Organization graph.
 *
 * **Cold-start trust strategy depends on this being real, not invented.**
 * Founder facts are confirmed against the founder's own published bio on
 * naxdor.com/about (Ansar Cheema, 8 years web-app + CRM development, real
 * LinkedIn + GitHub, real headshot). The home and About pages stake credibility
 * on these being verifiable, so nothing here is fabricated.
 *
 * ⚠️ Note what is deliberately NOT carried over from Naxdor's about page: its
 * "senior engineers doing the work — ten-plus years of production experience
 * per person" value. The founder's own bio on the same site says **8 years**,
 * and lists no other team members, so "ten-plus per person" is not supportable.
 * It is the exact class of claim a prospect can check, and being caught out on
 * it would cost far more than the line is worth.
 *
 * There is ONE person here. Copy that implies a team ("our engineers", "the
 * team") is wrong until that changes.
 */

import type { CtaLink } from "@/data/types";

export type TeamMember = {
  /** URL-safe slug used in `Person` JSON-LD `@id` and About page anchors. */
  readonly slug: string;
  readonly name: string;
  readonly role: string;
  /** One-line elevator summary used on the home trust strip and contact sidebar. */
  readonly oneLiner: string;
  /** Longer About-page bio — 80–150 words. */
  readonly bio: string;
  /** Years of professional engineering experience. */
  readonly yearsExperience: number;
  /** Named stacks / contexts — appears on the About page as a "known for" line. */
  readonly knownFor: ReadonlyArray<string>;
  /** Schema.org `knowsAbout` array — concrete topics, not adjectives. */
  readonly knowsAbout: ReadonlyArray<string>;
  /** Headshot path — relative to /public. Square aspect, ≥ 600×600. */
  readonly photo: string;
  readonly photoAlt: string;
  readonly links: {
    readonly linkedin: string;
    readonly github?: string;
    readonly x?: string;
    readonly personalSite?: string;
  };
  /** Booking link if the founder wants a direct call CTA on their bio. */
  readonly bookingCta?: CtaLink;
};

export const team: ReadonlyArray<TeamMember> = [
  {
    slug: "ansar-cheema",
    name: "Ansar Cheema",
    role: "Founder",
    oneLiner:
      "Engineer with 8 years building web applications and CRM systems for growing businesses — founder of WebAsk.",
    bio: "I'm Ansar Cheema, and I run WebAsk. I've spent the last 8 years building web applications and CRM systems for growing businesses — the kind of work where the integration and the day-to-day operations matter as much as the code. The pattern I kept seeing was the same: businesses paying agency rates for templated sites, half-finished CRM setups, and AI experiments that never reached production. WebAsk exists to fix that for UK businesses specifically — with honest pricing, one person accountable from first call to launch, and a genuine understanding of the rules the regulated sectors we work in have to follow.",
    yearsExperience: 8,
    knownFor: [
      "Web application development",
      "CRM development and integration",
      "AI integration and workflow automation",
    ],
    knowsAbout: [
      // Confirmed by the founder's own published bio. Feeds `Person` JSON-LD
      // knowsAbout + AEO matching.
      //
      // Deliberately technical-only. The UK regulatory literacy (ASA/CAP, GDC,
      // MHRA) is claimed on the ORGANISATION node in lib/jsonld.ts, where it
      // belongs — a Person's `knowsAbout` is a credential claim about an
      // individual, and it should follow demonstrated expertise rather than
      // precede it. Add the regulatory topics here once the Phase 3 compliance
      // cluster publishes under this byline and the claim is evidenced.
      "Web development",
      "Search engine optimisation",
      "CRM automation",
      "AI integration",
      "Software architecture",
    ],
    // 800×800 square JPEG, cropped from the founder's portrait headshot.
    photo: "/team/ansar-cheema.jpg",
    photoAlt: "WebAsk founder Ansar Cheema",
    links: {
      linkedin: "https://www.linkedin.com/in/azcheema/",
      github: "https://github.com/azcheema",
    },
  },
] as const;

/** Lookup by slug. */
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}
