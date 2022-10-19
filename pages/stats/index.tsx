import { InferGetServerSidePropsType } from "next";
import {
  getMonkeytypeUserData,
  processMonkeytypeData,
} from "../../lib/datafetching/monkeytype";
import StatsPage from "../../content/statspage.mdx";
import { Monkeytype } from "../../components/stats/Monkeytype";

export default function Stats({
  monkeytype,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{monkeytype && <Monkeytype data={monkeytype} />}</div>;
}

export async function getServerSideProps(context: any) {
  const monkeytype = await getMonkeytypeUserData("JakobHansen");
  console.log("await getMonkeytypeUserData", monkeytype);
  const data = processMonkeytypeData(monkeytype);
  console.log("processMonkeytypeData", data);

  return {
    props: {
      monkeytype: data,
    },
  };
}
