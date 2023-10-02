// src/components/Card.js
import React from 'react';

const Activity = (props) => {
  return (
    <div>
      <text className="border-b-2 border-blue-500 m-2 text-xl pb-2">Activity</text>
      <div className="grid grid-cols-1">
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/75'></img>
            <div className='ml-2'>
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/75'></img>
            <div className='ml-2'>
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img className='w-15' src='https://image.dummyjson.com/75'></img>
            <div className='ml-2'>
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/75'></img>
            <div className='ml-2'>
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="m-2 bg-white shadow-md p-4">
          <div className='flex'>
            <img src='https://image.dummyjson.com/75'></img>
            <div className='ml-2'>
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default Activity;
