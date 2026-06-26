import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Rocket, Zap, Code, Settings, BookOpen } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="from-background to-muted min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
              <Rocket className="h-8 w-8 text-blue-600 sm:h-12 sm:w-12 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            React + Vite + TanStack
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl px-4 text-lg sm:text-xl">
            A modern, production-ready starter template with TypeScript,
            TailwindCSS, TanStack Router, and best practices built-in.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              <Rocket className="mr-2 h-4 w-4" />
              Get Started
            </Button>
            <Button size="lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Documentation
            </Button>
          </div>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <div className="bg-card rounded-lg p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 w-fit rounded-full bg-green-100 p-3 dark:bg-green-900/30">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-semibold">
              Lightning Fast
            </h3>
            <p className="text-muted-foreground">
              Powered by Vite for instant hot reload and blazing fast builds.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 w-fit rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
              <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-semibold">
              Type Safe
            </h3>
            <p className="text-muted-foreground">
              Full TypeScript support with strict type checking and
              IntelliSense.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 w-fit rounded-full bg-orange-100 p-3 dark:bg-orange-900/30">
              <Settings className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-semibold">
              Ready to Use
            </h3>
            <p className="text-muted-foreground">
              Pre-configured with routing, styling, and development tools.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-foreground mb-6 text-center text-2xl font-bold">
            What's Included
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">
                  React 19 with hooks
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">
                  Vite for build tooling
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">TanStack Router</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">
                  TypeScript configuration
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">
                  TailwindCSS + Shadcn/ui
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">ESLint + Prettier</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">
                  Lucide React icons
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">Development tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})
