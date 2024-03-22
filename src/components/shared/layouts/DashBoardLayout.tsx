import { useEffect, useState } from "react";
import TopBar from "../../Videos/TopBar";
import Sidebar from "../Sidebar";

interface PropsLayoutDash {
  children: JSX.Element | JSX.Element[];
}
const DashBoardLayout: React.FC<PropsLayoutDash> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  // Nuevo efecto para manejar el clic fuera del sidebar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarOpen && !event.target.closest('.sidebar-class')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [sidebarOpen]);



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen p-5">
      <Sidebar isOpen={sidebarOpen} className="sidebar-class"/>
      <div className="flex-1 flex flex-col bg-white ml-4 rounded-2xl shadow px-8 w-full">
        <TopBar toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
