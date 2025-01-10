'use client';
import React, { useTransition, useState, useRef } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Education',
        id: 'education',
        content: (
            <div>
                <h4 className='font-bold text-white border-b mb-1'>College</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>Pursuing B.S. - Cybersecurity Analytics and Operations.</li>
                    </ul>
                    <ul className='list-disc'>
                        <li className='mb-2'>Minors - Security Risk Analysis (SRA) and Information Systems Technology (IST) at the Pennsylvania State University.</li>
                    </ul>
                </div>

                <h4 className='font-bold text-white border-b mb-1'>High School</h4>
                <div className='pl-4'> 
                    <ul className='list-disc'>
                        <li>Highschool Diploma - 4.0 GPA</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <div>
                <h4 className='font-bold text-white border-b mb-1'>Technical Experience</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>Digital Cloak - Technical Intern</li>
                        <li>Homecoming Technology Committee Captain</li>
                        <li>Competitive Cyber Security Organization (CCSO)</li>
                        <li>AG Parts Education</li>
                        <li className='mb-2'>HackTheBox Academy</li>
                    </ul>
                </div>

                <h4 className='font-bold text-white border-b mb-1'>Work Experience</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>Men's Wearhouse</li>
                        <li>The LandTek Group</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: 'Certificates',
        id: 'certificates',
        content: (
            <div>
                <h4 className='font-bold text-white border-b mb-1'>LinkedIn Certifications</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>Cybersecurity Awareness: Cloud Security</li>
                        <li>Cybersecurity Awareness: Cybersecurity Terminology</li>
                        <li className='mb-2'>Cybersecurity: Key Policies and Resources</li>
                    </ul>
                </div>

                <h4 className='font-bold text-white border-b mb-1'>Government Certifications</h4>
                <div className='pl-4'>
                    <ul className='list-disc'>
                        <li>DOD Mandatory Controlled Unclassified Information (CUI) Training</li>
                        <li>NSA IST Certification</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: 'Interests',
        id: 'interests',
        content: (
            <div>
                <div className="flex flex-wrap gap-4">
                    <div className="w-1/3">
                        <h4 className='font-bold text-white border-b mb-1'>Outdoors</h4>
                        <div className='pl-4 pb-4'>
                            <ul className='list-disc'>
                                <li>Camping</li>
                                <li>Canoe Trips</li>
                                <li>Hiking</li>
                                <li>Fishing</li>
                                <li className='mb-2'>Hunting</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-1/4">
                        <h4 className='font-bold text-white border-b mb-1'>Sports</h4>
                        <div className='pl-4 pb-4'>
                            <ul className='list-disc'>
                                <li>Baseball</li>
                                <li>Golf</li>
                                <li>Bowling</li>
                                <li>Hockey</li>
                                <li>Basketball</li>
                                <li className='mb-2'>Football</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <h4 className='font-bold text-white border-b mb-1'>Music</h4>
                        <div className='pl-4 pb-4'>
                            <ul className='list-disc'>
                                <li>Guitar</li>
                                <li>Piano</li>
                                <li>Ukulele</li>
                                <li>Bass Guitar</li>
                                <li className='mb-2'>Violin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
]

export const AboutSection = () => {
    const aboutRef = useRef(null);
    const [tab, setTab] = useState('education');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id='about' className='text-white container'>
            <div className='text-center'>
                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue mb-2 inline-block'>
                    About Me
                </h3>

                <h2 className='text-white'>
                    Behind The Scenes
                </h2>
            </div>

            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8'>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full md:order-2'>
                    <p className='text-base md:text-md' style={{ marginBottom: '1em' }}>
                    Hello! My name is Steven Brown, I am a junior at Penn State University Main Campus, on a mission to become a Cybersecurity professional. 
                    Currently, I am pursuing a degree in Cybersecurity Analytics and Operations with Security Risk Analysis (SRA) and Information Sciences and Technology (IST) minors.
                    </p>
                    <p className='text-base md:text-md' style={{ marginBottom: '1em' }}>
                    Since I was young, I have always been fascinated by computers, technology, and learning about everything. 
                    I love to expand my knowledge and learn in all fields, but especially, the technology field. 
                    Some hobbies of mine include playing baseball, golfing, bowling, and any other sport for that matter. 
                    In addition, I am truly passionate about music and musical instruments such as Guitar and Piano and share a great interest in cars. 
                    </p>
                    <p className='text-base md:text-md'>
                    Presently, I assist in teaching Cyber 262 - Cyber-Defense Studio as a Learning Assistant (LA) and plan to continue assisting students throughout the end of my college career. 
                    I love the opportunity to help my peers learn and succeed in their studies. 
                    This also gives me the opportunity to reinforce my knowledge of the subjects. 
                    In my free time, I'm a Web Developer Captain for Penn State's Homecoming Technology Committee, and I volunteer alongside my director and fellow technology committee members to update and maintain the Homecoming website.
                    Also, I am a part of the Competitive Cyber Security Organization (CCSO) club.
                    </p>

                    <div className='flex flex-row mt-4'>
                        <TabButton 
                            selectTab={() => handleTabChange('education')} 
                            active={tab === 'education'}
                        > 
                            Education 
                        </TabButton>

                        <TabButton 
                            selectTab={() => handleTabChange('experience')} 
                            active={tab === 'experience'}
                        > 
                            Experience 
                        </TabButton>

                        <TabButton 
                            selectTab={() => handleTabChange('certificates')} 
                            active={tab === 'certificates'}
                        > 
                            Certificates 
                        </TabButton>

                        <TabButton 
                            selectTab={() => handleTabChange('interests')} 
                            active={tab === 'interests'}
                        > 
                            Interests 
                        </TabButton>
                    </div>
                    <div className='mt-4'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

                <div className='flex justify-center md:order-2 pl-8'>
                    <Image 
                        className='shadow-black shadow-lg rounded-full'
                        src='/images/about/about-image4.png' 
                        width={450} 
                        height={450}
                    />
                </div>
            </div>
        </section>
    );
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'use client';
// import React, { useTransition, useState, useRef } from 'react';
// import Image from 'next/image';
// import TabButton from './TabButton';

// const TAB_DATA = [
//     {
//         title: 'Education',
//         id: 'education',
//         content: (
//             <div>
//                 <h4 className='font-bold text-white border-b mb-1'>College</h4>
//                 <div className='pl-4'>
//                     <ul className='list-disc'>
//                         <li>Pursuing B.S. - Cybersecurity Analytics and Operations.</li>
//                     </ul>
//                     <ul className='list-disc'>
//                         <li className='mb-2'>Minors - Security Risk Analysis (SRA) and Information Systems Technology (IST) at the Pennsylvania State University.</li>
//                     </ul>
//                 </div>

//                 <h4 className='font-bold text-white border-b mb-1'>High School</h4>
//                 <div className='pl-4'> 
//                     <ul className='list-disc'>
//                         <li>Highschool Diploma - 4.0 GPA</li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     },
//     {
//         title: 'Experience',
//         id: 'experience',
//         content: (
//             <div>
//                 <h4 className='font-bold text-white border-b mb-1'>Technical Experience</h4>
//                 <div className='pl-4'>
//                     <ul className='list-disc'>
//                         <li>Digital Cloak - Technical Intern</li>
//                         <li>Homecoming Technology Committee Captain</li>
//                         <li>Competitive Cyber Security Organization (CCSO)</li>
//                         <li>AG Parts Education</li>
//                         <li className='mb-2'>HackTheBox Academy</li>
//                     </ul>
//                 </div>

//                 <h4 className='font-bold text-white border-b mb-1'>Work Experience</h4>
//                 <div className='pl-4'>
//                     <ul className='list-disc'>
//                         <li>Men's Wearhouse</li>
//                         <li>The LandTek Group</li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     },
//     {
//         title: 'Certificates',
//         id: 'certificates',
//         content: (
//             <div>
//                 <h4 className='font-bold text-white border-b mb-1'>LinkedIn Certificatations</h4>
//                 <div className='pl-4'>
//                     <ul className='list-disc'>
//                         <li>Cybersecurity Awareness: Cloud Security</li>
//                         <li>Cybersecurity Awareness: Cybersecurity Terminology</li>
//                         <li className='mb-2'>Cybersecurity: Key Policies and Resources</li>
//                     </ul>
//                 </div>

//                 <h4 className='font-bold text-white border-b mb-1'>Government Certifications</h4>
//                 <div className='pl-4'>
//                     <ul className='list-disc'>
//                         <li>DOD Mandatory Controlled Unclassified Information (CUI) Training</li>
//                         <li>NSA IST Certification</li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     },
//     {
//         title: 'Interests',
//         id: 'interests',
//         content: (
//             <div>
//                 <div className="flex flex-wrap gap-4">
//                     <div className="w-1/3">
//                         <h4 className='font-bold text-white border-b mb-1'>Outdoors</h4>
//                         <div className='pl-4 pb-4'>
//                             <ul className='list-disc'>
//                                 <li>Camping</li>
//                                 <li>Canoe Trips</li>
//                                 <li>Hiking</li>
//                                 <li className='mb-2'>Fishing</li>
//                                 {/* <li className='mb-2'>Hunting</li> */}
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="w-1/4">
//                         <h4 className='font-bold text-white border-b mb-1'>Sports</h4>
//                         <div className='pl-4 pb-4'>
//                             <ul className='list-disc'>
//                                 <li>Baseball</li>
//                                 <li>Golf</li>
//                                 <li>Bowling</li>
//                                 <li>Hockey</li>
//                                 <li>Basketball</li>
//                                 <li className='mb-2'>Football</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="w-1/3">
//                         <h4 className='font-bold text-white border-b mb-1'>Music</h4>
//                         <div className='pl-4 pb-4'>
//                             <ul className='list-disc'>
//                                 <li>Guitar</li>
//                                 <li>Piano</li>
//                                 <li>Ukulele</li>
//                                 <li>Bass Guitar</li>
//                                 <li className='mb-2'>Violin</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// ]

// export const AboutSection = () => {
//     const [tab, setTab] = useState('education');
//     const [isPending, startTransition] = useTransition();

//     const handleTabChange = (id) => {
//         startTransition(() => {
//             setTab(id);
//         });
//     };

//     return (
//         <section id='about' ref={aboutRef} className='text-white container pt-20'>

//             <div className='text-center'>
//                 <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue mb-2 inline-block'>
//                     About Me
//                 </h3>

//                 <h2 className='text-white'>
//                     Behind The Scenes
//                 </h2>
//             </div>

//             <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 '>
//                 <div className='mt-4 md:mt-0 text-left flex flex-col h-full md:order-2'>
//                     {/* First Paragraph - Intro */}
//                     <p className='text-base md:text-md' style={{ marginBottom: '1em' }}>
//                     Hello! My name is Steven Brown, I am a junior at Penn State University Main Campus, on a mission to become a Cybersecurity professional. 
//                     Currently, I am pursuing a degree in Cybersecurity Analytics and Operations with Security Risk Analysis (SRA) and Information Sciences and Technology (IST) minors.
//                     {/* I am passionate about understanding and mitigating the ever-evolving threats in the digital realm. */}

//                     {/* I'm an Akron, OH native, born and raised. Since I was young, I have always been fascinated by computers and technology. 
//                     I love learning and expanding my knowledge of science and technology topics. Some hobbies of mine include playing baseball, golfing, bolwing, and any other sport for that matter. 
//                     I'm a Junior attending The Pennsylvania State University. */}
//                     </p>

//                     {/* Second Paragraph - School */}
//                     {/* <p className='text-base md:text-md' style={{ marginBottom: '1em' }}>
//                     Throughout my academic journey, I have been immersed in a rigorous curriculum at Penn State which allows me to gain hands-on experience and theoretical knowledge in:
//                     </p> */}
                    
//                     {/* Second Paragraph - Experience Elements */}
//                     {/* <p className='pl-4 text-base md:text-md'>
//                     Network Security:
//                     </p>
//                     <p className='pl-8 text-base md:text-md' style={{ marginBottom: '1em' }}>
//                     Delving into the intricacies of securing networks and data against cyber threats.
//                     </p>

//                     <p className='pl-4 text-base md:text-md'>
//                     Cyber Defense:
//                     </p>
//                     <p className='pl-8 text-base md:text-md' style={{ marginBottom: '1em' }}>
//                     Developing skills in proactive defense strategies to safeguard against cyber attacks.
//                     </p>

//                     <p className='pl-4 text-base md:text-md'>
//                     Incident Response:
//                     </p>
//                     <p className='pl-8 text-base md:text-md' style={{ marginBottom: '1em' }}>
//                     Learning to analyze and respond effectively to security incidents.
//                     </p> */}
                
//                     {/* Third Paragraph - Hobbies */}
//                     <p className='text-base md:text-md' style={{ marginBottom: '1em' }}>
//                     Since I was young, I have always been fascinated by computers, technology, and learning about everything. 
//                     I love to expand my knowledge and learn in all fields, but especially, the technology field. 
//                     Some hobbies of mine include playing baseball, golfing, bowling, and any other sport for that matter. 
//                     In addition, I am truly passionate about music and musical instruments such as Guitar and Piano and share a great interest in cars. 

//                     {/* I'm pursuing a degree in Cybersecurity Analytics and Operations with a focus on Application Development. 
//                     Additionally, I'm seeking two minors in Security and Risk Analysis and Information Sciences and Technology. 
//                     Furthermore, I'm a Learning Assistant for the College of Information Sciences and Technology.  */}
//                     </p>

//                     <p className='text-base md:text-md'>
//                     Presently, I assist in teaching Cyber 262 - Cyber-Defense Studio as a Learning Assistant (LA) and plan to continue assisting students throughout the end of my college career. 
//                     I love the opportunity to help my peers learn and succeed in their studies. 
//                     This also gives me the opportunity to reinforce my knowledge of the subjects. 
//                     In my free time, I'm a Web Developer Captain for Penn State's Homecoming Technology Committee, and I volunteer alongside my director and fellow technology committee members to update and maintain the Homecoming website.
//                     Also, I am a part of the Competitive Cyber Security Organization (CCSO) club.

//                     {/* Some of the skills I have developed include:
//                     Programming Languages: Experience with Java, JavaScript, HTML, and CSS which is essential for application and web development.
//                     Security Tools: Familiar with tools like Kali Linux, Wireshark, Snort, and Metasploit for vulnerability assessments and penetration testing.
//                     With the knowledge and skills I have learned and continue to enhance, I am eager to contribute my abilities and make a positive contribution to the Cybersecurity field.
//                     Let's connect! I'm always open to networking with fellow students, professionals, and mentors who share a passion for Cybersecurity and the pursuit of knowledge. */}
//                     </p>

//                     <div className='flex flex-row mt-4'>
//                         <TabButton 
//                             selectTab={() => handleTabChange('education')} 
//                             active={tab === 'education'}
//                         > 

//                             Education 
//                         </TabButton>

//                         <TabButton 
//                             selectTab={() => handleTabChange('experience')} 
//                             active={tab === 'experience'}
//                         > 

//                             Experience 
//                         </TabButton>

//                         <TabButton 
//                             selectTab={() => handleTabChange('certificates')} 
//                             active={tab === 'certificates'}
//                         > 

//                             Certificates 
//                         </TabButton>

//                         <TabButton 
//                             selectTab={() => handleTabChange('interests')} 
//                             active={tab === 'interests'}
//                         > 

//                             Interests 
//                         </TabButton>
//                     </div>
//                     <div className='mt-4'>{TAB_DATA.find((t) => t.id === tab).content}</div>
//                 </div>

//                 <div className='flex justify-center md:order-2 pl-8'>
//                     <Image 
//                         className='shadow-black shadow-lg rounded-full'
//                         src='/images/about/about-image4.png' 
//                         width={450} 
//                         height={450}
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }
