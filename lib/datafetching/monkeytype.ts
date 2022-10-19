export function getMonkeytypeUserData(uid: string) {
  const monkeydata = fetch(`https://api.monkeytype.com/users/${uid}/profile`);
  const data = monkeydata
    .then((response) => response.json())
    .then((data) => data);
  return data;
}

export function processMonkeytypeData(data: any) {
  return data;
}
