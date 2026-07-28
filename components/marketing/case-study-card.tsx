import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { CaseStudySummary } from "@/lib/case-studies";

type CaseStudyCardProps = {
  readonly study: CaseStudySummary;
};

/**
 * One case-study card for the index grid. Leads with the headline metric — the
 * proof a prospect scans for — then the title + client. The whole card is the
 * link (matching `BlogCard` / `CrossLinkGrid`); the heading stays a real `h3` so
 * the listing keeps a sane document outline. Reads pre-resolved labels off the
 * summary (no `data/services`/`data/industries` imports), so it stays light when
 * rendered inside the `'use client'` filter — see `CaseStudySummary`.
 */
export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { slug, frontmatter, serviceLabel, industryLabel } = study;

  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group border-border bg-bg hover:border-brand-500/40 flex h-full flex-col gap-3 rounded-2xl border p-6 transition-colors"
    >
      <div className="text-fg-muted text-body-sm flex flex-wrap items-center gap-2">
        <span className="text-link font-medium">{serviceLabel}</span>
        {industryLabel ? (
          <>
            <span aria-hidden>·</span>
            <span>{industryLabel}</span>
          </>
        ) : null}
      </div>

      <p className="text-h3 text-fg font-semibold tracking-tight text-balance">
        {frontmatter.headlineMetric}
      </p>

      <h3 className="text-h4 text-fg font-semibold tracking-tight text-pretty">
        {frontmatter.title}
      </h3>

      <p className="text-body-sm text-fg-muted text-pretty">{frontmatter.description}</p>

      <span className="text-fg-muted text-body-sm mt-auto flex items-center justify-between pt-2">
        <span>{frontmatter.client}</span>
        <ArrowRight className="group-hover:text-link size-4 transition-colors" />
      </span>
    </Link>
  );
}
