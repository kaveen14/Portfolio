import { ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { personal, socialLinks } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

const ICON_MAP = {
  github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail,
}

const contactItems = [
  { Icon: Mail,   label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { Icon: Phone,  label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { Icon: MapPin, label: 'Location', value: personal.location, href: '#' },
]

export default function Contact() {
  const [leftRef,  leftInView]  = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-2">Let's Work Together</p>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--text-primary)] mb-4 leading-tight">Have a project in mind?</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              I'm always open to discussing new projects or opportunities.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-black font-bold px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 text-sm hover-glow"
            >
              Get In Touch <ArrowRight size={15} />
            </a>
          </div>

          <div
            ref={rightRef}
            className={`space-y-8 transition-all duration-700 ease-out delay-150 ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-5">
              {contactItems.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--bg-border)] flex items-center justify-center group-hover:border-[var(--color-primary)]/50 group-hover:scale-110 transition-all shrink-0">
                    <Icon size={15} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-[var(--text-muted)] text-xs">{label}</p>
                    <p className="text-[var(--text-primary)] text-sm font-medium group-hover:text-[var(--color-primary)] transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-[var(--text-muted)] text-xs mb-3">Stay Connected</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon, href, label }) => {
                  const Icon = ICON_MAP[icon]
                  if (!Icon) return null
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-xl bg-[var(--bg-card)] border border-[var(--bg-border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:scale-110 active:scale-95 transition-all"
                    >
                      <Icon size={15} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
