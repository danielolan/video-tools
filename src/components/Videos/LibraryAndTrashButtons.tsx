// LibraryAndTrashButtons.tsx

import React from 'react';

const LibraryAndTrashButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-6">
      <button className="flex items-center px-4 py-2 text-purple-600 focus:outline-none rounded relative group">
        {/* Icono de la biblioteca */}
        <span >Biblioteca</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-custom-violet transition-all"></span>
      </button>
      <button className="flex items-center px-4 py-2 text-gray-600 focus:outline-none rounded relative group">
        {/* Icono de la papelera */}
        <span >Papelera</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-gray-600 transition-all"></span>
      </button>
    </div>
  );
};

export default LibraryAndTrashButtons;
