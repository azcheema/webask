import Link from "next/link";
import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page not found",
  description: "The page you’re looking for doesn’t exist or has moved.",
  noindex: true,
});

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-fg-muted text-sm font-medium tracking-widest uppercase">404</p>
      <h1 className="text-fg mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="text-fg-muted mt-6 max-w-md text-base leading-relaxed">
        The page you’re looking for doesn’t exist or has moved. Try heading back to the home page or
        get in touch and we’ll point you to the right place.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-primary text-primary-foreground hover:bg-brand-600 focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-lg px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="text-fg hover:bg-muted focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-lg border border-(--color-border) px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
