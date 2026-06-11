import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full px-6 py-20">

        {/* Badge */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 border border-indigo-500/25 bg-indigo-500/8 px-4 py-2 rounded-full uppercase tracking-[0.12em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-black leading-[0.92] tracking-tight mb-8">
          <span className="block text-[clamp(3rem,8vw,6.5rem)] text-white">AI workflows</span>
          <span className="block text-[clamp(3rem,8vw,6.5rem)] gradient-text">that work while</span>
          <span className="block text-[clamp(3rem,8vw,6.5rem)] text-white">you sleep.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          I've built automation that replaced hours of manual work — at a US company and now
          for clients who are tired of doing things by hand. Lead follow-up, hiring pipelines,
          support triage. Fully documented. End-to-end.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-24">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            See my work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <button
            onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/valenzuela-justinejurel/30min' })}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white border border-white/10 hover:border-white/25 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-sm"
          >
            Book a Call
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5 pt-8 border-t border-white/5">
          {[
            { value: '3+', label: 'Workflows shipped' },
            { value: '60s', label: 'Avg AI response time' },
            { value: 'US co.', label: 'Real-world experience' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-gray-500 mt-0.5 tracking-wide">{s.label}</div>
              </div>
              {i < 2 && <div className="h-8 w-px bg-white/8 hidden sm:block" />}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
