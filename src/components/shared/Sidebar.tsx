// Sidebar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import AccountPlan from "./AccountPlan";
import {
  FaPlay,
  FaChartBar,
  FaCog,
  FaFolder,
  FaTachometerAlt,
} from "react-icons/fa";
import { ButtonMenu } from "./ui/ButtonMenu";

const OptionsMenu = [
  {
    isActive: true,
    Icon: FaTachometerAlt ,
    name: "Dashboard",
    to: "/",
  },
  {
    isActive: false,
    Icon: FaFolder ,
    name: "Videos",
    to: "/videos",
  },
  {
    isActive: false,
    Icon: FaPlay ,
    name: "Player",
    to: "/player",
  },
  {
    isActive: false,
    Icon: FaChartBar ,
    name: "Analytics",
    to: "/analytics",
  },
  {
    isActive: false,
    Icon: FaCog,
    name: "Configuraciones",
    to: "/configurations",
  },
];

const Sidebar = () => {
  
  const [isMobile, setIsMobile] = useState(false)


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

          <nav className="mb-7 mx-4 mt-12">
            {OptionsMenu.map((option) => (
              <ButtonMenu
                key={option.name}
                isActive={option.isActive}
                Icon={option.Icon}
                name={option.name}
                to={option.to}
              />
            ))}
          </nav>

          <AccountPlan {...planDetails} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
