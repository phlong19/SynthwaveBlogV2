import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="mt-16 w-full px-3">
      <Outlet />
    </main>
  );
}

export default AppLayout;
