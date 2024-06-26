import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DietProps } from '../utils/types';
import Link from 'next/link';

const DietCard: React.FC<DietProps> = ({ diet }) => {

    return (
        <Card className='flex flex-col md:flex-row items-center transition-all duration-300 hover:shadow-lg hover:shadow-gray'>
        <CardHeader className='h-[260px] md:w-[300px] w-full flex-shrink-0'>
            <img className='h-full w-full object-cover rounded-md' src={diet.image} alt="Diet Image" />
        </CardHeader>
        <CardHeader className='flex flex-col gap-3 items-start self-start px-4 py-8'>
            <CardTitle className='text-secondaryColor'>
                {diet.name}
            </CardTitle>
            <CardDescription className='text-justify'>
                {diet.description}
            </CardDescription>
            <Link href={`/diets/${diet.id}`} className="rounded px-5 py-2 group bg-primaryColor relative hover:bg-gradient-to-r overflow-hidden hover:from-primaryColor hover:to-primaryColor text-white hover:ring-2 hover:ring-offset-2 hover:ring-primaryColor transition-all ease-out duration-300">
                <span className="absolute right-0 w-2 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">View Diet Plan</span>
            </Link>
        </CardHeader>
        </Card>
    )
}

export default DietCard;
