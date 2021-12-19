import Loading from "@/components/Loading";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { FaSpotify } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  if (status === "unauthenticated") {
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
  } else {
    return (<></>) as ReactElement;
  }
};

export default Login;
