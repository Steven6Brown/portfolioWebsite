import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/project-5.png';

const PSUHomecomingWebsite = () => {
    // Define the description and skills data
    const description1 = (
        <>
            <p>
                The Orange Pi 5 Plus Setup and Configuration Document project involved creating a comprehensive guide in Markdown for setting up and configuring an Orange Pi 5 Plus, a single-board computer. 
                This document serves as a detailed resource for self-learning and reference, covering various aspects from initial setup to advanced configurations.
            </p>
        </>
    );

    const description2 = ['Markdown', 'Technical Writing', 'System Configuration', 'Hardware Configuration (Orange Pi 5 Plus)']; // Skills array

    const description3 = (
        <>
            <p>
                Developing the Orange Pi 5 Plus Setup and Configuration Document in Markdown enhanced my skills in technical writing and documentation. 
                I gained proficiency in structuring complex information into clear, step-by-step instructions, ensuring ease of understanding for readers at all skill levels. 
                Through this project, I honed my skills in system configuration, documentation with Markdown, and troubleshooting hardware and software issues specific to the Orange Pi 5 Plus platform.
            </p>

            <br></br>

            <p className='mb-8'>
                This project underscored the importance of clarity and organization in technical documentation, emphasizing the need for precise instructions and comprehensive coverage of setup procedures. 
                It also provided practical experience in self-directed learning and troubleshooting, enhancing my capability to independently research and implement solutions in technical projects.
                This project enabled me to deepen my understanding of single-board computer setups, especially with the Orange Pi 5 Plus. 
                I gained proficiency in documenting technical processes using Markdown efficiently. Moreover, troubleshooting challenges during setup improved my problem-solving abilities in hardware and software integration.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="Orange Pi 5 Plus Setup"
                planguage="Markdown Documentation"
                subtitle1="About The Orange Pi 5 Plus Setup"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="What I Learned"
                description3={description3}
                codebutton=''
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
