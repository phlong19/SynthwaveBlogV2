import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Container } from "@mantine/core";
import { useState } from "react";

function Login() {
  const [tk, setTk] = useState<string>("");

  return (
    <Container>
      <form className="mx-auto my-40 max-w-96 space-y-6" action="">
        <Input
          name="email"
          setValue={setTk}
          value={tk}
          holder="email pls"
          type="email"
        />
        <Button type="button">login</Button>
      </form>
    </Container>
  );
}

export default Login;
