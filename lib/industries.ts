import { z } from "zod";

import { getMdx, listMdx, type LoadedMdx } from "@/lib/mdx";

/*
 * Server-only loader + frontmatter contract for the `industries` MDX
 * collection. Catalog data (meta, hero, FAQs, related services, schema
 * audienceType) lives in `data/industries.ts`; this module owns the
 * long-form vertical body in `content/industries/<slug>.mdx`. Kept out of
 * `data/industries.ts` so the `node:fs`-backed `lib/mdx` loader never leaks
 * into client bundles that import the catalog. Mirrors `lib/services.ts`.
 */

const INDUSTRIES_COLLECTION = "industries";

/**
 * Frontmatter contract for `content/industries/<slug>.mdx`. Bad frontmatter
 * fails the build, not production (validated in `lib/mdx`).
 */
export const industryFrontmatterSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  /** ISO date (YYYY-MM-DD) of the last meaningful content change. */
  dateModified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Expected YYYY-MM-DD"),
});

export type IndustryFrontmatter = z.infer<typeof industryFrontmatterSchema>;
export type IndustryContent = LoadedMdx<IndustryFrontmatter>;

/** Load + validate one industry MDX file. Throws if missing or invalid. */
export function getIndustryContent(slug: string): Promise<IndustryContent> {
  return getMdx(INDUSTRIES_COLLECTION, slug, industryFrontmatterSchema);
}

/**
 * Slugs of every industry MDX file present in `content/industries/`. Drives
 * `generateStaticParams`, so only industries whose body is authored prerender.
 */
export async function getIndustryContentSlugs(): Promise<string[]> {
  const all = await listMdx(INDUSTRIES_COLLECTION, industryFrontmatterSchema);
  return all.map((entry) => entry.slug);
}
