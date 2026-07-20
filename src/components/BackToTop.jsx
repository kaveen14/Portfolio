import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed z-50 w-10 h-10 rounded-full bg-[var(--color-primary)] text-black items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 bottom-8 right-8 hidden md:flex ${
        visible ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-4 md:pointer-events-none'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
