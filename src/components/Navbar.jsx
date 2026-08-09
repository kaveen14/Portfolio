import { useEffect, useState, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { personal, navLinks } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Observe sections to update active state
  useEffect(() => {
    const sections = navLinks.map(item => item.href.slice(1))
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

  // Keep the active menu item visible (centered) inside the scroll container
  useEffect(() => {
    if (!navRef.current) return
    const activeLink = navRef.current.querySelector(`a[href="#${activeSection}"]`)
    if (activeLink && typeof activeLink.scrollIntoView === 'function') {
      activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activeSection])

  function handleNavClick(e, href) {
    setActiveSection(href.replace('#', ''))
    try {
      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    } catch (err) {}
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--bg-page)]/90 backdrop-blur-md border-b border-[var(--bg-border)] transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:pl-20 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-black text-[var(--text-primary)] tracking-tight mr-4 md:mr-6">
          <span className="text-[var(--color-primary)]">{personal.initials[0]}</span>
          {personal.initials[1]}
        </a>

        {/* Desktop Nav Links (scrollable) */}
        <div className="hidden md:flex md:flex-1 md:items-center">
          <nav aria-label="Primary navigation" ref={navRef} className="nav-scroll w-full">
            <ul className="flex items-center gap-2 md:gap-3 lg:gap-4 px-2">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <li key={link.label} className="flex-shrink-0">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative ${isActive ? 'text-[var(--color-primary)] font-semibold' : 'text-[var(--text-secondary)]'} hover:text-[var(--color-primary)] text-xs md:text-sm transition-colors duration-200 group px-2 py-1`}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 nav-underline" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

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
