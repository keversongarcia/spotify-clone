import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

const Login = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box textAlign="center">
        <Image
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          alt="Spotify Logo"
          w="300px"
        />
        <Link href="/api/auth" passHref>
          <Button
            mt="100px"
            leftIcon={<FaSpotify />}
            bg="spy.green"
            _hover={{ bg: "spy.darkgreen" }}
          >
            Entrar com Spotify
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
