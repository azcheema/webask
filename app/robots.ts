import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

/*
 * robots.txt per docs/strategy/seo-strategy.md § Robots.txt.
 *
 * We intentionally do NOT block AI crawlers (GPTBot, CCBot, etc.) at
 * launch — visibility in AI search surfaces is part of the strategy.
 */
export default function robots(): MetadataRoute.Robots {
  const base = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/(app)/", // reserved for Phase 6 client portal
          "/dev/", // internal dev surfaces (component gallery, future debug routes)
          "/*?*", // URL params — canonical handles them
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
