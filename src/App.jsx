import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import WhatIAutomate from './components/WhatIAutomate'
import HowItWorks from './components/HowItWorks'
import Tools from './components/Tools'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className="relative">
      <div className="dot-grid fixed inset-0 pointer-events-none" />
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative">
        <Hero />
        <About />
        <WhatIAutomate />
        <HowItWorks />
        <Tools />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
