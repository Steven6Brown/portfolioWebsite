import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/external-network-audit.png';

const ExternalNetworkAudit = () => {
    const description1 = (
        <>
            <p>
                During my internship at Digital Cloak, I was tasked with conducting an independent external network audit of my internships corporate infrastructure. 
                This was a real engagement, not a classroom exercise, meaning I was working against a live network with actual rules of engagement in place. 
                The assessment took place over three days in June 2024 and covered two of the organizations external-facing URLs.
            </p>
            <br />
            <p>
                The goal was to think like an attacker, using only publicly available information and external scanning tools, to identify what vulnerabilities someone 
                outside the organization could discover and potentially exploit. The engagement was strictly non-destructive, meaning no exploitation of found vulnerabilities 
                was permitted, but everything up to that point was fair game. I was responsible for the entire process from start to finish: scoping, reconnaissance, scanning, 
                analysis, and writing the final report with recommendations.
            </p>
        </>
    );

    const description2 = ['Nmap', 'Zenmap', 'Spiderfoot', 'Shodan', 'Nslookup', 'VirusTotal', 'HaveIBeenPwned', 'Datanyze', 'Google Dorking', 'OSINT', 'Network Mapping', 'Technical Writing', 'LucidChart'];

    const description3 = (
        <>
            <p>
                This project was my first experience conducting a real security assessment on a real organization, and it taught me a lot about how much information is publicly 
                accessible if you know where to look. Using tools like Spiderfoot, Shodan, and Google Dorking, I was able to map out network topology, identify open ports, locate 
                exposed services, and find employee information that had no business being publicly accessible. The OSINT portion of the audit was particularly eye-opening; the amount of 
                personal and professional information people leave exposed online is significant, and from an attacker's perspective, that kind of information is extremely valuable for social engineering.
            </p>
            <br />
            <p className='mb-8'>
                Writing the final report was just as important as conducting the assessment itself. A security audit is only as useful as the report that comes out of it; if the findings are not communicated 
                clearly, the recommendations will not be acted on. I had to present technical findings in a way that both technical and non-technical stakeholders could understand, prioritize risks by severity, 
                and provide actionable short and long term recommendations. It was a good reminder that in cybersecurity, communication is just as critical as technical skill.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="External Network Audit"
                planguage="Cybersecurity / OSINT"
                subtitle1="About The External Network Audit"
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

export default ExternalNetworkAudit;