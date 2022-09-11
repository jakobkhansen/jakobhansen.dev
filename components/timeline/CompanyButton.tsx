interface Props {
  Logo?: React.FC<any>;
  title?: string;
}

export const CompanyButton = ({ Logo, title }: Props) => {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-stark bg-transparent outline-none md:h-40 md:w-40">
      <div className="h-20 w-20 rounded-full bg-stark duration-300 hover:h-36 hover:w-36 md:h-32 md:w-32">
        <div className="flex h-full w-full items-center justify-center">
          {Logo && <Logo className="m-2 h-32 w-32 text-black" />}
        </div>
      </div>
    </div>
  );
};
