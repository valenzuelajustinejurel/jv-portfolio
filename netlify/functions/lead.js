const WEBHOOK_URL = process.env.N8N_LEAD_WEBHOOK_URL
const WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
    console.error('Missing N8N_LEAD_WEBHOOK_URL or N8N_WEBHOOK_SECRET env vars')
    return new Response('Server configuration error', { status: 500 })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const { name, email, message } = body
  if (!name || !email || !message) {
    return new Response('Missing required fields', { status: 400 })
  }

  try {
    const resp = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': WEBHOOK_SECRET,
      },
      body: JSON.stringify({ name, email, phone: body.phone ?? '', message, source: 'portfolio-contact' }),
    })

    if (!resp.ok) {
      console.error('n8n webhook returned', resp.status)
      return new Response('Upstream error', { status: 502 })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Failed to reach n8n webhook:', err)
    return new Response('Failed to reach webhook', { status: 502 })
  }
}
