"use client";

import React from 'react';
import Layout from '../components/Layout/Layout';
import { ANIMATIONS } from '../utils/constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Layout>
        <motion.section {...ANIMATIONS.up} className='mt-14 px-6 md:w-[750px] text-secondaryColor mx-auto'>
            <h2 className='font-semibold text-5xl'>
                Contact Us
            </h2>
            <p className='text-xl mt-6'>
            Let's talk 👋 Don't hesitate to reach out with the contact information below, or send a message using the form.
            </p>
      </motion.section>
    </Layout>
  )
}

export default Contact;