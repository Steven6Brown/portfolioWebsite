import React from 'react';
import { notFound } from 'next/navigation';
import ProjectRoute from '@/app/components/ProjectRoute';
import { PROJECTS, getProject } from '@/lib/projects';

import corredo from '@/public/images/projects/corredo.png';
import stellata from '@/public/images/projects/stellata.png';
import pinstash from '@/public/images/projects/pinstash.png';
import trailmix from '@/public/images/projects/trailmix.png';
import redline from '@/public/images/projects/redline.png';
import nexus from '@/public/images/projects/nexus.png';
import nixbill from '@/public/images/projects/nixbill.png';
import tailfile from '@/public/images/projects/tailfile.png';
import pitfile from '@/public/images/projects/pitfile.png';
import missfix from '@/public/images/projects/missfix.png';
import flagcall from '@/public/images/projects/flagcall.png';
import geocue from '@/public/images/projects/geocue.png';
import cairnwalk from '@/public/images/projects/cairnwalk.png';
import dockett from '@/public/images/projects/dockett.png';

const IMAGES = { corredo, stellata, pinstash, trailmix, redline, nexus, nixbill, tailfile, pitfile, missfix, flagcall, geocue, cairnwalk, dockett };

// Only the slugs listed in lib/projects.js are built. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
    const project = getProject(params.slug);
    if (!project) return {};
    return {
        title: project.title,
        description: `${project.title}: ${project.card}. Status: ${project.status}.`,
        alternates: { canonical: `https://www.stevenrbrown.org/projects/${project.slug}` },
    };
}

export default function ProjectPage({ params }) {
    const project = getProject(params.slug);
    if (!project) notFound();

    const description1 = (
        <>
            <p><strong>Status:</strong> {project.status}.</p>
            {project.about.map((paragraph) => (
                <p key={paragraph} className="mt-4">{paragraph}</p>
            ))}
        </>
    );

    const description3 = (
        <ul className="list-disc pl-5 space-y-2">
            {project.highlights.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );

    return (
        <ProjectRoute
            image={IMAGES[project.slug]}
            title={project.title}
            planguage={project.planguage}
            subtitle1={`About ${project.title}`}
            description1={description1}
            subtitle2={project.concept ? 'Planned Tech' : 'Skills Utilized'}
            description2={project.skills}
            subtitle3={project.highlightsTitle}
            description3={description3}
            codebutton={project.repoPrivate ? undefined : project.repoUrl}
            repoPrivate={project.repoPrivate}
            codebuttonlabel="View Code on GitHub"
        />
    );
}
