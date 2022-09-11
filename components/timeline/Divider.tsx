type Props = { length?: number };

export function Divider({ length = 64 }: Props) {
  return (
    <>
      <div
        style={{ height: length }}
        className="m-2 w-1 rounded-sm bg-white"
      ></div>
      <div></div>
    </>
  );
}
