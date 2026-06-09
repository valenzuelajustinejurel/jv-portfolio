import { MessageSquare, Users, LifeBuoy } from 'lucide-react'

const patterns = [
  {
    id: '01',
    icon: MessageSquare,
    name: 'Lead Response',
    trigger: 'Contact form submitted',
    problem: 'Leads go cold before anyone replies.',
    solution: 'AI responds in under 60 seconds with a personalised message. Owner gets a Slack alert.',
    accent: 'from-emerald-500/20 to-emerald-500/0',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    id: '02',
    icon: Users,
    name: 'Candidate Screening',
    trigger: 'Application email received',
    problem: 'Every application gets the same attention regardless of quality.',
    solution: 'AI scores 1–10, drafts tier-appropriate replies, DMs hiring manager for strong candidates.',
    accent: 'from-blue-500/20 to-blue-500/0',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    id: '03',
    icon: LifeBuoy,
    name: 'Ticket Triage',
    trigger: 'Slack support message posted',
    problem: 'P1 outages wait in the same queue as minor questions.',
    solution: 'AI classifies P1/P2/P3, pages on-call for critical issues, replies in-thread automatically.',
    accent: 'from-violet-500/20 to-violet-500/0',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
  },
]

export default function WhatIAutomate() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.15em] mb-4">What I build</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Three patterns.<br />Any niche.
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg text-lg">
            The same workflow logic drops into any business — swap the branding, keep the automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {patterns.map(({ id, icon: Icon, name, trigger, problem, solution, accent, iconColor, iconBg }) => (
            <div key={id} className="card-hover group relative bg-gray-900/50 border border-white/6 rounded-2xl overflow-hidden flex flex-col">
              {/* Top gradient accent */}
              <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${accent}`} />

              <div className="p-6 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between">
                  <div className={`p-2.5 rounded-xl border ${iconBg}`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <span className="text-xs font-black text-gray-700 font-mono">{id}</span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
                  <p className="text-xs text-gray-500 font-medium">↳ {trigger}</p>
                </div>

                <div className="space-y-3 flex-1">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <span className="text-gray-600">Problem — </span>{problem}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <span className="text-gray-600">Solution — </span>{solution}
                  </p>
                </div>

                <a href="#work" className={`text-sm font-semibold ${iconColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  View case study →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
