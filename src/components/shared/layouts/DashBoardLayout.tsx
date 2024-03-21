import { useState } from "react";
import TopBar from "../../Videos/TopBar";
import Sidebar from "../Sidebar";

interface PropsLayoutDash {
  children: JSX.Element | JSX.Element[];
}
const DashBoardLayout: React.FC<PropsLayoutDash> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen p-5">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col bg-white ml-4 rounded-2xl shadow px-8 w-full">
        <TopBar toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
