import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're near the bottom of the page
      const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100

      if (isNearBottom) {
        setActiveSection('contact')
        return
      }

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          const nextElement = i < sections.length - 1 
            ? document.getElementById(sections[i + 1])
            : null

          if (nextElement) {
            // Check if scroll position is within this section (before next section starts)
            if (scrollPosition >= offsetTop && scrollPosition < nextElement.offsetTop) {
              setActiveSection(section)
              break
            }
          } else {
            // Last section - check if we're past its start
            if (scrollPosition >= offsetTop) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar activeSection={activeSection} />
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
