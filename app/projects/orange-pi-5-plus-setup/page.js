import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/orange-pi.png';

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