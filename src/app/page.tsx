"use client";

import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';

export default function Home() {
  return (
   <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-[#FCFAFF] max-w-screen">
      <Navbar />
      <Hero />
    </div>
   </>
  );
};
