import React from 'react';
import Layout from './components/Layout/Layout';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Home: React.FC = () => {
  return (
    <Layout>
      <section className='w-full md:h-[100vh] flex flex-col md:flex-row'>
        <aside className='md:w-[50%] bg-primaryColor h-full gap-10 flex flex-col justify-center items-start p-8 md:p-14 text-white'>
          <h1 className='font-bold text-6xl'>
            Locally Farmed Organic Vegetable Delivery
          </h1>
          <h2 className='text-xl'>
            20 years of growing organic vegetables and delivering vegetable boxes from our 12 acre farm in Sussex.
          </h2>
          <Link href={'/'} className='px-8 py-[7px] border-solid font-bold border-white border-2 rounded-md'>
            Get In Touch
          </Link>
        </aside>
        <img src="/wallpaper.jpeg" className='md:w-[50%]' alt='Logo' />
      </section>
      <section className='mt-14'>
        <div className='text-center text-[#3C2323]'>
          <h5 className='font-bold'>
            Services
          </h5>
          <h2 className='font-bold text-4xl mt-4'>
            What we do?
          </h2>
          <hr className='w-[100px] mx-auto border-[#3C2323] border-3 mt-7' />
        </div>
      </section>
    </Layout>
  )
}

export default Home;
