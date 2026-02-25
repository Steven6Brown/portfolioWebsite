'use client';
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, pageUrl }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    card.style.transition = 'transform 0.1s ease';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.5s ease';
  };

  return (
    <Link href={pageUrl} aria-label={`${title} Page`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col rounded-xl overflow-hidden shadow-xl shadow-black bg-[#1a1a1a] group cursor-pointer"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* Image container */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <Image
            src={imgUrl}
            fill={true}
            alt={title}
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
          {/* Shine overlay on tilt */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)' }}
          />
        </div>

        {/* Card text */}
        <div className="p-5 flex flex-col gap-2">
          <div className="w-8 h-1 rounded-full bg-gradient-to-r from-p-green to-s-blue" />
          <h3 className="text-white text-lg font-bold tracking-wide">{title}</h3>
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