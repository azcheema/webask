import { ArrowRightIcon, BellIcon } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { GallerySection, Sample } from "./section-card";

export function SurfacesSection() {
  return (
    <GallerySection
      id="surfaces"
      title="Surfaces"
      description="Cards, skeletons, avatars, aspect-ratios — the building blocks of every marketing block in Phase 1."
    >
      <Sample label="Card — full anatomy">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Web development</CardTitle>
            <CardDescription>
              Production-grade Next.js sites with Lighthouse scores in the 90s.
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon-sm" aria-label="Open">
                <ArrowRightIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-fg-muted text-sm">
              Tech-credibility lean. Tokens-driven. CI-enforced budgets.
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-fg-muted text-sm">Starting at $4,000</span>
          </CardFooter>
        </Card>
      </Sample>

      <Sample label='Card — size="sm"'>
        <Card size="sm" className="w-full max-w-xs">
          <CardHeader>
            <CardTitle>Compact</CardTitle>
            <CardDescription>Tighter padding for dense lists.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-fg-muted text-xs">Used in pricing tables and feature grids.</p>
          </CardContent>
        </Card>
      </Sample>

      <Sample label="Skeleton — common shapes">
        <div className="w-full max-w-sm space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        </div>
      </Sample>

      <Sample label="Avatar — sizes + group">
        <Avatar size="sm">
          <AvatarFallback>NX</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>NX</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>NX</AvatarFallback>
          <AvatarBadge>
            <BellIcon />
          </AvatarBadge>
        </Avatar>
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </Sample>

      <Sample label="AspectRatio — 16:9 / 4:3 / 1:1">
        <div className="grid w-full max-w-2xl grid-cols-3 gap-3">
          <AspectRatio
            ratio={16 / 9}
            className="bg-brand-100 dark:bg-brand-800 flex items-center justify-center rounded-md"
          >
            <span className="text-brand-900 dark:text-brand-50 text-xs font-medium">16 : 9</span>
          </AspectRatio>
          <AspectRatio
            ratio={4 / 3}
            className="bg-accent-100 dark:bg-accent-800 flex items-center justify-center rounded-md"
          >
            <span className="text-accent-900 dark:text-accent-50 text-xs font-medium">4 : 3</span>
          </AspectRatio>
          <AspectRatio ratio={1} className="bg-muted flex items-center justify-center rounded-md">
            <span className="text-fg text-xs font-medium">1 : 1</span>
          </AspectRatio>
        </div>
      </Sample>
    </GallerySection>
  );
}
