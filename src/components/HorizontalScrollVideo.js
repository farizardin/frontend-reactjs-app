import React from 'react';

function HorizontalScrollVideo(props) {
  if (!props.contents) return;
  const data = props.contents;
  const section = data.slice(0, 3);
  return (
    <div className="overflow-x-auto">
      <div><text className="text-2xl font-semibold ml-4">Video</text><text style={{ marginLeft: '40%' }} className="text-xl">Browse All Videos</text></div>
      <div className="min-w-screen-md flex space-x-4 p-4">
        {section.map((item) => (
          <div className="flex-none">
            <div className="w-64 h-40 bg-white shadow-md rounded-lg p-4" style={{ backgroundImage: 'url("' + item.image + '")', backgroundSize: 'cover' }}>
              <h2 className="text-xl font-semibold">Title</h2>
              <p className="text-gray-600">Description</p>
            </div>
          </div>
        ))};
      </div>
    </div>
  );
}

export default HorizontalScrollVideo;
