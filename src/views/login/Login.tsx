import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { FaSpotify } from "react-icons/fa";

const Login = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box textAlign="center">
        <Image src="/spotify.svg" alt="Spotify Logo" w="300px" />
        <Button
          mt="100px"
          leftIcon={<FaSpotify />}
          onClick={() => signIn()}
          bg="spy.green"
          _hover={{ bg: "spy.darkgreen" }}
        >
          Entrar com spotify
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
