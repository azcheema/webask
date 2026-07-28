import type { CrossLink } from "@/components/marketing/cross-link-grid";
import { getBlogTopic } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import type { BlogPostSummary } from "@/lib/blog";

/*
 * Related-content resolver for blog posts. Encodes the Phase 3 internal-linking
 * rule — "every post links to its anchor service + 2 sibling posts" — as a flat
 * `CrossLink[]` ready for the shared `CrossLinkGrid`. Pure + data-driven: it
 * filters unresolved slugs, so a stale reference drops a card rather than 500s,
 * and the grid self-hides when the list is empty.
 */

const SIBLING_COUNT = 2;

/**
 * Build the "keep reading" links for a post: up to `SIBLING_COUNT` sibling posts
 * (same-topic first, then newest from other topics) followed by the cluster's
 * anchor service. `allSummaries` is expected newest-first (as `listPostSummaries`
 * returns).
 */
export function getRelatedLinks(
  current: BlogPostSummary,
  allSummaries: ReadonlyArray<BlogPostSummary>,
): CrossLink[] {
  const others = allSummaries.filter((post) => post.slug !== current.slug);
  const sameTopic = others.filter((post) => post.frontmatter.topic === current.frontmatter.topic);
  const otherTopics = others.filter((post) => post.frontmatter.topic !== current.frontmatter.topic);

  const siblingLinks: CrossLink[] = [...sameTopic, ...otherTopics]
    .slice(0, SIBLING_COUNT)
    .map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.frontmatter.title,
      subtitle: post.frontmatter.description,
    }));

  const anchorLink = getAnchorServiceLink(current);

  return anchorLink ? [...siblingLinks, anchorLink] : siblingLinks;
}

/** The `/services/*` card a post anchors to via its topic, or `null` if the cluster has no service home. */
function getAnchorServiceLink(current: BlogPostSummary): CrossLink | null {
  const topic = getBlogTopic(current.frontmatter.topic);
  if (!topic?.anchorServiceSlug) return null;

  const service = getServiceBySlug(topic.anchorServiceSlug);
  if (!service) return null;

  return {
    href: `/services/${service.slug}`,
    title: service.name,
    subtitle: service.summary,
  };
}
