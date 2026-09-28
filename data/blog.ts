/**
 * Blog topic taxonomy — the cluster layer for the content engine.
 *
 * Client-safe (no `node:fs`): consumed by the blog routes, the topic-archive
 * pages, and `lib/related-content.ts`. The long-form body + frontmatter loader
 * live in `lib/blog.ts`; this module owns only the fixed set of topics a post
 * may belong to, so `topic` in frontmatter is validated against a closed list
 * (a typo fails the build, not production).
 *
 * Each topic maps to an **anchor service** — the `/services/*` page a post in
 * that cluster should link to (Phase 3 internal-linking rule: "every post links
 * to its anchor service"). `anchorServiceSlug: null` for clusters with no single
 * service home (e.g. industry playbooks span several services).
 *
 * ⚠️ Every string in `blogTopics` is sales copy: labels, descriptions, titles,
 * intros and CTAs render as meta descriptions, JSON-LD, share images and cards
 * on other posts, stripped of any article that qualifies them. No
 * prescription-only medicine and no euphemism for one may appear here (founder
 * decision F1, 28 September 2026), and nothing may imply a client, an audit or
 * a track record.
 */

import type { CtaLink } from "@/data/types";

/** A topic-specific closing band, replacing the generic discovery-call CTA. */
export type BlogTopicCta = {
  readonly title: string;
  readonly body: string;
  readonly cta: CtaLink;
};

export type BlogTopic = {
  /** URL-safe slug used in `/blog/topic/<slug>` and post frontmatter. */
  readonly slug: string;
  /**
   * Display label, e.g. "SEO". Rendered as the post eyebrow, the `/blog` chip,
   * the hub breadcrumb and the share-image eyebrow (`app/og/route.tsx` drops
   * anything over 40 characters).
   */
  readonly label: string;
  /**
   * One-line description: the topic archive's meta description, share
   * description and `CollectionPage.description` — and its hero subhead unless
   * `intro` is set. It travels without the page, so it is sales copy.
   */
  readonly description: string;
  /** The `/services/<slug>` page posts in this cluster anchor to, or `null`. */
  readonly anchorServiceSlug: string | null;
  /**
   * The archive's H1 and `<title>`. Omit to keep "`{label}` articles". The root
   * layout appends " · WebAsk" (9 characters), so keep it to 51 or fewer.
   */
  readonly title?: string;
  /** The archive's hero subhead, one sentence. Omit to show `description`. */
  readonly intro?: string;
  /**
   * `false` walls the cluster off in "Related reading": its posts link only to
   * each other, and never fill another cluster's cards. Omitted means `true`
   * (same topic first, then the newest from any open cluster).
   */
  readonly crossTopicSiblings?: boolean;
  /** Closing band on the archive and on every post in the cluster. Omit for the discovery call. */
  readonly cta?: BlogTopicCta;
};

/**
 * The closed list of clusters a post may belong to. Keep it closed: adding a
 * cluster is a deliberate content-strategy decision, not a frontmatter
 * free-for-all.
 */
export const blogTopics: ReadonlyArray<BlogTopic> = [
  {
    slug: "seo",
    label: "SEO",
    description:
      "Local and technical SEO playbooks for small businesses — what actually moves rankings, and what just wastes budget.",
    anchorServiceSlug: "seo",
  },
  {
    slug: "ai",
    label: "AI for small businesses",
    description:
      "Voice agents, chatbots, and workflow automation for service businesses — ROI, pitfalls, and what's real today.",
    anchorServiceSlug: "ai-integration",
  },
  {
    slug: "crm",
    label: "CRM & Automation",
    description:
      "GoHighLevel, HubSpot, and the automation that keeps a pipeline full without adding headcount.",
    anchorServiceSlug: "crm-automation",
  },
  {
    slug: "web-development",
    label: "Web Development",
    description:
      "Custom builds, platform trade-offs, and performance — the engineering decisions behind a site that converts.",
    anchorServiceSlug: "web-development",
  },
  {
    slug: "industry",
    label: "Industry Playbooks",
    description:
      "Vertical-specific growth playbooks for aesthetic clinics, dental practices, and beauty/wellness businesses.",
    anchorServiceSlug: null,
  },
  {
    // The regulatory cluster (docs/08 § 1). `anchorServiceSlug` is null because
    // the silo rule is "Compliance → Industry (never Compliance → Service)";
    // posts reach their industry page through frontmatter `industrySlug`.
    // Walled off in "Related reading" so a regulatory title never becomes a
    // card on a sales-led post, and the reverse.
    slug: "clinic-compliance",
    label: "Clinic compliance",
    description:
      "The UK advertising, pricing, review and data rules for aesthetic, dental and beauty clinic websites, each quoted from its primary source and dated.",
    anchorServiceSlug: null,
    title: "Clinic website compliance: the UK rules explained",
    intro:
      "Each guide quotes its primary sources, links to them and gives the date they were checked; WebAsk is a web agency, not a law firm, so none of it is legal advice.",
    crossTopicSiblings: false,
    // Worded to match data/copy/free-audit.ts: the rules check flags what it
    // sees on a fixed list of points and gives no legal verdict.
    cta: {
      title: "Want a rules check on your clinic website?",
      body: "For an aesthetic clinic, dental practice or beauty and wellness business, the free website audit includes a rules check. It flags what it sees on a fixed list of points and reports what the site shows or leaves out, but it gives no legal verdict and is not legal advice.",
      // "Request a free audit" is free-audit.ts's label for the request itself
      // (/contact?topic=free-audit); every link to the explainer page uses this one.
      cta: { label: "Get a free site audit", href: "/free-audit" },
    },
  },
] as const;

/** The set of valid topic slugs — used by the frontmatter schema to reject typos. */
export const blogTopicSlugs: ReadonlyArray<string> = blogTopics.map((topic) => topic.slug);

/** Lookup by slug. Returns `undefined` for an unknown topic. */
export function getBlogTopic(slug: string): BlogTopic | undefined {
  return blogTopics.find((topic) => topic.slug === slug);
}
