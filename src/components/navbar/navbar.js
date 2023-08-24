import React, { useState, useEffect } from 'react';
import './navbar.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
      <style jsx>
        {`.custom-max-width { max-width: 1600px }`}
      </style>

      <div className={`navbar fixed top-0 flex flex-row w-[100vw] lg:custom-max-width h-24 bg-[#FCFAFF] md:h-36 ${ scrolling ? 'bg-opacity-90' : 'bg-opacity-100'} transition duration-300 ease-in-out`}>
        <div className="flex w-1/3 justify-start items-center">
          <a href="/">
            <Image src="/kdun-logo.svg" alt="Konrad Dunski Logo" className="pl-2 w-24 h-12 md:w-32 md:h-16 md:ml-6" width={200} height={100} />
          </a>
        </div>
        
        <div className="flex w-2/3 justify-end items-center">
          <div className="flex justify-end items-center">
            <div className="flex flex-row">

              {!menuOpen && (
                <button className="flex-1 btn btn-lg btn-square btn-ghost mr-2 md:mr-6" onClick={() => toggleMenu()}>
                  <Image src="/nav-burger.svg" className="md:w-12 md:h-12" width={24} height={24} />
                </button>
              )}

              {menuOpen && (
                <div className="dropdown dropdown-bottom dropdown-end dropdown-open">
                  <label tabIndex={0} className="flex-1 btn btn-lg btn-square btn-ghost mr-2 md:mr-6">
                    <Image src="/nav-burger-active.svg" className="md:w-12 md:h-12" width={24} height={24} onClick={() => toggleMenu()} />
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] shadow bg-[#FCFAFF] border-2 border-solid border-[#FF8080] rounded-box w-[100vw] lg:w-[99vw] h-[85vh] text-center font-primary font-semibold text-5xl text-[#202020]">
                    <li className="mt-[30vh]"><a href="/#about" onClick={() => toggleMenu()}><span className="text-[#FF8080]">01</span> ABOUT</a></li>
                    <li className="mt-8 lg:mt-12"><a href="/#skills" onClick={() => toggleMenu()}><span className="text-[#FF8080]">02</span> SKILLS</a></li>
                    <li className="mt-8 lg:mt-12"><a href="/#projects" onClick={() => toggleMenu()}><span className="text-[#FF8080]">03</span> PROJECTS</a></li>
                    <li className="mt-8 lg:mt-12"><a href="/#contact" onClick={() => toggleMenu()}><span className="text-[#FF8080]">04</span> CONTACT</a></li>
                  </ul>
                </div> 
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
