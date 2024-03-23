// DashboardPage.tsx

import VideoList from "../components/Videos/VideoList";
import SearchBar from "../components/Videos/SearchBar";

import DashBoardLayout from "../components/shared/layouts/DashBoardLayout";
import { useState } from "react";
import TopBar from "../components/shared/TopBar";

// VideoPage.tsx

const VideoPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <DashBoardLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
      <TopBar toggleSidebar={toggleSidebar} />
      <SearchBar />
      <VideoList />
    </DashBoardLayout>
  );
};

export default VideoPage;
