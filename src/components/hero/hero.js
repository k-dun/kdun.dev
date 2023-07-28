import './hero.css';
import React from 'react';
import Image from 'next/image';
import { FiCornerRightDown, FiArrowDown, FiFileText } from 'react-icons/fi';

export default function Hero() {

  return (
    <>
      <section className="bg-[#FCFAFF] h-screen w-full flex px-5">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-center">
            <Image src="/hero-dev.png" className="pt-8" width={750} height={750} alt="Konrad Dunski - Dev For Hire" />
          </div>
          <div className="flex flex-col justify-start items-center mt-16">
            <h1 className="text-3xl font-semibold text-[#202020] font-primary">FRONTEND DEVELOPER <span className="text-[#FF8080]">/</span> DESIGNER</h1>
            <h2 className="text-lg font-medium text-[#353535] mt-4">My name is Konrad Dunski and I am interested in UX/UI design, startups, writing and all things frontend.</h2>
          </div>
          <div className="flex flex-row w-full mt-10">
            <div className="w-1/2">
              <a href="/#about" className="my-auto">
                <button className="flex-1 w-40 btn btn-md btn-ghost shadow-sm capitalize text-[#202020] text-base font-medium bg-[#FF8080] border-2 rounded-2xl border-solid border-[#FF8080] py-2 px-6 my-auto">
                  About Me <FiCornerRightDown />
                </button>
              </a>
            </div>
            <div className="w-1/2">
              <a href="/Konrad_Dunski_CV.pdf" target="_blank" className="my-auto">
                <button className="flex-1 w-40 btn btn-md btn-ghost shadow-sm capitalize text-[#202020] text-base font-medium bg-[#FCFAFF] border-2 rounded-2xl border-solid border-[#FF8080] py-2 px-6 my-auto">
                  Resumé <FiFileText />
                </button>
              </a>
            </div>
          </div>
          <div className="container h-48 flex flex-col justify-end items-center pb-4">
            <a href="/#about"><FiArrowDown className="text-4xl text-[#FF8080]" /></a>
          </div>
        </div>
      </section>
    </>
  );
};