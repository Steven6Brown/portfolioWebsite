import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape user input before it goes into the notification email's HTML.
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function clean(value, max) {
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(req) {
    let body;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    // Honeypot: real visitors never see or fill this field. Pretend success so bots do not retry.
    if (typeof body.website === 'string' && body.website.trim() !== '') {
        return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, LIMITS.name);
    const email = clean(body.email, LIMITS.email);
    const subject = clean(body.subject, LIMITS.subject);
    const message = clean(body.message, LIMITS.message);

    if (!name || !subject || !message || !EMAIL_PATTERN.test(email)) {
        return NextResponse.json({ error: 'Please fill in every field with a valid email address.' }, { status: 400 });
    }

    try {
        const { error } = await resend.emails.send({
            from: 'noreply@stevenrbrown.org',
            to: process.env.CONTACT_TO_EMAIL || 'steven.r.brown.tech@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact: ${subject.replace(/[\r\n]+/g, ' ')}`,
            html: `
                <h1>New message from your portfolio</h1>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
            `,
        });

        if (error) {
            return NextResponse.json({ error: 'The message could not be sent.' }, { status: 502 });
        }

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: 'The message could not be sent.' }, { status: 500 });
    }
}
