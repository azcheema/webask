import type { MetadataRoute } from "next";

import { listPublishedPostSummaries } from "@/lib/blog";
import { listPublishedCaseStudySummaries } from "@/lib/case-studies";
import { authoredLocations } from "@/data/locations";
import { promotedCombos } from "@/data/service-locations";
import { env } from "@/lib/env";

/*
 * Sitemap for the indexable marketing pages.
 *
 * Lists every static route that renders `index, follow`. Deliberately omits
 * `noindex` surfaces (`/dev/components`, draft blog posts) — a sitemap should
 * only advertise indexable URLs.
 *
 * Blog (Phase 3): the `/blog` index and topic archives are listed, plus every
 * **published** post (drafts ship `noindex` and are filtered out via
 * `listPublishedPostSummaries`, mirroring the programmatic `indexable` staging
 * below). Topic archives appear only once they have a published post, so the
 * sitemap never points at an empty cluster. This keeps everything in one
 * sitemap for now; a `sitemap-index.xml` split can come later if volume grows.
 */

type Entry = {
  readonly path: string;
  readonly priority: number;
  readonly changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: ReadonlyArray<Entry> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services/web-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/e-commerce", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/web-applications", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ui-ux-design", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/seo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/mobile-apps", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/crm", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ai-integration", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/maintenance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/aesthetic-clinics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/dental-practices", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/beauty-wellness-clinics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/locations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/free-audit", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/process", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookies", priority: 0.3, changeFrequency: "yearly" },
];

// Location hubs are DERIVED, not hardcoded: only areas with authored copy have a
// page, so listing one before Phase 2 writes it would put a 404 in the sitemap.
// Same self-hiding contract as the case-study routes below.
const LOCATION_ROUTES: ReadonlyArray<Entry> = authoredLocations.map((location) => ({
  path: `/locations/${location.slug}`,
  priority: 0.8,
  changeFrequency: "monthly",
}));

// Programmatic service × location pages enter the sitemap ONLY once promoted to
// `index, follow` (combo.indexable flipped in data/service-locations.ts after the
// manual review checklist). Empty at launch — every combo ships `noindex`.
const PROGRAMMATIC_ROUTES: ReadonlyArray<Entry> = promotedCombos.map((combo) => ({
  path: `/services/${combo.serviceSlug}/${combo.locationSlug}`,
  priority: 0.6,
  changeFrequency: "monthly",
}));

/** `/blog`, every published post, and the topic archives that hold one. */
async function blogRoutes(): Promise<Entry[]> {
  const publishedPosts = await listPublishedPostSummaries();

  const postRoutes: Entry[] = publishedPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const publishedTopics = [...new Set(publishedPosts.map((post) => post.frontmatter.topic))];
  const topicRoutes: Entry[] = publishedTopics.map((topic) => ({
    path: `/blog/topic/${topic}`,
    priority: 0.5,
    changeFrequency: "monthly",
  }));

  return [
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    ...postRoutes,
    ...topicRoutes,
  ];
}

/**
 * `/case-studies` + every published study. The engine ships content-agnostic and
 * self-hides: with no published study the index is a thin empty page (staged
 * `noindex`), so it's left out of the sitemap entirely — the index and its
 * studies enter together the moment the first founder-reviewed study publishes.
 */
async function caseStudyRoutes(): Promise<Entry[]> {
  const published = await listPublishedCaseStudySummaries();
  if (published.length === 0) return [];

  const studyRoutes: Entry[] = published.map((study) => ({
    path: `/case-studies/${study.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [{ path: "/case-studies", priority: 0.7, changeFrequency: "monthly" }, ...studyRoutes];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const lastModified = new Date();
  const entries: ReadonlyArray<Entry> = [
    ...ROUTES,
    ...LOCATION_ROUTES,
    ...PROGRAMMATIC_ROUTES,
    ...(await blogRoutes()),
    ...(await caseStudyRoutes()),
  ];
  return entries.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
