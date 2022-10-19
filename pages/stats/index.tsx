import { InferGetServerSidePropsType } from "next";
import {
  useFetchMonkeytypeUserData,
  processMonkeytypeData,
} from "../../lib/datafetching/monkeytype";
import StatsPage from "../../content/statspage.mdx";
import { Monkeytype } from "../../components/stats/Monkeytype";

export default function Stats() {
  return (
    <div className="mdx m-auto max-w-2xl">
      <h1>Stats</h1>
      <p>
        This is a collection of silly stats about me fetched from different APIs
      </p>
      {<Monkeytype />}
    </div>
  );
}
