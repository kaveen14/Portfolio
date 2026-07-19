import { Github, Linkedin, Twitter, Mail, Home } from 'lucide-react'
import { socialLinks } from '../data/portfolio'

// Map icon string keys (from portfolio.js) to Lucide components
const ICON_MAP = {
  github:   Github,
  linkedin: Linkedin,
  twitter:  Twitter,
  mail:     Mail,
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 z-40 hidden md:flex flex-col items-center pt-24 pb-8 gap-7 border-r border-dark-border bg-dark-bg/80 backdrop-blur-sm">

      {/* Home shortcut */}
      <a
        href="#home"
        aria-label="Home"
        className="text-gray-500 hover:text-primary transition-colors duration-200"
      >
        <Home size={18} />
      </a>

      {/* Divider */}
      <div className="w-px h-6 bg-dark-border" />

      {/* Social links from portfolio.js */}
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
            className="text-gray-500 hover:text-primary transition-colors duration-200"
          >
            <Icon size={18} />
          </a>
        )
      })}
    </aside>
  )
}
