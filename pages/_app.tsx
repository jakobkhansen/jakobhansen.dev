import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavBar } from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
