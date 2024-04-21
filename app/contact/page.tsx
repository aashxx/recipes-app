"use client";

import React from 'react';
import Layout from '../components/Layout/Layout';
import { ANIMATIONS } from '../utils/constants';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be of atleast 2 characters.",
  }),
  email: z.string().describe('Email').email({ message: "Invalid Email" }),
  message: z.string().min(1, { 
    message: "Message is required" 
  }),
})

const Contact: React.FC = () => {

  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const submitContactForm = async (values: z.infer<typeof contactFormSchema>) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message
      })
    });

    if(response.ok) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
      form.reset();
      
    } else {
      toast({
        title: "Error",
        description: "Oops! Something went wrong.",
        variant: "destructive"
      });
    }
  }

  return (
    <Layout>
        <motion.section {...ANIMATIONS.up} className='mt-14 px-6 md:w-[750px] text-secondaryColor mx-auto'>
            <h2 className='font-semibold text-5xl'>
              Contact Us
            </h2>
            <p className='text-xl mt-6'>
              Let's talk 👋 Don't hesitate to reach out with the contact information below, or send a message using the form.
            </p>
            <section className='flex flex-col md:flex-row items-center mt-14 gap-12 md:gap-[unset]'>
              <div className='md:w-[50%]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310658522!2d79.87933474107955!3d13.047985943115949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712739209236!5m2!1sen!2sin" width="320" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            <aside className='md:w-[50%] w-[90%]'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(submitContactForm)} className="space-y-4">
                  <FormDescription>
                    Reach Out to Us.
                  </FormDescription>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea placeholder="Message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button type='submit' className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-primaryColor border border-primaryColor rounded-md hover:text-white group hover:bg-primaryColor">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-primaryColor opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative text-md font-bold">Submit</span>
                  </button>
                </form>
              </Form>
            </aside>
            </section>
      </motion.section>
    </Layout>
  )
}

export default Contact;