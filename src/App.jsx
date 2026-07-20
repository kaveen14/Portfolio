import Navbar       from './components/Navbar'
import Sidebar      from './components/Sidebar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import About        from './components/About'
import Projects     from './components/Projects'
import Experience   from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import BottomNav    from './components/BottomNav'
import ColorPalette from './components/ColorPalette'
import BackToTop    from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-[var(--bg-page)] min-h-screen text-[var(--text-primary)] font-sans transition-colors duration-400">
      <Navbar />
      <Sidebar />
      <ColorPalette />
      <BottomNav />
      <BackToTop />

      <main className="md:pl-16 pb-16 md:pb-0">
        <section id="home">     <Hero />     </section>
        <section id="skills">   <Services /> </section>
        <section id="about">    <About />    </section>
        <section id="projects"> <Projects /> </section>

        <div
          id="experience"
          className="border-t border-[var(--bg-border)] grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--bg-border)]"
        >
          <Experience />
          <Testimonials />
        </div>

        <section id="contact" className="border-t border-[var(--bg-border)]">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  )
}
