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
        <div key={post.title}>
          <BlogPostLink post={post} />
          <PostDivider />
        </div>
      ))}
    </div>
  );
}
