import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const components = {
  Sidebar: {
    baseStyle: {
      minH: "100vh",
      p: 4,
    },
  },
  Header: {
    baseStyle: {
      justifyContent: "space-between",
      p: 4,
      bg: "spy.dark",
      position: "sticky",
      top: 0,
    },
  },
};

const theme = extendTheme({
  colors: {
    spy: {
      dark: "#0F141E",
    },
  },
  styles: {
    global: {
      body: {
        bg: "spy.dark",
        color: "white",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  components,
});

const ThemeProvider = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
