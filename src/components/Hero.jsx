import { ArrowRight, Download, Calendar, Monitor, Code2, Smile } from 'lucide-react'
import { personal, techBadges, stats } from '../data/portfolio'
import { useInView }  from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const STAT_ICONS = [Calendar, Monitor, Code2, Smile]

const BADGE_POSITIONS = [
  'top-0 right-2',
  'top-[38%] right-0',
  'bottom-0 right-6',
  'bottom-8 left-0',
]

const HERO_PARTICLES = [
  { top: '12%', left: '6%',  size: '4px', delay: '0s',   dur: '4.2s' },
  { top: '68%', left: '88%', size: '5px', delay: '1.2s', dur: '5.1s' },
  { top: '42%', left: '4%',  size: '3px', delay: '2.1s', dur: '6s'   },
  { top: '22%', left: '93%', size: '4px', delay: '0.6s', dur: '4.6s' },
  { top: '80%', left: '20%', size: '3px', delay: '1.8s', dur: '5.4s' },
  { top: '55%', left: '56%', size: '2px', delay: '3s',   dur: '4s'   },
  { top: '35%', left: '75%', size: '3px', delay: '0.3s', dur: '5.5s' },
  { top: '90%', left: '45%', size: '4px', delay: '2.5s', dur: '4.8s' },
]

export default function Hero() {
  const [statsRef, statsInView] = useInView()

  return (
    <section className="relative pt-24 pb-16 lg:min-h-screen lg:flex lg:items-center px-6 sm:px-8 lg:px-16 overflow-hidden">

      {/* Gradient orb background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: `radial-gradient(circle, rgba(var(--color-primary-rgb), 0.3), transparent)` }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: `radial-gradient(circle, rgba(var(--color-primary-rgb), 0.2), transparent)` }} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {HERO_PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{ width: p.size, height: p.size, top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur, backgroundColor: 'rgba(var(--color-primary-rgb), 0.25)' }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">

          {/* Left — stagger animation (bottom-to-top) */}
          <div>
            <p
              className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3 animate-fade-in"
              style={{ animationDelay: '0ms' }}
            >
              Hello, I'm
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight mb-2 animate-slide-left"
              style={{ animationDelay: '150ms' }}
            >
              {personal.name}<span className="text-[var(--color-primary)]">.</span>
            </h1>

            <h2
              className="text-[var(--color-primary)] text-xl font-semibold mb-5 animate-slide-left"
              style={{ animationDelay: '300ms' }}
            >
              {personal.role}
            </h2>

            <p
              className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 max-w-md animate-fade-up"
              style={{ animationDelay: '450ms' }}
            >
              {personal.tagline}
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 mb-7 animate-fade-up"
              style={{ animationDelay: '600ms' }}
            >
              <a
                href="#projects"
                className="flex items-center gap-2 bg-[var(--color-primary)] text-black font-bold px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 text-sm hover-glow"
              >
                View My Work <ArrowRight size={15} />
              </a>
              <a
                href={personal.cv}
                download
                className="flex items-center gap-2 border border-[var(--text-muted)] text-[var(--text-primary)] font-semibold px-6 py-3 rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:scale-105 active:scale-95 transition-all duration-200 text-sm"
              >
                Download CV <Download size={15} />
              </a>
            </div>

            {/* Availability dot */}
            <div
              className="flex items-center gap-2 text-[var(--text-secondary)] text-xs animate-fade-in"
              style={{ animationDelay: '800ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              {personal.availability}
            </div>
          </div>

          {/* Right — profile image */}
          <div
            className="flex justify-center animate-slide-right"
            style={{ animationDelay: '250ms' }}
          >
            <div className="relative p-10">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow" style={{ borderColor: 'rgba(var(--color-primary-rgb), 0.2)' }} />
                <div className="absolute inset-4 rounded-full border" style={{ borderColor: 'rgba(var(--color-primary-rgb), 0.15)' }} />
                <div className="absolute inset-0 rounded-full profile-glow" />
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 bg-[var(--bg-card)]" style={{ borderColor: 'rgba(var(--color-primary-rgb), 0.4)' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}${personal.profileImage}`}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {techBadges.map((badge, i) => (
                <FloatingBadge key={badge} label={badge} className={`absolute ${BADGE_POSITIONS[i]}`} delay={i * 200} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat, i) => {
            const Icon = STAT_ICONS[i] || Calendar
            return (
              <div
                key={stat.label}
                className={`transition-all duration-700 ease-out ${
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <StatCard icon={<Icon size={18} />} stat={stat} active={statsInView} />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

function FloatingBadge({ label, className, delay }) {
  return (
    <div
      className={`${className} animate-float bg-[var(--bg-card)] border text-[var(--color-primary)] text-xs font-bold px-3 py-2 rounded-lg shadow-glow-sm hover-glow transition-all duration-300 hover:scale-110`}
      style={{ borderColor: 'rgba(var(--color-primary-rgb), 0.4)', animationDelay: `${delay}ms` }}
    >
      {label}
    </div>
  )
}

function StatCard({ icon, stat, active }) {
  const count = useCountUp(stat.value, 1800, active)

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl p-5 flex flex-col items-center text-center gap-1 hover:border-[var(--color-primary)]/40 hover:-translate-y-1 transition-all duration-300 cursor-default magnetic-hover hover-glow">
      <span className="text-[var(--color-primary)] mb-1">{icon}</span>
      <p className="text-2xl font-black text-[var(--text-primary)]">{count}</p>
      <p className="text-[var(--text-muted)] text-xs">{stat.label}</p>
    </div>
  )
}
