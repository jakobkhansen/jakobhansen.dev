import Link from "next/link";
import { join } from "path";
import { Post } from "../../pages/blog";

type Props = {
  post: Post;
};

export function BlogPostLink({ post }: Props) {
  const postLink = post.filename.replace(/\.[^/.]+$/, "");
  return (
    <Link href={join("/blog/posts", postLink)}>
      <div className="blogpostcard my-4 cursor-pointer rounded-md bg-gray-900 p-2 shadow shadow-gray-500">
        <h1 className="cursor-pointer text-lg font-bold">{post.title}</h1>
        <p className="text-textsecondary">{post.date.toDateString()}</p>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}
