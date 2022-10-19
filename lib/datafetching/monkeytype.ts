export async function getMonkeytypeUserData(uid: string) {
  const monkeydata = fetch(`https://api.monkeytype.com/users/${uid}/profile`);
  return monkeydata;
}

export function processMonkeytypeData(data: any) {
  return data;
}
