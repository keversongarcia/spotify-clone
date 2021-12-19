import { Box, Flex, Grid } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar";

const Layout = ({ children }) => {
  return (
    <Grid gridTemplateColumns="230px 1fr">
      <Sidebar />
      <Flex direction="column">
        <Header />
        <Box flexGrow={1} as="main">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Grid>
  );
};

export default Layout;
