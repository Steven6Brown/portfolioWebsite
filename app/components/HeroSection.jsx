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
        <div className='min-h-screen grid place-content-center'>
            <div className='flex flex-col justify-center items-center'>

                {/* Main Title */}
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-bt-grey text-base sm:text-lg mb-6 lg:text-xl'>Thanks for stopping by!</p>
                    <h1>I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue'>Steven Brown</span></h1>
                    <h2>
                        <TypeAnimation
                            sequence={[
                                'A Cybersecurity Professional',
                                1500,
                                'A Penn State Graduate',
                                1500,
                                'An AI & Automation Enthusiast',
                                1500,
                                'An NSA Certified Professional',
                                1500,
                                'A Leader',
                                1500,
                                // 'Figure It Out. Adapt and Overcome',
                                // 2000, // slightly longer so it stays on screen
                            ]}
                            wrapper='span'
                            speed={1}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='mt-8 text-bt-grey text-center w-[75%]'>
                        Penn State graduate with a B.S. in Cybersecurity Analytics and Operations, NSA IST Certification, and hands-on experience in AI implementation, 
                        security infrastructure, and compliance. Passionate about leveraging AI and automation to solve real-world security challenges.
                    </p>

                    <p className="text-sm sm:text-base text-white mt-6 italic">
                        <strong>MY APPROACH: “FIGURE IT OUT” - “ADAPT AND OVERCOME”</strong>
                    </p>
                </div>

                {/* ICON BUTTONS */}
                <div className='flex justify-center mt-6'>
                    <div id="smallButton">
                        <Link href={'https://www.linkedin.com/in/steven-b-4a699b218/'}>
                            <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'>
                                <FaLinkedinIn className="h-6 w-6" />
                            </button>
                        </Link>
                    </div>
                    
                    <div id="smallButton">
                        <Link href={'https://github.com/Steven6Brown'}>
                            <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'>
                                <FaGithub className="h-6 w-6" />
                            </button>
                        </Link>
                    </div>
                    
                    <div>
                        <Link href={'/files/sb-resume.pdf'}>
                            <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                                <FaRegFileAlt className="h-6 w-6" />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};

export default HeroSection;