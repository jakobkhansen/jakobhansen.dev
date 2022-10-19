import axios from "axios";

export async function getMonkeytypeUserData(uid: string) {
  const monkeydata = await axios.get(
    `https://api.monkeytype.com/users/${uid}/profile`
  );
  console.log("await fetch", monkeydata);
  if (monkeydata.status != 200) {
    return undefined;
  }
  return monkeydata.data;
}

export function processMonkeytypeData(data: any) {
  return data;
}
