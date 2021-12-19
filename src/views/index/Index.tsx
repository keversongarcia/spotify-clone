import api from "@/api";
import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";

const Index = () => {
  const { data } = useQuery(["api.home.release"], api.home.release);
  console.log(data);
  return <Box>Index</Box>;
};

export default Index;
