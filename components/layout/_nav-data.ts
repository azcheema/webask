/**
 * Sitewide navigation data.
 *
 * Single source of truth consumed by `site-header` (desktop mega-menu),
 * `mobile-nav` (sheet accordion), and `site-footer` (link columns). Hrefs
 * are the canonical Phase 2 destinations; the pages light up as they ship.
 *
 * Superseded in Phase 1 by the richer `data/services.ts` + `data/industries.ts`
 * catalogs (with descriptions, pricing, icons). This module stays as the
 * nav-only subset until those catalogs land, at which point it re-exports
 * derived shapes from them.
 *
 * Phase-1/2 carry-forward — `<Link prefetch={false}>` is set everywhere nav
 * data is consumed, because prefetching a route that doesn't exist yet writes
 * a 404 to the browser console and that fails Lighthouse's `errors-in-console`
 * audit (Best Practices = 100 budget). Drop the override per-route as each
 * destination page ships.
 */

export type NavLink = {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
};

export type NavSection = {
  readonly label: string;
  readonly href: string;
  readonly items: readonly NavLink[];
};

export const SERVICE_NAV: NavSection = {
  label: "Services",
  href: "/services",
  items: [
    {
      label: "Web Development",
      href: "/services/web-development",
      description: "Custom marketing sites and product surfaces engineered for performance.",
    },
    {
      label: "E-Commerce",
      href: "/services/ecommerce-development",
      description: "Storefronts that convert — Shopify, custom, or headless.",
    },
    {
      label: "Web Applications",
      href: "/services/web-app-development",
      description: "Internal tools, dashboards, and customer portals.",
    },
    {
      label: "UI / UX Design",
      href: "/services/ui-ux-design",
      description: "Research-led design systems and conversion-grade interfaces.",
    },
    {
      label: "SEO",
      href: "/services/seo",
      description: "Technical, on-page, and content SEO built for measurable rankings.",
    },
    {
      label: "Mobile Apps",
      href: "/services/mobile-app-development",
      description: "Native and cross-platform apps that ship to the App Store.",
    },
    {
      label: "CRM",
      href: "/services/crm-automation",
      description: "GoHighLevel, HubSpot, and custom CRM implementation and migration.",
    },
    {
      label: "AI Integration",
      href: "/services/ai-integration",
      description: "Voice agents, chatbots, and workflow automation that actually ship.",
    },
    {
      label: "Maintenance",
      href: "/services/maintenance-support",
      description: "Ongoing site upkeep, monitoring, and incremental improvements.",
    },
  ],
} as const;

export const INDUSTRY_NAV: NavSection = {
  label: "Industries",
  href: "/industries",
  items: [
    {
      label: "Aesthetic Clinics",
      href: "/industries/aesthetic-clinics",
      description: "Med-spas, injectables, lasers — booking-first websites that fill chairs.",
    },
    {
      label: "Dental Practices",
      href: "/industries/dental-practices",
      description: "General, cosmetic, and ortho dentistry — new-patient growth engines.",
    },
    {
      label: "Beauty & Wellness",
      href: "/industries/beauty-wellness-clinics",
      description: "Spas, IV bars, wellness clinics — appointment-driven local SEO.",
    },
  ],
} as const;

export const LOCATION_NAV: NavSection = {
  label: "Locations",
  href: "/locations",
  // Listed but NOT in BUILT_ROUTES — these render as non-interactive labels
  // until Phase 2 authors each hub (see data/locations.ts § PHASE 0). That is
  // exactly what the isBuiltRoute mechanism below is for.
  items: [
    {
      label: "Manchester",
      href: "/locations/manchester",
      description: "Web, CRM, AI and SEO for Greater Manchester — remote-first, on UK time.",
    },
    {
      label: "Cheshire",
      href: "/locations/cheshire",
      description: "Digital growth across Cheshire — remote-first, on UK time.",
    },
    {
      label: "Leeds",
      href: "/locations/leeds",
      description: "Websites and automation across West Yorkshire — remote-first, on UK time.",
    },
  ],
} as const;

export const TOP_LEVEL_NAV: readonly NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRIMARY_CTA: NavLink = {
  label: "Get a quote",
  href: "/contact",
} as const;

// Locations gets its own footer column (LOCATION_NAV — top metros), so it's not
// repeated here. The /locations index stays reachable via the header + mobile
// "All locations" mega-menu card and the hub breadcrumbs.
export const FOOTER_COMPANY_NAV: readonly NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LEGAL_NAV: readonly NavLink[] = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
  // UK-specific and required: "WebAsk" is a trading name with no Companies
  // House entry, so the entity disclosure has to be permanently accessible
  // (E-Commerce Regs 2002 / Provision of Services Regs 2009 — docs/03 § A1).
  { label: "Company information", href: "/legal/company-information" },
] as const;

export const BRAND_TAGLINE =
  "Digital services for UK small businesses that want to ship, not stall.";

/**
 * Routes whose page exists at launch. Any nav entry pointing elsewhere renders
 * as a non-interactive label instead of a link, so the launch nav shows the
 * full service/industry breadth with zero dead links (Phase-1 acceptance: "all
 * internal links resolve"). Phase 2 fills in `/services/*`, `/industries/*`,
 * and `/locations` — promote each route here the moment its page ships (same
 * per-route cadence as the prefetch note above; a built route may also drop its
 * `prefetch={false}`).
 */
export const BUILT_ROUTES: ReadonlySet<string> = new Set([
  "/",
  "/about",
  "/blog",
  "/contact",
  "/pricing",
  "/process",
  "/free-audit",
  "/services/web-development",
  "/services/ecommerce-development",
  "/services/web-app-development",
  "/services/ui-ux-design",
  "/services/seo",
  "/services/mobile-app-development",
  "/services/crm-automation",
  "/services/ai-integration",
  "/services/maintenance-support",
  "/industries",
  "/industries/aesthetic-clinics",
  "/industries/dental-practices",
  "/industries/beauty-wellness-clinics",
  "/locations",
  // The three UK hubs are deliberately absent: no area has authored copy yet, so
  // /locations/<slug> prerenders nothing. Promote each here when Phase 2 ships it.
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
  "/legal/company-information",
]);

/** True when `href`'s path (query + hash ignored) has a page today. */
export function isBuiltRoute(href: string): boolean {
  const path = href.split(/[?#]/)[0] ?? href;
  return BUILT_ROUTES.has(path);
}
