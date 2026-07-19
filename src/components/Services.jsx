import { Code2, Database, Server, Cloud, Monitor, Settings } from 'lucide-react'
import { services } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

const ICON_MAP = {
  code2: Code2, database: Database, server: Server,
  cloud: Cloud, monitor: Monitor,  settings: Settings,
}

export default function Services() {
  const [headerRef, headerInView] = useInView()
  const [cardsRef,  cardsInView]  = useInView()

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">

        {/* Section header — fades up on scroll */}
        <div
          ref={headerRef}
          className={`mb-10 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">What I Do</p>
          <h2 className="text-3xl font-black text-white">Services I Provide</h2>
        </div>

        {/* Cards — stagger in one-by-one */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ease-out ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
  const Icon = ICON_MAP[icon] || Code2
  return (
    <div className="h-full bg-dark-card border border-dark-border rounded-2xl p-6 group hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  )
}
