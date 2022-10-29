import Image from "next/image";
import { ExperienceBox } from "../../components/experience/ExperienceBox";
import { Timeline } from "../../components/timeline/Timeline";
import dataUrl from "../../public/microsoft.svg";

function Portfolio() {
  console.log(dataUrl);
  return (
    <div className="mt-16 w-1/2 lg:m-auto">
      <ExperienceBox image={dataUrl} title="Microsoft internship" />
    </div>
  );
}

export default Portfolio;
