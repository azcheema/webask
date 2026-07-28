import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative w-full", {
  variants: {
    padding: {
      none: "py-0",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-20 md:py-32",
    },
    bg: {
      default: "bg-bg text-fg",
      surface: "bg-surface text-fg",
      muted: "bg-muted text-fg",
      brand: "bg-brand-500 text-fg-on-brand",
      transparent: "",
    },
  },
  defaultVariants: {
    padding: "lg",
    bg: "default",
  },
});

type SectionProps = Omit<React.ComponentProps<"section">, "color"> &
  VariantProps<typeof sectionVariants>;

function Section({ className, padding, bg, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ padding, bg, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };
export type { SectionProps };
