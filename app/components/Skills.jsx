import React from 'react';
import SkillsCard from '../components/SkillsCard';
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { BsFillMarkdownFill } from "react-icons/bs";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { FaDebian } from "react-icons/fa6";
import { IoTerminalOutline } from "react-icons/io5";
import { SiArcgis } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
        id: 1,
        title: 'HTML',
        Icon: AiOutlineHtml5
    },
    {
        id: 2,
        title: 'JavaScript',
        Icon: RiJavascriptLine
    },
    {
        id: 3,
        title: 'Tailwind CSS',
        Icon: SiTailwindcss
    },
    {
        id: 4,
        title: 'Java',
        Icon: FaJava
    },
    {
        id: 5,
        title: 'C#',
        Icon: SiCsharp
    },
    {
        id: 6,
        title: 'Markdown',
        Icon: BsFillMarkdownFill
    },
    {
        id: 7,
        title: 'SQL',
        Icon: BsFiletypeSql
    },
    {
        id: 8,
        title: 'Next.js',
        Icon: TbBrandNextjs
    },
    {
        id: 9,
        title: 'React',
        Icon: FaReact
    },
    {
        id: 10,
        title: 'Wordpress',
        Icon: FaWordpressSimple
    },
    {
        id: 11,
        title: 'Mac',
        Icon: SiMacos
    },
    {
        id: 12,
        title: 'Windows',
        Icon: FaWindows
    },
    {
        id: 13,
        title: 'Linux',
        Icon: FaLinux
    },
    {
        id: 14,
        title: 'Debain 12',
        Icon: FaDebian
    },
    {
        id: 15,
        title: 'Bash',
        Icon: IoTerminalOutline
    },
    {
        id: 16,
        title: 'ArcGIS',
        Icon: SiArcgis
    },
    // {
    //     id: 16,
    //     title: 'Kismet',
    //     Icon: 
    // },
    // {
    //     id: 17,
    //     title: 'Nagios',
    //     Icon: 
    // },
    // {
    //     id: 18,
    //     title: 'ELK Stack',
    //     Icon: 
    // },
  ];

  return (
    <div className='container mb-8'>
        <div id='skills' className="mx-auto py-8 text-center">
            <h3 className='mb-2'>
                <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block'>
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