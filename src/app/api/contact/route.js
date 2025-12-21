import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        // 1. Validate fields
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Call Brevo API directly
        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY, // secure server-side key
                'content-type': 'application/json'
            },
            // Inside /api/contact/route.js
            body: JSON.stringify({
                // Send "From" yourself so Gmail trusts it
                sender: { name: 'Website Contact Form', email: 'ingenioustechworks@gmail.com' },
                // But make "Reply" go to the customer
                replyTo: { email: email, name: name },
                to: [{ email: 'ingenioustechworks@gmail.com', name: 'Ingenious Tech Works' }],
                // ... rest of code
                subject: `New Contact: ${subject || 'General Inquiry'}`,
                htmlContent: `
          <html>
            <body>
              <h2>New Message from your Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc;">
                ${message}
              </blockquote>
            </body>
          </html>
        `
            })
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Failed to send email');
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Brevo Error:', error);
        return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }
}