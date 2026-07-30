import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero } from "@/components/marketing";
import { industries } from "@/data/industries";
import type { CtaLink } from "@/data/types";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/industries";

const META = {
  title: "Industries We Serve",
  description:
    "WebAsk builds for UK small businesses, with a specialisation in aesthetic clinics, dental practices and beauty & wellness clinics — booking-first websites, CRM automation, AI and local SEO, built to the UK advertising rules.",
};

const HERO = {
  h1: "Three verticals where the rules shape the build.",
  subhead:
    "Every service here is built for UK small businesses generally. In these three, regulation shapes what a site is allowed to say — which changes the architecture, not just the wording.",
  primaryCta: { label: "Book a strategy call", href: "/contact" } satisfies CtaLink,
  secondaryCta: { label: "Get a free site audit", href: "/free-audit" } satisfies CtaLink,
};

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Industries" },
];

export const metadata: Metadata = buildMetadata({
  title: META.title,
  description: META.description,
  path: PATH,
});

const jsonLd = renderJsonLd(
  buildGraph(
    webpageNode({ path: PATH, name: META.title, description: META.description }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Industries", path: PATH },
    ]),
  ),
);

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={HERO.h1}
        subhead={HERO.subhead}
        primaryCta={HERO.primaryCta}
        secondaryCta={HERO.secondaryCta}
      />

      <Section padding="lg">
        <Container size="lg">
          <ul className="grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group border-border bg-surface hover:border-brand-500/40 flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors sm:p-8"
                >
                  <h2 className="text-h3 text-fg font-semibold tracking-tight text-balance">
                    {industry.name}
                  </h2>
                  <p className="text-body-sm text-fg-muted flex-1 text-pretty">
                    {industry.cardSummary}
                  </p>
                  <span className="text-link text-body-sm inline-flex items-center gap-1 font-medium">
                    Explore {industry.name.toLowerCase()}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        tone="brand"
        title="Not sure which of these fits?"
        body="Tell us about your business and we'll map where the bookings are leaking — with a written plan within three working days."
        cta={HERO.primaryCta}
      />
    </>
  );
}
