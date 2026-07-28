import { ImageResponse } from "next/og";

import { OG_CONTENT_TYPE, OG_DEFAULT_TITLE, OG_SIZE, OgImageDocument } from "@/lib/og";

/*
 * Default sitewide OG image (also the home card — the home page pins its
 * og:image to this for the stronger tagline composition). Per-page cards are
 * served by app/og/route.tsx; both render the shared template in lib/og.tsx.
 */

export const alt = "WebAsk — Digital services for UK small businesses";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return new ImageResponse(
    <OgImageDocument
      title={OG_DEFAULT_TITLE}
      subtitle="Websites, e-commerce, web apps, AI integration, SEO."
    />,
    size,
  );
}
