import { Box, Image, useStyleConfig } from "@chakra-ui/react";

const Sidebar = () => {
  const styles = useStyleConfig("Sidebar");
  return (
    <Box as="aside" sx={styles}>
      <Box position="sticky" top={4}>
        <Image src="/spotify.svg" alt="Spotify Logo" />
      </Box>
    </Box>
  );
};

export default Sidebar;
