import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const Index = () => {
  const {
    data: { user },
  } = useSession();
  return <Box>Index</Box>;
};

export default Index;
