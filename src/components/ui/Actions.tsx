import { HoverCard, Menu, ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";
import Button from "./Button";
import { IconMoon, IconSun, IconSunMoon } from "@tabler/icons-react";
import { useState } from "react";

function Actions() {
  const [hover, setHover] = useState(false);
  const current = true ? (
    <IconSun className="text-black transition-colors duration-200 group-hover:text-black/90" />
  ) : (
    <IconMoon className="text-black transition-colors duration-200 group-hover:text-black/90" />
  );

  return (
    <HoverCard>
      <HoverCard.Target>
        <div>actions</div>
      </HoverCard.Target>

      <HoverCard.Dropdown>
        <Link to="/auth/login">login page</Link>
      </HoverCard.Dropdown>
      <Menu>
        <Menu.Target>
          <ActionIcon
            bg="none"
            className="group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {!hover ? (
              current
            ) : (
              <IconSunMoon className="text-black transition-colors duration-200 group-hover:text-black/90" />
            )}
          </ActionIcon>
        </Menu.Target>
      </Menu>
    </HoverCard>
  );
}

export default Actions;
