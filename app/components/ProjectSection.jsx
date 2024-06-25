import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "DiamondStatTrax",
    description: "A Baseball Stat Tracking Application",
    image: "/images/projects/project-1.png",
    tag: ["All", "Web"],
    url: "/projects/diamond-stat-trax",
    opacity: "hover:opacity-20",
  },
  {
    id: 2,
    title: "Nextjs Portfolio Website",
    description: "A Learning Achievement - Portfolio Website",
    image: "/images/projects/project-2-2.png",
    tag: ["All", "Web"],
    url: "/projects/nextjs-portfolio",
    opacity: "hover:opacity-20",
  },
  {
    id: 3,
    title: "Dunkin' Donut's Networking Map",
    description: "A Networking Project For Dunkin' Donut's",
    image: "/images/projects/project-3.png",
    tag: ["All", "Web"],
    url: "/projects/dunkin-donuts-networking-map",
    opacity: "hover:opacity-10",
  },
  {
    id: 4,
    title: "Homecoming PSU Website",
    description: "A Project To Make A Difference",
    image: "/images/projects/project-4.png",
    tag: ["All", "Web"],
    url: "/projects/psu-homecoming-website",
    opacity: "hover:opacity-10",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="container mx-auto">
      <div>
        <h3 className='mb-2'>
          <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text'>
            Projects
          </span>
        </h3>

        <h2 className='text-white mt-2 mb-4'>
          My Work
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-8 justify-center'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            pageUrl={project.url}
            opacity={project.opacity}
            // showCodeButton={project.title === "DiamondStatTrax" || project.title === "Nextjs Portfolio Website"}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;