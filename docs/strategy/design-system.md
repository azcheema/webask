# Design System

> The visual contract that makes the site look like one product. Phase 0 deliverable.

---

## Design pillars (the constraints)

1. **Performance is a design decision.** 1-second mobile delay ≈ −20% conversions.
2. **Whitespace is the loudest element.** Intentional breathing room around CTAs lifts CTR ~20%.
3. **Motion serves comprehension, never decoration.** All animation reinforces a state change or guides focus. `prefers-reduced-motion` always respected.
4. **Accessibility is non-negotiable.** WCAG 2.2 AA minimum, Lighthouse a11y = 100 in CI.
5. **Mobile-first.** 360px is the design canvas; desktop is the enhancement.
6. **One job per page.** One primary CTA per viewport. Secondary actions look secondary.

---

## Tokens

All tokens live in `styles/tokens.css` as CSS variables, mirrored into Tailwind v4's `@theme` block. Never hardcode a hex, spacing, or font size in a component.

### Color — semantic naming, not visual

**Palette: Electric (locked 2026-05-23).** Modern tech-confident palette: electric indigo primary, vivid teal accent, cool-neutral grays. Optimized to make the bold geometric logo feel like a real product, not an agency template. Works equally well across our launch verticals (med-spa, dental, beauty) and general SMB audiences.

```css
@theme {
  /* ─── Brand: Electric Indigo ─────────────────────────── */
  --color-brand-50: #f4f3ff;
  --color-brand-100: #e5e2ff;
  --color-brand-200: #c9c2ff;
  --color-brand-300: #a89dfc;
  --color-brand-400: #8576f0;
  --color-brand-500: #5b4cdb; /* PRIMARY — CTAs, links, focus rings */
  --color-brand-600: #4738b8;
  --color-brand-700: #382b91;
  --color-brand-800: #2a2070;
  --color-brand-900: #1d1654;
  --color-brand-950: #0f0b35;

  /* ─── Accent: Vivid Teal ─────────────────────────────── */
  --color-accent-50: #e6fffa;
  --color-accent-100: #bffcee;
  --color-accent-200: #8af6de;
  --color-accent-300: #5ceccc;
  --color-accent-400: #2ee1b7;
  --color-accent-500: #00d4b4; /* ACCENT — badges, highlights, success cues */
  --color-accent-600: #00b79b;
  --color-accent-700: #00937c;
  --color-accent-800: #00735f;
  --color-accent-900: #00564a;
  --color-accent-950: #002e28;

  /* ─── Neutral: Cool Gray (slightly indigo-tinged) ──── */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f5f7;
  --color-neutral-200: #e5e7ee;
  --color-neutral-300: #d1d4dd;
  --color-neutral-400: #9ca0ae;
  --color-neutral-500: #5c5f70;
  --color-neutral-600: #4a4d5c;
  --color-neutral-700: #3a3d49;
  --color-neutral-800: #2a2c36;
  --color-neutral-900: #1b1d24;
  --color-neutral-950: #0a0b14;

  /* ─── Semantic ───────────────────────────────────────── */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-info: #3b82f6;

  /* ─── Surface (light mode default) ───────────────────── */
  --color-bg: var(--color-neutral-50); /* page bg */
  --color-surface: #ffffff; /* cards */
  --color-elevated: #ffffff; /* modals, popovers */
  --color-overlay: rgb(10 11 20 / 0.6);
  --color-border: var(--color-neutral-200);
  --color-ring: var(--color-brand-500);

  /* ─── Foreground ─────────────────────────────────────── */
  --color-fg: var(--color-neutral-950); /* body text */
  --color-fg-muted: var(--color-neutral-500); /* secondary text */
  --color-fg-subtle: var(--color-neutral-400); /* captions */
  --color-fg-on-brand: #ffffff; /* text on brand-500+ */
  --color-fg-on-accent: var(--color-neutral-950); /* text on accent-500 (teal is light) */
}
```

### Dark mode

