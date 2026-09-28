import type { CrossLink } from "@/components/marketing/cross-link-grid";
import { getBlogTopic } from "@/data/blog";
import { getIndustryBySlug } from "@/data/industries";
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
 * Whether posts in this topic may mix with other topics in "Related reading".
 * A cluster with `crossTopicSiblings: false` is walled off in BOTH directions:
 * its posts take siblings from their own topic only, and they never fill
 * another topic's fallback slots (docs/08 § 1: cross-silo links are
 * "deliberate and sparse", never a side effect of recency).
 */
function allowsCrossTopic(topicSlug: string): boolean {
  return getBlogTopic(topicSlug)?.crossTopicSiblings !== false;
}

/**
 * Build the "keep reading" links for a post: up to `SIBLING_COUNT` sibling posts
 * (same-topic first, then newest from other open topics), followed by the
 * cluster's anchor service and then the post's industry page, when either is
 * set. `allSummaries` is expected newest-first (as `listPostSummaries` returns).
 */
export function getRelatedLinks(
  current: BlogPostSummary,
  allSummaries: ReadonlyArray<BlogPostSummary>,
): CrossLink[] {
  const currentTopic = current.frontmatter.topic;
  const others = allSummaries.filter((post) => post.slug !== current.slug);
  const sameTopic = others.filter((post) => post.frontmatter.topic === currentTopic);
  const otherTopics = allowsCrossTopic(currentTopic)
    ? others.filter(
        (post) =>
          post.frontmatter.topic !== currentTopic && allowsCrossTopic(post.frontmatter.topic),
      )
    : [];

  const siblingLinks: CrossLink[] = [...sameTopic, ...otherTopics]
    .slice(0, SIBLING_COUNT)
    .map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.frontmatter.title,
      subtitle: post.frontmatter.description,
    }));

  const trailing = [getAnchorServiceLink(current), getIndustryLink(current)].filter(
    (link): link is CrossLink => link !== null,
  );

  return [...siblingLinks, ...trailing];
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

/** The `/industries/*` card named by the post's `industrySlug`, or `null` if it names none. */
function getIndustryLink(current: BlogPostSummary): CrossLink | null {
  const { industrySlug } = current.frontmatter;
  if (!industrySlug) return null;

  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return null;

  return {
    href: `/industries/${industry.slug}`,
    title: industry.name,
    subtitle: industry.cardSummary,
  };
}
