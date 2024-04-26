import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const userSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    subscription: z.string().min(1, "Subscription is required")
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, subscription } = userSchema.parse(body);

        const updateUser = await db.user.update({
            where: { email: email },
            data: {
                subscription: subscription
            }
        });

        return NextResponse.json({
            user: updateUser.email,
            message: `Subscription updated successfully to ${subscription}`
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong!"
        }, { status: 500 });
    }
}