// Sidebar.tsx

import React from "react";
import AccountPlan from "./AccountPlan";
import { FaPlay, FaChartBar, FaCog, FaFolder, FaTachometerAlt } from "react-icons/fa";

const Sidebar: React.FC = () => {
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
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="flex flex-col justify-between h-full py-4 bg-white shadow-xl rounded-2xl">
        <div className="pt-10">
          
            {/* Logo */}
            <div className="flex justify-center mt-4">
            <img
              className="h-12 w-12"
              src="/src/assets/img/logo.png"
              alt="Logo"
            />
          </div>
            {/* Texto del Dashboard y el icono */}
            <div className="flex justify-center mt-4">
              <FaTachometerAlt className="w-4 h-4" />
              <span className="ml-2">Dashboard</span>
            </div>
          

          <nav className="mt-5 mb-7 mx-4">
            <a
              href="#"
              className="flex items-center p-2 mb-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-700 hover:text-white"
            >
              <FaFolder className="w-4 h-4" />
              <span className="ml-4">Videos</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 mb-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-700 hover:text-white"
            >
              <FaPlay className="w-4 h-4" />
              <span className="ml-4">Player</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 mb-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-700 hover:text-white"
            >
              <FaChartBar className="w-4 h-4" />
              <span className="ml-4">Analytics</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-700 hover:text-white"
            >
              <FaCog className="w-4 h-4" />
              <span className="ml-4">Configuraciones</span>
            </a>
          </nav>

          <AccountPlan{...planDetails} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
