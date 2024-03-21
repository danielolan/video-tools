import { TopBarDetail } from "../components/Videos/TopBarDetail";
import DetailsList from "../components/VideosDetails/DetailsList";
import DashBoardLayout from "../components/shared/layouts/DashBoardLayout";

const VideoDeatail: React.FC = () => {
  return (
    <DashBoardLayout>
      <div className="p-4 pt-8">
        <TopBarDetail />
        <DetailsList />
      </div>
    </DashBoardLayout>
  );
};

export default VideoDeatail;
