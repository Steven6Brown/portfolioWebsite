'use client';
import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData = [
  {
    id: 1,
    title: "GolfCaddie",
    description: "Your Personal Golf Assistant",
    image: "/images/projects/golfcaddie2.png",
    tag: ["All", "AI", "Web"],
    url: "/projects/golfcaddie",
  },
  {
    id: 2,
    title: "CloakAI",
    description: "An AI Cybersecurity-Focused Compliancy ChatBot",
    image: "/images/projects/cloakai.png",
    tag: ["All", "AI", "Web"],
    url: "/projects/cloakai",
  },
  {
    id: 3,
    title: "Nextjs Portfolio Website",
    description: "A Learning Achievement - Portfolio Website",
    image: "/images/projects/portfolio-website.png",
    tag: ["All", "Web"],
    url: "/projects/nextjs-portfolio",
  },
  {
    id: 4,
    title: "Security Operations Center",
    description: "A SOC Setup For An Internship Project",
    image: "/images/projects/soc.png",
    tag: ["All", "Web"],
    url: "/projects/security-operations-center",
  },
  {
    id: 5,
    title: "Orange Pi 5 Plus Setup",
    description: "Documentation On How to Setup An Orange Pi 5 Plus",
    image: "/images/projects/orange-pi.png",
    tag: ["All", "Web"],
    url: "/projects/orange-pi-5-plus-setup",
  },
  {
    id: 6,
    title: "To-Do List Manager",
    description: "Task Management and Productivity Application",
    image: "/images/projects/todo-list.png",
    tag: ["All", "Web"],
    url: "/projects/todo-list-manager",
  },
  {
    id: 7,
    title: "Homecoming PSU Website",
    description: "A Project To Make A Difference",
    image: "/images/projects/homecoming-psu.png",
    tag: ["All", "Web"],
    url: "/projects/psu-homecoming-website",
  },
  {
    id: 8,
    title: "DiamondStatTrax",
    description: "A Baseball Stat Tracking Application",
    image: "/images/projects/diamondstattrax.png",
    tag: ["All", "Web"],
    url: "/projects/diamond-stat-trax",
  },
  {
    id: 9,
    title: "Dunkin' Donut's Networking Map",
    description: "A Networking Project For Dunkin' Donut's",
    image: "/images/projects/dunkin-network.png",
    tag: ["All", "Web"],
    url: "/projects/dunkin-donuts-networking-map",
  }
];

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <section id="projects" className="container mx-auto">
      <div className='text-center'>
        <h3 className='mb-2'>
          <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block'>
            Projects
          </span>
        </h3>
        <h2 className='text-white mt-2 mb-8'>
          My Work
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-8'>
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              pageUrl={project.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
// import ProjectCard from './ProjectCard';

// const projectsData = [
//   {
//     id: 1,
//     title: "DiamondStatTrax",
//     description: "A Baseball Stat Tracking Application",
//     image: "/images/projects/project-1.png",
//     tag: ["All", "Web"],
//     url: "/projects/diamond-stat-trax",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 2,
//     title: "Nextjs Portfolio Website",
//     description: "A Learning Achievement - Portfolio Website",
//     image: "/images/projects/project-2-2.png",
//     tag: ["All", "Web"],
//     url: "/projects/nextjs-portfolio",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 3,
//     title: "Homecoming PSU Website",
//     description: "A Project To Make A Difference",
//     image: "/images/projects/project-3.png",
//     tag: ["All", "Web"],
//     url: "/projects/psu-homecoming-website",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 4,
//     title: "Security Operations Center",
//     description: "A SOC Setup For An Internship Project",
//     image: "/images/projects/project-4.png",
//     tag: ["All", "Web"],
//     url: "/projects/security-operations-center",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 5,
//     title: "Orange Pi 5 Plus Setup",
//     description: "Documentation On How to Setup An Orange Pi 5 Plus",
//     image: "/images/projects/project-5.png",
//     tag: ["All", "Web"],
//     url: "/projects/orange-pi-5-plus-setup",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 6,
//     title: "Dunkin' Donut's Networking Map",
//     description: "A Networking Project For Dunkin' Donut's",
//     image: "/images/projects/project-6.png",
//     tag: ["All", "Web"],
//     url: "/projects/dunkin-donuts-networking-map",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 7,
//     title: "CloakAI",
//     description: "An AI Cybersecurity Focused Compliancy and IT Tips ChatBot",
//     image: "/images/projects/project-7.png",
//     tag: ["All", "Web"],
//     url: "/projects/cloakai",
//     opacity: "hover:opacity-10",
//   }
// ];

// const ProjectSection = () => {
//   return (
//     <section id="projects" className="container mx-auto">
//       <div className='text-center'>
//         <h3 className='mb-2'>
//           <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block'>
//             Projects
//           </span>
//         </h3>

//         <h2 className='text-white mt-2 mb-8'>
//           My Work
//         </h2>
//       </div>

//       <div className='grid grid-cols-2 gap-8'>
//         {projectsData.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             description={project.description}
//             imgUrl={project.image}
//             pageUrl={project.url}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;

// import React from 'react';
// import ProjectCard from './ProjectCard';

// const projectsData = [
//   {
//     id: 1,
//     title: "DiamondStatTrax",
//     description: "A Baseball Stat Tracking Application",
//     image: "/images/projects/project-1.png",
//     tag: ["All", "Web"],
//     url: "/projects/diamond-stat-trax",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 2,
//     title: "Nextjs Portfolio Website",
//     description: "A Learning Achievement - Portfolio Website",
//     image: "/images/projects/project-2-2.png",
//     tag: ["All", "Web"],
//     url: "/projects/nextjs-portfolio",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 3,
//     title: "Homecoming PSU Website",
//     description: "A Project To Make A Difference",
//     image: "/images/projects/project-3.png",
//     tag: ["All", "Web"],
//     url: "/projects/psu-homecoming-website",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 4,
//     title: "Security Operations Center",
//     description: "A SOC Setup For An Internship Project",
//     image: "/images/projects/project-4.png",
//     tag: ["All", "Web"],
//     url: "/projects/security-operations-center",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 5,
//     title: "Orange Pi 5 Plus Setup",
//     description: "Documentation On How to Setup An Orange Pi 5 Plus",
//     image: "/images/projects/project-5.png",
//     tag: ["All", "Web"],
//     url: "/projects/orange-pi-5-plus-setup",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 6,
//     title: "Dunkin' Donut's Networking Map",
//     description: "A Networking Project For Dunkin' Donut's",
//     image: "/images/projects/project-6.png",
//     tag: ["All", "Web"],
//     url: "/projects/dunkin-donuts-networking-map",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 7,
//     title: "CloakAI",
//     description: "An AI Cybersecurity Focused Compliancy and IT Tips ChatBot",
//     image: "/images/projects/project-7.png",
//     tag: ["All", "Web"],
//     url: "/projects/cloakai",
//     opacity: "hover:opacity-10",
//   }
// ];

// const ProjectSection = () => {
//   return (
//     <section id="projects" className="container mx-auto">
//       <div className='text-center'>
//         <h3 className='mb-2'>
//           <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block'>
//             Projects
//           </span>
//         </h3>

//         <h2 className='text-white mt-2 mb-8'>
//           My Work
//         </h2>
//       </div>

//       <div className='grid grid-cols-2 gap-8 justify-center'>
//         {projectsData.map((project) => (
//           <div key={project.id} className="relative">
//             <ProjectCard
//               title={project.title}
//               description={project.description}
//               imgUrl={project.image}
//               pageUrl={project.url}
//               opacity={project.opacity}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;

// import React from 'react';
// import ProjectCard from './ProjectCard';

// const projectsData = [
//   {
//     id: 1,
//     title: "DiamondStatTrax",
//     description: "A Baseball Stat Tracking Application",
//     image: "/images/projects/project-1.png",
//     tag: ["All", "Web"],
//     url: "/projects/diamond-stat-trax",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 2,
//     title: "Nextjs Portfolio Website",
//     description: "A Learning Achievement - Portfolio Website",
//     image: "/images/projects/project-2-2.png",
//     tag: ["All", "Web"],
//     url: "/projects/nextjs-portfolio",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 3,
//     title: "Homecoming PSU Website",
//     description: "A Project To Make A Difference",
//     image: "/images/projects/project-3.png",
//     tag: ["All", "Web"],
//     url: "/projects/psu-homecoming-website",
//     opacity: "hover:opacity-20",
//   },
//   {
//     id: 4,
//     title: "Security Operations Center",
//     description: "A SOC Setup For An Internship Project",
//     image: "/images/projects/project-4.png",
//     tag: ["All", "Web"],
//     url: "/projects/security-operations-center",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 5,
//     title: "Orange Pi 5 Plus Setup",
//     description: "Documentation On How to Setup An Orange Pi 5 Plus",
//     image: "/images/projects/project-5.png",
//     tag: ["All", "Web"],
//     url: "/projects/orange-pi-5-plus-setup",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 6,
//     title: "Dunkin' Donut's Networking Map",
//     description: "A Networking Project For Dunkin' Donut's",
//     image: "/images/projects/project-6.png",
//     tag: ["All", "Web"],
//     url: "/projects/dunkin-donuts-networking-map",
//     opacity: "hover:opacity-10",
//   },
//   {
//     id: 7,
//     title: "CloakAI",
//     description: "An AI Cybersecurity Focused Compliancy and IT Tips ChatBot",
//     image: "/images/projects/project-7.png",
//     tag: ["All", "Web"],
//     url: "/projects/cloakai",
//     opacity: "hover:opacity-10",
//   }
// ];

// const ProjectSection = () => {
//   return (
//     <section id="projects" className="container mx-auto">
//       <div className='text-center'>
//         <h3 className='mb-2'>
//           <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block'>
//             Projects
//           </span>
//         </h3>

//         <h2 className='text-white mt-2 mb-8'>
//           My Work
//         </h2>
//       </div>

//       <div className='grid grid-cols-2 gap-8 justify-center'>
//         {projectsData.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             description={project.description}
//             imgUrl={project.image}
//             pageUrl={project.url}
//             opacity={project.opacity}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;