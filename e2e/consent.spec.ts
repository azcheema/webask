import { expect, test, type Page } from "@playwright/test";

/*
 * Cookie-consent banner behaviour.
 *
 * The banner only renders when a cookie-based analytics ID is configured at
 * BUILD time (`NEXT_PUBLIC_GA_ID`, inlined by Next). CI sets a fake ID so these
 * run; a local build without it leaves the banner off, so each test skips
 * cleanly rather than failing. The analytics scripts themselves never load here
 * — consent isn't granted until we click, and even then the ID is fake.
 */
const CONSENT_KEY = "webask:analytics-consent";

async function bannerShown(page: Page): Promise<boolean> {
  const banner = page.getByRole("region", { name: /cookie consent/i });
  return banner
    .waitFor({ state: "visible", timeout: 4000 })
    .then(() => true)
    .catch(() => false);
}

test.describe("cookie consent", () => {
  test("Accept dismisses the banner and persists across reloads", async ({ page }) => {
    await page.goto("/");
    test.skip(!(await bannerShown(page)), "no NEXT_PUBLIC_GA_ID at build — banner not rendered");

    const banner = page.getByRole("region", { name: /cookie consent/i });
    await banner.getByRole("button", { name: /accept analytics/i }).click();
    await expect(banner).toBeHidden();

    expect(await page.evaluate((k) => localStorage.getItem(k), CONSENT_KEY)).toBe("granted");

    await page.reload();
    await expect(banner).toBeHidden();
  });

  test("Reject dismisses the banner and persists across reloads", async ({ page }) => {
    await page.goto("/");
    test.skip(!(await bannerShown(page)), "no NEXT_PUBLIC_GA_ID at build — banner not rendered");

    const banner = page.getByRole("region", { name: /cookie consent/i });
    await banner.getByRole("button", { name: /^reject analytics$/i }).click();
    await expect(banner).toBeHidden();

    expect(await page.evaluate((k) => localStorage.getItem(k), CONSENT_KEY)).toBe("denied");

    await page.reload();
    await expect(banner).toBeHidden();
  });

  test("footer Cookie settings reopens the banner after a decision", async ({ page }) => {
    await page.goto("/");
    test.skip(!(await bannerShown(page)), "no NEXT_PUBLIC_GA_ID at build — banner not rendered");

    const banner = page.getByRole("region", { name: /cookie consent/i });
    await banner.getByRole("button", { name: /accept analytics/i }).click();
    await expect(banner).toBeHidden();

    await page.getByRole("button", { name: /cookie settings/i }).click();
    await expect(banner).toBeVisible();

    // Closing the reopened banner doesn't change the stored decision.
    await banner.getByRole("button", { name: /^close$/i }).click();
    await expect(banner).toBeHidden();
    expect(await page.evaluate((k) => localStorage.getItem(k), CONSENT_KEY)).toBe("granted");
  });
});
