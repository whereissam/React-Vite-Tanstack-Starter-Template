# Design System

This project uses a shadcn-style semantic token system with a warm neutral palette and terracotta primary accent (inspired by the Claude theme style from TweakCN).

## Foundations

- Stack: Tailwind CSS v4 + shadcn/ui + Radix UI
- Theme model: CSS variables in `src/index.css` with light/dark mode
- Dark mode trigger: `.dark` class on `<html>`
- Semantic-first styling: use tokens like `bg-background`, `text-foreground`, `bg-primary` instead of raw color values

## Core Principles

1. Prefer semantic tokens over hardcoded colors.
2. Keep contrast high for readability in both light and dark themes.
3. Keep interaction states subtle: hover/focus should feel calm, not loud.
4. Reuse component variants (`cva`) instead of one-off utility clusters.

## Color Tokens

Source of truth: `src/index.css`

### Light Theme

- `--background`: `#faf9f5`
- `--foreground`: `#3d3929`
- `--primary`: `#c96442`
- `--primary-foreground`: `#ffffff`
- `--secondary`: `#e9e6dc`
- `--secondary-foreground`: `#535146`
- `--muted`: `#ede9de`
- `--muted-foreground`: `#83827d`
- `--accent`: `#e9e6dc`
- `--accent-foreground`: `#28261b`
- `--border`: `#dad9d4`
- `--input`: `#b4b2a7`
- `--ring`: `#c96442`

### Dark Theme

- `--background`: `#262624`
- `--foreground`: `#c3c0b6`
- `--primary`: `#d97757`
- `--primary-foreground`: `#ffffff`
- `--secondary`: `#faf9f5`
- `--secondary-foreground`: `#30302e`
- `--muted`: `#1b1b19`
- `--muted-foreground`: `#b7b5a9`
- `--accent`: `#1a1915`
- `--accent-foreground`: `#f5f4ee`
- `--border`: `#3e3e38`
- `--input`: `#52514a`
- `--ring`: `#d97757`

## Typography

- Sans: system sans stack (`--font-sans`)
- Serif: system serif stack (`--font-serif`)
- Mono: system mono stack (`--font-mono`)

Use `font-medium` for actionable labels and `font-semibold` for section headings.

## Radius, Shadow, Spacing

- Base radius token: `--radius: 0.5rem`
- Utility radii:
  - `rounded-sm` -> `calc(var(--radius) - 4px)`
  - `rounded-md` -> `calc(var(--radius) - 2px)`
  - `rounded-lg` -> `var(--radius)`
- Shadows are soft and low elevation (`--shadow-sm` through `--shadow-2xl`)
- Base spacing unit: `--spacing: 0.25rem`

## Component Conventions

### Buttons

Source: `src/components/ui/button.tsx`

- Use `variant`: `default | destructive | outline | secondary | ghost | link`
- Use `size`: `default | sm | lg | icon`
- Keep focus-visible ring enabled (`focus-visible:ring-ring`)
- Prefer `asChild` when wrapping links or custom triggers

### Surfaces

- Page: `bg-background text-foreground`
- Card-like sections: `bg-card text-card-foreground rounded-lg shadow-sm`
- Muted sections: `bg-muted text-muted-foreground`

### States

- Hover: small delta (`/80`, `/90`, or `hover:bg-accent`)
- Focus: visible ring using `ring` token
- Disabled: `disabled:opacity-50 disabled:pointer-events-none`

## Layout & Composition

- Main container pattern: `container mx-auto px-4 py-16`
- Use generous vertical rhythm (`space-y-*`, `mb-*`) for readability
- Prefer semantic text utilities:
  - Primary content: `text-foreground`
  - Supporting text: `text-muted-foreground`

## Theming Workflow (TweakCN / Claude style)

1. Create or tune a palette in TweakCN (`https://tweakcn.com/editor/theme`).
2. Export semantic token values.
3. Update light and dark token blocks in `src/index.css`.
4. Validate key components:
   - Buttons (`default`, `secondary`, `outline`, `ghost`)
   - Cards/surfaces
   - Focus states and border visibility
5. Check contrast in both modes before merging.

## Do / Don’t

- Do: use semantic classes (`bg-primary`, `text-muted-foreground`).
- Do: centralize token changes in `src/index.css`.
- Do: extend variants in component files for reusable patterns.
- Don’t: hardcode hex values in route/component JSX unless truly one-off.
- Don’t: create per-page ad-hoc color systems.

## Quick Start Snippets

```tsx
// Primary CTA
<Button variant="default">Continue</Button>

// Secondary action
<Button variant="outline">Cancel</Button>
```

```tsx
// Standard page shell
<main className="min-h-screen bg-background text-foreground">
  <section className="container mx-auto px-4 py-16" />
</main>
```

## File Map

- Tokens and theme mapping: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Reusable button variants: `src/components/ui/button.tsx`
- Theme state provider: `src/components/theme-provider.tsx`
