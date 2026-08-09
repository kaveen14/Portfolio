import { useInView } from '../hooks/useInView'
import { demos } from '../data/portfolio'

function getYouTubeEmbed(url) {
  if (!url) return null
  try {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/').pop().split(/[?&]/)[0]
      return `https://www.youtube.com/embed/${id}`
    }
    if (url.includes('watch?v=')) {
      const id = url.split('v=')[1].split('&')[0]
      return `https://www.youtube.com/embed/${id}`
    }
    if (url.includes('youtube.com/embed/')) {
      return url
    }
  } catch (e) {
    return null
  }
  return null
}

export default function Demos() {
  const [headerRef, headerInView] = useInView()
  const [cardsRef,  cardsInView]  = useInView()

  return (
    <section id="demos" className="py-20 px-6 sm:px-8 lg:px-16 border-t border-[var(--bg-border)]">
      <div className="max-w-6xl mx-auto">

        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-10 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-2">Project Demos</p>
            <h2 className="text-3xl font-black text-[var(--text-primary)]">Live Demos & Repositories</h2>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {demos.map((demo, i) => (
            <div
              key={demo.id}
              className={`transition-all duration-700 ease-out ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <DemoCard {...demo} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function DemoCard({ title, description, demoLink, repoLink, video }) {
  const embedFrom = video || demoLink
  const yt = getYouTubeEmbed(embedFrom)

  return (
    <div className="h-full bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all duration-300">
      <div className="bg-[var(--bg-card)] border-b border-[var(--bg-border)]">
        {yt ? (
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={yt}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : demoLink && demoLink !== '#' ? (
          <div className="p-6 text-center text-[var(--text-muted)]">Preview not available — <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">Open Demo</a></div>
        ) : (
          <div className="p-6 text-center text-[var(--text-muted)]">No demo available</div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-sm pr-2">{title}</h3>
            <p className="text-[var(--text-muted)] text-xs">{description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          {repoLink ? (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 rounded-md border border-[var(--bg-border)] hover:border-[var(--color-primary)] transition-all">
              View Repo
            </a>
          ) : null}

          {demoLink && demoLink !== '#' && !yt ? (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 rounded-md border border-[var(--bg-border)] hover:border-[var(--color-primary)] transition-all">
              Open Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
