// SearchBar.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex items-center border rounded w-96 bg-white">
        <FaSearch className="text-gray-400 mx-3"/>
        <div className="border-r border-gray-300 h-6 mx-2"></div>
        <input
          type="search"
          className="w-full p-2 rounded-l-none focus:ring-0 focus:border-gray-300"
          placeholder="Buscar Video"
        />
      </div>
    </div>
  );
};

export default SearchBar;
