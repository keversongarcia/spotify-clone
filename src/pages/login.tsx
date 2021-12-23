import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { signIn, getProviders } from "next-auth/react";
import { FaSpotify } from "react-icons/fa";

const Login = ({ providers }) => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box textAlign="center">
        <Image src="/spotify.svg" alt="Spotify Logo" w="300px" />
        {Object.values(providers).map((provider) => (
          <Button
            key={provider.name}
            mt="100px"
            leftIcon={<FaSpotify />}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            bg="spy.green"
            _hover={{ bg: "spy.darkgreen" }}
          >
            Entrar com {provider.name}
          </Button>
        ))}
      </Box>
    </Flex>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
