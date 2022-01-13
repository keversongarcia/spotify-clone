import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "../assets/ThemeProvider";
import Head from "../containers/Head";
import Layout from "../containers/Layout";
import { useRouter } from "next/router";
import AuthProvider from "@/contexts/AuthContext";
import { useEffect } from "react";

function MyApp({ Component, ...pageProps }) {
  const router = useRouter();
  const queryClient = new QueryClient();

  const outOfTemplate = ["/login"];

  console.log("Inicio");

  return (
    <QueryClientProvider client={queryClient}>
      <Head />
      <ThemeProvider>
        <AuthProvider>
          {outOfTemplate.includes(router.asPath) ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
