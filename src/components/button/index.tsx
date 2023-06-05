interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="bg-white w-24 py-3 rounded-lg text-center text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
  >
    {children}
  </button>
);

export default Button;
