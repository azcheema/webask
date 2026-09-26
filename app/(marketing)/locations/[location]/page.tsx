import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
  SectionHeading,
} from "@/components/marketing";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { authoredLocations, getLocationBySlug, isAuthoredLocation } from "@/data/locations";
import { liveServices } from "@/data/services";
import type { CtaLink } from "@/data/types";
import {
  breadcrumbsNode,
  buildGraph,
  faqNode,
  locationHubNode,
  renderJsonLd,
  webpageNode,
} from "@/lib/jsonld";
import { getLocationContent, getLocationContentSlugs } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

// Only areas whose hub body is authored (an MDX file in content/locations)
// prerender; everything else 404s. The catalogue in data/locations.ts lists more
// areas than have pages — in Phase 0 it lists three and NONE have copy, so this
// route legitimately prerenders zero pages. The `copy` block and the MDX body
// land together in Phase 2 (see data/locations.ts § PHASE 0 SHIPS THE FACTUAL
// HALF ONLY).
export const dynamicParams = false;

type RouteParams = { location: string };

const FREE_AUDIT_CTA: CtaLink = { label: "Get a free site audit", href: "/free-audit" };

export async function generateStaticParams(): Promise<RouteParams[]> {
  const slugs = await getLocationContentSlugs();
  return slugs.map((location) => ({ location }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { location: slug } = await params;
  const { frontmatter } = await getLocationContent(slug);
  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/locations/${slug}`,
    eyebrow: "Location",
  });
}

export default async function LocationPage({ params }: { params: Promise<RouteParams> }) {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);
  // An area without authored `copy` has no hub page — the hero, card summary and
  // FAQs all live there. Guarding here (not just on the MDX) keeps the "no
  // half-written hub can render" rule in one place.
  if (!location || !isAuthoredLocation(location)) notFound();

  const { frontmatter, content } = await getLocationContent(slug);
  const path = `/locations/${slug}`;
  const { hero, faqs } = location.copy;

  // The other built hubs — completes the hub↔hub mesh. Nearby towns still have
  // no page, so they stay a plain-text mention in the services block.
  const otherAreaLinks: CrossLink[] = authoredLocations
    .filter((area) => area.slug !== slug)
    .map((area) => ({
      href: `/locations/${area.slug}`,
      title: area.name,
      subtitle: area.copy.cardSummary,
    }));

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: location.name },
  ];

  const jsonLd = renderJsonLd(
    buildGraph(
      webpageNode({ path, name: frontmatter.title, description: frontmatter.description }),
      locationHubNode({
        slug,
        name: location.name,
        kind: location.kind,
        // A county hub IS the administrative area — no containing county.
        ...(location.kind === "city" ? { county: location.county } : {}),
        description: frontmatter.description,
        serviceTypes: liveServices.map((service) => service.name),
      }),
      breadcrumbsNode(path, [
        { name: "Home", path: "/" },
        { name: "Locations", path: "/locations" },
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
        title={hero.h1}
        subhead={hero.subhead}
        primaryCta={hero.primaryCta}
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

      <Section padding="lg" bg="surface">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Services"
              title={`What we build for ${location.name} businesses`}
            />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group border-border bg-bg hover:border-brand-500/40 flex h-full flex-col gap-2 rounded-2xl border p-6 transition-colors"
                  >
                    <span className="text-h4 text-fg inline-flex items-center gap-1.5 font-semibold tracking-tight">
                      {service.name}
                      <ArrowRight className="text-fg-muted group-hover:text-link size-4 transition-colors" />
                    </span>
                    <span className="text-body-sm text-fg-muted text-pretty">
                      {service.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {location.nearbyPlaces.length > 0 ? (
              <p className="text-body-sm text-fg-muted text-pretty">
                <span className="text-fg font-medium">Nearby areas we serve:</span>{" "}
                {location.nearbyPlaces.map((nearby) => nearby.name).join(" · ")}. We work across{" "}
                {location.serviceArea} and the wider region remotely, on {location.timeZoneLabel}.
              </p>
            ) : null}
          </div>
        </Container>
      </Section>

      <CrossLinkGrid
        eyebrow="Locations"
        title="Other areas we serve"
        links={otherAreaLinks}
        bg="default"
      />

      {faqs.length > 0 ? (
        <FaqAccordion
          eyebrow="FAQ"
          title={`${location.name}: frequently asked questions`}
          faqs={faqs}
        />
      ) : null}

      <CtaBand
        tone="brand"
        title={`Ready to grow your ${location.name} business?`}
        body="Book a 30-minute strategy call — no pitch, just a clear plan and a written scope within three working days."
        cta={hero.primaryCta}
      />
    </>
  );
}
