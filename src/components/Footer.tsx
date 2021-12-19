import { Box, HStack, Text, useStyleConfig } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  const styles = useStyleConfig("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" sx={styles}>
      <HStack fontSize="sm">
        <Text>{currentYear}</Text>
        <FaSpotify />
        <Text>Todos os direitos reservados.</Text>
      </HStack>
    </Box>
  );
};

export default Footer;
