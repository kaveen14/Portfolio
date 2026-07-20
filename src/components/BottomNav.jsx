import { useState, useEffect } from 'react'
import { Home, User, Layers, FolderKanban, Briefcase, Mail } from 'lucide-react'

const NAV_ITEMS = [
  { icon: Home,          label: 'Home',       href: '#home' },
  { icon: User,          label: 'About',      href: '#about' },
  { icon: Layers,        label: 'Skills',     href: '#skills' },
  { icon: FolderKanban,  label: 'Projects',   href: '#projects' },
  { icon: Briefcase,     label: 'Experience', href: '#experience' },
  { icon: Mail,          label: 'Contact',    href: '#contact' },
]

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div
        className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-[var(--bg-border)] shadow-2xl backdrop-blur-2xl"
        style={{ background: 'rgba(var(--color-primary-rgb), 0.03)', boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)' }}
      >
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const isActive = activeSection === href.slice(1)
          return (
            <a
              key={label}
              href={href}
              className="relative flex items-center justify-center transition-all duration-400 ease-out"
              aria-label={label}
            >
              {isActive ? (
                <span
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-400"
                  style={{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.15)' }}
                >
                  <Icon size={20} className="text-[var(--color-primary)]" />
                  <span className="text-xs font-bold text-[var(--color-primary)] whitespace-nowrap">
                    {label}
                  </span>
                </span>
              ) : (
                <span className="flex items-center justify-center w-10 h-10 rounded-full text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-border)]/50 transition-all duration-300">
                  <Icon size={20} />
                </span>
              )}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
