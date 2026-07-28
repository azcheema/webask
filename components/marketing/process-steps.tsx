import { ArrowRight, Check } from "lucide-react";

import { Grid } from "@/components/layout/grid";
import type { ProcessStep } from "@/data/copy/process";

type ProcessStepsProps = {
  /** The four ordered stages — Discover, Design, Build, Grow. */
  readonly steps: ReadonlyArray<ProcessStep>;
};

/**
 * The reserved "4-step vertical process visual" (design-system.md). Each stage
 * is a bordered token card: a brand numeral badge + name + tagline + duration
 * pill, the long-form description, then two labelled sub-lists — what the client
 * receives (artefacts) and what we need from them (clientInputs).
 *
 * Server component, fully static, token-driven. Reused by the /process page and
 * available to the about page's methodology section.
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="flex flex-col gap-6">
      {steps.map((step) => (
        <li
          key={step.number}
          className="border-border bg-surface flex flex-col gap-6 rounded-3xl border p-6 md:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span
              aria-hidden
              className="bg-brand-500 text-fg-on-brand text-h3 flex size-12 shrink-0 items-center justify-center rounded-full font-semibold tabular-nums"
            >
              {step.number}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-h3 text-fg font-semibold tracking-tight">{step.name}</h3>
              <p className="text-body text-fg-muted text-pretty">{step.tagline}</p>
            </div>
            <span className="bg-muted text-fg-muted text-caption w-fit rounded-full px-3 py-1 font-medium sm:ml-auto">
              {step.typicalDuration}
            </span>
          </div>

          <p className="text-body text-fg-muted max-w-prose text-pretty">{step.longDescription}</p>

          <Grid cols={1} colsMd={2} gap="lg">
            <StepList
              label="What you receive"
              items={step.artefacts}
              icon={<Check className="text-brand-500 mt-0.5 size-4 shrink-0" aria-hidden />}
            />
            <StepList
              label="What we need from you"
              items={step.clientInputs}
              icon={<ArrowRight className="text-fg-muted mt-0.5 size-4 shrink-0" aria-hidden />}
            />
          </Grid>
        </li>
      ))}
    </ol>
  );
}

function StepList({
  label,
  items,
  icon,
}: {
  readonly label: string;
  readonly items: ReadonlyArray<string>;
  readonly icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-fg-muted text-caption font-medium tracking-wide uppercase">
        {label}
      </span>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-body-sm text-fg flex gap-2 text-pretty">
            {icon}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
