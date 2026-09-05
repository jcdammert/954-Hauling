import { NextRequest, NextResponse } from 'next/server';

const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

export async function POST(req: NextRequest) {
  if (!GHL_WEBHOOK_URL) {
    console.error('GHL_WEBHOOK_URL is not set');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const body = await req.json();
  const { turnstileToken } = body;

  // Block direct POST bots with no token
  if (!turnstileToken) {
    return NextResponse.json({ error: 'Bot check failed' }, { status: 400 });
  }

  // Allow through if Turnstile had a network error (token = sentinel), but log it
  if (turnstileToken !== '__unavailable__') {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: TURNSTILE_SECRET, response: turnstileToken }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ error: 'Bot check failed' }, { status: 400 });
    }
  } else {
    console.warn('Turnstile unavailable — allowing submission through');
  }

  const payload = {
    first_name: body.firstName,
    last_name: body.lastName,
    phone: body.phone,
    email: body.email,
    service: body.service,
    message: body.message,
    hear_about: body.hear_about,
    source: '954hauling.com Contact Form',
  };

  const ghlRes = await fetch(GHL_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!ghlRes.ok) {
    console.error('GHL webhook error:', ghlRes.status, await ghlRes.text());
    return NextResponse.json({ error: 'Failed to submit' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
