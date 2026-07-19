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

        {/* Section header */}
        <div
          className={`mb-10 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl font-black text-white">What People Say</h2>
        </div>

        {/* Quote card — scales in */}
        <div
          ref={ref}
          className={`bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Quote size={30} className="text-primary/40 mb-4" />

          <p className="text-gray-300 text-sm leading-relaxed mb-6 min-h-[80px] transition-opacity duration-300">
            {testimonial.quote}
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm shrink-0">
              {testimonial.name[0]}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-xs">{testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div
          className={`flex items-center gap-4 mt-6 transition-all duration-700 delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:scale-110 transition-all"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 bg-primary' : 'w-2 bg-gray-700 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:scale-110 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
