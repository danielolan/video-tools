// TopBar.tsx


import LibraryAndTrashButtons from "./LibraryAndTrashButtons";
import NewFolderAndVideoButtons from "./NewFolderAndVideoButtons";
import { IoIosMenu } from "react-icons/io";


const TopBar: React.FC<{toggleSidebar: () => void}> = ({toggleSidebar}) => {
  return (
    <div className="flex justify-between items-center gap-4 p-4 lg:flex-row flex-col">
      <section className="flex items-center gap-4">
        <IoIosMenu className="lg:hidden block text-2xl cursor-pointer" onClick={toggleSidebar} />
        <LibraryAndTrashButtons />
      </section>
      <NewFolderAndVideoButtons />
    </div>
  );
};

export default TopBar;
