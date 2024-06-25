import React from 'react';
import SkillsCard from '../components/SkillsCard';
import { FaJava } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { FaLinux } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa";
import { IoTerminalOutline } from "react-icons/io5";
import { SiArcgis } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaWindows } from "react-icons/fa6";

const Skills = () => {
  const skills = [
    {
        id: 1,
        title: 'HTML',
        Icon: AiOutlineHtml5
    },
    {
        id: 2,
        title: 'Tailwind CSS',
        Icon: SiTailwindcss
    },
    {
        id: 3,
        title: 'JavaScript',
        Icon: RiJavascriptLine
    },
    {
        id: 4,
        title: 'SQL',
        Icon: BsFiletypeSql
    },
    {
        id: 5,
        title: 'Next.js',
        Icon: TbBrandNextjs
    },
    {
        id: 6,
        title: 'React',
        Icon: FaReact
    },
    {
        id: 7,
        title: 'Wordpress',
        Icon: FaWordpressSimple
    },
    {
        id: 8,
        title: 'Java',
        Icon: FaJava
    },
    {
        id: 9,
        title: 'Windows',
        Icon: FaWindows
    },
    {
        id: 10,
        title: 'Linux',
        Icon: FaLinux
    },
    {
        id: 11,
        title: 'Bash',
        Icon: IoTerminalOutline
    },
    {
        id: 12,
        title: 'ArcGis',
        Icon: SiArcgis
    },
  ];

  return (
    <div className='container mb-8'>
        <div id='skills' className="mx-auto py-8">
            <h3 className='mb-2'>
                <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
                    Skills
                </span>
            </h3>

            <h2 className='text-white'>
                My Abilities
            </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center gap-6 items-center">
            {skills.map((skill, index) => (
                <SkillsCard key={index} {...skill} />
            ))}
        </div>
    </div>
  );
};

export default Skills;

//-------------------------------------------------------------------------------
/* P O S S I B L E   I D E A */

// import React from 'react'
// import './experience.css'
// import { BsPatchCheckFill } from 'react-icons/bs' /*- CHECKMARK */

// /* PROGRAMMING LANGUAGES */
// import { AiOutlineHtml5 } from "react-icons/ai";
// import { SiTailwindcss } from "react-icons/si";
// import { RiJavascriptLine } from "react-icons/ri";
// import { BsFiletypeSql } from "react-icons/bs";
// import { TbBrandNextjs } from "react-icons/tb";
// import { FaReact } from "react-icons/fa";
// import { FaWordpressSimple } from "react-icons/fa";
// import { FaJava } from "react-icons/fa";

// /* TECHNOLOGIES AND TOOLS */
// import { SiWireshark } from "react-icons/si";
// import { IoTerminalOutline } from "react-icons/io5";
// import { SiArcgis } from "react-icons/si";

// /* OPERATING SYSTEMS */

// import { FaWindows } from "react-icons/fa6";
// import { FaLinux } from "react-icons/fa";


// const Skills = () => {
//     return (
//         <section id='skills'>
//             <div className="container mx-auto py-8">
//                 <h3 className='mb-2'>
//                     <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
//                         Skills
//                     </span>
//                 </h3>

//                 <h2 className='text-white mb-4'>
//                     My Abilities/Experience
//                 </h2>
//             </div>

//             <div className="skills__container">
//                 <div className="skills__frontend">
//                     <h3>Programming Languages</h3>
//                     <div className="skills__content">
//                         <article className='skills__details'>
//                             <AiOutlineHtml5 className='skills__details-icon' />
//                             <div>
//                                 <h4>HTML</h4>
//                                 <small className='text-lg'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <SiTailwindcss className='skills__details-icon' />
//                             <div>
//                                 <h4>Tailwind CSS</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <RiJavascriptLine className='skills__details-icon' />
//                             <div>
//                                 <h4>JavaScript</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <BsFiletypeSql className='skills__details-icon' />
//                             <div>
//                                 <h4>SQL</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <TbBrandNextjs className='skills__details-icon' />
//                             <div>
//                                 <h4>Next.js</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <FaReact className='skills__details-icon' />
//                             <div>
//                                 <h4>React</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <FaWordpressSimple className='skills__details-icon' />
//                             <div>
//                                 <h4>Wordpress</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <FaJava className='skills__details-icon' />
//                             <div>
//                                 <h4>Java</h4>
//                                 <small className='text-light'>Experienced</small>
//                             </div>
//                         </article>
//                     </div>
//                 </div>
//                 {/* End of front end */}

//                 <div className="skills__backend">
//                     <h3>Technologies & Tools</h3>
//                     <div className="skills__content">
                        
//                         <article className='skills__details'>
//                             <BsPatchCheckFill className='skills__details-icon' />
//                             <div>
//                                 <h4>Nmap</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <SiWireshark className='skills__details-icon' />
//                             <div>
//                                 <h4>Wireshark</h4>
//                                 <small className='text-light'>Experienced</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <BsPatchCheckFill className='skills__details-icon' />
//                             <div>
//                                 <h4>Metasploit</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <IoTerminalOutline className='skills__details-icon' />
//                             <div>
//                                 <h4>Bash</h4>
//                                 <small className='text-light'>Basic</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <SiArcgis className='skills__details-icon' />
//                             <div>
//                                 <h4>ArcGis</h4>
//                                 <small className='text-light'>Experienced</small>
//                             </div>
//                         </article>
//                     </div>
//                 </div>
//                 {/* End of Technologies & Tools */}

//                 <div className="skills__backend">
//                     <h3>Operating Systems</h3>
//                     <div className="skills__content">
                        
//                         <article className='skills__details'>
//                             <FaWindows className='skills__details-icon' />
//                             <div>
//                                 <h4>Windows</h4>
//                                 <small className='text-light'>Experienced</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <FaLinux className='skills__details-icon' />
//                             <div>
//                                 <h4>Linux</h4>
//                                 <small className='text-light'>Experienced</small>
//                             </div>
//                         </article>

//                         <article className='skills__details'>
//                             <BsPatchCheckFill className='skills__details-icon' />
//                             <div>
//                                 <h4>MacOS</h4>
//                                 <small className='text-light'>Experienced</small>
//                             </div>
//                         </article>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Skills