import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  size?: string;
}

function Button({
  size = "sm",
  children,
  style,
  className,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) {
  let sizeStyle = "";

  switch (size) {
    case "xs":
      sizeStyle = "p-2 px-2.5 text-xs font-medium";
      break;
    case "sm": // default
      sizeStyle = "px-4 py-[14px] text-sm font-bold";
      break;
      // case "md":
      //   sizeStyle =''
      //   break;

      // case "lg":
      break;
    default:
      break;
  }

  return (
    <button
      style={style}
      className={cn(
        "block-cube block-cube-hover mb-4 inline-flex w-full items-center gap-2 border-0 bg-transparent font-cas tracking-widest outline-none",
        sizeStyle,
        className,
      )}
      onClick={onClick}
    >
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
      {leftIcon}
      <span className="text text-sm text-white dark:text-black">
        {children}
      </span>
      {rightIcon}
    </button>
  );
}

export default Button;
