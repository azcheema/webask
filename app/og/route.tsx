import { ImageResponse } from "next/og";
import { z } from "zod";

import { normalizeOgTitle, OG_SIZE, OgImageDocument } from "@/lib/og";

/*
 * Per-page Open Graph image. buildMetadata() in lib/seo.ts points every page's
 * og:image / twitter:image at `/og?title=<page title>` (see § OG image), so a
 * unique share card is produced for each page — including the thousands of
 * programmatic city/service pages arriving in Phase 2 — with zero per-page
 * wiring. The default sitewide card lives at /opengraph-image; both render the
 * shared template in lib/og.tsx.
 *
 * Query-param driven, so the response can't be prerendered at build.
 */
export const dynamic = "force-dynamic";

const OG_EYEBROW_MAX = 40;

const ParamsSchema = z.object({
  title: z.string().optional(),
  // Drop an over-long or empty eyebrow rather than failing the whole image.
  eyebrow: z.string().trim().min(1).max(OG_EYEBROW_MAX).optional().catch(undefined),
});

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const parsed = ParamsSchema.safeParse({
    title: searchParams.get("title") ?? undefined,
    eyebrow: searchParams.get("eyebrow") ?? undefined,
  });

  // The schema only ever soft-fails (eyebrow .catch), but guard defensively so
  // a malformed request still yields a valid card instead of a 500 — a broken
  // og:image breaks the share preview on every platform.
  const title = normalizeOgTitle(parsed.success ? parsed.data.title : undefined);
  const eyebrow = parsed.success ? parsed.data.eyebrow : undefined;

  return new ImageResponse(<OgImageDocument title={title} eyebrow={eyebrow} />, {
    ...OG_SIZE,
    headers: {
      // Title-keyed and effectively immutable; matches the cache posture of
      // Next's built-in opengraph-image convention.
      "Cache-Control": "public, immutable, no-transform, max-age=31536000",
    },
  });
}
