type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Menu: React.FC<Props> = ({ children, onClose }) => {
  return (
    <section className="flex bg-gray-light w-96 h-full p-4 text-primary flex-col items-start gap-4 z-50 relative">
      {children}
      <div
        onClick={onClose}
        className={`
    flex items-center justify-center cursor-pointer absolute rounded-e-md w-5 h-20 bg-gray-light top-1/2 right-0 translate-x-full -translate-y-1/2 
    before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-[18px] before:top-0 before:rotate-90 before:-translate-y-[8px] before:-translate-x-[1px] before:border-b-gray-light 
    after:content-[''] after:absolute after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-b-[18px] after:bottom-0 after:rotate-90 after:translate-y-[8px] after:-translate-x-[1px] after:border-b-gray-light`}
      >
        <img src="chevron.png" alt="chevron" width={15} className="transition duration-300 ease-in-out hover:scale-150"/>
      </div>
    </section>
  );
};

export default Menu;
