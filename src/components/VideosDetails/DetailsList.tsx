import React from "react";
import DetailsListItem from "./DetailsListItem";

const DetailsList: React.FC = () => {
  return (
    <div className="flex flex-col mt-10">
    <div className="grid grid-cols-[auto,minmax(0,1fr),100px,100px,200px] gap-4 py-4 px-4 font-medium text-gray-900 border-b border-gray-200">
      <div className="pl-4">
        <input type="checkbox" className="form-checkbox h-4 w-4" />
      </div>
      <div className="font-bold">Nombre</div>
      <div className="text-right font-bold">Tamaño</div>
      <div className="text-right font-bold">Duracion</div>
      <div className="text-right pr-8 font-bold">Última modificación</div>
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
