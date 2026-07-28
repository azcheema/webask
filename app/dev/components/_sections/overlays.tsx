"use client";

import * as React from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  CommandIcon,
  InfoIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toaster } from "@/components/ui/sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { GallerySection, Sample } from "./section-card";

export function OverlaysSection() {
  const [commandOpen, setCommandOpen] = React.useState(false);

  return (
    <GallerySection
      id="overlays"
      title="Overlays"
      description="Dialogs, sheets, popovers, tooltips, menus, command palettes, toasts — each one Tab-reachable from its trigger."
    >
      <Sample label="Dialog">
        <Dialog>
          <DialogTrigger render={<Button>Open dialog</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm action</DialogTitle>
              <DialogDescription>
                This is a sample dialog. Press Esc or click outside to dismiss.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter showCloseButton>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Sample>

      <Sample label="Sheet">
        <Sheet>
          <SheetTrigger render={<Button variant="outline">Open sheet (right)</Button>} />
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Side panel</SheetTitle>
              <SheetDescription>
                Edge-anchored panel; usually used for nav or filters.
              </SheetDescription>
            </SheetHeader>
            <div className="text-fg-muted px-4 text-sm">
              Sheet body content sits here. Mobile nav uses this exact primitive.
            </div>
          </SheetContent>
        </Sheet>
      </Sample>

      <Sample label="Popover">
        <Popover>
          <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Quick info</PopoverTitle>
              <PopoverDescription>Lightweight, anchored to its trigger.</PopoverDescription>
            </PopoverHeader>
            <Button size="sm" className="self-start">
              Action
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </PopoverContent>
        </Popover>
      </Sample>

      <Sample label="Tooltip" description="Hover, focus, or long-press the trigger.">
        {/* Local provider — the root layout no longer mounts TooltipProvider
            globally (it shipped Base UI tooltip code to every marketing page for
            a component only used here). */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="More info">
                  <InfoIcon />
                </Button>
              }
            />
            <TooltipContent>This is a tooltip.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Sample>

      <Sample label="DropdownMenu">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Sample>

      <Sample label="Command — inline" description="cmdk-powered with search + filtering.">
        <Command className="ring-border w-full max-w-sm rounded-xl ring-1">
          <CommandInput placeholder="Type a command…" />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="profile">
                <UserIcon />
                Profile
              </CommandItem>
              <CommandItem value="settings">
                <SettingsIcon />
                Settings
              </CommandItem>
              <CommandItem value="calendar">
                <CalendarIcon />
                Calendar
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Sample>

      <Sample
        label="Command — dialog"
        description="Press the button to open as a centered palette."
      >
        <Button variant="outline" onClick={() => setCommandOpen(true)}>
          <CommandIcon data-icon="inline-start" />
          Open command palette
        </Button>
        <Dialog open={commandOpen} onOpenChange={setCommandOpen}>
          <DialogContent className="p-0 sm:max-w-md" showCloseButton={false}>
            <DialogHeader className="sr-only">
              <DialogTitle>Command palette</DialogTitle>
              <DialogDescription>Search for any command in the gallery.</DialogDescription>
            </DialogHeader>
            <Command className="rounded-xl">
              <CommandInput placeholder="Type a command…" />
              <CommandList>
                <CommandEmpty>No results.</CommandEmpty>
                <CommandGroup heading="Navigate">
                  <CommandItem onSelect={() => setCommandOpen(false)}>Profile</CommandItem>
                  <CommandItem onSelect={() => setCommandOpen(false)}>Settings</CommandItem>
                  <CommandItem onSelect={() => setCommandOpen(false)}>Calendar</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
      </Sample>

      <Sample label="Sonner toast" description="Triggers a transient notification in the corner.">
        <Button onClick={() => toast("Default toast", { description: "Message body." })}>
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Saved", { description: "Your changes are live." })}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning("Heads up", { description: "Build is still running." })}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Something broke", { description: "Check the console." })}
        >
          Error
        </Button>
        <Toaster position="bottom-right" />
      </Sample>
    </GallerySection>
  );
}
