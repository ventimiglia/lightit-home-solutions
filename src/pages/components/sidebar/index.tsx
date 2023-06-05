import { ReactNode } from "react";

const Sidebar = ({
  children,
}: {
  children: ReactNode;
}) => (
  <section className="flex flex-col justify-center items-center w-28 h-full bg-white">
    {children}
  </section>
);

export default Sidebar;
