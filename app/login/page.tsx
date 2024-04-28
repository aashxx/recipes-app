"use client"

import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import LoginForm from '@/components/forms/LoginForm';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Login: React.FC = () => {

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
                    Login
                </h3>
                <LoginForm />
                <p>
                    Don't have an account? <Link href={'/signup'} className='hover:underline'>Create Account</Link>
                </p>
            </aside>
      </section>
    </Layout>
  )
}

export default Login;