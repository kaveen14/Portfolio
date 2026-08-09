import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { achievements } from '../data/portfolio'
import Lightbox from './Lightbox'

export default function Achievements() {
  const [headerRef, headerInView] = useInView()
  const [cardsRef,  cardsInView]  = useInView()

  const items = achievements.filter(a => a.image).map(a => ({ id: a.id, src: a.image, title: a.title, type: 'image' }))
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  function openLightboxForId(id) {
    const idx = items.findIndex(it => it.id === id)
    if (idx >= 0) {
      setStartIndex(idx)
      setLightboxOpen(true)
    }
  }

  return (
    <section id="achievements" className="py-20 px-6 sm:px-8 lg:px-16 border-t border-[var(--bg-border)]">
      <div className="max-w-6xl mx-auto">

        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-10 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-2">Achievements</p>
            <h2 className="text-3xl font-black text-[var(--text-primary)]">Recognition & Certificates</h2>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <div
              key={ach.id}
              className={`transition-all duration-700 ease-out ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <AchievementCard {...ach} onOpen={() => openLightboxForId(ach.id)} />
            </div>
          ))}
        </div>

      </div>

      {lightboxOpen && (
        <Lightbox items={items} startIndex={startIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </section>
  )
}

function AchievementCard({ id, title, issuer, year, description, image, index, onOpen }) {
  const preview = image || ''
  const previewSrc = (() => {
    if (!preview) return ''
    if (preview.startsWith('http') || preview.startsWith('data:')) return preview
    let p = preview.replace(/\\/g, '/').trim()
    p = p.replace(/^(?:\.\/|\.\.\/)+/, '')
    if (p.startsWith('/')) p = p.slice(1)
    let base = '/'
    try { if (import.meta && import.meta.env && import.meta.env.BASE_URL) base = import.meta.env.BASE_URL } catch (e) {}
    try { if (typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL) base = process.env.PUBLIC_URL } catch (e) {}
    if (!base.endsWith('/')) base += '/'
    try { return encodeURI(base + p) } catch (e) { return base + p }
  })()

  return (
    <div className="h-full bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all duration-300">
      <div className="h-40 flex items-center justify-center border-b border-[var(--bg-border)] bg-[var(--bg-card)]">
        {preview ? (
          <button onClick={onOpen} className="w-full h-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewSrc} alt={title} className="max-h-36 object-contain hover:scale-105 transition-transform duration-200" />
          </button>
        ) : (
          <div className="text-xs text-[var(--text-muted)]">No certificate image</div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-sm pr-2">{title}</h3>
            <p className="text-[var(--text-muted)] text-xs">{issuer} • {year}</p>
          </div>
        </div>

        <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">{description}</p>
      </div>
    </div>
  )
}
