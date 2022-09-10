import { Divider } from "./Divider";
import Microsoft from "../../public/Microsoft.svg";
import Bekk from "../../public/bekk.svg";
import { Experience } from "./Experience";
import { ExperienceEvent } from "./ExperienceEvent";

export function Timeline() {
  return (
    <TimelineLayout>
      <Experience Logo={Microsoft} title={"Microsoft"}>
        <ExperienceEvent text="Internship 2022" />
        <ExperienceEvent text="SWE Level 60 2023" />
      </Experience>
      <Divider />
      <Experience Logo={Bekk} title={"Bekk"}>
        <ExperienceEvent text="Internship 2021" />
      </Experience>
    </TimelineLayout>
  );
}

function TimelineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ gridTemplateColumns: "min-content min-content" }}
      className="m-auto grid w-fit grid-cols-2 place-items-center"
    >
      {children}
    </div>
  );
}
