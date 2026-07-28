"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { CheckIcon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ThemeOption = "light" | "dark" | "system";

const OPTIONS: ReadonlyArray<{
  value: ThemeOption;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}> = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
];

// `useSyncExternalStore` with a server snapshot of `false` and a client
// snapshot of `true` is the React-19-canonical way to detect post-hydration —
// no effect, no setState-in-effect (which would trip the
// `react-hooks/set-state-in-effect` rule). The store never actually changes,
// so `subscribe` returns a no-op unsubscribe.
const noopSubscribe = () => () => {};
const getMountedClient = () => true;
const getMountedServer = () => false;

function useIsMounted(): boolean {
  return React.useSyncExternalStore(noopSubscribe, getMountedClient, getMountedServer);
}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  // Pre-hydration: render a placeholder of the same size + a11y label so the
  // sticky header doesn't reflow when the toggle hydrates.
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Toggle theme"
        // Suppress hydration warning because the icon flips between server (Sun)
        // and client (system preference) — value is purely visual.
        suppressHydrationWarning
      >
        <SunIcon aria-hidden />
      </Button>
    );
  }

  const ActiveIcon = (resolvedTheme === "dark" ? MoonIcon : SunIcon) as React.ComponentType<{
    className?: string;
  }>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label="Toggle theme">
            <ActiveIcon aria-hidden />
          </Button>
        }
      />
      <DropdownMenuContent align="end" sideOffset={8}>
        {OPTIONS.map(({ value, label, Icon }) => {
          const isActive = (theme ?? "system") === value;
          return (
            <DropdownMenuItem
              key={value}
              onClick={() => {
                setTheme(value);
              }}
              data-active={isActive ? "true" : undefined}
            >
              <Icon aria-hidden />
              <span>{label}</span>
              {isActive ? <CheckIcon aria-hidden className="ml-auto" /> : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
