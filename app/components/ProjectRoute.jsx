'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoArrowBackOutline } from "react-icons/io5";
import { Footer } from '../components/Footer';

const ProjectRoute = ({ image, title, planguage, subtitle1, description1, subtitle2, description2, subtitle3, description3, codebutton, codebuttonlabel, repoPrivate, extraLinks }) => {
    
    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
            <main id="main-content" tabIndex={-1} className="flex flex-col flex-1">

            {/* Back Button - Top */}
            {/* <div className="container pt-10">
                <Link href={'/#projects'}>
                    <button className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group'>
                        <IoArrowBackOutline className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                        <span className="text-sm font-semibold">Back to Projects</span>
                    </button>
                </Link>
            </div> */}

            {/* Image Banner Section */}
            <div className="relative w-full h-80 mt-4">
                <Image
                    src={image}
                    alt={`${title} project banner`}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-h-black via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end items-start p-8">
                    <div className="border-l-4 border-p-green pl-4">
                        <h1 className="text-white mb-2 text-3xl lg:text-5xl">{title}</h1>
                        <p className="text-p-green font-semibold">{planguage}</p>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="container" data-aos="fade-up">
                <div className="mx-auto mt-10 mb-6 p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
                    <h2 className="mb-4 text-2xl lg:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle1}
                        </span>
                    </h2>
                    <div className="text-gray-300 text-base leading-relaxed">
                        {description1}
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="mx-auto mb-6 p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
                    <h2 className="mb-4 text-2xl lg:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle2}
                        </span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {description2 && Array.isArray(description2) && description2.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-[#121212] border border-gray-700 text-gray-300 hover:border-p-green hover:text-white transition-colors duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* What I Learned Section */}
            <div className="container" data-aos="fade-up" data-aos-delay="200">
                <div className="mx-auto mb-6 p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
                    <h2 className="mb-4 text-2xl lg:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                            {subtitle3}
                        </span>
                    </h2>
                    <div className="text-gray-300 text-base leading-relaxed">
                        {description3}
                    </div>
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="container mb-10" data-aos="fade-up" data-aos-delay="300">
                <div className="mx-auto flex gap-4">
                    <Link href={'/#projects'}>
                        <button className='flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-300 hover:text-white hover:border-p-green transition-all duration-200'>
                            <IoArrowBackOutline className="h-5 w-5" />
                            Back to Projects
                        </button>
                    </Link>

                    {repoPrivate && (
                        <button
                            type="button"
                            disabled
                            aria-disabled="true"
                            className='px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-300 font-semibold cursor-not-allowed'
                        >
                            Repo is private
                        </button>
                    )}

                    {codebutton && codebutton !== '' && (
                        <Link href={codebutton} target="_blank">
                            <button className='px-6 py-3 rounded-lg bg-gradient-to-r from-p-green to-s-blue text-black font-bold hover:opacity-90 transition-opacity duration-200'>
                                {codebuttonlabel || 'View Code'}
                            </button>
                        </Link>
                    )}

                    {extraLinks && extraLinks.map((link) => (
                        <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                            <button className='px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-300 font-semibold hover:text-white hover:border-p-green transition-all duration-200'>
                                {link.label}
                                <span className="sr-only"> (opens in a new tab)</span>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>

            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default ProjectRoute;