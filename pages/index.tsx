import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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
              <h1 className="text-2xl font-bold text-textprimary">
                Jakob Hansen
              </h1>
              <h2 className="text-textsecondary">
                Computer science student at UiO
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
