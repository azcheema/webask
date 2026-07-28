import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import type { z } from "zod";

/*
 * Generic MDX loader. Each content type (services, blog, case-studies,
 * industries, locations) passes its own zod schema for frontmatter
 * validation. Bad content fails the build, not production.
 *
 * Layout: content/<collection>/<slug>.mdx
 */

const CONTENT_ROOT = path.resolve(process.cwd(), "content");

export type LoadedMdx<TFrontmatter> = {
  slug: string;
  frontmatter: TFrontmatter;
  /** Raw MDX body (frontmatter stripped). Use with `next-mdx-remote/rsc` to render. */
  content: string;
};

/**
 * Read and validate a single MDX file at `content/<collection>/<slug>.mdx`.
 * Throws if the file is missing or the frontmatter fails schema validation.
 */
export async function getMdx<TSchema extends z.ZodTypeAny>(
  collection: string,
  slug: string,
  schema: TSchema,
): Promise<LoadedMdx<z.infer<TSchema>>> {
  const filePath = path.join(CONTENT_ROOT, collection, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    const issues = JSON.stringify(parsed.error.flatten().fieldErrors, null, 2);
    throw new Error(`Invalid frontmatter in ${collection}/${slug}.mdx:\n${issues}`);
  }
  return { slug, frontmatter: parsed.data, content };
}

/**
 * List every MDX file in a collection with parsed + validated frontmatter.
 * Missing collection directory returns an empty array (used during Phase 0
 * scaffolding before content lands).
 */
export async function listMdx<TSchema extends z.ZodTypeAny>(
  collection: string,
  schema: TSchema,
): Promise<Array<LoadedMdx<z.infer<TSchema>>>> {
  const dir = path.join(CONTENT_ROOT, collection);
  let files: string[];
  try {
    files = await fs.readdir(dir);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getMdx(collection, slug, schema);
    }),
  );
}
