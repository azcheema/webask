"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// The drawer body (Sheet + Accordion) is the heavy part and is never visible
// until the user taps the trigger — load it lazily so its Base UI machinery
// stays out of the initial bundle. ssr:false because it's an overlay (nothing
// to render server-side until open).
const MobileNavPanel = dynamic(() => import("./mobile-nav-panel").then((m) => m.MobileNavPanel), {
  ssr: false,
});

type MobileNavProps = {
  className?: string;
};

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  // Once opened, keep the panel mounted so its open/close transitions run from
  // the dynamic chunk that's now in memory.
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Open menu"
        className={cn("md:hidden", className)}
        onClick={() => {
          setLoaded(true);
          setOpen(true);
        }}
      >
        <MenuIcon aria-hidden />
      </Button>
      {loaded ? <MobileNavPanel open={open} onOpenChange={setOpen} /> : null}
    </>
  );
}
