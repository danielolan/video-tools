// VideoList.tsx

import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[auto,1fr,2fr,1fr,2fr] gap-4 py-4 px-4 font-medium text-gray-900 border-b border-gray-200">
        <div className="pl-4"><input type="checkbox" className="form-checkbox h-4 w-4" /></div> 
        <div>Nombre</div>
        <div className="text-right">Videos</div>
        <div className="text-right">Tamaño</div>
        <div className="text-right pr-8">Última modificación</div>
      </div>
      {/* Repetir VideoListItem con datos estáticos para maquetar */}
      <VideoListItem name="Afiliado Master" videosCount={8} size="7.3 GB" lastModified="30/may/2023" />
      <VideoListItem name="BeMaster" videosCount={21} size="1.4 GB" lastModified="22/jun/2022" />
      <VideoListItem name="Comizzión" videosCount={10} size="284 MB" lastModified="11/sep/2021" />
      {/* ... otros elementos de la lista ... */}
    </div>
  );
};
export default VideoList;
