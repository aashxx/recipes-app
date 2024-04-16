"use client"

import React from 'react';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import LoginForm from '@/components/forms/LoginForm';

const Login: React.FC = () => {
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