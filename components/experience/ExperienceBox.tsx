import Image from "next/image";

type Props = {
  image: string;
  title?: string;
  date?: Date;
  description?: string;
};

export function ExperienceBox({ image, title, description, date }: Props) {
  return (
    <div className="h-30 w-20 rounded-xl border border-black bg-gray-900 text-purple-200 shadow shadow-white">
      <div className="bg-start rounded-t-xl">
        <Image
          src={image}
          className="rounded-t-xl bg-stark"
          width={300}
          height={300}
          alt={title}
        />
      </div>
      <h1 className="p-2 text-stark">{title}</h1>
    </div>
  );
}
