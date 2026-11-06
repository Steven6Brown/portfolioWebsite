import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/talonforge.jpg';

export const metadata = {
    title: 'TalonForge',
    description: 'TalonForge is a free, local-first learning platform for coding, scripting, servers, security and IT careers, with a hands-on lab in every lesson.',
};

const TalonForge = () => {
    const description1 = (
        <>
            <p>
                TalonForge is a free, local-first learning platform for coding, scripting, servers, security and IT careers, built under Aquila Digital.
                Every lesson ends in a hands-on lab that runs safely in the browser, and a Careers section lets learners practice real job scenarios
                such as IT help desk and SOC analyst work.
            </p>

            <br />

            <p>
                It is written for first-timers. Every lab explains the ideas it uses, gives a numbered plan, and links to the lessons to read first.
                The platform currently includes 20 tracks and 151 lessons, and it is designed so a company can white-label it later for developer
                hiring or training.
            </p>
        </>
    );

    const description2 = ['Next.js', 'React', 'TypeScript', 'Supabase Auth', 'Zod', 'Vitest', 'Pyodide (WebAssembly)', 'sql.js', 'Web Workers'];

    const description3 = (
        <ul className="list-disc pl-5 space-y-2">
            <li>Simulated Linux shell, Python, JavaScript, SQL and SIEM log-searching labs that all run in the browser.</li>
            <li>Career simulators for IT Help Desk and SOC Analyst at beginner, intermediate and advanced levels, scored on security procedure, customer service, technical accuracy and documentation.</li>
            <li>A mini-SIEM with fictional logs, plus a crypto workbench, number-base converter and ports reference.</li>
            <li>An offline-capable helper that explains lab errors, with an optional AI mode that users must turn on.</li>
            <li>Progress, XP, ranks and streaks stored locally with no personal information.</li>
            <li>Accounts with email verification, two-factor authentication and an audit log are built but switched off.</li>
        </ul>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="TalonForge"
                planguage="Web Application / Next.js / Learning Platform"
                subtitle1="About TalonForge"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="Highlights"
                description3={description3}
                codebutton='https://github.com/Steven6Brown/TalonForge-Coding-Education-Platform'
                codebuttonlabel='View Code on GitHub'
            />
        </div>
    );
};

export default TalonForge;
