import { ButtonLink } from './ButtonLink'
import { profileLinks } from '../data/links'

const focusAreas = ['Machine Learning', 'LLM Systems', 'Data Science', 'Production AI']
const profileImage = '/profile.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy-950 pt-18 text-white scroll-mt-18"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_20%_75%,rgba(56,189,248,0.1),transparent_30%)]" />
      <div className="section-shell py-20 lg:py-24">
        <div className="grid min-h-[calc(100vh-12rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.85fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-brand-400">
              ML/AI Engineer &amp; Data Scientist
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ayush Gaur
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Building reliable AI systems across LLM orchestration, analytics copilots, RAG,
              generative AI optimization, and production-grade data applications.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="#projects">View Projects</ButtonLink>
              <ButtonLink href={profileLinks.resume} download variant="quiet">
                Download Resume
              </ButtonLink>
              <ButtonLink
                href={profileLinks.github}
                target="_blank"
                rel="noreferrer"
                variant="quiet"
              >
                GitHub
              </ButtonLink>
              <ButtonLink
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                variant="quiet"
              >
                LinkedIn
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-[460px]">
            <div className="absolute -inset-5 rounded-[2rem] bg-brand-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-brand-500/15">
              <img
                src={profileImage}
                alt="Ayush Gaur"
                className="aspect-[4/5] h-full w-full object-cover object-[58%_46%]"
              />
            </div>
            <span className="absolute -left-3 top-6 rounded-full border border-brand-400/30 bg-navy-950/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-400 shadow-lg shadow-black/20 backdrop-blur sm:left-4">
              AI/ML Engineer
            </span>
            <span className="absolute -right-3 bottom-7 rounded-full border border-slate-600/80 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-xl shadow-black/20 sm:right-4">
              AI + Data Systems
            </span>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-700/70 bg-slate-900/55 p-5 shadow-2xl shadow-black/10 backdrop-blur sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.5fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
                Engineering Focus
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                I design AI systems with validation, evaluation, reliability, and user-facing
                product thinking from the start.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-xl border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
