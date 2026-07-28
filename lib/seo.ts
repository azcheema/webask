import type { Metadata } from "next";

import { env } from "@/lib/env";

const SITE_NAME = "Naxdor";

const DEFAULT_DESCRIPTION =
  "Naxdor builds high-performance websites, e-commerce, web apps, AI integrations, and SEO programs for SMBs — with deep specialization in aesthetic, dental, and beauty/wellness clinics.";

const TWITTER_HANDLE = "@naxdor";

export type BuildMetadataOptions = {
  /** Page-specific title. The root layout's `title.template` appends " · Naxdor". */
  title?: string;
  /** Page-specific meta description. Falls back to the sitewide default. */
  description?: string;
  /** Path relative to site root, e.g. "/services/web-development". Defaults to "/". */
  path?: string;
  /**
   * Explicit OG image URL (relative or absolute). When omitted, a per-page card
   * is generated at `/og?title=<title>` (see `app/og/route.tsx`). Pass
   * `/opengraph-image` to use the bespoke sitewide default instead.
   */
  image?: string;
  /** Small uppercase label rendered above the title on the generated OG card. */
  eyebrow?: string;
  /** OpenGraph type. */
  type?: "website" | "article";
  /** When true, emit `robots: noindex, follow` — used for programmatic pages pre-promotion. */
  noindex?: boolean;
};

/**
 * Build the URL for the parametrized per-page OG card. URLSearchParams handles
 * encoding so titles containing `&`, spaces, etc. round-trip safely.
 */
function buildOgImageUrl(
  { title, eyebrow }: { title: string; eyebrow: string | undefined },
  origin: string,
): string {
  const params = new URLSearchParams({ title });
  if (eyebrow) params.set("eyebrow", eyebrow);
  return new URL(`/og?${params.toString()}`, origin).toString();
}

/**
 * Single source of truth for page metadata. Every `generateMetadata` /
 * `export const metadata` in the app should flow through this — never
 * inline title/description/canonical.
 */
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
  eyebrow,
  type = "website",
  noindex = false,
}: BuildMetadataOptions = {}): Metadata {
  const siteOrigin = env.NEXT_PUBLIC_SITE_URL;
  const canonical = new URL(path, siteOrigin).toString();
  const renderedTitle = title ?? SITE_NAME;
  // Explicit image wins; otherwise generate a per-page card from the title.
  const ogImage = image
    ? new URL(image, siteOrigin).toString()
    : buildOgImageUrl({ title: renderedTitle, eyebrow }, siteOrigin);

  return {
    metadataBase: new URL(siteOrigin),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      title: renderedTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: renderedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      title: renderedTitle,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const SITE = {
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  twitter: TWITTER_HANDLE,
} as const;
