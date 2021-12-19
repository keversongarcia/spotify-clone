import { Box, Grid } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <Grid gridTemplateColumns="230px 1fr">
      <Sidebar />
      <Box>
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Grid>
  );
};

export default Layout;
