import { ReactNode } from "react";
import { ApiResponse } from "../../../services/@types";

const Categories = ({
  children,
}: {
  children: ReactNode;
}) => (
  <article className="flex flex-col gap-4 w-full">{children}</article>
);

const Title = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold capitalize text-left">{children}</h2>
);

const Category = ({
  item,
  onClick,
}: {
  item: ApiResponse;
  onClick: (item: ApiResponse) => void;
}) => (
  <button
    key={item.name}
    className="flex items-center justify-between p-3 bg-white rounded-md w-full transition duration-300 ease-in-out hover:bg-primary hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
    onClick={() => onClick(item)}
  >
    <span>{item.name}</span>
    <img className="rotate-180" src="chevron.png" width={15} />
  </button>
);

Categories.Title = Title;
Categories.Category = Category;

export default Categories;
