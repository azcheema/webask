import { expect, test } from "@playwright/test";

/*
 * Keyboard interaction pass for the interactive primitives — focus moves
 * into modal on open, ESC closes + restores focus to the trigger, focus
 * never escapes back to the trigger while modal is open. Runs against the
 * gallery, which surfaces every interactive primitive in one place.
 */
test.describe("/dev/components — keyboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dev/components");
  });

  test("Dialog: opens, focus enters modal, ESC closes + restores", async ({ page }) => {
    // The button is also a Base UI Trigger that gets `inert`/`aria-hidden`
    // while the modal is open, which makes role-based queries fail. Use a
    // data-slot selector so we can still locate it.
    const trigger = page.locator('[data-slot="dialog-trigger"]');
    await trigger.focus();
    await page.keyboard.press("Enter");

    const dialog = page.getByRole("dialog", { name: "Confirm action" });
    await expect(dialog).toBeVisible();

    // While the modal is open, focus must not be on the trigger. After ESC
    // the trigger regains focus.
    const triggerFocused = async () =>
      page.evaluate(() => {
        const trig = document.querySelector('[data-slot="dialog-trigger"]');
        return !!trig && trig === document.activeElement;
      });

    expect(await triggerFocused()).toBe(false);
    await page.keyboard.press("Tab");
    expect(await triggerFocused()).toBe(false);

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("Sheet: opens, ESC closes + restores", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Open sheet (right)" });
    await trigger.focus();
    await page.keyboard.press("Enter");

    const sheet = page.getByRole("dialog", { name: "Side panel" });
    await expect(sheet).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(sheet).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("Popover: opens, ESC closes + restores", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Open popover" });
    await trigger.focus();
    await page.keyboard.press("Enter");

    const popover = page.getByRole("dialog", { name: "Quick info" });
    await expect(popover).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(popover).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("DropdownMenu: opens, focus enters menu, ESC restores", async ({ page }) => {
    // Wait for client-side hydration to finish — Base UI Menu's trigger only
    // wires its open handler post-hydration, and a too-eager click in CI
    // lands before the listener attaches.
    await page.waitForLoadState("networkidle");

    const trigger = page.getByRole("button", { name: "Open menu" });
    await trigger.click();

    // A surfaced menu item proves the popup opened, regardless of which
    // wrapper element carries role="menu".
    const firstItem = page.getByRole("menuitem", { name: "Profile" });
    await expect(firstItem).toBeVisible();

    await page.keyboard.press("ArrowDown");
    await expect(firstItem).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(firstItem).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("Focus ring renders on keyboard focus", async ({ page }) => {
    // Engage keyboard navigation mode so :focus-visible applies.
    await page.keyboard.press("Tab");

    const trigger = page.getByRole("button", { name: "Open dialog" });
    await trigger.focus();

    const ring = await trigger.evaluate((el) => {
      const style = getComputedStyle(el);
      return {
        boxShadow: style.boxShadow,
        outlineWidth: style.outlineWidth,
        outlineColor: style.outlineColor,
      };
    });

    // Either a box-shadow ring (Tailwind focus-visible:ring-3) or an outline
    // must be present — both yield a visible focus indicator.
    const hasRing = ring.boxShadow !== "none" || parseFloat(ring.outlineWidth) > 0;
    expect(hasRing, JSON.stringify(ring)).toBe(true);
  });
});
