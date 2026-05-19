import { useState } from 'react'
import LangProvider from './context/LangProvider'
import Navbar      from './components/layout/Navbar'
import Footer      from './components/layout/Footer'
import Login       from './components/sections/Login'
import Hero        from './components/sections/Hero'
import About       from './components/sections/About'
import Skills      from './components/sections/Skills'
import Experience  from './components/sections/Experience'
import Education   from './components/sections/Education'
import Contact     from './components/sections/Contact'

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <LangProvider>
      {authenticated
        ? <Portfolio />
        : <Login onSuccess={() => setAuthenticated(true)} />
      }
    </LangProvider>
  )
}