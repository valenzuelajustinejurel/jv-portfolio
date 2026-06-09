import { Code2, Mail, ArrowUpRight, Briefcase } from 'lucide-react'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GITHUB = 'https://github.com/valenzuelajustinejurel/justine-automation-portfolio'
const UPWORK = 'https://www.upwork.com/freelancers/~01abafb650692d7216?mp_source=share'
const LINKEDIN = 'https://www.linkedin.com/in/justine-jurel-valenzuela-2016812aa/'
const ONLINEJOBS = 'https://www.onlinejobs.ph/jobseekers/info/1832110'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-6 mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
              <span className="text-white text-xs font-black">JV</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Justine Valenzuela</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-gray-500 text-xs">Available for work</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-5">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#0a66c2] transition-colors group">
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={UPWORK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#6fda44] transition-colors group">
              <Briefcase size={14} />
              Upwork
              <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={ONLINEJOBS} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#e85d26] transition-colors group">
              <Briefcase size={14} />
              OnlineJobs.ph
              <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <Code2 size={14} />
              GitHub
              <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="mailto:jjv2025@hlproject.org"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
              <Mail size={14} />
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-700">© 2026 Justine Valenzuela</p>
        </div>

        {/* Stack line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-700">Built with</span>
          {['n8n', 'OpenRouter', 'React', 'Tailwind'].map(t => (
            <span key={t} className="text-xs text-gray-600 bg-white/3 border border-white/5 px-2 py-0.5 rounded-md">{t}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
