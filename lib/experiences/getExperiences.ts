import fs, { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export type Experience = {
  filename: string;
  content: string;
  title: string;
  description: string;
  period: number;
  date: string;
  dateText: string;
  image: string;
  mdx?: any;
};
export default function getExperiences() {
  const experienceFolder = join(process.cwd(), "experiences");
  const fileNames = fs.readdirSync(experienceFolder);
  const experiences = fileNames.map((filename) => {
    const fileContent = readFileSync(join(experienceFolder, filename));
    const metadata = matter(fileContent).data;

    return {
      filename,
      content: fileContent.toString(),
      title: metadata.title,
      description: metadata.description,
      period: metadata.period,
      date: metadata.date.toString(),
      dateText: metadata.dateText,
      image: metadata.image,
    };
  });

  let experiencesPerPeriod: { [key: string]: Experience[] } = {};
  experiences.forEach((experience) => {
    if (!experiencesPerPeriod[experience.period]) {
      experiencesPerPeriod[experience.period] = [];
    }
    experiencesPerPeriod[experience.period].push(experience);
  });
  Object.keys(experiencesPerPeriod).forEach((period) => {
    experiencesPerPeriod[period] = experiencesPerPeriod[period].sort(
      (x, y) => Date.parse(x.date) - Date.parse(y.date)
    );
  });

  return experiencesPerPeriod;
}
