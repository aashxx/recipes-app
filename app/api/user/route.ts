import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { z } from "zod";

const userSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    password: z.string().min(1, "Password is required").min(8, "Password must have minimum characters")
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = userSchema.parse(body);

        const checkExistingUser = await db.user.findUnique({
            where: { email: email }
        });
        if(checkExistingUser) {
            return NextResponse.json({
                user: null,
                message: "User already exists"
            }, { status: 409 })
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        const { password: newUserPassword, ...userData } = newUser;

        return NextResponse.json({
            user: userData,
            message: "User created successfully"
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong!",
            error: error
        }, { status: 500 });
    }
}