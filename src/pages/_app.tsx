import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "../assets/ThemeProvider";
import Head from "../containers/Head";
import Layout from "../containers/Layout";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const outOfTemplate = ["/login"];

  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;
