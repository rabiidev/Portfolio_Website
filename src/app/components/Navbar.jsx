"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink';
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "About",
    path: "#about",
},
{
    title: "Projects",
    path:  "#projects",
},
{
    title: "Contact",
    path:  "#contact"
}
]
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
   <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
      <Link 
      href={"/"} 
      className="text-2xl md:text-5xl text-white font-semibold p-2
      ">
        LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
        {!navbarOpen ? ( 
            <button 
            onClick={() => setNavbarOpen(true)} 
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              {/* <Bars3Icon className="h-5 w-5"/> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
            </button>
          ) : (
            <button 
            onClick={() => setNavbarOpen(false)} 
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
            {/* <XmarkIcon className="h-5 w-5"/> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

          </button>  )
        }
        </div>
      <div className="menu hidden md:block md:w-auto" id="navbar">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
          {
            navLinks.map((link, index) => (
          <li key={index}>()
            <NavLink href={link.path} title={link.title} />
            </li>
            ))}
        </ul>
      </div>
   </div>
    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
   </nav> 
  );
};
export default Navbar;