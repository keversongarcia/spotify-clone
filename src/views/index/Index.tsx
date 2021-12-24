import useSpotify from "@/hooks/useSpotify";
import { Box, Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import NewReleases from "./components/NewReleases";
import RecentlyTracks from "./components/RecentlyTracks";

const Index = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyDevices().then((data) => console.log(data?.body.devices));
    }
  }, [session, spotifyApi]);

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
