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
  console.log(monkeytype);
  const data = processMonkeytypeData(monkeytype);
  console.log(data);

  return {
    props: {
      monkeytype: data,
    },
  };
}
