# AGENTS.md — Project Conventions for AI Agents

This is the **canonical** instructions file for this repository. It is read by
AI coding tools that follow the [AGENTS.md](https://agents.md) standard
(Cursor, GitHub Copilot, Codex, and others). `CLAUDE.md` points here.

## Stack Overview

| Layer      | Tools                                                        |
| ---------- | ------------------------------------------------------------ |
| Framework  | React 19, TypeScript (strict)                                |
| Build      | Vite                                                         |
| Routing    | TanStack Router (file-based, codegen)                        |
| Data       | TanStack Query                                               |
| Styling    | TailwindCSS v4, `class-variance-authority`, `tailwind-merge` |
| Components | shadcn/ui on Base UI primitives, Lucide icons                |
| Testing    | Vitest + Testing Library (jsdom)                             |
| Quality    | ESLint, Prettier, lefthook pre-commit, GitHub Actions CI     |

## Key Commands

Always use **`bun`** (never npm/yarn) and **`bunx`** (never npx).

| Command                | What it does                                                              |
| ---------------------- | ------------------------------------------------------------------------- |
| `bun run dev`          | Start the dev server                                                      |
| `bun run build`        | Type-check and build for production                                       |
| `bun run lint`         | Run ESLint                                                                |
| `bun run typecheck`    | Type-check only (`tsc --noEmit`)                                          |
| `bun run format`       | Format all files with Prettier                                            |
| `bun run format:check` | Check formatting without writing                                          |
| `bun run test`         | Run the Vitest suite once                                                 |
| `bun run check`        | Lint + typecheck + format check                                           |
| `bun run verify`       | **Full gate: check + test + build. Run this before declaring work done.** |

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (Base UI primitives)
│   └── ...              # app-level components (nav, theme, etc.)
├── lib/utils.ts         # cn() and other helpers
├── routes/              # TanStack Router file-based routes (__root.tsx, index.tsx, ...)
├── test/setup.ts        # Vitest + Testing Library setup
├── main.tsx             # App entry
└── index.css            # Tailwind + design tokens
```

`src/routeTree.gen.ts` is **generated** — never edit it by hand.

## Tooling Rules

- ALWAYS use `bun` instead of `npm` or `yarn` for TypeScript/JavaScript.
- ALWAYS use `bunx` instead of `npx`.
- ALWAYS use `uv` for Python package management and virtual environments.
- For iOS, use `swift build` and `swift test`.

## File Conventions

- `AGENTS.md` and `CLAUDE.md` belong in the repo root, not in subdirectories.
- All new features must include tests in the appropriate test directory.
- Tests live next to the code they cover (e.g. `src/components/ui/button.test.tsx`).

## Post-Implementation Checklist (MANDATORY after every feature)

1. Run `bun run verify` and fix all failures.
2. Update `TODO.md` to mark completed items and add any new items discovered.
3. Update `README.md` if new features affect the public API or setup.
4. Provide a conventional commit message (`feat:`, `fix:`, `docs:`, etc.).
5. Never stage all files — only stage files related to the current task.

## Git Rules

- Only `git add` files that were modified in the current task.
- Never force push.
- Use separate commits for logically distinct changes when asked.

## MCP Servers

`.mcp.json` configures [Model Context Protocol](https://modelcontextprotocol.io)
servers for agents that support them (e.g. Claude Code). It ships with a
**Playwright** browser-automation server so agents can drive and verify the UI:

```jsonc
// runs on demand via bunx; no global install needed
"playwright": { "command": "bunx", "args": ["@playwright/mcp@latest"] }
```

`.mcp.json` must be strict JSON (no comments). To add a server, add another entry
under `mcpServers`. Tool-specific support varies; the file is additive and safe to
ignore for tools that don't read it.
