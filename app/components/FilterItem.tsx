"use client";

import React from 'react';
import { FilterProps } from '../utils/types';

const FilterItem: React.FC<FilterProps> = ({ name, types, appliedFilters, setAppliedFilters }) => {

    const toggleFilter = (filter: string) => {
        const updatedFilters = appliedFilters.includes(filter)
            ? appliedFilters.filter((item) => item !== filter) // Remove filter if already applied
            : [...appliedFilters, filter]; // Add filter if not applied
        setAppliedFilters(updatedFilters);
    };

    const toCamelCase = (str: string) => {
        return str.replace(/\s(.)/g, function(match) {
            return match.toUpperCase();
        }).replace(/\s/g, '').replace(/^(.)/, function(match) {
            return match.toLowerCase();
        });
    };

    const camelCaseName = toCamelCase(name);
    

    return (
        <article className='flex flex-col gap-2 items-start'>
            <h4 className='font-bold text-secondaryColor'>
                {name}
            </h4>
            <aside className='flex w-full md:w-[300px] flex-wrap gap-1'>
                {
                    types.map((type, i) => (
                        <button onClick={() => toggleFilter(`${camelCaseName}=${type.toLowerCase()}`)} key={i} className={`flex items-center ${appliedFilters.includes(`${camelCaseName}=${type.toLowerCase()}`) ? 'bg-primaryColor text-white' : 'bg-white text-primaryColor'} cursor-pointer gap-1 border-[2px] rounded-lg border-primaryColor px-6 py-[2px]`}>
                            <p className='font-bold text-[13px]'>
                                {type}
                            </p>
                        </button>
                    ))
                }
            </aside>
        </article>
    )
}

export default FilterItem;
