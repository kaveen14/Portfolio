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
    <section className="py-20 px-6 sm:px-8 lg:px-16 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: slides in from left ── */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">About Me</p>

            {/* Headline — highlights specific words green */}
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
              {headlineWords.map((word, i) => (
                <span key={i}>
                  {about.highlights.includes(word)
                    ? <span className="text-primary">{word}</span>
                    : word
                  }
                  {i < headlineWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">{about.body}</p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-primary/60 text-primary font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-black hover:scale-105 transition-all duration-200 text-sm"
            >
              More About Me <ArrowRight size={15} />
            </a>
          </div>

          {/* ── Right: slides in from right ── */}
          <div
            ref={rightRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 ease-out ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Personal info card */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-6 space-y-5 hover:border-primary/30 transition-colors">
              {about.infoItems.map(({ label, value, highlight }) => {
                const Icon = INFO_ICON_MAP[label] || User
                return (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={15} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                      <p className={`text-sm font-medium ${highlight ? 'text-primary' : 'text-white'}`}>{value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Decorative code visual — icon glows on hover */}
            <div className="bg-dark-card border border-dark-border rounded-2xl flex items-center justify-center min-h-40 hover:border-primary/30 transition-colors group">
              <div className="text-center">
                <p className="text-primary/40 text-5xl font-black font-mono leading-none group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                  &lt;/&gt;
                </p>
                <p className="text-gray-600 text-xs mt-3">Clean Code</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
