import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? 'text-p-green border-b border-p-green' // possibly change text-p-green back to text-white
        : 'text-bt-grey';
  
return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-p-green ${buttonClasses}`}>
            {children}
        </p>
    </button>
  );
};

export default TabButton;