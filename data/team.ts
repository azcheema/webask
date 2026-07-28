/**
 * Team / founder bios — the load-bearing E-E-A-T artifact.
 *
 * Consumed by the About page, the home page trust strip, the contact-page
 * sidebar, and the `Person` JSON-LD that ties named expertise to the
 * Organization graph.
 *
 * **Cold-start trust strategy depends on this being real, not invented.**
 * Founder facts are confirmed (Ansar Cheema, 8 years web-app + CRM development,
 * real LinkedIn + GitHub, real headshot). The home and About pages stake
 * credibility on these being verifiable, so nothing here is fabricated.
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
      "Senior engineer with 8 years building web applications and CRM systems for growing businesses — now founder of Naxdor.",
    bio: "I'm Ansar Cheema, founder of Naxdor. I've spent the last 8 years building web applications and CRM systems for growing businesses — the kind of work where the integration and the day-to-day operations matter as much as the code. The pattern I kept seeing: SMBs paying agency rates for templated sites, half-finished CRM setups, and AI experiments that never reach production. Naxdor exists to fix that. We bring senior engineering, honest pricing, and end-to-end accountability to the businesses that need it most.",
    yearsExperience: 8,
    knownFor: [
      "Web application development",
      "CRM development and integration",
      "AI integration and workflow automation",
    ],
    knowsAbout: [
      // Confirmed by founder. Feeds `Person` JSON-LD knowsAbout + AEO matching.
      "Web development",
      "Search engine optimization",
      "CRM automation",
      "AI integration",
      "Software architecture",
    ],
    // 800×800 square JPEG, cropped from the founder's portrait headshot.
    photo: "/team/ansar-cheema.jpg",
    photoAlt: "Naxdor founder Ansar Cheema",
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
