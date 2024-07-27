import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import {
  IconMoonFilled,
  IconSun,
  IconSunrise,
  IconSunset,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: darkMode ? -19 : 19 }}
        whileHover={!clicked ? { translateY: darkMode ? 19 : -19 } : {}}
      >
        {/* 20 */}
        {darkMode ? (
          <IconSunrise className="text-yellow-300" size={21} />
        ) : (
          <IconSun className="fill-orange-500 text-orange-500" size={21} />
        )}
        <br /> {/* 0 here */}
        {/* -20 */}
        {darkMode ? (
          <IconMoonFilled className="text-blue-500" size={21} />
        ) : (
          <IconSunset className="text-orange-600" size={21} />
        )}
      </motion.div>
    </ActionIcon>
  );
}

export default ThemeToggle;
