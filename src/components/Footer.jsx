import { Code2, Mail, ArrowUpRight, Briefcase } from 'lucide-react'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
            <a href="https://wa.me/639946197674" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#25D366] transition-colors group">
              <WhatsAppIcon />
              WhatsApp
              <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <Code2 size={14} />
              GitHub
              <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="mailto:valenzuela.justinejurel@gmail.com"
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
