export function getMonkeytypeUserData(uid: string) {
  return fetch(`https://api.monkeytype.com/users/${uid}/profile`);
}
