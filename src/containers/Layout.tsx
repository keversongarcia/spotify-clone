import Loading from "@components/Loading";
import { Box, Flex, Grid, useStyleConfig } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  const styles = useStyleConfig("Layout");
  const { status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (status === "authenticated") {
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
  } else {
    return (<></>) as ReactElement;
  }
};

export default Layout;
