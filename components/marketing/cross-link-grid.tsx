import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./section-heading";

/** One card in a `CrossLinkGrid` — an internal link with a title + supporting line. */
export type CrossLink = {
  readonly href: string;
  readonly title: string;
  readonly subtitle: string;
};

type CrossLinkGridProps = {
  /** Small brand-colored label above the title. */
  readonly eyebrow?: string;
  readonly title: string;
  /** Optional supporting paragraph below the title. */
  readonly intro?: string;
  readonly links: ReadonlyArray<CrossLink>;
  /** Section background — alternate against the block above to keep them distinct. */
  readonly bg?: "default" | "surface";
  /** Max columns at the `lg` breakpoint (cards are 1-up mobile, 2-up at `sm`). */
  readonly columns?: 2 | 3;
};

/**
 * Shared "keep exploring" cross-link grid — the standard internal-linking block
 * used across service, industry, location, and service×location pages. Takes a
 * flat list of `{ href, title, subtitle }` links and renders the section
 * heading + the brand link-card grid. Renders nothing when `links` is empty, so
 * callers can pass a list that may be empty without guarding.
 */
export function CrossLinkGrid({
  eyebrow,
  title,
  intro,
  links,
  bg = "surface",
  columns = 3,
}: CrossLinkGridProps) {
  if (links.length === 0) return null;

  return (
    <Section padding="lg" bg={bg}>
      <Container size="lg">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <ul className={cn("grid gap-6 sm:grid-cols-2", columns === 3 ? "lg:grid-cols-3" : null)}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group border-border bg-bg hover:border-brand-500/40 flex h-full flex-col gap-2 rounded-2xl border p-6 transition-colors"
                >
                  <span className="text-h4 text-fg inline-flex items-center gap-1.5 font-semibold tracking-tight">
                    {link.title}
                    <ArrowRight className="text-fg-muted group-hover:text-link size-4 transition-colors" />
                  </span>
                  <span className="text-body-sm text-fg-muted text-pretty">{link.subtitle}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
