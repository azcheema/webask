import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import { Breadcrumbs, type BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CrossLinkGrid, CtaBand } from "@/components/marketing";
import { AuthorByline } from "@/components/marketing/author-byline";
import { TableOfContents } from "@/components/marketing/table-of-contents";
import { blogMdxComponents } from "@/components/mdx/blog-mdx-components";
import { getBlogTopic } from "@/data/blog";
import { getTeamMemberBySlug } from "@/data/team";
import type { CtaLink } from "@/data/types";
import { getPost, getPostSlugs, listPublishedPostSummaries } from "@/lib/blog";
import {
  articleNode,
  breadcrumbsNode,
  buildGraph,
  personId,
  personNode,
  renderJsonLd,
  webpageNode,
} from "@/lib/jsonld";
import { getRelatedLinks } from "@/lib/related-content";
import { buildMetadata } from "@/lib/seo";

// Only posts with an MDX file in content/blog prerender; unknown slugs 404.
export const dynamicParams = false;

type RouteParams = { slug: string };

const PRIMARY_CTA: CtaLink = { label: "Book a discovery call", href: "/contact" };

// Shiki highlighting via rehype-pretty-code. A single dark theme with its own
// background (`keepBackground`) reads cleanly in both light and dark mode — the
// standard "dark code block" treatment — so no globals.css / dual-theme CSS.
const REHYPE_PRETTY_CODE_OPTIONS = { theme: "github-dark", keepBackground: true };

export async function generateStaticParams(): Promise<RouteParams[]> {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getPost(slug);
  const topic = getBlogTopic(frontmatter.topic);

  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/blog/${slug}`,
    type: "article",
    eyebrow: topic?.label ?? "Blog",
    noindex: frontmatter.draft,
    ...(frontmatter.heroImage ? { image: frontmatter.heroImage } : {}),
  });
}

export default async function BlogPostPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const { frontmatter, content } = post;
  const path = `/blog/${slug}`;

  const topic = getBlogTopic(frontmatter.topic);
  const author = getTeamMemberBySlug(frontmatter.authorSlug);
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  // Published only — related/sibling cards must never point at a draft (noindex)
  // post. A draft being previewed simply shows no related links.
  const allSummaries = await listPublishedPostSummaries();
  const current = allSummaries.find((entry) => entry.slug === slug);
  const relatedLinks = current ? getRelatedLinks(current, allSummaries) : [];

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: frontmatter.title },
  ];

  const authorSocials = author
    ? [
        author.links.linkedin,
        author.links.github,
        author.links.x,
        author.links.personalSite,
      ].filter((url): url is string => Boolean(url))
    : [];

  const jsonLd = renderJsonLd(
    buildGraph(
      webpageNode({ path, name: frontmatter.title, description: frontmatter.description }),
      articleNode({
        path,
        headline: frontmatter.title,
        datePublished: frontmatter.datePublished,
        authorId: personId(frontmatter.authorSlug),
        wordCount,
        ...(frontmatter.dateModified ? { dateModified: frontmatter.dateModified } : {}),
        ...(frontmatter.heroImage ? { image: frontmatter.heroImage } : {}),
        ...(frontmatter.keywords ? { keywords: frontmatter.keywords } : {}),
      }),
      breadcrumbsNode(path, [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: frontmatter.title, path },
      ]),
      ...(author
        ? [
            personNode({
              id: author.slug,
              name: author.name,
              jobTitle: author.role,
              url: "/about",
              image: author.photo,
              knowsAbout: [...author.knowsAbout],
              sameAs: authorSocials,
            }),
          ]
        : []),
    ),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <Section padding="lg" className="border-border relative overflow-hidden border-b">
        <div
          aria-hidden
          className="from-brand-500/8 via-bg to-bg pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b"
        />
        <Container size="md">
          <div className="flex max-w-3xl flex-col gap-6">
            <Breadcrumbs items={breadcrumbs} />
            <div className="flex flex-col gap-4">
              {topic ? (
                <Link
                  href={`/blog/topic/${topic.slug}`}
                  className="text-link text-body-sm font-semibold tracking-wide uppercase"
                >
                  {topic.label}
                </Link>
              ) : null}
              <h1 className="text-display text-fg font-semibold tracking-tight text-balance">
                {frontmatter.title}
              </h1>
              <p className="text-body-lg text-fg-muted text-pretty">{frontmatter.description}</p>
            </div>
            {author ? (
              <AuthorByline
                author={author}
                datePublished={frontmatter.datePublished}
                readingTime={post.readingTime}
              />
            ) : null}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-3">
            <aside className="lg:order-last lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <TableOfContents items={post.toc} />
              </div>
            </aside>
            <article className="prose prose-webask max-w-none lg:col-span-2">
              <MDXRemote
                source={content}
                components={blogMdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [[rehypePrettyCode, REHYPE_PRETTY_CODE_OPTIONS]],
                  },
                }}
              />
            </article>
          </div>
        </Container>
      </Section>

      <CrossLinkGrid eyebrow="Keep reading" title="Related reading" links={relatedLinks} />

      <CtaBand
        tone="brand"
        title="Ready to put this into practice?"
        body="Book a 30-minute discovery call — we'll map the highest-leverage moves for your business and send a written scope within three business days."
        cta={PRIMARY_CTA}
      />
    </>
  );
}
