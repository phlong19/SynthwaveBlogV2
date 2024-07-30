import { Outlet } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

function ManageLayout() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[45px_1fr] bg-white dark:bg-black">
      <div className="bg-purple-400 text-sm text-black">
        sider
        <ThemeToggle />
      </div>
      <div className="h-full w-full text-black dark:text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default ManageLayout;
