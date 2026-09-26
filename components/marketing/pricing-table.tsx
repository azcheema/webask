import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/data/services";
import { formatGBP, pricingQualifier, VAT_NOTE } from "@/lib/pricing";

type PricingTableProps = {
  /** The live catalogue (`liveServices`), in canonical display order. */
  readonly services: ReadonlyArray<Service>;
  /**
   * Bare slugs (not paths) whose `/services/[slug]` detail page is built AND
   * live — `listLiveServiceSlugs()`. Only these rows link out, so a row whose
   * page is unwritten or still a draft renders as plain text and nothing
   * viewport-prefetches a 404 or a `noindex` page.
   */
  readonly builtSlugs: ReadonlyArray<string>;
};

// Shared column template — keeps the desktop header row aligned with each
// service row. Mobile stacks (single column) with per-cell labels. Two columns
// by design: service + starting price only (no upper limit / range column).
const ROW_GRID = "md:grid-cols-[2fr_1fr]";

/**
 * The all-9 price catalog. Lean by design — the surrounding copy points to each
 * service page for the "what's included" detail, so this stays a scannable
 * overview, not nine full `PricingCard`s. Renders as an aligned three-column
 * table on desktop and stacked, labelled rows on mobile (no horizontal scroll).
 */
export function PricingTable({ services, builtSlugs }: PricingTableProps) {
  const built = new Set(builtSlugs);

  return (
    <div className="border-border bg-surface overflow-hidden rounded-3xl border">
      <div
        className={`text-fg text-body-sm border-border hidden gap-4 border-b px-6 py-4 font-semibold md:grid ${ROW_GRID}`}
      >
        <span>Service</span>
        <span>Starting price</span>
      </div>
      {/* Stated once for the whole table rather than repeated on nine rows —
       * hedged until decision gate D2 resolves (lib/pricing.ts VAT_NOTE). */}
      <p className="text-fg-muted text-caption border-border border-b px-6 py-3">
        All starting prices in GBP, {VAT_NOTE.toLowerCase()}.
      </p>
      <ul>
        {services.map((service) => {
          const { slug, name, summary, pricing } = service;
          const isBuilt = built.has(slug);
          return (
            <li
              key={slug}
              className={`border-border grid gap-4 border-b px-6 py-5 last:border-0 md:items-baseline ${ROW_GRID}`}
            >
              <div className="flex flex-col gap-1">
                {isBuilt ? (
                  <Link
                    href={`/services/${slug}`}
                    className="text-link text-body inline-flex w-fit items-center gap-1 font-semibold hover:underline"
                  >
                    {name}
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                ) : (
                  <span className="text-fg text-body font-semibold">{name}</span>
                )}
                <span className="text-fg-muted text-body-sm text-pretty">{summary}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-fg-muted text-caption font-medium tracking-wide uppercase md:hidden">
                  Starting price
                </span>
                <span className="text-fg text-body font-semibold">
                  {formatGBP(pricing.startingAmount)}
                </span>
                <span className="text-fg-muted text-body-sm">{pricingQualifier(pricing)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
