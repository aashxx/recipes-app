"use client";

import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout/Layout';
import RecipeCard from '../components/RecipeCard';
import { Recipe, RecipeProps } from '../utils/types';
import { useToast } from '@/components/ui/use-toast';
import Loader from '../components/Loader';
import { Input } from '@/components/ui/input';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { FILTERS } from '../utils/constants';
import FilterItem from '../components/FilterItem';
import { v4 as uuidv4 } from 'uuid';

const Recipes: React.FC = () => {

    const [recipes, setRecipes] = useState<RecipeProps[]>([]);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const [searchQuery, setSearchQuery] = useState<string>("salad");
    const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const filterQuery = appliedFilters.length > 0 ? `&${appliedFilters.join('&')}` : '';
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=c40f1265&app_key=%209866619b025e90846a17fa21d00a0911${filterQuery}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok) {
                toast({
                    title: "Error!",
                    description: "Oops! Something went wrong."
                });
                throw new Error("Error fetching data");
            }

            const data = await response.json();
            const recipesWithId = data.hits.map((recipe: Recipe) => ({
                ...recipe, 
                id: uuidv4()
            }))
            console.log(recipesWithId);
            setLoading(false);
            setRecipes(recipesWithId);

        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    const applyFilters = () => {
        fetchData();
        closeRef.current?.click();
    }

    return (
        <Layout>
            <section className='mt-36 px-6 md:w-[900px] text-secondaryColor mx-auto'>
                <h2 className='font-semibold text-5xl'>
                    Our Recipes
                </h2>
                <div className='mt-10 flex gap-2'>
                    <Input type='text' placeholder='Search Here...' onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { e.key === "Enter" && fetchData() }} />
                    <Button onClick={fetchData} className='n bg-primaryColor hover:bg-primaryColor'>
                        <FaSearch />
                    </Button>
                    <Drawer>
                        <DrawerTrigger>
                            <Button className='bg-primaryColor hover:bg-primaryColor'>
                                <FaFilter />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className='text-primaryColor'>
                            <DrawerHeader className='mb-4'>
                                <DrawerTitle className='text-secondaryColor text-2xl'>Filters</DrawerTitle>
                                <DrawerDescription>Add filters to your search results to obtain accurate recipes</DrawerDescription>
                            </DrawerHeader>
                            <div className='px-4 flex flex-col md:flex-row items-start gap-4 md:gap-10 justify-center'>
                                {
                                    FILTERS.map((filter) => (
                                        <FilterItem key={filter.name} name={filter.name} types={filter.types} appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} />
                                    ))
                                }
                            </div>
                            <DrawerFooter>
                                <Button onClick={applyFilters} className='bg-primaryColor hover:bg-primaryColor'>
                                    Filter
                                </Button>
                                <DrawerClose>
                                    <Button ref={closeRef} variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </section>  
            {
                loading ? (
                    <Loader />
                ) : (
                    <section className='mt-14 flex flex-col gap-4 px-6 md:w-[900px] text-secondaryColor mx-auto'>
                        {
                            recipes.length > 0 ?
                                recipes.map((recipe) => (
                                    <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
                                )) : (
                                    <h2 className='h-[50vh] flex items-center justify-center w-full font-semibold text-2xl'>
                                        No recipes available
                                    </h2>
                                )
                        }
                    </section>
                )
            } 
        </Layout>
    )
}

export default Recipes;