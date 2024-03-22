import React, { useState } from "react";
import DetailsListItem from "./DetailsListItem";

const DetailsList: React.FC = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const videos = [
    {
      id: "entrenamiento-23",
      name: "Entrenamiento.mp4",
      size: "7.3 GB",
      duration: "04:11:37",
      lastModified: "30/may/2023",
    },
    {
      id: "salida-al-mercado-nueva-22",
      name: "Salida-al-mercado-versión nueva.mp4",
      size: "1.4 GB",
      duration: "47:55",
      lastModified: "22/jun/2022",
    },
    {
      id: "como-cerrar-una-venta-21",
      name: "Como-cerrar-una-venta.mp4",
      size: "284 MB",
      duration: "10:12",
      lastModified: "11/sept/2021",
    },
    {
      id: "crea-un-ticket-valioso-23",
      name: "Crea-un-ticket-valioso.mp4",
      size: "4.3 GB",
      duration: "03:50:22",
      lastModified: "21/jun/2023",
    },
    {
      id: "conquista-el-mercado-digital-23",
      name: "Conquista-el-mercado-digital.mp4",
      size: "500 MB",
      duration: "5:00",
      lastModified: "05/abr/2023",
    },
    {
      id: "entrenamiento-23-second",
      name: "Entrenamiento.mp4",
      size: "7.3 GB",
      duration: "04:11:37",
      lastModified: "30/may/2023",
    },
    {
      id: "salida-al-mercado-nueva-22-second",
      name: "Salida-al-mercado-versión nueva.mp4",
      size: "1.4 GB",
      duration: "47:55",
      lastModified: "22/jun/2022",
    },
    {
      id: "como-cerrar-una-venta-21-second",
      name: "Como-cerrar-una-venta.mp4",
      size: "284 MB",
      duration: "10:12",
      lastModified: "11/sept/2021",
    },
    {
      id: "crea-un-ticket-valioso-23-second",
      name: "Crea-un-ticket-valioso.mp4",
      size: "4.3 GB",
      duration: "03:50:22",
      lastModified: "21/jun/2023",
    },
    {
      id: "conquista-el-mercado-digital-23-second",
      name: "Conquista-el-mercado-digital.mp4",
      size: "500 MB",
      duration: "5:00",
      lastModified: "05/abr/2023",
    },
    
  ];
  
  const toggleAllCheckboxes = () => {
    setIsAllChecked(!isAllChecked);
  };
  return (
    <div className="flex flex-col mt-10">
      <div className="grid grid-cols-1 md:grid-cols-[auto,minmax(0,1fr),100px,100px,200px] gap-4 py-4 px-4 font-medium text-gray-900 border-b border-gray-200">
      <div
            className="hidden md:block w-4 h-4 border-2 mt-4 border-gray-300 rounded-sm flex justify-center items-center cursor-pointer"
            onClick={toggleAllCheckboxes}
          >
            {isAllChecked && (
              <div className="w-3 h-3 bg-custom-violet rounded-sm"></div>
            )}
          </div>
          <div className="mt-3 font-bold hidden md:block">Nombre</div>
        <div className="text-right font-bold hidden md:block">Tamaño</div>
        <div className="text-right font-bold hidden md:block">Duracion</div>
        <div className="text-right pr-8 font-bold hidden md:block">
          Última modificación
        </div>
      </div>
      {videos.map((video) => (
      <DetailsListItem
        id={video.id}
        name={video.name}
        size={video.size}
        duration={video.duration}
        lastModified={video.lastModified}
      />
      ))}
    </div>
  );
};

export default DetailsList;
