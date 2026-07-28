"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { BrandMark } from "./brand-mark";
import {
  INDUSTRY_NAV,
  isBuiltRoute,
  LOCATION_NAV,
  PRIMARY_CTA,
  SERVICE_NAV,
  TOP_LEVEL_NAV,
  type NavSection,
} from "./_nav-data";
import { ThemeToggle } from "./theme-toggle";

type MobileNavPanelProps = {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
};

/**
 * The mobile navigation drawer body — Sheet + Accordion + theme toggle.
 *
 * Loaded lazily (`next/dynamic`, ssr:false) by `mobile-nav.tsx` on first tap of
 * the hamburger, so the Base UI Dialog + Accordion machinery never ships in the
 * initial bundle. There is no `SheetTrigger` here: the lightweight trigger lives
 * in `mobile-nav.tsx` and Base UI restores focus to it (the element focused when
 * the dialog opened) on close.
 */
export function MobileNavPanel({ open, onOpenChange }: MobileNavPanelProps) {
  const close = React.useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle>
            <BrandMark />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation — services, industries, and account links.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 py-4">
          <Accordion>
            <MobileNavSection section={SERVICE_NAV} onLinkClick={close} />
            <MobileNavSection section={INDUSTRY_NAV} onLinkClick={close} />
            <MobileNavSection section={LOCATION_NAV} onLinkClick={close} />
          </Accordion>

          <ul className="mt-2 flex flex-col">
            {TOP_LEVEL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
                  onClick={close}
                  className="text-fg hover:bg-accent block rounded-md px-1 py-2.5 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bg-bg flex items-center justify-between gap-2 border-t px-5 py-4">
          <ThemeToggle />
          <Button
            render={<Link href={PRIMARY_CTA.href} prefetch={false} onClick={close} />}
            className="flex-1"
          >
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavSection({
  section,
  onLinkClick,
}: {
  section: NavSection;
  onLinkClick: () => void;
}) {
  return (
    <AccordionItem value={section.href}>
      <AccordionTrigger>{section.label}</AccordionTrigger>
      <AccordionContent>
        <ul className="flex flex-col gap-0.5 pl-1">
          {isBuiltRoute(section.href) ? (
            <li>
              <Link
                href={section.href}
                prefetch={false}
                onClick={onLinkClick}
                className="text-fg-muted hover:text-fg block rounded-md px-1 py-1.5 text-sm transition-colors"
              >
                All {section.label.toLowerCase()}
              </Link>
            </li>
          ) : null}
          {section.items.map((item) => (
            <li key={item.href}>
              {/* Built routes link out; the rest show as non-interactive labels. */}
              {isBuiltRoute(item.href) ? (
                <Link
                  href={item.href}
                  prefetch={false}
                  onClick={onLinkClick}
                  className="text-fg hover:bg-accent block rounded-md px-1 py-1.5 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-fg-muted block rounded-md px-1 py-1.5 text-sm">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
