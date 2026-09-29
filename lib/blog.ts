import readingTime from "reading-time";
import { z } from "zod";

import { blogTopicSlugs } from "@/data/blog";
import { INDUSTRY_SLUGS } from "@/data/industries";
import { REGULATOR_SLUGS } from "@/data/regulators";
import { team } from "@/data/team";
import { getMdx, listMdx, type LoadedMdx } from "@/lib/mdx";

/*
 * Server-only loader + frontmatter contract for the `blog` MDX collection.
 * Topic taxonomy (the closed cluster list + anchor-service map) lives in the
 * client-safe `data/blog.ts`; this module owns the long-form body in
 * `content/blog/<slug>.mdx` and the `node:fs`-backed loader, so the fs import
 * never leaks into client bundles.
 *
 * Reading time is computed from the raw MDX body, and the table-of-contents is
 * extracted with the SAME `slugifyHeading` the MDX `h2`/`h3` override uses to
 * stamp ids — so every TOC anchor resolves to a real heading id.
 */

const BLOG_COLLECTION = "blog";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Every author a byline can resolve — `data/team.ts` is the only source. */
const AUTHOR_SLUGS: ReadonlyArray<string> = team.map((member) => member.slug);

/**
 * Frontmatter contract for `content/blog/<slug>.mdx`. Bad frontmatter fails the
 * build, not production (validated in `lib/mdx`).
 */
export const blogFrontmatterSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    /** ISO date (YYYY-MM-DD) the post was first published. */
    datePublished: z.string().regex(ISO_DATE, "Expected YYYY-MM-DD"),
    /**
     * ISO date of the last meaningful edit — required, and never earlier than
     * `datePublished` (checked below). Equal to `datePublished` on first
     * publish; it drives `Article.dateModified`, the byline's "Updated" line and
     * the sitemap `lastmod`, so it moves on every substantive edit.
     */
    dateModified: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "dateModified is required: set it equal to datePublished on first publish"
            : 'dateModified must be a quoted "YYYY-MM-DD" string',
      })
      .regex(ISO_DATE, "Expected YYYY-MM-DD"),
    /**
     * Author slug — must resolve in `data/team.ts`. A typo would otherwise drop
     * the byline and the `Person` node and leave `Article.author` dangling.
     */
    authorSlug: z.string().refine((value) => AUTHOR_SLUGS.includes(value), {
      message: `Unknown author — must be one of: ${AUTHOR_SLUGS.join(", ")}`,
    }),
    /** Cluster slug — must be one of `data/blog.ts` `blogTopics`. */
    topic: z.string().refine((value) => blogTopicSlugs.includes(value), {
      message: `Unknown topic — must be one of: ${blogTopicSlugs.join(", ")}`,
    }),
    /**
     * The `/industries/<slug>` page this post serves, if any. Adds that page's
     * card to "Related reading" — the Compliance → Industry link docs/08 § 1
     * requires, since compliance posts have no anchor service.
     */
    industrySlug: z
      .string()
      .refine((value) => INDUSTRY_SLUGS.includes(value), {
        message: `Unknown industry — must be one of: ${INDUSTRY_SLUGS.join(", ")}`,
      })
      .optional(),
    /**
     * Regulators, codes and Acts the post discusses, from the closed registry in
     * `data/regulators.ts`. Emitted as inline `Article.mentions` nodes
     * (docs/08 § 5).
     */
    mentions: z
      .array(
        z.string().refine((value) => REGULATOR_SLUGS.includes(value), {
          message: `Unknown regulator — must be one of: ${REGULATOR_SLUGS.join(", ")}`,
        }),
      )
      .refine((values) => new Set(values).size === values.length, {
        message: "mentions lists a regulator twice",
      })
      .optional(),
    /** Optional hero/OG image path relative to /public. Omit to auto-generate an OG card. */
    heroImage: z.string().optional(),
    /** Target keywords — surfaced in `Article` JSON-LD. */
    keywords: z.array(z.string()).optional(),
    /**
     * Review gate. `true` ⇒ the post renders `noindex` and stays out of the
     * sitemap (mirrors the programmatic `indexable` staging norm) but still builds
     * and lists, so it can be previewed at its real URL before publishing. Flip to
     * `false` after human review to make it indexable.
     */
    draft: z.boolean().default(false),
  })
  // ISO dates compare correctly as strings. zod 4 still runs this refine when a
  // date has failed its regex, so skip it then: the regex error is the real one.
  .refine(
    (fm) =>
      !ISO_DATE.test(fm.datePublished) ||
      !ISO_DATE.test(fm.dateModified) ||
      fm.dateModified >= fm.datePublished,
    {
      message: "dateModified must not be earlier than datePublished",
      path: ["dateModified"],
    },
  );

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

