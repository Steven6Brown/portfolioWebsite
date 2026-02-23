import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/soc.png';

const PSUHomecomingWebsite = () => {
    // Define the description and skills data
    const description1 = (
        <>
            <p>
                The Security Operations Center (SOC) setup project is a collaborative effort aimed at establishing a robust infrastructure for monitoring and analyzing network security events in real-time. 
                Leveraging a combination of Dockerized applications and hardware components including Orange Pi 5 Plus, Raspberry Pi, ALFA WiFi Card, and RTL-SDR, our team designed a scalable and efficient SOC environment.
            </p>
        </>
    );

    const description2 = ['Docker', 'Kismet', 'Nagios', 'Elastic Search', 'Logstash', 'Kibana', 'Suricata', 'Orange Pi 5 Plus', 'Raspberry Pi', 'ALFA WiFi Card', 'RTL-SDR']; // Skills array

    const description3 = (
        <>
            <p>
                Working on the SOC setup project provided extensive hands-on experience in deploying and configuring essential security tools and infrastructure components. 
                I deepened my knowledge of Docker for containerizing security applications, enhancing scalability and portability across different environments. 
                Implementing Kismet and Suricata sharpened my skills in wireless network monitoring and intrusion detection, crucial for identifying potential threats and vulnerabilities. 
                Using ELK Stack facilitated centralized logging and real-time data analysis, enabling proactive threat detection and incident response.
            </p>

            <br></br>

            <p className='mb-8'>
                The project also underscored the significance of hardware selection and integration, optimizing performance and reliability in capturing network traffic and monitoring system health. 
                Collaborating with team members enhanced my proficiency in teamwork, communication, and problem-solving within a structured project framework, ensuring the SOC setup met operational requirements and security standards effectively.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="Security Operations Center (SOC)"
                planguage="Bash, Debain 12, Armbian"
                subtitle1="About The Security Operations Center Setup"
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
