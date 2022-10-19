import { useQuery } from "react-query";

export function useFetchMonkeytypeUserData(uid: string) {
  const monkeydata = useQuery(
    ["monkeytype", uid],
    async () =>
      await fetch(`https://api.monkeytype.com/users/${uid}/profile`).then(
        (response) => response.json()
      ),
    { staleTime: 120000 }
  );
  return monkeydata;
}

export function processMonkeytypeData(data: any) {
  return data;
}
