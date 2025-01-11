//-------------------------------------------------------------------------------
/* SEMI-WORKING CONNECT SECTION */

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";

const ConnectSection = () => {

    {/* EMAIL FORM CODE */}
    // const [emailSubmitted, setEmailSubmitted] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value,
    //     };

    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = "/api/send";

    //     console.log(JSONdata)
    
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSONdata,
    //     };
    
    //     try {
    //         // await sendContact(JSONdata)

    //         const response = await fetch(endpoint, options);
    
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    
    //         const resData = await response.json();
    //         console.log("Message sent successfully:", resData);
    
    //         // Update state to indicate email was submitted successfully
    //         setEmailSubmitted(true);
    //     } catch (error) {
    //         console.error("Error sending message:", error);
    //         // Handle error here (e.g., display an error message to the user)
    //     }
    // };
    
    // VIDEO CODE

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value,
    //     };

    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = "/api/send";

    //     // Form the request for sending data to the server.
    //     const options = {
    //         // The method is POST because we are sending data.
    //         method: "POST",
    //         // Tell ther server we're sending JSON.
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         // Body of the request is the JSON data we created above.
    //         body: JSONdata,
    //     }

    //     const response = await fetch(endpoint, options);
    //     const resData = await response.json();

    //     if (response.status === 200) {
    //         console.log("Message sent.");
    //         setEmailSubmitted(true);
    //     }
    // };

  return (
    <section id="contact" className='flex flex-col items-center justify-center text-center'> {/* relative */} {/* FOR GRID REPLACE 'place-contents-center" with: md:grid-cols-2 gap-4 container */}
        {/* DESIGN IDEA */}
        {/* <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-p-green to-s-blue rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 trasnform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'></div> */}
        <div className='mb-8'>
            <div>
                <h3  className='mb-2'>
                    <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
                        Contact
                    </span>
                </h3>

                <h2 className='text-white mb-3'>
                    Let's Connect
                </h2>

                <p className='text-bt-grey mb-4 max-w-md'>
                    I'm currently looking for new opportunities, 
                    my inbox is always open whether you have a question or just want to say hello! 
                    I'm looking forward to connecting with you! Feel free to reach out via LinkedIn or GitHub.
                    I'll do my best to get back to you!
                </p>
            </div>

            {/* Buttons/Icons */}
            <div className='socials flex flex-row py-2 space-x-14 justify-center'>
                {/* LinkedIn */}
                <Link href='https://www.linkedin.com/in/steven-b-4a699b218/'>
                    <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                        <FaLinkedinIn className="h-6 w-6" />
                    </button>
                </Link>

                {/* GitHub */}
                <Link href='https://github.com/Steven6Brown'>
                    <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                        <FaGithub className="h-6 w-6" />
                    </button>
                </Link>

                {/* Resume */}
                <Link href='/files/sb-updatedresume.pdf'>
                    <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                        <FaRegFileAlt className="h-6 w-6" />
                    </button>
                </Link>

                {/* Email Button */}
                <Link href="mailto:your-email@example.com?subject=Inquiry&body=Hello, my name is *NAME*, I would like to learn more about you!">
                    <button className='p-4 rounded-full bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                        <FaEnvelope className="h-6 w-6" />
                    </button>
                </Link>

                {/* Instagram - CREATE PROFESSIONAL INSTAGRAM */}
                {/* <Link href='https://www.instagram.com/stevie6brown/'>
                    <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'> POSSIBLY CHANGE text-black TO text-white
                        <FaInstagram className="h-6 w-6" />
                    </button>
                </Link>
                */}
            </div>

            {/* WRITTEN BUTTONS */}
            {/* <div className='flex justify-center mt-6'>
                <Link href={'https://www.linkedin.com/in/steven-brown-4a699b218/'}>
                    <button className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10 '>
                        <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
                            LinkedIn
                        </span>
                    </button>
                </Link>

                <Link href='/files/sb-resume2.pdf' target='_blank' rel='noopener noreferrer'>
                    <button className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
                            Resume
                        </span>
                    </button>
                </Link>
            </div> */}
        </div>

        {/* LOGO AND MESSAGE IDEA */}
        {/* <div classname='flex flex-col'>
            <Image
                className='mb-4'
                src='/images/footer/sb-logo-text-horizontal.png' 
                width={600} 
                height={600}
            />
            <p className='text-bt-grey mb-4 max-w-md'>
                Looking forward to connecting with you! Feel free to reach out via LinkedIn or GitHub.
            </p>
        </div> */}
      
        {/* EMAIL FORM 
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>

                {/* NAME 
                <div className='mb-6'>
                    <label htmlFor='text' className='text-white block mb-2 font-bold'>
                        Name
                    </label>
            
                    <input 
                        type='text'
                        id='name'
                        required
                        className='bg-e-black border border-e-border placeholder-e-placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Steven Brown'
                    />
                </div>

                {/* EMAIL 
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block mb-2 font-bold'>
                        Email
                    </label>
            
                    <input 
                        name="email"
                        type='email'
                        id='email'
                        required
                        className='bg-e-black border border-e-border placeholder-e-placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='stevenbrown@gmail.com'
                    />
                </div>

                {/* SUBJECT 
                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block mb-2 font-bold'>
                        Subject
                    </label>
            
                    <input 
                        name="subject"
                        type='text'
                        id='subject'
                        required
                        className='bg-e-black border border-e-border placeholder-e-placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just Saying Hello'
                    />
                </div>

                {/* TEXT AREA 
                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block mb-2 font-bold'>
                        Message
                    </label>
            
                    <textarea 
                        name='message'
                        id='message'
                        required
                        className='bg-e-black border border-e-border placeholder-e-placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's Talk About..."
                    />
                </div>

                {/* SUBMIT BUTTON 
                <div>
                    <button
                        type='submit' 
                        className='bg-gradient-to-br from-p-green to-s-blue text-h-black font-medium py-2.5 px-5 rounded-lg w-full'
                    >
                        Send Message
                    </button>
                </div>

                {
                    // If the email was submitted successfully, show a success message.
                    emailSubmitted && (
                        <p className='text-p-green text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }

                {/* POSSIBLE BUTTON IDEA 
                {/* <button 
                    className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10 '>
                        <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
                            LinkedIn
                        </span>
                </button> 
            </form>
        </div>
        */}
    </section>
  )
}

