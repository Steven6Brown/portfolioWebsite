import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/homecoming-psu.png';

const PSUHomecomingWebsite = () => {
    // Define the description and skills data
    const description1 = (
        <>
            <p>
                The Penn State Homecoming website project was a collaborative effort aimed at revitalizing and enhancing the digital presence of one of the university's most celebrated traditions. 
                Leveraging WordPress as the core CMS and Elementor for streamlined visual design and content creation, our team meticulously crafted a user-friendly interface that resonates with alumni, students, and the community alike. 
                From integrating dynamic event calendars to showcasing historical moments through engaging multimedia, every aspect of the website was thoughtfully curated to capture the spirit of Penn State's Homecoming.
            </p>
        </>
    );

    const description2 = ['Wordpress', 'Elementor']; // Skills array

    const description3 = (
        <>
            <p className='mb-8'>
                Working on the Penn State Homecoming website provided invaluable experience in team collaboration and project management within a structured timeline. I honed my skills in WordPress customization, mastering plugins and theme development to meet specific design and functionality requirements. Utilizing Elementor, I gained proficiency in designing responsive layouts and implementing interactive elements without compromising on performance or user experience. 
                This project underscored the importance of clear communication, agile development practices, and adaptability in achieving collective goals, setting a benchmark for future collaborative endeavors in web development.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute 
                image={ProjectImage}
                title="PSU Homecoming Website"
                planguage="Web Design"
                subtitle1="About The Penn State Homecoming Website"
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

export default PSUHomecomingWebsite;