/* eslint-disable no-var */
import { Box, Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <Box>
      Login page!
      <Button onClick={() => signIn()}>Entrar</Button>
    </Box>
  );
};

export default Login;
