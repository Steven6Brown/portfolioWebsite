import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/todo-list.png';

const ToDoListManager = () => {
    const description1 = (
        <>
            <p>
                The To-Do List Manager is a full-featured task management and productivity application 
                designed to help users organize their daily tasks, set priorities, and track progress 
                efficiently. The application features a clean, intuitive interface that allows users to 
                create, edit, delete, and categorize tasks with ease. Built with a focus on usability 
                and performance, the app ensures a seamless experience across all devices.
            </p>

            <br />

            <p>
                The project was built to explore modern web development practices including component-based 
                architecture, state management, and responsive design. It serves as a practical demonstration 
                of building a fully functional application from scratch, covering both frontend design and 
                core application logic.
            </p>
        </>
    );

    const description2 = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'State Management', 'Responsive Design', 'VS Code', 'HTML'];

    const description3 = (
        <>
            <p>
                Building the To-Do List Manager strengthened my understanding of React state management 
                and component architecture. Managing dynamic data — such as adding, editing, and deleting 
                tasks in real time — gave me hands-on experience with useState and useEffect hooks, and 
                helped me develop a better intuition for how data flows through a React application.
            </p>

            <br />

            <p className='mb-8'>
                This project also reinforced the importance of clean UI design and user experience. 
                Using Tailwind CSS allowed me to rapidly build a polished and responsive interface, 
                and thinking through the user's workflow helped me design features that feel natural 
                and intuitive. Overall this project was a valuable exercise in building a complete, 
                functional application from concept to deployment.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="To-Do List Manager"
                planguage="Task Management / Web Development"
                subtitle1="About The To-Do List Manager"
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

export default ToDoListManager;