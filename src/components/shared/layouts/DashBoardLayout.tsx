import { useEffect } from "react";

import Sidebar from "../Sidebar";
import { useRef } from "react";

interface PropsLayoutDash {
  children: JSX.Element | JSX.Element[];
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashBoardLayout: React.FC<PropsLayoutDash> = ({ children, sidebarOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Efecto para cerrar el sidebar en pantallas grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        toggleSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen, toggleSidebar]);

  // Efecto para cerrar el sidebar al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [sidebarOpen, toggleSidebar]);

  return (
    <div className="flex flex-col md:flex-row md:h-screen overflow-hidden md:overflow-visible md:p-5 p-2">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-auto flex flex-col bg-white rounded-2xl shadow md:px-8 px-0 md:ml-4 ml-0 w-full">
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
