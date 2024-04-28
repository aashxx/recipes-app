"use client";

import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout';
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
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { MdOutlineLockClock } from 'react-icons/md';

const medicalFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be of atleast 2 characters.",
    }),
    email: z.string().describe('Email').email({ message: "Invalid Email" }),
    phoneNo: z.string().min(1, {
        message: "Phone number is required"
    }),
    age: z.string().min(1, {
        message: "Age must be greater than 35"
    }),
    gender: z.string().min(1, {
        message: "Gender is required"
    }),
    height: z.string().min(2, 'Height is required'),
    weight: z.string().min(2, 'Weight is required'),
    bloodGroup: z.string().regex(/^(A|B|AB|O)[\+-]$/, 'Invalid blood group format'),
    allergies: z.string().optional(),
    medicalHistory: z.string().optional(),
});

const Assistance = () => {

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(!session) {
            router.push('/login');
        }
    }, []);

    const { toast } = useToast();

    const form = useForm<z.infer<typeof medicalFormSchema>>({
        resolver: zodResolver(medicalFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phoneNo: "",
            age: undefined,
            height: undefined,
            weight: undefined,
            bloodGroup: "",
            allergies: "",
            medicalHistory: ""
        }
    })

    const submitRequest = async (values: z.infer<typeof medicalFormSchema>) => {
        const response = await fetch('/api/assistance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                phoneNo: values.phoneNo,
                age: values.age,
                gender: values.gender,
                bloodGroup: values.bloodGroup,
                height: values.height,
                weight: values.weight,
                allergies: values.allergies,
                medicalHistory: values.medicalHistory
            })
          });
      
          if(response.ok) {
            toast({
              title: "Success",
              description: "Your appointment has been booked successfully!",
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
            {
                session?.user.subscription === "free" ? (
                    <section className='h-[100vh] px-4 w-full flex flex-col gap-10 justify-center items-center'>
                        <div className='w-[230px] md:w-[400px]'>
                            <img src="/logov1.png" alt="" />
                        </div>
                        <h2 className='text-9xl text-primaryColor'>
                            <MdOutlineLockClock />
                        </h2>
                        <h3 className='font-bold text-5xl text-center md:text-6xl text-secondaryColor'>
                            Upgrade your plan
                        </h3>
                        <p className='text-center text-[gray]'>
                            To get medical assistance, upgrade to Pro or Premium plan
                        </p>
                    </section>
                ) : (
                    <main className='mt-36 px-6 md:w-[750px] text-secondaryColor mx-auto'>
                        <h2 className='font-semibold text-5xl'>
                            Medical Assistance
                        </h2>
                        <p className='text-xl mt-6'>
                            Let's talk 👋 Don't hesitate to reach out with the contact information below, or send a message using the form.
                        </p>
                        <section className='mt-10'>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(submitRequest)} className="space-y-4">
                                    <FormDescription>
                                        Fill in your medical data.
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
                                        name="phoneNo"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Phone Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Age" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Gender" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="height"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Height" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="weight"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Weight" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="bloodGroup"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Blood Group" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="allergies"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Textarea placeholder="Allergies" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="medicalHistory"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Textarea placeholder="Medical History" {...field} />
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
                        </section>
                    </main>
                )
            }
        </Layout>
    )
}

export default Assistance;
