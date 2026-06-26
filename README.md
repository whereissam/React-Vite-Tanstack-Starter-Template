<div align="center">

# React · Vite · TanStack Starter

A modern, type-safe React starter template — **Vite**, **TanStack Router & Query**, **TailwindCSS v4**, and **shadcn/ui** on **Base UI** primitives.

[![CI](https://github.com/whereissam/React-Vite-Tanstack-Starter-Template/actions/workflows/ci.yml/badge.svg)](https://github.com/whereissam/React-Vite-Tanstack-Starter-Template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)

</div>

---

## Features

- **Vite 6** — lightning-fast dev server and build
- **React 19** — the latest React with modern features
- **TypeScript** — strict, end-to-end type safety
- **TailwindCSS v4** — utility-first styling via the new Vite plugin
- **shadcn/ui** — beautiful, accessible components on **Base UI** primitives
- **TanStack Router** — type-safe, file-based routing
- **TanStack Query** — data fetching, caching, and server state
- **Vitest** — unit testing with Testing Library
- **ESLint + Prettier** — linting and formatting (Tailwind class sorting) out of the box
- **AI-agent ready** — `AGENTS.md`, `llms.txt`, and `.mcp.json` so AI tools work productively in this repo
- **Pre-commit hooks** — lefthook + lint-staged auto-fix staged files
- **CI + Dependabot** — GitHub Actions (lint, typecheck, format, test, build) and weekly dependency updates

## Quick Start

> Click **["Use this template"](https://github.com/whereissam/React-Vite-Tanstack-Starter-Template/generate)** on GitHub to start a new repo from this starter.

```bash
# 1. Clone (or use the template button above)
git clone https://github.com/whereissam/React-Vite-Tanstack-Starter-Template.git
cd React-Vite-Tanstack-Starter-Template

# 2. Install dependencies
bun install

# 3. Start the dev server
bun run dev
```

Then open **[http://localhost:5173](http://localhost:5173)**.

> **Prerequisites:** [Bun](https://bun.sh) 1.0+ (Node.js 20.19+ / 22.12+ also works for the toolchain).

## Scripts

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `bun run dev`          | Start the development server                        |
| `bun run build`        | Type-check and build for production                 |
| `bun run preview`      | Preview the production build                        |
| `bun run lint`         | Run ESLint                                          |
| `bun run typecheck`    | Type-check only (`tsc --noEmit`)                    |
| `bun run format`       | Format all files with Prettier                      |
| `bun run format:check` | Check formatting without writing                    |
| `bun run check`        | Lint + typecheck + format check                     |
| `bun run verify`       | Full gate: check + test + build (run before "done") |
| `bun run test`         | Run the test suite once                             |
| `bun run test:watch`   | Run tests in watch mode                             |

## Components

This template ships with `button`, `card`, and `input` from **shadcn/ui**, built on **Base UI** primitives. Add more with the CLI — pass `--base base` so it installs the Base UI versions:

```bash
bunx shadcn@latest add dialog --base base
bunx shadcn@latest add dropdown-menu --base base
```

> **Migrating from Radix?** Base UI replaces the `asChild` prop with a `render` prop.
> To change a component's underlying element, pass an element to `render`:
>
> ```tsx
> // Radix:    <Button asChild><a href="/">Home</a></Button>
> // Base UI:  <Button render={<a href="/" />}>Home</Button>
> ```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (Base UI primitives)
│   └── ...              # app-level components (nav, theme, etc.)
├── lib/
│   └── utils.ts         # cn() and other helpers
├── routes/              # TanStack Router file-based routes
│   ├── __root.tsx       # Root layout route
│   └── index.tsx        # Home route (/)
├── test/
│   └── setup.ts         # Vitest + Testing Library setup
├── main.tsx             # App entry
└── index.css            # Tailwind + design tokens
```

## Tech Stack

| Layer          | Tools                                                        |
| -------------- | ------------------------------------------------------------ |
| **Framework**  | React 19, TypeScript                                         |
| **Build**      | Vite 6                                                       |
| **Routing**    | TanStack Router (file-based)                                 |
| **Data**       | TanStack Query                                               |
| **Styling**    | TailwindCSS v4, `class-variance-authority`, `tailwind-merge` |
| **Components** | shadcn/ui on Base UI, Lucide icons                           |
| **Testing**    | Vitest, Testing Library                                      |
| **Quality**    | ESLint, Prettier, lefthook, GitHub Actions CI, Dependabot    |

## Routing

Routing is file-based via TanStack Router — add a file in `src/routes/` and the route tree is generated automatically:

| File                        | Route         |
| --------------------------- | ------------- |
| `src/routes/index.tsx`      | `/`           |
| `src/routes/about.tsx`      | `/about`      |
| `src/routes/blog/index.tsx` | `/blog`       |
| `src/routes/blog/$slug.tsx` | `/blog/:slug` |

## Styling

TailwindCSS v4 is wired through the Vite plugin and a semantic design-token system (see [`docs/design-system.md`](./docs/design-system.md)). It supports:

- CSS-variable design tokens with light/dark mode
- Component variants with `class-variance-authority`
- Class merging with `tailwind-merge`

## Testing

Unit tests run on **Vitest** with **Testing Library** in a jsdom environment. Tests live next to the code they cover (e.g. `src/components/ui/button.test.tsx`):

```bash
bun run test         # run once
bun run test:watch   # watch mode
```

## AI-Agent Ready

This template is built to be productive with AI coding tools out of the box:

| File             | Purpose                                                           |
| ---------------- | ----------------------------------------------------------------- |
| `AGENTS.md`      | Canonical conventions read by Cursor, Copilot, Codex, and others  |
| `CLAUDE.md`      | Pointer to `AGENTS.md` for Claude Code                            |
| `llms.txt`       | Concise project map in the [llms.txt](https://llmstxt.org) format |
| `.cursor/rules/` | Cursor rule that defers to `AGENTS.md`                            |
| `.mcp.json`      | MCP servers (ships with Playwright for UI verification)           |

Guardrails keep AI-generated changes honest: ESLint + Prettier, a **lefthook**
pre-commit hook that auto-fixes staged files, a `bun run verify` gate (lint +
typecheck + format + test + build), and **Dependabot** for weekly dependency
updates.

## License

Released under the **MIT License** — free to use for personal and commercial projects.
