import { Stack, Tooltip } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React from "react";

interface InputProps {
  type?: string;
  holder?: string;
  required?: boolean;
  name: string;
  register?: any;
  error?: string;
  reset?: (name: string) => void;
  value?: string;
}

const Input = React.forwardRef(
  (
    {
      value,
      name,
      register,
      reset,
      holder,
      type = "text",
      error,
      required = false,
    }: InputProps,
    ref,
  ) => {
    return (
      <Stack>
        <div className="block-cube block-input font-cas">
          <input
            ref={ref}
            {...register}
            required={required}
            className="relative w-full border-0 bg-transparent px-4 py-[14px] tracking-wider text-black hover:outline-none focus:outline-none dark:text-white"
            placeholder={holder}
            type={type}
          />

          {/* clear btn */}
          {value && (
            <Tooltip label="Clear input">
              <div
                className="absolute right-2 top-4 !z-40 cursor-pointer duration-100 hover:rotate-90"
                onClick={() => reset?.(name)}
              >
                <IconX className="text-black/80 dark:text-white" size={18} />
              </div>
            </Tooltip>
          )}

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
        {/* error message */}
        {error && <p className="font-bold text-red-500">{error}</p>}
      </Stack>
    );
  },
);

export default Input;
