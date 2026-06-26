# TODO

## Done

- [x] Migrate UI primitives from Radix to **Base UI** (`@base-ui/react`)
  - [x] Rewrite `button.tsx` using `useRender` (`render` prop replaces `asChild`)
  - [x] Remove `@radix-ui/react-slot` and unused `@radix-ui/react-select`
  - [x] Add Vitest + Testing Library setup and `button.test.tsx`
  - [x] Update README, design-system docs, and add component instructions
- [x] Add baseline shadcn components: `card` and `input` (with tests)
- [x] Reconcile README — removed the "React Router DOM" mention (not a dependency; routing is TanStack Router)
- [x] Add CI workflow (`.github/workflows/ci.yml`) running `lint`, `test`, and `build`
- [x] AI-agent-ready upgrade ([spec](docs/superpowers/specs/2026-06-26-ai-agent-ready-starter-design.md))
  - [x] Add `AGENTS.md` (canonical) + reduce `CLAUDE.md` to a pointer
  - [x] Add `llms.txt`, `.cursor/rules/project.mdc`, and `.mcp.json` (Playwright)
  - [x] Add Prettier (+ Tailwind class sorting) and `eslint-config-prettier`
  - [x] Add `typecheck`, `format`, `check`, and `verify` scripts
  - [x] Add lefthook + lint-staged pre-commit hook
  - [x] Extend CI with `typecheck` + `format:check`; add `.github/dependabot.yml`

- [x] Major dependency upgrades (vite 6→8, eslint 9→10, TS 5.8→6, lucide 0→1) — `bun audit` now clean
  - [x] Drop deprecated `baseUrl` from tsconfigs (TS 6)
  - [x] Add `overrides.vite` to dedupe vite (vitest/@tailwindcss/vite pulled vite 6)
  - [x] Replace removed `Github` lucide icon with `Rocket`

## Backlog

- [ ] Add further shadcn/Base UI components on demand (`bunx shadcn@latest add <name> --base base`)
- [ ] AI-app on-ramp: streaming Claude example, typed env validation, server function for key safety
