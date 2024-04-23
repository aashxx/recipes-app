"use client";

import { useSearchParams } from 'next/navigation';
import React from 'react';

const DietDetails = () => {

    const searchParams = useSearchParams()
    const id = searchParams.get('id');

    return (
        <div>
            hello world
            {id}
        </div>
    )
}

export default DietDetails;
