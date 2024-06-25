import React from 'react';

/* Try to move text over to the left (center) - Icon className=''*/
/* Maybe add hover animation - hover:scale-105 transition-transform duration-200 */

const SkillsCard = ({ title, Icon }) => {
  return (
    <div className="bg-h-black shadow-xl rounded-lg p-4 flex items-center">
      {Icon && <Icon className="w-10 h-10 ml-3"/>} {/* TRY TO IMPLEMENT GRADIENT COLORS FOR ICONS - bg-transparent bg-gradient-to-br from-p-green to-s-blue text-black lg:mr-10 */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold flex items-center justify-center">
            {title}
        </h3>
      </div>
    </div>
  );
};
export default SkillsCard;