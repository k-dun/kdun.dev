import './hero.css';
import React from 'react';
import Image from 'next/image';
import { FiCornerRightDown, FiArrowDown, FiFileText } from 'react-icons/fi';

export default function Hero() {

  return (
    <>
      {/* SM/MD SCREEN */}

      <section className="lg:hidden bg-[#FCFAFF] h-screen w-screen flex pt-24 md:pt-36">
        <div className="w-full flex flex-col">
          <div className="flex justify-center">
            <Image src="/hero-image.png" className="pb-8" width={400} height={400} alt="Konrad Dunski - Dev For Hire" />
          </div>
          <div className="flex flex-col justify-start items-center md:mt-16">
            <h1 className="text-3xl font-semibold text-[#202020] font-primary">FRONTEND DEVELOPER <span className="text-[#FF8080]">/</span> DESIGNER</h1>
            <h2 className="text-lg font-medium text-[#353535] mt-4 mx-6">My name is Konrad Dunski and I am interested in UI/UX design, startups, writing and all things frontend.</h2>
          </div>
          <div className="flex flex-row w-full mt-10 justify-around md:justify-center">
            <div className="">
              <a href="/#m-about" className="my-auto">
                <button className="flex-1 w-40 md:mx-4 btn btn-md btn-ghost shadow-sm capitalize text-[#202020] text-base font-medium bg-[#F2B2AC] border-2 rounded-2xl border-solid border-[#F2B2AC] py-2 px-6 my-auto">
                  01 About <FiCornerRightDown />
                </button>
              </a>
            </div>
            <div className="">
              <a href="/Konrad_Dunski_CV.pdf" target="_blank" className="my-auto">
                <button className="flex-1 w-40 md:mx-4 btn btn-md btn-ghost shadow-sm capitalize text-[#202020] text-base font-medium bg-[#FCFAFF] border-2 rounded-2xl border-solid border-[#F2B2AC] py-2 px-6 my-auto">
                  Resumé <FiFileText />
                </button>
              </a>
            </div>
          </div>
          <div className="w-[100vw] h-[10vh] flex flex-col justify-end items-center">
            <a href="/#m-about"><FiArrowDown className="text-3xl text-[#FF8080]" /></a>
          </div>
        </div>
      </section>

      {/* LG+ SCREENS */}

      <style jsx>{`.custom-max-width { max-width: 1800px; }`}
      </style>

      <section className="hidden lg:bg-[#FCFAFF] lg:h-[90vh] lg:flex lg:custom-max-width lg:justify-center lg:pt-36">
        <div className="lg:flex lg:flex-row lg:h-[60vh] lg:items-center lg:pt-36">
          <div className="lg:w-[800px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:pl-48">
            <h1 className="lg:text-5xl lg:w-full lg:font-semibold lg:text-[#202020] lg:font-primary">FRONTEND DEVELOPER <span className="lg:text-[#FF8080]">/</span> DESIGNER</h1>
            <h2 className="lg:text-2xl lg:font-medium lg:text-[#353535] lg:mt-16">My name is Konrad Dunski and I am interested in UI/UX design, startups, writing and all things frontend.</h2>
            <div className="lg:flex lg:flex-row lg:w-full lg:mt-10 lg:justify-start">
              <div className="">
                <a href="/#about" className="lg:my-auto">
                  <button className="lg:flex-1 lg:w-52 lg:mr-10 lg:btn lg:btn-lg lg:btn-ghost lg:shadow-sm lg:capitalize lg:text-[#202020] lg:text-lg lg:font-medium lg:bg-[#F2B2AC] lg:border-4 lg:rounded-2xl lg:border-solid lg:border-[#F2B2AC] lg:py-2 lg:px-6 lg:my-auto lg:hover:bg-[#FCFAFF] lg:hover:border-[#FF8080]">
                    01 About <FiCornerRightDown />
                  </button>
                </a>
              </div>
              <div className="">
                <a href="/Konrad_Dunski_CV.pdf" target="_blank" className="lg:my-auto">
                  <button className="lg:flex-1 lg:w-52 lg:btn lg:btn-lg lg:btn-ghost lg:shadow-sm lg:capitalize lg:text-[#202020] lg:text-lg lg:font-medium lg:bg-[#FCFAFF] lg:border-4 lg:rounded-2xl lg:border-solid lg:border-[#F2B2AC] lg:py-2 lg:px-6 lg:my-auto">
                    Resumé <FiFileText />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-[800px]">
            <div className="lg:flex lg:justify-center">
              <Image src="/hero-image.png" className="lg:pt-8" width={700} height={700} alt="Konrad Dunski - Dev For Hire" />
            </div>
          </div>
        </div>
      </section>
      <div className="hidden lg:w-full lg:flex lg:flex-col lg:items-center lg:pb-4">
        <a href="/#about"><FiArrowDown className="lg:text-6xl lg:text-[#FF8080]" /></a>
      </div>
    </>
  );
};