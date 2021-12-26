import useTokenStore from "@/hooks/useTokenStore";
import { Box, Button, Flex } from "@chakra-ui/react";
import { checkCookies, getCookie } from "cookies-next";
import { useEffect } from "react";

const Home = ({ pageProps: token }) => {
  const { setToken } = useTokenStore();

  useEffect(() => {
    setToken(token?.access_token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token?.access_token]);

  return (
    <Box>
      <Button>Login</Button>
      <Flex direction="column" gridGap={6}>
        {/* <RecentlyTracks />
        <NewReleases /> */}
      </Flex>
    </Box>
  );
};

export function getServerSideProps({ req, res }) {
  const isToken = checkCookies("token", { req, res });
  const access_token = getCookie("token", { req, res });

  return {
    props: {
      isToken,
      access_token,
    },
  };
}

export default Home;
