import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import { courses } from '../data/portfolio'
import Lightbox from './Lightbox'

export default function Courses() {
  const [headerRef, headerInView] = useInView()
  const [cardsRef,  cardsInView]  = useInView()

  const certItems = courses.filter(c => c.certificate).map(c => ({ src: c.certificate, title: c.title, type: 'pdf' }))
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  function openLightboxFor(course) {
    const idx = certItems.findIndex(it => it.src === course.certificate)
    if (idx === -1) return
    setStartIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <section id="courses" className="py-20 px-6 sm:px-8 lg:px-16 border-t border-[var(--bg-border)]">
      <div className="max-w-6xl mx-auto">

        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-10 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-2">Courses</p>
            <h2 className="text-3xl font-black text-[var(--text-primary)]">Course Completion & Certificates</h2>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className={`transition-all duration-700 ease-out ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <CourseCard {...course} onOpen={() => openLightboxFor(course)} />
            </div>
          ))}
        </div>

      </div>

      {lightboxOpen && (
        <Lightbox items={certItems} startIndex={startIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </section>
  )
}

function CourseCard({ title, provider, year, certificate, description, onOpen }) {
  return (
    <div className="h-full bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all duration-300">
      <div className="h-40 flex items-center justify-center border-b border-[var(--bg-border)] bg-[var(--bg-card)]">
        {certificate ? (
          <div className="text-xs text-[var(--text-muted)]">Certificate available</div>
        ) : (
          <div className="text-xs text-[var(--text-muted)]">No certificate attached</div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-sm pr-2">{title}</h3>
            <p className="text-[var(--text-muted)] text-xs">{provider} • {year}</p>
          </div>
        </div>

        <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">{description}</p>

        <div className="flex items-center gap-2">
          {certificate ? (
            <button onClick={onOpen} className="text-xs px-3 py-1 rounded-md border border-[var(--bg-border)] hover:border-[var(--color-primary)] transition-all">
              View Certificate
            </button>
          ) : (
            <span className="text-xs px-3 py-1 rounded-md border border-[var(--bg-border)] text-[var(--text-muted)]">No Certificate</span>
          )}
        </div>
      </div>
    </div>
  )
}
