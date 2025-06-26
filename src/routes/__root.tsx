import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 md:space-x-8">
              <Link 
                to="/" 
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
              >
                React Template
              </Link>
              <div className="hidden sm:flex space-x-6">
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-foreground [&.active]:text-primary [&.active]:font-medium transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-foreground [&.active]:text-primary [&.active]:font-medium transition-colors"
                >
                  About
                </Link>
                <Link 
                  to="/features" 
                  className="text-muted-foreground hover:text-foreground [&.active]:text-primary [&.active]:font-medium transition-colors"
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