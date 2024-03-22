// Sidebar.tsx

import React, { useEffect, useRef } from "react";
import {  useLocation } from "react-router-dom";

import AccountPlan from "./AccountPlan";
import {
  FaPlay,
  FaChartBar,
  FaCog,
  FaFolder,
  FaTachometerAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { ButtonMenu } from "./ui/ButtonMenu";

const OptionsMenu = [
  {
    isActive: true,
    Icon: FaTachometerAlt,
    name: "Dashboard",
    to: "/",
  },
  {
    isActive: false,
    Icon: FaFolder,
    name: "Videos",
    to: "/videos",
  },
  {
    isActive: false,
    Icon: FaPlay,
    name: "Player",
    to: "/player",
  },
  {
    isActive: false,
    Icon: FaChartBar,
    name: "Analytics",
    to: "/analytics",
  },
  {
    isActive: false,
    Icon: FaCog,
    name: "Configuraciones",
    to: "/configurations",
  },
  {
    isActive: false,
    Icon: FaQuestionCircle,
    name: "Ayuda",
    to: "/Help",
  },
];

const Sidebar: React.FC<{ isOpen: boolean, toggleSidebar: () => void }> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const location = useLocation();


  const sidebarClasses = isOpen
  ? "fixed z-30 w-64 h-screen" // Adjust width and height as needed
  : "hidden lg:block lg:static lg:z-auto";

  const planDetails = {
    planName: "Mi Plan - Plus",
    renewalDate: "El uso se renueva el 3-may-23",
    storageUsed: "225",
    storageTotal: "1 TB",
    storagePercentage: 22.5,
    bandwidthUsed: "45",
    bandwidthTotal: "50 TB",
    bandwidthPercentage: 90,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);
  return (
    <aside ref={sidebarRef} className={`${sidebarClasses} shadow bg-white rounded-2xl`}>
      <div className="flex flex-col justify-between h-full p-2 shadow bg-white rounded-2xl">
        <div className="flex flex-col justify-between h-[100vh]">
          {/* Logo */}
          <div className="flex justify-center mt-12">
            <img
              className="h-16 w-16"
              src="/src/assets/img/logo.png"
              alt="Logo"
            />
          </div>

          <nav className="mb-7 mx-4 mt-8">
            {OptionsMenu.map((option) => {
              if (option.name === "Ayuda" && location.pathname === "/") {
                return null; // No renderizar el item Ayuda cuando esté en la página de videos
              }
              return (
                <ButtonMenu
                  key={option.name}
                  isActive={option.isActive}
                  Icon={option.Icon}
                  name={option.name}
                  to={option.to}
                />
              );
            })}
          </nav>

          <AccountPlan {...planDetails} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
