import { Flex, Title } from "@mantine/core";
import { useState } from "react";

const arr = ["TransUnion", "Equifax", "Experian"];

function Chart() {
  const [active, setAtive] = useState(0);
  return (
    <div className="text-center dark:text-white">
      <Title>Hello, Hagen</Title>
      <Title fw="400">Here is your kcal rate ;)</Title>

      <Flex mx="auto" justify="center" mt={12} gap={4}>
        {arr.map((i, index) => (
          <Button
            active={active === index}
            props={{ onClick: () => setAtive(index) }}
            key={index}
          >
            {i}
          </Button>
        ))}
      </Flex>

      <div className="my-5 h-60 bg-red-300 text-white">chart</div>

      <div className="mx-auto mt-8">
        <button className="font-cas rounded-3xl bg-black px-20 py-5 text-[13px] text-white transition-all duration-300 hover:brightness-125 dark:bg-white dark:text-black">
          Update your credit points
        </button>
      </div>
    </div>
  );
}

export default Chart;

interface ButtonProps {
  children: React.ReactNode;
  active: boolean;
  props?: React.DOMAttributes<HTMLButtonElement>;
}

function Button({ children, props, active }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${active ? "border-0 bg-white !font-medium" : "bg-transparent"} rounded-[18px] border border-gray-300 p-3 px-8 text-sm text-black hover:!bg-white active:bg-white`}
    >
      {children}
    </button>
  );
}
