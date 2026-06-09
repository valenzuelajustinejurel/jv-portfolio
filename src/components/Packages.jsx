import { Check, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Starter',
    setup: '$800',
    monthly: '$100',
    tagline: 'One workflow. Get started.',
    features: [
      'Marketing website',
      '1 automation workflow',
      'Google Sheets logging',
      'Hosting + uptime monitoring',
      'Small content edits',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    setup: '$1,200',
    monthly: '$200',
    tagline: 'Three workflows. Built to scale.',
    features: [
      'Everything in Starter',
      '3 automation workflows',
      'Owner Slack + SMS alerts',
      'Automation monitoring + fixes',
      '1 workflow tweak / month',
    ],
    featured: true,
  },
  {
    name: 'Full Suite',
    setup: '$1,800',
    monthly: '$300',
    tagline: 'Full automation. Priority support.',
    features: [
      'Everything in Growth',
      'Full workflow suite',
      'Win-back sequences',
      'Monthly performance digest',
      'Priority support',
    ],
    featured: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/8 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">

        <div className="mb-16">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.15em] mb-4">Packages</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Setup fee +<br />monthly retainer.
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            One recovered lead a week covers the Growth retainer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {packages.map(({ name, setup, monthly, tagline, features, featured }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-200 ${
                featured
                  ? 'bg-gradient-to-b from-indigo-600/15 to-indigo-600/5 border border-indigo-500/35'
                  : 'bg-gray-900/50 border border-white/6 card-hover'
              }`}
            >
              {featured && (
                <>
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      <Sparkles size={10} />
                      Popular
                    </span>
                  </div>
                </>
              )}

              <div className="p-7 flex flex-col gap-6 flex-1">
                <div>
                  <h3 className="text-xl font-black text-white">{name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tagline}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">{setup}</span>
                    <span className="text-gray-500 text-sm">setup</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1.5">
                    then <span className="text-white font-bold">{monthly}/mo</span> to keep it running
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${featured ? 'text-indigo-400' : 'text-gray-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`text-center font-bold text-sm px-4 py-3.5 rounded-xl transition-all duration-200 ${
                    featured
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/8'
                  }`}
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
