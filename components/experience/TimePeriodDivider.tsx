type Props = {
  period: string;
};
export default function TimePeriodDivider({ period }: Props) {
  return (
    <div className="m-auto -mb-8 w-full min-w-[14rem] max-w-[50%]">
      <div className="m-auto h-1 w-full border-t border-t-textsecondary" />
      {period}
    </div>
  );
}
