// src/components/ImageGrid.js
import React from 'react';

const Video = (props) => {
  if(!props.contents) return;
  const data = props.contents;
  const section1 = data.slice(0, 3);
  const section2 = data.slice(2, 5);

  return (
    <div>
      <div><text className="text-2xl font-semibold">Video</text><text style={{marginLeft: '60%'}} className="text-xl">Browse All Videos</text></div>
      <div class="md:items-center">
        <div class="columns-2 gap-2" style={{ width: '750px', height: '355px' }}>
        {section1.map((item, index) => (
            <div className="rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
                 style={index === 0 ? { width: '500px', height: '350px', backgroundImage: 'url("' + item.image + '")', backgroundSize: 'cover' } : { marginLeft: 125, width: '250px', height: '175px', backgroundImage: 'url("'+item.image+'")', backgroundSize: 'cover' }}>
              <div className="px-6 py-4">
                <div className="text-gray-100 font-bold text-xl">Title</div>
                <p className="text-gray-100 text-base">Description</p>
              </div>
            </div>
          ))};
        </div>
        <div class="columns-3 gap-2" style={{ width: '750px' }}>
        {section2.map((item) => (
            <div  className="rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
                 style={{ width: '250px', height: '175px', backgroundImage: 'url("'+item.image+'")', backgroundSize: 'cover' }}>
              <div className="px-6 py-4">
                <div className="text-gray-100 font-bold text-xl">Title</div>
                <p className="text-gray-100 text-base">Description</p>
              </div>
            </div>
          ))};
        </div>
      </div>
    </div>
  );
};

export default Video;
