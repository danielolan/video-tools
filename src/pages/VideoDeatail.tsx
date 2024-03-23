import { useState } from "react";
import { TopBarDetail } from "../components/VideosDetails/TopBarDetail";
import DetailsList from "../components/VideosDetails/DetailsList";
import DashBoardLayout from "../components/shared/layouts/DashBoardLayout";

const VideoDeatail: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <DashBoardLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
      <div className="p-4 pt-8">
      <TopBarDetail toggleSidebar={toggleSidebar} />
        <DetailsList />
      </div>
    </DashBoardLayout>
  );
};

export default VideoDeatail;
