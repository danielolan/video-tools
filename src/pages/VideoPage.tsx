// DashboardPage.tsx

import React from "react";
import Sidebar from "../components/shared/Sidebar";
import VideoList from "../components/Videos/VideoList";
import SearchBar from "../components/Videos/SearchBar";
import TopBar from "../components/Videos/TopBar";

const VideoPage: React.FC = () => {
  return (
    <div className="flex h-screen m-8">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white ml-4 rounded-2xl shadow-lg px-11">
        <TopBar />
        <SearchBar />
        <VideoList />
      </div>
    </div>
  );
};

export default VideoPage;
