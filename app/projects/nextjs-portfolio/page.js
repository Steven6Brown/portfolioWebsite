import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/project-2.png';

const NextjsPortfolio = () => {
    // Define the description and skills data
    const description1 = (
        <>
            <p>
                Designing my portfolio website has been a challenging yet rewarding journey that spanned over four months. 
                As a self-taught developer, I embarked on this project to showcase my skills, creativity, and dedication to web development. 
                Using VS Code as my primary development environment, I built the entire site from scratch with a focus on clean, efficient code and responsive design.
            </p>

            <br></br>

            <p>
                I aimed to create a website that not only highlights my technical skills but also reflects my personal style and attention to detail. 
                The process involved meticulous planning and execution, from conceptualizing the layout and structure to implementing the design and interactive elements. 
                Each section of the website was carefully crafted to ensure a seamless user experience, with intuitive navigation and visually appealing aesthetics.
            </p>

            <br></br>

            <p>
                One of the main goals of this project was to demonstrate my proficiency in modern web development technologies. 
                By utilizing HTML for structure, JavaScript for interactivity, and Tailwind CSS for styling, I was able to create a dynamic and responsive website that adapts well to different devices and screen sizes. 
                The use of Tailwind CSS, in particular, allowed me to rapidly prototype and refine the design, making it easier to experiment with different styles and layouts.
            </p>

            <br></br>

            <p>
                Throughout the development process, I continuously iterated on the design based on feedback and testing. 
                I focused on optimizing the performance and accessibility of the site, ensuring that it loads quickly and is easy to navigate for all users, including those with disabilities. 
                The project also provided an opportunity to enhance my problem-solving skills, as I encountered and resolved various challenges related to browser compatibility, responsive design, and JavaScript functionality.
            </p>

            <br></br>

            <p>
                Overall, this project has been a valuable learning experience that has deepened my understanding of web development and design principles. 
                It has equipped me with the skills and confidence to tackle more complex projects in the future, and it stands as a testament to my growth and dedication as a self-taught developer.
            </p>
        </>
    );

    const description2 = ['HTML', 'JavaScript', 'Tailwind CSS']; // Skills array

    const description3 = (
        <>
            <p>
                Through this project, I significantly improved my coding practices, particularly in writing clean and maintainable code. 
                I developed a deeper understanding of responsive design principles, ensuring my website looks great on all devices, from desktops to smartphones.
                Implementing interactive features with JavaScript enhanced my ability to manipulate the DOM, handle events, and create a more engaging user experience. 
                Using Tailwind CSS extensively helped me quickly prototype designs and implement complex layouts with ease, leveraging its utility classes to achieve a consistent and scalable design system.
            </p>

            <br></br>

            <p>
                Throughout the development process, I encountered numerous challenges and bugs, which improved my problem-solving and debugging skills. 
                Managing this project over several months taught me valuable project management skills, including setting milestones, managing time effectively, and prioritizing tasks to keep the project on track. 
                Finally, creating a polished portfolio required meticulous attention to detail, from pixel-perfect alignment to smooth animations, reinforcing the importance of fine-tuning every aspect of the design. 
                This project not only resulted in a professional portfolio that I am proud of but also significantly advanced my skills as a web developer, preparing me for future projects and challenges in the field.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="Next.js Portfolio"
                planguage="VS Code, Next.js"
                subtitle1="About My Portfolio Design"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="What I Learned"
                description3={description3}
                codebutton='https://github.com/Steven6Brown/portfolioWebsite'
            />
        </div>
  );
};

export default NextjsPortfolio;

//-------------------------------------------------------------------------------
/* CODE WITHOUT SKILLS ARRAY */

// import React from 'react';
// import ProjectRoute from '@/app/components/ProjectRoute';
// import ProjectImage from '@/public/images/projects/project-2.png';

// const NextjsPortfolio = () => {
//   return (
//     <div>
//         <ProjectRoute 
//             image={ProjectImage}
//             title="Next.js Portfolio"
//             planguage="HTML, JavaScript, TailwindCSS"
//             subtitle="About My Portfolio Design"
//             description={`DiamondStatTrax is an innovative project that aims to streamline data tracking and analysis for diamond industry businesses.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu ut enim malesuada congue. Proin feugiat nunc vitae velit sagittis, ac cursus erat volutpat.`}
//         />
//     </div>
//   );
// };

// export default NextjsPortfolio;

//-------------------------------------------------------------------------------
/* PRIOR FUNCTION CODE */

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const NextjsPortfolio = () => {
//   return (
//     <div>
//         <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
//             {/* Image Banner Section */}
//             <div className="mb-8">
//                 <Image
//                     src="/images/projects/project-2-2.png"
//                     width={1200}
//                     height={100}
//                     layout="responsive"
//                 />
//             </div>

//             {/* About Section */}
//             <div className='container'>
//                 <div className="mx-auto py-8">
//                     <h3 className='mb-4'>
//                         <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                             About My Portfolio Design
//                         </span>
//                     </h3>

//                     <p className="text-lg">
//                         DiamondStatTrax is an innovative project that aims to streamline data tracking and analysis for diamond industry businesses.
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu ut enim malesuada congue. Proin feugiat nunc vitae velit sagittis, ac cursus erat volutpat.
//                     </p>
//                 </div>
//             </div>

//             {/* Skills Section */}
//             <div className='container'>
//                 <div className="mx-auto py-8">
//                     <h3 className='mb-4'>
//                         <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                             Skills Utilized
//                         </span>
//                     </h3>

//                     <ul className="list-disc list-inside text-lg">
//                         <li>Next.js</li>
//                         <li>HTML</li>
//                         <li>TailwindCSS</li>
//                         <li>JavaScript</li>
//                         <li>Virtual Machines</li>
//                         <li>VS Code</li>
//                         {/* Add more skills as needed */}
//                     </ul>
//                 </div>
//             </div>
            
//             {/* What I Learned Section */}
//             <div className='container'>
//                 <div className="mx-auto py-8">
//                     <h3 className='mb-4'>
//                         <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                             What I Learned
//                         </span>
//                     </h3>

//                     <p className="text-lg">
//                         Building DiamondStatTrax taught me valuable skills in full-stack development, including frontend design, backend API integration, and database management.
//                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                     </p>
//                 </div>
//             </div>

//             <Link href="/">
//                 <button className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10 '>
//                     <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
//                         Go back to Home Page
//                     </span>
//                 </button>
//             </Link>
//         </div>
//     </div>
//   );
// };

// export default NextjsPortfolio;

// // import React from 'react'

// // export default function DiamondStatTrax() {
// //   return (
// //     <section className=''>
// //         <div className=''>
// //             <h1>DiamondStatTrax Page</h1>
// //             <p>This is the content of the DiamondStatTrax page.</p>
// //         </div>
// //     </section>
// //   )
// // }
