export async function getMonkeytypeUserData(uid: string) {
  const monkeydata = fetch(`http://api.monkeytype.com/`);
  return monkeydata;
}

export function processMonkeytypeData(data: any) {
  return data;
}
