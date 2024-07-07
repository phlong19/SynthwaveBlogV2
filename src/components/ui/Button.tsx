import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

function Button({
  children,
  style,
  className,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) {
  return (
    <button
      style={style}
      className={cn(
        "inline-flex gap-2 rounded-md bg-emerald-300 p-2.5 hover:bg-red-300",
        className,
      )}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
