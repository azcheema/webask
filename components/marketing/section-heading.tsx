import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small brand-colored label above the title. `undefined` renders nothing. */
  readonly eyebrow?: string | undefined;
  readonly title: string;
  /** Supporting paragraph below the title. `undefined` renders nothing. */
  readonly intro?: string | undefined;
  readonly align?: "left" | "center";
  /** Heading element — keep one h1 per page; sections use h2. */
  readonly as?: "h1" | "h2" | "h3";
  readonly className?: string;
};

/**
 * Shared eyebrow + heading + intro lockup. Every marketing section block
 * composes this so the type rhythm (eyebrow → title → intro) stays identical
 * across the page. Brand text uses `text-link` — the audited token that
 * clears 4.5:1 in both light and dark (see a11y-audit).
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      {eyebrow ? (
        <span className="text-link text-body-sm font-semibold tracking-wide uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-h1 text-fg max-w-2xl font-semibold tracking-tight text-balance">
        {title}
      </Heading>
      {intro ? (
        <p
          className={cn("text-body-lg text-fg-muted max-w-2xl text-pretty", centered && "mx-auto")}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
