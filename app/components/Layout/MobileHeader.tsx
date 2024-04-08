"use client";

import { NavbarProps } from "@/app/utils/types";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export const MobileHeader: React.FC<NavbarProps> = ({ openNav, setOpenNav }) => {

  return (
    <nav className={`flex flex-col bg-[#ffffff] justify-start gap-24 shadow-2xl bg-[rgba(0, 0, 0, .5)] items-center h-[100vh] w-[70vw] fixed ${openNav ? 'right-0' : '-right-[150%]'} top-0 md:hidden p-4 transition-all duration-500 ease-out`}>
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
                  <Link href={'/'} onClick={() => setOpenNav(false)}>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                          About
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <Link href={'/'} onClick={() => setOpenNav(false)}>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl font-semibold hover:text-primaryColor`}>
                          Recipes
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <Link href={'/'} onClick={() => setOpenNav(false)}>
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