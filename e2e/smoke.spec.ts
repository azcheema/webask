import { expect, test } from "@playwright/test";

import { services } from "@/data/services";

/** Catalogue entries still in draft — derived, so the checks track the data. */
const DRAFT_SERVICE_SLUGS = services.filter((s) => s.status === "draft").map((s) => s.slug);

test.describe("smoke", () => {
  test("home page renders with title and an h1", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok(), "home page should respond 2xx").toBe(true);
    await expect(page).toHaveTitle(/WebAsk/);
    // Two-tone hero headline renders in full (both segments concatenate).
    await expect(page.getByRole("heading", { level: 1 })).toContainText("mean business");
    // Hero services marquee exposes the catalog to assistive tech / SEO via an
    // sr-only list (visual track is aria-hidden), so assert it's attached.
    await expect(page.getByRole("list", { name: "Our services" })).toBeAttached();
  });

  test("home renders the process strip and pricing anchor (page anatomy)", async ({ page }) => {
    await page.goto("/");
    // Process 4-step visual — the four stage headings (h3, distinct from the h2 title).
    for (const stage of ["Discover", "Design", "Build", "Grow"]) {
      await expect(page.getByRole("heading", { level: 3, name: stage, exact: true })).toBeVisible();
    }
    // Pricing anchor surfaces a real "starting at" price on the home page itself.
    await expect(page.getByText("£3,500", { exact: true })).toBeVisible();
    // Both retrofitted sections keep their "see full…" links to the deep pages.
    await expect(page.getByRole("link", { name: /see our process/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /see full pricing/i })).toBeVisible();
  });

  test("nav shell renders header, main, footer + skip link", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.locator("main#main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    // Skip link is the first focusable element and points to #main.
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: /skip to content/i });
    await expect(skip).toBeFocused();
    await expect(skip).toHaveAttribute("href", "#main");
  });

  test("mobile viewport exposes the menu trigger", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto("/");
    await expect(page.getByRole("button", { name: /open menu/i })).toBeVisible();
  });

  test("mobile nav lazy-loads and opens on tap", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto("/");
    // The drawer body is a lazy `next/dynamic` chunk — tapping the trigger
    // loads + opens it. Proves the dynamic import is wired and focus-restores.
    await page.getByRole("button", { name: /open menu/i }).click();
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();
    await expect(drawer.getByRole("link", { name: /^contact$/i })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(drawer).toBeHidden();
  });

  test("/robots.txt is served", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.ok()).toBe(true);
    const body = await res.text();
    expect(body).toContain("Sitemap:");
  });

  test("/sitemap.xml lists indexable pages and omits noindex routes", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.ok()).toBe(true);
    expect(res.headers()["content-type"]).toContain("xml");
    const body = await res.text();
    // Indexable Phase 1 routes are advertised.
    for (const path of [
      "/pricing",
      "/about",
      "/process",
      "/contact",
      "/free-audit",
      // Statutory entity disclosure — indexable, and deliberately so: being
      // findable about who operates the site is an E-E-A-T signal, not just a
      // legal box-tick.
      "/legal/company-information",
    ]) {
      expect(body, `sitemap should list ${path}`).toContain(`${path}</loc>`);
    }
    expect(body, "sitemap should list the live service page").toContain(
      "/services/web-development</loc>",
    );

    // noindex surfaces must NEVER appear in the sitemap. privacy/terms/cookies
    // reverted to `draft` for WebAsk — they were approved for Naxdor under EU
    // GDPR, not UK GDPR + PECR, and D3 (Art. 27 representative) is still open.
    // Draft => noindex, so advertising them would contradict the robots tag.
    // Move each into the list above in the same commit that flips its draft flag.
    for (const path of ["/legal/privacy", "/legal/terms", "/legal/cookies"]) {
      expect(body, `sitemap must not list draft/noindex ${path}`).not.toContain(`${path}</loc>`);
    }
    // Draft services (data/services.ts `status`) prerender `noindex` too.
    for (const slug of DRAFT_SERVICE_SLUGS) {
      expect(body, `sitemap must not list draft service /services/${slug}`).not.toContain(
        `/services/${slug}</loc>`,
      );
    }
    expect(body).not.toContain("/dev/");
  });

  test("a draft service prerenders noindex and sits on no public surface", async ({ page }) => {
    // The drafting mechanism (research 11 § 7): a `status: "draft"` service
    // with an MDX body renders for preview but must not index, and the grid,
    // the pricing tables and the nav must not link to it.
    test.skip(DRAFT_SERVICE_SLUGS.length === 0, "no draft service in the catalogue");
    for (const slug of DRAFT_SERVICE_SLUGS) {
      const path = `/services/${slug}`;
      const response = await page.goto(path);
      expect(response?.ok(), `${path} should respond 2xx`).toBe(true);
      const robots = await page.locator('meta[name="robots"]').getAttribute("content");
      expect(robots ?? "", `${path} must be noindex`).toMatch(/noindex/i);
      expect(robots ?? "", `${path} stays follow`).toMatch(/follow/i);
    }
    for (const surface of ["/services", "/pricing", "/contact"]) {
      await page.goto(surface);
      for (const slug of DRAFT_SERVICE_SLUGS) {
        await expect(
          page.locator(`a[href="/services/${slug}"]`),
          `${surface} must not link to draft /services/${slug}`,
        ).toHaveCount(0);
      }
    }
  });

  test("service page renders MDX body, price card, and structured data", async ({ page }) => {
    const response = await page.goto("/services/web-development");
    expect(response?.ok(), "service page should respond 2xx").toBe(true);
    // h1 is the service name (ServiceHero).
    await expect(page.getByRole("heading", { level: 1, name: /web development/i })).toBeVisible();
    // ServiceHero surfaces the anatomy's "Starting at $X" tag next to the H1.
    await expect(page.getByText(/Starting at £3,500/)).toBeVisible();
    // Price card anchor rendered from catalog data (exact: also appears in the
    // MDX comparison table + prose, so match just the price-card display value).
    await expect(page.getByText("£3,500", { exact: true })).toBeVisible();
    // MDX long-form body rendered. Asserted structurally, not against a named
    // heading: the body is marketing copy and gets rewritten (it was, wholesale,
    // for the UK), so pinning the smoke test to one sentence breaks it on every
    // copy edit. The h1 + price assertions above already prove the right service
    // page loaded; this proves its long-form body came with it.
    const proseHeadings = page.locator("article.prose h2");
    await expect(proseHeadings.first()).toBeVisible();
    expect(await proseHeadings.count()).toBeGreaterThan(3);
    // FAQs render as structured content (relocated out of MDX into data/services).
    await expect(page.getByRole("heading", { name: /frequently asked questions/i })).toBeVisible();
    // @graph emits Service + FAQPage + BreadcrumbList for this page.
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(
      "\n",
    );
    expect(ld).toContain('"Service"');
    expect(ld).toContain('"FAQPage"');
    expect(ld).toContain('"BreadcrumbList"');
  });

  test("/opengraph-image returns the default PNG card", async ({ request }) => {
    const res = await request.get("/opengraph-image");
    expect(res.ok()).toBe(true);
    expect(res.headers()["content-type"]).toContain("image/png");
  });

  test("/og returns a per-page PNG card for a title", async ({ request }) => {
    const res = await request.get("/og?title=Web%20Development");
    expect(res.ok()).toBe(true);
    expect(res.headers()["content-type"]).toContain("image/png");
  });

  test("a page advertises a per-page og:image pointing at /og", async ({ page }) => {
    await page.goto("/pricing");
    const ogImage = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    expect(ogImage ?? "").toContain("/og?title=");
  });

  test("/dev/components renders and is noindex", async ({ page }) => {
    const response = await page.goto("/dev/components");
    expect(response?.ok(), "gallery should respond 2xx").toBe(true);
    await expect(page.getByRole("heading", { level: 1, name: /component gallery/i })).toBeVisible();
    const robots = await page.locator('meta[name="robots"]').getAttribute("content");
    expect(robots ?? "").toMatch(/noindex/i);
    expect(robots ?? "").toMatch(/nofollow/i);
  });

  test("contact Select highlights the active option (Base UI data-highlighted)", async ({
    page,
  }) => {
    // Regression guard: Base UI Select marks the hovered/arrow-key option with
    // `data-highlighted` (focus stays on the listbox), so the item highlight must
    // be driven off `data-highlighted`, not the stock template's Radix `focus:`.
    await page.goto("/contact");
    await page.locator("#contact-service").click();
    const firstItem = page.locator('[data-slot="select-item"]').first();
    await expect(firstItem).toBeVisible();
    await page.keyboard.press("ArrowDown");
    const highlighted = page.locator('[data-slot="select-item"][data-highlighted]').first();
    await expect(highlighted).toBeVisible();
    // The accent background must actually paint — not the transparent default.
    const bg = await highlighted.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(["rgba(0, 0, 0, 0)", "transparent", ""]).not.toContain(bg);
  });
});
