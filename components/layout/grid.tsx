import * as React from "react";

import { cn } from "@/lib/utils";

type Cols = 1 | 2 | 3 | 4 | 6 | 12;
type Gap = "xs" | "sm" | "md" | "lg" | "xl";

const COLS_BASE: Record<Cols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const COLS_MD: Record<Cols, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  6: "md:grid-cols-6",
  12: "md:grid-cols-12",
};

const COLS_LG: Record<Cols, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  6: "lg:grid-cols-6",
  12: "lg:grid-cols-12",
};

const GAP: Record<Gap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

type GridProps = React.ComponentProps<"div"> & {
  cols?: Cols;
  colsMd?: Cols;
  colsLg?: Cols;
  gap?: Gap;
};

function Grid({ className, cols = 1, colsMd, colsLg, gap = "md", ...props }: GridProps) {
  return (
    <div
      data-slot="grid"
      className={cn(
        "grid",
        COLS_BASE[cols],
        colsMd ? COLS_MD[colsMd] : undefined,
        colsLg ? COLS_LG[colsLg] : undefined,
        GAP[gap],
        className,
      )}
      {...props}
    />
  );
}

export { Grid };
export type { GridProps };
