"use client";

import React, { useState } from 'react';
import { Header } from './Header';
import { MobileHeader } from './MobileHeader';
import { Footer } from './Footer';
import { LayoutProps } from '@/app/utils/types';
import Head from 'next/head';

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <div>
      <Header setOpenNav={setOpenNav} />
      <MobileHeader openNav={openNav} setOpenNav={setOpenNav} />
      <main>
          { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout;