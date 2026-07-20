import { ArrowRight, User, MapPin, Mail, Settings } from 'lucide-react'
import { about } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

const INFO_ICON_MAP = {
  Name: User, Location: MapPin, Email: Mail, Availability: Settings,
}

export default function About() {
  const headlineWords = about.headline.split(' ')
  const [leftRef,  leftInView]  = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16 border-t border-[var(--bg-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">About Me</p>

            <h2 className="text-3xl lg:text-4xl font-black text-[var(--text-primary)] leading-tight mb-5">
              {headlineWords.map((word, i) => (
                <span key={i}>
                  {about.highlights.includes(word)
                    ? <span className="text-[var(--color-primary)]">{word}</span>
                    : word
                  }
                  {i < headlineWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h2>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">{about.body}</p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border text-[var(--color-primary)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--color-primary)] hover:text-black hover:scale-105 transition-all duration-200 text-sm hover-glow"
              style={{ borderColor: 'rgba(var(--color-primary-rgb), 0.6)' }}
            >
              More About Me <ArrowRight size={15} />
            </a>
          </div>

          {/* Right */}
          <div
            ref={rightRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 ease-out ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl p-6 space-y-5 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover-glow">
              {about.infoItems.map(({ label, value, highlight }) => {
                const Icon = INFO_ICON_MAP[label] || User
                return (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={15} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[var(--text-muted)] text-xs mb-0.5">{label}</p>
                      <p className={`text-sm font-medium ${highlight ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)]'}`}>{value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl flex items-center justify-center min-h-40 hover:border-[var(--color-primary)]/30 transition-all duration-300 group hover-glow">
              <div className="text-center">
                <p className="text-5xl font-black font-mono leading-none transition-all duration-500 group-hover:scale-110" style={{ color: 'rgba(var(--color-primary-rgb), 0.4)' }}>
                  &lt;/&gt;
                </p>
                <p className="text-[var(--text-muted)] text-xs mt-3">Clean Code</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
