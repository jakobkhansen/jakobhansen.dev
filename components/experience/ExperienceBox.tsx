import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  image: string;
  title?: string;
  date?: string;
  description?: string;
  onClick: () => void;
};

export function ExperienceBox({
  image,
  title,
  description,
  date,
  onClick,
}: Props) {
  return (
    <button
      className="w-56 cursor-pointer rounded-xl border border-black bg-gray-900 text-sm shadow shadow-gray-500 transition duration-300 hover:shadow-jewellight"
      onClick={() => onClick()}
    >
      <div className="rounded-t-xl bg-stark">
        <div className="flex items-center justify-center rounded-t-xl bg-stark">
          <Image
            src={image}
            width={175}
            height={100}
            objectFit="contain"
            alt={title}
          />
        </div>
      </div>
      <h3 className="w-56 whitespace-nowrap px-2">{title}</h3>
      <div className="w-56 whitespace-nowrap px-2 text-textsecondary">
        {date}
      </div>
      <div className="w-56 whitespace-nowrap px-2">{description}</div>
    </button>
  );
}
