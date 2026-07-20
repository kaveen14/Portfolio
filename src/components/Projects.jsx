import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function Projects() {
  const [headerRef, headerInView] = useInView()
  const [cardsRef,  cardsInView]  = useInView()

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16 border-t border-[var(--bg-border)]">
      <div className="max-w-6xl mx-auto">

        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-10 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-2">Featured Projects</p>
            <h2 className="text-3xl font-black text-[var(--text-primary)]">Some Things I've Built</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-1.5 text-xs text-[var(--text-muted)] border border-[var(--bg-border)] px-4 py-2 rounded-full hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all"
          >
            View All Projects <ArrowUpRight size={13} />
          </a>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ease-out ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ title, description, tags, accentColor, liveLink }) {
  return (
    <div className="h-full bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl overflow-hidden group hover:border-[var(--color-primary)]/40 magnetic-hover transition-all duration-300 hover-glow">
      <div className={`h-40 bg-gradient-to-br ${accentColor} to-[var(--bg-card)] flex items-center justify-center border-b border-[var(--bg-border)]`}>
        <span className="text-6xl font-black font-mono group-hover:scale-110 transition-all duration-500" style={{ color: 'rgba(var(--color-primary-rgb), 0.2)' }}>
          &lt;/&gt;
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[var(--text-primary)] font-semibold text-sm pr-2">{title}</h3>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:scale-110 transition-all shrink-0"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-[var(--color-primary)] text-xs px-2.5 py-1 rounded-md font-medium transition-colors" style={{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
