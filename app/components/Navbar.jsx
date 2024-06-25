'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import {HiOutlineXMark, HiBars3} from 'react-icons/hi2'
import { MenuOverlay } from './MenuOverlay';

const navLinks = [
    {
        title: 'Home',
        path: '/#home'
    },
    {
        title: 'About',
        path: '/#about'
    },
    {
        title: 'Projects',
        path: '/#projects'
    },
    {
        title: 'Skills',
        path: '/#skills'
    },
    {
        title: 'Contact',
        path: '/#contact'
    },
    // {
    //     title: 'Gallery',
    //     path: '#gallery'
    // }
]

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

return (
    <nav className={`bg-h-black ${hasScrolled ? 'bg-opacity-95' : 'bg-opacity-100'}`} style={{ boxShadow: hasScrolled ? '0px 8px 10px rgba(0, 0, 0, 1)' : 'none' }}>
        <div className='container flex flex-wrap items-center justify-between mx-auto py-4'>
            {/* NavButtons */}
            <Link 
                href={"/#home"}
                className='flex items-center justify-center'
            >

            {/* LOGO #1 */}
            <Image 
                src='/images/navbar/sb-logo.png' 
                width={75} 
                height={75}
            />

            {/* LOGO #2 */}
            {/* <Image 
                src='/images/logo.png' 
                width={75} 
                height={75}
            /> */}

            {/* LOGO #3 */}
            {/* <Image 
                src='/images/logo2.png' 
                width={75} 
                height={75}
            /> */}

            {/* LOGO #4 */}
            {/* <Image 
                src='/images/logo3.png' 
                width={75} 
                height={75}
            /> */}
            </Link>

            <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                    <button 
                        onClick={() => setNavbarOpen(true)} 
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-p-green hover:border-p-green'
                    >
                        <HiBars3 className='h-5 w-5' />
                    </button>
                ) : (
                    <button 
                        onClick={() => setNavbarOpen(false)} 
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-p-green hover:border-p-green'
                    >
                        <HiOutlineXMark className='h-5 w-5' />
                    </button>
                )}
            </div>

            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}
