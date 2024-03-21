// LibraryAndTrashButtons.tsx

import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { CgTrash } from "react-icons/cg";

const LibraryAndTrashButtons: React.FC = () => {
  return (
    <div className="flex items-center ">
      <button className="flex items-center px-4 py-2 gap-2 border-b-4 text-custom-violet border-b-indigo-500 focus:outline-none rounded ">
        <VscLibrary />
        <span>Biblioteca</span>
        <span className="absolute bottom-0 left-0 w-full h-1 border-b-indigo-500 "></span>
      </button>
      <button className="flex items-center px-4 py-2 gap-2 text-gray-600 border-b-4 border-transparent hover:border-b-gray-400 focus:outline-none rounded relative group">
        <CgTrash />
        <span>Papelera</span>
        <span className="absolute bottom-0 left-0 w-full h-1 "></span>
      </button>
    </div>
  );
};

export default LibraryAndTrashButtons;
