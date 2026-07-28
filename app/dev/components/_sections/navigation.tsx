import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { GallerySection, Sample } from "./section-card";

export function NavigationSection() {
  return (
    <GallerySection
      id="navigation"
      title="Navigation"
      description="Tabs, accordions, breadcrumbs, separators, and scroll areas. Tabs come in default + line variants."
    >
      <Sample label="Tabs — default variant">
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-fg-muted text-sm">
              Production-grade Next.js sites engineered for Core Web Vitals.
            </p>
          </TabsContent>
          <TabsContent value="pricing">
            <p className="text-fg-muted text-sm">Starting at $4,000.</p>
          </TabsContent>
          <TabsContent value="faq">
            <p className="text-fg-muted text-sm">Common questions about engagements and scope.</p>
          </TabsContent>
        </Tabs>
      </Sample>

      <Sample label="Tabs — line variant">
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-fg-muted pt-3 text-sm">Same content; different chrome.</p>
          </TabsContent>
          <TabsContent value="pricing">
            <p className="text-fg-muted pt-3 text-sm">Same content; different chrome.</p>
          </TabsContent>
          <TabsContent value="faq">
            <p className="text-fg-muted pt-3 text-sm">Same content; different chrome.</p>
          </TabsContent>
        </Tabs>
      </Sample>

      <Sample label="Accordion" description="Single-mode by default; collapses to one open item.">
        <Accordion className="w-full max-w-md">
          <AccordionItem value="scope">
            <AccordionTrigger>What does an engagement look like?</AccordionTrigger>
            <AccordionContent>
              Most projects run 6–10 weeks end-to-end, with weekly demos and an async daily.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>How is pricing structured?</AccordionTrigger>
            <AccordionContent>
              Fixed-scope projects use a milestone-based fee; retainers bill monthly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="stack">
            <AccordionTrigger>Can I keep my existing stack?</AccordionTrigger>
            <AccordionContent>
              We integrate with what you have. Our default stack is Next.js + Vercel + Resend.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sample>

      <Sample
        label="Breadcrumbs"
        description="Our wrapper feeds the same array to the JSON-LD graph."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Web development" },
          ]}
        />
      </Sample>

      <Sample label="Separator — horizontal & vertical">
        <div className="w-full max-w-sm space-y-3">
          <span className="text-sm">Above</span>
          <Separator />
          <span className="text-sm">Below</span>
          <div className="flex h-12 items-center gap-3">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Right</span>
          </div>
        </div>
      </Sample>

      <Sample label="ScrollArea" description="Custom scrollbars on overflow content.">
        <ScrollArea
          aria-label="Scrollable list"
          className="ring-border h-32 w-full max-w-sm rounded-md p-3 ring-1"
        >
          <ul className="space-y-2 text-sm">
            {Array.from({ length: 20 }).map((_, i) => (
              <li key={i}>Item {i + 1} — lorem ipsum dolor sit amet consectetur.</li>
            ))}
          </ul>
        </ScrollArea>
      </Sample>
    </GallerySection>
  );
}
