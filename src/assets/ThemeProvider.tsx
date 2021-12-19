import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const components = {
  Sidebar: {
    baseStyle: {
      minH: "100vh",
      p: 4,
      borderRight: "1px",
      borderColor: "whiteAlpha.50",
    },
  },
  Header: {
    baseStyle: {
      p: 4,
      bg: "spy.dark",
      position: "sticky",
      top: 0,
    },
  },
  Footer: {
    baseStyle: {
      p: 4,
      color: "whiteAlpha.300",
    },
  },
  Layout: {
    baseStyle: {
      p: 4,
    },
  },
};

const theme = extendTheme({
  colors: {
    spy: {
      dark: "#0F141E",
      green: "#1db954",
      darkgreen: "#17883f",
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
