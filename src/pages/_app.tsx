import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "../assets/ThemeProvider";
import Head from "../containers/Head";
import Layout from "../containers/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, ...pageProps }) {
  const router = useRouter();
  const queryClient = new QueryClient();

  const outOfTemplate = ["/login"];

  return (
    <QueryClientProvider client={queryClient}>
      <Head />
      <ThemeProvider>
        {outOfTemplate.includes(router.asPath) ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
