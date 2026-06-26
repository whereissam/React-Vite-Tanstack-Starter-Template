import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="bg-background border-border border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-primary text-lg font-semibold transition-colors"
              >
                React Template
              </Link>
              <div className="hidden space-x-6 sm:flex">
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground [&.active]:text-primary transition-colors [&.active]:font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground [&.active]:text-primary transition-colors [&.active]:font-medium"
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className="text-muted-foreground hover:text-foreground [&.active]:text-primary transition-colors [&.active]:font-medium"
                >
                  Features
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
