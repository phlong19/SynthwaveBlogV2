import { Box, Button, Flex, Stack, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandX,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

function AuthActions() {
  return (
    <Stack mx="auto" justify="center" w="100%" align="start">
      <NavLink to="/auth/login" className="auth">
        Already have an account?
      </NavLink>
      <NavLink to="/auth/register" className="auth">
        Need an account
      </NavLink>
      <NavLink className="auth" to="/auth/forgot-password">
        Have some trouble?
      </NavLink>

      <Box w="100%">
        <Text mb={5} fw={600}>
          Login with
        </Text>
        <Flex
          gap="sm"
          display={{ base: "grid" }}
          className="grid-cols-2"
          direction={{ base: "column", md: "row" }}
        >
          <Button leftSection={<IconBrandGoogle size={18} />}>Google</Button>
          <Button leftSection={<IconBrandFacebook size={20} />}>
            Facebook
          </Button>
          <Button leftSection={<IconBrandGithub size={20} />}>Github</Button>
          <Button leftSection={<IconBrandX size={18} />}>Twitter</Button>
        </Flex>
      </Box>
    </Stack>
  );
}

export default AuthActions;
