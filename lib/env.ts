import { z } from "zod";

/*
 * Validated environment variables. Read-only.
 *
 * Phase 0 only validates client-safe `NEXT_PUBLIC_*` vars. When the first
 * server-only secret lands (Resend in Phase 1), split into env.server.ts
 * + env.client.ts so secret references can't leak into client bundles.
 */
const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("http://localhost:3000")
    .describe("Public origin used for canonical URLs, sitemap, OG, JSON-LD @id values."),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  /**
   * Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). Public by design —
   * it ships in the page's gtag snippet. OPTIONAL + dormant: with no ID set
   * (local dev, preview before the property exists) GA4 simply never loads, so
   * the consent banner + cookieless Vercel Analytics still work. Validated here
   * server-side only — this module is imported solely by Server Components, so
   * zod never reaches the client bundle. The value is passed to the client
   * analytics provider as a plain prop.
   */
  NEXT_PUBLIC_GA_ID: z
    .string()
    .regex(/^G-[A-Z0-9]{6,}$/, 'GA4 Measurement ID must look like "G-XXXXXXXXXX"')
    .optional(),
});

const parsed = envSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
});

if (!parsed.success) {
  // Stringify zod errors readably for build logs.
  const formatted = JSON.stringify(parsed.error.flatten().fieldErrors, null, 2);
  throw new Error(`Invalid environment variables:\n${formatted}`);
}

export const env = parsed.data;
export type Env = typeof env;
