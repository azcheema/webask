import { existsSync } from "node:fs";
import { join } from "node:path";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero, PortfolioStrip, SectionHeading } from "@/components/marketing";
import { Badge } from "@/components/ui/badge";
import { about } from "@/data/copy/about";
import { home } from "@/data/copy/home";
import { portfolio } from "@/data/portfolio";
import { team, type TeamMember } from "@/data/team";
import { breadcrumbsNode, buildGraph, personNode, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/about";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "About" },
];

/**
 * True once the founder drops a real headshot at `public/<photo>`. Resolved at
 * build (server component, statically prerendered) so a still-pending photo
 * never renders an `<Image>` that 404s and trips Lighthouse `errors-in-console`
 * — the same broken-asset gate `PortfolioStrip` applies. Lights up automatically
 * when the file lands.
 */
function hasPhoto(photo: string): boolean {
  return existsSync(join(process.cwd(), "public", photo.replace(/^\//, "")));
}

/** "Ansar Cheema" → "AC" — initials fallback while the headshot is pending. */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const metadata: Metadata = buildMetadata({
  title: about.meta.title,
  description: about.meta.description,
  path: PATH,
});

const aboutJsonLd = renderJsonLd(
  buildGraph(
    webpageNode({ path: PATH, name: about.meta.title, description: about.meta.description }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "About", path: PATH },
    ]),
    ...team.map((member) =>
      personNode({
        id: member.slug,
        name: member.name,
        jobTitle: member.role,
        knowsAbout: [...member.knowsAbout],
        sameAs: Object.values(member.links),
        ...(hasPhoto(member.photo) ? { image: member.photo } : {}),
      }),
    ),
  ),
);

function TeamCard({ member }: { readonly member: TeamMember }) {
  const showPhoto = hasPhoto(member.photo);
  return (
    <li
      id={member.slug}
      // bg-bg, not bg-surface: the team section sits on `bg="surface"` since the
      // group disclosure was inserted above it, and a surface card on a surface
      // section reads as a flat block with a stray border. Mirrors the values cards.
      className="border-border bg-bg flex scroll-mt-24 flex-col gap-6 rounded-2xl border p-6 sm:flex-row sm:gap-8 sm:p-8"
    >
      <div className="shrink-0">
        {showPhoto ? (
          <div className="bg-muted relative size-24 overflow-hidden rounded-2xl sm:size-28">
            <Image
              src={member.photo}
              alt={member.photoAlt}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            aria-hidden
            className="bg-muted text-fg-muted text-h3 flex size-24 items-center justify-center rounded-2xl font-semibold sm:size-28"
          >
            {initials(member.name)}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-h4 text-fg font-semibold tracking-tight">{member.name}</h3>
          <p className="text-link text-body-sm font-medium">{member.role}</p>
        </div>
        <p className="text-body-sm text-fg-muted text-pretty">{member.bio}</p>

        <div className="flex flex-col gap-2">
          <span className="text-fg-muted text-caption font-semibold tracking-wide uppercase">
            Known for
          </span>
          <ul className="flex flex-wrap gap-2">
            {member.knownFor.map((item) => (
              <li key={item}>
                <Badge variant="secondary">{item}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 pt-1">
          <Link
            href={member.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-body-sm inline-flex items-center gap-1 font-medium hover:underline"
          >
            LinkedIn
            <ArrowUpRight className="size-4" />
          </Link>
          {member.links.github ? (
            <Link
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-body-sm inline-flex items-center gap-1 font-medium hover:underline"
            >
              GitHub
              <ArrowUpRight className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: aboutJsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={about.hero.h1}
        subhead={about.hero.subhead}
        primaryCta={about.hero.primaryCta}
        secondaryCta={about.hero.secondaryCta}
      />

      <Section padding="lg">
        <Container>
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow={about.story.eyebrow} title={about.story.h2} />
            <div className="flex max-w-2xl flex-col gap-4">
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-fg-muted text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg" bg="surface">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow={about.values.eyebrow} title={about.values.h2} />
            <Grid cols={1} colsMd={3} gap="lg">
              {about.values.items.map((item) => (
                <div
                  key={item.title}
                  className="border-border bg-bg flex flex-col gap-2 rounded-2xl border p-6"
                >
                  <h3 className="text-body text-fg font-semibold text-pretty">{item.title}</h3>
                  <p className="text-body-sm text-fg-muted text-pretty">{item.body}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Group disclosure (docs/00 § three-site map). WebAsk is openly part of
       * the Naxdor group — footer, /about and `parentOrganization` schema all
       * say so. Google then sees two related entities rather than two thin
       * clones, and cross-links between the properties are defensible. */}
      <Section padding="lg">
        <Container>
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow={about.group.eyebrow} title={about.group.h2} />
            <div className="flex max-w-2xl flex-col gap-4">
              {about.group.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-fg-muted text-pretty">
                  {paragraph}
                </p>
              ))}
              <Link
                href={about.group.cta.href}
                prefetch={false}
                className="text-link text-body inline-flex items-center gap-1 font-medium"
              >
                {about.group.cta.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg" bg="surface">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow={about.team.eyebrow}
              title={about.team.h2}
              intro={about.team.intro}
            />
            <ul className="flex max-w-3xl flex-col gap-6">
              {team.map((member) => (
                <TeamCard key={member.slug} member={member} />
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <PortfolioStrip
        eyebrow={home.portfolio.eyebrow}
        title={home.portfolio.h2}
        note={home.portfolio.note}
        entries={portfolio}
      />

      <CtaBand
        tone="brand"
        title={about.ctaBand.h2}
        body={about.ctaBand.subhead}
        cta={about.ctaBand.primaryCta}
      />
    </>
  );
}
