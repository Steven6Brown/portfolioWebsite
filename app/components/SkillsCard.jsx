import React from 'react';

const SkillsCard = ({ title, Icon }) => {
  return (
    <div className="relative bg-h-black shadow-xl rounded-lg p-4 flex items-center group overflow-hidden
      transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">

      {/* Glowing gradient border on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
          padding: '1px',
          borderRadius: '8px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Icon with gradient color on hover */}
      {Icon && (
        <Icon className="w-10 h-10 ml-3 text-gray-400 group-hover:text-p-green transition-colors duration-300 flex-shrink-0" />
      )}

      <div className="flex-grow">
        <h3 className="text-xl font-semibold flex items-center justify-center group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SkillsCard;