'use client';

import React, { useTransition, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProfileImage } from './ProfileImage';
import { StatsSection } from './StatsSection';

const TAB_DATA = [
    {
        title: 'Education',
        id: 'education',
        content: (
            <div>
                <h4 className='font-bold text-white border-b mb-1'>The Pennsylvania State University</h4>
                <div className='pl-4 mb-4'>
                    <ul className='list-disc'>
                        <li>B.S. Cybersecurity Analytics and Operations — May 2025</li>
                        <li>Major GPA: 3.83/4.0</li>
                        <li>Minors: Security Risk Analysis (SRA) and Information Sciences Technology (IST)</li>
                        <li>Vice Provost Award</li>
                        <li>Dean's List — Fall 2022, Fall 2023, Spring 2024, Spring 2025</li>
                    </ul>
                </div>
                {/* <h4 className='font-bold text-white border-b mb-1'>High School</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>High School Diploma — 4.0 GPA</li>
                    </ul>
                </div> */}
            </div>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <div>
                <h4 className='font-bold text-white border-b mb-1'>Technical Experience</h4>
                <div className='pl-4 mb-4'>
                    <ul className='list-disc'>
                        <li>Digital Cloak LLC — Technical Intern (June 2024 – August 2024)</li>
                        <li>Penn State Learning Assistant — Cyber 262 & IST 456 (Jan 2023 – Dec 2024)</li>
                        <li>Penn State Homecoming — Technology Captain (Spring 2024 – Fall 2024)</li>
                        <li>Competitive Cyber Security Organization (CCSO)</li>
                        <li>HackTheBox Academy</li>
                    </ul>
                </div>
                <h4 className='font-bold text-white border-b mb-1'>Work Experience</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>Men's Wearhouse — Store Lead</li>
                        <li>AG Parts Worldwide Inc. — Computer Technician</li>
                        <li>The LandTek Group</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <div>
                <h4 className='font-bold text-white border-b mb-1'>Federal</h4>
                <div className='pl-4 mb-4'>
                    <ul className='list-disc'>
                        <li>NSA IST Certification — May 2025</li>
                        <li>DOD Mandatory Controlled Unclassified Information (CUI) Training — June 2024</li>
                    </ul>
                </div>

                <h4 className='font-bold text-white border-b mb-1'>Fortinet Training Institute</h4>
                <div className='pl-4 mb-4'>
                    <ul className='list-disc'>
                        <li>Introduction to the Threat Landscape 3.0 — December 2025</li>
                        <li>Getting Started in Cybersecurity 3.0 — December 2025</li>
                    </ul>
                </div>

                <h4 className='font-bold text-white border-b mb-1'>LinkedIn Certifications</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>Cyber Awareness Challenge Certificate</li>
                        <li>Cybersecurity Awareness: Cloud Security</li>
                        <li>Cybersecurity Awareness: Cybersecurity Terminology</li>
                        <li className='mb-2'>Cybersecurity: Key Policies and Resources</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: 'Interests',
        id: 'interests',
        content: (
            <div>
                <div className="flex flex-wrap gap-4">
                    <div className="w-1/3">
                        <h4 className='font-bold text-white border-b mb-1'>Outdoors</h4>
                        <div className='pl-4 pb-4'>
                            <ul className='list-disc'>
                                <li>Backcountry camping under the stars.</li>
                                <li>Multi-day canoe expeditions on remote rivers.</li>
                                <li>Challenging hikes with scenic views.</li>
                                <li>Fly-fishing in secluded streams.</li>
                                <li>Hunting and wildlife tracking.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <h4 className='font-bold text-white border-b mb-1'>Sports</h4>
                        <div className='pl-4 pb-4'>
                            <ul className='list-disc'>
                                <li>Competitive baseball leagues.</li>
                                <li>Weekend golf rounds with friends.</li>
                                <li>Bowling tournaments.</li>
                                <li>Pickup ice hockey games.</li>
                                <li>Casual basketball games.</li>
                                <li>Football and tailgates.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h4 className='font-bold text-white border-b mb-1'>Music</h4>
                        <div className='pl-4 pb-4'>
                            <ul className='list-disc'>
                                <li>Songwriting and performing on acoustic guitar.</li>
                                <li>Improvisation and composition on piano.</li>
                                <li>Exploring new arrangements on the ukulele.</li>
                                <li>Playing bass guitar in collaborative jam sessions.</li>
                                <li>Performing classical violin repertoire in ensembles.</li>
                                <li>Exploring diverse music.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

export const AboutSection = () => {
    const [tab, setTab] = useState('education');
    const [, startTransition] = useTransition();

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id='about' className='text-white container'>
            <div className='text-center' data-aos="fade-up">
                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue mb-2 inline-block'>
                    About Me
                </h3>
                <h2 className='text-white'>
                    Behind The Scenes
                </h2>
            </div>

            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8'>
                <div
                    className='mt-4 md:mt-0 text-left flex flex-col h-full'
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    <p className='text-base md:text-md' style={{ marginBottom: '1em' }}>
                        I'm Steven Brown, a Penn State graduate with a B.S. in Cybersecurity Analytics and Operations, graduating with a 3.83 major GPA and earning 
                        both the Vice Provost Award and multiple Dean's List honors. I also completed two minors in Security Risk Analysis (SRA) and Information Systems Technology (IST), 
                        strengthening my foundation in risk assessment, systems, and applied technology. I hold an NSA IST Certification and have hands-on experience in AI implementation, 
                        security infrastructure, and compliance frameworks, including NIST SP 800, CMMC, and OSINT.
                    </p>
                    <p className='text-base md:text-md' style={{ marginBottom: '1em' }}>
                        My passion for technology began early and has continued to grow through hands-on experience in cybersecurity and applied AI. 
                        During my internship at Digital Cloak LLC, I designed and trained a locally hosted AI cybersecurity compliance assistant, CloakAI, 
                        built from more than 150 regulatory and security documents to support analyst decision-making while maintaining strict data privacy. 
                        I also contributed to compliance workflows aligned with NIST SP 800, CMMC, incident response, and OSINT best practices. 
                        In parallel, I am developing GolfCaddie, an AI-powered personal golf assistant that delivers real-time shot advice and personalized club 
                        recommendations using PGA rules, swing training documentation, and user-specific performance data, allowing me to apply machine learning and 
                        software engineering principles beyond traditional security use cases.
                    </p>
                    <p className='text-base md:text-md'>
                        When I'm not immersed in tech, you'll find me exploring the outdoors, camping, fishing, or hitting the trails, or playing music on one of my many instruments. 
                        I bring the same curiosity, energy, and leadership to my work, whether managing a team at Men's Wearhouse or tackling a challenging cybersecurity problem. 
                        I'm passionate about learning and love diving into new skills and interests, always eager to explore pretty much everything that catches my attention.
                    </p>

                    <div className='flex flex-row mt-6 gap-2 flex-wrap'>
                        {TAB_DATA.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleTabChange(t.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                    tab === t.id
                                        ? 'bg-gradient-to-r from-p-green to-s-blue text-black'
                                        : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-700'
                                }`}
                            >
                                {t.title}
                            </button>
                        ))}
                    </div>

                    <div className='mt-4 p-4 bg-[#1a1a1a] rounded-xl border border-gray-800'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>

                <div
                    className='flex justify-center pl-8'
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <ProfileImage />
                </div>
            </div>

            <StatsSection />
        </section>
    );
};