import Button from "@/components/ui/Button";
import { Navbar } from "@/components/ui/NavBar";

import { Button as MCButton } from "@mantine/core";

function Home() {
  return (
    <div className="container flex items-center font-cas">
      home
      <Navbar />
      <Button>hi, this i cascadia code font</Button>
      <MCButton>bla</MCButton>
    </div>
  );
}

export default Home;
