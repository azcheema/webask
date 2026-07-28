import type { Metadata } from "next";
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
import { Badge } from "@/components/ui/badge";
import { getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { getTeamMemberBySlug } from "@/data/team";
import type { CtaLink } from "@/data/types";
import {
  getCaseStudy,
  getCaseStudyRelatedLinks,
  getCaseStudySlugs,
  listPublishedCaseStudySummaries,
} from "@/lib/case-studies";
import {
  breadcrumbsNode,
  buildGraph,
  caseStudyNode,
  personId,
  personNode,
  renderJsonLd,
  webpageNode,
} from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

// Only studies with an MDX file in content/case-studies prerender; unknown slugs 404.
export const dynamicParams = false;

type RouteParams = { slug: string };

const PRIMARY_CTA: CtaLink = { label: "Book a discovery call", href: "/contact" };

// Shiki highlighting via rehype-pretty-code — same single dark theme as the blog,
// so fenced code reads cleanly in both light and dark mode with no globals.css.
const REHYPE_PRETTY_CODE_OPTIONS = { theme: "github-dark", keepBackground: true };

export async function generateStaticParams(): Promise<RouteParams[]> {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getCaseStudy(slug);
  const service = getServiceBySlug(frontmatter.serviceSlug);

  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/case-studies/${slug}`,
    type: "article",
    eyebrow: service?.name ?? "Case study",
    noindex: frontmatter.draft,
    ...(frontmatter.heroImage ? { image: frontmatter.heroImage } : {}),
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  const { frontmatter, content } = study;
  const path = `/case-studies/${slug}`;

  const service = getServiceBySlug(frontmatter.serviceSlug);
  const industry = frontmatter.industrySlug
    ? getIndustryBySlug(frontmatter.industrySlug)
    : undefined;
  const author = getTeamMemberBySlug(frontmatter.authorSlug);
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  // Published only — "more proof" cards must never point at a draft/scaffold
  // study. A draft being previewed simply shows no related links.
  const allPublished = await listPublishedCaseStudySummaries();
  const current = allPublished.find((entry) => entry.slug === slug);
  const relatedLinks = current ? getCaseStudyRelatedLinks(current, allPublished) : [];

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: "Case studies", href: "/case-studies" },
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
      caseStudyNode({
        path,
        headline: frontmatter.title,
        description: frontmatter.description,
        datePublished: frontmatter.datePublished,
        authorId: personId(frontmatter.authorSlug),
        serviceSlug: frontmatter.serviceSlug,
        wordCount,
        ...(frontmatter.dateModified ? { dateModified: frontmatter.dateModified } : {}),
        ...(frontmatter.heroImage ? { image: frontmatter.heroImage } : {}),
        ...(frontmatter.keywords ? { keywords: frontmatter.keywords } : {}),
      }),
      breadcrumbsNode(path, [
        { name: "Home", path: "/" },
        { name: "Case studies", path: "/case-studies" },
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
            <div className="flex flex-wrap items-center gap-2">
              {service ? <Badge variant="secondary">{service.name}</Badge> : null}
              {industry ? <Badge variant="outline">{industry.name}</Badge> : null}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-display text-brand-600 dark:text-brand-400 font-semibold tracking-tight text-balance">
                {frontmatter.headlineMetric}
              </p>
              <h1 className="text-h1 text-fg font-semibold tracking-tight text-balance">
                {frontmatter.title}
              </h1>
              <p className="text-body-lg text-fg-muted text-pretty">{frontmatter.description}</p>
              <p className="text-body-sm text-fg-muted">
                <span className="font-medium">Client:</span> {frontmatter.client}
              </p>
            </div>
            {author ? (
              <AuthorByline
                author={author}
                datePublished={frontmatter.datePublished}
                readingTime={study.readingTime}
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
                <TableOfContents items={study.toc} />
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

      <CrossLinkGrid eyebrow="Keep exploring" title="More proof" links={relatedLinks} />

      <CtaBand
        tone="brand"
        title="Ready to write your own case study?"
        body="Book a 30-minute discovery call — we'll map the highest-leverage moves for your business and send a written scope within three business days."
        cta={PRIMARY_CTA}
      />
    </>
  );
}
