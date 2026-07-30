import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  type CrossLink,
  CrossLinkGrid,
  CtaBand,
  FaqAccordion,
  PageHero,
} from "@/components/marketing";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { getIndustryBySlug } from "@/data/industries";
import { authoredLocations } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import type { CtaLink } from "@/data/types";
import {
  breadcrumbsNode,
  buildGraph,
  faqNode,
  industryServiceNode,
  renderJsonLd,
  webpageNode,
} from "@/lib/jsonld";
import { getIndustryContent, getIndustryContentSlugs } from "@/lib/industries";
import { buildMetadata } from "@/lib/seo";

// Only industries whose body is authored (an MDX file in content/industries)
// prerender; everything else 404s. The catalog in data/industries.ts and the
// nav list all three, but the route builds just the ones with an MDX file.
export const dynamicParams = false;

type RouteParams = { industry: string };

const FREE_AUDIT_CTA: CtaLink = { label: "Get a free site audit", href: "/free-audit" };

export async function generateStaticParams(): Promise<RouteParams[]> {
  const slugs = await getIndustryContentSlugs();
  return slugs.map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const { frontmatter } = await getIndustryContent(slug);
  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/industries/${slug}`,
    eyebrow: "Industry",
  });
}

export default async function IndustryPage({ params }: { params: Promise<RouteParams> }) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const { frontmatter, content } = await getIndustryContent(slug);
  const path = `/industries/${slug}`;
  const faqs = industry.faqs;

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: industry.name },
  ];

  const relatedServices = industry.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service) => service !== undefined);

  const serviceLinks: CrossLink[] = relatedServices.map((service) => ({
    href: `/services/${service.slug}`,
    title: service.name,
    subtitle: service.summary,
  }));
  // We serve every vertical remotely; the authored hubs are the areas with a
  // written local guide (internal-linking discipline — industry → location).
  // Populated since the Phase 2 hubs landed, so this grid now renders — any
  // string below is live on all three industry pages. CrossLinkGrid still
  // self-hides when the list is empty.
  const locationLinks: CrossLink[] = authoredLocations.map((location) => ({
    href: `/locations/${location.slug}`,
    title: location.name,
    subtitle: location.copy.cardSummary,
  }));

  const jsonLd = renderJsonLd(
    buildGraph(
      webpageNode({ path, name: frontmatter.title, description: frontmatter.description }),
      industryServiceNode({
        slug,
        name: `Digital Services for ${industry.name}`,
        description: frontmatter.description,
        audienceType: industry.audienceType,
      }),
      breadcrumbsNode(path, [
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: industry.name, path },
      ]),
      ...(faqs.length > 0
        ? [
            faqNode(
              path,
              faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
            ),
          ]
        : []),
    ),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={industry.hero.h1}
        subhead={industry.hero.subhead}
        primaryCta={industry.hero.primaryCta}
        secondaryCta={FREE_AUDIT_CTA}
      />

      <Section padding="lg">
        <Container size="md">
          <article className="prose prose-webask max-w-none">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </article>
        </Container>
      </Section>

      <CrossLinkGrid
        eyebrow="Services"
        title={`What we bring to ${industry.name.toLowerCase()}`}
        links={serviceLinks}
        columns={2}
      />

      <CrossLinkGrid
        eyebrow="Locations"
        title={`Where we serve ${industry.name.toLowerCase()}`}
        intro="Every engagement is remote, the length of the UK. These areas also have a written local guide."
        links={locationLinks}
        bg="default"
      />

      {faqs.length > 0 ? (
        <FaqAccordion
          eyebrow="FAQ"
          title={`${industry.name}: frequently asked questions`}
          faqs={faqs}
        />
      ) : null}

      <CtaBand
        tone="brand"
        title="Ready to fill your calendar?"
        body="Book a 30-minute strategy call — no pitch, just a clear plan and a written scope within three working days."
        cta={industry.hero.primaryCta}
      />
    </>
  );
}
