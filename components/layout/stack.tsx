import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const stackVariants = cva("flex", {
  variants: {
    direction: {
      col: "flex-col",
      row: "flex-row",
    },
    gap: {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-12",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "col",
    gap: "md",
    align: "stretch",
    justify: "start",
    wrap: false,
  },
});

type StackProps = React.ComponentProps<"div"> & VariantProps<typeof stackVariants>;

function Stack({ className, direction, gap, align, justify, wrap, ...props }: StackProps) {
  return (
    <div
      data-slot="stack"
      className={cn(stackVariants({ direction, gap, align, justify, wrap, className }))}
      {...props}
    />
  );
}

export { Stack, stackVariants };
export type { StackProps };
