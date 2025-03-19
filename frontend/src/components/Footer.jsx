import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-gradient-to-br from-gray-900 to-gray-800 px-2 md:px-4 py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-gray-400 text-sm">
          <p className="mb-2 sm:mb-0">
            &copy; 2025 Your Company Name. All rights reserved.
          </p>
          <p>Made by Karam Abbas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
