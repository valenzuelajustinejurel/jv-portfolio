import { ArrowUpRight, Lock } from 'lucide-react'

const GITHUB = 'https://github.com/valenzuelajustinejurel/justine-automation-portfolio'

const workflows = [
  {
    id: '01',
    client: 'Horizon Consulting',
    industry: 'Service Business',
    name: 'Lead Intake + AI Qualification',
    problem: 'Leads submitted via form sat unread for hours, going cold before anyone replied.',
    solution: 'Webhook triggers AI classification — hot / warm / cold — with an auto-drafted reply sent in under 60 seconds.',
    stack: ['n8n', 'OpenRouter', 'Slack', 'Gmail', 'Sheets'],
    color: 'from-emerald-500',
    link: { type: 'github', folder: '01-lead-intake-ai-qualification' },
  },
  {
    id: '02',
    client: 'NovaCo',
    industry: 'HR / Recruiting',
    name: 'AI-Powered Hiring Pipeline',
    problem: 'Every job application hit the same inbox regardless of quality, burying strong candidates.',
    solution: 'Gmail trigger feeds AI scoring — 1–10 — with tier-appropriate replies and Slack DM for strong candidates.',
    stack: ['n8n', 'OpenRouter', 'Gmail', 'Slack', 'Sheets'],
    color: 'from-blue-500',
    link: { type: 'github', folder: '02-ai-powered-hiring-pipeline' },
  },
  {
    id: '03',
    client: 'Meridian Corp',
    industry: 'IT / Support',
    name: 'Slack IT Support + AI Router',
    problem: 'IT support requests in Slack had no triage — P1 outages waited in the same queue as minor issues.',
    solution: 'Slack trigger feeds AI priority classification — P1/P2/P3 — pages on-call for critical issues, replies in-thread for all.',
    stack: ['n8n', 'OpenRouter', 'Slack', 'Sheets'],
    color: 'from-violet-500',
    link: { type: 'github', folder: '03-slack-it-support-ai-router' },
  },
  {
    id: '04',
    client: 'Internal Tooling',
    industry: 'Operations / IT Admin',
    name: 'Staff Portal + Access Automation',
    problem: 'Creating, deactivating, and resetting work emails through Google Admin was slow and done manually — no central employee record.',
    solution: 'Built a full-stack staff portal (React + Supabase) as the single source of truth for all employees. One-click workflows provision new emails, deactivate accounts, and reset passwords — no Google Admin console needed.',
    stack: ['React', 'Supabase', 'n8n', 'Google Admin'],
    color: 'from-amber-500',
    link: { type: 'private' },
  },
]

const badgeColors = {
  n8n: 'bg-orange-500/10 text-orange-300 border-orange-500/15',
  OpenRouter: 'bg-sky-500/10 text-sky-300 border-sky-500/15',
  Slack: 'bg-purple-500/10 text-purple-300 border-purple-500/15',
  Gmail: 'bg-red-500/10 text-red-300 border-red-500/15',
  Sheets: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15',
  React: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15',
  Supabase: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15',
  'Google Admin': 'bg-blue-500/10 text-blue-300 border-blue-500/15',
}

export default function Portfolio() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.15em] mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Production-grade<br />workflows.
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg text-lg">
            Every workflow ships with a process map, architecture doc, and importable n8n JSON.
          </p>
        </div>

        <div className="space-y-4">
          {workflows.map(({ id, client, industry, name, problem, solution, stack, color, link }) => (
            <div
              key={id}
              className="card-hover group relative bg-gray-900/50 border border-white/6 rounded-2xl overflow-hidden"
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${color} to-transparent opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="flex flex-col md:flex-row md:items-center gap-6 p-7 pl-9">
                {/* ID */}
                <div className="flex-shrink-0 hidden md:block">
                  <span className="text-5xl font-black text-white/5 group-hover:text-white/8 transition-colors leading-none">{id}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-gray-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">{client}</span>
                    <span className="text-xs text-gray-600">·</span>
                    <span className="text-xs text-gray-500">{industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <span className="text-gray-600 font-medium">Problem — </span>{problem}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-gray-600 font-medium">Solution — </span>{solution}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.map(s => (
                      <span key={s} className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${badgeColors[s] ?? 'bg-white/5 text-gray-400 border-white/8'}`}>{s}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  {link.type === 'github' ? (
                    <a
                      href={`${GITHUB}/tree/main/${link.folder}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 group-hover:text-white border border-white/8 group-hover:border-white/20 px-4 py-2.5 rounded-xl transition-all"
                    >
                      View on GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 border border-white/5 px-4 py-2.5 rounded-xl cursor-default">
                      <Lock size={12} />
                      Private repo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
