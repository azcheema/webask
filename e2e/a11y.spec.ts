import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import type { Result as AxeResult } from "axe-core";

/*
 * axe-core scan of the only two routes that exist today: home + dev gallery.
 * Each runs in light AND dark mode because next-themes flips via
 * matchMedia('(prefers-color-scheme: dark)'), and Lighthouse only scans
 * the default theme — dark-mode regressions slip past it otherwise.
 *
 * Add new routes to ROUTES as Phase 1+ ships them.
 */
const ROUTES = [
  "/",
  "/dev/components",
  "/services/web-development",
  "/services/e-commerce",
  "/services/web-applications",
  "/services/ui-ux-design",
  "/services/seo",
  "/services/mobile-apps",
  "/services/crm",
  "/services/ai-integration",
  "/services/maintenance",
  "/industries",
  "/industries/aesthetic-clinics",
  "/industries/dental-practices",
  "/industries/beauty-wellness-clinics",
  "/locations",
  // The `/locations/<slug>` hubs and the programmatic `/services/<svc>/<area>`
  // pages are deliberately absent: no area has authored copy yet, so those
  // routes prerender nothing and 404. They are NOT remapped to the UK slugs —
  // page.goto doesn't throw on a 404, so axe would happily scan Next's 404 page
  // and report a silent false green. Phase 2 re-adds them (including one
  // `kind: "county"` hub — Cheshire is a distinct render path).
  "/blog",
  "/blog/local-seo-checklist-2026",
  "/blog/topic/seo",
  "/pricing",
  "/process",
  "/about",
  "/contact",
  "/free-audit",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
] as const;
const TAGS = ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"];

async function setTheme(page: Page, mode: "light" | "dark") {
  await page.emulateMedia({ colorScheme: mode });
}

for (const route of ROUTES) {
  for (const mode of ["light", "dark"] as const) {
    test(`${route} — axe-core (${mode})`, async ({ page }) => {
      await setTheme(page, mode);
      await page.goto(route);
      // Let next-themes finish applying [data-theme] post-hydration.
      await expect(page.locator("html")).toHaveAttribute(
        "data-theme",
        mode === "dark" ? "dark" : "light",
      );
      const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
      expect.soft(results.violations, formatViolations(results.violations)).toEqual([]);
    });
  }
}

/*
 * Per-overlay scan. Base UI portals overlay content into document.body, so
 * the page-level scan above doesn't see Dialog/Popover/DropdownMenu content
 * unless they're open. Open each, run axe scoped to the surfaced container,
 * close. Light mode only — overlay markup is identical across themes.
 */
test("/dev/components — overlays axe-core (open state)", async ({ page }) => {
  await setTheme(page, "light");
  await page.goto("/dev/components");
  // Wait for client hydration so trigger-button click handlers are wired.
  await page.waitForLoadState("networkidle");

  const scans: {
    label: string;
    scope: string;
    openTrigger: () => Promise<void>;
    close: () => Promise<void>;
  }[] = [
    {
      label: "Dialog",
      scope: '[data-slot="dialog-portal"]',
      openTrigger: async () => {
        await page.getByRole("button", { name: "Open dialog" }).click();
        await expect(page.getByRole("dialog", { name: "Confirm action" })).toBeVisible();
      },
      close: async () => {
        await page.keyboard.press("Escape");
        await expect(page.getByRole("dialog", { name: "Confirm action" })).toBeHidden();
      },
    },
    {
      label: "Sheet",
      scope: '[data-slot="sheet-portal"]',
      openTrigger: async () => {
        await page.getByRole("button", { name: "Open sheet (right)" }).click();
        await expect(page.getByRole("dialog", { name: "Side panel" })).toBeVisible();
      },
      close: async () => {
        await page.keyboard.press("Escape");
        await expect(page.getByRole("dialog", { name: "Side panel" })).toBeHidden();
      },
    },
    {
      label: "Popover",
      scope: '[data-slot="popover-content"]',
      openTrigger: async () => {
        await page.getByRole("button", { name: "Open popover" }).click();
        await expect(page.getByRole("dialog", { name: "Quick info" })).toBeVisible();
      },
      close: async () => {
        await page.keyboard.press("Escape");
        await expect(page.getByRole("dialog", { name: "Quick info" })).toBeHidden();
      },
    },
    {
      label: "DropdownMenu",
      scope: '[role="menu"]',
      openTrigger: async () => {
        await page.getByRole("button", { name: "Open menu" }).click();
        await expect(page.getByRole("menuitem", { name: "Profile" })).toBeVisible();
      },
      close: async () => {
        await page.keyboard.press("Escape");
        await expect(page.getByRole("menuitem", { name: "Profile" })).toBeHidden();
      },
    },
  ];

  for (const { label, scope, openTrigger, close } of scans) {
    await openTrigger();
    // Wait for Base UI's enter transitions to settle so axe reads steady-state
    // colours. Scanning mid-transition makes axe composite a half-faded surface
    // against what's behind it and report phantom contrast failures — with a
    // DIFFERENT ratio each run, which is the tell that it's a race, not a bug.
    //
    // The inherited version polled `opacity` on the scope element alone. That is
    // insufficient for Sheet and Dialog, whose scope is the PORTAL wrapper: the
    // wrapper sits at opacity 1 from the start while the overlay and content
    // underneath are still animating, so the poll returned immediately. Wait on
    // the whole subtree's animations instead, then keep the opacity poll as a
    // belt-and-braces fallback for transitions that haven't registered yet.
    await page
      .locator(scope)
      .first()
      .evaluate(async (el) => {
        const settleAnimations = async () => {
          const animations = el.getAnimations({ subtree: true });
          await Promise.all(animations.map((animation) => animation.finished.catch(() => {})));
        };
        // Two passes: an enter transition can start on the frame after the first
        // getAnimations() call, so one pass can miss it.
        await settleAnimations();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await settleAnimations();

        await new Promise<void>((resolve) => {
          const isSettled = () =>
            [el, ...el.querySelectorAll<HTMLElement>("*")].every(
              (node) => parseFloat(getComputedStyle(node).opacity) >= 0.99,
            );
          if (isSettled()) return resolve();
          const start = performance.now();
          const tick = () => {
            if (isSettled() || performance.now() - start > 1000) return resolve();
            requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      });
    const results = await new AxeBuilder({ page }).include(scope).withTags(TAGS).analyze();
    expect
      .soft(results.violations, `${label}: ${formatViolations(results.violations)}`)
      .toEqual([]);
    await close();
  }
});

function formatViolations(violations: AxeResult[]): string {
  if (violations.length === 0) return "no violations";
  return violations
    .map(
      (v) =>
        `[${v.impact ?? "—"}] ${v.id} — ${v.description} (${v.nodes.length} node${
          v.nodes.length === 1 ? "" : "s"
        })\n  ${v.helpUrl}`,
    )
    .join("\n");
}
