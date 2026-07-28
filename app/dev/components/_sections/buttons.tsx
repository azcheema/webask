import { ArrowRightIcon, DownloadIcon, PlusIcon, SparklesIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { GallerySection, Sample } from "./section-card";

const VARIANTS = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const;
const SIZES = ["xs", "sm", "default", "lg"] as const;

export function ButtonsSection() {
  return (
    <GallerySection
      id="buttons"
      title="Buttons & badges"
      description="Six variants × four sizes plus icon-only sizes and disabled / invalid states."
    >
      <Sample label="Button — variants">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </Sample>

      <Sample label="Button — sizes" description="xs / sm / default / lg.">
        {SIZES.map((size) => (
          <Button key={size} size={size}>
            Size {size}
          </Button>
        ))}
      </Sample>

      <Sample label="Button — icon-only sizes" description="icon-xs / icon-sm / icon / icon-lg.">
        <Button size="icon-xs" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon-sm" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon-lg" aria-label="Add">
          <PlusIcon />
        </Button>
      </Sample>

      <Sample label="Button — with icons" description="Inline-start or inline-end slot.">
        <Button>
          <SparklesIcon data-icon="inline-start" />
          Get started
        </Button>
        <Button variant="outline">
          Continue
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
        <Button variant="secondary">
          <DownloadIcon data-icon="inline-start" />
          Download
        </Button>
      </Sample>

      <Sample label="Button — states" description="disabled / aria-invalid.">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled outline
        </Button>
        <Button aria-invalid="true">Invalid</Button>
        <Button variant="outline" aria-invalid="true">
          Invalid outline
        </Button>
      </Sample>

      <Sample label="Badge — variants">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="link">Link</Badge>
      </Sample>
    </GallerySection>
  );
}
