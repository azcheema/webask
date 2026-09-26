import { z } from "zod";

import { LIVE_SERVICE_SLUGS } from "@/data/services";
import { getMdx, listMdx, type LoadedMdx } from "@/lib/mdx";

/*
 * Server-only loader + frontmatter contract for the `services` MDX
 * collection. Catalog data (price, includes, FAQs, CTA) lives in
 * `data/services.ts`; this module owns the long-form body in
 * `content/services/<slug>.mdx`. Kept out of `data/services.ts` so the
 * `node:fs`-backed `lib/mdx` loader never leaks into client bundles that
 * import the catalog (e.g. the nav).
 */

const SERVICES_COLLECTION = "services";

/**
 * Frontmatter contract for `content/services/<slug>.mdx`. Bad frontmatter
 * fails the build, not production (validated in `lib/mdx`).
 */
export const serviceFrontmatterSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  /** ISO date (YYYY-MM-DD) of the last meaningful content change. */
  dateModified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Expected YYYY-MM-DD"),
});

export type ServiceFrontmatter = z.infer<typeof serviceFrontmatterSchema>;
export type ServiceContent = LoadedMdx<ServiceFrontmatter>;

/** Load + validate one service MDX file. Throws if missing or invalid. */
export function getServiceContent(slug: string): Promise<ServiceContent> {
  return getMdx(SERVICES_COLLECTION, slug, serviceFrontmatterSchema);
}

/**
 * Slugs of every service MDX file present in `content/services/`. Drives
 * `generateStaticParams`, so only services whose detail body is authored
 * prerender — the catalog in `data/services.ts` lists all 9, but the
 * `[service]` route builds just the ones with an MDX file (Web Dev in
 * Phase 1; the other 8 light up as they ship in Phase 2).
 */
export async function getServiceContentSlugs(): Promise<string[]> {
  const all = await listMdx(SERVICES_COLLECTION, serviceFrontmatterSchema);
  return all.map((entry) => entry.slug);
}

/**
 * MDX present AND `status: "live"` in the catalogue — the set every public
 * surface links to. A draft has a body and prerenders (`noindex`) for preview,
 * but the grid, the pricing table and the sitemap must not point at it.
 */
export async function listLiveServiceSlugs(): Promise<string[]> {
  const authored = await getServiceContentSlugs();
  return authored.filter((slug) => LIVE_SERVICE_SLUGS.has(slug));
}
