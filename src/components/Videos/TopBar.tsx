// TopBar.tsx

import React, { useState } from "react";
import LibraryAndTrashButtons from "./LibraryAndTrashButtons";
import NewFolderAndVideoButtons from "./NewFolderAndVideoButtons";
import { IoIosMenu } from "react-icons/io";

const TopBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 mt-2.5">
      <section className="flex items-center gap-4">
        {isMobile && <IoIosMenu className="text-2xl cursor-pointer" />}
        <LibraryAndTrashButtons />
      </section>
      <NewFolderAndVideoButtons />
    </div>
  );
};

export default TopBar;
