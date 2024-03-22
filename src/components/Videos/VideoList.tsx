import React, { useState } from "react";
import VideoListItem from "./VideoListItem";

const VideoList: React.FC = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const videos = [
    {
      id: "afiliado-master-23",
      name: "Afiliado Master",
      videosCount: 8,
      size: "7.3 GB",
      lastModified: "30/may/2023",
    },
    {
      id: "bemaster-22",
      name: "BeMaster",
      videosCount: 21,
      size: "1.4 GB",
      lastModified: "22/jun/2022",
    },
    {
      id: "comizzion-21",
      name: "Comizzion",
      videosCount: 10,
      size: "284 MB",
      lastModified: "11/sept/2021",
    },
    {
      id: "creador-contenido-23",
      name: "Creador de Contenido",
      videosCount: 2,
      size: "4.3 GB",
      lastModified: "21/jun/2023",
    },
    {
      id: "exportados-wil-23",
      name: "Exportados Wil",
      videosCount: 14,
      size: "500 MB",
      lastModified: "05/abr/2023",
    },
    {
      id: "afiliado-master-23-second",
      name: "Afiliado Master",
      videosCount: 6,
      size: "7.3 GB",
      lastModified: "30/may/2023",
    },
    {
      id: "bemaster-22-second",
      name: "BeMaster",
      videosCount: 30,
      size: "1.4 GB",
      lastModified: "22/jun/2022",
    },
    {
      id: "comizzion-21-second",
      name: "Comizzion",
      videosCount: 2,
      size: "284 MB",
      lastModified: "11/sept/2021",
    },
    {
      id: "creador-contenido-23-second",
      name: "Creador de Contenido",
      videosCount: 8,
      size: "4.3 GB",
      lastModified: "21/jun/2023",
    },
    {
      id: "exportados-wil-23-second",
      name: "Exportados Wil",
      videosCount: 14,
      size: "500 MB",
      lastModified: "05/abr/2023",
    },
  ];

  const toggleAllCheckboxes = () => {
    setIsAllChecked(!isAllChecked);
  };
  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-[auto,minmax(0,1fr),100px,100px,200px] gap-4 py-4  font-medium text-gray-900 border-b border-gray-200">
        <div className="pl-4 flex items-center justify-center">
          <div
            className="hidden md:block w-4 h-4 border-2 border-gray-300 rounded-sm flex justify-center items-center cursor-pointer"
            onClick={toggleAllCheckboxes}
          >
            {isAllChecked && (
              <div className="w-3 h-3 bg-custom-violet rounded-sm"></div>
            )}
          </div>
        </div>
        <div className="mt-3 font-bold hidden md:block">Nombre</div>
        <div className="text-right font-bold hidden md:block">Videos</div>
        <div className="text-right font-bold hidden md:block">Tamaño</div>
        <div className="text-right pr-8 font-bold hidden md:block">
          Última modificación
        </div>
      </div>

      {videos.map((video) => (
        <VideoListItem
          key={video.id}
          id={video.id}
          name={video.name}
          videosCount={video.videosCount}
          size={video.size}
          lastModified={video.lastModified}
        />
      ))}
    </div>
  );
};
export default VideoList;
