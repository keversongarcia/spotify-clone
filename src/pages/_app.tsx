import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "../assets/ThemeProvider";
import Head from "../containers/Head";
import Layout from "../containers/Layout";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
