import { Container, Divider, Grid, Section, Stack } from "@/components/layout";

import { GallerySection, Sample } from "./section-card";

function FauxBlock({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-brand-100 text-brand-900 dark:bg-brand-800 dark:text-brand-50 flex h-12 items-center justify-center rounded-md text-xs font-medium ${className ?? ""}`.trim()}
    >
      {label}
    </div>
  );
}

export function LayoutPrimitivesSection() {
  return (
    <GallerySection
      id="layout-primitives"
      title="Layout primitives"
      description="Server-component primitives that wrap every page. The samples render with a dashed border so the bounding box is visible."
    >
      <Sample
        label="Container — sizes"
        description="sm 768 / md 1024 / lg 1152 / xl 1280 / 2xl 1440 / full."
      >
        <div className="flex w-full flex-col gap-3">
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <Container
              key={size}
              size={size}
              className="border-brand-300 dark:border-brand-700 rounded-md border border-dashed py-2"
            >
              <span className="text-fg-muted font-mono text-xs">size=&quot;{size}&quot;</span>
            </Container>
          ))}
        </div>
      </Sample>

      <Sample label="Section — bg × padding" description="bg: default / surface / muted / brand.">
        <div className="w-full space-y-3">
          <Section padding="sm" bg="default" className="ring-border rounded-md ring-1">
            <Container size="md">
              <span className="font-mono text-xs">
                bg=&quot;default&quot;, padding=&quot;sm&quot;
              </span>
            </Container>
          </Section>
          <Section padding="sm" bg="surface" className="ring-border rounded-md ring-1">
            <Container size="md">
              <span className="font-mono text-xs">
                bg=&quot;surface&quot;, padding=&quot;sm&quot;
              </span>
            </Container>
          </Section>
          <Section padding="sm" bg="muted" className="ring-border rounded-md ring-1">
            <Container size="md">
              <span className="font-mono text-xs">
                bg=&quot;muted&quot;, padding=&quot;sm&quot;
              </span>
            </Container>
          </Section>
          <Section padding="sm" bg="brand" className="rounded-md">
            <Container size="md">
              <span className="font-mono text-xs">
                bg=&quot;brand&quot;, padding=&quot;sm&quot;
              </span>
            </Container>
          </Section>
        </div>
      </Sample>

      <Sample label="Grid — cols" description="1 / 2 / 3 / 4 / 6 / 12 column variants.">
        <div className="w-full space-y-4">
          {([1, 2, 3, 4, 6, 12] as const).map((cols) => (
            <div key={cols}>
              <p className="text-fg-muted mb-2 font-mono text-xs">cols={cols}</p>
              <Grid cols={cols} gap="sm">
                {Array.from({ length: cols }).map((_, i) => (
                  <FauxBlock key={i} label={String(i + 1)} />
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </Sample>

      <Sample
        label="Stack — direction / gap"
        description="Flexbox wrapper. Direction toggles col↔row; gap maps to token scale."
      >
        <div className="w-full space-y-4">
          <div>
            <p className="text-fg-muted mb-2 font-mono text-xs">
              direction=&quot;col&quot; gap=&quot;md&quot;
            </p>
            <Stack gap="md">
              <FauxBlock label="1" />
              <FauxBlock label="2" />
              <FauxBlock label="3" />
            </Stack>
          </div>
          <div>
            <p className="text-fg-muted mb-2 font-mono text-xs">
              direction=&quot;row&quot; gap=&quot;lg&quot; align=&quot;center&quot;
            </p>
            <Stack direction="row" gap="lg" align="center">
              <FauxBlock label="1" className="w-20" />
              <FauxBlock label="2" className="w-24" />
              <FauxBlock label="3" className="w-16" />
            </Stack>
          </div>
        </div>
      </Sample>

      <Sample label="Divider — orientation × spacing">
        <div className="w-full space-y-4">
          <div>
            <p className="text-fg-muted mb-1 font-mono text-xs">
              horizontal, spacing=&quot;sm&quot;
            </p>
            <div>
              <span className="text-sm">Above</span>
              <Divider spacing="sm" />
              <span className="text-sm">Below</span>
            </div>
          </div>
          <div>
            <p className="text-fg-muted mb-1 font-mono text-xs">vertical, spacing=&quot;md&quot;</p>
            <div className="flex h-12 items-center">
              <span className="text-sm">Left</span>
              <Divider orientation="vertical" spacing="md" />
              <span className="text-sm">Right</span>
            </div>
          </div>
        </div>
      </Sample>
    </GallerySection>
  );
}
