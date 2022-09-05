import { Divider } from "./Divider";
import { Event } from "./Event";
import Microsoft from "../../public/Microsoft.svg";
import Bekk from "../../public/bekk.svg";

export function Timeline() {
  return (
    <TimelineLayout>
      <Event Logo={Microsoft} title={"Microsoft internship 2022"}>
        Software engineering internship at Microsoft Development Center in Oslo.
        Worked primarily on front-end features used in various Microsoft
        products such as Outlook and Teams, shipping code to millions of users.
        Worked with technologies such as React, React Native and Typescript.
      </Event>
      <Divider />
      <Event Logo={Bekk} title={"Bekk internship 2021"}>
        Software engineering summer internship at Bekk Consulting. Worked
        primarily with AI for Wenn, improving their computer vision services
        (CarEye). Attended many courses and workshops with Bekk, gaining insight
        into the role of a consultant, the agile process, and customer relations
        in the software industry.
      </Event>
    </TimelineLayout>
  );
}

function TimelineLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col items-center">{children}</div>;
}
