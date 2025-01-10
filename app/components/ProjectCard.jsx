import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, pageUrl, opacity }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-80 w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-p-green to-s-blue">
            <Image
                className='w-full h-full rounded-xl group-hover:opacity-10'
                src={imgUrl}
                fill={true}
                alt="Image For Project"
            />
        
        <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 gap-1">
            <h3 className="text-2xl text-black tracking-wider text-center">
                {title}
            </h3>

            <p className="pb-2 text-black text-center">{description}</p>
            <Link href={pageUrl} aria-label="${title} Page">
                <div className="bg-black cursor-pointer hover:scale-105 rounded-lg">
                    <p className="text-center p-3 font-bold text-lg" style={{ backgroundImage: 'linear-gradient(to right, #63fc66, #0073ff)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Learn More</p>
                </div>
            </Link>
        </div>
    </div>
  );
};

export default ProjectCard;
//-------------------------------------------------------------------------------
/* WORKING PROJECT CARDS - KEEP */

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className="relative flex flex-col items-center justify-center h-80 w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-p-green to-s-blue border-2 border-white border-p-4">
//         <Image
//             className="w-full h-full rounded-xl group-hover:opacity-20"
//             src={imgUrl}
//             fill={true}
//             alt="Image For Project"
//          />

//         <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 gap-1">
//             <h3 className="text-2xl text-white tracking-wider text-center">
//                 {title}
//             </h3>

//         <p className="pb-2 text-white text-center">{description}</p>
//         <Link href='/components/DiamondStatTrax.jsx' aria-label="${title} Page">
//             <div className="bg-white cursor-pointer hover:scale-105 rounded-lg">
//             <p className="text-center p-3 font-bold text-lg" style={{ backgroundImage: 'linear-gradient(to right, #63fc66, #0073ff)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Learn More</p>
//             </div>
//         </Link>

//         </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* ETHANS CODE */

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className="relative flex items-center justify-center h-56 w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-p-green to-s-blue">
//       <Image
//         className="w-full h-full rounded-xl group-hover:opacity-20"
//         src={imgUrl}
//         fill={true}
//         alt="Image For Project"
//       />
//       <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//         <h3 className="text-2xl text-[#e1e5ee] tracking-wider text-center">
//           {title}
//         </h3>
//         <p className="pb-4 pt-2 text-[#e1e5ee] text-center">{description}</p>
//         <Link href={'/'} aria-label="${title} Page">
//           <div className="bg-[#e1e5ee] cursor-pointer hover:scale-105 rounded-lg">
//             <p className="text-center p-3 text-d-grey-bg font-bold text-lg">Learn More</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* WORKING CODE - IMPLEMENT CORRECT CARD SIZES */

// import React from 'react';

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className='relative flex flex-col bg-h-black text-white rounded-xl p-4  shadow-lg overflow-hidden'>
//       <div className='h-52 relative'>
//         <img 
//           src={imgUrl}
//           alt={title}
//           className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50 rounded-xl"
//         />
//       </div>

//       <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-90 transition-opacity duration-300'>
//         <div className="absolute inset-0 bg-gradient-to-r from-p-green to-s-blue opacity-100 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
//         <div className="flex flex-col items-center z-20 pointer-events-none">
//             <h4 className="text-white opacity-100">{title}</h4>

//             <p className='text-sm text-white opacity-100 mb-2'>{description}</p>

//             <button className="bg-white px-4 py-2 rounded-lg transition-opacity duration-300 hover:opacity-100 hover:scale-105" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}}>
//                 <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">Learn More</span>
//             </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* BACKGROUND ON HOVER - TRYING TO FIGURE OUT HOW TO KEEP TEXT AT 100% OPACITY AND GRADIENT BACKGROUND AT 70% ON HOVER */

// import React from 'react';

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className='relative flex flex-col gap-2 bg-h-black text-white rounded-xl p-4 w-80 shadow-lg overflow-hidden'>
//       <div className='h-52 relative'>
//         <img 
//           src={imgUrl}
//           alt={title}
//           className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50 rounded-xl"
//         />
//       </div>

//       <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
//         <div className="absolute inset-0 bg-gradient-to-r from-p-green to-s-blue opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-xl"></div>
//         <h4 className="text-white opacity-100">{title}</h4>
//         <p className='text-sm text-white opacity-100'>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* OPACITY CHANGE - TRYING TO FIGURE OUT HOW TO KEEP TEXT WHERE IT IS AND ADD HOVER TEXT */

// import React from 'react';

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className='flex flex-col gap-2 bg-h-black text-white rounded-xl p-4 w-80 shadow-lg'>
//       <div className='h-52 relative'>
//         <img 
//           src={imgUrl}
//           alt={title}
//           className="rounded-xl w-full h-full object-cover transition-opacity duration-300 hover:opacity-50"
//         />
//       </div>

//       <div className='flex flex-col flex-grow'>
//         <h4>{title}</h4>
//         <p className='text-sm text-bt-grey'>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* WORKING CARDS */

// import React from 'react';

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className='flex flex-col gap-2 bg-h-black text-white rounded-xl p-4'>
//       <div className='h-40 md:h-52'>
//         <img 
//           src={imgUrl}
//           alt={title} // Add alt attribute for accessibility
//           className="rounded-xl w-full h-full object-cover" // Use object-cover to ensure images cover the entire container
//         />
//       </div>

//       <div className='flex flex-col flex-grow'>
//         <h3 className='text-lg font-bold'>{title}</h3>
//         <p className='text-sm text-bt-grey'>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* BIGGER CARDS */

// import React from 'react';
// import Image from 'next/image';

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className='flex flex-col gap-2 bg-[#181818] text-white rounded-xl p-4'>
//       <div className='relative rounded-xl overflow-hidden'>
//         <Image 
//           src={imgUrl}
//           layout="responsive" // Allow the image to scale with its aspect ratio
//           objectFit='cover' // Ensure the entire container is covered by the image
//           className="rounded-xl" // Apply rounded corners to the image
//           width={400} // Adjust the width of the image
//           height={300} // Adjust the height of the image
//         />
//       </div>

//       <div className='flex flex-col flex-grow'>
//         <h3 className='text-lg font-bold'>{title}</h3>
//         <p className='text-sm text-bt-grey'>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* SQUISHED CARDS */

// import React from 'react';
// import Image from 'next/image';

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className='flex flex-col gap-2 bg-[#181818] text-white rounded-xl p-4'>
//       <div className='h-40 md:h-52 relative rounded-t-xl overflow-hidden'>
//         <Image 
//           className="rounded-xl"
//           src={imgUrl}
//           layout="fill" // Fill the parent container
//           objectFit='cover' // Cover the container
//         />
//       </div>

//       <div className='flex flex-col flex-grow'>
//         <h3 className='text-lg font-bold'>{title}</h3>
//         <p className='text-sm text-bt-grey'>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

//-------------------------------------------------------------------------------
/* ELONGATED CARDS */

// import React from 'react';
// import Image from 'next/image';

// const ProjectCard = ({ imgUrl, title, description }) => {
//   return (
//     <div className='flex flex-col gap-8 bg-[#181818] text-white rounded-xl p-8 h-full w-full'>
//       <div 
//         className='h-52 md:h-72 rounded-t-xl rounded-b-xl relative'
//       >
//         <Image 
//             className="rounded-xl" 
//             src={imgUrl}
//             fill={true}
//             objectFit='contain'
//         />
//       </div>

//       <div className=''>
//         <h3>{title}</h3>
//         <p className='text-bt-grey'>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
