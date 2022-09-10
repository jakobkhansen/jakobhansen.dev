type Props = {
  text?: string;
};

export function ExperienceEvent({ text }: Props) {
  return <div className="whitespace-nowrap">{text}</div>;
}
