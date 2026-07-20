import { experiences } from '../data/portfolio'
import { useInView }   from '../hooks/useInView'

export default function Experience() {
  const [headerRef,   headerInView]   = useInView()
  const [timelineRef, timelineInView] = useInView()

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-xl">

        <div
          ref={headerRef}
          className={`mb-10 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-2">Experience</p>
          <h2 className="text-3xl font-black text-[var(--text-primary)]">My Professional Journey</h2>
        </div>

        <div ref={timelineRef} className="relative pl-6">
          <div className="absolute left-0 top-1 bottom-1 w-px bg-[var(--bg-border)]" />

          <div className="space-y-9">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`transition-all duration-700 ease-out ${
                  timelineInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <TimelineItem {...exp} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function TimelineItem({ period, role, company, description }) {
  return (
    <div className="relative group">
      <div className="absolute -left-[1.6rem] top-1.5 w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-[var(--bg-page)] group-hover:scale-125 transition-transform duration-200" />

      <p className="text-[var(--color-primary)] text-xs font-semibold mb-1">{period}</p>
      <h3 className="text-[var(--text-primary)] text-sm font-bold">{role}</h3>
      <p className="text-[var(--text-muted)] text-xs mb-2">{company}</p>
      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{description}</p>
    </div>
  )
}
