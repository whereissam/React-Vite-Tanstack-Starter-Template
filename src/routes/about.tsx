import { createFileRoute } from '@tanstack/react-router'
import { Users, Target, Lightbulb, Heart } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About This Template
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern technologies and best practices to help you kickstart your next React project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide developers with a solid foundation for building React applications. 
              This template eliminates the initial setup complexity and lets you focus on 
              building features that matter.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Philosophy
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We believe in keeping things simple yet powerful. Every tool included serves 
              a purpose and contributes to a better development experience without adding 
              unnecessary complexity.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm p-8 mb-16">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">
              Perfect For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Startups & MVPs
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Quick prototyping and rapid development
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Learning Projects
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore modern React patterns and tools
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Production Apps
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Scalable foundation for serious projects
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Team Collaboration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Consistent setup across team members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
              <Heart className="h-8 w-8 text-red-500 dark:text-red-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Built with Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This template is continuously updated with the latest best practices and 
            community feedback. We're committed to keeping it modern, secure, and performant.
          </p>
        </div>
      </div>
    </div>
  ),
})