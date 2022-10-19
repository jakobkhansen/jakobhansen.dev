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
  const monkeytype = getMonkeytypeUserData("JakobHansen");
  console.log(monkeytype);
  const data = await monkeytype.then((response) => response.text());
  console.log(data);

  return {
    props: {
      monkeytype: data,
    },
  };
}
