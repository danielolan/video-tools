import React, { useState } from "react";
import DetailsListItem from "./DetailsListItem";

const DetailsList: React.FC = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleAllCheckboxes = () => {
    setIsAllChecked(!isAllChecked);
    // Aquí deberías también manejar el estado de todos los checkboxes de los items
    // Esto es solo una implementación visual, necesitarías una lógica adicional
    // para manejar los estados de manera adecuada.
  };
  return (
    <div className="flex flex-col mt-10">
    <div className="grid grid-cols-1 md:grid-cols-[auto,minmax(0,1fr),100px,100px,200px] gap-4 py-4 px-4 font-medium text-gray-900 border-b border-gray-200">
    <div
            className="hidden md:block w-4 h-4 border-2 border-gray-300 rounded-sm flex justify-center items-center cursor-pointer" 
            onClick={toggleAllCheckboxes}
          >
            {/* Cuadro interno violeta que aparece cuando el checkbox está marcado */}
            {isAllChecked && (
              <div className="w-3 h-3 bg-custom-violet rounded-sm"></div>
            )}
          </div>
      <div className="font-bold mt-3">Nombre</div>
      <div className="text-right font-bold hidden md:block">Tamaño</div>
      <div className="text-right font-bold hidden md:block">Duracion</div>
      <div className="text-right pr-8 font-bold hidden md:block">Última modificación</div>
    </div>
      {/* List of element here should be beeter option than one by one*/}
      <DetailsListItem
        id="afilidado-23"
        name="Entretenimiento.mp4"
        size="7.3 GB"
        duration="04:11:37"
        lastModified="30/may/2023"
      />
      <DetailsListItem
        id="bemaster-23"
        name="Salida-al-mercado-version nueva.mp4"
        size="1.4 GB"
        duration="47:55"
        lastModified="22/jun/2022"
      />
      <DetailsListItem
        id="comision-23"
        name="Como-cerrar-una-venta.mp4"
        size="284 MB"
        duration="03:50:22"
        lastModified="11/sep/2021"
      />
    </div>
  );
};

export default DetailsList;
