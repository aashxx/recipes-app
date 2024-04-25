"use client";

import { NavbarProps } from "@/app/utils/types";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export const MobileHeader: React.FC<NavbarProps> = ({ openNav, setOpenNav }) => {

  return (
    <nav className={`flex flex-col bg-[#ffffff] z-50 justify-start gap-24 shadow-2xl bg-[rgba(0, 0, 0, .5)] items-center h-[100vh] w-[70vw] fixed ${openNav ? 'right-0' : '-right-[150%]'} top-0 md:hidden p-4 transition-all duration-500 ease-out`}>
      <Button className="md:hidden bg-primaryColor text-[#ffffff] self-end" onClick={() => setOpenNav(false)}>
          <div>
            <IoClose />
          </div>
      </Button>
      <Link href={'/'}>
        <img src="/logov1.png" className="w-[220px]" alt="Nutriverse" />
      </Link>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-5 text-secondaryColor">
              <NavigationMenuItem>
                  <Link href={'/'} onClick={() => setOpenNav(false)}>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                          Home
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <Link href={'/about'} onClick={() => setOpenNav(false)}>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                          About
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 w-[200px] flex flex-col justify-around font-bold text-secondaryColor">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg font-semibold hover:text-primaryColor`}>
                      <Link href="/diets">
                        Diet Plans
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg font-semibold hover:text-primaryColor`}>
                      <Link href="/recipes">
                        Recipes
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg font-semibold hover:text-primaryColor`}>
                      <Link href="/assistance">
                        Medical Assistance
                      </Link>
                    </NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <Link href={'/contact'} onClick={() => setOpenNav(false)}>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                          Contact
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}