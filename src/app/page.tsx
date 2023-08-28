"use client";

import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import About from '../components/about/about';

export default function Home() {
  return (
   <>
    <style jsx>{`.custom-max-width {
      max-width: 1400px;
      margin: 0 auto; }`}
    </style>

    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-[#FCFAFF] w-[100vw] lg:custom-max-width">
      <Navbar />
      <Hero />
      <About />
    </div>
   </>
  );
};
