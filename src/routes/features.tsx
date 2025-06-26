import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle, Zap, Shield, Palette, Wrench, Globe } from 'lucide-react'

export const Route = createFileRoute('/features')({
  component: () => (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Features & Stack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern, scalable React applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Development Experience
              </h2>
            </div>
            <div className="space-y-4">
              {[
                'Hot Module Replacement (HMR)',
                'TypeScript with strict mode',
                'ESLint + Prettier configuration',
                'Auto-generated route types',
                'Development tools integration'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Production Ready
              </h2>
            </div>
            <div className="space-y-4">
              {[
                'Optimized build configuration',
                'Tree shaking and code splitting',
                'Modern ES modules support',
                'Production error boundaries',
                'SEO-friendly routing'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm p-8 mb-16">
          <div className="flex items-center mb-8 justify-center">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
              <Wrench className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">
              Technology Stack
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">React 19</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">TanStack Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">TanStack Query</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Styling</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">TailwindCSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Shadcn/ui</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Lucide Icons</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Dark Mode Ready</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Tooling</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">Vite</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">ESLint</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">PostCSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">Auto-imports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-foreground">
                Design System
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Pre-built components with consistent styling, accessibility features, and theme support.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-slate-700 dark:text-slate-300">Accessible components</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-slate-700 dark:text-slate-300">Responsive design</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-foreground">
                Modern Standards
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Built following current web standards and React best practices for maintainable code.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-slate-700 dark:text-slate-300">Modern React patterns</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-slate-700 dark:text-slate-300">Performance optimized</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
})