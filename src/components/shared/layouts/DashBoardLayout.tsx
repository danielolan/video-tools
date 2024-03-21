import Sidebar from "../Sidebar";

interface PropsLayoutDash {
  children: JSX.Element | JSX.Element[];
}
const DashBoardLayout = ({ children }: PropsLayoutDash) => {
  return (
    <div className="flex h-screen  p-5">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white ml-4 rounded-2xl shadow px-8 w-full">
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
