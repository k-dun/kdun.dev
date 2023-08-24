import './about.css';
import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

export default function About() {

  return (
    <>
      {/* SM/MD SCREEN */}

      <section className="lg:hidden bg-[#FCFAFF] h-screen w-[100vw] flex pt-24">
        <div id="m-about" className="w-full flex flex-col">
          <div className="flex flex-col justify-start">
            <h3 className="font-primary text-3xl text-[#202020] font-semibold mb-4 pl-4"><span className="text-[#FF8080]">01</span> About</h3>
            <p className="text-xl text-[#202020] px-6">
              I always pursue my curiosity. Consuming multiple tech related content and podcasts eventually led me to leave retail and join the Makers Academy software development bootcamp. I am now looking for my first job in tech.<br /><br />
              I want to be proud of where I work. If you're a UK startup with a proven product-market fit and geared towards creating positive impact, I'd be excited to give it my 110% to help you grow and succeed.<br /><br />
              <span className="font-semibold">I'm open to all roles, be that engineering, product/project management or operations.</span><br /><br />
              Check out skills section below <a href="/#skills"><span className="text-xl text-[#FF8080]">⇣</span></a>
            </p>
          </div>
        </div>
      </section>

      {/* LG+ SCREENS */}

      <style jsx>{`.custom-max-width { max-width: 1800px; }`}
      </style>

      <section className="hidden lg:bg-[#FCFAFF] lg:h-[90vh] lg:flex lg:custom-max-width lg:pt-40">
        <div id="about" className="lg:flex lg:flex-row lg:h-[60vh]">
          <div className="lg:w-[800px] lg:flex lg:justify-center lg:items-start">
            <h3 className="lg:font-primary lg:text-5xl lg:text-[#202020] lg:font-semibold"><span className="text-[#FF8080]">01</span> About</h3>
          </div>
          <div className="lg:w-[800px] lg:flex lg:justify-start lg:items-start">
            <p className="lg:text-3xl lg:text-[#202020] lg:px-6">
              I always pursue my curiosity. Consuming multiple tech related content and podcasts eventually led me to leave retail and join the Makers Academy software development bootcamp. I am now looking for my first job in tech.<br /><br />
              I want to be proud of where I work. If you're a UK startup with a proven product-market fit and geared towards creating positive impact, I'd be excited to give it my 110% to help you grow and succeed.<br /><br />
              <span className="lg:font-semibold">I'm open to all roles, be that software engineering, product/project management or operations.</span><br /><br />
              Check out skills section below <a href="/#skills"><span className="lg:text-3xl lg:text-[#FF8080]">⇣</span></a>
            </p>
          </div>
        </div>
      </section>
      <div className="hidden lg:w-[100vw] lg:flex lg:flex-col lg:justify-end lg:items-center lg:pb-12">
        <a href="/#skills"><FiArrowDown className="lg:text-6xl lg:text-[#FF8080]" /></a>
      </div>
    </>
  );
};