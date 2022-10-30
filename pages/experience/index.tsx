import Image from "next/image";
import { ExperienceBox } from "../../components/experience/ExperienceBox";
import { Timeline } from "../../components/timeline/Timeline";
import TimePeriod from "../../components/experience/TimePeriod";

import microsoftUrl from "../../public/microsoft.svg";
import bekkUrl from "../../public/bekk.svg";
import uioUrl from "../../public/uio.svg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Modal from "../../components/Modal";
import getExperiences from "../../lib/experiences/getExperiences";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { join } from "path";
import dynamic from "next/dynamic";
import { serialize } from "next-mdx-remote/serialize";
const images = require.context("../../public", false, /\.svg$/);

function Portfolio({
  experiences,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  let [isOpen, setIsOpen] = useState(false);
  const svgs = Object.fromEntries(
    images.keys().map((image) => [image.slice(2), images(image)])
  );

  const openModal = () => {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {experiences.map((experience) => {
        return (
          <Image
            key={experience.filename}
            src={svgs[experience.image]}
            width={300}
            height={300}
            alt="fuck"
          ></Image>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className="m-auto flex w-3/4 flex-col items-center justify-center">
        <TimePeriod period="2023">
          <ExperienceBox
            image={microsoftUrl}
            title="Microsoft SWE"
            date="Fall 2023 - Now"
            description="Will work at MS for 2023"
            onClick={openModal}
          />
        </TimePeriod>
        <TimePeriod period="2022">
          <ExperienceBox
            image={microsoftUrl}
            title="Microsoft internship"
            date="Summer 2022"
            description="Front-end"
            onClick={openModal}
          />
        </TimePeriod>
        <TimePeriod period="2021">
          <ExperienceBox
            image={bekkUrl}
            title="Bekk internship"
            date="Summer 2021"
            description="Data science"
            onClick={openModal}
          />
          <ExperienceBox
            image={uioUrl}
            title="University of Oslo"
            date="2021 - 2023"
            description="Master degree"
            onClick={openModal}
          />
        </TimePeriod>

        <TimePeriod period="2020">
          <ExperienceBox
            image={uioUrl}
            title="University of Oslo"
            date="2020 - 2022"
            description="Teaching assistant"
            onClick={openModal}
          />
        </TimePeriod>
        <TimePeriod period="2018">
          <ExperienceBox
            image={uioUrl}
            title="University of Oslo"
            date="2018 - 2021"
            description="Bachelor degree"
            onClick={openModal}
          />
        </TimePeriod>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default Portfolio;

export async function getStaticProps() {
  const data = getExperiences();
  const dataWithMdx: any = data.map(async (experience: any) => {
    experience.mdx = await new Promise(async (resolve, reject) => {
      resolve(await serialize(experience.content));
    });
    return experience;
  });

  return {
    props: {
      experiences: data,
    },
  };
}
