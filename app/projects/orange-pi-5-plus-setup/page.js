import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/orange-pi.png';

const OrangePi5PlusSetup = () => {
    const description1 = (
        <>
            <p>
                During my cybersecurity internship, I set up and configured an Orange Pi 5 Plus from scratch and documented the entire process. I prepared the device for deployment as a network monitoring node, 
                paired it with geo pucks and Kismet, and used it to passively track and capture wireless device activity on networks. I built, configured, and integrated it into the existing security infrastructure.
            </p>
            <br />
            <p>
                I assembled the physical hardware, installed the eMMC module, heat sinks, NVMe SSD, and WiFi card, flashed the Armbian operating system, configured Kismet for both WiFi and RTL-SDR capture, 
                and set up Metricbeat to ship system metrics back to the team's ELK Stack for real-time monitoring. I also wrote a comprehensive setup and configuration guide in Markdown that details every step, 
                complete with diagrams and bash commands, enabling anyone on the team to replicate the setup independently.
            </p>
        </>
    );

    const description2 = ['Markdown', 'Technical Writing', 'Linux', 'Armbian', 'Debian 12', 'Kismet', 'Metricbeat', 'ELK Stack', 'RTL-SDR', 'Hardware Assembly', 'System Configuration', 'Bash', 'Networking'];

    const description3 = (
        <>
            <p>
                This project pushed me in a direction I had not worked in before, taking a piece of hardware and building it up from nothing into a functional, network-connected security tool. 
                There is a lot that can go wrong when you are dealing with hardware, a new operating system, and multiple software tools that all need to talk to each other. Learning to troubleshoot 
                at each layer of that stack, whether it was a hardware connection, a misconfigured service, or a bash command that needed to be tweaked, built a kind of patience and problem-solving instinct that is hard to develop any other way.
            </p>
            <br />
            <p className='mb-8'>
                Writing the documentation was just as valuable as building the device itself. I had to think carefully about how to explain each step in a way that someone unfamiliar with the hardware 
                could follow without getting lost. That meant anticipating confusion, explaining the why behind each step, not just the what, and organizing everything so it flows logically from start to finish. 
                It is a skill set that is directly applicable to real security work, where clear documentation can be just as important as the technical work it describes.
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
                codebutton='https://github.com/Steven6Brown/Orange-Pi-5-Plus-Setup-Guide'
                codebuttonlabel='View Documentation'
            />
        </div>
    );
};

export default OrangePi5PlusSetup;