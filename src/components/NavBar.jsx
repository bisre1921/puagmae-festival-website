import React, { useState, useEffect } from 'react';
import { navLinks, socialLinks } from '../constants';
import logo from '../assets/logo.png';
import { FaBars, FaTimes, FaCog, FaMoon, FaSun } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleScroll, options);

    navLinks.forEach(link => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  React.useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      html.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      html.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      html.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className='fixed top-0 left-0 w-full bg-ghost-white dark:bg-eerie-black text-vampire-black dark:text-ghost-white z-50 transition-colors duration-500'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto py-2'>
        <div className='flex-none'>
          <img 
            src={logo} 
            alt="puagmae logo" 
            className='w-14 h-14'
          />
        </div>
        <div className='hidden lg:flex justify-center'>
          <ul className='flex space-x-6 list-none'>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <a 
                  href={`#${navLink.id}`} 
                  className={`text-lg font-medium ${
                    activeLink === navLink.id ? 'text-goldenrod' : 'text-vampire-black dark:text-ghost-white'
                  } hover:text-goldenrod hover:scale-105 transform transition duration-300`}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden lg:flex space-x-4'>
          <ul className='flex space-x-4 list-none items-center'>
            {socialLinks.map((socialLink) => (
              <li key={socialLink.path}>
                <a 
                  href={socialLink.path} 
                  className='text-xl text-vampire-black dark:text-ghost-white hover:text-goldenrod hover:scale-105 transform transition duration-300'
                >
                  {socialLink.name}
                </a>
              </li>
            ))}
            <li className='relative'>
              <button
                onClick={() => setShowSettings((prev) => !prev)}
                className='text-xl text-vampire-black dark:text-ghost-white hover:text-goldenrod hover:scale-105 transform transition duration-300 p-2 rounded-full'
                aria-label='Settings'
                style={{ zIndex: 100 }}
              >
                <FaCog />
              </button>
              {showSettings && (
                <div
                  className='absolute left-1/2 -translate-x-1/2 mt-3 w-40 bg-ghost-white dark:bg-eerie-black text-vampire-black dark:text-ghost-white rounded-xl shadow-2xl z-50 p-3 flex flex-col items-center border border-goldenrod/20 animate-fade-slide'
                  style={{ minWidth: '140px', transition: 'opacity 0.2s, transform 0.2s' }}
                  onMouseLeave={() => setShowSettings(false)}
                  onMouseEnter={() => setShowSettings(true)}
                >
                  {/* Custom arrow */}
                  <div className='absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 overflow-hidden pointer-events-none'>
                    <div className='w-4 h-4 bg-ghost-white dark:bg-eerie-black border-l border-t border-goldenrod/20 rotate-45 shadow-md'></div>
                  </div>
                  <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    className='flex items-center text-base p-2 rounded-lg hover:bg-goldenrod hover:text-black dark:hover:text-eerie-black transition duration-300 w-full justify-center whitespace-nowrap font-semibold shadow-sm'
                  >
                    {darkMode ? <FaSun /> : <FaMoon />}
                    <span className='ml-2'>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className='lg:hidden flex items-center px-4'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-vampire-black dark:text-ghost-white'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 w-64 h-full bg-ghost-white dark:bg-eerie-black text-vampire-black dark:text-ghost-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-between items-center p-4'>
            <img 
              src={logo} 
              alt="puagmae logo" 
              className='w-16 h-16'
            />
          </div>
          <ul className='flex flex-col flex-grow p-4 space-y-4'>
            {navLinks.map((navLink) => (
              <li key={navLink.id} className='cursor-pointer'>
                <a
                  href={`#${navLink.id}`}
                  className={`text-lg font-medium ${
                    activeLink === navLink.id ? 'text-goldenrod' : 'text-vampire-black dark:text-ghost-white'
                  } hover:text-goldenrod hover:scale-105 transform transition duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
          <div className='p-4 mt-auto'>
            <ul className='flex space-x-4 items-center mb-4'>
              {socialLinks.map((socialLink) => (
                <li key={socialLink.path} className='text-xl'>
                  <a 
                    href={socialLink.path} 
                    className='text-vampire-black dark:text-ghost-white hover:text-goldenrod hover:scale-105 transform transition duration-300'
                  >
                    {socialLink.name}
                  </a>
                </li>
              ))}
              <li className='text-xl'>
                <button
                  onClick={() => setShowSettings((prev) => !prev)}
                  className='text-xl text-vampire-black dark:text-ghost-white hover:text-goldenrod transform transition duration-300 p-2 rounded-full flex items-center justify-center'
                  aria-label='Settings'
                  style={{ zIndex: 100 }}
                >
                  <FaCog />
                </button>
              </li>
            </ul>
            {showSettings && (
              <div>
                {/* Fullscreen overlay to close on click outside */}
                <div
                  className='fixed inset-0 z-40 bg-black/10 backdrop-blur-sm'
                  onClick={() => setShowSettings(false)}
                />
                {/* Modern glassy popup */}
                <div
                  className='fixed left-1/2 bottom-24 -translate-x-1/2 z-50 bg-ghost-white/80 dark:bg-eerie-black/80 text-vampire-black dark:text-ghost-white rounded-2xl shadow-2xl border border-goldenrod/30 backdrop-blur-md px-6 py-4 flex flex-col items-center min-w-[160px] max-w-xs'
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(218,165,32,0.10)' }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    className='flex items-center text-lg p-2 rounded-xl hover:bg-goldenrod hover:text-black dark:hover:text-eerie-black transition duration-300 w-full justify-center whitespace-nowrap font-semibold shadow-sm gap-2'
                  >
                    {darkMode ? <FaSun /> : <FaMoon />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
