import Navbar      from './components/Navbar'
import Sidebar     from './components/Sidebar'
import Hero        from './components/Hero'
import Services    from './components/Services'
import About       from './components/About'
import Projects    from './components/Projects'
import Experience  from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans">
      {/* Sticky top navigation */}
      <Navbar />

      {/* Fixed left social sidebar */}
      <Sidebar />

      {/* All page sections — offset left on md+ to clear the fixed sidebar */}
      <main className="md:pl-16">
        <section id="home">       <Hero />        </section>
        <section id="skills">     <Services />    </section>
        <section id="about">      <About />       </section>
        <section id="projects">   <Projects />    </section>

        {/* Experience + Testimonials side-by-side on large screens, stacked on mobile */}
        <div
          id="experience"
          className="border-t border-dark-border grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-dark-border"
        >
          <Experience />
          <Testimonials />
        </div>

        <section id="contact" className="border-t border-dark-border">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  )
}
