import { Container, Stack, Title } from "@mantine/core";

interface Props {
  children: React.ReactNode;
  title: string;
}

function AuthFormWrapper({ children, title }: Props) {
  return (
    <Container>
      <Stack maw="24rem" mx="auto" gap='1.5rem' my={80}>
        <Title tt="capitalize">{title}</Title>
        {children}
      </Stack>
    </Container>
  );
}

export default AuthFormWrapper;
