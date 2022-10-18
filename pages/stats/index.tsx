import { InferGetServerSidePropsType } from "next";
import { getMonkeytypeUserData } from "../../lib/datafetching/monkeytype";
import StatsPage from "../../public/statspage.mdx";

export default function Stats({
  monkeytype,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(monkeytype);
  return <StatsPage monkeytype={monkeytype.data} />;
}

export async function getServerSideProps(context: any) {
  const monkeytype = getMonkeytypeUserData("JakobHansen");
  console.log(monkeytype);
  const data = await monkeytype;
  const json = await data.json();
  console.log(json);

  return {
    props: {
      monkeytype: json,
    },
  };
}
