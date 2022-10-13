import { Post } from "../../pages/blog";
import { BlogPostLink } from "./BlogPostLink";

type Props = {
  posts: Post[];
  title: string;
  numPosts?: number;
};

export function BlogPostsList({ posts, title, numPosts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <BlogPostLink key={post.title} post={post} />
      ))}
    </div>
  );
}
