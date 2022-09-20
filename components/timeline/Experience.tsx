import React from "react";
import { CompanyButton } from "./CompanyButton";
import { EventDivider } from "./EventDivider";

type Props = {
  Logo?: React.FC<any>;
  logo?: string;
  title?: string;
  children?: React.ReactNode;
};

export const Experience = (props: Props) => {
  return (
    <>
      <div>{<CompanyButton {...props} />}</div>
      <div
        style={{ placeSelf: "center start" }}
        className="flex max-w-2xl flex-row items-center overflow-scroll"
      >
        {React.Children.map(props.children, (child) => (
          <>
            <EventDivider />
            {child}
          </>
        ))}
      </div>
    </>
  );
};
