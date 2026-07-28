import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  type CrossLink,
  CrossLinkGrid,
  CtaBand,
  FaqAccordion,
  PricingCard,
  ServiceHero,
} from "@/components/marketing";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { getIndustriesForService } from "@/data/industries";
import { getProgrammaticLocationsForService } from "@/data/service-locations";
import { getRelatedServices, getServiceBySlug } from "@/data/services";
import type { CtaLink } from "@/data/types";
import {
  breadcrumbsNode,
  buildGraph,
  faqNode,
  renderJsonLd,
  serviceNode,
  webpageNode,
} from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { getServiceContent, getServiceContentSlugs } from "@/lib/services";

// Only services whose detail body is authored (an MDX file in content/services)
// are prerendered; everything else 404s. Web Dev in Phase 1; the other 8 light
// up as their MDX lands in Phase 2 — no template change.
export const dynamicParams = false;

type RouteParams = { service: string };

const FREE_AUDIT_CTA: CtaLink = { label: "Get a free site audit", href: "/free-audit" };

export async function generateStaticParams(): Promise<RouteParams[]> {
  const slugs = await getServiceContentSlugs();
  return slugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const { frontmatter } = await getServiceContent(slug);
  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<RouteParams> }) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const { frontmatter, content } = await getServiceContent(slug);
  const path = `/services/${slug}`;
  const faqs = service.faqs ?? [];
  // Built programmatic city pages for this service (empty for services not in the
  // programmatic batch — the inbound "Where we serve" block then renders nothing).
  const programmaticLocations = getProgrammaticLocationsForService(slug);

  // Internal-linking mesh. `locationLinks`: the city pages we run for this
  // service. `exploreLinks`: the two sibling services + the launch verticals this
  // service is most relevant to (industries are the inverse of each vertical's
  // relatedServiceSlugs, so a service no vertical claims simply shows services).
  const locationLinks: CrossLink[] = programmaticLocations.map((loc) => ({
    href: `/services/${slug}/${loc.slug}`,
    title: `${service.name} in ${loc.name}`,
    subtitle: loc.serviceArea,
  }));
  const relevantIndustries = getIndustriesForService(slug);
  const exploreLinks: CrossLink[] = [
    ...getRelatedServices(slug).map((related) => ({
      href: `/services/${related.slug}`,
      title: related.name,
      subtitle: related.summary,
    })),
    ...relevantIndustries.map((industry) => ({
      href: `/industries/${industry.slug}`,
      title: industry.name,
      subtitle: industry.cardSummary,
    })),
  ];
  const exploreTitle =
    relevantIndustries.length > 0 ? "Related services & industries" : "Related services";
  // Alternate against the surface "Where we serve" block when that one renders.
  const exploreBg = locationLinks.length > 0 ? "default" : "surface";

  const breadcrumbs = [{ label: "Home", href: "/" }, { label: service.name }];

  const jsonLd = renderJsonLd(
    buildGraph(
      webpageNode({ path, name: frontmatter.title, description: frontmatter.description }),
      serviceNode({
        slug,
        name: service.name,
        description: service.summary,
        startingPrice: service.pricing.startingAmount,
      }),
      breadcrumbsNode(path, [
        { name: "Home", path: "/" },
        { name: service.name, path },
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
      <ServiceHero
        breadcrumbs={breadcrumbs}
        name={service.name}
        subhead={service.heroSubhead}
        whoItsFor={service.whoItsFor}
        startingAmount={service.pricing.startingAmount}
        cadence={service.pricing.cadence}
        primaryCta={service.primaryCta}
        secondaryCta={FREE_AUDIT_CTA}
      />
      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <aside className="lg:order-last lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <PricingCard service={service} />
              </div>
            </aside>
            <article className="prose prose-webask max-w-none lg:col-span-2">
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </article>
          </div>
        </Container>
      </Section>
      <CrossLinkGrid
        eyebrow="Locations"
        title={`Where we serve ${service.name}`}
        intro={`Local ${service.name.toLowerCase()} pages for the metros we focus on — the same engagement, tuned to each market.`}
        links={locationLinks}
        bg="surface"
      />
      <CrossLinkGrid
        eyebrow="Keep exploring"
        title={exploreTitle}
        links={exploreLinks}
        bg={exploreBg}
      />
      {faqs.length > 0 ? (
        <FaqAccordion eyebrow="FAQ" title="Frequently asked questions" faqs={faqs} />
      ) : null}
      <CtaBand
        tone="brand"
        title="Ready to get started?"
        body="Book a 30-minute discovery call — no pitch, just a clear plan and a written scope within three working days."
        cta={service.primaryCta}
      />
    </>
  );
}
