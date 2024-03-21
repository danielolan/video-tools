// VideoListItem.tsx

import React from "react";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

interface VideoListItemProps {
  id: string;
  name: string;
  videosCount: number;
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
  return (
    <div className="grid grid-cols-[auto,1fr,2fr,1fr,2fr] gap-4  items-center p-4 border-b border-gray-200 hover:bg-custom-gray">
      <div className="pl-4">
        <input type="checkbox" className="form-checkbox h-4 w-4" />
      </div>
      <Link to={`detailvideo/${id}`} className="cursor-pointer">
        <div className="flex items-center space-x-3 ">
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
