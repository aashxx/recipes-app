import Link from 'next/link';
import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";


export const Footer: React.FC = () => {

    return (
        <footer className='flex flex-col text-allotrix-text mt-14 px-4 py-6 bg-primaryColor text-white'>
            <div className='flex flex-col justify-between gap-6 md:flex-row md:mx-32 md:py-10'>
                <article className='flex flex-col items-center gap-4'>
                    <h3 className='text-allotrix-std font-allotrix-font text-sm'>
                        Socials
                    </h3>
                    <div className='flex items-center gap-3 text-2xl'>
                        <a href="/" target='blank'>
                            <FaXTwitter />
                        </a>
                        <a href="/" target='blank'>
                            <FaInstagram />
                        </a>
                        <a href="/" target='blank'>
                            <FaLinkedin />
                        </a>
                    </div>
                </article>
                <aside className='flex flex-wrap gap-6 font-allotrix-font px-10 justify-center my-10 md:my-[unset] md:gap-14'>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm font-semibold'>
                            <Link href="/">
                                Services
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/privacypolicy">
                                    Our Recipes
                                </a>
                            </li>
                            <li>
                                <a href="/termsofservice">
                                    Personal Diet Plans
                                </a>
                            </li>
                            <li>
                                <a href="/refundpolicy">
                                    Medical Assistance
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm font-semibold'>
                            <Link href="/getAllotrix">
                                Subscribe
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/getAllotrix/download">
                                    Free Plan
                                </a>
                            </li>
                            <li>
                                <a href="/#whyallotrix">
                                    Pro Plan
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm font-semibold'>
                            About
                        </h3>
                        <ul className='text-sm'>
                            <li>Why Nutriverse?</li>
                            <li>Testimonials</li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm font-semibold'>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a className='flex gap-1 items-center' href="mailto:210071601109@crescent.education?subject=Meeting%20Request">
                                    <IoMdMail />
                                    nutriverse@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+918220121649">
                                    <IoMdCall />
                                    +91 8220121649
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="+919597128066">
                                    <IoMdCall />
                                    +91 9597128066
                                </a>
                            </li>
                        </ul>
                    </article>
                </aside>
            </div>
            <aside className='flex justify-between items-center border-t-2 border-solid border-t-allotrix-std pt-6 md:mx-32'>
                <div className='w-[150px]'>
                    <Link href={'/'}>
                        <img src={'/logov2.png'} alt="allotrix" className='max-h-full max-w-full' />
                    </Link>
                </div>
                <div className='bg-transparent text-[13px] font-light py-1 px-4 rounded-2xl font-allotrix-font-secondary text-[white] transition-all duration-300 ease-out border-[1px] border-solid hover:border-allotrix-std'>
                    <Link href='/signup'>
                        Sign up
                    </Link>
                </div>
            </aside>
        </footer>
    )
}