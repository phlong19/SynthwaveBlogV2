import { Outlet } from "react-router-dom";

function ManageLayout() {
  return (
    <div className="bg-black/25 w-full min-h-screen">
      <Outlet />
    </div>
  );
}

export default ManageLayout;
