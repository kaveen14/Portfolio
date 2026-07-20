import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/portfolio'
import { useInView }    from '../hooks/useInView'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView()

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
  const testimonial = testimonials[current]

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-xl">

        <div
          className={`mb-10 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl font-black text-[var(--text-primary)]">What People Say</h2>
        </div>

        <div
          ref={ref}
          className={`bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl p-8 hover:border-[var(--color-primary)]/30 transition-all duration-500 hover-glow ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Quote size={30} className="mb-4" style={{ color: 'rgba(var(--color-primary-rgb), 0.4)' }} />

          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 min-h-[80px] transition-opacity duration-300">
            {testimonial.quote}
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-primary)] font-bold text-sm shrink-0" style={{ backgroundColor: 'rgba(var(--color-primary-rgb), 0.15)' }}>
              {testimonial.name[0]}
            </div>
            <div>
              <p className="text-[var(--text-primary)] text-sm font-semibold">{testimonial.name}</p>
              <p className="text-[var(--text-muted)] text-xs">{testimonial.role}</p>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center gap-4 mt-6 transition-all duration-700 delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-[var(--bg-border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:scale-110 transition-all"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 bg-[var(--color-primary)]' : 'w-2 bg-[var(--bg-border)] hover:bg-[var(--text-muted)]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-[var(--bg-border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:scale-110 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
