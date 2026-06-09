import { useState } from 'react'
import { Send, Zap } from 'lucide-react'

const WEBHOOK_URL = import.meta.env.VITE_N8N_LEAD_WEBHOOK_URL

const inputClass = 'w-full bg-[#0d0d14] border border-white/10 focus:border-indigo-500/60 focus:bg-[#111118] rounded-xl px-4 py-3.5 text-gray-100 text-sm placeholder-gray-600 outline-none transition-all duration-200'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!WEBHOOK_URL) { setStatus('error'); return }
    setStatus('sending')
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'portfolio-contact' }),
      })
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-2xl mx-auto relative">

        <div className="mb-12 text-center">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.15em] mb-4">Hire me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Let's automate<br />something.
          </h2>
          <div className="inline-flex items-center gap-2 text-sm text-emerald-300 bg-emerald-500/8 border border-emerald-500/15 px-4 py-2 rounded-full">
            <Zap size={12} className="text-emerald-400" />
            Submit this form — you'll hear back in under 60 seconds. Powered by my own workflow.
          </div>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-16 bg-gray-900/40 border border-white/6 rounded-2xl">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Message sent.</h3>
            <p className="text-gray-400">You should have a reply within 60 seconds.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name *</label>
                <input type="text" required value={form.name} onChange={update('name')}
                  placeholder="Alex Johnson" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                <input type="email" required value={form.email} onChange={update('email')}
                  placeholder="alex@company.com" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
              <input type="tel" value={form.phone} onChange={update('phone')}
                placeholder="+1 (555) 000-0000" className={inputClass} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">What do you need automated? *</label>
              <textarea required rows={4} value={form.message} onChange={update('message')}
                placeholder="Tell me what you're trying to automate — lead follow-up, hiring, support, or something else entirely..."
                className={`${inputClass} resize-none`} />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-400 bg-red-500/8 border border-red-500/15 rounded-xl px-4 py-3">
                Something went wrong. Email me at valenzuela.justinejurel@gmail.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send size={15} />
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}

      </div>
    </section>
  )
}
