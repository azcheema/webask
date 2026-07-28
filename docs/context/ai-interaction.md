# AI Interaction Guidelines

> The canonical workflow contract for any AI agent working in this project. Read this first; project context is in `d:\naxdor\CLAUDE.md` (auto-loaded), planning docs in `docs/`.

---

## Communication

- Be concise and direct.
- Explain non-obvious decisions briefly.
- Ask before large refactors, architectural changes, or pulling future-phase scope forward.
- Don't add features not in the project spec (the phase doc is the spec).
- Never delete files without clarification.
- If a doc and the code disagree, the doc is canonical until updated.

---

## Project structure: phases & features

The Naxdor build is split into **7 phases** (0 → 6). Each phase is a complete, shippable unit with its own doc in `docs/phases/phase-N-*.md`.

Inside a phase, work is broken into **features** (a.k.a. chunks). A feature is a single logical piece of work — a few hours to a day. Examples from Phase 0:

- `scaffold-nextjs` — Next.js 16.2.6 + TS + Tailwind v4.3 + shadcn (Base UI) project init
- `design-tokens` — `styles/tokens.css` populated per `docs/strategy/design-system.md`
- `seo-scaffolding` — `lib/seo.ts`, `lib/jsonld.ts`, root metadata, sitemap, robots
- `ci-pipeline` — GitHub Actions: lint → typecheck → build → Lighthouse CI
- `brand-assets` — move logos to `public/brand/`, optimize SVGs, recreate favicon, generate icon sizes

Each feature gets its own branch, its own `current-feature.md` update, and its own merge.

---

## Workflow — one feature, end to end

This is the workflow for every single feature. Follow it in order; don't skip.

1. **Pick the feature** — open the current phase doc (`docs/phases/phase-N-*.md`), pick the next unchecked task or chunk of tasks. Confirm with user if scope is ambiguous.
2. **Document** — populate `docs/context/current-feature.md` with the feature name, status `In Progress`, goals, and any notes. This is the active-work pointer.
3. **Branch** — create a new branch: `feature/[feature-name]` (or `fix/[fix-name]`, `chore/[name]`). Branch off `main`.
4. **Plan** — if the feature has 3+ subtasks, use TodoWrite to break it down. One in-progress at a time.
5. **Implement** — write the code. Match existing patterns. Use the design tokens. Never hardcode hex/spacing/font sizes.
6. **Test** — verify it works:
   - `pnpm typecheck` — zero errors
   - `pnpm lint` — zero warnings
   - `pnpm build` — succeeds (Turbopack production build)
   - **Manual browser check** for any UI work (real browser, both mobile + desktop viewports)
   - Run Playwright smoke tests if relevant: `pnpm test:e2e`
   - Run Lighthouse CI for any new route: `pnpm lhci`
7. **Iterate** — fix anything that fails. Re-test. Don't move to commit until everything passes.
8. **Commit** — only after build passes and everything works. **Ask user for permission to commit.** Use conventional commit messages (see § Commits).
9. **Merge** — open PR (if remote) or merge locally; squash-merge by default to keep `main` clean.
10. **Delete branch** — after merge, ask user to confirm, then delete the branch.
11. **Update `current-feature.md`** — flip Status to `Completed`, add a one-line summary to the `History` section. The History entry becomes the permanent record of what shipped.
12. **Tick the phase doc** — update the relevant checkboxes in `docs/phases/phase-N-*.md`.
13. **Propagate cross-phase impact** — if this feature affects any other phase's plan, update those phase docs and CLAUDE.md now (see § Cross-phase impact below). Don't carry undocumented surprises forward.

**Do NOT commit without permission.** Do NOT commit if the build fails. Fix the build first.

---

## Cross-phase impact

If a feature changes something that affects another phase's plan — a new dependency, a data-model change, a doc that's now wrong, a future task that no longer applies, a new risk — **update the affected phase doc(s) before merging the feature.** Don't carry undocumented surprises into a future phase.

**Examples:**

- Phase 0 adds a new `lib/` utility → check whether Phase 1's contact form should use it instead of duplicating logic
- Phase 1 changes a `data/` model → update Phase 2's service / location / industry templates that consume it
- Phase 2 discovers a programmatic-page gotcha → add a note or new task to Phase 4's scale-up plan
- Phase 3 needs a build script Phase 0 didn't add → log it as a Phase 0 carry-forward AND add it to Phase 3 dependencies
- A locked decision changes mid-flight → update CLAUDE.md, the relevant strategy doc, AND every phase doc that references it

**Process when you spot cross-phase impact:**

1. Note it in `current-feature.md` under `Notes`.
2. Update the affected phase doc(s) — modify tasks, dependencies, or risks as needed.
3. Update CLAUDE.md if a locked decision shifts.
4. Mention the cross-phase update in the commit body: e.g. `Updates phase-2 deps + adds task to phase-4`.
5. If the impact is large (forces a phase reorder, breaks an acceptance criterion, invalidates committed work) — **stop and surface it to the user** before proceeding.

