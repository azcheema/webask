import Link from "next/link";

import { CookieSettingsButton } from "@/components/analytics/cookie-settings-button";
import { site } from "@/data/site";
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

        {/* UK statutory disclosure row (docs/04 § 6).
         * "WebAsk" is a trading name with no Companies House entry, so the real
         * provider's name, geographic address and email must be permanently
         * accessible — Electronic Commerce (EC Directive) Regulations 2002 and
         * Provision of Services Regulations 2009. The footer is the "permanent"
         * part; /legal/company-information carries the full version.
         *
         * The organisation and VAT numbers are deliberately NOT rendered
         * (founder instruction 2026-07-28 — data/site.ts). The address here is
         * the SWEDISH registered address: a legal disclosure, never a local-SEO
         * signal, and it must not appear on /contact. */}
        <div className="border-border text-fg-muted mt-12 border-t pt-6 text-xs text-pretty">
          <p>{site.entityDisclosure}</p>
          <p className="mt-1">
            Registered address: {site.address.street}, {site.address.postalCode} {site.address.city}
            , {site.address.country} ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-fg transition-colors">
              {site.email}
            </a>
          </p>
          {/* `inline-block` + vertical padding so the hit area clears WCAG 2.2
              target-size (24×24 CSS px). At 16px line-height the bare inline link
              measured 138×16 with only 21.2px of safe clickable space, which is
              what held Lighthouse's accessibility score at 0.96 sitewide — the
              footer renders on every page. The `mailto:` above is exempt under the
              "in a sentence or block of text" carve-out; this link is alone in its
              own paragraph, so it is not. */}
          <p className="mt-2">
            <Link
              href="/legal/company-information"
              prefetch={false}
              className="hover:text-fg inline-block py-1.5 underline underline-offset-2 transition-colors"
            >
              Full company information
            </Link>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-fg-muted text-xs">
            © {year} {site.name}. All rights reserved.
          </p>
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
