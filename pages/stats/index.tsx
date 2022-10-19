import { InferGetServerSidePropsType } from "next";
import {
  getMonkeytypeUserData,
  processMonkeytypeData,
} from "../../lib/datafetching/monkeytype";
import StatsPage from "../../content/statspage.mdx";

export default function Stats({
  monkeytype,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(monkeytype);
  return <StatsPage monkeytype={monkeytype.data} />;
}

export async function getServerSideProps(context: any) {
  const monkeytype = await getMonkeytypeUserData("JakobHansen");
  const data = processMonkeytypeData(monkeytype);

  return {
    props: {
      monkeytype: data,
    },
  };
}
