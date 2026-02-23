import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/diamondstattrax.png';

const DiamondStatTrax = () => {
    // Define the description and skills data
    const description1 = (
        <>
            <p>
                Throughout history, statistical analysis and the process of monitoring statistics have
                significantly contributed to the success and progress of inventions, innovations, and 
                especially hard work. Just as statistics are useful within large corporations, they 
                prove heavily pertinent in the sports industry. Specifically in the well-known sport 
                of Baseball, we have practiced statistical tracking, even before the rapid 
                growth of technology. This has allowed teams and players to compete amongst each other, 
                in turn promoting a better, more competitive style of play. DiamondStatTrax is designed 
                for baseball enthusiasts who want to keep track of the statistics of baseball games they 
                manage or play without the need for an internet connection.
            </p>
        </>
    );

    const description2 = ['IntelliJ', 'Java', 'GUI Manager']; // Skills array

    const description3 = (
        <>
            <p>
                Building DiamondStatTrax taught me valuable skills in full-stack development, including frontend design, backend code integration, and database management.
                During this process, I worked with numerous tools and strategies that aided in my success. One strategy in particular set the foundation for my code in the future.
                This is the Persistent Data Strategy. I mapped out each of my classes and worked towards designating variables and variable types for each class. This proved to be very 
                beneficial as it helped me visually understand the flow of information.
            </p>
        </>
    );
    
    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="DiamondStatTrax"
                planguage="Java"
                subtitle1="About DiamondStatTrax"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="What I Learned"
                description3={description3}
                codebutton='https://github.com/Steven6Brown'
            />
        </div>
  );
};

export default DiamondStatTrax;