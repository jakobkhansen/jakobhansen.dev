import { Bar, Tooltip, XAxis } from "recharts";
import { ResponsiveContainer } from "recharts";
import { YAxis } from "recharts";
import { BarChart } from "recharts";
import { useFetchMonkeytypeUserData } from "../../lib/datafetching/monkeytype";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import colors from "tailwindcss/colors";

const fullConfig = resolveConfig(tailwindConfig);

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

  const personalBests: { [key: string]: TypingScore[] } =
    data.data.personalBests.time;

  const bestScores = Object.keys(personalBests).map((key) => {
    return {
      mode: key + " sec",
      score: getBestScore(personalBests[key]),
    };
  });

  return (
    <>
      <h2>Monkeytype - Typing speeds</h2>
      <ResponsiveContainer width="95%" height={400} className="mt-4">
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
          <YAxis
            label={{
              value: "WPM",
              position: "insideLeft",
              angle: -90,
            }}
          />
          <Bar dataKey="score.wpm" fill="#8884d8" />
          <Tooltip
            formatter={(value, name, props) => [value, "WPM"]}
            cursor={false}
            contentStyle={{ background: "#0E0B16", borderColor: "stark" }}
            animationEasing="ease"
            wrapperStyle={{ background: "transparent" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

function getBestScore(scores: TypingScore[]) {
  return scores.sort((a, b) => b.wpm - a.wpm)[0];
}
