import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ProjectRoute = ({ image, title, planguage, subtitle1, description1, subtitle2, description2, subtitle3, description3, codebutton }) => {
    if (codebutton != '') {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
            {/* Image Banner Section */}
            <div className="relative w-full h-80">
                <div className="absolute inset-0 bg-black opacity-50">
                    <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end items-start p-8">
                    <h2 className="text-white mb-4">
                        {title}
                    </h2>

                    <p className="text-lg text-white">
                        {planguage}
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle1}
                        </span>
                    </h3>

                    <p className="text-lg">
                        {description1}
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle2}
                        </span>
                    </h3>

                    <ul className="list-disc list-inside text-lg">
                        {/* Check if description2 is defined and is an array before mapping */}
                        {description2 && Array.isArray(description2) && description2.map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle2}
                        </span>
                    </h3>

                    <ul className="list-disc list-inside text-lg">
                        // Map over description2 (skills array) to render skills
                        {description2.map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}

            {/* What I Learned Section */}
            <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle3}
                        </span>
                    </h3>

                    <p className="text-lg">
                        {description3}
                    </p>
                </div>
            </div>
            
            {/* WRITTEN BUTTONS */}
            <div className='container mt-8'>
                <div className='mx-auto mb-4'>
                    <Link href={codebutton}> {/* GITHUB LINK */}
                        <button className='p-1 w-full rounded-lg sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white lg:mr-10 shadow-black shadow-lg'>
                            <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-lg px-7 py-3.5'>
                                CODE
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* BACK BUTTON - SQUARE */}
            <div className='container'>
                <div className='mx-auto mb-4'>
                    <Link href={'/#projects'}>
                        <button className='p-1 w-full rounded-lg sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white lg:mr-10 shadow-black shadow-lg'>
                            <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-lg px-2 py-1'>
                                <IoArrowBackCircleOutline className="h-7 w-7"/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* BACK BUTTON - ROUND ARROW ICON */}
            {/* <div className='container'>
                <div className='mx-auto mb-4'>
                    <Link href={'/#projects'}>
                        <button className='p-1 w-full rounded-lg sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white lg:mr-10 shadow-black shadow-lg'>
                                <IoArrowBackCircleOutline className="h-7 w-7" />
                                {/* BACK
                        </button>
                    </Link>
                </div>
            </div> */}
        </div>
    );
    }
    else {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
            {/* Image Banner Section */}
            <div className="relative w-full h-80">
                <div className="absolute inset-0 bg-black opacity-50">
                    <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end items-start p-8">
                    <h2 className="text-white mb-4">
                        {title}
                    </h2>

                    <p className="text-lg text-white">
                        {planguage}
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle1}
                        </span>
                    </h3>

                    <p className="text-lg">
                        {description1}
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle2}
                        </span>
                    </h3>

                    <ul className="list-disc list-inside text-lg">
                        {/* Check if description2 is defined and is an array before mapping */}
                        {description2 && Array.isArray(description2) && description2.map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle2}
                        </span>
                    </h3>

                    <ul className="list-disc list-inside text-lg">
                        // Map over description2 (skills array) to render skills
                        {description2.map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}

            {/* What I Learned Section */}
            <div className="container">
                <div className="mx-auto mt-8 mb-4">
                    <h3 className="mb-4">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle3}
                        </span>
                    </h3>

                    <p className="text-lg">
                        {description3}
                    </p>
                </div>
            </div>
            
            {/* BACK BUTTON - SQUARE */}
            <div className='container'>
                <div className='mx-auto mb-4'>
                    <Link href={'/#projects'}>
                        <button className='p-1 w-full rounded-lg sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white lg:mr-10 shadow-black shadow-lg'>
                            <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-lg px-2 py-1'>
                                <IoArrowBackCircleOutline className="h-7 w-7"/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* BACK BUTTON - ROUND ARROW ICON */}
            {/* <div className='container'>
                <div className='mx-auto mb-4'>
                    <Link href={'/#projects'}>
                        <button className='p-1 w-full rounded-lg sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white lg:mr-10 shadow-black shadow-lg'>
                                <IoArrowBackCircleOutline className="h-7 w-7" />
                                {/* BACK
                        </button>
                    </Link>
                </div>
            </div> */}
        </div>
    );
}
};

export default ProjectRoute;

