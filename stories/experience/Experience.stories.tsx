import { ExperienceBox } from "../../components/experience/ExperienceBox";
import placeholderUrl from "../../public/placeholder.svg";

export const ExperienceStory = () => {
  return (
    <ExperienceBox
      image={placeholderUrl}
      title={"Placeholder title"}
      description={"I worked at Placeholder"}
      date={new Date().toDateString()}
    />
  );
};

const config = {
  title: "Experience",
  component: ExperienceBox,
};

export default config;
