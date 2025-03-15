import React from 'react';
import '../../src/index.css';
const Navbar = () => {
  return (
      <nav className="bg-secondary">
        <ul className="flex justify-between items-center w-full h-16 p-2">
        <li className="text-white text-[length:var(--f4)]">Logo</li>
          <li className="text-white">Menu</li>
        </ul>
      </nav>
  )
}

export default Navbar;