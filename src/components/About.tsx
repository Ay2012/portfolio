import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-18 bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading label="About" title="Production-focused AI engineering" />
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-card sm:p-9">
            <p className="text-xl font-medium leading-9 text-slate-700 sm:text-2xl sm:leading-10">
              I’m an AI/ML Engineer and Data Scientist who builds things end-to-end — from model
              design and data pipelines to backend architecture and deployment. I care about the
              full stack of getting AI to work in production: evaluation frameworks, latency
              tradeoffs, system reliability, and the guardrails that make models trustworthy in
              real workflows. I don’t just experiment — I ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
