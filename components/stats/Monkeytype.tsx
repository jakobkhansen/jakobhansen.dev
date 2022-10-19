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
  const { data, isLoading, status } = useFetchMonkeytypeUserData("jakobhansen");
  console.log(status);
  console.log(data);

  if (status != "success" || !data?.data?.personalBests) {
    return <h2>Monkeytype</h2>;
  }

  const personalBestsTime15: TypingScore[] = data.data.personalBests.time["15"];
  const personalBestsTime30: TypingScore[] = data.data.personalBests.time["30"];
  const personalBestsTime60: TypingScore[] = data.data.personalBests.time["60"];

  const best15 = personalBestsTime15.sort((a, b) => b.wpm - a.wpm)[0];
  const best30 = personalBestsTime15.sort((a, b) => b.wpm - a.wpm)[0];
  const best60 = personalBestsTime15.sort((a, b) => b.wpm - a.wpm)[0];

  return (
    <>
      <h2>Monkeytype records</h2>
      {isLoading && <>Loading...</>}
      <table>
        <tr key={best15.timestamp}>15 seconds: {best15.wpm} WPM</tr>
        <tr key={best30.timestamp}>30 seconds: {best30.wpm} WPM</tr>
        <tr key={best60.timestamp}>60 seconds: {best60.wpm} WPM</tr>
      </table>
    </>
  );
}
