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
import { signIn } from 'next-auth/react';
import { useToast } from '../ui/use-toast';

const LoginFormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    password: z.string().min(1, "Password is required")
});

const LoginForm: React.FC = () => {

    const router = useRouter();
    const { toast } = useToast();

    const [viewPassword, setViewPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleLogin = async (values: z.infer<typeof LoginFormSchema>) => {
        const loginData = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false
        });

        if(loginData?.error) {
            toast({
                title: "Error",
                description: "Oops! Something went wrong.",
                variant: "destructive"
            });
        } else {
            router.push('/');
        }
    }

    return (
        <Form {...form}>
            <form className='space-y-4 w-full md:w-[70%] text-black' onSubmit={form.handleSubmit(handleLogin)}>
                <FormDescription className='text-white text-center'>
                    Login to your account!
                </FormDescription>
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
                <button type='submit' className="relative inline-flex w-full items-center px-40 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-md hover:text-primaryColor group hover:bg-white">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative text-md font-bold">Login</span>
                </button>
            </form>
        </Form>
    )
}

export default LoginForm;