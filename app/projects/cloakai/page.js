import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/project-7.png';

const CloakAI = () => {
    // Define the description and skills data
    const description1 = (
        <>
            <p>
                CloakAI is an AI-driven tool designed to provide Digital Cloak employees with swift and accurate responses to compliance and IT-related queries. 
                Leveraging the power of Artificial Intelligence (AI) and Machine Learning (ML), CloakAI ensures that users benefit from these technologies in a secure, locally-hosted environment, safeguarding sensitive data. 
                The platform is built on Meta's open-source Llama3 model, offering extensive customization options while maintaining a user-friendly web interface through Open WebUI. 
                This setup is hosted on a Debian 12 desktop, enabling secure remote access within the organization's network.
            </p>

            <br></br>

            <p>
                Through the CloakAI project, I gained valuable insights into the effective use of Artificial Intelligence (AI) and Machine Learning (ML) in secure environments. 
                The primary aim was to create a secure, locally hosted AI platform that organizations can use within the confines of the company, ensuring it does not extend to any external networks. 
                This allowed the platform to handle sensitive information, including Personally Identifiable Information (PII), without compromising security. 
                I learned how to implement the Llama3 model to create a powerful yet secure tool for aiding compliance and IT support. 
                This experience emphasized the importance of designing a user-friendly, interactive interface, which I achieved using Open WebUI. 
                It was critical to ensure that the admin panel was intuitive while still offering powerful customization options to manage users efficiently. 
                Additionally, I developed a deeper understanding of security best practices, particularly in terms of managing data, setting user permissions, and keeping the system isolated from external networks to mitigate risks. 
                I also learned how to set up secure remote access within a local network, ensuring that users could easily access the system while maintaining strict control over who had access to its functionalities.
            </p>
        </>
    );

    const description2 = ['AI & ML', 'System Administration', 'Networking', 'Security', 'Goverment Compliance', 'Docker', 'llama3', 'OpenWeb-UI', 'Debian12']; // Skills array

    const description3 = (
        <>
            <p>
                AI/ML Integration: Implemented the Llama3 model for robust and customizable AI capabilities.
                Secure Data Handling: Ensured data security by utilizing a locally-hosted model with no external internet connectivity.
                Web Development: Developed a streamlined web interface using Open WebUI, focused on user accessibility and admin control.
                System Administration: Set up and managed a secure Debian 12 server environment with remote access configurations.
                User Management: Created an admin panel with advanced features like user permissions, restrictions, and multi-admin support.
            </p>

            <br></br>

            <p className='mb-8'>
                Through the development of CloakAI, I learned the importance of balancing powerful AI/ML capabilities with strict data security measures, ensuring that the organization can reap the benefits of AI without compromising sensitive information. 
                I also gained experience in integrating user-friendly interfaces with complex backend systems, and the significance of effective user management in a secure, AI-powered environment. 
                Finally, I enhanced my understanding of deploying and maintaining AI systems in a secure, isolated network, ensuring reliable remote access for users
            </p>
        </>
    );
    
    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="CloakAI"
                planguage="Atificial Intelligence / Machine Learning"
                subtitle1="About CloakAI"
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

export default CloakAI;

//-------------------------------------------------------------------------------
/* CODE WITHOUT SKILLS ARRAY */

// import React from 'react';
// import ProjectRoute from '@/app/components/ProjectRoute';
// import ProjectImage from '@/public/images/projects/project-3.png';

// const DunkinDonutsNetworkingMap = () => {
//   return (
//     <div>
//         <ProjectRoute 
//             image={ProjectImage}
//             title="Dunkin' Donut's Networking Map"
//             planguage="Wireshark"
//             subtitle="About The Networking Map"
//             description={`DiamondStatTrax is an innovative project that aims to streamline data tracking and analysis for diamond industry businesses.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu ut enim malesuada congue. Proin feugiat nunc vitae velit sagittis, ac cursus erat volutpat.`}
//         />
//     </div>
//   );
// };

// export default DunkinDonutsNetworkingMap;

//-------------------------------------------------------------------------------
/* PRIOR FUNCTION CODE */

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const DunkinDonutsNetworkingMap = () => {
//   return (
//     <div>
//         <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
//             {/* Image Banner Section */}
//             <div className="mb-8">
//                 <Image
//                     src="/images/projects/project-3.png"
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
//                             About Networking Map
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
//                         <li>Wireshark</li>
//                         <li>NAT Translation</li>
//                         <li>Lucid Chart</li>
//                         <li>IP Routing</li>
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

// export default DunkinDonutsNetworkingMap;

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
