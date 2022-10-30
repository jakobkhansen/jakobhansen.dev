import fs, { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function getExperiences() {
  const experienceFolder = join(process.cwd(), "experiences");
  const fileNames = fs.readdirSync(experienceFolder);
  let experiences = fileNames.map((filename) => {
    const fileContent = readFileSync(join(experienceFolder, filename));
    const metadata = matter(fileContent).data;

    return {
      filename,
      content: fileContent.toString(),
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      image: metadata.image,
    };
  });

  return experiences;
}
