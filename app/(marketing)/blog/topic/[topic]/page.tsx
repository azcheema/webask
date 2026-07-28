import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero } from "@/components/marketing";
import { BlogCard } from "@/components/marketing/blog-card";
import { getBlogTopic } from "@/data/blog";
import type { CtaLink } from "@/data/types";
import { listPostSummaries, listPublishedPostSummariesByTopic } from "@/lib/blog";
import { breadcrumbsNode, buildGraph, collectionPageNode, renderJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

// Prerender only topics that have at least one post; everything else 404s.
export const dynamicParams = false;

type RouteParams = { topic: string };

const PRIMARY_CTA: CtaLink = { label: "Book a discovery call", href: "/contact" };

export async function generateStaticParams(): Promise<RouteParams[]> {
  // Build an archive for every topic that has any post (drafts included) so a
  // draft's own topic link never 404s. A draft-only archive renders empty +
  // `noindex` (see generateMetadata) and lists no posts, so nothing leaks.
  const posts = await listPostSummaries();
  const topics = [...new Set(posts.map((post) => post.frontmatter.topic))];
  return topics.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getBlogTopic(slug);
  if (!topic) return buildMetadata({ title: "Blog", path: "/blog" });

  // An archive with no published posts yet (e.g. its only post is still a draft)
  // is staged `noindex` so it isn't an indexable thin page; it flips to indexable
  // when a real post in the cluster ships.
  const published = await listPublishedPostSummariesByTopic(slug);

  return buildMetadata({
    title: `${topic.label} articles`,
    description: topic.description,
    path: `/blog/topic/${slug}`,
    eyebrow: "Blog",
    noindex: published.length === 0,
  });
}

export default async function BlogTopicPage({ params }: { params: Promise<RouteParams> }) {
  const { topic: slug } = await params;
  const topic = getBlogTopic(slug);
  if (!topic) notFound();

  const posts = await listPublishedPostSummariesByTopic(slug);
  const path = `/blog/topic/${slug}`;
  const title = `${topic.label} articles`;

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: topic.label },
  ];

  const jsonLd = renderJsonLd(
    buildGraph(
      collectionPageNode({ path, name: title, description: topic.description }),
      breadcrumbsNode(path, [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: topic.label, path },
      ]),
    ),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageHero breadcrumbs={breadcrumbs} title={title} subhead={topic.description} />

      <Section padding="lg">
        <Container size="lg">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        tone="brand"
        title="Ready to turn reading into results?"
        body="Book a 30-minute discovery call and we'll map the highest-leverage moves for your business."
        cta={PRIMARY_CTA}
      />
    </>
  );
}
