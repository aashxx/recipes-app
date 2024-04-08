import React from 'react';
import Layout from './components/Layout/Layout';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RATINGS, SERVICES } from './utils/constants';
import Rating from './components/Rating';


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
        <div className='text-center text-secondaryColor'>
          <h5 className='font-bold'>
            Services
          </h5>
          <h2 className='font-bold text-4xl mt-4'>
            What we do?
          </h2>
          <hr className='w-[100px] mx-auto border-secondaryColor border-3 mt-7' />
        </div>
        <aside className='flex flex-wrap gap-10 justify-center mt-10 text-center'>
          {
            SERVICES.map((card) => (
              <Card key={card.title} className='border-2 border-secondaryColor w-[300px] flex flex-col justify-between gap-4 transition-all ease-out hover:shadow-lg hover:shadow-[gray] cursor-pointer'>
                <CardHeader>
                  <img src={card.image} className='max-w-[100%] rounded-md' alt={card.title} />
                </CardHeader>
                <CardHeader>
                  <CardTitle className='text-secondaryColor'>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={card.link} className={'text-xl font-bold bg-primaryColor text-[#ffffff] px-8 py-[6px] rounded-md w-full'}>
                    Visit
                  </Link>
                </CardFooter>
              </Card>  
            ))
          }
        </aside>
      </section>
      <section className='mt-14'>
        <div className="bg-[url('/hero-walls.jpg')] bg-center bg-no-repeat bg-cover py-28 px-8 md:px-[unset]">
          <aside className='text-center text-white'>
            <h5 className='font-bold text-xl'>
              Meet us better
            </h5>
            <h2 className='font-bold md:text-5xl text-4xl mt-4'>
              Our Organic Farm in Numbers
            </h2>
            <hr className='w-[100px] mx-auto border-white border-3 mt-7' />
          </aside>
          <div className='mt-10 flex flex-col md:flex-row text-white gap-14 md:gap-32 w-full justify-center'>
            <article className='text-center'>
              <strong className='text-5xl'>
                370
              </strong>
              <p>
                households per month
              </p>
            </article>
            <article className='text-center'>
              <strong className='text-5xl'>
                23
              </strong>
              <p>
                experts working
              </p>
            </article>
            <article className='text-center'>
              <strong className='text-5xl'>
                5
              </strong>
              <p>
                awards won
              </p>
            </article>
            <article className='text-center'>
              <strong className='text-5xl'>
                100%
              </strong>
              <p>
                satisfied customers
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className='mt-14 flex flex-wrap gap-10 items-center justify-center'>
        <div>
          <img className='rounded-md' src="https://img.freepik.com/free-photo/high-angle-delicious-salmon-bowl-indoors_23-2150533928.jpg?w=360" alt="AV" />
        </div>
        <aside className='flex flex-col gap-10 text-secondaryColor mx-10 md:mx-[unset]'>
          <h2 className='text-5xl font-semibold'>
            Why You'll Love Us
          </h2>
          <p className='md:w-[400px] text-xl'>
            There is never been a better time to eat organic. Organic means working with nature. We're coming into a fantastic time for European food.
          </p>
          <ul className='list-disc ml-10 font-semibold text-2xl'>
            <li>Delicious</li>
            <li>Ethical</li>
            <li>Sustainable</li>
            <li>Seasonal</li>
            <li>Free Delivery</li>
          </ul>
        </aside>
      </section>
      <section className='mt-14 flex flex-wrap gap-14 items-center justify-center'>
        {
          RATINGS.map((feedback, index) => (
            <article key={index} className='flex flex-col gap-2 items-center'>
              <div>
                <Rating rating={feedback.rate} />
              </div>
              <h3 className='text-2xl font-semibold'>
                “{feedback.review}”
              </h3>
              <p className='w-[270px] text-center text-md'>
                {feedback.description}
              </p>
              <strong className='text-md'>
                {feedback.customer}
              </strong>
            </article>
          ))
        }
      </section>
    </Layout>
  )
}

export default Home;
