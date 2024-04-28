"use client";

import Layout from '@/app/components/Layout/Layout';
import { DIETS_PLANS } from '@/app/utils/constants';
import { useToast } from '@/components/ui/use-toast';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import React from 'react';

const DietDetails = () => {

    const { data: session } = useSession();
    const params = useParams();

    const { toast } = useToast();

    const diet = DIETS_PLANS.find(diet => diet.id === params.dietId);

    const upgradePlan = () => {
        toast({
            title: "Upgrade",
            description: "Purchase Pro plan to unlock this!"
        });
    }

    return (
        <Layout>
            <main className='mt-36 px-6 md:w-[900px] text-secondaryColor mx-auto'>
                <h2 className='font-semibold text-5xl text-center'>
                    {diet?.name}
                </h2>
                <hr className='w-[100px] mx-auto border-secondaryColor border-3 mt-7' />
                <section className='mt-14 flex flex-wrap gap-20 items-center justify-center'>
                    <div className='w-[320px] h-[450px]'>
                        <img className='rounded-md h-full w-full object-cover' src={diet?.image} alt="AV" />
                    </div>
                    <aside className='flex flex-col items-start gap-10 text-secondaryColor mx-10 md:mx-[unset]'>
                        <h2 className='text-4xl font-semibold'>
                            Health Benefits
                        </h2>
                        <ul className='list-disc ml-10 font-semibold text-2xl'>
                            {
                                diet?.health.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))
                            }
                        </ul>
                        {
                            session?.user.subscription === "free" ? (
                                    <button onClick={upgradePlan} className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-primaryColor border border-primaryColor rounded-md hover:text-white group hover:bg-primaryColor">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-primaryColor opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative text-md font-bold">Get Plan</span>
                                    </button> 
                                ) : (
                                    <a href={diet?.download} download={`${diet?.id}.pdf`} className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-primaryColor border border-primaryColor rounded-md hover:text-white group hover:bg-primaryColor">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-primaryColor opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative text-md font-bold">Get Plan</span>
                                    </a> 
                                )
                        }
                    </aside>
                </section>
                <section className='mt-14 flex flex-col gap-2'>
                    <h2 className='font-semibold text-2xl text-secondaryColor'>
                        Plan Summary
                    </h2>
                    <p className='text-justify'>
                        {diet?.summary}
                    </p>
                    <p className='text-justify'>
                        You will be provided with a diet chart that will guide your daily intake of food during breakfast, lunch, dinner etc. You have to follow the chart every day to maintain the specified diet.
                    </p>
                </section>
            </main>
        </Layout>
    )
}

export default DietDetails;
