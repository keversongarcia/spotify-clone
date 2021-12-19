import { Box, Flex, Grid, useStyleConfig } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar";

const Layout = ({ children }) => {
  const styles = useStyleConfig("Layout");
  return (
    <Grid gridTemplateColumns="230px 1fr">
      <Sidebar />
      <Flex direction="column">
        <Header />
        <Box sx={styles} flexGrow={1} as="main">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Grid>
  );
};

export default Layout;