```css
[data-theme="dark"] {
  --color-bg: var(--color-neutral-950); /* #0A0B14 */
  --color-surface: var(--color-neutral-900); /* #1B1D24 */
  --color-elevated: var(--color-neutral-800); /* #2A2C36 */
  --color-overlay: rgb(0 0 0 / 0.7);
  --color-border: var(--color-neutral-800);
  --color-ring: #7b6bff; /* lifted indigo, more visible on dark */

  --color-fg: var(--color-neutral-50);
  --color-fg-muted: var(--color-neutral-400);
  --color-fg-subtle: var(--color-neutral-500);
  --color-fg-on-brand: #ffffff;
  --color-fg-on-accent: var(--color-neutral-950);

  /* Brand & accent shift up one step for visibility on dark surfaces */
  --color-brand-500: #7b6bff;
  --color-accent-500: #00e5c3;
}
```

### Contrast verification (light mode, body text)

| Pairing                                                      | Ratio      | WCAG                 |
| ------------------------------------------------------------ | ---------- | -------------------- |
| `--color-fg` `#0A0B14` on `--color-bg` `#FAFAFA`             | **18.7:1** | AAA                  |
| `--color-fg` on `#FFFFFF` (surface)                          | **19.6:1** | AAA                  |
| `--color-fg-muted` `#5C5F70` on `#FAFAFA`                    | **6.4:1**  | AAA                  |
| `--color-brand-500` `#5B4CDB` link on white                  | **5.8:1**  | AA large + AA normal |
| `#FFFFFF` text on `--color-brand-500` button                 | **5.8:1**  | AA                   |
| `--color-neutral-950` text on `--color-accent-500` `#00D4B4` | **8.9:1**  | AAA                  |

All pairings exceed our budget in `performance-accessibility.md`.

### Logo usage

- **Black wordmark** (`Black Trans.png`) on `--color-bg` / `--color-surface` (any light surface).
- **White wordmark** (`White Trans.png`) on `--color-brand-500/700/950` or dark mode surfaces.
- **Favicon** (`NX/DR` stacked) for tab icon, apple-touch, OG-image fallback.
- Logos will be moved from `images/` to `public/brand/` during Phase 0 scaffold.
- Minimum clear-space around the wordmark: equal to the height of one letter.
- Don't recolor the wordmark — only ever black or white. The accent indigo never replaces the logo color.

### Dark mode

Toggle via `data-theme="dark"` on `<html>`. Same token names, different values.

```css
[data-theme="dark"] {
  --color-bg: var(--color-neutral-950);
  --color-surface: var(--color-neutral-900);
  --color-elevated: var(--color-neutral-800);
  --color-fg: var(--color-neutral-50);
  --color-fg-muted: var(--color-neutral-400);
  --color-border: var(--color-neutral-800);
}
```

Default: respect system preference; user override persisted in localStorage.

### Contrast budget

| Pairing                               | Minimum             |
| ------------------------------------- | ------------------- |
| Body text on bg                       | 7:1 (AAA preferred) |
| Large text (≥18pt or 14pt bold) on bg | 4.5:1               |
| UI components / focus rings           | 3:1                 |
| Brand primary button text             | 4.5:1               |

Verified in Phase 0 with `axe-core` + manual checks. Re-verified whenever a token changes.

### Typography

| Token         | Size / line-height              | Use                     |
| ------------- | ------------------------------- | ----------------------- |
| `display-2xl` | clamp(48px, 6vw, 80px) / 1.05   | Home hero only          |
| `display-xl`  | clamp(40px, 5vw, 64px) / 1.1    | Service / industry hero |
| `display`     | clamp(32px, 4vw, 48px) / 1.15   | Section openers         |
| `h1`          | clamp(28px, 3.5vw, 40px) / 1.2  | Page H1                 |
| `h2`          | clamp(24px, 2.5vw, 32px) / 1.25 | Section H2              |
| `h3`          | 24px / 1.3                      | Sub-section H3          |
| `h4`          | 20px / 1.35                     | Card titles             |
| `body-lg`     | 18px / 1.6                      | Marketing body          |
| `body`        | 16px / 1.6                      | Default                 |
| `body-sm`     | 14px / 1.5                      | Captions, metadata      |
| `caption`     | 12px / 1.4                      | Tiny print              |

