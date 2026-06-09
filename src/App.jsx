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
  return (
    <div className="relative">
      <div className="dot-grid fixed inset-0 pointer-events-none" />
      <Nav />
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
