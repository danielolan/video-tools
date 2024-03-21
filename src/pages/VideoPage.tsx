// DashboardPage.tsx

import React from "react";
import VideoList from "../components/Videos/VideoList";
import SearchBar from "../components/Videos/SearchBar";
import TopBar from "../components/Videos/TopBar";
import DashBoardLayout from "../components/shared/layouts/DashBoardLayout";

const VideoPage: React.FC = () => {
  return (
    <DashBoardLayout>
      <TopBar />
      <SearchBar />
      <VideoList />
    </DashBoardLayout>
  );
};

export default VideoPage;
