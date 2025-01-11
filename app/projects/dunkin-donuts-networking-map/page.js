import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/project-6.png';

const DunkinDonutsNetworkingMap = () => {
    // Define the description and skills data
    const description1 = (
        <>
            <p>
                The networking map for Dunkin' Donuts' multiple locations in New York, New York outlines the key components and structure necessary to support their operations. 
                It includes the Main Site with a star topology, secure Site-to-Site connectivity between stores, and an in-depth layout of devices and network components. 
                We have utilized Verizon FIOS as the ISP, implementing private IP addresses for the VPN and securing all transactions with encryption. 
                The design also integrates both wired and wireless connectivity solutions, ensuring seamless communication between various systems like kiosks, mobile ordering, and VoIP services. 
                Multiple network diagrams further illustrate this design, optimizing operational flow and ensuring security at every level.
            </p>
        </>
    );

    const description2 = ['Network Design and Topology', 'Site-to-Site VPN Configuration and Security Measures', 'Network Device Configuration (Routers, Switches, Servers)', 'Implementation of ACLs, Firewalls, and PCI-DSS Compliance', 'Subnetting, IP Address Mapping, and Troubleshooting Connectivity Issues']; // Skills array

    const description3 = (
        <>
            <p>
                Throughout this project, I gained hands-on experience with designing and implementing a complex network for a multi-location business. 
                I developed a deeper understanding of how to establish secure and reliable site-to-site connectivity using a private IP VPN, ensuring all locations are efficiently linked together. 
                I also learned the importance of robust security measures, such as VPNs, firewalls, and access control lists, to protect sensitive customer and transaction data.
            </p>

            <br></br>

            <p className='mb-8'> 
                In particular, the necessity of PCI-DSS compliance for securing payment information was highlighted, and I became familiar with tools and practices to ensure that sensitive data is encrypted and properly protected. 
                Additionally, I learned about the challenges and costs associated with deploying physical infrastructure like fiber optic cables in urban areas, which influenced our decision to use Verizon FiOS for cost-effective and reliable connectivity. 
                This project enhanced my technical skills in subnetting, network configuration, and security, and gave me a better understanding of how these elements come together to support a business’s operations.
            </p>
        </>
    );
    
    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="Dunkin' Donut's Networking Map"
                planguage="Networking"
                subtitle1="About The Networking Map"
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

export default DunkinDonutsNetworkingMap;

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
