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
    <div className="grid grid-cols-[auto,1fr] md:grid-cols-[auto,minmax(0,1fr),100px,100px,200px] gap-4 items-center p-4 border-b border-gray-200 hover:bg-custom-gray">
      <div className="flex items-center space-x-2">
        <div
          className="w-4 h-4 border-2 border-gray-300 rounded-sm flex justify-center items-center mr-2"
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked && (
            <div className="w-3 h-3 bg-custom-violet rounded-sm"></div>
          )}
        </div>
        <FaFolder className="text-custom-violet md:mr-3" />
      </div>
      <div className="flex flex-col space-y-1">
        <Link to={`detailvideo/${id}`} className="cursor-pointer">
          <span className="block font-medium text-gray-900 truncate">
            {name}
          </span>
        </Link>
        <div className="md:hidden">
          <div className="text-sm text-gray-600">{videosCount} Videos</div>
          <div className="text-sm text-gray-600">{size}</div>
          <div className="text-sm text-gray-600">{lastModified}</div>
        </div>
      </div>
      <div className="text-right hidden md:block">{videosCount}</div>
      <div className="text-right hidden md:block">{size}</div>
      <div className="text-right pr-8 hidden md:block">{lastModified}</div>
    </div>
  );
};


export default VideoListItem;
