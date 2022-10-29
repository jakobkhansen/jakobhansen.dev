import { PropsWithChildren } from "react";
import TimePeriodDivider from "./TimePeriodDivider";

type Props = {
  period: string;
};
export default function TimePeriod({
  period,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      <TimePeriodDivider period={period} />
      <div className="my-8 flex w-1/2 flex-col-reverse items-center gap-4 md:flex-row">
        {children}
      </div>
    </>
  );
}
