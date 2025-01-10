// import { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: ['brownsteven21329@gmail.com', email],
            subject: 'Test',
            react: 
                <>
                    <h1>${data.subject}</h1>
                    <p>Thank you for reaching out!</p>
                    <p>New message submitted</p>
                    <p>${data.message}</p>
                </>
        })

        return Response.json(data)


    }
    catch {
        return Response.json({ error })
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