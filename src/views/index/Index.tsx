import { Box, Flex } from "@chakra-ui/react";
import NewReleases from "./components/NewReleases";
import RecentlyTracks from "./components/RecentlyTracks";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" gridGap={6}>
        <RecentlyTracks />
        <NewReleases />
      </Flex>
    </Box>
  );
};

export default Index;
