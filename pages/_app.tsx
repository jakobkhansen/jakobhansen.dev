import type { AppProps } from "next/app";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
