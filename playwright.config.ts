import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PORT ?? 3000);

/*
 * Remote mode — run the specs against a DEPLOYED site instead of a local
 * `next start`. Set PLAYWRIGHT_BASE_URL to the deployment's origin; no local
 * server is started. Exists because Vercel runs redirects at its edge, not in
 * the Next server, so `e2e/redirects.spec.ts` only proves cutover readiness
 * when it runs against Vercel (docs/launch-checklist.md, step D1).
 *
 * VERCEL_AUTOMATION_BYPASS_SECRET is sent as `x-vercel-protection-bypass` so
 * Deployment Protection lets the requests through. Deliberately NOT
 * `x-vercel-set-bypass-cookie`: that answers with an extra redirect to set the
 * cookie, which the redirect spec would count as a hop.
 */
const remoteBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
const baseURL = remoteBaseURL ?? `http://localhost:${PORT}`;

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  ...(isCI ? { workers: 1 } : {}),
  reporter: isCI ? [["github"], ["html", { open: "never" }]] : [["list"]],
  use: {
    baseURL,
    trace: "on-first-retry",
    ...(bypassSecret ? { extraHTTPHeaders: { "x-vercel-protection-bypass": bypassSecret } } : {}),
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  ...(remoteBaseURL
    ? {}
    : {
        webServer: {
          command: `corepack pnpm start --port ${PORT}`,
          url: baseURL,
          timeout: 120_000,
          reuseExistingServer: !isCI,
          stdout: "ignore",
          stderr: "pipe",
        },
      }),
});
