import { InferGetStaticPropsType } from "next";
import { BlogPostsList } from "../../components/blog/BlogPostsList";
import { getBlogPosts } from "../../lib/blog/getBlogPosts";

export interface Post {
  filename: string;
  title: string;
  description: string;
  date: Date;
  publish: boolean;
}

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const parsedPosts: Post[] = posts.map((post) => {
    return { ...post, date: new Date(post.date) };
  });

  return (
    <div className="m-auto max-w-2xl p-2">
      <BlogPostsList title="All blog posts" posts={parsedPosts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getBlogPosts();
  return {
    props: {
      posts: posts.map((post) => {
        return { ...post, date: post.date.toLocaleString() };
      }),
    },
  };
}
