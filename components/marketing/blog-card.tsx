import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getBlogTopic } from "@/data/blog";
import type { BlogPostSummary } from "@/lib/blog";
import { formatPublishedDate } from "@/lib/format-date";

type BlogCardProps = {
  readonly post: BlogPostSummary;
};

/**
 * One post card for the blog index + topic-archive grids. The whole card is the
 * link (matching `CrossLinkGrid`'s card affordance).
 *
 * The heading is `h2`, not `h3`: both consumers (`/blog` and
 * `/blog/topic/[topic]`) put the card list directly under the page `h1` with no
 * intervening section heading, so `h3` skipped a level and tripped axe's
 * `heading-order`. If a future surface nests these under an `h2`, this needs to
 * become a prop rather than being flipped back.
 */
export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter, readingTime } = post;
  const topic = getBlogTopic(frontmatter.topic);

  return (
    <Link
      href={`/blog/${slug}`}
      className="group border-border bg-bg hover:border-brand-500/40 flex h-full flex-col gap-3 rounded-2xl border p-6 transition-colors"
    >
      <div className="text-fg-muted text-body-sm flex flex-wrap items-center gap-2">
        {topic ? (
          <>
            <span className="text-link font-medium">{topic.label}</span>
            <span aria-hidden>·</span>
          </>
        ) : null}
        <time dateTime={frontmatter.datePublished}>
          {formatPublishedDate(frontmatter.datePublished)}
        </time>
      </div>

      <h2 className="text-h4 text-fg font-semibold tracking-tight text-balance">
        {frontmatter.title}
      </h2>

      <p className="text-body-sm text-fg-muted text-pretty">{frontmatter.description}</p>

      <span className="text-fg-muted text-body-sm mt-auto inline-flex items-center gap-1.5 pt-2">
        {readingTime}
        <ArrowRight className="group-hover:text-link size-4 transition-colors" />
      </span>
    </Link>
  );
}
