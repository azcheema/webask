import * as React from "react";
import { AlertCircle, Check, CheckCircle2, TriangleAlertIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { slugifyHeading } from "@/lib/blog";

import { mdxComponents } from "./mdx-components";

/*
 * MDX block components for the blog. Long-form prose falls through to the
 * `prose prose-webask` styles on the wrapper; these are the deliberate, branded
 * blocks an author reaches for (`<Callout>`, `<Stat>` / `<StatGrid>`,
 * `<Comparison>`). Each root carries `not-prose` so the typography plugin
 * doesn't restyle their internals.
 *
 * `h2`/`h3` are overridden to stamp a `slugifyHeading` id (shared with
 * `lib/blog` `extractHeadings`) so every `TableOfContents` anchor resolves, with
 * `scroll-mt` to clear the sticky header on jump.
 *
 * Server components only — no client JS ships for any of these.
 */

// ── Headings (anchor ids for the table of contents) ───────────────────────────

/** Flatten MDX heading children to plain text so the id matches the rendered DOM. */
function toText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (React.isValidElement(node)) {
    return toText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}

type HeadingProps = React.ComponentPropsWithoutRef<"h2">;

function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2 id={slugifyHeading(toText(children))} className={cn("scroll-mt-24", className)} {...props}>
      {children}
    </h2>
  );
}

function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3 id={slugifyHeading(toText(children))} className={cn("scroll-mt-24", className)} {...props}>
      {children}
    </h3>
  );
}

// ── Callout ───────────────────────────────────────────────────────────────────

type CalloutVariant = "note" | "tip" | "warning";

const CALLOUT_VARIANTS: Record<
  CalloutVariant,
  {
    readonly Icon: React.ComponentType<{ className?: string }>;
    readonly title: string;
    readonly wrap: string;
    readonly icon: string;
  }
> = {
  note: {
    Icon: AlertCircle,
    title: "Note",
    wrap: "border-brand-500/30 bg-brand-500/5",
    icon: "text-brand-500",
  },
  tip: {
    Icon: CheckCircle2,
    title: "Tip",
    // Success green, not the accent. The accent scale is warm orange since the
    // D5 rebrand and reads as caution, which fights a CheckCircle2 icon.
    wrap: "border-success/40 bg-success/10",
    icon: "text-success",
  },
  warning: {
    Icon: TriangleAlertIcon,
    title: "Heads up",
    wrap: "border-border bg-muted",
    icon: "text-fg-muted",
  },
};

type CalloutProps = {
  /**
   * `note` | `tip` | `warning`. Typed `string` on purpose — MDX props are not
   * type-checked at the content boundary, so an author typo resolves to `note`
   * rather than crashing the build on an undefined-config deref.
   */
  readonly variant?: string;
  /** Override the default per-variant heading. */
  readonly title?: string;
  readonly children: React.ReactNode;
};

function resolveCalloutVariant(variant: string | undefined): CalloutVariant {
  return variant === "tip" || variant === "warning" ? variant : "note";
}

/** A boxed aside — note / tip / warning. Icon + title carry the meaning, never color alone. */
export function Callout({ variant, title, children }: CalloutProps) {
  const config = CALLOUT_VARIANTS[resolveCalloutVariant(variant)];
  const Icon = config.Icon;

  return (
    <div
      className={cn(
        "not-prose my-6 flex gap-3 rounded-2xl border p-4 text-left sm:p-5",
        config.wrap,
      )}
    >
      <Icon className={cn("mt-0.5 size-5 shrink-0", config.icon)} />
      <div className="flex flex-col gap-1">
        <p className="text-fg text-body-sm font-semibold">{title ?? config.title}</p>
        <div className="text-fg-muted text-body-sm *:first:mt-0 *:last:mb-0">{children}</div>
      </div>
    </div>
  );
}

// ── Stat / StatGrid ─────────────────────────────────────────────────────────

type StatProps = {
  readonly value: string;
  readonly label: string;
};

/** A single headline metric. Wrap two or three in `<StatGrid>` for a row. */
export function Stat({ value, label }: StatProps) {
  return (
    <div className="not-prose border-border bg-bg flex flex-col gap-1 rounded-2xl border p-5">
      <span className="text-fg text-h2 font-semibold tracking-tight">{value}</span>
      <span className="text-fg-muted text-body-sm text-pretty">{label}</span>
    </div>
  );
}

/** Responsive row wrapper for `<Stat>` blocks. */
export function StatGrid({ children }: { readonly children: React.ReactNode }) {
  return <div className="not-prose my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

// ── Comparison ────────────────────────────────────────────────────────────────

type ComparisonTone = "positive" | "neutral" | "negative";

function ComparisonMarker({ tone }: { tone: ComparisonTone }) {
  if (tone === "positive") return <Check className="text-success size-4 shrink-0" />;
  if (tone === "negative") return <XIcon className="text-fg-muted size-4 shrink-0" />;
  return <span aria-hidden className="bg-fg-muted size-1.5 shrink-0 rounded-full" />;
}

type ComparisonColumnProps = {
  readonly title: string;
  readonly tone?: ComparisonTone;
  readonly children: React.ReactNode;
};

/**
 * One side of a `<Comparison>`. Author the points as a normal markdown list in
 * the body — a children + scalar-attr API, since `next-mdx-remote/rsc` does not
 * pass object-literal expression attributes through.
 */
export function ComparisonColumn({ title, tone = "neutral", children }: ComparisonColumnProps) {
  return (
    <div className="border-border bg-bg flex flex-col gap-3 rounded-2xl border p-5">
      <div className="flex items-center gap-2">
        <ComparisonMarker tone={tone} />
        <h4 className="text-fg text-h4 font-semibold tracking-tight">{title}</h4>
      </div>
      <div className="text-fg-muted text-body-sm [&_li]:marker:text-fg-muted [&_ul]:m-0 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}

/** Two labeled columns for an A/B trade-off. Compose with `<ComparisonColumn>` children. */
export function Comparison({ children }: { readonly children: React.ReactNode }) {
  return <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">{children}</div>;
}

/**
 * The component map passed to `<MDXRemote components={...} />` for blog bodies.
 * Spreads the base map (internal/external `a` handling) and layers the blocks +
 * heading-id overrides on top.
 */
export const blogMdxComponents = {
  ...mdxComponents,
  h2: H2,
  h3: H3,
  Callout,
  Stat,
  StatGrid,
  Comparison,
  ComparisonColumn,
};
