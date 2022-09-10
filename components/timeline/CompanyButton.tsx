interface Props {
  Logo?: React.FC<any>;
  title?: string;
}

export const CompanyButton = ({ Logo, title }: Props) => {
  return (
    <div className="m-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-stark bg-transparent outline-none">
      <div className="h-32 w-32 rounded-full bg-stark duration-300 hover:h-36 hover:w-36">
        <div className="flex h-full w-full items-center justify-center">
          {Logo && <Logo className="m-2 h-32 w-32 text-black" />}
        </div>
      </div>
    </div>
  );
};
