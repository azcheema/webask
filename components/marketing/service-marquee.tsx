import { cn } from "@/lib/utils";

export type MarqueeService = {
  readonly name: string;
  readonly slug: string;
};

type ServiceMarqueeProps = {
  readonly services: ReadonlyArray<MarqueeService>;
  /** Accessible label for the screen-reader list. */
  readonly label?: string;
  readonly className?: string;
};

// Service slugs that have a sprite symbol below (id `svc-<slug>`). Icons are
// defined ONCE in the sprite and referenced via <use>, so duplicating the row
// (3×) costs ~40 bytes per icon instead of a full inline SVG — keeps the home
// page's inline payload under the Lighthouse script-size budget.
const ICON_SLUGS = new Set([
  "web-development",
  "e-commerce",
  "web-applications",
  "ui-ux-design",
  "seo",
  "mobile-apps",
  "crm",
  "ai-integration",
  "maintenance",
]);

const TRACK_COPIES = 3;

/**
 * The hero's bottom band — our services scrolling where Stripe runs its
 * customer-logo cloud. Pure CSS (zero JS): `.hero-marquee-track` (globals.css)
 * translates the 3×-duplicated row by -33.333% (one copy) for a seamless loop,
 * pauses on hover, and goes static under `prefers-reduced-motion`.
 *
 * Names are plain text (no links — most `/services/*` routes ship in Phase 2,
 * same rule as the `BUILT_ROUTES` muted labels). The visual track is
 * `aria-hidden`; an `sr-only` list carries the names for assistive tech + SEO.
 * Icons come from a one-time inline sprite (`ServiceIconSprite`) referenced by
 * `<use>` to keep the duplicated markup small.
 */
export function ServiceMarquee({
  services,
  label = "Our services",
  className,
}: ServiceMarqueeProps) {
  return (
    <div
      className={cn(
        "group border-border relative overflow-hidden border-t",
        "[mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]",
        "[-webkit-mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]",
        className,
      )}
    >
      <ServiceIconSprite />

      {/* Screen-reader + SEO copy (the visual track below is aria-hidden). */}
      <ul aria-label={label} className="sr-only">
        {services.map((service) => (
          <li key={service.slug}>{service.name}</li>
        ))}
      </ul>

      <div className="hero-marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
        {Array.from({ length: TRACK_COPIES }).flatMap((_, copy) =>
          services.map((service) => (
            <span
              key={`${copy}-${service.slug}`}
              aria-hidden="true"
              className="hero-marquee-item text-body-sm"
            >
              {ICON_SLUGS.has(service.slug) ? (
                <svg className="hero-marquee-icon" aria-hidden="true">
                  <use href={`#svc-${service.slug}`} />
                </svg>
              ) : null}
              {service.name}
            </span>
          )),
        )}
      </div>
    </div>
  );
}

/**
 * One-time icon sprite (Lucide 24×24 outline geometry) — each service icon is a
 * `<symbol>` referenced by the marquee's `<use>` elements. Stroke styling lives
 * on `.hero-marquee-icon` and inherits across the `<use>` boundary.
 */
function ServiceIconSprite() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <symbol id="svc-web-development" viewBox="0 0 24 24">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </symbol>
        <symbol id="svc-e-commerce" viewBox="0 0 24 24">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </symbol>
        <symbol id="svc-web-applications" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 4v4" />
          <path d="M2 8h20" />
          <path d="M6 4v4" />
        </symbol>
        <symbol id="svc-ui-ux-design" viewBox="0 0 24 24">
          <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
          <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
          <path d="m2.3 2.3 7.286 7.286" />
          <circle cx="11" cy="11" r="2" />
        </symbol>
        <symbol id="svc-seo" viewBox="0 0 24 24">
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </symbol>
        <symbol id="svc-mobile-apps" viewBox="0 0 24 24">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </symbol>
        <symbol id="svc-crm" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx="9" cy="7" r="4" />
        </symbol>
        <symbol id="svc-ai-integration" viewBox="0 0 24 24">
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          <path d="M20 2v4" />
          <path d="M22 4h-4" />
          <circle cx="4" cy="20" r="2" />
        </symbol>
        <symbol id="svc-maintenance" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
        </symbol>
      </defs>
    </svg>
  );
}
