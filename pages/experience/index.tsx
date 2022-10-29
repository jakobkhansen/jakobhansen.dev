import Image from "next/image";
import { ExperienceBox } from "../../components/experience/ExperienceBox";
import { Timeline } from "../../components/timeline/Timeline";
import TimePeriod from "../../components/experience/TimePeriod";

import microsoftUrl from "../../public/microsoft.svg";
import bekkUrl from "../../public/bekk.svg";
import uioUrl from "../../public/uio.svg";

function Portfolio() {
  console.log(microsoftUrl);
  return (
    <div className="m-auto flex w-1/2 flex-col items-center">
      <TimePeriod period="2022">
        <ExperienceBox
          image={microsoftUrl}
          title="Microsoft internship"
          date="Summer 2022"
          description="Front-end"
        />
        <ExperienceBox
          image={microsoftUrl}
          title="Microsoft internship"
          date="Summer 2022"
          description="Front-end"
        />
        <ExperienceBox
          image={microsoftUrl}
          title="Microsoft internship"
          date="Summer 2022"
          description="Front-end"
        />
      </TimePeriod>
      <TimePeriod period="2021">
        <ExperienceBox
          image={bekkUrl}
          title="Bekk internship"
          date="Summer 2021"
          description="Data science consultant"
        />
      </TimePeriod>
      <TimePeriod period="2021">
        <ExperienceBox
          image={uioUrl}
          title="Bekk internship"
          date="Summer 2021"
          description="Data science consultant"
        />
      </TimePeriod>
    </div>
  );
}

export default Portfolio;
