interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-md bg-emerald-300 px-8 py-4 hover:bg-red-300">
      {children}
    </button>
  );
}

export default Button;
