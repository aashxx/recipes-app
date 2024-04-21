"use client";

import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout';
import RecipeCard from '../components/RecipeCard';
import { RecipeProps } from '../utils/types';
import { useToast } from '@/components/ui/use-toast';

const Recipes: React.FC = () => {

    const [recipes, setRecipes] = useState<RecipeProps[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=c40f1265&app_key=%209866619b025e90846a17fa21d00a0911&ingr=4-5&diet=balanced&health=alcohol-free&cuisineType=American&mealType=Dinner', {
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
                setRecipes(data.hits);

            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }

        fetchData();

    }, []);

    return (
        <Layout>
            <section className='mt-14 px-6 md:w-[900px] text-secondaryColor mx-auto'>
                <h2 className='font-semibold text-5xl'>
                    Our Recipes
                </h2>
                <p className='text-xl mt-6'>
                    We produce locally farmed organic vegetables that are affordable, seasonal, and as fresh as possible.
                </p>
            </section>    
            <section className='mt-14 flex flex-col gap-4 px-6 md:w-[900px] text-secondaryColor mx-auto'>
                {
                    recipes.map((recipe) => (
                        <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
                    ))
                }
            </section>
        </Layout>
    )
}

export default Recipes;