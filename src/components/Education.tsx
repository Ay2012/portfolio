import { SectionHeading } from './SectionHeading'

const graduateCoursework = [
  'Machine Learning',
  'Deep Learning',
  'Probability and Statistics',
  'Natural Language Processing',
  'Big Data Analytics',
  'Data Structures and Algorithms for Data Science',
]

const undergraduateCoursework = [
  'Machine Learning',
  'Artificial Intelligence',
  'Python',
  'C/C++',
  'OOPs',
  'Data Structures and Algorithms',
  'Compiler Design',
  'Computer Architecture and Organisation',
  'Computer Networks',
  'Operating Systems',
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-18 bg-slate-50">
      <div className="section-shell">
        <SectionHeading
          label="Education"
          title="Academic foundation"
          description="Graduate training in data science supported by a broad undergraduate foundation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
                  University of Maryland
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  M.S. in Data Science
                </h3>
                <p className="mt-5 text-base font-medium text-slate-600">Aug 2024 - May 2026</p>
              </div>
              <div className="w-fit shrink-0 whitespace-nowrap rounded-lg bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">
                GPA: 3.89
              </div>
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Relevant Coursework
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {graduateCoursework.map((course) => (
                <span
                  key={course}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
                  Gautam Buddha University
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  B.Tech in Computer Science
                </h3>
                <p className="mt-5 text-base font-medium text-slate-600">Jul 2019 - Jul 2023</p>
              </div>
              <div className="w-fit shrink-0 whitespace-nowrap rounded-lg bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">
                GPA: 3.53
              </div>
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Relevant Coursework
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {undergraduateCoursework.map((course) => (
                <span
                  key={course}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
