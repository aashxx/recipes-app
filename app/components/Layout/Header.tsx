"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { NavbarProps } from "@/app/utils/types";
  
export const Header: React.FC<NavbarProps> = ({ setOpenNav }) => {
  return (
    <header className='md:p-8 p-4 flex justify-between items-center'>
        <Link href={'/'}>
            <img src="/logov1.png" className="w-[200px]" alt="Nutriverse" />
        </Link>
        <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="text-secondaryColor">
                <NavigationMenuItem>
                    <Link href={'/'} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/'} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/'} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                            Recipes
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/'} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <div>
            <Link href="/" className="relative inline-flex items-center justify-center px-8 py-1 overflow-hidden font-medium text-primaryColor transition duration-300 ease-out border-2 border-primaryColor rounded-md shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryColor group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center text-xl font-bold w-full h-full text-primaryColor transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                <span className="relative invisible text-xl font-bold">Login</span>
            </Link>
            {/* <Link href="/" className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-primaryColor border-2 border-primaryColor rounded-md hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primaryColor opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-xl font-bold">Login</span>
            </Link> */}
            <Button className="md:hidden bg-primaryColor text-[#ffffff] ml-2" onClick={() => setOpenNav(true)}>
                <div>
                    <HiMiniBars3BottomRight />
                </div>
            </Button>
        </div>
    </header>
  )
}