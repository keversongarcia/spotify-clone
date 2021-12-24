import useSpotify from "@/hooks/useSpotify";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const RecentlyTracks = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getMyRecentlyPlayedTracks({ limit: 6 })
        .then((data) => setTracks(data?.body?.items));
    }
  }, [session, spotifyApi]);

  return (
    <Box>
      <Heading fontSize="3xl" mb={2}>
        Recentes
      </Heading>
      <SimpleGrid columns={3} gap={4}>
        {tracks.map((track) => (
          <Grid
            key={track.track.id}
            bg="whiteAlpha.50"
            rounded="md"
            templateColumns="80px 1fr"
            overflow="hidden"
            gap={3}
            alignItems="center"
          >
            <GridItem>
              <Box
                h="80px"
                bg={`URL(${track.track.album.images[0].url})`}
                bgSize="cover"
              />
            </GridItem>
            <GridItem>
              <Text fontWeight="semibold">{track.track.name}</Text>
            </GridItem>
          </Grid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecentlyTracks;
