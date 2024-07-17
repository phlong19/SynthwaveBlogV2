import { HoverCard } from "@mantine/core";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Actions() {
  return (
    <HoverCard>
      <HoverCard.Target>
        <div>actions</div>
      </HoverCard.Target>

      <HoverCard.Dropdown>
        <Link to="/auth/login">login page</Link>
      </HoverCard.Dropdown>

      <ThemeToggle />
    </HoverCard>
  );
}

export default Actions;
