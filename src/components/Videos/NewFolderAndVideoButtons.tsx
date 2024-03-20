// NewFolderAndVideoButtons.tsx

import React from 'react';
import { FaFolder, FaPlay } from 'react-icons/fa';

const NewFolderAndVideoButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="flex items-center px-4 py-2 text-gray-600 hover:text-white hover:bg-gray-600 focus:outline-none rounded">
        {/* Icono de nueva carpeta */}
        <FaFolder />
        <span className='ml-2'>Nueva carpeta</span>
      </button>
      <button className=" flex items-center bg-custom-violet text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none">
      <FaPlay className="w-4 h-4" />
        <span className='text-white ml-2'>Nuevo video</span>
      </button>
    </div>
  );
};

export default NewFolderAndVideoButtons;

