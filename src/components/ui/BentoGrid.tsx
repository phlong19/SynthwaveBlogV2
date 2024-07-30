import { cn } from "@/lib/utils";
import { Badge, Flex, Image, Menu, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconBookmark,
  IconBubbleText,
  IconDotsVertical,
  IconEyeBolt,
  IconHeart,
  IconShare,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

interface ItemProps {
  className?: string;
  title: string;
  tags?: Record<string, string>[];
  description?: string;
  thumb?: string; // url
  sider?: boolean;
}

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
  sider,
  tags,
}: ItemProps) => {
  const [open, setOpen] = useState(false);
  const link = `/blog/${slugify(title.toLowerCase())}`;

  return (
    <div
      className={cn(
        `group/bento shadow-input relative row-span-1 flex ${sider ? "flex-row items-center gap-4" : "flex-col gap-0 sm:gap-1 md:gap-2"} show space-y-2 rounded-xl border border-transparent bg-white p-4 shadow-lg transition duration-200 hover:shadow-xl dark:border dark:border-white/10 dark:bg-[rgb(46,46,46)] dark:shadow-none dark:hover:bg-transparent`,
        className,
      )}
    >
      <div
        className={`${sider ? "max-w-[80px]" : ""} relative overflow-hidden rounded-lg`}
      >
        <Link to={link}>
          <Image
            w="100%"
            radius="md"
            className={` ${
              sider
                ? "brightness-90 group-hover/bento:scale-105"
                : "brightness-75 group-hover/bento:brightness-90"
            } transition-all duration-500`}
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
                pr={{ base: 30, md: 12, xl: 15 }}
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
                  5
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
                  5
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

      <Link to={link}>
        {/* details */}
        <div
          className={`min-h-[85px] flex-grow transition duration-200 ${!sider ? "group-hover/bento:translate-x-2" : ""} lg:flex-grow-0`}
        >
          <div className="flex items-center justify-start gap-2">
            <div
              className={`${sider ? "md:line-clamp-1" : "line-clamp-1 2xl:line-clamp-2"} mb-2 mt-2 font-bold text-neutral-600 transition-colors duration-300 group-hover/bento:text-black/90 dark:text-neutral-200 dark:group-hover/bento:text-white`}
            >
              {title}
            </div>
          </div>
          <div
            className={` ${sider ? "max-w-40" : "max-w-[90%]"} line-clamp-2 text-xs font-normal text-neutral-600 group-hover/bento:text-black/90 dark:text-neutral-300 dark:group-hover/bento:text-white`}
            title={description}
          >
            {description}
          </div>
        </div>
      </Link>

      <Menu opened={open} onChange={setOpen}>
        {/* menu */}
        <Menu.Target>
          <div
            className={`${open ? "visible text-orange-500 dark:text-blue-400" : "visible lg:invisible"} ${sider ? "bottom-3.5" : "bottom-3"} absolute right-3 cursor-pointer transition-all duration-150 group-hover/bento:visible`}
          >
            <IconDotsVertical size={sider ? 16 : 18} />
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label className="line-clamp-1">{title}</Menu.Label>
          <Menu.Item leftSection={<IconEyeBolt size="18" />}>
            Quick view
          </Menu.Item>
          <Menu.Item leftSection={<IconBookmark size={18} />}>
            Bookmark
          </Menu.Item>
          <Menu.Item
            leftSection={<IconShare size={18} />}
            onClick={() =>
              notifications.show({ message: "hi", title: "play pes now" })
            }
          >
            Share
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
