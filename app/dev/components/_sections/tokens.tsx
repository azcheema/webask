import { cn } from "@/lib/utils";

import { GallerySection, Sample } from "./section-card";

type SwatchEntry = { name: string; cls: string };

/*
 * Class names are spelled out as full literals so the Tailwind v4 JIT
 * picks them up — interpolated strings (`bg-brand-${shade}`) won't be
 * scanned and would render as no-op classes. The verbose list is the
 * point of the surface: a designer should be able to spot a missing
 * token at a glance.
 */
const BRAND: ReadonlyArray<SwatchEntry> = [
  { name: "brand-50", cls: "bg-brand-50" },
  { name: "brand-100", cls: "bg-brand-100" },
  { name: "brand-200", cls: "bg-brand-200" },
  { name: "brand-300", cls: "bg-brand-300" },
  { name: "brand-400", cls: "bg-brand-400" },
  { name: "brand-500", cls: "bg-brand-500" },
  { name: "brand-600", cls: "bg-brand-600" },
  { name: "brand-700", cls: "bg-brand-700" },
  { name: "brand-800", cls: "bg-brand-800" },
  { name: "brand-900", cls: "bg-brand-900" },
  { name: "brand-950", cls: "bg-brand-950" },
];

const ACCENT: ReadonlyArray<SwatchEntry> = [
  { name: "accent-50", cls: "bg-accent-50" },
  { name: "accent-100", cls: "bg-accent-100" },
  { name: "accent-200", cls: "bg-accent-200" },
  { name: "accent-300", cls: "bg-accent-300" },
  { name: "accent-400", cls: "bg-accent-400" },
  { name: "accent-500", cls: "bg-accent-500" },
  { name: "accent-600", cls: "bg-accent-600" },
  { name: "accent-700", cls: "bg-accent-700" },
  { name: "accent-800", cls: "bg-accent-800" },
  { name: "accent-900", cls: "bg-accent-900" },
  { name: "accent-950", cls: "bg-accent-950" },
];

const NEUTRAL: ReadonlyArray<SwatchEntry> = [
  { name: "neutral-50", cls: "bg-neutral-50" },
  { name: "neutral-100", cls: "bg-neutral-100" },
  { name: "neutral-200", cls: "bg-neutral-200" },
  { name: "neutral-300", cls: "bg-neutral-300" },
  { name: "neutral-400", cls: "bg-neutral-400" },
  { name: "neutral-500", cls: "bg-neutral-500" },
  { name: "neutral-600", cls: "bg-neutral-600" },
  { name: "neutral-700", cls: "bg-neutral-700" },
  { name: "neutral-800", cls: "bg-neutral-800" },
  { name: "neutral-900", cls: "bg-neutral-900" },
  { name: "neutral-950", cls: "bg-neutral-950" },
];

const SEMANTIC: ReadonlyArray<SwatchEntry> = [
  { name: "bg", cls: "bg-bg" },
  { name: "surface", cls: "bg-surface" },
  { name: "elevated", cls: "bg-elevated" },
  { name: "muted", cls: "bg-muted" },
  { name: "border", cls: "bg-border" },
  { name: "ring", cls: "bg-ring" },
  { name: "fg", cls: "bg-fg" },
  { name: "fg-muted", cls: "bg-fg-muted" },
  { name: "fg-subtle", cls: "bg-fg-subtle" },
  { name: "destructive", cls: "bg-destructive" },
  { name: "success", cls: "bg-success" },
  { name: "warning", cls: "bg-warning" },
];

const RADII: ReadonlyArray<SwatchEntry> = [
  { name: "sm (4px)", cls: "rounded-sm" },
  { name: "md (6px)", cls: "rounded-md" },
  { name: "lg (8px)", cls: "rounded-lg" },
  { name: "xl (12px)", cls: "rounded-xl" },
  { name: "2xl (16px)", cls: "rounded-2xl" },
  { name: "3xl (24px)", cls: "rounded-3xl" },
  { name: "full", cls: "rounded-full" },
];

