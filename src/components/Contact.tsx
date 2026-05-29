import { profileLinks } from '../data/links'
import { ButtonLink } from './ButtonLink'
import { SectionHeading } from './SectionHeading'

const formatDisplayUrl = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const contactLinks = [
  { label: 'Email', value: profileLinks.emailLabel, href: profileLinks.email },
  { label: 'LinkedIn', value: formatDisplayUrl(profileLinks.linkedin), href: profileLinks.linkedin },
  { label: 'GitHub', value: formatDisplayUrl(profileLinks.github), href: profileLinks.github },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-18 bg-white">
      <div className="section-shell">
        <div className="overflow-hidden rounded-3xl bg-navy-950 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionHeading
                label="Contact"
                title="Let's connect"
                description="I am interested in ML/AI engineering, data science, and applied AI opportunities where robust systems turn data into useful products."
                tone="dark"
              />
              <ButtonLink
                href={profileLinks.resume}
                download
                variant="quiet"
                className="mt-9 border-brand-400/40"
              >
                Download Resume
              </ButtonLink>
            </div>

            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noreferrer'}
                  className="focus-ring group flex items-center justify-between gap-5 rounded-xl border border-slate-700 bg-slate-900/60 p-5 transition-colors hover:border-brand-400/60"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {link.label}
                    </span>
                    <span className="mt-2 block text-sm font-medium text-slate-100">
                      {link.value}
                    </span>
                  </span>
                  <span
                    className="text-xl text-slate-400 transition-colors group-hover:text-brand-400"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
