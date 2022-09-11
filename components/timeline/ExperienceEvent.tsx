type Props = {
  text?: string;
  period?: string;
};

export function ExperienceEvent({ text, period: date }: Props) {
  return (
    <div className="whitespace-nowrap rounded-lg border border-stark p-2 text-center">
      <p className="text-sm md:text-xl">{text}</p>
      <p className="text-xs text-textsecondary md:text-lg">{date}</p>
    </div>
  );
}
