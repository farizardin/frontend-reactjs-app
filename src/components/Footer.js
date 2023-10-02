// src/components/Navbar.js
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 bg-blue-500 p-4 text-white'>
                <div className='flex justify-center items-center gap-4'>
                    <img src='https://image.dummyjson.com/25'></img>
                    <img src='https://image.dummyjson.com/25'></img>
                    <img src='https://image.dummyjson.com/25'></img>
                </div>
            </div>
            <nav className="bg-blue-500 p-4 text-white">
                <div className="flex justify-center">
                    <div className="flex justify-between">
                        <ul className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                            <li>
                                <a href="#" className="hover:text-gray-300">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">For Business</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">Suggestins</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">Help & FAQs</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='flex justify-center items-center bg-blue-500 p-4 text-white'>
                <text>copyright huehueheuh huehuehue </text>
            </div>
        </div>
    );
};

export default Footer;
