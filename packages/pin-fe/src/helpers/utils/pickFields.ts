export default function pickFields<T extends Record<string, unknown>>(
  obj: T,
  fields: (keyof T)[]
): Partial<T> {
  const res: Partial<T> = {};
  for (const key of fields) {
    res[key] = obj[key];
  }
  return res;
}
