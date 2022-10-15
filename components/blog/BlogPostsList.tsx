import { Post } from "../../pages/blog";
import { BlogPostLink } from "./BlogPostLink";
import { PostDivider } from "./PostDivider";

type Props = {
  posts: Post[];
  title: string;
  numPosts?: number;
};

export function BlogPostsList({ posts, title, numPosts }: Props) {
  if (numPosts) {
    posts = posts.slice(0, numPosts);
  }
  return (
    <div>
      <h1 className="text-lg ">{title}</h1>
      <PostDivider />
      {posts.map((post) => (
        <>
          <BlogPostLink key={post.title} post={post} />
          <PostDivider />
        </>
      ))}
    </div>
  );
}
