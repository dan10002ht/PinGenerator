export default function pickFields(obj: any, fields: string[]) {
  const res = {};
  for (const key of fields) {
    res[key] = obj[key];
  }
  return res;
}
