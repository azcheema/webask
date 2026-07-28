import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { Stat } from "@/data/types";

import { SectionHeading } from "./section-heading";

type StatsProps = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly stats: ReadonlyArray<Stat>;
};

/**
 * Large-numeral proof row — Stripe register. Each stat is a bordered card so
 * the figures read as measurable commitments, not decoration. Values stay in
 * `text-fg` (varying-length strings like "1 business day" wrap cleanly at this
 * size); the label carries the unit.
 */
export function Stats({ eyebrow, title, stats }: StatsProps) {
  return (
    <Section padding="lg">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={eyebrow} title={title} align="center" />
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-border bg-surface flex flex-col gap-2 rounded-2xl border p-6"
              >
                <dt className="text-display text-fg font-semibold tracking-tight text-balance">
                  {stat.value}
                </dt>
                <dd className="text-body-sm text-fg-muted text-pretty">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
