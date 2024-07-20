import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { setDarkMode, toggleDarkMode } from "@/services/redux/darkModeSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

function ThemeToggle() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode.theme);
  const { setColorScheme } = useMantineColorScheme();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("mantine-color-scheme-value")?.toString() === "dark";

    if (isDark) {
      document.documentElement.classList.add("dark");
      dispatch(setDarkMode(true));
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dispatch]);

  const handleToggle = () => {
    const newMode = !darkMode;
    dispatch(toggleDarkMode());

    if (newMode) {
      setColorScheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setColorScheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ActionIcon
      c="black"
      bg="none"
      className="group"
      onClick={() => {
        handleToggle();
        setClicked(true);
      }}
      onMouseLeave={() => setClicked(false)}
    >
      {/* <AnimatePresence> */}
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: darkMode ? -20 : 20 }}
        whileHover={!clicked ? { translateY: darkMode ? 20 : -20 } : {}}
      >
        {/* 20 */}
        <IconSun className="text-yellow-500" />
        <br /> {/* 0 here */}
        {/* -20 */}
        <IconMoon className="text-blue-600" />
      </motion.div>
      {/* </AnimatePresence> */}
    </ActionIcon>
  );
}

export default ThemeToggle;
