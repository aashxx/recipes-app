"use client"

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { ProviderProps } from '../utils/types';

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider;