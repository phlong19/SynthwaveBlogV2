import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Input,
  Popover,
  Tooltip,
} from "@mantine/core";
import ThemeToggle from "./ThemeToggle";
import {
  IconDotsVertical,
  IconLogin,
  IconMaximize,
  IconSearch,
  IconUserCircle,
} from "@tabler/icons-react";
import NavLink from "./NavLink";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "@/hooks/redux";
import { useEffect, useState } from "react";
import AdvancedSearch from "./AdvancedSearch";
import { Link } from "react-router-dom";

function Actions() {
  // searchbox state
  const [opened, { close, open }] = useDisclosure();
  // action state
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  const { theme } = useAppSelector((state) => state.darkMode);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "/") {
        e.preventDefault();
        document.getElementById("searchbox")?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="hidden gap-2 lg:flex lg:items-center">
      <Input
        id="searchbox"
        __vars={{
          "--input-bd-focus": !theme ? "orange" : "rgb(96 165 250)",
          "--input-bg": "transparent",
        }}
        size="xs"
        className="group relative w-52 font-cas transition-all duration-300 focus-within:w-60 hover:w-60"
        rightSectionPointerEvents="all"
        rightSection={
          <Flex align="center" gap={5} right={0} pos="absolute">
            <Tooltip label="Advanced Search">
              <IconMaximize
                size={18}
                onClick={open}
                className="invisible cursor-pointer hover:text-orange-500 group-hover:visible dark:hover:text-blue-400"
              />
            </Tooltip>

            <ActionIcon className="!rounded-sm !bg-orange-500 transition-colors duration-300 hover:!bg-orange-600 dark:!bg-[rgb(79_134_224)] hover:dark:!bg-blue-500">
              <IconSearch size={16} />
            </ActionIcon>
          </Flex>
        }
        placeholder="Press / to search"
      />

      <AdvancedSearch close={close} opened={opened} />
      <ThemeToggle />
      <Popover opened={isOpen} onChange={setIsOpen}>
        <Popover.Target>
          <IconDotsVertical
            onClick={() => setIsOpen((o) => !o)}
            size={18}
            className={`cursor-pointer ${isOpen ? "text-orange-500 dark:text-blue-400" : ""}`}
          />
        </Popover.Target>

        <Popover.Dropdown fz="sm" p={0}>
          <Box miw={200}>
            <NavLink
              onClick={onClose}
              to="/auth/login"
              label="login"
              props={{
                leftSection: <IconLogin size={20} />,
              }}
            />

            <NavLink to="/auth/register" onClick={onClose} label="register" />
            <NavLink
              label="youtube"
              to="https://youtube.com"
              props={{ target: "_blank" }}
              onClick={onClose}
            />

            <NavLink tree label="links">
              <NavLink to="/auth/login" onClick={onClose} label="login" />
              <NavLink to="/auth/register" onClick={onClose} label="register" />
            </NavLink>
          </Box>
        </Popover.Dropdown>
      </Popover>

      <div className="hidden xl:block">
        <Button
          component={Link}
          to={"/auth/login"}
          radius="md"
          leftSection={<IconUserCircle size={22} />}
          bd="2px solid #ddd"
          className="!text-zinc-800 !line-through transition-colors duration-300 hover:!border-zinc-400 hover:!text-black hover:decoration-transparent"
          bg={"white"}
          fw={400}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Actions;
