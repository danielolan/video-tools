import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { CgTrash } from "react-icons/cg";

const LibraryAndTrashButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-0 md:justify-around">
      <button className="flex items-center px-2 py-2 gap-2 border-b-4 text-custom-violet border-b-indigo-500 focus:outline-none rounded">
        <VscLibrary className="text-xl" />

        <span className="hidden sm:inline">Biblioteca</span>
      </button>
      <button className="flex items-center px-4 py-2 gap-2 text-gray-600 border-b-4 border-transparent hover:border-b-gray-400 focus:outline-none rounded">
        <CgTrash />

        <span className="hidden sm:inline">Papelera</span>
      </button>
    </div>
  );
};

export default LibraryAndTrashButtons;
