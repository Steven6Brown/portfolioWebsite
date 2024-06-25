import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/project-4.png';

const PSUHomecomingWebsite = () => {
    // Define the description and skills data
    const description1 = 
        `Throughout history, statistical analysis and the process of monitoring statistics have significantly contributed to the success and progress of inventions, innovations, and especially hard work. Just as statistics are useful within large corporations, they prove heavily pertinent in the sports industry. Specifically in the well-known sport of Baseball, we have practiced statistical tracking in sports, even before the rapid growth of technology. This has allowed teams and players to compete amongst each other, in turn promoting a better, more competitive style of play. 
        DiamondStatTrax is designed for baseball enthusiasts who want to keep track of the statistics of baseball games they manage or play without the need for an internet connection.

        The DiamondStatTrax application provides a solution to a situation that often seems daunting to inexperienced people with newly developing and changing technology. Often, individuals involved in managing and playing the sport comprehend the game but may not fully understand the process of tracking and efficiently monitoring the game's progress.

        DiamondStatTrax is an innovative project that aims to streamline data tracking and analysis for diamond industry businesses.
    `;

    const description2 = ['Wordpress', 'Elementor']; // Skills array

    const description3 = 
        `Building DiamondStatTrax taught me valuable skills in full-stack development, including frontend design, backend API integration, and database management.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    `;

    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="PSU Homecoming Website"
                planguage="Web Design"
                subtitle1="About The Penn State Homecoming Website"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="What I Learned"
                description3={description3}
                codebutton='https://www.linkedin.com/in/steven-brown-4a699b218/'
            />
        </div>
  );
};

export default PSUHomecomingWebsite;

//-------------------------------------------------------------------------------
/* CODE WITHOUT SKILLS ARRAY */

// import React from 'react';
// import ProjectRoute from '@/app/components/ProjectRoute';
// import ProjectImage from '@/public/images/projects/project-4.png';

// const PSUHomecomingWebsite = () => {
//   return (
//     <div>
//         <ProjectRoute 
//             image={ProjectImage}
//             title="PSU Homecoming Website"
//             planguage="Wordpress, Elementor"
//             subtitle="About The Penn State Homecoming Website"
//             description={`DiamondStatTrax is an innovative project that aims to streamline data tracking and analysis for diamond industry businesses.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu ut enim malesuada congue. Proin feugiat nunc vitae velit sagittis, ac cursus erat volutpat.`}
//         />
//     </div>
//   );
// };

// export default PSUHomecomingWebsite;

//-------------------------------------------------------------------------------
/* PRIOR FUNCTION CODE */

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const PSUHomecomingWebsite = () => {
//   return (
//     <div>
//         <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
//             {/* Image Banner Section */}
//             <div className="mb-8">
//                 <Image
//                     src="/images/projects/project-4.png"
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
//                             About Penn State Homecoming Website
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
//                         <li>WordPress</li>
//                         <li>Elementor</li>
//                         <li>Web Design</li>
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

// export default PSUHomecomingWebsite;

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