**Families** (finalized in Phase 0):

- Display: **Geist** (primary recommendation) — pairs naturally with the bold geometric logo and signals modern engineering. Inter is the fallback if Geist licensing/availability shifts.
- Mono: **Geist Mono** (matches display family) — used in code blocks and tabular pricing data.
- No serif body — slows reading on screens at our sizes.

Self-host via `next/font/google` for performance + privacy.

### Spacing scale (×4px base)

`0, 0.5 (2px), 1, 1.5, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48`

Use multiples consistently. No `padding: 13px` ever.

### Radius scale

`none (0), sm (4), md (6), lg (8), xl (12), 2xl (16), 3xl (24), full (9999)`

Defaults: buttons `md`, cards `xl`, modals `2xl`, avatars `full`.

### Shadow scale

`xs, sm, md, lg, xl, 2xl` — use sparingly. Most cards use a 1px border + subtle `sm` shadow instead of elevation drama.

### Motion

| Token                   | Value                               |
| ----------------------- | ----------------------------------- |
| `--motion-duration-75`  | 75ms                                |
| `--motion-duration-150` | 150ms                               |
| `--motion-duration-250` | 250ms                               |
| `--motion-duration-400` | 400ms                               |
| `--motion-duration-600` | 600ms                               |
| `--motion-ease-in`      | `cubic-bezier(0.4, 0, 1, 1)`        |
| `--motion-ease-out`     | `cubic-bezier(0, 0, 0.2, 1)`        |
| `--motion-ease-in-out`  | `cubic-bezier(0.4, 0, 0.2, 1)`      |
| `--motion-spring`       | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

**Honor `prefers-reduced-motion: reduce`** — collapse to `0ms` durations.

### Breakpoints

