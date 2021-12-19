import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "../assets/ThemeProvider";
import Head from "../containers/Head";
import Layout from "../containers/Layout";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import AuthProvider from "@/context/Auth.context";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const [history, setHistory] = useState([]);
  const queryClient = new QueryClient();

  const outOfTemplate = ["/login"];

  useEffect(() => {
    setHistory((prevs) => [...prevs, router.asPath]);
  }, [router.asPath]);

  return (
    <SessionProvider session={session}>
      <AuthProvider>
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
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
