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
            <Link href={'/'} className={'text-xl font-bold bg-primaryColor text-[#ffffff] px-8 py-[6px] rounded-md'}>
                Login
            </Link>
            <Button className="md:hidden bg-primaryColor text-[#ffffff] ml-2" onClick={() => setOpenNav(true)}>
                <div>
                    <HiMiniBars3BottomRight />
                </div>
            </Button>
        </div>
    </header>
  )
}
