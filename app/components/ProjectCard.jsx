import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, pageUrl }) => {
  return (
    <Link href={pageUrl} aria-label={`${title} Page`}>
      <div className="flex flex-col rounded-xl overflow-hidden shadow-xl shadow-black bg-[#1a1a1a] group cursor-pointer hover:-translate-y-2 transition-transform duration-300">

        {/* Image container - forced 16:9 aspect ratio */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <Image
            src={imgUrl}
            fill={true}
            alt={title}
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card text below image */}
        <div className="p-5 flex flex-col gap-2">
          <div className="w-8 h-1 rounded-full bg-gradient-to-r from-p-green to-s-blue" />
          <h3 className="text-white text-lg font-bold tracking-wide">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{description}</p>
          <p className="text-sm font-semibold mt-1"
            style={{
              backgroundImage: 'linear-gradient(to right, #63fc66, #0073ff)',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}>
            View Project →
          </p>
        </div>

      </div>
    </Link>
  );
};

export default ProjectCard;
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
