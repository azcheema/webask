import type { NextConfig } from "next";

import { toNextRedirects } from "@/lib/redirects";

// Baseline security headers applied to every response. HSTS is left to Vercel's
// platform default (max-age=63072000); includeSubDomains/preload are deliberately
// not set here (hard to reverse + would force every subdomain to HTTPS).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  // `trailingSlash` is deliberately LEFT UNSET (defaults to false). Every legacy
  // WordPress URL's first hop is Next's own built-in `/:path+/` → `/:path+` 308,
  // which only exists while this is false. See lib/redirects.ts before changing it.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Legacy WordPress permalink map — the typed source of truth is lib/redirects.ts,
  // gated by scripts/check-redirects.ts and proven by e2e/redirects.spec.ts.
  async redirects() {
    return toNextRedirects();
  },
};

export default nextConfig;
