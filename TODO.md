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

## Backlog
- [ ] Add further shadcn/Base UI components on demand (`bunx shadcn@latest add <name> --base base`)
