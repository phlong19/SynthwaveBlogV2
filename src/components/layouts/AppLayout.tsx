import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/NavBar";
import Footer from "../ui/Footer";
import AffixButton from "../ui/AffixButton";

function AppLayout() {
  return (
    <main className="mt-16 flex min-h-[calc(100dvh-65px)] w-full flex-col bg-[image:url(/pat.svg)] text-black dark:text-white">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>

      <AffixButton />

      <Footer />
    </main>
  );
}

export default AppLayout;
