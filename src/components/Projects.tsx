import { projects, type Project } from '../data/projects'
import { SectionHeading } from './SectionHeading'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-1 hover:border-brand-100 sm:p-7">
      <h3 className="text-xl font-semibold leading-8 text-slate-900">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
          >
            {technology}
          </span>
        ))}
      </div>
      <ul className="mt-7 flex-1 space-y-3 border-t border-slate-100 pt-6">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600"
        >
          GitHub
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-18 bg-white">
      <div className="section-shell">
        <SectionHeading
          label="Featured Projects"
          title="AI systems built for real-world decisions"
          description="Projects spanning analytics copilots, optimized generative AI inference, and intelligent delivery planning."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
