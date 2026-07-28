import readingTime from "reading-time";
import { z } from "zod";

import type { CrossLink } from "@/components/marketing/cross-link-grid";
import { getIndustryBySlug, INDUSTRY_SLUGS } from "@/data/industries";
import { getServiceBySlug, SERVICE_SLUGS } from "@/data/services";
import { team } from "@/data/team";
import { extractHeadings, type BlogTocItem } from "@/lib/blog";
import { getMdx, listMdx, type LoadedMdx } from "@/lib/mdx";

/*
 * Server-only loader + frontmatter contract for the `case-studies` MDX
 * collection — the proof half of the Phase 3 content engine. Mirrors `lib/blog`:
 * the `node:fs`-backed loader lives here so the fs import never leaks into client
 * bundles, and the TOC/heading helpers are shared with the blog (`extractHeadings`)
 * so anchor ids agree with the MDX `h2`/`h3` override the body renders through.
 *
 * Facets reuse the existing catalogs — `serviceSlug` (the service the study
 * demonstrates, also the JSON-LD `about` → Service) and an optional
 * `industrySlug` are validated against `data/services.ts` / `data/industries.ts`,
 * so a typo fails the build rather than shipping a dead facet.
 *
 * Self-hiding: the engine ships content-agnostic. Until a real, founder-reviewed
 * study lands, nothing public renders — `draft: true` keeps a study `noindex` and
 * out of the index grid + sitemap (mirrors the blog draft norm), and a second
 * `TODO(content-copy)` guard (the `data/portfolio.ts` convention) keeps a scaffold
 * template out of public listings even if its `draft` flag is flipped by mistake.
 * No fabricated case studies ship — a locked E-E-A-T rule (CLAUDE.md, phase-3 doc).
 */

const CASE_STUDY_COLLECTION = "case-studies";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Placeholder marker shared with `data/portfolio.ts` — a field still holding this is not real content. */
const TODO_MARKER = "TODO(content-copy)";

/**
 * Frontmatter contract for `content/case-studies/<slug>.mdx`. Bad frontmatter
 * fails the build, not production (validated in `lib/mdx`). The long-form
 * problem/approach/results narrative lives in the MDX body; these are the
 * structured fields the templates and JSON-LD read.
 */
export const caseStudyFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  /** ISO date (YYYY-MM-DD) the study was first published. */
  datePublished: z.string().regex(ISO_DATE, "Expected YYYY-MM-DD"),
  /** ISO date of the last meaningful edit. Falls back to `datePublished`. */
  dateModified: z.string().regex(ISO_DATE, "Expected YYYY-MM-DD").optional(),
  /** Author slug — must resolve in `data/team.ts` (else the author `Person` @id would dangle). */
  authorSlug: z.string().refine((value) => team.some((member) => member.slug === value), {
    message: `Unknown authorSlug — must be a slug in data/team.ts: ${team.map((m) => m.slug).join(", ")}`,
  }),
  /** The service this study demonstrates — must be a `data/services.ts` slug. Drives `about` → Service. */
  serviceSlug: z.string().refine((value) => SERVICE_SLUGS.includes(value), {
    message: `Unknown serviceSlug — must be one of: ${SERVICE_SLUGS.join(", ")}`,
  }),
  /** Optional vertical facet — must be a `data/industries.ts` slug when present. */
  industrySlug: z
    .string()
    .refine((value) => INDUSTRY_SLUGS.includes(value), {
      message: `Unknown industrySlug — must be one of: ${INDUSTRY_SLUGS.join(", ")}`,
    })
    .optional(),
  /** Client name, or an honest anonymised label ("Aesthetic clinic, Cheshire") where NDA'd. */
  client: z.string().min(1),
  /** The headline result — a real metric ("3.4× consultation bookings in 90 days"), never "we improved their site". */
  headlineMetric: z.string().min(1),
  /** Optional hero/OG image path relative to /public. Omit to auto-generate an OG card. */
  heroImage: z.string().optional(),
  /** Target keywords — surfaced in the case-study JSON-LD. */
  keywords: z.array(z.string()).optional(),
  /**
   * Review gate. `true` ⇒ `noindex` + excluded from the index grid and sitemap
   * (mirrors the blog draft norm) but still built + reachable at its own URL for
   * preview/review. Flip to `false` after founder review to publish.
   */
  draft: z.boolean().default(false),
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudyFrontmatterSchema>;

/** A fully-loaded study: validated frontmatter + body + derived reading-time + TOC. */
export type CaseStudy = LoadedMdx<CaseStudyFrontmatter> & {
  readonly readingTime: string;
  readonly toc: ReadonlyArray<BlogTocItem>;
};

/**
 * Listing-row shape: enough to render a `CaseStudyCard` + filter without the full
 * body. Service/industry display labels are resolved here (server-side) so the
 * card — which renders inside the `'use client'` filter — never imports the large
 * `data/services.ts` / `data/industries.ts` catalogs into the browser bundle
 * (the same bundle discipline `components/marketing/index.ts` documents for
 * `ContactForm`; `BlogCard` follows it via the tiny `data/blog.ts`).
 */
