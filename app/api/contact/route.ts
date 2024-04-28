import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    message: z.string().min(1, "Message is required")
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, message } = contactSchema.parse(body);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "nutriverse2024@gmail.com",
                pass: "ulye hxud wxaj dcsl"
            }
        });

        await transporter.sendMail({
            from: email,
            to: "nutriverse2024@gmail.com",
            subject: `${name} Wants to Contact You!`,
            html: `<p>Name: ${name}</p><p>Message: ${message}</p>`
        });

        return NextResponse.json({
            message: "Email sent successfully!",
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong!"
        }, { status: 500 });
    }
}