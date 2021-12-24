import { Box, Button, Flex, Image, useStyleConfig } from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";

const Sidebar = () => {
  const styles = useStyleConfig("Sidebar");
  return (
    <Box as="aside" sx={styles}>
      <Flex
        position="fixed"
        w="230px"
        p={4}
        top={0}
        direction="column"
        justify="space-between"
        h="100%"
        borderRight="1px"
        borderColor="whiteAlpha.50"
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
