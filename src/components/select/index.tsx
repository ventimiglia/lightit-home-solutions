import "./styles.css";

const Select = ({ options }: { options: string[] }) => (
  <div className="relative">
    <select className="py-3 pl-3 pr-14 text-primary rounded-md appearance-none text-sm focus:outline-none focus:border-none">
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
    <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-full pointer-events-none border-l-2 border-l-gray-medium"></div>
    <img
      src="chevron.png"
      className="absolute top-1/2 right-3 -rotate-90 -translate-y-1/2 pointer-events-none"
      width={25}
    />
  </div>
);

export default Select;
