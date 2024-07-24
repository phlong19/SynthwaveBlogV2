import { Tooltip } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

interface InputProps {
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  holder?: string;
  name: string;
  required?: boolean;
}

function Input({
  name,
  holder,
  type = "text",
  value,
  setValue,
  required = false,
}: InputProps) {
  return (
    <div className="block-cube block-input font-cas">
      <input
        required={required}
        className="relative w-full border-0 bg-transparent px-4 py-[14px] tracking-wider text-black hover:outline-none focus:outline-none dark:text-white"
        name={name}
        placeholder={holder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* clear btn */}
      <Tooltip label="Clear input">
        <div
          className="absolute right-2 top-4 !z-40 cursor-pointer duration-100 hover:rotate-90"
          onClick={() => setValue("")}
        >
          <IconX className="text-black/80 dark:text-white" size={18} />
        </div>
      </Tooltip>

      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
    </div>
  );
}

export default Input;
