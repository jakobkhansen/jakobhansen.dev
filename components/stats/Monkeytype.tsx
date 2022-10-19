type Props = {
  data: any;
};
export function Monkeytype({ data }: Props) {
  return <div>{JSON.stringify(data)}</div>;
}
