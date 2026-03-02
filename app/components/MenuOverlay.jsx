import React from 'react'
import NavLink from './NavLink';

export const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <li key={index} className='w-full text-center'>
                <NavLink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  );
};