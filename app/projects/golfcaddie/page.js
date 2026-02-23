import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/golfcaddie.png';

const GolfCaddie = () => {
    const description1 = (
        <>
            <p>
                GolfCaddie is an AI-powered iOS golf assistant built in Swift, designed to be the ultimate 
                on-course companion for golfers of all skill levels. The app goes far beyond a simple 
                rangefinder — it combines real-time environmental data, course topology, and personalized 
                user profiles to deliver intelligent club recommendations and strategic advice for every shot.
            </p>

            <br />

            <p>
                GolfCaddie takes in a wide range of variables to make its recommendations as accurate as 
                possible, including live local weather data, golf course topology, distance to the pin, 
                user-specific club distances and yardages, and PGA rules and swing documentation. The app 
                also features social connectivity, allowing golfers to connect with friends, track each 
                other's progress, and share their rounds. A built-in progress tracker helps users monitor 
                their performance over time and identify areas for improvement.
            </p>
        </>
    );

    const description2 = ['Swift', 'iOS Development', 'Xcode', 'Artificial Intelligence', 'Machine Learning', 'Weather API Integration', 'GPS & Range Finder', 'Golf Course Topology', 'User Personalization', 'Social Features', 'Progress Tracking'];

    const description3 = (
        <>
            <p>
                Building GolfCaddie has been one of my most technically challenging and rewarding projects. 
                Learning Swift and iOS development from scratch taught me how to build native mobile applications 
                with a focus on performance and user experience. Integrating live weather data and GPS-based 
                course topology required me to work with multiple external APIs simultaneously and handle 
                real-time data efficiently.
            </p>

            <br />

            <p className='mb-8'>
                This project deepened my understanding of how AI can be applied to real-world, domain-specific 
                problems. Designing the recommendation engine to account for so many variables — weather, 
                elevation, distance, and individual club performance — taught me the importance of data 
                modeling and personalization in AI systems. Building the social and progress tracking features 
                also gave me valuable experience in designing user-centered applications that keep people 
                engaged over time. GolfCaddie is an ongoing project that continues to grow in features and complexity.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="GolfCaddie"
                planguage="iOS Development / Artificial Intelligence"
                subtitle1="About GolfCaddie"
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

export default GolfCaddie;