import { profileLinks } from '../data/links'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>&copy; {new Date().getFullYear()} Ayush Gaur. All rights reserved.</p>
        <div className="flex gap-5">
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded transition-colors hover:text-brand-600"
          >
            GitHub
          </a>
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded transition-colors hover:text-brand-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

