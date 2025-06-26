import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <div className="sm:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-9"
      >
        {isOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <Menu className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className={`absolute top-16 left-0 right-0 shadow-xl z-50 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`hover:text-blue-600 [&.active]:text-blue-600 [&.active]:font-medium transition-colors py-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-blue-600 [&.active]:text-blue-600 [&.active]:font-medium transition-colors py-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/features" 
                className={`hover:text-blue-600 [&.active]:text-blue-600 [&.active]:font-medium transition-colors py-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}