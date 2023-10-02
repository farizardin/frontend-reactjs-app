// src/components/Navbar.js
import React from 'react';
import SearchBar from './SearchBar';
import { BsArrowUpShort } from 'react-icons/bs';

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div> <text className="text-2xl font-semibold">Social</text><text className="text-2xl">Network</text></div>
          <div><SearchBar /></div>
          <div className="flex justify-between items-center">
            <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded flex mr-10">
              <div className='mt-1 mr-2'>
                <BsArrowUpShort />
              </div>
              Upload
            </button>
            <div className='flex'>
              <img style={{width: '30px', height: '30px', marginTop: '10%'}} src='https://image.dummyjson.com/50'></img>
              <div className='ml-2'>
                <h2 className="text-xl font-semibold">Fariz Ardin</h2>
                <p className="text-gray-100">tes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
