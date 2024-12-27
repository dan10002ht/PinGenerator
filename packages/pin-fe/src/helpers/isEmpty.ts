export default function isEmpty(obj: ObjectConstructor = {}) {
  return [Object, Array].includes(obj.constructor) && !Object.entries(obj).length;
}
