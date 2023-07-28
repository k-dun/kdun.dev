import React, { useState } from 'react';
import './navbar.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar flex flex-row w-full h-24 bg-[#FCFAFF] md:h-36">
        <div className="flex w-1/3 justify-start items-center">
          <a href="/">
            <Image src="/kdun-logo.svg" alt="Konrad Dunski Logo" className="ml-2 w-24 h-12 md:w-32 md:h-16 md:ml-6" width={200} height={100} />
          </a>
        </div>
        
        <div className="flex w-2/3 justify-end items-center">
          <div className="flex justify-end items-center">
            <div className="flex flex-row">

              {!menuOpen && (
                <button className="flex-1 btn btn-lg btn-square btn-ghost mr-6" onClick={() => toggleMenu()}>
                  <Image src="/nav-burger.svg" className="md:w-12 md:h-12" width={24} height={24} />
                </button>
              )}

              {menuOpen && (
                <div className="dropdown dropdown-bottom dropdown-end dropdown-open">
                  <label tabIndex={0} className="flex-1 btn btn-lg btn-square btn-ghost mr-6">
                    <Image src="/nav-burger-active.svg" className="md:w-12 md:h-12" width={24} height={24} onClick={() => toggleMenu()} />
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-[#FCFAFF] rounded-box w-[100vw] h-[100vh] text-center font-primary font-semibold text-4xl text-[#202020]">
                    <li className="mt-24 underline"><a href="/#about" onClick={() => toggleMenu()}>ABOUT</a></li>
                    <li className="mt-6 underline"><a href="/#projects" onClick={() => toggleMenu()}>PROJECTS</a></li>
                    <li className="mt-6 underline"><a href="/#contact" onClick={() => toggleMenu()}>CONTACT</a></li>
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
