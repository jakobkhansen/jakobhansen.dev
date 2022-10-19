export async function getMonkeytypeUserData(uid: string) {
  const monkeydata = fetch(`https://catfact.ninja/fact`);
  return monkeydata;
}

export function processMonkeytypeData(data: any) {
  return data;
}
