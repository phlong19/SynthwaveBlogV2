import Button from "./components/Button";
import { Button as MCButton } from "@mantine/core";

function App() {
  return (
    <div className="container flex items-center">
      home
      <Button>hi</Button>
      <MCButton>bla</MCButton>
    </div>
  );
}

export default App;
