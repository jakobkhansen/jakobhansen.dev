import fs, { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "../../pages/blog";

export function getBlogPosts(): Post[] {
  const postsFolder = join(process.cwd(), "pages", "blog", "posts");
  console.log(postsFolder);
  const fileNames = fs.readdirSync(postsFolder);
  console.log(fileNames);
  let posts = fileNames.map((filename) => {
    const file = readFileSync(join(postsFolder, filename));
    const metadata = matter(file).data;

    // next cant serialize date for some reason
    return {
      filename,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      publish: metadata.publish,
    };
  });

  posts = posts.sort((a, b) => b.date - a.date);

  return posts.filter((post) => post.publish);
}