/* -------------------------------------------------------------------------------
/* OBJECT ORIENTED IDEAD - WORKS WELL */

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const ProjectRoute = ({ image, title, planguage, subtitle1, description1, subtitle2, description2, subtitle3, description3 }) => {
//   return (
//         <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
//             <div className="relative w-full h-80">
//                 <div className='absolute inset-0 bg-black opacity-50'>
//                     <Image
//                         src={image}
//                         layout="fill"
//                         objectFit="cover"
//                     />
//                 </div>

//                 <div className="absolute inset-0 flex flex-col justify-end items-start p-8">
//                     {/* Adjusted alignment to start (left) and padding */}
//                     <h2 className="text-white mb-4">
//                         {title}
//                     </h2>

//                     <p className="text-lg text-white">
//                         {planguage}
//                     </p>
//                 </div>

//                 {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//                     <h1 className="text-4xl text-white mb-4">
//                         {title}
//                     </h1>
            
//                     <p className="text-lg text-white">
//                         {planguage}
//                         {/* A project for baseball enthusiasts to track game statistics offline. */}
//                     {/* </p> */}
//                 {/* </div> */}

//             </div>

//             {/* About Section */}
//             <div className='container'>
//                 <div className="mx-auto mt-2 py-8">
//                     <h3 className='mb-4'>
//                         <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                             {subtitle1}
//                             {/* About DiamondStatTrax */}
//                         </span>
//                     </h3>

//                     <p className="text-lg">
//                         {description1}

//                         {/* Throughout history, statistical analysis and the process of monitoring statistics have
//                         significantly contributed to the success and progress of inventions, innovations, and especially hard work. Just as statistics are useful within large corporations, they prove heavily pertinent in the sports industry. Specifically in the well-known sport of Baseball, we have practiced statistical tracking in sports, even before the rapid growth of technology. This has allowed teams and players to compete amongst each other, in turn promoting a better, more competitive style of play. 
//                         DiamondStatTrax is designed for baseball enthusiasts who want to keep track of the statistics of baseball games they manage or play without the need for an internet connection.

//                         The DiamondStatTrax application provides a solution to a situation that often seems
//                         daunting to inexperienced people with newly developing and changing technology. 
//                         Often, individuals involved in managing and playing the sport comprehend the game but may not fully understand the process of tracking and efficiently monitoring the game's progress.

//                         DiamondStatTrax is an innovative project that aims to streamline data tracking and analysis for diamond industry businesses. */}
//                     </p>
//                 </div>
//             </div>

//             {/* Skills Section */}
//             <div className='container'>
//                 <div className="mx-auto py-8">
//                     <h3 className='mb-4'>
//                         <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                             {subtitle2}
//                             {/* Skills Utilized */}
//                         </span>
//                     </h3>

//                     <ul className="list-disc list-inside text-lg">
//                         <li>IntelliJ</li>
//                         <li>Java</li>
//                         <li>GUI Manager</li>
//                         {/* Add more skills as needed */}
//                     </ul>
//                 </div>
//             </div>
            
//             {/* What I Learned Section */}
//             <div className='container'>
//                 <div className="mx-auto py-8">
//                     <h3 className='mb-4'>
//                         <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                             {subtitle3}
//                             {/* What I Learned */}
//                         </span>
//                     </h3>

//                     <p className="text-lg">
//                         {description3}
//                         {/* Building DiamondStatTrax taught me valuable skills in full-stack development, including frontend design, backend API integration, and database management.
//                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. */}
//                     </p>
//                 </div>
//             </div>

//             {/* <Link href="/">
//                 <button className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10 '>
//                     <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
//                         Go back to Home Page
//                     </span>
//                 </button>
//             </Link> */}
//         </div>
//   );
// };

// export default ProjectRoute;

{/* -------------------------------------------------------------------------------
/* IMAGE BANNER IDEAS - DIDN'T ENTIRELY WORK */ }

        {/* <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]"> */}
            {/* Image Banner Section */}
            {/* <div className="relative w-screen h-80">
                <Image
                    src="/images/projects/project-1.png"
                    layout="fill"
                    objectFit="cover"
                />
            </div> */}

            {/* <div className="block max-w-sm rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('/images/projects/project-1.png')" }}>
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
                    Card title
                </h5>

                <p class="mb-4 text-base text-neutral-600 text-white  dark:text-neutral-200">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                {/* <button
                    type="button"
                    class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-twe-ripple-init>
                    Button
                </button> */}
            {/* </div> */}

            {/* <div className="mb-8">
                <Image
                    src="/images/projects/project-1.png"
                    width={1200}
                    height={100}
                    layout="responsive"
                />
            </div> */}

// import React from 'react'

// export default function DiamondStatTrax() {
//   return (
//     <section className=''>
//         <div className=''>
//             <h1>DiamondStatTrax Page</h1>
//             <p>This is the content of the DiamondStatTrax page.</p>
//         </div>
//     </section>
//   )
// }
