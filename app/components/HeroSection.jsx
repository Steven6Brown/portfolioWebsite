"use client";
import React from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className='container'>
        <div className='h-screen grid place-content-center'>
            <div className='flex flex-col justify-center items-center'>

                {/* Main Title */}
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-bt-grey text-base sm:text-lg mb-6 lg:text-xl'>Thanks for stopping by!</p>
                    <h1>I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue'>Steven Brown</span></h1>
                    <h2>
                        <TypeAnimation
                            sequence={[
                                'A Cybersecurity Student',
                                1500, 
                                'A Learning Assistant',
                                1500,
                                'A Sales Associate',
                                1500,
                                'A Leader',
                                1500,
                            ]}
                            wrapper='span'
                            speed={1}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='mt-8 text-bt-grey text-center w-[75%]'>I'm a student at The Pennsylvania State University pursuing a bachelor's in Cybersecurity Analytics and Operations with minors in Security Risk Analysis (SRA) and Information Systems Technologies (IST).</p>
                </div>

                {/* ICON BUTTONS */}
                <div className='flex justify-center items-center mt-6 gap-2'>
                    <Link href={'https://www.linkedin.com/in/steven-brown-4a699b218/'}>
                        <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'> {/* POSSIBLY CHANGE text-black TO text-white */}
                            <FaLinkedinIn className="h-6 w-6" />
                        </button>
                    </Link>

                    <Link href={'https://github.com/Steven6Brown/portfolioWebsite'}> {/* ADD GITHUB LINK */}
                        <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'> {/* POSSIBLY CHANGE text-black TO text-white */}
                            <FaGithub className="h-6 w-6" />
                        </button>
                    </Link>

                    <Link href={'/files/sb-resume3.pdf'}>
                        <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'> {/* POSSIBLY CHANGE text-black TO text-white */}
                            <FaRegFileAlt className="h-6 w-6" />
                        </button>
                    </Link>
                </div>

                {/* WRITTEN BUTTONS */}
                {/* <div className='flex justify-center mt-6'>
                    <Link href={'https://www.linkedin.com/in/steven-brown-4a699b218/'}>
                        <button 
                            className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10 '>
                            <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
                                LinkedIn
                            </span>
                        </button>
                    </Link>

                    <Link href='/files/sb-resume2.pdf' target='_blank' rel='noopener noreferrer'>
                        <button 
                            className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
                                Resume
                            </span>
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>
    </section>
    );
};

export default HeroSection

    // <section className='h-screen grid place-content-center'>
    //   <div className='lg:justify-center'>
    //       <div className='col-span-7 text-center'>
    //           <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
    //               Thanks for stopping by!
    //           </p>
    //           <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>I'm 
    //               <span 
    //                   className='text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue'> Steven Brown
    //               </span>
    //               <br></br>
    //               <TypeAnimation
    //                   sequence={[
    //                       'A Cybersecurity Student',
    //                       1500, 
    //                       'A Learning Assistant',
    //                       1500,
    //                       'A Sales Associate',
    //                       1500,
    //                       'A Leader',
    //                       1500
    //                   ]}
    //                   wrapper='span'
    //                   speed={1}
    //                   repeat={Infinity}
    //               />
    //           </h1>
    //           <p className='text-[#ADB7BE] text-base sm:text-lg mt-6 mb-6 lg:text-xl'>
    //               I'm a student at The Pennsylvania State University pursuing a bachelor's in Cybersecurity Analytics and Operations with minors in Security Risk Analysis (SRA) and Information Systems Technologies (IST).
    //           </p>
    //           <div>
    //               {/* <button 
    //                   className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-200 text-black">LinkedIn
    //               </button> */}
    //               <a href="https://www.linkedin.com/in/steven-brown-4a699b218/" target="_blank" rel="noopener noreferrer">
    //                   <button 
    //                     className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10'>
    //                       <span className='block bg-[#121212] hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
    //                         LinkedIn
    //                       </span>
    //                   </button>
    //               </a>
    //               <a href="/files/sb-resume.pdf" target="_blank" rel="noopener noreferrer">
    //                   <button 
    //                       className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3'>
    //                       <span className='block bg-[#121212] hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
    //                         Resume
    //                       </span>
    //                   </button>
    //               </a>
    //           </div>
    //       </div>
    //       {/* <div className='col-span-5 mt-4 lg:mt-0'>
    //           <div 
    //               className='w-full h-auto flex items-center justify-center'>
    //           </div>
    //       </div> */}
    //   </div>
    // </section>