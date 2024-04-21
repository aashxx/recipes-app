import { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface NavbarProps {
    openNav?: boolean,
    setOpenNav: Dispatch<SetStateAction<boolean>>
}


export interface RatingProps {
    rating: number;
}

export interface ProviderProps {
    children: ReactNode
}

export interface RecipeProps {
    recipe: {
        uri: string;
        label: string;
        image: string;
        source: string;
        url: string;
        healthLabels: string[];
    };
}