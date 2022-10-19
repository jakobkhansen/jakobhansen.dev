export async function getMonkeytypeUserData(uid: string) {
  const monkeydata = await fetch(
    `https://api.monkeytype.com/users/${uid}/profile`
  );
  console.log("await fetch", JSON.stringify(monkeydata));
  if (!monkeydata.ok) {
    return undefined;
  }
  const json = await monkeydata.json();
  console.log("await json", json);
  return json;
}

export function processMonkeytypeData(data: any) {
  return data;
}
