import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Github, Rocket, Zap, Code, Settings, BookOpen } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 px-4">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Rocket className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            React + Vite + TanStack
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            A modern, production-ready starter template with TypeScript, TailwindCSS, 
            TanStack Router, and best practices built-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Github className="mr-2 h-4 w-4" />
              Get Started
            </Button>
            <Button size="lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Documentation
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="text-center p-6 bg-card rounded-lg shadow-sm">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Lightning Fast
            </h3>
            <p className="text-muted-foreground">
              Powered by Vite for instant hot reload and blazing fast builds.
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-sm">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mx-auto mb-4">
              <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Type Safe
            </h3>
            <p className="text-muted-foreground">
              Full TypeScript support with strict type checking and IntelliSense.
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-sm">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-4">
              <Settings className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Ready to Use
            </h3>
            <p className="text-muted-foreground">
              Pre-configured with routing, styling, and development tools.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            What's Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">React 19 with hooks</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Vite for build tooling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">TanStack Router</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">TypeScript configuration</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">TailwindCSS + Shadcn/ui</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">ESLint + Prettier</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Lucide React icons</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Development tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})