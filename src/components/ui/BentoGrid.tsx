import { cn } from "@/lib/utils";
import { Image, Menu, Text } from "@mantine/core";
import {
  IconDotsVertical,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  thumb,
  icon,
  sider,
}: {
  className?: string;
  title: string;
  description?: string | React.ReactNode;
  thumb?: string; // url
  icon?: React.ReactNode;
  sider?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        `group/bento shadow-input relative row-span-1 flex bg-red-600 ${sider ? "flex-row items-center gap-4" : "flex-col gap-0 sm:gap-1 md:gap-2"} show space-y-2 rounded-xl border border-transparent bg-white p-4 shadow-lg transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
        className,
      )}
    >
      <div className={`${sider ? "max-w-[80px]" : ""} overflow-hidden`}>
        <Link to={title}>
          <Image
            w="100%"
            radius="md"
            className="transition-all duration-500 group-hover/bento:scale-110"
            mah={150}
            src={thumb}
            alt="post's thumbnail"
          />
        </Link>
      </div>
      <div className="min-h-[85px] flex-grow transition duration-200 group-hover/bento:translate-x-2 lg:flex-grow-0">
        <Link to={title}>
          <div className="flex items-center justify-start gap-2">
            {icon}
            <div
              className={`${sider ? "md:line-clamp-1" : "line-clamp-1 xl:line-clamp-2"} mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200`}
            >
              {title}
            </div>
          </div>
        </Link>
        <div
          className={` ${sider ? "line-clamp-2 max-w-40" : "line-clamp-3 max-w-[90%]"} font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300`}
        >
          {description}
        </div>
      </div>
      <Menu opened={open} onChange={setOpen}>
        {/* menu */}
        <Menu.Target>
          <div
            className={`${open ? "visible" : "invisible"} ${sider ? "bottom-3.5" : "bottom-3"} absolute right-3 cursor-pointer transition-all duration-150 group-hover/bento:visible`}
          >
            <IconDotsVertical size="14" />
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label className="line-clamp-1">{title}</Menu.Label>
          <Menu.Item leftSection={<IconSettings size="18" />}>
            settings
          </Menu.Item>
          <Menu.Item
            leftSection={<IconSearch size={18} />}
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
