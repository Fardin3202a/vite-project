import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <div className=' fixed z-[100] w-screen h-12 bg-white backdrop-blur-sm bg-opacity-20 flex justify-around items-center flex-row'>
      <h1 className='h-10 text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-Primary to-80% to-Secondary font-pacifico'>
        Portfolio
      </h1>
      <ul className='flex flex-row font-roboto gap-6 text-sm text-text'>
        {/* Link for routing */}
        <li className=' cursor-pointer'>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
            </ScrollLink>
        </li>
        {/* Smooth scroll link for sections */}
        <li className=' cursor-pointer'>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className=' cursor-pointer'>
          <ScrollLink to="portfolio" smooth={true} duration={500}>
            Portfolio
          </ScrollLink>
        </li>
        <li className=' cursor-pointer'>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