export type CaseStudySummary = {
  readonly slug: string;
  readonly frontmatter: CaseStudyFrontmatter;
  readonly readingTime: string;
  /** Resolved `serviceSlug` display name (falls back to the slug if unresolved). */
  readonly serviceLabel: string;
  /** Resolved `industrySlug` display name — absent when the study has no industry. */
  readonly industryLabel?: string;
};

/**
 * A study is "ready" once none of its reader-facing fields still hold a
 * `TODO(content-copy)` placeholder. Belt-and-suspenders with `draft`: it keeps
 * the scaffold template out of public listings even if `draft` is flipped to
 * `false` by mistake (same guard as `PortfolioStrip`'s `isReady`).
 */
function isReady(frontmatter: CaseStudyFrontmatter): boolean {
  return ![
    frontmatter.title,
    frontmatter.description,
    frontmatter.client,
    frontmatter.headlineMetric,
  ].some((value) => value.includes(TODO_MARKER));
}

/** Newest-first by `datePublished`; ties broken by slug for a stable order. */
function byNewest(a: CaseStudySummary, b: CaseStudySummary): number {
  const dateDelta = b.frontmatter.datePublished.localeCompare(a.frontmatter.datePublished);
  return dateDelta !== 0 ? dateDelta : a.slug.localeCompare(b.slug);
}

function toSummary(entry: LoadedMdx<CaseStudyFrontmatter>): CaseStudySummary {
  const service = getServiceBySlug(entry.frontmatter.serviceSlug);
  const industry = entry.frontmatter.industrySlug
    ? getIndustryBySlug(entry.frontmatter.industrySlug)
    : undefined;
  return {
    slug: entry.slug,
    frontmatter: entry.frontmatter,
    readingTime: readingTime(entry.content).text,
    serviceLabel: service?.name ?? entry.frontmatter.serviceSlug,
    ...(industry ? { industryLabel: industry.name } : {}),
  };
}

/** Load + validate one study, with reading-time + TOC derived. Throws if missing or invalid. */
export async function getCaseStudy(slug: string): Promise<CaseStudy> {
  const entry = await getMdx(CASE_STUDY_COLLECTION, slug, caseStudyFrontmatterSchema);
  return {
    ...entry,
    readingTime: readingTime(entry.content).text,
    toc: extractHeadings(entry.content),
  };
}

/** Slugs of every study file (drafts + scaffolds included) — drives `generateStaticParams`. */
export async function getCaseStudySlugs(): Promise<string[]> {
  const all = await listMdx(CASE_STUDY_COLLECTION, caseStudyFrontmatterSchema);
  return all.map((entry) => entry.slug);
}

/** Every study summary, newest first — drafts + scaffolds included (for preview/listing). */
export async function listCaseStudySummaries(): Promise<CaseStudySummary[]> {
  const all = await listMdx(CASE_STUDY_COLLECTION, caseStudyFrontmatterSchema);
  return all.map(toSummary).sort(byNewest);
}

/**
 * Published study summaries, newest first — non-draft AND ready (no placeholder
 * markers). This is the public surface: the index grid, the sitemap, and related
 * links all read from here, so an unreviewed scaffold can never leak.
 */
export async function listPublishedCaseStudySummaries(): Promise<CaseStudySummary[]> {
  const all = await listCaseStudySummaries();
  return all.filter((study) => !study.frontmatter.draft && isReady(study.frontmatter));
}

const SIBLING_COUNT = 2;

/**
 * "More proof" links for a study: up to `SIBLING_COUNT` sibling studies
 * (same-service first, then newest from other services) followed by the study's
 * anchor service page. Pure + data-driven — an unresolved service slug drops the
 * card rather than throwing, and the `CrossLinkGrid` self-hides when empty.
 * `allSummaries` is expected published + newest-first.
 */
export function getCaseStudyRelatedLinks(
  current: CaseStudySummary,
  allSummaries: ReadonlyArray<CaseStudySummary>,
): CrossLink[] {
  const others = allSummaries.filter((study) => study.slug !== current.slug);
  const sameService = others.filter(
    (study) => study.frontmatter.serviceSlug === current.frontmatter.serviceSlug,
  );
  const otherServices = others.filter(
    (study) => study.frontmatter.serviceSlug !== current.frontmatter.serviceSlug,
  );

  const siblingLinks: CrossLink[] = [...sameService, ...otherServices]
    .slice(0, SIBLING_COUNT)
    .map((study) => ({
      href: `/case-studies/${study.slug}`,
      title: study.frontmatter.title,
      subtitle: study.frontmatter.headlineMetric,
    }));

  const service = getServiceBySlug(current.frontmatter.serviceSlug);
  if (!service) return siblingLinks;

  return [
    ...siblingLinks,
    { href: `/services/${service.slug}`, title: service.name, subtitle: service.summary },
  ];
}
