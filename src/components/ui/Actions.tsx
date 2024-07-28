import {
  ActionIcon,
  Box,
  Flex,
  HoverCard,
  Input,
  Kbd,
  Modal,
  Tooltip,
} from "@mantine/core";
import ThemeToggle from "./ThemeToggle";
import {
  IconBrandAlgolia,
  IconDotsVertical,
  IconLogin,
  IconMaximize,
  IconSearch,
} from "@tabler/icons-react";
import NavLink from "./NavLink";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "@/hooks/redux";
import { useEffect } from "react";

function Actions() {
  const [opened, { close, open }] = useDisclosure();
  const { theme } = useAppSelector((state) => state.darkMode);

  // TODO
  // useEffect(() => {
  //   function handleKeyPress(e: React.KeyboardEvent<HTMLElement>): any {
  //     console.log(e);
  //   }

  //   document.addEventListener("keydown", handleKeyPress);

  //   return () => document.removeEventListener("keydown", handleKeyPress);
  // }, []);

  return (
    <div className="hidden gap-2 lg:flex lg:items-center">
      <Flex direction="column" gap={5}>
        <Input
          __vars={{
            "--input-bd-focus": !theme ? "orange" : "rgb(96 165 250)",
            "--input-bg": "transparent",
          }}
          size="xs"
          className="group relative w-52 font-cas transition-all duration-300 focus-within:w-56 hover:w-56"
          leftSectionPointerEvents="all"
          // leftSection={}
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
        />
        <Kbd className="w-fit self-end" size="xs" pos="absolute" bottom={-10}>
          Ctrl + K
        </Kbd>
      </Flex>

      <Modal opened={opened} onClose={close} fullScreen>
        <Modal.Body className="fixed inset-0 flex items-center justify-center">
          <p>hi</p>
        </Modal.Body>
      </Modal>

      <HoverCard>
        <HoverCard.Target>
          <IconDotsVertical size={18} className="cursor-pointer" />
        </HoverCard.Target>

        <HoverCard.Dropdown fz="sm" p={0}>
          <Box miw={200}>
            <NavLink
              to="/auth/login"
              label="login"
              props={{ leftSection: <IconLogin size={20} /> }}
            />

            <NavLink to="/auth/register" label="register" />
            <NavLink
              label="youtube"
              to="https://youtube.com"
              props={{ target: "_blank" }}
            />

            <NavLink tree label="links">
              <NavLink to="/auth/login" label="login" />
              <NavLink to="/auth/register" label="register" />
            </NavLink>
          </Box>
        </HoverCard.Dropdown>
      </HoverCard>

      <ThemeToggle />
    </div>
  );
}

export default Actions;
