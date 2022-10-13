import { BlogPostsList } from "../../components/blog/BlogPostsList";
import { getBlogPosts } from "../../lib/blog/getBlogPosts";

export interface Post {
  filename: string;
  title: string;
  description: string;
  date: Date;
  publish: boolean;
}

export default function Blog({ posts }: { posts: Post[] }) {
  console.log(posts);
  return <BlogPostsList title="Blog posts" posts={posts} />;
}

export async function getStaticProps() {
  const posts = getBlogPosts();
  return {
    props: {
      posts: posts.map((post) => {
        return { ...post, date: JSON.stringify(post.date) };
      }),
    },
  };
}
