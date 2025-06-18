import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    const { name, email, text } = await request.json();

    if (!name || !email || !text) {
        return NextResponse.json({ success: false });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            to: process.env.SMTP_USER,
            text: `Nom: ${name} \n Email: ${email}`,
            html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${text.replace(/\n/g, "<br/>")}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false });
    }
}