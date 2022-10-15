import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import LinkedIn from "../public/linkedin.svg";
import Github from "../public/github.svg";
import Email from "../public/email.svg";
import { BlogPostsList } from "../components/blog/BlogPostsList";
import { getBlogPosts } from "../lib/blog/getBlogPosts";
import { Post } from "./blog";
import Link from "next/link";
import { getSocials } from "../lib/blog/getSocials";

const Home = ({
  posts,
  socials,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const parsedPosts: Post[] = posts.map((post) => {
    return { ...post, date: new Date(post.date) };
  });
  const { linkedin, github, email } = socials;

  return (
    <div>
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
                  <LinkedIn className="mx-0.5 h-6 cursor-pointer text-stark" />
                </Link>
                <Link href={github}>
                  <Github className="mx-0.5 h-6 cursor-pointer text-stark" />
                </Link>
                <Link href={email}>
                  <Email className="mx-0.5 h-6 cursor-pointer text-stark" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="m-auto mt-4 max-w-2xl">
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
  return {
    props: {
      posts: posts.map((post) => {
        return { ...post, date: post.date.toLocaleString() };
      }),
      socials: getSocials(),
    },
  };
}

export default Home;
