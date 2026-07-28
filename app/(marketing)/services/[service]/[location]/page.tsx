import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CrossLinkGrid, CtaBand, FaqAccordion, PageHero } from "@/components/marketing";
import { getProgrammaticPage, PROGRAMMATIC_COMBOS } from "@/data/service-locations";
import type { CtaLink } from "@/data/types";
import {
  breadcrumbsNode,
  buildGraph,
  faqNode,
  renderJsonLd,
  serviceLocationNodes,
  webpageNode,
} from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

// Only the combos enumerated in data/service-locations.ts prerender; everything
// else 404s. Pages ship `noindex` (combo.indexable === false) until a human
// clears them against the programmatic-seo.md § Indexation-gate checklist.
export const dynamicParams = false;

type RouteParams = { service: string; location: string };

const FREE_AUDIT_CTA: CtaLink = { label: "Get a free site audit", href: "/free-audit" };

export function generateStaticParams(): RouteParams[] {
  return PROGRAMMATIC_COMBOS.map((combo) => ({
    service: combo.serviceSlug,
    location: combo.locationSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { service, location } = await params;
  const page = getProgrammaticPage(service, location);
  if (!page) return buildMetadata({ path: `/services/${service}/${location}` });

  return buildMetadata({
    title: page.config.metaTitle(page.location),
    description: page.config.metaDescription(page.location),
    path: `/services/${service}/${location}`,
    eyebrow: page.location.name,
    noindex: !page.combo.indexable,
  });
}

export default async function ServiceLocationPage({ params }: { params: Promise<RouteParams> }) {
  const { service: serviceSlug, location: locationSlug } = await params;
  const page = getProgrammaticPage(serviceSlug, locationSlug);
  if (!page) notFound();

  const { service, location, config, opening, faqs, siblingServices, siblingLocations } = page;
  const path = `/services/${serviceSlug}/${locationSlug}`;
  const description = config.metaDescription(location);

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: service.name, href: `/services/${service.slug}` },
    { label: location.name },
  ];

  // Internal-link mesh (per programmatic-seo.md § 7): parent service · location
  // hub · sibling services in this area · same service in the other built areas.
  const relatedLinks: ReadonlyArray<{ href: string; title: string; subtitle: string }> = [
    {
      href: `/services/${service.slug}`,
      title: `${service.name} overview`,
      subtitle: service.summary,
    },
    {
      href: `/locations/${location.slug}`,
      title: `Digital services in ${location.name}`,
      subtitle: location.serviceArea,
    },
    ...siblingServices.map((sibling) => ({
      href: `/services/${sibling.slug}/${location.slug}`,
      title: `${sibling.serviceName} in ${location.name}`,
      subtitle: `${sibling.serviceName} for ${location.name} businesses, remote-first on ${location.timeZoneLabel}.`,
    })),
    ...siblingLocations.map((other) => ({
      href: `/services/${service.slug}/${other.slug}`,
      title: `${config.serviceName} in ${other.name}`,
      subtitle: `The same ${config.serviceName} engagement for ${other.name} businesses.`,
    })),
  ];

  const jsonLd = renderJsonLd(
    buildGraph(
      webpageNode({ path, name: config.metaTitle(location), description }),
      ...serviceLocationNodes({
        serviceSlug,
        locationSlug,
        serviceName: service.name,
        name: location.name,
        kind: location.kind,
        // A county hub IS the administrative area — no containing county.
        ...(location.kind === "city" ? { county: location.county } : {}),
        description,
        startingPrice: service.pricing.startingAmount,
        cadence: service.pricing.cadence,
      }),
      breadcrumbsNode(path, [
        { name: "Home", path: "/" },
        { name: service.name, path: `/services/${service.slug}` },
        { name: location.name, path },
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
        title={config.h1(location)}
        subhead={config.heroSubhead(location)}
        primaryCta={service.primaryCta}
        secondaryCta={FREE_AUDIT_CTA}
      />

      <Section padding="lg">
        <Container size="md">
          <article className="prose prose-webask max-w-none">
            <p>{opening}</p>

            <h2>{page.localRelevanceHeading}</h2>
            {page.localRelevance.map((paragraph, i) => (
              <p key={`lr-${i}`}>{paragraph}</p>
            ))}

            <h2>{page.overviewHeading}</h2>
            {page.overview.map((paragraph, i) => (
              <p key={`ov-${i}`}>{paragraph}</p>
            ))}
          </article>
        </Container>
      </Section>

      <CrossLinkGrid
        eyebrow="Keep exploring"
        title={`More for ${location.name} businesses`}
        links={relatedLinks}
      />

      {faqs.length > 0 ? (
        <FaqAccordion
          eyebrow="FAQ"
          title={`${config.serviceName} in ${location.name}: frequently asked questions`}
          faqs={faqs}
        />
      ) : null}

      <CtaBand
        tone="brand"
        title={`Ready to grow your ${location.name} business?`}
        body="Book a 30-minute strategy call — no pitch, just a clear plan and a written scope within three working days."
        cta={service.primaryCta}
      />
    </>
  );
}
