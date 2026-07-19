import { useEffect, useRef, useState } from 'react'

/**
 * useInView — triggers once when the observed element enters the viewport.
 *
 * Usage:
 *   const [ref, inView] = useInView()
 *   <div ref={ref} className={inView ? 'opacity-100' : 'opacity-0'} />
 */
export function useInView(threshold = 0.15) {
  const ref    = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // fire only once
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
