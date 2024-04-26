import { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface NavbarProps {
    openNav?: boolean;
    setOpenNav: Dispatch<SetStateAction<boolean>>;
}


export interface RatingProps {
    rating: number;
}

export interface ProviderProps {
    children: ReactNode;
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

export interface Recipe {
    id: string;
    label: string;
    image: string;
    source: string;
    url: string;
    healthLabels: string[];
}

export interface FilterProps {
    name: string;
    types: string[];
    appliedFilters: string[];
    setAppliedFilters: Dispatch<SetStateAction<string[]>>;
}

export interface DietProps {
    diet: {
        id: string,
        name: string,
        description: string,
        image: string
    }
}

export interface Diets {
    id: string,
    name: string,
    description: string,
    image: string
}


export interface RecipeState {
    recipe: RecipeProps[];
    setRecipe: (recipe: RecipeProps | null) => void;
}

export interface PricingProps {
    plan: {
        name: string;
        description: string;
        price: number;
        billed: string;
        link: string;
        heading: string;
        features: string[];
    }
}