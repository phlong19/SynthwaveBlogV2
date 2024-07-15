import { cn } from "@/lib/utils";
import { Badge, Flex, Image, Menu, Text } from "@mantine/core";
import {
  IconBubbleText,
  IconDotsVertical,
  IconHeart,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import React, { useState } from "react";
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
  tags,
}: {
  className?: string;
  title: string;
  tags?: Record<string, string>[];
  description?: string | React.ReactNode;
  thumb?: string; // url
  icon?: React.ReactNode;
  sider?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        `group/bento shadow-input relative row-span-1 flex ${sider ? "flex-row items-center gap-4" : "flex-col gap-0 sm:gap-1 md:gap-2"} show space-y-2 rounded-xl border border-transparent bg-white p-4 shadow-lg transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
        className,
      )}
    >
      <div
        className={`${sider ? "max-w-[80px]" : ""} relative overflow-hidden rounded-lg`}
      >
        <Link to={title}>
          <Image
            w="100%"
            radius="md"
            className="transition-all duration-500 group-hover/bento:scale-105"
            mah={150}
            mih={90}
            miw={sider ? 90 : "auto"}
            src={thumb}
            alt="post's thumbnail"
          />
          {!sider && (
            <>
              {/* overlay */}
              <div className="absolute bottom-0 left-0 right-0 top-1/4 bg-[image:linear-gradient(180deg,rgba(0,0,0,0)20%,rgba(0,0,0,0.8)90%);]"></div>
              {/* more in4 */}
              <Flex
                c="gray"
                w="100%"
                pos="absolute"
                justify="end"
                bottom={10}
                ta="right"
                pr={{ base: 30, md: 12, xl: 30 }}
                gap={8}
              >
                <CustomText
                  icon={
                    <IconBubbleText
                      className="transition-all duration-200 group-hover:stroke-blue-400"
                      size={16}
                    />
                  }
                  type="cmt"
                >
                  5 comments
                </CustomText>
                <CustomText
                  icon={
                    <IconHeart
                      className="transition-all duration-200 group-hover:stroke-red-500"
                      size={16}
                    />
                  }
                  type="like"
                >
                  5 likes
                </CustomText>
              </Flex>
            </>
          )}
        </Link>
      </div>

      {/* tags */}
      <Flex pos="absolute" top={12} right={20} gap={{ base: 5, md: 3 }}>
        {tags &&
          tags?.length > 0 &&
          !sider &&
          (tags?.length > 2 ? (
            <>
              {tags.slice(0, 2).map((tag) => (
                <CustomBadge key={tag.id} tag={tag.value} />
              ))}
              <CustomBadge tag={`+${tags.length - 2}`} />
            </>
          ) : (
            tags.map((tag) => <CustomBadge key={tag.id} tag={tag.value} />)
          ))}
      </Flex>

      {/* details */}
      <div className="min-h-[85px] flex-grow transition duration-200 group-hover/bento:translate-x-2 lg:flex-grow-0">
        <Link to={title}>
          <div className="flex items-center justify-start gap-2">
            {icon}
            <div
              className={`${sider ? "md:line-clamp-1" : "line-clamp-1 2xl:line-clamp-2"} mb-2 mt-2 font-bold text-neutral-600 dark:text-neutral-200`}
            >
              {title}
            </div>
          </div>
        </Link>
        <div
          className={` ${sider ? "max-w-40" : "max-w-[90%]"} line-clamp-2 text-xs font-normal text-neutral-600 dark:text-neutral-300`}
        >
          {description}
        </div>
      </div>

      <Menu opened={open} onChange={setOpen}>
        {/* menu */}
        <Menu.Target>
          <div
            className={`${open ? "visible" : "visible lg:invisible"} ${sider ? "bottom-3.5" : "bottom-3"} absolute right-3 cursor-pointer transition-all duration-150 group-hover/bento:visible`}
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

function CustomBadge({ tag }: { tag: string }) {
  return (
    <Badge
      tt="capitalize"
      variant="filled"
      size="sm"
      radius="5px"
      bg="white"
      c="black"
    >
      {tag}
    </Badge>
  );
}

function CustomText({
  icon,
  type = "cmt",
  children,
}: {
  type?: "cmt" | "like";
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const classes = {
    cmt: "group-hover:text-blue-400",
    like: "group-hover:text-red-500",
  };

  return (
    <Flex className="group" gap={4} justify="center" align="center">
      {icon}
      <Text
        fw={500}
        fz={{ base: "sm", sm: "xs", lg: "sm" }}
        className={cn(classes[type], `font-sans transition-all duration-200`)}
      >
        {children}
      </Text>
    </Flex>
  );
}
