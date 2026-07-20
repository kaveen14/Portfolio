import { Github, Linkedin, Twitter, Mail, Home } from 'lucide-react'
import { socialLinks } from '../data/portfolio'

const ICON_MAP = {
  github:   Github,
  linkedin: Linkedin,
  twitter:  Twitter,
  mail:     Mail,
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 z-40 hidden md:flex flex-col items-center pt-24 pb-8 gap-7 border-r border-[var(--bg-border)] bg-[var(--bg-page)]/80 backdrop-blur-sm">

      <a
        href="#home"
        aria-label="Home"
        className="text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-all duration-200 hover:scale-110"
      >
        <Home size={18} />
      </a>

      <div className="w-px h-6 bg-[var(--bg-border)]" />

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
            className="text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-all duration-200 hover:scale-110"
          >
            <Icon size={18} />
          </a>
        )
      })}
    </aside>
  )
}
