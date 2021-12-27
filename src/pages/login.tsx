import { Box, Button, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

const Login = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      columns={2}
      bg="URL(https://hdwallsource.com/img/2019/4/spotify-music-desktop-wallpaper-67733-70052-hd-wallpapers.jpg)"
      bgSize="cover"
      bgPos="center"
    >
      <Box textAlign="center">
        <Image
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="Spotify Logo"
          w="300px"
          mx="auto"
        />
        <Box>
          <Link href="/api/auth" passHref>
            <Button
              mt="100px"
              leftIcon={<FaSpotify />}
              bg="white"
              size="lg"
              rounded="full"
              color="spy.dark"
              _hover={{ bg: "white", color: "#4b8e7d" }}
              _focus={{ boxShadow: "none" }}
            >
              Entrar com Spotify
            </Button>
          </Link>
        </Box>
        <ChakraLink href="https://www.spotify.com/br/signup" target="_blank">
          <Button
            mt={4}
            variant="ghost"
            size="lg"
            color="white"
            rounded="full"
            _hover={{ bg: "transparent", textDecor: "underline" }}
          >
            Inscrever-se
          </Button>
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Login;
