'use client';

import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaHamburger } from 'react-icons/fa';
import { THEME_KEY } from '@/app/utils/theme';

const themeToggleStyles = {
  className: 'size-6'
};

const hamburgerButtonStyles = {
  className: 'size-6'
};

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(document.body.dataset.theme === 'light');

  const initTheme = () => {
    const colorTheme = globalThis.matchMedia('(prefers-color-scheme: dark)')
      .matches ? THEME_KEY.dark : THEME_KEY.light;
    document.body.dataset.theme = colorTheme;
  };

  useEffect(() => {
    initTheme();
  }, []);

  const handleToggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    document.body.dataset.theme = (isLightTheme ? 'dark' : 'light');
  };

  return (
    <header className="sticky flex h-[10vh] w-full justify-center">
      <nav className="flex min-w-[75vw] justify-end">
        <ul className='mx-8 flex items-center space-x-4 lg:space-x-6'>
          <li onClick={handleToggleTheme} className='rounded-md p-2 hover:bg-slate-600 hover:bg-opacity-[0.5]'>
            {isLightTheme ? (
              <IconContext.Provider value={themeToggleStyles}>
                <MdDarkMode />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={themeToggleStyles}>
                <MdLightMode />
              </IconContext.Provider>
            )}
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
