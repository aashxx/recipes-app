"use client";

import { useToast } from '@/components/ui/use-toast';
import { getSession, signOut } from 'next-auth/react';
import React, { useEffect } from 'react';

const Success = () => {

    const { toast } = useToast();

    useEffect(() => {
        paymentSuccess();
    }, []);

    const paymentSuccess = async () => {

        const session = await getSession();
        if(session) {
            const emailId = session.user.email;
            console.log(emailId);
            
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailId, subscription: "Pro" })
            })
    
            if(response.ok) {
                toast({
                    title: "Success",
                    description: "You're now a Pro user",
                });
                await signOut({ redirect: true, callbackUrl: `${window.location.origin}/login` })
            } else {
                toast({
                    title: "Error",
                    description: "Oops! Something went wrong.",
                    variant: "destructive"
                });
                console.error("Registration failed!");
            }
        }
    }

    return (
        <main className='h-[100vh] w-full flex flex-col justify-center items-center'>
            <h1 className='font-bold text-7xl text-secondaryColor'>
                Thanks for your Payment
            </h1>
        </main>
    )
}

export default Success;
