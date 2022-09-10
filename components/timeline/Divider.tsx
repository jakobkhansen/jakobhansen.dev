type Props = { length?: number };

export function Divider({ length = 64 }: Props) {
  return (
    <>
      <div style={{ height: length }} className="m-2 w-0.5 bg-white"></div>
      <div></div>
    </>
  );
}
