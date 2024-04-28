"use client";

import React from 'react'
import Layout from '../components/Layout/Layout';
import { ANIMATIONS, RATINGS, TEAM } from '../utils/constants';
import Rating from '../components/Rating';
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Layout>
      <motion.section {...ANIMATIONS.up} className='mt-36 px-6 md:w-[700px] text-secondaryColor mx-auto'>
        <h2 className='font-semibold text-5xl'>
          About Us
        </h2>
        <p className='text-md mt-6 text-justify'>
          At Nutriverse, we're dedicated to revolutionizing nutrition and wellness for every individual. Our mission is to provide customized dietary solutions tailored to diverse lifestyles and health needs. Whether you're a busy gym-goer seeking balance, or managing health conditions like diabetes and heart issues, we're here to support you. With a focus on convenience and quality, we offer traditional village foods and inspiring recipes delivered to your doorstep. Our commitment lies in empowering you to achieve your health goals with ease, ensuring a happier, healthier tomorrow.
        </p>
        <div className='relative'>
          <img className='mt-6 rounded-md' src="/hero-walls2.png" alt="AV" />
          <img className='w-[230px] md:w-[400px] absolute top-[85px] left-[82px] md:top-[162px] md:left-[150px]' src="/logov2.png" alt="Nutriverse" />
        </div>
      </motion.section>
      <motion.section {...ANIMATIONS.up} className='mt-14'>
        <div className='text-center text-secondaryColor'>
          <h5 className='font-bold'>
            Testimonials
          </h5>
          <h2 className='font-bold text-4xl mt-4'>
            What Our Customers Say?
          </h2>
          <hr className='w-[100px] mx-auto border-secondaryColor border-3 mt-7' />
        </div>
        <div className='mt-14 flex flex-wrap gap-14 items-center justify-center'>
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
        </div>
      </motion.section>
      <motion.section {...ANIMATIONS.up} className='mt-14 bg-[#655441] py-20 px-8 md:px-[unset] flex flex-col items-center justify-center'>
        <div className='text-center text-white'>
            <h5 className='font-bold'>
              Office
            </h5>
            <h2 className='font-bold text-4xl mt-4'>
              Meet The Team
            </h2>
            <hr className='w-[100px] mx-auto border-white border-3 my-7' />
          </div>
          <aside className='flex flex-wrap gap-10 justify-center mt-10 text-center'>
            {
              TEAM.map(guy => (
                <Card className='w-[300px] text-white flex border-2 flex-col justify-between gap-4 transition-all ease-out cursor-pointer relative'>
                  <div className='w-full h-96 overflow-hidden rounded-md'>
                    <img src={guy.photo} className='w-full h-full object-cover rounded-md transition-all duration-500 ease-in-out hover:scale-150' alt={'bn'} />
                  </div>
                  <div className='absolute -bottom-6 left-6 w-[250px] flex flex-col gap-0 rounded-full bg-white'>
                    <p className='font-semibold text-[#655441] px-8 text-xl pt-[2px]'>{guy.name}</p>
                    <p className='text-[#655441] text-sm pb-[2px]'>{guy.desgn}</p>
                  </div>
                </Card>
              ))
            }
          </aside>
      </motion.section>
      <section className='mt-14 text-center'>
        <h2 className='text-5xl font-semibold text-secondaryColor my-10'>
          Let's Grow Something Together.
        </h2>
        <Link href="/contact" className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-primaryColor border-2 border-primaryColor rounded-md hover:text-white group hover:bg-primaryColor">
          <span className="absolute left-0 block w-full h-0 transition-all bg-primaryColor opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative text-md font-bold">Get In Touch</span>
        </Link>
      </section>
    </Layout>
  )
}

export default About;