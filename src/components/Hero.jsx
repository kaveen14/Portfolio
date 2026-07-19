import { ArrowRight, Download, Calendar, Monitor, Code2, Smile } from 'lucide-react'
import { personal, techBadges, stats } from '../data/portfolio'
import { useInView }  from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

// Icon order matches the stats array in portfolio.js
const STAT_ICONS = [Calendar, Monitor, Code2, Smile]

// Positions within the p-10 padding wrapper — badges stay inside safe viewport bounds on mobile
const BADGE_POSITIONS = [
  'top-0 right-2',      // .NET  — top right
  'top-[38%] right-0',  // C#   — right middle
  'bottom-0 right-6',   // SQL  — bottom right
  'bottom-8 left-0',    // </> — bottom left
]

// Fixed particles — avoids Math.random() re-running on every render
const HERO_PARTICLES = [
  { top: '12%', left: '6%',  size: '4px', delay: '0s',   dur: '4.2s' },
  { top: '68%', left: '88%', size: '5px', delay: '1.2s', dur: '5.1s' },
  { top: '42%', left: '4%',  size: '3px', delay: '2.1s', dur: '6s'   },
  { top: '22%', left: '93%', size: '4px', delay: '0.6s', dur: '4.6s' },
  { top: '80%', left: '20%', size: '3px', delay: '1.8s', dur: '5.4s' },
  { top: '55%', left: '56%', size: '2px', delay: '3s',   dur: '4s'   },
]

export default function Hero() {
  const [statsRef, statsInView] = useInView()

  return (
    <section className="relative pt-24 pb-16 lg:min-h-screen lg:flex lg:items-center px-6 sm:px-8 lg:px-16 overflow-hidden">

      {/* Subtle floating background particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {HERO_PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-float"
            style={{ width: p.size, height: p.size, top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative">

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">

          {/* Left — page-load stagger animation */}
          <div>
            <p
              className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 animate-fade-in"
              style={{ animationDelay: '0ms' }}
            >
              Hello, I'm
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-2 animate-slide-left"
              style={{ animationDelay: '150ms' }}
            >
              {personal.name}<span className="text-primary">.</span>
            </h1>

            <h2
              className="text-primary text-xl font-semibold mb-5 animate-slide-left"
              style={{ animationDelay: '300ms' }}
            >
              {personal.role}
            </h2>

            <p
              className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md animate-fade-up"
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
                className="flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-full hover:bg-green-400 hover:scale-105 active:scale-95 transition-all duration-200 text-sm"
              >
                View My Work <ArrowRight size={15} />
              </a>
              <a
                href={personal.cv}
                download
                className="flex items-center gap-2 border border-gray-600 text-white font-semibold px-6 py-3 rounded-full hover:border-primary hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200 text-sm"
              >
                Download CV <Download size={15} />
              </a>
            </div>

            {/* Availability dot */}
            <div
              className="flex items-center gap-2 text-gray-400 text-xs animate-fade-in"
              style={{ animationDelay: '800ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {personal.availability}
            </div>
          </div>

          {/* Right — profile image slides in from right */}
          <div
            className="flex justify-center animate-slide-right"
            style={{ animationDelay: '250ms' }}
          >
            {/* p-10 gives safe padding space so badges don't overflow the viewport */}
            <div className="relative p-10">

              {/* Glowing ring */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-primary/15" />
                <div className="absolute inset-0 rounded-full profile-glow" />
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/40 bg-dark-card">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating tech badges — positioned in the padding area */}
              {techBadges.map((badge, i) => (
                <FloatingBadge key={badge} label={badge} className={`absolute ${BADGE_POSITIONS[i]}`} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats row — counter animates when entering viewport ── */}
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

// ── Sub-components ────────────────────────────────────────────────

function FloatingBadge({ label, className }) {
  return (
    <div className={`${className} animate-float bg-dark-card border border-primary/40 text-primary text-xs font-bold px-3 py-2 rounded-lg shadow-glow-sm`}>
      {label}
    </div>
  )
}

function StatCard({ icon, stat, active }) {
  // Counter starts from 0 and counts up once 'active' becomes true
  const count = useCountUp(stat.value, 1800, active)

  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-5 flex flex-col items-center text-center gap-1 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
      <span className="text-primary mb-1">{icon}</span>
      <p className="text-2xl font-black text-white">{count}</p>
      <p className="text-gray-500 text-xs">{stat.label}</p>
    </div>
  )
}
