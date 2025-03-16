import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4 sm:py-6 mt-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-gray-600 text-sm">
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
