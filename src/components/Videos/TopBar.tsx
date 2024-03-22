import LibraryAndTrashButtons from "./LibraryAndTrashButtons";
import NewFolderAndVideoButtons from "./NewFolderAndVideoButtons";
import { IoIosMenu } from "react-icons/io";

const TopBar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4 md:flex-row">
      <section className="flex items-center gap-4 md:w-full md:justify-between">
        <IoIosMenu
          className="lg:hidden block text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <LibraryAndTrashButtons />

        <NewFolderAndVideoButtons className="hidden md:flex" />
      </section>
    </div>
  );
};

export default TopBar;
