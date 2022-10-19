export async function getMonkeytypeUserData(uid: string) {
  const monkeydata = await fetch(
    `https://api.monkeytype.com/users/${uid}/profile`
  );
  if (!monkeydata.ok) {
    return {};
  }
  console.log("await fetch", monkeydata);
  const json = await monkeydata.json();
  console.log("await json", json);
  return json;
}

export function processMonkeytypeData(data: any) {
  return data;
}