The point: future-you (or a fresh-context session) should never be surprised by a "this was decided in Phase 1 but never recorded" gotcha.

---

## Phase boundaries

Between features inside a phase: continue without ceremony (next feature, next branch).

When the phase doc's **Acceptance criteria** are all green:

1. Run every acceptance criterion as a single final check.
2. Update the phase doc with completion notes + any deviations.
3. Update the **Project state** table in `d:\naxdor\CLAUDE.md` to mark the phase Completed.
4. Brief retro (3–5 lines): what shipped, what slipped, carry-forwards, any new open decisions.
5. **Safe to `/clear` context here** — CLAUDE.md + memory + docs + git all carry forward.

Do NOT start the next phase if the current phase has open bugs or unmet acceptance.

---

## Branching

- One branch per feature/fix/chore. Don't combine unrelated work.
- Naming:
  - `feature/[name]` for new functionality (e.g. `feature/design-tokens`, `feature/contact-form`)
  - `fix/[name]` for bug fixes (e.g. `fix/header-overflow-mobile`)
  - `chore/[name]` for tooling, deps, docs (e.g. `chore/upgrade-tailwind`, `chore/update-readme`)
- Branch off latest `main`. Rebase if `main` advances during the feature.
- Delete branches after merge (ask user first).

---

## Commits

- **Ask before committing** — never auto-commit.
- Conventional commit messages: `type(scope): subject`
  - Types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`
  - Scope: feature area (`seo`, `forms`, `nav`, `home`, `phase-0`, etc.) — optional but encouraged
  - Subject: imperative present tense, lowercase, no period. ≤ 72 chars.
  - Examples:
    - `feat(seo): add typed JSON-LD organization node`
    - `fix(forms): handle empty company field gracefully`
    - `chore(deps): bump next to 16.2.6`
    - `docs(phase-0): tick design-tokens completion`
- Keep commits focused — one feature/fix per commit; many small commits beat one giant commit.
- **Never put "Generated With Claude" or any AI attribution in commit messages.**
- Body (optional): explain the _why_ if it's non-obvious. Reference the phase + feature: `Phase 0 · design-tokens`.

---

## When stuck

- If something isn't working after 2–3 attempts, **stop and explain the issue.** Don't keep trying random fixes.
- Ask for clarification if requirements are unclear.
- If the user's instruction conflicts with a locked decision or doc, surface the conflict rather than silently overriding.

---

## Code changes

- Make minimal changes to accomplish the task. No drive-by refactors.
- Don't refactor unrelated code unless asked.
- Don't add "nice to have" features outside the feature's scope.
- Preserve existing patterns in the codebase. If you must break a pattern, explain why.
- Honor the design tokens — never hardcode hex / spacing / font sizes.

---

## Code review

Review AI-generated code periodically and on demand, especially for:

- **Security** — auth checks, input validation (zod on every boundary), XSS, CSRF, file upload validation
- **Performance** — unnecessary re-renders, large client bundles, Core Web Vitals impact
- **Logic errors** — edge cases, off-by-one, null/undefined handling (TS strict catches a lot of these)
- **Patterns** — matches existing codebase? Uses design tokens? Follows `docs/context/coding-standards.md`?
- **Accessibility** — keyboard nav, focus rings, aria labels, contrast, target size (≥ 24×24 CSS px)
- **SEO** — title + meta + canonical + JSON-LD present on every new route

---

## What's tracked where

| Concern                                       | Lives in                                                           |
| --------------------------------------------- | ------------------------------------------------------------------ |
| Project context, locked decisions             | `d:\naxdor\CLAUDE.md` (auto-loaded)                                |
| **Active feature being worked on**            | `docs/context/current-feature.md`                                  |
| Code conventions, stack-specific rules        | `docs/context/coding-standards.md`                                 |
| **This workflow contract**                    | `docs/context/ai-interaction.md` (you are here)                    |
| Phase plans + acceptance criteria             | `docs/phases/phase-N-*.md`                                         |
| Topic deep-dives (SEO, design, content, etc.) | `docs/strategy/*.md`                                               |
| Permanent master plan                         | `C:\Users\azche\.claude\plans\we-have-started-a-robust-cascade.md` |
| Audit trail of shipped work                   | `git log` + `current-feature.md` History                           |

---

## Cold-start session checklist

When you start a fresh session (cleared context or new terminal):

1. CLAUDE.md auto-loads.
2. Read `docs/context/ai-interaction.md` (this file).
3. Read `docs/context/coding-standards.md`.
4. Read `docs/context/current-feature.md` — see what's in progress.
5. Check Project state in CLAUDE.md — which phase are we on?
6. `git log --oneline -20` — see recent work.
7. `pnpm typecheck && pnpm build` — confirm clean baseline.
8. Ask the user: **"Picking up at Phase N, feature [name from current-feature.md]?"** before proceeding.
