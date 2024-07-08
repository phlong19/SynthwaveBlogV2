import Button from "@/components/ui/Button";
import { Container } from "@mantine/core";

function Login() {
  return (
    <Container>
      <form className="max-w-96 mx-auto my-40" action="">
        <Button>login</Button>
      </form>
    </Container>
  );
}

export default Login;
