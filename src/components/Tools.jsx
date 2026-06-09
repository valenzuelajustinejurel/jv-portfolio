import { useState } from 'react'
import { Code2 } from 'lucide-react'

const SI = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`

const CL = (domain) => `https://logo.clearbit.com/${domain}`

const tools = [
  { name: 'n8n',            category: 'Automation',      logo: SI('n8n') },
  { name: 'Claude AI',      category: 'AI / LLM',        logo: SI('anthropic', 'ffffff') },
  { name: 'OpenRouter',     category: 'AI Gateway',      logo: null, icon: 'openrouter' },
  { name: 'Supabase',       category: 'Database',        logo: SI('supabase') },
  { name: 'React',          category: 'Frontend',        logo: SI('react') },
  { name: 'Tailwind CSS',   category: 'Styling',         logo: SI('tailwindcss') },
  { name: 'Slack',          category: 'Messaging',       logo: null, icon: 'slack' },
  { name: 'Gmail',          category: 'Email',           logo: SI('gmail') },
  { name: 'Google Sheets',  category: 'Logging',         logo: SI('googlesheets') },
  { name: 'Google Admin',   category: 'Identity',        logo: SI('google') },
  { name: 'Asana',          category: 'Project Mgmt',    logo: SI('asana') },
  { name: 'Twilio',         category: 'SMS',             logo: null, icon: 'twilio' },
  { name: 'Mailchimp',      category: 'Email Marketing', logo: SI('mailchimp') },
  { name: 'Zapier',         category: 'Automation',      logo: SI('zapier') },
  { name: 'Make.com',       category: 'Automation',      logo: SI('make') },
  { name: 'Apps Script',    category: 'Scripting',       logo: SI('googleappsscript') },
  { name: 'Netlify',        category: 'Deploy',          logo: SI('netlify') },
  { name: 'GitHub',         category: 'Version Control', logo: SI('github', 'ffffff') },
  { name: 'Squarespace',    category: 'Website Builder', logo: SI('squarespace', 'ffffff') },
  { name: 'HubSpot',        category: 'CRM',             logo: SI('hubspot') },
  { name: 'Airtable',       category: 'Database',        logo: SI('airtable') },
  { name: 'REST API',       category: 'Integration',     logo: null },
]

const OpenRouterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="OpenRouter">
    <circle cx="12" cy="12" r="10" stroke="#818cf8" strokeWidth="1.5"/>
    <circle cx="7" cy="12" r="1.5" fill="#818cf8"/>
    <circle cx="12" cy="12" r="1.5" fill="#818cf8"/>
    <circle cx="17" cy="12" r="1.5" fill="#818cf8"/>
    <path d="M8.5 12h3M13.5 12h3" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const SlackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Slack">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
    <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
    <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D"/>
    <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E"/>
    <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
  </svg>
)

const TwilioIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Twilio">
    <circle cx="12" cy="12" r="12" fill="#F22F46"/>
    <circle cx="8.5" cy="8.5" r="2.2" fill="white"/>
    <circle cx="15.5" cy="8.5" r="2.2" fill="white"/>
    <circle cx="8.5" cy="15.5" r="2.2" fill="white"/>
    <circle cx="15.5" cy="15.5" r="2.2" fill="white"/>
  </svg>
)

function LogoImg({ src, alt, icon }) {
  const [failed, setFailed] = useState(false)
  if (icon === 'openrouter') return <OpenRouterIcon />
  if (icon === 'slack') return <SlackIcon />
  if (icon === 'twilio') return <TwilioIcon />
  if (failed || !src) return <Code2 size={16} className="text-indigo-400" />
  return (
    <img
      src={src}
      alt={alt}
      className="w-5 h-5 object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Tools() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.15em] mb-4">Stack</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Tools I work with.
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Every project uses the right tool for the job — not the one that looks good on a resume.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {tools.map(({ name, category, logo, icon }) => (
            <div
              key={name}
              className="card-hover flex items-center gap-3 bg-gray-900/50 border border-white/6 rounded-xl px-4 py-3"
            >
              <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                <LogoImg src={logo} alt={name} icon={icon} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-none">{name}</p>
                <p className="text-[11px] text-gray-600 mt-0.5">{category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
