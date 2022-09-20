import { Divider } from "./Divider";
import { Experience } from "./Experience";
import { ExperienceEvent } from "./ExperienceEvent";

export function Timeline() {
  return (
    <TimelineLayout>
      <Experience logo={"/Microsoft.svg"} title={"Microsoft"}>
        <ExperienceEvent text="Summer internship" period="2022" />
        <ExperienceEvent text="Full-time SWE" period="2023" />
      </Experience>
      <Divider />
      <Experience logo={"/bekk.svg"} title={"Bekk"}>
        <ExperienceEvent text="Summer internship" period="2021" />
      </Experience>
      <Divider />
      <Experience logo={"/uio.svg"} title={"University of Oslo"}>
        <ExperienceEvent text="Bachelor degree" period="2018 - 2021" />
        <ExperienceEvent text="Teaching assistant" period="2020 - 2022" />
        <ExperienceEvent text="Master degree" period="2021 - 2023" />
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
