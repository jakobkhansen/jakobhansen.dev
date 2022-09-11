import React from "react";
import { CompanyButton } from "./CompanyButton";
import { EventDivider } from "./EventDivider";

type Props = {
  Logo?: React.FC<any>;
  title?: string;
  children?: React.ReactNode;
};

export const Experience = ({ Logo, title, children }: Props) => {
  return (
    <>
      <div>{<CompanyButton Logo={Logo} title={title} />}</div>
      <div
        style={{ placeSelf: "center start" }}
        className="flex max-w-2xl flex-row items-center overflow-scroll"
      >
        {React.Children.map(children, (child) => (
          <>
            <EventDivider />
            {child}
          </>
        ))}
      </div>
    </>
  );
};
