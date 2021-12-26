import { Box, Button, Flex } from "@chakra-ui/react";
import { parse } from "cookie";
import { useEffect, useState } from "react";

const Home = ({ pageProps: { token } }) => {
  const [myToken, setToken] = useState();

  useEffect(() => {
    setToken(token);
  }, []);

  return (
    <Box>
      <Flex direction="column" gridGap={6}>
        {/* <RecentlyTracks />
        <NewReleases /> */}
      </Flex>
    </Box>
  );
};

Home.getInitialProps = ({ req, res }) => {
  const cookieToken = parse(req ? req.headers.cookie || "" : document.cookie);

  return {
    token: cookieToken?.token,
  };
};

export default Home;
