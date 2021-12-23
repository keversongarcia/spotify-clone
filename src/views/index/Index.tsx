import { Box, SimpleGrid } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data } = useSession();
  console.log("Sessão", data);
  return (
    <Box>
      <SimpleGrid columns={5} gap={4}>
        teste
      </SimpleGrid>
    </Box>
  );
};

export default Index;
