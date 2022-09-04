import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LinkedIn from "../public/linkedin.svg";
import Github from "../public/github.svg";
import Email from "../public/email.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jakob Hansen - Software Engineer</title>
        <meta name="description" content="Portfolio webiste" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-center">
          <div className="w-fit">
            <div>
              <h1 className="text-2xl font-bold">Jakob Hansen</h1>
              <h2 className="text-textsecondary">
                Computer science student at UiO
              </h2>
            </div>
            <div className="m-2 flex w-full flex-row justify-center">
              <LinkedIn className="h-16 w-16 text-stark" />
              <Github className="h-16 w-16 text-stark" />
              <Email className="h-8 w-8 text-stark" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
