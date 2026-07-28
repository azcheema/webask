import { expect, test, type Page } from "@playwright/test";

/*
 * Structured-data validation — the automated half of phase-1-mvp.md
 * "Validate every page's JSON-LD" (the Rich Results Test API ping stays a manual
 * launch step; it needs network and isn't free). Enforces the structural rules
 * from docs/strategy/schema-strategy.md § Validation on the REAL rendered output:
 *
 *   1. One canonical Organization @id sitewide (same value on every page).
 *   2. Every page emits a @graph that references the Organization by @id.
 *   3. No node mixes Person and Organization on the same @type.
 *   4. Every {@id} reference resolves to a node defined somewhere across the site.
 *   5. Breadcrumb positions are sequential from 1 with non-empty name + item.
 *   6. FAQ questions/answers are non-empty.
 *
 * It validates rendered HTML (not the lib/jsonld builders) so it can't drift from
 * what ships — per-page @graphs are composed in RSC modules a tsx script can't
 * import, which is why this lives here and not in scripts/check-*.ts.
 *
 * Each route also gets a light metadata check (canonical + description) so the
 * "generateMetadata on every page" audit is CI-enforced, not eyeballed once.
 */

type Route = {
  readonly path: string;
  /** Node @types the page's @graph must contain (beyond sitewide Org + WebSite). */
  readonly types: ReadonlyArray<string>;
  readonly hasBreadcrumbs: boolean;
  readonly hasFaq: boolean;
};

/** Schema.org page-frame types — exactly one per page anchors into the sitewide graph. */
const PAGE_FRAME_TYPES = ["WebPage", "CollectionPage"] as const;

/**
 * @id values that legitimately resolve on ANOTHER origin, and so can never be
 * satisfied by rule 4's cross-route union (which only crawls this host).
 *
 * The Organization carries `parentOrganization` → naxdor.com because WebAsk is
 * openly part of the Naxdor group (docs/00 § three-site map). Without this
 * whitelist the dangling-reference check below fails on every run.
 *
 * Keep in sync with `PARENT_ORG_ID` in lib/jsonld.ts. Add entries here ONLY for
 * genuinely external nodes — never to paper over a broken internal reference,
 * which is the failure this check exists to catch.
 */
const EXTERNAL_IDS = new Set<string>(["https://naxdor.com/#organization"]);

