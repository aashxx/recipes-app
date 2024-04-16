import React, { FormEvent, useState } from 'react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const signUpFormSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    password: z.string().min(1, "Password is required").min(8, "Password must have 8 minimum characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required")
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords do not match"
});

const SignUpForm: React.FC = () => {

    const router = useRouter();

    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [viewConfirmPassword, setViewConfirmPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const handleSignup = async (values: z.infer<typeof signUpFormSchema>) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                password: values.password
            })
        });

        if(response.ok) {
            router.push('/');
        } else {
            console.error("Registration failed!");
        }
    }

    return (
        <Form {...form}>
            <form className='space-y-4 w-full md:w-[70%] text-black' onSubmit={form.handleSubmit(handleSignup)}>
                <FormDescription className='text-white text-center'>
                    Create an account now!
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
                                <Input placeholder="Email" type='email' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className='relative'>
                            <FormControl className='relative'>
                                <Input placeholder="Password" type={viewPassword ? 'text' : 'password'} {...field} />
                            </FormControl>
                            <Button type='button' onClick={(e) => {e.stopPropagation(); setViewPassword(!viewPassword)}} className='bg-transparent text-black text-xl absolute -top-2 right-0 hover:bg-transparent'>
                                {
                                    viewPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )
                                }
                            </Button>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem className='relative'>
                            <FormControl>
                                <Input placeholder="Confirm Password" type={viewConfirmPassword ? 'text' : 'password'} {...field} />
                            </FormControl>
                            <Button type='button' onClick={(e) => {e.stopPropagation(); setViewConfirmPassword(!viewConfirmPassword)}} className='bg-transparent text-black text-xl absolute -top-2 right-0 hover:bg-transparent'>
                                {
                                    viewConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )
                                }
                            </Button>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type='submit' className="relative inline-flex w-full items-center px-24 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-md hover:text-primaryColor group hover:bg-white">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative text-md font-bold">Create Free Account</span>
                </button>
            </form>
        </Form>
    )
}

export default SignUpForm;