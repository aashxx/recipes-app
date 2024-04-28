import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const medicalFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be of atleast 2 characters.",
    }),
    email: z.string().describe('Email').email({ message: "Invalid Email" }),
    phoneNo: z.string().min(1, {
        message: "Phone number is required"
    }),
    age: z.string().min(1, {
        message: "Age must be greater than 35"
    }),
    gender: z.string().min(1, {
        message: "Gender is required"
    }),
    height: z.string().min(2, 'Height is required'),
    weight: z.string().min(2, 'Weight is required'),
    bloodGroup: z.string().regex(/^(A|B|AB|O)[\+-]$/, 'Invalid blood group format'),
    allergies: z.string().optional(),
    medicalHistory: z.string().optional()
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, phoneNo, age, gender, height, weight, bloodGroup, allergies, medicalHistory } = medicalFormSchema.parse(body);

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
            subject: `Medical Assistance Request from ${name}`,
            html: `<p>Name: ${name}</p><p>Phone no: ${phoneNo}</p><p>Gender: ${gender}</p><p>Age: ${age}</p><p>Blood Group: ${bloodGroup}</p><p>Height: ${height}</p><p>Weight: ${weight}</p><p>Allergies: ${allergies}</p><p>Medical History: ${medicalHistory}</p>`
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