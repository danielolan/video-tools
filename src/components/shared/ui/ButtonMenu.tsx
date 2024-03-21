import { Link } from "react-router-dom";

interface PropsButtonMenu {
  isActive: boolean;
  Icon: React.ElementType;
  name: string;
  to: string;
}
export const ButtonMenu = ({
  isActive = false,
  name,
  to,
  Icon,
}: PropsButtonMenu) => {


  const isActiveClases = !isActive
    ? "text-gray-900 rounded-lg hover:text-white hover:bg-custom-violet"
    : "text-white-900 rounded-lg text-white bg-custom-violet";

  return (
    <Link
      to={to}
      className={`flex items-center py-2 pl-6  mb-4 text-base font-normal ${isActiveClases}`}
    >
      <>
        <Icon />
        <span className="ml-4 text-[1.095rem]">{name}</span>
      </>
    </Link>
  );
};
