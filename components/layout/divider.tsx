import * as React from "react";

import { cn } from "@/lib/utils";

type DividerProps = Omit<React.ComponentProps<"div">, "role" | "aria-orientation"> & {
  orientation?: "horizontal" | "vertical";
  spacing?: "none" | "sm" | "md" | "lg";
  decorative?: boolean;
};

const H_SPACING: Record<NonNullable<DividerProps["spacing"]>, string> = {
  none: "my-0",
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
};

const V_SPACING: Record<NonNullable<DividerProps["spacing"]>, string> = {
  none: "mx-0",
  sm: "mx-4",
  md: "mx-8",
  lg: "mx-12",
};

function Divider({
  className,
  orientation = "horizontal",
  spacing = "none",
  decorative = true,
  ...props
}: DividerProps) {
  const a11yProps = decorative
    ? ({ role: "none", "aria-hidden": true } as const)
    : ({ role: "separator", "aria-orientation": orientation } as const);

  return (
    <div
      data-slot="divider"
      data-orientation={orientation}
      {...a11yProps}
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal"
          ? `h-px w-full ${H_SPACING[spacing]}`
          : `w-px self-stretch ${V_SPACING[spacing]}`,
        className,
      )}
      {...props}
    />
  );
}

export { Divider };
export type { DividerProps };
