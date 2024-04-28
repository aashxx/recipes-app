"use client"

import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import SignUpForm from '@/components/forms/SignUpForm';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session) {
      router.push('/');
    }
  }, [session]);

  return (
    <Layout>
        <section className='w-full md:h-[100vh] flex flex-col-reverse md:flex-row'>
            <img src="/wallpaper.jpeg" className='md:w-[50%]' alt='Logo' />
            <aside className='md:w-[50%] bg-primaryColor h-full gap-10 flex flex-col justify-start items-center p-8 md:p-14 text-white'>
                <h3 className='font-bold text-3xl'>
                    Sign Up
                </h3>
                <SignUpForm />
                <p>
                    Already have an account? <Link href={'/login'} className='hover:underline'>Login</Link>
                </p>
            </aside>
      </section>
    </Layout>
  )
}

export default Signup;