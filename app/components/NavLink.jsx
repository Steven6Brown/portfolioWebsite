import Link from 'next/link';

export default function NavLink({ href, title, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className='block py-2 pl-3 pr-4 text-bt-grey sm:text-xl rounded md:p-0 hover:text-p-green'
    >
      {title}
    </Link>
  );
}

// import React from 'react';
// import Link from 'next/link';

// const NavLink = ({ title, path }) => {
//     const handleClick = (event) => {
//         if (path && path.startsWith('#')) {
//             const sectionId = path.slice(1);
//             const section = document.getElementById(sectionId);
//             if (section) {
//                 event.preventDefault();
//                 window.scrollTo({
//                     top: section.offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         }
//     };

//     return (
//         <Link href={path || '#'}>
//             <div onClick={handleClick} className="block py-2 pl-3 pr-4 text-bt-grey sm:text-xl rounded md:p-0 hover:text-p-green">{title}</div>
//         </Link>
//     );
// };

// export default NavLink;