/** One entry in a post's table of contents. */
export type BlogTocItem = {
  readonly depth: 2 | 3;
  readonly text: string;
  readonly id: string;
};

/** A fully-loaded post: validated frontmatter + body + derived reading-time + TOC. */
export type BlogPost = LoadedMdx<BlogFrontmatter> & {
  readonly readingTime: string;
  readonly toc: ReadonlyArray<BlogTocItem>;
};

/** Listing-row shape: enough to render a `BlogCard` without the full body. */
export type BlogPostSummary = {
  readonly slug: string;
  readonly frontmatter: BlogFrontmatter;
  readonly readingTime: string;
};

/**
 * GitHub-style heading slug. Lowercases, drops punctuation, and hyphenates
 * whitespace. Shared by `extractHeadings` (TOC hrefs) and the MDX `h2`/`h3`
 * override (heading ids) so the two always agree.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Strip the inline markdown an `h2`/`h3` line may carry so display text + slug match the rendered DOM. */
function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // [label](url) → label
    .replace(/[`*_]/g, "") // code / emphasis markers
    .trim();
}

/**
 * Pull the `h2`/`h3` headings out of a raw MDX body, skipping fenced code blocks
 * (so a `## ` inside a ```` ``` ```` sample isn't mistaken for a heading).
 */
export function extractHeadings(content: string): BlogTocItem[] {
  const items: BlogTocItem[] = [];
  let inFence = false;

  for (const line of content.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    const depth = match[1]?.length === 3 ? 3 : 2;
    const text = stripInlineMarkdown(match[2] ?? "");
    if (text.length === 0) continue;

    items.push({ depth, text, id: slugifyHeading(text) });
  }

  return items;
}

/** Newest-first by `datePublished`; ties broken by slug for a stable order. */
function byNewest(a: BlogPostSummary, b: BlogPostSummary): number {
  const dateDelta = b.frontmatter.datePublished.localeCompare(a.frontmatter.datePublished);
  return dateDelta !== 0 ? dateDelta : a.slug.localeCompare(b.slug);
}

function toSummary(entry: LoadedMdx<BlogFrontmatter>): BlogPostSummary {
  return {
    slug: entry.slug,
    frontmatter: entry.frontmatter,
    readingTime: readingTime(entry.content).text,
  };
}

/** Load + validate one post, with reading-time + TOC derived. Throws if missing or invalid. */
export async function getPost(slug: string): Promise<BlogPost> {
  const entry = await getMdx(BLOG_COLLECTION, slug, blogFrontmatterSchema);
  return {
    ...entry,
    readingTime: readingTime(entry.content).text,
    toc: extractHeadings(entry.content),
  };
}

/** Slugs of every post file (drafts included) — drives `generateStaticParams`. */
export async function getPostSlugs(): Promise<string[]> {
  const all = await listMdx(BLOG_COLLECTION, blogFrontmatterSchema);
  return all.map((entry) => entry.slug);
}

/** Every post summary, newest first — drafts included (for preview/listing). */
export async function listPostSummaries(): Promise<BlogPostSummary[]> {
  const all = await listMdx(BLOG_COLLECTION, blogFrontmatterSchema);
  return all.map(toSummary).sort(byNewest);
}

/** Published (non-draft) post summaries, newest first — used by the sitemap. */
export async function listPublishedPostSummaries(): Promise<BlogPostSummary[]> {
  const all = await listPostSummaries();
  return all.filter((post) => !post.frontmatter.draft);
}

/**
 * Published post summaries in a given topic, newest first. Drafts are excluded:
 * public listings must not surface unreviewed posts, and the topic archive that
 * lists them is itself indexable (a draft only reaches readers at its own
 * `noindex` URL — see the `draft` frontmatter contract).
 */
export async function listPublishedPostSummariesByTopic(topic: string): Promise<BlogPostSummary[]> {
  const all = await listPublishedPostSummaries();
  return all.filter((post) => post.frontmatter.topic === topic);
}
