import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/services/redux/darkModeSlice";
import { RootState } from "@/services/redux/store";

function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const [clicked, setClicked] = useState(false);

  console.log(colorScheme);

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
      <AnimatePresence>
        <motion.div
          initial={{ translateY: darkMode ? -20 : 20 }}
          whileHover={!clicked ? { translateY: darkMode ? 20 : -20 } : {}}
        >
          <IconSun />
          <br />
          <IconMoon />
        </motion.div>
      </AnimatePresence>
    </ActionIcon>
  );
}

export default ThemeToggle;
