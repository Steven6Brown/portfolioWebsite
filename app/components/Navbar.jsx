'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { MenuOverlay } from './MenuOverlay';

const navLinks = [
  { title: 'Home', path: '/#home' },
  { title: 'About', path: '/#about' },
  { title: 'Projects', path: '/#projects' },
  { title: 'Skills', path: '/#skills' },
  { title: 'Contact', path: '/#contact' },
  { title: 'Blog', path: '/blog' },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.pageYOffset > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, path) => {
    if (!path.includes('#')) return;
    e.preventDefault();

    if (window.location.pathname !== '/') {
      window.location.href = path;
      return;
    }

    const targetId = path.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: hasScrolled ? 'rgba(17,17,17,0.95)' : 'transparent', // slightly darker
        boxShadow: hasScrolled ? '0 4px 12px rgba(0,0,0,0.8)' : 'none',
      }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 sm:px-6 md:px-20 w-full">
        <Link href="/#home" className="flex items-center justify-center">
          <Image
            src="/images/navbar/sb-logo.png"
            width={75}
            height={75}
            alt="Steven Brown Logo"
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-p-green hover:border-p-green"
            >
              <HiBars3 className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-p-green hover:border-p-green"
            >
              <HiOutlineXMark className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={(e) => handleNavLinkClick(e, link.path)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};