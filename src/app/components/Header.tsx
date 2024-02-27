'use client';

import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaHamburger } from 'react-icons/fa';

const themeToggleStyles = {
  color: '#dcdce6',
  className: 'size-6'
};

const hamburgerButtonStyles = {
  color: '#dcdce6',
  className: 'size-6'
};

const Header = () => {
  return (
    <header className="fixed flex h-[10vh] w-full justify-center">
      <nav className="flex min-w-[75vw] justify-end">
        <ul className='mx-8 flex items-center space-x-4 lg:space-x-6'>
          <li className='rounded-md p-2 hover:bg-slate-600 hover:bg-opacity-[0.5]'>
            <IconContext.Provider value={themeToggleStyles}>
              <MdLightMode />
            </IconContext.Provider>
          </li>
          <li className='rounded-md p-2 hover:bg-slate-600 hover:bg-opacity-[0.5]'>
            <IconContext.Provider value={hamburgerButtonStyles}>
              <FaHamburger />
            </IconContext.Provider>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
