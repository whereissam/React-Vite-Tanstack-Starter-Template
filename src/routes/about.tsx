import { createFileRoute } from '@tanstack/react-router'
import { Users, Target, Lightbulb, Heart } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="from-background to-muted min-h-screen bg-gradient-to-br">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            About This Template
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Built with modern technologies and best practices to help you
            kickstart your next React project.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-foreground text-2xl font-semibold">
                Our Mission
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide developers with a solid foundation for building React
              applications. This template eliminates the initial setup
              complexity and lets you focus on building features that matter.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-foreground text-2xl font-semibold">
                Philosophy
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We believe in keeping things simple yet powerful. Every tool
              included serves a purpose and contributes to a better development
              experience without adding unnecessary complexity.
            </p>
          </div>
        </div>

        <div className="bg-card mb-16 rounded-lg p-8 shadow-sm">
          <div className="mb-6 flex items-center">
            <div className="mr-3 rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-foreground text-2xl font-semibold">
              Perfect For
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-purple-500"></div>
                <div>
                  <h3 className="text-foreground font-medium">
                    Startups & MVPs
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Quick prototyping and rapid development
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-purple-500"></div>
                <div>
                  <h3 className="text-foreground font-medium">
                    Learning Projects
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Explore modern React patterns and tools
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-purple-500"></div>
                <div>
                  <h3 className="text-foreground font-medium">
                    Production Apps
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Scalable foundation for serious projects
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-purple-500"></div>
                <div>
                  <h3 className="text-foreground font-medium">
                    Team Collaboration
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Consistent setup across team members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/30">
              <Heart className="h-8 w-8 text-red-500 dark:text-red-400" />
            </div>
          </div>
          <h2 className="text-foreground mb-4 text-2xl font-bold">
            Built with Care
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            This template is continuously updated with the latest best practices
            and community feedback. We're committed to keeping it modern,
            secure, and performant.
          </p>
        </div>
      </div>
    </div>
  ),
})
