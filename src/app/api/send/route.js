import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const { subject, message, email } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'lucas.fernandez@acoloma.com',
                pass: process.env.DB_PASSWORD
            },
            tls:{
                rejectUnauthorized:false
            }
        });

        const mailOptions = {
            from: 'lucas.fernandez@acoloma.com',
            to: 'lucas.fernandez@acoloma.com',
            subject: "acoloma web ha recibido un mensaje",
            html: `
                <h1>${subject}</h1>
                <p>${message}</p>
                <p>Nuevo mensaje en tu sitio web</p>
                <p>${email}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email enviado exitosamente' }, { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
    }
}
