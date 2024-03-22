// TopBar.tsx


import LibraryAndTrashButtons from "./LibraryAndTrashButtons";
import NewFolderAndVideoButtons from "./NewFolderAndVideoButtons";
import { IoIosMenu } from "react-icons/io";


const TopBar: React.FC<{toggleSidebar: () => void}> = ({toggleSidebar}) => {
  return (
    // Changed from lg:flex-row flex-col to flex-col and added conditional lg:flex-row
    <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-4 p-4">
      <section className="flex items-center gap-4">
        <IoIosMenu className="lg:hidden block text-2xl cursor-pointer" onClick={toggleSidebar} />
        <LibraryAndTrashButtons />
      </section>
      <NewFolderAndVideoButtons />
    </div>
  );

};

export default TopBar;
