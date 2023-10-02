// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-md w-60"
      />
    </div>
  );
};

export default SearchBar;
