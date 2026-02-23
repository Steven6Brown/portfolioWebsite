"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedinIn, FaRegFileAlt } from "react-icons/fa";
import { FaGithub, FaEnvelope } from "react-icons/fa6";

const ConnectSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send message');
            
            setEmailSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again or reach out directly via LinkedIn.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className='container mx-auto py-8'>
            <div className='text-center mb-8' data-aos="fade-up">
                <h3 className='mb-2'>
                    <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
                        Contact
                    </span>
                </h3>
                <h2 className='text-white mb-3'>Let's Connect</h2>
                <p className='text-bt-grey mb-4 max-w-md mx-auto'>
                    I'm actively looking for new opportunities in cybersecurity and AI. 
                    Whether you have a question, an opportunity, or just want to say hello — 
                    my inbox is always open!
                </p>

                {/* Social Icons */}
                <div className='flex flex-row py-2 space-x-8 justify-center mb-8'>
                    <div className='flex flex-col items-center gap-2'>
                        <Link href='https://www.linkedin.com/in/steven-b-4a699b218/'>
                            <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                                <FaLinkedinIn className="h-6 w-6" />
                            </button>
                        </Link>
                        {/* <span className='text-gray-400 text-sm'>LinkedIn</span> */}
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <Link href='https://github.com/Steven6Brown'>
                            <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                                <FaGithub className="h-6 w-6" />
                            </button>
                        </Link>
                        {/* <span className='text-gray-400 text-sm'>GitHub</span> */}
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <Link href='/files/sb-updatedresume2.pdf'>
                            <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                                <FaRegFileAlt className="h-6 w-6" />
                            </button>
                        </Link>
                        {/* <span className='text-gray-400 text-sm'>Resume</span> */}
                    </div>

                    {/* <div className='flex flex-col items-center gap-2'>
                        <Link href='mailto:brownsteven21329@gmail.com'>
                            <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                                <FaEnvelope className="h-6 w-6" />
                            </button>
                        </Link>
                        <span className='text-gray-400 text-sm'>Email</span>
                    </div> */}
                </div>
            </div>

            {/* Contact Form */}
            <div className='max-w-xl mx-auto' data-aos="fade-up" data-aos-delay="100">
                {emailSubmitted ? (
                    <div className='text-center p-8 bg-[#1a1a1a] rounded-xl border border-gray-800'>
                        <h3 className='text-p-green mb-2'>Message Sent!</h3>
                        <p className='text-gray-400'>Thanks for reaching out — I'll get back to you as soon as possible!</p>
                    </div>
                ) : (
                    <form className='flex flex-col gap-4 bg-[#1a1a1a] p-8 rounded-xl border border-gray-800' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name' className='text-white block mb-2 font-semibold text-sm'>Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                className='bg-[#121212] border border-gray-700 text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-p-green'
                                placeholder='John Doe'
                            />
                        </div>

                        <div>
                            <label htmlFor='email' className='text-white block mb-2 font-semibold text-sm'>Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required
                                className='bg-[#121212] border border-gray-700 text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-p-green'
                                placeholder='john@example.com'
                            />
                        </div>

                        <div>
                            <label htmlFor='subject' className='text-white block mb-2 font-semibold text-sm'>Subject</label>
                            <input
                                type='text'
                                id='subject'
                                name='subject'
                                required
                                className='bg-[#121212] border border-gray-700 text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-p-green'
                                placeholder='Job Opportunity'
                            />
                        </div>

                        <div>
                            <label htmlFor='message' className='text-white block mb-2 font-semibold text-sm'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                required
                                rows={5}
                                className='bg-[#121212] border border-gray-700 text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-p-green'
                                placeholder="Let's talk about..."
                            />
                        </div>

                        {error && <p className='text-red-500 text-sm'>{error}</p>}

                        <button
                            type='submit'
                            disabled={isLoading}
                            className='bg-gradient-to-br from-p-green to-s-blue text-black font-bold py-3 px-5 rounded-lg w-full hover:opacity-90 transition-opacity duration-200'
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ConnectSection;