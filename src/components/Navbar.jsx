import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { personal, navLinks } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--bg-page)]/90 backdrop-blur-md border-b border-[var(--bg-border)] transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:pl-20 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-black text-[var(--text-primary)] tracking-tight">
          <span className="text-[var(--color-primary)]">{personal.initials[0]}</span>
          {personal.initials[1]}
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-[var(--text-secondary)] hover:text-[var(--color-primary)] text-sm font-medium transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Theme toggle + CTA (desktop) / Theme toggle only (mobile) */}
        <div className="flex items-center gap-4">
          <ThemeToggle className="md:scale-100 scale-90" />
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-[var(--color-primary)] text-black font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Let's Connect <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  )
}
