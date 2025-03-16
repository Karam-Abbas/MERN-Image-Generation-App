import React, { useState } from 'react';
import '../../public/stylesheets/main.css'
import { Link } from 'react-router';
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--primary)] shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <span className="ml-3 text-xl font-semibold text-blue-700">Miga</span>
      </div>
      
      <Link
        className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
          isHovered 
            ? 'scale-105 transition-transform bg-blue-600 text-white' 
            : 'bg-blue-600 text-white'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        to='/generate'
      >
        Generate
      </Link>
    </nav>
  );
};

export default Navbar;