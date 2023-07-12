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
      <div className="navbar flex flex-row w-full h-24 bg-[#FCFAFF]">
        <div className="flex w-1/3 justify-start items-center">
          <a href="/">
            <Image src="/kdun-logo.svg" alt="Konrad Dunski Logo" className="ml-2 w-24 h-12" width={200} height={100} />
          </a>
        </div>
        
        <div className="flex w-2/3 justify-end items-center">
          <div className="flex justify-end items-center">
            <div className="flex flex-row">
              <a href="/Konrad_Dunski_CV.pdf" target="_blank" className="my-auto">
                <button className="flex-1 btn btn-xl btn-ghost shadow-sm text-[#202020] font-primary rounded-2xl border-2 border-solid border-[#FF8080] py-2 px-6 my-auto">
                  <span className="text-2xl">resumé</span>
                </button>
              </a>

              {!menuOpen && (
                <button className="flex-1 btn btn-lg btn-square btn-ghost" onClick={() => toggleMenu()}>
                  <Image src="/nav-burger.svg" width={24} height={24} />
                </button>
              )}

              {menuOpen && (
                <div className="dropdown dropdown-bottom dropdown-end dropdown-open">
                  <label tabIndex={0} className="flex-1 btn btn-lg btn-square btn-ghost">
                    <Image src="/nav-burger-active.svg" width={24} height={24} onClick={() => toggleMenu()} />
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-[#FCFAFF] rounded-box w-[96vw] h-[60vh]">
                    <li className="text-black"><a href="/#about" onClick={() => toggleMenu()}>ABOUT</a></li>
                    <li className="text-black"><a href="/#projects" onClick={() => toggleMenu()}>PROJECTS</a></li>
                    <li className="text-black"><a href="/#contact" onClick={() => toggleMenu()}>CONTACT</a></li>
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
