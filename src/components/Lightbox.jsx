import { useEffect, useState, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'

function resolvePath(src) {
  if (!src) return ''
  // Keep remote URLs and data URIs as-is
  if (src.startsWith('http') || src.startsWith('data:')) return src
  // Normalize local paths: support backslashes, './' and '../' prefixes, and remove leading slashes
  let p = src.replace(/\\/g, '/').trim()
  // remove leading ./ or ../ segments
  p = p.replace(/^(?:\.\/|\.\.\/)+/, '')
  if (p.startsWith('/')) p = p.slice(1)
  // Determine base (Vite's BASE_URL or PUBLIC_URL) so assets work when app is hosted under a subpath
  let base = '/'
  try {
    if (import.meta && import.meta.env && import.meta.env.BASE_URL) base = import.meta.env.BASE_URL
  } catch (err) {}
  try {
    if (typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL) base = process.env.PUBLIC_URL
  } catch (err) {}
  if (!base.endsWith('/')) base = base + '/'
  try { return encodeURI(base + p) } catch (err) { return base + p }
}

export default function Lightbox({ items = [], startIndex = 0, onClose = () => {} }) {
  const [index, setIndex] = useState(startIndex)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const panStartRef = useRef({ x: 0, y: 0 })
  const offsetStartRef = useRef({ x: 0, y: 0 })
  const mediaRef = useRef(null)
  const containerRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => setIndex(startIndex), [startIndex])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === '+' || e.key === '=') zoomIn()
      if (e.key === '-') zoomOut()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items, scale])

  useEffect(() => {
    function onFs() { setIsFullscreen(!!document.fullscreenElement) }
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  useEffect(() => {
    if (scale <= 1) setOffset({ x: 0, y: 0 })
  }, [scale])

  if (!items || !items.length) return null
  const item = items[index] || null
  if (!item) return null
  const src = resolvePath(item.src || '')
  const title = item.title || ''
  const type = item.type || (src.toLowerCase().endsWith('.pdf') ? 'pdf' : 'image')

  function prev() {
    if (!items.length) return
    setIndex((i) => (i - 1 + items.length) % items.length)
    setScale(1); setOffset({ x: 0, y: 0 })
  }
  function next() {
    if (!items.length) return
    setIndex((i) => (i + 1) % items.length)
    setScale(1); setOffset({ x: 0, y: 0 })
  }

  function zoomIn() { setScale(s => Math.min(3, +(s + 0.25).toFixed(2))) }
  function zoomOut() { setScale(s => Math.max(1, +(s - 0.25).toFixed(2))) }
  function resetZoom() { setScale(1); setOffset({ x: 0, y: 0 }) }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  function onPointerDown(e) {
    if (type === 'pdf' || scale <= 1) return
    e.preventDefault()
    setIsPanning(true)
    panStartRef.current = { x: e.clientX, y: e.clientY }
    offsetStartRef.current = { ...offset }
    try { e.currentTarget.setPointerCapture(e.pointerId) } catch (err) {}
  }
  function onPointerMove(e) {
    if (!isPanning) return
    const dx = e.clientX - panStartRef.current.x
    const dy = e.clientY - panStartRef.current.y
    setOffset({ x: offsetStartRef.current.x + dx, y: offsetStartRef.current.y + dy })
  }
  function onPointerUp(e) {
    if (!isPanning) return
    setIsPanning(false)
    try { e.currentTarget.releasePointerCapture(e.pointerId) } catch (err) {}
  }

  function onDoubleClick() {
    if (type === 'pdf') return
    if (scale === 1) setScale(2)
    else resetZoom()
  }

  function onWheel(e) {
    // Zoom with ctrl + wheel inside the lightbox media
    if (!e.ctrlKey) return
    e.preventDefault()
    if (e.deltaY < 0) zoomIn()
    else zoomOut()
  }

  function thumbnailClick(i) {
    setIndex(i)
    setScale(1); setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl w-full max-h-[92vh] bg-transparent rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/60 hover:bg-black/40 text-white"
        >
          <X size={18} />
        </button>

        {/* Prev / Next controls */}
        {items.length > 1 && (
          <>
            <button onClick={prev} aria-label="Previous" className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/30 text-white">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} aria-label="Next" className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/30 text-white">
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <div className="w-full h-full flex flex-col md:flex-row items-stretch bg-[var(--bg-card)] rounded-lg overflow-hidden">
          <div className="flex-1 flex flex-col p-4 md:p-6">
            <div className="relative flex-1 flex flex-col items-center justify-center bg-black/5 overflow-hidden">

              {/* top-left controls */}
              <div className="absolute top-3 left-3 z-30 flex gap-2 lightbox-controls">
                <button onClick={zoomOut} aria-label="Zoom out" className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--bg-border)] text-xs">
                  <ZoomOut size={14} />
                </button>
                <button onClick={resetZoom} aria-label="Reset zoom" className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--bg-border)] text-xs">Fit</button>
                <button onClick={zoomIn} aria-label="Zoom in" className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--bg-border)] text-xs">
                  <ZoomIn size={14} />
                </button>
                <button onClick={toggleFullscreen} aria-label="Toggle fullscreen" className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--bg-border)] text-xs">
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* media area */}
              <div
                ref={mediaRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onDoubleClick={onDoubleClick}
                onWheel={onWheel}
                className={`lightbox-media w-full h-full flex items-center justify-center ${isPanning ? 'grabbing' : ''}`}
              >
                {type === 'pdf' ? (
                  <iframe src={src} title={title} className="w-full h-[70vh] md:h-[80vh] border-none" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt={title}
                    draggable={false}
                    style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }}
                    className="max-h-[80vh] w-auto max-w-full object-contain rounded"
                  />
                )}
              </div>

              {/* thumbnails strip */}
              <div className="mt-3 w-full overflow-x-auto">
                <div className="flex gap-2 py-2 px-1">
                  {items.map((it, i) => (
                    <button
                      key={i}
                      onClick={() => thumbnailClick(i)}
                      className={`lightbox-thumb ${i === index ? 'lightbox-thumb-active' : ''}`}
                      aria-label={it.title || `item-${i}`}
                    >
                      { (it.type === 'pdf' || resolvePath(it.src || '').toLowerCase().endsWith('.pdf')) ? (
                        <div className="lightbox-pdf-thumb text-[var(--text-muted)] text-xs px-2">PDF</div>
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={resolvePath(it.src)} alt={it.title || `thumb-${i}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="md:w-64 w-full p-4 md:p-6 border-t md:border-t-0 md:border-l border-[var(--bg-border)] bg-[var(--bg-page)]/40">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">{title}</h3>
            <div className="flex gap-2 mt-3">
              <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--bg-card)] border border-[var(--bg-border)] text-xs hover:bg-[var(--bg-card)]/90">
                <Download size={14} />
                <span>Open / Download</span>
              </a>
              {items.length > 1 && (
                <button onClick={prev} className="text-xs px-3 py-2 rounded-md border border-[var(--bg-border)]">Prev</button>
              )}
              {items.length > 1 && (
                <button onClick={next} className="text-xs px-3 py-2 rounded-md border border-[var(--bg-border)]">Next</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
