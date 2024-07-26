import { Box, Button, Flex, Stack, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function AuthActions({ to }: { to?: string }) {
  const link = `/auth/${to}`;

  return (
    <Stack mx="auto" justify="center" align="start">
      {(to === "login" || to === "both") && (
        <Link to={link}>Already have an account?</Link>
      )}
      {(to === "register" || to === "both") && (
        <Link to={link}>Need an account</Link>
      )}
      <Link to="/auth/forgot-password">have some trouble?</Link>

      <Box>
        <Text mb={5} fw={600}>
          Login with
        </Text>
        <Flex
          gap="sm"
          display={{ base: "grid", md: "flex" }}
          className="grid-cols-2"
          direction={{ base: "column", md: "row" }}
        >
          <Button leftSection={<IconBrandGoogle />}>Google</Button>
          <Button leftSection={<IconBrandFacebook />}>Facebook</Button>
          <Button leftSection={<IconBrandGithub />}>Github</Button>
          <Button leftSection={<IconBrandX />}>Twitter</Button>
        </Flex>
      </Box>
    </Stack>
  );
}

export default AuthActions;
