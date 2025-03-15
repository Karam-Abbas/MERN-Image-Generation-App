import React, { useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <span className="ml-3 text-xl font-semibold text-blue-700">Miga</span>
      </div>
      
      <button 
        className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
          isHovered 
            ? 'bg-blue-700 text-white shadow-md' 
            : 'bg-blue-600 text-white'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => console.log('Generate clicked')}
      >
        Generate
      </button>
    </nav>
  );
};

export default Navbar;