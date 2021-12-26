import { Box, Button, Flex } from "@chakra-ui/react";

const Index = () => {
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

export default Index;
