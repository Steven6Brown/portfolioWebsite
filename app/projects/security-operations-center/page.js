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