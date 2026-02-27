'use client';
import React, { useEffect } from 'react';
import SkillsCard from '../components/SkillsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { AiOutlineHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTailwindcss, SiCsharp, SiArcgis, SiSplunk, SiElastic, SiKalilinux, SiUbuntu, SiRaspberrypi, SiDocker, SiWireshark, SiKibana } from "react-icons/si";
import { FaJava, FaReact, FaWordpressSimple, FaLinux, FaPython, FaNetworkWired, FaShieldAlt, FaBrain } from "react-icons/fa";
import { FaWindows, FaDebian } from "react-icons/fa6";
import { BsFillMarkdownFill, BsFiletypeSql, BsShieldLockFill } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { IoTerminalOutline } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    id: 1,
    label: "Security & Compliance",
    accent: "#ef4444",
    skills: [
      { id: 1,  title: 'Ethical Hacking',   Icon: BsShieldLockFill },
      { id: 2,  title: 'OSINT',             Icon: BsShieldLockFill },
      { id: 3,  title: 'Incident Response', Icon: FaShieldAlt      },
      { id: 4,  title: 'NIST SP 800',       Icon: BsShieldLockFill },
      { id: 5,  title: 'CMMC',              Icon: BsShieldLockFill },
      { id: 6,  title: 'CUI Training',      Icon: BsShieldLockFill },
      { id: 7,  title: 'Wireshark',         Icon: SiWireshark      },
      { id: 8,  title: 'Suricata',          Icon: FaShieldAlt      },
      { id: 9,  title: 'Kismet',            Icon: FaNetworkWired   },
      { id: 10, title: 'Nagios',            Icon: FaNetworkWired   },
      { id: 11, title: 'Kali Linux',        Icon: SiKalilinux      },
    ],
  },
  {
    id: 2,
    label: "SIEM & Monitoring",
    accent: "#eab308",
    skills: [
      { id: 1, title: 'Splunk',    Icon: SiSplunk    },
      { id: 2, title: 'ELK Stack', Icon: SiElastic   },
      { id: 3, title: 'Kibana',    Icon: SiKibana    },
      { id: 4, title: 'Suricata',  Icon: FaShieldAlt },
    ],
  },
  {
    id: 3,
    label: "AI & Infrastructure",
    accent: "#3b82f6",
    skills: [
      { id: 1, title: 'Ollama',       Icon: FaBrain          },
      { id: 2, title: 'LLaMA3',       Icon: FaBrain          },
      { id: 3, title: 'OpenWebUI',    Icon: FaBrain          },
      { id: 4, title: 'Docker',       Icon: SiDocker         },
      { id: 5, title: 'Raspberry Pi', Icon: SiRaspberrypi    },
      { id: 6, title: 'Networking',   Icon: FaNetworkWired   },
      { id: 7, title: 'VPN Config',   Icon: FaShieldAlt      },
      { id: 8, title: 'Subnetting',   Icon: FaNetworkWired   },
    ],
  },
  {
    id: 4,
    label: "Operating Systems",
    accent: "#22c55e",
    skills: [
      { id: 1, title: 'Linux',      Icon: FaLinux           },
      { id: 2, title: 'Ubuntu',     Icon: SiUbuntu          },
      { id: 3, title: 'Debian 12',  Icon: FaDebian          },
      { id: 4, title: 'Windows',    Icon: FaWindows         },
      { id: 5, title: 'Kali Linux', Icon: SiKalilinux       },
      { id: 6, title: 'Bash',       Icon: IoTerminalOutline },
    ],
  },
  {
    id: 5,
    label: "Programming Languages",
    accent: "#a855f7",
    skills: [
      { id: 1, title: 'Python',     Icon: FaPython         },
      { id: 2, title: 'JavaScript', Icon: RiJavascriptLine },
      { id: 3, title: 'Java',       Icon: FaJava           },
      { id: 4, title: 'C#',         Icon: SiCsharp         },
      { id: 5, title: 'SQL',        Icon: BsFiletypeSql    },
      { id: 6, title: 'HTML',       Icon: AiOutlineHtml5   },
    ],
  },
  {
    id: 6,
    label: "Frameworks & Tools",
    accent: "#ec4899",
    skills: [
      { id: 1, title: 'Next.js',      Icon: TbBrandNextjs      },
      { id: 2, title: 'React',        Icon: FaReact            },
      { id: 3, title: 'Tailwind CSS', Icon: SiTailwindcss      },
      { id: 4, title: 'Wordpress',    Icon: FaWordpressSimple  },
      { id: 5, title: 'VS Code',      Icon: VscCode            },
      { id: 6, title: 'Markdown',     Icon: BsFillMarkdownFill },
      { id: 7, title: 'ArcGIS',       Icon: SiArcgis           },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="container mb-8">
      <div id="skills" className="mx-auto py-8 text-center" data-aos="fade-up">
        <h3 className="mb-2">
          <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block">
            Skills
          </span>
        </h3>
        <h2 className="text-white">My Abilities</h2>
      </div>

      <div className="flex flex-col gap-12">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.id} data-aos="fade-up" data-aos-delay={groupIndex * 80}>

            {/* Category header */}
            {/* <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full flex-shrink-0 bg-gradient-to-b from-p-green to-s-blue" />
                    <h4 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                        {group.label}
                    </h4>
                <div className="flex-1 h-px opacity-20 bg-gradient-to-r from-p-green to-s-blue" />
            </div> */}

            <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full flex-shrink-0 bg-gradient-to-b from-p-green to-s-blue" />
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
                        {group.label}
                    </h4>
                <div className="flex-1 h-px opacity-20 bg-gradient-to-r from-p-green to-s-blue" />
            </div>

            {/* <div className="flex items-center gap-3 mb-5">
                <div
                    className="w-1 h-6 rounded-full flex-shrink-0"
                    style={{ backgroundColor: group.accent }}
                />
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
                    {group.label}
                </h4>
                <div
                    className="flex-1 h-px opacity-20"
                    style={{ backgroundColor: group.accent }}
                />
            </div> */}

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.skills.map((skill, skillIndex) => (
                <div
                  key={`${group.id}-${skill.id}`}
                  data-aos="fade-up"
                  data-aos-delay={groupIndex * 80 + skillIndex * 40}
                >
                  <SkillsCard title={skill.title} Icon={skill.Icon} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// STACKED SKILLS:
// 'use client';
// import React, { useEffect } from 'react';
// import SkillsCard from '../components/SkillsCard';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { AiOutlineHtml5 } from "react-icons/ai";
// import { RiJavascriptLine } from "react-icons/ri";
// import { SiTailwindcss, SiCsharp, SiArcgis, SiSplunk, SiElastic, SiKalilinux, SiUbuntu, SiRaspberrypi, SiDocker, SiWireshark, SiKibana } from "react-icons/si";
// import { FaJava, FaReact, FaWordpressSimple, FaLinux, FaPython, FaNetworkWired, FaShieldAlt, FaBrain } from "react-icons/fa";
// import { FaWindows, FaDebian } from "react-icons/fa6";
// import { BsFillMarkdownFill, BsFiletypeSql, BsShieldLockFill } from "react-icons/bs";
// import { TbBrandNextjs } from "react-icons/tb";
// import { IoTerminalOutline } from "react-icons/io5";
// import { VscCode } from "react-icons/vsc";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 600,
//       once: true,
//     });
//   }, []);

//   const skills = [
//     // Cybersecurity & Security Tools
//     { id: 1, title: 'Ethical Hacking', Icon: BsShieldLockFill },
//     { id: 2, title: 'Splunk', Icon: SiSplunk },
//     { id: 3, title: 'ELK Stack', Icon: SiElastic },
//     { id: 4, title: 'Kibana', Icon: SiKibana },
//     { id: 5, title: 'Suricata', Icon: FaShieldAlt },
//     { id: 6, title: 'Kismet', Icon: FaNetworkWired },
//     { id: 7, title: 'Nagios', Icon: FaNetworkWired },
//     { id: 8, title: 'Wireshark', Icon: SiWireshark },
//     { id: 9, title: 'Kali Linux', Icon: SiKalilinux },

//     // AI & ML
//     { id: 10, title: 'Ollama', Icon: FaBrain },
//     { id: 11, title: 'LLaMA3', Icon: FaBrain },
//     { id: 12, title: 'OpenWebUI', Icon: FaBrain },

//     // Compliance & Frameworks
//     { id: 13, title: 'NIST SP 800', Icon: BsShieldLockFill },
//     { id: 14, title: 'CMMC', Icon: BsShieldLockFill },
//     { id: 15, title: 'OSINT', Icon: BsShieldLockFill },
//     { id: 16, title: 'CUI Training', Icon: BsShieldLockFill },
//     { id: 17, title: 'Incident Response', Icon: FaShieldAlt },

//     // Infrastructure & DevOps
//     { id: 17, title: 'Docker', Icon: SiDocker },
//     { id: 18, title: 'Raspberry Pi', Icon: SiRaspberrypi },
//     { id: 19, title: 'Networking', Icon: FaNetworkWired },
//     { id: 20, title: 'VPN Config', Icon: FaShieldAlt },
//     { id: 21, title: 'Subnetting', Icon: FaNetworkWired },

//     // Operating Systems
//     { id: 22, title: 'Linux', Icon: FaLinux },
//     { id: 23, title: 'Ubuntu', Icon: SiUbuntu },
//     { id: 24, title: 'Debian 12', Icon: FaDebian },
//     { id: 25, title: 'Windows', Icon: FaWindows },
//     { id: 26, title: 'Bash', Icon: IoTerminalOutline },

//     // Programming
//     { id: 27, title: 'Python', Icon: FaPython },
//     { id: 28, title: 'JavaScript', Icon: RiJavascriptLine },
//     { id: 29, title: 'Java', Icon: FaJava },
//     { id: 30, title: 'C#', Icon: SiCsharp },
//     { id: 31, title: 'SQL', Icon: BsFiletypeSql },
//     { id: 32, title: 'HTML', Icon: AiOutlineHtml5 },

//     // Web & Tools
//     { id: 33, title: 'Next.js', Icon: TbBrandNextjs },
//     { id: 34, title: 'React', Icon: FaReact },
//     { id: 35, title: 'Tailwind CSS', Icon: SiTailwindcss },
//     { id: 36, title: 'Wordpress', Icon: FaWordpressSimple },
//     { id: 37, title: 'VS Code', Icon: VscCode },
//     { id: 38, title: 'Markdown', Icon: BsFillMarkdownFill },
//     { id: 39, title: 'ArcGIS', Icon: SiArcgis },
//   ];

//   return (
//     <div className='container mb-8'>
//         <div id='skills' className="mx-auto py-8 text-center" data-aos="fade-up">
//             <h3 className='mb-2'>
//                 <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block'>
//                     Skills
//                 </span>
//             </h3>
//             <h2 className='text-white'>
//                 My Abilities
//             </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center gap-6 items-center">
//             {skills.map((skill, index) => (
//                 <div key={skill.id} data-aos="fade-up" data-aos-delay={index * 40}>
//                     <SkillsCard {...skill} />
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// };

// export default Skills;
// // import './experience.css'
// // import { BsPatchCheckFill } from 'react-icons/bs' /*- CHECKMARK */

// // /* PROGRAMMING LANGUAGES */
// // import { AiOutlineHtml5 } from "react-icons/ai";
// // import { SiTailwindcss } from "react-icons/si";
// // import { RiJavascriptLine } from "react-icons/ri";
// // import { BsFiletypeSql } from "react-icons/bs";
// // import { TbBrandNextjs } from "react-icons/tb";
// // import { FaReact } from "react-icons/fa";
// // import { FaWordpressSimple } from "react-icons/fa";
// // import { FaJava } from "react-icons/fa";

// // /* TECHNOLOGIES AND TOOLS */
// // import { SiWireshark } from "react-icons/si";
// // import { IoTerminalOutline } from "react-icons/io5";
// // import { SiArcgis } from "react-icons/si";

// // /* OPERATING SYSTEMS */

// // import { FaWindows } from "react-icons/fa6";
// // import { FaLinux } from "react-icons/fa";


// // const Skills = () => {
// //     return (
// //         <section id='skills'>
// //             <div className="container mx-auto py-8">
// //                 <h3 className='mb-2'>
// //                     <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
// //                         Skills
// //                     </span>
// //                 </h3>

// //                 <h2 className='text-white mb-4'>
// //                     My Abilities/Experience
// //                 </h2>
// //             </div>

// //             <div className="skills__container">
// //                 <div className="skills__frontend">
// //                     <h3>Programming Languages</h3>
// //                     <div className="skills__content">
// //                         <article className='skills__details'>
// //                             <AiOutlineHtml5 className='skills__details-icon' />
// //                             <div>
// //                                 <h4>HTML</h4>
// //                                 <small className='text-lg'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <SiTailwindcss className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Tailwind CSS</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <RiJavascriptLine className='skills__details-icon' />
// //                             <div>
// //                                 <h4>JavaScript</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <BsFiletypeSql className='skills__details-icon' />
// //                             <div>
// //                                 <h4>SQL</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <TbBrandNextjs className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Next.js</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <FaReact className='skills__details-icon' />
// //                             <div>
// //                                 <h4>React</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <FaWordpressSimple className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Wordpress</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <FaJava className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Java</h4>
// //                                 <small className='text-light'>Experienced</small>
// //                             </div>
// //                         </article>
// //                     </div>
// //                 </div>
// //                 {/* End of front end */}

// //                 <div className="skills__backend">
// //                     <h3>Technologies & Tools</h3>
// //                     <div className="skills__content">
                        
// //                         <article className='skills__details'>
// //                             <BsPatchCheckFill className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Nmap</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <SiWireshark className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Wireshark</h4>
// //                                 <small className='text-light'>Experienced</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <BsPatchCheckFill className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Metasploit</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <IoTerminalOutline className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Bash</h4>
// //                                 <small className='text-light'>Basic</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <SiArcgis className='skills__details-icon' />
// //                             <div>
// //                                 <h4>ArcGis</h4>
// //                                 <small className='text-light'>Experienced</small>
// //                             </div>
// //                         </article>
// //                     </div>
// //                 </div>
// //                 {/* End of Technologies & Tools */}

// //                 <div className="skills__backend">
// //                     <h3>Operating Systems</h3>
// //                     <div className="skills__content">
                        
// //                         <article className='skills__details'>
// //                             <FaWindows className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Windows</h4>
// //                                 <small className='text-light'>Experienced</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <FaLinux className='skills__details-icon' />
// //                             <div>
// //                                 <h4>Linux</h4>
// //                                 <small className='text-light'>Experienced</small>
// //                             </div>
// //                         </article>

// //                         <article className='skills__details'>
// //                             <BsPatchCheckFill className='skills__details-icon' />
// //                             <div>
// //                                 <h4>MacOS</h4>
// //                                 <small className='text-light'>Experienced</small>
// //                             </div>
// //                         </article>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }

// // export default Skills