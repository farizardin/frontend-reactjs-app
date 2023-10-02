import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiUpload } from 'react-icons/hi';
import { BsArrowUpShort } from 'react-icons/bs';
import SearchBar from './SearchBar';

function HamburgerNavbar() {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);

  const toggleNavbar = () => {
    setIsOpenNavBar(!isOpenNavBar);
  };

  const toggleUserModal = () => {
    setIsOpenUserModal(!isOpenUserModal);
  };

  const closeModalNavBar = () => {
    setIsOpenNavBar(false);
  };

  const closeUserModal = () => {
    setIsOpenUserModal(false);
  };

  return (
    <div className="relative">
      <div className='flex bg-blue-500 justify-center items-center space-x-20' style={{ height: '60px' }}>
        <div>
          <button
            className="bg-blue-500 text-white px-5 py-5 rounded"
            onClick={toggleNavbar}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div className='w-10'>
          <text className="text-2xl text-gray-100 font-semibold">Social</text>
          <text className="text-2xl text-gray-100">Network</text>
        </div>
        <div>
          <div className='flex grid grid-cols-2 ml-20 items-center'>
            <button
              className="bg-blue-500 text-white py-5 rounded"
            >
              <HiUpload />
            </button>
            <div onClick={toggleUserModal}>
              <img src='https://image.dummyjson.com/50'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='flex bg-blue-500 justify-center items-center space-x-20' style={{ height: '60px' }}>
        <SearchBar/>
      </div>

      {/* Navbar modal */}
      {isOpenNavBar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <div className="bg-white rounded-lg w-96 flex flex-col">
            {/* Close button at the top right */}
            {/* Navigation links */}
            <div className="border-b border-blue-200 text-blue-500 hover:text-blue-700 flex items-center h-16 justify-center font-semibold">
              Main Menu
            </div>
            <ul>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Videos
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  People
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Documents
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Events
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Communities
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Favorites
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Channels
                </a>
              </li>
            </ul>
          </div>
          <button
            className="absolute text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={closeModalNavBar}
            style={{ marginTop: '80%' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {isOpenUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <img className='fixed' style={{ marginTop: -400 }} src='https://image.dummyjson.com/75'></img>
          <div className="bg-white rounded-lg w-96 flex flex-col">
            {/* Close button at the top right */}
            {/* Navigation links */}
            <div className="border-blue-200 flex items-center mt-10 h-16 justify-center grid">
              <div className="flex items-center justify-center">
                <text className="text-blue-500 font-bold">
                  Fariz Ardin
                </text>
              </div>
              <div className='justify-center item-center'>
                <text className='text-blue-500 text-sm'>
                  Full Stack Engineer
                </text>
              </div>
            </div>
            <div className="border-b border-blue-200 text-blue-500 hover:text-blue-700 flex items-center h-16 justify-center font-semibold">
              <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-20 rounded flex">
                <div className='mt-1 mr-2'>
                  <BsArrowUpShort />
                </div>
                Upload
              </button>
            </div>
            <ul>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Videos
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  People
                </a>
              </li>
              <li className="hover:bg-blue-100 h-10 flex items-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 ml-5">
                  Documents
                </a>
              </li>
            </ul>
            <div className="border-t border-blue-200 text-blue-500 hover:text-blue-700 flex items-center mt-10 h-16 justify-center font-semibold">
              <text>
                Log Out
              </text>
            </div>
          </div>
          <button
            className="absolute text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={closeUserModal}
            style={{ marginTop: '90%' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default HamburgerNavbar;
