import { Bar, Tooltip, XAxis } from "recharts";
import { YAxis } from "recharts";
import { BarChart } from "recharts";
import { useFetchMonkeytypeUserData } from "../../lib/datafetching/monkeytype";

type TypingScore = {
  acc: number;
  consistency: number;
  difficulty: string;
  lazyMode: boolean;
  language: string;
  punctuation: boolean;
  raw: number;
  wpm: number;
  timestamp: number;
};

export function Monkeytype() {
  const { data, status } = useFetchMonkeytypeUserData("jakobhansen");

  if (status != "success" || !data?.data?.personalBests) {
    return <h2>Monkeytype - Typing speeds</h2>;
  }

  console.log(data);
  const personalBests: { [key: string]: TypingScore[] } =
    data.data.personalBests.time;

  const bestScores = Object.keys(personalBests).map((key) => {
    return {
      mode: key + " sec",
      score: getBestScore(personalBests[key]),
    };
  });

  console.log(bestScores);

  return (
    <>
      <h2>Monkeytype - Typing speeds</h2>
      <BarChart
        width={500}
        height={300}
        data={bestScores}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="mode" />
        <YAxis />
        <Bar dataKey="score.wpm" fill="#8884d8" barSize={60} />
        <Tooltip cursor={false} />
      </BarChart>
    </>
  );
}

function getBestScore(scores: TypingScore[]) {
  return scores.sort((a, b) => b.wpm - a.wpm)[0];
}
