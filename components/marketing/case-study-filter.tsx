"use client";

import { useState } from "react";

import type { CaseStudySummary } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

import { CaseStudyCard } from "./case-study-card";

/** A selectable facet — a service or industry present in the published studies. */
export type CaseStudyFacet = {
  readonly slug: string;
  readonly label: string;
};

type CaseStudyFilterProps = {
  readonly studies: ReadonlyArray<CaseStudySummary>;
  readonly serviceFacets: ReadonlyArray<CaseStudyFacet>;
  readonly industryFacets: ReadonlyArray<CaseStudyFacet>;
};

/**
 * Client-side filterable case-study grid. Filters by service and industry in the
 * browser — deliberately NO URL params, so the indexed view stays a single
 * canonical `/case-studies` URL (per the Phase 3 spec: faceted query URLs would
 * dilute the index with near-duplicate crawlable pages). A facet row only renders
 * when there's more than one option to choose from.
 */
export function CaseStudyFilter({ studies, serviceFacets, industryFacets }: CaseStudyFilterProps) {
  const [service, setService] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);

  const filtered = studies.filter(
    (study) =>
      (service === null || study.frontmatter.serviceSlug === service) &&
      (industry === null || study.frontmatter.industrySlug === industry),
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        {serviceFacets.length > 1 ? (
          <FacetRow
            label="Filter by service"
            facets={serviceFacets}
            selected={service}
            onSelect={setService}
          />
        ) : null}
        {industryFacets.length > 1 ? (
          <FacetRow
            label="Filter by industry"
            facets={industryFacets}
            selected={industry}
            onSelect={setIndustry}
          />
        ) : null}
      </div>

      {filtered.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study) => (
            <li key={study.slug}>
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-fg-muted text-body-lg" role="status">
          No case studies match that combination yet.
        </p>
      )}
    </div>
  );
}

type FacetRowProps = {
  readonly label: string;
  readonly facets: ReadonlyArray<CaseStudyFacet>;
  readonly selected: string | null;
  readonly onSelect: (slug: string | null) => void;
};

function FacetRow({ label, facets, selected, onSelect }: FacetRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={label}>
      <FacetChip label="All" active={selected === null} onClick={() => onSelect(null)} />
      {facets.map((facet) => (
        <FacetChip
          key={facet.slug}
          label={facet.label}
          active={selected === facet.slug}
          onClick={() => onSelect(facet.slug)}
        />
      ))}
    </div>
  );
}

function FacetChip({
  label,
  active,
  onClick,
}: {
  readonly label: string;
  readonly active: boolean;
  readonly onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "text-body-sm inline-flex rounded-full border px-3 py-1 transition-colors",
        active
          ? "border-brand-500 bg-brand-500 text-fg-on-brand"
          : "border-border text-fg-muted hover:border-brand-500/40 hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