// One representative route per node-type composition. /about is mandatory here:
// the Organization's `founder` reference resolves to the Person node that only
// renders on /about, so the cross-route resolution check (rule 4) needs it.
const ROUTES: ReadonlyArray<Route> = [
  { path: "/", types: ["WebPage", "FAQPage"], hasBreadcrumbs: false, hasFaq: true },
  {
    path: "/services/web-development",
    types: ["WebPage", "Service", "BreadcrumbList", "FAQPage"],
    hasBreadcrumbs: true,
    hasFaq: true,
  },
  {
    path: "/pricing",
    types: ["WebPage", "BreadcrumbList", "FAQPage"],
    hasBreadcrumbs: true,
    hasFaq: true,
  },
  {
    path: "/about",
    types: ["WebPage", "BreadcrumbList", "Person"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
  { path: "/process", types: ["WebPage", "BreadcrumbList"], hasBreadcrumbs: true, hasFaq: false },
  {
    path: "/contact",
    types: ["WebPage", "BreadcrumbList", "FAQPage"],
    hasBreadcrumbs: true,
    hasFaq: true,
  },
  {
    path: "/free-audit",
    types: ["WebPage", "BreadcrumbList", "FAQPage"],
    hasBreadcrumbs: true,
    hasFaq: true,
  },
  {
    path: "/industries",
    types: ["WebPage", "BreadcrumbList"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
  {
    // Industry detail — validates the Service-with-audience composition.
    path: "/industries/aesthetic-clinics",
    types: ["WebPage", "Service", "BreadcrumbList", "FAQPage"],
    hasBreadcrumbs: true,
    hasFaq: true,
  },
  {
    path: "/locations",
    types: ["WebPage", "BreadcrumbList"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
  // The location hub and programmatic service × location routes are deliberately
  // absent in Phase 0: no area has authored copy yet, so neither prerenders. They
  // are NOT remapped to the UK slugs — a 404 emits the sitewide graph but no
  // WebPage frame, so this spec would fail on the frame count and the canonical
  // check rather than validating anything. Phase 2 restores both as
  // /locations/manchester and /services/crm-automation/manchester, which is also when the
  // areaServed City/AdministrativeArea shapes first get asserted.
  {
    // Blog index — CollectionPage frame (a listing, not a single content page).
    path: "/blog",
    types: ["CollectionPage", "BreadcrumbList"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
  {
    // Blog post — validates the Article + author Person composition. Ships
    // `noindex` while draft but still renders + emits its @graph.
    path: "/blog/local-seo-checklist-2026",
    types: ["WebPage", "Article", "BreadcrumbList", "Person"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
  {
    // Topic archive — CollectionPage frame, same shape as the index.
    path: "/blog/topic/seo",
    types: ["CollectionPage", "BreadcrumbList"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
  {
    // Case-studies index — CollectionPage frame. Ships `noindex` until the first
    // published study, but still renders + emits its @graph.
    path: "/case-studies",
    types: ["CollectionPage", "BreadcrumbList"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
  {
    // Case study detail (draft template fixture) — validates the dual-typed
    // CreativeWork + Article composition with `about` → the web-development
    // Service node (defined on /services/web-development, also crawled here, so
    // the cross-route @id resolution in rule 4 holds) + author Person.
    path: "/case-studies/example-case-study-template",
    types: ["WebPage", "Article", "CreativeWork", "BreadcrumbList", "Person"],
    hasBreadcrumbs: true,
    hasFaq: false,
  },
] as const;

type JsonLdNode = Record<string, unknown>;

/** Normalize @type (string or array) to a string[]. */
function typesOf(node: JsonLdNode): string[] {
  const t = node["@type"];
  if (typeof t === "string") return [t];
  if (Array.isArray(t)) return t.filter((x): x is string => typeof x === "string");
  return [];
}

/** Parse every `<script type="application/ld+json">` on the page into a flat node list. */
async function readGraphNodes(page: Page): Promise<JsonLdNode[]> {
  const texts = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(texts.length, "page must emit at least one JSON-LD block").toBeGreaterThan(0);

  const nodes: JsonLdNode[] = [];
  texts.forEach((text, i) => {
    let block: JsonLdNode;
    try {
      block = JSON.parse(text) as JsonLdNode;
    } catch (error) {
      throw new Error(
        `JSON-LD block #${i} is not valid JSON (${(error as Error).message}): ${text.slice(0, 200)}`,
      );
    }
    expect(block["@context"], `block #${i} @context`).toBe("https://schema.org");
    const graph = block["@graph"];
    expect(Array.isArray(graph), `block #${i} should carry a @graph array`).toBe(true);
    for (const node of graph as JsonLdNode[]) nodes.push(node);
  });
  return nodes;
}

/**
 * Walk a node tree, partitioning every object carrying an `@id` into:
 *  - `defined`: it also has `@type` (a real node), or
 *  - `referenced`: `@id`-only (a pointer to a node defined elsewhere).
 */
function collectIds(value: unknown, defined: Set<string>, referenced: Set<string>): void {
  if (Array.isArray(value)) {
    for (const item of value) collectIds(item, defined, referenced);
    return;
  }
  if (value === null || typeof value !== "object") return;

  const obj = value as JsonLdNode;
  const id = obj["@id"];
  if (typeof id === "string") {
    if ("@type" in obj) defined.add(id);
    else referenced.add(id);
  }
  for (const [key, child] of Object.entries(obj)) {
    if (key === "@id" || key === "@type") continue;
    collectIds(child, defined, referenced);
  }
}

function findByType(nodes: JsonLdNode[], type: string): JsonLdNode[] {
  return nodes.filter((node) => typesOf(node).includes(type));
}

for (const route of ROUTES) {
  test(`${route.path} — JSON-LD graph is well-formed`, async ({ page }) => {
    await page.goto(route.path);
    const nodes = await readGraphNodes(page);

    // ── Sitewide nodes (from the root layout) present on every page ──
    const orgs = findByType(nodes, "Organization");
    expect(orgs.length, "exactly one Organization node per page").toBe(1);
    const org = orgs[0]!;
    const orgId = org["@id"];
    expect(typeof orgId, "Organization needs an @id").toBe("string");
    expect(orgId as string).toMatch(/\/#organization$/);
    // Dual-typed Organization + ProfessionalService per schema-strategy.md.
    expect(typesOf(org)).toEqual(expect.arrayContaining(["Organization", "ProfessionalService"]));

    const websites = findByType(nodes, "WebSite");
    expect(websites.length, "exactly one WebSite node per page").toBe(1);
    const siteId = websites[0]!["@id"];
    expect(siteId as string).toMatch(/\/#website$/);

    // Rule 3: no Person/Organization type-mix on a single node.
    for (const node of nodes) {
      const t = typesOf(node);
      expect(
        t.includes("Person") && t.includes("Organization"),
        `node ${String(node["@id"])} must not mix Person and Organization`,
      ).toBe(false);
    }

    // ── Page frame (WebPage or CollectionPage) anchors into the sitewide graph ──
    const frames = nodes.filter((node) =>
      typesOf(node).some((t) => (PAGE_FRAME_TYPES as ReadonlyArray<string>).includes(t)),
    );
    expect(frames.length, "page must emit exactly one WebPage/CollectionPage node").toBe(1);
    const webpage = frames[0]!;
    expect((webpage["isPartOf"] as JsonLdNode | undefined)?.["@id"]).toBe(siteId);
    expect((webpage["about"] as JsonLdNode | undefined)?.["@id"]).toBe(orgId);

    // Rule 2: the page references the Organization by @id somewhere in its graph.
    const defined = new Set<string>();
    const referenced = new Set<string>();
    collectIds(nodes, defined, referenced);
    expect(referenced.has(orgId as string), "page must reference the Organization @id").toBe(true);

    // ── Per-page node types ──
    for (const type of route.types) {
      expect(findByType(nodes, type).length, `page must emit a ${type} node`).toBeGreaterThan(0);
    }

    // Rule 5: breadcrumbs sequential from 1, each item complete.
    if (route.hasBreadcrumbs) {
      const crumbs = findByType(nodes, "BreadcrumbList")[0]!;
      const items = crumbs["itemListElement"] as JsonLdNode[];
      expect(items.length, "breadcrumb trail must not be empty").toBeGreaterThan(0);
      items.forEach((item, i) => {
        expect(item["position"], `breadcrumb #${i} position`).toBe(i + 1);
        expect(String(item["name"] ?? "").length, `breadcrumb #${i} name`).toBeGreaterThan(0);
        expect(String(item["item"] ?? ""), `breadcrumb #${i} item url`).toMatch(/^https?:\/\//);
      });
    }

    // Rule 6: FAQ questions + answers non-empty.
    if (route.hasFaq) {
      const faq = findByType(nodes, "FAQPage")[0]!;
      const questions = faq["mainEntity"] as JsonLdNode[];
      expect(questions.length, "FAQPage must carry questions").toBeGreaterThan(0);
      for (const q of questions) {
        expect(String(q["name"] ?? "").trim().length, "FAQ question text").toBeGreaterThan(0);
        const answer = q["acceptedAnswer"] as JsonLdNode | undefined;
        expect(String(answer?.["text"] ?? "").trim().length, "FAQ answer text").toBeGreaterThan(0);
      }
    }

    // ── Metadata sweep: canonical + description on every page ──
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical, "page must declare a canonical").toBeTruthy();
    expect(new URL(canonical!).pathname).toBe(route.path);
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(
      String(description ?? "").trim().length,
      "page must have a meta description",
    ).toBeGreaterThan(0);
  });
}

/*
 * Rule 1 + 4 across the whole site: one canonical Organization @id everywhere,
 * and every {@id} reference resolves to a node defined on some crawled route.
 * Runs sequentially in a single test so it can accumulate the cross-route union.
 */
test("structured data is consistent across routes", async ({ page }) => {
  const definedAll = new Set<string>();
  const referencedAll = new Set<string>();
  const orgIds = new Set<string>();

  for (const route of ROUTES) {
    await page.goto(route.path);
    const nodes = await readGraphNodes(page);
    collectIds(nodes, definedAll, referencedAll);
    for (const org of findByType(nodes, "Organization")) {
      orgIds.add(String(org["@id"]));
    }
  }

  // Rule 1: a single canonical Organization identity sitewide.
  expect([...orgIds], "all pages must share one Organization @id").toHaveLength(1);

  // Rule 4: no dangling references (e.g. Organization.founder → the /about Person).
  // Cross-origin nodes we deliberately point at are exempt — see EXTERNAL_IDS.
  const dangling = [...referencedAll].filter((id) => !definedAll.has(id) && !EXTERNAL_IDS.has(id));
  expect(dangling, `unresolved @id references: ${dangling.join(", ")}`).toEqual([]);
});
