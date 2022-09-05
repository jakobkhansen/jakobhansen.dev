type Props = { length?: number };

export function Divider({ length = 64 }: Props) {
  return <div style={{ height: length }} className="w-0.5 bg-white"></div>;
}
