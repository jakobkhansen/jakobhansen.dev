import Image from "next/image";

type Props = {
  image: string;
  title?: string;
  date?: string;
  description?: string;
};

export function ExperienceBox({ image, title, description, date }: Props) {
  return (
    <div className="w-56 cursor-pointer rounded-xl border border-black bg-gray-900 text-sm shadow shadow-gray-500 transition duration-300 hover:shadow-jewellight">
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
    </div>
  );
}