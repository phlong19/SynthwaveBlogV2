import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/NavBar";
import Footer from "../ui/Footer";
import AffixButton from "../ui/AffixButton";

function AppLayout() {
  return (
    <main className="mt-16 min-h-[calc(100dvh-65px)] w-full bg-[image:url(/pat.svg)]">
      <Navbar />
      <Outlet />

      <AffixButton />

      <Footer />
    </main>
  );
}

export default AppLayout;