```css
@theme {
  --breakpoint-xs: 480px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

Design canvas at: **360**, 768, 1024, 1280.

---

## Component inventory

Built once in Phase 0; reused across every page.

### Layout primitives

- `Container` — max-width wrapper (default `max-w-7xl`, configurable)
- `Section` — vertical padding wrapper, alternating bg
- `Grid` — CSS-grid helper
- `Stack` — flex-column with consistent gap
- `Divider` — horizontal/vertical rule

### Marketing blocks

- `Hero` — variants: `home`, `service`, `location`, `industry`
- `LogoCloud` — partner / client logos strip
- `FeatureGrid` — N×2 or 3-column feature blocks
- `BentoGrid` — services bento layout for the home
- `Stats` — large-numeral stat row
- `Testimonial` — quote + avatar + role + company
- `PricingCard` — single tier (we don't show full multi-tier on launch)
- `FaqAccordion` — built on shadcn `accordion`, expanded by default for SEO
- `CtaBand` — full-bleed CTA strip
- `CaseStudyCard` — image + headline outcome metric + service tags
- `BlogCard` — image + title + read time + topic tag
- `ServiceCard` — icon + name + tagline + starting price + link
- `LocationCard` — city name + state + service count + link
- `IndustryCard` — icon + name + 1-line problem we solve + link
- `ProcessSteps` — 4-step horizontal/vertical process visual
- `ComparisonTable` — for blog posts comparing tools (GHL vs HubSpot, etc.)

### Navigation

- `Header` — sticky, blur-on-scroll, with mega-menu
- `MobileNav` — full-screen sheet
- `Footer`
- `Breadcrumbs`
- `TableOfContents` — for blog posts > 1,000 words

### Forms

- `ContactForm` — zod + react-hook-form + Server Action + Resend
- `NewsletterForm` _(Phase 3)_

### UI primitives (shadcn, Base UI engine)

Button, Card, Input, Textarea, Label, Select, Combobox, Dialog, Sheet, Tabs, Accordion, Badge, Separator, Tooltip, Skeleton, Toast, NavigationMenu, DropdownMenu, Popover, Command, Avatar, AspectRatio, ScrollArea.

### SEO helpers

- `<JsonLd data={...}>` — typed via `schema-dts`
- `<Canonical url={...}>` — only when not using Metadata API
- `<RichSnippet>` — wrapper for FAQ / HowTo blocks that also render JSON-LD

---

## Reference UIs

> Locked 2026-05-25. Don't re-litigate.

We channel the **Tech-credibility lean**: Vercel, Linear, Resend, Stripe, Cursor. The Electric Indigo + Geist + bold-geometric logo combination reads as "real engineers who ship" — these sites set the bar for that register.

Per-block mapping (used as the anchor when we build `marketing-blocks-mvp` in Phase 1):

| Block                   | Reference                        | What we lift                                                                                                                                             |
| ----------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home hero               | Vercel / Cursor                  | Soft gradient or subtle abstract full-bleed, bold display headline (`display-2xl`), one primary CTA + one secondary, no stock photography                |
| Sectioning rhythm       | Stripe                           | Generous vertical padding, alternating surface vs. bg, big section H2 + tight intro paragraph                                                            |
| FeatureGrid / BentoGrid | Linear                           | 2- or 3-column, icon-led, micro-headlines, 1px border + subtle surface elevation, no heavy shadows                                                       |
| Service pages           | Resend                           | Dense but breathable; "Starting at $X" prominent; sub-section per H2; FAQ accordion at bottom; shiki code snippets where relevant                        |
| Stats / proof           | Stripe                           | Large numerals (`display-xl`), short caption, brand-color highlight on the unit                                                                          |
| Pricing card            | Linear / Vercel                  | Single tier ("Starting at $X" + custom-quote CTA), no fake multi-tier comparison                                                                         |
| Testimonials            | Vercel                           | Quote + avatar + name + role + company on a neutral surface; no stock photo treatment                                                                    |
| Industry pages          | Same family + one photo per fold | Photography only where it adds credibility (real clinic, real outcome). Block layout matches home — keep the visual register consistent across audiences |
| Footer                  | Linear                           | Dense link columns; brand mark + tagline left; fine print at the bottom                                                                                  |

What we are **not** chasing:

- Agency-showcase aesthetics (Basic, Active Theory, Locomotive). Heavy on scroll-animation wow, weaker on conversion + Core Web Vitals discipline.
- Clinic-warmth aesthetics (Maven, Hims & Hers, Glossier) at the site level. Home + service pages must read as a digital-services agency, not a clinic. Industry pages stay in the same visual register — they shift via content + one supporting image per fold, not via a different design language.

If a design choice would make us look more like an agency-showcase or clinic-warmth site than a Vercel/Linear/Resend/Stripe peer, pick the peer instead.

---

## Visual language guidelines

- **Density.** Above-the-fold heroes use 60–80vh; subsequent sections breathe — never cram.
- **Imagery.** Photography over illustration for trust. Real product/screenshot UI over stock photos. AVIF, ≤ 80KB hero.
- **Iconography.** Single style — Lucide outline, 24px default, brand-color or neutral-700.
- **Borders.** 1px subtle (`--color-border`) preferred to heavy shadow.
- **Buttons.** Solid for primary CTA, outline for secondary, ghost for tertiary. Never more than one primary in view.
- **Cards.** Border + subtle shadow + lift-on-hover (3px translate-Y, 250ms ease-out). No card animations on `prefers-reduced-motion`.
- **Focus rings.** Always visible. 2px solid `var(--color-ring)` + 2px offset.
- **Loading states.** Skeleton over spinner whenever feasible.

---

## Brand-asset deliverables (Phase 0)

- Logo: wordmark + lockup, light/dark variants, SVG
- Favicon: 32×32, 16×16, plus `apple-touch-icon` 180×180
- OG default image: 1200×630
- Touch icons + manifest for installable PWA _(future)_
- Color tokens locked in `tokens.css`
- Typography pair locked
- Photography direction doc (mood-board) for case study imagery

---

## Design-system review process

- New component PRs require a Storybook (or `/docs` route) entry showing all states.
- Token changes require a sweep: any `#hex` or magic-number spacing in `components/**` fails CI.
- Quarterly review: prune unused tokens, audit motion budget, re-run contrast audit.
