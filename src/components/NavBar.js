// src/components/Navbar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-20">
            <li>
              <a href="#" className="hover:text-gray-300">Video</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">People</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Documents</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Events</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Communities</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Favorites</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Channels</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
