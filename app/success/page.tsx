"use client";

import { useToast } from '@/components/ui/use-toast';
import { getSession, signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, Suspense } from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
    const { toast } = useToast();
    const subscriptionParams = useSearchParams();
    const subscription = subscriptionParams.get('subscription');

    useEffect(() => {
        paymentSuccess();
    }, []);

    const paymentSuccess = async () => {
        const session = await getSession();
        if(session) {
            const emailId = session.user.email;
            
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailId, subscription })
            });

            if(response.ok) {
                toast({
                    title: "Success",
                    description: `You're now a ${subscription} user`,
                });
                await signOut({ redirect: true, callbackUrl: `${window.location.origin}/login` });
            } else {
                toast({
                    title: "Error",
                    description: "Oops! Something went wrong.",
                    variant: "destructive"
                });
                console.error("Registration failed!");
            }
        }
    };

    return (
        <Suspense>
            <main className='h-[100vh] px-4 w-full flex flex-col gap-10 justify-center items-center'>
                <div className='w-[230px] md:w-[400px]'>
                    <img src="/logov1.png" alt="" />
                </div>
                <h2 className='text-9xl text-primaryColor'>
                    <FaCheckCircle />
                </h2>
                <h1 className='font-bold text-5xl text-center md:text-6xl text-secondaryColor'>
                    Thanks for your Payment
                </h1>
                <p className='text-center text-[gray]'>
                    Your account has been upgraded to {subscription} plan and you are requested to login once again
                </p>
            </main>
        </Suspense>
    );
};

export default Success;
