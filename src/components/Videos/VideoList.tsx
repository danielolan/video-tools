// VideoList.tsx

import React, { useState } from "react";
import VideoListItem from "./VideoListItem";

const VideoList: React.FC = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleAllCheckboxes = () => {
    setIsAllChecked(!isAllChecked);
    // Aquí deberías también manejar el estado de todos los checkboxes de los items
    // Esto es solo una implementación visual, necesitarías una lógica adicional
    // para manejar los estados de manera adecuada.
  };
  return (
     <div className="flex flex-col mt-10 ">
      <div className="grid grid-cols-[auto,minmax(0,1fr),100px,100px,200px] gap-4 py-4 px-4 font-medium text-gray-900 border-b border-gray-200">
      <div className="pl-4 flex items-center justify-center">
          {/* Contenedor externo del checkbox con el borde */}
          <div
            className="w-4 h-4 border-2 border-gray-300 rounded-sm flex justify-center items-center cursor-pointer"
            onClick={toggleAllCheckboxes}
          >
            {/* Cuadro interno violeta que aparece cuando el checkbox está marcado */}
            {isAllChecked && (
              <div className="w-3 h-3 bg-custom-violet rounded-sm"></div>
            )}
          </div>
        </div>
        <div className="mt-3 font-bold">Nombre</div>
        <div className="text-right font-bold">Videos</div>
        <div className="text-right font-bold">Tamaño</div>
        <div className="text-right pr-8 font-bold">Última modificación</div>
      </div>
      {/* List of element here should be beeter option than one by one*/}
      <VideoListItem
        id="afilidado-23"
        name="Afiliado Master"
        videosCount={8}
        size="7.3 GB"
        lastModified="30/may/2023"
      />
      <VideoListItem
        id="bemaster-23"
        name="BeMaster"
        videosCount={21}
        size="1.4 GB"
        lastModified="22/jun/2022"
      />
      <VideoListItem
        id="comision-23"
        name="Comizzión"
        videosCount={10}
        size="284 MB"
        lastModified="11/sep/2021"
      />
    </div>
  );
};
export default VideoList;
