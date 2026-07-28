import Link from "next/link";

import { CookieSettingsButton } from "@/components/analytics/cookie-settings-button";
import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";
import {
  BRAND_TAGLINE,
  FOOTER_COMPANY_NAV,
  FOOTER_LEGAL_NAV,
  INDUSTRY_NAV,
  isBuiltRoute,
  LOCATION_NAV,
  SERVICE_NAV,
  type NavLink,
} from "./_nav-data";

const FOOTER_COLUMNS: ReadonlyArray<{
  label: string;
  items: readonly NavLink[];
}> = [
  { label: "Services", items: SERVICE_NAV.items },
  { label: "Industries", items: INDUSTRY_NAV.items },
  { label: "Locations", items: LOCATION_NAV.items },
  { label: "Company", items: FOOTER_COMPANY_NAV },
];

type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer data-slot="site-footer" className={cn("border-border bg-bg mt-16 border-t", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <BrandMark />
            <p className="text-fg-muted mt-3 max-w-xs text-sm">{BRAND_TAGLINE}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-8">
            {FOOTER_COLUMNS.map((col) => (
              <FooterColumn key={col.label} label={col.label} items={col.items} />
            ))}
          </nav>
        </div>

        <div className="border-border mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-fg-muted text-xs">© {year} Naxdor. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 text-xs">
            {FOOTER_LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
                  className="text-fg-muted hover:text-fg transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ label, items }: { label: string; items: readonly NavLink[] }) {
  return (
    <div>
      <h2 className="text-fg text-sm font-semibold">{label}</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href}>
            {/* Built routes link out; the rest show as non-interactive labels
                so the footer keeps its full breadth with no dead links. */}
            {isBuiltRoute(item.href) ? (
              <Link
                href={item.href}
                prefetch={false}
                className="text-fg-muted hover:text-fg text-sm transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-fg-muted cursor-default text-sm">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
