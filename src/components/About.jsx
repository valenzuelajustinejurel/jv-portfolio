import { Zap, Globe, LayoutDashboard, ArrowRight, Briefcase } from 'lucide-react'

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const UPWORK = 'https://www.upwork.com/freelancers/~01abafb650692d7216?mp_source=share'
const LINKEDIN = 'https://www.linkedin.com/in/justine-jurel-valenzuela-2016812aa/'
const ONLINEJOBS = 'https://www.onlinejobs.ph/jobseekers/info/1832110'

const skills = [
  { icon: Zap, label: 'AI automation workflows', sub: 'n8n · Claude · OpenRouter' },
  { icon: Globe, label: 'Custom web pages & forms', sub: 'React · Astro · Tailwind' },
  { icon: LayoutDashboard, label: 'Internal dashboards', sub: 'Built for real teams' },
]

export default function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">

          {/* Left — photo card */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-indigo-600/20 blur-2xl scale-95 translate-y-2" />
              <img
                src="/brand_assets/photo.png"
                alt="Justine Valenzuela"
                className="relative w-64 md:w-full aspect-square object-cover rounded-3xl border border-indigo-500/20 shadow-2xl"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-white font-bold text-lg">Justine Valenzuela</p>
              <p className="text-indigo-400 text-sm mt-0.5">AI Automation Specialist</p>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-500">Open to new work</span>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2 w-full">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white bg-white/4 hover:bg-white/8 border border-white/6 px-3 py-2 rounded-xl transition-all">
                <span className="text-[#0a66c2]"><LinkedInIcon /></span>
                LinkedIn
              </a>
              <a href={UPWORK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white bg-white/4 hover:bg-white/8 border border-white/6 px-3 py-2 rounded-xl transition-all">
                <Briefcase size={13} className="text-[#6fda44]" />
                Upwork
              </a>
              <a href={ONLINEJOBS} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white bg-white/4 hover:bg-white/8 border border-white/6 px-3 py-2 rounded-xl transition-all">
                <Briefcase size={13} className="text-[#e85d26]" />
                OnlineJobs.ph
              </a>
            </div>
          </div>

          {/* Right — bio + project + skills */}
          <div>
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.15em] mb-6">Who I am</p>

            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-6">
              Real experience.<br />Not just demos.
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-[15px] mb-8">
              <p>
                I'm Justine — an AI automation specialist with hands-on experience building
                workflow automation for a US company. I converted manual, error-prone processes
                into automated pipelines that run 24/7 without anyone touching them.
              </p>
              <p>
                I also build custom web pages and internal dashboards to go alongside the
                automation. The workflow is the product — the site is the delivery surface.
              </p>
            </div>

            {/* Real project highlight */}
            <div className="bg-gray-900/60 border border-white/6 rounded-2xl p-5 mb-8">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.12em] mb-3">Real project shipped</p>
              <p className="text-sm font-semibold text-white mb-4">Careers Page + Hiring Automation</p>
              <div className="flex flex-wrap items-center gap-2">
                {['Form submission', 'Auto-reply sent', 'Asana task created', 'HR notified'].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="text-xs text-gray-300 bg-white/5 border border-white/8 px-2.5 py-1.5 rounded-lg whitespace-nowrap">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ArrowRight size={11} className="text-gray-600 flex-shrink-0" />}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="grid sm:grid-cols-3 gap-3">
              {skills.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col gap-3 bg-gray-900/40 border border-white/5 rounded-xl p-4 card-hover">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                    <Icon size={15} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-snug">{label}</p>
                    <p className="text-xs text-gray-500 mt-1">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
