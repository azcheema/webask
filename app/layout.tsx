import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/lib/env";
import { buildGraph, organizationNode, renderJsonLd, websiteNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Mono is used only for occasional inline code (MDX / gallery), never for the
  // LCP element — don't preload it on every page. The @font-face still loads
  // on demand where the variable is actually applied.
  preload: false,
});

export const metadata: Metadata = {
  ...buildMetadata(),
  title: {
    default: "WebAsk — Digital services for UK small businesses",
    template: "%s · WebAsk",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0B14" },
  ],
};

const sitewideJsonLd = renderJsonLd(buildGraph(organizationNode(), websiteNode()));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // en-GB, not en: British English is a deliberate ranking/relevance signal
      // for a .co.uk ccTLD, not a cosmetic choice (docs/01 § content-guidelines).
      lang="en-GB"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          // Pre-serialized + script-tag-escaped in lib/jsonld.ts.
          dangerouslySetInnerHTML={{ __html: sitewideJsonLd }}
        />
        <ThemeProvider>
          <AnalyticsProvider
            gaId={env.NEXT_PUBLIC_GA_ID}
            clarityId={env.NEXT_PUBLIC_CLARITY_ID}
            isVercel={process.env.VERCEL === "1"}
          >
            <a
              href="#main"
              className="bg-brand-500 text-fg-on-brand focus-visible:ring-ring sr-only z-50 rounded-md px-3 py-2 text-sm font-medium focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Skip to content
            </a>
            <SiteHeader />
            <main id="main" className="flex flex-1 flex-col">
              {children}
            </main>
            <SiteFooter />
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
