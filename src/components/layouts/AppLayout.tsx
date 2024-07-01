import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/NavBar";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <main className="mt-16 min-h-[calc(100dvh-65px)] w-full bg-[image:url(/pat.svg)] px-3">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default AppLayout;
