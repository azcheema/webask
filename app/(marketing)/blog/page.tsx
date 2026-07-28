import type { Metadata } from "next";
import Link from "next/link";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero } from "@/components/marketing";
import { BlogCard } from "@/components/marketing/blog-card";
import { getBlogTopic } from "@/data/blog";
import type { CtaLink } from "@/data/types";
import { listPublishedPostSummaries } from "@/lib/blog";
import { breadcrumbsNode, buildGraph, collectionPageNode, renderJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/blog";
const TITLE = "The Naxdor blog";
const DESCRIPTION =
  "Playbooks on SEO, CRM automation, AI, and web development for SMBs — written by the people who build it, not a content farm.";
const PRIMARY_CTA: CtaLink = { label: "Book a discovery call", href: "/contact" };

export function generateMetadata(): Metadata {
  return buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, eyebrow: "Blog" });
}

export default async function BlogIndexPage() {
  const posts = await listPublishedPostSummaries();

  // Only surface topic chips for clusters that actually have a post — the topic
  // archive route only prerenders non-empty topics, so chips never 404.
  const topicSlugs = [...new Set(posts.map((post) => post.frontmatter.topic))];
  const topics = topicSlugs.map(getBlogTopic).filter((topic) => topic !== undefined);

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: "Blog" },
  ];

  const jsonLd = renderJsonLd(
    buildGraph(
      collectionPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
      breadcrumbsNode(PATH, [
        { name: "Home", path: "/" },
        { name: "Blog", path: PATH },
      ]),
    ),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={TITLE}
        subhead="Field-tested tactics from the work we do for clients — no fluff, no AI slop, just what moves the needle for SMBs."
      />

      <Section padding="lg">
        <Container size="lg">
          {posts.length > 0 ? (
            <div className="flex flex-col gap-10">
              {topics.length > 0 ? (
                <ul className="flex flex-wrap gap-2" aria-label="Browse by topic">
                  {topics.map((topic) => (
                    <li key={topic.slug}>
                      <Link
                        href={`/blog/topic/${topic.slug}`}
                        className="border-border text-fg-muted hover:border-brand-500/40 hover:text-fg text-body-sm inline-flex rounded-full border px-3 py-1 transition-colors"
                      >
                        {topic.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <BlogCard post={post} />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-fg-muted text-body-lg">
              The first articles are on the way. Check back soon, or{" "}
              <Link href="/contact" className="text-link underline underline-offset-2">
                get in touch
              </Link>{" "}
              in the meantime.
            </p>
          )}
        </Container>
      </Section>

      <CtaBand
        tone="brand"
        title="Want this kind of thinking applied to your business?"
        body="Book a 30-minute discovery call — no pitch, just a clear read on where your digital growth is leaking and how to fix it."
        cta={PRIMARY_CTA}
      />
    </>
  );
}
