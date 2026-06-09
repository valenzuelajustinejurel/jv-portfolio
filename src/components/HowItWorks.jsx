const steps = [
  {
    number: '01',
    title: 'Trigger fires',
    description: 'A form submit, email, or Slack message kicks off the workflow instantly — no manual step.',
  },
  {
    number: '02',
    title: 'AI processes',
    description: 'Claude AI reads the context, classifies or scores, and drafts the right response.',
  },
  {
    number: '03',
    title: 'Routes and acts',
    description: 'Notifies the right person, sends the right reply — fully automated.',
  },
  {
    number: '04',
    title: 'Logs everything',
    description: 'Every event lands in Google Sheets. No lead, candidate, or ticket falls through.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">

        <div className="mb-16">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.15em] mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            From trigger to action<br />in seconds.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(100%_-_8px)] w-full h-px bg-gradient-to-r from-indigo-500/30 to-transparent z-0" />
              )}
              <div className="relative bg-gray-900/40 border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-violet-600/20 border border-indigo-500/20 flex items-center justify-center mb-5">
                  <span className="text-sm font-black text-indigo-300">{step.number}</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-base">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
