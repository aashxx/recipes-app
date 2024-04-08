"use client";

import React from 'react';
import Layout from './components/Layout/Layout';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RATINGS, SERVICES, ANIMATIONS } from './utils/constants';
import Rating from './components/Rating';
import { motion } from 'framer-motion';


const Home: React.FC = () => {

  return (
    <Layout>
      <section className='w-full md:h-[100vh] flex flex-col md:flex-row'>
        <motion.aside {...ANIMATIONS.left} className='md:w-[50%] bg-primaryColor h-full gap-10 flex flex-col justify-center items-start p-8 md:p-14 text-white'>
          <h1 className='font-bold text-6xl'>
            Locally Farmed Organic Vegetable Delivery
          </h1>
          <h2 className='text-xl'>
            20 years of growing organic vegetables and delivering vegetable boxes from our 12 acre farm in Sussex.
          </h2>
          <Link href="/" className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-md hover:text-primaryColor group hover:bg-white">
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative text-md font-bold">Get In Touch</span>
          </Link>
        </motion.aside>
        <motion.img {...ANIMATIONS.right} src="/wallpaper.jpeg" className='md:w-[50%]' alt='Logo' />
      </section>
      <motion.section {...ANIMATIONS.up} className='mt-14'>
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
                  <Link href={card.link} className="relative w-full inline-flex items-center justify-center px-8 py-1 overflow-hidden font-medium text-primaryColor transition duration-300 ease-out border-2 border-primaryColor rounded-md shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryColor group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center text-xl font-bold w-full h-full text-primaryColor transition-all duration-300 transform group-hover:translate-x-full ease">Try Free</span>
                    <span className="relative invisible text-xl font-bold">Try Free</span>
                  </Link>
                </CardFooter>
              </Card>  
            ))
          }
        </aside>
      </motion.section>
      <motion.section {...ANIMATIONS.up} className="mt-14 bg-[url('/hero-walls.jpg')] bg-center bg-no-repeat bg-cover py-28 px-8 md:px-[unset]">
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
      </motion.section>
      <section className='mt-14 flex flex-wrap gap-10 items-center justify-center'>
        <motion.div {...ANIMATIONS.left}>
          <img className='rounded-md' src="https://img.freepik.com/free-photo/high-angle-delicious-salmon-bowl-indoors_23-2150533928.jpg?w=360" alt="AV" />
        </motion.div>
        <motion.aside {...ANIMATIONS.right} className='flex flex-col gap-10 text-secondaryColor mx-10 md:mx-[unset]'>
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
        </motion.aside>
      </section>
      <motion.section {...ANIMATIONS.up} className='mt-14 flex flex-wrap gap-14 items-center justify-center'>
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
      </motion.section>
      <motion.section {...ANIMATIONS.up} className='mt-14 bg-[#655441] py-24 px-8 md:px-[unset] flex flex-col items-center justify-center'>
        <aside className='text-center text-white'>
          <h5 className='font-bold text-xl'>
            Try with our vegetables
          </h5>
          <h2 className='font-bold md:text-5xl text-4xl mt-4'>
            Our Favourite Recipes
          </h2>
          <hr className='w-[100px] mx-auto border-white border-3 mt-7' />
        </aside>
        <div className='mt-10 flex flex-col md:flex-row text-white gap-14 md:gap-8 w-full justify-center'>
          <article className='flex flex-col gap-8 w-[320px]'>
            <div>
              <h3 className='text-secondaryColor text-4xl font-bold hover:underline hover:cursor-pointer'>
                Garlic Parmesan Pasta
              </h3>
              <p>
                September 25, 2019
              </p>
            </div>
            <p className='text-lg'>
              Ingredients 120ml (1/2 cup) butter 2 tsp. dried basil, crushed 2 tsp. lemon juice 1 1/4 tsp. garlic powder 3/4 tsp. seasoned salt 220g (8 oz.) fettuccine or angel hair pasta (cooked and drained) 360ml (1 1/2 cups) broccoli floweretts
            </p>
            <p className='text-lg underline'>
              Continue Reading...
            </p>
          </article>
          <article className='flex flex-col gap-8 w-[320px]'>
            <div>
              <h3 className='text-secondaryColor text-4xl font-bold hover:underline hover:cursor-pointer'>
                Guacamole
              </h3>
              <p>
                September 25, 2019
              </p>
            </div>
            <p className='text-lg'>
              Ingredients 4 avocados 2 tablespoons of pico de gallo Juice of 1/2 lime 2 chopped Jalapeño OR 2 tablespoons of crushed red pepper OR 1 tablespoon of cayenne pepper 1 teaspoon of salt 4 teaspoons of olive oil 1 1/2
            </p>
            <p className='text-lg underline'>
              Continue Reading...
            </p>
          </article>
          <article className='flex flex-col gap-8 w-[320px]'>
            <div>
              <h3 className='text-secondaryColor text-4xl font-bold hover:underline hover:cursor-pointer'>
                Spiced Pumpkin Soup
              </h3>
              <p>
                September 25, 2019
              </p>
            </div>
            <p className='text-lg'>
              Ingredients 1 Tablespoon butter 1 cup onion, chopped 3 Tablespoons all-purpose flour 1/2 teaspoon curry powder 1/4 teaspoon cumin 1/4 teaspoon ground nutmeg 2 garlic cloves, crushed 1 cup peeled and cubed sweet potato 1/4 teaspoon salt 2 14-oz cans
            </p>
            <p className='text-lg underline'>
              Continue Reading...
            </p>
          </article>
        </div>
        <Link href="/" className="relative inline-flex mt-10 items-center px-12 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-md hover:text-secondaryColor group hover:bg-white">
          <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative text-md font-bold">More Recipes</span>
        </Link>
      </motion.section>
    </Layout>
  )
}

export default Home;
