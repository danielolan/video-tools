import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

interface VideoListItemProps {
  id: string;
  name: string;
  videosCount: number; // Asumiendo que videosCount es un número
  size: string;
  lastModified: string;
}

const VideoListItem: React.FC<VideoListItemProps> = ({
  id,
  name,
  videosCount,
  size,
  lastModified,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="grid grid-cols-[auto,minmax(0,1fr),100px,100px,200px] gap-4 items-center p-4 border-b border-gray-200 hover:bg-custom-gray">
      <div className="pl-4">
        {/* Contenedor externo del checkbox con el borde */}
        <div
          className="w-4 h-4 border-2 border-gray-300 rounded-sm flex justify-center items-center"
          onClick={() => setIsChecked(!isChecked)}
        >
          {/* Cuadro interno violeta que aparece cuando el checkbox está marcado */}
          {isChecked && (
            <div className="w-3 h-3 bg-custom-violet rounded-sm"></div>
          )}
        </div>
      </div>
      <Link to={`detailvideo/${id}`} className="cursor-pointer">
        <div className="flex items-center space-x-3">
          <FaFolder className="text-custom-violet" />
          <span className="block font-medium text-gray-900 truncate">
            {name}
          </span>
        </div>
      </Link>
      <div className="text-right">{videosCount}</div>
      <div className="text-right">{size}</div>
      <div className="text-right pr-8">{lastModified}</div>
    </div>
  );
};

export default VideoListItem;
