// NewFolderAndVideoButtons.tsx

import React from 'react';
import { FaFolder, FaPlay } from 'react-icons/fa';

const NewFolderAndVideoButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-0 md:justify-around">
 <button className="flex items-center px-4 py-2 bg-custom-gray text-gray-600 hover:text-white hover:bg-gray-400 focus:outline-none rounded">
        <FaFolder />
        {/* Texto oculto en pantallas pequeñas */}
        <span className='hidden sm:inline ml-2'>Nueva carpeta</span>
      </button>
      <button className="flex items-center bg-custom-violet text-white px-4 py-2 rounded hover:bg-gray-400 focus:outline-none">
        <FaPlay />
        {/* Texto oculto en pantallas pequeñas */}
        <span className='hidden sm:inline ml-2'>Nuevo video</span>
      </button>
    </div>
  );
};

export default NewFolderAndVideoButtons;