const SHADOWS: ReadonlyArray<SwatchEntry> = [
  { name: "xs", cls: "shadow-xs" },
  { name: "sm", cls: "shadow-sm" },
  { name: "md", cls: "shadow-md" },
  { name: "lg", cls: "shadow-lg" },
  { name: "xl", cls: "shadow-xl" },
  { name: "2xl", cls: "shadow-2xl" },
];

const TYPE_SCALE: ReadonlyArray<{ name: string; cls: string }> = [
  { name: "display-2xl", cls: "text-display-2xl" },
  { name: "display-xl", cls: "text-display-xl" },
  { name: "display", cls: "text-display" },
  { name: "h1", cls: "text-h1" },
  { name: "h2", cls: "text-h2" },
  { name: "h3", cls: "text-h3" },
  { name: "h4", cls: "text-h4" },
  { name: "body-lg", cls: "text-body-lg" },
  { name: "body", cls: "text-body" },
  { name: "body-sm", cls: "text-body-sm" },
  { name: "caption", cls: "text-caption" },
];

function ColorSwatch({ entry }: { entry: SwatchEntry }) {
  return (
    <div className="flex w-20 flex-col gap-1.5">
      <div className={cn("ring-border h-14 w-full rounded-md ring-1", entry.cls)} aria-hidden />
      <p className="text-fg-muted font-mono text-[10px] leading-tight">{entry.name}</p>
    </div>
  );
}

export function TokensSection() {
  return (
    <GallerySection
      id="tokens"
      title="Tokens"
      description="Single source of truth for color, radius, shadow, and typography. Toggle the theme in the header to verify each value cascades to its dark-mode override."
    >
      <Sample label="Brand — Electric Indigo" description="Primary brand scale.">
        {BRAND.map((entry) => (
          <ColorSwatch key={entry.name} entry={entry} />
        ))}
      </Sample>

      <Sample label="Accent — Vivid Teal" description="Highlights, success cues, badges.">
        {ACCENT.map((entry) => (
          <ColorSwatch key={entry.name} entry={entry} />
        ))}
      </Sample>

      <Sample label="Neutral — Cool Gray" description="Slightly indigo-tinged.">
        {NEUTRAL.map((entry) => (
          <ColorSwatch key={entry.name} entry={entry} />
        ))}
      </Sample>

      <Sample
        label="Semantic surfaces & foregrounds"
        description="These tokens cascade through dark mode — flip the theme to verify."
      >
        {SEMANTIC.map((entry) => (
          <ColorSwatch key={entry.name} entry={entry} />
        ))}
      </Sample>

      <Sample label="Radius scale">
        {RADII.map((entry) => (
          <div key={entry.name} className="flex w-20 flex-col gap-1.5">
            <div className={cn("bg-brand-500 h-14 w-full", entry.cls)} aria-hidden />
            <p className="text-fg-muted font-mono text-[10px] leading-tight">{entry.name}</p>
          </div>
        ))}
      </Sample>

      <Sample label="Shadow scale">
        {SHADOWS.map((entry) => (
          <div key={entry.name} className="flex w-20 flex-col gap-1.5">
            <div
              className={cn("bg-surface ring-border h-14 w-full rounded-md ring-1", entry.cls)}
              aria-hidden
            />
            <p className="text-fg-muted font-mono text-[10px] leading-tight">{entry.name}</p>
          </div>
        ))}
      </Sample>

      <Sample label="Type scale" description="Fluid clamp() across display sizes, fixed at body.">
        <div className="flex w-full flex-col gap-3">
          {TYPE_SCALE.map((entry) => (
            <div key={entry.name} className="flex items-baseline gap-4">
              <span className="text-fg-muted w-24 shrink-0 font-mono text-xs">{entry.name}</span>
              <span className={cn("text-fg", entry.cls)}>The quick brown fox jumps over.</span>
            </div>
          ))}
        </div>
      </Sample>
    </GallerySection>
  );
}
