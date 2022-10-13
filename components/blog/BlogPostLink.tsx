import Link from "next/link";
import { join } from "path";
import { Post } from "../../pages/blog";

type Props = {
  post: Post;
};

export function BlogPostLink({ post }: Props) {
  const postLink = post.filename.replace(/\.[^/.]+$/, "");
  return (
    <div>
      <Link href={join("/blog/posts", postLink)}>{post.title}</Link>
    </div>
  );
}
