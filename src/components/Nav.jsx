import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050509]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/25">
              <span className="text-white text-xs font-black">JV</span>
            </div>
            <span className="font-bold text-white text-sm tracking-tight hidden sm:block">
              Meet Justine
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Theme toggle + CTA + hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/8 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={16} />
                : <Moon size={16} className="text-indigo-500" />
              }
            </button>
            <button
              onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/valenzuela-justinejurel/30min' })}
              className="hidden md:inline-flex items-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
            >
              Book a Call
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-x-0 top-16 z-40 md:hidden transition-all duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="mobile-menu-panel bg-[#050509]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 pb-1 flex flex-col gap-2">
            <button
              onClick={() => { setOpen(false); window.Calendly?.initPopupWidget({ url: 'https://calendly.com/valenzuela-justinejurel/30min' }) }}
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
