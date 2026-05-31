# React Vite TanStack Starter Template

A modern React starter template with TypeScript, Vite, TanStack Router, TanStack React Query, TailwindCSS v4, and shadcn/ui components.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Type safety and better DX
- 🎨 **TailwindCSS v4** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible components (on **Base UI** primitives)
- 🚦 **TanStack Router** - Type-safe routing
- 🔄 **TanStack React Query** - Data fetching and caching
- 📏 **ESLint** - Code linting and formatting
- 🧪 **Vitest** - Unit testing with Testing Library

## Getting Started

### Prerequisites

- Node.js 20.19.0+ or 22.12.0+
- npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd React-Vite-Tanstack-Starter-Template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run the test suite once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/
│   └── ui/              # shadcn/ui components (Base UI primitives)
├── lib/
│   └── utils.ts         # Utility functions
├── pages/               # Page components
├── routes/              # TanStack Router file-based routes
│   ├── __root.tsx       # Root route
│   └── index.tsx        # Home route
├── test/
│   └── setup.ts         # Vitest + Testing Library setup
├── App.tsx
├── main.tsx
└── index.css
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - Type-safe routing with file-based routing
- **TanStack React Query** - Server state management
- **TailwindCSS v4** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Base UI** - Headless UI primitives (the actively-maintained successor to Radix, from the same creators)
- **Lucide React** - Icon library
- **Vitest** + **Testing Library** - Unit testing

## Adding Components

This template uses shadcn/ui on **Base UI** primitives. Pass `--base base` so the
CLI installs the Base UI versions of components:

```bash
bunx shadcn@latest add button --base base
bunx shadcn@latest add card --base base
```

> **Note:** Base UI replaces Radix's `asChild` prop with a `render` prop. To change
> a component's underlying element, pass an element to `render` instead of using
> `asChild`:
>
> ```tsx
> // Before (Radix):  <Button asChild><a href="/">Home</a></Button>
> // After (Base UI):  <Button render={<a href="/" />}>Home</Button>
> ```

## Routing

This template uses TanStack Router with file-based routing. Add new routes by creating files in the `src/routes/` directory:

- `src/routes/index.tsx` - Home page (/)
- `src/routes/about.tsx` - About page (/about)
- `src/routes/blog/index.tsx` - Blog index (/blog)
- `src/routes/blog/$slug.tsx` - Blog post (/blog/my-post)

## Styling

TailwindCSS v4 is configured with the new PostCSS plugin. The configuration supports:

- Custom CSS variables
- Component variants with `class-variance-authority`
- Utility merging with `tailwind-merge`
- Animations with `tailwindcss-animate`

## Development

The template includes:

- Hot module replacement (HMR) with React Fast Refresh
- TypeScript type checking
- ESLint for code quality
- TanStack Router DevTools (development only)
- Automatic route generation

## License

MIT License - feel free to use this template for your projects!