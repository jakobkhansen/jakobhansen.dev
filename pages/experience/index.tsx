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
    <div className="m-auto flex w-3/4 flex-col items-center justify-center">
      <TimePeriod period="2023">
        <ExperienceBox
          image={microsoftUrl}
          title="Microsoft SWE"
          date="Fall 2023 - Now"
          description="Will work at MS for 2023"
        />
      </TimePeriod>
      <TimePeriod period="2022">
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
          description="Data science"
        />
        <ExperienceBox
          image={uioUrl}
          title="University of Oslo"
          date="2021 - 2023"
          description="Master degree"
        />
      </TimePeriod>

      <TimePeriod period="2020">
        <ExperienceBox
          image={uioUrl}
          title="University of Oslo"
          date="2020 - 2022"
          description="Teaching assistant"
        />
      </TimePeriod>
      <TimePeriod period="2018">
        <ExperienceBox
          image={uioUrl}
          title="University of Oslo"
          date="2018 - 2021"
          description="Bachelor degree"
        />
      </TimePeriod>
    </div>
  );
}

export default Portfolio;
