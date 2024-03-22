import { useEffect, useState } from "react";
import TopBar from "../../Videos/TopBar";
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
    const handleOutsideClick = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [sidebarOpen, toggleSidebar]);

  return (
    <div className="flex h-screen p-5">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col bg-white ml-4 rounded-2xl shadow px-8 w-full">
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
