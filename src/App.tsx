import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-4 z-[60] -translate-y-20 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

