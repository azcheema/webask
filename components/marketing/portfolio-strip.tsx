import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import type { PortfolioEntry } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

type PortfolioStripProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly note: string;
  readonly entries: ReadonlyArray<PortfolioEntry>;
};

const TODO_MARKER = "TODO(content-copy)";

/** An entry is ready once none of its rendered fields still hold a placeholder. */
function isReady(entry: PortfolioEntry): boolean {
  return ![
    entry.name,
    entry.summary,
    entry.outcome,
    entry.role,
    entry.industry,
    entry.period,
    entry.screenshot,
    entry.screenshotAlt,
  ].some((value) => value.includes(TODO_MARKER));
}

/**
 * Founder prior-work strip — a cold-start trust lever (phase-1 § 4). Entries
 * are gated: any still carrying `TODO(content-copy):` placeholders (or pointing
 * at not-yet-supplied screenshots) are filtered out, and the whole section
 * renders nothing until at least one entry is real. This keeps broken
 * `/portfolio/todo-*.png` images off the live page — the strip turns on
 * automatically when the founder fills `data/portfolio.ts`.
 */
export function PortfolioStrip({ eyebrow, title, note, entries }: PortfolioStripProps) {
  const ready = entries.filter(isReady);
  if (ready.length === 0) return null;

  return (
    <Section padding="lg">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={eyebrow} title={title} intro={note} />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ready.map((entry) => (
              <li
                key={entry.slug}
                className="border-border bg-surface flex flex-col overflow-hidden rounded-2xl border"
              >
                <AspectRatio ratio={16 / 10} className="bg-muted">
                  <Image
                    src={entry.screenshot}
                    alt={entry.screenshotAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </AspectRatio>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{entry.industry}</Badge>
                    <span className="text-fg-muted text-caption">{entry.period}</span>
                  </div>
                  <h3 className="text-h4 text-fg font-semibold tracking-tight">{entry.name}</h3>
                  <p className="text-body-sm text-fg-muted text-pretty">{entry.summary}</p>
                  <p className="text-body-sm text-fg text-pretty">
                    <span className="font-medium">Outcome:</span> {entry.outcome}
                  </p>
                  <div className="text-body-sm text-fg-muted mt-auto flex items-center justify-between pt-2">
                    <span>{entry.role}</span>
                    {entry.liveUrl ? (
                      <Link
                        href={entry.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link inline-flex items-center gap-1 font-medium hover:underline"
                      >
                        Visit
                        <ArrowUpRight className="size-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
