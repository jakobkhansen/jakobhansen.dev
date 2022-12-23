import Image from "next/image";
import { ExperienceBox } from "../../components/experience/ExperienceBox";
import { Timeline } from "../../components/timeline/Timeline";
import TimePeriod from "../../components/experience/TimePeriod";
import remarkFrontmatter from "remark-frontmatter";

import microsoftUrl from "../../public/microsoft.svg";
import bekkUrl from "../../public/bekk.svg";
import uioUrl from "../../public/uio.svg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Modal from "../../components/Modal";
import getExperiences, {
  Experience,
} from "../../lib/experiences/getExperiences";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { join } from "path";
import dynamic from "next/dynamic";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { PostLayout } from "../../components/blog/PostLayout";
const images = require.context(
  "../../public/images/experiences",
  false,
  /\.svg$/
);

function Portfolio({
  experiences,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [activeExperience, setActiveExperience] = useState<
    Experience | undefined
  >(undefined);

  const openModal = (experience: Experience) => {
    setActiveExperience(experience);
  };
  function closeModal() {
    setActiveExperience(undefined);
  }

  console.log(images);
  const svgs = Object.fromEntries(
    images.keys().map((image) => [image.slice(2), images(image)])
  );

  console.log(svgs);

  return (
    <div>
      <div className="m-auto flex w-3/4 flex-col items-center justify-center">
        {Object.keys(experiences)
          .sort((x, y) => parseInt(y) - parseInt(x))
          .map((period) => {
            return (
              <TimePeriod key={period} period={period}>
                {experiences[period].map((experience) => {
                  return (
                    <ExperienceBox
                      key={experience.filename}
                      image={svgs[experience.image]}
                      title={experience.title}
                      date={experience.dateText}
                      description={experience.description}
                      onClick={() => setActiveExperience(experience)}
                    />
                  );
                })}
              </TimePeriod>
            );
          })}
      </div>
      <Modal
        isOpen={activeExperience != undefined}
        closeModal={closeModal}
        title={activeExperience?.title || ""}
      >
        <PostLayout>
          {activeExperience && <MDXRemote {...activeExperience?.mdx} />}
        </PostLayout>
      </Modal>
    </div>
  );
}

export default Portfolio;

export async function getStaticProps() {
  const data = getExperiences();
  Object.keys(data).forEach(async (period) => {
    data[period] = await Promise.all(
      data[period].map(async (experience: Experience) => {
        experience.mdx = await new Promise(async (resolve, reject) => {
          resolve(
            await serialize(experience.content, {
              mdxOptions: {
                remarkPlugins: [remarkFrontmatter],
                rehypePlugins: [],
              },
            })
          );
        });
        return experience;
      })
    );
  });
  const dataWithMdx: any = data.map;

  return {
    props: {
      experiences: data,
    },
  };
}
