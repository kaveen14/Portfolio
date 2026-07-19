import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { personal, navLinks } from '../data/portfolio'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  // Deepen the nav shadow once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/60' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:pl-20 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="text-2xl font-black text-white tracking-tight">
          <span className="text-primary">{personal.initials[0]}</span>
          {personal.initials[1]}
        </a>

        {/* ── Desktop Nav Links (underline slide on hover) ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-gray-400 hover:text-primary text-sm font-medium transition-colors duration-200 group"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA Button ── */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-primary text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-green-400 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Let's Connect <ArrowRight size={14} />
        </a>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-1 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-card border-t border-dark-border px-6 py-5 animate-fade-up">
          <ul className="flex flex-col gap-4 mb-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-primary text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-5 py-2 rounded-full text-sm"
          >
            Let's Connect <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  )
}
