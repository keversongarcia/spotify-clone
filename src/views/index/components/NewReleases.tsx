import useSpotify from "@/hooks/useSpotify";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const NewReleases = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getNewReleases({ limit: 5 })
        .then((data) => setReleases(data?.body.albums.items));
    }
  }, [session, spotifyApi]);

  return (
    <Box>
      <Heading fontSize="3xl" mb={2}>
        Lançamentos
      </Heading>
      <SimpleGrid columns={5} gap={4}>
        {releases.map((release) => (
          <Box key={release.id} bg="whiteAlpha.50" p={4} rounded="md">
            <Image src={release.images[0].url} />
            <Box mt={2}>
              <Text isTruncated fontWeight="semibold">
                {release.name}
              </Text>
              <Text fontSize="xs" color="whiteAlpha.600">
                {release.release_date}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default NewReleases;
