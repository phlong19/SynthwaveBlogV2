import { HoverCard } from "@mantine/core";
import ThemeToggle from "./ThemeToggle";
import { IconDotsVertical } from "@tabler/icons-react";
import { useState } from "react";
import NavLink from "./NavLink";

function Actions() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <HoverCard>
        <HoverCard.Target>
          <IconDotsVertical
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            size={18}
            className={`cursor-pointer ${hover ? "bg-clip-text shadow shadow-orange-400 dark:shadow-blue-500" : ""}`}
          />
        </HoverCard.Target>

        <HoverCard.Dropdown fz="sm" p={0}>
          <>
            <NavLink to="/auth/login" label="login" />

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
          </>
        </HoverCard.Dropdown>
      </HoverCard>

      <ThemeToggle />
    </>
  );
}

export default Actions;
