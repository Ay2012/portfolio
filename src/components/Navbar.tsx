import { useState } from 'react'
import { navigationLinks, profileLinks } from '../data/links'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="focus-ring flex items-center gap-3 rounded-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-brand-400">
            AG
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-900 sm:block">
            Ayush Gaur
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profileLinks.resume}
            download
            className="focus-ring rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profileLinks.resume}
              download
              className="focus-ring mt-2 rounded-lg bg-navy-900 px-3 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

