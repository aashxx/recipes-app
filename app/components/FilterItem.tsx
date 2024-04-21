"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { FilterProps } from '../utils/types';

const FilterItem: React.FC<FilterProps> = ({ name, types }) => {

    return (
        <article className='flex flex-col gap-2 items-start'>
            <h4 className='font-bold text-secondaryColor'>
                {name}
            </h4>
            <aside className='flex w-full md:w-[300px] flex-wrap gap-1'>
                {
                    types.map((type, i) => (
                        <Label key={i} className={`flex items-center cursor-pointer gap-1 border-[2px] rounded-lg border-primaryColor px-2 py-1`}>
                            <Checkbox value={type} className='border-none data-[state=checked]:bg-primaryColor' />
                            <p className='mr-6 font-bold'>
                                {type}
                            </p>
                        </Label>
                    ))
                }
            </aside>
        </article>
    )
}

export default FilterItem;
