import { Anchor, Flex } from "@mantine/core";
import { IconChevronsUpRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  order?: number;
  children: React.ReactNode;
  className?: string;
  fz?: string;
  link?: string;
}

function Heading({
  link,
  name,
  order = 3,
  children,
  fz = "text-xl",
  className,
}: Props) {
  const Heading = `h${order}` as keyof JSX.IntrinsicElements;

  return (
    <Flex className="items-center justify-between" pt={15} pb={6} pl="8">
      <Heading
        data-name={name}
        className={`title mx-0 font-cas font-bold leading-[1.4] ${fz} ${className}`}
      >
        {children}
      </Heading>

      {link && (
        <Anchor
          display="flex"
          to={link}
          component={Link}
          fz="sm"
          className="group flex gap-1 !text-gray-500 transition-all duration-200"
        >
          <span>View all</span>
          <span className="-translate-x-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            <IconChevronsUpRight />
          </span>
        </Anchor>
      )}
    </Flex>
  );
}

export default Heading;
