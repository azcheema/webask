import * as React from "react";

import { cn } from "@/lib/utils";

type GallerySectionProps = React.ComponentProps<"section"> & {
  id: string;
  title: string;
  description?: string;
};

export function GallerySection({
  id,
  title,
  description,
  className,
  children,
  ...props
}: GallerySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-24 space-y-6", className)}
      {...props}
    >
      <header className="border-border space-y-2 border-b pb-4">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        {description ? <p className="text-fg-muted text-sm">{description}</p> : null}
      </header>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

type SampleProps = React.ComponentProps<"div"> & {
  label: string;
  description?: string;
};

export function Sample({ label, description, className, children, ...props }: SampleProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="space-y-0.5">
        <p className="text-fg text-sm font-medium">{label}</p>
        {description ? <p className="text-fg-muted text-xs">{description}</p> : null}
      </div>
      <div className="border-border bg-surface flex flex-wrap items-start gap-3 rounded-xl border p-4">
        {children}
      </div>
    </div>
  );
}
