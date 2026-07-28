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
 */

export type BlogTopic = {
  /** URL-safe slug used in `/blog/topic/<slug>` and post frontmatter. */
  readonly slug: string;
  /** Display label, e.g. "SEO". */
  readonly label: string;
  /** One-line description used on the topic-archive hero + meta. */
  readonly description: string;
  /** The `/services/<slug>` page posts in this cluster anchor to, or `null`. */
  readonly anchorServiceSlug: string | null;
};

/**
 * The five launch clusters, one per Phase 3 pillar (see
 * `docs/phases/phase-3-content-engine.md` § Content). Keep this list closed —
 * adding a cluster is a deliberate content-strategy decision, not a frontmatter
 * free-for-all.
 */
export const blogTopics: ReadonlyArray<BlogTopic> = [
  {
    slug: "seo",
    label: "SEO",
    description:
      "Local and technical SEO playbooks for SMBs — what actually moves rankings, and what just wastes budget.",
    anchorServiceSlug: "seo",
  },
  {
    slug: "ai",
    label: "AI for SMBs",
    description:
      "Voice agents, chatbots, and workflow automation for service businesses — ROI, pitfalls, and what's real today.",
    anchorServiceSlug: "ai-integration",
  },
  {
    slug: "crm",
    label: "CRM & Automation",
    description:
      "GoHighLevel, HubSpot, and the automation that keeps a pipeline full without adding headcount.",
    anchorServiceSlug: "crm",
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
] as const;

/** The set of valid topic slugs — used by the frontmatter schema to reject typos. */
export const blogTopicSlugs: ReadonlyArray<string> = blogTopics.map((topic) => topic.slug);

/** Lookup by slug. Returns `undefined` for an unknown topic. */
export function getBlogTopic(slug: string): BlogTopic | undefined {
  return blogTopics.find((topic) => topic.slug === slug);
}
