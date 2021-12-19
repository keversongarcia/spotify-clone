import { Box, Button, Flex, Image, useStyleConfig } from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";

const Sidebar = () => {
  const styles = useStyleConfig("Sidebar");
  return (
    <Box as="aside" sx={styles}>
      <Flex
        position="sticky"
        top={4}
        direction="column"
        justify="space-between"
        h="100%"
      >
        <Image src="/spotify.svg" alt="Spotify Logo" />
        <Box>
          <Button
            leftIcon={<HiPlus />}
            w="100%"
            bg="whiteAlpha.200"
            _hover={{ bg: "whiteAlpha.300" }}
            _focus={{ bg: "whiteAlpha.300" }}
            _active={{ bg: "whiteAlpha.300" }}
          >
            Criar Playlist
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
