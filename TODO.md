# TODO

## Done
- [x] Migrate UI primitives from Radix to **Base UI** (`@base-ui/react`)
  - [x] Rewrite `button.tsx` using `useRender` (`render` prop replaces `asChild`)
  - [x] Remove `@radix-ui/react-slot` and unused `@radix-ui/react-select`
  - [x] Add Vitest + Testing Library setup and `button.test.tsx`
  - [x] Update README, design-system docs, and add component instructions

## Backlog
- [ ] Add more shadcn/Base UI components as needed (`bunx shadcn@latest add <name> --base base`)
- [ ] Reconcile README's "React Router DOM" mention — not currently a dependency
- [ ] Consider a CI workflow running `lint`, `test`, and `build`
