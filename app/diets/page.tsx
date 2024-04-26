"use client";

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { FaSearch } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DietCard from '../components/DietCard';
import { DIETS } from '../utils/constants';
import { Diets } from '../utils/types';
import Loader from '../components/Loader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DietsPage = () => {

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(!session) {
            router.push('/login');
        }
    }, []);

    const [diets, setDiets] = useState<Diets[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        setDiets(DIETS);
        setLoading(false)
    }, []);

    const filteredDiets = diets.filter(diet =>
        diet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Layout>
            <section className='mt-36 px-6 md:w-[900px] text-secondaryColor mx-auto'>
                <h2 className='font-semibold text-5xl'>
                    Try Our Diet Plans
                </h2>
                <div className='mt-10 flex gap-2'>
                    <Input
                        type='text'
                        placeholder='Search Here...'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <Button className='n bg-primaryColor hover:bg-primaryColor'>
                        <FaSearch />
                    </Button>
                </div>
            </section>
            {
                loading ? (
                    <Loader />
                ) : (
                    <section className='mt-14 flex flex-col gap-4 px-6 md:w-[900px] text-secondaryColor mx-auto'>
                        {
                            filteredDiets.length > 0 ?
                                filteredDiets.map(diet => (
                                    <DietCard key={diet.id} diet={diet} />
                                ))  
                            : (
                                <h2 className='h-[50vh] flex items-center justify-center w-full font-semibold text-2xl'>
                                    No diets available
                                </h2>
                            )
                        }
                    </section>
                )
            } 
        </Layout>
    );
};

export default DietsPage;
