export async function getMonkeytypeUserData(uid: string) {
  const monkeydata = await fetch(
    `https://api.monkeytype.com/users/${uid}/profile`
  );
  return await monkeydata.json();
}

export function processMonkeytypeData(data: any) {
  return data;
}
