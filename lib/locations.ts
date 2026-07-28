import { z } from "zod";

import { getMdx, listMdx, type LoadedMdx } from "@/lib/mdx";

/*
 * Server-only loader + frontmatter contract for the `locations` MDX
 * collection. Structured enrichment (meta, hero, FAQs, geo, neighborhoods,
 * nearby cities) lives in `data/locations.ts`; this module owns the long-form,
 * genuinely city-specific hub body in `content/locations/<slug>.mdx`. Kept out
 * of `data/locations.ts` so the `node:fs`-backed `lib/mdx` loader never leaks
 * into client bundles that import the catalog. Mirrors `lib/industries.ts`.
 */

const LOCATIONS_COLLECTION = "locations";

/**
 * Frontmatter contract for `content/locations/<slug>.mdx`. Bad frontmatter
 * fails the build, not production (validated in `lib/mdx`).
 */
export const locationFrontmatterSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  /** ISO date (YYYY-MM-DD) of the last meaningful content change. */
  dateModified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Expected YYYY-MM-DD"),
});

export type LocationFrontmatter = z.infer<typeof locationFrontmatterSchema>;
export type LocationContent = LoadedMdx<LocationFrontmatter>;

/** Load + validate one location MDX file. Throws if missing or invalid. */
export function getLocationContent(slug: string): Promise<LocationContent> {
  return getMdx(LOCATIONS_COLLECTION, slug, locationFrontmatterSchema);
}

/**
 * Slugs of every location MDX file present in `content/locations/`. Drives
 * `generateStaticParams`, so only metros whose hub body is authored prerender.
 */
export async function getLocationContentSlugs(): Promise<string[]> {
  const all = await listMdx(LOCATIONS_COLLECTION, locationFrontmatterSchema);
  return all.map((entry) => entry.slug);
}
