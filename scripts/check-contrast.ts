#!/usr/bin/env tsx
/*
 * Token-level contrast audit. Mirrors styles/tokens.css.
 *
 * Why a static check (not just axe-core/Lighthouse): axe only flags
 * contrast on elements that exist on the page being scanned. Token
 * regressions stay invisible until a page happens to consume the bad
 * pair — see the nav-shell text-fg-subtle 2.49:1 incident.
 *
 * Lighthouse also only scans pages that exist + the default theme
 * (light at launch). Dark-mode token pairs never get verified.
 *
 * Update the TOKENS map below whenever styles/tokens.css changes.
 */

type Mode = "light" | "dark";

const TOKENS: Record<Mode, Record<string, string>> = {
  light: {
    bg: "#fafafa",
    surface: "#ffffff",
    elevated: "#ffffff",
    border: "#e5e7ee",
    ring: "#0f766e",
    fg: "#0a0b14",
    "fg-muted": "#5c5f70",
    "fg-subtle": "#9ca0ae",
    "fg-on-brand": "#ffffff",
    "fg-on-accent": "#0a0b14",
    "brand-500": "#0f766e", // deep teal (D5)
    "accent-500": "#f97316", // warm orange — the accent scale moved off teal (D5)
    link: "#0f766e", // = brand-500 in light
    danger: "#b91c1c", // red-700 — also satisfies text-destructive on bg-destructive/10
    success: "#15803d", // green-700 — yellower than brand teal so badges stay distinct
    warning: "#b45309", // amber-700 — the old #f59e0b was 2.15:1 and unusable as text
  },
  dark: {
    bg: "#0a0b14",
    surface: "#1b1d24",
    elevated: "#2a2c36",
    border: "#2a2c36",
    ring: "#2dd4bf",
    fg: "#fafafa",
    "fg-muted": "#9ca0ae",
    "fg-subtle": "#5c5f70",
    "fg-on-brand": "#ffffff",
    "fg-on-accent": "#0a0b14",
    // Same as light, deliberately. doc 01 § D5 sets #2dd4bf here; white on that
    // is 1.86:1 and would make every primary button label unreadable. The lift
    // lives on `ring` instead. This pair is the reason the check exists.
    "brand-500": "#0f766e",
    "accent-500": "#fb923c",
    link: "#71d6c5", // brand-300 lifted for readable body links on dark
    danger: "#fca5a5", // red-300 — clears 4.5:1 on bg-destructive/20-over-surface
    success: "#4ade80", // green-400 — light-mode green is too dark on #0a0b14
    warning: "#fbbf24", // amber-400
  },
};

type Category = "body" | "ui" | "decorative";

type Pair = {
  fg: string;
  bg: string;
  category: Category;
  usage: string;
};

const PAIRS: readonly Pair[] = [
  // Body text — must hit 4.5:1 (WCAG 1.4.3)
  { fg: "fg", bg: "bg", category: "body", usage: "primary text on page bg" },
  { fg: "fg", bg: "surface", category: "body", usage: "primary text on card" },
  { fg: "fg", bg: "elevated", category: "body", usage: "primary text on popover/dialog" },
  { fg: "fg-muted", bg: "bg", category: "body", usage: "secondary text on page bg" },
  { fg: "fg-muted", bg: "surface", category: "body", usage: "secondary text on card" },
  { fg: "fg-on-brand", bg: "brand-500", category: "body", usage: "primary button label" },
  { fg: "fg-on-accent", bg: "accent-500", category: "body", usage: "accent button/badge label" },
  { fg: "link", bg: "bg", category: "body", usage: "link text on page bg" },
  { fg: "link", bg: "surface", category: "body", usage: "link text on card" },
  { fg: "danger", bg: "bg", category: "body", usage: "destructive text on page bg" },
  // Statuses gained real usage in the D5 rebrand: `success` now carries the
  // positive cue the teal accent used to (Callout variant="tip", Comparison
  // positive marker, contact-form success state), so it needs a text-grade
  // ratio, not just a fill-grade one.
  { fg: "success", bg: "bg", category: "body", usage: "success text on page bg" },
  { fg: "success", bg: "surface", category: "body", usage: "success text on card" },
  { fg: "warning", bg: "bg", category: "body", usage: "warning text on page bg" },

  // UI components — must hit 3:1 (WCAG 1.4.11)
  { fg: "ring", bg: "bg", category: "ui", usage: "focus ring on page bg" },
  { fg: "ring", bg: "surface", category: "ui", usage: "focus ring on card" },

  // Decorative — info only, not enforced
  { fg: "fg-subtle", bg: "bg", category: "decorative", usage: "hint/placeholder on page bg" },
  { fg: "fg-subtle", bg: "surface", category: "decorative", usage: "hint/placeholder on card" },
];

const THRESHOLD: Record<Category, number> = {
  body: 4.5,
  ui: 3.0,
  decorative: 0,
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace(/^#/, "");
  const value = parseInt(h, 16);
  return [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
}

function relativeLuminance([r, g, b]: readonly [number, number, number]): number {
  const lin = (channel: number) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrast(fg: string, bg: string): number {
  const lFg = relativeLuminance(hexToRgb(fg));
  const lBg = relativeLuminance(hexToRgb(bg));
  const [light, dark] = lFg > lBg ? [lFg, lBg] : [lBg, lFg];
  return (light + 0.05) / (dark + 0.05);
}

function audit(): number {
  let failures = 0;

  for (const mode of ["light", "dark"] as const) {
    console.log(`\n── ${mode} mode ──`);
    const map = TOKENS[mode];
    for (const pair of PAIRS) {
      const fgHex = map[pair.fg];
      const bgHex = map[pair.bg];
      if (!fgHex || !bgHex) {
        console.error(`  ✗ unresolved token: ${pair.fg} or ${pair.bg}`);
        failures++;
        continue;
      }
      const ratio = contrast(fgHex, bgHex);
      const min = THRESHOLD[pair.category];
      const ratioStr = ratio.toFixed(2).padStart(5);
      const pairStr = `${pair.fg.padEnd(14)} on ${pair.bg.padEnd(11)}`;
      const usageStr = `[${pair.category}]`.padEnd(13);

      if (pair.category === "decorative") {
        console.log(`  · ${ratioStr}:1  ${pairStr}  ${usageStr} ${pair.usage} (info)`);
      } else if (ratio + 1e-9 >= min) {
        console.log(`  ✓ ${ratioStr}:1  ${pairStr}  ${usageStr} ${pair.usage}`);
      } else {
        console.error(
          `  ✗ ${ratioStr}:1  ${pairStr}  ${usageStr} ${pair.usage} (needs ≥ ${min.toFixed(1)})`,
        );
        failures++;
      }
    }
  }
  return failures;
}

const failures = audit();
console.log(`\n${failures === 0 ? "✓ all pairs pass" : `✗ ${failures} failure(s)`}`);
process.exit(failures > 0 ? 1 : 0);
