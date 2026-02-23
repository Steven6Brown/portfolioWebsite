// import { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        const data = await resend.emails.send({
            from: 'noreply@stevenrbrown.org',
            to: 'brownsteven21329@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h1>New message from your portfolio!</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ error });
    }
}

// const data = request.body;

        // console.log('sent to route')

        // try {
        //     const { data, error } = await resend.emails.send({
        //         from: fromEmail, // change email to a business email. EX: 'Steven Brown <brownsteven21329@gmail.com>',
        //         to: ['brownsteven21329@gmail.com', email], // chose mine as a place holder for a support email by chance. EX: ['brownsteven21329@gmail.com']
        //         subject: data.subject,
        //         html: `
        //             <div>
        //                 <h1>${data.subject}</h1>
        //                 <p>Thank you for reaching out!</p>
        //                 <p>New message submitted</p>
        //                 <p>${data.message}</p>
        //             </div>
        //         ), // EmailTemplate({ firstName: 'John' }),
        //         `
        //     });

        //     return NextResponse.json(data);
        // } catch (error) {
        //     return NextResponse.json({ error });
        // }