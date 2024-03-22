import { useEffect, useState } from "react";
import TopBar from "../../Videos/TopBar";
import Sidebar from "../Sidebar";
import { useRef } from "react";

interface PropsLayoutDash {
  children: JSX.Element | JSX.Element[];
}
const DashBoardLayout: React.FC<PropsLayoutDash> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const sidebarRef = useRef();  // Agrega esta referencia
  
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
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen p-5">
       <div ref={sidebarRef} className="sidebar-class">
        <Sidebar isOpen={sidebarOpen} />
      </div>
      <div className="flex-1 flex flex-col bg-white ml-4 rounded-2xl shadow px-8 w-full">
        <TopBar toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
