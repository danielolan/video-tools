// TopBar.tsx

import React, { useState } from "react";
import LibraryAndTrashButtons from "./LibraryAndTrashButtons";
import NewFolderAndVideoButtons from "./NewFolderAndVideoButtons";
import { IoIosMenu } from "react-icons/io";

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-start gap-4 p-4 mt-2.5 lg:flex-row lg:items-center flex-col ">
      <section className="flex items-center gap-4">
        <IoIosMenu className="lg:hidden block text-2xl cursor-pointer" />
        <LibraryAndTrashButtons />
      </section>
      <NewFolderAndVideoButtons />
    </div>
  );
};

export default TopBar;
