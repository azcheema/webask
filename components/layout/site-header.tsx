"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const SCROLL_THRESHOLD_PX = 4;

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    // Initial sync — `scroll` doesn't fire on mount, but a deep-linked anchor
    // or a back/forward restore can leave `window.scrollY > 0` from the start.
    const sync = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => {
      window.removeEventListener("scroll", sync);
    };
  }, []);

  return (
    <header
      data-slot="site-header"
      data-scrolled={scrolled ? "true" : undefined}
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,border-color,backdrop-filter]",
        "duration-200 ease-out",
        "border-b border-transparent",
        // Resting state: transparent (sits on the page background).
        // Scrolled state: tinted bg + 1px border + blur. The bg uses an opacity
        // variant of --color-bg so the blur reads against the page.
        "data-[scrolled=true]:bg-bg/80 data-[scrolled=true]:border-border",
        "data-[scrolled=true]:supports-backdrop-filter:backdrop-blur-md",
        "data-[scrolled=true]:supports-backdrop-filter:bg-bg/60",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
        <BrandMark className="mr-2" />

        <nav aria-label="Primary" className="hidden md:flex md:flex-1 md:items-center md:gap-1">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-0.5">
              <MegaMenu section={SERVICE_NAV} cols={3} />
              <MegaMenu section={INDUSTRY_NAV} cols={1} />
              <MegaMenu section={LOCATION_NAV} cols={1} />
              {TOP_LEVEL_NAV.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} prefetch={false} />}
                    className="text-fg hover:bg-accent px-2.5 py-1.5 text-sm font-medium"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
          <Button
            render={<Link href={PRIMARY_CTA.href} prefetch={false} />}
            size="lg"
            className="hidden px-4 md:inline-flex"
          >
            {PRIMARY_CTA.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MegaMenu({ section, cols }: { section: NavSection; cols: 1 | 2 | 3 }) {
  const gridCols = cols === 1 ? "md:grid-cols-1" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div
          className={cn(
            "grid w-[min(92vw,640px)] gap-1 p-2",
            cols === 1 ? "md:w-[360px]" : "md:w-[680px]",
            gridCols,
          )}
        >
          {/* "All X" landing card — only when the section index page exists. */}
          {isBuiltRoute(section.href) ? (
            <NavigationMenuLink
              render={<Link href={section.href} prefetch={false} />}
              className="from-brand-500/10 to-brand-500/0 ring-border hover:bg-accent/60 flex h-full flex-col justify-between gap-1 rounded-lg bg-gradient-to-br p-3 ring-1 md:col-span-full"
            >
              <span className="text-fg text-sm font-semibold">
                All {section.label.toLowerCase()}
              </span>
              <span className="text-fg-muted text-xs">
                Browse every {section.label.toLowerCase().replace(/s$/, "")} we offer.
              </span>
            </NavigationMenuLink>
          ) : null}
          {section.items.map((item) =>
            // Built routes link out; the rest show as non-interactive labels so
            // the menu signals our full breadth without any dead links.
            isBuiltRoute(item.href) ? (
              <NavigationMenuLink
                key={item.href}
                render={<Link href={item.href} prefetch={false} />}
                className="hover:bg-accent flex flex-col items-start gap-0.5 rounded-md p-2.5"
              >
                <span className="text-fg text-sm font-medium">{item.label}</span>
                {item.description ? (
                  <span className="text-fg-muted line-clamp-2 text-xs leading-snug">
                    {item.description}
                  </span>
                ) : null}
              </NavigationMenuLink>
            ) : (
              <div
                key={item.href}
                className="flex cursor-default flex-col items-start gap-0.5 rounded-md p-2.5"
              >
                <span className="text-fg-muted text-sm font-medium">{item.label}</span>
                {item.description ? (
                  <span className="text-fg-muted line-clamp-2 text-xs leading-snug opacity-80">
                    {item.description}
                  </span>
                ) : null}
              </div>
            ),
          )}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
