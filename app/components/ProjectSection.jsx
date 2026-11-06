'use client';
import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData = [
  {
    id: 13,
    title: "TalonForge",
    description: "A Free, Hands-On Learning Platform for Coding, Security and IT Careers",
    image: "/images/projects/talonforge.jpg",
    tag: ["All", "Web", "Tools"],
    url: "/projects/talonforge",
  },
  {
    id: 14,
    title: "Kestrel",
    description: "Finds Local Businesses Without a Website and Drafts Outreach for Human Review",
    image: "/images/projects/kestrel.jpg",
    tag: ["All", "Web", "Tools"],
    url: "/projects/kestrel",
  },
  {
    id: 15,
    title: "Vantage",
    description: "A Private Console for the Cybersecurity Job Market",
    image: "/images/projects/vantage.jpg",
    tag: ["All", "Web", "Tools"],
    url: "/projects/vantage",
  },
  {
    id: 1,
    title: "QuoteWork",
    description: "Client Estimate & Invoice Generator for Aquila Digital",
    image: "/images/projects/quotework.png",
    tag: ["All", "Web", "Tools"],
    url: "/projects/quotework",
  },
  {
    id: 2,
    title: "Finio",
    description: "Privacy-First Personal Budget Tracker iOS App",
    image: "/images/projects/finio.png",
    tag: ["All", "iOS", "Mobile"],
    url: "/projects/finio",
  },
  {
    id: 3,
    title: "GolfCaddie",
    description: "Your Personal Golf Assistant",
    image: "/images/projects/golfcaddie2.png",
    tag: ["All", "AI", "Web"],
    url: "/projects/golfcaddie",
  },
  {
    id: 16,
    title: "Corredo",
    description: "A Trail Gear Inventory and Packing Kit App for iPhone and iPad",
    image: "/images/projects/corredo.png",
    tag: ["All", "iOS", "Mobile"],
    url: "/projects/corredo",
  },
  {
    id: 17,
    title: "Stellata",
    description: "A Backpacking App That Maps Where to Camp Along the Trail",
    image: "/images/projects/stellata.png",
    tag: ["All", "iOS", "Mobile"],
    url: "/projects/stellata",
  },
  {
    id: 18,
    title: "Pinstash",
    description: "A Private Log for Fishing and Hunting Spots",
    image: "/images/projects/pinstash.png",
    tag: ["All", "iOS", "Mobile"],
    url: "/projects/pinstash",
  },
  {
    id: 19,
    title: "TrailMix",
    description: "A Native iOS Dating App for Outdoor Enthusiasts",
    image: "/images/projects/trailmix.png",
    tag: ["All", "iOS", "Mobile"],
    url: "/projects/trailmix",
  },
  {
    id: 20,
    title: "Redline",
    description: "An iOS Prototype for On-Demand Car Parts Delivery to Repair Shops",
    image: "/images/projects/redline.png",
    tag: ["All", "iOS", "Mobile"],
    url: "/projects/redline",
  },
  {
    id: 21,
    title: "Nexus",
    description: "A Personal Voice AI Assistant Built on a Free-Tier Stack",
    image: "/images/projects/nexus.png",
    tag: ["All", "AI"],
    url: "/projects/nexus",
  },
  {
    id: 4,
    title: "CloakAI",
    description: "An AI Cybersecurity-Focused Compliancy ChatBot",
    image: "/images/projects/cloakai.png",
    tag: ["All", "AI", "Web"],
    url: "/projects/cloakai",
  },
  {
    id: 5,
    title: "Nextjs Portfolio Website",
    description: "A Learning Achievement: Portfolio Website",
    image: "/images/projects/portfolio-website.png",
    tag: ["All", "Web"],
    url: "/projects/nextjs-portfolio",
  },
  {
    id: 6,
    title: "Security Operations Center",
    description: "A SOC Setup For An Internship Project",
    image: "/images/projects/soc.png",
    tag: ["All", "Web"],
    url: "/projects/security-operations-center",
  },
  {
    id: 7,
    title: "Orange Pi 5 Plus Setup",
    description: "Documentation On How to Setup An Orange Pi 5 Plus",
    image: "/images/projects/orange-pi.png",
    tag: ["All", "Web"],
    url: "/projects/orange-pi-5-plus-setup",
  },
  {
    id: 8,
    title: "External Network Audit",
    description: "External Network Security Audit Delivering a Detailed Findings and Remediation Report.",
    image: "/images/projects/external-network-audit.png",
    tag: ["All", "Web"],
    url: "/projects/external-network-audit",
  },
  {
    id: 9,
    title: "To-Do List Manager",
    description: "Task Management and Productivity Application",
    image: "/images/projects/todo-list.png",
    tag: ["All", "Web"],
    url: "/projects/todo-list-manager",
  },
  {
    id: 10,
    title: "Homecoming PSU Website",
    description: "A Project To Make A Difference",
    image: "/images/projects/homecoming-psu.png",
    tag: ["All", "Web"],
    url: "/projects/psu-homecoming-website",
  },
  {
    id: 11,
    title: "DiamondStatTrax",
    description: "A Baseball Stat Tracking Application",
    image: "/images/projects/diamondstattrax.png",
    tag: ["All", "Web"],
    url: "/projects/diamond-stat-trax",
  },
  {
    id: 12,
    title: "Dunkin' Donuts Networking Map",
    description: "A Networking Project For Dunkin' Donut's",
    image: "/images/projects/dunkin-network.png",
    tag: ["All", "Web"],
    url: "/projects/dunkin-donuts-networking-map",
  },
];

// Product concepts: fully briefed and branded, but the apps are not built yet.
const conceptsData = [
  { id: 22, title: "Nixbill", description: "Concept: A Subscription and Membership Tracker With Cancel-By Dates", image: "/images/projects/nixbill.png", url: "/projects/nixbill" },
  { id: 23, title: "Tailfile", description: "Concept: A Pet Vaccine Tracker With a Shareable Proof Page", image: "/images/projects/tailfile.png", url: "/projects/tailfile" },
  { id: 24, title: "Pitfile", description: "Concept: Car Service Records and Reminders", image: "/images/projects/pitfile.png", url: "/projects/pitfile" },
  { id: 25, title: "Missfix", description: "Concept: A Driving-Range Practice Companion", image: "/images/projects/missfix.png", url: "/projects/missfix" },
  { id: 26, title: "Flagcall", description: "Concept: A Pocket Rules Referee for Settling Disputes", image: "/images/projects/flagcall.png", url: "/projects/flagcall" },
  { id: 27, title: "Geocue", description: "Concept: Place-Based Phone Modes That Change With Your Location", image: "/images/projects/geocue.png", url: "/projects/geocue" },
  { id: 28, title: "Cairnwalk", description: "Concept: An Offline Local-History Walking Guide", image: "/images/projects/cairnwalk.png", url: "/projects/cairnwalk" },
  { id: 29, title: "Dockett", description: "Concept: An On-Device Receipt and Warranty Tracker", image: "/images/projects/dockett.png", url: "/projects/dockett" },
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

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={(index % 2) * 100}
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

      <div className='text-center mt-16 mb-8'>
        <h3 className='mb-2'>
          <span className='bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text inline-block'>
            Product Concepts
          </span>
        </h3>
        <p className='text-bt-grey max-w-xl mx-auto'>
          Fully briefed and branded app ideas that are still in design. These apps have not been built yet.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {conceptsData.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={(index % 2) * 100}
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
//     description: "A Learning Achievement: Portfolio Website",
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
//     description: "A Learning Achievement: Portfolio Website",
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
//     description: "A Learning Achievement: Portfolio Website",
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