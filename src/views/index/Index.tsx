import api from "@/api";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

const Index = () => {
  return (
    <Box>
      <SimpleGrid columns={5} gap={4}>
        {/* {data.slice(0, 5).map((album) => (
          <Box key={album.id} bg="whiteAlpha.100" rounded="md" p={3}>
            <Image src={album.images[0].url} alt="Poster Album" rounded="md" />
            <Text fontSize="sm" fontWeight="semibold">
              {album.name}
            </Text>
          </Box>
        ))} */}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
