import React, { useState } from 'react';
import '../../public/stylesheets/main.css';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg px-2 md:px-4 py-2">
      <div className=" mx-screen flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            
            <span className="text-xl font-bold text-white tracking-tight">Miga</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/"
            className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200"
          >
            Home
          </Link>
          
          <Link
            to="/generate"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            Generate
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-blue-200 focus:outline-none"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pt-2 pb-3 space-y-1 px-2">
          <Link
            to="/"
            className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/generate"
            className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Generate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;