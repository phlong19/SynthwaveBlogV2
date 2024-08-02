import { Outlet } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import { IconUserCircle } from "@tabler/icons-react";
import toast from "react-hot-toast";

function ManageLayout() {
  return (
    <div className="grid max-h-screen min-h-screen w-full grid-cols-[45px_1fr] overflow-hidden bg-white dark:bg-black">
      <div className="sticky left-0 top-0 flex h-screen flex-col items-center justify-between border-r border-light bg-white py-3 text-center text-sm text-black shadow-xl dark:bg-zinc-800">
        links
        <div className="flex flex-col items-center gap-2">
          <ThemeToggle />
          <IconUserCircle onClick={() => toast.success("hi")} />
        </div>
      </div>
      <div className="h-full w-full text-black bg-light dark:text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default ManageLayout;
