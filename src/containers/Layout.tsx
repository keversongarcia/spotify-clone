import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      <Box>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
