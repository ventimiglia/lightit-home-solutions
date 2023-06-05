import cx from "classnames";

type Props = {
  title: string;
  icon: string;
  onClick: () => void;
  active?: boolean;
};

const SidebarProduct = ({ title, icon, onClick, active = false }: Props) => (
  <div
    className={cx(
      "flex flex-col items-center justify-center w-full relative h-24 cursor-pointer",
      {
        
        "bg-gray-light z-0 before:absolute before:content-[''] before:w-full before:h-12 before:rounded-br-3xl before:-top-12 before:bg-white before:shadow-[1px_0.9rem_0_0_#f7f7f7] after:absolute after:content-[''] after:w-full after:h-12 after:rounded-tr-3xl after:-bottom-12 after:bg-white after:shadow-[2.6rem_0_0_0_#f7f7f7]":
          active,
        "z-10": !active,
      }
    )}
    onClick={onClick}
  >
    <img src={icon} width={55} className="transition duration-600 ease-in-out transform hover:scale-110"/>
    <span className="text-sm text-primary">{title}</span>
  </div>
);

export default SidebarProduct;
