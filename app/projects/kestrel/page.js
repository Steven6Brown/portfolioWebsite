import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/kestrel.jpg';

export const metadata = {
    title: 'Kestrel',
    description: 'Kestrel finds local businesses with no website, builds a concept mockup for each, and drafts a cold email for a human to review and send.',
};

const Kestrel = () => {
    const description1 = (
        <>
            <p>
                Kestrel finds local businesses that have no website, builds a concept mockup for each one, and drafts a cold email for a human to
                review and send. It is operated by Aquila Digital LLC and built so another brand can be white-labeled later.
            </p>

            <br />

            <p>
                Nothing is ever sent automatically. Sending is a manual click on an approved draft, behind guardrails that are enforced on the server.
            </p>
        </>
    );

    const description2 = ['Next.js', 'React', 'PostgreSQL', 'PGlite', 'Resend', 'OpenStreetMap (Nominatim and Overpass)', 'Vercel Blob', 'Zod', 'Two-Factor Authentication'];

    const description3 = (
        <ul className="list-disc pl-5 space-y-2">
            <li>Discovery from free OpenStreetMap data, with an optional paid Google Places source.</li>
            <li>Each lead gets an unguessable, unindexed mockup page built from real data, with unknowns clearly marked as placeholders.</li>
            <li>Every draft lands in a review queue and must be edited, approved and confirmed before it can be sent.</li>
            <li>Send guardrails include a valid recipient, opt-out checks, a physical mailing address, a signed unsubscribe link, one-click unsubscribe headers and a daily send cap.</li>
            <li>Brand data lives in one config file, and every table row is scoped by brand so new brands need no core changes.</li>
            <li>Sign-in with two-factor codes, roles, invitations and session management.</li>
        </ul>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="Kestrel"
                planguage="Web Application / Next.js / Business Tool"
                subtitle1="About Kestrel"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="Highlights"
                description3={description3}
                codebutton='https://github.com/Steven6Brown/Kestrel---Find-Your-Next-Lead'
                codebuttonlabel='View Code on GitHub'
            />
        </div>
    );
};

export default Kestrel;
