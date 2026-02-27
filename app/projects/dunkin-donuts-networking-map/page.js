import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/dunkin-network.png';

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
                title="Dunkin' Donuts Networking Map"
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