export default ConnectSection;

//-------------------------------------------------------------------------------
/* FIRST ATTEMPT */

// import React from 'react'
// import Link from 'next/link';
// import { FaLinkedin } from "react-icons/fa6";
// import Image from 'next/image'; // Import Image from next/image

// const ConnectSection = () => {
//   return (
//     <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
//         <div className='container mb-8'>
//             <div id='skills' className="mx-auto py-8">
//                 <h3 className='mb-2'>
//                     <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                         Let's Connect
//                     </span>
//                 </h3>

//                 <p className='text-bt-grey mb-4 max-w-md'>
//                     I'm currently looking for new opportunities, my inbox is always open whether you have a question or just want to say hi! 
//                     I'll do my best to get back to you!
//                 </p>
//             </div>

//         {/* Buttons */}
//             <div className='socials flex flex-row gap-2'>
//                 <Link href={'https://www.linkedin.com/in/steven-brown-4a699b218/'}>
//                     <button className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10 '>
//                         <Image src={FaLinkedin} alt="Linkedin Icon" />
                            
//                         {/* <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
//                             LinkedIn
//                         </span> */}
//                     </button>
//                 </Link>
//             </div>
//         </div>
        
//         <div>
//             <form className='flex flex-col gap-4'>
//                 <label htmlFor='email' className='text-white'>
//                     Your Email
//                 </label>

//                 <input 
//                     type='email'
//                     id='email'
//                     required placeholder='stevenbrown@gmail.com'
//                 />
//             </form>
//         </div>
//     </section>
//   )
// }

// export default ConnectSection