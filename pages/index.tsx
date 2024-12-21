import * as fs from "fs";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { BlogPostsList } from "../components/blog/BlogPostsList";
import { getBlogPosts } from "../lib/blog/getBlogPosts";
import { getSocials } from "../lib/blog/getSocials";
import Email from "../public/images/frontpage/email.svg?react";
import Github from "../public/images/frontpage/github.svg?react";
import LinkedIn from "../public/images/frontpage/linkedin.svg?react";
import { Post } from "./blog";

const Home = ({
  posts,
  socials,
  cwd,
  files,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const parsedPosts: Post[] = posts.map((post) => {
    return { ...post, date: new Date(post.date) };
  });
  const { linkedin, github, email } = socials;

  return (
    <div>
      {cwd}
      {files}
      <Head>
        <title>Jakob Hansen - Software Engineer</title>
        <meta name="description" content="Portfolio webiste" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <div className="flex justify-center">
            <div className="w-fit">
              <div>
                <h1 className="text-2xl font-bold">Jakob Hansen</h1>
                <h2 className="text-textsecondary">
                  Computer science student at UiO
                </h2>
              </div>
              <div className="m-2 flex w-full flex-row items-center justify-center p-2">
                <Link href={linkedin}>
                  <div className="mx-2 cursor-pointer rounded-md py-2 outline outline-2 transition-all ease-in-out hover:outline-4">
                    <LinkedIn className="mx-4 h-6 scale-150 cursor-pointer text-stark" />
                  </div>
                </Link>
                <Link href={github}>
                  <div className="mx-2 cursor-pointer rounded-md py-2 outline outline-2 transition-all ease-in-out hover:outline-4">
                    <Github className="mx-4 h-6 scale-150 text-stark" />
                  </div>
                </Link>
                <Link href={email}>
                  <div className="mx-2 cursor-pointer rounded-md py-2 outline outline-2 transition-all ease-in-out hover:outline-4">
                    <Email className="mx-4 my-auto h-6 scale-150 cursor-pointer text-stark" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="m-auto mt-4 max-w-2xl p-2">
          <BlogPostsList
            title={"Recent blog posts"}
            posts={parsedPosts}
            numPosts={3}
          />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getBlogPosts();
  console.log("cwd", process.cwd());
  const files = fs.readdirSync(path.join(process.cwd(), "data", "recipes"));
  console.log(files);
  return {
    props: {
      posts: posts.map((post) => {
        return { ...post, date: post.date.toLocaleString() };
      }),
      socials: getSocials(),
      cwd: process.cwd(),
      files,
    },
  };
}

export default Home;
