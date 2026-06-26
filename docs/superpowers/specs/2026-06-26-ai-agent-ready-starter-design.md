# Design: AI-Agent-Ready Starter Upgrade

**Date:** 2026-06-26
**Status:** Approved

## Goal

Differentiate this React/Vite/TanStack starter for the AI-coding era by making it
(1) **agent-native** — the files AI tools read to be productive — and
(2) **guarded** — pre-solving the mistakes AI agents repeatedly make (lint/format
slips, unverified "done", stale deps).

Scaffolding is commodity now; the template's value is being the codebase agents
work best inside of.

## Part 1 — Agent-native files

### AGENTS.md (new, canonical)

Single source of truth for conventions. Migrates all current `CLAUDE.md` content
(bun/bunx tooling rules, file conventions, post-implementation checklist, git
rules) and adds agent-oriented context:

- Stack overview: React 19, Vite, TanStack Router, TanStack Query, Tailwind v4,
  Base UI, Vitest.
- Key commands table: `dev`, `build`, `lint`, `typecheck`, `format`, `test`,
  `verify`.
- Project structure map: where routes, components, and UI primitives live.
- MCP section: how to use/add MCP servers (since `.mcp.json` can't hold comments).

### CLAUDE.md (reduced)

Becomes a one-line pointer: "See [AGENTS.md](./AGENTS.md) for all project
conventions." Eliminates duplication and drift.

### llms.txt (new, root)

Concise curated map in the llms.txt format (https://llmstxt.org): what the project
is, stack, entry points, commands, and a link to AGENTS.md.

### .cursor/rules/project.mdc (new)

Minimal Cursor rule instructing the tool to follow AGENTS.md, so conventions
travel to Cursor as well as Claude/Codex/Copilot.

### .mcp.json (new)

Playwright (browser-automation) MCP server entry via `bunx @playwright/mcp`, so
agents can verify UI. Must be strict JSON (no inline comments); usage/extension
notes live in the AGENTS.md MCP section.

## Part 2 — Pre-solve what AI gets wrong

### Formatting

Add Prettier + `prettier-plugin-tailwindcss` (auto-sorts Tailwind classes) +
`eslint-config-prettier` (disables ESLint rules that conflict with Prettier).
New files: `.prettierrc`, `.prettierignore`.

### Unified scripts (package.json)

| Script         | Behavior                                                                                |
| -------------- | --------------------------------------------------------------------------------------- |
| `typecheck`    | `tsc --noEmit`                                                                          |
| `format`       | `prettier --write .`                                                                    |
| `format:check` | `prettier --check .`                                                                    |
| `check`        | `lint` + `typecheck` + `format:check`                                                   |
| `verify`       | `check` + `test` + `build` — the command agents run to self-check before declaring done |

`prepare` script runs `lefthook install` so hooks set up on `bun install`.

### Pre-commit hook

lefthook + lint-staged. On staged files only: `eslint --fix` then
`prettier --write`. Fast (sub-second), does not block on unrelated errors.

### CI (.github/workflows/ci.yml)

Extend existing pipeline with `typecheck` and `format:check` steps. Keep
`bun install --frozen-lockfile`.

### Dependency automation (.github/dependabot.yml)

Weekly updates for `npm` and `github-actions` ecosystems, with minor/patch updates
grouped to reduce PR noise.

## Testing approach

These are configuration artifacts, not runtime features, so conventional unit
tests do not apply. Verification instead:

1. `bun run verify` passes end-to-end (lint, typecheck, format:check, test, build).
2. The pre-commit hook fires: staging a deliberately-unformatted file and
   committing auto-fixes it.
3. Existing Vitest suite (10 tests) still passes.

This is called out explicitly rather than adding hollow tests.

## Out of scope (deferred to later specs)

- Major version upgrades (vite 6→8, eslint 9→10).
- #3 AI-app on-ramp (streaming Claude example, typed env validation, server
  function for key safety).

## Risks / notes

- `.mcp.json` is Claude Code-specific and strict JSON; cross-tool MCP support
  varies. Acceptable — it is additive and documented.
- lefthook adds a `prepare` step; contributors who skip `bun install` won't get
  hooks, but CI still enforces the same checks.
