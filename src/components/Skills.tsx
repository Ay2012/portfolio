import { skillGroups } from '../data/skills'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-18 bg-slate-50">
      <div className="section-shell">
        <SectionHeading
          label="Skills"
          title="Technical toolkit"
          description="Tools and frameworks used to deliver machine learning systems from exploration through deployment."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <h3 className="text-base font-semibold text-slate-900">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

