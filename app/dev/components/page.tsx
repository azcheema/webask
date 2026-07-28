import type { Metadata } from "next";

import { Container, Section, Stack } from "@/components/layout";
import { buildMetadata } from "@/lib/seo";

import { ButtonsSection } from "./_sections/buttons";
import { FormsSection } from "./_sections/forms";
import { LayoutPrimitivesSection } from "./_sections/layout-primitives";
import { NavigationSection } from "./_sections/navigation";
import { OverlaysSection } from "./_sections/overlays";
import { SurfacesSection } from "./_sections/surfaces";
import { TokensSection } from "./_sections/tokens";

const SECTIONS = [
  { id: "tokens", label: "Tokens" },
  { id: "layout-primitives", label: "Layout primitives" },
  { id: "buttons", label: "Buttons & badges" },
  { id: "forms", label: "Forms" },
  { id: "surfaces", label: "Surfaces" },
  { id: "navigation", label: "Navigation" },
  { id: "overlays", label: "Overlays" },
] as const;

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Component gallery",
    description:
      "Internal-only visual surface for the WebAsk design system — every primitive with its key variants and states.",
    path: "/dev/components",
    noindex: true,
  }),
  /*
   * Override buildMetadata's default { index: false, follow: true } — this
   * surface is dev-only and we don't want crawlers following internal links
   * from it either. Stricter than a typical noindex marketing page.
   */
  robots: { index: false, follow: false },
};

export default function ComponentGalleryPage() {
  return (
    <Section padding="lg" bg="default">
      <Container size="xl">
        <Stack gap="2xl">
          <header className="space-y-3">
            <p className="text-fg-muted font-mono text-xs tracking-wider uppercase">
              /dev/components
            </p>
            <h1 className="text-h1 font-semibold tracking-tight">Component gallery</h1>
            <p className="text-fg-muted max-w-2xl text-base">
              Visual verification surface for every primitive we own. Toggle the theme in the header
              to confirm light / dark behaviour, and Tab through the interactive samples to verify
              focus rings and keyboard reachability.
            </p>
            <nav
              aria-label="Gallery sections"
              className="border-border bg-surface w-fit rounded-xl border p-2"
            >
              <ul className="flex flex-wrap gap-1">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-fg hover:bg-muted focus-visible:ring-ring rounded-md px-2.5 py-1 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <TokensSection />
          <LayoutPrimitivesSection />
          <ButtonsSection />
          <FormsSection />
          <SurfacesSection />
          <NavigationSection />
          <OverlaysSection />
        </Stack>
      </Container>
    </Section>
  );
}
