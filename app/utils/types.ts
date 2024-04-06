import { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface NavbarProps {
    openNav?: boolean,
    setOpenNav: Dispatch<SetStateAction<boolean>>
}