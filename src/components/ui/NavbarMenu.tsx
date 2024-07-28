import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Image } from "@mantine/core";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="group relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-black hover:opacity-[0.9] ${active === item ? "group-hover:text-orange-500 dark:group-hover:text-blue-400" : ""} transition-colors duration-300 dark:text-white`}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform rounded-2xl bg-transparent">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="-mt-2 overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-zinc-900"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive?: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive?.(null)} // resets the state
      className="shadow-input relative flex items-center justify-between space-x-4 border border-white/[0.2] bg-white/30 px-3 py-4 dark:border-transparent dark:bg-black/60"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      to={href}
      className="group/item flex items-center gap-1.5 space-x-2 xl:gap-2"
    >
      <Image
        src={src}
        miw={140}
        mih={70}
        maw={140}
        mah={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl brightness-[.85] transition-all duration-200 group-hover/item:brightness-100 dark:brightness-75"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black transition-colors duration-200 group-hover/item:text-orange-500 dark:text-white dark:group-hover/item:text-blue-400">
          {title}
        </h4>
        <p className="max-w-[12rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link
      to={to}
      className="text-neutral-700 transition-colors duration-200 hover:text-black dark:text-neutral-400 dark:hover:text-white"
    >
      {children}
    </Link>
  );
};
