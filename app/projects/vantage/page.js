import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/vantage.jpg';

export const metadata = {
    title: 'Vantage',
    description: 'Vantage is a private console for the cybersecurity job market that finds, ranks and explains new entry-level listings. It never applies for you.',
};

const Vantage = () => {
    const description1 = (
        <>
            <p>
                Vantage is a private console for the cybersecurity job market. It finds new entry-level cybersecurity listings, ranks them against a
                profile, flags obvious gaps such as seniority, years of experience and required certifications, and surfaces them on a dashboard with
                an optional daily email.
            </p>

            <br />

            <p>
                It never applies for you. Every application still gets a human review.
            </p>
        </>
    );

    const description2 = ['Next.js', 'React', 'TypeScript', 'Zod', 'Vitest', 'axe-core', 'Adzuna API', 'Greenhouse and Lever Feeds', 'Resume Parsing'];

    const description3 = (
        <ul className="list-disc pl-5 space-y-2">
            <li>Indeed-style filters for date posted, pay, job type, experience level, work setting, company and match.</li>
            <li>An Info button on every listing that explains the score with plain rules and only the facts in the posting, so it never claims more than the text shows.</li>
            <li>A visible list of what is being searched and what is never kept, so the data pulled stays transparent.</li>
            <li>Single-owner sign-in with email verification, two-factor authentication, device management and an activity log.</li>
            <li>Light and dark themes built for WCAG AA contrast, with full keyboard support.</li>
        </ul>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="Vantage"
                planguage="Web Application / Next.js / Career Tool"
                subtitle1="About Vantage"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="Highlights"
                description3={description3}
                codebutton='https://github.com/Steven6Brown/Vantage---Find-Your-Next-Advantage'
                codebuttonlabel='View Code on GitHub'
            />
        </div>
    );
};

export default Vantage;
