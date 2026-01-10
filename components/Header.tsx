'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="text-primary relative group">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-3xl relative z-10">smart_toy</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Knowtly</span>
          </Link>
          <nav className="hidden md:flex gap-4 lg:gap-8">
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/features">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#how-it-works">
              How it Works
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#solutions">
              Solutions
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/integrations">
              Integrations
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#faq">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <Link className="hidden md:flex text-sm font-semibold text-gray-300 hover:text-white px-2 lg:px-3 py-2" href="https://app.knowtly.app/login">
              Log In
            </Link>
            <Link
              className="hidden md:flex items-center justify-center h-9 px-3 lg:px-4 rounded-lg bg-primary text-white text-xs md:text-sm font-bold hover:bg-primary-hover transition-all shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.7)]"
              href="https://app.knowtly.app/register"
            >
              Create Your AI Bot
            </Link>
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-background-dark/95 backdrop-blur-lg border-b border-white/10 z-40 md:hidden animate-slide-down">
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                href="/features"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                href="/#how-it-works"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link
                className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                href="/#solutions"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                href="/integrations"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link
                className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                href="/#pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                href="/#faq"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                <Link
                  className="text-center text-sm font-semibold text-gray-300 hover:text-white px-4 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
                  href="https://app.knowtly.app/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  className="text-center h-11 flex items-center justify-center px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-all shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.7)]"
                  href="https://app.knowtly.app/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Your AI Bot
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

