// src/components/Card.js
import React from 'react';

const Channel = (props) => {
  return (
    <div>
      <text className="border-b-2 border-blue-500 m-2 text-xl pb-2">Channel</text>
      <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/150'></img>
          </div>
        </div>
        {/* Card 2 */}
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/150'></img>
          </div>
        </div>
        {/* Add more cards as needed */}
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/150'></img>
          </div>
        </div>
        {/* Add more cards as needed */}
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/150'></img>
          </div>
        </div>
        {/* Add more cards as needed */}
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/150'></img>
          </div>
        </div>
        {/* Add more cards as needed */}
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/150'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
