import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle, Zap, Shield, Palette, Wrench, Globe } from 'lucide-react'

export const Route = createFileRoute('/features')({
  component: () => (
    <div className="from-background to-muted min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            Features & Stack
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Everything you need to build modern, scalable React applications.
          </p>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="mb-6 flex items-center">
              <div className="mr-3 rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-foreground text-2xl font-semibold">
                Development Experience
              </h2>
            </div>
            <div className="space-y-4">
              {[
                'Hot Module Replacement (HMR)',
                'TypeScript with strict mode',
                'ESLint + Prettier configuration',
                'Auto-generated route types',
                'Development tools integration',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="mb-6 flex items-center">
              <div className="mr-3 rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-foreground text-2xl font-semibold">
                Production Ready
              </h2>
            </div>
            <div className="space-y-4">
              {[
                'Optimized build configuration',
                'Tree shaking and code splitting',
                'Modern ES modules support',
                'Production error boundaries',
                'SEO-friendly routing',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card mb-16 rounded-lg p-8 shadow-sm">
          <div className="mb-8 flex items-center justify-center">
            <div className="mr-3 rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
              <Wrench className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-foreground text-2xl font-semibold">
              Technology Stack
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-foreground mb-4 font-semibold">Frontend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">React 19</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">TanStack Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">TanStack Query</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-foreground mb-4 font-semibold">Styling</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">TailwindCSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">Shadcn/ui</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">Lucide Icons</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">Dark Mode Ready</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-foreground mb-4 font-semibold">Tooling</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-muted-foreground">Vite</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-muted-foreground">ESLint</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-muted-foreground">PostCSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-muted-foreground">Auto-imports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-8 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="mb-4 flex items-center">
              <Palette className="mr-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-foreground text-xl font-semibold">
                Design System
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Pre-built components with consistent styling, accessibility
              features, and theme support.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  Accessible components
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  Responsive design
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-8 dark:from-green-900/20 dark:to-green-800/20">
            <div className="mb-4 flex items-center">
              <Globe className="mr-3 h-8 w-8 text-green-600 dark:text-green-400" />
              <h3 className="text-foreground text-xl font-semibold">
                Modern Standards
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Built following current web standards and React best practices for
              maintainable code.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  Modern React patterns
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  Performance optimized
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
})
