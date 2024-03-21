import { TopBarDetail } from "../components/Videos/TopBarDetail";
import DashBoardLayout from "../components/shared/layouts/DashBoardLayout";

const VideoDeatail: React.FC = () => {
  return (
    <DashBoardLayout>
      <div className="p-4 pt-8">
        <TopBarDetail />
        <section className="mt-4">Hola Aui la detalle de la otra tabal</section>
      </div>
    </DashBoardLayout>
  );
};

export default VideoDeatail;
